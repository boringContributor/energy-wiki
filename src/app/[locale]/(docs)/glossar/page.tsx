import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  GlossaryList,
  type GlossaryEntry,
} from "@/components/glossary/GlossaryList";
import { categoryById, glossaryArticles } from "@/content";
import { isLocale, locales, s, t, type Locale } from "@/lib/i18n";
import { stripMarkup } from "@/lib/utils";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/glossar">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: s("glossary", locale),
    description: s("glossaryLead", locale),
  };
}

export default async function GlossaryPage({
  params,
}: PageProps<"/[locale]/glossar">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const entries: GlossaryEntry[] = glossaryArticles()
    .map((a) => {
      const cat = categoryById.get(a.category)!;
      const title = t(a.title, l);
      const summary = stripMarkup(t(a.summary, l));
      return {
        slug: a.slug,
        title,
        summary,
        category: t(cat.title, l).split(":")[0].trim(),
        tone: cat.tone,
        terms: [title, summary, ...(a.aka ?? [])].join(" · "),
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title, "de"));

  return (
    <div className="max-w-4xl py-8 lg:py-12">
      <header className="ew-rise mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          {s("glossary", l)}
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg-muted">
          {s("glossaryLead", l)}
        </p>
      </header>

      <GlossaryList
        entries={entries}
        locale={l}
        labels={{
          filter: s("searchPlaceholder", l),
          empty: s("searchEmpty", l),
          reset: s("reset", l),
        }}
      />
    </div>
  );
}
