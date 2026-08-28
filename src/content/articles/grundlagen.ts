import type { Article } from "../types";

const U = "2026-08-01";

export const grundlagenArticles: Article[] = [
  {
    slug: "energiemarkt-ueberblick",
    category: "grundlagen",
    featured: true,
    level: "basis",
    updated: U,
    aka: ["Energiewirtschaft", "Marktmodell", "Liberalisierung", "Wertschöpfungskette"],
    title: {
      de: "Wie der deutsche Energiemarkt funktioniert",
      en: "How the German energy market works",
    },
    summary: {
      de: "Seit der Liberalisierung sind Netz, Messung und Lieferung getrennte Geschäfte – wer Software für Versorger baut, muss vor allem diese Trennung verstehen.",
      en: "Since liberalisation, grid, metering and supply are separate businesses – understanding that split is the key to building software for utilities.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Bis 1998 war alles einfach: Das örtliche Stadtwerk erzeugte den Strom, betrieb das Netz, las den Zähler ab und schickte die Rechnung. Heute sind das vier verschiedene Rollen – oft in vier verschiedenen Unternehmen, manchmal aber auch in vier Abteilungen desselben Stadtwerks, die sich aus Rechtsgründen wie Fremde behandeln müssen.",
        },
        {
          t: "p",
          text: "Diese Trennung ist der Grund, warum Energieprozesse so viel Datenaustausch brauchen. Ein Lieferant, der einen Kunden beliefern will, besitzt weder Leitung noch Zähler. Er muss beim Netzbetreiber anmelden, vom Messstellenbetreiber Messwerte bekommen und seine Energiemenge in einem Bilanzkreis führen. Jeder dieser Schritte ist ein standardisierter Nachrichtenaustausch.",
        },
        { t: "h", level: 2, text: "Der physische Weg der Energie" },
        { t: "figure", id: "wertschoepfungskette" },
        {
          t: "p",
          text: "Physisch ist der Weg simpel: Erzeugung, Transport über das Übertragungsnetz, Feinverteilung im Verteilnetz, Messung an der Übergabestelle, Verbrauch. Die Energie eines bestimmten Lieferanten lässt sich dabei nicht verfolgen – Strom ist ein Gemeinschaftsgut im Netz. Wer welche Menge geliefert hat, ist eine rein rechnerische Frage.",
        },
        {
          t: "note",
          kind: "tip",
          text: "Merksatz: **Physik und Kaufmännisches sind entkoppelt.** Der Lieferantenwechsel ändert keinen einzigen Elektron-Pfad – er ändert nur, in welchem [[bilanzkreis|Bilanzkreis]] die Entnahmestelle geführt wird.",
        },
        { t: "h", level: 2, text: "Die Marktrollen" },
        { t: "figure", id: "marktrollen" },
        {
          t: "p",
          text: "Vertiefung: [[marktrollen|Marktrollen und ihre Codenummern]]. Wichtig ist vor allem das Verhältnis zwischen Lieferant, [[netzbetreiber|Netzbetreiber]] und [[messstellenbetrieb|Messstellenbetreiber]]. Der Kunde hat in der Regel nur mit dem Lieferanten einen Vertrag – die Leistungen der anderen beiden werden über den Lieferanten mit abgerechnet („All-inclusive-Modell“).",
        },
        { t: "h", level: 2, text: "Drei Verträge, eine Rechnung" },
        {
          t: "dl",
          items: [
            {
              term: "Energieliefervertrag",
              def: "Zwischen Kunde und Lieferant. Regelt Preis, Laufzeit, Kündigungsfrist und [[abschlagszahlung|Abschläge]].",
            },
            {
              term: "Netznutzungsvertrag",
              def: "Zwischen Lieferant und Netzbetreiber. Der Kunde zahlt die [[netzentgelte|Netzentgelte]], sieht den Vertrag aber nie.",
            },
            {
              term: "Messstellenvertrag",
              def: "Zwischen Anschlussnutzer und [[messstellenbetrieb|Messstellenbetreiber]] – standardmäßig der grundzuständige MSB, der Kunde kann aber wechseln.",
            },
          ],
        },
        { t: "h", level: 2, text: "Vier Sparten, vier Eigenheiten" },
        {
          t: "table",
          head: ["Sparte", "Einheit am Zähler", "Einheit auf der Rechnung", "Markt"],
          align: ["l", "l", "l", "l"],
          rows: [
            ["[[strom|Strom]]", "kWh", "kWh", "bundesweit liberalisiert"],
            ["[[erdgas|Erdgas]]", "m³", "kWh", "bundesweit liberalisiert"],
            ["[[wasser|Wasser]]", "m³", "m³", "örtliches Monopol"],
            ["[[fernwaerme|Fernwärme]]", "MWh oder GJ", "kWh", "leitungsgebundenes Monopol"],
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Der häufigste Denkfehler bei Software für Versorger: anzunehmen, alle Sparten funktionierten wie Strom. Gas rechnet über [[brennwert|Brennwert]] und [[zustandszahl|Zustandszahl]] um, Wasser kennt keinen Lieferantenwechsel, Fernwärme keinen bundesweiten Markt.",
        },
        { t: "h", level: 2, text: "Wo Software in diesem Bild sitzt" },
        {
          t: "note",
          kind: "praxis",
          text: "Die meisten Systeme im Energievertrieb bedienen die **kundenzugewandte** Seite: Angebot, Vertragsabschluss, Onboarding, Prozesse rund um [[endkundenportal|Portal]], [[umzug|Umzug]] und Anliegen. Die Abrechnung selbst liegt in aller Regel im ERP oder Abrechnungssystem des Versorgers – die Schnittstelle dorthin ist der Punkt, an dem die hier beschriebenen Begriffe konkret werden.",
        },
      ],
    },
    related: ["marktrollen", "netzbetreiber", "bilanzkreis", "tarif"],
    sources: [
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
      {
        label: "Energiewirtschaftsgesetz (EnWG)",
        url: "https://www.gesetze-im-internet.de/enwg_2005/",
      },
    ],
  },

  {
    slug: "marktrollen",
    category: "grundlagen",
    updated: U,
    aka: ["LF", "VNB", "ÜNB", "MSB", "BKV", "Marktpartner", "Marktpartner-ID", "BDEW-Codenummer"],
    title: { de: "Marktrollen", en: "Market roles" },
    summary: {
      de: "Lieferant, Netzbetreiber, Messstellenbetreiber, Bilanzkreisverantwortlicher: Jede Rolle hat eine eigene Codenummer und eigene Rechte an den Daten einer Marktlokation.",
      en: "Supplier, grid operator, metering operator, balancing group manager: each role has its own code number and its own rights to a market location's data.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Im Datenaustausch zwischen Marktpartnern spricht niemand von Firmennamen. Es zählen Rolle und Codenummer – ein Unternehmen kann mehrere Rollen gleichzeitig ausfüllen und tritt dann mit mehreren Nummern auf.",
        },
        { t: "figure", id: "marktrollen" },
        { t: "h", level: 2, text: "Codenummern" },
        {
          t: "p",
          text: "Jeder Marktpartner braucht eine eindeutige Identifikationsnummer. Im Strommarkt vergibt der BDEW die **BDEW-Codenummer** (13 Stellen, beginnend mit 98…), im Gasmarkt der DVGW die **DVGW-Codenummer**. Europaweit setzt sich zusätzlich die **EIC** (Energy Identification Code) durch. Auf der Rechnung taucht davon meist nur die [[netzbetreiber|Netzbetreibernummer]] auf.",
        },
        {
          t: "table",
          head: ["Rolle", "Kürzel", "Wichtigste Aufgabe", "Wechselbar durch den Kunden?"],
          rows: [
            ["Lieferant", "LF", "Energie verkaufen und abrechnen", "ja, jederzeit"],
            ["Verteilnetzbetreiber", "VNB / NB", "Netz betreiben, Netzentgelt erheben", "nein – örtliches Monopol"],
            ["Übertragungsnetzbetreiber", "ÜNB", "Höchstspannung, Systemstabilität", "nein"],
            ["Messstellenbetreiber", "MSB", "Zähler betreiben und auslesen", "ja, freier Wettbewerb"],
            ["Bilanzkreisverantwortlicher", "BKV", "Bilanzkreis führen", "indirekt über den Lieferanten"],
            ["Grundversorger", "GV", "Belieferung ohne Vertrag sicherstellen", "nein – gesetzlich bestimmt"],
          ],
        },
        { t: "h", level: 2, text: "Grundzuständig oder wettbewerblich" },
        {
          t: "p",
          text: "Beim Messstellenbetrieb unterscheidet das [[msbg|MsbG]] zwischen dem **grundzuständigen** Messstellenbetreiber – in der Regel der Netzbetreiber – und **wettbewerblichen** Messstellenbetreibern. Wer nichts tut, bekommt automatisch den grundzuständigen. Wer wechselt, muss das dem Netzbetreiber melden, damit die Messwerte weiter beim richtigen Empfänger landen.",
        },
        {
          t: "note",
          kind: "info",
          text: "Der Grundversorger ist kein Unternehmenstyp, sondern ein Status: Grundversorger ist, wer im Netzgebiet die meisten Haushaltskunden beliefert. Alle drei Jahre wird neu ermittelt.",
        },
      ],
    },
    related: ["energiemarkt-ueberblick", "netzbetreiber", "messstellenbetrieb", "grundversorgung"],
  },

  {
    slug: "netzbetreiber",
    category: "grundlagen",
    updated: U,
    aka: ["VNB", "ÜNB", "Verteilnetzbetreiber", "Netzbetreibernummer", "Netzebenen", "Umspannung"],
    title: { de: "Netzbetreiber und Netzebenen", en: "Grid operators and grid levels" },
    summary: {
      de: "Vier Übertragungsnetzbetreiber und rund 850 Verteilnetzbetreiber transportieren die Energie – die Netzbetreibernummer auf der Rechnung sagt, in wessen Netz eine Verbrauchsstelle hängt.",
      en: "Four transmission operators and around 850 distribution operators move the energy – the grid operator number on the bill says whose grid a site is connected to.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Das Netz ist ein natürliches Monopol: Niemand baut ein zweites Kabel in dieselbe Straße. Deshalb ist der Netzbetreiber nicht wechselbar, dafür aber streng reguliert – die Bundesnetzagentur genehmigt seine Erlöse und damit die [[netzentgelte|Netzentgelte]].",
        },
        { t: "h", level: 2, text: "Die Netzebenen" },
        { t: "figure", id: "netzebenen" },
        { t: "h", level: 2, text: "Die Netzbetreibernummer" },
        {
          t: "p",
          text: "Auf jeder Energierechnung steht die **Identifikationsnummer des Netzbetreibers**. Sie identifiziert den örtlichen Verteilnetzbetreiber, an dessen Netz die Verbrauchsstelle angeschlossen ist – und ist im Prozess wichtiger, als sie aussieht: Ohne sie kann ein neuer Lieferant die Anmeldung nicht an die richtige Stelle schicken.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "In Onboarding-Strecken lohnt es sich, die Netzbetreiberzuordnung automatisch aus Postleitzahl und Adresse zu ermitteln, statt sie vom Kunden abzufragen. Kunden kennen ihren Netzbetreiber praktisch nie – ihre [[marktlokation|MaLo-ID]] oder Zählernummer dagegen finden sie auf der letzten Rechnung.",
        },
        { t: "h", level: 2, text: "Was der Netzbetreiber tut" },
        {
          t: "ul",
          items: [
            "Netzanschluss herstellen, betreiben und bei Bedarf sperren",
            "Netzentgelte kalkulieren und gegenüber Lieferanten abrechnen",
            "Anmeldungen und Abmeldungen von Lieferanten bearbeiten",
            "in der Regel als grundzuständiger [[messstellenbetrieb|Messstellenbetreiber]] auftreten",
            "Einspeiser anschließen und Einspeisemengen erfassen",
            "steuerbare Verbrauchseinrichtungen nach [[paragraf-14a-enwg|§ 14a EnWG]] integrieren",
          ],
        },
      ],
    },
    related: ["netzentgelte", "marktrollen", "messstellenbetrieb", "paragraf-14a-enwg"],
  },

  {
    slug: "netzentgelte",
    category: "grundlagen",
    updated: U,
    aka: ["Netznutzungsentgelt", "NNE", "Netzkosten"],
    title: { de: "Netzentgelte", en: "Grid fees" },
    summary: {
      de: "Entgelte für Transport und Verteilung der Energie einschließlich der damit erhobenen staatlichen Abgaben – rund ein Viertel des Strompreises.",
      en: "Fees for transporting and distributing energy including the state charges levied with them – about a quarter of the electricity price.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Das Netzentgelt bezahlt Bau, Betrieb und Instandhaltung der Leitungen – und zunehmend den Netzausbau für die Energiewende. Es fließt an den [[netzbetreiber|Netzbetreiber]], wird aber vom Lieferanten eingesammelt und ist im Endpreis unsichtbar enthalten.",
        },
        { t: "h", level: 2, text: "Wie es sich zusammensetzt" },
        {
          t: "ul",
          items: [
            "**Arbeitspreis** in ct/kWh – bei Haushalten der größte Teil",
            "**Grundpreis** in €/Jahr – deckt anschlussbezogene Fixkosten",
            "**Leistungspreis** in €/kW – nur bei Kunden mit Leistungsmessung, siehe [[leistungspreis|Leistungspreis]]",
            "Entgelt für **Messstellenbetrieb** und **Abrechnung**, sofern nicht separat ausgewiesen",
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Netzentgelte sind regional sehr unterschiedlich. Netzgebiete mit viel Windkraft und wenig Verbrauch tragen hohe Ausbaukosten auf wenige Kilowattstunden – dort ist Strom bis heute spürbar teurer als in dicht besiedelten Regionen.",
        },
        { t: "h", level: 2, text: "Umlagen auf das Netzentgelt" },
        {
          t: "p",
          text: "Mit den Netzentgelten werden mehrere gesetzliche Umlagen eingezogen. 2026 sind das die [[kwk-umlage|KWKG-Umlage]], die [[offshore-netzumlage|Offshore-Netzumlage]] und der [[besondere-netznutzung|Aufschlag für besondere Netznutzung]] – zusammen 2,946 ct/kWh netto.",
        },
        {
          t: "table",
          head: ["Umlage 2026", "ct/kWh netto"],
          align: ["l", "r"],
          rows: [
            ["[[kwk-umlage|KWKG-Umlage]]", "0,446"],
            ["[[offshore-netzumlage|Offshore-Netzumlage]]", "0,941"],
            ["[[besondere-netznutzung|Aufschlag besondere Netznutzung]]", "1,559"],
            ["**Summe**", "**2,946**"],
          ],
          caption:
            "Von den vier Übertragungsnetzbetreibern im Oktober 2025 für das Jahr 2026 veröffentlicht.",
        },
        {
          t: "p",
          text: "2026 übernimmt der Bund zusätzlich einen Teil der Übertragungsnetzentgelte – ein Zuschuss mit einem Entlastungseffekt von rund 6,5 Milliarden Euro im Jahr, der die Netzentgelte gegenüber dem unbezuschussten Niveau senkt.",
        },
        { t: "h", level: 2, text: "Wer weniger zahlt" },
        {
          t: "ul",
          items: [
            "Kunden auf höheren [[netzbetreiber|Netzebenen]] – sie nutzen weniger Netz",
            "Betriebe mit atypischer oder stromintensiver Netznutzung nach § 19 StromNEV – deren Rabatt finanziert der [[besondere-netznutzung|Aufschlag für besondere Netznutzung]]",
            "steuerbare Verbrauchseinrichtungen nach [[paragraf-14a-enwg|§ 14a EnWG]]",
          ],
        },
      ],
    },
    related: ["strompreis-zusammensetzung", "netzbetreiber", "kwk-umlage", "paragraf-14a-enwg"],
    sources: [
      {
        label: "netztransparenz.de – Umlagen der Übertragungsnetzbetreiber",
        url: "https://www.netztransparenz.de/",
      },
    ],
  },

  {
    slug: "bilanzkreis",
    category: "grundlagen",
    updated: U,
    aka: ["BKV", "Bilanzierung", "Fahrplan", "Ausgleichsenergie", "Bilanzkreisvertrag"],
    title: { de: "Bilanzkreis und Bilanzierung", en: "Balancing groups" },
    summary: {
      de: "Ein virtuelles Konto, auf dem Einspeisung und Entnahme einer Lieferantengruppe viertelstündlich ausgeglichen sein müssen – die kaufmännische Grundlage dafür, dass Strom überhaupt gehandelt werden kann.",
      en: "A virtual account where a supplier's injections and withdrawals must balance every quarter hour – the commercial basis that makes energy tradable at all.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Da sich einzelne Kilowattstunden im Netz nicht verfolgen lassen, arbeitet der Markt mit Konten. Jeder Lieferant führt – selbst oder über einen Dienstleister – mindestens einen Bilanzkreis. Alles, was seine Kunden entnehmen, wird dort als Soll gebucht, alles, was er beschafft, als Haben.",
        },
        { t: "h", level: 2, text: "Die Viertelstunde als Taktgeber" },
        {
          t: "p",
          text: "Bilanziert wird je Viertelstunde. Für jede dieser 96 Perioden pro Tag muss der Bilanzkreis rechnerisch ausgeglichen sein. Weicht er ab, liefert der Übertragungsnetzbetreiber **Ausgleichsenergie** – zu einem Preis, der bewusst unattraktiv ist, damit sich sauberes Prognostizieren lohnt.",
        },
        { t: "h", level: 2, text: "Woher die Mengen kommen" },
        {
          t: "p",
          text: "Bei Kunden mit registrierender Leistungsmessung liefert der Lastgang die echten Werte. Bei allen anderen – also praktisch allen Haushalten – rechnet der Markt mit einem [[lastprofil|Standardlastprofil]]. Die Differenz zwischen Profil und Wirklichkeit gleicht der Netzbetreiber über die **Differenzbilanzierung** aus.",
        },
        { t: "figure", id: "lastprofil" },
        {
          t: "note",
          kind: "tip",
          text: "Warum das für Produktentscheidungen zählt: Ein [[dynamischer-tarif|dynamischer Tarif]] setzt voraus, dass der tatsächliche Viertelstundenverbrauch bekannt ist. Ohne [[intelligentes-messsystem|intelligentes Messsystem]] gibt es keinen Lastgang – und damit keine belastbare Grundlage für stündliche Preise.",
        },
      ],
    },
    related: ["lastprofil", "marktkommunikation", "dynamischer-tarif", "energiemarkt-ueberblick"],
  },

  {
    slug: "marktkommunikation",
    category: "grundlagen",
    updated: U,
    aka: ["MaKo", "EDIFACT", "UTILMD", "MSCONS", "INVOIC", "GPKE", "GeLi Gas", "AS4"],
    title: { de: "Marktkommunikation (MaKo)", en: "Market communication" },
    summary: {
      de: "Der standardisierte Nachrichtenaustausch zwischen Marktpartnern – Anmeldungen, Messwerte, Rechnungen – nach den Festlegungen der Bundesnetzagentur.",
      en: "The standardised message exchange between market partners – registrations, meter readings, invoices – as specified by the regulator.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Weil kein Marktteilnehmer alle Daten besitzt, tauschen alle ständig Nachrichten aus. Format, Inhalt und Fristen sind bis ins Detail festgelegt – von der Bundesnetzagentur in den Festlegungen **GPKE** (Strom) und **GeLi Gas** (Gas).",
        },
        { t: "h", level: 2, text: "Die wichtigsten Nachrichtentypen" },
        {
          t: "table",
          head: ["Format", "Wofür"],
          rows: [
            ["UTILMD", "Stammdaten: An- und Abmeldung, Lieferantenwechsel, Stammdatenänderung"],
            ["MSCONS", "Messwerte: Zählerstände und Lastgänge"],
            ["INVOIC / REMADV", "Rechnung und Zahlungsavis zwischen Marktpartnern"],
            ["APERAK / CONTRL", "Fehler- und Empfangsbestätigung"],
            ["ORDERS / ORDRSP", "Bestellung und Antwort, etwa im Messstellenbetrieb"],
          ],
        },
        {
          t: "p",
          text: "Technisch war das jahrzehntelang EDIFACT per E-Mail mit signierten Anhängen. Der Markt wandert Schritt für Schritt auf **AS4** und JSON-basierte Formate – die fachlichen Prozesse dahinter bleiben aber dieselben.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Fristen sind hier keine Empfehlung. Wer eine Anmeldung zu spät schickt oder eine Rückmeldung nicht verarbeitet, produziert eine [[ersatzversorgung|Ersatzversorgung]] oder eine fehlerhafte Abrechnung – mit realen Kosten für den Kunden.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Vertriebs- und Portalsysteme sprechen **nicht** direkt EDIFACT. Ihr Übergabepunkt ist das Abrechnungs- oder ERP-System des Versorgers, dem sie saubere, geprüfte Vertrags- und Kundendaten liefern. Genau deshalb lohnt sich Validierung früh im Prozess: Ein Tippfehler in der [[marktlokation|MaLo-ID]] fällt sonst erst zwei Systeme später auf.",
        },
      ],
    },
    related: ["lieferantenwechsel", "bilanzkreis", "marktlokation", "marktrollen"],
  },

  {
    slug: "unbundling",
    category: "grundlagen",
    updated: U,
    aka: ["Entflechtung", "informatorische Entflechtung", "Gleichbehandlung"],
    title: { de: "Entflechtung (Unbundling)", en: "Unbundling" },
    summary: {
      de: "Die gesetzliche Pflicht, Netzbetrieb und Energievertrieb voneinander zu trennen – organisatorisch, rechnerisch, informatorisch und beim Auftritt nach außen.",
      en: "The legal duty to separate grid operation from energy sales – organisationally, in accounting, in information handling and in external branding.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Netzbetreiber weiß, wer wann wie viel verbraucht. Dürfte der eigene Vertrieb diese Daten nutzen, hätte er einen unschlagbaren Vorteil gegenüber jedem Wettbewerber. Deshalb verlangt das [[enwg|EnWG]] Entflechtung.",
        },
        {
          t: "dl",
          items: [
            { term: "Rechtliche Entflechtung", def: "Ab 100.000 angeschlossenen Kunden muss der Netzbetrieb eine eigene Gesellschaft sein." },
            { term: "Operationelle Entflechtung", def: "Eigene Leitung, eigene Entscheidungswege, kein Weisungsrecht des Vertriebs." },
            { term: "Informatorische Entflechtung", def: "Netzdaten dürfen nicht an den eigenen Vertrieb fließen, wenn sie Wettbewerbern nicht ebenso zugänglich sind." },
            { term: "Buchhalterische Entflechtung", def: "Getrennte Konten je Tätigkeit, damit keine Quersubvention entsteht." },
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Praktische Folge für Systeme: Ein gemeinsames CRM für Netz und Vertrieb ist heikel. Zugriffsrechte müssen die Entflechtung technisch abbilden – „wir sind doch dieselbe Firma“ ist keine zulässige Begründung.",
        },
      ],
    },
    related: ["energiemarkt-ueberblick", "marktrollen", "enwg"],
  },

  {
    slug: "energie-einheiten",
    category: "grundlagen",
    level: "basis",
    updated: U,
    aka: ["kWh", "kW", "MWh", "Kubikmeter", "Joule", "Leistung", "Arbeit"],
    title: { de: "Einheiten: kW, kWh, m³ und Co.", en: "Units: kW, kWh, m³ and friends" },
    summary: {
      de: "Leistung ist ein Tempo, Arbeit ist eine Strecke: Der Unterschied zwischen Kilowatt und Kilowattstunde erklärt die halbe Energierechnung.",
      en: "Power is a speed, energy is a distance: the difference between kilowatt and kilowatt-hour explains half of any energy bill.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Fast jedes Missverständnis in Energieprodukten lässt sich auf eine Verwechslung von **Leistung** und **Arbeit** zurückführen. Leistung sagt, wie schnell Energie fließt. Arbeit sagt, wie viel insgesamt geflossen ist.",
        },
        {
          t: "table",
          head: ["Größe", "Einheit", "Analogie Auto", "Wo sie auftaucht"],
          rows: [
            ["Leistung", "kW", "Geschwindigkeit", "Anschlussleistung, [[leistungspreis|Leistungspreis]], Wallbox"],
            ["Arbeit / Energie", "kWh", "gefahrene Strecke", "[[verbrauch|Verbrauch]], [[arbeitspreis|Arbeitspreis]], Zählerstand"],
            ["Volumen", "m³", "Tankinhalt", "[[erdgas|Gaszähler]], [[wasser|Wasserzähler]]"],
            ["Blindarbeit", "kvarh", "Leerlauf im Getriebe", "[[blindarbeit|Blindarbeit]] bei Gewerbekunden"],
          ],
        },
        {
          t: "formula",
          expr: "Arbeit [kWh]  =  Leistung [kW]  ×  Zeit [h]",
          where: [
            { sym: "2 kW × 3 h", desc: "6 kWh – ein Heizlüfter, drei Stunden lang" },
            { sym: "11 kW × 1 h", desc: "11 kWh – eine Stunde an der Wallbox" },
          ],
        },
        { t: "figure", id: "kwh-vergleich" },
        { t: "h", level: 2, text: "Vorsätze" },
        {
          t: "ul",
          items: [
            "1 kWh = 1.000 Wh",
            "1 MWh = 1.000 kWh — die Einheit im Großhandel, Börsenpreise stehen in €/MWh",
            "1 GWh = 1.000 MWh — Ebene eines Stadtwerks",
            "1 TWh = 1.000 GWh — Ebene der nationalen Statistik",
          ],
        },
        {
          t: "note",
          kind: "tip",
          text: "Umrechnung im Kopf: **1 €/MWh = 0,1 ct/kWh.** Ein Börsenpreis von 95 €/MWh sind also 9,5 ct/kWh – der Rest bis zum Endpreis sind Netzentgelt, Umlagen, Steuern und Marge.",
        },
        { t: "h", level: 2, text: "Wärme rechnet manchmal anders" },
        {
          t: "p",
          text: "In der [[fernwaerme|Fernwärme]] begegnet einem noch das Joule: 1 GJ entspricht 277,78 kWh. Abgerechnet wird heute meist trotzdem in MWh oder kWh.",
        },
      ],
    },
    related: ["verbrauch", "arbeitspreis", "leistungspreis", "thermische-gasabrechnung"],
  },
];
