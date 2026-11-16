import { resumeConfigVi } from "@/config/vi/resume.config";

// Job-targeted versions of the Vietnamese CV, used only when exporting a PDF:
//   CV_VARIANT=<key> yarn build, then node scripts/cv-pdf.mjs <key>
// The public /cv page always uses resumeConfigVi.
type Resume = typeof resumeConfigVi;
type Job = Resume["work"][number];

const work = resumeConfigVi.work;
const [qmt, hcvn, thuaPhatLai, toaAn] = work;
const job = (base: Job, responsibilities: string[]): Job => ({ ...base, responsibilities });

// Shared one-page tweaks for every targeted version
const base: Resume = {
  ...resumeConfigVi,
  links: [], // portfolio link in the header already leads to Facebook/GitHub
  education: [
    { school: "Trường ĐH Kinh tế – Luật, ĐHQG TP.HCM", degree: "Cử nhân Luật Tài chính – Ngân hàng, GPA 7.05/10", period: "2021 – 2025" },
  ],
  languages: ["Tiếng Anh trung cấp — TOEIC L&R 545/990 (09/2025); Speaking 110/200, Writing 150/200 (12/2025)"],
};

export const resumeVariantsVi: Record<string, Resume> = {
  // Chuyên viên Trợ lý Luật sư — Công ty Luật TNHH MTV Nguyễn Đỗ (TP.HCM)
  "tro-ly-luat-su": {
    ...base,
    title: "Trợ lý Luật sư",
    summary:
      "Cử nhân Luật Tài chính – Ngân hàng (UEL), gần 1,5 năm làm Trợ lý Luật sư và Trợ lý Quản tài viên. Mong muốn hỗ trợ luật sư trong các hồ sơ tố tụng, hôn nhân gia đình, đầu tư, doanh nghiệp; mục tiêu 5 năm trở thành luật sư tố tụng.",
    // Each line answers a requirement in the Nguyễn Đỗ job post
    strengths: [
      { label: "Hỗ trợ luật sư tố tụng", value: "Soạn đơn khởi kiện, chuẩn bị chứng cứ, tham gia tố tụng vụ việc dân sự." },
      { label: "Soạn thảo văn bản", value: "Hợp đồng, văn bản pháp lý; bản án, quyết định, biên bản tại Tòa án." },
      { label: "Doanh nghiệp", value: "Thủ tục phục hồi, phá sản doanh nghiệp; Hội nghị chủ nợ." },
      { label: "Làm việc với khách hàng & cơ quan", value: "Trực tiếp làm việc với khách hàng, chủ nợ, Tòa án, đương sự." },
      { label: "Tiếng Anh & tin học", value: "TOEIC L&R 545, Speaking 110, Writing 150; thành thạo Word, Excel." },
      { label: "Tác phong", value: "Logic, độc lập, cẩn thận, tỉ mỉ, chịu được áp lực." },
    ],
    work: [
      job(qmt, [
        "Soạn thảo, rà soát hợp đồng và các văn bản pháp lý theo yêu cầu của khách hàng.",
        "Hỗ trợ luật sư soạn đơn khởi kiện, chuẩn bị hồ sơ, chứng cứ; tham gia tố tụng với vai trò trợ lý, chủ yếu vụ việc dân sự.",
      ]),
      job(hcvn, [
        "Hỗ trợ, tư vấn thủ tục phục hồi, phá sản doanh nghiệp; hỗ trợ Quản tài viên điều hành Hội nghị chủ nợ.",
        "Vụ việc tiêu biểu: phá sản Công ty Đỗ Gia, Diamond Star, Dương Minh Châu…",
      ]),
      job(thuaPhatLai, ["Hỗ trợ Thừa phát lại lập vi bằng, tư vấn khách hàng; soạn thảo và lưu trữ hồ sơ vi bằng."]),
      job(toaAn, ["Soạn bản án, quyết định, biên bản phiên họp, giấy triệu tập; tống đạt giấy tờ, lưu hồ sơ vụ án."]),
    ],
    skills: [],
  },

  // Nhân viên Pháp lý Thu hồi Công nợ — Chailease International Leasing (TP.HCM)
  "phap-ly-thu-hoi-no": {
    ...base,
    title: "Chuyên viên Pháp lý — Xử lý nợ & Tố tụng",
    summary:
      "Cử nhân Luật Tài chính – Ngân hàng (UEL), gần 1,5 năm kinh nghiệm tố tụng dân sự và xử lý nợ trong thủ tục phá sản. Mong muốn đại diện công ty làm việc với Tòa án, Thi hành án, Công an trong thu hồi công nợ.",
    // Each line answers a requirement in the Chailease job post
    strengths: [
      { label: "Kinh nghiệm xử lý nợ & tố tụng", value: "Gần 1,5 năm (yêu cầu 6 tháng): khởi kiện dân sự, xác minh khoản nợ." },
      { label: "Tòa án, Thi hành án, Công an", value: "Tham gia tố tụng, báo cáo Thẩm phán, gửi xác minh đến công an." },
      { label: "Soạn thảo văn bản pháp lý", value: "Đơn khởi kiện, hợp đồng, báo cáo gửi Tòa án, văn bản tố tụng." },
      { label: "Tài chính – ngân hàng", value: "Chuyên ngành Luật TC–NH; am hiểu xử lý công nợ, tài sản khi phá sản." },
      { label: "Khách hàng, chủ nợ", value: "Hỗ trợ điều hành Hội nghị chủ nợ; làm việc với đương sự." },
      { label: "Tiếng Anh & công tác", value: "TOEIC L&R 545, Speaking 110, Writing 150; sẵn sàng đi công tác tỉnh." },
    ],
    work: [
      job(hcvn, [
        "Xử lý vụ việc phá sản theo quyết định của Tòa án: xác minh tài sản, khoản nợ, lập danh sách chủ nợ.",
        "Hỗ trợ điều hành Hội nghị chủ nợ; làm việc trực tiếp với các chủ nợ.",
        "Vụ việc tiêu biểu: Công ty Đỗ Gia, Diamond Star, Dương Minh Châu…",
      ]),
      job(qmt, [
        "Soạn đơn khởi kiện, chuẩn bị chứng cứ; tham gia tố tụng dân sự cùng luật sư; soạn, rà soát hợp đồng.",
      ]),
      job(toaAn, ["Soạn quyết định giao thi hành án, bản án; tống đạt, gửi xác minh đến công an."]),
      job(thuaPhatLai, ["Hỗ trợ Thừa phát lại lập vi bằng — ghi nhận sự kiện, hành vi làm chứng cứ; tư vấn khách hàng."]),
    ],
    skills: [],
  },
};
