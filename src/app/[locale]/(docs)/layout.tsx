import { notFound } from "next/navigation";

import { NavTree } from "@/components/layout/NavTree";
import { isLocale, s, type Locale } from "@/lib/i18n";
import { navGroups } from "@/lib/nav";

export default async function DocsLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return (
    <div className="mx-auto flex max-w-[104rem] gap-10 px-4 sm:px-6">
      <aside className="no-print sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-64 shrink-0 lg:block">
        <div className="rail-scroll h-full overflow-y-auto py-8 pr-2">
          <NavTree
            groups={navGroups(l)}
            locale={l}
            glossaryLabel={s("glossary", l)}
          />
        </div>
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
