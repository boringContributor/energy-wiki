import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  articlesInCategory,
  categories,
  categoryById,
  type CategoryId,
} from "@/content";
import { isLocale, locales, s, t, type Locale } from "@/lib/i18n";
import { stripMarkup } from "@/lib/utils";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    categories.map((c) => ({ locale, category: c.id })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/thema/[category]">): Promise<Metadata> {
  const { locale, category } = await params;
  const cat = categoryById.get(category as CategoryId);
  if (!cat || !isLocale(locale)) return {};
  return {
    title: t(cat.title, locale),
    description: t(cat.summary, locale),
  };
}

export default async function CategoryPage({
  params,
}: PageProps<"/[locale]/thema/[category]">) {
  const { locale, category } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const cat = categoryById.get(category as CategoryId);
  if (!cat) notFound();

  const items = articlesInCategory(cat.id);

  return (
    <div className="max-w-3xl py-8 lg:py-12">
      <Link
        href={`/${l}`}
        className="text-xs text-fg-subtle transition-colors hover:text-fg"
      >
        ← {s("backToOverview", l)}
      </Link>

      <header className="ew-rise mt-5">
        <span
          className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-2xs font-semibold uppercase tracking-[0.09em]"
          style={{
            background: `var(--${cat.tone}-soft)`,
            color: `var(--${cat.tone})`,
          }}
        >
          {items.length} {s("articles", l)}
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          {t(cat.title, l)}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-fg-muted">
          {t(cat.summary, l)}
        </p>
      </header>

      <ul className="mt-10 divide-y divide-border-base border-y border-border-base">
        {items.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/${l}/wissen/${a.slug}`}
              className="group flex gap-4 py-4 transition-colors hover:bg-surface-2/60"
            >
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full"
                style={{ background: `var(--${cat.tone})` }}
              />
              <span className="min-w-0">
                <span className="block font-medium text-fg group-hover:text-accent">
                  {t(a.title, l)}
                </span>
                <span className="mt-0.5 block text-sm leading-6 text-fg-muted">
                  {stripMarkup(t(a.summary, l))}
                </span>
              </span>
              <span
                aria-hidden
                className="ml-auto self-center text-fg-subtle transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </li>
        ))}
        {items.length === 0 && (
          <li className="py-8 text-sm text-fg-subtle">{s("noArticles", l)}</li>
        )}
      </ul>
    </div>
  );
}
