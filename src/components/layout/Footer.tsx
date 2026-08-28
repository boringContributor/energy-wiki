import Link from "next/link";

import { categories } from "@/content";
import { s, t, type Locale } from "@/lib/i18n";

import { SiteTitle } from "./SiteTitle";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="no-print mt-24 border-t border-border-base bg-bg-subtle">
      <div className="mx-auto max-w-[104rem] px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,22rem)_1fr]">
          <div>
            <SiteTitle size="md" align="left" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-fg-muted">
              {s("siteTagline", locale)}.
            </p>
            <p className="mt-4 max-w-sm text-xs leading-6 text-fg-subtle">
              {s("disclaimer", locale)}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FooterGroup title={s("topics", locale)}>
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/${locale}/thema/${c.id}`}
                    className="text-fg-muted transition-colors hover:text-fg"
                  >
                    {t(c.title, locale).split(":")[0]}
                  </Link>
                </li>
              ))}
            </FooterGroup>

            <FooterGroup title="Wiki">
              <li>
                <Link
                  href={`/${locale}/glossar`}
                  className="text-fg-muted transition-colors hover:text-fg"
                >
                  {s("glossary", locale)}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-fg-muted transition-colors hover:text-fg"
                >
                  {s("startHere", locale)}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/datenschutz`}
                  className="text-fg-muted transition-colors hover:text-fg"
                >
                  {s("privacy", locale)}
                </Link>
              </li>
            </FooterGroup>

            <FooterGroup title={s("sources", locale)}>
              <li>
                <a
                  href="https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-fg-muted transition-colors hover:text-fg"
                >
                  Bundesnetzagentur
                </a>
              </li>
              <li>
                <a
                  href="https://www.gesetze-im-internet.de/enwg_2005/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-fg-muted transition-colors hover:text-fg"
                >
                  EnWG
                </a>
              </li>
              <li>
                <a
                  href="https://www.bdew.de/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-fg-muted transition-colors hover:text-fg"
                >
                  BDEW
                </a>
              </li>
            </FooterGroup>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-2xs font-semibold uppercase tracking-[0.09em] text-fg-subtle">
        {title}
      </p>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}
