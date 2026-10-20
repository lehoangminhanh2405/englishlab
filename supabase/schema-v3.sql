-- Chạy trong Supabase → SQL Editor: cho phép họ tên hiển thị dài tới 60 ký tự (trước đó giới hạn 30).
alter table public.profiles drop constraint if exists profiles_display_name_check;
alter table public.profiles add constraint profiles_display_name_check check (char_length(display_name) between 1 and 60);
