import type { Article } from "../types";

const U = "2026-08-01";

export const abrechnungArticles: Article[] = [
  {
    slug: "abschlagszahlung",
    category: "abrechnung",
    featured: true,
    level: "basis",
    updated: U,
    aka: ["Abschlag", "Teilzahlung", "Anzahlung", "Vorauszahlung", "monatlicher Abschlag", "§ 13 StromGVV"],
    title: { de: "Abschlagszahlung", en: "Instalment payment" },
    summary: {
      de: "Teilzahlung beziehungsweise Anzahlung auf bereits geleistete Energie- und Wasserlieferungen. Die Höhe orientiert sich am zu erwartenden Verbrauch auf Basis des vorherigen Abrechnungszeitraums.",
      en: "A part payment on energy or water already delivered. Its amount is based on the consumption expected from the previous billing period.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Abgerechnet wird einmal im Jahr, gezahlt wird monatlich. Der Abschlag überbrückt diese Lücke: Er ist keine Pauschale, sondern eine Anzahlung auf eine Lieferung, deren genaue Menge erst später feststeht.",
        },
        { t: "figure", id: "abschlag-rechner" },
        { t: "h", level: 2, text: "Wie die Höhe bestimmt wird" },
        {
          t: "steps",
          items: [
            { title: "Verbrauch prognostizieren", text: "Grundlage ist der Verbrauch des zuletzt abgerechneten Zeitraums. Fehlt der – etwa bei Neukunden – wird der durchschnittliche Verbrauch vergleichbarer Kunden herangezogen." },
            { title: "Jahreskosten berechnen", text: "Prognosemenge × [[arbeitspreis|Arbeitspreis]] + [[grundpreis|Grundpreis]], jeweils brutto." },
            { title: "Auf Raten verteilen", text: "Üblich sind 11 Raten – der zwölfte Monat bleibt für die Jahresabrechnung frei. Manche Versorger nutzen 12 Raten oder quartalsweise Zahlung." },
            { title: "Anpassen, wenn nötig", text: "Ändern sich Preise oder Verbrauch deutlich, wird der Abschlag unterjährig angepasst." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "**§ 13 StromGVV / § 13 GasGVV**: Der Abschlag ist anteilig nach dem Verbrauch des zuletzt abgerechneten Zeitraums zu berechnen. Macht der Kunde glaubhaft, dass sein Verbrauch erheblich geringer ist, ist das angemessen zu berücksichtigen. Bei einer Preisänderung dürfen die folgenden Abschläge mit dem Prozentsatz der Preisänderung angepasst werden.",
        },
        { t: "h", level: 2, text: "Zu hoch, zu niedrig – beides ist ein Problem" },
        {
          t: "cards",
          items: [
            { title: "Zu niedriger Abschlag", text: "Führt zu einer schmerzhaften [[nachzahlung-guthaben|Nachzahlung]] und ist eine der häufigsten Ursachen für Zahlungsstörungen und Kündigungen." },
            { title: "Zu hoher Abschlag", text: "Der Kunde gewährt dem Versorger faktisch einen zinslosen Kredit. Zu viel gezahlte Beträge sind unverzüglich zu erstatten, spätestens mit der nächsten Abschlagsforderung zu verrechnen." },
          ],
        },
        { t: "h", level: 2, text: "In der Praxis" },
        {
          t: "ul",
          items: [
            "Beim Einzug gibt es noch keinen Vorjahresverbrauch – hier zählt die Zahl der Personen, die Wohnfläche und der Gerätebestand",
            "Nach einem kalten Winter liegt der Gasabschlag oft zu niedrig, weil er auf einem milden Vorjahr basiert",
            "Ein Elektroauto oder eine Wärmepumpe verdoppeln den Strombedarf – ohne Anpassung ist die Nachzahlung vorprogrammiert",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Die Abschlagsanpassung im [[endkundenportal|Portal]] ist eine der wirkungsvollsten Selbstbedienungsfunktionen überhaupt: Sie verhindert genau die Nachzahlung, die später zum teuren Servicefall wird. Sinnvoll ist ein Korridor um den rechnerisch richtigen Wert statt völliger Freiheit nach unten.",
        },
      ],
    },
    related: ["jahresabrechnung", "nachzahlung-guthaben", "verbrauch", "stromgvv-gasgvv"],
    sources: [
      {
        label: "§ 13 StromGVV – Abschlagszahlungen",
        url: "https://www.gesetze-im-internet.de/stromgvv/__13.html",
      },
      {
        label: "§ 13 GasGVV – Abschlagszahlungen",
        url: "https://www.gesetze-im-internet.de/gasgvv/__13.html",
      },
    ],
  },

  {
    slug: "jahresabrechnung",
    category: "abrechnung",
    updated: U,
    aka: ["Verbrauchsabrechnung", "Turnusabrechnung", "Schlussrechnung", "Abrechnungszeitraum", "§ 40 EnWG"],
    title: { de: "Jahresabrechnung", en: "Annual statement" },
    summary: {
      de: "Einmal im Jahr wird abgerechnet, was tatsächlich verbraucht wurde – und mit den geleisteten Abschlägen verrechnet.",
      en: "Once a year the actual consumption is billed and set against the instalments already paid.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Die Jahresabrechnung ist der Moment, in dem alles zusammenkommt: Zählerstände, Preise, Zeiträume, Abschläge. Sie ist zugleich das Dokument, das der Kunde am genauesten liest – meist genau einmal, dafür sehr kritisch.",
        },
        { t: "figure", id: "rechnung-anatomie" },
        { t: "h", level: 2, text: "Der Rechenweg" },
        {
          t: "example",
          title: "Stromabrechnung, ein Jahr",
          lines: [
            { label: "Zählerstand Ende", value: "27.410 kWh" },
            { label: "Zählerstand Beginn", value: "23.760 kWh" },
            { label: "Verbrauch", value: "3.650 kWh" },
            { label: "Arbeitspreis 36,80 ct/kWh", value: "1.343,20 €" },
            { label: "Grundpreis 12,90 €/Monat", value: "154,80 €" },
            { label: "Rechnungsbetrag", value: "1.498,00 €" },
            { label: "11 Abschläge à 128,00 €", value: "− 1.408,00 €" },
          ],
          result: { label: "Nachzahlung", value: "90,00 €" },
        },
        { t: "h", level: 2, text: "Was drinstehen muss" },
        {
          t: "p",
          text: "§ 40 [[enwg|EnWG]] schreibt den Inhalt vor: Vertrags- und Kundendaten, [[vertragskonto|Vertragskonto]], [[marktlokation|Marktlokations-ID]], Zählernummer, Netzbetreibernummer, Abrechnungszeitraum, [[zaehlerstand|Zählerstände]] mit Kennzeichnung ihrer Herkunft, die Preisbestandteile, die Aufschlüsselung von Steuern, Abgaben und Umlagen, die geleisteten [[abschlagszahlung|Abschläge]] – und beim Strom die [[stromkennzeichnung|Stromkennzeichnung]].",
        },
        { t: "h", level: 2, text: "Wenn der Zeitraum zerfällt" },
        {
          t: "p",
          text: "Ändert sich mitten im Jahr ein Preis, entstehen zwei Teilzeiträume mit je eigenem [[arbeitspreis|Arbeitspreis]]. Ohne echte Ablesung zum Stichtag wird der Verbrauch rechnerisch aufgeteilt – beim Gas nach Gradtagszahlen, beim Strom nach [[lastprofil|Lastprofil]]. Auf der Rechnung erscheint dann der Hinweis auf eine Verbrauchszuordnung wegen unterjähriger Preisänderung.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Eine Abrechnung ist spätestens sechs Wochen nach Ende des Abrechnungszeitraums zu erstellen. Verspätete Abrechnungen sind nicht nur ärgerlich, sie schwächen auch die Position des Versorgers bei Forderungen.",
        },
      ],
    },
    related: ["abschlagszahlung", "verbrauch", "nachzahlung-guthaben", "preisanpassung"],
    sources: [
      {
        label: "§ 40 EnWG – Strom- und Gasrechnungen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40.html",
      },
    ],
  },

  {
    slug: "verbrauch",
    category: "abrechnung",
    level: "basis",
    updated: U,
    aka: ["Verbrauchsmenge", "Arbeit", "Jahresverbrauch", "kWh"],
    title: { de: "Verbrauch", en: "Consumption" },
    summary: {
      de: "Die in Anspruch genommene Arbeit – bei den Energien in Kilowattstunden, beim Wasser in Kubikmetern.",
      en: "The work drawn – in kilowatt-hours for energy, in cubic metres for water.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Verbrauch ist die Differenz zweier [[zaehlerstand|Zählerstände]] – nicht der Zählerstand selbst. Diese Unterscheidung klingt banal und ist trotzdem die häufigste Fehlerquelle in Formularen und Datenmodellen.",
        },
        {
          t: "formula",
          expr: "Verbrauch  =  Zählerstand Ende  −  Zählerstand Beginn",
          caption:
            "Bei Gas folgt darauf noch die Umrechnung von m³ in kWh – siehe [[thermische-gasabrechnung|thermische Gasabrechnung]].",
        },
        { t: "h", level: 2, text: "Einheiten je Sparte" },
        {
          t: "table",
          head: ["Sparte", "Am Zähler", "Auf der Rechnung"],
          rows: [
            ["Strom", "kWh", "kWh"],
            ["Erdgas", "m³", "kWh"],
            ["Wasser", "m³", "m³"],
            ["Fernwärme", "kWh, MWh oder GJ", "kWh"],
          ],
        },
        { t: "h", level: 2, text: "Anhaltspunkte" },
        {
          t: "table",
          head: ["Haushalt", "Strom", "Gas (Heizung)", "Wasser"],
          align: ["l", "r", "r", "r"],
          rows: [
            ["1 Person, Wohnung", "1.300 – 1.800 kWh", "5.000 – 8.000 kWh", "40 – 50 m³"],
            ["2 Personen", "2.000 – 2.800 kWh", "9.000 – 14.000 kWh", "70 – 90 m³"],
            ["4 Personen, Haus", "4.000 – 5.000 kWh", "18.000 – 25.000 kWh", "140 – 170 m³"],
          ],
          caption: "Grobe Bandbreiten für die Plausibilitätsprüfung, keine Normwerte.",
        },
        {
          t: "note",
          kind: "tip",
          text: "Für Plausibilitätsprüfungen im [[endkundenportal|Portal]] reichen solche Bandbreiten völlig aus: Ein gemeldeter Jahresverbrauch von 40.000 kWh Strom in einer Zweizimmerwohnung ist mit hoher Wahrscheinlichkeit ein Tippfehler – und besser sofort abgefangen als drei Monate später in der Abrechnung.",
        },
        { t: "figure", id: "kwh-vergleich" },
      ],
    },
    related: ["zaehlerstand", "abrechnungswert", "jahresabrechnung", "energie-einheiten"],
  },

  {
    slug: "abrechnungswert",
    category: "abrechnung",
    updated: U,
    aka: ["Abrechnungswert thermische Energie", "abgerechnete Menge", "Energiemenge Gas"],
    title: { de: "Abrechnungswert (thermische Energie)", en: "Billing value (thermal energy)" },
    summary: {
      de: "Der Verbrauchswert Erdgas in Kilowattstunden ergibt sich durch Multiplikation des gemessenen Verbrauchs in Kubikmetern mit der Zustandszahl und dem Brennwert.",
      en: "The gas consumption value in kilowatt-hours is the measured cubic metres multiplied by the state number and the calorific value.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Abrechnungswert ist die Größe, mit der beim Gas tatsächlich gerechnet wird: die Energiemenge in Kilowattstunden, abgeleitet aus dem gemessenen Volumen.",
        },
        {
          t: "formula",
          expr: "Abrechnungswert [kWh]  =  Verbrauch [m³]  ×  Zustandszahl  ×  Brennwert",
          where: [
            { sym: "Verbrauch", desc: "Differenz der Zählerstände in Betriebskubikmetern" },
            { sym: "Zustandszahl", desc: "siehe [[zustandszahl|Zustandszahl]]" },
            { sym: "Brennwert", desc: "siehe [[brennwert|Brennwert]]" },
          ],
        },
        { t: "figure", id: "gas-umrechner" },
        {
          t: "note",
          kind: "info",
          text: "Beide Faktoren stammen vom [[netzbetreiber|Netzbetreiber]] und gelten für das Netzgebiet, nicht für den einzelnen Kunden. Sie ändern sich von Abrechnung zu Abrechnung – ein identischer Volumenverbrauch kann deshalb unterschiedliche Kilowattstunden ergeben.",
        },
        {
          t: "p",
          text: "Ausführlich: [[thermische-gasabrechnung|Thermische Gasabrechnung]].",
        },
      ],
    },
    related: ["thermische-gasabrechnung", "brennwert", "zustandszahl", "verbrauch"],
  },

  {
    slug: "nachzahlung-guthaben",
    category: "abrechnung",
    updated: U,
    aka: ["Nachzahlung", "Guthaben", "Erstattung", "Rückzahlung", "Saldo"],
    title: { de: "Nachzahlung und Guthaben", en: "Back-payments and credits" },
    summary: {
      de: "Die Differenz zwischen tatsächlichen Kosten und geleisteten Abschlägen – zu viel Gezahltes ist unverzüglich zu erstatten oder mit der nächsten Abschlagsforderung zu verrechnen.",
      en: "The gap between actual costs and instalments paid – overpayments must be refunded promptly or offset against the next instalment.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Am Ende jeder [[jahresabrechnung|Jahresabrechnung]] steht ein Saldo. Er ist keine Strafe und kein Geschenk, sondern nur die Korrektur einer Prognose.",
        },
        { t: "figure", id: "abschlag-rechner" },
        { t: "h", level: 2, text: "Was zu tun ist" },
        {
          t: "dl",
          items: [
            { term: "Guthaben", def: "Ergibt sich bei der Abrechnung, dass zu hohe Abschläge verlangt wurden, ist der übersteigende Betrag unverzüglich zu erstatten – spätestens mit der nächsten Abschlagsforderung zu verrechnen." },
            { term: "Nachzahlung", def: "Wird mit der Rechnung fällig. Bei hohen Beträgen ist eine Ratenzahlung üblich und in der Grundversorgung unter Umständen sogar geboten." },
            { term: "Folge für den Abschlag", def: "Ein Saldo ist immer auch ein Signal, dass die Prognose nicht mehr passt – der neue [[abschlagszahlung|Abschlag]] sollte entsprechend angepasst werden." },
          ],
        },
        { t: "h", level: 2, text: "Typische Ursachen" },
        {
          t: "ul",
          items: [
            "kalter Winter nach einem milden Vorjahr, vor allem beim [[erdgas|Gas]]",
            "[[preisanpassung|Preisänderung]] ohne gleichzeitige Abschlagsanpassung",
            "neue Geräte: Wärmepumpe, Elektroauto, Klimaanlage",
            "eine [[zaehlerstand|Schätzung]] im Vorjahr, die zu niedrig ausfiel – der Fehlbetrag holt den Kunden im Folgejahr ein",
            "Personenzahl im Haushalt hat sich geändert",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Kommunikativ entscheidend ist nicht die Höhe, sondern die Erklärbarkeit. Eine Nachzahlung, neben die man den Vorjahresverbrauch, die Preisänderung und den zu niedrigen Abschlag stellt, erzeugt deutlich weniger Widerspruch als eine reine Zahl.",
        },
      ],
    },
    related: ["abschlagszahlung", "jahresabrechnung", "zahlung-und-mahnwesen"],
  },

  {
    slug: "vertragskonto",
    category: "abrechnung",
    updated: U,
    aka: ["Vertragskontonummer", "Kundennummer", "Geschäftspartner", "Buchungskreis"],
    title: { de: "Vertragskonto", en: "Contract account" },
    summary: {
      de: "Unter dem Vertragskonto sind die Stammdaten des Kunden, die Angaben zur Verbrauchsstelle sowie alle Zahlungsvorgänge zu dieser Verbrauchsstelle erfasst.",
      en: "The contract account holds the customer's master data, the details of the consumption point and every payment relating to it.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Das Vertragskonto ist die buchhalterische Klammer um eine Kundenbeziehung: Hier laufen Rechnungen, Abschläge, Zahlungen, Mahnungen und Gutschriften zusammen.",
        },
        { t: "h", level: 2, text: "Abgrenzung zu anderen Nummern" },
        {
          t: "table",
          head: ["Begriff", "Bezieht sich auf", "Ändert sich"],
          rows: [
            ["Kundennummer / Geschäftspartner", "die Person oder Firma", "nie"],
            ["Vertragskonto", "die Zahlungsbeziehung zu einer Lieferstelle", "beim Umzug in der Regel ja"],
            ["Vertrag", "eine Lieferung einer Sparte", "je Sparte und je Zeitraum"],
            ["[[marktlokation|Marktlokations-ID]]", "den physischen Ort", "nie, solange der Anschluss besteht"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Ein Kunde mit Strom und Gas an derselben Adresse hat oft ein Vertragskonto und zwei Verträge – manchmal aber auch zwei Konten. Wie ein Versorger das schneidet, entscheidet darüber, ob der Kunde eine oder zwei Rechnungen bekommt.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Beim Übergang in ein Abrechnungssystem ist die Frage „ein Konto oder mehrere?“ eine der ersten, die geklärt sein muss. Sie bestimmt, wie Zahlungen zugeordnet werden – und ob ein Guthaben aus dem Gasvertrag eine offene Stromforderung ausgleichen kann.",
        },
      ],
    },
    related: ["verbrauchsstelle", "jahresabrechnung", "zahlung-und-mahnwesen", "letztverbraucher"],
  },

  {
    slug: "zahlung-und-mahnwesen",
    category: "abrechnung",
    updated: U,
    aka: ["SEPA", "Lastschrift", "Mahnung", "Sperrung", "Zahlungsverzug", "Ratenzahlung"],
    title: { de: "Zahlung, Mahnung und Sperrung", en: "Payment, dunning and disconnection" },
    summary: {
      de: "Vom SEPA-Mandat bis zur Unterbrechung der Versorgung: Der Weg ist gesetzlich eng geregelt und mit Fristen und Ankündigungspflichten gepflastert.",
      en: "From the SEPA mandate to disconnection: the path is tightly regulated, paved with deadlines and notice requirements.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Energie ist ein Grundbedarf. Deshalb darf ein Versorger die Lieferung nicht einfach einstellen, wenn eine Rechnung offen ist – die Voraussetzungen dafür stehen ausdrücklich im Gesetz.",
        },
        { t: "h", level: 2, text: "Zahlungswege" },
        {
          t: "ul",
          items: [
            "**SEPA-Lastschrift** – der Regelfall, günstig und ausfallarm; das Mandat muss dokumentiert sein",
            "**Überweisung** auf Rechnung – höherer Aufwand im Forderungsmanagement",
            "**Dauerauftrag** – aus Sicht des Versorgers unpraktisch, weil Abschlagsanpassungen nicht automatisch greifen",
            "**Vorkasse oder Vorauszahlungssystem** – nur in engen Grenzen und meist nach vorheriger Zahlungsstörung",
          ],
        },
        { t: "h", level: 2, text: "Der Weg bis zur Sperrung" },
        {
          t: "steps",
          items: [
            { title: "Zahlungsverzug", text: "Die Forderung ist fällig und unbeglichen." },
            { title: "Mahnung", text: "Zahlungserinnerung, danach förmliche Mahnung mit Frist." },
            { title: "Androhung der Unterbrechung", text: "In der Grundversorgung mit vier Wochen Vorlauf; zugleich ist auf Möglichkeiten wie eine Ratenzahlungsvereinbarung hinzuweisen." },
            { title: "Ankündigung des Termins", text: "Der konkrete Termin ist drei Werktage vorher anzukündigen." },
            { title: "Unterbrechung", text: "Nur zulässig, wenn die Folgen nicht außer Verhältnis zur Höhe der Forderung stehen." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Grundlage sind § 19 StromGVV und § 19 GasGVV. Die Schwelle liegt bei mindestens 100 € Rückstand, unstrittige und noch nicht fällige Beträge zählen nicht mit. Eine Wiederaufnahme muss unverzüglich erfolgen, sobald die Gründe entfallen.",
        },
        {
          t: "note",
          kind: "tip",
          text: "Wirtschaftlich lohnt sich fast jede Alternative zur Sperrung: Sperren und Entsperren kosten Geld, der Kunde ist danach in der [[ersatzversorgung|Ersatzversorgung]] oder weg. Ratenzahlungen, angepasste [[abschlagszahlung|Abschläge]] und frühe Ansprache sind billiger.",
        },
      ],
    },
    related: ["nachzahlung-guthaben", "stromgvv-gasgvv", "vertragskonto", "abschlagszahlung"],
  },

  {
    slug: "blindarbeit",
    category: "abrechnung",
    updated: U,
    aka: ["Blindleistung", "kvarh", "Leistungsfaktor", "cos phi", "Blindstrom"],
    title: { de: "Blindarbeit", en: "Reactive energy" },
    summary: {
      de: "Anteil der elektrischen Energie, der nicht in Nutzenergie umgewandelt wird, sondern zum Aufbau elektromagnetischer und elektrischer Felder verbraucht wird – angegeben in kvarh und ab einer bestimmten Grenze zusätzlich berechnet.",
      en: "The share of electrical energy that does no useful work but builds up electric and magnetic fields – measured in kvarh and charged once it exceeds an agreed limit.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Motoren, Transformatoren und Leuchtstofflampen brauchen Magnetfelder, um zu funktionieren. Die Energie dafür pendelt zwischen Netz und Gerät hin und her, ohne verbraucht zu werden – belastet die Leitungen aber trotzdem.",
        },
        { t: "figure", id: "blindleistung" },
        { t: "h", level: 2, text: "Wann sie berechnet wird" },
        {
          t: "p",
          text: "Haushaltskunden zahlen keine Blindarbeit. Bei Kunden mit registrierender Leistungsmessung vereinbart der [[netzbetreiber|Netzbetreiber]] dagegen eine Grenze – meist ein [[leistungspreis|Leistungsfaktor]] cos φ von 0,9, was einer Blindarbeit von rund 50 % der Wirkarbeit entspricht. Wird sie überschritten, wird die überschießende Blindarbeit in kvarh abgerechnet.",
        },
        {
          t: "example",
          title: "Bezugsgröße",
          lines: [
            { label: "Wirkarbeit im Monat", value: "40.000 kWh" },
            { label: "Freigrenze bei cos φ 0,9", value: "19.400 kvarh" },
            { label: "Gemessene Blindarbeit", value: "26.000 kvarh" },
            { label: "Abzurechnen", value: "6.600 kvarh" },
          ],
          result: { label: "Bei 1,2 ct/kvarh", value: "79,20 €" },
        },
        {
          t: "note",
          kind: "tip",
          text: "Abhilfe schafft eine **Blindleistungskompensation** – Kondensatoren, die den Blindanteil lokal bereitstellen. Sie amortisiert sich in Betrieben mit vielen Motoren oft innerhalb weniger Jahre.",
        },
      ],
    },
    related: ["leistungspreis", "lastprofil", "zaehlwerk", "energie-einheiten"],
  },
];
