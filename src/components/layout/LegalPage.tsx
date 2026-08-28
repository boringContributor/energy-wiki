import type { ReactNode } from "react";

/**
 * Shared frame for the legal pages (Impressum, Datenschutz): a narrow prose
 * column without the docs sidebar, matching the article typography.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <main id="content" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-fg">{title}</h1>
      {updated && <p className="mt-2 text-xs text-fg-subtle">{updated}</p>}
      <div className="mt-8 space-y-8">{children}</div>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section>
      {title && (
        <h2 className="mb-3 text-lg font-semibold tracking-tight text-fg">
          {title}
        </h2>
      )}
      <div className="space-y-3 text-sm leading-6 text-fg-muted">{children}</div>
    </section>
  );
}
