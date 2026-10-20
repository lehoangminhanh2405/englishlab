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

## Tài khoản & đồng bộ (Supabase)
Tài khoản gồm **tên đăng nhập, họ và tên, mật khẩu** (không dùng email). Web **không mở đăng ký công khai**, giống web xếp lịch cầu lông: tài khoản đầu tiên tự thành quản trị viên, sau đó quản trị viên cấp tài khoản cho người khác.

Cài đặt một lần:
1. Tạo dự án miễn phí tại supabase.com.
2. SQL Editor → New query → dán toàn bộ `supabase/schema.sql` → **Run**. Chạy lại nhiều lần vẫn an toàn.
3. Project Settings → API: chép **Project URL** (dạng `https://xxxx.supabase.co`, không phải địa chỉ trang dashboard) và khóa **anon public** vào `js/config.js`. Không dùng khóa `service_role`.
4. Deploy, rồi **mở web và tạo tài khoản quản trị viên ngay** (trang Đăng nhập tự hiện form "Tạo tài khoản quản trị viên" khi hệ thống còn trống). Ai tạo trước sẽ là quản trị viên, nên làm ngay sau khi deploy.
5. Vào **Quản trị** (nút trên thanh đầu trang) để cấp tài khoản: mỗi dòng `tên đăng nhập, Họ và tên, [mật khẩu], [admin]`. Mật khẩu để trống thì bằng tên đăng nhập; nên nhắc người dùng đổi ở Hồ sơ.

Chưa điền `js/config.js` thì web vẫn chạy, chỉ lưu tiến độ trên trình duyệt.

Cách bảo vệ: mọi bảng bật RLS và không có policy, trình duyệt chỉ gọi các hàm `app_*` trong `schema.sql`. Mật khẩu băm bcrypt, phiên đăng nhập là mã ngẫu nhiên lưu dạng băm SHA-256 (hết hạn sau 90 ngày), đăng nhập sai 8 lần trong 15 phút sẽ bị khóa tạm. Quản trị viên đặt lại mật khẩu cho người quên ngay trên trang Quản trị. Điểm XP trên bảng xếp hạng do trình duyệt gửi lên nên không chống gian lận tuyệt đối.

## Thêm nội dung
Sửa `js/data/giao-tiep.js` hoặc `js/data/cong-nghe-sinh-hoc.js`. Mỗi chủ đề gồm `words` (`[từ, nghĩa, ví dụ, dịch ví dụ]`), `patterns` (`[câu, dịch]`) và `dialogue` (`[người nói, câu, dịch]`).

## Nguồn dữ liệu bên ngoài
Tra từ nhanh gọi `dictionaryapi.dev` (phiên âm, định nghĩa, đồng nghĩa, âm thanh) và `api.mymemory.translated.net` (dịch từ không có trong kho từ của web); kết quả được lưu đệm trong trình duyệt. Nếu các dịch vụ này lỗi, phần tra từ chỉ thiếu thông tin chứ web vẫn chạy.

## Kiểm duyệt cộng đồng
Bài viết do người dùng đăng, hiển thị công khai. Quản trị viên xóa được mọi bài viết ngay trong trang Cộng đồng.

## Định nghĩa từ vựng
`js/data/defs-giao-tiep.js` và `js/data/defs-cnsh.js` chứa định nghĩa tiếng Anh đơn giản do tác giả tự soạn (mỗi dòng `từ = định nghĩa`, dòng `topicId|từ = ...` dùng khi một từ có nghĩa khác theo chủ đề). Web **không** sao chép nội dung của Cambridge Dictionary vì có bản quyền; mỗi từ có liên kết mở trang Cambridge để đối chiếu. Muốn dùng dữ liệu Cambridge chính thức, cần đăng ký Cambridge Dictionary API (có giấy phép) rồi thay nguồn trong `js/defs.js`.
