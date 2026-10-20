-- EnglishLab: tài khoản tự quản lý (tên đăng nhập + mật khẩu), không dùng email.
-- Chạy toàn bộ file này trong Supabase → SQL Editor → New query → Run. Chạy lại nhiều lần vẫn an toàn.
--
-- Cách bảo vệ: mọi bảng bật RLS và KHÔNG có policy, nên trình duyệt (anon key) không đọc/ghi trực tiếp được.
-- Trình duyệt chỉ gọi các hàm app_* bên dưới; các hàm này tự kiểm tra phiên đăng nhập và quyền.

create extension if not exists pgcrypto with schema extensions;

-- ---------- bảng ----------
create table if not exists public.app_accounts (
  id uuid primary key default gen_random_uuid(),
  username text not null unique check (username ~ '^[a-z0-9][a-z0-9._-]{2,29}$'),
  full_name text not null check (char_length(full_name) between 2 and 60),
  display_name text not null check (char_length(display_name) between 1 and 60),
  avatar text not null default '🙂' check (char_length(avatar) <= 8),
  role text not null default 'member' check (role in ('admin', 'member')),
  password_hash text not null,
  xp_total int not null default 0,
  xp_week int not null default 0,
  streak int not null default 0,
  progress jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.app_sessions (
  token_hash text primary key,
  account_id uuid not null references public.app_accounts (id) on delete cascade,
  expires_at timestamptz not null default now() + interval '90 days'
);

create table if not exists public.app_login_attempts (
  username text not null,
  at timestamptz not null default now()
);
create index if not exists app_login_attempts_idx on public.app_login_attempts (username, at);

create table if not exists public.app_posts (
  id bigint generated always as identity primary key,
  account_id uuid not null references public.app_accounts (id) on delete cascade,
  body text not null check (char_length(body) between 1 and 500),
  created_at timestamptz not null default now()
);

create table if not exists public.app_post_likes (
  post_id bigint not null references public.app_posts (id) on delete cascade,
  account_id uuid not null references public.app_accounts (id) on delete cascade,
  primary key (post_id, account_id)
);

create table if not exists public.app_post_saves (
  post_id bigint not null references public.app_posts (id) on delete cascade,
  account_id uuid not null references public.app_accounts (id) on delete cascade,
  primary key (post_id, account_id)
);

alter table public.app_accounts enable row level security;
alter table public.app_sessions enable row level security;
alter table public.app_login_attempts enable row level security;
alter table public.app_posts enable row level security;
alter table public.app_post_likes enable row level security;
alter table public.app_post_saves enable row level security;

revoke all on public.app_accounts, public.app_sessions, public.app_login_attempts,
  public.app_posts, public.app_post_likes, public.app_post_saves from anon, authenticated;

-- ---------- hàm nội bộ (không cho trình duyệt gọi trực tiếp) ----------
create or replace function public.app_user_json(a public.app_accounts) returns jsonb
language sql immutable as $$
  select jsonb_build_object('id', a.id, 'username', a.username, 'full_name', a.full_name,
                            'display_name', a.display_name, 'avatar', a.avatar, 'role', a.role)
$$;

create or replace function public.app_require(p_token text, p_admin boolean default false) returns public.app_accounts
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts;
begin
  select ac.* into a
  from app_sessions s join app_accounts ac on ac.id = s.account_id
  where s.token_hash = encode(digest(coalesce(p_token, ''), 'sha256'), 'hex') and s.expires_at > now();
  if a.id is null then raise exception 'unauthorized'; end if;
  if p_admin and a.role <> 'admin' then raise exception 'forbidden'; end if;
  return a;
end $$;

create or replace function public.app_new_session(p_account uuid) returns text
language plpgsql security definer set search_path = public, extensions as $$
declare t text := encode(gen_random_bytes(32), 'hex');
begin
  delete from app_sessions where expires_at < now();
  insert into app_sessions (token_hash, account_id) values (encode(digest(t, 'sha256'), 'hex'), p_account);
  return t;
end $$;

create or replace function public.app_check_new(p_username text, p_full_name text, p_password text) returns void
language plpgsql as $$
begin
  if p_username !~ '^[a-z0-9][a-z0-9._-]{2,29}$' then raise exception 'invalid_username'; end if;
  if char_length(p_full_name) < 2 or char_length(p_full_name) > 60 then raise exception 'invalid_name'; end if;
  if p_password is null or char_length(p_password) < 6 or char_length(p_password) > 72 then raise exception 'weak_password'; end if;
end $$;

revoke all on function public.app_user_json(public.app_accounts) from public, anon, authenticated;
revoke all on function public.app_require(text, boolean) from public, anon, authenticated;
revoke all on function public.app_new_session(uuid) from public, anon, authenticated;
revoke all on function public.app_check_new(text, text, text) from public, anon, authenticated;

-- ---------- đăng nhập ----------
create or replace function public.app_status() returns jsonb
language sql security definer set search_path = public as $$
  select jsonb_build_object('first', not exists (select 1 from app_accounts))
$$;

-- Không mở đăng ký: chỉ khi hệ thống chưa có ai thì cho tạo quản trị viên đầu tiên.
create or replace function public.app_register_first(p_username text, p_full_name text, p_password text) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare u text := lower(trim(coalesce(p_username, ''))); n text := regexp_replace(trim(coalesce(p_full_name, '')), '\s+', ' ', 'g'); a public.app_accounts;
begin
  perform pg_advisory_xact_lock(7001);
  if exists (select 1 from app_accounts) then raise exception 'signup_closed'; end if;
  perform app_check_new(u, n, p_password);
  if p_password = u then raise exception 'password_same_as_username'; end if;
  insert into app_accounts (username, full_name, display_name, role, password_hash)
  values (u, n, n, 'admin', crypt(p_password, gen_salt('bf', 10))) returning * into a;
  return jsonb_build_object('token', app_new_session(a.id), 'user', app_user_json(a));
end $$;

-- Trả về {error: ...} thay vì raise để lần đăng nhập sai vẫn được ghi nhận (chống dò mật khẩu).
create or replace function public.app_login(p_username text, p_password text) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare u text := lower(trim(coalesce(p_username, ''))); a public.app_accounts; fails int;
begin
  delete from app_login_attempts where at < now() - interval '1 day';
  select count(*) into fails from app_login_attempts where username = u and at > now() - interval '15 minutes';
  if fails >= 8 then return jsonb_build_object('error', 'too_many_attempts'); end if;
  select * into a from app_accounts where username = u;
  if a.id is null or a.password_hash <> crypt(coalesce(p_password, ''), a.password_hash) then
    insert into app_login_attempts (username) values (u);
    return jsonb_build_object('error', 'invalid_credentials');
  end if;
  delete from app_login_attempts where username = u;
  return jsonb_build_object('token', app_new_session(a.id), 'user', app_user_json(a));
end $$;

create or replace function public.app_logout(p_token text) returns void
language sql security definer set search_path = public, extensions as $$
  delete from app_sessions where token_hash = encode(digest(coalesce(p_token, ''), 'sha256'), 'hex')
$$;

create or replace function public.app_me(p_token text) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts;
begin
  a := app_require(p_token);
  return app_user_json(a);
exception when others then
  return null;
end $$;

create or replace function public.app_change_password(p_token text, p_old text, p_new text) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts;
begin
  a := app_require(p_token);
  if a.password_hash <> crypt(coalesce(p_old, ''), a.password_hash) then raise exception 'wrong_password'; end if;
  if p_new is null or char_length(p_new) < 6 or char_length(p_new) > 72 then raise exception 'weak_password'; end if;
  if p_new = a.username then raise exception 'password_same_as_username'; end if;
  update app_accounts set password_hash = crypt(p_new, gen_salt('bf', 10)) where id = a.id;
  delete from app_sessions where account_id = a.id and token_hash <> encode(digest(p_token, 'sha256'), 'hex');
end $$;

-- ---------- tiến độ học & hồ sơ ----------
create or replace function public.app_get_progress(p_token text) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts;
begin
  a := app_require(p_token);
  return a.progress;
end $$;

create or replace function public.app_save_progress(p_token text, p_data jsonb) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts;
begin
  a := app_require(p_token);
  if p_data is null or pg_column_size(p_data) > 1500000 then raise exception 'too_large'; end if;
  update app_accounts set progress = p_data where id = a.id;
end $$;

-- Điểm do trình duyệt gửi lên nên chỉ chặn giá trị phi lý (không chống gian lận tuyệt đối).
create or replace function public.app_save_stats(p_token text, p_xp_total int, p_xp_week int, p_streak int) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts;
begin
  a := app_require(p_token);
  update app_accounts set xp_total = least(greatest(coalesce(p_xp_total, 0), 0), 1000000),
                          xp_week = least(greatest(coalesce(p_xp_week, 0), 0), 50000),
                          streak = least(greatest(coalesce(p_streak, 0), 0), 3650)
  where id = a.id;
end $$;

create or replace function public.app_update_profile(p_token text, p_display_name text, p_avatar text) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts; n text := regexp_replace(trim(coalesce(p_display_name, '')), '\s+', ' ', 'g');
begin
  a := app_require(p_token);
  if char_length(n) < 1 or char_length(n) > 60 then raise exception 'invalid_name'; end if;
  update app_accounts set display_name = n, avatar = left(coalesce(nullif(p_avatar, ''), '🙂'), 8) where id = a.id returning * into a;
  return app_user_json(a);
end $$;

-- ---------- bảng xếp hạng ----------
create or replace function public.app_leaderboard(p_token text, p_mode text) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare me public.app_accounts; r jsonb;
begin
  me := app_require(p_token);
  select coalesce(jsonb_agg(x order by sc desc, ord), '[]'::jsonb) into r from (
    select case when p_mode = 'all' then xp_total else xp_week end as sc, created_at as ord,
           jsonb_build_object('display_name', display_name, 'avatar', avatar, 'xp_total', xp_total, 'xp_week', xp_week,
                              'streak', streak, 'me', id = me.id) as x
    from app_accounts
    where (case when p_mode = 'all' then xp_total else xp_week end) > 0
    order by 1 desc, 2 limit 50
  ) t;
  return r;
end $$;

-- ---------- cộng đồng ----------
create or replace function public.app_posts(p_token text, p_saved boolean default false) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare me public.app_accounts; r jsonb;
begin
  me := app_require(p_token);
  select coalesce(jsonb_agg(x order by ts desc), '[]'::jsonb) into r from (
    select p.created_at as ts,
           jsonb_build_object(
             'id', p.id, 'body', p.body, 'created_at', p.created_at,
             'author', ac.display_name, 'avatar', ac.avatar,
             'likes', (select count(*) from app_post_likes l where l.post_id = p.id),
             'liked', exists (select 1 from app_post_likes l where l.post_id = p.id and l.account_id = me.id),
             'saved', exists (select 1 from app_post_saves s where s.post_id = p.id and s.account_id = me.id),
             'mine', p.account_id = me.id) as x
    from app_posts p join app_accounts ac on ac.id = p.account_id
    where (not coalesce(p_saved, false)) or exists (select 1 from app_post_saves s where s.post_id = p.id and s.account_id = me.id)
    order by p.created_at desc limit 50
  ) t;
  return r;
end $$;

create or replace function public.app_create_post(p_token text, p_body text) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts; b text := trim(coalesce(p_body, ''));
begin
  a := app_require(p_token);
  if char_length(b) < 1 or char_length(b) > 500 then raise exception 'invalid_post'; end if;
  if exists (select 1 from app_posts where account_id = a.id and created_at > now() - interval '20 seconds') then raise exception 'too_fast'; end if;
  insert into app_posts (account_id, body) values (a.id, b);
end $$;

create or replace function public.app_delete_post(p_token text, p_id bigint) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts;
begin
  a := app_require(p_token);
  delete from app_posts where id = p_id and (account_id = a.id or a.role = 'admin');
end $$;

create or replace function public.app_toggle_like(p_token text, p_id bigint) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts;
begin
  a := app_require(p_token);
  if not exists (select 1 from app_posts where id = p_id) then raise exception 'not_found'; end if;
  if exists (select 1 from app_post_likes where post_id = p_id and account_id = a.id) then
    delete from app_post_likes where post_id = p_id and account_id = a.id;
  else
    insert into app_post_likes (post_id, account_id) values (p_id, a.id);
  end if;
end $$;

create or replace function public.app_toggle_save(p_token text, p_id bigint) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare a public.app_accounts;
begin
  a := app_require(p_token);
  if not exists (select 1 from app_posts where id = p_id) then raise exception 'not_found'; end if;
  if exists (select 1 from app_post_saves where post_id = p_id and account_id = a.id) then
    delete from app_post_saves where post_id = p_id and account_id = a.id;
  else
    insert into app_post_saves (post_id, account_id) values (p_id, a.id);
  end if;
end $$;

-- ---------- quản trị viên ----------
create or replace function public.app_admin_list(p_token text) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare r jsonb;
begin
  perform app_require(p_token, true);
  select coalesce(jsonb_agg(jsonb_build_object('username', username, 'full_name', full_name, 'role', role,
                                               'xp_total', xp_total, 'created_at', created_at) order by created_at), '[]'::jsonb)
  into r from app_accounts;
  return r;
end $$;

-- p_items: [{"username":"...","name":"...","password":"...","role":"member|admin"}]; mật khẩu trống = giống tên đăng nhập.
create or replace function public.app_admin_create(p_token text, p_items jsonb) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare it jsonb; u text; n text; pw text; rl text; created jsonb := '[]'::jsonb; errs jsonb := '[]'::jsonb;
begin
  perform app_require(p_token, true);
  if jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) > 200 then raise exception 'invalid_items'; end if;
  for it in select * from jsonb_array_elements(p_items) loop
    u := lower(trim(coalesce(it->>'username', '')));
    n := regexp_replace(trim(coalesce(it->>'name', '')), '\s+', ' ', 'g');
    pw := coalesce(nullif(it->>'password', ''), u);
    rl := case when it->>'role' = 'admin' then 'admin' else 'member' end;
    begin
      perform app_check_new(u, n, pw);
      if exists (select 1 from app_accounts where username = u) then raise exception 'username_taken'; end if;
      insert into app_accounts (username, full_name, display_name, role, password_hash)
      values (u, n, n, rl, crypt(pw, gen_salt('bf', 10)));
      created := created || to_jsonb(u);
    exception when others then
      errs := errs || jsonb_build_object('username', coalesce(nullif(u, ''), '(trống)'), 'error', sqlerrm);
    end;
  end loop;
  return jsonb_build_object('created', created, 'errors', errs);
end $$;

-- Đổi họ tên / vai trò / đặt lại mật khẩu cho một tài khoản (tham số nào null thì giữ nguyên).
create or replace function public.app_admin_update(p_token text, p_username text, p_full_name text default null,
                                                   p_role text default null, p_password text default null) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare me public.app_accounts; t public.app_accounts; n text;
begin
  me := app_require(p_token, true);
  select * into t from app_accounts where username = lower(trim(coalesce(p_username, '')));
  if t.id is null then raise exception 'not_found'; end if;
  if p_full_name is not null then
    n := regexp_replace(trim(p_full_name), '\s+', ' ', 'g');
    if char_length(n) < 2 or char_length(n) > 60 then raise exception 'invalid_name'; end if;
    update app_accounts set full_name = n, display_name = n where id = t.id;
  end if;
  if p_role is not null then
    if p_role not in ('admin', 'member') then raise exception 'invalid_role'; end if;
    if t.role = 'admin' and p_role = 'member' and (select count(*) from app_accounts where role = 'admin') <= 1 then raise exception 'last_admin'; end if;
    update app_accounts set role = p_role where id = t.id;
  end if;
  if p_password is not null then
    if char_length(p_password) < 6 or char_length(p_password) > 72 then raise exception 'weak_password'; end if;
    update app_accounts set password_hash = crypt(p_password, gen_salt('bf', 10)) where id = t.id;
    delete from app_sessions where account_id = t.id;
    delete from app_login_attempts where username = t.username;
  end if;
end $$;

create or replace function public.app_admin_delete(p_token text, p_username text) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare me public.app_accounts; t public.app_accounts;
begin
  me := app_require(p_token, true);
  select * into t from app_accounts where username = lower(trim(coalesce(p_username, '')));
  if t.id is null then raise exception 'not_found'; end if;
  if t.id = me.id then raise exception 'cannot_delete_self'; end if;
  delete from app_accounts where id = t.id;
end $$;

-- ---------- phân quyền gọi hàm: chỉ các hàm app_* công khai bên dưới ----------
do $$
declare f text;
begin
  foreach f in array array[
    'app_status()', 'app_register_first(text,text,text)', 'app_login(text,text)', 'app_logout(text)', 'app_me(text)',
    'app_change_password(text,text,text)', 'app_get_progress(text)', 'app_save_progress(text,jsonb)',
    'app_save_stats(text,int,int,int)', 'app_update_profile(text,text,text)', 'app_leaderboard(text,text)',
    'app_posts(text,boolean)', 'app_create_post(text,text)', 'app_delete_post(text,bigint)',
    'app_toggle_like(text,bigint)', 'app_toggle_save(text,bigint)', 'app_admin_list(text)', 'app_admin_create(text,jsonb)',
    'app_admin_update(text,text,text,text,text)', 'app_admin_delete(text,text)'
  ] loop
    execute format('revoke all on function public.%s from public', f);
    execute format('grant execute on function public.%s to anon, authenticated', f);
  end loop;
end $$;
