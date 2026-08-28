"use client";

import { usePathname, useRouter } from "next/navigation";

import { setCookie } from "@/lib/browser";
import { locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ONE_YEAR = 60 * 60 * 24 * 365;

export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const go = (next: Locale) => {
    setCookie("locale", next, ONE_YEAR);
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${next}${rest ? `/${rest}` : ""}`);
  };

  return (
    <div
      className="flex h-9 items-center rounded-lg border border-border-base bg-surface p-0.5"
      role="group"
      aria-label="Sprache"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => go(l)}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "rounded-md px-2 py-1 font-mono text-2xs font-semibold uppercase transition-colors",
            l === locale
              ? "bg-accent-soft text-accent"
              : "text-fg-subtle hover:text-fg",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
