# English translations

German is the source of truth. These files carry the English `body` for each
article, keyed by slug, and are merged into the registry in `src/content/index.ts`.
Keeping them separate means a translation can never corrupt the German original,
and an untranslated article simply falls back with a banner.

## Terminology policy

The point of the English version is to let someone work with German utility
systems, not to hide that they are German. A reader who only ever sees
"instalment payment" cannot find the `Abschlag` field in an ERP.

**1. Keep the German term, gloss it once.**

> The **Abschlag** (instalment payment) bridges that gap.

After the first gloss in an article, use the German term alone. Slug-linked
terms need no gloss — `[[abschlagszahlung]]` renders the English article title.

**2. Never translate legal or process names.** They are identifiers:

`EnWG` · `MsbG` · `StromGVV` · `GasGVV` · `KAV` · `BEHG` · `EEG` · `GEG` ·
`StromNEV` · `AVBFernwärmeV` · `§ 13 StromGVV` · `GPKE` · `MaBiS` · `WiM` ·
`MPES` · `GeLi Gas` · `UTILMD` · `MSCONS` · `EDIFACT` · `AS4` · `MaStR`

Institutions keep their names, glossed on first use: Bundesnetzagentur (the
federal regulator), BDEW, DVGW, DSAG.

**3. Terms that genuinely translate** — use the English, no gloss needed:

| German | English |
| --- | --- |
| Zähler, Zählerstand | meter, meter reading |
| Netzbetreiber | grid operator |
| Netzentgelt | grid fee |
| Lieferant | supplier |
| Verbrauch | consumption |
| Brennwert | calorific value |
| Umlage | levy |
| Bilanzkreis | balancing group |
| Abrechnung | billing, settlement |
| Erzeugung / Einspeisung | generation / feed-in |

**4. Terms that keep the German and get a gloss** — the ones that name a
defined artefact a reader will meet in a system or on an invoice:

`Abschlag` · `Grundpreis` · `Arbeitspreis` · `Leistungspreis` ·
`Marktlokation / MaLo` · `Messlokation / MeLo` · `Grundversorgung` ·
`Ersatzversorgung` · `Zustandszahl` · `Konzessionsabgabe` ·
`Messstellenbetrieb` · `Formatanpassung / FoMa` · `Jahresarbeitszahl / JAZ`

**5. Numbers switch to English convention.** This is the easiest thing to get
wrong: `0,446 ct/kWh` → `0.446 ct/kWh`, `15.000 kWh` → `15,000 kWh`,
`1.559` → `1.559` only if it really is one-point-five-five-nine. Dates become
`1 April` / `1 October`, not `1. April`.

**6. Rich-text markup is structural, not translatable.** `[[slug]]` targets and
`figure` ids stay exactly as in the German source. Only `[[slug|Label]]` labels
get translated.

## Figures

Article bodies live here; the figures keep their German copy inline, because
that copy reads as part of the component and is the source text. English is
looked up in `src/components/figures/strings.en.ts`, keyed by the exact German
original, through three helpers in `src/components/figures/i18n.ts`:

| Helper | For |
| --- | --- |
| `tr(locale, "…")` | a single string |
| `L(locale, obj)` | every string inside a data structure, walked recursively |
| `tf(locale, "… {0} …", a, b)` | a sentence with computed values in it |
| `fmt(locale)` | `num()` and `euro()` in the locale's number convention |

`tf` keeps `{0}`-style placeholders in the dictionary key rather than the values,
so a translation can put the number or the unit somewhere else.

A missing dictionary entry falls back to the German — untranslated, never blank.
That makes forgetting one invisible in a build, so the safety net is empirical:

```
pnpm build && pnpm start &
pnpm scan:en
```

`scripts/scan-en.mjs` crawls every rendered English page and flags text that
still looks German. The sources block at the foot of an article is skipped:
German documents keep their German titles. German names quoted inside English
sentences (`Mitteilung zu den Datenformaten`, `allgemeine Preise`) are listed in
the script's `INTENTIONAL` array.

`node scripts/dedupe-strings.mjs` removes duplicate keys from the dictionary and
reports every case where the two values disagreed, so a better translation
cannot be silently dropped by the one that happened to come first.
