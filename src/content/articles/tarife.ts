import type { Article } from "../types";

const U = "2026-08-01";

export const tarifeArticles: Article[] = [
  {
    slug: "tarif",
    category: "tarife",
    featured: true,
    level: "basis",
    updated: U,
    aka: ["Produkt", "Tarifbezeichnung", "Produktbezeichnung", "Preisblatt"],
    title: { de: "Was ein Tarif ist", en: "What a tariff is" },
    summary: {
      de: "Ein Tarif ist im Kern ein Preisblatt plus Vertragsbedingungen: fast immer ein Grundpreis je Zeitraum und ein Arbeitspreis je verbrauchter Einheit.",
      en: "A tariff is essentially a price sheet plus terms: almost always a standing charge per period and a unit rate per unit consumed.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "So verschieden Tarifnamen klingen – darunter liegt fast immer dieselbe Struktur: ein verbrauchsunabhängiger [[grundpreis|Grundpreis]] und ein verbrauchsabhängiger [[arbeitspreis|Arbeitspreis]]. Alles andere sind Varianten davon.",
        },
        { t: "figure", id: "tarif-anatomie" },
        { t: "h", level: 2, text: "Die Bausteine" },
        {
          t: "dl",
          items: [
            { term: "Grundpreis", def: "€ je Monat oder Jahr, unabhängig vom Verbrauch. Deckt Messung, Abrechnung, Service und Teile des Netzentgelts. Siehe [[grundpreis|Grundpreis]]." },
            { term: "Arbeitspreis", def: "ct je kWh oder € je m³. Auch **Verbrauchspreis** genannt. Siehe [[arbeitspreis|Arbeitspreis]]." },
            { term: "Leistungspreis", def: "€ je kW – nur bei Kunden mit Leistungsmessung. Siehe [[leistungspreis|Leistungspreis]]." },
            { term: "Boni und Rabatte", def: "Neukundenbonus, Sofortbonus, Treuebonus. Rechnerisch Preisnachlässe mit eigenen Bedingungen – ein häufiger Grund für Kundenbeschwerden im zweiten Jahr." },
          ],
        },
        { t: "h", level: 2, text: "Tariftypen" },
        {
          t: "table",
          head: ["Typ", "Preis", "Für wen"],
          rows: [
            ["Grundversorgungstarif", "gesetzlich geregelt, jederzeit kündbar mit 14 Tagen", "wer nichts anderes abgeschlossen hat – siehe [[grundversorgung|Grundversorgung]]"],
            ["Sondervertrag / Standardtarif", "frei kalkuliert, oft 12 Monate Laufzeit", "der Normalfall im Wettbewerb"],
            ["Preisgarantie", "Preis für einen Zeitraum festgeschrieben, meist ohne Steuern und Umlagen", "wer Planbarkeit will"],
            ["Dynamischer Tarif", "stündlich wechselnd nach Börsenpreis", "wer Verbrauch verschieben kann – siehe [[dynamischer-tarif|dynamischer Tarif]]"],
            ["Zweitarif (HT/NT)", "zwei Arbeitspreise nach Uhrzeit", "Nachtspeicher, Wärmepumpe"],
            ["Wärmepumpen- und Heizstromtarif", "eigener, günstigerer Arbeitspreis", "Anlagen nach [[paragraf-14a-enwg|§ 14a EnWG]]"],
          ],
        },
        { t: "h", level: 2, text: "Das Kürzel GV" },
        {
          t: "note",
          kind: "law",
          text: "Nach § 40 Abs. 2 EnWG muss auf der Rechnung erkennbar sein, ob in der Grundversorgung beliefert wird. Üblich ist das Kürzel **> GV <** in der Produktbezeichnung. Fehlt es, handelt es sich um eine Belieferung außerhalb der Grundversorgung.",
        },
        { t: "h", level: 2, text: "Was neben dem Preis im Tarif steckt" },
        {
          t: "ul",
          items: [
            "Vertragslaufzeit, Verlängerung und Kündigungsfrist",
            "Preisgarantie: Umfang und Dauer, meist ohne staatliche Bestandteile",
            "Abschlagsrhythmus – 11 oder 12 Raten, siehe [[abschlagszahlung|Abschlagszahlung]]",
            "Belieferungsbeginn und ob ein [[lieferantenwechsel|Lieferantenwechsel]] oder ein [[umzug|Neueinzug]] vorliegt",
            "Kundengruppe: Haushalt oder Gewerbe – das ändert Preise, Umsatzsteuerausweis und Kündigungsrechte",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "In einem Produktkatalog ist ein Tarif ein Produkt mit Preiskomponenten. Es lohnt sich, Grundpreis und Arbeitspreis wirklich als getrennte Komponenten zu modellieren statt als einen Mischpreis – sonst lassen sich weder Preisänderungen noch anteilige Zeiträume sauber abbilden.",
        },
      ],
    },
    related: ["grundpreis", "arbeitspreis", "dynamischer-tarif", "grundversorgung"],
  },

  {
    slug: "grundpreis",
    category: "tarife",
    updated: U,
    aka: ["Grundgebühr", "Basispreis", "Bereitstellungspreis", "Fixpreis"],
    title: { de: "Grundpreis", en: "Standing charge" },
    summary: {
      de: "Preis für Leistungen, die unabhängig vom Energie- oder Wasserverbrauch entstehen.",
      en: "The charge for services that arise regardless of how much energy or water is consumed.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Auch ein leerstehendes Haus kostet den Versorger Geld: Der Anschluss wird vorgehalten, der Zähler betrieben und geeicht, ein Vertragskonto geführt, eine Rechnung erstellt. Diese Kosten deckt der Grundpreis.",
        },
        {
          t: "ul",
          items: [
            "[[messstellenbetrieb|Messstellenbetrieb]] – Einbau, Betrieb, Eichung, Ablesung",
            "verbrauchsunabhängiger Anteil der [[netzentgelte|Netzentgelte]]",
            "Abrechnung, Kundenservice, Forderungsmanagement",
            "beim [[wasser|Wasser]] zusätzlich die Vorhaltung nach Zählergröße",
          ],
        },
        {
          t: "note",
          kind: "tip",
          text: "Der Grundpreis ist der Grund, warum ein Tarifvergleich ohne Verbrauchsangabe wertlos ist. Bei 1.000 kWh im Jahr schlagen 120 € Grundpreis mit 12 ct/kWh durch, bei 5.000 kWh nur noch mit 2,4 ct/kWh.",
        },
        { t: "figure", id: "tarif-anatomie" },
        {
          t: "p",
          text: "Anteilige Berechnung: Beginnt oder endet die Belieferung mitten im Jahr, wird der Grundpreis taggenau geteilt. Die übliche Formel ist Grundpreis × Tage ÷ 365 – bei unterjähriger Preisänderung entstehen dadurch mehrere Zeilen auf der [[jahresabrechnung|Jahresabrechnung]].",
        },
      ],
    },
    related: ["arbeitspreis", "tarif", "messstellenbetrieb", "jahresabrechnung"],
  },

  {
    slug: "arbeitspreis",
    category: "tarife",
    updated: U,
    aka: ["Verbrauchspreis", "Energiepreis", "Mengenpreis", "ct/kWh"],
    title: { de: "Arbeitspreis (Verbrauchspreis)", en: "Unit rate" },
    summary: {
      de: "Der Preis für eine in Anspruch genommene Kilowattstunde Energie beziehungsweise einen Kubikmeter Wasser.",
      en: "The price for one kilowatt-hour of energy consumed, or one cubic metre of water.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Arbeitspreis ist der Teil der Rechnung, der mit dem Verhalten des Kunden skaliert – und deshalb der Hebel jeder Spar-Kommunikation. In ihm stecken Beschaffung, Vertriebsmarge, der verbrauchsabhängige Teil des Netzentgelts sowie sämtliche Umlagen und Steuern je Kilowattstunde.",
        },
        {
          t: "table",
          head: ["Sparte", "Einheit", "Größenordnung 2026 (Haushalt, brutto)"],
          align: ["l", "l", "r"],
          rows: [
            ["Strom", "ct/kWh", "rund 33 – 40"],
            ["Erdgas", "ct/kWh", "rund 10 – 13"],
            ["Trinkwasser", "€/m³", "rund 1,80 – 2,60"],
            ["Fernwärme", "ct/kWh", "rund 10 – 18"],
          ],
          caption:
            "Bandbreiten, keine Angebote: Netzentgelte und Konzessionsabgaben sind regional sehr verschieden.",
        },
        { t: "h", level: 2, text: "Mehrere Arbeitspreise in einem Vertrag" },
        {
          t: "ul",
          items: [
            "**HT/NT** – Hoch- und Niedertarif mit getrennten [[zaehlwerk|Zählwerken]]",
            "**Staffelpreise** – ein niedrigerer Preis ab einer bestimmten Jahresmenge, vor allem im Gewerbe",
            "**Stündlich wechselnd** – im [[dynamischer-tarif|dynamischen Tarif]]",
            "**Zeitraumbezogen** – nach einer [[preisanpassung|Preisänderung]] gelten für ein Abrechnungsjahr zwei Preise nacheinander",
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Bei einer unterjährigen Preisänderung wird der Jahresverbrauch nicht einfach halbiert. Ohne echte Zwischenablesung wird er nach Gradtagszahlen oder Lastprofil auf die Teilzeiträume verteilt – ein häufiger Grund, warum Kunden ihre Abrechnung nicht nachrechnen können.",
        },
      ],
    },
    related: ["grundpreis", "verbrauch", "preisanpassung", "dynamischer-tarif"],
  },

  {
    slug: "leistungspreis",
    category: "tarife",
    updated: U,
    aka: ["Leistungsmessung", "kW-Preis", "Jahreshöchstleistung", "RLM"],
    title: { de: "Leistungspreis", en: "Capacity charge" },
    summary: {
      de: "Für die in Anspruch genommene Leistung in Kilowatt wird je nach Vereinbarung ein Leistungspreis in Rechnung gestellt – bezogen auf die höchste gemessene Viertelstunde des Jahres.",
      en: "A charge per kilowatt of capacity used, based on the highest quarter-hour peak measured during the year.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Wer viel Leistung gleichzeitig zieht, zwingt den Netzbetreiber zu dickeren Kabeln und größeren Transformatoren – unabhängig davon, wie viele Stunden im Jahr das passiert. Deshalb zahlen Kunden mit Leistungsmessung nicht nur für Arbeit, sondern auch für Leistung.",
        },
        {
          t: "formula",
          expr: "Netzentgelt  =  Leistungspreis [€/kW·a]  ×  Jahreshöchstleistung [kW]  +  Arbeitspreis [ct/kWh]  ×  Verbrauch [kWh]",
        },
        { t: "h", level: 2, text: "Wer betroffen ist" },
        {
          t: "p",
          text: "Ab einem Jahresverbrauch von rund 100.000 kWh oder einer Leistung über 30 kW wird registrierende Leistungsmessung (RLM) vorgeschrieben – dann zählt der [[lastprofil|Lastgang]] statt eines Standardlastprofils.",
        },
        {
          t: "example",
          title: "Eine einzige Viertelstunde entscheidet",
          lines: [
            { label: "Jahresverbrauch", value: "420.000 kWh" },
            { label: "Höchste Viertelstunde", value: "180 kW" },
            { label: "Leistungspreis", value: "95 €/kW·a" },
            { label: "Leistungsentgelt", value: "17.100 €" },
          ],
          result: { label: "Ersparnis bei 20 kW weniger Spitze", value: "1.900 € im Jahr" },
        },
        {
          t: "note",
          kind: "tip",
          text: "Das ist der wirtschaftliche Kern von **Lastspitzenmanagement**: Nicht weniger verbrauchen, sondern gleichmäßiger. Ein einziger unglücklich getakteter Anlagenstart kann die Jahresrechnung spürbar verteuern.",
        },
        {
          t: "p",
          text: "Verwandt, aber nicht identisch: die [[blindarbeit|Blindarbeit]]. Auch sie wird nur bei Kunden mit Leistungsmessung abgerechnet – und auch nur oberhalb einer vereinbarten Grenze.",
        },
      ],
    },
    related: ["lastprofil", "netzentgelte", "blindarbeit", "arbeitspreis"],
  },

  {
    slug: "dynamischer-tarif",
    category: "tarife",
    featured: true,
    updated: U,
    aka: ["dynamischer Stromtarif", "§ 41a EnWG", "Spotpreis", "Day-Ahead", "EPEX", "variabler Tarif"],
    title: { de: "Dynamische Stromtarife", en: "Dynamic electricity tariffs" },
    summary: {
      de: "Der Arbeitspreis folgt stündlich dem Börsenpreis. Seit Januar 2025 muss jeder Lieferant einen solchen Tarif anbieten – Voraussetzung beim Kunden ist ein intelligentes Messsystem.",
      en: "The unit rate follows the hourly exchange price. Since January 2025 every supplier must offer one – provided the customer has a smart metering system.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "In einem dynamischen Tarif ist der Arbeitspreis nicht mehr eine Zahl im Vertrag, sondern eine Formel: Börsenpreis der jeweiligen Stunde plus ein fester Aufschlag für Netzentgelte, Umlagen, Steuern und die Marge des Lieferanten.",
        },
        { t: "figure", id: "dynamischer-tarif" },
        { t: "h", level: 2, text: "Woher der Preis kommt" },
        {
          t: "steps",
          items: [
            { title: "Day-Ahead-Auktion", text: "Jeden Mittag werden an der Strombörse die Preise für alle 24 Stunden des Folgetags ermittelt. Ab diesem Moment stehen sie fest." },
            { title: "Umrechnung in ct/kWh", text: "Börsenpreise stehen in €/MWh. 95 €/MWh sind 9,5 ct/kWh – siehe [[energie-einheiten|Einheiten]]." },
            { title: "Aufschlag", text: "Netzentgelt, [[kwk-umlage|Umlagen]], [[stromsteuer|Stromsteuer]], [[konzessionsabgabe|Konzessionsabgabe]], Marge und Umsatzsteuer kommen dazu – in Summe grob 18 bis 22 ct/kWh." },
            { title: "Abrechnung", text: "Der [[intelligentes-messsystem|iMSys]]-Lastgang wird viertelstündlich mit dem jeweiligen Preis bewertet und aufsummiert." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "**§ 41a EnWG**: Seit dem 1. Januar 2025 muss jeder Lieferant, der Letztverbraucher beliefert, einen dynamischen Stromvertrag anbieten, sofern beim Kunden ein intelligentes Messsystem im Sinne des [[msbg|MsbG]] installiert ist. Die frühere Schwelle von 100.000 Kunden ist mit dem GNDEW entfallen.",
        },
        { t: "h", level: 2, text: "Für wen sich das lohnt" },
        {
          t: "cards",
          items: [
            { title: "Lohnt sich", text: "Wärmepumpe, Wallbox, Batteriespeicher, Homeoffice mit steuerbaren Geräten – alles, was Verbrauch zeitlich verschieben kann." },
            { title: "Lohnt sich kaum", text: "Kleine Wohnung mit starrem Tagesablauf. Wer abends um 18 Uhr kocht, trifft genau die teuerste Stunde." },
            { title: "Braucht Automatik", text: "Ohne Energiemanagement, das automatisch auf Preissignale reagiert, bleibt der Vorteil meist theoretisch." },
            { title: "Braucht Nerven", text: "Preisspitzen sind real. Ein Tarif ohne Deckel kann in einzelnen Stunden ein Vielfaches des Festpreises kosten." },
          ],
        },
        { t: "h", level: 2, text: "Abgrenzung" },
        {
          t: "table",
          head: ["Modell", "Preisänderung", "Voraussetzung"],
          rows: [
            ["Festpreis", "nur durch [[preisanpassung|Preisanpassung]]", "beliebiger Zähler"],
            ["Zweitarif HT/NT", "zweimal am Tag, fest terminiert", "[[zaehlertypen|Zweitarifzähler]]"],
            ["Zeitvariabler Tarif", "feste Zeitfenster mit festen Preisen", "iMSys oder Zweitarifzähler"],
            ["Dynamischer Tarif", "stündlich nach Börse", "[[intelligentes-messsystem|iMSys]] zwingend"],
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Produktseitig ist ein dynamischer Tarif kein Preis, sondern eine Preisregel plus Datenquelle. Wer ihn im Katalog wie einen Festpreis modelliert, scheitert spätestens bei Vergleichsrechner, Abschlagsprognose und Rechnungserklärung.",
        },
      ],
    },
    related: ["intelligentes-messsystem", "arbeitspreis", "lastprofil", "paragraf-14a-enwg"],
    sources: [
      {
        label: "§ 41a EnWG – Dynamische Stromtarife",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__41a.html",
      },
    ],
  },

  {
    slug: "strompreis-zusammensetzung",
    category: "tarife",
    featured: true,
    updated: U,
    aka: ["Strompreisbestandteile", "Preisbestandteile Strom", "Strompreis 2026"],
    title: { de: "Woraus der Strompreis besteht", en: "What makes up the electricity price" },
    summary: {
      de: "Rund 40 % Beschaffung und Vertrieb, ein Viertel Netzentgelte, der Rest Steuern, Abgaben und Umlagen – jede Position einzeln erklärt.",
      en: "Roughly 40 % procurement and sales, a quarter grid fees, the rest taxes, charges and levies – every position explained.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Von einem Euro Stromrechnung geht weniger als die Hälfte an den Lieferanten. Der Rest ist Netz und Staat – und das ist der Grund, warum Anbieterwechsel zwar lohnt, aber nie so viel bringt, wie man erwartet.",
        },
        { t: "figure", id: "strompreis-stack" },
        { t: "h", level: 2, text: "Die Positionen im Einzelnen" },
        {
          t: "dl",
          items: [
            { term: "Beschaffung und Vertrieb", def: "Einkauf der Energiemenge an Börse oder über Termingeschäfte, plus Vertriebskosten und Marge. Der einzige echte Wettbewerbsanteil." },
            { term: "[[netzentgelte|Netzentgelte]]", def: "Transport und Verteilung. Regional sehr unterschiedlich, von der Bundesnetzagentur reguliert." },
            { term: "[[messstellenbetrieb|Messstellenbetrieb]]", def: "Zähler stellen, betreiben, ablesen. Preisobergrenzen im [[msbg|MsbG]]." },
            { term: "[[kwk-umlage|KWKG-Umlage]]", def: "0,446 ct/kWh im Jahr 2026." },
            { term: "[[offshore-netzumlage|Offshore-Netzumlage]]", def: "0,941 ct/kWh im Jahr 2026." },
            { term: "[[besondere-netznutzung|Aufschlag für besondere Netznutzung]]", def: "1,559 ct/kWh im Jahr 2026 – bis 2024 § 19 StromNEV-Umlage." },
            { term: "[[konzessionsabgabe|Konzessionsabgabe]]", def: "1,32 bis 2,39 ct/kWh je nach Gemeindegröße." },
            { term: "[[stromsteuer|Stromsteuer]]", def: "2,05 ct/kWh, unverändert seit Jahren." },
            { term: "[[umsatzsteuer-energie|Umsatzsteuer]]", def: "19 % auf die Summe aller vorstehenden Positionen." },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Die [[eeg-umlage|EEG-Umlage]] steht in vielen älteren Erklärstücken noch drin. Sie liegt seit dem 1. Juli 2022 bei null und wird seither aus dem Bundeshaushalt finanziert. Auch die [[umlage-abschaltbare-lasten|Umlage für abschaltbare Lasten]] wird nicht mehr erhoben.",
        },
        { t: "h", level: 2, text: "Größenordnung 2026" },
        {
          t: "stats",
          items: [
            { value: "≈ 37 ct", label: "je kWh brutto", hint: "Haushalt, 3.500 kWh im Jahr" },
            { value: "≈ 41 %", label: "Beschaffung & Vertrieb" },
            { value: "≈ 25 %", label: "Netzentgelte" },
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Alle Zahlen sind Durchschnitte. Zwischen zwei Netzgebieten können mehrere Cent je Kilowattstunde liegen – und zwischen zwei Anbietern im selben Netzgebiet noch einmal ähnlich viel.",
        },
      ],
    },
    related: ["netzentgelte", "stromsteuer", "konzessionsabgabe", "gaspreis-zusammensetzung"],
    sources: [
      {
        label: "BDEW – Pressematerialien Strompreis",
        url: "https://www.bdew.de/presse/pressemappen/strompreis/",
      },
      {
        label: "netztransparenz.de – Umlagen 2026",
        url: "https://www.netztransparenz.de/",
      },
    ],
  },

  {
    slug: "gaspreis-zusammensetzung",
    category: "tarife",
    updated: U,
    aka: ["Gaspreisbestandteile", "Gaspreis 2026", "Gasspeicherumlage"],
    title: { de: "Woraus der Gaspreis besteht", en: "What makes up the gas price" },
    summary: {
      de: "Beschaffung, Netz, Energiesteuer, CO₂-Preis und Konzessionsabgabe – seit 2026 ohne Gasspeicherumlage, dafür mit steigendem CO₂-Anteil.",
      en: "Procurement, grid, energy tax, carbon price and concession fee – from 2026 without the storage levy, but with a rising carbon share.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Gaspreis ist einfacher gebaut als der Strompreis: weniger Umlagen, dafür zwei Steuern nebeneinander – die klassische [[energiesteuer|Energiesteuer]] und der [[co2-preis|CO₂-Preis]] nach BEHG.",
        },
        { t: "figure", id: "gaspreis-stack" },
        { t: "h", level: 2, text: "Was sich 2026 geändert hat" },
        {
          t: "ul",
          items: [
            "Die **Gasspeicherumlage entfällt** zum 1. Januar 2026 – der Bund übernimmt diese Kosten vollständig",
            "Der **CO₂-Preis** wird nicht mehr fest gesetzt, sondern in einem Korridor von 55 bis 65 €/t versteigert; die Auktionen starten im Juli 2026 an der EEX",
            "Die **Energiesteuer** bleibt unverändert bei 0,55 ct/kWh",
          ],
        },
        { t: "h", level: 2, text: "Die Positionen" },
        {
          t: "table",
          head: ["Position", "Größenordnung 2026 netto", "Art"],
          align: ["l", "r", "l"],
          rows: [
            ["Beschaffung & Vertrieb", "≈ 4 ct/kWh", "Wettbewerb"],
            ["[[netzentgelte|Netzentgelt]]", "≈ 2 ct/kWh", "reguliert"],
            ["Bilanzierungsumlage (SLP)", "wenige Hundertstel ct/kWh", "jährlich festgelegt"],
            ["[[co2-preis|CO₂-Preis]]", "1,00 – 1,18 ct/kWh", "55 – 65 €/t"],
            ["[[energiesteuer|Energiesteuer]]", "0,55 ct/kWh", "Steuer"],
            ["[[konzessionsabgabe|Konzessionsabgabe]] Heizgas", "0,22 – 0,40 ct/kWh", "kommunal"],
            ["[[umsatzsteuer-energie|Umsatzsteuer]]", "19 %", "auf alles davor"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Für Kochgas und Warmwasser gilt eine höhere Konzessionsabgabe als für Heizgas – 0,51 bis 0,93 ct/kWh statt 0,22 bis 0,40 ct/kWh. In der Praxis wird bei Haushalten meist der Heizgassatz angesetzt.",
        },
      ],
    },
    related: ["erdgas", "co2-preis", "energiesteuer", "strompreis-zusammensetzung"],
  },

  {
    slug: "grundversorgung",
    category: "tarife",
    updated: U,
    aka: ["GV", "Grundversorger", "§ 36 EnWG", "Allgemeine Preise", "Tarifkunde"],
    title: { de: "Grundversorgung", en: "Basic supply" },
    summary: {
      de: "Die gesetzlich geregelte Belieferung von Haushaltskunden zu allgemeinen Preisen durch den Grundversorger – kündbar mit zwei Wochen Frist.",
      en: "The statutory supply of household customers at general prices by the designated basic supplier – terminable at two weeks' notice.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Niemand soll ohne Energie dastehen, nur weil er keinen Vertrag abgeschlossen hat. Deshalb bestimmt § 36 EnWG für jedes Netzgebiet einen Grundversorger: das Unternehmen, das dort die meisten Haushaltskunden beliefert. Alle drei Jahre wird neu festgestellt, wer das ist.",
        },
        { t: "h", level: 2, text: "Wer in der Grundversorgung landet" },
        {
          t: "ul",
          items: [
            "wer nach einem Einzug einfach Strom oder Gas verbraucht, ohne einen Vertrag zu schließen",
            "wer nach dem Ende der [[ersatzversorgung|Ersatzversorgung]] nichts unternimmt",
            "wer bewusst dort bleibt, weil er die kurze Kündigungsfrist schätzt",
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Die Kündigungsfrist in der Grundversorgung beträgt **zwei Wochen**. Der Grundversorger seinerseits ist zur Belieferung verpflichtet und kann nur unter engen Voraussetzungen ablehnen.",
        },
        { t: "h", level: 2, text: "Preis und Kennzeichnung" },
        {
          t: "p",
          text: "In der Grundversorgung gelten die **allgemeinen Preise**. Sie müssen veröffentlicht werden, und Änderungen sind mindestens sechs Wochen vorher anzukündigen – mit [[preisanpassung|Sonderkündigungsrecht]]. Auf der Rechnung ist die Grundversorgung durch das Kürzel **> GV <** in der Produktbezeichnung erkennbar.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Der Ruf der Grundversorgung als „teuerster Tarif“ stimmt nicht immer. In Phasen stark steigender Beschaffungspreise war sie zeitweise günstiger als Neukundenangebote, weil Grundversorger langfristiger einkaufen.",
        },
      ],
    },
    related: ["ersatzversorgung", "stromgvv-gasgvv", "tarif", "preisanpassung"],
    sources: [
      {
        label: "§ 36 EnWG – Grundversorgungspflicht",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__36.html",
      },
    ],
  },

  {
    slug: "ersatzversorgung",
    category: "tarife",
    updated: U,
    aka: ["§ 38 EnWG", "Ersatzbelieferung", "Notversorgung"],
    title: { de: "Ersatzversorgung", en: "Substitute supply" },
    summary: {
      de: "Eine Übergangslösung von höchstens drei Monaten, wenn Energie bezogen wird, ohne dass sie einem Liefervertrag zugeordnet werden kann.",
      en: "A stopgap of at most three months when energy is drawn without being assignable to any supply contract.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ersatzversorgung ist der Auffangfall: Es fließt Energie, aber niemand ist dafür zuständig. Nach § 38 EnWG gilt sie dann als vom Grundversorger geliefert – automatisch, ohne dass jemand etwas unterschreibt.",
        },
        { t: "h", level: 2, text: "Typische Auslöser" },
        {
          t: "ul",
          items: [
            "Der bisherige Lieferant verliert das Recht zur Netznutzung oder wird insolvent",
            "Ein [[lieferantenwechsel|Lieferantenwechsel]] verzögert sich, der alte Vertrag ist aber schon beendet",
            "Ein Einzug wird nicht gemeldet und die Entnahmestelle keinem Vertrag zugeordnet",
          ],
        },
        { t: "h", level: 2, text: "Unterschied zur Grundversorgung" },
        {
          t: "table",
          head: ["", "[[grundversorgung|Grundversorgung]] (§ 36)", "Ersatzversorgung (§ 38)"],
          rows: [
            ["Dauer", "unbefristet", "höchstens drei Monate"],
            ["Kündigungsfrist", "zwei Wochen", "keine – jederzeit beendbar"],
            ["Zustandekommen", "durch schlüssiges Verhalten", "kraft Gesetzes"],
            ["Danach", "—", "geht automatisch in die Grundversorgung über"],
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für Onboarding-Prozesse ist die Ersatzversorgung ein wichtiger Zustand: Ein Kunde, der aus ihr heraus wechselt, hat **keine** Kündigungsfrist zu beachten. Das ist ein starkes Argument in der Kommunikation – und ein Feld, das man im Prozess abfragen sollte.",
        },
      ],
    },
    related: ["grundversorgung", "lieferantenwechsel", "umzug", "enwg"],
    sources: [
      {
        label: "§ 38 EnWG – Ersatzversorgung mit Energie",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__38.html",
      },
    ],
  },

  {
    slug: "preisanpassung",
    category: "tarife",
    updated: U,
    aka: ["Preisänderung", "Preiserhöhung", "Sonderkündigungsrecht", "Preisgarantie"],
    title: { de: "Preisanpassung und Sonderkündigungsrecht", en: "Price changes and special termination rights" },
    summary: {
      de: "Preise dürfen sich ändern – aber nur angekündigt, transparent begründet und mit einem Sonderkündigungsrecht für den Kunden.",
      en: "Prices may change – but only with prior notice, a transparent explanation and a special right of termination for the customer.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Eine Preisänderung ist der sensibelste Moment einer Kundenbeziehung. Rechtlich ist sie streng formalisiert, kommunikativ entscheidet sie über Kündigungsquoten.",
        },
        { t: "h", level: 2, text: "Die Pflichten" },
        {
          t: "steps",
          items: [
            { title: "Ankündigung", text: "Mindestens sechs Wochen vor Wirksamwerden, in klarer und verständlicher Sprache, direkt an den Kunden." },
            { title: "Begründung", text: "Anlass, Voraussetzungen und Umfang müssen erkennbar sein – welche Bestandteile steigen, welche sinken." },
            { title: "Sonderkündigungsrecht", text: "Der Kunde kann zum Zeitpunkt des Wirksamwerdens kündigen, unabhängig von der vereinbarten Laufzeit." },
            { title: "Umsetzung", text: "Ab dem Stichtag gilt der neue Preis. Der Abrechnungszeitraum zerfällt in Teilzeiträume mit je eigenem [[arbeitspreis|Arbeitspreis]]." },
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Ohne echte Ablesung zum Stichtag wird der Verbrauch auf die Teilzeiträume **verteilt** – bei Gas nach Gradtagszahlen, bei Strom nach [[lastprofil|Lastprofil]]. Genau deshalb erscheint auf der [[jahresabrechnung|Jahresabrechnung]] der Hinweis „Verbrauchszuordnung wegen unterjähriger Preisänderung“.",
        },
        { t: "h", level: 2, text: "Preisgarantie – und was sie nicht abdeckt" },
        {
          t: "p",
          text: "Eine „eingeschränkte Preisgarantie“ deckt in der Regel nur Beschaffung und Vertrieb. Ändern sich [[netzentgelte|Netzentgelte]], Umlagen, [[stromsteuer|Steuern]] oder die [[umsatzsteuer-energie|Umsatzsteuer]], darf der Preis trotzdem steigen. Eine Vollpreisgarantie ist selten und teuer.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Preisänderungen sind ein Massenprozess: Tausende Verträge, jeweils mit Anschreiben, neuem Preisblatt, angepasstem [[abschlagszahlung|Abschlag]] und einem Kündigungsfenster. Wer diesen Prozess sauber automatisiert, spart mehr Aufwand als mit den meisten Features im Tagesgeschäft.",
        },
      ],
    },
    related: ["arbeitspreis", "jahresabrechnung", "abschlagszahlung", "grundversorgung"],
  },

  {
    slug: "stromkennzeichnung",
    category: "tarife",
    updated: U,
    aka: ["Energiemix", "Herkunftsnachweis", "§ 42 EnWG", "Ökostrom"],
    title: { de: "Stromkennzeichnung", en: "Electricity labelling" },
    summary: {
      de: "Informiert über die Herkunft des bezogenen Stroms – den Energiemix – und dessen Umweltauswirkungen. Sie ist gesetzlich vorgeschrieben.",
      en: "Discloses the origin of the electricity supplied – the energy mix – and its environmental impact. Legally mandatory.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Weil sich im Netz nicht unterscheiden lässt, welches Elektron aus welchem Kraftwerk stammt, ist die Stromkennzeichnung eine rein bilanzielle Aussage: Sie sagt, welche Erzeugung der Lieferant für seine Kunden **eingekauft** hat.",
        },
        { t: "h", level: 2, text: "Was ausgewiesen werden muss" },
        {
          t: "ul",
          items: [
            "Anteile der Energieträger: erneuerbar (EEG-gefördert und sonstige), Kernenergie, Kohle, Erdgas, sonstige fossile",
            "CO₂-Emissionen in Gramm je Kilowattstunde",
            "radioaktiver Abfall in Milligramm je Kilowattstunde",
            "Vergleich mit dem Durchschnitt der Stromerzeugung in Deutschland",
          ],
        },
        {
          t: "p",
          text: "Die Angaben gehören auf die Rechnung oder in eine Anlage dazu und müssen zusätzlich auf der Website veröffentlicht werden. Rechtsgrundlage ist § 42 [[enwg|EnWG]].",
        },
        { t: "h", level: 2, text: "Herkunftsnachweise" },
        {
          t: "p",
          text: "Ökostrom wird über **Herkunftsnachweise** (HKN) belegt, die das Umweltbundesamt in einem Register führt. Ein Nachweis wird bei Nutzung entwertet, damit dieselbe Kilowattstunde nicht zweimal als grün verkauft wird. Der Nachweis kann getrennt von der physischen Lieferung gehandelt werden – deshalb sagt „100 % Ökostrom“ allein wenig über die Wirkung aus.",
        },
        {
          t: "note",
          kind: "info",
          text: "Strom, dessen Erzeugung über die [[eeg-umlage|EEG-Förderung]] finanziert wurde, wird in der Kennzeichnung gesondert ausgewiesen und darf nicht zusätzlich als Ökostromprodukt vermarktet werden.",
        },
      ],
    },
    related: ["strom", "enwg", "jahresabrechnung"],
    sources: [
      {
        label: "§ 42 EnWG – Stromkennzeichnung",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__42.html",
      },
    ],
  },
];
