import { notFound } from "next/navigation";

/**
 * The root layout lives at app/[locale]/layout.tsx, so there is no app/not-found.tsx
 * for Next to fall back to — unmatched URLs would otherwise render the framework's
 * built-in 404 without our header, footer or theme. This catch-all sits below every
 * real route (static and dynamic segments both win over it) and hands anything left
 * over to app/[locale]/not-found.tsx.
 */
export default function CatchAll(): never {
  notFound();
}
