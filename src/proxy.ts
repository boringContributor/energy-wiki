import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n";

/**
 * The root layout lives at app/[locale]/layout.tsx, so every request needs a
 * locale prefix. Anything without one is sent to German — the primary audience
 * is German-speaking; English is the fallback for engineers.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const preferred = pickLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

function pickLocale(request: NextRequest): string {
  const cookie = request.cookies.get("locale")?.value;
  if (cookie && (locales as readonly string[]).includes(cookie)) return cookie;

  const header = request.headers.get("accept-language") ?? "";
  const wantsEnglish =
    /(^|,)\s*en\b/i.test(header) && !/(^|,)\s*de\b/i.test(header);
  return wantsEnglish ? "en" : defaultLocale;
}

export const config = {
  matcher: ["/((?!_next|api|icon|lottie|.*\\.[\\w]+$).*)"],
};
