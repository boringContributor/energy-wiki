import type { Article } from "../types";

const U = "2026-08-01";
const U2 = "2026-08-29";

export const anlagenArticles: Article[] = [
  {
    slug: "erzeugungsanlagen",
    category: "anlagen",
    featured: true,
    level: "basis",
    updated: U2,
    aka: ["Prosumer", "Kundenanlage", "Anlagen hinter dem Zähler", "Behind the meter", "Eigenerzeugung"],
    title: {
      de: "Anlagen hinter dem Zähler",
      en: "Equipment behind the meter",
    },
    summary: {
      de: "PV-Anlage, Wärmepumpe, Speicher, Wallbox: Aus dem reinen Verbraucher ist ein Prosumer geworden – und damit ändern sich Zähler, Marktlokation und Tarif.",
      en: "Solar, heat pump, battery, wallbox: the pure consumer has become a prosumer – and that changes the meter, the market location and the tariff.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Zwanzig Jahre lang war der Haushalt ein einfacher Fall: ein Zähler, eine Richtung, ein Tarif. Heute erzeugt derselbe Haushalt Strom, speichert ihn, heizt damit und lädt ein Auto. Jedes dieser Geräte hat Folgen für Vertrag, Messkonzept und Abrechnung.",
        },
        { t: "figure", id: "anlagen-uebersicht" },
        { t: "h", level: 2, text: "Was sich für den Versorger ändert" },
        {
          t: "table",
          head: ["Anlage", "Folge für Zähler und Vertrag"],
          rows: [
            ["[[photovoltaik|PV-Anlage]]", "[[zaehlertypen|Zweirichtungszähler]], meist zwei [[marktlokation|Marktlokationen]], [[einspeiseverguetung|Einspeisevergütung]]; ab 2 kW ohne iMSys und Steuerbox auf 60 % Einspeiseleistung begrenzt, iMSys-Pflichteinbau erst über 7 kW"],
            ["[[waermepumpe|Wärmepumpe]]", "über 4,2 kW [[paragraf-14a-enwg|§ 14a EnWG]], eigener Heizstromtarif, oft zweites Zählwerk"],
            ["[[batteriespeicher|Batteriespeicher]]", "verschiebt den Verbrauch in andere Stunden, verändert das [[lastprofil|Lastprofil]]"],
            ["[[wallbox|Wallbox]]", "über 4,2 kW § 14a, Anmeldung beim Netzbetreiber ab 12 kW genehmigungspflichtig"],
            ["[[bhkw|BHKW]]", "Erzeugung und Wärme zugleich, [[kwk-umlage|KWKG]]-Zuschlag, Stromsteuerfragen"],
          ],
        },
        {
          t: "note",
          kind: "tip",
          text: "Faustregel für Produktentscheidungen: **Alles über 4,2 kW und alles, was einspeist, verändert das Messkonzept.** Wer eine Anlage verkauft, verkauft immer auch einen Zählerwechsel und meist einen neuen Tarif mit.",
        },
        { t: "h", level: 2, text: "Der gemeinsame Nenner: Anmeldung" },
        {
          t: "p",
          text: "Fast jede dieser Anlagen muss zweimal gemeldet werden – beim [[netzbetreiber|Netzbetreiber]] (technisch, oft durch den Installateur) und im [[marktstammdatenregister|Marktstammdatenregister]] der Bundesnetzagentur (behördlich, durch den Betreiber). Fehlt eine der beiden Meldungen, gibt es keine Vergütung und im Extremfall ein Bußgeld.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für Onboarding-Strecken ist das eine echte Chance: Wer die Anlagendaten schon beim Vertragsabschluss sauber erfasst – Leistung, Inbetriebnahmedatum, MaStR-Nummer, Messkonzept –, spart sich später eine ganze Kette von Rückfragen zwischen Kunde, Installateur und Netzbetreiber.",
        },
      ],
    },
    related: ["photovoltaik", "waermepumpe", "marktstammdatenregister", "paragraf-14a-enwg"],
    sources: [
      { label: "§ 29 MsbG – Ausstattung von Messstellen mit intelligenten Messsystemen", url: "https://www.gesetze-im-internet.de/messbg/__29.html" },
      { label: "§ 14a EnWG – Netzorientierte Steuerung steuerbarer Verbrauchseinrichtungen", url: "https://www.gesetze-im-internet.de/enwg_2005/__14a.html" },
      { label: "Marktstammdatenregister der Bundesnetzagentur", url: "https://www.marktstammdatenregister.de/MaStR" },
    ],
  },

  {
    slug: "photovoltaik",
    category: "anlagen",
    featured: true,
    updated: U2,
    aka: ["PV", "PV-Anlage", "Solaranlage", "Solar", "kWp", "Eigenverbrauch", "Autarkie", "Solarspitzengesetz"],
    title: { de: "Photovoltaikanlage", en: "Photovoltaic system" },
    summary: {
      de: "Wandelt Sonnenlicht in Strom. Wirtschaftlich entscheidend ist nicht die Anlagengröße, sondern wie viel des erzeugten Stroms im Haus selbst verbraucht wird.",
      en: "Turns sunlight into electricity. What decides the economics is not the size of the array but how much of its output is used in the house itself.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Eine PV-Anlage wird in **Kilowatt Peak (kWp)** gemessen – der Leistung unter Normbedingungen. In Deutschland liefert ein kWp je nach Ausrichtung 850 bis 1.050 kWh im Jahr. Eine typische Anlage auf einem Einfamilienhaus hat 8 bis 12 kWp.",
        },
        { t: "figure", id: "pv-rechner" },
        { t: "h", level: 2, text: "Eigenverbrauch schlägt Einspeisung" },
        {
          t: "p",
          text: "Selbst genutzter Strom spart den vollen Bezugspreis von rund 37 ct/kWh. Eingespeister Strom bringt 7,70 ct/kWh [[einspeiseverguetung|Einspeisevergütung]]. Eine selbst verbrauchte Kilowattstunde ist also fast fünfmal so viel wert wie eine eingespeiste – das erklärt, warum [[batteriespeicher|Speicher]], [[waermepumpe|Wärmepumpe]] und [[wallbox|Wallbox]] so oft zusammen mit PV verkauft werden.",
        },
        {
          t: "stats",
          items: [
            { value: "25–35 %", label: "Eigenverbrauch ohne Speicher" },
            { value: "55–70 %", label: "Eigenverbrauch mit Speicher" },
            { value: "20 Jahre", label: "Vergütung garantiert", hint: "ab Inbetriebnahme" },
          ],
        },
        { t: "h", level: 2, text: "Was seit Februar 2025 gilt" },
        {
          t: "note",
          kind: "law",
          text: "**Solarspitzengesetz**: Für neue Anlagen ab 2 kW, die seit dem 25. Februar 2025 in Betrieb gehen, ist die Einspeiseleistung auf **60 %** der installierten Leistung begrenzt, solange kein [[intelligentes-messsystem|intelligentes Messsystem]] mit Steuerbox eingebaut ist – danach entfällt die Kappung. Eine Einbaupflicht ab 2 kW gibt es nicht; der Pflichteinbau nach § 29 [[msbg|MsbG]] beginnt weiterhin über 7 kW. Außerdem entfällt für Neuanlagen die Vergütung in Viertelstunden mit negativen Börsenpreisen; diese Zeit wird hinten an die 20 Jahre Vergütungsdauer angehängt. Bestandsanlagen sind nicht betroffen.",
        },
        { t: "h", level: 2, text: "Zähler und Marktlokationen" },
        {
          t: "ul",
          items: [
            "Ein [[zaehlertypen|Zweirichtungszähler]] erfasst Bezug (OBIS 1.8.0) und Einspeisung (2.8.0) getrennt",
            "Meist entstehen **zwei [[marktlokation|Marktlokationen]]**: eine für den Bezug, eine für die Einspeisung",
            "Der alte Zähler muss getauscht werden – rückwärtslaufende Ferraris-Zähler sind unzulässig",
            "Bei über 7 kW installierter Leistung ist ein iMSys Pflichteinbaufall nach [[msbg|MsbG]]",
          ],
        },
        { t: "h", level: 2, text: "Steuer" },
        {
          t: "p",
          text: "Seit 2023 gilt für Anlagen bis 30 kWp auf Einfamilienhäusern der **Nullsteuersatz** bei der [[umsatzsteuer-energie|Umsatzsteuer]] auf Kauf und Installation, und die Einnahmen sind einkommensteuerfrei. Das hat die Anschaffung spürbar vereinfacht – der Betreiber muss sich nicht mehr zwingend als Unternehmer registrieren.",
        },
      ],
    },
    related: ["einspeiseverguetung", "eigenverbrauch", "netzanschluss", "batteriespeicher", "balkonkraftwerk", "marktstammdatenregister"],
    sources: [
      { label: "Bundesnetzagentur – Marktstammdatenregister", url: "https://www.marktstammdatenregister.de/MaStR" },
      { label: "§ 29 MsbG – Ausstattung von Messstellen mit intelligenten Messsystemen", url: "https://www.gesetze-im-internet.de/messbg/__29.html" },
      { label: "EEG 2023 (Gesetz für den Ausbau erneuerbarer Energien)", url: "https://www.gesetze-im-internet.de/eeg_2014/" },
    ],
  },

  {
    slug: "balkonkraftwerk",
    category: "anlagen",
    updated: U2,
    aka: ["Steckersolargerät", "Mini-PV", "Balkon-PV", "800 Watt", "Steckersolar"],
    title: { de: "Balkonkraftwerk (Steckersolargerät)", en: "Plug-in solar device" },
    summary: {
      de: "Eine steckerfertige Mini-PV-Anlage mit bis zu 800 W Wechselrichterleistung – anmeldepflichtig nur noch im Marktstammdatenregister, nicht mehr beim Netzbetreiber.",
      en: "A plug-in mini solar system with up to 800 W inverter output – now only registered in the federal register, no longer with the grid operator.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Das Steckersolargerät ist der Einstieg in die Eigenerzeugung: zwei Module am Balkon oder auf dem Garagendach, ein Wechselrichter, ein Stecker in die Steckdose. Es deckt vor allem die Grundlast – Kühlschrank, Router, Standby.",
        },
        { t: "h", level: 2, text: "Die Regeln" },
        {
          t: "dl",
          items: [
            { term: "800 Watt Wechselrichter", def: "Seit dem Solarpaket I (16. Mai 2024) darf die Einspeiseleistung 800 W statt bisher 600 W betragen." },
            { term: "2.000 Wp Module", def: "Die installierte Modulleistung darf bis zu 2.000 Wp betragen, solange der Wechselrichter auf 800 W begrenzt ist." },
            { term: "Nur MaStR", def: "Die Anmeldung beim [[netzbetreiber|Netzbetreiber]] entfällt. Es genügt die Registrierung im [[marktstammdatenregister|Marktstammdatenregister]] innerhalb eines Monats nach Inbetriebnahme – wenige Angaben, rund 15 Minuten." },
            { term: "Zähler", def: "Ein rückwärtslaufender Zähler wird übergangsweise geduldet, bis der Netzbetreiber tauscht. Danach zählt der [[zaehlertypen|Zweirichtungszähler]]." },
            { term: "Schuko-Stecker", def: "Der Anschluss über eine normale Schutzkontakt-Steckdose ist zulässig: Die VDE-Produktnorm für Steckersolargeräte und die VDE-AR-N 4105 akzeptieren den Schuko-Stecker, eine spezielle Energiesteckdose ist nicht mehr Voraussetzung." },
            { term: "Mieter und Eigentümergemeinschaften", def: "Seit 2024 ist das Steckersolargerät eine **privilegierte Maßnahme**: Mieter haben nach § 554 BGB einen Anspruch auf Erlaubnis, in der WEG genügt nach § 20 WEG ein einfacher Beschluss über das Wie – das Ob kann die Gemeinschaft nicht mehr verweigern." },
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Ein Balkonkraftwerk bekommt in der Regel **keine Einspeisevergütung**. Überschuss geht unentgeltlich ins Netz. Wirtschaftlich lohnt es sich nur über den Eigenverbrauch – realistisch 200 bis 500 kWh im Jahr, also rund 75 bis 185 € Ersparnis.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für Versorger ist das Balkonkraftwerk ein häufiger Auslöser für Serviceanfragen: Der Kunde meldet einen niedrigeren Zählerstand als erwartet oder wundert sich über eine Zählerwechsel-Ankündigung. Ein kurzer Erklärtext im [[endkundenportal|Portal]] fängt das ab.",
        },
      ],
    },
    related: ["photovoltaik", "marktstammdatenregister", "zaehlertypen", "einspeiseverguetung"],
    sources: [
      { label: "§ 554 BGB – Barrierereduzierung, E-Mobilität und Steckersolargeräte", url: "https://www.gesetze-im-internet.de/bgb/__554.html" },
      { label: "§ 20 WEG – Bauliche Veränderungen", url: "https://www.gesetze-im-internet.de/woeigg/__20.html" },
      { label: "Marktstammdatenregister der Bundesnetzagentur", url: "https://www.marktstammdatenregister.de/MaStR" },
    ],
  },

  {
    slug: "einspeiseverguetung",
    category: "anlagen",
    updated: U2,
    aka: ["EEG-Vergütung", "Überschusseinspeisung", "Volleinspeisung", "Marktprämie", "Direktvermarktung", "Degression"],
    title: { de: "Einspeisevergütung", en: "Feed-in tariff" },
    summary: {
      de: "Der gesetzlich garantierte Preis für ins Netz eingespeisten Solarstrom – 20 Jahre lang fest, seit 2024 halbjährlich um ein Prozent abgesenkt.",
      en: "The statutory price for solar power fed into the grid – fixed for 20 years, reduced by one percent every six months since 2024.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Wer eine [[photovoltaik|PV-Anlage]] betreibt, hat Anspruch auf eine feste Vergütung für jede eingespeiste Kilowattstunde. Der Satz gilt ab Inbetriebnahme **20 Jahre plus das Inbetriebnahmejahr** und ändert sich danach nicht mehr.",
        },
        { t: "h", level: 2, text: "Zwei Modelle" },
        {
          t: "table",
          head: ["Modell", "Was passiert", "Satz ab August 2026 (bis 10 kW)"],
          align: ["l", "l", "r"],
          rows: [
            ["Überschusseinspeisung", "Erst Eigenverbrauch, nur der Rest geht ins Netz", "7,70 ct/kWh"],
            ["Volleinspeisung", "Die gesamte Erzeugung geht ins Netz, kein Eigenverbrauch", "12,22 ct/kWh"],
          ],
          caption:
            "Für größere Dachanlagen sinken die Sätze gestaffelt – bis 40 kW auf 6,67 bzw. 10,23 ct/kWh, bis 100 kW auf 5,44 bzw. 10,23 ct/kWh (Anlagenteil in der jeweiligen Stufe).",
        },
        {
          t: "table",
          head: ["Inbetriebnahme", "Überschuss (bis 10 kW)", "Volleinspeisung (bis 10 kW)"],
          align: ["l", "r", "r"],
          rows: [
            ["Feb. – Jul. 2025", "7,94 ct/kWh", "12,60 ct/kWh"],
            ["Aug. 2025 – Jan. 2026", "7,86 ct/kWh", "12,47 ct/kWh"],
            ["Feb. – Jul. 2026", "7,78 ct/kWh", "12,35 ct/kWh"],
            ["ab Aug. 2026", "7,70 ct/kWh", "12,22 ct/kWh"],
          ],
          caption: "Jede Stufe liegt ein Prozent unter der vorigen; die Bundesnetzagentur veröffentlicht die auf zwei Nachkommastellen bestimmten Werte, Abweichungen in der letzten Stelle gegenüber der eigenen Rechnung sind normal.",
        },
        {
          t: "note",
          kind: "tip",
          text: "Volleinspeisung lohnt sich nur, wenn im Haus kaum Strom verbraucht wird – etwa auf einer Scheune. Sobald ein Haushalt dranhängt, schlägt der [[photovoltaik|Eigenverbrauch]] die höhere Vergütung deutlich: 37 ct gespart wiegt schwerer als 12 ct erlöst.",
        },
        { t: "h", level: 2, text: "Degression" },
        {
          t: "p",
          text: "Seit 2024 sinkt die Vergütung **halbjährlich um ein Prozent** statt monatlich – die Stufen greifen jeweils zum **1. Februar** und zum **1. August**. Maßgeblich ist der Satz am Tag der Inbetriebnahme; ein Grund, warum Installationstermine Ende Januar und Ende Juli regelmäßig zum Streitthema werden.",
        },
        { t: "h", level: 2, text: "Wenn der Strom nichts wert ist" },
        {
          t: "note",
          kind: "law",
          text: "Für Anlagen ab dem 25. Februar 2025 gilt: In Viertelstunden mit **negativem Börsenpreis** entfällt die Vergütung. Die ausgefallene Zeit wird hinten an die 20 Jahre angehängt. Das ist der Kern des Solarspitzengesetzes – es soll verhindern, dass mittags Strom ins Netz gedrückt wird, den niemand braucht.",
        },
        { t: "h", level: 2, text: "Direktvermarktung" },
        {
          t: "p",
          text: "Ab 100 kW installierter Leistung ist die **Direktvermarktung** Pflicht: Der Strom wird über einen Dienstleister an der Börse verkauft, der Betreiber bekommt die Differenz zum anzulegenden Wert als **Marktprämie**. Kleinere Anlagen können freiwillig wechseln – interessant, sobald die Börsenpreise über der festen Vergütung liegen.",
        },
      ],
    },
    related: ["photovoltaik", "eeg-umlage", "dynamischer-tarif", "marktstammdatenregister"],
    sources: [
      { label: "EEG 2023 – Gesetz für den Ausbau erneuerbarer Energien", url: "https://www.gesetze-im-internet.de/eeg_2014/" },
      { label: "Bundesnetzagentur – Fördersätze für Solaranlagen", url: "https://www.bundesnetzagentur.de/" },
    ],
  },

  {
    slug: "batteriespeicher",
    category: "anlagen",
    updated: U,
    aka: ["Heimspeicher", "Stromspeicher", "Hausspeicher", "Akku", "Speicher", "Zyklen"],
    title: { de: "Batteriespeicher", en: "Home battery" },
    summary: {
      de: "Verschiebt PV-Strom vom Mittag in den Abend und hebt die Eigenverbrauchsquote von rund 30 auf 60 bis 70 Prozent.",
      en: "Shifts solar power from midday into the evening, lifting self-consumption from around 30 to 60–70 percent.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Eine PV-Anlage produziert dann am meisten, wenn niemand zu Hause ist. Der Speicher löst dieses Timing-Problem: Er nimmt den Mittagsüberschuss auf und gibt ihn abends wieder ab.",
        },
        { t: "h", level: 2, text: "Auslegung" },
        {
          t: "ul",
          items: [
            "Faustregel: **etwa 1 kWh nutzbare Kapazität je 1 kWp** Anlagenleistung",
            "Typisch im Einfamilienhaus: 5 bis 10 kWh",
            "Größer ist selten besser – die zusätzlichen Kilowattstunden werden nur an wenigen Tagen im Jahr gebraucht",
            "Wirkungsgrad des Speicherzyklus: rund 90 %, es gehen also etwa 10 % verloren",
          ],
        },
        { t: "figure", id: "pv-rechner" },
        { t: "h", level: 2, text: "Was der Speicher sonst noch kann" },
        {
          t: "cards",
          items: [
            { title: "Notstrom", text: "Nur wenn er ausdrücklich notstromfähig ist – die meisten Speicher schalten bei Netzausfall aus Sicherheitsgründen ab." },
            { title: "Dynamische Tarife", text: "Mit einem [[dynamischer-tarif|dynamischen Tarif]] kann der Speicher in günstigen Stunden aus dem Netz laden statt nur aus der PV." },
            { title: "§ 14a EnWG", text: "Als steuerbare Verbrauchseinrichtung über 4,2 kW fällt er unter [[paragraf-14a-enwg|§ 14a]] – mit reduziertem Netzentgelt." },
            { title: "Netzdienlichkeit", text: "Größere Speicher können am Regelenergiemarkt teilnehmen, meist gebündelt über einen Aggregator." },
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Ein Speicher rechnet sich selten allein über die Stromkostenersparnis. Er verkauft sich über Unabhängigkeit und Komfort – und wird wirtschaftlich, wenn er zusätzlich Wärmepumpe oder Wallbox versorgt.",
        },
      ],
    },
    related: ["photovoltaik", "energiemanagement", "paragraf-14a-enwg", "dynamischer-tarif"],
  },

  {
    slug: "waermepumpe",
    category: "anlagen",
    featured: true,
    updated: U2,
    aka: ["Heizungswärmepumpe", "JAZ", "Jahresarbeitszahl", "COP", "Heizstrom", "Wärmepumpentarif"],
    title: { de: "Wärmepumpe", en: "Heat pump" },
    summary: {
      de: "Macht aus einer Kilowattstunde Strom drei bis vier Kilowattstunden Wärme, indem sie Umweltwärme auf ein nutzbares Temperaturniveau hebt.",
      en: "Turns one kilowatt-hour of electricity into three or four of heat by lifting ambient warmth to a usable temperature.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Eine Wärmepumpe erzeugt keine Wärme, sie **transportiert** sie – von draußen nach drinnen, gegen das natürliche Temperaturgefälle. Die dafür nötige Antriebsenergie ist Strom, und das Verhältnis von gewonnener Wärme zu eingesetztem Strom ist die entscheidende Kennzahl.",
        },
        { t: "h", level: 2, text: "JAZ und COP" },
        {
          t: "dl",
          items: [
            { term: "COP (Coefficient of Performance)", def: "Der Momentanwert im Prüfstand, bei definierten Temperaturen. Marketingfreundlich, aber wenig aussagekräftig für den Alltag." },
            { term: "JAZ (Jahresarbeitszahl)", def: "Das reale Verhältnis über ein ganzes Jahr, inklusive kalter Tage, Abtauung und Heizstab. Das ist die Zahl, die zählt." },
          ],
        },
        {
          t: "formula",
          expr: "JAZ  =  Wärme abgegeben [kWh]  ÷  Strom aufgenommen [kWh]",
          where: [
            { sym: "JAZ 3,5", desc: "aus 1 kWh Strom werden 3,5 kWh Wärme – 71 % kommen kostenlos aus der Umwelt" },
            { sym: "Typisch", desc: "3,2 – 3,8 bei Luft-Wasser, 4,0 – 4,5 bei Sole-Wasser" },
          ],
        },
        { t: "figure", id: "waermepumpe-rechner" },
        { t: "h", level: 2, text: "Wovon die Effizienz abhängt" },
        {
          t: "ul",
          items: [
            "**Vorlauftemperatur** – der größte Hebel. Fußbodenheizung mit 35 °C statt Heizkörper mit 55 °C hebt die JAZ um rund 1,0",
            "**Wärmequelle** – siehe [[waermepumpen-typen|Bauarten]]: Erdreich schlägt Außenluft, besonders im Winter",
            "**Hydraulischer Abgleich** und richtige Auslegung – eine zu groß dimensionierte Anlage taktet und verliert Effizienz",
            "**Heizstab** – jede Kilowattstunde aus dem elektrischen Zusatzheizer drückt die JAZ direkt nach unten",
          ],
        },
        { t: "h", level: 2, text: "Tarif und Netzentgelt" },
        {
          t: "p",
          text: "Wärmepumpen über 4,2 kW fallen unter [[paragraf-14a-enwg|§ 14a EnWG]]: Der Netzbetreiber darf sie im Notfall auf 4,2 kW drosseln, dafür gibt es reduzierte [[netzentgelte|Netzentgelte]] – wahlweise als **Modul 1** (pauschale Reduzierung), **Modul 2** (prozentual abgesenkter Arbeitspreis, setzt einen separaten Zählpunkt voraus) oder seit dem 1. April 2025 zusätzlich **Modul 3** (zeitvariables Netzentgelt, nur in Kombination mit Modul 1). Mit separatem Zähler liegen Wärmepumpentarife 2026 bei rund 21 bis 26 ct/kWh statt 33 bis 40 ct/kWh im Haushaltstarif.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Beim Verkauf ist die JAZ die Zahl, an der später alles gemessen wird – auch die Kundenzufriedenheit. Eine ehrliche Prognose auf Basis von Gebäude und Vorlauftemperatur schlägt jede Prospektangabe. Wer mit COP-Werten wirbt und der Kunde rechnet später mit der JAZ nach, hat ein Problem.",
        },
      ],
    },
    related: ["waermepumpen-typen", "heizungsarten", "paragraf-14a-enwg", "energiemanagement"],
    sources: [
      { label: "§ 14a EnWG – Netzorientierte Steuerung steuerbarer Verbrauchseinrichtungen", url: "https://www.gesetze-im-internet.de/enwg_2005/__14a.html" },
      { label: "Bundesnetzagentur – Festlegungen zu § 14a EnWG", url: "https://www.bundesnetzagentur.de/" },
    ],
  },

  {
    slug: "waermepumpen-typen",
    category: "anlagen",
    updated: U,
    aka: ["Luft-Wasser", "Sole-Wasser", "Wasser-Wasser", "Luft-Luft", "Erdwärme", "Brauchwasserwärmepumpe", "Erdsonde"],
    title: { de: "Bauarten von Wärmepumpen", en: "Types of heat pump" },
    summary: {
      de: "Luft, Erdreich oder Grundwasser als Quelle – der Name einer Wärmepumpe nennt immer erst die Wärmequelle, dann das Medium, an das sie abgibt.",
      en: "Air, ground or groundwater as the source – a heat pump's name always states the source first, then the medium it feeds.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "„Luft-Wasser“, „Sole-Wasser“, „Luft-Luft“: Das Schema ist immer gleich. Der erste Teil ist die Wärmequelle, der zweite das Medium, an das die Wärme abgegeben wird. Daraus folgen Effizienz, Erschließungsaufwand und Genehmigungsbedarf.",
        },
        { t: "figure", id: "waermepumpen-typen" },
        {
          t: "note",
          kind: "info",
          text: "Für die Förderung gelten Mindestwerte: Luft-Wasser-Wärmepumpen müssen eine [[waermepumpe|JAZ]] von mindestens 3,0 erreichen, Sole-Wasser- und Wasser-Wasser-Wärmepumpen mindestens 3,8.",
        },
        { t: "h", level: 2, text: "Was in der Praxis entscheidet" },
        {
          t: "ol",
          items: [
            "**Grundstück** – ohne Fläche oder Bohrgenehmigung bleibt nur Luft als Quelle",
            "**Schall** – Luft-Wärmepumpen stehen draußen und müssen die TA Lärm einhalten, besonders nachts und in engen Grundstücksgrenzen",
            "**Vorlauftemperatur** des vorhandenen Heizsystems – sie entscheidet mehr über die Effizienz als die Bauart",
            "**Warmwasser** – Luft-Luft-Systeme machen keins, hier braucht es eine zweite Lösung",
          ],
        },
      ],
    },
    related: ["waermepumpe", "heizungsarten", "solarthermie"],
  },

  {
    slug: "heizungsarten",
    category: "anlagen",
    updated: U,
    aka: ["Heizung", "GEG", "Gebäudeenergiegesetz", "Gebäudemodernisierungsgesetz", "Heizungsgesetz", "Bio-Treppe", "Brennwertkessel", "Pellet", "Hybridheizung"],
    title: { de: "Heizsysteme im Überblick", en: "Heating systems" },
    summary: {
      de: "Wärmepumpe, Gas-Brennwert, Fernwärme, Pellet oder Hybrid – seit dem Gebäudemodernisierungsgesetz vom Juli 2026 wählt der Eigentümer wieder frei, die Anforderungen kommen über den Brennstoff.",
      en: "Heat pump, condensing gas, district heating, pellets or hybrid – since the July 2026 building law, owners choose freely and the requirements arrive via the fuel instead.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Die Heizung ist der größte Energieverbraucher im Gebäude – und der Punkt, an dem Energiepolitik für Haushalte konkret wird. Die Regeln haben sich 2026 grundlegend geändert.",
        },
        { t: "figure", id: "heizungsvergleich" },
        { t: "h", level: 2, text: "Was das Gebäudemodernisierungsgesetz geändert hat" },
        {
          t: "note",
          kind: "law",
          text: "Zum **29. Juli 2026** hat das Gebäudemodernisierungsgesetz das bisherige Heizungsgesetz abgelöst. Die Pflicht, dass jede neue Heizung sofort **65 % erneuerbare Energie** nutzen muss, ist entfallen. Eigentümer entscheiden wieder frei zwischen Wärmepumpe, Fernwärme, Hybrid, Biomasse, Gas und Öl.",
        },
        {
          t: "p",
          text: "An die Stelle der Anlagenvorgabe tritt die **Bio-Treppe**: Ab 2029 wird Gas und Öl schrittweise ein wachsender Bioanteil beigemischt, bis alle Brennstoffe 2045 klimaneutral sein müssen. Eine gesonderte Grünstromquote für Gas ab 2028 wird bis Dezember 2026 gesetzlich ausgestaltet.",
        },
        {
          t: "note",
          kind: "tip",
          text: "Für die Beratung heißt das: Die Frage ist nicht mehr „darf ich noch eine Gasheizung einbauen?“, sondern „was kostet mich der Brennstoff in fünfzehn Jahren?“ – mit steigendem [[co2-preis|CO₂-Preis]] und steigender Beimischungsquote.",
        },
        { t: "h", level: 2, text: "Förderung" },
        {
          t: "p",
          text: "Die Heizungsförderung läuft weiter und ist bis mindestens 2029 abgesichert. Seit dem 21. Juli 2026 gelten reformierte Bedingungen: einkommensabhängige Boni (40 % unter 30.000 €, 30 % bis 40.000 €, 10 % bis 50.000 € Haushaltseinkommen), ein Kinderzuschlag, der 10.000 € vom angerechneten Einkommen abzieht, und gesenkte Kostenobergrenzen – höchstens 28.000 €, halbjährlich um 750 € fallend.",
        },
        { t: "h", level: 2, text: "Die Systeme" },
        {
          t: "dl",
          items: [
            { term: "[[waermepumpe|Wärmepumpe]]", def: "Höchste Effizienz, Strom als Energieträger, Förderung und reduziertes Netzentgelt nach [[paragraf-14a-enwg|§ 14a]]." },
            { term: "Gas-Brennwertkessel", def: "Günstig in der Anschaffung, rund 92 % Nutzungsgrad, aber Brennstoffkosten mit [[co2-preis|CO₂-Preis]] und künftiger Beimischungspflicht." },
            { term: "[[fernwaerme|Fernwärme]]", def: "Keine eigene Anlage, kein Schornstein – dafür kein Anbieterwechsel und Preisgleitklauseln." },
            { term: "Pelletkessel", def: "Bilanziell nahezu CO₂-neutral, braucht aber Lagerraum und regelmäßige Beschickung." },
            { term: "Hybridheizung", def: "Wärmepumpe plus Spitzenlastkessel. Deckt kalte Tage mit Gas ab und hält die Wärmepumpe klein." },
            { term: "[[solarthermie|Solarthermie]]", def: "Kein eigenständiges System, sondern eine Ergänzung für Warmwasser und Heizungsunterstützung." },
          ],
        },
      ],
    },
    related: ["waermepumpe", "fernwaerme", "co2-preis", "solarthermie"],
    sources: [
      {
        label: "Bundesregierung – Neues Gebäudemodernisierungsgesetz",
        url: "https://www.bundesregierung.de/breg-de/aktuelles/neues-gebaeudemodernisierungsgesetz-2430284",
      },
    ],
  },

  {
    slug: "solarthermie",
    category: "anlagen",
    updated: U,
    aka: ["Sonnenkollektor", "Flachkollektor", "Röhrenkollektor", "Warmwasser Solar"],
    title: { de: "Solarthermie", en: "Solar thermal" },
    summary: {
      de: "Macht aus Sonnenlicht direkt Wärme statt Strom – effizienter je Quadratmeter als Photovoltaik, aber nur für Warmwasser und Heizungsunterstützung nutzbar.",
      en: "Turns sunlight directly into heat rather than electricity – more efficient per square metre than PV, but only usable for hot water and space heating.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Solarthermie und [[photovoltaik|Photovoltaik]] werden ständig verwechselt. Der Unterschied ist grundlegend: Solarthermie erzeugt **Wärme**, Photovoltaik erzeugt **Strom**. Eine Solarthermieanlage speist kein Netz, sie heizt einen Wasserspeicher.",
        },
        {
          t: "table",
          head: ["", "Solarthermie", "[[photovoltaik|Photovoltaik]]"],
          rows: [
            ["Erzeugt", "Wärme", "Strom"],
            ["Wirkungsgrad je m²", "rund 50 – 70 %", "rund 20 %"],
            ["Nutzbar für", "Warmwasser, Heizungsunterstützung", "alles, was Strom braucht"],
            ["Überschuss", "verpufft, wenn der Speicher voll ist", "geht ins Netz, [[einspeiseverguetung|vergütet]]"],
            ["Kombination", "mit Kessel oder Wärmepumpe", "mit [[batteriespeicher|Speicher]], [[waermepumpe|Wärmepumpe]], [[wallbox|Wallbox]]"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Weil PV-Strom über eine Wärmepumpe ebenfalls Wärme erzeugen kann – und dabei flexibel bleibt –, hat Photovoltaik der Solarthermie im Neubau weitgehend den Rang abgelaufen. Im Bestand mit vorhandenem Speicher bleibt sie eine sinnvolle Ergänzung.",
        },
        { t: "h", level: 2, text: "Bauarten" },
        {
          t: "ul",
          items: [
            "**Flachkollektor** – günstig, robust, der Standard für Warmwasser",
            "**Vakuumröhrenkollektor** – höherer Ertrag bei geringer Einstrahlung und im Winter, teurer",
            "Typische Auslegung: rund 1,5 m² je Person für Warmwasser, 0,8 bis 1 m² je 10 m² Wohnfläche für Heizungsunterstützung",
          ],
        },
      ],
    },
    related: ["photovoltaik", "heizungsarten", "waermepumpe"],
  },

  {
    slug: "bhkw",
    category: "anlagen",
    updated: U2,
    aka: ["Blockheizkraftwerk", "KWK", "Kraft-Wärme-Kopplung", "Mini-BHKW", "Brennstoffzelle"],
    title: { de: "Blockheizkraftwerk (BHKW)", en: "Combined heat and power unit" },
    summary: {
      de: "Erzeugt Strom und Wärme gleichzeitig aus einem Brennstoff und erreicht dadurch Gesamtwirkungsgrade von über 90 Prozent.",
      en: "Generates electricity and heat from one fuel at the same time, reaching total efficiencies above 90 percent.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Ein Motor verbrennt Gas, treibt einen Generator an und erzeugt Strom. Die dabei anfallende Abwärme wird nicht weggekühlt, sondern zum Heizen genutzt. Genau diese Doppelnutzung ist das Prinzip der [[kwk-umlage|Kraft-Wärme-Kopplung]].",
        },
        { t: "h", level: 2, text: "Wärmegeführt, nicht stromgeführt" },
        {
          t: "p",
          text: "Ein BHKW läuft dann, wenn Wärme gebraucht wird – der Strom fällt nebenbei an. Deshalb ist die entscheidende Auslegungsgröße die Wärmelast, nicht der Strombedarf. Ein zu groß dimensioniertes BHKW erreicht zu wenige Vollbenutzungsstunden und rechnet sich nicht.",
        },
        { t: "h", level: 2, text: "Vergütung" },
        {
          t: "ul",
          items: [
            "**KWK-Zuschlag** nach dem KWKG für jede **eingespeiste** Kilowattstunde, gestaffelt nach Leistung; für selbst verbrauchten Strom gibt es ihn nur bei kleinen Anlagen bis 100 kW, und dort zu einem reduzierten Satz",
            "Der übliche Strompreis für eingespeisten Strom; **vermiedene Netznutzungsentgelte** erhalten nur noch Bestandsanlagen – für Anlagen mit Inbetriebnahme ab 2023 sind sie nach § 18 StromNEV abgeschafft",
            "**Energiesteuerentlastung** auf das eingesetzte Gas unter bestimmten Bedingungen",
            "Der selbst genutzte Strom spart den vollen Bezugspreis – wie bei [[photovoltaik|PV]] der stärkste Hebel",
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "Die **Brennstoffzelle** ist die leise, wartungsarme Variante fürs Einfamilienhaus: Sie erzeugt Strom elektrochemisch statt über einen Motor, mit höherem elektrischem Wirkungsgrad und weniger Wärme je Kilowattstunde Strom.",
        },
        {
          t: "note",
          kind: "warn",
          text: "Abrechnungstechnisch ist ein BHKW anspruchsvoll: Es gibt Erzeugung, Eigenverbrauch, Einspeisung, Wärmeabgabe und je nach Konstellation Fragen zur [[stromsteuer|Stromsteuer]] und zur Umlagepflicht auf selbst verbrauchten Strom. Hier lohnt eine saubere Modellierung von Anfang an.",
        },
      ],
    },
    related: ["kwk-umlage", "photovoltaik", "fernwaerme", "stromsteuer"],
    sources: [
      { label: "§ 18 StromNEV – Entgelt für dezentrale Einspeisung", url: "https://www.gesetze-im-internet.de/stromnev/__18.html" },
      { label: "KWKG – Kraft-Wärme-Kopplungsgesetz", url: "https://www.gesetze-im-internet.de/kwkg_2016/" },
    ],
  },

  {
    slug: "wallbox",
    category: "anlagen",
    updated: U2,
    aka: ["Ladepunkt", "Ladestation", "Elektroauto laden", "11 kW", "Ladeinfrastruktur", "THG-Quote"],
    title: { de: "Wallbox und Ladeinfrastruktur", en: "Wallbox and charging" },
    summary: {
      de: "Der Ladepunkt zu Hause – meist 11 kW, damit anmeldepflichtig beim Netzbetreiber und ab 4,2 kW steuerbar nach § 14a EnWG.",
      en: "The home charging point – usually 11 kW, which means registration with the grid operator and controllability under § 14a EnWG.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Eine Wallbox ist der größte Einzelverbraucher, den ein Haushalt neu anschließt. 11 kW entsprechen dem Anschlusswert von fünf Wasserkochern gleichzeitig – deshalb interessiert sich der [[netzbetreiber|Netzbetreiber]] dafür.",
        },
        { t: "h", level: 2, text: "Leistungsklassen" },
        {
          t: "table",
          head: ["Leistung", "Ladezeit für 50 kWh", "Formalitäten"],
          align: ["l", "l", "l"],
          rows: [
            ["2,3 kW (Schuko)", "rund 22 Stunden", "keine, aber nicht dauerlasttauglich"],
            ["11 kW (dreiphasig)", "rund 4,5 Stunden", "Anmeldung beim Netzbetreiber"],
            ["22 kW", "rund 2,5 Stunden", "Genehmigung durch den Netzbetreiber"],
          ],
        },
        {
          t: "note",
          kind: "info",
          text: "11 kW ist der Standard für zu Hause, weil bis 12 kW nur eine Anmeldung nötig ist – darüber wird es genehmigungspflichtig. Für ein Auto, das über Nacht steht, reicht das ohnehin bei Weitem.",
        },
        { t: "h", level: 2, text: "§ 14a und Tarif" },
        {
          t: "p",
          text: "Als steuerbare Verbrauchseinrichtung über 4,2 kW fällt die Wallbox unter [[paragraf-14a-enwg|§ 14a EnWG]]. Der Netzbetreiber darf sie im Engpassfall auf 4,2 kW drosseln – genug für rund 20 Kilometer Reichweite je Stunde. Im Gegenzug gibt es reduzierte [[netzentgelte|Netzentgelte]] in drei Modulen: **Modul 1** ist eine pauschale Reduzierung des Netzentgelts, **Modul 2** eine prozentuale Absenkung des Arbeitspreises über einen separaten Zählpunkt, und seit dem 1. April 2025 kann **Modul 3** – ein zeitvariables Netzentgelt mit günstigen Zeitfenstern – zusätzlich zu Modul 1 gewählt werden.",
        },
        {
          t: "note",
          kind: "tip",
          text: "Die Wallbox ist der beste Anlass für einen [[dynamischer-tarif|dynamischen Tarif]]: Sie ist der einzige große Verbraucher, dessen Zeitpunkt dem Kunden wirklich egal ist. Ein Ladevorgang um drei Uhr nachts kostet oft die Hälfte eines Ladevorgangs um 18 Uhr.",
        },
        { t: "h", level: 2, text: "THG-Quote" },
        {
          t: "p",
          text: "Halter eines reinen Elektroautos können ihre eingesparten Emissionen als **Treibhausgasminderungsquote** an Mineralölunternehmen verkaufen – meist über einen Vermittler, für einige Dutzend bis wenige Hundert Euro im Jahr. Für öffentlich zugängliche Ladepunkte lässt sich zusätzlich die geladene Strommenge anmelden.",
        },
      ],
    },
    related: ["paragraf-14a-enwg", "dynamischer-tarif", "energiemanagement", "erzeugungsanlagen"],
    sources: [
      { label: "§ 14a EnWG – Netzorientierte Steuerung steuerbarer Verbrauchseinrichtungen", url: "https://www.gesetze-im-internet.de/enwg_2005/__14a.html" },
      { label: "Bundesnetzagentur – Festlegungen zu § 14a EnWG", url: "https://www.bundesnetzagentur.de/" },
    ],
  },

  {
    slug: "energiemanagement",
    category: "anlagen",
    updated: U,
    aka: ["HEMS", "Energiemanagementsystem", "Home Energy Management", "Steuerbox", "Lastmanagement"],
    title: { de: "Energiemanagementsystem (HEMS)", en: "Home energy management" },
    summary: {
      de: "Die Software, die entscheidet, wann welches Gerät läuft: Sie verteilt PV-Überschuss, verschiebt Lasten in günstige Stunden und hält den Hausanschluss im Rahmen.",
      en: "The software that decides when each device runs: distributing solar surplus, shifting loads into cheap hours and keeping the connection within limits.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Sobald ein Haushalt PV, Speicher, Wärmepumpe und Wallbox hat, konkurrieren vier Geräte um denselben Strom und denselben Hausanschluss. Ein Energiemanagementsystem koordiniert sie.",
        },
        { t: "h", level: 2, text: "Was es tut" },
        {
          t: "ol",
          items: [
            "**Überschuss verteilen** – PV-Strom zuerst ins Haus, dann in den [[batteriespeicher|Speicher]], dann ins Auto, erst zuletzt ins Netz",
            "**Lasten verschieben** – bei [[dynamischer-tarif|dynamischem Tarif]] in die günstigen Stunden, bei PV in die Mittagszeit",
            "**Anschluss schützen** – Lastmanagement, damit Wallbox und Wärmepumpe nicht gemeinsam die Hausanschlusssicherung auslösen",
            "**§ 14a umsetzen** – Steuersignale des Netzbetreibers entgegennehmen und intelligent auf die Geräte verteilen",
          ],
        },
        { t: "h", level: 2, text: "Wie es an die Geräte kommt" },
        {
          t: "p",
          text: "Der offizielle Weg führt über die **HAN-Schnittstelle** des [[intelligentes-messsystem|Smart-Meter-Gateways]] und eine Steuerbox. Daneben existieren herstellereigene Protokolle, EEBus und SG-Ready-Kontakte an Wärmepumpen. In der Praxis ist die Integrationstiefe der Punkt, an dem sich Produkte unterscheiden – nicht die Oberfläche.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Ein HEMS ist der natürliche Ankerpunkt für Zusatzprodukte: Es sieht Erzeugung, Verbrauch und Preise in Echtzeit und ist damit der Ort, an dem ein [[dynamischer-tarif|dynamischer Tarif]] überhaupt erst Nutzen stiftet. Ohne Automatik bleibt der Vorteil solcher Tarife weitgehend theoretisch.",
        },
      ],
    },
    related: ["batteriespeicher", "dynamischer-tarif", "paragraf-14a-enwg", "intelligentes-messsystem"],
  },

  {
    slug: "marktstammdatenregister",
    category: "anlagen",
    updated: U2,
    aka: ["MaStR", "Anlagenregister", "Registrierung", "Anlagenanmeldung", "Inbetriebnahme"],
    title: { de: "Marktstammdatenregister (MaStR)", en: "Core energy market data register" },
    summary: {
      de: "Das Register der Bundesnetzagentur, in dem jede Erzeugungsanlage und jeder Speicher eingetragen sein muss – innerhalb eines Monats nach Inbetriebnahme.",
      en: "The regulator's register in which every generation unit and storage system must be entered within a month of commissioning.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Das MaStR ist die zentrale Datenbank aller Anlagen im deutschen Energiesystem – von der 300-Watt-Balkonanlage bis zum Kernkraftwerk. Ohne Eintrag gibt es keine [[einspeiseverguetung|Einspeisevergütung]].",
        },
        { t: "h", level: 2, text: "Was eingetragen werden muss" },
        {
          t: "ul",
          items: [
            "jede Anlage zur Stromerzeugung, auch [[balkonkraftwerk|Steckersolargeräte]]",
            "jeder [[batteriespeicher|Batteriespeicher]]",
            "Fristen: **innerhalb eines Monats** nach Inbetriebnahme",
            "Änderungen – Erweiterung, Stilllegung, Betreiberwechsel – ebenfalls binnen eines Monats",
            "der **Betreiber** selbst, als eigener Marktakteur – die Registrierung der Person oder Firma ist ein getrennter Schritt vor der Registrierung der Einheit",
          ],
        },
        {
          t: "note",
          kind: "warn",
          text: "Zwei Meldungen, nicht eine: Die Registrierung im MaStR ersetzt **nicht** die technische Anmeldung beim [[netzbetreiber|Netzbetreiber]] – außer bei Steckersolargeräten, wo diese seit dem Solarpaket I entfällt. Umgekehrt ersetzt die Netzbetreiber-Anmeldung nie den MaStR-Eintrag.",
        },
        { t: "h", level: 2, text: "Warum das für Systeme relevant ist" },
        {
          t: "p",
          text: "Die **MaStR-Nummer** identifiziert eine Anlage eindeutig, ähnlich wie die [[marktlokation|MaLo-ID]] eine Entnahmestelle. Sie taucht in Vergütungsprozessen und im Datenaustausch auf und gehört deshalb in jedes Datenmodell, das Erzeugungsanlagen abbildet. Das Register ist zudem öffentlich einsehbar – nützlich für Plausibilitätsprüfungen.",
        },
        {
          t: "table",
          head: ["Präfix", "Objekt"],
          rows: [
            ["`SEE`", "Stromerzeugungseinheit, etwa eine PV-Anlage oder ein BHKW"],
            ["`SGE`", "Gaserzeugungseinheit"],
            ["`SSE`", "Stromspeichereinheit, also ein [[batteriespeicher|Batteriespeicher]]"],
            ["`ABR`", "Anlagenbetreiber – die Person oder Firma, nicht die Anlage"],
          ],
          caption: "Aufbau der MaStR-Nummer: ein Präfix aus drei Buchstaben, gefolgt von zwölf Ziffern.",
        },
        {
          t: "p",
          text: "Für die Anbindung eigener Systeme stellt das Register einen **Gesamtdatenexport** als CSV/XML-Download sowie eine öffentliche Web-Schnittstelle bereit. Damit lassen sich Anlagendaten aus dem Onboarding automatisiert gegen den amtlichen Eintrag prüfen, statt sie abzutippen.",
        },
      ],
    },
    related: ["photovoltaik", "balkonkraftwerk", "einspeiseverguetung", "erzeugungsanlagen"],
    sources: [
      { label: "Marktstammdatenregister der Bundesnetzagentur", url: "https://www.marktstammdatenregister.de/MaStR" },
      { label: "MaStR – Datendownload (Gesamtdatenexport)", url: "https://www.marktstammdatenregister.de/MaStR/Datendownload" },
    ],
  },

  {
    slug: "netzanschluss",
    category: "anlagen",
    updated: U2,
    aka: ["Hausanschluss", "Netzanschlussvertrag", "Anschlussnutzung", "Anschlussnehmer", "Anschlussnutzer", "Baukostenzuschuss", "BKZ", "NAV", "Anschlussbegehren", "§ 8 EEG", "Netzverträglichkeitsprüfung", "Inbetriebsetzungsprotokoll"],
    title: { de: "Netzanschluss und Anlagenanmeldung", en: "Grid connection and installation registration" },
    summary: {
      de: "Die physische Verbindung eines Grundstücks mit dem Verteilnetz – geregelt in der NAV – und der Weg, auf dem eine Erzeugungsanlage über Installateur und Netzbetreiber ans Netz kommt.",
      en: "The physical link between a property and the distribution grid – governed by the NAV – and the path by which a generating installation reaches the grid via installer and grid operator.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Bevor ein Zähler hängt, ein Tarif gilt oder eine PV-Anlage einspeist, braucht es einen Netzanschluss. Er ist ein eigenes Rechtsverhältnis mit eigenen Vertragspartnern, eigenen Kosten und – bei Erzeugungsanlagen – einem eigenen Anmeldeprozess mit gesetzlichen Fristen.",
        },
        { t: "h", level: 2, text: "Zwei Rechtsverhältnisse, zwei Personen" },
        {
          t: "p",
          text: "Die **Niederspannungsanschlussverordnung (NAV)** trennt zwischen dem Anschluss selbst und seiner Nutzung. Das ist der Grund, warum in einem Mietshaus der Eigentümer und der Mieter unterschiedliche Verträge mit dem [[netzbetreiber|Netzbetreiber]] haben – ohne dass einer von beiden sie je unterschrieben hat.",
        },
        {
          t: "table",
          head: ["", "Netzanschlussverhältnis", "Anschlussnutzungsverhältnis"],
          rows: [
            ["Vertragspartner", "**Anschlussnehmer** – in der Regel der Grundstückseigentümer", "**Anschlussnutzer** – wer den Anschluss tatsächlich zur Entnahme nutzt, also auch der Mieter"],
            ["Gegenstand", "Herstellung, Betrieb, Änderung und Unterhaltung des Hausanschlusses", "Recht, über den Anschluss Strom zu entnehmen oder einzuspeisen"],
            ["Zustandekommen", "Netzanschlussvertrag, meist mit dem Bauantrag", "konkludent durch die Entnahme (§ 3 NAV)"],
            ["Kosten", "Hausanschlusskosten und Baukostenzuschuss", "keine eigenen – Netzentgelte laufen über den Lieferanten"],
            ["Ende", "Rückbau oder Eigentümerwechsel", "Auszug"],
          ],
        },
        {
          t: "p",
          text: "Der Anschlussnutzer ist auch Vertragspartner des [[messstellenbetrieb|Messstellenbetreibers]] und derjenige, den der [[energieliefervertrag|Liefervertrag]] adressiert – siehe [[letztverbraucher|Kundenarten]].",
        },
        { t: "h", level: 2, text: "Was der Anschluss kostet" },
        {
          t: "dl",
          items: [
            { term: "Hausanschlusskosten (§ 9 NAV)", def: "Die tatsächlichen Kosten für Herstellung oder Änderung des Anschlusses von der Straßenleitung bis zum Hausanschlusskasten. Der Netzbetreiber darf sie in Rechnung stellen – nach Aufwand oder als Pauschale." },
            { term: "Baukostenzuschuss (§ 11 NAV)", def: "Ein anteiliger Beitrag zu den Kosten des vorgelagerten Netzes, bemessen an der vorgehaltenen Leistung. Für Standard-Hausanschlüsse bis 30 kW Leistungsbedarf verlangen viele Netzbetreiber keinen BKZ; darüber wird er relevant, etwa bei Wärmepumpe plus Wallbox oder im Gewerbe." },
            { term: "Netzverträglichkeitsprüfung", def: "Vor Zusage prüft der Netzbetreiber, ob Leitung und Ortsnetzstation die zusätzliche Last oder Einspeisung tragen. Bei Erzeugungsanlagen ist das der Kern der Antwort auf das Anschlussbegehren; sie kann einen anderen Verknüpfungspunkt oder eine Netzverstärkung ergeben." },
          ],
        },
        { t: "h", level: 2, text: "Erzeugungsanlagen: Anschlussbegehren nach § 8 EEG" },
        {
          t: "p",
          text: "Für [[photovoltaik|PV-Anlagen]], [[bhkw|BHKW]] und andere EEG-Anlagen hat der Betreiber einen **Anspruch auf Anschluss**: Der Netzbetreiber muss die Anlage unverzüglich und vorrangig an dem Punkt anschließen, der nach Spannungsebene und Entfernung am günstigsten ist (§ 8 Abs. 1 EEG). Der Prozess läuft in der Praxis über das Portal des Verteilnetzbetreibers.",
        },
        {
          t: "steps",
          items: [
            { title: "Anschlussbegehren stellen", text: "Der Installateur oder Betreiber übermittelt Standort, Leistung, Wechselrichter- und Speicherdaten und das gewünschte Messkonzept – meist im VNB-Portal." },
            { title: "Antwort des Netzbetreibers", text: "Er muss dem Anschlussbegehrenden **unverzüglich, spätestens acht Wochen** nach Eingang einen Zeitplan für die Bearbeitung übermitteln und die notwendigen Informationen bereitstellen (§ 8 Abs. 5 und 6 EEG). Das Ergebnis ist die Anschlusszusage mit Verknüpfungspunkt." },
            { title: "Installation und Inbetriebsetzung", text: "Ein in das **Installateurverzeichnis** des Netzbetreibers eingetragener Elektrofachbetrieb (§ 13 NAV) baut die Anlage, setzt sie in Betrieb und erstellt das **Inbetriebsetzungsprotokoll** nach VDE-AR-N 4105." },
            { title: "Zählersetzung", text: "Der Messstellenbetreiber tauscht auf einen [[zaehlertypen|Zweirichtungszähler]]; ab 7 kW ist ein [[intelligentes-messsystem|intelligentes Messsystem]] Pflichteinbaufall." },
            { title: "Registrierung im MaStR", text: "Innerhalb eines Monats nach Inbetriebnahme im [[marktstammdatenregister|Marktstammdatenregister]] – ohne Eintrag keine [[einspeiseverguetung|Einspeisevergütung]]." },
          ],
        },
        {
          t: "note",
          kind: "law",
          text: "**Fiktive Zustimmung für Kleinanlagen**: Antwortet der Netzbetreiber auf ein vollständiges Anschlussbegehren für eine Anlage bis **30 kW** nicht innerhalb **eines Monats**, gilt der Anschluss am Verknüpfungspunkt des bestehenden Hausanschlusses als zugesagt (§ 8 Abs. 5 EEG in der Fassung des Solarpakets I, seit Mai 2024; zuvor galt die Regel für Anlagen bis 10,8 kW). Für [[balkonkraftwerk|Steckersolargeräte]] entfällt die Anmeldung beim Netzbetreiber ganz.",
        },
        { t: "h", level: 2, text: "Wo Prozesse stocken" },
        {
          t: "ul",
          items: [
            "**Unvollständige Anträge**: Die Ein-Monats-Frist läuft erst ab vollständigem Begehren – jedes fehlende Datenblatt setzt sie zurück",
            "**Netzverstärkung nötig**: Dann verschiebt sich der Anschluss um Monate; der Betreiber hat Anspruch auf Information über Umfang und Zeitplan",
            "**Anschlussnehmer ist nicht Betreiber**: Beim Mieter mit PV oder bei [[mieterstrom|Mieterstrom]] muss der Eigentümer der Änderung des Netzanschlusses zustimmen",
            "**Portal-Vielfalt**: Rund 850 Verteilnetzbetreiber mit eigenen Portalen und Formularen; einheitliche Schnittstellen entstehen erst schrittweise",
          ],
        },
        {
          t: "note",
          kind: "praxis",
          text: "Wer Anlagen verkauft oder Installateure anbindet, sollte den Anschlussprozess als **Zustandsobjekt** mit den Meilensteinen Begehren gestellt → Zusage → Inbetriebsetzung → Zähler gesetzt → MaStR registriert führen. Das Inbetriebnahmedatum aus dem Protokoll bestimmt den Vergütungssatz und die MaStR-Frist – es gehört als eigenes Feld ins Datenmodell, getrennt vom Installationsdatum und vom Datum der Zählersetzung.",
        },
      ],
    },
    related: ["erzeugungsanlagen", "photovoltaik", "marktstammdatenregister", "netzbetreiber", "letztverbraucher", "eigenverbrauch", "messstellenbetrieb"],
    sources: [
      { label: "Niederspannungsanschlussverordnung (NAV)", url: "https://www.gesetze-im-internet.de/nav/" },
      { label: "§ 8 EEG 2023 – Anschluss", url: "https://www.gesetze-im-internet.de/eeg_2014/__8.html" },
      { label: "Marktstammdatenregister der Bundesnetzagentur", url: "https://www.marktstammdatenregister.de/MaStR" },
    ],
  },

  {
    slug: "eigenverbrauch",
    category: "anlagen",
    updated: U2,
    aka: ["Eigenversorgung", "Eigenverbrauchsquote", "Autarkiegrad", "Überschusseinspeisung", "Volleinspeisung", "Messkonzept", "Kaskade", "§ 3 Nr. 19 EEG", "§ 9 StromStG"],
    title: { de: "Eigenverbrauch und Eigenversorgung", en: "Self-consumption and self-supply" },
    summary: {
      de: "Selbst erzeugter Strom, der ohne Netzdurchleitung selbst verbraucht wird – abgabenfrei seit 2022, stromsteuerfrei bis 2 MW, und der eigentliche Werttreiber jeder PV-Anlage.",
      en: "Self-generated electricity consumed without passing through the grid – free of levies since 2022, exempt from electricity tax up to 2 MW, and the real value driver of any PV system.",
    },
    body: {
      de: [
        {
          t: "lead",
          text: "Jede selbst verbrauchte Kilowattstunde ersetzt eine, die sonst zum vollen Endkundenpreis aus dem Netz gekommen wäre. Deshalb entscheidet nicht die Anlagengröße über die Wirtschaftlichkeit, sondern der Anteil des Stroms, der im Haus bleibt.",
        },
        { t: "h", level: 2, text: "Der Rechtsbegriff: Eigenversorgung" },
        {
          t: "p",
          text: "**Eigenversorgung** ist nach § 3 Nr. 19 EEG der Verbrauch von Strom, den eine Person **selbst** in einer Anlage erzeugt, die sie **selbst betreibt**, im **unmittelbaren räumlichen Zusammenhang** und **ohne Durchleitung durch ein Netz**. Alle vier Merkmale müssen zusammenkommen. Fehlt eines – etwa weil der Betreiber der Anlage nicht der Verbraucher ist –, liegt eine Lieferung an Dritte vor, wie bei [[mieterstrom|Mieterstrom]].",
        },
        {
          t: "table",
          head: ["Abgabe", "Auf Eigenverbrauch", "Grundlage"],
          rows: [
            ["[[eeg-umlage|EEG-Umlage]]", "entfällt – die Umlage wurde zum 1. Juli 2022 auf null gesetzt und Anfang 2023 abgeschafft; auch der frühere anteilige Satz für Eigenversorger ist Geschichte", "EnFG"],
            ["[[stromsteuer|Stromsteuer]]", "befreit für Anlagen bis **2 MW**, wenn der Strom im räumlichen Zusammenhang vom Betreiber selbst verbraucht wird", "§ 9 Abs. 1 Nr. 3 StromStG"],
            ["[[netzentgelte|Netzentgelte]], [[konzessionsabgabe|Konzessionsabgabe]], übrige Umlagen", "fallen nicht an – sie hängen an der Netzentnahme", "—"],
            ["[[umsatzsteuer-energie|Umsatzsteuer]]", "seit dem Nullsteuersatz 2023 für kleine Anlagen praktisch ohne Bedeutung", "§ 12 Abs. 3 UStG"],
          ],
        },
        { t: "h", level: 2, text: "Überschuss- oder Volleinspeisung" },
        {
          t: "p",
          text: "Wer einspeist, wählt zwischen zwei Modellen mit unterschiedlichen Vergütungssätzen – die aktuellen Werte stehen im Artikel [[einspeiseverguetung|Einspeisevergütung]]. Die Entscheidung gilt jeweils für ein Kalenderjahr und kann durch Mitteilung an den Netzbetreiber vor dem 1. Dezember für das Folgejahr geändert werden.",
        },
        {
          t: "dl",
          items: [
            { term: "Überschusseinspeisung", def: "Der Strom fließt zuerst zu den Verbrauchern im Haus; nur was übrig ist, geht ins Netz. Standard für Wohngebäude." },
            { term: "Volleinspeisung", def: "Die gesamte Erzeugung geht ins Netz, der Haushalt bezieht weiter komplett aus dem Netz. Höherer Vergütungssatz, aber kein Eigenverbrauch – lohnt nur ohne nennenswerten Verbrauch am Standort." },
          ],
        },
        { t: "h", level: 2, text: "Messkonzepte" },
        {
          t: "table",
          head: ["Konzept", "Zähler", "Wann"],
          rows: [
            ["Überschusseinspeisung, einfach", "ein [[zaehlertypen|Zweirichtungszähler]] am Netzanschluss (Bezug 1.8.0, Einspeisung 2.8.0)", "Standardfall Einfamilienhaus; der Eigenverbrauch wird nicht gemessen, sondern ergibt sich aus Erzeugung minus Einspeisung"],
            ["mit Erzeugungszähler", "zusätzlich ein Zähler direkt hinter dem Wechselrichter", "wenn die Erzeugung nachgewiesen werden muss – bei [[kwk-umlage|KWK-Zuschlag]], Mieterstrom, Stromsteuer-Nachweisen oder mehreren Anlagen mit verschiedenen Vergütungssätzen"],
            ["Volleinspeisung", "eigener Einspeisezähler für die Anlage, getrennter Bezugszähler", "wenn kein Eigenverbrauch stattfinden soll"],
            ["Kaskade", "Zähler hintereinander geschaltet: Summenzähler am Netzanschluss, Unterzähler je Nutzer oder Anlage", "Mehrfamilienhaus, Gewerbe mit Untermietern, Mieterstrom"],
          ],
          caption: "Das Messkonzept legt der Netzbetreiber im Rahmen des Anschlussbegehrens fest ([[netzanschluss|Netzanschluss]]); die [[marktlokation|Marktlokationen]] für Bezug und Einspeisung folgen daraus.",
        },
        { t: "h", level: 2, text: "Zwei Quoten, die oft verwechselt werden" },
        {
          t: "formula",
          expr: "Eigenverbrauchsquote = Eigenverbrauch / Erzeugung · 100 %   ·   Autarkiegrad = Eigenverbrauch / Gesamtverbrauch · 100 %",
          where: [
            { sym: "Eigenverbrauchsquote", desc: "Welcher Anteil des **erzeugten** Stroms im Haus bleibt – die Sicht der Anlage" },
            { sym: "Autarkiegrad", desc: "Welcher Anteil des **verbrauchten** Stroms aus der eigenen Anlage stammt – die Sicht des Haushalts" },
          ],
        },
        {
          t: "example",
          title: "10 kWp auf einem Einfamilienhaus",
          lines: [
            { label: "Erzeugung", value: "9.500 kWh im Jahr" },
            { label: "Gesamtverbrauch", value: "4.500 kWh im Jahr" },
            { label: "Eigenverbrauchsquote", value: "30 % → 2.850 kWh selbst verbraucht" },
            { label: "Einspeisung", value: "9.500 − 2.850 = 6.650 kWh" },
            { label: "Netzbezug", value: "4.500 − 2.850 = 1.650 kWh" },
            { label: "Autarkiegrad", value: "2.850 / 4.500 = 63 %" },
          ],
          result: { label: "Ersparnis + Erlös", value: "2.850 kWh × 37 ct = 1.054,50 € gespart, 6.650 kWh × 7,7 ct = 512,05 € Vergütung" },
        },
        {
          t: "note",
          kind: "info",
          text: "Ohne Speicher liegt die Eigenverbrauchsquote im Wohnhaus bei 25 bis 35 %, weil die Erzeugung mittags anfällt und der Verbrauch abends. Ein [[batteriespeicher|Speicher]], eine [[waermepumpe|Wärmepumpe]] oder eine [[wallbox|Wallbox]] mit [[energiemanagement|Energiemanagement]] heben sie auf 55 bis 70 %. Der Autarkiegrad ist immer die Zahl, die im Verkaufsgespräch genannt wird – die Eigenverbrauchsquote die, die die Wirtschaftlichkeit bestimmt.",
        },
        { t: "h", level: 2, text: "Wirtschaftlichkeit: die Faustformel" },
        {
          t: "p",
          text: "Eine selbst verbrauchte Kilowattstunde spart den Bezugspreis von rund **35 bis 40 ct/kWh**; eine eingespeiste bringt rund **8 ct/kWh**. Eine Kilowattstunde Eigenverbrauch ist also etwa **viereinhalb- bis fünfmal** so viel wert wie eine eingespeiste. Jede Maßnahme, die Verbrauch in die Erzeugungsstunden verschiebt, verdient deshalb mehr als jedes zusätzliche Modul.",
        },
        { t: "h", level: 2, text: "Direktvermarktung" },
        {
          t: "p",
          text: "Ab **100 kW** installierter Leistung muss der eingespeiste Strom in der **Direktvermarktung** verkauft werden: Ein Direktvermarkter vermarktet ihn an der Börse, der Betreiber erhält die **Marktprämie** als Differenz zwischen anzulegendem Wert und Monatsmarktwert. Am Eigenverbrauch ändert das nichts – er bleibt abgabenfrei und wird nicht vermarktet. Für Gewerbe mit großem Dach ist die Kombination aus hohem Eigenverbrauch und Direktvermarktung des Rests der Regelfall; siehe [[grosshandel-beschaffung|Großhandel und Beschaffung]].",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Für Abrechnungssysteme ist Eigenverbrauch eine **Größe, die nicht gemessen wird**, sondern berechnet: Erzeugung minus Einspeisung, oder bei Kaskaden aus der Differenz mehrerer Zähler. Wer Eigenverbrauch anzeigt oder vergütet, braucht deshalb sowohl die Erzeugungswerte des Wechselrichters oder Erzeugungszählers als auch die Netzwerte des Zweirichtungszählers – und muss mit Abweichungen zwischen beiden Quellen rechnen.",
        },
      ],
    },
    related: ["photovoltaik", "einspeiseverguetung", "batteriespeicher", "netzanschluss", "stromsteuer", "eeg-umlage", "mieterstrom", "energiemanagement"],
    sources: [
      { label: "§ 3 EEG 2023 – Begriffsbestimmungen (Nr. 19 Eigenversorgung)", url: "https://www.gesetze-im-internet.de/eeg_2014/__3.html" },
      { label: "§ 9 StromStG – Steuerbefreiungen, Steuerermäßigungen", url: "https://www.gesetze-im-internet.de/stromstg/__9.html" },
      { label: "§ 21 EEG 2023 – Einspeisevergütung und Mieterstromzuschlag", url: "https://www.gesetze-im-internet.de/eeg_2014/__21.html" },
      { label: "Bundesnetzagentur – Fördersätze für Solaranlagen", url: "https://www.bundesnetzagentur.de/" },
    ],
  },
];
