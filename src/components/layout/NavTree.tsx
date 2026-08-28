"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface NavGroup {
  id: string;
  title: string;
  tone: string;
  items: { slug: string; title: string }[];
}

export function NavTree({
  groups,
  locale,
  onNavigate,
  glossaryLabel,
}: {
  groups: NavGroup[];
  locale: Locale;
  onNavigate?: () => void;
  glossaryLabel: string;
}) {
  const pathname = usePathname();

  return (
    <nav className="space-y-7 pb-16 text-sm">
      <div>
        <Link
          href={`/${locale}/glossar`}
          onClick={onNavigate}
          className={cn(
            "flex items-center gap-2 rounded-lg px-2.5 py-2 font-medium transition-colors",
            pathname === `/${locale}/glossar`
              ? "bg-accent-soft text-accent"
              : "text-fg-muted hover:bg-surface-2 hover:text-fg",
          )}
        >
          <span
            aria-hidden
            className="font-mono text-2xs tracking-tighter text-fg-subtle"
          >
            A–Z
          </span>
          {glossaryLabel}
        </Link>
      </div>

      {groups.map((group) => (
        <div key={group.id}>
          <Link
            href={`/${locale}/thema/${group.id}`}
            onClick={onNavigate}
            className="mb-2 flex items-center gap-2 px-2.5 text-2xs font-semibold uppercase tracking-[0.09em] text-fg-subtle transition-colors hover:text-fg"
          >
            <span
              aria-hidden
              className="size-1.5 rounded-full"
              style={{ background: `var(--${group.tone})` }}
            />
            <span className="truncate">{group.title}</span>
          </Link>
          <ul className="space-y-px border-l border-border-base">
            {group.items.map((item) => {
              const href = `/${locale}/wissen/${item.slug}`;
              const active = pathname === href;
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    className={cn(
                      "-ml-px block border-l py-1.5 pl-3.5 pr-2 leading-snug transition-colors",
                      active
                        ? "border-accent font-medium text-accent"
                        : "border-transparent text-fg-muted hover:border-border-strong hover:text-fg",
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
