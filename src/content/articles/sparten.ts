import type { Article } from "../types";

const U = "2026-08-01";

export const spartenArticles: Article[] = [
  {
    slug: "strom",
    category: "sparten",
    level: "basis",
    updated: U,
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
  },

  {
    slug: "erdgas",
    category: "sparten",
    level: "basis",
    updated: U,
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
            ["L-Gas (Low)", "8,4 – 11,2 kWh/m³", "Niederlande, Norddeutschland", "Marktraumumstellung abgeschlossen"],
          ],
          caption:
            "L-Gas enthält mehr Stickstoff und damit weniger Energie je Kubikmeter. Die Umstellung ganzer Netzgebiete von L- auf H-Gas ist weitgehend durch.",
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
    related: ["thermische-gasabrechnung", "brennwert", "zustandszahl", "gaspreis-zusammensetzung"],
  },

  {
    slug: "thermische-gasabrechnung",
    category: "sparten",
    featured: true,
    updated: U,
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
            { sym: "z", desc: "[[zustandszahl|Zustandszahl]], korrigiert Druck und Temperatur, typisch 0,90 – 0,98" },
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
          result: { label: "Abrechnungswert", value: "16.144 kWh" },
        },
        {
          t: "note",
          kind: "law",
          text: "Die Umrechnung folgt eichrechtlich anerkannten Regeln (DVGW-Arbeitsblatt G 685). Der abgerechnete Brennwert ist ein gewichteter Mittelwert über den Abrechnungszeitraum, kein Momentanwert.",
        },
        { t: "h", level: 2, text: "Warum Kunden hier stutzen" },
        {
          t: "p",
          text: "Der Zähler zeigt 1.510 – auf der Rechnung stehen 16.144. Das ist der häufigste Anlass für Rückfragen im Gasgeschäft. Ein Portal, das beide Größen nebeneinanderstellt und die Rechenkette zeigt, spart hier messbar Kontakte im Kundenservice.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Beim Erfassen eines Zählerstands im Portal sollte klar sein, welche Einheit gemeint ist: Der Kunde liest **m³** ab, das Abrechnungssystem erwartet oft **kWh**. Die Umrechnung gehört auf die Systemseite – nie in ein Eingabefeld für den Kunden.",
        },
      ],
    },
    related: ["brennwert", "zustandszahl", "erdgas", "abrechnungswert"],
    sources: [
      {
        label: "Bundesnetzagentur – Glossar: Brennwert (Gas)",
        url: "https://www.bundesnetzagentur.de/SharedDocs/A_Z_Glossar/B/Brennwert%20(Gas).html",
      },
    ],
  },

  {
    slug: "brennwert",
    category: "sparten",
    updated: U,
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
          text: "Der **Brennwert** (früher: oberer Heizwert, H₀ bzw. H_s) rechnet die Kondensationswärme des im Abgas enthaltenen Wasserdampfs mit. Der **Heizwert** (H_i) tut das nicht und liegt rund 10 % niedriger. Abgerechnet wird in Deutschland mit dem Brennwert.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Ein steigender Brennwert bedeutet **nicht**, dass der Kunde mehr zahlt. Er bekommt je Kubikmeter mehr Energie – bei gleicher Wärmeabgabe sinkt sein Volumenverbrauch entsprechend.",
        },
      ],
    },
    related: ["thermische-gasabrechnung", "zustandszahl", "erdgas", "abrechnungswert"],
  },

  {
    slug: "zustandszahl",
    category: "sparten",
    updated: U,
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
          text: "Sie hängt vor allem von zwei Dingen ab: der geodätischen Höhe des Anschlusses – je höher, desto niedriger der Luftdruck – und dem Anschlussdruck des Netzes. Typische Werte liegen zwischen 0,90 und 0,98; in Höhenlagen sinkt sie deutlich.",
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
  },

  {
    slug: "wasser",
    category: "sparten",
    updated: U,
    aka: ["Trinkwasser", "Abwasser", "Schmutzwasser", "Niederschlagswasser", "Wasserpreis"],
    title: { de: "Trinkwasser und Abwasser", en: "Drinking water and waste water" },
    summary: {
      de: "Die einzige Sparte ohne Wettbewerb: Preise setzt der örtliche Versorger, Abwasser ist meist eine kommunale Gebühr – mit ganz eigenen Steuerregeln.",
      en: "The one commodity without competition: the local utility sets prices, waste water is usually a municipal fee – with its own tax rules.",
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
];
