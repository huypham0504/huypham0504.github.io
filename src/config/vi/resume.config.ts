import { resumeConfig } from "@/config/resume.config";

// Vietnamese content for the web /cv page
export const resumeConfigVi: typeof resumeConfig = {
  name: "Phạm Quốc Huy",
  title: "Trợ lý Luật sư",
  summary:
    "Cử nhân Luật Tài chính – Ngân hàng (UEL) với gần 1,5 năm kinh nghiệm làm Trợ lý Luật sư tại Công ty Luật TNHH Quang Minh Tuệ và Trợ lý Quản tài viên trong các vụ việc phá sản doanh nghiệp. Thành thạo soạn thảo, rà soát hợp đồng, đơn khởi kiện và chuẩn bị hồ sơ tố tụng dân sự; có nền tảng thực tập tại Tòa án và Văn phòng Thừa phát lại. Mục tiêu 5 năm: trở thành luật sư tố tụng, tư vấn và giải quyết hiệu quả các vấn đề pháp lý cho cá nhân và doanh nghiệp.",
  strengths: [],
  contacts: [
    { icon: "address", value: "TP. Thủ Đức, TP. Hồ Chí Minh" },
    { icon: "phone", value: "0355 007 407", href: "tel:+84355007407" },
    { icon: "mail", value: "huyquochu@gmail.com", href: "mailto:huyquochu@gmail.com" },
  ],
  links: resumeConfig.links,
  work: [
    {
      company: "Công ty Luật TNHH Quang Minh Tuệ",
      role: "Trợ lý Luật sư",
      stack: "",
      period: "06/2025 – 11/2026",
      location: "TP. Hồ Chí Minh",
      summary: "",
      responsibilities: [
        "Soạn thảo, rà soát hợp đồng và các văn bản pháp lý theo yêu cầu của khách hàng.",
        "Hỗ trợ luật sư soạn đơn khởi kiện, chuẩn bị hồ sơ và tài liệu, chứng cứ nộp Tòa án.",
        "Tham gia tố tụng với vai trò trợ lý luật sư, chủ yếu trong các vụ việc dân sự.",
      ],
      selected: [] as string[],
    },
    {
      company: "Công ty Hợp danh Quản lý và Thanh lý Tài sản Tập đoàn Hoàn Cầu Việt Nam",
      role: "Trợ lý Quản tài viên",
      stack: "",
      period: "06/2025 – 11/2026",
      location: "TP. Hồ Chí Minh",
      summary: "",
      responsibilities: [
        "Tham gia hỗ trợ, tư vấn thủ tục phục hồi, phá sản doanh nghiệp; nắm vững quy trình, thủ tục phá sản.",
        "Hỗ trợ Quản tài viên chuẩn bị và điều hành Hội nghị chủ nợ; làm việc trực tiếp với các chủ nợ.",
        "Vụ việc tiêu biểu: phá sản Công ty TNHH XNK Hải sản Đỗ Gia, Công ty CP Dịch vụ Tư vấn Diamond Star, Công ty Dương Minh Châu…",
      ],
      selected: [] as string[],
    },
    {
      company: "Văn phòng Thừa phát lại Sài Gòn – Thủ Đức",
      role: "Thực tập sinh",
      stack: "",
      period: "11/2024 – 03/2025",
      location: "TP. Hồ Chí Minh",
      summary: "",
      responsibilities: [
        "Sắp xếp, chỉnh sửa và lưu trữ hồ sơ vi bằng.",
        "Hỗ trợ Thừa phát lại thực hiện tác vụ lập vi bằng.",
        "Tham gia tư vấn lập vi bằng cùng Thừa phát lại.",
        "Soạn thảo vi bằng dưới sự hỗ trợ của thư ký Thừa phát lại.",
      ],
      selected: [] as string[],
    },
    {
      company: "Tòa án Nhân dân Quận Tân Bình",
      role: "Thực tập sinh",
      stack: "",
      period: "07/2023 – 08/2023",
      location: "TP. Hồ Chí Minh",
      summary: "",
      responsibilities: [
        "Sắp xếp, chỉnh sửa và lưu hồ sơ lưu trữ vụ án.",
        "Soạn thảo bản án, quyết định giao cho cơ quan thi hành án; soạn biên bản phiên họp, thông báo thụ lý, giấy triệu tập đương sự.",
        "Tống đạt giấy tờ cho đương sự, gửi phiếu xác minh đến công an.",
      ],
      selected: [] as string[],
    },
  ],
  projects: [
    {
      name: "Báo cáo nghiên cứu khoa học cấp khoa",
      link: resumeConfig.projects[0].link,
      role: "Thành viên nghiên cứu",
      stack: "",
      period: "09/2023 – 04/2024",
      summary: "Đề tài: Bảo hộ quyền tác giả đối với sản phẩm được hình thành từ trí tuệ nhân tạo.",
      responsibilities: [] as string[],
    },
  ],
  skills: [
    { group: "Chuyên môn", items: "Xử lý & lưu trữ hồ sơ, soạn thảo văn bản tố tụng, soạn thảo vi bằng, nghiên cứu pháp lý" },
    { group: "Kỹ năng mềm", items: "Tư duy phản biện, tổng hợp logic, tìm kiếm & tổng hợp thông tin nhanh, làm việc độc lập & theo nhóm" },
    { group: "Chứng chỉ", items: "TOEIC Listening & Reading 545/990 (09/2025); TOEIC Speaking 110/200 & Writing 150/200 (12/2025)" },
    { group: "Khác", items: "Thành thạo Word, Excel; sử dụng tốt công cụ PDF, Google Workspace; cẩn thận, trách nhiệm; chấp nhận đi công tác tỉnh" },
  ],
  education: [
    { school: "Trường Đại học Kinh tế – Luật, ĐHQG TP.HCM", degree: "Cử nhân Luật Tài chính – Ngân hàng (GPA 7.05/10, Khá)", period: "2021 – 2025" },
    { school: "Trường THPT Nguyễn Hữu Huân", degree: "Xếp loại Giỏi", period: "2017 – 2020" },
  ],
  languages: ["Tiếng Anh (trung cấp): đọc hiểu tài liệu, hợp đồng; viết email công việc"],
};
