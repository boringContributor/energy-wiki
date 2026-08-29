import type { Article } from "../types";

const U = "2026-08-01";
const U2 = "2026-08-29";

export const grundlagenArticles: Article[] = [
  {
    slug: "energiemarkt-ueberblick",
    category: "grundlagen",
    featured: true,
    level: "basis",
    updated: U2,
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
              term: "Lieferantenrahmenvertrag",
              def: "Zwischen Lieferant und Netzbetreiber (§ 20 Abs. 1a EnWG) – regelt die Netznutzung pauschal für alle Kunden des Lieferanten in diesem Netzgebiet. Der Kunde zahlt die [[netzentgelte|Netzentgelte]], sieht den Vertrag aber nie.",
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
    related: ["marktrollen", "netzbetreiber", "erzeugungsanlagen", "tarif", "institutionen-regelwerk"],
    sources: [
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
      {
        label: "Energiewirtschaftsgesetz (EnWG)",
        url: "https://www.gesetze-im-internet.de/enwg_2005/",
      },
      {
        label: "§ 20 EnWG – Zugang zu den Energieversorgungsnetzen (Lieferantenrahmenvertrag, Abs. 1a)",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__20.html",
      },
    ],
  },

  {
    slug: "marktrollen",
    category: "grundlagen",
    updated: U2,
    aka: ["LF", "VNB", "ÜNB", "MSB", "BKV", "BIKO", "MGV", "Transportkunde", "Anschlussnutzer", "Marktpartner", "Marktpartner-ID", "MP-ID", "BDEW-Codenummer", "GLN"],
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
          text: "Jeder Marktpartner braucht eine eindeutige **Marktpartner-ID (MP-ID)**. Im Strommarkt vergibt der BDEW die **BDEW-Codenummer** (13 Stellen, beginnend mit 98 oder 99), im Gasmarkt der DVGW die ebenfalls 13-stellige **DVGW-Codenummer**. Alternativ wird eine **GS1-GLN** (Global Location Number) als MP-ID akzeptiert. Europaweit setzt sich zusätzlich die **EIC** (Energy Identification Code) durch, vor allem für Bilanzkreise und Netzbetreiber. Auf der Rechnung taucht davon meist nur die [[netzbetreiber|Netzbetreibernummer]] auf.",
        },
        {
          t: "table",
          head: ["Rolle", "Kürzel", "Wichtigste Aufgabe", "Wechselbar durch den Kunden?"],
          rows: [
            ["Lieferant", "LF", "Energie verkaufen und abrechnen", "ja, jederzeit"],
            ["Verteilnetzbetreiber", "VNB / NB", "Netz betreiben, Netzentgelt erheben", "nein – örtliches Monopol"],
            ["Übertragungsnetzbetreiber", "ÜNB", "Höchstspannung, Systemstabilität", "nein"],
            ["Grundzuständiger Messstellenbetreiber", "gMSB", "Zähler betreiben und auslesen, wenn niemand anderes bestellt ist – in der Regel der Netzbetreiber", "ja – durch Wechsel zu einem wMSB"],
            ["Wettbewerblicher Messstellenbetreiber", "wMSB", "Messstellenbetrieb auf Bestellung des Anschlussnutzers oder Lieferanten", "ja, freier Wettbewerb"],
            ["Bilanzkreisverantwortlicher", "BKV", "[[bilanzkreis|Bilanzkreis]] führen, Fahrpläne anmelden", "indirekt über den Lieferanten"],
            ["Bilanzkoordinator", "BIKO", "Bilanzkreisabrechnung Strom nach MaBiS – Rolle des ÜNB", "nein"],
            ["Marktgebietsverantwortlicher", "MGV", "Bilanzierung Gas im Marktgebiet – Trading Hub Europe (THE)", "nein"],
            ["Transportkunde (Gas)", "TK", "Kapazität buchen und Bilanzkreis im Gasnetz führen – meist Lieferant oder Händler", "indirekt über den Lieferanten"],
            ["Grundversorger", "GV", "Belieferung ohne Vertrag sicherstellen", "nein – gesetzlich bestimmt"],
            ["Anschlussnehmer / Anschlussnutzer", "AN / ANU", "Eigentümer des Netzanschlusses (AN) bzw. tatsächlicher Nutzer, etwa der Mieter (ANU) – Vertragspartner von Netzbetreiber und MSB", "– (Kundenseite, keine Codenummer)"],
          ],
          caption:
            "Ein Unternehmen kann mehrere Rollen tragen: Ein Stadtwerk ist oft VNB, gMSB, Grundversorger und Lieferant zugleich – im Datenaustausch mit getrennten Codenummern.",
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
    related: ["energiemarkt-ueberblick", "netzbetreiber", "messstellenbetrieb", "grundversorgung", "bilanzkreis", "codenummern", "institutionen-regelwerk"],
    sources: [
      {
        label: "BDEW – Codenummern-Datenbank (BDEW-Codenummern, Marktpartner-IDs)",
        url: "https://bdew-codes.de/",
      },
      {
        label: "BDEW – Marktkommunikation & EDI@Energy-Dokumente",
        url: "https://www.bdew.de/energie/marktkommunikation-edi-energy-dokumente-/",
      },
      {
        label: "DVGW – Codenummern Gasmarkt",
        url: "https://www.dvgw.de/",
      },
      {
        label: "Trading Hub Europe – Marktgebietsverantwortlicher Gas",
        url: "https://www.tradinghub.eu/",
      },
      {
        label: "Messstellenbetriebsgesetz (MsbG) – grundzuständiger und wettbewerblicher Messstellenbetrieb",
        url: "https://www.gesetze-im-internet.de/messbg/",
      },
    ],
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
    updated: U2,
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
          text: "Netzentgelte sind regional sehr unterschiedlich. Netzgebiete mit viel Windkraft und wenig Verbrauch trugen hohe Ausbaukosten lange auf wenige Kilowattstunden – dort war Strom spürbar teurer als in dicht besiedelten Regionen. Seit 2025 wird ein Teil dieser EE-bedingten Netzmehrkosten bundesweit gewälzt (siehe unten), was das Gefälle abmildert, aber nicht aufhebt.",
        },
        {
          t: "p",
          text: "Größenordnung für einen Haushalt: 2026 liegt das Netzentgelt inklusive Messstellenbetrieb im Bundesdurchschnitt bei rund 11 – 12 ct/kWh netto – mit großer regionaler Spreizung von unter 8 bis über 15 ct/kWh je nach Netzgebiet.",
        },
        { t: "h", level: 2, text: "Umlagen auf das Netzentgelt" },
        {
          t: "p",
          text: "Mit den Netzentgelten werden mehrere gesetzliche Umlagen eingezogen. 2026 sind das die [[kwk-umlage|KWKG-Umlage]], die [[offshore-netzumlage|Offshore-Netzumlage]] und der [[besondere-netznutzung|Aufschlag für besondere Netznutzung]] – zusammen 2,946 ct/kWh netto. Der Aufschlag für besondere Netznutzung trägt seit 2025 neben den § 19-StromNEV-Rabatten auch die bundesweite **Wälzung der EE-bedingten Netzmehrkosten** nach der Festlegung der Bundesnetzagentur – deshalb der Sprung von 0,643 ct/kWh (2024) auf über 1,5 ct/kWh.",
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
            "steuerbare Verbrauchseinrichtungen nach [[paragraf-14a-enwg|§ 14a EnWG]] – Wärmepumpe, Wallbox oder Speicher erhalten wahlweise eine pauschale Netzentgeltreduzierung (Modul 1), einen um 60 % reduzierten Arbeitspreis über einen separaten Zähler (Modul 2) oder ein zeitvariables Netzentgelt (Modul 3, seit April 2025 in Kombination mit Modul 1)",
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
      {
        label: "Bundesnetzagentur – Netzentgelte Strom",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Netzentgelte/start.html",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
      {
        label: "§ 20 EnWG – Zugang zu den Energieversorgungsnetzen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__20.html",
      },
    ],
  },

  {
    slug: "bilanzkreis",
    category: "grundlagen",
    updated: U2,
    aka: ["BKV", "BIKO", "MaBiS", "GaBi Gas", "Bilanzierung", "Fahrplan", "Ausgleichsenergie", "Bilanzkreisvertrag", "Bilanzkreisabrechnung", "Gastag"],
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
        {
          t: "note",
          kind: "info",
          text: "Dieser Artikel beschreibt die Bilanzierung im **Strommarkt** (MaBiS). Gas bilanziert nach eigenen Regeln – siehe unten.",
        },
        { t: "h", level: 2, text: "Die Viertelstunde als Taktgeber" },
        {
          t: "p",
          text: "Bilanziert wird je Viertelstunde. Für jede dieser 96 Perioden pro Tag muss der Bilanzkreis rechnerisch ausgeglichen sein. Weicht er ab, liefert der Übertragungsnetzbetreiber **Ausgleichsenergie** – zu einem Preis, der bewusst unattraktiv ist, damit sich sauberes Prognostizieren lohnt. Abgerechnet wird sie vom ÜNB in seiner Rolle als **Bilanzkoordinator (BIKO)**, mit dem jeder Bilanzkreisverantwortliche einen Bilanzkreisvertrag hat.",
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
          text: "Warum das für Produktentscheidungen zählt: Ein [[dynamischer-tarif|dynamischer Tarif]] setzt voraus, dass der tatsächliche Viertelstundenverbrauch bekannt ist. Ohne [[intelligentes-messsystem|intelligentes Messsystem]] gibt es keinen Lastgang – und damit keine belastbare Grundlage für viertelstündliche Preise. Seit dem 1. Oktober 2025 wird auch der Day-Ahead-Markt der EPEX in 15-Minuten-Intervallen gehandelt; Bilanzierung und Börsenpreis laufen damit im gleichen Takt.",
        },
        { t: "h", level: 2, text: "Der MaBiS-Zeitplan" },
        {
          t: "p",
          text: "Die Bilanzkreisabrechnung ist kein Echtzeitprozess. Die **Marktregeln für die Bilanzkreisabrechnung Strom (MaBiS)** legen fest, wann welche Daten fließen:",
        },
        {
          t: "steps",
          items: [
            { title: "Liefermonat", text: "Die Netzbetreiber aggregieren die Mengen je Bilanzkreis – Lastgänge aus der Messung, Standardlastprofile aus der Prognose – und melden sie an den BIKO." },
            { title: "Bilanzkreisabrechnung", text: "Rund zwei Monate nach dem Liefermonat rechnet der BIKO die Ausgleichsenergie je Bilanzkreis ab. Grundlage sind die bis dahin gemeldeten und untereinander abgestimmten Zeitreihen." },
            { title: "Korrekturbilanzkreisabrechnung", text: "Rund acht Monate nach dem Liefermonat folgt eine Korrekturabrechnung mit den inzwischen nachgelieferten und korrigierten Messwerten. Erst danach ist der Monat für den Bilanzkreis endgültig geschlossen." },
          ],
        },
        {
          t: "p",
          text: "Parallel dazu rechnet der Netzbetreiber mit dem Lieferanten die **Mehr-/Mindermengen** ab: die Differenz zwischen den bilanzierten Profilmengen und dem tatsächlich gemessenen Verbrauch seiner Kunden.",
        },
        { t: "h", level: 2, text: "Gas bilanziert anders" },
        {
          t: "p",
          text: "Im [[erdgas|Gasmarkt]] gilt nicht die Viertelstunde, sondern der **Gastag** von 06:00 bis 06:00 Uhr des Folgetags als Bilanzierungsperiode (**Tagesbilanzierung**). Das Netz selbst puffert innerhalb des Tages. Zuständig ist nicht ein ÜNB, sondern der **Marktgebietsverantwortliche (MGV)** – seit 2021 für ganz Deutschland die Trading Hub Europe (THE). Die Regeln heißen **GaBi Gas** statt MaBiS, der Bilanzkreisverantwortliche tritt gegenüber den Netzbetreibern als Transportkunde auf, und Haushalte werden über Standardlastprofile bilanziert, die vor allem von der Tagestemperatur abhängen.",
        },
      ],
    },
    related: ["lastprofil", "marktkommunikation", "dynamischer-tarif", "energiemarkt-ueberblick", "marktrollen", "regelzonen-uebertragungsnetz", "grosshandel-beschaffung"],
    sources: [
      {
        label: "Bundesnetzagentur – Marktregeln für die Bilanzkreisabrechnung Strom (MaBiS)",
        url: "https://www.bundesnetzagentur.de/DE/Beschlusskammern/BK06/BK6_83_Zug_Mess/835_mitteilungen_datenformate/Datenformate-node.html",
      },
      {
        label: "netztransparenz.de – Bilanzkreisabrechnung und Ausgleichsenergiepreise der ÜNB",
        url: "https://www.netztransparenz.de/",
      },
      {
        label: "Trading Hub Europe – Bilanzierung im Marktgebiet Gas (GaBi Gas)",
        url: "https://www.tradinghub.eu/",
      },
    ],
  },

  {
    slug: "marktkommunikation",
    category: "grundlagen",
    updated: U2,
    aka: ["MaKo", "EDIFACT", "UTILMD", "MSCONS", "INVOIC", "GPKE", "GeLi Gas", "AS4", "MaLo-Ident", "LFW24"],
    title: { de: "Marktkommunikation (MaKo)", en: "Market communication" },
    summary: {
      de: "Der standardisierte Nachrichtenaustausch zwischen Marktpartnern – Anmeldungen, Messwerte, Rechnungen – nach den Festlegungen der Bundesnetzagentur.",
      en: "The standardised message exchange between market partners – registrations, meter readings, invoices – as specified by the regulator.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Weil kein Marktteilnehmer alle Daten besitzt, tauschen alle ständig Nachrichten aus. Format, Inhalt und Fristen sind bis ins Detail festgelegt – von der Bundesnetzagentur in Festlegungen wie **GPKE** (Lieferantenwechsel Strom), **MaBiS** (Bilanzkreisabrechnung), **WiM** (Messwesen), **MPES** (Erzeugungsanlagen) und **GeLi Gas** (Gas). Diese Festlegungen werden zweimal im Jahr überarbeitet – siehe [[formatanpassung|Formatanpassung]].",
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
          text: "Technisch war das jahrzehntelang EDIFACT per E-Mail mit signierten Anhängen. Das ist Geschichte: Seit dem 1. Oktober 2024 ist der Transport über **AS4** im Strommarkt verpflichtend, seit dem 1. Oktober 2025 auch im Gasmarkt – E-Mail wird in den regulierten Prozessen nicht mehr verwendet. Die Nachrichten selbst bleiben EDIFACT. Daneben entstehen JSON-basierte REST-Schnittstellen: Die erste verpflichtende ist die **MaLo-Ident API** des BDEW, mit der ein Lieferant vor der Anmeldung die [[marktlokation|MaLo-ID]] eines Kunden beim Netzbetreiber ermittelt – Pflicht seit dem 24-Stunden-[[lieferantenwechsel|Lieferantenwechsel]].",
        },
        {
          t: "p",
          text: "Der 24-Stunden-Lieferantenwechsel (LFW24) ist dabei in erster Linie eine **Prozessfestlegung** der Bundesnetzagentur (Beschluss BK6-22-024), die mit begleitenden Format-Releases umgesetzt wird – nicht umgekehrt. Die fachlichen Prozesse bestimmen die Formate, siehe [[formatanpassung|Formatanpassung]].",
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
    related: [
      "formatanpassung",
      "lieferantenwechsel",
      "bilanzkreis",
      "marktlokation",
      "marktrollen",
      "lokationsmodell",
      "codenummern",
    ],
    sources: [
      {
        label: "Bundesnetzagentur – Datenformate zur Abwicklung der Marktkommunikation (BK6)",
        url: "https://www.bundesnetzagentur.de/DE/Beschlusskammern/BK06/BK6_83_Zug_Mess/835_mitteilungen_datenformate/Datenformate-node.html",
      },
      {
        label: "BDEW – Marktkommunikation & EDI@Energy-Dokumente (u. a. MaLo-Ident API, AS4)",
        url: "https://www.bdew.de/energie/marktkommunikation-edi-energy-dokumente-/",
      },
      {
        label: "BDEW MaKo (bdew-mako.de) – EDI@Energy Dokumente und Nachrichtenbeschreibungen",
        url: "https://www.bdew-mako.de/",
      },
      {
        label: "Energiewirtschaftsgesetz (EnWG)",
        url: "https://www.gesetze-im-internet.de/enwg_2005/",
      },
    ],
  },

  {
    slug: "formatanpassung",
    category: "grundlagen",
    updated: U2,
    aka: ["FoMa", "Formatwechsel", "Formatumstellung", "FUM", "EDI@Energy", "MaKo-Update", "Codeliste", "Stichtag", "BNetzA-Mitteilung"],
    title: {
      de: "Formatanpassung (FoMa)",
      en: "Format change",
    },
    summary: {
      de: "Zweimal im Jahr – zum 1. April und zum 1. Oktober – stellt der deutsche Energiemarkt seine Kommunikationsformate um. Ohne Übergangszeitraum: Wer nicht umgestellt hat, kann nicht mehr mit dem Markt kommunizieren.",
      en: "Twice a year – on 1 April and 1 October – the German energy market switches its communication formats. With no transition period: anyone who has not migrated can no longer talk to the market.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Die Formate der [[marktkommunikation|Marktkommunikation]] sind nicht auf Dauer gesetzt. Die Bundesnetzagentur legt sie verbindlich fest und tauscht sie **zweimal im Jahr** aus. Um Mitternacht des Stichtags verlieren die alten Versionen ihre Gültigkeit – es gibt keine Übergangsfrist und keine Kulanz.",
        },
        { t: "figure", id: "formatwechsel-zyklus" },
        { t: "h", level: 2, text: "Was umgestellt wird" },
        {
          t: "p",
          text: "Betroffen sind die energiewirtschaftlichen Kernprozesse – nicht nur die Nachrichtenformate selbst, sondern auch die Entscheidungsbäume, Codelisten und Fristen dahinter:",
        },
        {
          t: "table",
          head: ["Kürzel", "Prozess"],
          rows: [
            ["**GPKE**", "Geschäftsprozesse zur Kundenbelieferung mit Elektrizität – der [[lieferantenwechsel|Lieferantenwechsel]] Strom"],
            ["**MaBiS**", "Marktregeln für die Bilanzkreisabrechnung Strom – siehe [[bilanzkreis|Bilanzkreis]]"],
            ["**WiM**", "Wechselprozesse im Messwesen – Wechsel des [[messstellenbetrieb|Messstellenbetreibers]]"],
            ["**MPES**", "Marktprozesse für erzeugende Marktlokationen Strom – Einspeiser, siehe [[photovoltaik|PV-Anlagen]]"],
          ],
          caption:
            "Für Gas gelten die Schwesterprozesse GeLi Gas und GaBi Gas mit demselben Rhythmus.",
        },
        { t: "h", level: 2, text: "Der Zyklus" },
        {
          t: "steps",
          items: [
            { title: "Konsultation", text: "Die Projektgruppe EDI@Energy legt der Bundesnetzagentur überarbeitete Nachrichtenversionen im Entwurf vor. Rund acht Monate vor dem Stichtag können alle Marktteilnehmer Stellung nehmen." },
            { title: "Festlegung", text: "Etwa sechs Monate vor dem Stichtag veröffentlicht die Bundesnetzagentur die finalen Versionen in einer nummerierten **Mitteilung zu den Datenformaten**." },
            { title: "Umsetzung", text: "In diesen sechs Monaten muss der Softwarehersteller entwickeln und ausliefern und der Versorger einbauen, testen und schulen. Das ist das gesamte Fenster." },
            { title: "Stichtag", text: "Am 1. April beziehungsweise 1. Oktober sind die neuen Versionen für alle Marktteilnehmer verbindlich. Die alten gelten ab diesem Moment nicht mehr." },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Weit über 1.000 Marktpartner – allein über 850 Stromnetzbetreiber und rund 1.400 Lieferanten – durchlaufen diesen Zyklus zweimal jährlich. Der aktuelle Stand steht immer in der jeweils neuesten [Mitteilung der Bundesnetzagentur](https://www.bundesnetzagentur.de/DE/Beschlusskammern/BK06/BK6_83_Zug_Mess/835_mitteilungen_datenformate/Datenformate-node.html); die Dokumente selbst liegen auf der MaKo-Plattform des BDEW.",
        },
        { t: "h", level: 2, text: "Warum das kein Software-Update ist" },
        {
          t: "p",
          text: "Der häufigste Denkfehler: „Da kommt doch ein Patch vom Hersteller.“ Der Patch ist der einfache Teil. Die eigentliche Arbeit sind die **prozessualen** Änderungen drumherum – geänderte Entscheidungsbäume, neue Pflichtfelder, angepasste Klärfälle, veränderte Fristen – und der Testaufwand:",
        },
        {
          t: "ul",
          items: [
            "Regressions-, Last- und Sicherheitstests",
            "Cut-over-Tests und Schulung der Fachbereiche",
            "**Tests mit Marktpartnern** – Marktkommunikation ist bilateral, also muss über Unternehmensgrenzen hinweg abgestimmt werden",
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "EDIFACT, AS4 und die neueren JSON-APIs **koexistieren**. Die APIs lösen EDIFACT nicht ab. Betroffene Systeme müssen beide Welten parallel unterstützen und synchron halten – ein Formatwechsel trifft damit oft mehrere Systeme gleichzeitig.",
        },
        { t: "h", level: 2, text: "Wenn der Stichtag nicht hält: LFW24" },
        {
          t: "p",
          text: "Der 24-Stunden-[[lieferantenwechsel|Lieferantenwechsel]] war der größte Formatwechsel der letzten Jahre und zeigt, was passiert, wenn das Sechs-Monats-Fenster nicht reicht. Die Deutschsprachige SAP-Anwendergruppe (DSAG) erhob dazu öffentlich Zahlen: Der realistische Umsetzungsbedarf nach Auslieferung der Software lag bei rund **37 Wochen**, die Frist gab **26** her. In einer Umfrage unter 160 Energieversorgern gaben **88 %** an, die Umsetzung bis April 2025 nicht schaffen zu können.",
        },
        {
          t: "p",
          text: "Die Bundesnetzagentur verschob den Stichtag daraufhin vom 4. April auf den **6. Juni 2025**. Gefordert war eine Verschiebung auf den 1. Oktober 2025 – die wurde abgelehnt.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Wer Software für Versorger baut, sollte den Rhythmus kennen: **März/April und September/Oktober** sind bei vielen Häusern Freeze-Fenster. Systeme werden umgestellt, Testdaten verlieren nach dem Freeze ihre Gültigkeit und müssen neu aufgebaut werden, und die Fachleute, die man für Abstimmungen braucht, sind in dieser Zeit gebunden. Go-Lives und Testphasen lassen sich in diesen Wochen planen – aber nur als bewusste Entscheidung, nicht aus Versehen.",
        },
      ],
    },
    related: ["marktkommunikation", "lieferantenwechsel", "bilanzkreis", "messstellenbetrieb"],
    sources: [
      {
        label: "Bundesnetzagentur – Datenformate zur Abwicklung der Marktkommunikation",
        url: "https://www.bundesnetzagentur.de/DE/Beschlusskammern/BK06/BK6_83_Zug_Mess/835_mitteilungen_datenformate/Datenformate-node.html",
      },
      {
        label: "BDEW – Marktkommunikation & EDI@Energy-Dokumente",
        url: "https://www.bdew.de/energie/marktkommunikation-edi-energy-dokumente-/",
      },
      {
        label: "DSAG – Teilerfolg beim 24-h-Lieferantenwechsel (LFW24)",
        url: "https://impulsant.dsag.de/formate/pressemeldung/teilerfolg-beim-24-h-lieferantenwechsel-lfw24/",
      },
    ],
  },

  {
    slug: "unbundling",
    category: "grundlagen",
    updated: U2,
    aka: ["Entflechtung", "informatorische Entflechtung", "Markenentflechtung", "ITO", "Gleichbehandlung", "§ 7a EnWG"],
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
            { term: "Rechtliche Entflechtung (§ 7 EnWG)", def: "Ab 100.000 angeschlossenen Kunden muss der Netzbetrieb eine eigene Gesellschaft sein." },
            { term: "Operationelle Entflechtung (§ 7a EnWG)", def: "Eigene Leitung, eigene Entscheidungswege, kein Weisungsrecht des Vertriebs. Gilt wie die rechtliche Entflechtung erst ab 100.000 angeschlossenen Kunden (De-minimis-Regel, § 7a Abs. 7 EnWG)." },
            { term: "Markenentflechtung (§ 7a Abs. 6 EnWG)", def: "Der Netzbetreiber muss in Kommunikation und Markenauftritt verwechslungssicher vom Vertrieb getrennt sein – eigener Name, eigenes Logo, eigene Website." },
            { term: "Informatorische Entflechtung (§ 6a EnWG)", def: "Netzdaten dürfen nicht an den eigenen Vertrieb fließen, wenn sie Wettbewerbern nicht ebenso zugänglich sind. Gilt für alle Netzbetreiber, unabhängig von der Größe." },
            { term: "Buchhalterische Entflechtung (§ 6b EnWG)", def: "Getrennte Konten je Tätigkeit, damit keine Quersubvention entsteht. Gilt ebenfalls größenunabhängig." },
          ],
        },
        {
          t: "p",
          text: "Für die Übertragungsnetzbetreiber geht das EnWG noch weiter: Sie müssen **eigentumsrechtlich** entflochten sein oder als **Unabhängiger Transportnetzbetreiber (ITO)** beziehungsweise Unabhängiger Systembetreiber (ISO) organisiert werden (§§ 8 – 10e EnWG) – Netz und Erzeugung/Vertrieb dürfen dort nicht in derselben Hand liegen.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Praktische Folge für Systeme: Ein gemeinsames CRM für Netz und Vertrieb ist heikel. Zugriffsrechte müssen die Entflechtung technisch abbilden – „wir sind doch dieselbe Firma“ ist keine zulässige Begründung.",
        },
      ],
    },
    related: ["energiemarkt-ueberblick", "marktrollen", "enwg"],
    sources: [
      {
        label: "§ 7a EnWG – Operationelle Entflechtung",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__7a.html",
      },
      {
        label: "§ 7 EnWG – Rechtliche Entflechtung",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__7.html",
      },
      {
        label: "§ 6a EnWG – Verwendung von Informationen",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__6a.html",
      },
      {
        label: "§ 8 EnWG – Eigentumsrechtliche Entflechtung",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__8.html",
      },
      {
        label: "Bundesnetzagentur – Entflechtung",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Entflechtung/start.html",
      },
    ],
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

  {
    slug: "lokationsmodell",
    category: "grundlagen",
    updated: U2,
    aka: ["MaLo", "MeLo", "NeLo", "Netzlokation", "Technische Ressource", "TR", "Steuerbare Ressource", "SR", "Lokationsbündel", "Kaskadenmessung", "Objektmodell MaKo"],
    title: { de: "Lokationsmodell der Marktkommunikation", en: "The location model of market communication" },
    summary: {
      de: "Marktlokation, Messlokation, Netzlokation, Technische und Steuerbare Ressource: fünf Objekte, die zusammen beschreiben, wo Energie gehandelt, gemessen, ins Netz übergeben, erzeugt und gesteuert wird.",
      en: "Market location, metering location, grid location, technical and controllable resource: five objects that together describe where energy is traded, metered, handed over to the grid, generated and controlled.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Haus mit Photovoltaik, Batteriespeicher und Wärmepumpe ist für den Kunden ein Anschluss mit einer Rechnung. Für die [[marktkommunikation|Marktkommunikation]] sind es ein halbes Dutzend Objekte mit eigenen IDs, eigenen Zuständigen und eigenen Lebenszyklen. Das Lokationsmodell legt fest, welche das sind – und wer welche davon verwalten darf.",
        },
        {
          t: "p",
          text: "Der Grund für die Zerlegung ist immer derselbe: Jede Frage soll genau ein Objekt beantworten. „Wer beliefert hier?“ ist eine andere Frage als „Welches Gerät misst?“, und beide sind etwas anderes als „Was darf der Netzbetreiber hier abregeln?“. Solange alles an einem Zählpunkt hing, ließ sich ein Zählerwechsel nicht von einem Lieferantenwechsel trennen und eine PV-Anlage hinter dem Hauszähler nicht sauber bilanzieren.",
        },
        { t: "h", level: 2, text: "Die fünf Objekte" },
        {
          t: "table",
          head: ["Objekt", "Kürzel", "ID", "Beantwortet", "Vergibt"],
          rows: [
            ["[[marktlokation|Marktlokation]]", "MaLo", "11 Ziffern, numerisch mit Prüfziffer", "Wo wird Energie geliefert oder erzeugt? Hängt an Vertrag, Bilanzkreis, Abrechnung", "Netzbetreiber"],
            ["[[messlokation|Messlokation]]", "MeLo", "33 Zeichen, beginnend mit DE", "Wo wird gemessen? Hängt am Zählerplatz, nicht am Gerät", "Netzbetreiber; verwaltet vom Messstellenbetreiber"],
            ["Netzlokation", "NeLo", "11 Zeichen, alphanumerisch", "Wo wird die Energie physisch an das Netz übergeben – der Punkt, an dem netzentgeltrelevante Größen wie die Leistung anfallen", "Netzbetreiber"],
            ["Technische Ressource", "TR", "11 Zeichen, alphanumerisch", "Welches physische Gerät steht dahinter – PV-Anlage, Speicher, Wärmepumpe, Ladepunkt", "Netzbetreiber"],
            ["Steuerbare Ressource", "SR", "11 Zeichen, alphanumerisch", "Was kann der Netzbetreiber nach [[paragraf-14a-enwg|§ 14a EnWG]] steuern – und über welchen Kanal", "Netzbetreiber"],
          ],
          caption:
            "MaLo und MeLo existieren seit 2018. Netzlokation, Technische und Steuerbare Ressource kamen mit der MaKo 2022 hinzu und wurden mit den folgenden Format-Releases schrittweise in die Prozesse aufgenommen.",
        },
        {
          t: "note",
          kind: "info",
          text: "Die Netzlokation ist das am häufigsten missverstandene Objekt. Sie ist **kein** zweiter Zähler, sondern der Ort im Netz, an dem Netzentgelte bemessen werden. Bei einem einfachen Haushalt fallen MaLo, MeLo und NeLo praktisch zusammen; sie werden trotzdem als getrennte Objekte geführt, damit das Modell in komplexen Fällen nicht umgebaut werden muss.",
        },
        { t: "h", level: 2, text: "Wie die Objekte zusammenhängen" },
        {
          t: "dl",
          items: [
            { term: "MaLo ↔ MeLo: n:m", def: "Eine Marktlokation kann von mehreren Messlokationen gemessen werden (Kaskade, Summenzähler), und eine Messlokation kann mehrere Marktlokationen bedienen (Zweirichtungszähler mit Bezugs- und Einspeise-MaLo). Der Zusammenhang wird über Rechenvorschriften beschrieben: Welche Zähler werden addiert, welche subtrahiert." },
            { term: "MaLo ↔ TR: 1:n", def: "An einer erzeugenden Marktlokation können mehrere Technische Ressourcen hängen – etwa PV-Module und ein Speicher, die über denselben Einspeisepunkt laufen." },
            { term: "TR ↔ SR: 1:n", def: "Ein Gerät kann steuerbar sein oder nicht. Ist es steuerbar, beschreibt die Steuerbare Ressource das Wie: Steuerkanal, Steuerungsart, Vereinbarung nach § 14a." },
            { term: "NeLo ↔ MaLo: 1:n", def: "Hinter einem Netzverknüpfungspunkt können mehrere Marktlokationen liegen – die Wärmepumpe mit reduziertem Netzentgelt und der Haushalt am selben Hausanschluss." },
          ],
        },
        {
          t: "p",
          text: "Alle Objekte, die an einem Netzanschluss zusammengehören, bilden ein **Lokationsbündel**. Das Bündel ist keine eigene ID, sondern der Verbund, den der Netzbetreiber in den Stammdaten zusammenhält – und in dem er die Rechenschritte zwischen Mess- und Marktlokationen beschreibt.",
        },
        { t: "h", level: 2, text: "Ein Haus, viele Objekte" },
        {
          t: "example",
          title: "Einfamilienhaus mit PV, Speicher und Wärmepumpe (Kaskadenmessung)",
          lines: [
            { label: "Netzlokation", value: "1 NeLo – der Hausanschluss" },
            { label: "Marktlokationen", value: "3 MaLo – Haushaltsbezug, Wärmepumpenbezug, PV-Einspeisung" },
            { label: "Messlokationen", value: "2 MeLo – Zweirichtungszähler am Hausanschluss, Unterzähler Wärmepumpe" },
            { label: "Technische Ressourcen", value: "3 TR – PV-Anlage, Batteriespeicher, Wärmepumpe" },
            { label: "Steuerbare Ressourcen", value: "1 SR – die Wärmepumpe nach § 14a EnWG (der Speicher, sofern netzdienlich gesteuert, wäre eine zweite)" },
          ],
          result: { label: "Objekte im Lokationsbündel", value: "10 – für einen einzigen Kunden" },
        },
        {
          t: "p",
          text: "Der Wärmepumpenbezug wird als Differenz gemessen: Hauptzähler minus Unterzähler ergibt den Haushaltsverbrauch, der Unterzähler allein den Wärmepumpenverbrauch. Genau diese Rechenvorschrift ist Teil der Stammdaten – ohne sie kann kein Lieferant die Werte des Zweirichtungszählers seiner Marktlokation zuordnen.",
        },
        { t: "h", level: 2, text: "Warum das Modell existiert" },
        {
          t: "ul",
          items: [
            "**Zählerwechsel ohne Vertragswechsel**: Ein neuer Zähler ändert die Zählernummer, nicht die MeLo – und erst recht nicht die MaLo. Vertrag und Bilanzkreis bleiben unberührt.",
            "**Kaskaden und Unterzähler**: Ohne getrennte Mess- und Marktlokationen lässt sich eine Wärmepumpe hinter dem Hauszähler nicht mit eigenem Netzentgelt abrechnen.",
            "**Steuerung**: § 14a EnWG verlangt, dass der Netzbetreiber weiß, *was* er steuern darf, ohne den gesamten Anschluss zu dimmen – das leisten TR und SR.",
            "**Einspeisung und Bezug an einem Gerät**: Zwei Marktlokationen an einem Zweirichtungszähler können unterschiedliche Lieferanten und Bilanzkreise haben.",
          ],
        },
        { t: "h", level: 2, text: "Wo es in der MaKo auftaucht" },
        {
          t: "p",
          text: "Die Objekte werden als Stammdaten per UTILMD ausgetauscht. Der Netzbetreiber verantwortet MaLo, NeLo, TR und SR, der [[messstellenbetrieb|Messstellenbetreiber]] die Daten der Messlokation. Ein Lieferant sieht in der Anmeldebestätigung die Marktlokation samt zugeordneter Messlokationen und Rechenvorschrift; Messwerte kommen per MSCONS je Messlokation und werden erst dann zu Mengen je Marktlokation. Stammdatenänderungen – neuer Zähler, neue Rechenvorschrift, neue Steuerbare Ressource – laufen als eigene UTILMD-Prozesse, ausgelöst vom jeweils Verantwortlichen.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für das Datenmodell folgt daraus eine klare Regel: **Jedes Objekt ist eine eigene Entität mit Gültigkeitszeitraum.** Marktlokation, Messlokation, Netzlokation, Ressourcen – und die Beziehungen zwischen ihnen – mit Von-Bis-Datum. Wer die MeLo als Attribut des Vertrags speichert, kann keinen Zählerwechsel abbilden; wer die Zählernummer an die MaLo hängt, verliert beim Gerätetausch die Historie. Der Vertrag zeigt auf die MaLo, sonst nichts.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Die 11 Zeichen von NeLo-, TR- und SR-IDs sehen einer MaLo-ID ähnlich – sind aber alphanumerisch und nicht mit der MaLo-Prüfziffer prüfbar. Eine Eingabemaske, die alles als „Marktlokation“ akzeptiert, produziert Klärfälle beim Netzbetreiber.",
        },
      ],
    },
    related: ["marktlokation", "messlokation", "marktkommunikation", "paragraf-14a-enwg", "netzanschluss", "zaehlzeitdefinitionen"],
    sources: [
      {
        label: "BDEW – Anwendungshilfe Marktlokations-Identifikationsnummer",
        url: "https://www.bdew.de/service/anwendungshilfen/awh-neue-marktlokations-identifikationsnummer/",
      },
      {
        label: "BDEW – Marktkommunikation & EDI@Energy-Dokumente",
        url: "https://www.bdew.de/energie/marktkommunikation-edi-energy-dokumente-/",
      },
      {
        label: "BDEW MaKo (bdew-mako.de) – UTILMD-Nachrichtenbeschreibungen und Anwendungshandbücher",
        url: "https://www.bdew-mako.de/",
      },
      {
        label: "Bundesnetzagentur – Datenformate zur Abwicklung der Marktkommunikation (BK6)",
        url: "https://www.bundesnetzagentur.de/DE/Beschlusskammern/BK06/BK6_83_Zug_Mess/835_mitteilungen_datenformate/Datenformate-node.html",
      },
    ],
  },

  {
    slug: "grosshandel-beschaffung",
    category: "grundlagen",
    updated: U2,
    aka: ["EPEX Spot", "EEX", "Day-Ahead", "Intraday", "Terminmarkt", "Futures", "OTC", "Tranchenbeschaffung", "Portfoliomanagement", "Vollversorgung", "Herkunftsnachweis", "HKN", "TTF", "VTP"],
    title: { de: "Großhandel und Beschaffung", en: "Wholesale markets and procurement" },
    summary: {
      de: "Wo Lieferanten ihre Energie einkaufen – Börse, Terminmarkt, bilateral – und warum die Einkaufsstrategie darüber entscheidet, welche Tarife ein Versorger überhaupt anbieten kann.",
      en: "Where suppliers buy their energy – exchange, forward market, bilateral – and why the procurement strategy decides which tariffs a utility can offer at all.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Lieferant besitzt in der Regel kein Kraftwerk. Was er seinen Kunden verkauft, hat er vorher eingekauft – Monate oder Jahre im Voraus am Terminmarkt, am Vortag an der Börse oder in den letzten Minuten vor der Lieferung. Wie er diese Instrumente mischt, ist seine Beschaffungsstrategie, und sie bestimmt Preis, Risiko und Produktpalette.",
        },
        { t: "h", level: 2, text: "Die Handelsplätze" },
        {
          t: "dl",
          items: [
            { term: "EPEX Spot – Day-Ahead", def: "Die tägliche Auktion für den Folgetag. Gebote bis **12:00 Uhr**, danach steht für jede Lieferperiode ein Preis fest. Seit dem 1. Oktober 2025 wird in **15-Minuten-Produkten** gehandelt – **96 Preise je Tag** statt 24. Dieser Preis ist die Referenz für [[dynamischer-tarif|dynamische Tarife]] und für die meisten Indexverträge." },
            { term: "EPEX Spot – Intraday", def: "Kontinuierlicher Handel nach der Day-Ahead-Auktion, in Deutschland bis **5 Minuten vor Lieferbeginn**. Hier korrigieren Händler ihre Prognosefehler – der letzte Schritt vor der [[bilanzkreis|Ausgleichsenergie]]." },
            { term: "EEX – Terminmarkt", def: "Futures auf Strom und Gas für Lieferzeiträume in der Zukunft: **Cal** (Kalenderjahr), **Quarter**, **Month**, dazu Week und Weekend. Beim Strom getrennt nach **Base** (alle Stunden) und **Peak** (werktags 8 – 20 Uhr). Finanzielle Erfüllung – geliefert wird über den Spotmarkt, das Future sichert nur den Preis." },
            { term: "OTC / bilateral", def: "Direkte Verträge zwischen Händlern, Erzeugern und Lieferanten, oft über Broker und auf Basis des EFET-Rahmenvertrags. Flexibler als die Börse, dafür mit Kontrahentenrisiko." },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "**Negative Preise** sind am Spotmarkt normal geworden: An sonnigen, windigen Tagen mit wenig Last übersteigt das Angebot die Nachfrage, und Erzeuger zahlen dafür, einspeisen zu dürfen. Für Lieferanten mit dynamischen Tarifen bedeutet das Kundenkommunikation („warum ist der Preis negativ und die Rechnung trotzdem positiv?“ – wegen Netzentgelten, Umlagen und Steuern), für Einspeiser seit dem Solarspitzengesetz den Wegfall der Vergütung in diesen Viertelstunden.",
        },
        {
          t: "p",
          text: "Im [[gasmarkt-grundlagen|Gasmarkt]] heißt der Handelspunkt **Virtueller Handelspunkt (VTP)** des Marktgebiets Trading Hub Europe; als europäische Preisreferenz gilt der niederländische **TTF**, auf den die meisten Gas-Futures und Indexverträge zeigen.",
        },
        { t: "h", level: 2, text: "Beschaffungsstrategien eines Lieferanten" },
        {
          t: "table",
          head: ["Strategie", "Wie", "Risiko", "Typisch für"],
          rows: [
            ["Vollversorgung", "Ein Vorlieferant liefert die gesamte Kundenlast zu einem festen Preis – inklusive Prognose- und Bilanzkreisrisiko", "gering, dafür Risikoprämie im Preis", "kleine Stadtwerke, Neueinsteiger"],
            ["Tranchen- / strukturierte Beschaffung", "Die erwartete Menge wird in Scheiben über Monate oder Jahre am Terminmarkt eingekauft – etwa zwölf Tranchen à ein Zwölftel", "mittel: glättet den Einstandspreis, sichert aber nicht gegen Mengenabweichung", "die meisten Stadtwerke und Regionalversorger"],
            ["Portfoliomanagement", "Eigener Handel: Termin-, Spot- und Intraday-Geschäfte werden laufend gegen die Lastprognose gesteuert", "steuerbar, erfordert Handelsabteilung und Risikomanagement", "größere Versorger, Händler"],
            ["Spot-/Indexbeschaffung", "Die Menge wird am Day-Ahead-Markt gekauft und der Preis an den Kunden durchgereicht", "Preisrisiko liegt beim Kunden", "dynamische und Index-Tarife"],
          ],
        },
        {
          t: "p",
          text: "Die Differenz zwischen dem, was verkauft ist, und dem, was eingekauft ist, heißt **offene Position**. Sie ist nie null: Kunden kommen und gehen, das Wetter ändert die Last, Prognosen irren. Der Rest wird am Spot- und Intraday-Markt geschlossen, und was danach noch übrig ist, rechnet der Bilanzkoordinator als [[bilanzkreis|Ausgleichsenergie]] ab.",
        },
        {
          t: "example",
          title: "Forward-Hedge gegen Spot-Exposure – eine Modellrechnung",
          lines: [
            { label: "Erwarteter Absatz eines Portfolios", value: "10.000 MWh" },
            { label: "Davon per Jahres-Future abgesichert", value: "8.000 MWh zu P₍Termin₎" },
            { label: "Offene Position am Spotmarkt", value: "2.000 MWh zu P₍Spot₎" },
            { label: "Steigt der Spotpreis um 10 €/MWh gegenüber P₍Termin₎", value: "Mehrkosten 2.000 × 10 = 20.000 €" },
            { label: "Ohne Hedge wären es", value: "10.000 × 10 = 100.000 €" },
          ],
          result: { label: "Der Hedge begrenzt das Preisrisiko auf den ungesicherten Anteil", value: "20 % der Menge, 20 % des Risikos" },
        },
        {
          t: "p",
          text: "Die Rechnung gilt in beide Richtungen: Fällt der Spotpreis, verpasst der abgesicherte Lieferant den Vorteil. Deshalb wurden 2022 Versorger mit hoher Terminquote zu Gewinnern, während Spot-lastige Anbieter Kunden kündigten oder insolvent wurden – und 2023/2024 drehte sich das Bild.",
        },
        { t: "h", level: 2, text: "Wie Beschaffung zum Tarifpreis wird" },
        {
          t: "p",
          text: "Beschaffung und Vertrieb machen rund 40 % des Haushaltsstrompreises aus – der einzige Block, den der Lieferant beeinflussen kann; der Rest sind [[netzentgelte|Netzentgelte]], Umlagen und Steuern (siehe [[strompreis-zusammensetzung|Strompreis-Zusammensetzung]]). Der Einstandspreis aus der Beschaffung, ergänzt um Prognose- und Bilanzkreisrisiko, Vertriebskosten und Marge, ergibt den Energieanteil des [[arbeitspreis|Arbeitspreises]]. Ein Festpreistarif mit [[bonus-preisgarantie|Preisgarantie]] ist deshalb nur so lange seriös, wie die Menge dahinter am Terminmarkt eingekauft ist.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für Produktteams ist das der Zusammenhang zwischen Tarif und Einkauf: Ein Tarif mit 24 Monaten Preisgarantie setzt voraus, dass Beschaffung für 24 Monate vorliegt. Tarifkalkulation und Beschaffung brauchen deshalb dieselbe Mengenbasis – Kundenanzahl, erwarteter Verbrauch je [[lastprofil|Lastprofil]], Wechselquote. Wer ein Angebotssystem baut, das den Vertrieb nicht mit dem Portfoliomanagement verbindet, verkauft Preise, die es im Einkauf nicht mehr gibt.",
        },
        { t: "h", level: 2, text: "Herkunftsnachweise für Ökostrom" },
        {
          t: "p",
          text: "Physisch ist jede Kilowattstunde gleich. Dass ein Tarif „100 % Ökostrom“ heißen darf, beweist der Lieferant mit **Herkunftsnachweisen (HKN)**: Je erzeugter MWh aus erneuerbaren Quellen stellt das **Herkunftsnachweisregister (HKNR)** des Umweltbundesamts ein Zertifikat aus, das der Lieferant kauft und für seine Kundenmenge entwertet. HKN werden getrennt vom Strom gehandelt – europaweit, oft aus norwegischer Wasserkraft. Was entwertet wurde, erscheint in der [[stromkennzeichnung|Stromkennzeichnung]]. EEG-geförderter Strom erhält keine HKN; er wird als „Erneuerbare Energien, finanziert aus der EEG-Umlage“ ausgewiesen.",
        },
      ],
    },
    related: ["bilanzkreis", "strompreis-zusammensetzung", "dynamischer-tarif", "stromkennzeichnung", "bonus-preisgarantie", "gasmarkt-grundlagen"],
    sources: [
      {
        label: "EPEX SPOT – Marktdaten und Produktbeschreibungen (Day-Ahead, Intraday)",
        url: "https://www.epexspot.com/en",
      },
      {
        label: "EEX – European Energy Exchange (Strom- und Gas-Futures)",
        url: "https://www.eex.com/",
      },
      {
        label: "Umweltbundesamt – Herkunftsnachweisregister (HKNR)",
        url: "https://www.umweltbundesamt.de/",
      },
      {
        label: "Trading Hub Europe – Virtueller Handelspunkt und Bilanzierung",
        url: "https://www.tradinghub.eu/",
      },
      {
        label: "Bundesnetzagentur – Monitoringbericht Energie (Großhandel, Beschaffung)",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Monitoringberichte/start.html",
      },
    ],
  },

  {
    slug: "codenummern",
    category: "grundlagen",
    updated: U2,
    aka: ["MP-ID", "Marktpartner-ID", "BDEW-Codenummer", "DVGW-Codenummer", "GLN", "ILN", "EIC", "EIC-Code", "Codenummerndatenbank", "NAD+MS", "NAD+MR"],
    title: { de: "Codenummern und Marktpartner-Identifikation", en: "Code numbers and market partner identification" },
    summary: {
      de: "BDEW-Codenummer, DVGW-Codenummer, GLN und EIC: die Nummern, mit denen sich Marktpartner in der Marktkommunikation ausweisen – je Rolle und Sparte eine eigene.",
      en: "BDEW code number, DVGW code number, GLN and EIC: the numbers with which market partners identify themselves in market communication – one per role and commodity.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "In der [[marktkommunikation|Marktkommunikation]] hat kein Unternehmen einen Namen. Absender und Empfänger jeder Nachricht sind Codenummern, und dieselbe Firma tritt mit unterschiedlichen Nummern auf, je nachdem, ob sie gerade als Netzbetreiber, Lieferant oder Messstellenbetreiber spricht. Wer die falsche Nummer adressiert, erreicht die richtige Firma – aber die falsche Rolle.",
        },
        { t: "h", level: 2, text: "Die Codesysteme" },
        {
          t: "table",
          head: ["Code", "Länge", "Vergabe", "Verwendung"],
          rows: [
            ["**BDEW-Codenummer**", "13 Ziffern, beginnt mit 98 oder 99", "BDEW über bdew-codes.de", "Strommarkt: Marktpartner-ID je [[marktrollen|Marktrolle]]"],
            ["**DVGW-Codenummer**", "13 Ziffern", "DVGW", "Gasmarkt: Marktpartner-ID je Rolle"],
            ["**GS1-GLN**", "13 Ziffern", "GS1 Germany", "Global Location Number, als Marktpartner-ID in Strom und Gas ebenfalls akzeptiert"],
            ["**EIC**", "16 Zeichen, alphanumerisch", "ENTSO-E über lokale Vergabestellen (in Deutschland u. a. die ÜNB, im Gas der MGV)", "europäische Identifikation: Bilanzkreise, Marktgebiete, Netzbetreiber, Handelsparteien"],
            ["ILN", "13 Ziffern", "historisch", "Internationale Lokationsnummer – der frühere Name der GLN; in Altsystemen und alten Verträgen noch anzutreffen"],
          ],
        },
        {
          t: "p",
          text: "Die BDEW-Codenummer ist im Strommarkt der Normalfall, die DVGW-Codenummer im Gasmarkt. Beide sind 13-stellig mit Prüfziffer. Ein Stadtwerk, das Strom und Gas liefert und beide Netze betreibt, hat damit schnell ein halbes Dutzend Nummern: Lieferant Strom, Lieferant Gas, Netzbetreiber Strom, Netzbetreiber Gas, Messstellenbetreiber – und gegebenenfalls einen Bilanzkreis-EIC.",
        },
        { t: "h", level: 2, text: "EIC – der europäische Code" },
        {
          t: "p",
          text: "Der **Energy Identification Code** stammt von ENTSO-E und ist 16 Zeichen lang; das dritte Zeichen nennt den Typ. Wichtig sind vor allem **X-Codes** für Parteien (Händler, Netzbetreiber, Bilanzkreisverantwortliche), **Y-Codes** für Gebiete (Regelzonen, Marktgebiete, Bilanzierungszonen) und **Z-Codes** für Messpunkte und Zeitreihen. Ein Bilanzkreis im deutschen Strommarkt wird über eine EIC-basierte Bilanzkreis-ID identifiziert – deshalb steht bei jedem [[bilanzkreis|Bilanzkreis]] ein 16-stelliger Code, während der Bilanzkreisverantwortliche selbst als Marktpartner mit BDEW-Codenummer auftritt.",
        },
        { t: "h", level: 2, text: "Wie der Code in der Nachricht steht" },
        {
          t: "p",
          text: "In EDIFACT-Nachrichten stehen Absender und Empfänger im Segment **NAD** mit den Qualifiern **MS** (Message Sender) und **MR** (Message Receiver). Hinter der Nummer folgt ein Code, der das Codesystem benennt – Qualifier wie **293** für BDEW, **332** für DVGW oder **9** für GLN. Dieser Qualifier gehört zur Nummer wie die Vorwahl zur Telefonnummer: 13 Ziffern allein sind nicht eindeutig, weil eine GLN und eine BDEW-Nummer theoretisch gleich aussehen können.",
        },
        {
          t: "quote",
          text: "NAD+MS+9900123456789::293'   NAD+MR+9800987654321::293'",
          source: "Schematischer Aufbau der Absender- und Empfängersegmente – Rolle und Codesystem hängen an jedem Code; die konkrete Belegung steht in den EDI@Energy-Nachrichtenbeschreibungen",
        },
        {
          t: "p",
          text: "Ob eine Nummer gültig ist und zu welcher Rolle sie gehört, verrät die **Codenummerndatenbank**: Für Strom die BDEW-Datenbank unter bdew-codes.de, für Gas die DVGW-Codenummernliste. Dort stehen auch die Kontaktdaten der Marktpartner für die Fehlerklärung und – seit der Umstellung auf AS4 – die zugehörigen Kommunikationsparameter.",
        },
        { t: "h", level: 2, text: "Typische Fehler" },
        {
          t: "ul",
          items: [
            "**Falsche Rolle**: Die Anmeldung geht an die Netzbetreiber-Codenummer des Stadtwerks statt an dessen Messstellenbetreiber-Nummer – oder umgekehrt. Die Nachricht wird abgelehnt oder, schlimmer, in der falschen Abteilung verarbeitet.",
            "**Falsche Sparte**: Gas-Anmeldung mit BDEW-Code statt DVGW-Code des Empfängers.",
            "**Veralteter Code**: Nach Fusionen, Umfirmierungen oder Rollenübergängen werden Codenummern stillgelegt und neu vergeben. Eine Stammdatentabelle ohne Gültigkeitszeitraum kennt den Wechsel nicht.",
            "**Qualifier vergessen**: Die Nummer stimmt, das Codesystem fehlt – die Nachricht ist syntaktisch unvollständig.",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Ein Marktpartner ist im Datenmodell **nicht** eine Firma mit einer Nummer, sondern eine Firma mit *n* Codes. Speichern Sie je Code: Nummer, Codesystem (Qualifier), Marktrolle, Sparte und Gültigkeit von/bis – und verknüpfen Sie Verträge, Marktlokationen und Nachrichten mit dem Code, nicht mit der Firma. Erst dann lässt sich beantworten, an welche Nummer die Kündigungsbestätigung für die Gas-MaLo eines Kunden im Jahr 2023 ging.",
        },
        {
          t: "note",
          kind: "info",
          text: "Auf der Kundenrechnung erscheint von all dem nur die [[netzbetreiber|Netzbetreibernummer]] – und die ist die Codenummer des Verteilnetzbetreibers in seiner Netzbetreiberrolle. Kunden kennen sie praktisch nie; für Onboarding-Strecken ist die Ableitung aus Postleitzahl und [[marktlokation|MaLo-ID]] der bessere Weg.",
        },
      ],
    },
    related: ["marktrollen", "marktkommunikation", "bilanzkreis", "netzbetreiber", "lokationsmodell", "wechselprozess-gpke"],
    sources: [
      {
        label: "BDEW – Codenummern-Datenbank (BDEW-Codenummern, Marktpartner-IDs)",
        url: "https://bdew-codes.de/",
      },
      {
        label: "BDEW – Marktkommunikation & EDI@Energy-Dokumente",
        url: "https://www.bdew.de/energie/marktkommunikation-edi-energy-dokumente-/",
      },
      {
        label: "BDEW MaKo (bdew-mako.de) – Nachrichtenbeschreibungen (u. a. NAD-Segment, Codelisten)",
        url: "https://www.bdew-mako.de/",
      },
      {
        label: "DVGW – Codenummern Gasmarkt",
        url: "https://www.dvgw.de/",
      },
      {
        label: "ENTSO-E – Energy Identification Coding Scheme (EIC)",
        url: "https://www.entsoe.eu/data/energy-identification-codes-eic/",
      },
    ],
  },

  {
    slug: "regelzonen-uebertragungsnetz",
    category: "grundlagen",
    updated: U2,
    aka: ["ÜNB", "50Hertz", "Amprion", "TenneT", "TransnetBW", "Regelzone", "Höchstspannung", "Regelenergie", "FCR", "aFRR", "mFRR", "Primärregelung", "Sekundärregelung", "Minutenreserve", "reBAP", "Redispatch 2.0", "Netzreserve", "Kapazitätsreserve", "ENTSO-E"],
    title: { de: "Regelzonen und Übertragungsnetz", en: "Control areas and the transmission grid" },
    summary: {
      de: "Vier Übertragungsnetzbetreiber halten das deutsche Netz im Gleichgewicht – mit Regelenergie, Redispatch und Reserven, deren Kosten über Ausgleichsenergie, Umlagen und Netzentgelte bei allen landen.",
      en: "Four transmission system operators keep the German grid in balance – with balancing energy, redispatch and reserves whose costs reach everyone via imbalance prices, levies and grid fees.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Das Übertragungsnetz ist die Autobahn des Stromsystems: 220 und 380 kV, wenige Betreiber, europaweit verbunden. Wer hier arbeitet, denkt nicht in Kunden, sondern in Frequenz, Leistungsbilanz und Engpässen. Trotzdem landet fast jede Entscheidung der Übertragungsnetzbetreiber am Ende auf einer Haushaltsrechnung.",
        },
        { t: "h", level: 2, text: "Vier Betreiber, vier Regelzonen" },
        {
          t: "table",
          head: ["ÜNB", "Regelzone (grob)", "Besonderheit"],
          rows: [
            ["50Hertz", "Ostdeutschland und Hamburg", "höchster Anteil erneuerbarer Erzeugung, Berlin"],
            ["Amprion", "Westen – Nordrhein-Westfalen bis Rheinland-Pfalz und Saarland, Teile Bayerns", "größte Last, Industrieregionen"],
            ["TenneT", "Nord-Süd-Streifen von Schleswig-Holstein über Niedersachsen und Hessen bis Bayern", "Offshore-Anbindung Nordsee, längste Trassen"],
            ["TransnetBW", "Baden-Württemberg", "kleinste Regelzone"],
          ],
          caption:
            "Die Regelzonen folgen historischen Unternehmensgrenzen, nicht Bundesländern. Jede Marktlokation liegt in genau einer Regelzone – das bestimmt, welcher ÜNB als Bilanzkoordinator zuständig ist.",
        },
        {
          t: "p",
          text: "Alle vier sind Teil des kontinentaleuropäischen **Synchrongebiets** der **ENTSO-E**, das von Portugal bis in die Türkei mit einer gemeinsamen Frequenz von 50 Hz läuft. Seit 2010 gleichen die deutschen ÜNB ihren Regelbedarf im **Netzregelverbund** gegeneinander aus, statt dass eine Zone hochregelt, während die Nachbarzone abregelt – heute erweitert auf europäische Plattformen für den Austausch von Regelenergie.",
        },
        { t: "h", level: 2, text: "Systemdienstleistungen" },
        {
          t: "dl",
          items: [
            { term: "Regelenergie", def: "Reserven, die Frequenzabweichungen ausgleichen: **FCR** (Primärregelung, innerhalb von 30 Sekunden voll aktiv, europaweit solidarisch), **aFRR** (Sekundärregelung, automatisch innerhalb von 5 Minuten) und **mFRR** (Minutenreserve, manuell abgerufen). Beschafft in Auktionen über regelleistung.net." },
            { term: "Ausgleichsenergie", def: "Die Kosten der Regelenergie werden auf die Bilanzkreise umgelegt, die die Abweichung verursacht haben. Der Preis dafür ist der **reBAP** (regelzonenübergreifender einheitlicher Bilanzausgleichsenergiepreis) je Viertelstunde – dieselbe Zahl in allen vier Regelzonen. Jeder [[bilanzkreis|Bilanzkreis]] zahlt ihn für Unterdeckung und erhält ihn für Überdeckung." },
            { term: "Redispatch 2.0", def: "Seit dem 1. Oktober 2021 können Netzbetreiber Erzeugungsanlagen **ab 100 kW** – und kleinere, wenn sie fernsteuerbar sind – gezielt hoch- oder herunterfahren, um Engpässe zu vermeiden. Das frühere Einspeisemanagement für Erneuerbare ist darin aufgegangen; Betreiber werden für ausgefallene Einspeisung entschädigt." },
            { term: "Engpassmanagement", def: "Wenn im Norden Wind weht und im Süden verbraucht wird, reicht die Leitungskapazität nicht: Kraftwerke im Norden werden abgeregelt, im Süden hochgefahren. Diese Kosten – mehrere Milliarden Euro im Jahr – fließen über die Netzentgelte an alle." },
            { term: "Netzreserve und Kapazitätsreserve", def: "Kraftwerke außerhalb des Markts, die nur auf Anforderung des ÜNB laufen: die **Netzreserve** für Engpässe vor allem im Süden, die **Kapazitätsreserve** als letztes Netz, wenn der Markt die Last nicht decken kann." },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Das **50,2-Hz-Problem** zeigt, warum Systemstabilität auch Kleinanlagen betrifft: Ältere PV-Wechselrichter schalteten bei 50,2 Hz alle gleichzeitig ab – bei mehreren Gigawatt installierter Leistung ein Risiko für das gesamte Synchrongebiet. Ein Nachrüstprogramm ab 2012 sorgte dafür, dass die Anlagen heute gestaffelt reagieren.",
        },
        { t: "h", level: 2, text: "Der ÜNB als Kaufmann" },
        {
          t: "p",
          text: "Neben der Physik hat der Übertragungsnetzbetreiber zwei kaufmännische Rollen, die in jedem Abrechnungssystem sichtbar werden. Als **Bilanzkoordinator (BIKO)** führt er die Bilanzkreisabrechnung nach MaBiS und rechnet die Ausgleichsenergie mit den Bilanzkreisverantwortlichen ab. Und als **Umlagenverwalter** sammelt er die gesetzlichen Umlagen ein – [[kwk-umlage|KWKG-Umlage]], [[offshore-netzumlage|Offshore-Netzumlage]], [[besondere-netznutzung|Aufschlag für besondere Netznutzung]] – und veröffentlicht sie jährlich im Oktober auf netztransparenz.de, der gemeinsamen Plattform der vier ÜNB.",
        },
        { t: "h", level: 2, text: "Netzentgelt-Wälzung" },
        {
          t: "p",
          text: "Die Kosten des Übertragungsnetzes – Ausbau, Engpassmanagement, Reserven, Systemdienstleistungen – trägt der Haushaltskunde nicht direkt. Der ÜNB stellt sie den nachgelagerten Verteilnetzbetreibern als Netzentgelt der Höchstspannungsebene in Rechnung; diese wälzen sie Ebene für Ebene bis in die Niederspannung. Im [[netzentgelte|Netzentgelt]] eines Haushalts steckt deshalb ein Anteil aus jeder Netzebene darüber – siehe [[netzbetreiber|Netzebenen]] und [[netznutzungsabrechnung|Netznutzungsabrechnung]].",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für Softwaresysteme ist die Regelzone ein Stammdatum der Marktlokation, kein Attribut des Kunden. Sie bestimmt den Bilanzkoordinator, den Bilanzkreis-EIC des Lieferanten in dieser Zone und die Zeitreihen, die der Netzbetreiber dorthin meldet. Ein Lieferant, der bundesweit anbietet, braucht in jeder der vier Regelzonen einen eigenen Bilanzkreis oder einen Dienstleister, der ihn stellt.",
        },
      ],
    },
    related: ["bilanzkreis", "netzbetreiber", "netzentgelte", "codenummern", "grosshandel-beschaffung", "netznutzungsabrechnung"],
    sources: [
      {
        label: "§ 13 EnWG – Systemverantwortung der Betreiber von Übertragungsnetzen (Redispatch, Reserven)",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__13.html",
      },
      {
        label: "Stromnetzzugangsverordnung (StromNZV) – Bilanzkreise, Regelenergie, Ausgleichsenergie",
        url: "https://dejure.org/gesetze/StromNZV",
      },
      {
        label: "regelleistung.net – Internetplattform der ÜNB zur Vergabe von Regelleistung",
        url: "https://www.regelleistung.net/",
      },
      {
        label: "netztransparenz.de – Ausgleichsenergiepreise (reBAP), Umlagen, Redispatch",
        url: "https://www.netztransparenz.de/",
      },
      {
        label: "ENTSO-E – European Network of Transmission System Operators for Electricity",
        url: "https://www.entsoe.eu/",
      },
      {
        label: "Bundesnetzagentur – Versorgungssicherheit und Netzreserve",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Versorgungssicherheit/start.html",
      },
    ],
  },

  {
    slug: "institutionen-regelwerk",
    category: "grundlagen",
    level: "basis",
    updated: U2,
    aka: ["Bundesnetzagentur", "BNetzA", "Beschlusskammer", "BK6", "BK7", "BK4", "Landesregulierungsbehörde", "Bundeskartellamt", "BMWE", "BMWK", "BDEW", "VKU", "DVGW", "FNN", "VDE", "EDI@Energy", "EFET", "ACER", "ENTSO-E", "ENTSOG", "CEER", "Anreizregulierung", "ARegV", "Festlegung", "Regelwerkshierarchie"],
    title: { de: "Institutionen und Regelwerk", en: "Institutions and the rulebook" },
    summary: {
      de: "Wer die Regeln des Energiemarkts macht – Gesetzgeber, Bundesnetzagentur, Verbände, europäische Behörden – und in welcher Rangfolge Gesetz, Verordnung, Festlegung und Anwendungshilfe zueinander stehen.",
      en: "Who makes the rules of the energy market – legislature, Bundesnetzagentur, associations, European bodies – and how statute, ordinance, regulatory decision and application guide rank against each other.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "„Das steht so in der GPKE.“ – „Nein, das ist eine BDEW-Anwendungshilfe.“ – „Aber das EnWG sagt …“. Wer Software für Versorger baut, hört solche Sätze täglich und muss einordnen können, wer da gerade spricht und wie verbindlich es ist. Dieser Artikel sortiert die Akteure und ihre Dokumente.",
        },
        { t: "h", level: 2, text: "Wer die Regeln setzt" },
        {
          t: "dl",
          items: [
            { term: "Bundestag und Bundesregierung", def: "Erlassen Gesetze wie [[enwg|EnWG]], EEG und [[msbg|MsbG]] sowie die Verordnungen darunter. Zuständiges Ministerium ist das Bundesministerium für Wirtschaft und Energie (BMWE, bis 2025 BMWK)." },
            { term: "Bundesnetzagentur (BNetzA)", def: "Die Regulierungsbehörde für Strom und Gas – und zugleich für Telekommunikation, Post und Eisenbahn. Sie genehmigt Netzentgelte, überwacht Netzbetreiber und legt in **Beschlusskammern** die Marktprozesse fest: **BK6** für die Marktkommunikation Strom (GPKE, MaBiS, WiM, MPES), **BK7** für Gas (GeLi Gas, GaBi Gas), **BK4** für Netzentgelte; weitere Kammern regeln die Anreizregulierung. Seit 2024 kann sie in vielen Bereichen durch eigene Festlegungen regeln, was zuvor in Verordnungen stand." },
            { term: "Landesregulierungsbehörden", def: "Für Netzbetreiber mit weniger als 100.000 angeschlossenen Kunden, deren Netz die Landesgrenze nicht überschreitet, ist die Regulierungsbehörde des Bundeslands zuständig – viele Länder haben diese Aufgabe per Organleihe an die Bundesnetzagentur übertragen." },
            { term: "Bundeskartellamt", def: "Missbrauchsaufsicht über Preise und Marktmacht außerhalb der regulierten Netze – etwa bei Fernwärme, Grundversorgungspreisen oder Fusionen; die Markttransparenzstelle für den Großhandel betreibt es gemeinsam mit der Bundesnetzagentur." },
          ],
        },
        { t: "h", level: 2, text: "Verbände und Normungsgremien" },
        {
          t: "table",
          head: ["Organisation", "Wofür sie steht", "Was von ihr kommt"],
          rows: [
            ["**BDEW**", "Bundesverband der Energie- und Wasserwirtschaft – die großen Versorger und Netzbetreiber", "Anwendungshilfen zur MaKo, [[codenummern|Codenummern]], Strompreisanalyse, Musterverträge"],
            ["**VKU**", "Verband kommunaler Unternehmen – die Stadtwerke", "Positionen, Musterdokumente, Interessenvertretung für kleinere Netzbetreiber"],
            ["**DVGW**", "Deutscher Verein des Gas- und Wasserfaches", "das technische Regelwerk für Gas und Wasser: G 260 (Gasbeschaffenheit), G 685 (Gasabrechnung), Codenummern Gas"],
            ["**VDE FNN**", "Forum Netztechnik/Netzbetrieb im VDE", "technische Anschlussregeln **VDE-AR-N 4100** (Niederspannung), **4105** (Erzeugungsanlagen Niederspannung), **4110** (Mittelspannung), Metering Code **VDE-AR-N 4400**, Lastenhefte für Zähler und Gateways"],
            ["**EDI@Energy**", "Projektgruppe von BDEW und weiteren Verbänden", "Nachrichtenbeschreibungen und Anwendungshandbücher der [[marktkommunikation|Marktkommunikation]] auf bdew-mako.de (vormals edi-energy.de) – im Auftrag der Bundesnetzagentur"],
            ["**EFET**", "European Federation of Energy Traders", "der Standard-Rahmenvertrag für den OTC-Handel im [[grosshandel-beschaffung|Großhandel]]"],
          ],
        },
        { t: "h", level: 2, text: "Europa" },
        {
          t: "p",
          text: "Die Grundarchitektur – Entflechtung, freier Lieferantenwechsel, regulierte Netze – stammt aus den EU-Binnenmarktrichtlinien für Strom und Gas, zuletzt dem „Clean Energy Package“ von 2019. **ACER**, die Agentur für die Zusammenarbeit der Energieregulierungsbehörden, koordiniert die nationalen Regulierer; **CEER** ist deren freiwilliger Zusammenschluss. **ENTSO-E** (Strom) und **ENTSOG** (Gas) sind die Verbände der Übertragungs- und Fernleitungsnetzbetreiber und erarbeiten die europäischen Netzkodizes, aus denen etwa die Regeln für [[regelzonen-uebertragungsnetz|Regelenergie]] und den grenzüberschreitenden Handel stammen.",
        },
        { t: "h", level: 2, text: "Die Regelwerkshierarchie" },
        {
          t: "steps",
          items: [
            { title: "EU-Recht", text: "Richtlinien (müssen in nationales Recht umgesetzt werden) und Verordnungen (gelten unmittelbar), etwa die Strombinnenmarktverordnung und die europäischen Netzkodizes." },
            { title: "Bundesgesetze", text: "[[enwg|EnWG]] als Grundgesetz des Markts, EEG für Erneuerbare, [[msbg|MsbG]] für Messwesen, EnergieStG und StromStG für Steuern, KWKG, GEG." },
            { title: "Verordnungen", text: "Konkretisieren die Gesetze: StromNZV und GasNZV (Netzzugang, Bilanzierung), StromNEV und GasNEV (Netzentgelte), ARegV (Anreizregulierung), [[stromgvv-gasgvv|StromGVV und GasGVV]] (Grundversorgung), NAV und NDAV (Netzanschluss)." },
            { title: "Festlegungen der Bundesnetzagentur", text: "Verbindliche Verwaltungsakte der Beschlusskammern: GPKE, WiM, MaBiS, MPES, GeLi Gas, GaBi Gas, die Festlegungen zu § 14a EnWG, zum 24-Stunden-Lieferantenwechsel und zu den Datenformaten. Sie binden alle Marktteilnehmer, obwohl sie kein Gesetz sind." },
            { title: "Anwendungshilfen und technische Regeln", text: "BDEW-Anwendungshilfen, EDI@Energy-Nachrichtenbeschreibungen, DVGW-Arbeitsblätter, VDE-Anwendungsregeln. Formal keine Rechtsnormen – praktisch verbindlich, weil Festlegungen und Verträge auf sie verweisen." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Die Reihenfolge ist auch die Rangfolge im Konflikt: Eine Anwendungshilfe kann eine Festlegung nicht aushebeln, eine Festlegung nicht das Gesetz. In der Praxis liest man aber von unten nach oben – die Anwendungshilfe sagt, wie es konkret geht, und nur im Streitfall geht es eine Stufe höher.",
        },
        { t: "h", level: 2, text: "Anreizregulierung in fünf Zeilen" },
        {
          t: "p",
          text: "Weil Netze Monopole sind, legt die Bundesnetzagentur nach der **ARegV** für jeden Netzbetreiber eine **Erlösobergrenze** fest – die Summe, die er in einem Jahr über [[netzentgelte|Netzentgelte]] einnehmen darf. Sie gilt für eine **Regulierungsperiode von fünf Jahren** und sinkt jährlich um einen Effizienzpfad: Wer effizienter ist als der Branchenvergleich, behält den Gewinn; wer teurer ist, muss sparen. Aus der Erlösobergrenze und der erwarteten Absatzmenge berechnet der Netzbetreiber seine Preisblätter – deshalb ändern sich Netzentgelte jährlich zum 1. Januar, und deshalb sind sie regional so unterschiedlich.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für Produktentwicklung heißt das: Die Quelle einer Regel bestimmt, wie oft sie sich ändert. Gesetze ändern sich alle paar Jahre, Festlegungen und Formate zweimal im Jahr ([[formatanpassung|Formatanpassung]]), Preisblätter jährlich. Wer eine fachliche Regel implementiert, sollte ihre Quelle im Code oder in der Konfiguration nennen – dann ist beim nächsten Release klar, welche Stellen betroffen sind.",
        },
      ],
    },
    related: ["energiemarkt-ueberblick", "enwg", "marktkommunikation", "netzentgelte", "codenummern", "formatanpassung"],
    sources: [
      {
        label: "Energiewirtschaftsgesetz (EnWG)",
        url: "https://www.gesetze-im-internet.de/enwg_2005/",
      },
      {
        label: "Anreizregulierungsverordnung (ARegV)",
        url: "https://www.gesetze-im-internet.de/aregv/",
      },
      {
        label: "Stromnetzzugangsverordnung (StromNZV)",
        url: "https://dejure.org/gesetze/StromNZV",
      },
      {
        label: "Bundesnetzagentur – Beschlusskammer 6 (Marktkommunikation Strom)",
        url: "https://www.bundesnetzagentur.de/DE/Beschlusskammern/BK06/BK6_83_Zug_Mess/835_mitteilungen_datenformate/Datenformate-node.html",
      },
      {
        label: "BDEW – Marktkommunikation & EDI@Energy-Dokumente",
        url: "https://www.bdew.de/energie/marktkommunikation-edi-energy-dokumente-/",
      },
      {
        label: "BDEW MaKo (bdew-mako.de) – EDI@Energy Dokumente",
        url: "https://www.bdew-mako.de/",
      },
      {
        label: "VDE FNN – Forum Netztechnik/Netzbetrieb (Anwendungsregeln)",
        url: "https://www.vde.com/de/fnn",
      },
      {
        label: "DVGW – Regelwerk Gas und Wasser",
        url: "https://www.dvgw.de/",
      },
      {
        label: "ENTSO-E – European Network of Transmission System Operators for Electricity",
        url: "https://www.entsoe.eu/",
      },
    ],
  },
];
