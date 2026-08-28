import { cn } from "@/lib/utils";

const SIZES = {
  sm: { title: "text-[0.9375rem]", by: "text-[0.5rem]", logo: 11, gap: "gap-1" },
  md: { title: "text-lg", by: "text-[0.5625rem]", logo: 13, gap: "gap-1.5" },
  lg: { title: "text-2xl", by: "text-[0.625rem]", logo: 16, gap: "gap-1.5" },
} as const;

/**
 * The name lockup: "Energy Wiki" with the epilot logo tucked under its right
 * edge. The logo ships as a static asset rather than inline SVG so its gradient
 * definition is never duplicated across the page.
 */
export function SiteTitle({
  size = "sm",
  align = "right",
  className,
}: {
  size?: keyof typeof SIZES;
  /** Where the "by epilot" line sits relative to the title. */
  align?: "right" | "left";
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <span
      className={cn(
        "inline-flex flex-col leading-none",
        align === "right" ? "items-end" : "items-start",
        className,
      )}
    >
      <span className={cn("font-semibold tracking-tight text-fg", s.title)}>
        Energy Wiki
      </span>
      <span className={cn("mt-1 flex items-center", s.gap)}>
        <span
          className={cn(
            "font-medium uppercase tracking-[0.14em] text-fg-subtle",
            s.by,
          )}
        >
          by
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/epilot-logo.svg"
          alt="epilot"
          width={(s.logo * 103) / 26}
          height={s.logo}
          style={{ height: s.logo, width: "auto" }}
          className="block"
        />
      </span>
    </span>
  );
}
