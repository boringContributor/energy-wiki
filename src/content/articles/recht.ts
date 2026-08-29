import type { Article } from "../types";

const U = "2026-08-01";
const U2 = "2026-08-29";

export const rechtArticles: Article[] = [
  {
    slug: "enwg",
    category: "recht",
    updated: U,
    aka: ["Energiewirtschaftsgesetz", "EnWG", "§ 40 EnWG", "§ 41 EnWG"],
    title: { de: "Energiewirtschaftsgesetz (EnWG)", en: "Energy Industry Act" },
    summary: {
      de: "Das Grundgesetz der Energiewirtschaft: Es regelt Netzzugang, Grundversorgung, Rechnungsinhalte, Verbraucherrechte und die Aufgaben der Bundesnetzagentur.",
      en: "The backbone law of the energy sector: grid access, basic supply, invoice content, consumer rights and the regulator's mandate.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Wer in der Energiewirtschaft eine Frage nach dem „Warum ist das so?“ stellt, landet in der Mehrzahl der Fälle im EnWG. Es setzt die europäischen Binnenmarktrichtlinien um und ist seit 1998 der Rahmen für den liberalisierten Markt.",
        },
        { t: "h", level: 2, text: "Paragrafen, die im Alltag vorkommen" },
        {
          t: "table",
          head: ["Norm", "Inhalt"],
          rows: [
            ["§ 14a", "[[paragraf-14a-enwg|Steuerbare Verbrauchseinrichtungen]] – Wärmepumpe, Wallbox, Speicher"],
            ["§ 36", "[[grundversorgung|Grundversorgungspflicht]]"],
            ["§ 38", "[[ersatzversorgung|Ersatzversorgung]]"],
            ["§ 40", "[[jahresabrechnung|Inhalt von Strom- und Gasrechnungen]]"],
            ["§ 41", "Energielieferverträge mit Haushaltskunden"],
            ["§ 41a", "[[dynamischer-tarif|Dynamische Stromtarife]]"],
            ["§ 42", "[[stromkennzeichnung|Stromkennzeichnung]]"],
            ["§ 6 ff.", "[[unbundling|Entflechtung]]"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Vieles Konkrete steht nicht im EnWG selbst, sondern in Verordnungen darunter – [[stromgvv-gasgvv|StromGVV und GasGVV]], StromNEV, GasNEV – oder in Festlegungen der Bundesnetzagentur wie GPKE und GeLi Gas.",
        },
      ],
    },
    related: ["stromgvv-gasgvv", "msbg", "grundversorgung", "paragraf-14a-enwg", "mieterstrom"],
    sources: [
      { label: "EnWG im Volltext", url: "https://www.gesetze-im-internet.de/enwg_2005/" },
    ],
  },

  {
    slug: "msbg",
    category: "recht",
    updated: U,
    aka: ["Messstellenbetriebsgesetz", "MsbG", "GNDEW", "Rollout", "Preisobergrenze"],
    title: { de: "Messstellenbetriebsgesetz (MsbG)", en: "Metering Point Operation Act" },
    summary: {
      de: "Regelt, wer Zähler betreiben darf, wer wann ein intelligentes Messsystem bekommt und wie viel der Messstellenbetrieb höchstens kosten darf.",
      en: "Governs who may operate meters, who gets a smart metering system when, and the maximum price of metering point operation.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Das MsbG ist das Gesetz hinter dem Smart-Meter-Rollout. Es trennt den Messstellenbetrieb vom Netzbetrieb, definiert grundzuständige und wettbewerbliche Messstellenbetreiber und deckelt die Preise.",
        },
        { t: "h", level: 2, text: "Der Rollout-Rahmen" },
        {
          t: "ul",
          items: [
            "Pflichteinbau eines [[intelligentes-messsystem|intelligenten Messsystems]] ab 6.000 kWh Jahresverbrauch, bei Erzeugungsanlagen über 7 kW und bei Anlagen nach [[paragraf-14a-enwg|§ 14a EnWG]]",
            "Anspruch auf Einbau **auf Kundenwunsch** binnen vier Monaten seit dem 1. Januar 2025",
            "Zwischenziel: 20 % der Pflichteinbaufälle bis Ende 2025",
            "Abschluss des Rollouts bis 2032",
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Die Novelle vom Februar 2025 hat den Rollout beschleunigt, Pflichten erweitert und die Preisobergrenzen angepasst. Grundlage der Beschleunigung war das Gesetz zum Neustart der Digitalisierung der Energiewende (**GNDEW**) von 2023.",
        },
        { t: "h", level: 2, text: "Preisobergrenzen" },
        {
          t: "p",
          text: "Für eine moderne Messeinrichtung gilt eine Obergrenze von 25 € im Jahr. Für intelligente Messsysteme greift eine Staffel nach Jahresverbrauch und Anlass; bei den Pflichteinbaufällen mit hohem Verbrauch reicht sie bis 140 € im Jahr, für eine Steuereinrichtung nach § 14a kommen höchstens 50 € hinzu.",
        },
      ],
    },
    related: ["intelligentes-messsystem", "messstellenbetrieb", "datenschutz-energiedaten", "dynamischer-tarif", "enwg"],
    sources: [
      { label: "MsbG im Volltext", url: "https://www.gesetze-im-internet.de/messbg/" },
    ],
  },

  {
    slug: "stromgvv-gasgvv",
    category: "recht",
    updated: "2026-08-29",
    aka: ["StromGVV", "GasGVV", "Grundversorgungsverordnung", "AVBFernwärmeV"],
    title: { de: "StromGVV und GasGVV", en: "Basic supply ordinances" },
    summary: {
      de: "Die Verordnungen über die Allgemeinen Bedingungen der Grundversorgung – sie regeln Abschläge, Abrechnung, Ablesung, Zahlungsverzug und Versorgungsunterbrechung.",
      en: "The ordinances setting out the general terms of basic supply – instalments, billing, meter reading, payment default and disconnection.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "StromGVV und GasGVV sind fast wortgleich. Formell gelten sie nur für die [[grundversorgung|Grundversorgung]] – in der Praxis übernehmen viele Lieferanten ihre Regeln auch in Sonderverträge, weil sie erprobt und gerichtsfest sind.",
        },
        {
          t: "table",
          head: ["Norm", "Regelt"],
          rows: [
            ["§ 5", "[[preisanpassung|Preisanpassung]] – öffentliche Bekanntgabe und Mitteilung an den Kunden mindestens **6 Wochen** vor Wirksamwerden"],
            ["§ 12", "Abrechnung, Abrechnungszeitraum"],
            ["§ 13", "[[abschlagszahlung|Abschlagszahlungen]]"],
            ["§ 14", "Vorauszahlung – nur, wenn der Kunde nicht zahlt oder Grund zur Annahme besteht, dass er nicht zahlen wird"],
            ["§ 16", "Rechnungen und Abschläge – Ausweis der Beträge, Fälligkeit frühestens zwei Wochen nach Zugang"],
            ["§ 17", "Zahlung und Verzug; Einwände gegen die Rechnung berechtigen nur bei offensichtlichen Fehlern zum Zahlungsaufschub (§ 17 Abs. 1 Satz 2)"],
            ["§ 18", "Berechnungsfehler – Nachberechnung und Rückzahlung, rückwirkend höchstens **3 Jahre**"],
            ["§ 19 Abs. 2", "[[zahlung-und-mahnwesen|Unterbrechung der Versorgung]] wegen Zahlungsverzugs: erst ab **100 €** Rückstand, nach Androhung mit vier Wochen Frist"],
            ["§ 19 Abs. 3", "Beginn der Unterbrechung muss **8 Werktage** im Voraus angekündigt werden"],
            ["§ 20", "Kündigung mit zwei Wochen Frist"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Für die [[fernwaerme|Fernwärme]] gilt stattdessen die AVBFernwärmeV – mit deutlich anderen Regeln, insbesondere zu Laufzeiten und Preisänderungsklauseln.",
        },
      ],
    },
    related: ["grundversorgung", "abschlagszahlung", "zahlung-und-mahnwesen", "enwg"],
    sources: [
      { label: "StromGVV", url: "https://www.gesetze-im-internet.de/stromgvv/" },
      { label: "§ 19 StromGVV – Unterbrechung der Versorgung", url: "https://www.gesetze-im-internet.de/stromgvv/__19.html" },
      { label: "GasGVV", url: "https://www.gesetze-im-internet.de/gasgvv/" },
    ],
  },

  {
    slug: "stromsteuer",
    category: "recht",
    updated: "2026-08-29",
    aka: ["Ökosteuer", "StromStG", "Verbrauchsteuer Strom"],
    title: { de: "Stromsteuer", en: "Electricity tax" },
    summary: {
      de: "Eine durch das Stromsteuergesetz geregelte Steuer auf den Energieverbrauch – 2026 unverändert 2,05 ct/kWh.",
      en: "A tax on energy consumption under the Electricity Tax Act – 2.05 ct/kWh, unchanged in 2026.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Die Stromsteuer wurde 1999 als Teil der ökologischen Steuerreform eingeführt. Sie ist bundesweit einheitlich, verbrauchsabhängig und wird vom Lieferanten abgeführt – der Kunde sieht sie nur als Position auf der Rechnung.",
        },
        {
          t: "stats",
          items: [
            { value: "2,05 ct", label: "je kWh", hint: "Regelsatz, unverändert seit Jahren" },
            { value: "0,05 ct", label: "je kWh", hint: "ermäßigt für produzierendes Gewerbe, Land- und Forstwirtschaft (§ 9b StromStG)" },
            { value: "19 %", label: "Umsatzsteuer", hint: "wird zusätzlich auf die Stromsteuer erhoben" },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Auf die Stromsteuer fällt Umsatzsteuer an – eine Steuer auf eine Steuer. Das ist systematisch gewollt: Bemessungsgrundlage der Umsatzsteuer ist das gesamte Entgelt einschließlich Verbrauchsteuern.",
        },
        { t: "h", level: 2, text: "Befreiungen und Ermäßigungen" },
        {
          t: "ul",
          items: [
            "Strom aus erneuerbaren Energien, der aus einem ausschließlich damit gespeisten Netz entnommen wird",
            "Strom zur Stromerzeugung selbst",
            "Kleinanlagen bis 2 MW im räumlichen Zusammenhang – relevant für Mieterstrom und Eigenverbrauch",
            "ermäßigter Satz für das produzierende Gewerbe und die Land- und Forstwirtschaft nach § 9b StromStG",
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Die Entlastung nach § 9b StromStG war bis 2023 ein Teilerlass: Unternehmen zahlten effektiv **1,537 ct/kWh**. Seit dem 1. Januar 2024 wird auf das europäische Mindestmaß von **0,05 ct/kWh** entlastet – zunächst befristet auf zwei Jahre, 2025 dann dauerhaft entfristet. Die Entlastung wird beim Hauptzollamt beantragt; auf der Stromrechnung steht weiterhin der Regelsatz.",
        },
      ],
    },
    related: ["strompreis-zusammensetzung", "energiesteuer", "umsatzsteuer-energie"],
    sources: [
      { label: "§ 9b StromStG – Steuerentlastung für Unternehmen", url: "https://www.gesetze-im-internet.de/stromstg/__9b.html" },
      { label: "StromStG im Volltext", url: "https://www.gesetze-im-internet.de/stromstg/" },
    ],
  },

  {
    slug: "energiesteuer",
    category: "recht",
    updated: U,
    aka: ["Erdgassteuer", "Mineralölsteuer", "EnergieStG"],
    title: { de: "Energiesteuer (Erdgassteuer)", en: "Energy tax on gas" },
    summary: {
      de: "Eine durch das Energiesteuergesetz geregelte Steuer auf den Energieverbrauch – bei Erdgas 0,55 ct/kWh, auch 2026 unverändert.",
      en: "A tax on energy consumption under the Energy Tax Act – 0.55 ct/kWh for natural gas, unchanged in 2026.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Die Energiesteuer ist die Nachfolgerin der Mineralölsteuer und erfasst alle Energieerzeugnisse – Heizöl, Kraftstoffe und eben auch Erdgas. Für Erdgas zum Verheizen beträgt sie 0,55 ct/kWh.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Nicht zu verwechseln mit dem [[co2-preis|CO₂-Preis]]. Beide stehen nebeneinander auf der Gasrechnung: Die Energiesteuer besteuert die Energiemenge, der CO₂-Preis die Emission. Zusammen sind das 2026 rund 1,55 bis 1,73 ct/kWh netto.",
        },
        {
          t: "p",
          text: "Wie die [[stromsteuer|Stromsteuer]] wird auch die Energiesteuer vom Lieferanten abgeführt und geht in die Bemessungsgrundlage der [[umsatzsteuer-energie|Umsatzsteuer]] ein.",
        },
      ],
    },
    related: ["gaspreis-zusammensetzung", "co2-preis", "stromsteuer"],
  },

  {
    slug: "co2-preis",
    category: "recht",
    updated: U,
    aka: ["BEHG", "CO2-Bepreisung", "Brennstoffemissionshandel", "ETS 2", "Emissionszertifikate", "nEHS"],
    title: { de: "CO₂-Preis (BEHG)", en: "Carbon price" },
    summary: {
      de: "Bildet die Kosten für den Erwerb von CO₂-Emissionshandelszertifikaten im nationalen Emissionshandel nach dem Brennstoffemissionshandelsgesetz ab.",
      en: "Reflects the cost of acquiring emission allowances under Germany's national fuel emissions trading scheme.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Seit 2021 muss, wer Brennstoffe in Verkehr bringt, Zertifikate für die darin enthaltenen Emissionen kaufen. Die Kosten reicht er an die Kunden weiter – bei Erdgas als eigene Position auf der Rechnung.",
        },
        { t: "figure", id: "co2-preis-pfad" },
        { t: "h", level: 2, text: "Vom Festpreis zur Auktion" },
        {
          t: "ul",
          items: [
            "**2021 – 2025**: feste Preise, von 25 auf 55 €/t gestiegen",
            "**2026 – 2027**: Versteigerung in einem Preiskorridor von 55 bis 65 €/t; die Auktionen starten im Juli 2026 an der EEX",
            "**ab 2028**: der europäische Emissionshandel **ETS 2** löst das nationale System ab, der Preis bildet sich frei am Markt",
          ],
        },
        { t: "h", level: 2, text: "Was das je Kilowattstunde bedeutet" },
        {
          t: "formula",
          expr: "CO₂-Kosten [ct/kWh]  =  CO₂-Preis [€/t]  ×  Emissionsfaktor [t/MWh]  ÷  10",
          where: [
            { sym: "Erdgas", desc: "Emissionsfaktor rund 0,182 t CO₂ je MWh" },
            { sym: "65 €/t", desc: "ergibt 1,18 ct/kWh netto, mit Umsatzsteuer rund 1,41 ct/kWh" },
            { sym: "55 €/t", desc: "ergibt 1,00 ct/kWh netto" },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Bei Mietwohnungen wird der CO₂-Preis seit 2023 nach einem Stufenmodell zwischen Mieter und Vermieter aufgeteilt: Je schlechter der energetische Zustand des Gebäudes, desto größer der Anteil des Vermieters.",
        },
      ],
    },
    related: ["gaspreis-zusammensetzung", "energiesteuer", "erdgas"],
    sources: [
      {
        label: "BMUKN – Entlastungen trotz steigendem CO2-Preis ab 2026",
        url: "https://www.bundesumweltministerium.de/pressemitteilung/ab-2026-entlastungen-fuer-verbraucherinnen-und-verbraucher-trotz-steigendem-co2-preis",
      },
    ],
  },

  {
    slug: "konzessionsabgabe",
    category: "recht",
    updated: U,
    aka: ["KA", "KAV", "Wegenutzungsentgelt", "Konzessionsvertrag"],
    title: { de: "Konzessionsabgabe", en: "Concession fee" },
    summary: {
      de: "Entgelt an die Kommune für die Mitbenutzung öffentlicher Verkehrswege durch Versorgungsleitungen – je nach Gemeindegröße 1,32 bis 2,39 ct/kWh Strom.",
      en: "A fee paid to the municipality for using public rights of way for supply lines – 1.32 to 2.39 ct/kWh of electricity depending on municipality size.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Leitungen liegen unter öffentlichen Straßen. Dafür zahlt der Netzbetreiber der Gemeinde eine Konzessionsabgabe – für viele Kommunen eine der verlässlichsten Einnahmequellen überhaupt.",
        },
        { t: "h", level: 2, text: "Höchstsätze nach KAV" },
        {
          t: "table",
          head: ["Gemeindegröße", "Strom (Tarifkunden)", "Gas Kochen/Warmwasser", "Gas übriges Tarifgas"],
          align: ["l", "r", "r", "r"],
          rows: [
            ["bis 25.000 Einwohner", "1,32 ct/kWh", "0,51 ct/kWh", "0,22 ct/kWh"],
            ["bis 100.000 Einwohner", "1,59 ct/kWh", "0,61 ct/kWh", "0,27 ct/kWh"],
            ["bis 500.000 Einwohner", "1,99 ct/kWh", "0,77 ct/kWh", "0,33 ct/kWh"],
            ["über 500.000 Einwohner", "2,39 ct/kWh", "0,93 ct/kWh", "0,40 ct/kWh"],
          ],
          caption:
            "Höchstsätze nach der Konzessionsabgabenverordnung (KAV). Für Strom im Schwachlasttarif gilt ein reduzierter Satz von 0,61 ct/kWh.",
        },
        {
          t: "table",
          head: ["Kundengruppe", "Strom", "Gas"],
          align: ["l", "r", "r"],
          rows: [
            ["Sondervertragskunden", "0,11 ct/kWh", "0,03 ct/kWh"],
          ],
          caption:
            "Bei Gas entfällt die Abgabe für Sondervertragskunden ganz, wenn der Jahresverbrauch 5 Millionen kWh übersteigt.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Die Konzessionsabgabe ist einer der Gründe, warum derselbe Tarif in zwei Nachbarorten unterschiedlich viel kostet. Sie hängt allein an der Einwohnerzahl der Gemeinde – nicht am Anbieter.",
        },
      ],
    },
    related: ["strompreis-zusammensetzung", "gaspreis-zusammensetzung", "netzentgelte", "letztverbraucher"],
    sources: [
      {
        label: "Konzessionsabgabenverordnung (KAV)",
        url: "https://www.gesetze-im-internet.de/kav/",
      },
    ],
  },

  {
    slug: "kwk-umlage",
    category: "recht",
    updated: "2026-08-29",
    aka: ["KWKG-Umlage", "Kraft-Wärme-Kopplung", "KWKG", "Blockheizkraftwerk"],
    title: { de: "KWK-Umlage (KWKG-Umlage)", en: "CHP levy" },
    summary: {
      de: "Fördert die ressourcenschonende gleichzeitige Erzeugung von Strom und Wärme. Die aus dem KWKG entstehenden Belastungen werden bundesweit auf die Letztverbraucher umgelegt – 2026 sind das 0,446 ct/kWh.",
      en: "Funds combined heat and power generation. The resulting costs are spread across all final consumers nationwide – 0.446 ct/kWh in 2026.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Kraft-Wärme-Kopplung nutzt die Abwärme der Stromerzeugung zum Heizen und erreicht damit deutlich höhere Gesamtwirkungsgrade als getrennte Erzeugung. Das Kraft-Wärme-Kopplungsgesetz fördert solche Anlagen – finanziert über eine Umlage auf jede Kilowattstunde.",
        },
        {
          t: "stats",
          items: [
            { value: "0,446 ct", label: "je kWh in 2026" },
            { value: "+61 %", label: "gegenüber 2025" },
            { value: "2,946 ct", label: "alle Netzumlagen 2026", hint: "KWKG, Offshore, besondere Netznutzung" },
          ],
        },
        {
          t: "p",
          text: "Die Umlage wird zusammen mit den [[netzentgelte|Netzentgelten]] erhoben und jedes Jahr Mitte Oktober von den vier Übertragungsnetzbetreibern für das Folgejahr veröffentlicht.",
        },
        {
          t: "note",
          kind: "law",
          text: "Rechtsgrundlage der Umlage ist seit dem 1. Januar 2023 nicht mehr das KWKG selbst, sondern das **Energiefinanzierungsgesetz (EnFG)**, § 26 ff. Es bündelt die Finanzierung von EEG, KWKG und Offshore-Netzanbindung in einem Gesetz und regelt einheitlich, wer die Umlagen zahlt und welche Verbraucher – etwa stromkostenintensive Unternehmen oder Speicher – begrenzt oder befreit sind. Das KWKG regelt weiterhin nur die Förderung der Anlagen.",
        },
      ],
    },
    related: ["netzentgelte", "offshore-netzumlage", "besondere-netznutzung", "strompreis-zusammensetzung"],
    sources: [
      { label: "Energiefinanzierungsgesetz (EnFG)", url: "https://www.gesetze-im-internet.de/enfg/" },
      { label: "Netztransparenz – Umlagen der Übertragungsnetzbetreiber", url: "https://www.netztransparenz.de/" },
    ],
  },

  {
    slug: "offshore-netzumlage",
    category: "recht",
    updated: "2026-08-29",
    aka: ["Offshore-Haftungsumlage", "Windpark", "Netzanbindung"],
    title: { de: "Offshore-Netzumlage", en: "Offshore grid levy" },
    summary: {
      de: "Sichert Risiken der Anbindung von Offshore-Windparks an das Stromnetz ab; die daraus entstehenden Belastungen werden bundesweit auf die Letztverbraucher umgelegt – 2026 sind das 0,941 ct/kWh.",
      en: "Covers the risks of connecting offshore wind farms to the grid; the resulting costs are spread across all final consumers – 0.941 ct/kWh in 2026.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Offshore-Windpark ist fertig, das Anbindungskabel nicht – wer trägt den entgangenen Erlös? Diese Frage beantwortet die Offshore-Netzumlage. Sie deckt sowohl Haftungsfälle als auch die Kosten der Netzanbindungen selbst.",
        },
        {
          t: "p",
          text: "Sie wird wie die [[kwk-umlage|KWKG-Umlage]] über die [[netzentgelte|Netzentgelte]] erhoben und jährlich von den Übertragungsnetzbetreibern festgelegt. 2026 beträgt sie 0,941 ct/kWh netto.",
        },
        {
          t: "note",
          kind: "info",
          text: "Bis 2019 hieß sie **Offshore-Haftungsumlage**. Mit der Erweiterung auf die Anbindungskosten wurde sie umbenannt.",
        },
        {
          t: "note",
          kind: "law",
          text: "Seit dem 1. Januar 2023 steht die Rechtsgrundlage nicht mehr in § 17f EnWG, sondern im **Energiefinanzierungsgesetz (EnFG)**, § 17 ff. Dort ist auch geregelt, dass die Umlage – wie die [[kwk-umlage|KWKG-Umlage]] – für Letztverbraucher ohne Begrenzung in voller Höhe anfällt und für stromkostenintensive Unternehmen gedeckelt wird.",
        },
      ],
    },
    related: ["kwk-umlage", "netzentgelte", "strompreis-zusammensetzung"],
    sources: [
      { label: "Energiefinanzierungsgesetz (EnFG)", url: "https://www.gesetze-im-internet.de/enfg/" },
      { label: "Netztransparenz – Umlagen der Übertragungsnetzbetreiber", url: "https://www.netztransparenz.de/" },
    ],
  },

  {
    slug: "besondere-netznutzung",
    category: "recht",
    updated: U,
    aka: ["§ 19 StromNEV", "§19 StromNEV-Umlage", "Aufschlag für besondere Netznutzung", "atypische Netznutzung"],
    title: {
      de: "Aufschlag für besondere Netznutzung (§ 19 StromNEV)",
      en: "Surcharge for special grid use",
    },
    summary: {
      de: "Finanziert die entgangenen Erlöse von Stromnetzbetreibern, die wegen reduzierter Netzentgelte für atypische und stromintensive Netznutzung nach § 19 Abs. 2 StromNEV entstehen – 2026 sind das 1,559 ct/kWh.",
      en: "Funds the revenue grid operators forgo by granting reduced fees for atypical and energy-intensive grid use – 1.559 ct/kWh in 2026.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Manche Kunden entlasten das Netz: Wer außerhalb der Höchstlastzeiten verbraucht (**atypische Netznutzung**) oder sehr gleichmäßig sehr viel abnimmt (**stromintensive Netznutzung**), bekommt reduzierte [[netzentgelte|Netzentgelte]]. Was dem Netzbetreiber dadurch fehlt, tragen alle übrigen Letztverbraucher.",
        },
        {
          t: "note",
          kind: "info",
          text: "Bis 2024 hieß die Position **§ 19 StromNEV-Umlage**. Seit 2025 lautet die offizielle Bezeichnung „Aufschlag für besondere Netznutzung“ – auf Rechnungen und in Systemen findet man beide Namen.",
        },
        {
          t: "stats",
          items: [
            { value: "1,559 ct", label: "je kWh in 2026" },
            { value: "§ 19 Abs. 2", label: "StromNEV", hint: "Rechtsgrundlage der Reduzierung" },
          ],
        },
      ],
    },
    related: ["netzentgelte", "kwk-umlage", "offshore-netzumlage", "leistungspreis"],
  },

  {
    slug: "eeg-umlage",
    category: "recht",
    updated: U,
    aka: ["EEG", "Erneuerbare-Energien-Gesetz", "EEG-Konto", "Ökostromumlage"],
    title: { de: "EEG-Umlage (historisch)", en: "EEG levy (historical)" },
    summary: {
      de: "Förderte die Erzeugung von Strom aus erneuerbaren Energien; die Mehrbelastungen wurden bundesweit auf die Letztverbraucher umgelegt. Seit dem 1. Juli 2022 wird sie nicht mehr erhoben.",
      en: "Funded renewable electricity generation by spreading the extra cost across all final consumers. No longer levied since 1 July 2022.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Über zwei Jahrzehnte war die EEG-Umlage der prominenteste Posten auf jeder Stromrechnung – zuletzt 3,723 ct/kWh. Zum 1. Juli 2022 wurde sie auf null gesetzt und Ende 2022 vollständig abgeschafft.",
        },
        { t: "h", level: 2, text: "Wie die Förderung heute finanziert wird" },
        {
          t: "p",
          text: "Der Ausgleich zwischen Einnahmen und Ausgaben auf dem EEG-Konto kommt seither aus dem Bundeshaushalt, konkret über den Klima- und Transformationsfonds. Für 2026 beträgt der EEG-Finanzierungsbedarf rund 16,2 Milliarden Euro – rechnerisch entspräche das einer Umlage von etwa 4,6 ct/kWh, die Verbraucher aber nicht mehr zahlen.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Ältere Erklärstücke, Musterrechnungen und Testdaten enthalten die EEG-Umlage noch. Wer sie in einer aktuellen Preiskalkulation findet, hat eine veraltete Quelle vor sich.",
        },
        {
          t: "p",
          text: "Die Förderung selbst gibt es weiterhin: Betreiber von PV- und Windanlagen erhalten Einspeisevergütung oder Marktprämie nach dem EEG. Nur die Finanzierung hat sich vom Stromkunden zum Steuerzahler verschoben.",
        },
      ],
    },
    related: ["strompreis-zusammensetzung", "stromkennzeichnung", "umlage-abschaltbare-lasten"],
    sources: [
      {
        label: "BMWE – Bundestag beschließt Abschaffung der EEG-Umlage",
        url: "https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Pressemitteilungen/2022/04/20220428-bundestag-beschliesst-abschaffung-der-eeg-umlage.html",
      },
    ],
  },

  {
    slug: "umlage-abschaltbare-lasten",
    category: "recht",
    updated: U,
    aka: ["AbLaV", "abschaltbare Lasten", "§ 18 AbLaV", "§ 13 Abs. 4a EnWG"],
    title: { de: "Umlage abschaltbare Lasten (historisch)", en: "Interruptible loads levy (historical)" },
    summary: {
      de: "Diente auf Grundlage von § 13 Abs. 4a und 4b EnWG der Versorgungssicherheit durch Förderung abschaltbarer Verbrauchseinrichtungen. Sie wird seit 2023 nicht mehr erhoben.",
      en: "Supported security of supply by paying large consumers to be interruptible. No longer levied since 2023.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Große Industrieanlagen konnten sich vertraglich verpflichten, bei Netzengpässen kurzfristig abzuschalten. Diese Bereitschaft wurde vergütet und über eine Umlage auf alle Letztverbraucher finanziert.",
        },
        {
          t: "p",
          text: "Die zugrunde liegende Verordnung (AbLaV) lief zum 1. Juli 2022 aus. Für 2022 wurde die Umlage ein letztes Mal veröffentlicht – mit 0,003 ct/kWh. Seit 2023 wird sie nicht mehr erhoben.",
        },
        {
          t: "note",
          kind: "info",
          text: "Der Gedanke dahinter ist nicht verschwunden, nur verlagert: Flexible Lasten werden heute über Regelenergiemärkte, Redispatch und – auf Haushaltsebene – über [[paragraf-14a-enwg|§ 14a EnWG]] eingebunden.",
        },
      ],
    },
    related: ["eeg-umlage", "paragraf-14a-enwg", "netzentgelte"],
  },

  {
    slug: "paragraf-14a-enwg",
    category: "recht",
    updated: "2026-08-29",
    aka: ["§ 14a EnWG", "steuerbare Verbrauchseinrichtungen", "SteuVE", "Modul 1", "Modul 2", "Modul 3", "Dimmen"],
    title: { de: "§ 14a EnWG – steuerbare Verbrauchseinrichtungen", en: "§ 14a EnWG – controllable devices" },
    summary: {
      de: "Wärmepumpen, Wallboxen, Klimaanlagen und Speicher über 4,2 kW dürfen vom Netzbetreiber kurzzeitig gedrosselt werden – im Gegenzug gibt es reduzierte Netzentgelte.",
      en: "Heat pumps, wallboxes, air conditioners and batteries above 4.2 kW may be curtailed briefly by the grid operator – in exchange for reduced grid fees.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Wenn in einer Straße gleichzeitig zehn Wärmepumpen anlaufen und fünf Autos laden, ist der Ortsnetztransformator am Limit. § 14a EnWG löst das nicht durch Verbote, sondern durch ein Tauschgeschäft: Der Netzbetreiber darf im Notfall drosseln, der Kunde zahlt dafür weniger Netzentgelt.",
        },
        { t: "h", level: 2, text: "Wer darunterfällt" },
        {
          t: "ul",
          items: [
            "[[waermepumpe|Wärmepumpen]], nicht öffentliche Ladepunkte ([[wallbox|Wallbox]]), Klimaanlagen und [[batteriespeicher|Batteriespeicher]]",
            "mit einer Leistung von **mehr als 4,2 kW**",
            "die **ab dem 1. Januar 2024** neu ans Netz angemeldet wurden",
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Gedrosselt wird nicht abgeschaltet: Es bleibt ein Mindestbezug von 4,2 kW garantiert – genug, um eine Wärmepumpe weiterlaufen zu lassen und ein Auto in einer Stunde für rund 20 Kilometer zu laden.",
        },
        { t: "h", level: 2, text: "Die drei Module" },
        {
          t: "table",
          head: ["Modul", "Vorteil", "Voraussetzung"],
          rows: [
            ["Modul 1", "pauschaler Abzug beim Netzentgelt, je nach Netzgebiet unterschiedlich hoch", "Standard, kein separater Zähler nötig"],
            ["Modul 2", "deutlich reduzierter Arbeitspreis im Netzentgelt statt Pauschale", "separate Messung der steuerbaren Einrichtung"],
            ["Modul 3", "zeitvariables Netzentgelt **zusätzlich zur Pauschale aus Modul 1** – günstig in Schwachlastzeiten, teurer in Hochlastzeiten", "nur in Kombination mit Modul 1; [[intelligentes-messsystem|intelligentes Messsystem]]; seit dem 1. April 2025 verfügbar"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Modul 3 ist kein eigenständiges Modul, sondern ein Aufsatz: Der Kunde wählt zunächst Modul 1 und kann seit dem 1. April 2025 zusätzlich das zeitvariable Netzentgelt hinzunehmen. Mit Modul 2 lässt es sich nicht kombinieren. Der Netzbetreiber legt dafür je Netzgebiet mindestens drei Zeitfenster mit unterschiedlichen Arbeitspreisen fest.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für Produkte rund um Wärmepumpe und Wallbox ist § 14a eine der wichtigsten Weichenstellungen: Er bestimmt, ob ein zweiter Zählpunkt nötig ist, welches Messkonzept gilt und welchen Tarif der Kunde überhaupt bekommen kann.",
        },
      ],
    },
    related: ["waermepumpe", "wallbox", "netzentgelte", "intelligentes-messsystem", "zaehlzeitdefinitionen"],
    sources: [
      {
        label: "Bundesnetzagentur – Integration steuerbarer Verbrauchseinrichtungen",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html",
      },
      { label: "§ 14a EnWG – Netzorientierte Steuerung", url: "https://www.gesetze-im-internet.de/enwg_2005/__14a.html" },
    ],
  },

  {
    slug: "umsatzsteuer-energie",
    category: "recht",
    updated: "2026-08-29",
    aka: ["Mehrwertsteuer", "USt", "MwSt", "19 Prozent", "7 Prozent"],
    title: { de: "Umsatzsteuer auf Energie und Wasser", en: "VAT on energy and water" },
    summary: {
      de: "19 % auf Strom, Gas und Fernwärme, 7 % auf Trinkwasser – und gar keine auf Abwassergebühren.",
      en: "19 % on electricity, gas and district heating, 7 % on drinking water – and none at all on waste water fees.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Die Umsatzsteuer wird zuletzt aufgeschlagen – auf die Summe aller anderen Bestandteile, Steuern und Umlagen eingeschlossen. Wer eine Rechnung nachrechnen will, muss sie deshalb ganz am Ende ansetzen.",
        },
        {
          t: "table",
          head: ["Leistung", "Satz", "Grund"],
          align: ["l", "r", "l"],
          rows: [
            ["Strom", "19 %", "Regelsteuersatz"],
            ["Erdgas", "19 %", "Regelsteuersatz; die befristete Absenkung auf 7 % ist ausgelaufen"],
            ["Fernwärme", "19 %", "Regelsteuersatz"],
            ["Trinkwasser", "7 %", "ermäßigter Satz für Lebensmittel und Wasserlieferung"],
            ["Abwassergebühr", "0 %", "hoheitliche Leistung der Kommune, kein steuerbarer Umsatz"],
            ["PV-Anlage bis 30 kWp inkl. Speicher", "0 %", "**Nullsteuersatz** nach § 12 Abs. 3 UStG, seit dem 1. Januar 2023"],
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Der Nullsteuersatz gilt für Lieferung und Installation von [[photovoltaik|PV-Anlagen]] auf oder in der Nähe von Wohnungen und öffentlichen Gebäuden, einschließlich Wechselrichter und [[batteriespeicher|Batteriespeicher]]. Bis **30 kWp** laut Marktstammdatenregister wird die Voraussetzung ohne Nachweis unterstellt. Anders als eine Befreiung lässt der Nullsteuersatz den Vorsteuerabzug des Installateurs unberührt – der Kunde zahlt schlicht den Nettopreis.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Gewerbekunden sehen Nettopreise, Haushaltskunden Bruttopreise. Ein Preisvergleich zwischen beiden Welten geht ohne Umrechnung immer schief – ein Klassiker in Angebotsstrecken, die beide Kundengruppen bedienen.",
        },
      ],
    },
    related: ["strompreis-zusammensetzung", "wasser", "stromsteuer", "letztverbraucher"],
    sources: [
      { label: "§ 12 UStG – Steuersätze", url: "https://www.gesetze-im-internet.de/ustg_1980/__12.html" },
    ],
  },

  {
    slug: "datenschutz-energiedaten",
    category: "recht",
    level: "vertiefung",
    updated: U2,
    aka: ["DSGVO", "Datenschutz", "personenbezogene Daten", "§ 49 MsbG", "§ 50 MsbG", "Datenhoheit", "Auftragsverarbeitung", "DSFA", "Pseudonymisierung"],
    title: { de: "Datenschutz bei Energiedaten", en: "Data protection for energy data" },
    summary: {
      de: "Zählerstände und Lastgänge sind personenbezogene Daten. Die DSGVO gilt, wird aber für den Messstellenbetrieb durch die §§ 49 bis 75 MsbG konkretisiert – mit strenger Zweckbindung und klar benannten berechtigten Stellen.",
      en: "Meter readings and load curves are personal data. The GDPR applies, but for metering it is specified by §§ 49 to 75 MsbG – with strict purpose limitation and clearly named entitled parties.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Aus einem Viertelstunden-Lastgang lässt sich ablesen, wann jemand aufsteht, wann die Wohnung leer ist und ob ein Fernseher läuft. Deshalb behandelt das Recht Energiedaten nicht als technische Betriebsdaten, sondern als das, was sie sind: personenbezogene Daten über das Leben in einem Haushalt.",
        },
        { t: "h", level: 2, text: "Was personenbezogen ist" },
        {
          t: "p",
          text: "Personenbezogen ist jede Information, die sich einer identifizierbaren Person zuordnen lässt. Beim Energiekunden ist das fast alles: Name, Adresse und Vertragskonto offensichtlich – aber auch [[zaehlerstand|Zählerstände]], [[lastprofil|Lastgänge]], Zählernummer, [[marktlokation|MaLo-ID]] und [[messlokation|MeLo-ID]]. Die Identifikatoren sind zwar keine Namen, führen aber über die Stammdaten des Netzbetreibers eindeutig zu einem Anschluss und damit zu einem Anschlussnutzer.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Die **Zählernummer** ist ein Quasi-Identifikator: Sie steht auf dem Gerät im Treppenhaus, auf jeder Rechnung und in jedem Ablesebeleg. Ein System, das Verbrauchsdaten „nur mit Zählernummer“ speichert und deshalb als anonym behandelt, ist nicht anonym. Der Bezug zur Person ist mit trivialem Aufwand herstellbar.",
        },
        { t: "h", level: 2, text: "DSGVO und MsbG: wer gilt wofür" },
        {
          t: "p",
          text: "Die DSGVO ist der allgemeine Rahmen: Rechtsgrundlage, Betroffenenrechte, Auftragsverarbeitung, Sicherheit der Verarbeitung. Für den Messstellenbetrieb und die Datenkommunikation in intelligenten Energienetzen hat der Gesetzgeber sie in den §§ 49 bis 75 [[msbg|MsbG]] bereichsspezifisch konkretisiert. Diese Vorschriften sind die Rechtsgrundlage, auf der Messstellenbetreiber, Netzbetreiber und Lieferanten Messwerte überhaupt erheben und weitergeben dürfen.",
        },
        {
          t: "dl",
          items: [
            { term: "Zulässigkeit und Zweckbindung (§ 49 MsbG)", def: "Personenbezogene Daten aus dem Messstellenbetrieb dürfen nur erhoben, verarbeitet und genutzt werden, soweit das MsbG oder eine andere Rechtsvorschrift es erlaubt oder der Anschlussnutzer eingewilligt hat. Der Zweck ist eng: Abrechnung, Bilanzierung, Netzführung, Messstellenbetrieb." },
            { term: "Berechtigte Stellen (§ 50 MsbG)", def: "Das Gesetz zählt abschließend auf, wer Daten empfangen darf: [[messstellenbetrieb|Messstellenbetreiber]], [[netzbetreiber|Netzbetreiber]], Bilanzkoordinator und Bilanzkreisverantwortlicher, Lieferant, Direktvermarkter, Anlagenbetreiber, der Anschlussnutzer selbst – und jede weitere Stelle, die der Anschlussnutzer ausdrücklich benennt." },
            { term: "Datensparsamkeit", def: "Erhoben wird nur, was der jeweilige Zweck verlangt. Ein Haushalt ohne zeitvariablen Tarif liefert einen Jahreswert (TAF 1), keinen Lastgang. Der Zählerstandsgang wird nur gebildet, wenn ein Tarif oder eine Bilanzierungsregel ihn braucht – siehe [[gateway-administrator|Gateway-Administrator]]." },
            { term: "Sternförmige Kommunikation", def: "Jede berechtigte Stelle erhält genau ihren Ausschnitt, verschlüsselt und getrennt. Der Lieferant sieht keine Netzzustandsdaten, der Netzbetreiber keine Tarifinformationen." },
            { term: "Löschung", def: "Daten sind zu löschen, sobald der Zweck erfüllt ist. Netzzustandsdaten, die nur der Netzführung dienen, dürfen nicht dauerhaft personenbezogen gespeichert werden; Abrechnungsdaten unterliegen den handels- und steuerrechtlichen Aufbewahrungsfristen und werden danach gelöscht." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Die Regelungen gelten unabhängig davon, ob ein intelligentes Messsystem verbaut ist. Auch der jährlich abgelesene Zählerstand eines Ferraris-Zählers ist ein personenbezogenes Datum, das nur an berechtigte Stellen gehen darf. Das iMSys verschärft lediglich die Menge und Aussagekraft der Daten – und damit die Anforderungen an technische Schutzmaßnahmen.",
        },
        { t: "h", level: 2, text: "Datenhoheit des Anschlussnutzers" },
        {
          t: "p",
          text: "Der Anschlussnutzer – in der Regel der Bewohner, nicht der Eigentümer – ist Herr seiner Daten. Er kann sie über die HAN-Schnittstelle des Gateways selbst auslesen, hat Anspruch auf Verbrauchsinformationen und entscheidet, wer über den gesetzlichen Kreis hinaus Zugriff erhält.",
        },
        {
          t: "table",
          head: ["Datenfluss", "Rechtsgrundlage", "Einwilligung nötig?"],
          rows: [
            ["Zählerstand an Lieferant für die Jahresrechnung", "MsbG, Liefervertrag", "Nein"],
            ["Zählerstandsgang an Lieferant für einen dynamischen Tarif", "MsbG; der Tarif ist der Zweck", "Nein – aber der Kunde hat den Tarif gewählt"],
            ["Netzzustandsdaten an Netzbetreiber", "MsbG, Netzführung", "Nein"],
            ["Verbrauchsinformation an den Kunden (§ 40a EnWG)", "EnWG – gesetzlicher Anspruch, kostenlos", "Nein"],
            ["Hochfrequente Messwerte (TAF 14) an einen Energiemanagement-Anbieter", "Einwilligung des Anschlussnutzers", "**Ja**, ausdrücklich und widerruflich"],
            ["Verbrauchsdaten an ein Vergleichsportal oder für Marketing", "Einwilligung", "**Ja**"],
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "§ 40a [[enwg|EnWG]] gibt Kunden mit intelligentem Messsystem einen Anspruch auf regelmäßige, kostenlose Verbrauchsinformationen; bei einem Lieferanten mit iMSys-Kunden ist die Bereitstellung Pflicht, nicht Zusatzdienst. Alles, was darüber hinausgeht – Verbrauchsanalysen, Geräteerkennung, Vergleiche mit Nachbarn –, ist ein Mehrwertdienst und braucht eine Einwilligung nach Art. 6 Abs. 1 Buchst. a DSGVO, die ebenso leicht widerrufbar sein muss, wie sie erteilt wurde.",
        },
        { t: "h", level: 2, text: "Pflichten des Unternehmens" },
        {
          t: "dl",
          items: [
            { term: "Auftragsverarbeitung (Art. 28 DSGVO)", def: "Wer Abrechnung, Portal oder Marktkommunikation an einen IT-Dienstleister gibt, bleibt Verantwortlicher und braucht einen Auftragsverarbeitungsvertrag mit Weisungsbindung, Vertraulichkeit, technischen Maßnahmen und Löschregeln. Das gilt auch für den Gateway-Administrator als Dienstleister des Messstellenbetreibers." },
            { term: "Datenschutz-Folgenabschätzung (Art. 35 DSGVO)", def: "Für die Verarbeitung hochauflösender Verbrauchsdaten aus intelligenten Messsystemen ist regelmäßig eine DSFA erforderlich, weil daraus Verhaltensprofile ableitbar sind. Sie dokumentiert Zweck, Risiken und Schutzmaßnahmen – vor Inbetriebnahme, nicht danach." },
            { term: "Auskunft (Art. 15 DSGVO)", def: "Der Kunde kann verlangen, alle über ihn gespeicherten Daten zu erhalten – einschließlich Zählerständen, Lastgängen, Ersatzwerten und Kommunikationsprotokollen. Ein System, das diese Daten nicht pro Person exportieren kann, hat ein Compliance-Problem." },
            { term: "Berichtigung und Löschung (Art. 16, 17 DSGVO)", def: "Ein falscher Zählerstand ist zu berichtigen – über die [[rechnungskorrektur|Rechnungskorrektur]], nicht durch stilles Überschreiben. Löschungsansprüche enden dort, wo Aufbewahrungspflichten beginnen." },
            { term: "Meldepflicht bei Verletzungen (Art. 33 DSGVO)", def: "Ein offenes Portal, aus dem sich fremde Lastgänge abrufen lassen, ist innerhalb von 72 Stunden der Aufsichtsbehörde zu melden." },
          ],
        },
        { t: "h", level: 2, text: "Praxis für Portale, CRM und Abrechnung" },
        {
          t: "steps",
          items: [
            { title: "Rollen und Rechte", text: "Verbrauchsdaten sehen nur Rollen, die sie für ihre Aufgabe brauchen. Der Vertrieb braucht Vertragsdaten, nicht den Lastgang; der Kundenservice sieht ihn, aber protokolliert. Rechte werden je [[marktlokation|Marktlokation]] und Zeitraum vergeben, nicht pauschal je Mandant." },
            { title: "Pseudonymisierung", text: "Analytik, Prognose und Testsysteme arbeiten mit einer Ersatzkennung statt mit MaLo-ID, Zählernummer oder Name. Die Zuordnungstabelle liegt getrennt und ist zugriffsbeschränkt. Testdaten aus Produktion ohne Pseudonymisierung sind ein Datenschutzverstoß, kein Komfort." },
            { title: "Protokollierung", text: "Jeder Zugriff auf Verbrauchsdaten wird mit Nutzer, Zeitpunkt und Zweck protokolliert. Die Protokolle sind selbst personenbezogen und brauchen eine eigene Löschfrist." },
            { title: "Löschkonzept", text: "Je Datenart eine Frist: Lastgänge nach Abrechnung und Einspruchsfrist, Netzzustandsdaten sofort nach Zweckerfüllung, Abrechnungsbelege nach den steuerlichen Aufbewahrungsfristen. Die Frist gehört als Attribut an den Datensatz, damit sie automatisiert greift." },
            { title: "Einwilligungsverwaltung", text: "Jede Einwilligung für Mehrwertdienste wird mit Zeitpunkt, Text und Umfang gespeichert und beim Widerruf technisch wirksam – die Datenlieferung an den Dienst endet, nicht nur die Anzeige." },
            { title: "Kundenselbstauskunft", text: "Das [[endkundenportal|Endkundenportal]] bietet den Export der eigenen Daten als Standardfunktion an. Das erfüllt Art. 15 DSGVO und nimmt dem Kundenservice den aufwendigsten manuellen Fall ab." },
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Ein Aggregationsprinzip hilft im Zweifel: Was für den Zweck reicht, wird auf diese Ebene reduziert. Ein Vertriebs-Dashboard braucht Monatssummen, kein Viertelstundenraster; eine Prognose braucht Lastgänge, aber keine Namen. Datensparsamkeit ist damit weniger ein juristisches Prinzip als eine Architekturentscheidung – und sie macht die Datenschutz-Folgenabschätzung erheblich kürzer.",
        },
        {
          t: "note",
          kind: "info",
          text: "Aufsicht führen die Landesdatenschutzbehörden, für die Marktkommunikation und den Messstellenbetrieb ergänzend die Bundesnetzagentur. Die Datenschutzkonferenz (DSK) der Aufsichtsbehörden veröffentlicht Orientierungshilfen, unter anderem zu Auftragsverarbeitung, Datenschutz-Folgenabschätzung und den Anforderungen an Smart Metering.",
        },
      ],
    },
    related: ["msbg", "intelligentes-messsystem", "gateway-administrator", "endkundenportal", "zaehlerstand"],
    sources: [
      { label: "§ 49 MsbG – Erhebung, Verarbeitung und Nutzung personenbezogener Daten", url: "https://www.gesetze-im-internet.de/messbg/__49.html" },
      { label: "§ 50 MsbG – Berechtigte Stellen", url: "https://www.gesetze-im-internet.de/messbg/__50.html" },
      { label: "§ 40a EnWG – Verbrauchsinformationen bei intelligenten Messsystemen", url: "https://www.gesetze-im-internet.de/enwg_2005/__40a.html" },
      { label: "Verordnung (EU) 2016/679 – DSGVO", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "Datenschutzkonferenz – Orientierungshilfen und Beschlüsse", url: "https://www.datenschutzkonferenz-online.de/" },
      { label: "BSI – Smart Metering, Technische Richtlinie TR-03109", url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Smart-metering/smart-metering_node.html" },
    ],
  },

  {
    slug: "mieterstrom",
    category: "recht",
    level: "vertiefung",
    updated: U2,
    aka: ["Mieterstromzuschlag", "§ 21 Abs. 3 EEG", "§ 42a EnWG", "§ 42b EnWG", "Gemeinschaftliche Gebäudeversorgung", "Kundenanlage", "Summenzähler", "Quartiersversorgung"],
    title: { de: "Mieterstrom und gemeinschaftliche Gebäudeversorgung", en: "Tenant electricity and shared building supply" },
    summary: {
      de: "Strom aus der PV-Anlage auf dem Dach direkt an die Bewohner – ohne das öffentliche Netz zu nutzen. Zwei Modelle, zwei Rechtsrahmen: Mieterstrom mit Zuschlag nach EEG und die gemeinschaftliche Gebäudeversorgung nach § 42b EnWG.",
      en: "Electricity from the rooftop PV system straight to the residents – without using the public grid. Two models, two legal frameworks: tenant electricity with an EEG bonus, and shared building supply under § 42b EnWG.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Eigenheimbesitzer verbrauchen ihren Solarstrom selbst und sparen Netzentgelte, Umlagen und Steuern. Mieter konnten das lange nicht – die Anlage gehört dem Vermieter, der Strom wäre eine Lieferung mit allen Pflichten eines Energieversorgers. Mieterstrom und gemeinschaftliche Gebäudeversorgung sind zwei Antworten des Gesetzgebers auf dieses Problem.",
        },
        { t: "h", level: 2, text: "Warum das wirtschaftlich funktioniert" },
        {
          t: "p",
          text: "Strom, der das öffentliche Netz nicht berührt, verursacht keine [[netzentgelte|Netzentgelte]], keine netzseitigen Umlagen und keine [[konzessionsabgabe|Konzessionsabgabe]]. Bei Anlagen bis 2 MW in räumlichem Zusammenhang entfällt zudem die [[stromsteuer|Stromsteuer]]. Rund die Hälfte des Haushaltsstrompreises besteht aus genau diesen Bestandteilen – das ist der Spielraum, aus dem Betreiber und Bewohner ihren Vorteil ziehen. Was bleibt, ist der Reststrom aus dem Netz, wenn die Sonne nicht scheint.",
        },
        { t: "h", level: 2, text: "Modell 1: Mieterstrom mit Zuschlag (§ 21 Abs. 3 EEG, § 42a EnWG)" },
        {
          t: "p",
          text: "Das klassische Modell seit 2017. Der Anlagenbetreiber – Vermieter, Energiedienstleister oder Genossenschaft – liefert den Solarstrom an die Bewohner **und** beschafft den Reststrom. Er ist damit Stromlieferant mit allen Pflichten: [[energieliefervertrag|Liefervertrag]], [[jahresabrechnung|Rechnung nach § 40 EnWG]], [[stromkennzeichnung|Stromkennzeichnung]], Bilanzkreis. Als Ausgleich zahlt der Netzbetreiber ihm für jede an Letztverbraucher gelieferte Solar-Kilowattstunde den **Mieterstromzuschlag**.",
        },
        {
          t: "table",
          head: ["Voraussetzung", "Regel"],
          rows: [
            ["Anlage", "[[photovoltaik|PV-Anlage]] bis 100 kW auf, an oder in einem Wohngebäude oder einer Nebenanlage; mindestens 40 % der Gebäudefläche wohngenutzt"],
            ["Lieferung", "An Letztverbraucher im selben Gebäude oder in Wohngebäuden und Nebenanlagen im **selben Quartier**, ohne Durchleitung durch das öffentliche Netz"],
            ["Vertrag (§ 42a EnWG)", "Darf **nicht** Bestandteil des Mietvertrags sein; ein Bewohner kann ihn ablehnen oder kündigen, ohne die Wohnung zu verlieren"],
            ["Laufzeit", "Höchstens ein Jahr, stillschweigende Verlängerung zulässig"],
            ["Preis", "Höchstens **90 %** des in dem Netzgebiet geltenden [[grundversorgung|Grundversorgungstarifs]] – für den Gesamtstrom inklusive Reststrom"],
            ["Zuschlag", "Wenige Cent je kWh, nach Anlagengröße gestaffelt und degressiv; die aktuellen Sätze veröffentlicht die Bundesnetzagentur"],
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Die 90-%-Grenze bezieht sich auf den Gesamtpreis, den der Bewohner zahlt – also Grundpreis und Arbeitspreis über Solar- und Reststrom hinweg. Steigt der Grundversorgungstarif, darf der Mieterstrompreis folgen; sinkt er, muss der Betreiber nachziehen. Eine Preisanpassungslogik, die den Grundversorgungstarif des Netzgebiets nicht kennt, kann Mieterstrom nicht abrechnen.",
        },
        { t: "h", level: 2, text: "Modell 2: Gemeinschaftliche Gebäudeversorgung (§ 42b EnWG)" },
        {
          t: "p",
          text: "Eingeführt mit dem **Solarpaket I** im Mai 2024. Der Grundgedanke: Der Betreiber teilt den Solarstrom unter den Teilnehmern auf, ist aber **kein Lieferant** – jeder Bewohner behält seinen eigenen Stromlieferanten für den Reststrom. Damit entfallen die Versorgerpflichten, die das klassische Mieterstrommodell für kleine Vermieter so aufwendig machen.",
        },
        {
          t: "dl",
          items: [
            { term: "Gebäudestromnutzungsvertrag", def: "Regelt zwischen Betreiber und Teilnehmer die Abnahme des Solarstroms, den Preis und den Aufteilungsschlüssel. Der Betreiber schuldet keine Vollversorgung." },
            { term: "Aufteilungsschlüssel", def: "**Statisch**: feste Prozentanteile je Teilnehmer, unabhängig vom Verbrauch. **Dynamisch**: die erzeugte Menge wird je Viertelstunde im Verhältnis des tatsächlichen Verbrauchs verteilt. Der dynamische Schlüssel ist genauer und nutzt mehr Solarstrom vor Ort, verlangt aber Viertelstundenwerte aller Teilnehmer." },
            { term: "Messung", def: "Voraussetzung ist ein [[intelligentes-messsystem|intelligentes Messsystem]] an jeder teilnehmenden Marktlokation und an der Erzeugungsanlage, weil die Aufteilung viertelstündlich erfolgt." },
            { term: "Reststrom", def: "Liefert der Lieferant des jeweiligen Teilnehmers – auf Basis des Verbrauchs, der nach Abzug des zugeteilten Solarstroms übrig bleibt. Die Zuteilung wird über die [[marktkommunikation|Marktkommunikation]] an Netzbetreiber und Lieferanten übermittelt." },
            { term: "Mieterstromzuschlag", def: "Für die gemeinschaftliche Gebäudeversorgung gibt es ihn **nicht**. Der wirtschaftliche Vorteil liegt allein in den entfallenden Netzentgelten, Umlagen und Steuern." },
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für den Lieferanten des Bewohners ist die gemeinschaftliche Gebäudeversorgung ein neuer Fall: Seine Marktlokation bezieht plötzlich weniger aus dem Netz, als der Kunde verbraucht, und die Differenz stammt von einer anderen Marktlokation im selben Gebäude. Die Abrechnung basiert auf dem Netzbezug nach Zuteilung – wer stattdessen den Bruttoverbrauch abrechnet, stellt Solarstrom in Rechnung, den er nie geliefert hat.",
        },
        { t: "h", level: 2, text: "Vergleich" },
        {
          t: "table",
          head: ["", "Mieterstrom (EEG / § 42a EnWG)", "Gemeinschaftliche Gebäudeversorgung (§ 42b EnWG)"],
          rows: [
            ["Betreiber ist Lieferant", "Ja, mit Vollversorgungspflicht", "Nein"],
            ["Reststrom", "Beschafft der Betreiber", "Jeder Teilnehmer über seinen eigenen Lieferanten"],
            ["Mieterstromzuschlag", "Ja", "Nein"],
            ["Preisdeckel", "90 % des Grundversorgungstarifs", "Frei vereinbar"],
            ["Messung", "Summenzähler- oder Unterzählerkonzept, iMSys nicht zwingend", "iMSys an allen Teilnehmern, viertelstündlich"],
            ["Aufwand für den Betreiber", "Hoch – Energieversorger im Kleinformat", "Gering – Aufteilung und Abrechnung des Solarstroms"],
          ],
        },
        { t: "h", level: 2, text: "Kundenanlage – und was der EuGH dazu gesagt hat" },
        {
          t: "p",
          text: "Beide Modelle setzen voraus, dass der Strom das **öffentliche Netz** nicht nutzt. Die Leitungen im Gebäude gelten nach deutschem Recht als **Kundenanlage** (§ 3 Nr. 24a [[enwg|EnWG]]): Energieanlagen auf einem räumlich zusammengehörenden Gebiet, die für den Wettbewerb unbedeutend sind und jedem Lieferanten diskriminierungsfrei offenstehen. Eine Kundenanlage ist kein Netz, ihr Betreiber kein Netzbetreiber – ohne Regulierung, ohne Netzentgelte.",
        },
        {
          t: "note",
          kind: "law",
          text: "Der Europäische Gerichtshof hat am 28. November 2024 (C-293/23) auf Vorlage des Bundesgerichtshofs entschieden, dass das Unionsrecht den Mitgliedstaaten keinen Spielraum lässt, Anlagen, die begrifflich Verteilernetze sind, pauschal von der Regulierung auszunehmen. Das stellt das deutsche Kundenanlagen-Konzept in seiner bisherigen Breite in Frage. Welche Anlagen künftig noch als Kundenanlage gelten, ist Gegenstand der weiteren Rechtsprechung und einer Neuregelung, an der der Gesetzgeber arbeitet. Für Mieterstromprojekte heißt das: Die Rechtslage ist in Bewegung; bestehende Anlagen laufen weiter, bei neuen Projekten gehört die Einordnung der Gebäudeleitungen in die Risikoprüfung.",
        },
        { t: "h", level: 2, text: "Messkonzepte" },
        {
          t: "dl",
          items: [
            { term: "Summenzähler-Modell", def: "Ein Zweirichtungszähler am Netzanschluss misst, was das Gebäude insgesamt bezieht und einspeist. Dahinter erfassen Unterzähler den Verbrauch jeder Wohnung und ein Erzeugungszähler die PV-Produktion. Der Solaranteil je Wohnung ergibt sich rechnerisch. Das Standardmodell für klassischen Mieterstrom." },
            { term: "Unterzähler je Teilnehmer", def: "Die Wohnungszähler sind hier keine eigenständigen Marktlokationen mehr, sondern Untermessungen innerhalb der Kundenanlage. Bewohner, die nicht teilnehmen, behalten eine eigene [[marktlokation|Marktlokation]] am Netz – ihr Zähler wird aus der Summe herausgerechnet." },
            { term: "Virtueller Summenzähler", def: "Statt eines physischen Summenzählers berechnet der Netzbetreiber die Gebäudebilanz aus den Viertelstundenwerten aller beteiligten intelligenten Messsysteme. Das erspart den Umbau des Zählerplatzes und ist das Modell, das § 42b EnWG voraussetzt. Ob und wie es angeboten wird, hängt vom Messkonzept des jeweiligen Netzbetreibers ab." },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Jedes Messkonzept muss vor Umsetzung mit dem [[netzbetreiber|Netzbetreiber]] abgestimmt werden; die meisten veröffentlichen Standard-Messkonzepte für Mieterstrom. Ein wesentlicher Punkt ist die Behandlung der Erzeugungsanlage: Sie bekommt eine eigene Marktlokation für die Einspeisung des Überschusses, siehe [[einspeiseverguetung|Einspeisevergütung]] und [[eigenverbrauch|Eigenverbrauch]].",
        },
        { t: "h", level: 2, text: "Abrechnung" },
        {
          t: "steps",
          items: [
            { title: "Erzeugung und Verbrauch erfassen", text: "PV-Erzeugung, Netzbezug am Summenzähler, Einspeisung und Verbrauch je Teilnehmer – bei § 42b viertelstündlich aus den iMSys." },
            { title: "Solarstrom zuteilen", text: "Nach Aufteilungsschlüssel je Teilnehmer; die Summe der Zuteilungen darf die vor Ort verbrauchte Erzeugung nicht überschreiten. Was nicht verbraucht wird, ist Einspeisung." },
            { title: "Reststrom bestimmen", text: "Verbrauch minus zugeteilter Solarstrom je Teilnehmer. Beim Mieterstrom rechnet der Betreiber ihn mit ab, bei § 42b der jeweilige Lieferant." },
            { title: "Rechnung stellen", text: "Mieterstrom: eine Rechnung mit Solar- und Reststromanteil, Preisdeckel prüfen, [[stromkennzeichnung|Stromkennzeichnung]] beachten. § 42b: der Betreiber rechnet nur den Solarstrom ab, der Lieferant den Netzbezug." },
            { title: "Zuschlag beantragen", text: "Nur beim Mieterstrom: Der Betreiber weist dem Netzbetreiber die an Letztverbraucher gelieferten Solar-Kilowattstunden nach und erhält den Mieterstromzuschlag – gemeinsam mit der Einspeisevergütung für den Überschuss." },
          ],
        },
        {
          t: "example",
          title: "Mieterstrom, ein Monat, drei Wohnungen (vereinfacht)",
          lines: [
            { label: "PV-Erzeugung", value: "1.200 kWh" },
            { label: "Gesamtverbrauch der drei Wohnungen", value: "900 kWh" },
            { label: "Davon zeitgleich aus PV gedeckt (Solaranteil)", value: "540 kWh" },
            { label: "Reststrom aus dem Netz", value: "360 kWh" },
            { label: "Einspeisung des Überschusses", value: "660 kWh" },
          ],
          result: { label: "Mieterstromzuschlag wird gezahlt für", value: "540 kWh" },
        },
        {
          t: "note",
          kind: "warn",
          text: "Der Solaranteil ist nicht „Erzeugung minus Einspeisung“ geteilt durch die Zahl der Wohnungen. Er ist die Menge, die **zeitgleich** erzeugt und verbraucht wurde, und muss je Wohnung nach dem vereinbarten Schlüssel zugeordnet werden. Ein Monatsschlüssel, der nur Summen kennt, überschätzt den Solaranteil bei Bewohnern, die tagsüber nicht zu Hause sind – und unterschätzt damit deren Reststrom.",
        },
      ],
    },
    related: ["photovoltaik", "eigenverbrauch", "einspeiseverguetung", "enwg", "netzanschluss", "marktlokation"],
    sources: [
      { label: "§ 21 EEG – Einspeisevergütung und Mieterstromzuschlag", url: "https://www.gesetze-im-internet.de/eeg_2014/__21.html" },
      { label: "§ 42a EnWG – Mieterstromverträge", url: "https://www.gesetze-im-internet.de/enwg_2005/__42a.html" },
      { label: "§ 42b EnWG – Gemeinschaftliche Gebäudeversorgung", url: "https://www.gesetze-im-internet.de/enwg_2005/__42b.html" },
      { label: "§ 3 EnWG – Begriffsbestimmungen (Nr. 24a Kundenanlage)", url: "https://www.gesetze-im-internet.de/enwg_2005/__3.html" },
      { label: "Bundesnetzagentur – Mieterstrom", url: "https://www.bundesnetzagentur.de/" },
      { label: "EuGH, Urteil vom 28. November 2024, C-293/23", url: "https://curia.europa.eu/" },
    ],
  },
];
