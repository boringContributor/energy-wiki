"use client";

import { useEffect, useState } from "react";

import { lockScroll } from "@/lib/browser";
import type { Locale } from "@/lib/i18n";

import { NavTree, type NavGroup } from "./NavTree";

export function MobileNav({
  groups,
  locale,
  label,
  glossaryLabel,
}: {
  groups: NavGroup[];
  locale: Locale;
  label: string;
  glossaryLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={label}
        className="flex size-9 items-center justify-center rounded-lg border border-border-base bg-surface text-fg-muted transition-colors hover:text-fg lg:hidden"
      >
        <svg
          viewBox="0 0 20 20"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M3.5 6h13M3.5 10h13M3.5 14h9" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-black/40"
          />
          <div className="ew-rise absolute inset-y-0 left-0 flex w-[19rem] max-w-[85vw] flex-col border-r border-border-base bg-bg">
            <div className="flex h-14 items-center justify-between border-b border-border-base px-4">
              <span className="text-sm font-semibold">{label}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-8 items-center justify-center rounded-lg text-fg-muted hover:bg-surface-2"
                aria-label="Close"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="m5.5 5.5 9 9M14.5 5.5l-9 9" />
                </svg>
              </button>
            </div>
            <div className="rail-scroll flex-1 overflow-y-auto px-3 py-5">
              <NavTree
                groups={groups}
                locale={locale}
                glossaryLabel={glossaryLabel}
                onNavigate={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
