# Hướng dẫn tự cập nhật & đăng portfolio (huypham0504.github.io)

Site là Next.js xuất tĩnh (`output: "export"`), đẩy lên GitHub là **tự build và tự đăng** lên GitHub Pages tại https://huypham0504.github.io. Muốn dùng tên miền riêng thì thêm file `public/CNAME` chứa tên miền đó.

## 1. Sửa cái gì ở đâu

| Muốn sửa | File |
|---|---|
| Thêm / sửa dự án, nghiên cứu, hoạt động | `content/projects/<ten-du-an>/index.mdx` (EN) và `index.vi.mdx` (VI) |
| Ảnh của dự án | để chung thư mục: `content/projects/<ten-du-an>/cover.png` |
| Tên, mô tả SEO | `src/config/site.config.ts` |
| Nút liên hệ (điện thoại, email, Facebook, GitHub) ở trang chủ | `src/config/portfolio.config.ts` |
| Đoạn giới thiệu ở trang chủ | `src/i18n/index.ts` → `hero.bio` (cả bản `en` và `vi`) |
| Trang Liên hệ | `src/views/contact.tsx` |
| Trang Nghiệp vụ pháp lý (`/services`) | `src/config/legal-work.config.ts` |
| Trang Experience | `src/config/experience.config.ts` |
| Danh sách kỹ năng (trang chủ) | `src/config/skills.config.ts` |
| Trang /cv (bản web của CV) | `src/config/resume.config.ts` |
| Menu trên cùng | `src/config/navbar.config.ts` |
| File CV PDF (nút "View CV") | `public/pham-quoc-huy-cv.pdf` — thay file mới, **giữ nguyên tên** |

## Song ngữ (Việt mặc định, Anh ở /en)

- Tiếng Việt ở đường dẫn gốc (`/`, `/experience`, `/projects/...`, `/cv`); tiếng Anh thêm `/en` phía trước (`/en`, `/en/experience`...). Nút **EN / VI** góc trên chuyển qua lại đúng trang tương ứng.
- Mỗi dự án có 2 file trong cùng thư mục: `index.mdx` (tiếng Anh) và `index.vi.mdx` (tiếng Việt), dùng chung ảnh. Thêm dự án mới thì tạo cả hai file, phần đầu (`date`, `tags`, `links`, `image`...) giữ giống nhau, chỉ dịch `title`/`description` và nội dung.
- Chữ giao diện (menu, nút, tiêu đề mục): `src/i18n/index.ts`.
- Experience tiếng Việt: `src/config/vi/experience.config.ts`; CV web tiếng Việt: `src/config/vi/resume.config.ts`. Bản tiếng Anh vẫn ở `src/config/experience.config.ts` và `src/config/resume.config.ts`.
- Tiêu đề & mô tả SEO tiếng Việt, tên kỹ năng tiếng Việt: `src/config/localized.ts`.

## Blog & Tool

- **Viết bài blog:** xem mục "Viết bài blog mới" ngay bên dưới.
- **Thêm tool:** sửa `src/config/tools.config.ts`, thêm một object vào `toolsConfig`:

```ts
{
  name: "WP Auto Poster",
  description: { vi: "Tự động đăng bài lên WordPress từ Google Sheets.", en: "Auto-publish WordPress posts from Google Sheets." },
  status: "building", // hoặc "done"
  tags: ["Python", "WordPress REST API"],
  links: [{ name: "GitHub", url: "https://github.com/huypham0504/wp-auto-poster" }],
},
```

## Viết bài blog mới

1. Tạo thư mục `content/blogs/<duong-dan-bai>/` (không dấu, nối bằng gạch ngang — đây cũng là đường dẫn của bài).
2. Tạo `index.vi.mdx` (tiếng Việt) và `index.mdx` (tiếng Anh, có thể bỏ nếu không cần). Phần đầu file:

```md
---
title: "Tiêu đề bài"
description: "Mô tả 1–2 câu, hiện ở danh sách blog và trên Google."
date: "2026-10-16T21:00:00+07:00"
tags: ["WordPress", "SEO"]
category: "WordPress"
image: "./cover.png"
---
```

3. **Danh mục (`category`)** — dùng đúng tên đã có để gom nhóm: `WordPress`, `WooCommerce`, `Tốc độ & SEO`, `Crawl dữ liệu`, `Bảo trì & Bảo mật`, `AI`, `Next.js`. Gõ tên mới thì nút lọc danh mục mới tự xuất hiện. Bản tiếng Anh dùng **cùng tên danh mục** với bản tiếng Việt.
4. **Ngày (`date`)** quyết định thứ tự: bài mới nhất lên đầu. Thêm giờ (như trên) nếu có 2 bài cùng ngày.
5. **Ảnh bìa:** `cover.png` 1600×900 (16:9) đặt cùng thư mục bài. Tất cả bài đang dùng chung một kiểu ảnh bìa (nhãn danh mục màu, tiêu đề ngắn, icon) — giữ kiểu này cho đồng bộ.
6. **Ảnh trong bài:** đặt file cùng thư mục rồi viết `![mô tả](./ten-anh.webp)`. Bấm vào ảnh bìa sẽ xem lớn.
7. Nội dung hỗ trợ bảng, khối code (```php, ```bash…), checklist (`- [ ] việc cần làm`).
8. Ẩn bài nháp: thêm `published: false`.

## Logo & thương hiệu

- Logo: `public/brand/hp-icon.svg` (icon vuông xanh "HP"), favicon `public/brand/hp-favicon.svg`, PNG lớn `icon-512.png`.
- Favicon của site: `public/favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png` — khai báo trong `src/app/layout.tsx`.
- Các tool (File Converter, File Compressor, PDF Cutter, QR Generator, Image Resizer) chép thư mục `brand/` này vào repo riêng của từng tool.
- Màu chính: xanh `#2563eb`; nút chính dùng nền chuyển màu `#3b82f6 → #2563eb`.

## Trang 404 & RSS

- Trang 404: `src/app/not-found.tsx` (xuất thành `404.html`, GitHub Pages tự dùng khi không tìm thấy trang).
- RSS: `/rss.xml` — nút RSS ở phần giới thiệu (máy tính) và cuối menu ☰ (điện thoại).

## 2. Chạy thử trên máy (lần đầu)

```bash
cd ~/Workspace/huypham0504.github.io
corepack enable
yarn install
yarn dev
```

Mở http://localhost:3000 để xem. Sửa file nào thì trang tự cập nhật. Tắt bằng `Ctrl + C`.

## 3. Thêm một dự án mới

Mỗi dự án là **một thư mục** chứa nội dung và ảnh:

```
content/projects/
└── ten-du-an-moi/        # tên thư mục = đường dẫn /projects/ten-du-an-moi
    ├── index.mdx         # nội dung dự án
    ├── cover.png        # ảnh bìa (nên khoảng 1200×630)
    └── showcase.webp     # ảnh thêm (nếu có)
```

1. Copy nguyên thư mục một dự án có sẵn, ví dụ `content/projects/nckh-quyen-tac-gia-ai/` → đổi tên thành `ten-du-an-moi/` (chữ thường, không dấu, nối bằng `-`).
2. Thay `cover.png` bằng ảnh của dự án mới.
3. Sửa phần đầu file (giữa hai dòng `---`):

```yaml
---
title: "Tên dự án"
description: "Một câu mô tả ngắn, hiện trên thẻ dự án."
date: "2026-10-01"
priority: 5            # số càng nhỏ càng hiện trước (site đang chạy xếp trước)
tags: ["WordPress", "WooCommerce", "Puramu"]
links: [
  {
    name: "Website",
    url: "https://ten-mien.com/",
  },
]
image: "./cover.png"
---
```

- `title`, `description`, `image`, `links` là **bắt buộc**. Dự án không có link thì để `links: []`.
- Thêm `sortLast: true` nếu muốn dự án nằm cuối danh sách (vd site đã ngừng chạy).

4. Muốn chèn thêm ảnh trong bài: bỏ ảnh vào cùng thư mục rồi viết `![Mô tả](./ten-anh.webp)`.
5. Bên dưới phần `---` viết nội dung bằng Markdown (giống các file cũ: `## Overview`, gạch đầu dòng Client / Type / Year / Role / Live…).

## 4. Kiểm tra trước khi đăng

```bash
yarn build
```

Chạy xong không báo lỗi (có thư mục `out/`) là ổn. Lỗi hay gặp:
- Thiếu `image` hoặc sai tên ảnh → ảnh phải nằm cùng thư mục và ghi `./ten-anh.webp`.
- Thiếu `links` → thêm `links: []`.
- Quên dấu `"` hoặc dấu `,` trong phần đầu file.

## 5. Đăng lên (deploy)

```bash
git add -A
git commit -m "content: thêm dự án Tên dự án"
git push origin main
```

GitHub tự chạy workflow **"Deploy Next.js site to Pages"** (file `.github/workflows/nextjs.yml`), khoảng 2–4 phút. Xem tiến độ ở tab **Actions**:
https://github.com/huypham0504/huypham0504.github.io/actions

- Dấu ✅ xanh: đã lên, mở https://huypham0504.github.io (nhấn `Cmd + Shift + R` nếu chưa thấy thay đổi).
- Dấu ❌ đỏ: bấm vào để xem log. Hay gặp nhất là lỗi `yarn install --frozen-lockfile` khi có cài thêm gói: chạy `yarn install` trên máy rồi commit luôn file `yarn.lock`.
