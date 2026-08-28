import type { Article } from "../types";

const U = "2026-08-01";

export const kundeArticles: Article[] = [
  {
    slug: "endkundenportal",
    category: "kunde",
    featured: true,
    level: "basis",
    updated: U,
    aka: ["Kundenportal", "Self-Service", "Kundenkonto", "Selbstbedienungsportal", "Customer Portal"],
    title: { de: "Endkundenportal", en: "Self-service customer portal" },
    summary: {
      de: "Der digitale Selbstbedienungsbereich eines Versorgers: Zählerstand melden, Abschlag anpassen, Rechnungen einsehen, Umzug melden – ohne Anruf im Kundenservice.",
      en: "A utility's digital self-service area: submit readings, adjust instalments, view invoices, report a move – without calling customer service.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Endkundenportal ist kein Marketing-Kanal, sondern ein Kostenhebel. Jede Funktion, die ein Kunde selbst erledigen kann, ersetzt einen Anruf, eine E-Mail oder einen Brief – bei Millionen Kundenkontakten im Jahr ist das der eigentliche Business Case.",
        },
        { t: "figure", id: "portal-funktionen" },
        { t: "h", level: 2, text: "Was ein Portal wirklich braucht" },
        {
          t: "ol",
          items: [
            "**[[zaehlerstand|Zählerstand melden]]** – mit Plausibilitätsprüfung gegen den letzten Stand und die erwartete Menge",
            "**[[abschlagszahlung|Abschlag anpassen]]** – innerhalb eines sinnvollen Korridors, mit sofortiger Auswirkung auf die Vorschau",
            "**Rechnungen und Verträge einsehen** – inklusive Erklärung, wie sich der aktuelle Betrag zusammensetzt",
            "**[[umzug|Umzug melden]]** – Auszug, Einzug oder beides, mit Zählerständen",
            "**Stammdaten pflegen** – Bankverbindung, Adresse, Kommunikationsweg",
            "**Verbrauch verstehen** – Historie, Vorjahresvergleich, bei [[intelligentes-messsystem|iMSys]] auch Tages- und Stundenwerte",
          ],
        },
        { t: "h", level: 2, text: "Woran Portale scheitern" },
        {
          t: "cards",
          items: [
            { title: "Registrierungshürde", text: "Wer erst einen Brief mit Aktivierungscode abwarten muss, kommt nicht wieder. Identifikation über Kundennummer plus Rechnungsbetrag oder Zählernummer ist schneller und sicher genug." },
            { title: "Nur Anzeige, keine Aktion", text: "Ein Portal, das Daten zeigt, aber nichts ändern lässt, verlagert keinen einzigen Servicefall." },
            { title: "Kein Rückkanal ins Kernsystem", text: "Wenn der neue Abschlag erst nach manueller Nachbearbeitung wirksam wird, ist der Effekt verpufft." },
            { title: "Sprache aus dem Abrechnungssystem", text: "„MaLo“, „Turnusablesung“, „Ersatzwertbildung“ – Begriffe aus diesem Wiki gehören in die Erklärung, nicht in die Oberfläche." },
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Das Portal ist meist der wichtigste digitale Berührungspunkt: Hier erledigt der Kunde Anliegen, verfolgt den Status seiner Aufträge und findet seine Dokumente. Der schwierige Teil ist dabei selten die Oberfläche, sondern der verlässliche Rückweg ins Abrechnungs- oder ERP-System.",
        },
        { t: "h", level: 2, text: "Nicht nur Endkunden" },
        {
          t: "p",
          text: "Neben dem Endkundenportal gibt es Portale für **Installateure** (Anmeldung von Anlagen, Netzanschlussanfragen) und für **Partner** und Vertriebe. Die Prozesse dahinter ähneln sich, die Rechte und Datensichten unterscheiden sich deutlich.",
        },
      ],
    },
    related: ["zaehlerstand", "abschlagszahlung", "umzug", "letztverbraucher"],
  },

  {
    slug: "lieferantenwechsel",
    category: "kunde",
    updated: U,
    aka: ["Anbieterwechsel", "Wechselprozess", "GPKE", "Anmeldung", "Abmeldung", "24-Stunden-Wechsel"],
    title: { de: "Lieferantenwechsel", en: "Switching supplier" },
    summary: {
      de: "Der Wechsel des Energielieferanten ändert physisch nichts – nur die Zuordnung der Entnahmestelle zu einem Bilanzkreis. Seit Juni 2025 muss er binnen 24 Stunden möglich sein.",
      en: "Switching supplier changes nothing physically – only which balancing group the site belongs to. Since June 2025 it must be possible within 24 hours.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Kunde unterschreibt beim neuen Lieferanten, der Rest läuft zwischen Marktpartnern ab. Der Kunde muss weder kündigen noch etwas anmelden – der neue Lieferant erledigt das im Rahmen des Wechselprozesses.",
        },
        { t: "figure", id: "lieferantenwechsel" },
        { t: "h", level: 2, text: "Was der neue Lieferant braucht" },
        {
          t: "ul",
          items: [
            "Name und Lieferadresse des Kunden",
            "**[[marktlokation|Marktlokations-ID]]** oder ersatzweise Zählernummer",
            "gewünschter Belieferungsbeginn",
            "Angabe, ob es sich um einen Wechsel, einen [[umzug|Einzug]] oder eine [[ersatzversorgung|Ersatzversorgung]] handelt",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Genau hier entscheidet sich die Abschlussquote. Jedes zusätzliche Pflichtfeld kostet Conversion, jedes fehlende Feld kostet später eine Rückfrage. Die MaLo-ID ist optional erfassbar, weil sie sich über Adresse und Zählernummer ermitteln lässt – aber wenn der Kunde sie zur Hand hat, spart sie einen ganzen Klärfall.",
        },
        { t: "h", level: 2, text: "Gründe für eine Ablehnung" },
        {
          t: "table",
          head: ["Grund", "Was dann passiert"],
          rows: [
            ["Laufende Vertragsbindung beim alten Lieferanten", "Wechsel wird auf das Vertragsende verschoben"],
            ["Marktlokation nicht gefunden", "Klärfall – Adresse und Zählernummer prüfen"],
            ["Offene Forderungen beim alten Lieferanten", "Kein Ablehnungsgrund – ein Wechsel darf daran nicht scheitern"],
            ["Doppelanmeldung durch zwei Lieferanten", "Der Netzbetreiber lehnt beide ab und fordert Klärung"],
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Seit dem 6. Juni 2025 gilt die Vorgabe, dass ein Lieferantenwechsel innerhalb von **24 Stunden** technisch möglich sein muss. Der Prozess selbst ist in der Festlegung GPKE (Strom) beziehungsweise GeLi Gas geregelt.",
        },
      ],
    },
    related: ["marktkommunikation", "marktlokation", "ersatzversorgung", "umzug"],
  },

  {
    slug: "umzug",
    category: "kunde",
    updated: U,
    aka: ["Einzug", "Auszug", "Neueinzug", "Umzugsmeldung", "Schlussrechnung"],
    title: { de: "Umzug: Einzug und Auszug", en: "Moving home" },
    summary: {
      de: "Beim Auszug endet die Belieferung an der alten Adresse, beim Einzug beginnt sie an der neuen – beides mit Zählerstand zum Stichtag.",
      en: "Moving out ends supply at the old address, moving in starts it at the new one – both with a meter reading on the key date.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Umzug ist der fehleranfälligste Standardprozess im Energievertrieb – weil zwei Adressen, zwei Zeitpunkte und oft zwei Marktlokationen zusammenkommen, und weil der Kunde in dieser Woche ganz andere Sorgen hat.",
        },
        { t: "h", level: 2, text: "Die drei Fälle" },
        {
          t: "dl",
          items: [
            { term: "Auszug", def: "Die Belieferung endet zum Auszugsdatum. Es braucht einen Zählerstand zum Stichtag und eine Adresse für die Schlussrechnung – sonst landet sie in der alten Wohnung." },
            { term: "Einzug ohne Vertrag", def: "Wer einzieht und verbraucht, ohne einen Vertrag zu schließen, landet automatisch in der [[grundversorgung|Grundversorgung]] oder [[ersatzversorgung|Ersatzversorgung]]." },
            { term: "Umzug mit Vertragsmitnahme", def: "Der Vertrag wird auf die neue Adresse übertragen. Nur möglich, wenn der Lieferant dort ebenfalls beliefert – bei bundesweiten Anbietern die Regel." },
          ],
        },
        { t: "h", level: 2, text: "Was schiefgeht" },
        {
          t: "ul",
          items: [
            "**Kein Zählerstand zum Stichtag**: Dann wird geschätzt – und Vor- und Nachmieter streiten über die Aufteilung",
            "**Auszugsmeldung fehlt**: Der alte Kunde zahlt weiter für eine Wohnung, in der er nicht mehr wohnt",
            "**Adresse falsch zugeordnet**: Bei Mehrfamilienhäusern ist die Zuordnung von Wohnung zu [[marktlokation|Marktlokation]] ohne Zählernummer oft nicht eindeutig",
            "**Doppelbelieferung**: Vor- und Nachmieter sind gleichzeitig angemeldet",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Ein guter Umzugsprozess fragt beide Zählerstände in einem Schritt ab, akzeptiert ein Foto als Beleg und schickt danach automatisch die Schlussrechnung an die neue Adresse. Das klingt selbstverständlich – ist in der Praxis aber häufig noch ein Formular plus Sachbearbeitung.",
        },
      ],
    },
    related: ["lieferantenwechsel", "zaehlerstand", "grundversorgung", "endkundenportal"],
  },

  {
    slug: "letztverbraucher",
    category: "kunde",
    updated: U,
    aka: ["Kundenarten", "Haushaltskunde", "Gewerbekunde", "Sondervertragskunde", "Tarifkunde", "Anschlussnutzer"],
    title: { de: "Kundenarten und Letztverbraucher", en: "Customer types and final consumers" },
    summary: {
      de: "Haushaltskunde, Gewerbekunde, Sondervertragskunde: Die Einordnung entscheidet über Preise, Kündigungsrechte, Konzessionsabgabe und Messkonzept.",
      en: "Household, commercial or special-contract customer: the classification drives prices, termination rights, concession fees and metering setup.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "**Letztverbraucher** ist, wer Energie für den eigenen Verbrauch kauft – im Gegensatz zu Händlern, die sie weiterverkaufen. Innerhalb dieser Gruppe macht das Gesetz feine, aber folgenreiche Unterschiede.",
        },
        {
          t: "table",
          head: ["Typ", "Definition", "Folgen"],
          rows: [
            ["Haushaltskunde", "Verbrauch überwiegend für den Eigenbedarf im Haushalt oder beruflicher Eigenverbrauch bis 10.000 kWh im Jahr", "Anspruch auf [[grundversorgung|Grundversorgung]], besonderer Schutz bei Sperrung, Bruttopreise"],
            ["Gewerbekunde / Tarifkunde", "kleines Gewerbe im Standardtarif", "meist wie Haushaltskunde behandelt, aber Nettopreise"],
            ["Sondervertragskunde", "individuell verhandelter Vertrag, meist über 100.000 kWh", "reduzierte [[konzessionsabgabe|Konzessionsabgabe]], [[lastprofil|RLM-Messung]], [[leistungspreis|Leistungspreis]]"],
            ["Anschlussnutzer", "wer den Netzanschluss tatsächlich nutzt – nicht zwingend der Eigentümer", "Vertragspartner des [[messstellenbetrieb|Messstellenbetreibers]]"],
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Der Unterschied zwischen Haushalts- und Gewerbekunde ist kein Verbrauchswert, sondern ein Verwendungszweck. Eine kleine Praxis mit 8.000 kWh kann Haushaltskunde im Sinne des Gesetzes sein – mit allen Schutzrechten.",
        },
        { t: "h", level: 2, text: "Wer noch beteiligt sein kann" },
        {
          t: "ul",
          items: [
            "**Anschlussnehmer** – meist der Grundstückseigentümer, Vertragspartner des Netzanschlussvertrags",
            "**Vermieter** bei Allgemeinstrom und Heizungsanlage",
            "**Messdienstleister** bei der Heizkostenabrechnung im Mehrfamilienhaus – ein eigener Markt neben dem [[messstellenbetrieb|Messstellenbetrieb]]",
          ],
        },
      ],
    },
    related: ["verbrauchsstelle", "grundversorgung", "konzessionsabgabe", "vertragskonto"],
  },

  {
    slug: "verbrauchsstelle",
    category: "kunde",
    updated: U,
    aka: ["Lieferstelle", "Entnahmestelle", "Abnahmestelle", "Lieferadresse"],
    title: { de: "Verbrauchsstelle (Marktlokation)", en: "Consumption point" },
    summary: {
      de: "Der Ort, an dem die Energie- oder Wasserlieferung erbracht wird.",
      en: "The place where the energy or water is delivered.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Die Verbrauchsstelle ist die Adresse, an die geliefert wird – im Marktjargon die [[marktlokation|Marktlokation]]. Sie ist nicht zwingend die Rechnungsadresse und nicht zwingend der Wohnsitz des Kunden.",
        },
        {
          t: "table",
          head: ["Adresse", "Bedeutung"],
          rows: [
            ["Verbrauchsstelle / Lieferadresse", "wo der Zähler hängt und die Energie fließt"],
            ["Rechnungsadresse", "wohin die Rechnung geht – beim Vermieter oder Verwalter oft eine andere"],
            ["Meldeadresse", "für Bonitätsprüfung und Identifikation relevant"],
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "In Mehrfamilienhäusern reicht die Straßenadresse nicht. Ohne Wohnungsnummer, Etage oder Zählernummer lässt sich nicht eindeutig sagen, welche Marktlokation gemeint ist – und der Netzbetreiber lehnt die Anmeldung ab.",
        },
        {
          t: "p",
          text: "Ein Kunde kann mehrere Verbrauchsstellen haben, eine Verbrauchsstelle mehrere Sparten – und eine Marktlokation kann mehrere [[messlokation|Messlokationen]] umfassen.",
        },
      ],
    },
    related: ["marktlokation", "messlokation", "vertragskonto", "umzug"],
  },
];
