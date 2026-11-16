// Office & research tools shown on /tools. Text takes both languages.
export type OfficeSkill = {
  title: { vi: string; en: string };
  level: { vi: string; en: string };
  description: { vi: string; en: string };
  includes: { vi: string[]; en: string[] };
};

export const officeSkillsConfig: OfficeSkill[] = [
  {
    title: { vi: "Microsoft Word", en: "Microsoft Word" },
    level: { vi: "Thành thạo", en: "Advanced" },
    description: {
      vi: "Soạn thảo và trình bày văn bản pháp lý chuẩn thể thức, gọn gàng, dễ rà soát.",
      en: "Drafting and formatting legal documents that are clean, consistent and easy to review.",
    },
    includes: {
      vi: [
        "Trình bày văn bản đúng thể thức (Nghị định 30/2020/NĐ-CP): phông chữ, căn lề, giãn dòng, quốc hiệu – tiêu ngữ",
        "Dùng Styles, đánh số điều khoản tự động (Multilevel List) và tạo mục lục tự động cho hợp đồng, đơn từ dài",
        "Rà soát hợp đồng bằng Track Changes, Comments; so sánh hai phiên bản bằng Compare",
        "Mail Merge để tạo hàng loạt thông báo, giấy mời (ví dụ: thông báo gửi chủ nợ, giấy mời họp)",
        "Header/Footer, đánh số trang, ngắt Section, bảng biểu và chú thích cuối trang",
      ],
      en: [
        "Formatting documents to Vietnamese administrative standards (Decree 30/2020/ND-CP)",
        "Styles, automatic clause numbering (Multilevel List) and auto-generated tables of contents",
        "Reviewing contracts with Track Changes and Comments; comparing versions with Compare",
        "Mail Merge for batch notices and invitations (e.g. creditor notices, meeting invitations)",
        "Headers/footers, page numbering, section breaks, tables and footnotes",
      ],
    },
  },
  {
    title: { vi: "Microsoft Excel", en: "Microsoft Excel" },
    level: { vi: "Thành thạo", en: "Advanced" },
    description: {
      vi: "Lập bảng theo dõi, tổng hợp số liệu để quản lý vụ việc và hồ sơ chính xác.",
      en: "Building trackers and summaries to manage matters and records accurately.",
    },
    includes: {
      vi: [
        "Lập danh sách chủ nợ, bảng tổng hợp khoản nợ trong vụ việc phá sản",
        "Theo dõi tiến độ vụ việc, thời hạn tố tụng; cảnh báo hạn bằng Conditional Formatting",
        "Hàm thông dụng: SUM/SUMIFS, COUNTIFS, IF, VLOOKUP/XLOOKUP, hàm ngày tháng để tính thời hạn",
        "Lọc, sắp xếp, PivotTable để tổng hợp và báo cáo nhanh",
        "Data Validation, khóa ô và định dạng bảng để in ấn, nộp hồ sơ",
      ],
      en: [
        "Creditor lists and debt summaries for bankruptcy cases",
        "Tracking case progress and procedural deadlines, with Conditional Formatting alerts",
        "Common functions: SUM/SUMIFS, COUNTIFS, IF, VLOOKUP/XLOOKUP and date functions for deadlines",
        "Filtering, sorting and PivotTables for quick summaries and reports",
        "Data Validation, protected cells and print-ready table layouts",
      ],
    },
  },
  {
    title: { vi: "PDF & Google Workspace", en: "PDF & Google Workspace" },
    level: { vi: "Sử dụng tốt", en: "Proficient" },
    description: {
      vi: "Số hóa, sắp xếp và chia sẻ hồ sơ, tài liệu với luật sư và khách hàng.",
      en: "Digitising, organising and sharing files with lawyers and clients.",
    },
    includes: {
      vi: [
        "Gộp, tách, xoay trang, đánh số trang PDF cho bộ hồ sơ nộp Tòa án",
        "Chuyển đổi PDF ↔ Word, scan tài liệu và nhận dạng chữ (OCR)",
        "Google Drive, Docs, Sheets: lưu trữ, phân quyền và cùng chỉnh sửa hồ sơ",
        "Gmail, Google Calendar: trao đổi công việc và nhắc lịch phiên họp",
      ],
      en: [
        "Merging, splitting, rotating and page-numbering PDFs for court filings",
        "PDF ↔ Word conversion, scanning and OCR",
        "Google Drive, Docs and Sheets: storing, sharing and co-editing files",
        "Gmail and Google Calendar for correspondence and hearing reminders",
      ],
    },
  },
  {
    title: { vi: "Tra cứu pháp lý", en: "Legal research tools" },
    level: { vi: "Thường xuyên sử dụng", en: "Daily use" },
    description: {
      vi: "Tra cứu nhanh văn bản pháp luật, bản án và thông tin doanh nghiệp cho từng vụ việc.",
      en: "Quickly finding legislation, judgments and company information for each matter.",
    },
    includes: {
      vi: [
        "Thư Viện Pháp Luật, Cơ sở dữ liệu quốc gia về văn bản pháp luật (vbpl.vn)",
        "Cổng thông tin công bố bản án, quyết định của Tòa án",
        "Cổng thông tin quốc gia về đăng ký doanh nghiệp để xác minh thông tin công ty",
        "Tổng hợp kết quả tra cứu thành bảng, ghi chú gửi luật sư",
      ],
      en: [
        "Thu Vien Phap Luat and the national legal-document database (vbpl.vn)",
        "The courts' public judgment portal",
        "The national business registration portal for company checks",
        "Summarising findings into tables and memos for lawyers",
      ],
    },
  },
];
