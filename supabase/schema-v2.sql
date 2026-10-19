-- Chạy trong Supabase → SQL Editor SAU schema.sql. Thêm hồ sơ, bảng xếp hạng và cộng đồng.
create table if not exists public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default 'Học viên' check (char_length(display_name) between 1 and 30),
  avatar text not null default '🙂' check (char_length(avatar) <= 8),
  xp_total int not null default 0,
  xp_week int not null default 0,
  streak int not null default 0,
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "ai cũng xem được hồ sơ" on public.profiles for select using (true);
create policy "tự tạo hồ sơ" on public.profiles for insert with check (auth.uid() = user_id);
create policy "tự sửa hồ sơ" on public.profiles for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table if not exists public.posts (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles (user_id) on delete cascade,
  body text not null check (char_length(body) between 1 and 500),
  created_at timestamptz not null default now()
);
alter table public.posts enable row level security;
create policy "ai cũng đọc được bài viết" on public.posts for select using (true);
create policy "đăng bài bằng tài khoản của mình" on public.posts for insert with check (auth.uid() = user_id);
create policy "xóa bài của mình" on public.posts for delete using (auth.uid() = user_id);

create table if not exists public.post_likes (
  post_id bigint not null references public.posts (id) on delete cascade,
  user_id uuid not null references public.profiles (user_id) on delete cascade,
  primary key (post_id, user_id)
);
alter table public.post_likes enable row level security;
create policy "ai cũng thấy lượt thích" on public.post_likes for select using (true);
create policy "thích bài" on public.post_likes for insert with check (auth.uid() = user_id);
create policy "bỏ thích" on public.post_likes for delete using (auth.uid() = user_id);

create table if not exists public.post_saves (
  post_id bigint not null references public.posts (id) on delete cascade,
  user_id uuid not null references public.profiles (user_id) on delete cascade,
  primary key (post_id, user_id)
);
alter table public.post_saves enable row level security;
create policy "xem bài đã lưu của mình" on public.post_saves for select using (auth.uid() = user_id);
create policy "lưu bài" on public.post_saves for insert with check (auth.uid() = user_id);
create policy "bỏ lưu bài" on public.post_saves for delete using (auth.uid() = user_id);
