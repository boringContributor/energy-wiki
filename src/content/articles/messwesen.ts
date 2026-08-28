import type { Article } from "../types";

const U = "2026-08-01";

export const messwesenArticles: Article[] = [
  {
    slug: "zaehler",
    category: "messwesen",
    featured: true,
    level: "basis",
    updated: U,
    aka: ["Messeinrichtung", "Zählernummer", "Stromzähler", "Gaszähler", "Wasserzähler"],
    title: { de: "Der Zähler", en: "The meter" },
    summary: {
      de: "Das Gerät, das misst, wie viel Energie oder Wasser eine Verbrauchsstelle entnimmt – und damit die Grundlage jeder Rechnung.",
      en: "The device that measures how much energy or water a site draws – and thus the basis of every bill.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Zähler ist der einzige Punkt, an dem der Energiemarkt die Wirklichkeit berührt. Alles andere – Verträge, Bilanzkreise, Prognosen – ist Buchhaltung um diesen einen Messwert herum.",
        },
        { t: "figure", id: "zaehler-anatomie" },
        { t: "h", level: 2, text: "Zähler, Zählernummer, Zählerstand" },
        {
          t: "dl",
          items: [
            { term: "Zähler / Messeinrichtung", def: "Das physische Gerät. Es gehört dem [[messstellenbetrieb|Messstellenbetreiber]], nicht dem Kunden und nicht dem Vermieter." },
            { term: "Zählernummer", def: "Die Seriennummer des Geräts. Sie ändert sich beim Zählerwechsel – die [[messlokation|Messlokations-ID]] bleibt." },
            { term: "[[zaehlerstand|Zählerstand]]", def: "Der aktuell angezeigte Zählerwert. Aus der Differenz zweier Stände entsteht der [[verbrauch|Verbrauch]]." },
            { term: "[[zaehlwerk|Zählwerk]]", def: "Ein einzelnes Register im Zähler. Ein Zweitarifzähler hat zwei, ein Zweirichtungszähler ebenfalls." },
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Zählernummer und Messlokations-ID werden ständig verwechselt. Faustregel: Was auf dem Gerät steht, ist die Zählernummer. Was auf der Rechnung als 33-stellige Kennung steht, ist die [[messlokation|MeLo-ID]].",
        },
        { t: "h", level: 2, text: "Eichung" },
        {
          t: "p",
          text: "Zähler sind eichpflichtig. Läuft die Eichfrist ab, muss das Gerät getauscht oder – bei Stichprobenverfahren – die Frist verlängert werden. Typische Fristen: 8 Jahre bei elektronischen Stromzählern und Balgengaszählern, 16 Jahre bei Ferraris-Zählern, 6 Jahre bei Kaltwasserzählern.",
        },
        {
          t: "note",
          kind: "info",
          text: "Ein Zählerwechsel ist ein eigener Marktprozess: Der Messstellenbetreiber meldet Ausbau- und Einbauzählerstand, der Lieferant rechnet den Zeitraum bis zum Wechsel ab. Für den Kunden sieht das nach zwei Rechnungen aus – ist aber eine, in zwei Abschnitten.",
        },
      ],
    },
    related: ["zaehlertypen", "zaehlerstand", "messstellenbetrieb", "messlokation"],
  },

  {
    slug: "zaehlertypen",
    category: "messwesen",
    updated: U,
    aka: ["Ferrariszähler", "Eintarifzähler", "Zweitarifzähler", "Wandlerzähler", "Zweirichtungszähler", "Drehstromzähler", "Balgengaszähler"],
    title: { de: "Zählertypen", en: "Meter types" },
    summary: {
      de: "Vom Ferraris-Zähler mit Drehscheibe bis zum intelligenten Messsystem: welcher Zähler was kann, und woran man ihn erkennt.",
      en: "From the spinning-disc meter to the smart metering system: what each type can do and how to recognise it.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Welcher Zähler verbaut ist, entscheidet darüber, welche Produkte überhaupt möglich sind. Ohne fernauslesbaren Zähler kein [[dynamischer-tarif|dynamischer Tarif]], ohne zweites Zählwerk kein Nachttarif, ohne Zweirichtungsmessung keine Einspeisevergütung.",
        },
        { t: "figure", id: "zaehler-typen" },
        { t: "h", level: 2, text: "Die entscheidende Unterscheidung" },
        {
          t: "table",
          head: ["", "moderne Messeinrichtung", "intelligentes Messsystem"],
          rows: [
            ["Kürzel", "mME", "iMSys"],
            ["Aufbau", "digitaler Zähler", "digitaler Zähler **+** Smart-Meter-Gateway"],
            ["Fernauslesung", "nein", "ja"],
            ["Messwerte", "Speicher für 24 Monate, vor Ort ablesbar", "viertelstündlich, automatisch übertragen"],
            ["Preisobergrenze", "25 € im Jahr", "gestaffelt nach Verbrauch und Anlass"],
            ["Dynamischer Tarif möglich", "nein", "ja"],
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "„Digitaler Zähler“ ist **nicht** gleich „Smart Meter“. Die meisten neu verbauten Geräte sind moderne Messeinrichtungen ohne Kommunikationsanbindung – sie werden weiterhin vor Ort abgelesen.",
        },
        { t: "h", level: 2, text: "Weitere Typen im Feld" },
        {
          t: "ul",
          items: [
            "**Wandlerzähler** ab rund 63 A: Der angezeigte Wert muss mit dem Wandlerfaktor multipliziert werden – eine klassische Abrechnungsfalle",
            "**Zweirichtungszähler** bei jeder Einspeisung, meist mit zwei [[marktlokation|Marktlokationen]] am selben Zähler",
            "**Balgengaszähler** G4 oder G6 im Haushalt, gemessen in m³ – siehe [[thermische-gasabrechnung|thermische Gasabrechnung]]",
            "**Wasserzähler** der Baugröße Qn 2,5, Eichfrist 6 Jahre",
            "**RLM-Zähler** mit registrierender Leistungsmessung – siehe [[lastprofil|Lastprofil]] und [[leistungspreis|Leistungspreis]]",
          ],
        },
      ],
    },
    related: ["zaehler", "intelligentes-messsystem", "photovoltaik", "messstellenbetrieb"],
  },

  {
    slug: "zaehlerstand",
    category: "messwesen",
    updated: U,
    aka: ["Ablesung", "Selbstablesung", "Zählerstandsmeldung", "Schätzung", "Verbrauchsschätzung"],
    title: { de: "Zählerstand und Ablesung", en: "Meter reading" },
    summary: {
      de: "Auf der Rechnung ist gekennzeichnet, ob ein Zählerstand vom Messstellenbetreiber abgelesen, vom Kunden gemeldet oder geschätzt wurde – bei einer Schätzung muss der Grund genannt werden.",
      en: "Every reading on a bill is marked as taken by the metering operator, reported by the customer, or estimated – and estimates must state a reason.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Zählerstand ist kein Verbrauch. Der Zähler zählt seit seinem Einbau immer weiter; der [[verbrauch|Verbrauch]] ist erst die Differenz zwischen zwei Ständen.",
        },
        { t: "figure", id: "zaehlerstandsarten" },
        { t: "h", level: 2, text: "Richtig ablesen" },
        {
          t: "ul",
          items: [
            "Nur die **Vorkommastellen** zählen – Nachkommastellen sind meist rot abgesetzt",
            "Bei Zweitarifzählern beide Werte melden, HT und NT getrennt",
            "Bei Wandlerzählern den **Wandlerfaktor** berücksichtigen",
            "Bei digitalen Zählern muss oft erst die richtige Anzeige durchgeschaltet werden – die [[obis-kennzahlen|OBIS-Kennzahl]] sagt, welches Register gerade zu sehen ist",
          ],
        },
        { t: "h", level: 2, text: "Wenn geschätzt wird" },
        {
          t: "p",
          text: "Liegt kein Wert vor, wird der Verbrauch auf Basis des Vorjahres hochgerechnet. Das ist zulässig, muss aber begründet werden. Übliche Schlüssel auf der Rechnung:",
        },
        {
          t: "ol",
          items: [
            "fehlende Daten bei der Selbstablesung",
            "kein möglicher Zutritt zur Messeinrichtung",
            "Verbrauchszuordnung wegen unterjähriger [[preisanpassung|Preisänderung]]",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Zählerstandsmeldung ist die meistgenutzte Funktion in fast jedem [[endkundenportal|Endkundenportal]]. Zwei Dinge entscheiden über die Qualität: eine **Plausibilitätsprüfung** gegen den letzten Stand und den erwarteten Verbrauch – und eine klare Ansage, welche Einheit gemeint ist (kWh oder m³) und ob Nachkommastellen erfasst werden sollen.",
        },
        {
          t: "note",
          kind: "law",
          text: "§ 40 Abs. 2 EnWG verlangt die Kennzeichnung jedes Zählerstands: abgelesen durch den Messstellenbetreiber, abgelesen durch den Kunden, oder geschätzt.",
        },
      ],
    },
    related: ["verbrauch", "zaehler", "obis-kennzahlen", "jahresabrechnung"],
  },

  {
    slug: "zaehlwerk",
    category: "messwesen",
    updated: U,
    aka: ["Register", "Zählwerksstand", "HT", "NT", "Hochtarif", "Niedertarif"],
    title: { de: "Zählwerk (Register)", en: "Meter register" },
    summary: {
      de: "Ein einzelner Zähler im Zähler: Jedes Zählwerk summiert eine bestimmte Größe – Bezug, Einspeisung, Hochtarif oder Niedertarif.",
      en: "A counter inside the meter: each register accumulates one specific quantity – consumption, feed-in, peak or off-peak.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Eintarifzähler hat ein Zählwerk und damit einen Zählerstand. Sobald zwischen Tarifzeiten oder Energierichtungen unterschieden werden soll, braucht es mehrere.",
        },
        {
          t: "table",
          head: ["Zählwerk", "[[obis-kennzahlen|OBIS]]", "Was es zählt"],
          rows: [
            ["Bezug gesamt", "1.8.0", "alle aus dem Netz entnommenen kWh"],
            ["Hochtarif", "1.8.1", "Bezug in der teuren Zeit (HT)"],
            ["Niedertarif", "1.8.2", "Bezug in der günstigen Zeit (NT)"],
            ["Einspeisung", "2.8.0", "ins Netz abgegebene kWh"],
            ["Blindarbeit", "3.8.0 / 4.8.0", "[[blindarbeit|Blindarbeit]] bei Kunden mit Leistungsmessung"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Bei HT/NT gilt: **1.8.0 = 1.8.1 + 1.8.2.** Manche Zähler zeigen alle drei Werte an – wer alle drei meldet, hat den Verbrauch nicht verdoppelt, sondern nur die Summe mitgeliefert.",
        },
        {
          t: "p",
          text: "Die Umschaltung zwischen HT und NT steuert entweder eine Schaltuhr im Zählerschrank oder ein **Rundsteuerempfänger**, der ein Signal über das Netz erhält. Die Zeitfenster legt der Netzbetreiber fest – sie sind regional unterschiedlich.",
        },
      ],
    },
    related: ["obis-kennzahlen", "zaehlertypen", "zaehlerstand", "arbeitspreis"],
  },

  {
    slug: "obis-kennzahlen",
    category: "messwesen",
    updated: U,
    aka: ["OBIS", "OBIS-Kennzahl", "Object Identification System", "1.8.0", "2.8.0"],
    title: { de: "OBIS-Kennzahlen", en: "OBIS codes" },
    summary: {
      de: "Ein genormter Code, der eindeutig sagt, welche Größe ein Messwert beschreibt – die gemeinsame Sprache aller Zähler und Abrechnungssysteme.",
      en: "A standardised code that unambiguously names the quantity a reading represents – the shared language of meters and billing systems.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Auf dem Display eines digitalen Zählers steht über dem Zahlenwert eine kryptische Ziffernfolge wie `1.8.0`. Das ist eine OBIS-Kennzahl: Sie sagt, welche physikalische Größe der angezeigte Wert misst.",
        },
        {
          t: "formula",
          expr: "A - B : C . D . E * F",
          where: [
            { sym: "A", desc: "Medium – 1 = Strom, 7 = Gas, 8 = Wasser, 6 = Wärme" },
            { sym: "C", desc: "Messgröße – 1 = Wirkarbeit Bezug, 2 = Wirkarbeit Lieferung, 3/4 = Blindarbeit" },
            { sym: "D", desc: "Verarbeitung – 8 = Zählerstand kumuliert, 29 = Lastgang" },
            { sym: "E", desc: "Tarifstufe – 0 = gesamt, 1 = HT, 2 = NT" },
          ],
          caption:
            "In der Kurzform am Zählerdisplay entfallen A, B und F – übrig bleibt C.D.E.",
        },
        {
          t: "table",
          head: ["Kennzahl", "Bedeutung"],
          rows: [
            ["1.8.0", "Wirkarbeit Bezug, gesamt"],
            ["1.8.1 / 1.8.2", "Wirkarbeit Bezug, Hochtarif / Niedertarif"],
            ["2.8.0", "Wirkarbeit Lieferung – Einspeisung ins Netz"],
            ["1.7.0", "Momentane Wirkleistung in kW"],
            ["7-0:3.0.0", "Gas: Betriebsvolumen in m³"],
            ["16.7.0", "Saldierte Momentanleistung – Bezug minus Einspeisung"],
          ],
        },
        {
          t: "note",
          kind: "tip",
          text: "Für Portale und Apps praktisch: Zeigt der Zähler `2.8.0` mit einem Wert größer null, ist eine Erzeugungsanlage angeschlossen. Das ist ein guter Anlass, dem Kunden passende Produkte anzubieten – und ein Hinweis darauf, dass hier zwei [[marktlokation|Marktlokationen]] existieren können.",
        },
      ],
    },
    related: ["zaehlwerk", "zaehlerstand", "zaehler", "intelligentes-messsystem"],
  },

  {
    slug: "intelligentes-messsystem",
    category: "messwesen",
    updated: U,
    aka: ["iMSys", "Smart Meter", "Smart-Meter-Gateway", "SMGW", "Rollout", "moderne Messeinrichtung", "mME"],
    title: { de: "Intelligentes Messsystem (iMSys)", en: "Smart metering system" },
    summary: {
      de: "Eine moderne Messeinrichtung plus Smart-Meter-Gateway: misst viertelstündlich, überträgt verschlüsselt und ist Voraussetzung für dynamische Tarife und § 14a EnWG.",
      en: "A digital meter plus a smart meter gateway: measures every quarter hour, transmits encrypted, and is the precondition for dynamic tariffs and § 14a EnWG.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Das intelligente Messsystem ist der Baustein, an dem die Digitalisierung der Energiewende hängt. Ohne fernauslesbare Viertelstundenwerte gibt es keine [[dynamischer-tarif|dynamischen Tarife]], keine netzdienliche Steuerung und keine belastbare Verbrauchsrückmeldung.",
        },
        { t: "figure", id: "smart-meter-gateway" },
        { t: "h", level: 2, text: "Wer eines bekommt" },
        {
          t: "table",
          head: ["Fall", "Regel"],
          rows: [
            ["Verbrauch über 6.000 kWh im Jahr", "Pflichteinbau"],
            ["Erzeugungsanlage über 7 kW installierter Leistung", "Pflichteinbau"],
            ["Steuerbare Verbrauchseinrichtung nach [[paragraf-14a-enwg|§ 14a EnWG]]", "Pflichteinbau"],
            ["Auf Wunsch des Kunden", "Anspruch auf Einbau binnen vier Monaten"],
            ["Alle übrigen Fälle", "moderne Messeinrichtung, Rollout bis 2032"],
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Rechtsgrundlage ist das [[msbg|Messstellenbetriebsgesetz]], zuletzt geändert durch die Novelle vom Februar 2025. Bis Ende 2025 mussten 20 % der Pflichteinbaufälle ausgestattet sein; bis 2032 soll der Rollout abgeschlossen sein.",
        },
        { t: "h", level: 2, text: "Was kostet das den Kunden" },
        {
          t: "p",
          text: "Das MsbG deckelt die jährlichen Entgelte. Für eine moderne Messeinrichtung liegt die Obergrenze bei 25 € im Jahr. Für intelligente Messsysteme gilt eine Staffel, die sich nach Jahresverbrauch beziehungsweise Anlagenleistung richtet – bei den Pflichteinbaufällen mit hohem Verbrauch reicht sie bis 140 € im Jahr, für eine Steuereinrichtung nach § 14a kommen höchstens 50 € hinzu. Wer den Einbau selbst wünscht, zahlt in der Praxis meist 40 bis 50 € im Jahr.",
        },
        { t: "h", level: 2, text: "Das Gateway als Sicherheitsanker" },
        {
          t: "ul",
          items: [
            "zertifiziert nach BSI-Schutzprofil und Technischer Richtlinie",
            "verschlüsselte Kommunikation nach außen (WAN) und ins Heimnetz (HAN)",
            "sternförmige Datenverteilung: jeder Marktteilnehmer bekommt nur, was ihm zusteht",
            "protokolliert jeden Zugriff nachvollziehbar",
            "bildet Tarifanwendungsfälle (TAF) ab – etwa TAF 1 für Jahresverbrauch, TAF 7 für Lastgang",
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Häufiges Missverständnis: Ein iMSys sendet **nicht** ständig Daten. Was übertragen wird, hängt vom Tarifanwendungsfall ab – bei einem Standardhaushalt ohne dynamischen Tarif oft nur wenige Werte im Jahr.",
        },
      ],
    },
    related: ["zaehlertypen", "messstellenbetrieb", "dynamischer-tarif", "paragraf-14a-enwg"],
    sources: [
      {
        label: "Bundesnetzagentur – Roll-out intelligenter Messsysteme",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/NetzzugangMesswesen/Mess-undZaehlwesen/iMSys/artikel.html",
      },
    ],
  },

  {
    slug: "messstellenbetrieb",
    category: "messwesen",
    updated: U,
    aka: ["MSB", "Messstellenbetreiber", "grundzuständiger MSB", "wettbewerblicher MSB", "Messentgelt"],
    title: { de: "Messstellenbetrieb", en: "Metering point operation" },
    summary: {
      de: "Umfasst Einbau, Betrieb und Wartung der Messeinrichtung, die Ablesung sowie die Weitergabe, Plausibilisierung und Ersatzwertbildung der Daten.",
      en: "Covers installation, operation and maintenance of the meter, meter reading, and the forwarding, validation and substitution of the data.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Messstellenbetreiber ist der stille Dritte in jeder Energiebeziehung: Er besitzt den [[zaehler|Zähler]], liest ihn aus und schickt die Werte an alle, die sie brauchen – Lieferant, Netzbetreiber und Kunde.",
        },
        { t: "h", level: 2, text: "Der Leistungsumfang" },
        {
          t: "ul",
          items: [
            "Einbau, Betrieb und Wartung der Messeinrichtungen",
            "Ab- und Auslesung der Messeinrichtung",
            "Weitergabe der Daten an die Berechtigten",
            "**Plausibilisierung** – prüfen, ob ein Wert überhaupt sein kann",
            "**Ersatzwertbildung** – wenn ein Wert fehlt, einen begründeten Wert bilden",
            "Einhaltung der Eichfristen und rechtzeitiger Gerätetausch",
          ],
        },
        { t: "h", level: 2, text: "Grundzuständig oder wettbewerblich" },
        {
          t: "p",
          text: "Standardmäßig ist der [[netzbetreiber|Netzbetreiber]] grundzuständiger Messstellenbetreiber. Der Anschlussnutzer kann aber einen **wettbewerblichen** Messstellenbetreiber beauftragen – etwa, weil dieser zusätzliche Auswertungen oder Submetering anbietet. Der Wechsel läuft als eigener Marktprozess, ähnlich einem [[lieferantenwechsel|Lieferantenwechsel]].",
        },
        {
          t: "note",
          kind: "info",
          text: "Das Messentgelt landet beim Haushaltskunden meist unsichtbar im [[grundpreis|Grundpreis]] – der Lieferant zieht es für den Messstellenbetreiber mit ein. Ausgewiesen werden muss es trotzdem.",
        },
      ],
    },
    related: ["intelligentes-messsystem", "zaehler", "msbg", "grundpreis"],
  },

  {
    slug: "marktlokation",
    category: "messwesen",
    updated: U,
    aka: ["MaLo", "MaLo-ID", "Marktlokations-ID", "Identifikationsnummer der Marktlokation", "Zählpunkt"],
    title: { de: "Marktlokation (MaLo)", en: "Market location" },
    summary: {
      de: "Die eindeutige Identifikation einer Verbrauchsstelle, Wohnung oder Einspeisestelle – 11 Ziffern, die an Vertrag, Lieferung und Bilanzierung hängen.",
      en: "The unique identifier of a consumption point, dwelling or feed-in point – 11 digits tied to contract, supply and balancing.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Die Marktlokation ist der Ort, an dem Energie aus Sicht des Marktes entnommen oder eingespeist wird. Alles Kaufmännische hängt an ihrer ID: Anmeldung, [[lieferantenwechsel|Lieferantenwechsel]], [[bilanzkreis|Bilanzierung]] und Abrechnung.",
        },
        { t: "figure", id: "malo-melo" },
        { t: "h", level: 2, text: "Aufbau der ID" },
        {
          t: "ul",
          items: [
            "**11 Ziffern**, rein numerisch",
            "die **erste Ziffer** kennzeichnet die vergebende Stelle: 1 bis 3 für den DVGW (Gas), 4 bis 9 für den BDEW (Strom)",
            "die **letzte Ziffer** ist eine Prüfziffer – Tippfehler fallen dadurch sofort auf",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Die Prüfziffer ist ein Geschenk für jedes Eingabeformular: Sie lässt sich clientseitig validieren, bevor irgendein Prozess startet. Eine falsche MaLo-ID ist einer der häufigsten Gründe für abgelehnte Anmeldungen beim Netzbetreiber.",
        },
        { t: "h", level: 2, text: "Marktlokation und Messlokation" },
        {
          t: "p",
          text: "Die Marktlokation beantwortet die kaufmännische Frage („wer beliefert diesen Ort?“), die [[messlokation|Messlokation]] die technische („wo wird gemessen?“). Beide wurden 2018 eingeführt und lösten die frühere **Zählpunktbezeichnung** ab.",
        },
        {
          t: "note",
          kind: "info",
          text: "Bei einer PV-Anlage gibt es typischerweise zwei Marktlokationen an einem einzigen Zähler: eine für den Bezug, eine für die Einspeisung.",
        },
      ],
    },
    related: ["messlokation", "verbrauchsstelle", "lieferantenwechsel", "marktkommunikation"],
    sources: [
      {
        label: "BDEW – Anwendungshilfe Marktlokations-Identifikationsnummer",
        url: "https://www.bdew.de/service/anwendungshilfen/awh-neue-marktlokations-identifikationsnummer/",
      },
    ],
  },

  {
    slug: "messlokation",
    category: "messwesen",
    updated: U,
    aka: ["MeLo", "MeLo-ID", "Messlokations-ID", "Identifikationsnummer der Messlokation", "Zählpunktbezeichnung"],
    title: { de: "Messlokation (MeLo)", en: "Metering location" },
    summary: {
      de: "Die eindeutige Identifikation einer Messeinrichtung – 33 Stellen, beginnend mit DE, unabhängig davon, welcher Zähler gerade verbaut ist.",
      en: "The unique identifier of a metering point – 33 characters starting with DE, independent of which physical meter is installed.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Die Messlokation ist der Zählerplatz, nicht der Zähler. Wird das Gerät getauscht, ändert sich die Zählernummer – die Messlokations-ID bleibt dieselbe.",
        },
        { t: "figure", id: "malo-melo" },
        { t: "h", level: 2, text: "Aufbau" },
        {
          t: "ul",
          items: [
            "**33 Stellen**, alphanumerisch",
            "beginnt mit dem Ländercode **DE**",
            "enthält die Codenummer des [[netzbetreiber|Netzbetreibers]]",
            "der Rest ist eine vom Netzbetreiber vergebene, eindeutige Kennung",
          ],
        },
        {
          t: "quote",
          text: "DE 0005266580 2AO6G56M11SN51G21M24S",
          source: "Beispielhafter Aufbau – Ländercode, Netzbetreiber, lokale Kennung",
        },
        {
          t: "note",
          kind: "warn",
          text: "Kunden verwechseln die MeLo-ID regelmäßig mit der Zählernummer, weil beide auf der Rechnung stehen. In Formularen hilft ein Rechnungs-Ausschnitt mit Markierung mehr als jede Erklärung im Fließtext.",
        },
      ],
    },
    related: ["marktlokation", "zaehler", "messstellenbetrieb"],
  },

  {
    slug: "lastprofil",
    category: "messwesen",
    updated: U,
    aka: ["SLP", "Standardlastprofil", "RLM", "registrierende Leistungsmessung", "Lastgang", "H0", "Gradtagszahl"],
    title: { de: "Standardlastprofil und Lastgang", en: "Standard load profiles and metered load" },
    summary: {
      de: "Bis 100.000 kWh im Jahr verteilt eine statistische Kurve den Jahresverbrauch auf die Stunden; darüber wird der tatsächliche Lastgang viertelstündlich gemessen.",
      en: "Up to 100,000 kWh a year a statistical curve spreads annual consumption across the hours; above that, actual load is metered every quarter hour.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Markt bilanziert je Viertelstunde – aber ein Haushaltszähler wird einmal im Jahr abgelesen. Diese Lücke schließt das Standardlastprofil: eine genormte Kurve, die sagt, wie ein typischer Kunde seinen Jahresverbrauch über das Jahr verteilt.",
        },
        { t: "figure", id: "lastprofil" },
        { t: "h", level: 2, text: "Die gängigen Profile" },
        {
          t: "table",
          head: ["Profil", "Kundengruppe"],
          rows: [
            ["H0", "Haushalt"],
            ["G0 – G6", "Gewerbe, nach Tagesgang unterschieden – G4 Laden, G5 Bäckerei, G6 Wochenendbetrieb"],
            ["L0 – L2", "Landwirtschaft"],
            ["SLP Gas", "zusätzlich temperaturabhängig über Gradtagszahlen"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Beim Gas hängt das Profil an der Außentemperatur: Ein kalter Januar verschiebt den prognostizierten Verbrauch nach vorn. Deshalb taucht bei Gasabrechnungen die **Gradtagszahl** auf, wenn ein Zeitraum aufgeteilt werden muss.",
        },
        { t: "h", level: 2, text: "Wann RLM greift" },
        {
          t: "ul",
          items: [
            "ab rund **100.000 kWh** Jahresverbrauch oder über 30 kW Leistung",
            "Messung im **Viertelstundentakt**, tägliche Übertragung an den Netzbetreiber",
            "Grundlage für den [[leistungspreis|Leistungspreis]] und für [[blindarbeit|Blindarbeit]]",
            "auch bei kleineren Kunden möglich, wenn ein [[intelligentes-messsystem|iMSys]] verbaut ist",
          ],
        },
        {
          t: "note",
          kind: "tip",
          text: "Das ist der stille Umbruch des Smart-Meter-Rollouts: Je mehr Haushalte ein iMSys haben, desto weniger Prognose und desto mehr Messung. Standardlastprofile werden dadurch mittelfristig zum Sonderfall statt zum Normalfall.",
        },
      ],
    },
    related: ["bilanzkreis", "leistungspreis", "intelligentes-messsystem", "dynamischer-tarif"],
  },
];
