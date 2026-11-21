import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogs, projects } from "#site/content";
import { toolsConfig } from "@/config/tools.config";
import LanguageSwitcher from "@/components/language-switcher";
import { getDictionary, localePath, type Locale } from "@/i18n";

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href={localePath(locale, "/")} className="hidden md:inline">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-0 md:mt-3">
        <h1 className="head-text-sm">{locale === "vi" ? "Phạm Quốc Huy" : portfolioConfig.name}</h1>
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            <Link href="/rss.xml">
              <Rss size={18} />
              <span className="sr-only">rss feed</span>
            </Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-1 text-lg">
        {locale === "vi" ? "Trợ lý Luật sư · Luật Tài chính – Ngân hàng" : portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      <div className="mt-4 mb-4 max-w-2xl space-y-2 text-foreground/85">
        <p>{t.hero.bio}</p>
        <Link
          href={localePath(locale, "/projects/portfolio-github-pages")}
          className="inline-block text-sm font-medium text-primary underline underline-offset-4"
        >
          {t.hero.projectLink}
        </Link>
      </div>
      <Socials locale={locale} />
      {/* Strengths (src/i18n → hero.strengths), then counts from the site's own content (hidden while 0) */}
      <div className="flex flex-col text-sm space-y-2 max-w-2xl text-foreground/85 mt-4 mb-2 lg:mb-4">
        {t.hero.strengths.map((s) => (
          <p key={s.label}>
            <span className="font-semibold text-primary/90">{s.label}:</span> {s.value}
          </p>
        ))}
        {[
          { value: projects.filter((p) => p.lang === locale).length, label: locale === "vi" ? "Dự án" : "Projects", href: "/" },
          { value: toolsConfig.filter((x) => (x.kind ?? "app") === "app").length, label: locale === "vi" ? "Công cụ" : "Tools", href: "/tools" },
          { value: blogs.filter((b) => b.published && b.lang === locale).length, label: "Blog", href: "/blog" },
        ].filter((stat) => stat.value > 0).map((stat) => (
          <p key={stat.label}>
            <span className="font-semibold text-primary/90">{stat.label}:</span>{" "}
            <Link href={localePath(locale, stat.href)} className="hover:text-primary hover:underline">{stat.value}</Link>
          </p>
        ))}
      </div>
    </section>
  );
}
