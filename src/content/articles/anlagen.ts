import type { Article } from "../types";

const U = "2026-08-01";

export const anlagenArticles: Article[] = [
  {
    slug: "erzeugungsanlagen",
    category: "anlagen",
    featured: true,
    level: "basis",
    updated: U,
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
            ["[[photovoltaik|PV-Anlage]]", "[[zaehlertypen|Zweirichtungszähler]], meist zwei [[marktlokation|Marktlokationen]], [[einspeiseverguetung|Einspeisevergütung]], ab 2 kW iMSys und Steuerbox"],
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
  },

  {
    slug: "photovoltaik",
    category: "anlagen",
    featured: true,
    updated: U,
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
          text: "**Solarspitzengesetz**: Neue Anlagen ab 2 kW, die seit dem 25. Februar 2025 in Betrieb gehen, brauchen ein [[intelligentes-messsystem|intelligentes Messsystem]] und eine Steuerbox. Ohne beides ist die Einspeiseleistung auf **60 %** begrenzt. In Stunden mit negativen Börsenpreisen entfällt die Einspeisevergütung; diese Zeit wird viertelstundengenau hinten an die 20 Jahre angehängt. Bestandsanlagen sind nicht betroffen.",
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
    related: ["einspeiseverguetung", "batteriespeicher", "balkonkraftwerk", "marktstammdatenregister"],
    sources: [
      {
        label: "Bundesnetzagentur – Marktstammdatenregister",
        url: "https://www.marktstammdatenregister.de/MaStR",
      },
    ],
  },

  {
    slug: "balkonkraftwerk",
    category: "anlagen",
    updated: U,
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
  },

  {
    slug: "einspeiseverguetung",
    category: "anlagen",
    updated: U,
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
            "Für größere Dachanlagen sinken die Sätze gestaffelt – bis 40 kW auf 6,66 bzw. 10,24 ct/kWh, bis 100 kW auf 5,44 bzw. 10,24 ct/kWh.",
        },
        {
          t: "note",
          kind: "tip",
          text: "Volleinspeisung lohnt sich nur, wenn im Haus kaum Strom verbraucht wird – etwa auf einer Scheune. Sobald ein Haushalt dranhängt, schlägt der [[photovoltaik|Eigenverbrauch]] die höhere Vergütung deutlich: 37 ct gespart wiegt schwerer als 12 ct erlöst.",
        },
        { t: "h", level: 2, text: "Degression" },
        {
          t: "p",
          text: "Seit 2024 sinkt die Vergütung **halbjährlich um ein Prozent** statt monatlich. Maßgeblich ist der Satz am Tag der Inbetriebnahme – ein Grund, warum Installationstermine am Monatsende regelmäßig zum Streitthema werden.",
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
    updated: U,
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
          text: "Wärmepumpen über 4,2 kW fallen unter [[paragraf-14a-enwg|§ 14a EnWG]]: Der Netzbetreiber darf sie im Notfall auf 4,2 kW drosseln, dafür gibt es reduzierte [[netzentgelte|Netzentgelte]]. Mit separatem Zähler liegen Wärmepumpentarife 2026 bei rund 21 bis 26 ct/kWh statt 33 bis 40 ct/kWh im Haushaltstarif.",
        },
        {
          t: "note",
          kind: "praxis",
          text: "Beim Verkauf ist die JAZ die Zahl, an der später alles gemessen wird – auch die Kundenzufriedenheit. Eine ehrliche Prognose auf Basis von Gebäude und Vorlauftemperatur schlägt jede Prospektangabe. Wer mit COP-Werten wirbt und der Kunde rechnet später mit der JAZ nach, hat ein Problem.",
        },
      ],
    },
    related: ["waermepumpen-typen", "heizungsarten", "paragraf-14a-enwg", "energiemanagement"],
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
    updated: U,
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
            "**KWK-Zuschlag** nach dem KWKG für jede erzeugte Kilowattstunde, gestaffelt nach Leistung",
            "**Vermiedene Netznutzungsentgelte** und der übliche Strompreis für eingespeisten Strom",
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
  },

  {
    slug: "wallbox",
    category: "anlagen",
    updated: U,
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
          text: "Als steuerbare Verbrauchseinrichtung über 4,2 kW fällt die Wallbox unter [[paragraf-14a-enwg|§ 14a EnWG]]. Der Netzbetreiber darf sie im Engpassfall auf 4,2 kW drosseln – genug für rund 20 Kilometer Reichweite je Stunde. Im Gegenzug gibt es reduzierte [[netzentgelte|Netzentgelte]], je nach gewähltem Modul als Pauschale oder als abgesenkter Arbeitspreis.",
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
    updated: U,
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
      ],
    },
    related: ["photovoltaik", "balkonkraftwerk", "einspeiseverguetung", "erzeugungsanlagen"],
    sources: [
      {
        label: "Marktstammdatenregister der Bundesnetzagentur",
        url: "https://www.marktstammdatenregister.de/MaStR",
      },
    ],
  },
];
