import Link from "next/link";

import { s, t, ui, type Locale } from "@/lib/i18n";
import { navGroups, searchEntries } from "@/lib/nav";
import { SearchDialog } from "@/components/search/SearchDialog";

import { LocaleSwitch } from "./LocaleSwitch";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { SiteTitle } from "./SiteTitle";
import { Wordmark } from "./Wordmark";

export function Header({ locale }: { locale: Locale }) {
  const groups = navGroups(locale);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-border-base bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[104rem] items-center gap-3 px-4 sm:px-6">
        <MobileNav
          groups={groups}
          locale={locale}
          label={s("toggleNav", locale)}
          glossaryLabel={s("glossary", locale)}
        />

        <Link
          href={`/${locale}`}
          aria-label={`${s("siteName", locale)} by epilot`}
          className="flex items-center gap-2.5 pr-2 transition-opacity hover:opacity-80"
        >
          <Wordmark />
          <SiteTitle size="sm" className="hidden sm:inline-flex" />
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <SearchDialog
            locale={locale}
            entries={searchEntries(locale)}
            labels={{
              search: s("search", locale),
              placeholder: s("searchPlaceholder", locale),
              empty: s("searchEmpty", locale),
              hint: s("searchHint", locale),
              results: s("results", locale),
              close: s("close", locale),
            }}
          />
          <LocaleSwitch locale={locale} />
          <ThemeToggle
            labels={{
              light: t(ui.themeLight, locale),
              dark: t(ui.themeDark, locale),
              system: t(ui.themeSystem, locale),
            }}
          />
        </div>
      </div>
    </header>
  );
}
