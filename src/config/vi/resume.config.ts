import { resumeConfig } from "@/config/resume.config";

// Vietnamese content for the web /cv page
export const resumeConfigVi: typeof resumeConfig = {
  name: "Phạm Quốc Huy",
  title: "Trợ lý Luật sư",
  summary:
    "Cử nhân ngành Luật Tài chính – Ngân hàng, có kinh nghiệm thực tập tại Tòa án và Văn phòng Thừa phát lại. Tôi mong muốn được làm việc trong môi trường pháp lý chuyên nghiệp với vị trí Trợ lý luật sư để tiếp tục học hỏi, rèn luyện kỹ năng nghiên cứu, soạn thảo và xử lý hồ sơ pháp lý. Trong 3 năm tới, tôi đặt mục tiêu tích lũy kinh nghiệm thực tiễn và nâng cao năng lực chuyên môn; về dài hạn 5 năm, tôi hướng đến trở thành luật sư có nền tảng vững vàng trong lĩnh vực tố tụng, có khả năng tư vấn và giải quyết hiệu quả các vấn đề pháp lý cho cá nhân và doanh nghiệp.",
  contacts: [
    { icon: "address", value: "TP. Thủ Đức, TP. Hồ Chí Minh" },
    { icon: "phone", value: "0355 007 407", href: "tel:+84355007407" },
    { icon: "mail", value: "huyquochu@gmail.com", href: "mailto:huyquochu@gmail.com" },
  ],
  links: resumeConfig.links,
  work: [
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
    { group: "Chứng chỉ", items: "TOEIC Listening & Reading (09/2025), TOEIC Speaking & Writing (01/2026)" },
    { group: "Khác", items: "Tin học văn phòng cơ bản; cẩn thận, trách nhiệm; chấp nhận đi công tác tỉnh" },
  ],
  education: [
    { school: "Trường Đại học Kinh tế – Luật, ĐHQG TP.HCM", degree: "Cử nhân Luật Tài chính – Ngân hàng (GPA 7.05/10, Khá)", period: "2021 – 2025" },
    { school: "Trường THPT Nguyễn Hữu Huân", degree: "Xếp loại Giỏi", period: "2017 – 2020" },
  ],
  languages: ["Tiếng Anh (giao tiếp cơ bản)"],
};
