import Link from "next/link";

import { Lottie } from "@/components/lottie/Lottie";

export default function NotFound() {
  return (
    <main
      id="content"
      className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6"
    >
      <Lottie
        name="broken-line"
        className="w-full max-w-sm"
        ariaLabel="Eine unterbrochene Leitung"
        fallback={
          <svg viewBox="0 0 480 200" className="w-full max-w-sm" aria-hidden>
            <path
              d="M40 100h170M270 100h170"
              stroke="var(--border-strong)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M210 86v28M270 86v28"
              stroke="var(--border-strong)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        }
      />

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-fg">
        Hier ist die Leitung unterbrochen
      </h1>
      <p className="mt-3 max-w-md text-fg-muted">
        Diese Seite gibt es nicht – oder nicht mehr. Vielleicht hilft die Suche
        oder das Glossar weiter.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/de"
          className="rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover"
        >
          Zur Startseite
        </Link>
        <Link
          href="/de/glossar"
          className="rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
        >
          Glossar A–Z
        </Link>
      </div>
    </main>
  );
}
