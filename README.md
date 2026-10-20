# EnglishLab

Web học tiếng Anh gồm hai lộ trình:

- **Tiếng Anh giao tiếp** – 20 chủ đề theo trình độ A2, B1, B2, C1, C2.
- **Tiếng Anh chuyên ngành Công nghệ sinh học** – 21 chủ đề (tế bào, DNA/RNA, protein–enzyme, động vật, thực vật, hóa sinh, vi sinh, miễn dịch, virus, nuôi cấy tế bào, kỹ thuật lab, an toàn lab, lên men, công nghệ gen, tin sinh học, y dược, nông nghiệp–thực phẩm, môi trường, thống kê, GMP–QA, viết bài báo).

Mỗi chủ đề có tối thiểu 50 từ, 5 mẫu câu, 1 hội thoại và 1 bài đọc, gồm 8 phần: Từ vựng · Thẻ nhớ SRS (Leitner) · Đặt câu · Hội thoại · Nghe · Nghe điền từ · Đọc hiểu · Kiểm tra.

Tính năng chung: lộ trình mở khóa tuần tự (đạt ≥70% bài kiểm tra), nhấp đúp vào từ tiếng Anh để tra nhanh (phiên âm, nghĩa, đồng nghĩa, giọng Mỹ/Anh) và thêm vào **Giỏ từ**, bảng **IPA** kèm bài nghe phân biệt, điểm XP, bảng xếp hạng, cộng đồng, hồ sơ cá nhân. Tiến độ lưu bằng `localStorage`, phát âm dùng Web Speech API của trình duyệt.

Web tĩnh thuần HTML/CSS/JS (ES modules), không cần build.

## Chạy thử
```bash
python3 -m http.server 8080   # rồi mở http://localhost:8080
```

## Deploy
- **Vercel**: Import repo → Framework Preset *Other*, không cần Build Command, Output Directory để trống (hoặc `.`).
- **GitHub Pages**: Settings → Pages → Source: *GitHub Actions*. Workflow `.github/workflows/pages.yml` tự deploy khi push lên `main`.

## Đăng nhập & đồng bộ (Supabase)
1. Tạo dự án miễn phí tại supabase.com.
2. SQL Editor → chạy nội dung `supabase/schema.sql` (tạo bảng `user_progress` có Row Level Security: mỗi người chỉ đọc/ghi dữ liệu của mình).
3. Project Settings → API: chép **Project URL** và khóa **anon public** vào `js/config.js`.
4. Authentication → URL Configuration: thêm địa chỉ Vercel và GitHub Pages của bạn vào *Site URL / Redirect URLs*.
5. Chạy tiếp `supabase/schema-v2.sql` trong SQL Editor để bật hồ sơ, **bảng xếp hạng** và **cộng đồng**.
6. Commit và deploy lại. Chưa điền `js/config.js` thì web vẫn chạy bình thường, chỉ lưu tiến độ trên trình duyệt.

Tiến độ được gộp theo thẻ (thẻ cập nhật gần nhất thắng), nên học trên nhiều thiết bị không ghi đè lẫn nhau.

## Thêm nội dung
Sửa `js/data/giao-tiep.js` hoặc `js/data/cong-nghe-sinh-hoc.js`. Mỗi chủ đề gồm `words` (`[từ, nghĩa, ví dụ, dịch ví dụ]`), `patterns` (`[câu, dịch]`) và `dialogue` (`[người nói, câu, dịch]`).

## Nguồn dữ liệu bên ngoài
Tra từ nhanh gọi `dictionaryapi.dev` (phiên âm, định nghĩa, đồng nghĩa, âm thanh) và `api.mymemory.translated.net` (dịch từ không có trong kho từ của web); kết quả được lưu đệm trong trình duyệt. Nếu các dịch vụ này lỗi, phần tra từ chỉ thiếu thông tin chứ web vẫn chạy.

## Kiểm duyệt cộng đồng
Bài viết do người dùng đăng, hiển thị công khai. Quản trị viên có thể xóa bài vi phạm trong Supabase → Table Editor → `posts`.

## Định nghĩa từ vựng
`js/data/defs-giao-tiep.js` và `js/data/defs-cnsh.js` chứa định nghĩa tiếng Anh đơn giản do tác giả tự soạn (mỗi dòng `từ = định nghĩa`, dòng `topicId|từ = ...` dùng khi một từ có nghĩa khác theo chủ đề). Web **không** sao chép nội dung của Cambridge Dictionary vì có bản quyền; mỗi từ có liên kết mở trang Cambridge để đối chiếu. Muốn dùng dữ liệu Cambridge chính thức, cần đăng ký Cambridge Dictionary API (có giấy phép) rồi thay nguồn trong `js/defs.js`.

## Tài khoản: tên đăng nhập, họ và tên, mật khẩu
Người dùng tạo tài khoản bằng **tên đăng nhập** (3–20 ký tự: chữ thường không dấu, số, `.` hoặc `_`), **họ và tên đầy đủ** và **mật khẩu** (≥ 6 ký tự). Không cần email.

Supabase bắt buộc mỗi tài khoản có email, nên web tự ghép `<tên đăng nhập>@<USERNAME_EMAIL_DOMAIN>` (xem `js/config.js`) làm email nội bộ; người dùng không thấy và không nhận email nào. Vì vậy:
1. Supabase → **Authentication → Providers → Email**: **tắt "Confirm email"** (bắt buộc), nếu không sẽ không tạo được tài khoản.
2. Nếu Supabase báo email không hợp lệ, đổi `USERNAME_EMAIL_DOMAIN` sang một tên miền thật mà bạn sở hữu.
3. Chạy `supabase/schema-v3.sql` một lần để họ tên được dài tới 60 ký tự.
4. Không có "quên mật khẩu" bằng email. Người đã đăng nhập tự đổi mật khẩu ở Hồ sơ. Quản trị viên đặt lại mật khẩu cho người quên bằng SQL Editor (đổi `ten.dang.nhap@gmail.com` và mật khẩu mới cho đúng):
   ```sql
   update auth.users set encrypted_password = crypt('mat-khau-moi', gen_salt('bf')) where email = 'ten.dang.nhap@gmail.com';
   ```
5. Tài khoản tạo bằng email thật từ trước vẫn đăng nhập được: gõ nguyên địa chỉ email vào ô "Tên đăng nhập".
