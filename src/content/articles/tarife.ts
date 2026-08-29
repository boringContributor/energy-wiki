import type { Article } from "../types";

const U = "2026-08-01";

export const tarifeArticles: Article[] = [
  {
    slug: "tarif",
    category: "tarife",
    featured: true,
    level: "basis",
    updated: "2026-08-29",
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
            ["Dynamischer Tarif", "stündlich bzw. viertelstündlich (96 Werte je Tag) wechselnd nach Börsenpreis", "wer Verbrauch verschieben kann – siehe [[dynamischer-tarif|dynamischer Tarif]]"],
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
    related: ["grundpreis", "arbeitspreis", "dynamischer-tarif", "grundversorgung", "bonus-preisgarantie", "zeitvariable-netzentgelte"],
    sources: [
      {
        label: "§ 40 EnWG – Strom- und Gasrechnungen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40.html",
      },
      {
        label: "§ 41 EnWG – Energielieferverträge mit Letztverbrauchern",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__41.html",
      },
    ],
  },

  {
    slug: "grundpreis",
    category: "tarife",
    updated: "2026-08-29",
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
          text: "**Anteilige Berechnung:** Beginnt oder endet die Belieferung mitten im Jahr, wird der Grundpreis taggenau geteilt. Die übliche Formel ist Jahresgrundpreis × Tage ÷ Tage des Jahres – also ÷ 365, in Schaltjahren wie 2028 aber ÷ 366. Wer 365 fest verdrahtet, rechnet in jedem vierten Jahr einen Tag zu viel ab. Ist der Grundpreis als Monatspreis vereinbart, gibt es zwei Lesarten: Monatspreis × 12 ÷ Tage des Jahres, oder taggenau innerhalb des jeweiligen Monats (Monatspreis ÷ 28 bis 31 Tage) – beide sind üblich, liefern aber leicht unterschiedliche Beträge. Bei unterjähriger Preisänderung entstehen dadurch mehrere Zeilen auf der [[jahresabrechnung|Jahresabrechnung]].",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Ein typischer Fehler in Abrechnungssystemen: Der Abrechnungszeitraum läuft über den Jahreswechsel, das eine Kalenderjahr hat 365 Tage, das andere 366 – und die Zeitscheiben werden mit dem falschen Nenner bewertet. Sauber ist, jede Zeitscheibe mit den Tagen ihres eigenen Kalenderjahres zu gewichten.",
        },
      ],
    },
    related: ["arbeitspreis", "tarif", "messstellenbetrieb", "jahresabrechnung"],
    sources: [
      {
        label: "§ 40 EnWG – Strom- und Gasrechnungen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40.html",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
    ],
  },

  {
    slug: "arbeitspreis",
    category: "tarife",
    updated: "2026-08-29",
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
            "**Stündlich bzw. viertelstündlich (96 Werte je Tag) wechselnd** – im [[dynamischer-tarif|dynamischen Tarif]]",
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
    related: ["grundpreis", "verbrauch", "preisanpassung", "dynamischer-tarif", "zeitvariable-netzentgelte"],
    sources: [
      {
        label: "§ 40 EnWG – Strom- und Gasrechnungen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40.html",
      },
      {
        label: "§ 41 EnWG – Energielieferverträge mit Letztverbrauchern",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__41.html",
      },
      {
        label: "BDEW – Pressematerialien Strompreis",
        url: "https://www.bdew.de/presse/pressemappen/strompreis/",
      },
    ],
  },

  {
    slug: "leistungspreis",
    category: "tarife",
    updated: "2026-08-29",
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
          text: "Das gesetzliche Kriterium ist allein der Verbrauch: Ab einem Jahresverbrauch von 100.000 kWh ist registrierende Leistungsmessung (RLM) vorgeschrieben (§ 12 StromNZV) – dann zählt der [[lastprofil|Lastgang]] statt eines Standardlastprofils. Eine Leistungsgrenze in kW nennt das Gesetz nicht. Manche Verteilnetzbetreiber arbeiten aber mit eigenen, internen Grenzwerten – etwa einer Anschlussleistung, ab der sie auch unterhalb der 100.000 kWh eine Leistungsmessung vorsehen. Sie stehen in den technischen Anschlussbedingungen oder im Preisblatt, nicht in der Verordnung.",
        },
        { t: "h", level: 2, text: "Zwei Preisblätter, zwei Zeitbezüge" },
        {
          t: "p",
          text: "[[netzbetreiber|Netzbetreiber]] veröffentlichen für RLM-Kunden zwei Preisblätter, getrennt nach **Benutzungsstunden** (Jahresverbrauch ÷ Jahreshöchstleistung): eines für weniger als 2.500 Stunden im Jahr mit niedrigem Leistungs- und hohem Arbeitspreis, eines ab 2.500 Stunden mit umgekehrtem Verhältnis. Wer gleichmäßig verbraucht, fährt mit dem zweiten besser – die Zuordnung ergibt sich erst am Jahresende aus den gemessenen Werten.",
        },
        {
          t: "note",
          kind: "info",
          text: "**Jahres- oder Monatsleistungspreis:** Beim Jahresleistungspreis zählt die höchste Viertelstunde des gesamten Jahres. Beim Monatsleistungspreis wird die Höchstlast jedes Monats einzeln bewertet und summiert – üblich in der Gaswirtschaft und bei saisonalen Verbrauchern, für die eine einzige Winterspitze sonst das ganze Jahr verteuern würde.",
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
    related: ["lastprofil", "netzentgelte", "blindarbeit", "arbeitspreis", "netznutzungsabrechnung", "zeitvariable-netzentgelte"],
    sources: [
      {
        label: "§ 12 StromNZV – Zählerstandsgangmessung und Lastgangmessung",
        url: "https://dejure.org/gesetze/StromNZV/12.html",
      },
      {
        label: "§ 17 StromNEV – Ermittlung der Netzentgelte",
        url: "https://www.gesetze-im-internet.de/stromnev/__17.html",
      },
    ],
  },

  {
    slug: "dynamischer-tarif",
    category: "tarife",
    featured: true,
    updated: "2026-08-29",
    aka: ["dynamischer Stromtarif", "§ 41a EnWG", "Spotpreis", "Day-Ahead", "EPEX", "variabler Tarif"],
    title: { de: "Dynamische Stromtarife", en: "Dynamic electricity tariffs" },
    summary: {
      de: "Der Arbeitspreis folgt stündlich bzw. viertelstündlich dem Börsenpreis. Seit Januar 2025 muss jeder Lieferant einen solchen Tarif anbieten – Voraussetzung beim Kunden ist ein intelligentes Messsystem.",
      en: "The unit rate follows the hourly or quarter-hourly exchange price. Since January 2025 every supplier must offer one – provided the customer has a smart metering system.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "In einem dynamischen Tarif ist der Arbeitspreis nicht mehr eine Zahl im Vertrag, sondern eine Formel: Börsenpreis der jeweiligen Stunde bzw. Viertelstunde plus ein fester Aufschlag für Netzentgelte, Umlagen, Steuern und die Marge des Lieferanten.",
        },
        { t: "figure", id: "dynamischer-tarif" },
        { t: "h", level: 2, text: "Woher der Preis kommt" },
        {
          t: "steps",
          items: [
            { title: "Day-Ahead-Auktion", text: "Jeden Mittag werden an der Strombörse die Preise für den gesamten Folgetag ermittelt – seit dem 1. Oktober 2025 an der EPEX Spot in Viertelstunden, also stündlich bzw. viertelstündlich (96 Werte je Tag). Ab diesem Moment stehen sie fest." },
            { title: "Umrechnung in ct/kWh", text: "Börsenpreise stehen in €/MWh. 95 €/MWh sind 9,5 ct/kWh – siehe [[energie-einheiten|Einheiten]]." },
            { title: "Aufschlag", text: "Netzentgelt, [[kwk-umlage|Umlagen]], [[stromsteuer|Stromsteuer]], [[konzessionsabgabe|Konzessionsabgabe]], Marge und Umsatzsteuer kommen dazu – in Summe grob 18 bis 22 ct/kWh." },
            { title: "Abrechnung", text: "Der [[intelligentes-messsystem|iMSys]]-Lastgang wird viertelstündlich mit dem jeweiligen Preis bewertet und aufsummiert." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "**§ 41a EnWG**: Seit dem 1. Januar 2025 muss jeder Lieferant, der Letztverbraucher beliefert, einen dynamischen Stromvertrag anbieten, sofern beim Kunden ein intelligentes Messsystem im Sinne des [[msbg|MsbG]] installiert ist. Die frühere Schwelle von 200.000 Letztverbrauchern (§ 41a Abs. 2 EnWG a.F.) ist mit dem GNDEW entfallen.",
        },
        { t: "h", level: 2, text: "Für wen sich das lohnt" },
        {
          t: "cards",
          items: [
            { title: "Lohnt sich", text: "Wärmepumpe, Wallbox, Batteriespeicher, Homeoffice mit steuerbaren Geräten – alles, was Verbrauch zeitlich verschieben kann." },
            { title: "Lohnt sich kaum", text: "Kleine Wohnung mit starrem Tagesablauf. Wer abends um 18 Uhr kocht, trifft genau die teuersten Stunden." },
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
            ["Dynamischer Tarif", "stündlich bzw. viertelstündlich (96 Werte je Tag) nach Börse", "[[intelligentes-messsystem|iMSys]] zwingend"],
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Produktseitig ist ein dynamischer Tarif kein Preis, sondern eine Preisregel plus Datenquelle. Wer ihn im Katalog wie einen Festpreis modelliert, scheitert spätestens bei Vergleichsrechner, Abschlagsprognose und Rechnungserklärung.",
        },
      ],
    },
    related: ["intelligentes-messsystem", "arbeitspreis", "lastprofil", "paragraf-14a-enwg", "zeitvariable-netzentgelte"],
    sources: [
      {
        label: "§ 41a EnWG – Dynamische Stromtarife",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__41a.html",
      },
      {
        label: "EPEX SPOT – Day-Ahead-Markt",
        url: "https://www.epexspot.com/en",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
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
    updated: "2026-08-29",
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
            ["Preis", "allgemeine Preise des Grundversorgers", "eigene Ersatzversorgungspreise – seit 2022 dürfen sie abweichen"],
            ["Danach", "—", "endet nach drei Monaten; wer weiter entnimmt, landet durch konkludentes Verhalten in der Grundversorgung"],
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Die Ersatzversorgung **endet nach drei Monaten** (§ 38 Abs. 2 EnWG) – sie geht nicht „automatisch“ in die Grundversorgung über. Entnimmt der Kunde danach weiter Energie, kommt der Grundversorgungsvertrag nach § 2 Abs. 2 StromGVV durch konkludentes Verhalten zustande, also durch die Entnahme selbst. Seit 2022 darf der Grundversorger für die Ersatzversorgung außerdem **eigene Preise** festlegen, die von den allgemeinen Preisen der Grundversorgung abweichen (§ 38 Abs. 1 Satz 2 EnWG) – in der Beschaffungskrise lagen sie teils deutlich darüber.",
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
      {
        label: "§ 2 StromGVV – Vertragsschluss",
        url: "https://www.gesetze-im-internet.de/stromgvv/__2.html",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
    ],
  },

  {
    slug: "preisanpassung",
    category: "tarife",
    updated: "2026-08-29",
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
            { title: "Ankündigung", text: "In der [[grundversorgung|Grundversorgung]] mindestens **sechs Wochen** vor Wirksamwerden (§ 5 Abs. 2 StromGVV), bei Sonderverträgen mindestens **ein Monat** (§ 41 Abs. 5 EnWG) – jeweils in klarer und verständlicher Sprache, direkt an den Kunden." },
            { title: "Begründung", text: "Anlass, Voraussetzungen und Umfang müssen erkennbar sein – welche Bestandteile steigen, welche sinken." },
            { title: "Sonderkündigungsrecht", text: "Der Kunde kann zum Zeitpunkt des Wirksamwerdens kündigen, unabhängig von der vereinbarten Laufzeit – in der Grundversorgung wie im Sondervertrag." },
            { title: "Umsetzung", text: "Ab dem Stichtag gilt der neue Preis. Der Abrechnungszeitraum zerfällt in Teilzeiträume mit je eigenem [[arbeitspreis|Arbeitspreis]]." },
          ],
        },
        {
          t: "table",
          head: ["", "Grundversorgung", "Sondervertrag"],
          rows: [
            ["Rechtsgrundlage", "§ 5 Abs. 2 StromGVV / GasGVV", "§ 41 Abs. 5 EnWG"],
            ["Ankündigungsfrist", "mindestens sechs Wochen", "mindestens ein Monat"],
            ["Form", "öffentliche Bekanntgabe und briefliche Mitteilung, Veröffentlichung im Internet", "Mitteilung direkt an den Kunden, in einfacher und verständlicher Weise"],
            ["Sonderkündigungsrecht", "ja, zum Wirksamwerden", "ja, zum Wirksamwerden"],
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
    related: ["arbeitspreis", "jahresabrechnung", "abschlagszahlung", "grundversorgung", "bonus-preisgarantie"],
    sources: [
      {
        label: "§ 5 StromGVV – Art der Versorgung, Preisänderungen",
        url: "https://www.gesetze-im-internet.de/stromgvv/__5.html",
      },
      {
        label: "§ 5 GasGVV – Art der Versorgung, Preisänderungen",
        url: "https://www.gesetze-im-internet.de/gasgvv/__5.html",
      },
      {
        label: "§ 41 EnWG – Energielieferverträge mit Letztverbrauchern",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__41.html",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
    ],
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

  {
    slug: "bonus-preisgarantie",
    category: "tarife",
    updated: "2026-08-29",
    aka: ["Neukundenbonus", "Sofortbonus", "Treuebonus", "Wechselbonus", "Preisgarantie", "eingeschränkte Preisgarantie", "Vollpreisgarantie", "Umlagenklausel", "Preisbestandteile"],
    title: { de: "Boni und Preisgarantie", en: "Bonuses and price guarantees" },
    summary: {
      de: "Neukunden-, Sofort- und Treuebonus sind an Bedingungen geknüpfte Preisnachlässe, die mit der ersten Jahresabrechnung verrechnet werden; eine Preisgarantie friert meist nur den Energiepreis ein, während Steuern, Abgaben, Umlagen und Netzentgelte weiter durchgereicht werden.",
      en: "New-customer, instant and loyalty bonuses are conditional discounts set off in the first annual statement; a price guarantee usually freezes only the energy price while taxes, charges, levies and grid fees continue to be passed through.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Boni und Preisgarantien sind die Vertriebswerkzeuge des Vergleichsportal-Zeitalters: Der eine macht den ersten Jahrespreis attraktiv, die andere verspricht Ruhe vor dem nächsten Preisbrief. Beide sind rechnerisch harmlos und operativ tückisch – weil sie an Bedingungen und Zeiträume gebunden sind, die das Abrechnungssystem exakt kennen muss.",
        },
        { t: "h", level: 2, text: "Die Bonusarten" },
        {
          t: "dl",
          items: [
            { term: "Neukundenbonus (Wechselbonus)", def: "Ein fester Betrag oder ein Prozentsatz der Jahreskosten, der **mit der ersten Jahresabrechnung** gutgeschrieben wird. Bedingung ist fast immer eine **ununterbrochene Belieferung von zwölf Monaten** – wer vorher kündigt oder wechselt, bekommt ihn nicht. Er wird nur einmal gewährt und nur, wenn der Kunde in den letzten Monaten nicht schon einmal beim selben Lieferanten war." },
            { term: "Sofortbonus", def: "Ein fester Betrag, der **wenige Wochen nach Lieferbeginn** ausgezahlt oder als Guthaben ins Vertragskonto gebucht wird – nicht erst mit der Abrechnung. Er ist kleiner als der Neukundenbonus, dafür unmittelbar sichtbar. Manche Anbieter behalten sich vor, ihn bei vorzeitiger Kündigung zurückzufordern." },
            { term: "Treuebonus", def: "Eine Gutschrift **für den Verbleib** über die Erstlaufzeit hinaus – etwa nach dem zweiten Lieferjahr. Er soll die Kündigung nach dem ersten Jahr unattraktiv machen, wenn der Neukundenbonus verbraucht ist und der Tarif ohne ihn plötzlich teurer wirkt." },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Vergleichsportale rechnen Boni in den ausgewiesenen **Gesamtpreis im ersten Jahr** ein – deshalb erscheinen Tarife mit hohem Neukundenbonus auf den ersten Plätzen, obwohl ihr laufender [[arbeitspreis|Arbeitspreis]] höher liegt als beim Wettbewerb. Das ist der Mechanismus hinter dem „zweiten Jahr“-Schock: Ohne Bonus fallen die Jahreskosten um den Bonusbetrag höher aus, oft zeitgleich mit einer [[preisanpassung|Preisanpassung]].",
        },
        {
          t: "example",
          title: "Erstjahresabrechnung mit Neukundenbonus",
          lines: [
            { label: "Verbrauch", value: "3.200 kWh" },
            { label: "Arbeitspreis 38,90 ct/kWh", value: "1.244,80 €" },
            { label: "Grundpreis 14,50 €/Monat", value: "174,00 €" },
            { label: "Neukundenbonus (Bedingung: 12 Monate Belieferung erfüllt)", value: "− 150,00 €" },
            { label: "Rechnungsbetrag", value: "1.268,80 €" },
            { label: "11 Abschläge à 118,00 €", value: "− 1.298,00 €" },
          ],
          result: { label: "Guthaben", value: "29,20 €" },
        },
        { t: "h", level: 2, text: "Typische Klauseln" },
        {
          t: "ul",
          items: [
            "**Belieferungsdauer**: Bonus nur bei mindestens zwölf Monaten ununterbrochener Belieferung – ein [[umzug|Umzug]] mit Vertragsmitnahme zählt weiter, eine Kündigung wegen Preisanpassung in der Regel nicht.",
            "**Verrechnung statt Auszahlung**: Der Bonus wird mit der Jahresabrechnung verrechnet; ein Guthaben wird ausgezahlt, ein Sofortbonus dagegen aktiv überwiesen.",
            "**Einmaligkeit**: Nur für Neukunden, die in den letzten sechs oder zwölf Monaten nicht an derselben [[marktlokation|Marktlokation]] von diesem Lieferanten beliefert wurden.",
            "**Kein Bonus in der Grundversorgung**: Die [[grundversorgung|Grundversorgung]] kennt keine Boni – die allgemeinen Preise gelten für alle gleich.",
            "**Rückforderung**: Bei Zahlungsverzug oder Kündigung vor Ablauf kann ein bereits gezahlter Sofortbonus zurückgefordert werden.",
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Bonusbedingungen sind AGB und unterliegen der Klauselkontrolle nach §§ 305 ff. BGB. Klauseln, die den Bonus bei einer vom Lieferanten selbst ausgelösten Preiserhöhung und anschließender Sonderkündigung des Kunden entfallen lassen, sind wiederholt von Gerichten beanstandet worden. Sicherer ist, den Bonus anteilig oder vollständig zu gewähren, wenn der Kunde wegen einer Preisanpassung kündigt.",
        },
        { t: "h", level: 2, text: "Preisgarantie" },
        {
          t: "p",
          text: "Eine Preisgarantie verspricht, dass der Preis für einen bestimmten Zeitraum – meist zwölf oder 24 Monate ab Lieferbeginn – nicht steigt. Entscheidend ist, **welcher** Preis gemeint ist:",
        },
        {
          t: "table",
          head: ["Bestandteil", "Eingeschränkte Preisgarantie", "Vollpreisgarantie"],
          rows: [
            ["Energiepreis (Beschaffung, Vertrieb, Marge)", "garantiert", "garantiert"],
            ["[[netzentgelte|Netzentgelte]]", "wird durchgereicht", "garantiert"],
            ["Umlagen ([[kwk-umlage|KWK]], [[offshore-netzumlage|Offshore]], § 19 StromNEV, abschaltbare Lasten)", "wird durchgereicht", "garantiert"],
            ["[[konzessionsabgabe|Konzessionsabgabe]]", "wird durchgereicht", "garantiert"],
            ["[[stromsteuer|Stromsteuer]] / [[energiesteuer|Energiesteuer]], [[co2-preis|CO₂-Preis]]", "wird durchgereicht", "meist ausgenommen"],
            ["[[umsatzsteuer-energie|Umsatzsteuer]]", "immer ausgenommen", "immer ausgenommen"],
          ],
          caption: "Die Umsatzsteuer ist nie Teil einer Preisgarantie – sie wird auf den Nettopreis erhoben und folgt dem Gesetz.",
        },
        {
          t: "dl",
          items: [
            { term: "Eingeschränkte Preisgarantie", def: "Der Regelfall. Garantiert wird nur der vom Lieferanten beeinflussbare Anteil – beim Strom rund die Hälfte des Endpreises. Ändern sich Netzentgelte oder Umlagen zum Jahreswechsel, darf der Gesamtpreis steigen, ohne dass die Garantie verletzt ist. Der Kunde hat trotzdem sein Sonderkündigungsrecht nach § 41 Abs. 5 EnWG, weil sich der Preis ändert." },
            { term: "Vollpreisgarantie", def: "Selten, teuer und mit klarer Grenze: Steuern und neue gesetzliche Belastungen sind praktisch immer ausgenommen – niemand garantiert eine Größe, die der Gesetzgeber morgen ändern kann. Der Lieferant trägt das Risiko steigender Netzentgelte und Umlagen selbst und preist es ein." },
            { term: "Umlagenklausel", def: "Der Passus im Vertrag, der beschreibt, wie Änderungen der durchgereichten Bestandteile weitergegeben werden: eins zu eins, zum Zeitpunkt des Wirksamwerdens, in beide Richtungen. Eine saubere Klausel senkt den Preis auch, wenn eine Umlage fällt – sonst ist sie angreifbar." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Auch eine Preisanpassung, die ausschließlich durchgereichte Bestandteile betrifft, ist eine Preisänderung im Sinne von § 41 Abs. 5 [[enwg|EnWG]]: Sie muss mindestens einen Monat vorher angekündigt werden, mit Angabe von Anlass, Voraussetzungen und Umfang, und der Kunde kann zum Zeitpunkt des Wirksamwerdens kündigen. Die Preisgarantie schränkt nur ein, **was** sich ändern darf – nicht, **wie** es mitgeteilt werden muss.",
        },
        { t: "h", level: 2, text: "Modellierung in der Tarif-Engine" },
        {
          t: "p",
          text: "Beides – Boni und Garantien – lässt sich nur sauber abbilden, wenn ein Tarif nicht als „ein Preis“ modelliert ist, sondern als Menge von **Preisbestandteilen mit eigenem Gültigkeitszeitraum**:",
        },
        {
          t: "steps",
          items: [
            { title: "Preisbestandteile trennen", text: "Energiepreis, Netzentgelt Arbeit, Netzentgelt Grund, jede Umlage, Konzessionsabgabe, Stromsteuer als eigene Zeile mit `gueltig_von` / `gueltig_bis`. Der Arbeitspreis auf der Rechnung ist die Summe der zum Stichtag gültigen Bestandteile." },
            { title: "Garantie als Attribut, nicht als Preis", text: "Die Preisgarantie ist ein Flag je Bestandteil („garantiert bis 31. März“) plus ein Vertragsdatum. Läuft eine Änderung ein, prüft die Engine je Bestandteil, ob er im Garantiezeitraum eingefroren ist – nur dann wird der neue Wert erst nach Garantieende wirksam." },
            { title: "Regulierte Änderungen zentral einspielen", text: "Netzentgelte kommen je Netzgebiet zum Jahreswechsel, Umlagen bundesweit; sie werden einmal als neuer Gültigkeitszeitraum angelegt und gelten für alle betroffenen Verträge, ohne dass ein Tarif angefasst wird." },
            { title: "Bonus als bedingte Position", text: "Der Bonus ist eine Rechnungsposition mit **Bedingung** (Lieferdauer ≥ 12 Monate, kein vorheriger Vertrag, kein Zahlungsverzug) und **Auslöser** (erste Turnusabrechnung bzw. Tag X nach Lieferbeginn). Die Abrechnung wertet die Bedingung zum Stichtag aus – der Vertrieb pflegt nur den Betrag." },
            { title: "Abschlag berücksichtigen", text: "Ein Neukundenbonus senkt die Jahreskosten des ersten Jahres, gehört aber **nicht** in den laufenden [[abschlagszahlung|Abschlag]] – sonst folgt im zweiten Jahr die Nachzahlung. Sinnvoll ist, den Bonus erst mit der Abrechnung sichtbar zu machen." },
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Die Trennung nach Preisbestandteilen zahlt sich in beide Richtungen aus: Sie macht die eingeschränkte Preisgarantie überhaupt erst rechenbar – und sie liefert die Aufschlüsselung, die § 40 Abs. 2 EnWG auf der Rechnung verlangt. Wer nur einen Bruttoarbeitspreis speichert, muss die Bestandteile zur Rechnungslegung ohnehin rückwärts herausrechnen.",
        },
      ],
    },
    related: ["tarif", "preisanpassung", "arbeitspreis", "jahresabrechnung", "strompreis-zusammensetzung", "energieliefervertrag", "lieferantenwechsel"],
    sources: [
      {
        label: "§ 41 EnWG – Energielieferverträge mit Letztverbrauchern",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__41.html",
      },
      {
        label: "§ 40 EnWG – Strom- und Gasrechnungen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40.html",
      },
      {
        label: "§ 307 BGB – Inhaltskontrolle",
        url: "https://www.gesetze-im-internet.de/bgb/__307.html",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
      {
        label: "BDEW – Strompreisanalyse",
        url: "https://www.bdew.de/presse/pressemappen/strompreis/",
      },
    ],
  },

  {
    slug: "zeitvariable-netzentgelte",
    category: "tarife",
    level: "vertiefung",
    updated: "2026-08-29",
    aka: ["HT/NT", "Hochtarif", "Niedertarif", "Doppeltarif", "Zweitarif", "Zählzeit", "Heizstrom", "Wärmepumpentarif", "Sperrzeiten", "Modul 3", "zeitvariables Netzentgelt", "UTILTS"],
    title: { de: "Zeitvariable Tarife und Netzentgelte: HT/NT, Heizstrom, § 14a Modul 3", en: "Time-variable tariffs and grid fees: HT/NT, heating power, § 14a Module 3" },
    summary: {
      de: "Vom klassischen Hoch-/Niedertarif mit Doppeltarifzähler über Heizstrom mit Sperrzeiten bis zum zeitvariablen Netzentgelt nach § 14a EnWG Modul 3: Preise, die von der Uhrzeit abhängen, brauchen Zählzeiten, getrennte Register und einen Kalender im Abrechnungssystem.",
      en: "From the classic high/low tariff with a two-rate meter, via heating power with blocking periods, to the time-variable grid fee under § 14a EnWG Module 3: prices that depend on the time of day need tariff periods, separate registers and a calendar in the billing system.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Strom ist nachts billiger – dieser Satz ist so alt wie der Nachtspeicherofen. Was sich geändert hat, ist die Mechanik dahinter: Früher schaltete ein Rundsteuerempfänger um 22 Uhr das zweite Zählwerk ein, heute definiert der Verteilnetzbetreiber Zeitfenster, verteilt sie per Marktkommunikation und das [[intelligentes-messsystem|intelligente Messsystem]] ordnet jede Viertelstunde zu. Das Prinzip ist gleich geblieben, die Anforderungen an die Abrechnung nicht.",
        },
        { t: "h", level: 2, text: "Drei Generationen zeitabhängiger Preise" },
        {
          t: "table",
          head: ["", "HT/NT (Zweitarif)", "Heizstrom / Wärmepumpentarif", "§ 14a Modul 3"],
          rows: [
            ["Was variiert", "Arbeitspreis des Lieferanten, oft auch Netzentgelt", "Arbeitspreis des Lieferanten für eine getrennt gemessene Anlage", "**nur** das Netzentgelt des Verteilnetzbetreibers"],
            ["Zeitfenster", "zwei: Hochtarif tags, Niedertarif nachts (und oft am Wochenende)", "Freigabezeiten und **Sperrzeiten**, meist mehrere Blöcke am Tag", "mindestens drei: Hochlast, Standard, Niedriglast – je Netzgebiet festgelegt"],
            ["Messung", "[[zaehlertypen|Doppeltarifzähler]] mit zwei [[zaehlwerk|Zählwerken]] (1.8.1 / 1.8.2)", "eigener Zähler für die Anlage, Umschaltung per Rundsteuerempfänger oder Steuerbox", "intelligentes Messsystem mit Viertelstundenwerten"],
            ["Wer schaltet", "Netzbetreiber (Rundsteuersignal) oder Schaltuhr im Zähler", "Netzbetreiber", "niemand – zugeordnet wird rechnerisch je Viertelstunde"],
            ["Seit", "Jahrzehnten", "Jahrzehnten, mit § 14a EnWG neu geregelt", "1. April 2025"],
          ],
        },
        { t: "h", level: 2, text: "HT/NT: Hoch- und Niedertarif" },
        {
          t: "p",
          text: "Der Zweitarif teilt den Tag in zwei **Zählzeiten**. In der Hochtarifzeit (HT) zählt das erste Zählwerk, in der Niedertarifzeit (NT) das zweite; jedes bekommt seinen eigenen [[arbeitspreis|Arbeitspreis]]. Die Grenzen legt der [[netzbetreiber|Netzbetreiber]] fest – klassisch ist NT von 22 bis 6 Uhr, viele Netzgebiete zählen das Wochenende ganz oder teilweise zur NT-Zeit. Der Lieferant übernimmt die Zählzeiten des Netzbetreibers, weil er die Umschaltung des Zählers nicht selbst steuert.",
        },
        {
          t: "note",
          kind: "info",
          text: "Auf dem Zähler stehen die Register unter den [[obis-kennzahlen|OBIS-Kennzahlen]] **1.8.1** (HT) und **1.8.2** (NT); ihre Summe ist **1.8.0**. Wer bei der Ablesung alle drei Werte meldet, hat den Verbrauch nicht verdoppelt – ein häufiger Fehler in Portalen, die für jedes Register ein Pflichtfeld anbieten. Bei einem Doppeltarifzähler muss auch die Rechnung zwei Verbrauchszeilen mit zwei Preisen zeigen.",
        },
        {
          t: "example",
          title: "Zweitarifabrechnung",
          lines: [
            { label: "Verbrauch HT (1.8.1)", value: "2.400 kWh × 36,50 ct/kWh = 876,00 €" },
            { label: "Verbrauch NT (1.8.2)", value: "3.600 kWh × 28,90 ct/kWh = 1.040,40 €" },
            { label: "Grundpreis 16,90 €/Monat", value: "202,80 €" },
          ],
          result: { label: "Rechnungsbetrag", value: "2.119,20 €" },
        },
        { t: "h", level: 2, text: "Heizstrom und Wärmepumpentarife" },
        {
          t: "p",
          text: "Nachtspeicherheizungen und [[waermepumpe|Wärmepumpen]] bekommen seit langem eigene Tarife, weil ihr Verbrauch groß, planbar und unterbrechbar ist. Der Preisvorteil kommt vor allem aus dem **reduzierten Netzentgelt**, das der Netzbetreiber im Gegenzug für die Steuerbarkeit gewährt. Dafür gibt es Bedingungen:",
        },
        {
          t: "ul",
          items: [
            "**Getrennte Messung**: Die Anlage hängt an einem eigenen Zähler bzw. eigener [[marktlokation|Marktlokation]] – der Haushaltsstrom läuft weiter über den Standardzähler mit dem Standardtarif. Bei Wärmepumpen ist auch eine **Kaskadenmessung** verbreitet: Der Wärmepumpenzähler sitzt hinter dem Hauptzähler, sein Verbrauch wird herausgerechnet.",
            "**Sperrzeiten**: Der Netzbetreiber darf die Anlage zu Hochlastzeiten unterbrechen – klassisch bis zu dreimal zwei Stunden am Tag, in den technischen Anschlussbedingungen festgelegt. Der Speicher der Anlage (Wasser, Estrich, Nachtspeicherstein) überbrückt die Pause.",
            "**Freigabezeiten**: Nachtspeicher laden typischerweise in einem Nachtfenster von etwa acht Stunden, oft mit einer kürzeren Nachladung am Mittag. Der Zähler zählt in Freigabezeiten auf das NT-Register.",
            "**Kein Mischverbrauch**: Wer am Wärmepumpenzähler einen Haushaltsverbraucher anschließt, verliert den Tarif – die Zählerkontrolle liegt beim Messstellenbetreiber.",
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Für Anlagen, die seit dem 1. Januar 2024 neu angemeldet wurden, ersetzt [[paragraf-14a-enwg|§ 14a EnWG]] die alten Sperrzeit-Vereinbarungen: Statt fester Unterbrechungsfenster gilt das netzorientierte **Dimmen** auf mindestens 4,2 kW, und das reduzierte Netzentgelt kommt aus **Modul 1** (Pauschale) oder **Modul 2** (reduzierter Arbeitspreis, getrennte Messung). Altanlagen mit bestehenden Sperrzeitverträgen laufen in einer Übergangsregelung weiter – je nach Netzbetreiber mit unterschiedlichen Fristen.",
        },
        { t: "h", level: 2, text: "§ 14a Modul 3: das zeitvariable Netzentgelt" },
        {
          t: "p",
          text: "Modul 3 ist die jüngste Stufe: Seit dem **1. April 2025** müssen Verteilnetzbetreiber für steuerbare Verbrauchseinrichtungen ein **zeitvariables Netzentgelt** anbieten. Es ist kein eigenständiges Modul, sondern ein Aufsatz auf Modul 1 – die Pauschale bleibt, zusätzlich variiert der Arbeitspreis des Netzentgelts nach Tageszeit. Mit Modul 2 lässt es sich nicht kombinieren, weil dort der Arbeitspreis schon reduziert ist.",
        },
        {
          t: "dl",
          items: [
            { term: "Drei Zeitfenster", def: "Der Verteilnetzbetreiber legt für sein Netzgebiet mindestens drei Zeitfenster mit unterschiedlichen Arbeitspreisen fest: **Hochlast** (HT, deutlich teurer als der Standardpreis), **Standard** (ST) und **Niedriglast** (NT, deutlich günstiger). Die Fenster dürfen nach Wochentag und Jahreszeit unterschiedlich sein und werden vom Netzbetreiber veröffentlicht." },
            { term: "Nur für die steuerbare Einrichtung", def: "Das zeitvariable Netzentgelt gilt für die [[marktlokation|Marktlokation]], an der die steuerbare Verbrauchseinrichtung hängt – bei gemeinsamer Messung mit dem Haushalt also für den gesamten Verbrauch dieser Marktlokation, bei getrennter Messung nur für den Anlagenverbrauch." },
            { term: "Voraussetzung", def: "Ein [[intelligentes-messsystem|intelligentes Messsystem]], das Viertelstundenwerte liefert. Ohne iMSys kann niemand feststellen, in welchem Fenster verbraucht wurde." },
            { term: "Wirkung", def: "Der Netzentgelt-Anteil des Arbeitspreises verschiebt sich: Wer Wärmepumpe oder Wallbox in die Niedriglastfenster legt, zahlt weniger Netzentgelt als in Modul 1 allein; wer ausgerechnet abends lädt, zahlt mehr. Der Lieferant muss das in seinem Tarif abbilden – als eigener zeitvariabler Tarif oder als Durchreichung des Netzentgelts." },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Modul 3 variiert **nur** das Netzentgelt. Der Energiepreis des Lieferanten kann fest bleiben – oder seinerseits variieren, dann entsteht ein [[dynamischer-tarif|dynamischer Tarif]] mit zeitvariablem Netzentgelt: zwei unabhängige Zeitachsen, die je Viertelstunde addiert werden. Für den Kunden ist das ein Preis, für die Abrechnung sind es zwei Preisbestandteile mit getrennten Kalendern.",
        },
        { t: "h", level: 2, text: "Zählzeitdefinitionen in der Marktkommunikation" },
        {
          t: "p",
          text: "Damit Lieferant und Messstellenbetreiber dieselben Zeitfenster verwenden wie der Netzbetreiber, werden **[[zaehlzeitdefinitionen|Zählzeitdefinitionen]]** über die [[marktkommunikation|Marktkommunikation]] ausgetauscht. Der Netzbetreiber veröffentlicht je Netzgebiet, welche Register zu welchen Uhrzeiten an welchen Tagen zählen; der Messstellenbetreiber konfiguriert danach das Messsystem, der Lieferant übernimmt die Fenster in seine Tariflogik. Dafür gibt es das Nachrichtenformat `UTILTS`, das Zählzeitdefinitionen und Berechnungsformeln transportiert; die Zuordnung einer Marktlokation zu einer Zählzeitdefinition läuft über die Stammdaten in `UTILMD`.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Zählzeitdefinitionen sind **je Netzgebiet** verschieden und ändern sich – etwa wenn ein Netzbetreiber seine Modul-3-Fenster zum Jahreswechsel neu schneidet. Wer sie hart im Tarif codiert, hat bei jeder Änderung einen Migrationsfall. Sinnvoll ist, sie als eigene Stammdaten mit Gültigkeitszeitraum zu führen und den Tarif nur auf die **Register** (HT, NT, ST) zu beziehen, nicht auf Uhrzeiten.",
        },
        { t: "h", level: 2, text: "Was das Abrechnungssystem braucht" },
        {
          t: "steps",
          items: [
            { title: "Register je Zeitzone", text: "Der Verbrauch wird nicht als eine Zahl geführt, sondern je Zählzeit – bei HT/NT zwei [[zaehlwerk|Zählwerke]] am Zähler, bei Modul 3 drei rechnerisch aus Viertelstundenwerten gebildete Register. Jedes Register hat eigene [[obis-kennzahlen|OBIS-Kennzahl]], eigenen Zählerstand und eigenen Preis." },
            { title: "Kalender mit Gültigkeit", text: "Welche Viertelstunde in welches Fenster fällt, entscheidet ein Kalender je Netzgebiet und Zählzeitdefinition: Wochentage, Uhrzeiten, Saison. Der Kalender hat einen Gültigkeitszeitraum und wird versioniert – die Abrechnung eines Zeitraums nutzt die damals gültige Version." },
            { title: "Feiertage", text: "Viele Zählzeitdefinitionen behandeln bundesweite und **landesspezifische** Feiertage wie einen Sonntag. Das Netzgebiet bestimmt das Bundesland – ein Netzbetreiber mit Netz in zwei Ländern kann zwei Feiertagskalender haben. Fronleichnam gilt in Bayern, nicht in Hamburg." },
            { title: "Zuordnung der Messwerte", text: "Bei iMSys-Kunden liefert der Messstellenbetreiber per `MSCONS` die Viertelstundenwerte oder bereits nach Register aggregierte Werte. Im zweiten Fall muss die Zuordnung zwischen MSB und Lieferant identisch sein – sonst stimmt die Netzrechnung nicht mit der Kundenrechnung überein." },
            { title: "Zeitumstellung", text: "Der Tag mit 23 und der Tag mit 25 Stunden sind die zuverlässigsten Fehlerquellen: Viertelstundenreihen laufen in UTC, Zählzeitfenster in Lokalzeit. Die Abbildung muss an beiden Umstellungstagen getestet sein." },
            { title: "Zwei Kalender bei Kombination", text: "Bei dynamischem Tarif plus Modul 3 laufen der Börsenpreis (stündlich oder viertelstündlich, bundesweit) und das Netzentgelt (drei Fenster, je Netzgebiet) auf getrennten Zeitachsen. Der Preis je Viertelstunde ist die Summe der zum Zeitpunkt gültigen Bestandteile." },
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Die Netznutzungsabrechnung des Netzbetreibers kommt bei Modul 3 ebenfalls nach Zeitfenstern aufgeschlüsselt. Stimmen die Register des Lieferanten nicht viertelstundengenau mit denen des Netzbetreibers überein, weicht die [[netznutzungsabrechnung|Netzrechnung]] von der eigenen Abrechnung ab – und jede Abweichung landet in der manuellen Klärung.",
        },
      ],
    },
    related: ["paragraf-14a-enwg", "netzentgelte", "dynamischer-tarif", "zaehlwerk", "zaehlertypen", "waermepumpe", "wallbox", "zaehlzeitdefinitionen", "intelligentes-messsystem"],
    sources: [
      {
        label: "§ 14a EnWG – Netzorientierte Steuerung von steuerbaren Verbrauchseinrichtungen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__14a.html",
      },
      {
        label: "Bundesnetzagentur – Integration steuerbarer Verbrauchseinrichtungen (§ 14a EnWG)",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html",
      },
      {
        label: "BDEW – Marktkommunikation und EDI@Energy-Dokumente",
        url: "https://www.bdew.de/energie/marktkommunikation-edi-energy-dokumente-/",
      },
      {
        label: "BDEW MaKo (vormals EDI@Energy) – UTILTS, UTILMD und Datenformate",
        url: "https://www.bdew-mako.de/",
      },
    ],
  },
];
