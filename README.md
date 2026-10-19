# EnglishLab

Web học tiếng Anh gồm hai lộ trình:

- **Tiếng Anh giao tiếp** – 20 chủ đề theo trình độ A1–A2, A2, B1, B2, C1, C2.
- **Tiếng Anh chuyên ngành Công nghệ sinh học** – 9 chủ đề (tế bào, DNA/RNA, protein–enzyme, vi sinh, kỹ thuật lab, lên men, công nghệ gen/CRISPR, GMP–QA, viết bài báo).

Mỗi chủ đề có tối thiểu 50 từ, cùng 5 mẫu câu và 1 hội thoại, gồm: Từ vựng · Thẻ nhớ SRS (Leitner) · Đặt câu · Hội thoại · Kiểm tra. Tiến độ lưu bằng `localStorage`, phát âm dùng Web Speech API của trình duyệt.

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
5. Commit và deploy lại. Chưa điền `js/config.js` thì web vẫn chạy bình thường, chỉ lưu tiến độ trên trình duyệt.

Tiến độ được gộp theo thẻ (thẻ cập nhật gần nhất thắng), nên học trên nhiều thiết bị không ghi đè lẫn nhau.

## Thêm nội dung
Sửa `js/data/giao-tiep.js` hoặc `js/data/cong-nghe-sinh-hoc.js`. Mỗi chủ đề gồm `words` (`[từ, nghĩa, ví dụ, dịch ví dụ]`), `patterns` (`[câu, dịch]`) và `dialogue` (`[người nói, câu, dịch]`).
