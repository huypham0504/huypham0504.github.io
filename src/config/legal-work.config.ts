type LegalWork = {
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  examples: { vi: string[]; en: string[] };
};

export const legalWorkConfig: LegalWork[] = [
  {
    title: { vi: "Tố tụng dân sự và hợp đồng", en: "Civil litigation and contracts" },
    description: {
      vi: "Hỗ trợ luật sư tại Công ty Luật TNHH Quang Minh Tuệ trong các vụ việc dân sự và công việc liên quan đến hợp đồng.",
      en: "Supported lawyers at Quang Minh Tue Law Firm with civil matters and contract work.",
    },
    examples: {
      vi: ["Soạn thảo và rà soát hợp đồng, văn bản pháp lý", "Hỗ trợ soạn đơn khởi kiện và chuẩn bị chứng cứ", "Theo dõi thời hạn tố tụng và văn bản của Tòa án"],
      en: ["Drafted and reviewed contracts and legal documents", "Helped draft statements of claim and prepare evidence", "Tracked procedural deadlines and court documents"],
    },
  },
  {
    title: { vi: "Phục hồi, phá sản doanh nghiệp", en: "Corporate restructuring and bankruptcy" },
    description: {
      vi: "Hỗ trợ Quản tài viên xử lý hồ sơ và làm việc với chủ nợ trong các vụ việc phá sản doanh nghiệp.",
      en: "Assisted an insolvency administrator with case files and communications with creditors in corporate bankruptcy cases.",
    },
    examples: {
      vi: ["Tiếp nhận, đối chiếu hồ sơ khoản nợ", "Hỗ trợ lập danh sách chủ nợ", "Chuẩn bị tài liệu cho Hội nghị chủ nợ"],
      en: ["Received and checked claim documentation", "Helped compile creditor lists", "Prepared materials for creditors' meetings"],
    },
  },
  {
    title: { vi: "Hồ sơ tòa án và vi bằng", en: "Court files and bailiff records" },
    description: {
      vi: "Thực tập tại Tòa án Nhân dân Quận Tân Bình và Văn phòng Thừa phát lại Sài Gòn – Thủ Đức.",
      en: "Interned at the People's Court of Tan Binh District and the Saigon – Thu Duc Bailiff Office.",
    },
    examples: {
      vi: ["Sắp xếp, lưu trữ hồ sơ vụ án và hồ sơ vi bằng", "Hỗ trợ soạn văn bản tố tụng", "Hỗ trợ Thừa phát lại lập vi bằng"],
      en: ["Organised and archived court files and bailiff records", "Helped draft procedural documents", "Assisted the bailiff in preparing official records"],
    },
  },
  {
    title: { vi: "Nghiên cứu pháp lý", en: "Legal research" },
    description: {
      vi: "Thực hiện đề tài nghiên cứu khoa học về bảo hộ quyền tác giả đối với sản phẩm do AI tạo ra.",
      en: "Worked on a university research project on copyright protection for AI-generated works.",
    },
    examples: {
      vi: ["Tra cứu và tổng hợp tài liệu pháp lý", "Phân tích quy định về quyền tác giả", "Trình bày kết quả trong báo cáo nghiên cứu"],
      en: ["Researched and summarised legal sources", "Analysed copyright rules", "Presented findings in a research report"],
    },
  },
];
