import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { isLocale, locales, s, type Locale } from "@/lib/i18n";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Energy Wiki by epilot",
    template: "%s · Energy Wiki",
  },
  description:
    "Das offene Nachschlagewerk zur deutschen Energiewirtschaft: Tarife, Zähler, Abschläge, Umlagen und Prozesse – einfach erklärt.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a14" },
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Applies the stored theme before first paint so a dark-mode reader never gets
 * a white flash on navigation.
 */
const THEME_SCRIPT = `(function(){try{var m=localStorage.getItem('theme')||'system';var d=m==='dark'||(m!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return (
    <html
      lang={l}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-accent-fg"
        >
          {s("jumpTo", l)} Content
        </a>
        <Header locale={l} />
        <div className="flex-1">{children}</div>
        <Footer locale={l} />
      </body>
    </html>
  );
}
