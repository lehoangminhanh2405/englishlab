# EnglishLab

Web học tiếng Anh gồm hai lộ trình:

- **Tiếng Anh giao tiếp** – 8 chủ đề đời sống (chào hỏi, gia đình, mua sắm, nhà hàng, du lịch, công việc, sức khỏe, thời gian).
- **Tiếng Anh chuyên ngành Công nghệ sinh học** – 9 chủ đề (tế bào, DNA/RNA, protein–enzyme, vi sinh, kỹ thuật lab, lên men, công nghệ gen/CRISPR, GMP–QA, viết bài báo).

Mỗi chủ đề có: Từ vựng · Thẻ nhớ SRS (Leitner) · Đặt câu · Hội thoại · Kiểm tra. Tiến độ lưu bằng `localStorage`, phát âm dùng Web Speech API của trình duyệt.

Web tĩnh thuần HTML/CSS/JS (ES modules), không cần build.

## Chạy thử
```bash
python3 -m http.server 8080   # rồi mở http://localhost:8080
```

## Deploy
- **Vercel**: Import repo → Framework Preset *Other*, không cần Build Command, Output Directory để trống (hoặc `.`).
- **GitHub Pages**: Settings → Pages → Source: *GitHub Actions*. Workflow `.github/workflows/pages.yml` tự deploy khi push lên `main`.

## Thêm nội dung
Sửa `js/data/giao-tiep.js` hoặc `js/data/cong-nghe-sinh-hoc.js`. Mỗi chủ đề gồm `words` (`[từ, nghĩa, ví dụ, dịch ví dụ]`), `patterns` (`[câu, dịch]`) và `dialogue` (`[người nói, câu, dịch]`).
