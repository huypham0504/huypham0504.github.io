// Services shown on /services. Text takes both languages.
export type Service = {
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  includes: { vi: string[]; en: string[] };
  tags: string[];
};

export const servicesConfig: Service[] = [
  {
    title: { vi: "Xử lý & lưu trữ hồ sơ", en: "Case-file handling" },
    description: {
      vi: "Sắp xếp, chỉnh sửa và lưu trữ hồ sơ vụ việc gọn gàng, đầy đủ để luật sư tra cứu nhanh.",
      en: "Organising, editing and archiving case files so lawyers can find what they need quickly.",
    },
    includes: {
      vi: ["Sắp xếp và lưu hồ sơ lưu trữ vụ án", "Lưu trữ hồ sơ vi bằng", "Theo dõi giấy tờ, thời hạn tố tụng"],
      en: ["Organising and archiving case files", "Archiving official-record (vi bằng) files", "Tracking documents and procedural deadlines"],
    },
    tags: ["Hồ sơ", "Lưu trữ"],
  },
  {
    title: { vi: "Soạn thảo văn bản", en: "Legal drafting" },
    description: {
      vi: "Soạn thảo các văn bản tố tụng và văn bản pháp lý dưới sự hướng dẫn của luật sư.",
      en: "Drafting procedural and legal documents under a lawyer's supervision.",
    },
    includes: {
      vi: ["Bản án, quyết định, biên bản phiên họp", "Thông báo thụ lý, giấy triệu tập đương sự", "Vi bằng"],
      en: ["Judgments, decisions and hearing minutes", "Case-acceptance notices and summonses", "Official records (vi bằng)"],
    },
    tags: ["Soạn thảo", "Tố tụng"],
  },
  {
    title: { vi: "Hỗ trợ tố tụng", en: "Procedural support" },
    description: {
      vi: "Hỗ trợ các thủ tục tố tụng và làm việc với cơ quan nhà nước.",
      en: "Supporting procedural steps and liaising with state agencies.",
    },
    includes: {
      vi: ["Tống đạt giấy tờ cho đương sự", "Gửi phiếu xác minh đến cơ quan công an", "Sẵn sàng đi công tác tỉnh"],
      en: ["Serving documents on litigants", "Sending verification requests to the police", "Open to business travel"],
    },
    tags: ["Tố tụng", "Thủ tục"],
  },
  {
    title: { vi: "Nghiên cứu pháp lý", en: "Legal research" },
    description: {
      vi: "Tìm kiếm, tổng hợp và phân tích quy định pháp luật cho từng vụ việc.",
      en: "Finding, synthesising and analysing the law relevant to each matter.",
    },
    includes: {
      vi: ["Tra cứu và tổng hợp văn bản pháp luật", "Tư duy phản biện, tổng hợp logic", "Kinh nghiệm NCKH về quyền tác giả & AI"],
      en: ["Researching and summarising legislation", "Critical and logical analysis", "Research experience on copyright & AI"],
    },
    tags: ["Nghiên cứu", "Sở hữu trí tuệ"],
  },
  {
    title: { vi: "Tư vấn & soạn đơn ly hôn", en: "Divorce petitions" },
    description: {
      vi: "Tư vấn thủ tục và soạn đơn ly hôn thuận tình hoặc đơn phương, chuẩn bị hồ sơ nộp Tòa án.",
      en: "Advising on the procedure and drafting mutual-consent or unilateral divorce petitions, ready to file with the court.",
    },
    includes: {
      vi: ["Đơn ly hôn thuận tình hoặc đơn phương", "Hồ sơ về con chung, tài sản chung, cấp dưỡng", "Hướng dẫn nộp đơn và theo dõi thụ lý"],
      en: ["Mutual-consent or unilateral divorce petitions", "Documents on child custody, marital property and support", "Guidance on filing and tracking acceptance"],
    },
    tags: ["Hôn nhân gia đình", "Ly hôn"],
  },
  {
    title: { vi: "Soạn đơn khởi kiện", en: "Statements of claim" },
    description: {
      vi: "Soạn đơn khởi kiện và chuẩn bị tài liệu, chứng cứ kèm theo cho các vụ án dân sự, kinh doanh thương mại.",
      en: "Drafting statements of claim and preparing supporting evidence for civil and commercial cases.",
    },
    includes: {
      vi: ["Đơn khởi kiện đòi nợ, đòi tài sản, bồi thường thiệt hại", "Xác định Tòa án có thẩm quyền, thời hiệu khởi kiện", "Danh mục tài liệu, chứng cứ kèm theo"],
      en: ["Claims for debts, property and damages", "Identifying the competent court and limitation period", "Indexing supporting documents and evidence"],
    },
    tags: ["Tố tụng", "Khởi kiện"],
  },
  {
    title: { vi: "Tranh chấp thừa kế", en: "Inheritance disputes" },
    description: {
      vi: "Hỗ trợ xác định di sản, người thừa kế và giải quyết tranh chấp thừa kế theo di chúc hoặc theo pháp luật.",
      en: "Helping identify the estate and heirs, and resolve inheritance disputes under a will or by law.",
    },
    includes: {
      vi: ["Xác định di sản, hàng thừa kế, kỷ phần", "Văn bản thỏa thuận phân chia di sản", "Đơn khởi kiện chia thừa kế"],
      en: ["Identifying the estate, heirs and shares", "Agreements on dividing the estate", "Statements of claim for division of inheritance"],
    },
    tags: ["Dân sự", "Thừa kế"],
  },
  {
    title: { vi: "Tranh chấp hợp đồng lao động", en: "Employment contract disputes" },
    description: {
      vi: "Hỗ trợ người lao động và doanh nghiệp giải quyết tranh chấp về hợp đồng lao động, tiền lương, sa thải.",
      en: "Helping employees and employers resolve disputes over employment contracts, wages and dismissal.",
    },
    includes: {
      vi: ["Đơn phương chấm dứt hợp đồng, sa thải trái luật", "Đòi tiền lương, trợ cấp, bảo hiểm xã hội", "Hồ sơ hòa giải và khởi kiện tranh chấp lao động"],
      en: ["Unilateral termination and unlawful dismissal", "Claims for wages, allowances and social insurance", "Mediation and court filings for labour disputes"],
    },
    tags: ["Lao động", "Tranh chấp"],
  },
];
