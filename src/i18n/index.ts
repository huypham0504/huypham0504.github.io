import { siteConfig } from "@/config/site.config";

export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

// Vietnamese lives at the root, English under /en
const prefix = (locale: Locale) => (locale === defaultLocale ? "" : `/${locale}`);

export const localePath = (locale: Locale, path = "/") => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const p = prefix(locale);
  if (!p) return clean;
  return clean === "/" ? p : `${p}${clean}`;
};

const otherLocale: Locale = defaultLocale === "vi" ? "en" : "vi";

// Strip the locale prefix to get the shared path
export const stripLocale = (pathname: string) => {
  const p = `/${otherLocale}`;
  if (pathname === p || pathname === `${p}/`) return "/";
  return pathname.startsWith(`${p}/`) ? pathname.slice(p.length) : pathname;
};

export const localeFromPath = (pathname: string): Locale =>
  pathname === `/${otherLocale}` || pathname.startsWith(`/${otherLocale}/`) ? otherLocale : defaultLocale;

// hreflang alternates for a shared path, e.g. "/experience"
export const languageAlternates = (path: string, locale: Locale) => {
  const origin = siteConfig.siteUrl.replace(/\/$/, "");
  const en = `${origin}${localePath("en", path)}`;
  const vi = `${origin}${localePath("vi", path)}`;
  return {
    canonical: locale === "vi" ? vi : en,
    languages: { vi, en, "x-default": defaultLocale === "vi" ? vi : en },
  };
};

export const ogLocale = (locale: Locale) => (locale === "vi" ? "vi_VN" : "en_US");

const en = {
  nav: { projects: "Projects", experience: "Experience", services: "Services", blog: "Blog", tools: "Tools", wordpress: "WordPress", contact: "Contact" },
  hero: {
    bio: "Hi there 👋 I'm Huy, a Finance & Banking Law graduate (UEL) with nearly 1.5 years of experience as a Legal Assistant at Quang Minh Tue Law Firm and as an Assistant to an Insolvency Administrator on corporate bankruptcy cases. I draft and review contracts and statements of claim, and prepare civil litigation files; before that I interned at the People's Court of Tan Binh District and the Saigon – Thu Duc Bailiff Office. My goal is to become a litigation lawyer with solid professional foundations.",
    strengths: [
      { label: "Civil litigation", value: "Statements of claim, evidence, attending proceedings with lawyers" },
      { label: "Contracts", value: "Drafting and reviewing contracts and legal documents" },
      { label: "Bankruptcy", value: "Supporting insolvency administrators, creditors' meetings, claim checks" },
      { label: "Court & bailiff", value: "Judgments, decisions, official records, serving documents" },
      { label: "Research", value: "Copyright protection for AI-generated works" },
      { label: "English", value: "TOEIC L&R 545 · Speaking 110 · Writing 150" },
      { label: "Office tools", value: "Advanced Word & Excel" },
      { label: "Work style", value: "Careful, responsible, open to business travel" },
    ],
    contact: "Contact",
    resume: "Resume",
    switchLabel: "Tiếng Việt",
    switchShort: "VI",
  },
  home: {
    search: "Search projects",
    searchRequired: "Search is required",
    featured: "Featured",
    github: "GitHub",
    stars: "Stars",
    lastUpdated: "Last updated",
    forks: "forks",
  },
  project: { allProjects: "All projects", visitWebsite: "Visit website" },
  experience: {
    education: "Education",
    current: "Current",
    present: "Present",
    achievement: "Achievement",
    title: "Experience",
    intro: "Hey, I'm {name}. Here's my legal work experience, internships and education.",
    at: "at",
  },
  contact: {
    title: "Contact",
    description: "Get in touch with Pham Quoc Huy by phone, email or Facebook.",
    location: "Location",
    locationValue: "Thu Duc City, Ho Chi Minh City, Vietnam",
  },
  services: {
    title: "Services",
    description: "How I can support a law firm as a Legal Assistant: case-file handling, legal drafting, research and procedural support.",
    includes: "Includes",
    cta: "Discuss your project",
  },
  blog: {
    title: "Blog",
    description: "Notes on law and the things I learn along the way.",
    empty: "No posts yet.",
    allPosts: "All posts",
    all: "All",
  },
  tools: {
    title: "Tools",
    description: "Office and legal-research tools: advanced Word and Excel, PDF handling and Google Workspace.",
    empty: "Content is on its way — check back soon.",
    done: "Live",
    guide: "Docs",
    private: "Private",
    privateHeading: "WordPress Kit",
    privateNote: "Themes, plugins and snippets I use to build WordPress sites.",
    appsHeading: "Web tools",
    guidesHeading: "Docs",
    building: "In progress",
  },
  cv: {
    pageTitle: "Resume",
    home: "Home",
    viewPortfolio: "View Portfolio",
    viewCv: "View CV",
    webNote: "Web version of my CV — always up to date",
    downloadPdf: "Download PDF",
    summary: "Summary",
    strengths: "Key strengths",
    links: "Links",
    experience: "Experience",
    projects: "Research & Activities",
    skills: "Skills",
    education: "Education",
    languages: "Languages",
    selectedSites: "Selected sites",
    seeFullList: "see the full list on the",
    portfolio: "portfolio",
  },
};

const vi: typeof en = {
  nav: { projects: "Dự án", experience: "Kinh nghiệm", services: "Dịch vụ", blog: "Blog", tools: "Công cụ", wordpress: "WordPress", contact: "Liên hệ" },
  hero: {
    bio: "Xin chào 👋 Tôi là Huy, cử nhân Luật Tài chính – Ngân hàng (UEL) với gần 1,5 năm kinh nghiệm làm Trợ lý Luật sư tại Công ty Luật TNHH Quang Minh Tuệ và Trợ lý Quản tài viên trong các vụ việc phá sản doanh nghiệp. Tôi soạn thảo, rà soát hợp đồng, đơn khởi kiện và chuẩn bị hồ sơ tố tụng dân sự; trước đó từng thực tập tại Tòa án Nhân dân Quận Tân Bình và Văn phòng Thừa phát lại Sài Gòn – Thủ Đức. Mục tiêu của tôi là trở thành luật sư tố tụng có nền tảng chuyên môn vững vàng.",
    strengths: [
      { label: "Tố tụng dân sự", value: "Soạn đơn khởi kiện, chuẩn bị chứng cứ, tham gia tố tụng cùng luật sư" },
      { label: "Hợp đồng", value: "Soạn thảo, rà soát hợp đồng và văn bản pháp lý" },
      { label: "Phá sản", value: "Hỗ trợ Quản tài viên, Hội nghị chủ nợ, xác minh khoản nợ" },
      { label: "Tòa án & Thừa phát lại", value: "Soạn bản án, quyết định; lập vi bằng, tống đạt" },
      { label: "Nghiên cứu", value: "Quyền tác giả đối với sản phẩm do AI tạo ra" },
      { label: "Ngoại ngữ", value: "TOEIC L&R 545 · Speaking 110 · Writing 150" },
      { label: "Tin học", value: "Thành thạo Word, Excel" },
      { label: "Tác phong", value: "Cẩn thận, trách nhiệm, sẵn sàng đi công tác tỉnh" },
    ],
    contact: "Liên hệ",
    resume: "Xem CV",
    switchLabel: "English",
    switchShort: "EN",
  },
  home: {
    search: "Tìm dự án",
    searchRequired: "Vui lòng nhập từ khóa",
    featured: "Nổi bật",
    github: "GitHub",
    stars: "Nhiều sao",
    lastUpdated: "Mới cập nhật",
    forks: "forks",
  },
  project: { allProjects: "Tất cả dự án", visitWebsite: "Xem website" },
  experience: {
    education: "Học vấn",
    current: "Hiện tại",
    present: "nay",
    achievement: "Thành tích",
    title: "Kinh nghiệm",
    intro: "Xin chào, tôi là {name}. Dưới đây là quá trình làm việc, thực tập pháp lý và học tập của tôi.",
    at: "tại",
  },
  contact: {
    title: "Liên hệ",
    description: "Liên hệ với Phạm Quốc Huy qua điện thoại, email hoặc Facebook.",
    location: "Địa chỉ",
    locationValue: "TP. Thủ Đức, TP. Hồ Chí Minh",
  },
  services: {
    title: "Dịch vụ",
    description: "Những công việc tôi có thể hỗ trợ Quý văn phòng ở vị trí Trợ lý luật sư: xử lý hồ sơ, soạn thảo văn bản, nghiên cứu pháp lý và hỗ trợ tố tụng.",
    includes: "Bao gồm",
    cta: "Liên hệ trao đổi",
  },
  blog: {
    title: "Blog",
    description: "Ghi chép về pháp luật và những điều tôi học được.",
    empty: "Chưa có bài viết nào.",
    allPosts: "Tất cả bài viết",
    all: "Tất cả",
  },
  tools: {
    title: "Công cụ",
    description: "Kỹ năng tin học văn phòng và công cụ tra cứu pháp lý: thành thạo Word, Excel, xử lý PDF và Google Workspace.",
    empty: "Nội dung đang được cập nhật — bạn quay lại sau nhé.",
    done: "Live",
    guide: "Docs",
    private: "Private",
    privateHeading: "WordPress Kit",
    privateNote: "Theme, plugin và snippet mình dùng để dựng site WordPress.",
    appsHeading: "Web tools",
    guidesHeading: "Docs",
    building: "In progress",
  },
  cv: {
    pageTitle: "CV",
    home: "Trang chủ",
    viewPortfolio: "Xem portfolio",
    viewCv: "Xem CV",
    webNote: "Bản web của CV — luôn cập nhật mới nhất",
    downloadPdf: "Tải PDF",
    summary: "Giới thiệu",
    strengths: "Điểm mạnh",
    links: "Liên kết",
    experience: "Kinh nghiệm",
    projects: "Nghiên cứu & Hoạt động",
    skills: "Kỹ năng",
    education: "Học vấn",
    languages: "Ngoại ngữ",
    selectedSites: "Website tiêu biểu",
    seeFullList: "xem đầy đủ trên",
    portfolio: "portfolio",
  },
};

export type Dictionary = typeof en;
export const dictionaries: Record<Locale, Dictionary> = { en, vi };
export const getDictionary = (locale: Locale) => dictionaries[locale];
