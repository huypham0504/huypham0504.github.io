import { legalWorkConfig } from "@/config/legal-work.config";
import { siteConfig } from "@/config/site.config";
import { getDictionary, languageAlternates, localePath, type Locale } from "@/i18n";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export function servicesMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).services;
  return {
    title: `${t.title} | ${siteConfig.creator.name}`,
    description: t.description,
    alternates: languageAlternates("/services", locale),
  };
}

export function ServicesView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).services;
  return (
    <section className="w-full max-w-5xl mt-0 md:mt-6">
      <h2 className="text-xl font-semibold font-heading">{t.title}</h2>
      <p className="mt-1 mb-4 text-sm leading-6 text-foreground/85">{t.description}</p>
      <div className="grid gap-3 md:gap-4 md:grid-cols-2">
        {legalWorkConfig.map((work) => (
          <div key={work.title.en} className="rounded-xl border p-4 flex flex-col gap-3">
            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold font-heading">{work.title[locale]}</h3>
              <p className="text-sm text-foreground/85 leading-6">{work.description[locale]}</p>
            </div>
            <ul className="space-y-1.5 text-sm text-foreground/85 flex-1">
              {work.examples[locale].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link
        href={localePath(locale, "/experience")}
        className="mt-5 inline-block text-sm font-medium text-primary hover:underline"
      >
        {t.experienceLink}
      </Link>
    </section>
  );
}
