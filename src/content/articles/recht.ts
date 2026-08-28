import type { Article } from "../types";

const U = "2026-08-01";

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
    related: ["stromgvv-gasgvv", "msbg", "grundversorgung", "paragraf-14a-enwg"],
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
    related: ["intelligentes-messsystem", "messstellenbetrieb", "dynamischer-tarif", "enwg"],
    sources: [
      { label: "MsbG im Volltext", url: "https://www.gesetze-im-internet.de/messbg/" },
    ],
  },

  {
    slug: "stromgvv-gasgvv",
    category: "recht",
    updated: U,
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
            ["§ 12", "Abrechnung, Abrechnungszeitraum"],
            ["§ 13", "[[abschlagszahlung|Abschlagszahlungen]]"],
            ["§ 14", "Rechnungen und Abschläge, Zahlung"],
            ["§ 17", "Einwände gegen Rechnungen"],
            ["§ 19", "[[zahlung-und-mahnwesen|Unterbrechung der Versorgung]]"],
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
      { label: "GasGVV", url: "https://www.gesetze-im-internet.de/gasgvv/" },
    ],
  },

  {
    slug: "stromsteuer",
    category: "recht",
    updated: U,
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
            { value: "0,50 ct", label: "je kWh", hint: "ermäßigt für das produzierende Gewerbe" },
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
            "ermäßigter Satz für das produzierende Gewerbe und die Land- und Forstwirtschaft",
          ],
        },
      ],
    },
    related: ["strompreis-zusammensetzung", "energiesteuer", "umsatzsteuer-energie"],
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
    updated: U,
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
      ],
    },
    related: ["netzentgelte", "offshore-netzumlage", "besondere-netznutzung", "strompreis-zusammensetzung"],
  },

  {
    slug: "offshore-netzumlage",
    category: "recht",
    updated: U,
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
      ],
    },
    related: ["kwk-umlage", "netzentgelte", "strompreis-zusammensetzung"],
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
    updated: U,
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
            "Wärmepumpen, nicht öffentliche Ladepunkte, Klimaanlagen und Batteriespeicher",
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
            ["Modul 3", "zusätzlich zeitvariables Netzentgelt – günstig in Schwachlastzeiten", "[[intelligentes-messsystem|intelligentes Messsystem]], ab 2025 wählbar"],
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für Produkte rund um Wärmepumpe und Wallbox ist § 14a eine der wichtigsten Weichenstellungen: Er bestimmt, ob ein zweiter Zählpunkt nötig ist, welches Messkonzept gilt und welchen Tarif der Kunde überhaupt bekommen kann.",
        },
      ],
    },
    related: ["netzentgelte", "intelligentes-messsystem", "dynamischer-tarif", "enwg"],
    sources: [
      {
        label: "Bundesnetzagentur – Integration steuerbarer Verbrauchseinrichtungen",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html",
      },
    ],
  },

  {
    slug: "umsatzsteuer-energie",
    category: "recht",
    updated: U,
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
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Gewerbekunden sehen Nettopreise, Haushaltskunden Bruttopreise. Ein Preisvergleich zwischen beiden Welten geht ohne Umrechnung immer schief – ein Klassiker in Angebotsstrecken, die beide Kundengruppen bedienen.",
        },
      ],
    },
    related: ["strompreis-zusammensetzung", "wasser", "stromsteuer", "letztverbraucher"],
  },
];
