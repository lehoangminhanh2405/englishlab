-- Chạy trong Supabase → SQL Editor. Mỗi người dùng có đúng một dòng tiến độ, chỉ chính họ đọc/ghi được.
create table if not exists public.user_progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_progress enable row level security;

create policy "đọc tiến độ của mình" on public.user_progress
  for select using (auth.uid() = user_id);
create policy "thêm tiến độ của mình" on public.user_progress
  for insert with check (auth.uid() = user_id);
create policy "sửa tiến độ của mình" on public.user_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
