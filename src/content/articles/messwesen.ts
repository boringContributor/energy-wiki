import type { Article } from "../types";

const U = "2026-08-01";
const U2 = "2026-08-29";

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
    updated: "2026-08-29",
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
            "**Wasserzähler** der Baugröße **Q3 = 4** (Dauerdurchfluss 4 m³/h nach MID) – im Altbestand noch als **Qn 2,5** beschriftet; Eichfrist 6 Jahre",
            "**RLM-Zähler** mit registrierender Leistungsmessung – siehe [[lastprofil|Lastprofil]] und [[leistungspreis|Leistungspreis]]",
          ],
        },
      ],
    },
    related: ["zaehler", "intelligentes-messsystem", "photovoltaik", "messstellenbetrieb"],
    sources: [
      {
        label: "Bundesnetzagentur – Roll-out intelligenter Messsysteme",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/NetzzugangMesswesen/Mess-undZaehlwesen/iMSys/artikel.html",
      },
      { label: "MsbG im Volltext", url: "https://www.gesetze-im-internet.de/messbg/" },
    ],
  },

  {
    slug: "zaehlerstand",
    category: "messwesen",
    updated: "2026-08-29",
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
        { t: "h", level: 3, text: "Ersatzwertbildung im Messstellenbetrieb" },
        {
          t: "p",
          text: "Fehlt ein Messwert oder fällt er bei der Plausibilisierung durch, bildet der [[messstellenbetrieb|Messstellenbetreiber]] einen **Ersatzwert**. Die gängigen Verfahren, in dieser Reihenfolge bevorzugt:",
        },
        {
          t: "ul",
          items: [
            "**Vorjahreswert** – derselbe Zeitraum des Vorjahres, bei Gas temperaturbereinigt",
            "**Vergleichswert** – ein vergleichbarer Zeitraum derselben Messlokation, etwa die Vorwoche beim Lastgang",
            "**Interpolation** – bei Lücken im Lastgang zwischen dem letzten und dem nächsten gültigen Wert",
            "**Schätzung nach Lastprofil** – der Jahresverbrauch wird über das [[lastprofil|Standardlastprofil]] auf den Zeitraum verteilt",
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "In der [[marktkommunikation|Marktkommunikation]] trägt jeder Wert in der `MSCONS` einen Status: **wahrer Wert** (gemessen), **Ersatzwert** (gebildet) oder **vorläufiger Wert** (noch nicht abschließend plausibilisiert). Ein Lieferant sieht damit, ob er einen gemessenen oder einen gerechneten Wert abrechnet.",
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
    related: ["verbrauch", "zaehler", "ersatzwertbildung", "obis-kennzahlen", "jahresabrechnung"],
    sources: [
      { label: "§ 40 EnWG – Strom- und Gasrechnungen", url: "https://www.gesetze-im-internet.de/enwg_2005/__40.html" },
      { label: "BDEW MaKo (vormals EDI@Energy) – MSCONS und Datenformate", url: "https://www.bdew-mako.de/" },
    ],
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
    updated: "2026-08-29",
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
            "bildet Tarifanwendungsfälle (TAF) ab – etwa TAF 1 für Jahresverbrauch, TAF 7 für den Zählerstandsgang",
          ],
        },
        { t: "h", level: 2, text: "Gateway-Administrator und sternförmige Kommunikation" },
        {
          t: "p",
          text: "Das Gateway spricht mit niemandem direkt. Es wird vom **Gateway-Administrator (GWA)** betrieben – in der Regel der [[messstellenbetrieb|Messstellenbetreiber]] oder ein von ihm beauftragter Dienstleister. Der GWA richtet das Gerät ein, verwaltet Zertifikate und Schlüssel, spielt Updates ein und konfiguriert, welche Daten in welchem Rhythmus an wen gehen. **Sternförmig** heißt: Das Gateway sendet jedem berechtigten Marktteilnehmer – Netzbetreiber, Lieferant, Direktvermarkter – genau seinen Ausschnitt, verschlüsselt und getrennt voneinander. Kein Empfänger sieht die Daten eines anderen, und kein Empfänger kann das Gateway selbst ansprechen.",
        },
        {
          t: "dl",
          items: [
            { term: "CLS-Kanal", def: "Der **Controllable-Local-Systems**-Kanal ist ein transparenter, verschlüsselter Tunnel durch das Gateway zu Geräten im Haus. Über ihn läuft die Steuerung nach [[paragraf-14a-enwg|§ 14a EnWG]] – das Gateway selbst misst nur, es steuert nicht." },
            { term: "Steuerbox", def: "Das Gerät am Ende des CLS-Kanals: Sie empfängt den Steuerbefehl des Netzbetreibers und schaltet oder dimmt [[waermepumpe|Wärmepumpe]], [[wallbox|Wallbox]] oder Speicher. Sie ersetzt den klassischen Rundsteuerempfänger." },
          ],
        },
        { t: "h", level: 2, text: "Zählerstandsgang oder Lastgang" },
        {
          t: "p",
          text: "Zwei Begriffe, die im Alltag oft gleichgesetzt werden, aber unterschiedliche Daten meinen:",
        },
        {
          t: "table",
          head: ["", "Zählerstandsgang (TAF 7)", "Viertelstunden-Lastgang (RLM)"],
          rows: [
            ["Was übertragen wird", "alle 15 Minuten ein **Zählerstand**, also der kumulierte Registerwert", "je Viertelstunde eine **Energiemenge** (kWh) beziehungsweise Leistung (kW)"],
            ["Woher", "iMSys über den GWA", "RLM-Zähler, siehe [[lastprofil|Lastprofil]]"],
            ["Verbrauch je Viertelstunde", "aus der Differenz zweier Stände berechnet", "direkt gemessen"],
            ["Lücken", "am Zählerstand erkennbar, der nächste Stand schließt sie", "müssen per Ersatzwert gefüllt werden"],
          ],
          caption: "Aus einem Zählerstandsgang lässt sich ein Lastgang ableiten, nicht umgekehrt.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Häufiges Missverständnis: Ein iMSys sendet **nicht** ständig Daten. Was übertragen wird, hängt vom Tarifanwendungsfall ab – bei einem Standardhaushalt ohne dynamischen Tarif oft nur wenige Werte im Jahr.",
        },
      ],
    },
    related: ["zaehlertypen", "messstellenbetrieb", "gateway-administrator", "zaehlzeitdefinitionen", "dynamischer-tarif", "paragraf-14a-enwg"],
    sources: [
      {
        label: "Bundesnetzagentur – Roll-out intelligenter Messsysteme",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/NetzzugangMesswesen/Mess-undZaehlwesen/iMSys/artikel.html",
      },
      { label: "§ 29 MsbG – Ausstattung von Messstellen", url: "https://www.gesetze-im-internet.de/messbg/__29.html" },
      { label: "MsbG im Volltext", url: "https://www.gesetze-im-internet.de/messbg/" },
    ],
  },

  {
    slug: "messstellenbetrieb",
    category: "messwesen",
    updated: "2026-08-29",
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
            "**Ersatzwertbildung** – wenn ein Wert fehlt, einen begründeten Wert bilden: Vorjahreswert, Vergleichswert, Interpolation oder Schätzung nach [[lastprofil|Lastprofil]]; in der `MSCONS` als Ersatzwert gekennzeichnet, siehe [[zaehlerstand|Zählerstand]]",
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
    sources: [
      { label: "MsbG im Volltext", url: "https://www.gesetze-im-internet.de/messbg/" },
    ],
  },

  {
    slug: "marktlokation",
    category: "messwesen",
    updated: "2026-08-29",
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
        { t: "h", level: 3, text: "So wird die Prüfziffer berechnet" },
        {
          t: "ol",
          items: [
            "Die ersten **10 Ziffern** sind die Nutzdaten, Positionen von links **1 bis 10** gezählt",
            "Ziffern auf **ungeraden** Positionen (1, 3, 5, 7, 9) addieren",
            "Ziffern auf **geraden** Positionen (2, 4, 6, 8, 10) addieren und die Summe **verdoppeln**",
            "beide Ergebnisse addieren; die Prüfziffer ist die Differenz zum nächsten Zehner: **(10 − Summe mod 10) mod 10**",
          ],
        },
        {
          t: "example",
          title: "Nutzdaten 4137356789",
          lines: [
            { label: "ungerade Positionen 4 + 3 + 3 + 6 + 8", value: "24" },
            { label: "gerade Positionen 1 + 7 + 5 + 7 + 9 = 29, verdoppelt", value: "58" },
            { label: "Summe", value: "82" },
            { label: "Prüfziffer (10 − 2) mod 10", value: "8" },
          ],
          result: { label: "MaLo-ID", value: "41373567898" },
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
    updated: "2026-08-29",
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
            "**33 Stellen**, alphanumerisch, Großbuchstaben",
            "Stellen 1–2: Ländercode **DE**",
            "Stellen 3–8: die **6-stellige Netzbetreibernummer** des [[netzbetreiber|Netzbetreibers]]",
            "Stellen 9–13: die **Postleitzahl** des Netzbetreibers (5 Stellen)",
            "Stellen 14–33: eine vom Netzbetreiber vergebene, eindeutige **20-stellige** alphanumerische Kennung",
          ],
        },
        {
          t: "quote",
          text: "DE 000562 66802 AO6G56M11SN51G21M24S",
          source: "Beispielhafter Aufbau – Ländercode (2), Netzbetreibernummer (6), Postleitzahl (5), lokale Kennung (20) = 33 Stellen",
        },
        {
          t: "note",
          kind: "info",
          text: "Die MeLo-ID ist strukturell identisch mit der alten **Zählpunktbezeichnung** nach DIN VDE. Bei der Umstellung 2018 wurden die bestehenden Zählpunktbezeichnungen einfach zur Messlokations-ID – wer eine 33-stellige Kennung aus einem Altsystem vor sich hat, hat damit bereits die MeLo-ID. Neu vergeben wurde nur die 11-stellige [[marktlokation|MaLo-ID]].",
        },
        {
          t: "note",
          kind: "warn",
          text: "Kunden verwechseln die MeLo-ID regelmäßig mit der Zählernummer, weil beide auf der Rechnung stehen. In Formularen hilft ein Rechnungs-Ausschnitt mit Markierung mehr als jede Erklärung im Fließtext.",
        },
      ],
    },
    related: ["marktlokation", "zaehler", "messstellenbetrieb"],
    sources: [
      {
        label: "BDEW – Anwendungshilfe Marktlokations-Identifikationsnummer",
        url: "https://www.bdew.de/service/anwendungshilfen/awh-neue-marktlokations-identifikationsnummer/",
      },
      { label: "BDEW MaKo (vormals EDI@Energy) – Datenformate der Marktkommunikation", url: "https://www.bdew-mako.de/" },
    ],
  },

  {
    slug: "lastprofil",
    category: "messwesen",
    updated: "2026-08-29",
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
          title: "Neue Profile ab 2025/2026",
          text: "Die Strom-Profile H0, G0 und L0 stammen aus den 1990er-Jahren – ohne Wärmepumpe, Wallbox und PV. Der BDEW hat sie neu erhoben: Die **Standardlastprofile 2025** heißen **H25** (Haushalt), **G25** (Gewerbe), **L25** (Landwirtschaft), **P25** (Haushalt mit PV-Anlage) und **S25** (Haushalt mit PV und Speicher). Sie werden ab 2025/2026 schrittweise von den Netzbetreibern eingeführt und lösen die alten Profile ab; in Systemen laufen beide Generationen eine Zeit lang parallel.",
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
            "**Strom**: ab **100.000 kWh** Jahresverbrauch (§ 12 StromNZV)",
            "**Gas**: ab **1,5 Mio. kWh** Jahresverbrauch oder ab **500 kWh/h** stündlicher Ausspeiseleistung (§ 24 GasNZV) – dort spricht man von Stundenwerten statt Viertelstunden",
            "Messung im **Viertelstundentakt**, tägliche Übertragung an den Netzbetreiber",
            "Grundlage für den [[leistungspreis|Leistungspreis]] und für [[blindarbeit|Blindarbeit]]",
            "auch bei kleineren Kunden möglich, wenn ein [[intelligentes-messsystem|iMSys]] verbaut ist",
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Die oft zitierte Grenze „30 kW oder 30.000 kWh“ ist **keine** RLM-Schwelle. Sie stammt aus der Konzessionsabgabenverordnung und definiert dort, ab wann ein Kunde als Sondervertragskunde den niedrigeren Satz der [[konzessionsabgabe|Konzessionsabgabe]] zahlt.",
        },
        {
          t: "note",
          kind: "tip",
          text: "Das ist der stille Umbruch des Smart-Meter-Rollouts: Je mehr Haushalte ein iMSys haben, desto weniger Prognose und desto mehr Messung. Standardlastprofile werden dadurch mittelfristig zum Sonderfall statt zum Normalfall.",
        },
      ],
    },
    related: ["bilanzkreis", "leistungspreis", "intelligentes-messsystem", "dynamischer-tarif"],
    sources: [
      { label: "§ 12 StromNZV – Zählerstandsgang und Lastgangmessung", url: "https://dejure.org/gesetze/StromNZV/12.html" },
      { label: "§ 24 GasNZV – Standardlastprofile", url: "https://dejure.org/gesetze/GasNZV/24.html" },
      { label: "BDEW – Standardlastprofile Strom", url: "https://www.bdew.de/energie/standardlastprofile-strom/" },
    ],
  },

  {
    slug: "gateway-administrator",
    category: "messwesen",
    level: "vertiefung",
    updated: U2,
    aka: ["GWA", "Smart-Meter-Gateway-Administrator", "SMGW-Admin", "Tarifanwendungsfall", "TAF", "CLS", "Steuerbox", "TR-03109", "HAN", "WAN", "LMN"],
    title: { de: "Gateway-Administrator (GWA)", en: "Gateway administrator" },
    summary: {
      de: "Die Marktrolle, die das Smart-Meter-Gateway betreibt: Sie konfiguriert, aktualisiert und verwaltet Schlüssel – und bestimmt, welche Messwerte in welchem Tarifanwendungsfall an wen gehen.",
      en: "The market role that operates the smart meter gateway: it configures, updates and manages keys – and decides which metered values go to whom under which tariff application case.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Smart-Meter-Gateway tut von sich aus nichts. Was es misst, wie oft es sendet und an wen, wird ihm von außen eingespielt – vom Gateway-Administrator. Wer verstehen will, warum ein Lieferantensystem bei einem [[intelligentes-messsystem|iMSys]] mal einen Jahreswert und mal 35.040 Viertelstundenwerte bekommt, muss diese Rolle kennen.",
        },
        { t: "h", level: 2, text: "Wer die Rolle ausfüllt" },
        {
          t: "p",
          text: "Nach § 25 MsbG ist der [[messstellenbetrieb|Messstellenbetreiber]] für die Administration des Gateways verantwortlich. Er kann die Aufgabe an einen Dienstleister vergeben – viele kleinere Netzbetreiber tun das –, bleibt aber rechtlich der Verantwortliche. Der GWA ist damit keine eigenständige Marktrolle im Sinne der [[marktrollen|Marktrollen der GPKE]], sondern eine technische Funktion, die der MSB erfüllen muss.",
        },
        {
          t: "dl",
          items: [
            { term: "Inbetriebnahme", def: "Das Gateway wird beim Einbau mit dem GWA verbunden, erhält seine Zertifikate und kennt danach genau einen Administrator." },
            { term: "Schlüssel- und Zertifikatsmanagement", def: "Jede Kommunikation ist signiert und verschlüsselt. Der GWA verwaltet die Zertifikate des Gateways und der angebundenen Marktteilnehmer in der Smart-Metering-PKI." },
            { term: "Konfiguration", def: "Welche Zähler angebunden sind, welche Tarifanwendungsfälle laufen, welche Empfänger welche Daten in welchem Takt bekommen – all das sind Konfigurationsprofile, die der GWA einspielt." },
            { term: "Firmware und Überwachung", def: "Updates, Zeitsynchronisation, Auswertung der Gateway-Protokolle, Störungsbehebung." },
            { term: "Datenweiterleitung", def: "Der GWA sorgt dafür, dass Messwerte die berechtigten Stellen erreichen – entweder direkt vom Gateway oder über den MSB in der [[marktkommunikation|Marktkommunikation]]." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Der GWA muss nach der Technischen Richtlinie BSI TR-03109-6 arbeiten und ein zertifiziertes Informationssicherheits-Managementsystem nach ISO 27001 betreiben. Das Gateway selbst ist nach dem Schutzprofil des BSI und der TR-03109-1 zertifiziert; sein **Sicherheitsmodul** – ein Kryptochip, vergleichbar mit einer Smartcard – nach der TR-03109-2. Ohne diese Zertifizierung darf ein Gerät nicht als intelligentes Messsystem eingesetzt werden (§§ 21, 22 [[msbg|MsbG]]).",
        },
        { t: "h", level: 2, text: "Drei Schnittstellen, drei Netze" },
        {
          t: "table",
          head: ["Schnittstelle", "Verbindet", "Beispiele"],
          rows: [
            ["**LMN** – Local Metrological Network", "Gateway ↔ Zähler", "Stromzähler, Gas-, Wasser-, Wärmezähler; drahtgebunden oder per Funk (wireless M-Bus)"],
            ["**HAN** – Home Area Network", "Gateway ↔ Gebäude", "Anzeige für den Anschlussnutzer, Servicetechniker, **CLS-Geräte** wie die Steuerbox"],
            ["**WAN** – Wide Area Network", "Gateway ↔ Außenwelt", "Ausschließlich zum GWA und zu den konfigurierten externen Marktteilnehmern; über Mobilfunk, LTE-450, Powerline oder DSL"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Aus dem WAN kann niemand eine Verbindung zum Gateway aufbauen. Das Gateway ruft selbst an – beim GWA und bei den Empfängern, die der GWA eingetragen hat. Das ist der Kern des Sicherheitskonzepts und der Grund, warum ein Lieferant technisch gar nicht „auf den Zähler zugreifen“ kann.",
        },
        { t: "h", level: 2, text: "Sternförmige Kommunikation" },
        {
          t: "p",
          text: "Das Gateway verteilt Messwerte **sternförmig**: Für jeden berechtigten Empfänger wird ein eigener, verschlüsselter Datensatz erzeugt, der nur das enthält, was dieser Empfänger für seinen Zweck braucht. Berechtigte Stellen sind der [[netzbetreiber|Netzbetreiber]] für Netzführung und Bilanzierung, der Lieferant für die Abrechnung, der Messstellenbetreiber, bei Erzeugungsanlagen der Direktvermarkter – und der Anschlussnutzer selbst über die HAN-Schnittstelle. Wer was erhalten darf, gibt das [[msbg|MsbG]] vor, nicht der Empfänger (siehe [[datenschutz-energiedaten|Datenschutz bei Energiedaten]]).",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für die Systemlandschaft eines Lieferanten oder Netzbetreibers heißt das: Die Messwerte kommen **nicht** aus dem Gateway ins eigene System. Sie kommen als `MSCONS`-Nachricht über die [[marktkommunikation|Marktkommunikation]] vom Messstellenbetreiber – mit [[marktlokation|MaLo]]- und [[messlokation|MeLo]]-ID, [[obis-kennzahlen|OBIS-Kennzahl]] und Status je Wert. Ob dahinter ein Ferraris-Zähler oder ein iMSys steckt, sieht das empfangende System nur an Auflösung und Herkunft der Werte. Die Direktanbindung an das Gateway als sogenannter externer Marktteilnehmer bleibt in der Praxis meist dem MSB vorbehalten.",
        },
        { t: "h", level: 2, text: "Tarifanwendungsfälle (TAF)" },
        {
          t: "p",
          text: "Ein Tarifanwendungsfall ist ein vom BSI standardisiertes Verarbeitungsmuster im Gateway: Er legt fest, welche Messwerte aus welchem Zähler in welcher Auflösung gebildet, gespeichert und versendet werden. Der GWA aktiviert je Messlokation einen oder mehrere TAF – auf Bestellung des Lieferanten oder Netzbetreibers über den Messstellenbetreiber.",
        },
        {
          t: "table",
          head: ["TAF", "Name", "Was das Gateway liefert", "Typischer Anlass"],
          rows: [
            ["TAF 1", "Datensparsame Tarife", "Einen Zählerstand je Abrechnungsperiode, keine Verbrauchswerte im Inneren", "Standardhaushalt ohne besonderen Tarif"],
            ["TAF 2", "Zeitvariable Tarife", "Verbrauch je definiertem Zeitfenster (Tarifstufe), im Gateway summiert", "HT/NT-Tarife, [[zaehlzeitdefinitionen|Zählzeitdefinitionen]], zeitvariable Netzentgelte"],
            ["TAF 6", "Ablesung im Bedarfsfall", "Einen aktuellen Zählerstand auf Anforderung", "Umzug, Lieferantenwechsel, Zwischenablesung"],
            ["TAF 7", "Zählerstandsgang", "Alle 15 Minuten einen Zählerstand", "[[dynamischer-tarif|Dynamische Tarife]], Bilanzierung mit echten Werten statt Lastprofil"],
            ["TAF 9", "Ist-Einspeisung", "Aktuelle Einspeiseleistung einer Erzeugungsanlage", "Direktvermarktung, Einspeisemanagement"],
            ["TAF 10", "Netzzustandsdaten", "Spannung, Strom, Frequenz, Phasenwinkel am Netzanschluss", "Netzführung des Verteilnetzbetreibers"],
            ["TAF 14", "Hochfrequente Messwerte", "Werte im Sekunden- bis Minutentakt für Mehrwertdienste", "Energiemanagement, Visualisierung – nur mit Einwilligung des Anschlussnutzers"],
          ],
          caption: "Auswahl. Die Richtlinie kennt weitere Fälle, etwa TAF 3 bis 5 (last-, verbrauchs- und ereignisvariable Tarife), TAF 8 (Extremwerte) und TAF 13 (Visualisierung für den Letztverbraucher).",
        },
        {
          t: "note",
          kind: "warn",
          text: "Ein TAF wird nicht rückwirkend aktiv. Wer für einen Kunden einen dynamischen Tarif ab dem 1. des Monats abrechnen will, braucht einen laufenden TAF 7 ab diesem Tag – die Bestellung beim MSB geht der Tarifumstellung also zwingend voraus. Fehlt sie, gibt es für den Zeitraum nur den Zählerstand nach TAF 1 und die Abrechnung fällt auf das [[lastprofil|Standardlastprofil]] zurück.",
        },
        { t: "h", level: 2, text: "CLS-Kanal und Steuerbox" },
        {
          t: "p",
          text: "Messen und Steuern sind im iMSys getrennt. Das Gateway misst; steuern tut ein Gerät im HAN, die **Steuerbox**, die über den **CLS-Kanal** (Controllable Local Systems) angesprochen wird. Der CLS-Kanal ist ein transparenter, vom Gateway aufgebauter und verschlüsselter Tunnel: Der berechtigte externe Marktteilnehmer – für [[paragraf-14a-enwg|§ 14a EnWG]] der Netzbetreiber, für das Einspeisemanagement ebenfalls der Netzbetreiber oder der Direktvermarkter – spricht durch das Gateway hindurch mit der Steuerbox, ohne dass das Gateway den Inhalt versteht oder verändert.",
        },
        {
          t: "steps",
          items: [
            { title: "Berechtigung konfigurieren", text: "Der GWA trägt den steuernden Marktteilnehmer als aktiven externen Marktteilnehmer für diesen CLS-Kanal ein." },
            { title: "Kanal aufbauen", text: "Das Gateway öffnet den Tunnel – wiederum von innen nach außen, nie umgekehrt." },
            { title: "Steuerbefehl senden", text: "Der Netzbetreiber übermittelt etwa „Bezugsleistung auf 4,2 kW begrenzen“ an die Steuerbox." },
            { title: "Umsetzen und protokollieren", text: "Die Steuerbox schaltet oder dimmt die [[waermepumpe|Wärmepumpe]], [[wallbox|Wallbox]] oder den [[batteriespeicher|Speicher]]. Das Gateway protokolliert den Vorgang; der Kunde kann ihn über die HAN-Schnittstelle nachvollziehen." },
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für ein Produkt rund um Wärmepumpe oder Wallbox bedeutet das eine Bestellkette: iMSys **plus** Steuerbox **plus** CLS-Konfiguration – drei Positionen, drei mögliche Verzögerungen, ein Einbautermin. Wer den Kunden nur „einen Smart Meter“ verspricht, unterschätzt das regelmäßig.",
        },
      ],
    },
    related: ["intelligentes-messsystem", "messstellenbetrieb", "zaehlzeitdefinitionen", "paragraf-14a-enwg", "marktkommunikation", "datenschutz-energiedaten"],
    sources: [
      { label: "§ 25 MsbG – Aufgaben des Smart-Meter-Gateway-Administrators", url: "https://www.gesetze-im-internet.de/messbg/__25.html" },
      { label: "§ 21 MsbG – Mindestanforderungen an intelligente Messsysteme", url: "https://www.gesetze-im-internet.de/messbg/__21.html" },
      { label: "§ 22 MsbG – Schutzprofile und Technische Richtlinien", url: "https://www.gesetze-im-internet.de/messbg/__22.html" },
      { label: "BSI – Smart Metering, Technische Richtlinie TR-03109", url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Smart-metering/smart-metering_node.html" },
      { label: "BDEW MaKo (vormals EDI@Energy) – Datenformate der Marktkommunikation", url: "https://www.bdew-mako.de/" },
    ],
  },

  {
    slug: "ersatzwertbildung",
    category: "messwesen",
    level: "vertiefung",
    updated: U2,
    aka: ["Ersatzwert", "Plausibilisierung", "Schätzung", "Interpolation", "Metering Code", "VDE-AR-N 4400", "Vorjahreswert", "Vergleichswert"],
    title: { de: "Ersatzwertbildung", en: "Substitute values" },
    summary: {
      de: "Das geregelte Verfahren, mit dem ein fehlender oder unplausibler Messwert durch einen begründeten Rechenwert ersetzt wird – gekennzeichnet, nachvollziehbar und korrigierbar.",
      en: "The regulated procedure for replacing a missing or implausible metered value with a justified calculated value – flagged, traceable and correctable.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Kein Messsystem liefert lückenlos. Zähler fallen aus, Karten werden nicht zurückgeschickt, ein Funkmodul hat drei Tage keinen Empfang. Damit Abrechnung und Bilanzierung trotzdem weiterlaufen, gibt es ein geregeltes Verfahren, aus dem, was man weiß, den Wert zu bilden, der fehlt. Der Ersatzwert ist kein Notbehelf, sondern ein definiertes Datenobjekt mit eigenem Status.",
        },
        { t: "h", level: 2, text: "Wann ein Ersatzwert nötig ist" },
        {
          t: "ul",
          items: [
            "**Fehlender Zählerstand** – keine Ablesung zum Stichtag, weder durch den Messstellenbetreiber noch durch den Kunden",
            "**Messgerätausfall** – der Zähler oder die Kommunikation liefert für einen Zeitraum nichts",
            "**Unplausibler Wert** – die Ablesung ist da, hält aber der Prüfung nicht stand (siehe unten)",
            "**Lücken im Lastgang** – einzelne oder viele Viertelstunden einer RLM- oder iMSys-Messung fehlen",
            "**Stichtag ohne Ablesung** – Preisänderung, Lieferantenwechsel oder Umzug zwischen zwei realen Ablesungen",
          ],
        },
        { t: "h", level: 2, text: "Wer ihn bildet" },
        {
          t: "dl",
          items: [
            { term: "Messstellenbetreiber", def: "Zuständig für die Messwerte selbst: Er plausibilisiert, bildet den Ersatzwert und übermittelt ihn gekennzeichnet an [[netzbetreiber|Netzbetreiber]] und Lieferant. Das ist Teil der Messwertaufbereitung nach [[msbg|MsbG]]." },
            { term: "Netzbetreiber", def: "Zuständig für die Bilanzierung: Fehlt ihm ein Lastgang für die [[bilanzkreis|Bilanzkreisabrechnung]], bildet er nach den Regeln der MaBiS einen Ersatzlastgang, damit der Bilanzkreis vollständig bleibt." },
            { term: "Lieferant", def: "Bildet keine Ersatzwerte im messtechnischen Sinn. Er darf aber für die Abrechnung schätzen, wenn kein Wert vorliegt – nach § 11 StromGVV auf Grundlage der letzten Ablesung oder des Verbrauchs vergleichbarer Kunden – und muss das auf der Rechnung kenntlich machen." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "Die messtechnischen Verfahren stehen im **Metering Code** VDE-AR-N 4400 des VDE FNN, der die Anforderungen an Messung, Plausibilisierung und Ersatzwertbildung im Strommarkt beschreibt. Die Kennzeichnungspflicht auf der Rechnung folgt aus § 40 Abs. 2 [[enwg|EnWG]]: Jeder Zählerstand ist als abgelesen, vom Kunden gemeldet oder geschätzt auszuweisen.",
        },
        { t: "h", level: 2, text: "Plausibilisierung: der Schritt davor" },
        {
          t: "p",
          text: "Bevor ein Wert als wahr gilt, wird er geprüft. Fällt er durch, wird er ersetzt – auch wenn er physisch abgelesen wurde.",
        },
        {
          t: "table",
          head: ["Prüfung", "Frage", "Typische Ursache bei Verstoß"],
          rows: [
            ["Grenzwert", "Liegt der Verbrauch im Vergleich zu Vorjahr oder Prognose in einem erwartbaren Band?", "Ablesefehler, vertauschte Ziffern, verändertes Nutzerverhalten"],
            ["Negativverbrauch", "Ist der neue Stand kleiner als der alte?", "Zählerwechsel ohne Ausbau-/Einbaustand, Zählerüberlauf, HT und NT vertauscht, Nachkommastellen mitgelesen"],
            ["Nullverbrauch", "Hat sich der Stand über Monate gar nicht bewegt?", "Leerstand – oder ein stehender Zähler"],
            ["Sprung", "Passt der Verbrauch eines Teilzeitraums zum Rest?", "Falsches Ablesedatum, Wert einer anderen Messlokation"],
            ["Lastgang", "Fehlen Viertelstunden, gibt es Ausreißer oder Vorzeichenfehler?", "Kommunikationsabbruch, Wandlerfaktor falsch hinterlegt"],
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Der **Zählerüberlauf** ist der Klassiker unter den falsch behandelten Negativverbräuchen: Ein Zähler mit fünf Vorkommastellen springt von 99.999 auf 00.000. Der wahre Verbrauch ist dann neuer Stand + 100.000 − alter Stand. Ein System, das hier stur „Negativverbrauch = Fehler“ meldet, produziert einen unnötigen Klärfall; eines, das den Überlauf automatisch annimmt, ohne den Zählerwechsel auszuschließen, produziert eine falsche Rechnung.",
        },
        { t: "h", level: 2, text: "Verfahren für Zählerstände" },
        {
          t: "table",
          head: ["Verfahren", "Wie", "Wann geeignet"],
          rows: [
            ["**Vorjahreswert**", "Verbrauch desselben Zeitraums im Vorjahr, bei Gas temperaturbereinigt über Gradtagzahlen", "Etablierte Verbrauchsstelle, unveränderte Nutzung"],
            ["**Lastprofil-Hochrechnung**", "Jahresverbrauchsprognose mit dem [[lastprofil|Standardlastprofil]] auf den Zeitraum verteilt", "Standardfall bei SLP-Kunden, insbesondere für Stichtagsabgrenzungen"],
            ["**Interpolation**", "Verbrauch zwischen zwei realen Ständen linear – tagesanteilig oder profilgewichtet – auf den Stichtag verteilt", "Stichtag liegt zwischen zwei Ablesungen (siehe Beispiel)"],
            ["**Vergleichswert**", "Verbrauch vergleichbarer Kunden oder Zeiträume", "Neukunde ohne Historie"],
            ["**Kundenschätzung**", "Der Kunde meldet einen geschätzten Stand", "Nur nachrangig; muss ebenfalls plausibilisiert werden"],
          ],
        },
        {
          t: "example",
          title: "Interpolation auf einen Stichtag (tagesanteilig)",
          lines: [
            { label: "Ablesung 1 am 1. März 2026", value: "12.480 kWh" },
            { label: "Ablesung 2 am 15. Mai 2026", value: "13.230 kWh" },
            { label: "Verbrauch zwischen den Ablesungen", value: "750 kWh in 75 Tagen" },
            { label: "Tagesdurchschnitt", value: "10 kWh/Tag" },
            { label: "Stichtag: Preisänderung zum 1. April", value: "31 Tage nach Ablesung 1" },
            { label: "Verbrauch bis Stichtag", value: "31 × 10 = 310 kWh" },
          ],
          result: { label: "Ersatz-Zählerstand zum 1. April", value: "12.790 kWh" },
        },
        {
          t: "note",
          kind: "praxis",
          text: "Tagesanteilig ist bei Strom in der Regel ausreichend, bei Gas fast immer falsch: Der März verbraucht ein Vielfaches des Mai. Dort wird derselbe Zeitraum mit den Gradtagzahlen oder dem Gasprofil gewichtet, siehe [[thermische-gasabrechnung|thermische Gasabrechnung]]. Eine Abrechnungsengine sollte das Gewichtungsverfahren je Sparte konfigurierbar und im Ergebnis nachvollziehbar machen – der Kunde fragt bei einer [[preisanpassung|Preisanpassung]] genau danach.",
        },
        { t: "h", level: 2, text: "Verfahren für Lastgänge" },
        {
          t: "p",
          text: "Ein Lastgang hat 96 Werte am Tag. Fehlen einzelne, ist das ein anderes Problem als ein fehlender Jahresstand – die Lücke muss in derselben Auflösung geschlossen werden.",
        },
        {
          t: "ul",
          items: [
            "**Interpolation kurzer Lücken** – wenige fehlende Viertelstunden werden linear zwischen dem letzten und dem nächsten gültigen Wert aufgefüllt",
            "**Vortag- oder Vorwochenverfahren** – längere Lücken werden mit dem Lastgang desselben Zeitfensters am Vortag oder, besser, am gleichen Wochentag der Vorwoche gefüllt, gegebenenfalls skaliert",
            "**Vergleichs-Lastgang** – wo kein eigener Referenztag existiert, ein Lastgang einer vergleichbaren Messlokation oder ein Profil",
            "**Abgleich mit dem Zählerstand** – liegt der Zählerstand vor und nach der Lücke vor, wird der Ersatzlastgang so skaliert, dass die Summe der Energiemenge stimmt",
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Beim [[intelligentes-messsystem|Zählerstandsgang]] eines iMSys ist der letzte Punkt entscheidend: Weil jeder Viertelstundenwert ein Zählerstand ist, schließt der erste Wert nach der Lücke die Energiebilanz automatisch. Ersetzt werden muss nur die zeitliche Verteilung innerhalb der Lücke, nicht die Menge.",
        },
        { t: "h", level: 2, text: "Status in der Marktkommunikation" },
        {
          t: "p",
          text: "In der `MSCONS`-Nachricht trägt jeder Wert eine Statuskennzeichnung. Das Empfängersystem muss sie auswerten, nicht nur den Zahlenwert.",
        },
        {
          t: "dl",
          items: [
            { term: "Wahrer Wert", def: "Gemessen und plausibilisiert. Abrechnungsgrundlage ohne Vorbehalt." },
            { term: "Ersatzwert", def: "Gebildet nach einem der oben genannten Verfahren. Abrechnungsfähig, aber auf der Rechnung als geschätzt zu kennzeichnen und bei Eintreffen des wahren Werts zu korrigieren." },
            { term: "Vorläufiger Wert", def: "Übermittelt, bevor die Plausibilisierung abgeschlossen ist. Für Prognosen und Zwischeninformationen nutzbar, nicht für die Schlussabrechnung." },
            { term: "Prognosewert", def: "Kein Messwert, sondern eine Erwartung – in bestimmten Prozessen als solcher übermittelt, etwa als Basis für Abschläge oder Bilanzierungsprognosen." },
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Speichern Sie den Status **am Wert**, nicht nur an der Rechnung. Wird später ein wahrer Wert nachgeliefert, muss das System erkennen, welche Rechnungen auf dem Ersatzwert beruhen, und eine [[rechnungskorrektur|Rechnungskorrektur]] anstoßen. Ohne diese Verknüpfung landet die Nachlieferung im Nirgendwo – der Kunde hat dann eine geschätzte Rechnung und einen richtigen Zählerstand, die einander nie begegnen.",
        },
        { t: "h", level: 2, text: "Wenn der wahre Wert doch kommt" },
        {
          t: "steps",
          items: [
            { title: "Eingang und Zuordnung", text: "Der nachgelieferte Wert trifft per `MSCONS` ein und wird derselben Messlokation und demselben Zeitraum zugeordnet." },
            { title: "Ersatzwert ablösen", text: "Der Ersatzwert bleibt historisiert erhalten, verliert aber seine Gültigkeit für die Abrechnung." },
            { title: "Betroffene Rechnungen ermitteln", text: "Alle Rechnungen, die auf dem Ersatzwert beruhen – auch Folgeperioden, deren Anfangsstand er war." },
            { title: "Korrigieren", text: "Storno und Neuberechnung nach den Regeln der [[rechnungskorrektur|Rechnungskorrektur]]; Differenz als Nachzahlung oder Guthaben, siehe [[nachzahlung-guthaben|Nachzahlung und Guthaben]]." },
          ],
        },
      ],
    },
    related: ["zaehlerstand", "lastprofil", "messstellenbetrieb", "rechnungskorrektur", "marktkommunikation", "verbrauch"],
    sources: [
      { label: "§ 40 EnWG – Strom- und Gasrechnungen (Kennzeichnung geschätzter Werte)", url: "https://www.gesetze-im-internet.de/enwg_2005/__40.html" },
      { label: "§ 11 StromGVV – Ablesung und Schätzung", url: "https://www.gesetze-im-internet.de/stromgvv/__11.html" },
      { label: "VDE FNN – Metering Code VDE-AR-N 4400", url: "https://www.vde.com/de/fnn" },
      { label: "BDEW MaKo (vormals EDI@Energy) – MSCONS und weitere Datenformate", url: "https://www.bdew-mako.de/" },
    ],
  },

  {
    slug: "zaehlzeitdefinitionen",
    category: "messwesen",
    level: "vertiefung",
    updated: U2,
    aka: ["Zählzeitdefinition", "Zählzeit", "Konfigurations-ID", "Zählzeitregister", "Zeitfenster", "MaKo 2025", "Schaltzeiten"],
    title: { de: "Zählzeitdefinitionen und Konfigurations-ID", en: "Metering time definitions and configuration ID" },
    summary: {
      de: "Das MaKo-Objekt, das festlegt, welche Viertelstunde in welches Zählregister fällt – die Grundlage für zeitvariable Netzentgelte und zeitvariable Tarife auf einem intelligenten Messsystem.",
      en: "The market communication object that defines which quarter hour falls into which meter register – the basis for time-variable grid fees and time-variable tariffs on a smart metering system.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein HT/NT-Zähler wusste früher selbst, wann Nacht ist: Eine Schaltuhr oder ein Rundsteuerempfänger schaltete das Register um, und der Netzbetreiber hatte die Zeiten irgendwo in einem PDF stehen. Mit zeitvariablen Netzentgelten und dynamischen Tarifen reicht das nicht mehr. Die Zeitfenster müssen als Daten zwischen den Marktpartnern ausgetauscht werden – das ist die Zählzeitdefinition.",
        },
        { t: "h", level: 2, text: "Was eine Zählzeitdefinition ist" },
        {
          t: "p",
          text: "Eine Zählzeitdefinition ordnet jedem Zeitpunkt eines Kalenders genau ein **Zählzeitregister** zu. Sie besteht aus einer eindeutigen Kennung, einem Gültigkeitszeitraum und einer Menge von Zeitfenstern, die zusammen jede Viertelstunde des Jahres abdecken – lückenlos und überschneidungsfrei. Aus dem Zählerstandsgang eines [[intelligentes-messsystem|iMSys]] lässt sich damit der Verbrauch je Register bilden: Jede Viertelstunde wird nach ihrem Zeitstempel einem Register zugeordnet und dort aufsummiert.",
        },
        {
          t: "dl",
          items: [
            { term: "Zählzeitregister", def: "Das Ziel der Zuordnung – zum Beispiel „Hochlast“, „Standard“, „Niedriglast“ oder klassisch HT und NT. Fachlich entspricht es dem [[zaehlwerk|Zählwerk]] eines Mehrtarifzählers, existiert aber als Rechenregister, nicht zwingend als Hardware." },
            { term: "Zeitfenster", def: "Ein Zeitraum innerhalb eines Tagestyps – etwa werktags 17:00 bis 20:00 Uhr –, der einem Register zugewiesen ist. Tagestypen unterscheiden Werktag, Samstag, Sonntag und Feiertag." },
            { term: "Konfigurations-ID", def: "Die Kennung des konkreten Bündels aus Zählzeitdefinition, Registern und Zuordnungen, das an einer Marktlokation gilt. Ändert sich das Bündel, entsteht eine neue ID – so bleibt eindeutig, nach welcher Konfiguration ein Wert gebildet wurde." },
          ],
        },
        { t: "h", level: 2, text: "Wer definiert – und wofür" },
        {
          t: "table",
          head: ["Definiert durch", "Zweck", "Beispiel"],
          rows: [
            ["[[netzbetreiber|Netzbetreiber]]", "[[zeitvariable-netzentgelte|Zeitvariable Netzentgelte]], insbesondere Modul 3 nach [[paragraf-14a-enwg|§ 14a EnWG]]", "Drei Zeitfenster je Netzgebiet mit Hoch-, Standard- und Niedriglastpreis"],
            ["Lieferant", "Zeitvariabler Tarif gegenüber dem Kunden", "Zwei Register für einen HT/NT-Tarif oder mehrere Stufen für einen Zeitzonentarif"],
          ],
          caption: "Beide können an derselben Marktlokation nebeneinander gelten: Das Netzentgelt folgt der Definition des Netzbetreibers, der Arbeitspreis der des Lieferanten.",
        },
        {
          t: "note",
          kind: "info",
          text: "Zählzeitdefinitionen wurden mit den Marktprozessen zur **MaKo 2025** als eigenes Stammdatenobjekt eingeführt, gerade weil § 14a Modul 3 und dynamische Tarife die alten, informell gepflegten Schaltzeiten überfordern. Ausgetauscht werden sie über `UTILMD`-Nachrichten – der Netzbetreiber übermittelt seine Definitionen an die Lieferanten und Messstellenbetreiber in seinem Netzgebiet, der Lieferant seine an den Messstellenbetreiber, der sie im Gateway umsetzt. Die genauen Segmente und Fristen stehen in der jeweils gültigen UTILMD-Version und den Anwendungshilfen des BDEW.",
        },
        { t: "h", level: 2, text: "Von der Viertelstunde zum Register" },
        {
          t: "steps",
          items: [
            { title: "Zeitreihe beschaffen", text: "Der Zählerstandsgang (TAF 7) liefert alle 15 Minuten einen Zählerstand; die Differenzen sind die Viertelstundenverbräuche. Alternativ bildet das Gateway die Registerwerte selbst (TAF 2), wenn ihm die Zählzeitdefinition über den [[gateway-administrator|Gateway-Administrator]] eingespielt wurde." },
            { title: "Tagestyp bestimmen", text: "Für jeden Kalendertag: Werktag, Samstag, Sonntag oder Feiertag – nach dem Feiertagskalender, den die Definition vorgibt." },
            { title: "Zeitfenster zuordnen", text: "Jede Viertelstunde wird anhand von Tagestyp und Uhrzeit dem passenden Zeitfenster und damit einem Register zugewiesen." },
            { title: "Aggregieren", text: "Die Verbräuche je Register werden über den Abrechnungszeitraum summiert und wie Zählwerksverbräuche abgerechnet – mit dem Preis des jeweiligen Registers." },
          ],
        },
        {
          t: "example",
          title: "Drei Register an einem Werktag (vereinfacht)",
          lines: [
            { label: "Hochlast 17:00–20:00, 12 Viertelstunden à 0,75 kWh", value: "9 kWh" },
            { label: "Niedriglast 00:00–06:00, 24 Viertelstunden à 0,25 kWh", value: "6 kWh" },
            { label: "Standard, übrige 60 Viertelstunden à 0,30 kWh", value: "18 kWh" },
          ],
          result: { label: "Tagesverbrauch, Summe aller Register", value: "33 kWh" },
        },
        {
          t: "note",
          kind: "praxis",
          text: "Die Kontrollsumme ist Ihr Freund: Summe aller Register = Gesamtverbrauch nach [[obis-kennzahlen|OBIS]] 1.8.0. Stimmt sie nicht, ist eine Viertelstunde doppelt oder gar nicht zugeordnet – fast immer an einem Tag der Zeitumstellung.",
        },
        { t: "h", level: 2, text: "Kalender, Feiertage, Zeitumstellung" },
        {
          t: "p",
          text: "Die Zuordnung hängt an drei Dingen, die jedes für sich harmlos wirken und zusammen die meisten Fehler produzieren.",
        },
        {
          t: "dl",
          items: [
            { term: "Feiertage", def: "Sind in Deutschland Ländersache. Fronleichnam ist in Bayern ein Feiertag, in Hamburg nicht. Der Netzbetreiber legt fest, welcher Feiertagskalender für sein Netzgebiet gilt – und ob ein Feiertag wie ein Sonntag behandelt wird." },
            { term: "Sommer-/Winterzeit", def: "Der Tag der Umstellung auf Sommerzeit hat **23 Stunden** (92 Viertelstunden), der Tag der Rückstellung **25 Stunden** (100 Viertelstunden). Im Oktober gibt es die Viertelstunden zwischen 02:00 und 03:00 Uhr Lokalzeit **zweimal**." },
            { term: "Zeitzone der Messwerte", def: "Gateways und Marktkommunikation arbeiten mit UTC. Ein Zeitfenster „17:00 bis 20:00“ ist aber Lokalzeit. Die Umrechnung muss je Kalendertag erfolgen, nicht mit einem festen Offset." },
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Der häufigste Fehler in Abrechnungsengines: Zeitstempel als Lokalzeit ohne Zonenangabe zu speichern. Am Tag der Rückstellung existieren dann zwei Werte mit dem Zeitstempel 02:15 – einer wird überschrieben, eine Viertelstunde fehlt, die Kontrollsumme stimmt nicht. Speichern Sie Messwerte in UTC oder mit expliziter Zonenkennung und wenden Sie die Zählzeitdefinition beim Auswerten an, nicht beim Speichern.",
        },
        { t: "h", level: 2, text: "Verhältnis zu HT/NT und § 14a Modul 3" },
        {
          t: "p",
          text: "Ein klassischer Doppeltarifzähler ist der Sonderfall einer Zählzeitdefinition mit zwei Registern, festen Schaltzeiten und einer Umsetzung in Hardware. Die Zählzeitdefinition verallgemeinert das: beliebig viele Register, tagestypabhängige Fenster, jährliche Änderbarkeit, Umsetzung als Rechenregel auf Viertelstundenwerten. Für [[paragraf-14a-enwg|§ 14a Modul 3]] ist genau das die technische Voraussetzung – der Netzbetreiber definiert mindestens drei Zeitfenster mit unterschiedlichen Arbeitspreisen im Netzentgelt, und ohne iMSys und Zählzeitdefinition lässt sich das nicht abrechnen.",
        },
        {
          t: "note",
          kind: "info",
          text: "Ein [[dynamischer-tarif|dynamischer Tarif]] braucht keine Zählzeitdefinition: Dort hat jede Viertelstunde ihren eigenen Preis, es gibt also 35.040 „Register“ im Jahr. Zeitvariable Tarife mit festen Fenstern und dynamische Tarife mit Börsenpreisen sind zwei verschiedene Produkte auf derselben Datenbasis.",
        },
        { t: "h", level: 2, text: "Was eine Abrechnungsengine braucht" },
        {
          t: "ul",
          items: [
            "Einen **Zeitzonenkalender** mit Feiertagen je Bundesland beziehungsweise je Netzgebiet, inklusive der Regeln für Zeitumstellungstage",
            "Zählzeitdefinitionen als **versionierte Stammdaten** mit Gültigkeitszeitraum – die Definition für 2026 darf die für 2025 nicht überschreiben, weil Korrekturrechnungen die alte noch brauchen",
            "Die **Konfigurations-ID** an jedem daraus gebildeten Registerwert, damit nachvollziehbar bleibt, nach welcher Regel er entstand",
            "Zwei parallele Zuordnungen je Marktlokation: eine für das Netzentgelt (Definition des Netzbetreibers), eine für den Tarif (Definition des Lieferanten)",
            "Eine **Kontrollsummenprüfung** gegen den Gesamtverbrauch und eine Fehlerbehandlung für Viertelstunden ohne Zuordnung",
            "Den Fallback auf die Zählwerke eines Mehrtarifzählers, wenn kein iMSys verbaut ist – dort liefert der Zähler die Registerstände, und die Zählzeitdefinition dient nur zur Dokumentation der Schaltzeiten",
          ],
        },
      ],
    },
    related: ["zeitvariable-netzentgelte", "paragraf-14a-enwg", "dynamischer-tarif", "zaehlwerk", "intelligentes-messsystem", "gateway-administrator"],
    sources: [
      { label: "§ 14a EnWG – Netzorientierte Steuerung steuerbarer Verbrauchseinrichtungen", url: "https://www.gesetze-im-internet.de/enwg_2005/__14a.html" },
      { label: "BDEW – Marktkommunikation und Anwendungshilfen", url: "https://www.bdew.de/" },
      { label: "BDEW MaKo (vormals EDI@Energy) – UTILMD und weitere Datenformate", url: "https://www.bdew-mako.de/" },
    ],
  },
];
