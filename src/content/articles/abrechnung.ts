import type { Article } from "../types";

const U = "2026-08-01";

export const abrechnungArticles: Article[] = [
  {
    slug: "abschlagszahlung",
    category: "abrechnung",
    featured: true,
    level: "basis",
    updated: "2026-08-29",
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
        {
          t: "note",
          kind: "law",
          text: "Außerhalb der Grundversorgung gilt das [[enwg|EnWG]]: Nach **§ 41b Abs. 1** müssen Abschläge den tatsächlichen oder voraussichtlichen Verbrauch angemessen widerspiegeln – ein pauschal überhöhter Abschlag ist unzulässig, und zu viel Gezahltes ist unverzüglich zu erstatten. Nach **§ 40b Abs. 1** muss der Lieferant auf Wunsch statt der Jahresabrechnung eine monatliche, vierteljährliche oder halbjährliche Abrechnung anbieten. Kunden mit [[intelligentes-messsystem|intelligentem Messsystem]] erhalten nach **§ 40a** außerdem unentgeltlich monatliche Verbrauchsinformationen – auch ohne Abrechnung.",
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
      {
        label: "§ 40a EnWG – Verbrauchsinformationen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40a.html",
      },
      {
        label: "§ 40b EnWG – Abrechnungs- und Informationszeitraum",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40b.html",
      },
      {
        label: "§ 41b EnWG – Abschlagszahlungen und Vorauszahlungen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__41b.html",
      },
    ],
  },

  {
    slug: "jahresabrechnung",
    category: "abrechnung",
    updated: "2026-08-29",
    aka: ["Verbrauchsabrechnung", "Turnusabrechnung", "Abrechnungszeitraum", "§ 40 EnWG"],
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
          text: "§ 40 Abs. 2 und 3 [[enwg|EnWG]] schreiben den Inhalt vor. Neben den Stammdaten – Vertrags- und Kundendaten, [[vertragskonto|Vertragskonto]], [[marktlokation|Marktlokations-ID]], Zählernummer, Netzbetreibernummer, Abrechnungszeitraum – gehören dazu:",
        },
        {
          t: "ul",
          items: [
            "die [[zaehlerstand|Zählerstände]] mit Kennzeichnung ihrer **Herkunft**: abgelesen, geschätzt oder vom Kunden gemeldet",
            "die Preisbestandteile und die Aufschlüsselung von Steuern, Abgaben und Umlagen sowie die geleisteten [[abschlagszahlung|Abschläge]]",
            "der **Vorjahresvergleich**: Verbrauch des Abrechnungszeitraums neben dem des vergleichbaren Vorjahreszeitraums, möglichst grafisch",
            "der Vergleich mit einer **Vergleichskundengruppe** (etwa Haushalt gleicher Größe), als Zahl oder Grafik",
            "**Vertragslaufzeit**, nächstmöglicher Kündigungstermin und Kündigungsfrist",
            "der Hinweis auf die Möglichkeit eines [[lieferantenwechsel|Lieferantenwechsels]] und auf Vergleichsangebote",
            "der Hinweis auf die **Schlichtungsstelle Energie** und den **Verbraucherservice der Bundesnetzagentur**, jeweils mit Kontaktdaten",
            "beim Strom die [[stromkennzeichnung|Stromkennzeichnung]]",
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Die **Schlussrechnung** ist ein eigenes Dokument: Sie wird bei Lieferende – Kündigung, [[lieferantenwechsel|Wechsel]], [[umzug|Auszug]] – erstellt und muss nach § 40c Abs. 1 EnWG ebenfalls spätestens sechs Wochen nach Beendigung des Lieferverhältnisses vorliegen. Inhaltlich folgt sie denselben Regeln, rechnet aber nicht bis zum Turnus, sondern bis zum Lieferende ab.",
        },
        { t: "h", level: 2, text: "Wenn der Zeitraum zerfällt" },
        {
          t: "p",
          text: "Ändert sich mitten im Jahr ein Preis, entstehen zwei Teilzeiträume mit je eigenem [[arbeitspreis|Arbeitspreis]]. Ohne echte Ablesung zum Stichtag wird der Verbrauch rechnerisch aufgeteilt – beim Gas nach Gradtagszahlen, beim Strom nach [[lastprofil|Lastprofil]]. Auf der Rechnung erscheint dann der Hinweis auf eine Verbrauchszuordnung wegen unterjähriger Preisänderung.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Nach § 40c Abs. 1 EnWG ist eine Abrechnung spätestens sechs Wochen nach Ende des Abrechnungszeitraums zu erstellen – dasselbe gilt für die Schlussrechnung nach Lieferende. Verspätete Abrechnungen sind nicht nur ärgerlich, sie schwächen auch die Position des Versorgers bei Forderungen.",
        },
      ],
    },
    related: ["abschlagszahlung", "verbrauch", "nachzahlung-guthaben", "preisanpassung", "schlussrechnung", "rechnungskorrektur"],
    sources: [
      {
        label: "§ 40 EnWG – Strom- und Gasrechnungen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40.html",
      },
      {
        label: "§ 40c EnWG – Rechnungsstellung, Abrechnungsinformationen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40c.html",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
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
    related: ["abschlagszahlung", "jahresabrechnung", "zahlung-und-mahnwesen", "ratenzahlung-abwendungsvereinbarung", "schlussrechnung"],
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
    related: ["verbrauchsstelle", "jahresabrechnung", "zahlung-und-mahnwesen", "letztverbraucher", "rechnungskorrektur", "ratenzahlung-abwendungsvereinbarung"],
  },

  {
    slug: "zahlung-und-mahnwesen",
    category: "abrechnung",
    updated: "2026-08-29",
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
            { title: "Androhung der Unterbrechung", text: "In der Grundversorgung mit vier Wochen Vorlauf (§ 19 Abs. 2 StromGVV). Zugleich muss der Grundversorger eine **Abwendungsvereinbarung** anbieten: zinsfreie Ratenzahlung der Rückstände bei Weiterversorgung, verbunden mit der Pflicht, die laufenden Abschläge zu zahlen (§ 19 Abs. 5)." },
            { title: "Ankündigung des Termins", text: "Der konkrete Beginn der Unterbrechung ist **acht Werktage** vorher anzukündigen (§ 19 Abs. 3 StromGVV)." },
            { title: "Unterbrechung", text: "Nur zulässig, wenn die Folgen nicht außer Verhältnis zur Höhe der Forderung stehen und der Kunde nicht darlegt, dass hinreichende Aussicht auf Zahlung besteht. Der Vertrag läuft weiter – nur die Lieferung ist unterbrochen." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Grundlage sind § 19 StromGVV und § 19 GasGVV. Die Schwelle liegt bei mindestens 100 € Rückstand; **strittige** – also form- und fristgerecht beanstandete – sowie noch nicht fällige Beträge zählen nicht mit. Die Kosten von Unterbrechung und Wiederherstellung trägt der Kunde (§ 19 Abs. 4); der Versorger darf sie pauschal berechnen, muss auf Verlangen aber die Berechnungsgrundlage nachweisen. Eine Wiederaufnahme muss unverzüglich erfolgen, sobald die Gründe entfallen und die Kosten ersetzt sind.",
        },
        {
          t: "note",
          kind: "tip",
          text: "Wirtschaftlich lohnt sich fast jede Alternative zur Sperrung: Sperren und Entsperren kosten Geld, das der Kunde zwar schuldet, aber gerade nicht hat. Eine Sperre beendet weder den Vertrag noch löst sie eine Ersatzversorgung aus – der Kunde bleibt im Vertrag, Grundpreis und Rückstand laufen weiter. Ratenzahlungen, angepasste [[abschlagszahlung|Abschläge]] und frühe Ansprache sind billiger.",
        },
        { t: "h", level: 2, text: "Verjährung und Nachberechnung" },
        {
          t: "dl",
          items: [
            { term: "Verjährung", def: "Forderungen aus Energielieferungen verjähren nach **drei Jahren** (§ 195 BGB). Die Frist beginnt mit dem Ende des Jahres, in dem die Forderung entstanden ist und der Versorger davon wusste (§ 199 BGB) – eine Rechnung vom März 2023 ist also Ende 2026 verjährt." },
            { term: "Nachberechnung", def: "Stellt sich ein Rechenfehler oder eine falsche Ablesung heraus, darf der Grundversorger nach § 18 Abs. 2 StromGVV rückwirkend nachberechnen – aber höchstens für **drei Jahre**; zu viel Gezahltes ist im selben Zeitraum zu erstatten." },
            { term: "Zahlungsverweigerung", def: "Einwände gegen eine Rechnung berechtigen nur dann zum Zahlungsaufschub oder zur Verweigerung, wenn die ernsthafte Möglichkeit eines **offensichtlichen Fehlers** besteht – etwa ein Verbrauch, der das Doppelte des Vorjahres übersteigt, oder ein Zählerstand unter dem Vorjahreswert (§ 18 Abs. 1 StromGVV). Solche Beträge gelten als strittig und zählen für die Sperrschwelle nicht mit." },
          ],
        },
      ],
    },
    related: ["nachzahlung-guthaben", "stromgvv-gasgvv", "vertragskonto", "abschlagszahlung", "ratenzahlung-abwendungsvereinbarung", "rechnungskorrektur"],
    sources: [
      {
        label: "§ 19 StromGVV – Unterbrechung der Versorgung",
        url: "https://www.gesetze-im-internet.de/stromgvv/__19.html",
      },
      {
        label: "§ 19 GasGVV – Unterbrechung der Versorgung",
        url: "https://www.gesetze-im-internet.de/gasgvv/__19.html",
      },
      {
        label: "§ 18 StromGVV – Berechnungsfehler",
        url: "https://www.gesetze-im-internet.de/stromgvv/__18.html",
      },
      {
        label: "§ 195 BGB – Regelmäßige Verjährungsfrist",
        url: "https://www.gesetze-im-internet.de/bgb/__195.html",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
    ],
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
    related: ["leistungspreis", "lastprofil", "zaehlwerk", "energie-einheiten", "netznutzungsabrechnung"],
  },

  {
    slug: "schlussrechnung",
    category: "abrechnung",
    updated: "2026-08-29",
    aka: ["Endabrechnung", "Zwischenabrechnung", "Turnusabrechnung", "Abgrenzung", "§ 40c EnWG", "Lieferende"],
    title: { de: "Schlussrechnung, Zwischen- und Turnusabrechnung", en: "Final, interim and periodic bills" },
    summary: {
      de: "Die Schlussrechnung rechnet bis zum Lieferende ab, die Zwischenabrechnung bis zu einem Stichtag im laufenden Vertrag, die Turnusabrechnung bis zum regulären Ende des Abrechnungszeitraums – alle drei folgen demselben Rechenweg, unterscheiden sich aber in Auslöser, Frist und Zählerstandsquelle.",
      en: "The final bill settles up to the end of supply, the interim bill up to a cut-off date within a running contract, the periodic bill up to the regular end of the billing period – all three share the same arithmetic but differ in trigger, deadline and source of the meter reading.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Jede Rechnung ist eine Abrechnung über einen Zeitraum – die Frage ist nur, was den Zeitraum beendet. Beim Turnus ist es der Kalender, bei der Zwischenabrechnung ein Ereignis mitten im Vertrag, bei der Schlussrechnung das Ende des Liefervertrags selbst. Aus dieser einen Unterscheidung folgen Frist, Zählerstandsquelle und der Umgang mit den Abschlägen.",
        },
        { t: "h", level: 2, text: "Drei Rechnungsarten, ein Rechenweg" },
        {
          t: "table",
          head: ["", "Turnusabrechnung", "Zwischenabrechnung", "Schlussrechnung"],
          rows: [
            ["Auslöser", "Ende des Abrechnungszeitraums, meist jährlich (Turnus)", "Ereignis im laufenden Vertrag: [[preisanpassung|Preisänderung]], Kundenwunsch, Zählerwechsel, Wechsel des Abrechnungsmodus", "Ende des Liefervertrags: [[lieferantenwechsel|Lieferantenwechsel]], [[umzug|Auszug]], Kündigung, Tod des Kunden, Stilllegung"],
            ["Vertrag danach", "läuft weiter", "läuft weiter", "beendet – das [[vertragskonto|Vertragskonto]] wird ausgeglichen und geschlossen"],
            ["Frist", "spätestens sechs Wochen nach Ende des Abrechnungszeitraums", "keine eigene gesetzliche Frist; bei Kundenwunsch nach § 40b EnWG im vereinbarten Rhythmus", "spätestens sechs Wochen nach Beendigung des Lieferverhältnisses"],
            ["Abschläge", "werden verrechnet, neuer [[abschlagszahlung|Abschlagsplan]] beginnt", "werden verrechnet, Abschlagsplan läuft angepasst weiter", "werden verrechnet, Abschlagsplan endet; Guthaben wird ausgezahlt"],
            ["Zählerstand", "Turnusablesung durch [[messstellenbetrieb|MSB]] oder Kundenselbstablesung", "häufig rechnerisch abgegrenzt", "Wechsel- oder Auszugszählerstand, per `MSCONS` vom Netzbetreiber übermittelt"],
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "**§ 40c Abs. 1 [[enwg|EnWG]]**: Der Lieferant muss die Abrechnung spätestens **sechs Wochen nach Ende des Abrechnungszeitraums** und die Schlussrechnung spätestens **sechs Wochen nach Beendigung des Lieferverhältnisses** erstellen. Die Frist ist nicht dispositiv – sie gilt in der [[grundversorgung|Grundversorgung]] wie im Sondervertrag. Der übliche Abrechnungszeitraum darf zwölf Monate nicht wesentlich überschreiten (§ 40b Abs. 1 EnWG); auf Wunsch des Kunden ist eine monatliche, vierteljährliche oder halbjährliche Abrechnung anzubieten.",
        },
        { t: "h", level: 2, text: "Der Zählerstand zum Stichtag" },
        {
          t: "p",
          text: "Ob eine Rechnung sauber ist, entscheidet sich am Stichtagszählerstand. Für ihn gibt es drei Quellen, und die Rechnung muss ausweisen, welche es war (§ 40 Abs. 2 EnWG):",
        },
        {
          t: "dl",
          items: [
            { term: "Abgelesen", def: "Vom Messstellenbetreiber oder Netzbetreiber erhoben – bei [[intelligentes-messsystem|intelligenten Messsystemen]] automatisch zum Tag genau, sonst per Turnus- oder Wechselablesung vor Ort. Der verlässlichste Wert." },
            { term: "Vom Kunden gemeldet", def: "Selbstablesung per Karte, [[endkundenportal|Portal]] oder App. Gilt als abgelesener Wert, wird aber plausibilisiert: liegt er unter dem Vorstand oder weit über der Prognose, geht er zurück in die Klärung." },
            { term: "Geschätzt / rechnerisch abgegrenzt", def: "Fehlt jede Ablesung, wird der Stand aus dem letzten bekannten Zählerstand und dem Verbrauchsverlauf gebildet – beim Strom nach [[lastprofil|Lastprofil]], beim Gas nach Gradtagszahlen. Fachlich ist das eine [[ersatzwertbildung|Ersatzwertbildung]]; auf der Rechnung steht „geschätzt“." },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Beim [[lieferantenwechsel|Lieferantenwechsel]] gibt es genau **einen** Wechselzählerstand, den der Netzbetreiber ermittelt und per `MSCONS` an alten und neuen Lieferanten verteilt – so enden und beginnen beide Verträge mit derselben Zahl. Ein vom Kunden dem alten Lieferanten gemeldeter Stand ist dafür nur ein Hinweis; maßgeblich bleibt der Wert aus der [[marktkommunikation|Marktkommunikation]]. Ähnlich beim [[umzug|Umzug]]: Der Auszugszählerstand kommt im Prozess vom Netzbetreiber, auch wenn der Kunde ihn selbst abgelesen hat.",
        },
        { t: "h", level: 2, text: "Abgrenzung bei Preisänderung" },
        {
          t: "p",
          text: "Ändert sich der Preis mitten im Abrechnungszeitraum, wird selten eine Zwischenrechnung geschrieben. Stattdessen zerfällt die Turnus- oder Schlussrechnung in Teilzeiträume mit je eigenem [[arbeitspreis|Arbeitspreis]], und der Verbrauch wird ohne Stichtagsablesung auf die Teilzeiträume verteilt:",
        },
        {
          t: "ul",
          items: [
            "**Zeitanteilig (linear)**: Tage des Teilzeitraums ÷ Tage des Gesamtzeitraums. Einfach, aber für Heizgas grob falsch – dort fallen zwei Drittel des Verbrauchs auf fünf Wintermonate.",
            "**Nach Lastprofil bzw. Gradtagszahlen**: Der Verbrauch wird nach dem [[lastprofil|Standardlastprofil]] (Strom) oder nach Gradtagszahlen des Netzbetreibers (Gas) gewichtet. Das ist der Standard und der Grund für den Rechnungshinweis „Verbrauchszuordnung wegen unterjähriger Preisänderung“.",
            "**Nach Messwerten**: Bei intelligenten Messsystemen oder registrierender Leistungsmessung liegen echte Tageswerte vor – dann wird nicht verteilt, sondern gemessen abgegrenzt.",
          ],
        },
        {
          t: "example",
          title: "Schlussrechnung nach Auszug mit Preisänderung im Zeitraum",
          lines: [
            { label: "Zeitraum", value: "1. Oktober bis 15. Mai (227 Tage)" },
            { label: "Verbrauch (Auszugsstand − Anfangsstand)", value: "2.840 kWh" },
            { label: "Anteil bis 31. Dezember nach Lastprofil", value: "1.220 kWh × 34,50 ct/kWh = 420,90 €" },
            { label: "Anteil ab 1. Januar nach Lastprofil", value: "1.620 kWh × 36,80 ct/kWh = 596,16 €" },
            { label: "Grundpreis 12,90 €/Monat, zeitanteilig", value: "96,27 €" },
            { label: "Rechnungsbetrag", value: "1.113,33 €" },
            { label: "7 Abschläge à 140,00 €", value: "− 980,00 €" },
          ],
          result: { label: "Nachzahlung, fällig mit der Schlussrechnung", value: "133,33 €" },
        },
        {
          t: "note",
          kind: "praxis",
          text: "Der Grundpreis wird fast immer tagesgenau abgegrenzt, der Verbrauch nach Profil – zwei verschiedene Verteilungsschlüssel in einer Rechnung. Wer im Abrechnungssystem beide Bestandteile über denselben Schlüssel laufen lässt, bekommt bei jeder Gasabrechnung mit Winterstichtag Beschwerden.",
        },
        { t: "h", level: 2, text: "Verrechnung der Abschläge" },
        {
          t: "p",
          text: "Alle im Zeitraum fälligen [[abschlagszahlung|Abschläge]] werden vom Rechnungsbetrag abgezogen – ob sie tatsächlich gezahlt wurden, ist eine Frage des Vertragskontos, nicht der Rechnung. Ein offener Abschlag bleibt als eigene Forderung stehen; die Rechnung selbst weist nur den Saldo aus Verbrauchskosten und **geforderten** Abschlägen aus. Ein [[nachzahlung-guthaben|Guthaben]] aus einer Schlussrechnung ist unverzüglich auszuzahlen – eine Verrechnung mit dem nächsten Abschlag gibt es nicht mehr, weil kein Abschlag mehr folgt.",
        },
        { t: "h", level: 2, text: "Der Datenfluss" },
        {
          t: "steps",
          items: [
            { title: "Auslöser erkennen", text: "Kündigungsbestätigung, Abmeldung aus dem [[wechselprozess-gpke|Wechselprozess]] oder Auszugsmeldung setzen das Lieferende im Vertrag – ab hier läuft die Sechs-Wochen-Frist." },
            { title: "Zählerstand empfangen", text: "Der Netzbetreiber übermittelt den Stichtagszählerstand per `MSCONS`. Fehlt er nach angemessener Wartezeit, wird geschätzt – die Frist wartet nicht auf den Netzbetreiber." },
            { title: "Abgrenzen und bewerten", text: "Verbrauch auf Preisperioden verteilen, Grundpreis tagesgenau, Steuern und Umlagen mit ihren jeweiligen Gültigkeitszeiträumen." },
            { title: "Verrechnen und buchen", text: "Abschläge gegenrechnen, Saldo ins Vertragskonto, Abschlagsplan beenden oder neu berechnen, Guthaben auszahlen oder Nachzahlung fällig stellen." },
            { title: "Zustellen", text: "Rechnung mit allen Pflichtangaben nach § 40 EnWG – bei der Schlussrechnung zusätzlich mit dem Hinweis, dass der Vertrag beendet ist und keine weiteren Abschläge eingezogen werden." },
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Ein Klassiker: Der SEPA-Einzug läuft nach Lieferende weiter, weil der Abschlagsplan nicht mit dem Vertrag beendet wurde. Das Geld muss zurück, der Kunde ist verärgert, und die Schlussrechnung stimmt trotzdem nicht mehr mit dem Konto überein. Das Lieferende muss den Abschlagsplan **hart** beenden – nicht die Schlussrechnung.",
        },
      ],
    },
    related: ["jahresabrechnung", "rechnungskorrektur", "abschlagszahlung", "nachzahlung-guthaben", "lieferantenwechsel", "umzug", "wechselprozess-gpke"],
    sources: [
      {
        label: "§ 40c EnWG – Rechnungsstellung, Abrechnungsinformationen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40c.html",
      },
      {
        label: "§ 40b EnWG – Abrechnungs- und Informationszeitraum",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40b.html",
      },
      {
        label: "§ 40 EnWG – Strom- und Gasrechnungen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__40.html",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
      {
        label: "BDEW MaKo (vormals EDI@Energy) – MSCONS und Datenformate",
        url: "https://www.bdew-mako.de/",
      },
    ],
  },

  {
    slug: "rechnungskorrektur",
    category: "abrechnung",
    updated: "2026-08-29",
    aka: ["Storno", "Stornorechnung", "Korrekturrechnung", "Gutschrift", "Nachberechnung", "Rechnungsberichtigung", "§ 18 StromGVV", "§ 14 UStG"],
    title: { de: "Rechnungskorrektur: Storno, Neuberechnung, Gutschrift", en: "Invoice correction: reversal, rebilling, credit note" },
    summary: {
      de: "Eine fehlerhafte Rechnung wird nie überschrieben, sondern storniert und neu berechnet – mit eigener Rechnungsnummer, Bezug auf das Original und Auswirkungen auf Vertragskonto und Abschlagsplan.",
      en: "A faulty invoice is never overwritten but reversed and rebilled – with its own invoice number, a reference to the original, and consequences for the contract account and the instalment plan.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Rechnungen sind Buchungsbelege, keine Dokumente, die man „nochmal richtig“ erzeugt. Wer eine Rechnung ändern will, erzeugt eine zweite Buchung, die die erste aufhebt, und eine dritte, die es richtig macht. Alles andere bringt Buchhaltung, Umsatzsteuer und Kundenkommunikation aus dem Tritt.",
        },
        { t: "h", level: 2, text: "Drei Wege, einen Fehler zu beheben" },
        {
          t: "dl",
          items: [
            { term: "Storno + Neuberechnung", def: "Die **Stornorechnung** hebt das Original vollständig auf (alle Positionen mit umgekehrtem Vorzeichen), die **neue Rechnung** rechnet denselben Zeitraum mit korrigierten Daten erneut ab. Drei Belege, drei Nummern, ein sauberer Kontoverlauf. Der Standardweg in Abrechnungssystemen für Energie." },
            { term: "Korrekturrechnung (Differenzrechnung)", def: "Ein einzelner Beleg, der nur die Differenz zwischen alt und neu ausweist. Kürzer, aber schwerer nachvollziehbar – der Kunde sieht nicht mehr, wie sich der neue Gesamtbetrag zusammensetzt. Verbreitet bei kleinen Nachberechnungen einzelner Positionen." },
            { term: "Gutschrift", def: "Ein Beleg zugunsten des Kunden – etwa eine Kulanzgutschrift oder die Erstattung eines zu viel berechneten Betrags. Achtung: umsatzsteuerlich ist eine „Gutschrift“ eigentlich eine vom Leistungsempfänger ausgestellte Rechnung (§ 14 Abs. 2 UStG). Was der Versorger dem Kunden schickt, ist korrekt eine **Rechnungskorrektur**; im Alltag heißt sie trotzdem Gutschrift." },
          ],
        },
        { t: "h", level: 2, text: "Typische Ursachen" },
        {
          t: "table",
          head: ["Ursache", "Wie es auffällt", "Was korrigiert wird"],
          rows: [
            ["Falscher [[zaehlerstand|Zählerstand]]", "Kundenreklamation, Plausibilitätsprüfung, Kontrollablesung", "Verbrauch und damit alle mengenabhängigen Positionen"],
            ["Zählerwechsel nicht erfasst", "Verbrauch springt oder wird negativ, weil Alt- und Neuzähler vermischt wurden", "Zwei Verbrauchsabschnitte: Altzähler bis Ausbaustand, Neuzähler ab Einbaustand"],
            ["Falscher Preis oder falsche Preisperiode", "Preisänderung verspätet eingepflegt, falsches Preisblatt, falscher Tarif", "Bewertung; die Mengen bleiben"],
            ["[[ersatzwertbildung|Ersatzwert]] durch echten Wert ersetzt", "Der Messstellenbetreiber liefert nachträglich den wahren Wert per `MSCONS`", "Verbrauch; oft nur geringe Differenz, aber Pflicht zur Korrektur"],
            ["Falsche Stammdaten", "Steuerbefreiung, Konzessionsabgaben-Gruppe, Kundengruppe oder Lastprofil falsch zugeordnet", "Einzelne Preisbestandteile, häufig über mehrere Jahre"],
          ],
        },
        { t: "h", level: 2, text: "Wie weit zurück?" },
        {
          t: "note",
          kind: "law",
          text: "**§ 18 StromGVV / § 18 GasGVV**: Ergibt eine Prüfung der Messeinrichtung eine Überschreitung der Verkehrsfehlergrenzen oder werden Fehler in der Ermittlung des Rechnungsbetrags festgestellt, wird zu viel oder zu wenig Berechnetes **erstattet oder nachentrichtet** (Abs. 2). Ansprüche sind auf den der Feststellung vorhergehenden Ablesezeitraum beschränkt, wenn der Fehler nicht weiter zurückverfolgt werden kann – längstens jedoch auf **drei Jahre**. Nach Abs. 1 berechtigen Einwände gegen die Rechnung nur dann zur Zahlungsverweigerung, wenn die ernsthafte Möglichkeit eines **offensichtlichen Fehlers** besteht.",
        },
        {
          t: "p",
          text: "Die Drei-Jahres-Grenze der Grundversorgungsverordnungen läuft parallel zur regelmäßigen **Verjährung** nach § 195 BGB: ebenfalls drei Jahre, beginnend mit dem Ende des Jahres, in dem der Anspruch entstanden ist und der Gläubiger davon wusste oder hätte wissen müssen (§ 199 BGB). Bei einer Nachberechnung heißt das praktisch: Was älter als drei volle Kalenderjahre ist, kann der Versorger in der Regel nicht mehr durchsetzen – umgekehrt kann der Kunde eine Erstattung für denselben Zeitraum verlangen. In Sonderverträgen gilt § 18 StromGVV nicht unmittelbar, die AGB enthalten aber fast immer eine gleichlautende Klausel.",
        },
        { t: "h", level: 2, text: "Rechnungsnummern und Belegkette" },
        {
          t: "p",
          text: "§ 14 Abs. 4 UStG verlangt auf jeder Rechnung eine **fortlaufende Nummer mit einer oder mehreren Zahlenreihen, die zur Identifizierung der Rechnung einmalig vergeben wird**. Daraus folgt für Korrekturen:",
        },
        {
          t: "ul",
          items: [
            "Storno und neue Rechnung bekommen jeweils eine **eigene, neue** Nummer aus dem laufenden Nummernkreis – die Originalnummer wird nie wiederverwendet.",
            "Die Stornorechnung **referenziert das Original** („Storno zu Rechnung Nr. …“), die neue Rechnung ebenso („ersetzt Rechnung Nr. …“). So bleibt die Kette in beide Richtungen nachvollziehbar.",
            "Eine Rechnungsberichtigung muss eindeutig auf die ursprüngliche Rechnung Bezug nehmen (§ 31 Abs. 5 UStDV); nur die fehlerhaften Angaben müssen übermittelt werden – in der Energieabrechnung wird trotzdem fast immer die vollständige Rechnung neu erzeugt.",
            "Lücken im Nummernkreis sind zulässig, Doppelvergaben nicht. Ein Storno, das das Original physisch löscht, erzeugt genau diese Lücke ohne Beleg – und ist damit ein Verstoß gegen die Aufbewahrungspflicht.",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "**Niemals überschreiben.** Eine Rechnung, die einmal erzeugt und dem Kunden zugestellt wurde, ist unveränderlich – auch wenn sie erkennbar falsch ist. Das Abrechnungssystem sollte den Zustand „fakturiert“ technisch versiegeln und Änderungen ausschließlich über Storno + Neuberechnung zulassen. Dieselbe Regel gilt für das PDF: Das Original bleibt abrufbar, die Korrektur kommt dazu.",
        },
        { t: "h", level: 2, text: "Wirkung auf Vertragskonto und Abschlagsplan" },
        {
          t: "steps",
          items: [
            { title: "Forderung ausbuchen", text: "Die Stornorechnung erzeugt im [[vertragskonto|Vertragskonto]] eine Gegenbuchung zum Original. Ist die Originalforderung bereits bezahlt, entsteht vorübergehend ein Guthaben." },
            { title: "Neue Forderung einbuchen", text: "Die neue Rechnung wird mit eigener Fälligkeit gebucht. Bereits geleistete Zahlungen werden umgewidmet, sodass nur die **Differenz** offen bleibt oder als [[nachzahlung-guthaben|Guthaben]] erstattet wird." },
            { title: "Mahnlauf anhalten", text: "Zwischen Storno und Neuberechnung darf kein Mahnlauf greifen – ein Kunde, der wegen einer stornierten Rechnung gemahnt wird, ist der teuerste Servicefall überhaupt. Übliche Lösung ist eine Mahnsperre auf dem Konto für die Dauer der Klärung." },
            { title: "Abschlagsplan prüfen", text: "War der Verbrauch falsch, ist auch die Prognose falsch: Die neue Rechnung berechnet den [[abschlagszahlung|Abschlag]] neu und ersetzt die noch offenen Raten des Plans." },
            { title: "Folgerechnungen prüfen", text: "Wurde ein Zählerstand korrigiert, sind alle Folgerechnungen mit demselben Anfangsstand ebenfalls falsch – die Korrektur läuft dann als Kaskade bis zur aktuellen Rechnung." },
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Die Kaskade ist der eigentliche Grund, warum Rechnungskorrekturen teuer sind: Ein Ablesefehler aus dem Vorjahr zieht die Jahresabrechnung, den daraus abgeleiteten Abschlagsplan und die laufende Abrechnung in Mitleidenschaft. Systeme, die Rechnungen als unveränderliche Kette modellieren, können das automatisch abwickeln; Systeme, die einzelne Felder editieren lassen, geraten hier regelmäßig in Inkonsistenzen.",
        },
      ],
    },
    related: ["jahresabrechnung", "schlussrechnung", "zahlung-und-mahnwesen", "vertragskonto", "zaehlerstand", "ersatzwertbildung", "umsatzsteuer-energie"],
    sources: [
      {
        label: "§ 18 StromGVV – Berechnungsfehler",
        url: "https://www.gesetze-im-internet.de/stromgvv/__18.html",
      },
      {
        label: "§ 18 GasGVV – Berechnungsfehler",
        url: "https://www.gesetze-im-internet.de/gasgvv/__18.html",
      },
      {
        label: "§ 195 BGB – Regelmäßige Verjährungsfrist",
        url: "https://www.gesetze-im-internet.de/bgb/__195.html",
      },
      {
        label: "§ 199 BGB – Beginn der regelmäßigen Verjährungsfrist",
        url: "https://www.gesetze-im-internet.de/bgb/__199.html",
      },
      {
        label: "§ 14 UStG – Ausstellung von Rechnungen",
        url: "https://www.gesetze-im-internet.de/ustg_1980/__14.html",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
    ],
  },

  {
    slug: "netznutzungsabrechnung",
    category: "abrechnung",
    level: "vertiefung",
    updated: "2026-08-29",
    aka: ["Netznutzung", "Lieferantenrahmenvertrag", "Netznutzungsvertrag", "MMMA", "Mehr-/Mindermengenabrechnung", "Mehrmengen", "Mindermengen", "INVOIC", "REMADV", "§ 20 EnWG"],
    title: { de: "Netznutzungsabrechnung und Mehr-/Mindermengen", en: "Grid usage billing and imbalance quantities" },
    summary: {
      de: "Der Netzbetreiber stellt dem Lieferanten die Netznutzung seiner Kunden in Rechnung – als monatliche Abschläge plus Turnusabrechnung, per INVOIC und REMADV; die Mehr-/Mindermengenabrechnung gleicht anschließend die Differenz zwischen bilanzierter und tatsächlich verbrauchter Energie aus.",
      en: "The grid operator bills the supplier for its customers' grid usage – as monthly instalments plus a periodic bill, via INVOIC and REMADV; the imbalance settlement (Mehr-/Mindermengenabrechnung) then evens out the gap between the energy allocated and the energy actually consumed.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Kunde zahlt eine Rechnung, der Lieferant zahlt zwei: eine für die Energie an den Vorlieferanten und eine für das Netz an den [[netzbetreiber|Netzbetreiber]]. Die Netznutzungsabrechnung ist die zweite – ein reines B2B-Geschäft zwischen [[marktrollen|Marktpartnern]], das der Kunde nie sieht, dessen Beträge aber rund ein Viertel seines Strompreises ausmachen.",
        },
        { t: "h", level: 2, text: "Grundlage: der Lieferantenrahmenvertrag" },
        {
          t: "p",
          text: "Wer Kunden in einem Netzgebiet beliefern will, schließt mit dem Netzbetreiber einen **Lieferantenrahmenvertrag** (Strom) bzw. **Netznutzungsvertrag**. § 20 Abs. 1a [[enwg|EnWG]] regelt das so: Der Netzzugang wird durch einen Vertrag zwischen Netzbetreiber und Lieferant gewährt, der alle [[marktlokation|Marktlokationen]] des Lieferanten im Netzgebiet umfasst – der Kunde selbst braucht keinen eigenen Netznutzungsvertrag, seine Netznutzung ist im Liefervertrag „all inclusive“ enthalten. Die Bundesnetzagentur gibt den Vertragsinhalt per Festlegung weit gehend vor; verhandelt wird faktisch nichts.",
        },
        {
          t: "note",
          kind: "info",
          text: "Das Gegenmodell – Kunde schließt Liefervertrag und Netznutzungsvertrag getrennt – existiert als **Netznutzungsvertrag mit dem Letztverbraucher**, praktisch nur bei Industriekunden. Für den Massenmarkt ist das „all inclusive“-Modell mit Lieferantenrahmenvertrag der Standard.",
        },
        { t: "h", level: 2, text: "Was der Netzbetreiber in Rechnung stellt" },
        {
          t: "table",
          head: ["Position", "Grundlage", "Anmerkung"],
          rows: [
            ["[[netzentgelte|Netzentgelt]] Arbeitspreis", "ct/kWh × Verbrauch", "Preisblatt des Netzbetreibers je Spannungsebene und Kundengruppe"],
            ["Netzentgelt Grundpreis", "€/Jahr je Marktlokation", "bei [[lastprofil|SLP]]-Kunden; enthält häufig die Kosten der konventionellen Messung"],
            ["Netzentgelt [[leistungspreis|Leistungspreis]]", "€/kW × Jahres- oder Monatshöchstleistung", "nur bei RLM-Kunden; Zuordnung zum Preisblatt nach Benutzungsstunden"],
            ["[[messstellenbetrieb|Messstellenbetrieb]] und Messung", "€/Jahr je Zähler", "nur wenn der Netzbetreiber zugleich grundzuständiger Messstellenbetreiber ist; sonst rechnet der wettbewerbliche MSB getrennt ab"],
            ["[[konzessionsabgabe|Konzessionsabgabe]]", "ct/kWh nach KAV", "der Netzbetreiber zieht sie ein und reicht sie an die Gemeinde weiter"],
            ["Umlagen", "ct/kWh", "[[kwk-umlage|KWK-Umlage]], [[offshore-netzumlage|Offshore-Netzumlage]], § 19 StromNEV-Umlage, [[umlage-abschaltbare-lasten|Umlage abschaltbare Lasten]] – werden über die Netzrechnung eingesammelt"],
            ["[[blindarbeit|Blindarbeit]]", "ct/kvarh oberhalb der Freigrenze", "nur RLM"],
          ],
          caption: "Stromsteuer und Umsatzsteuer gehören nicht in die Netzrechnung – die Stromsteuer schuldet der Lieferant direkt dem Hauptzollamt.",
        },
        { t: "h", level: 2, text: "Rhythmus: Abschläge und Turnus" },
        {
          t: "p",
          text: "Der Ablauf spiegelt die Kundenabrechnung: Für SLP-Kunden stellt der Netzbetreiber **monatliche Abschläge** auf Basis der Jahresverbrauchsprognose, und nach der Turnusablesung folgt die **Netznutzungs-Turnusabrechnung** je Marktlokation, in der die Abschläge verrechnet werden. Für RLM-Kunden wird monatlich nach gemessenem Lastgang abgerechnet – ohne Abschläge. Bei Lieferende gibt es analog zur [[schlussrechnung|Schlussrechnung]] eine Netznutzungs-Schlussabrechnung.",
        },
        {
          t: "dl",
          items: [
            { term: "INVOIC", def: "Die EDIFACT-Rechnung. Der Netzbetreiber sendet je Marktlokation und Abrechnungszeitraum eine `INVOIC` mit allen Positionen, Mengen, Preisen und Zeiträumen – maschinenlesbar, ohne PDF. Rechnungsart (Abschlag, Turnus, Schluss, Storno, MMMA) ist im Nachrichtenkopf codiert." },
            { term: "REMADV", def: "Das Zahlungsavis. Der Lieferant prüft die INVOIC gegen seine eigenen Daten (Zählerstände, Zeiträume, Preisblatt) und antwortet mit einer `REMADV`: akzeptiert, teilweise akzeptiert oder abgelehnt mit Ablehnungsgrund. Bezahlt wird gesammelt, das REMADV ordnet die Zahlung den einzelnen Rechnungen zu." },
            { term: "Rechnungsprüfung", def: "Der eigentliche Aufwand. Netzrechnungen kommen zu Zehntausenden; sie werden automatisch gegen Vertragsdaten, Stammdaten aus `UTILMD` und Messwerte aus `MSCONS` geprüft. Differenzen landen in der Klärung – und die häufigsten Ursachen sind abweichende Zeiträume und Zählerstände, nicht falsche Preise." },
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Netzrechnungsprüfung ist ein Volumengeschäft mit dünner Marge: Wer 100.000 Marktlokationen beliefert, bekommt im Jahr weit über eine Million INVOIC-Positionen. Ohne automatische Prüfung gegen die eigene Abrechnung – gleicher Zählerstand, gleicher Zeitraum, gleiches Preisblatt – ist das nicht zu bewältigen. Jede manuell geklärte Netzrechnung kostet mehr als die Marge der Marktlokation im Monat.",
        },
        { t: "h", level: 2, text: "Mehr-/Mindermengenabrechnung (MMMA)" },
        {
          t: "p",
          text: "SLP-Kunden werden im [[bilanzkreis|Bilanzkreis]] nicht mit ihrem echten Verbrauch bilanziert, sondern mit dem [[lastprofil|Standardlastprofil]] und der Jahresverbrauchsprognose. Der Lieferant hat also im Jahr genau die **prognostizierte** Menge beschafft und in seinen Bilanzkreis eingestellt. Erst nach der Turnusablesung steht fest, was der Kunde tatsächlich verbraucht hat – und die Differenz muss jemand bezahlen oder vergütet bekommen.",
        },
        {
          t: "dl",
          items: [
            { term: "Mehrmenge", def: "Der Kunde hat **mehr** verbraucht als bilanziert. Der Lieferant hat zu wenig eingestellt; der Netzbetreiber hat die Differenz über den Differenzbilanzkreis ausgeglichen und stellt sie dem Lieferanten in Rechnung." },
            { term: "Mindermenge", def: "Der Kunde hat **weniger** verbraucht als bilanziert. Der Lieferant hat zu viel Energie geliefert; der Netzbetreiber vergütet ihm die Differenz." },
            { term: "Preis", def: "Nicht der Vertragspreis des Kunden, sondern der **Mehr-/Mindermengenpreis**: für Strom ein bundeseinheitlicher Monatspreis in ct/kWh, den die Übertragungsnetzbetreiber aus den Spotmarktpreisen ableiten und auf netztransparenz.de veröffentlichen; für Gas ein vom Marktgebietsverantwortlichen veröffentlichter Preis. Bewertet wird die Differenz monatsscharf über den Abrechnungszeitraum verteilt." },
            { term: "Zeitpunkt", def: "Die MMMA folgt der Netznutzungs-Turnusabrechnung mit Abstand – die Preise für den letzten Monat müssen erst feststehen. Sie kommt als eigene `INVOIC` und wird ebenfalls per `REMADV` beantwortet." },
          ],
        },
        {
          t: "example",
          title: "Mehrmenge einer SLP-Marktlokation",
          lines: [
            { label: "Jahresverbrauchsprognose (bilanziert)", value: "3.500 kWh" },
            { label: "Tatsächlicher Verbrauch laut Turnusablesung", value: "3.920 kWh" },
            { label: "Mehrmenge", value: "420 kWh" },
            { label: "Verteilt auf die Monate nach Lastprofil, bewertet mit Monatspreisen", value: "Ø 9,50 ct/kWh" },
          ],
          result: { label: "Netzbetreiber stellt dem Lieferanten in Rechnung", value: "39,90 €" },
        },
        {
          t: "note",
          kind: "info",
          text: "Die MMMA ist **kein** Geschäft mit dem Kunden: Der Kunde zahlt seine 3.920 kWh ohnehin zum Vertragspreis. Sie gleicht nur aus, dass die 420 kWh physisch aus dem Netz des Netzbetreibers kamen und nicht aus dem Bilanzkreis des Lieferanten. Bei RLM-Kunden entstehen Mehr-/Mindermengen praktisch nur, wenn Ersatzwerte nachträglich durch echte Messwerte ersetzt werden.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für die Deckungsbeitragsrechnung eines Lieferanten ist die MMMA ein unangenehmer Posten: Sie kommt Monate nach dem Jahr, für das sie gilt, ihr Vorzeichen hängt von der Prognosequalität ab, und ihr Preis vom Spotmarkt im Nachhinein. Eine gute Jahresverbrauchsprognose spart hier mehr als jede Verhandlung mit dem Vorlieferanten.",
        },
      ],
    },
    related: ["netzentgelte", "bilanzkreis", "lastprofil", "marktkommunikation", "netzbetreiber", "konzessionsabgabe", "schlussrechnung", "ersatzwertbildung"],
    sources: [
      {
        label: "§ 20 EnWG – Zugang zu den Energieversorgungsnetzen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__20.html",
      },
      {
        label: "Netztransparenz.de – Mehr-/Mindermengenabrechnung",
        url: "https://www.netztransparenz.de/",
      },
      {
        label: "BDEW – Marktkommunikation und EDI@Energy-Dokumente",
        url: "https://www.bdew.de/energie/marktkommunikation-edi-energy-dokumente-/",
      },
      {
        label: "BDEW MaKo (vormals EDI@Energy) – INVOIC, REMADV und Datenformate",
        url: "https://www.bdew-mako.de/",
      },
    ],
  },

  {
    slug: "ratenzahlung-abwendungsvereinbarung",
    category: "abrechnung",
    updated: "2026-08-29",
    aka: ["Ratenzahlung", "Ratenplan", "Abwendungsvereinbarung", "Vorauszahlung", "Sicherheitsleistung", "Kaution", "Vorkassezähler", "Prepaid", "§ 19 Abs. 5 StromGVV", "§ 14 StromGVV", "§ 15 StromGVV"],
    title: { de: "Ratenzahlung, Abwendungsvereinbarung und Sicherheiten", en: "Instalment plans, hardship agreements and securities" },
    summary: {
      de: "Werkzeuge für Kunden mit Zahlungsschwierigkeiten: die freiwillige Ratenzahlung, die gesetzlich vorgeschriebene Abwendungsvereinbarung vor einer Sperre sowie Vorauszahlung, Sicherheitsleistung und Vorkassezähler als Absicherung des Versorgers.",
      en: "The toolkit for customers in payment difficulty: the voluntary instalment plan, the legally mandated hardship agreement before a disconnection, and prepayment, security deposit and prepaid meter as the utility's safeguards.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Zwischen „Rechnung bezahlt“ und „Versorgung unterbrochen“ liegt ein ganzer Werkzeugkasten. Er ist nicht nur sozialpolitisch gewollt, sondern auch betriebswirtschaftlich sinnvoll: Eine [[zahlung-und-mahnwesen|Sperre]] kostet Geld und bringt keins zurück. Die Instrumente hier tun das Gegenteil – wenn das Abrechnungssystem sie sauber abbilden kann.",
        },
        { t: "h", level: 2, text: "Überblick" },
        {
          t: "table",
          head: ["Instrument", "Wer initiiert", "Wann", "Rechtsgrundlage"],
          rows: [
            ["Ratenzahlungsvereinbarung", "Kunde oder Versorger", "hohe [[nachzahlung-guthaben|Nachzahlung]], vorübergehender Engpass", "Vertragsfreiheit; Fälligkeit nach § 17 StromGVV / GasGVV"],
            ["Abwendungsvereinbarung", "Versorger – **muss** anbieten", "mit der Androhung der Unterbrechung", "§ 19 Abs. 5 StromGVV / GasGVV"],
            ["Vorauszahlung", "Versorger", "begründete Zweifel an der Zahlungsfähigkeit", "§ 14 StromGVV / GasGVV"],
            ["Sicherheitsleistung (Kaution)", "Versorger, alternativ zur Vorauszahlung", "wie Vorauszahlung", "§ 15 StromGVV / GasGVV"],
            ["Vorkassezähler / Prepaid", "Versorger, Kunde kann zustimmen", "statt Vorauszahlung oder statt Sperre", "§ 14 Abs. 3 StromGVV; außerhalb der GVV vertraglich"],
          ],
        },
        { t: "h", level: 2, text: "Ratenzahlungsvereinbarung" },
        {
          t: "p",
          text: "Die einfachste Form: Eine fällige Forderung – meist eine Nachzahlung aus der [[jahresabrechnung|Jahresabrechnung]] – wird in mehrere Raten aufgeteilt, die parallel zu den laufenden [[abschlagszahlung|Abschlägen]] gezahlt werden. Gesetzlich ist sie außerhalb der Grundversorgung nicht vorgeschrieben, aber fast jeder Versorger bietet sie an, weil sie Forderungsausfälle senkt. Üblich sind drei bis zwölf Raten, zinsfrei oder mit geringem Aufschlag; die Vereinbarung enthält in der Regel eine **Verfallklausel**: Wird eine Rate nicht gezahlt, ist der gesamte Restbetrag sofort fällig.",
        },
        {
          t: "note",
          kind: "law",
          text: "In der Grundversorgung ist der Rechnungsbetrag erst **zwei Wochen** nach Zugang der Rechnung fällig (§ 17 Abs. 1 StromGVV / GasGVV) – die Ratenzahlung setzt also frühestens dort an. Eine allgemeine Pflicht zur Ratenzahlung außerhalb der Sperrsituation kennt die Verordnung nicht; sie ergibt sich erst über die Abwendungsvereinbarung.",
        },
        { t: "h", level: 2, text: "Abwendungsvereinbarung" },
        {
          t: "p",
          text: "Seit der Novelle der Grundversorgungsverordnungen ist die Abwendungsvereinbarung kein Kulanzangebot mehr, sondern **Pflicht**: Wer als Grundversorger die Unterbrechung androht, muss dem Kunden zugleich eine Vereinbarung anbieten, mit der er die Sperre abwenden kann. Der Kunde muss ihr nur zustimmen – dann darf nicht gesperrt werden, solange er sie einhält.",
        },
        {
          t: "note",
          kind: "law",
          text: "**§ 19 Abs. 5 StromGVV / GasGVV**: Der Grundversorger ist verpflichtet, dem Kunden spätestens mit der Androhung der Unterbrechung den Abschluss einer Abwendungsvereinbarung anzubieten. Sie beinhaltet eine **zinsfreie Ratenzahlung** der Zahlungsrückstände und die **Weiterversorgung** auf Grundlage des Grundversorgungsvertrags, verbunden mit der Pflicht des Kunden, die laufenden Abschläge oder Vorauszahlungen zu leisten. Die Ratenzahlung muss so bemessen sein, dass der Kunde sie leisten kann; die Verordnung nennt als Regelrahmen einen Zeitraum von **sechs bis 18 Monaten**. Hält der Kunde die Vereinbarung nicht ein, entfällt der Schutz und die Unterbrechung darf nach erneuter Ankündigung erfolgen.",
        },
        {
          t: "example",
          title: "Abwendungsvereinbarung in Zahlen",
          lines: [
            { label: "Rückstand (fällige Abschläge + Nachzahlung)", value: "540,00 €" },
            { label: "Laufzeit", value: "12 Monate" },
            { label: "Rate zinsfrei", value: "45,00 €/Monat" },
            { label: "laufender Abschlag", value: "115,00 €/Monat" },
          ],
          result: { label: "Monatliche Belastung während der Laufzeit", value: "160,00 €" },
        },
        {
          t: "note",
          kind: "praxis",
          text: "Die Abwendungsvereinbarung gehört **in** die Sperrandrohung – nicht als Beilage, sondern mit konkreten Zahlen: Rückstand, Ratenhöhe, Laufzeit, Rücksendeweg. Ein Anschreiben, das nur auf die Möglichkeit hinweist, erfüllt den Zweck nicht. Wer den Prozess automatisiert, generiert das Angebot aus dem Vertragskonto und legt bei Annahme direkt den Ratenplan an.",
        },
        { t: "h", level: 2, text: "Vorauszahlung, Sicherheitsleistung, Vorkasse" },
        {
          t: "dl",
          items: [
            { term: "Vorauszahlung (§ 14 StromGVV)", def: "Der Grundversorger darf eine **Vorauszahlung** für den Abrechnungszeitraum verlangen, wenn nach den Umständen des Einzelfalls Grund zu der Annahme besteht, dass der Kunde seinen Zahlungspflichten nicht oder nicht rechtzeitig nachkommt – typischerweise nach mehrfacher Mahnung oder Sperre. Sie bemisst sich nach dem Verbrauch des vorhergehenden Abrechnungszeitraums oder dem durchschnittlichen Verbrauch vergleichbarer Kunden. Praktisch ist sie ein Abschlag, der **vor** statt nach dem Verbrauchsmonat fällig ist." },
            { term: "Sicherheitsleistung (§ 15 StromGVV)", def: "Statt der Vorauszahlung darf der Grundversorger eine **Sicherheit** verlangen – Kaution oder Bürgschaft. Barsicherheiten sind zum Basiszinssatz zu verzinsen; der Versorger darf sich aus ihr bedienen, wenn der Kunde trotz Mahnung nicht zahlt, und muss sie zurückgeben, sobald die Voraussetzungen entfallen sind. Sie ist kein Umsatz, sondern eine **Verbindlichkeit** in der Bilanz." },
            { term: "Vorkassezähler / Prepaid (§ 14 Abs. 3 StromGVV)", def: "Statt Vorauszahlung kann der Grundversorger einen **Bargeld- oder Chipkartenzähler** oder ein vergleichbares Vorkassesystem einrichten – heute oft als Prepaid-Funktion eines [[intelligentes-messsystem|intelligenten Messsystems]]. Der Kunde lädt Guthaben, der Zähler liefert, bis es aufgebraucht ist. Die Regelung ist als Alternative zur Sperre gedacht: Der Kunde behält die Kontrolle, der Versorger das Ausfallrisiko nur bis zur Höhe des Notguthabens." },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Alle drei Instrumente stehen in den Grundversorgungsverordnungen und gelten damit unmittelbar nur für die [[grundversorgung|Grundversorgung]]. In Sonderverträgen können sie vereinbart werden – die AGB großer Lieferanten lehnen sich fast immer an die GVV-Formulierungen an, und § 41b EnWG setzt Vorauszahlungen dieselben Grenzen wie Abschlägen: Sie müssen den tatsächlichen oder voraussichtlichen Verbrauch angemessen widerspiegeln.",
        },
        { t: "h", level: 2, text: "Was das Abrechnungssystem können muss" },
        {
          t: "ul",
          items: [
            "**Ratenplan als eigenes Objekt** im [[vertragskonto|Vertragskonto]]: Bezug auf die ursprünglichen Forderungen, Ratenhöhe, Fälligkeiten, Status je Rate, Verfallklausel. Die Originalforderung bleibt bestehen; der Ratenplan ersetzt nur ihre Fälligkeit.",
            "**Fälligkeitslogik**: Die ursprüngliche Forderung darf nicht mehr als überfällig gelten, solange der Plan eingehalten wird. Wird eine Rate versäumt, wird – je nach Vereinbarung – der Restbetrag sofort fällig oder erst nach einer Nachfrist.",
            "**Mahnsperre**: Solange Ratenplan oder Abwendungsvereinbarung laufen, dürfen die betroffenen Forderungen nicht in den Mahnlauf und nicht in die Sperrschwelle einfließen. Laufende Abschläge werden dagegen weiter normal gemahnt.",
            "**Zwei Zahlungsströme**: Rate und Abschlag parallel, mit eindeutiger Zuordnung eingehender Zahlungen – bei SEPA idealerweise als zwei Positionen oder ein Einzug mit definierter Verteilungsreihenfolge.",
            "**Sicherheiten getrennt buchen**: Kaution und Prepaid-Guthaben sind Verbindlichkeiten gegenüber dem Kunden, keine Zahlungen auf Forderungen – mit eigener Verzinsung und Rückgabelogik.",
            "**Historie**: Wie oft und wann ein Kunde eine Vereinbarung erhalten und eingehalten hat, ist selbst eine Information – für die nächste [[bonitaetspruefung|Bonitätsprüfung]] und für die Frage, ob eine Vorauszahlung verlangt werden darf.",
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Der häufigste Fehler in der Praxis: Der Ratenplan wird angelegt, aber die Originalforderung bleibt im Mahnlauf – und der Kunde bekommt zwei Wochen nach Abschluss der Abwendungsvereinbarung eine Sperrandrohung für genau die Beträge, die er gerade in Raten zahlt. Das ist nicht nur peinlich, sondern in der Grundversorgung rechtswidrig.",
        },
      ],
    },
    related: ["zahlung-und-mahnwesen", "nachzahlung-guthaben", "abschlagszahlung", "vertragskonto", "grundversorgung", "stromgvv-gasgvv", "bonitaetspruefung"],
    sources: [
      {
        label: "§ 19 StromGVV – Unterbrechung der Versorgung, Abwendungsvereinbarung",
        url: "https://www.gesetze-im-internet.de/stromgvv/__19.html",
      },
      {
        label: "§ 14 StromGVV – Vorauszahlungen",
        url: "https://www.gesetze-im-internet.de/stromgvv/__14.html",
      },
      {
        label: "§ 15 StromGVV – Sicherheitsleistung",
        url: "https://www.gesetze-im-internet.de/stromgvv/__15.html",
      },
      {
        label: "§ 17 StromGVV – Zahlung, Verzug",
        url: "https://www.gesetze-im-internet.de/stromgvv/__17.html",
      },
      {
        label: "§ 41b EnWG – Abschlagszahlungen und Vorauszahlungen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__41b.html",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
    ],
  },
];
