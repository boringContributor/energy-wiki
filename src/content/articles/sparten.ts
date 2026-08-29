import type { Article } from "../types";

const U = "2026-08-01";
const U2 = "2026-08-29";

export const spartenArticles: Article[] = [
  {
    slug: "strom",
    category: "sparten",
    level: "basis",
    updated: U2,
    aka: ["Elektrizität", "Stromlieferung", "Strommarkt"],
    title: { de: "Strom", en: "Electricity" },
    summary: {
      de: "Die einzige Sparte, in der Erzeugung und Verbrauch in jeder Sekunde exakt gleich groß sein müssen – daraus folgt fast alles andere.",
      en: "The only commodity where generation and consumption must match exactly every second – nearly everything else follows from that.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Strom lässt sich im Netz nicht speichern. Was in einer Sekunde eingespeist wird, muss in derselben Sekunde entnommen werden – sonst kippt die Frequenz. Diese physikalische Eigenheit erklärt den Börsenhandel, die [[bilanzkreis|Bilanzkreise]], die Regelenergie und am Ende auch die [[dynamischer-tarif|dynamischen Tarife]].",
        },
        { t: "h", level: 2, text: "Kennzahlen eines Haushalts" },
        {
          t: "stats",
          items: [
            { value: "1.500 kWh", label: "Single-Haushalt", hint: "Wohnung, kein elektrisches Warmwasser" },
            { value: "3.500 kWh", label: "Referenzhaushalt", hint: "gängige Rechengröße im Markt" },
            { value: "4.500 kWh", label: "Familie im Haus", hint: "ohne Wärmepumpe und E-Auto" },
          ],
        },
        {
          t: "p",
          text: "Größenordnungen nach dem BDEW-Stromspiegel und der BDEW-Publikation „Energiemarkt Deutschland“; die tatsächlichen Werte streuen je nach Warmwasserbereitung, Gebäude und Haushaltsgröße erheblich.",
        },
        {
          t: "p",
          text: "Eine Wärmepumpe legt schnell 3.000 bis 6.000 kWh drauf, ein Elektroauto bei 15.000 Kilometern rund 2.500 kWh. Genau diese Kunden sind für [[intelligentes-messsystem|intelligente Messsysteme]] und [[paragraf-14a-enwg|§ 14a EnWG]] relevant.",
        },
        { t: "h", level: 2, text: "Was den Preis ausmacht" },
        { t: "figure", id: "strompreis-stack" },
        { t: "h", level: 2, text: "Besonderheiten in der Abwicklung" },
        {
          t: "ul",
          items: [
            "Gemessen und abgerechnet wird in kWh – keine Umrechnung nötig, anders als bei [[erdgas|Gas]]",
            "Einspeisung braucht einen [[zaehlertypen|Zweirichtungszähler]] und oft eine zweite [[marktlokation|Marktlokation]]",
            "Die Herkunft muss über die [[stromkennzeichnung|Stromkennzeichnung]] ausgewiesen werden",
            "Nur beim Strom gibt es dynamische Tarife nach [[dynamischer-tarif|§ 41a EnWG]]",
          ],
        },
      ],
    },
    related: ["strompreis-zusammensetzung", "stromkennzeichnung", "dynamischer-tarif", "energie-einheiten"],
    sources: [
      {
        label: "Stromspiegel für Deutschland (co2online/BDEW) – Vergleichswerte Haushaltsstromverbrauch",
        url: "https://www.stromspiegel.de/",
      },
      {
        label: "BDEW – Energiemarkt Deutschland (Zahlen und Fakten)",
        url: "https://www.bdew.de/",
      },
    ],
  },

  {
    slug: "erdgas",
    category: "sparten",
    level: "basis",
    updated: U2,
    aka: ["Gas", "H-Gas", "L-Gas", "Gasverbrauch", "Gaslieferung"],
    title: { de: "Erdgas", en: "Natural gas" },
    summary: {
      de: "Der Zähler misst Kubikmeter, die Rechnung zählt Kilowattstunden – Gas ist die Sparte mit der Umrechnung, und damit die mit den meisten Rückfragen.",
      en: "The meter measures cubic metres, the bill counts kilowatt-hours – gas is the commodity with a conversion step, and therefore the one with the most customer questions.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der **Gasverbrauch** ist zunächst ein Volumen: Der Verbrauchswert in Kubikmetern (m³) ist der vom Gaszähler volumetrisch gemessene Gasverbrauch der jeweiligen Abrechnungsperiode. Wie viel Energie darin steckt, hängt von der Gasqualität, vom Druck und von der Temperatur ab – und genau deshalb wird umgerechnet.",
        },
        { t: "figure", id: "gas-umrechner" },
        {
          t: "p",
          text: "Details zur Rechenlogik: [[thermische-gasabrechnung|Thermische Gasabrechnung]], [[brennwert|Brennwert]] und [[zustandszahl|Zustandszahl]].",
        },
        { t: "h", level: 2, text: "H-Gas und L-Gas" },
        {
          t: "table",
          head: ["Gasart", "Brennwert typisch", "Herkunft", "Status"],
          rows: [
            ["H-Gas (High)", "10 – 13,1 kWh/m³", "Nordsee, Import, LNG", "bundesweiter Standard"],
            ["L-Gas (Low)", "8,4 – 11,2 kWh/m³", "Niederlande, Norddeutschland", "Marktraumumstellung läuft noch bis ca. 2029/2030"],
          ],
          caption:
            "L-Gas enthält mehr Stickstoff und damit weniger Energie je Kubikmeter. Die Umstellung ganzer Netzgebiete von L- auf H-Gas (Marktraumumstellung) läuft seit 2015 und dauert in Teilen Niedersachsens und Nordrhein-Westfalens noch bis etwa 2029/2030.",
        },
        { t: "h", level: 2, text: "Was den Preis ausmacht" },
        { t: "figure", id: "gaspreis-stack" },
        {
          t: "note",
          kind: "info",
          text: "Gas ist die Sparte, in der der [[co2-preis|CO₂-Preis]] direkt auf der Rechnung landet. 2026 liegt er in einem Korridor von 55 bis 65 €/t – bei einem Emissionsfaktor von rund 0,182 kg CO₂ je kWh sind das 1,00 bis 1,18 ct/kWh netto.",
        },
        { t: "h", level: 2, text: "Häufige Stolperstellen" },
        {
          t: "ul",
          items: [
            "Kunden vergleichen ihren m³-Stand mit den kWh auf der Rechnung und halten die Abrechnung für falsch",
            "Brennwert und Zustandszahl ändern sich zwischen zwei Abrechnungen – ein identischer Volumenverbrauch ergibt dann unterschiedliche kWh",
            "Bei Zählerwechsel muss der Volumenstand des Alt- und des Neuzählers sauber getrennt umgerechnet werden",
          ],
        },
      ],
    },
    related: ["thermische-gasabrechnung", "brennwert", "zustandszahl", "gaspreis-zusammensetzung", "gasmarkt-grundlagen", "wasserstoff"],
    sources: [
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie (Gasversorgung, Marktraumumstellung)",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
      {
        label: "DVGW – Regelwerk Gas (u. a. G 260 Gasbeschaffenheit, G 685 Gasabrechnung)",
        url: "https://www.dvgw.de/",
      },
      {
        label: "Trading Hub Europe – Marktgebietsverantwortlicher Gas",
        url: "https://www.tradinghub.eu/",
      },
    ],
  },

  {
    slug: "thermische-gasabrechnung",
    category: "sparten",
    featured: true,
    updated: U2,
    aka: ["m3 in kWh", "Gasumrechnung", "Abrechnungswert Gas", "Volumen in Energie"],
    title: { de: "Thermische Gasabrechnung", en: "Thermal gas billing" },
    summary: {
      de: "Bei Erdgas wird das Volumen in m³ gemessen und nach eichrechtlich anerkannten Regeln mit Zustandszahl und Brennwert in kWh umgerechnet, damit die Energiemenge unabhängig von Druck und Temperatur abgerechnet werden kann.",
      en: "Gas volume is measured in m³ and converted into kWh using the state number and the calorific value, so the energy is billed independently of pressure and temperature.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Kubikmeter Gas ist keine feste Energiemenge. Im kalten Keller passt mehr Gas in denselben Kubikmeter als im warmen, und Gas aus Norwegen enthält mehr Energie als Gas aus einer anderen Quelle. Damit trotzdem alle dieselbe Ware bezahlen, rechnet der Markt auf Energie um.",
        },
        {
          t: "formula",
          expr: "Verbrauch [kWh]  =  Volumen [m³]  ×  Zustandszahl z  ×  Brennwert [kWh/m³]",
          where: [
            { sym: "Volumen", desc: "die Differenz der Zählerstände in Betriebskubikmetern" },
            { sym: "z", desc: "[[zustandszahl|Zustandszahl]], korrigiert Druck und Temperatur – bei Niederdruck-Hausanschlüssen typisch 0,90 – 0,98, bei höherem Abrechnungsdruck größer als 1" },
            { sym: "Brennwert", desc: "[[brennwert|Brennwert]] des gelieferten Gases, typisch 8,4 – 13,1 kWh/m³" },
          ],
          caption:
            "Beide Faktoren stellt der Netzbetreiber bereit; sie müssen auf der Rechnung ausgewiesen sein.",
        },
        { t: "figure", id: "gas-umrechner" },
        { t: "h", level: 2, text: "Rechenbeispiel" },
        {
          t: "example",
          title: "Jahresabrechnung eines Einfamilienhauses",
          lines: [
            { label: "Zählerstand neu", value: "08.412 m³" },
            { label: "Zählerstand alt", value: "06.902 m³" },
            { label: "Volumen", value: "1.510 m³" },
            { label: "Zustandszahl", value: "0,9540" },
            { label: "Brennwert", value: "11,208 kWh/m³" },
          ],
          result: { label: "Abrechnungswert", value: "16.146 kWh" },
        },
        {
          t: "note",
          kind: "law",
          text: "Die Umrechnung folgt eichrechtlich anerkannten Regeln (DVGW-Arbeitsblatt G 685). Der abgerechnete Brennwert ist ein gewichteter Mittelwert über den Abrechnungszeitraum, kein Momentanwert.",
        },
        { t: "h", level: 2, text: "Warum Kunden hier stutzen" },
        {
          t: "p",
          text: "Der Zähler zeigt 1.510 – auf der Rechnung stehen 16.146. Das ist der häufigste Anlass für Rückfragen im Gasgeschäft. Ein Portal, das beide Größen nebeneinanderstellt und die Rechenkette zeigt, spart hier messbar Kontakte im Kundenservice.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Gaszählerstände werden immer in **m³** erfasst – auch in der [[marktkommunikation|Marktkommunikation]] werden sie per MSCONS als Volumen ausgetauscht; die **kWh** entstehen erst nachgelagert in der Abrechnung. Ein Eingabefeld im Portal muss deshalb eindeutig den Kubikmeterstand verlangen und darf keine kWh akzeptieren. Die Umrechnung gehört auf die Systemseite – nie in ein Eingabefeld für den Kunden.",
        },
      ],
    },
    related: ["brennwert", "zustandszahl", "erdgas", "abrechnungswert"],
    sources: [
      {
        label: "Bundesnetzagentur – Glossar: Brennwert (Gas)",
        url: "https://www.bundesnetzagentur.de/SharedDocs/A_Z_Glossar/B/Brennwert%20(Gas).html",
      },
      {
        label: "DVGW – Arbeitsblatt G 685 Gasabrechnung (Regelwerk)",
        url: "https://www.dvgw.de/",
      },
    ],
  },

  {
    slug: "brennwert",
    category: "sparten",
    updated: U2,
    aka: ["Ho", "Hs", "Heizwert", "Energieinhalt Gas"],
    title: { de: "Brennwert", en: "Calorific value" },
    summary: {
      de: "Zeigt an, wie viel Energie im Erdgas aufgrund seiner chemischen Zusammensetzung enthalten ist – angegeben in kWh je Kubikmeter.",
      en: "Indicates how much energy natural gas contains given its chemical composition – stated in kWh per cubic metre.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Brennwert ist eine Eigenschaft des gelieferten Gases, nicht des Kunden. Er wird im Netz laufend gemessen und für jedes Netzgebiet als Abrechnungsbrennwert bereitgestellt.",
        },
        {
          t: "table",
          head: ["Gasart", "Brennwert", "Bedeutung für den Kunden"],
          rows: [
            ["H-Gas", "10 – 13,1 kWh/m³, typisch 11,5", "weniger Kubikmeter für dieselbe Wärme"],
            ["L-Gas", "8,4 – 11,2 kWh/m³", "mehr Kubikmeter für dieselbe Wärme"],
          ],
        },
        { t: "h", level: 2, text: "Brennwert oder Heizwert?" },
        {
          t: "p",
          text: "Der **Brennwert** (auch oberer Heizwert, Hₒ – das o steht für „oberer“ – bzw. H_s für „superior“) rechnet die Kondensationswärme des im Abgas enthaltenen Wasserdampfs mit. Der **Heizwert** (H_i) tut das nicht und liegt rund 10 % niedriger. Abgerechnet wird in Deutschland mit dem Brennwert.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Ein steigender Brennwert bedeutet **nicht**, dass der Kunde mehr zahlt. Er bekommt je Kubikmeter mehr Energie – bei gleicher Wärmeabgabe sinkt sein Volumenverbrauch entsprechend.",
        },
      ],
    },
    related: ["thermische-gasabrechnung", "zustandszahl", "erdgas", "abrechnungswert"],
    sources: [
      {
        label: "Bundesnetzagentur – Glossar: Brennwert (Gas)",
        url: "https://www.bundesnetzagentur.de/SharedDocs/A_Z_Glossar/B/Brennwert%20(Gas).html",
      },
      {
        label: "DVGW – Arbeitsblatt G 685 Gasabrechnung (Regelwerk)",
        url: "https://www.dvgw.de/",
      },
    ],
  },

  {
    slug: "zustandszahl",
    category: "sparten",
    updated: U2,
    aka: ["z-Zahl", "Z-Zahl", "Zustandskorrektur", "Normzustand"],
    title: { de: "Zustandszahl (z-Zahl)", en: "State number" },
    summary: {
      de: "Korrekturfaktor, mit dem der Einfluss von Druck und Temperatur auf den Energieinhalt des Gasvolumens aufgehoben wird.",
      en: "Correction factor that removes the influence of pressure and temperature on the energy content of a gas volume.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Der Gaszähler misst **Betriebskubikmeter** – das Volumen unter den Bedingungen, die gerade am Zähler herrschen. Abgerechnet wird aber der Normzustand: 0 °C und 1.013,25 mbar. Die Zustandszahl übersetzt zwischen beidem.",
        },
        {
          t: "p",
          text: "Sie hängt vor allem von zwei Dingen ab: der geodätischen Höhe des Anschlusses – je höher, desto niedriger der Luftdruck – und dem Anschlussdruck des Netzes. Bei Hausanschlüssen am Niederdrucknetz liegen typische Werte zwischen 0,90 und 0,98; in Höhenlagen sinkt sie deutlich. Wird ein Anschluss mit höherem Abrechnungsdruck versorgt – Mitteldruck bei Gewerbe und Industrie –, ist z dagegen größer als 1: Bei 1 bar Überdruck liegt sie bei etwa 1,9, weil derselbe Betriebskubikmeter fast doppelt so viel Gas enthält.",
        },
        {
          t: "example",
          title: "Wirkung der z-Zahl",
          lines: [
            { label: "Volumen", value: "1.000 m³" },
            { label: "Brennwert", value: "11,2 kWh/m³" },
            { label: "z = 0,98 (Küste)", value: "10.976 kWh" },
            { label: "z = 0,90 (Hochlage)", value: "10.080 kWh" },
          ],
          result: { label: "Unterschied", value: "896 kWh · rund 8 %" },
        },
        {
          t: "note",
          kind: "info",
          text: "Deshalb ist die z-Zahl kein Preisbestandteil, sondern eine Messgröße. Sie steht auf der Rechnung und kommt – wie der [[brennwert|Brennwert]] – vom [[netzbetreiber|Netzbetreiber]].",
        },
      ],
    },
    related: ["thermische-gasabrechnung", "brennwert", "erdgas"],
    sources: [
      {
        label: "DVGW – Arbeitsblatt G 685 Gasabrechnung (Regelwerk)",
        url: "https://www.dvgw.de/",
      },
      {
        label: "Bundesnetzagentur – Verbraucherportal Energie",
        url: "https://www.bundesnetzagentur.de/DE/Vportal/Energie/start.html",
      },
    ],
  },

  {
    slug: "wasser",
    category: "sparten",
    updated: U2,
    aka: ["Trinkwasser", "Abwasser", "Schmutzwasser", "Niederschlagswasser", "Wasserpreis"],
    title: { de: "Trinkwasser und Abwasser", en: "Drinking water and waste water" },
    summary: {
      de: "Wie Fernwärme eine Sparte ohne Lieferantenwettbewerb: Preise setzt der örtliche Versorger, Abwasser ist meist eine kommunale Gebühr – mit ganz eigenen Steuerregeln.",
      en: "Like district heating, a commodity without supplier competition: the local utility sets prices, waste water is usually a municipal fee – with its own tax rules.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Wasser kennt keinen Lieferantenwechsel. Wer wo wohnt, bekommt sein Wasser vom dortigen Versorger – ein örtliches Monopol, das über Satzungen und kommunale Aufsicht statt über Wettbewerb kontrolliert wird.",
        },
        { t: "figure", id: "wasserpreis-stack" },
        { t: "h", level: 2, text: "Die drei Positionen" },
        {
          t: "dl",
          items: [
            { term: "Trinkwasser", def: "[[grundpreis|Grundpreis]] nach Zählergröße plus Mengenpreis je m³. Eine Lieferung im Sinne des Umsatzsteuerrechts – **7 % Umsatzsteuer**." },
            { term: "Schmutzwasser", def: "Meist nach dem Frischwasserverbrauch bemessen, nach dem Grundsatz „was reinkommt, geht auch wieder raus“. Hoheitliche Gebühr – **keine Umsatzsteuer**." },
            { term: "Niederschlagswasser", def: "Bemessen nach der versiegelten Grundstücksfläche, nicht nach dem Verbrauch. Ebenfalls hoheitliche Gebühr." },
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Die getrennte Steuerbehandlung ist eine klassische Fehlerquelle: Wer Wasserrechnungen wie Strom- oder Gasrechnungen behandelt, rechnet 19 % auf alles und liegt auf beiden Positionen falsch.",
        },
        { t: "h", level: 2, text: "Gartenwasserzähler" },
        {
          t: "p",
          text: "Wer viel gießt, kann einen zweiten Zähler setzen lassen: Das darüber entnommene Wasser landet nicht im Kanal und wird deshalb von der Schmutzwassergebühr ausgenommen. Der Zähler muss geeicht sein und wird meist vom Kunden selbst abgelesen.",
        },
      ],
    },
    related: ["grundpreis", "verbrauch", "umsatzsteuer-energie", "zaehlertypen"],
    sources: [
      {
        label: "Verordnung über Allgemeine Bedingungen für die Versorgung mit Wasser (AVBWasserV)",
        url: "https://www.gesetze-im-internet.de/avbwasserv/",
      },
    ],
  },

  {
    slug: "fernwaerme",
    category: "sparten",
    updated: U,
    aka: ["Nahwärme", "Wärmelieferung", "AVBFernwärmeV", "Wärmenetz"],
    title: { de: "Fernwärme", en: "District heating" },
    summary: {
      de: "Wärme aus dem Netz: technisch elegant, regulatorisch ein Sonderfall – kein Lieferantenwechsel, Preisänderungen über Preisgleitklauseln statt Marktpreise.",
      en: "Heat from a network: technically elegant, regulatorily a special case – no supplier switching, price changes via indexation clauses rather than market prices.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Fernwärme wird zentral erzeugt und als heißes Wasser zum Kunden transportiert. Die Übergabestation im Keller ersetzt den Heizkessel. Abgerechnet wird die entnommene Wärmemenge – gemessen von einem Wärmezähler, der Durchfluss und Temperaturdifferenz verrechnet.",
        },
        { t: "h", level: 2, text: "Was anders ist als bei Strom und Gas" },
        {
          t: "ul",
          items: [
            "**Kein Wettbewerb**: Wer an ein Wärmenetz angeschlossen ist, bezieht vom Betreiber dieses Netzes – ein Wechsel ist physisch nicht möglich",
            "**Eigene Verordnung**: Es gilt die AVBFernwärmeV, nicht die [[stromgvv-gasgvv|StromGVV/GasGVV]]",
            "**Preisgleitklauseln**: Der Preis folgt vertraglich vereinbarten Indizes – etwa für Erdgas, Fernwärmeerzeugung oder Löhne – statt einer freien Preisänderung",
            "**Lange Bindung**: Laufzeiten von bis zu zehn Jahren sind zulässig",
            "**Anschlusszwang** ist in manchen Kommunen über Satzung angeordnet",
          ],
        },
        {
          t: "table",
          head: ["Preisbestandteil", "Bemessung", "Entspricht bei Strom"],
          rows: [
            ["Grundpreis", "€/kW Anschlussleistung und Jahr", "[[leistungspreis|Leistungspreis]]"],
            ["Arbeitspreis", "ct/kWh entnommene Wärme", "[[arbeitspreis|Arbeitspreis]]"],
            ["Messpreis", "€/Jahr für den Wärmezähler", "[[messstellenbetrieb|Messstellenbetrieb]]"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Mit dem Ausbau kommunaler Wärmeplanung gewinnt Fernwärme an Bedeutung. Für Produkte heißt das vor allem: Anschlussanfragen, Machbarkeitsprüfung und Baufortschritt sind eigene Prozesse – sie haben mit klassischem Tarifvertrieb wenig gemeinsam.",
        },
      ],
    },
    related: ["leistungspreis", "grundpreis", "energie-einheiten", "preisanpassung"],
  },

  {
    slug: "gasmarkt-grundlagen",
    category: "sparten",
    updated: U2,
    aka: ["Trading Hub Europe", "THE", "Marktgebiet", "MGV", "Entry-Exit", "Gastag", "Tagesbilanzierung", "SLP Gas", "RLM Gas", "GaBi Gas", "GeLi Gas", "Bilanzierungsumlage", "Konvertierungsumlage", "Gasspeicherumlage", "Regelenergieumlage", "Biomethan", "Kapazitätsbuchung"],
    title: { de: "Gasmarkt: Marktgebiet, Bilanzierung, Umlagen", en: "The gas market: market area, balancing, levies" },
    summary: {
      de: "Ein Marktgebiet, ein Gastag, ein Bilanzierungsverantwortlicher: Der Gasmarkt folgt eigenen Regeln – von der Entry-Exit-Logik bis zu den Umlagen, die nur auf der Gasrechnung stehen.",
      en: "One market area, one gas day, one balancing authority: the gas market follows its own rules – from the entry-exit logic to the levies that appear only on a gas bill.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Wer vom Strom kommt, erkennt im Gasmarkt vieles wieder – Lieferanten, Netzbetreiber, Bilanzkreise, Marktkommunikation – und stolpert dann über die Unterschiede: Es gibt keine Regelzonen, sondern ein Marktgebiet. Es wird nicht viertelstündlich, sondern täglich bilanziert. Und das Gas selbst wird nicht in kWh gemessen, sondern in Kubikmetern, die erst die [[thermische-gasabrechnung|Abrechnung]] in Energie übersetzt.",
        },
        { t: "h", level: 2, text: "Ein Marktgebiet: Trading Hub Europe" },
        {
          t: "p",
          text: "Seit dem **1. Oktober 2021** gibt es in Deutschland ein einziges Gasmarktgebiet, betrieben von der **Trading Hub Europe GmbH (THE)** als **Marktgebietsverantwortlichem (MGV)**. Zuvor waren es zwei (NetConnect Germany und Gaspool), davor bis zu 19. Der MGV ist eine Gemeinschaftsgesellschaft der Fernleitungsnetzbetreiber und übernimmt, was im Strom die vier ÜNB als Bilanzkoordinatoren tun – für ganz Deutschland an einer Stelle.",
        },
        {
          t: "dl",
          items: [
            { term: "Entry-Exit-System", def: "Transportkunden buchen Kapazität getrennt für den Eintritt ins Marktgebiet (Entry: Grenzübergang, Speicher, Biogasanlage, LNG-Terminal) und den Austritt (Exit: Ausspeisung an Verteilnetze und Endkunden). Zwischen Entry und Exit liegt der **Virtuelle Handelspunkt (VTP)**, an dem Gas ohne Bezug zu einem physischen Ort gehandelt und zwischen Bilanzkreisen übertragen wird." },
            { term: "Gastag", def: "Der Bilanzierungstag läuft von **06:00 Uhr bis 06:00 Uhr** des Folgetags. Alle Mengen, Nominierungen und Allokationen beziehen sich auf den Gastag, nicht auf den Kalendertag – auch Zählerstände zum Monatswechsel werden auf 06:00 Uhr gerechnet." },
            { term: "Tagesbilanzierung", def: "Der [[bilanzkreis|Bilanzkreis]] muss über den Gastag ausgeglichen sein. Innerhalb des Tages puffert das Netz (Netzpuffer). Abweichungen rechnet der MGV als **Ausgleichsenergie** ab; zusätzlich gibt es für RLM-Kunden stündliche Toleranzen und ein untertägiges Flexibilitätsentgelt." },
          ],
        },
        { t: "h", level: 2, text: "SLP und RLM im Gas" },
        {
          t: "p",
          text: "Die Grenze zur registrierenden Leistungsmessung liegt im Gas deutlich höher als im Strom: **1,5 Mio. kWh** Jahresverbrauch oder **500 kWh/h** Ausspeiseleistung (§ 24 GasNZV) – praktisch alle Haushalte und die meisten Gewerbekunden sind SLP-Kunden, siehe [[lastprofil|Lastprofil]]. RLM-Kunden werden stündlich gemessen und täglich per MSCONS bilanziert.",
        },
        {
          t: "p",
          text: "Gas-Standardlastprofile sind vor allem temperaturabhängig: Sie beschreiben den Tagesverbrauch als **Sigmoid-Funktion** der Tagesmitteltemperatur – bei 20 °C nahe null (nur Warmwasser und Kochen), bei −10 °C nahe dem Maximum. Bilanziert wird mit der **Prognosetemperatur** des Vortags; die Differenz zwischen prognostiziertem und tatsächlichem Verbrauch trägt nicht der Lieferant, sondern wird über die Bilanzierungsumlage auf alle SLP-Ausspeisepunkte verteilt. Deshalb ist ein warmer Winter für einen Gaslieferanten kein Bilanzkreisrisiko – aber ein Absatzrisiko.",
        },
        { t: "h", level: 2, text: "Die Regelwerke: GaBi Gas und GeLi Gas" },
        {
          t: "p",
          text: "Die Bundesnetzagentur hat für Gas Schwesterfestlegungen zu den Strom-Regeln erlassen: **GeLi Gas** (Geschäftsprozesse Lieferantenwechsel Gas) entspricht der GPKE und regelt An-, Ab- und Ummeldung; **GaBi Gas** (Grundmodell der Ausgleichsleistungs- und Bilanzierungsregeln) entspricht der MaBiS. Zuständig ist die Beschlusskammer 7. Die Formate sind dieselben EDIFACT-Nachrichten wie im Strom – UTILMD, MSCONS, INVOIC – mit gasspezifischen Codes; seit dem 1. Oktober 2025 auch im Gas über AS4 transportiert.",
        },
        { t: "h", level: 2, text: "Umlagen, die nur auf der Gasrechnung stehen" },
        {
          t: "table",
          head: ["Position", "Wofür", "Wer legt sie fest"],
          rows: [
            ["**Bilanzierungsumlage** (SLP und RLM getrennt)", "Deckt die Kosten der Regelenergie und die Differenz zwischen bilanzierten SLP-Mengen und tatsächlichem Verbrauch; früher als Regelenergieumlage bezeichnet", "MGV, jährlich zum 1. Oktober"],
            ["**Konvertierungsumlage**", "Kosten dafür, dass H- und L-Gas im selben Marktgebiet als eine Ware bilanziert werden, obwohl sie physisch getrennt fließen", "MGV, jährlich"],
            ["**Gasspeicherumlage** (§ 35e EnWG)", "Seit Oktober 2022 zur Finanzierung der staatlich veranlassten Speicherbefüllung; ihre **Abschaffung zum 1. Januar 2026** ist beschlossen – der Bund übernimmt die Kosten", "gesetzlich; Höhe zuletzt vom MGV festgelegt"],
            ["**Energiesteuer**", "**0,55 ct/kWh** für Erdgas zum Verheizen (§ 2 Abs. 3 EnergieStG), siehe [[energiesteuer|Energiesteuer]]", "Bund"],
            ["**CO₂-Preis**", "Nationaler Emissionshandel nach BEHG, 2026 im Preiskorridor von 55 bis 65 €/t – siehe [[co2-preis|CO₂-Preis]]", "Bund"],
          ],
          caption:
            "Dazu kommen [[netzentgelte|Netzentgelte]], [[konzessionsabgabe|Konzessionsabgabe]] und Umsatzsteuer wie im Strom. Die Zusammensetzung im Detail: [[gaspreis-zusammensetzung|Gaspreis-Zusammensetzung]].",
        },
        {
          t: "note",
          kind: "info",
          text: "Gas-Netzentgelte folgen dem **Kapazitätsprinzip**: Die Netzkosten werden vor allem über die gebuchte oder vorgehaltene Ausspeisekapazität verteilt, nicht über die Menge. Für Haushalte übersetzt der Netzbetreiber das in ein Preisblatt mit Grund- und Arbeitspreis nach Jahresverbrauchsstufen; bei RLM-Kunden erscheint die Kapazität als Leistungspreis in €/(kWh/h).",
        },
        { t: "h", level: 2, text: "H-Gas, L-Gas und die Marktraumumstellung" },
        {
          t: "p",
          text: "Deutschland hat historisch zwei Gasqualitäten: hochkalorisches **H-Gas** und niederkalorisches **L-Gas** aus niederländischen und norddeutschen Feldern. Weil die L-Gas-Förderung ausläuft, werden ganze Netzgebiete in Nordwestdeutschland auf H-Gas umgestellt – die **Marktraumumstellung**, bei der jedes Gasgerät angepasst oder getauscht werden muss. Für die Abrechnung bedeutet das einen Sprung im [[brennwert|Brennwert]] zum Umstellungstermin; die Details stehen unter [[erdgas|Erdgas]].",
        },
        { t: "h", level: 2, text: "Biomethan" },
        {
          t: "p",
          text: "Aufbereitetes Biogas wird als **Biomethan** ins Erdgasnetz eingespeist und ist dort physisch nicht mehr unterscheidbar. Gehandelt wird es deshalb über eigene **Biogas-Bilanzkreise** mit einem Bilanzierungszeitraum von zwölf Monaten und über Nachweise im Biogasregister der dena. Für den Lieferanten ist Biomethan ein Beschaffungs- und Nachweisthema – auf der Kundenrechnung erscheint es als Produkteigenschaft, nicht als eigene Position.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Drei Dinge, die Software für den Gasmarkt anders machen muss als für Strom: Zeiträume beginnen um 06:00 Uhr, nicht um Mitternacht. Zählerstände sind Volumen und werden erst mit Brennwert und Zustandszahl zu kWh – beide Faktoren gehören mit Gültigkeitszeitraum in die Datenbank. Und der Bilanzkreis hängt am Marktgebiet, nicht an einer Regelzone – es gibt nur eines, aber die Umlagen darin ändern sich jährlich zum 1. Oktober, nicht zum 1. Januar.",
        },
      ],
    },
    related: ["erdgas", "thermische-gasabrechnung", "bilanzkreis", "lastprofil", "gaspreis-zusammensetzung", "wasserstoff"],
    sources: [
      {
        label: "§ 35e EnWG – Gasspeicherumlage",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__35e.html",
      },
      {
        label: "§ 2 EnergieStG – Steuertarif (Erdgas)",
        url: "https://www.gesetze-im-internet.de/energiestg/__2.html",
      },
      {
        label: "Gasnetzzugangsverordnung (GasNZV)",
        url: "https://dejure.org/gesetze/GasNZV",
      },
      {
        label: "Trading Hub Europe – Marktgebietsverantwortlicher: Bilanzierung, Umlagen, VTP",
        url: "https://www.tradinghub.eu/",
      },
      {
        label: "Bundesnetzagentur – Elektrizität und Gas (Beschlusskammern, Festlegungen)",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/start.html",
      },
      {
        label: "DVGW – Regelwerk Gas (G 260 Gasbeschaffenheit, G 685 Gasabrechnung)",
        url: "https://www.dvgw.de/",
      },
    ],
  },

  {
    slug: "wasserstoff",
    category: "sparten",
    level: "basis",
    updated: U2,
    aka: ["H2", "H₂", "Wasserstoffkernnetz", "Kernnetz", "Elektrolyse", "grüner Wasserstoff", "Hochlaufentgelt", "Amortisationskonto", "H2-ready", "Beimischung"],
    title: { de: "Wasserstoff", en: "Hydrogen" },
    summary: {
      de: "Die entstehende vierte leitungsgebundene Sparte: ein eigenes Kernnetz, eigene Regulierung im EnWG und für die Abrechnung eine Ware, die nach Kilogramm gehandelt und nach Kilowattstunden verkauft wird.",
      en: "The emerging fourth pipeline commodity: its own core network, its own regulation in the EnWG and – for billing – a product traded by the kilogram and sold by the kilowatt-hour.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Wasserstoff ist noch kein Massenmarkt, aber bereits eine regulierte Sparte: Es gibt ein genehmigtes Netz, Paragrafen im [[enwg|EnWG]] und erste Kunden in der Industrie. Wer heute Datenmodelle für Versorger baut, sollte die Sparte zumindest als Platzhalter kennen – die Einheitenfrage allein reicht, um ein Abrechnungssystem zu ärgern.",
        },
        { t: "h", level: 2, text: "Das Kernnetz" },
        {
          t: "p",
          text: "Im **Oktober 2024** genehmigte die Bundesnetzagentur das **Wasserstoff-Kernnetz**: rund **9.000 km** Leitungen, überwiegend umgestellte Erdgasleitungen, die bis **2032** schrittweise in Betrieb gehen sollen und Erzeugungs-, Import- und Speicherstandorte mit den industriellen Verbrauchsschwerpunkten verbinden. Finanziert wird es privatwirtschaftlich über ein bundesweit einheitliches **Hochlaufentgelt**; weil in den ersten Jahren wenige Kunden hohe Kosten tragen müssten, werden Anfangsverluste auf einem **Amortisationskonto** gesammelt und später über die Entgelte zurückgeholt – der Bund sichert dieses Konto ab.",
        },
        {
          t: "note",
          kind: "law",
          text: "Die Regulierung von Wasserstoffnetzen steht seit 2021 in den **§§ 28j ff. EnWG** – zunächst als **Opt-in**: Netzbetreiber können sich der Regulierung unterwerfen, um Zugang zu den Finanzierungsinstrumenten zu bekommen. Wer das tut, unterliegt Entflechtungs- und Netzzugangsregeln ähnlich wie im Gas. Die europäische Gas- und Wasserstoffmarktrichtlinie von 2024 zieht die Regeln schrittweise nach.",
        },
        { t: "h", level: 2, text: "Farben und Herkunft" },
        {
          t: "dl",
          items: [
            { term: "Grün", def: "Elektrolyse mit erneuerbarem Strom – das Ziel der Regulierung; was als „erneuerbar“ gilt, definieren delegierte EU-Rechtsakte (Zusätzlichkeit, zeitliche und räumliche Korrelation)." },
            { term: "Blau", def: "Aus Erdgas (Dampfreformierung) mit Abscheidung und Speicherung des CO₂." },
            { term: "Grau", def: "Aus Erdgas ohne CO₂-Abscheidung – heute der Normalfall in der Industrie." },
            { term: "Türkis", def: "Aus Erdgas per Methanpyrolyse, mit festem Kohlenstoff statt CO₂ als Nebenprodukt." },
          ],
        },
        { t: "h", level: 2, text: "Einheiten – die eigentliche Falle" },
        {
          t: "table",
          head: ["Einheit", "Wo sie vorkommt", "Umrechnung"],
          rows: [
            ["kg", "Erzeugung, Import, Mobilität, Verträge", "1 kg ≈ **33,3 kWh** Heizwert, ≈ **39,4 kWh** Brennwert"],
            ["Nm³", "Netz und Messung, wie beim Erdgas", "1 kg ≈ 11,1 Nm³; 1 Nm³ ≈ 3,0 kWh Heizwert, ≈ 3,54 kWh Brennwert"],
            ["kWh", "Abrechnung, Netzentgelte, Energiestatistik", "Bezugsgröße für Preise; **Brennwert oder Heizwert muss genannt sein**"],
          ],
          caption:
            "Wasserstoff hat je Kilogramm rund den dreifachen Energieinhalt von Erdgas, je Kubikmeter aber nur etwa ein Drittel – dieselbe Leitung transportiert bei gleichem Volumenstrom deutlich weniger Energie.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Der Unterschied zwischen Heizwert (33,3 kWh/kg) und Brennwert (39,4 kWh/kg) beträgt bei Wasserstoff rund 18 % – deutlich mehr als bei Erdgas mit etwa 10 %. Ein Vertrag „in kWh“ ohne Angabe der Bezugsgröße ist bei Wasserstoff ein Streitfall im Wert von fast einem Fünftel der Rechnung. Netz und Abrechnung rechnen wie im Gas mit dem [[brennwert|Brennwert]]; Elektrolyseur-Hersteller und Wirkungsgradangaben meist mit dem Heizwert.",
        },
        { t: "h", level: 2, text: "Beimischung und H2-ready" },
        {
          t: "p",
          text: "Das bestehende [[erdgas|Erdgasnetz]] verträgt eine begrenzte Beimischung von Wasserstoff: Das DVGW-Regelwerk (G 260, G 262) lässt heute je nach Netz und angeschlossenen Geräten Anteile im Bereich von etwa **10 bis 20 Vol.-%** zu; die konkrete Grenze hängt von Gasturbinen, Erdgastankstellen und Messgeräten im jeweiligen Netz ab. „**H2-ready**“ bei Gaskraftwerken und Heizungen bedeutet, dass ein Gerät später auf 100 % Wasserstoff umgestellt werden kann – nach dem GEG genügt das allein nicht, um die 65-%-Erneuerbaren-Anforderung zu erfüllen; das Netz muss dafür verbindlich umgestellt werden.",
        },
        {
          t: "p",
          text: "Die **Elektrolyse** hat einen Wirkungsgrad von etwa **60 bis 70 %** (bezogen auf den Heizwert): Aus 100 kWh Strom werden rund 60 bis 70 kWh Wasserstoff. Wer ihn wieder verstromt, verliert erneut die Hälfte – deshalb gilt Wasserstoff als Lösung für Industrieprozesse, Speicherung und schwer elektrifizierbare Anwendungen, nicht für die Raumwärme im Bestand.",
        },
        { t: "h", level: 2, text: "Was das für Abrechnungssoftware heißt" },
        {
          t: "ul",
          items: [
            "**Energie in kWh abrechnen**, aber Masse in kg und Volumen in Nm³ als Messgrößen mitführen – analog zur [[thermische-gasabrechnung|thermischen Gasabrechnung]] mit einem Brennwert je kg oder je Nm³ als Umrechnungsfaktor mit Gültigkeitszeitraum",
            "**Bezugsgröße** (Brennwert/Heizwert) als Pflichtattribut jedes Preises und jeder Menge",
            "**Qualitäts- und Herkunftsnachweise** je Liefermenge: Farbe, Erzeugungsart, CO₂-Intensität und der Nachweis nach der EU-Erneuerbaren-Richtlinie werden zu Vertrags- und Rechnungsattributen – wie [[grosshandel-beschaffung|Herkunftsnachweise]] beim Ökostrom, aber mit strengeren Kriterien",
            "**Sparte als eigener Wert**, nicht als Gas-Variante: Netzentgelte, Umlagen und Steuern folgen eigenen Regeln, die sich in den nächsten Jahren mehrfach ändern werden",
          ],
        },
      ],
    },
    related: ["erdgas", "gasmarkt-grundlagen", "brennwert", "energie-einheiten", "grosshandel-beschaffung"],
    sources: [
      {
        label: "§ 28j EnWG – Regulierung von Wasserstoffnetzen (Opt-in)",
        url: "https://www.gesetze-im-internet.de/enwg_2005/__28j.html",
      },
      {
        label: "Bundesnetzagentur – Wasserstoff-Kernnetz",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Wasserstoff/start.html",
      },
      {
        label: "DVGW – Wasserstoff und Regelwerk Gas (G 260, G 262)",
        url: "https://www.dvgw.de/",
      },
      {
        label: "FNB Gas – Wasserstoff-Kernnetz der Fernleitungsnetzbetreiber",
        url: "https://fnb-gas.de/",
      },
    ],
  },
];
