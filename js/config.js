// Điền thông tin dự án Supabase để bật đăng nhập và đồng bộ tiến độ (xem README).
// Để trống thì web chỉ lưu tiến độ trên trình duyệt. Khóa "anon" là khóa công khai, được phép để trong mã nguồn.
export const SUPABASE_URL = 'https://ycmkyhzvqlmlcnishbyw.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbWt5aHp2cWxtbGNuaXNoYnl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzNzk2NTAsImV4cCI6MjEwNzk1NTY1MH0.w0sI2Lqonl7hiFDc5y_OMylyAinJtojXhxm0Ev4fils';

// Tài khoản đăng nhập bằng tên đăng nhập: web tự ghép "<tên đăng nhập>@<tên miền này>" làm email nội bộ cho Supabase.
// Người dùng không thấy và không nhận email nào (cần TẮT "Confirm email" trong Supabase). Nếu Supabase báo email không hợp lệ,
// hãy đổi sang một tên miền thật mà bạn sở hữu.
export const USERNAME_EMAIL_DOMAIN = 'gmail.com';
