import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Lottie } from "@/components/lottie/Lottie";
import { HERO_ANIMATIONS } from "@/lib/heroAnimation";
import { isLocale, locales } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Hero-Varianten",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Internal comparison page for the hero animation. Not linked from anywhere —
 * delete it once a variant is chosen.
 */
export default async function HeroVariantsPage({
  params,
}: PageProps<"/[locale]/hero-varianten">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main id="content" className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-fg">
        Hero-Varianten
      </h1>
      <p className="mt-3 max-w-2xl leading-7 text-fg-muted">
        Alle Szenen laufen als Endlosschleife und respektieren{" "}
        <code className="rounded border border-border-base bg-surface-2 px-1 py-0.5 font-mono text-[0.85em]">
          prefers-reduced-motion
        </code>
        . Zuordnung und Startseiten-Szene stehen in{" "}
        <code className="rounded border border-border-base bg-surface-2 px-1 py-0.5 font-mono text-[0.85em]">
          src/lib/heroAnimation.ts
        </code>
        .
      </p>

      <div className="mt-10 space-y-6">
        {HERO_ANIMATIONS.map((variant) => (
          <section
            key={variant.name}
            className="overflow-hidden rounded-2xl border border-border-base bg-surface"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-border-base bg-surface-2 px-5 py-3.5">
              <h2 className="text-sm font-medium text-fg">{variant.title}</h2>
              <code className="font-mono text-2xs text-fg-subtle">
                {variant.name}
              </code>
              <span className="ml-auto rounded-full bg-accent-soft px-2 py-0.5 text-2xs font-semibold uppercase tracking-[0.08em] text-accent">
                {variant.usedFor}
              </span>
            </div>
            <div className="grid gap-6 p-5 sm:grid-cols-[1fr_minmax(0,18rem)] sm:items-center">
              <Lottie
                name={variant.name}
                className="w-full"
                ariaLabel={variant.title}
                fallback={
                  <p className="py-16 text-center text-sm text-fg-subtle">
                    Animation pausiert (reduzierte Bewegung)
                  </p>
                }
              />
              <p className="text-sm leading-6 text-fg-muted">{variant.note}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
