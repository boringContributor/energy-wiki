import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage, LegalSection } from "@/components/layout/LegalPage";
import { isLocale, locales } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/datenschutz">): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Privacy" : "Datenschutz",
    robots: { index: false, follow: true },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Privacy notice for an open-source static site: no accounts, no forms, no
 * cookies. The only processing is Vercel's hosting logs and its cookieless
 * Web Analytics — both described here.
 */
export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/datenschutz">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return locale === "de" ? (
    <LegalPage title="Datenschutz" updated="Stand: August 2026">
      <LegalSection>
        <p>
          Dieses Wiki ist ein offenes Open-Source-Projekt: eine statische
          Website ohne Konten, ohne Formulare, ohne Newsletter und ohne
          Cookies. Es werden keine personenbezogenen Daten erhoben, die über
          das hinausgehen, was der technische Betrieb zwingend mit sich
          bringt. Dieser Text beschreibt genau das.
        </p>
      </LegalSection>

      <LegalSection title="Hosting (Vercel)">
        <p>
          Die Seite wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina,
          CA 91723, USA gehostet. Beim Aufruf verarbeitet Vercel die Daten,
          die ein Browser technisch mitsendet – IP-Adresse, Zeitpunkt,
          aufgerufene Seite, User-Agent –, um die Seite auszuliefern und den
          Betrieb abzusichern. Rechtsgrundlage ist das berechtigte Interesse
          an der Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO).
          Vercel ist unter dem EU-US Data Privacy Framework zertifiziert;
          Details in der{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent underline underline-offset-2"
          >
            Datenschutzerklärung von Vercel
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Reichweitenmessung (Vercel Web Analytics)">
        <p>
          Um zu sehen, welche Artikel gelesen werden, nutzt die Seite Vercel
          Web Analytics. Das Verfahren kommt ohne Cookies und ohne
          dauerhafte Kennungen aus: Besuche werden über einen aus der
          Anfrage berechneten Hash gezählt, der nach spätestens 24 Stunden
          verworfen wird. Es entstehen ausschließlich aggregierte
          Statistiken – Seitenaufrufe, Herkunftsland, Browsertyp. Ein
          Tracking über mehrere Websites hinweg findet nicht statt.
          Rechtsgrundlage ist das berechtigte Interesse an einer
          cookielosen, anonymen Reichweitenmessung (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>
      </LegalSection>

      <LegalSection title="Lokaler Speicher">
        <p>
          Die Wahl zwischen hellem und dunklem Design wird im localStorage
          des Browsers gespeichert. Das ist rein funktional (§ 25 Abs. 2
          TDDDG), verlässt das Gerät nicht und lässt sich über die
          Browserdaten jederzeit löschen.
        </p>
      </LegalSection>

    </LegalPage>
  ) : (
    <LegalPage title="Privacy" updated="Last updated: August 2026">
      <LegalSection>
        <p>
          This wiki is an open-source project: a static website with no
          accounts, no forms, no newsletter and no cookies. It collects no
          personal data beyond what operating a website technically
          entails. This page describes exactly that.
        </p>
      </LegalSection>

      <LegalSection title="Hosting (Vercel)">
        <p>
          The site is hosted by Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, USA. When you visit, Vercel processes the data a
          browser sends by design – IP address, timestamp, requested page,
          user agent – to deliver the page and keep the service secure. The
          legal basis is the legitimate interest in operating the website
          (Art. 6(1)(f) GDPR). Vercel is certified under the EU-US Data
          Privacy Framework; see{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent underline underline-offset-2"
          >
            Vercel&apos;s privacy policy
          </a>{" "}
          for details.
        </p>
      </LegalSection>

      <LegalSection title="Analytics (Vercel Web Analytics)">
        <p>
          To see which articles get read, the site uses Vercel Web
          Analytics. It works without cookies and without persistent
          identifiers: visits are counted via a hash computed from the
          incoming request and discarded within 24 hours. The result is
          aggregate statistics only – page views, country, browser type.
          There is no cross-site tracking. The legal basis is the
          legitimate interest in cookieless, anonymous usage measurement
          (Art. 6(1)(f) GDPR).
        </p>
      </LegalSection>

      <LegalSection title="Local storage">
        <p>
          Your choice between the light and dark theme is kept in the
          browser&apos;s localStorage. It is purely functional, never leaves
          your device, and can be removed at any time by clearing site
          data.
        </p>
      </LegalSection>

    </LegalPage>
  );
}
