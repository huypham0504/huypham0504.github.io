import type { Locale } from "@/i18n";
import { siteConfig } from "@/config/site.config";
import { experiencesConfig } from "@/config/experience.config";
import { resumeConfig } from "@/config/resume.config";
import { skillsConfig } from "@/config/skills.config";
import { experiencesConfigVi } from "@/config/vi/experience.config";
import { resumeConfigVi } from "@/config/vi/resume.config";
import { resumeVariantsVi } from "@/config/vi/resume.variants";

const skillCategoryVi: Record<string, string> = {
  "Legal Work": "Chuyên môn pháp lý",
  "Soft Skills": "Kỹ năng mềm",
  Languages: "Ngoại ngữ",
  Tools: "Công cụ",
};

const skillItemVi: Record<string, string> = {
  "Case-file handling": "Xử lý & lưu trữ hồ sơ",
  "Procedural drafting": "Soạn thảo văn bản tố tụng",
  "Official records (vi bằng)": "Soạn thảo vi bằng",
  "Legal research": "Nghiên cứu pháp lý",
  "Critical thinking": "Tư duy phản biện",
  "Logical synthesis": "Tổng hợp logic",
  "Fast information research": "Tìm kiếm & tổng hợp thông tin nhanh",
  "Independent & team work": "Làm việc độc lập & theo nhóm",
  "English (TOEIC L&R 545, S&W 260)": "Tiếng Anh (TOEIC L&R 545, S&W 260)",
  "Advanced Word & Excel": "Thành thạo Word, Excel",
  "PDF tools & Google Workspace": "Xử lý PDF & Google Workspace",
};

export const getSkills = (locale: Locale) =>
  locale === "vi"
    ? skillsConfig.map((s) => ({
        category: skillCategoryVi[s.category] ?? s.category,
        technologies: s.technologies.map((t) => skillItemVi[t] ?? t),
      }))
    : skillsConfig;

export const getExperiences = (locale: Locale) =>
  locale === "vi" ? experiencesConfigVi : experiencesConfig;

// CV_VARIANT (build-time, PDF export only) swaps in a job-targeted Vietnamese CV
const variant = process.env.CV_VARIANT ? resumeVariantsVi[process.env.CV_VARIANT] : undefined;

export const getResume = (locale: Locale) => (locale === "vi" ? variant ?? resumeConfigVi : resumeConfig);

export const getSiteText = (locale: Locale) =>
  locale === "vi"
    ? {
        title: "HuyPham | Trợ lý Luật sư",
        description:
          "Phạm Quốc Huy — Trợ lý Luật sư với gần 1,5 năm kinh nghiệm tại Công ty Luật TNHH Quang Minh Tuệ và các vụ việc phá sản doanh nghiệp; soạn thảo hợp đồng, đơn khởi kiện, hồ sơ tố tụng dân sự. Cử nhân Luật Tài chính – Ngân hàng (Trường ĐH Kinh tế – Luật, ĐHQG TP.HCM).",
      }
    : { title: siteConfig.title, description: siteConfig.description };

export const getEducation = (locale: Locale) =>
  locale === "vi"
    ? { school: "Trường Đại học Kinh tế – Luật, ĐHQG TP.HCM", degree: "Cử nhân Luật Tài chính – Ngân hàng · GPA 7.05/10 · Khá", period: "2021 - 2025" }
    : { school: "University of Economics and Law – VNU-HCM", degree: "Bachelor of Laws, Finance & Banking Law · GPA 7.05/10", period: "2021 - 2025" };
