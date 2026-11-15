import type { Locale } from "@/i18n";
import { siteConfig } from "@/config/site.config";
import { experiencesConfig } from "@/config/experience.config";
import { resumeConfig } from "@/config/resume.config";
import { skillsConfig } from "@/config/skills.config";
import { experiencesConfigVi } from "@/config/vi/experience.config";
import { resumeConfigVi } from "@/config/vi/resume.config";

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
  "English (TOEIC L&R, S&W)": "Tiếng Anh (TOEIC L&R, S&W)",
  "Basic office software": "Tin học văn phòng cơ bản",
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

export const getResume = (locale: Locale) => (locale === "vi" ? resumeConfigVi : resumeConfig);

export const getSiteText = (locale: Locale) =>
  locale === "vi"
    ? {
        title: "HuyPham | Trợ lý Luật sư",
        description:
          "Phạm Quốc Huy — Cử nhân Luật Tài chính – Ngân hàng (Trường ĐH Kinh tế – Luật, ĐHQG TP.HCM), có kinh nghiệm thực tập tại Tòa án Nhân dân Quận Tân Bình và Văn phòng Thừa phát lại Sài Gòn – Thủ Đức, ứng tuyển vị trí Trợ lý luật sư.",
      }
    : { title: siteConfig.title, description: siteConfig.description };

export const getEducation = (locale: Locale) =>
  locale === "vi"
    ? { school: "Trường Đại học Kinh tế – Luật, ĐHQG TP.HCM", degree: "Cử nhân Luật Tài chính – Ngân hàng · GPA 7.05/10 · Khá", period: "2021 - 2025" }
    : { school: "University of Economics and Law – VNU-HCM", degree: "Bachelor of Laws, Finance & Banking Law · GPA 7.05/10", period: "2021 - 2025" };
