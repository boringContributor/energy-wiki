import type { Article } from "../types";

const U = "2026-08-01";
const U2 = "2026-08-29";

export const kundeArticles: Article[] = [
  {
    slug: "endkundenportal",
    category: "kunde",
    featured: true,
    level: "basis",
    updated: U2,
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
            { title: "Registrierungshürde", text: "Wer erst einen Brief mit Aktivierungscode abwarten muss, kommt nicht wieder. Identifikation über Kundennummer plus Rechnungsbetrag oder Zählernummer ist schneller – aber ein DSGVO-Abwägungsfall: Beide Nummern stehen auf Dokumenten, die auch Dritte sehen (Vermieter, Hausverwaltung, Vormieter), und dürfen deshalb allein keinen Zugriff auf Verbrauchs- oder Bankdaten öffnen. Üblich ist ein zweiter Faktor wie eine bestätigte E-Mail-Adresse." },
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
    related: ["zaehlerstand", "abschlagszahlung", "umzug", "letztverbraucher", "bonitaetspruefung"],
    sources: [
      { label: "§ 40c EnWG – Rechnungen und Abschlagszahlungen bei Lieferantenwechsel und Umzug", url: "https://www.gesetze-im-internet.de/enwg_2005/__40c.html" },
    ],
  },

  {
    slug: "lieferantenwechsel",
    category: "kunde",
    updated: U2,
    aka: ["Anbieterwechsel", "Wechselprozess", "GPKE", "Anmeldung", "Abmeldung", "24-Stunden-Wechsel", "LFW24", "§ 20a EnWG", "MaLo-Ident"],
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
            "**[[marktlokation|Marktlokations-ID]]** (11 Ziffern inklusive Prüfziffer) oder ersatzweise Zählernummer – die MaLo-ID lässt sich über die **MaLo-Ident**-Schnittstelle des BDEW aus Adresse oder Zählernummer ermitteln",
            "gewünschter Belieferungsbeginn",
            "Angabe, ob es sich um einen Wechsel, einen [[umzug|Einzug]] oder eine [[ersatzversorgung|Ersatzversorgung]] handelt",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Genau hier entscheidet sich die Abschlussquote. Jedes zusätzliche Pflichtfeld kostet Conversion, jedes fehlende Feld kostet später eine Rückfrage. Die MaLo-ID ist optional erfassbar, weil sie sich über Adresse und Zählernummer ermitteln lässt – aber wenn der Kunde sie zur Hand hat, spart sie einen ganzen Klärfall.",
        },
        { t: "h", level: 2, text: "Der Prozess" },
        {
          t: "ol",
          items: [
            "**Anmeldung beim Netzbetreiber** – der neue Lieferant meldet die Marktlokation per UTILMD zum gewünschten Beginn an",
            "**Kündigung beim Altlieferanten** – der neue Lieferant kündigt als Bevollmächtigter des Kunden den bisherigen Vertrag",
            "**Bestätigung oder Ablehnung** – Netzbetreiber und Altlieferant antworten; bei Ablehnung entsteht ein Klärfall",
            "**Zuordnung im [[bilanzkreis|Bilanzkreis]]** – die Marktlokation wechselt zum Stichtag in den Bilanzkreis des neuen Lieferanten",
            "**Zählerstandsübermittlung** – der Messstellenbetreiber liefert den Wechselzählerstand per MSCONS",
            "**Schlussrechnung des Altlieferanten** – binnen sechs Wochen nach Lieferende, § 40c EnWG",
          ],
        },
        { t: "h", level: 2, text: "Gründe für eine Ablehnung" },
        {
          t: "table",
          head: ["Grund", "Was dann passiert"],
          rows: [
            ["Laufende Vertragsbindung beim alten Lieferanten", "Wechsel wird auf das Vertragsende verschoben"],
            ["Marktlokation nicht gefunden", "Klärfall – Adresse und Zählernummer prüfen"],
            ["Offene Forderungen beim alten Lieferanten", "Kein Ablehnungsgrund – ein Wechsel darf daran nicht scheitern"],
            ["Anmeldung für einen bereits zugeordneten Zeitraum", "Ablehnung wegen bestehender Zuordnung: Die frühere Anmeldung bleibt bestehen, die spätere wird abgelehnt – der zweite Lieferant muss mit dem Kunden klären"],
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Seit dem 6. Juni 2025 gilt die Vorgabe, dass ein Lieferantenwechsel innerhalb von **24 Stunden** technisch möglich sein muss. Ursprünglich sollte die Regel zum 4. April 2025 greifen; die Bundesnetzagentur verschob den Stichtag, weil ein Großteil der Versorger die Umstellung nicht rechtzeitig schaffte – siehe [[formatanpassung|Formatanpassung]]. Rechtsgrundlage ist **§ 20a EnWG**, umgesetzt als **LFW24**: Die 24 Stunden gelten für den reinen Lieferantenwechsel an einer bestehenden Marktlokation – Ein- und Auszug laufen weiterhin über die bisherigen Fristen. Der Prozess selbst ist in der Festlegung GPKE (Strom) beziehungsweise GeLi Gas geregelt.",
        },
      ],
    },
    related: [
      "wechselprozess-gpke",
      "energieliefervertrag",
      "marktkommunikation",
      "marktlokation",
      "formatanpassung",
      "ersatzversorgung",
      "umzug",
    ],
    sources: [
      { label: "§ 20a EnWG – Lieferantenwechsel", url: "https://www.gesetze-im-internet.de/enwg_2005/__20a.html" },
      { label: "§ 40c EnWG – Rechnungen und Abschlagszahlungen bei Lieferantenwechsel und Umzug", url: "https://www.gesetze-im-internet.de/enwg_2005/__40c.html" },
      { label: "Bundesnetzagentur – Festlegungen GPKE und GeLi Gas", url: "https://www.bundesnetzagentur.de/" },
      { label: "BDEW – MaLo-Ident", url: "https://www.bdew.de/" },
    ],
  },

  {
    slug: "umzug",
    category: "kunde",
    updated: U2,
    aka: ["Einzug", "Auszug", "Neueinzug", "Umzugsmeldung", "Schlussrechnung", "Umzugskündigung", "§ 41b EnWG"],
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
            { term: "Umzug mit Vertragsmitnahme", def: "Der Vertrag wird auf die neue Adresse übertragen. Der Lieferant darf die Mitnahme nur ablehnen, wenn er an der neuen Adresse nicht liefern kann – bei bundesweiten Anbietern ist sie die Regel." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "**Umzugs-Kündigungsrecht (§ 41b Abs. 1 EnWG)**: Der Kunde kann seinen Vertrag mit einer Frist von **zwei Wochen zum Umzugstermin** kündigen – unabhängig von Laufzeit und ordentlicher Kündigungsfrist. Ausnahme: Der Lieferant bietet die Weiterbelieferung an der neuen Adresse zu den bisherigen Bedingungen an. Die **Schlussrechnung** muss nach § 40c EnWG innerhalb von **sechs Wochen** nach Lieferende vorliegen.",
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
    related: ["lieferantenwechsel", "energieliefervertrag", "zaehlerstand", "grundversorgung", "endkundenportal"],
    sources: [
      { label: "§ 41b EnWG – Energielieferverträge mit Haushaltskunden bei Umzug", url: "https://www.gesetze-im-internet.de/enwg_2005/__41b.html" },
      { label: "§ 40c EnWG – Rechnungen und Abschlagszahlungen bei Lieferantenwechsel und Umzug", url: "https://www.gesetze-im-internet.de/enwg_2005/__40c.html" },
    ],
  },

  {
    slug: "letztverbraucher",
    category: "kunde",
    updated: U2,
    aka: ["Kundenarten", "Haushaltskunde", "Gewerbekunde", "Sondervertragskunde", "Tarifkunde", "Anschlussnutzer", "RLM", "SLP", "Grenzpreis"],
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
            ["Gewerbekunde", "Verbrauch für gewerbliche oder berufliche Zwecke – ein Verwendungszweck, keine Verbrauchsgrenze", "ab 10.000 kWh kein Haushaltskunde mehr, Nettopreise, kein Anspruch auf Grundversorgung"],
            ["Tarifkunde (KAV)", "Belieferung in der [[grundversorgung|Grundversorgung]] oder zu allgemeinen Preisen, Begriff aus der Konzessionsabgabenverordnung", "volle [[konzessionsabgabe|Konzessionsabgabe]] nach Gemeindegröße"],
            ["Sondervertragskunde", "jeder Kunde mit einem Vertrag außerhalb der Grundversorgung – also auch Haushalte mit Sondertarif", "reduzierte Konzessionsabgabe von 0,11 ct/kWh nur, wenn der Preis über dem KAV-Grenzpreis liegt (§ 2 Abs. 7 KAV); als Tarifkunde gilt trotz Sondervertrag, wer unter 30 kW Leistung und 30.000 kWh im Jahr bleibt (§ 1 Abs. 4 KAV)"],
            ["RLM-Kunde", "Jahresverbrauch über 100.000 kWh – die Grenze für die registrierende Leistungsmessung (§ 12 StromNZV)", "[[lastprofil|Viertelstundenmessung]] statt Standardlastprofil, [[leistungspreis|Leistungspreis]]"],
            ["Anschlussnutzer", "wer den Netzanschluss tatsächlich nutzt – nicht zwingend der Eigentümer", "Vertragspartner des [[messstellenbetrieb|Messstellenbetreibers]]"],
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Der Unterschied zwischen Haushalts- und Gewerbekunde ist kein Verbrauchswert, sondern ein Verwendungszweck. Eine kleine Praxis mit 8.000 kWh kann Haushaltskunde im Sinne des Gesetzes sein – mit allen Schutzrechten. Ebenso wenig ist „Sondervertragskunde“ eine Größenklasse: Der Haushalt mit Online-Tarif ist einer, der Betrieb in der Grundversorgung nicht. Vertragsform (EnWG), Konzessionsabgabe (KAV) und Messart (StromNZV) sind drei getrennte Achsen.",
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
    sources: [
      { label: "§ 1 KAV – Begriffsbestimmungen (Tarifkunden, Sondervertragskunden)", url: "https://www.gesetze-im-internet.de/kav/__1.html" },
      { label: "§ 2 KAV – Zulässige Konzessionsabgaben (Grenzpreis)", url: "https://www.gesetze-im-internet.de/kav/__2.html" },
      { label: "§ 12 StromNZV – Registrierende Leistungsmessung", url: "https://dejure.org/gesetze/StromNZV/12.html" },
      { label: "§ 3 EnWG – Begriffsbestimmungen (Haushaltskunde, Letztverbraucher)", url: "https://www.gesetze-im-internet.de/enwg_2005/__3.html" },
    ],
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

  {
    slug: "energieliefervertrag",
    category: "kunde",
    level: "basis",
    updated: U2,
    aka: ["Stromvertrag", "Gasvertrag", "Liefervertrag", "Sondervertrag", "Vertragslaufzeit", "Kündigungsfrist", "Widerruf", "Kündigungsbutton", "§ 41 EnWG", "§ 309 Nr. 9 BGB", "§ 312k BGB"],
    title: { de: "Energieliefervertrag", en: "Energy supply contract" },
    summary: {
      de: "Der Vertrag zwischen Lieferant und Letztverbraucher: Pflichtinhalte nach § 41 EnWG, Widerruf, Laufzeiten nach § 309 Nr. 9 BGB, Kündigungsbutton und Sonderkündigungsrechte.",
      en: "The contract between supplier and final consumer: mandatory content under § 41 EnWG, withdrawal, term rules under § 309 Nr. 9 BGB, the cancellation button and special termination rights.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Energieliefervertrag ist rechtlich ein Kaufvertrag über eine Sache, die ständig fließt. Das Besondere ist nicht der Vertragstyp, sondern die Regelungsdichte: EnWG, BGB und die Grundversorgungsverordnungen legen fest, was drinstehen muss, wie lange er binden darf und wie er wieder endet.",
        },
        { t: "h", level: 2, text: "Wie ein Vertrag zustande kommt" },
        {
          t: "p",
          text: "Ein **Sondervertrag** entsteht durch Angebot und Annahme – online, am Telefon oder an der Haustür. Eine gesetzliche Schriftform gibt es nicht; die Vertragsbedingungen müssen dem Kunden aber vor Abschluss vorliegen. Der Vertrag in der [[grundversorgung|Grundversorgung]] kommt dagegen auch ohne jede Erklärung zustande: durch die Entnahme von Energie aus dem Netz (§ 2 Abs. 2 StromGVV). Die [[ersatzversorgung|Ersatzversorgung]] entsteht kraft Gesetzes.",
        },
        { t: "h", level: 2, text: "Pflichtinhalte nach § 41 EnWG" },
        {
          t: "p",
          text: "§ 41 Abs. 1 EnWG verlangt, dass Verträge mit [[letztverbraucher|Letztverbrauchern]] einfach und verständlich sind und mindestens folgende Angaben enthalten:",
        },
        {
          t: "ul",
          items: [
            "Name und Anschrift des Lieferanten, Art der Leistung und Qualitätsniveau",
            "**Vertragslaufzeit**, Bedingungen für Verlängerung und Beendigung, **Kündigungsfristen**",
            "**Preise** und Zahlungsmodalitäten, inklusive Regelungen zu [[abschlagszahlung|Abschlägen]] und Vorauszahlungen",
            "Haftungs-, Entschädigungs- und Erstattungsregelungen bei Nichteinhaltung der Leistung",
            "Informationen zu Verbraucherrechten, Beschwerdeverfahren und außergerichtlicher **Streitbeilegung** (Schlichtungsstelle Energie)",
            "Hinweis auf die Möglichkeit des [[lieferantenwechsel|Lieferantenwechsels]] und die Kontaktdaten des Kundenservice",
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "**Preisänderungen** muss der Lieferant im Sondervertrag mindestens einen Monat vorher in einfacher und verständlicher Weise mitteilen; der Kunde darf dann ohne Einhaltung einer Frist kündigen (**§ 41 Abs. 5 EnWG**, siehe [[preisanpassung|Preisanpassung]]). Eine Kündigung in **Textform** – also auch per E-Mail – ist immer möglich, und der Lieferant muss ihren Zugang bestätigen (§ 41b Abs. 2 EnWG).",
        },
        { t: "h", level: 2, text: "Widerruf: 14 Tage" },
        {
          t: "p",
          text: "Wird der Vertrag im **Fernabsatz** (Web, Telefon, App) oder **außerhalb von Geschäftsräumen** (Haustür, Messestand) geschlossen, hat der Verbraucher ein 14-tägiges Widerrufsrecht (§§ 312g, 355 BGB). Die Frist beginnt erst, wenn der Kunde ordnungsgemäß über das Widerrufsrecht belehrt wurde – fehlt die Belehrung, verlängert sie sich auf bis zu zwölf Monate und 14 Tage.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Hat der Kunde ausdrücklich verlangt, dass die Belieferung schon in der Widerrufsfrist beginnt, und widerruft dann, muss er die bereits gelieferte Energie als **Wertersatz** bezahlen (§ 357 Abs. 8 BGB). Fehlt die Belehrung darüber, entfällt dieser Anspruch. Für den Prozess heißt das: Der Wunsch nach Sofortbelieferung ist eine eigene, protokollierte Erklärung – kein voreingestelltes Häkchen.",
        },
        { t: "h", level: 2, text: "Laufzeiten seit 2022" },
        {
          t: "table",
          head: ["Regel", "Inhalt", "Grundlage"],
          rows: [
            ["Erstlaufzeit", "höchstens **24 Monate**", "§ 309 Nr. 9 lit. a BGB"],
            ["Stillschweigende Verlängerung", "nur noch **auf unbestimmte Zeit**; der Kunde kann dann jederzeit mit **einem Monat** Frist kündigen", "§ 309 Nr. 9 lit. b BGB, seit 1. März 2022"],
            ["Kündigungsfrist zum Laufzeitende", "höchstens **ein Monat** vor Ablauf der Erstlaufzeit", "§ 309 Nr. 9 lit. c BGB"],
            ["Kündigungsbutton", "Wer online Verträge anbietet, muss online eine Schaltfläche „Verträge hier kündigen“ und eine Bestätigungsseite bereitstellen; die Kündigung ist sofort in Textform zu bestätigen", "§ 312k BGB, seit 1. Juli 2022"],
            ["Grundversorgung", "jederzeit mit **zwei Wochen** Frist kündbar, Textform", "§ 20 StromGVV / GasGVV"],
          ],
          caption: "Die BGB-Regeln gelten für Allgemeine Geschäftsbedingungen gegenüber Verbrauchern; für Altverträge, die vor dem 1. März 2022 geschlossen wurden, galt noch die automatische Verlängerung um bis zu ein Jahr.",
        },
        { t: "h", level: 2, text: "Sonderkündigungsrechte" },
        {
          t: "dl",
          items: [
            { term: "Preisänderung", def: "Kündigung zum Wirksamwerden der Änderung, unabhängig von Laufzeit und Frist (§ 41 Abs. 5 EnWG; in der Grundversorgung § 5 Abs. 3 StromGVV)." },
            { term: "Umzug", def: "Kündigung mit **zwei Wochen** Frist zum Umzugstermin, sofern der Lieferant an der neuen Adresse nicht zu gleichen Bedingungen weiterliefern kann (§ 41b Abs. 1 EnWG) – Details im Artikel [[umzug|Umzug]]." },
            { term: "Ersatzversorgung", def: "Wer aus der [[ersatzversorgung|Ersatzversorgung]] heraus wechselt, hat keine Kündigungsfrist zu beachten." },
            { term: "Wechsel durch den neuen Lieferanten", def: "Beim [[lieferantenwechsel|Lieferantenwechsel]] kündigt der neue Lieferant als Bevollmächtigter – die Frist des Altvertrags gilt trotzdem." },
          ],
        },
        { t: "h", level: 2, text: "Der Vertrag als Zustandsmaschine" },
        {
          t: "p",
          text: "In Vertriebs- und Abrechnungssystemen ist der Liefervertrag ein Objekt mit Lebenszyklus. Ein tragfähiges Statusmodell trennt den **rechtlichen Zustand** vom **Belieferungszustand**, weil beide auseinanderlaufen können: Ein Vertrag kann zustande gekommen, aber noch nicht in Belieferung sein; er kann gekündigt und trotzdem noch monatelang beliefert werden.",
        },
        {
          t: "steps",
          items: [
            { title: "Angebot", text: "Preis und Bedingungen sind fixiert, der Kunde hat noch nicht angenommen. Ablauf nach Bindefrist." },
            { title: "Zustande gekommen", text: "Annahme liegt vor, Widerrufsfrist läuft. Belieferungsbeginn ist beantragt, aber vom Wechselprozess abhängig – siehe [[wechselprozess-gpke|Wechselprozess]]." },
            { title: "In Belieferung", text: "Netzbetreiber hat die [[marktlokation|Marktlokation]] zugeordnet, Lieferbeginn ist bestätigt. Abschläge laufen, Rechnungen entstehen." },
            { title: "Gekündigt", text: "Eine Kündigung ist wirksam, das Lieferende steht fest oder wird berechnet. Bis dahin wird weiter beliefert." },
            { title: "Beendet", text: "Lieferende erreicht, Wechsel- oder Auszugszählerstand liegt vor, [[schlussrechnung|Schlussrechnung]] binnen sechs Wochen (§ 40c EnWG)." },
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Die **Fristenberechnung** ist der Teil, der am häufigsten falsch implementiert wird. Drei Regeln aus der Praxis: Fristen nach § 187 ff. BGB rechnen – der Tag des Zugangs zählt nicht mit, fällt das Fristende auf Samstag, Sonntag oder Feiertag, endet sie am nächsten Werktag. Der **Zugang** der Kündigung beim Lieferanten ist maßgeblich, nicht das Absendedatum. Und die Laufzeit hängt am **Lieferbeginn**, nicht am Vertragsschluss – ein Vertrag mit 12 Monaten Laufzeit, der im Januar geschlossen und im März beliefert wird, endet im März.",
        },
        {
          t: "example",
          title: "Kündigungsfenster berechnen",
          lines: [
            { label: "Lieferbeginn", value: "1. April 2025" },
            { label: "Erstlaufzeit", value: "12 Monate → Ende 31. März 2026" },
            { label: "Kündigungsfrist", value: "1 Monat → Zugang bis 28. Februar 2026" },
            { label: "Kein Zugang bis dahin", value: "Verlängerung auf unbestimmte Zeit" },
          ],
          result: { label: "Danach", value: "jederzeit kündbar mit 1 Monat Frist, z. B. Zugang 10. Mai → Ende 10. Juni" },
        },
      ],
    },
    related: ["lieferantenwechsel", "umzug", "preisanpassung", "grundversorgung", "wechselprozess-gpke", "schlussrechnung", "bonus-preisgarantie"],
    sources: [
      { label: "§ 41 EnWG – Energielieferverträge mit Letztverbrauchern", url: "https://www.gesetze-im-internet.de/enwg_2005/__41.html" },
      { label: "§ 41b EnWG – Energielieferverträge mit Haushaltskunden, Umzug", url: "https://www.gesetze-im-internet.de/enwg_2005/__41b.html" },
      { label: "§ 309 BGB – Klauselverbote ohne Wertungsmöglichkeit (Nr. 9: Laufzeit)", url: "https://www.gesetze-im-internet.de/bgb/__309.html" },
      { label: "§ 312k BGB – Kündigung von Verbraucherverträgen im elektronischen Geschäftsverkehr", url: "https://www.gesetze-im-internet.de/bgb/__312k.html" },
      { label: "§ 355 BGB – Widerrufsrecht bei Verbraucherverträgen", url: "https://www.gesetze-im-internet.de/bgb/__355.html" },
      { label: "§ 20 StromGVV – Kündigung", url: "https://www.gesetze-im-internet.de/stromgvv/__20.html" },
    ],
  },

  {
    slug: "wechselprozess-gpke",
    category: "kunde",
    level: "vertiefung",
    updated: U2,
    aka: ["GPKE", "GeLi Gas", "Anmeldung", "Abmeldung", "UTILMD", "Zuordnungsliste", "LFW24", "Antwortcodes", "Transaktionsgrund", "Wechselprozesse"],
    title: { de: "Wechselprozesse nach GPKE und GeLi Gas", en: "Switching processes under GPKE and GeLi Gas" },
    summary: {
      de: "Die von der Bundesnetzagentur festgelegten Geschäftsprozesse zur Kundenbelieferung: Anmeldung, Abmeldung, Kündigung, Stammdaten, Messwerte und Netznutzungsabrechnung zwischen Lieferant, Netzbetreiber und Messstellenbetreiber.",
      en: "The business processes for customer supply laid down by the Bundesnetzagentur: registration, deregistration, termination, master data, meter readings and grid-usage billing between supplier, grid operator and metering point operator.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Artikel [[lieferantenwechsel|Lieferantenwechsel]] beschreibt, was der Kunde erlebt. Hier geht es um die Maschinerie dahinter: **GPKE** („Geschäftsprozesse zur Kundenbelieferung mit Elektrizität“) für Strom und **GeLi Gas** („Geschäftsprozesse Lieferantenwechsel Gas“) sind Festlegungen der Bundesnetzagentur. Sie schreiben jedem Marktpartner vor, welche Nachricht er wann an wen schickt – und was passiert, wenn er es nicht tut.",
        },
        { t: "h", level: 2, text: "Wer beteiligt ist" },
        {
          t: "dl",
          items: [
            { term: "Lieferant neu (LFN)", def: "Löst den Prozess aus: meldet die [[marktlokation|Marktlokation]] beim Netzbetreiber an und kündigt beim bisherigen Lieferanten." },
            { term: "Lieferant alt (LFA)", def: "Bestätigt oder lehnt die Kündigung ab, meldet die Marktlokation ab und stellt die [[schlussrechnung|Schlussrechnung]]." },
            { term: "Netzbetreiber (NB)", def: "Führt die Zuordnung der Marktlokation zu Lieferant und [[bilanzkreis|Bilanzkreis]], prüft Anmeldungen, antwortet, pflegt die Stammdaten und rechnet die Netznutzung ab." },
            { term: "Messstellenbetreiber (MSB)", def: "Liefert die Messwerte zum Wechselstichtag – im Regelfall über den Netzbetreiber, bei wettbewerblichem MSB auch direkt." },
            { term: "Bilanzkoordinator (BIKO)", def: "Der Übertragungsnetzbetreiber in seiner Rolle für die [[bilanzkreis|Bilanzkreisabrechnung]] – empfängt die aggregierten Zuordnungen, nicht die Einzelfälle." },
          ],
        },
        {
          t: "p",
          text: "Die Rollen sind fachlich definiert, nicht organisatorisch: Ein Stadtwerk kann gleichzeitig LFA, NB und MSB sein – und muss sich trotzdem die Nachrichten intern so zustellen, als wären es drei Unternehmen ([[unbundling|Unbundling]]). Adressiert werden die Partner über ihre [[codenummern|Marktpartner-ID]].",
        },
        { t: "h", level: 2, text: "Die Nachrichten" },
        {
          t: "p",
          text: "Technisch läuft alles über die [[marktkommunikation|Marktkommunikation]]. Der Stammdatenaustausch nutzt das Format **UTILMD**; welcher Geschäftsvorfall gemeint ist, steht im **Transaktionsgrund** (etwa Lieferantenwechsel, Ein- oder Auszug, Zuordnung zur Ersatz- oder Grundversorgung). Die Antwort ist eine eigene UTILMD-Nachricht mit **Antwortcode**: Zustimmung oder Ablehnung mit Grund.",
        },
        {
          t: "table",
          head: ["Prozessschritt", "Von → An", "Nachricht", "Frist (Größenordnung)"],
          rows: [
            ["Kündigung beim Altlieferanten", "LFN → LFA", "UTILMD (Kündigung)", "Antwort binnen weniger Werktage; Kündigungsfrist des Altvertrags bleibt maßgeblich"],
            ["Anmeldung Netznutzung", "LFN → NB", "UTILMD (Anmeldung, Transaktionsgrund)", "Seit LFW24 frühestens für den Folgetag, Antwort innerhalb eines Tages"],
            ["Bestätigung / Ablehnung", "NB → LFN", "UTILMD (Antwort mit Antwortcode)", "Fristgebunden; Schweigen ist keine Zustimmung"],
            ["Abmeldung durch Altlieferanten", "LFA → NB / NB → LFA", "UTILMD (Abmeldung bzw. Information über Lieferende)", "Zum bestätigten Wechselstichtag"],
            ["Zuordnungsliste", "NB → LF", "UTILMD (Liste aller zugeordneten Marktlokationen)", "Monatlich; Lieferant muss Abweichungen zurückmelden"],
            ["Stammdatenänderung", "verantwortliche Rolle → betroffene Rollen", "UTILMD (Änderung)", "Unverzüglich nach Änderung, z. B. Zählerwechsel oder Adresskorrektur"],
            ["Zählerstand zum Stichtag", "MSB/NB → LFA und LFN", "MSCONS", "Wenige Werktage nach dem Stichtag; sonst [[ersatzwertbildung|Ersatzwert]]"],
            ["Netznutzungsabrechnung", "NB → LF", "INVOIC, Zahlungsavis per REMADV zurück", "Monatlich (Abschläge) und nach Ablesung – siehe [[netznutzungsabrechnung|Netznutzungsabrechnung]]"],
          ],
          caption: "Die konkreten Fristen und Codes stehen in der jeweils gültigen Fassung der Festlegung und der Anwendungshandbücher (bdew-mako.de, vormals edi-energy.de) und ändern sich mit jeder [[formatanpassung|Formatanpassung]].",
        },
        {
          t: "note",
          kind: "law",
          text: "**LFW24** (§ 20a EnWG, umgesetzt zum 6. Juni 2025) hat die Anmeldung beschleunigt: Der Netzbetreiber muss den Wechsel innerhalb von **24 Stunden** verarbeiten, der Lieferbeginn kann am **nächsten Tag** liegen. Kündigung beim Altlieferanten und Anmeldung beim Netzbetreiber sind **entkoppelt** – die Anmeldung wartet nicht mehr auf die Kündigungsbestätigung, sondern der Netzbetreiber informiert den bisherigen Lieferanten über das Lieferende. Damit der neue Lieferant die Marktlokation überhaupt ansprechen kann, gibt es **MaLo-Ident**: eine vom BDEW spezifizierte Schnittstelle, die aus Adresse oder Zählernummer die [[marktlokation|MaLo-ID]] ermittelt. Ein- und Auszug laufen weiter mit den bisherigen Fristen.",
        },
        { t: "h", level: 2, text: "Ein- und Auszug im Prozess" },
        {
          t: "ul",
          items: [
            "**Einzug mit Vertrag**: Der Lieferant meldet mit dem Transaktionsgrund „Einzug“ an – rückwirkend in engen Grenzen möglich, weil der Kunde schon verbraucht hat.",
            "**Einzug ohne Vertrag**: Der Netzbetreiber ordnet die Marktlokation dem Grundversorger zu (Ersatz- oder Grundversorgungszuordnung); der Grundversorger erfährt von seinem neuen Kunden aus dieser Nachricht.",
            "**Auszug**: Der Lieferant meldet ab; steht kein Nachfolger fest, endet die Zuordnung – und beim nächsten Verbrauch beginnt wieder die [[ersatzversorgung|Ersatzversorgung]].",
            "**Kein Wechsel**: Wechselt nur der Vertrag beim gleichen Lieferanten (Tarifwechsel), braucht es keine Marktkommunikation – die Zuordnung bleibt.",
          ],
        },
        { t: "h", level: 2, text: "Typische Ablehnungsgründe" },
        {
          t: "table",
          head: ["Kategorie", "Was dahintersteckt", "Was der Lieferant tut"],
          rows: [
            ["Marktlokation nicht identifizierbar", "MaLo-ID falsch, Zählernummer unbekannt, Adresse nicht eindeutig", "Daten beim Kunden nachfassen, MaLo-Ident nutzen, erneut anmelden"],
            ["Zeitraum bereits zugeordnet", "Ein anderer Lieferant hat denselben Zeitraum schon bestätigt bekommen", "Mit dem Kunden klären; die frühere Anmeldung bleibt bestehen"],
            ["Fristverletzung", "Gewünschter Lieferbeginn liegt zu früh oder zu weit in der Zukunft", "Neuen Termin wählen, erneut anmelden"],
            ["Vertragsbindung beim Altlieferanten", "Der Altlieferant lehnt die Kündigung ab, weil die Frist nicht eingehalten ist", "Wechsel auf das nächstmögliche Vertragsende verschieben"],
            ["Formale Fehler", "Pflichtfelder fehlen, Codenummer ungültig, falsche Datenformat-Version", "Technischer Klärfall – meist ein Mapping-Problem im Abrechnungssystem"],
          ],
          caption: "Offene Forderungen beim alten Lieferanten sind ausdrücklich kein Ablehnungsgrund.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für ein Vertriebs- oder Portalsystem ist der Wechselprozess eine **asynchrone Schnittstelle mit ungewissem Ausgang**. Der Vertrag ist geschlossen, aber der Lieferbeginn steht erst mit der Bestätigung des Netzbetreibers fest. Gute Systeme modellieren das als eigenen Zustand („Anmeldung läuft“), zeigen dem Kunden den Status im [[endkundenportal|Portal]] und überführen jede Ablehnung in einen Klärfall mit Wiedervorlage – statt ihn in einer E-Mail an den Kundenservice zu verlieren.",
        },
      ],
    },
    related: ["lieferantenwechsel", "marktkommunikation", "marktlokation", "energieliefervertrag", "ersatzversorgung", "formatanpassung", "codenummern", "netznutzungsabrechnung"],
    sources: [
      { label: "§ 20a EnWG – Lieferantenwechsel", url: "https://www.gesetze-im-internet.de/enwg_2005/__20a.html" },
      { label: "Bundesnetzagentur – Festlegungen GPKE und GeLi Gas", url: "https://www.bundesnetzagentur.de/" },
      { label: "Bundesnetzagentur – Lieferantenwechsel (Verbraucherinformation)", url: "https://www.bundesnetzagentur.de/" },
      { label: "BDEW – MaLo-Ident und Anwendungshilfen zur Marktkommunikation", url: "https://www.bdew.de/" },
      { label: "BDEW MaKo (vormals EDI@Energy) – Nachrichtenformate und Anwendungshandbücher", url: "https://www.bdew-mako.de/" },
    ],
  },

  {
    slug: "bonitaetspruefung",
    category: "kunde",
    updated: U2,
    aka: ["Bonität", "Kreditwürdigkeit", "Scoring", "SCHUFA", "Creditreform", "Boniversum", "Sicherheitsleistung", "Kaution", "§ 31 BDSG", "§ 15 StromGVV"],
    title: { de: "Bonitätsprüfung", en: "Credit check" },
    summary: {
      de: "Die Prüfung der Zahlungsfähigkeit eines Neukunden vor Vertragsschluss – zulässig im Sondervertrag, aber kein Grund, die Grundversorgung zu verweigern.",
      en: "Checking a new customer's creditworthiness before contract conclusion – permitted for special contracts, but no reason to refuse Grundversorgung.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Energielieferant leistet vor: Er kauft den Strom ein, zahlt [[netzentgelte|Netzentgelte]], Umlagen und Steuern an Dritte – und bekommt sein Geld erst mit dem [[abschlagszahlung|Abschlag]] oder der [[jahresabrechnung|Jahresabrechnung]]. Fällt ein Kunde aus, bleibt der Lieferant auf allen Kosten sitzen. Die Bonitätsprüfung soll dieses Risiko vor der Unterschrift sichtbar machen.",
        },
        { t: "h", level: 2, text: "Wie geprüft wird" },
        {
          t: "p",
          text: "Im Massengeschäft läuft die Prüfung automatisiert über eine **Auskunftei**: SCHUFA, Creditreform Boniversum, CRIF oder andere. Sie liefert einen **Score** (eine Ausfallwahrscheinlichkeit) und oft eine Ampel-Empfehlung, dazu Negativmerkmale wie titulierte Forderungen oder Insolvenz. Ergänzt wird das durch eigene Daten: frühere Vertragsverhältnisse, offene Forderungen aus dem eigenen Haus, Rückläufer im Lastschriftverfahren.",
        },
        {
          t: "table",
          head: ["Datenquelle", "Was sie liefert", "Grenzen"],
          rows: [
            ["Auskunftei-Score", "Ausfallwahrscheinlichkeit auf Basis von Zahlungserfahrungen vieler Vertragspartner", "Kein Wissen über die Person; Score darf nicht allein auf Anschriftendaten beruhen"],
            ["Negativmerkmale", "Mahnbescheide, Vollstreckung, Insolvenz, eidesstattliche Versicherung", "Löschfristen beachten; Altfälle sagen wenig über heute"],
            ["Eigene Historie", "Zahlungsverhalten im eigenen Kundenbestand, offene Schlussrechnungen", "Nur bei Wiederkehrern vorhanden"],
            ["Identitätsprüfung", "Stimmen Name, Geburtsdatum und Adresse mit dem Melderegister überein?", "Ist Betrugsprävention, keine Bonitätsaussage"],
          ],
        },
        { t: "h", level: 2, text: "Was rechtlich gilt" },
        {
          t: "note",
          kind: "law",
          text: "Rechtsgrundlage für die Abfrage ist **Art. 6 Abs. 1 lit. b DSGVO** (Vertragsanbahnung) und **lit. f** (berechtigtes Interesse am Schutz vor Zahlungsausfall) – der Kunde muss vorher informiert werden (Art. 13/14 DSGVO), meist in der Datenschutzerklärung im Antragsprozess. **§ 31 BDSG** setzt Regeln für das Scoring: wissenschaftlich anerkanntes mathematisch-statistisches Verfahren, keine Bewertung allein anhand der Anschrift, Information über die Anschriftennutzung. Der EuGH hat 2023 (Rs. C-634/21) klargestellt, dass schon die Score-Berechnung eine automatisierte Entscheidung nach **Art. 22 DSGVO** sein kann, wenn der Vertragspartner ihr maßgeblich folgt – daraus ergeben sich Auskunfts- und Eingriffsrechte.",
        },
        {
          t: "table",
          head: ["", "Sondervertrag", "[[grundversorgung|Grundversorgung]]"],
          rows: [
            ["Ablehnung wegen schwacher Bonität", "zulässig – Vertragsfreiheit", "**nicht** zulässig: Kontrahierungszwang gegenüber Haushaltskunden (§ 36 EnWG)"],
            ["Zulässige Absicherung", "Vorauszahlung, Kaution, höherer Abschlag, Bonitätsvorbehalt in den AGB", "nur **Sicherheitsleistung** oder Vorauszahlung, wenn konkrete Anhaltspunkte vorliegen (§§ 14, 15 StromGVV)"],
            ["Auskunftei-Abfrage", "üblich, mit Information des Kunden", "möglich, aber ohne Folge für das Ob der Belieferung"],
          ],
          caption: "Die Grundversorgung darf der Grundversorger nur verweigern, wenn die Belieferung für ihn aus wirtschaftlichen Gründen unzumutbar ist – ein hoher Maßstab, der weit über eine schlechte Bonität hinausgeht.",
        },
        { t: "h", level: 2, text: "Risiko steuern statt ablehnen" },
        {
          t: "ul",
          items: [
            "**Vorauszahlung**: Der Abschlag wird vor dem Belieferungsmonat fällig statt danach – halbiert das offene Risiko",
            "**Kaution / Sicherheitsleistung**: Einmalbetrag in Höhe von etwa zwei Monatsabschlägen, verzinst und am Vertragsende zurückgezahlt; in der Grundversorgung nach § 15 StromGVV ausdrücklich geregelt",
            "**Abschlagshöhe**: Keine zu niedrigen Abschläge, die eine hohe [[nachzahlung-guthaben|Nachzahlung]] produzieren – der Ausfall entsteht meist an der Jahresrechnung, nicht am Abschlag",
            "**Zahlungsweise**: Lastschrift statt Überweisung senkt die Ausfallquote messbar; Vorkasse-Tarife nur für Kunden, die sich bewusst dafür entscheiden",
            "**Frühwarnung**: Rücklastschrift und ausbleibende Zahlung in den ersten drei Monaten sind der stärkste Prädiktor – dort setzt das [[zahlung-und-mahnwesen|Mahnwesen]] an",
          ],
        },
        { t: "h", level: 2, text: "Integration in den Onboarding-Prozess" },
        {
          t: "steps",
          items: [
            { title: "Identifikation", text: "Name, Geburtsdatum, Melde- und Lieferadresse erfassen und normalisieren – die Auskunftei matcht auf genau diese Felder, Tippfehler erzeugen falsche Treffer." },
            { title: "Sofortentscheidung", text: "Synchroner Abruf während des Antrags, Antwort in Sekunden. Grün: Vertrag kommt zustande. Rot: Alternativangebot mit Vorauszahlung oder Kaution statt harter Absage." },
            { title: "Manuelle Prüfung", text: "Gelb-Fälle und Auskunftei-Ausfälle landen in einer Prüfliste mit Frist. Der Kunde erfährt, dass der Antrag eingegangen ist – nicht, dass er geprüft wird." },
            { title: "Dokumentation", text: "Score, Zeitstempel, Entscheidungsregel und Ergebnis speichern; der Kunde hat Auskunftsrecht nach Art. 15 DSGVO und muss bei Ablehnung die wesentlichen Gründe erfahren." },
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Die Bonitätsprüfung fängt nur den zahlungsschwachen Kunden. Den **betrügerischen** erkennt man an Mustern: dieselbe [[marktlokation|Marktlokation]] wird binnen Tagen mehrfach angemeldet (Doppelanmeldung, oft um Wechselboni abzugreifen), Bankverbindung und Name passen nicht zusammen, die Lieferadresse existiert nicht oder ist bereits mit einer offenen Schlussrechnung belastet. Diese Regeln gehören in dieselbe Entscheidungsstufe wie der Score – und in dieselbe Dokumentation.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Ein Bonitätsvorbehalt in den AGB („Vertrag kommt erst nach positiver Prüfung zustande“) muss zum Kunden passen: Wer online sofort eine Vertragsbestätigung verschickt, hat den Vertrag geschlossen – eine spätere Ablehnung ist dann eine Kündigung, für die die Regeln des [[energieliefervertrag|Liefervertrags]] gelten.",
        },
      ],
    },
    related: ["energieliefervertrag", "grundversorgung", "abschlagszahlung", "zahlung-und-mahnwesen", "endkundenportal", "ratenzahlung-abwendungsvereinbarung", "datenschutz-energiedaten"],
    sources: [
      { label: "§ 36 EnWG – Grundversorgungspflicht", url: "https://www.gesetze-im-internet.de/enwg_2005/__36.html" },
      { label: "§ 15 StromGVV – Sicherheitsleistung", url: "https://www.gesetze-im-internet.de/stromgvv/__15.html" },
      { label: "§ 31 BDSG – Schutz des Wirtschaftsverkehrs bei Scoring und Bonitätsauskünften", url: "https://www.gesetze-im-internet.de/bdsg_2018/__31.html" },
      { label: "§ 41 EnWG – Energielieferverträge mit Letztverbrauchern", url: "https://www.gesetze-im-internet.de/enwg_2005/__41.html" },
    ],
  },
];
