# Energy Wiki by epilot

Ein offenes Nachschlagewerk zur deutschen Energiewirtschaft: Tarife, Zähler,
Abschläge, Umlagen und die Prozesse dahinter – kurz erklärt, mit
Rechenbeispielen und interaktiven Grafiken. Für alle, die Software für Strom,
Gas, Wasser oder Wärme bauen.

Deutsch ist die Leitsprache. `/en` existiert und ist vollständig bedienbar;
Artikel, die noch keine englische Fassung haben, zeigen den deutschen Text mit
einem Hinweis.

```bash
pnpm install
pnpm dev            # http://localhost:3000 → leitet auf /de
pnpm check          # Inhaltsprüfung + Lint + Build
```

## Aufbau

```
src/
  app/[locale]/            Root-Layout (de|en), Startseite, 404
    (docs)/                Layout mit Sidebar
      wissen/[slug]/       Artikelseite
      thema/[category]/    Themenübersicht
      glossar/             A–Z
  content/
    types.ts               Blockmodell für Artikelinhalte
    categories.ts          Die sieben Themen
    articles/*.ts          Die Artikel, ein File je Thema
  components/
    content/               Renderer für Blöcke und Rich Text
    figures/               Interaktive Grafiken und Rechner
    layout/  search/  lottie/
  lib/                     i18n, Navigation, Formatierung
scripts/
  check-content.mjs        Prüft Wiki-Links, Related-Slugs und Figure-IDs
  shots.mjs                Screenshots hell/dunkel/mobil nach .shots/
public/lottie/             Lottie-Szenen
```

## Einen Artikel schreiben

Artikel sind Daten, kein JSX. Ein Eintrag in `src/content/articles/<thema>.ts`:

```ts
{
  slug: "brennwert",
  category: "sparten",
  updated: "2026-08-01",
  aka: ["Ho", "Hs", "Heizwert"],          // zusätzliche Suchbegriffe
  title:   { de: "Brennwert", en: "Calorific value" },
  summary: { de: "Zeigt an, …",  en: "Indicates how much …" },
  body: { de: [ /* Blöcke */ ] },          // en optional, sonst Fallback auf de
  related: ["zustandszahl", "erdgas"],
  sources: [{ label: "…", url: "https://…" }],
}
```

`summary` ist zugleich der Glossareintrag – deshalb ein vollständiger Satz.

### Rich Text

In jedem Textfeld erlaubt:

| Schreibweise | Ergebnis |
| --- | --- |
| `**fett**` | fett |
| `*kursiv*` | kursiv |
| `` `code` `` | Inline-Code |
| `[[slug]]` | Wiki-Link, Beschriftung = Titel des Zielartikels |
| `[[slug\|Label]]` | Wiki-Link mit eigener Beschriftung |
| `[Label](https://…)` | externer Link |

### Blöcke

`lead`, `p`, `h`, `ul`, `ol`, `steps`, `dl`, `table`, `note`, `formula`,
`example`, `figure`, `quote`, `stats`, `cards` – die Typen stehen in
`src/content/types.ts`.

`note` kennt fünf Sorten: `info`, `tip`, `warn`, `law` (Rechtsgrundlage) und
`praxis` (was in echten Projekten schiefgeht).

### Grafiken einbinden

```ts
{ t: "figure", id: "strompreis-stack" }
```

Alle IDs stehen in `src/components/figures/index.tsx`. Eine neue Grafik: Komponente
in `calculators.tsx`, `charts.tsx`, `diagrams.tsx` oder `zaehler.tsx` anlegen und
in der Registry eintragen. `pnpm check:content` meldet unbekannte IDs, tote
Wiki-Links und Grafiken, die nirgends verwendet werden.

## Zahlen und Stände

Alle regulierten Werte sind auf dem Stand 2026: KWKG-Umlage 0,446 ct/kWh,
Offshore-Netzumlage 0,941 ct/kWh, Aufschlag für besondere Netznutzung
1,559 ct/kWh, Stromsteuer 2,05 ct/kWh, Energiesteuer Erdgas 0,55 ct/kWh,
CO₂-Preis im Korridor 55–65 €/t, Gasspeicherumlage entfallen. Beschaffung,
Vertrieb und Netzentgelte sind Modellwerte und als solche gekennzeichnet.

Diese Werte ändern sich jährlich – die Umlagen der Übertragungsnetzbetreiber
Mitte Oktober für das Folgejahr. Betroffen sind
`src/components/figures/calculators.tsx` sowie die Artikel unter
`src/content/articles/recht.ts` und `tarife.ts`.

## Animationen

Bewegung ist zurückhaltend und respektiert überall `prefers-reduced-motion`.

- **CSS/SVG** für alles Datengetriebene: die Grafiken in `src/components/figures`
  sind normale React-Komponenten.
- **Lottie** für die beiden erzählerischen Szenen in `public/lottie`
  (`energy-flow` auf der Startseite, `broken-line` auf der 404-Seite). Sie wurden
  im offiziellen Skia-Skottie-Player von Diffusion Studio erstellt und geprüft:

  ```bash
  npx degit diffusionstudio/lottie lottie-player
  cd lottie-player && npm install && npm run dev
  # Szene unter public/projects/<projekt>/<scene-N>/lottie.json bearbeiten,
  # Frames mit ?frame=N prüfen, danach minifiziert nach public/lottie kopieren
  ```

  Die Szenen kommen ohne Slots und ohne Ausdrücke aus, weil sie im Wiki von
  `lottie-react` (lottie-web) abgespielt werden – Farben sind deshalb inline und
  so gewählt, dass sie in hell und dunkel tragen.

## Design

Die Palette folgt der epilot-Marke: `#4c4cff` trägt jede Aktion, die sieben
Themenfarben (`--strom`, `--gas`, `--wasser`, `--waerme`, `--markt`,
`--messung`, `--recht`) kommen aus demselben Markenset – Amber, Light-Purple,
Türkis, Rot, Violett, Pink und ein neutrales Grau.

Tokens liegen als CSS-Variablen in `src/app/globals.css` und sind über
`@theme inline` als Tailwind-Klassen verfügbar (`bg-surface`, `text-fg-muted`,
`border-border-base` …).

Das Namens-Lockup „Energy Wiki / by epilot“ ist eine Komponente
(`src/components/layout/SiteTitle.tsx`); das Logo liegt als
`public/epilot-logo.svg` und trägt seinen Markenverlauf selbst, funktioniert
also in hell und dunkel.

Hell und dunkel werden beide gepflegt. Das Theme wird vor dem ersten Paint per
Inline-Script gesetzt, damit nichts aufblitzt.

## Screenshots ansehen

```bash
pnpm build && pnpm start -p 3210
node scripts/shots.mjs        # schreibt nach .shots/
```
