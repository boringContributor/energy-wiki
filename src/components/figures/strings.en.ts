/**
 * English copy for the figures, keyed by the German original.
 *
 * Figures keep their German strings inline — they are the source text and read
 * naturally in the component. `L()` and `tr()` in ui.tsx look the string up
 * here when the locale is English and fall back to the German if it is missing,
 * so a forgotten entry degrades to untranslated rather than to blank.
 */
export const FIGURE_EN: Record<string, string> = {
  /* ---- shared ---- */
  interaktiv: "interactive",
  Strom: "Electricity",
  Gas: "Gas",
  Wasser: "Water",
  Erdgas: "Natural gas",
  Fernwärme: "District heating",
  Wärmepumpe: "Heat pump",
  Brennwert: "Calorific value",
  Arbeitspreis: "Unit rate",
  Volumen: "Volume",
  Abrechnungswert: "Billing value",
  Zählerstand: "Meter reading",
  Zählernummer: "Meter number",
  Jahresverbrauch: "Annual consumption",
  Jahreskosten: "Annual cost",
  Netto: "Net",
  Brutto: "Incl. VAT",
  Nachzahlung: "Back-payment",
  Guthaben: "Credit",
  Ausgeglichen: "Balanced",
  Abwasser: "Waste water",
  Konzessionsabgabe: "Concession fee",
  Stromsteuer: "Electricity tax",
  "KWKG-Umlage": "KWKG levy",
  "Offshore-Netzumlage": "Offshore grid levy",
  Eigenverbrauch: "Self-consumption",
  Einspeisung: "Feed-in",
  Batteriespeicher: "Home battery",
  Leistung: "Capacity",
  Warmwasser: "Hot water",
  Förderung: "Subsidy",
  Genehmigung: "Permitting",
  Erschließung: "Ground works",
  Risiko: "Risk",
  Aufstellung: "Installation",
  Kühlen: "Cooling",
  Nebeneffekt: "Side effect",
  "Passt zu": "Pairs with",
  Register: "Registers",
  Einheit: "Unit",
  Umrechnung: "Conversion",
  Eichfrist: "Certification period",
  Baugröße: "Nominal size",
  Baugrößen: "Nominal sizes",
  Besonderheit: "Quirk",
  Speicher: "Storage",
  Kommunikation: "Communication",
  Ablesung: "Meter reading",
  Zählwerke: "Registers",
  Datenspeicher: "Data storage",
  Preisobergrenze: "Price cap",
  Umschaltung: "Switching",
  "Typisch bei": "Typically found in",
  Marktlokationen: "Market locations",
  Balkonkraftwerk: "Plug-in solar",
  "Einsatz ab": "Used from",
  Rechnen: "Arithmetic",
  Fehlerquelle: "Common error",
  Anspruch: "Entitlement",
  "Pflicht ab": "Mandatory from",
  Messung: "Measurement",
  Spitzenlast: "Peak load",
  Tagesverbrauch: "Daily consumption",

  /* ---- Strompreis / Gaspreis / Wasser ---- */
  "Grundpreis & Messstellenbetrieb": "Standing charge & metering",
  "Beschaffung & Vertrieb": "Procurement & sales",
  "Netzentgelt (Arbeitsanteil)": "Grid fee (energy component)",
  "Aufschlag besondere Netznutzung": "Surcharge for special grid use",
  "früher § 19 StromNEV": "formerly § 19 StromNEV",
  "Umsatzsteuer 19 %": "VAT 19 %",
  "Strompreis zerlegt": "The electricity price, taken apart",
  "Haushalt, ct/kWh brutto": "Household, ct/kWh incl. VAT",
  "Modellwerte für 2026. Regulierte Bestandteile (Umlagen, Stromsteuer, Konzessionsabgabe) sind die veröffentlichten Sätze; Beschaffung, Vertrieb und Netzentgelt sind realistische Durchschnitte und je Anbieter und Netzgebiet verschieden.":
    "Model values for 2026. The regulated components (levies, electricity tax, concession fee) are the published rates; procurement, sales and the grid fee are realistic averages and differ by supplier and grid area.",
  "Gemeindegröße (Konzessionsabgabe)": "Size of municipality (concession fee)",
  "Bilanzierungsumlage (SLP)": "Balancing levy (SLP)",
  "jährlich neu festgelegt": "set anew each year",
  "CO₂-Preis (BEHG)": "Carbon price (BEHG)",
  "Energiesteuer (Erdgassteuer)": "Energy tax (on natural gas)",
  "Konzessionsabgabe (Heizgas)": "Concession fee (heating gas)",
  "Gaspreis zerlegt": "The gas price, taken apart",
  "Haushalt mit Gasheizung, ct/kWh brutto":
    "Household with gas heating, ct/kWh incl. VAT",
  "Die Gasspeicherumlage entfällt seit dem 1. Januar 2026 – der Bund trägt diese Kosten. Der CO₂-Preis bewegt sich 2026 in einem Korridor von 55 bis 65 €/t; ab 2028 bildet ihn der europäische Emissionshandel ETS 2 frei am Markt.":
    "The gas storage levy has been gone since 1 January 2026 – the federal government carries that cost. The carbon price moves within a corridor of 55 to 65 €/t in 2026; from 2028 the European emissions trading system ETS 2 sets it freely on the market.",
  "CO₂-Preis 2026": "Carbon price, 2026",
  "Grundpreis Trinkwasser": "Standing charge, drinking water",
  "nach Zählergröße": "based on meter size",
  "Mengenpreis Trinkwasser": "Volumetric price, drinking water",
  "Umsatzsteuer 7 % (nur Trinkwasser)": "VAT 7 % (drinking water only)",
  Schmutzwassergebühr: "Waste water fee",
  "Gebühr, keine USt": "a fee, no VAT",
  Niederschlagswassergebühr: "Storm water fee",
  "Wasserkosten zerlegt": "Water costs, taken apart",
  "Ein Haushalt, ein Jahr": "One household, one year",
  "Wasser ist die einzige Sparte ohne bundesweiten Markt: Preise und Gebühren setzt der örtliche Versorger bzw. die Kommune. Trinkwasser ist eine Lieferung mit 7 % Umsatzsteuer, Abwasser dagegen meist eine hoheitliche Gebühr ganz ohne Umsatzsteuer.":
    "Water is the only commodity without a nationwide market: prices and fees are set by the local utility or the municipality. Drinking water is a supply carrying 7 % VAT; waste water is usually a sovereign fee with no VAT at all.",
  Trinkwasserverbrauch: "Drinking water consumption",
  "Versiegelte Fläche": "Sealed surface area",
  "Trinkwasser brutto": "Drinking water, incl. VAT",
  "Gesamt pro Jahr": "Total per year",

  /* ---- Gasumrechner ---- */
  "Gaszähler in Kilowattstunden umrechnen":
    "Converting a gas meter into kilowatt-hours",
  "Der Zähler misst Volumen, die Rechnung zählt Energie":
    "The meter measures volume, the invoice counts energy",
  "Brennwert und Zustandszahl stehen auf jeder Gasrechnung und kommen vom Netzbetreiber. Der Brennwert schwankt mit der Gasqualität (L-Gas rund 8,4–11,2 kWh/m³, H-Gas rund 10–13,1 kWh/m³), die Zustandszahl mit Höhenlage und Anschlussdruck – typisch 0,90 bis 0,98.":
    "The calorific value and the Zustandszahl appear on every gas invoice and come from the grid operator. The calorific value varies with gas quality (L-gas around 8.4–11.2 kWh/m³, H-gas around 10–13.1 kWh/m³), the Zustandszahl with altitude and supply pressure – typically 0.90 to 0.98.",
  "Gemessenes Volumen": "Measured volume",
  "Zustandszahl (z-Zahl)": "Zustandszahl (z-number)",
  "Energiekosten (nur Arbeitspreis)": "Energy cost (unit rate only)",

  /* ---- Abschlag ---- */
  "Abschlag und Jahresabrechnung": "Instalments and the annual statement",
  "Prognose, Raten, Saldo": "Forecast, instalments, balance",
  "§ 13 StromGVV und § 13 GasGVV: Der Abschlag bemisst sich anteilig am Verbrauch des zuletzt abgerechneten Zeitraums. Macht der Kunde glaubhaft, dass sein Verbrauch erheblich geringer ausfällt, ist das angemessen zu berücksichtigen.":
    "§ 13 StromGVV and § 13 GasGVV: the instalment is measured pro rata against consumption in the most recently billed period. If the customer credibly demonstrates that their consumption is substantially lower, that has to be taken into account appropriately.",
  "Prognose: Verbrauch Vorjahr": "Forecast: prior-year consumption",
  "Arbeitspreis (brutto)": "Unit rate (incl. VAT)",
  "Grundpreis je Jahr (brutto)": "Standing charge per year (incl. VAT)",
  "Zahl der Abschläge im Jahr": "Number of instalments per year",
  "Monatlicher Abschlag": "Monthly instalment",
  "Und was steht am Jahresende auf der Rechnung?":
    "And what does the year-end invoice say?",
  "Tatsächlicher Verbrauch im Abrechnungsjahr":
    "Actual consumption in the billing year",
  "Tatsächliche Jahreskosten": "Actual annual cost",

  /* ---- Tarifanatomie ---- */
  "Tarif A · hoher Grundpreis": "Tariff A · high standing charge",
  "Tarif B · ausgewogen": "Tariff B · balanced",
  "Tarif C · ohne Grundpreis": "Tariff C · no standing charge",
  "Warum der günstigste Tarif vom Verbrauch abhängt":
    "Why the cheapest tariff depends on consumption",
  "Grundpreis gegen Arbeitspreis": "Standing charge versus unit rate",
  "Der Grundpreis deckt verbrauchsunabhängige Kosten – Messstellenbetrieb, Abrechnung, Kundenservice, Teile des Netzentgelts. Je kleiner der Verbrauch, desto stärker schlägt er auf den effektiven Preis je Kilowattstunde durch.":
    "The standing charge covers consumption-independent costs – metering, billing, customer service, part of the grid fee. The smaller the consumption, the harder it hits the effective price per kilowatt-hour.",
  günstigster: "cheapest",
  "Grundpreis": "Standing charge",
  "effektiv": "effective",

  /* ---- Dynamischer Tarif ---- */
  "Ein Tag im dynamischen Tarif": "A day on a dynamic tariff",
  "Börsenpreis je Stunde + feste Bestandteile":
    "Exchange price per hour + the fixed components",
  "Der Arbeitspreis folgt dem Day-Ahead-Markt der Strombörse; Netzentgelte, Umlagen, Steuern und die Marge des Lieferanten bleiben konstant. Deshalb schwankt der Endpreis nie so stark wie die Börse selbst – und wird nur selten negativ.":
    "The unit rate follows the day-ahead market of the power exchange; grid fees, levies, taxes and the supplier's margin stay constant. So the end price never swings as hard as the exchange itself – and only rarely turns negative.",
  "Ladestart Elektroauto": "EV charging starts",
  Ladevorgang: "Charging",
  "11 kWh laden": "charge 11 kWh",
  "nur Grundlast": "base load only",
  Ladefenster: "Charging window",
  günstiger: "cheaper",
  "Dynamischer Tarif": "Dynamic tariff",
  "Ersparnis an diesem Tag": "Saving on this day",
  Mehrkosten: "Extra cost",

  /* ---- Lastprofil ---- */
  "Standardlastprofil oder gemessener Lastgang?":
    "Standard load profile or metered load curve?",
  "Wie der Verbrauch über den Tag verteilt wird":
    "How consumption is spread across the day",
  "Bis 100.000 kWh im Jahr rechnet der Markt mit einem Standardlastprofil (SLP): Der Jahresverbrauch wird nach einer statistischen Kurve auf die Stunden verteilt. Darüber – und bei jedem Kunden mit Leistungsmessung – zählt der tatsächlich gemessene Lastgang (RLM) im Viertelstundentakt.":
    "Up to 100,000 kWh a year the market works with a standard load profile (SLP): annual consumption is spread across the hours along a statistical curve. Above that – and for every customer with load metering – the actually metered load curve (RLM) counts, in quarter-hour intervals.",
  "SLP · Haushalt": "SLP · household",
  "RLM · Betrieb": "RLM · business",
  "1× im Jahr": "once a year",
  "alle 15 Minuten": "every 15 minutes",

  /* ---- CO2-Pfad ---- */
  "Der CO₂-Preis auf Brennstoffe": "The carbon price on fuels",
  "Euro je Tonne CO₂, nationaler Emissionshandel (BEHG)":
    "Euro per tonne of CO₂, national emissions trading (BEHG)",
  "2021 bis 2025 galten feste Preise. 2026 und 2027 werden die Zertifikate versteigert – innerhalb eines Korridors von 55 bis 65 €/t. Ab 2028 löst der europäische Emissionshandel ETS 2 das nationale System ab, der Preis bildet sich dann frei am Markt; der Balken für 2028 zeigt eine Bandbreite gängiger Prognosen, keinen festgelegten Wert.":
    "Fixed prices applied from 2021 to 2025. In 2026 and 2027 the allowances are auctioned – within a corridor of 55 to 65 €/t. From 2028 the European emissions trading system ETS 2 replaces the national scheme and the price forms freely on the market; the 2028 bar shows a range of common forecasts, not a set value.",

  /* ---- kWh-Vergleich ---- */
  "Eine Kilowattstunde – wie viel ist das?":
    "One kilowatt-hour – how much is that?",
  "Anhaltspunkte, keine Messwerte": "Reference points, not measurements",
  "LED-Lampe (9 W)": "LED lamp (9 W)",
  "111 Stunden Licht": "111 hours of light",
  Kaffeemaschine: "Coffee machine",
  "rund 10 Kannen": "around 10 pots",
  Elektroauto: "Electric car",
  "5–6 Kilometer": "5–6 kilometres",
  "Waschmaschine 60 °C": "Washing machine, 60 °C",
  "eine knappe Ladung": "just under one load",
  "Fernseher (100 W)": "Television (100 W)",
  "10 Stunden": "10 hours",
  "rund 25 Liter auf 40 °C": "around 25 litres heated to 40 °C",

  /* ---- Wertschöpfungskette ---- */
  Erzeugung: "Generation",
  "Kraftwerk, Windpark, PV-Anlage": "Power station, wind farm, PV system",
  Übertragungsnetz: "Transmission grid",
  "4 Übertragungsnetzbetreiber": "4 transmission grid operators",
  Verteilnetz: "Distribution grid",
  "rund 850 Verteilnetzbetreiber": "around 850 distribution grid operators",
  Messstelle: "Metering point",
  Messstellenbetreiber: "Metering point operator",
  Kunde: "Customer",
  Letztverbraucher: "Final consumer",
  "Von der Erzeugung bis zur Steckdose": "From generation to the socket",
  "Physischer Weg der Energie": "The physical path of the energy",
  "Der Lieferant taucht in dieser Kette physisch gar nicht auf: Er kauft die Energiemenge ein, bilanziert sie und rechnet sie mit dem Kunden ab. Transportiert wird sie von Netzbetreibern, gemessen vom Messstellenbetreiber.":
    "The supplier does not appear in this chain physically at all: it buys the energy, balances it and bills it to the customer. It is transported by grid operators and measured by the metering point operator.",

  /* ---- Marktrollen ---- */
  Lieferant: "Supplier",
  "Verkauft Energie an den Letztverbraucher, beschafft die Mengen, stellt die Rechnung.":
    "Sells energy to the final consumer, procures the volumes, issues the invoice.",
  Verteilnetzbetreiber: "Distribution grid operator",
  "Betreibt das örtliche Netz, erhebt Netzentgelte, schaltet an und ab.":
    "Runs the local grid, levies grid fees, connects and disconnects.",
  Übertragungsnetzbetreiber: "Transmission grid operator",
  "Höchstspannung, Systembilanz, Regelenergie – 50Hertz, Amprion, TenneT, TransnetBW.":
    "Extra-high voltage, system balance, balancing energy – 50Hertz, Amprion, TenneT, TransnetBW.",
  "Baut Zähler ein, betreibt und liest sie aus, liefert Messwerte an alle Berechtigten.":
    "Installs meters, operates and reads them, and delivers the values to everyone entitled to them.",
  Bilanzkreisverantwortlicher: "Balancing group manager",
  "Führt den Bilanzkreis, meldet Fahrpläne, trägt Abweichungen zwischen Prognose und Ist.":
    "Runs the balancing group, files schedules, carries the gap between forecast and actual.",
  Grundversorger: "Basic supplier",
  "Der Lieferant mit den meisten Haushaltskunden im Netzgebiet – gesetzlich zur Belieferung verpflichtet.":
    "The supplier with the most household customers in the grid area – legally obliged to supply.",
  "Wer ist wer im Energiemarkt": "Who is who in the energy market",
  "Marktrollen und ihre Aufgaben": "Market roles and what they do",
  "Ein Unternehmen kann mehrere Rollen ausfüllen – ein Stadtwerk ist oft gleichzeitig Lieferant, Verteilnetzbetreiber, grundzuständiger Messstellenbetreiber und Grundversorger. Rechtlich müssen die Bereiche getrennt sein (Entflechtung, „Unbundling“).":
    "One company can hold several roles – a municipal utility is often supplier, distribution grid operator, incumbent metering point operator and basic supplier all at once. Legally those areas have to be kept apart (Entflechtung, unbundling).",

  /* ---- MaLo / MeLo ---- */
  "Marktlokation und Messlokation": "Market location and metering location",
  "Ein Haus, zwei Nummernwelten": "One house, two worlds of identifiers",
  "Faustregel: Die MaLo ist die kaufmännische Adresse für Lieferung und Abrechnung, die MeLo die technische Adresse des Zählers. Eine Marktlokation kann mehrere Messlokationen haben – etwa wenn ein Verbrauch über zwei Zähler erfasst wird.":
    "Rule of thumb: the MaLo is the commercial address for supply and billing, the MeLo the technical address of the meter. One market location can have several metering locations – for example where one consumption is captured across two meters.",
  "Marktlokation (MaLo)": "Market location (MaLo)",
  "Der Ort, an dem Energie entnommen oder eingespeist wird – aus Sicht des Marktes. Alles, was mit Vertrag, Lieferung und Bilanzierung zu tun hat, hängt an dieser Nummer.":
    "The place where energy is withdrawn or fed in, from the market's point of view. Everything to do with contract, supply and balancing hangs on this number.",
  "11 Ziffern": "11 digits",
  "erste Ziffer = vergebende Stelle (BDEW Strom, DVGW Gas)":
    "first digit = issuing body (BDEW for electricity, DVGW for gas)",
  "letzte Ziffer = Prüfziffer": "last digit = check digit",
  "Messlokation (MeLo)": "Metering location (MeLo)",
  "Der Ort, an dem tatsächlich gemessen wird – also der Zählerplatz. Messwerte, Zählerwechsel und Messstellenbetrieb hängen an dieser Nummer.":
    "The place where the measurement actually happens – the meter position. Readings, meter exchanges and metering point operation hang on this number.",
  "33 Stellen, beginnt mit dem Ländercode DE":
    "33 characters, starting with the country code DE",
  "enthält die Nummer des Netzbetreibers":
    "contains the grid operator's code number",
  "früher „Zählpunktbezeichnung“": "formerly the “Zählpunktbezeichnung”",
  "Typische Konstellationen": "Typical constellations",
  "Wohnung mit einem Zähler – der Normalfall.":
    "A flat with one meter – the normal case.",
  "Eine Marktlokation, mehrere Zähler – etwa Haupt- und Unterzähler, die saldiert werden.":
    "One market location, several meters – a main and a sub-meter that are netted, for instance.",
  "Ein Zähler, zwei Marktlokationen – Zweirichtungszähler einer PV-Anlage: eine MaLo für den Bezug, eine für die Einspeisung.":
    "One meter, two market locations – the bidirectional meter of a PV system: one MaLo for consumption, one for feed-in.",

  /* ---- Zähleranatomie ---- */
  "Was auf dem Zähler steht": "What is written on the meter",
  "Moderne Messeinrichtung, digital": "Modern metering equipment, digital",
  "Für die Ablesung zählt nur das Vorkomma: Nachkommastellen sind meist rot abgesetzt oder gar nicht erst angezeigt. Die Zählernummer identifiziert das Gerät, nicht den Anschluss – nach einem Zählerwechsel ändert sie sich, die Messlokations-ID bleibt.":
    "Only the digits before the decimal point matter for the reading: decimals are usually set off in red, or not displayed at all. The meter number identifies the device, not the connection – it changes after a meter exchange, while the metering location ID stays.",
  "OBIS-Kennzahl": "OBIS code",
  "Sagt, welches Register angezeigt wird. 1.8.0 = Bezug gesamt, 1.8.1/1.8.2 = Hoch- und Niedertarif, 2.8.0 = Einspeisung.":
    "States which register is displayed. 1.8.0 = total consumption, 1.8.1/1.8.2 = peak and off-peak, 2.8.0 = feed-in.",
  "Der aufsummierte Zählerstand in kWh. Abgelesen wird nur die schwarze Vorkommazahl.":
    "The accumulated reading in kWh. Only the black digits before the decimal point are read.",
  "Eindeutige Gerätenummer. Steht auf dem Typenschild und wird bei jedem Zählerwechsel neu.":
    "The unique device number. It is on the type plate and is new after every meter exchange.",
  "Optische Schnittstelle": "Optical interface",
  "Infrarot-Lesekopf für den Messstellenbetreiber – und für Auslesegeräte, die der Kunde selbst anschließt.":
    "An infrared read head for the metering point operator – and for readers the customer connects themselves.",
  "Eichmarke · gültig bis 2033": "Certification mark · valid until 2033",

  /* ---- Smart-Meter-Gateway ---- */
  "Aufbau eines intelligenten Messsystems":
    "How an intelligent metering system is put together",
  "moderne Messeinrichtung + Smart-Meter-Gateway":
    "modern metering equipment + smart meter gateway",
  "Erst die Kombination aus moderner Messeinrichtung und Smart-Meter-Gateway ergibt ein intelligentes Messsystem (iMSys). Das Gateway ist das sicherheitszertifizierte Herzstück: Es sammelt Messwerte, verschlüsselt sie und gibt jedem Marktteilnehmer nur die Daten, auf die er ein Recht hat.":
    "Only the combination of modern metering equipment and a smart meter gateway makes an intelligent metering system (iMSys). The gateway is the security-certified heart of it: it collects readings, encrypts them, and gives each market participant only the data they are entitled to.",
  "Moderne Messeinrichtung": "Modern metering equipment",
  "Digitaler Zähler, misst und speichert 24 Monate rückwirkend.":
    "A digital meter; measures and stores 24 months of history.",
  "Smart-Meter-Gateway": "Smart meter gateway",
  "Kommunikationseinheit nach BSI-Schutzprofil. Bildet Tarifanwendungsfälle ab und protokolliert jeden Zugriff.":
    "The communication unit certified against the BSI protection profile. It implements tariff application cases and logs every access.",
  "Externe Marktteilnehmer": "External market participants",
  "Messstellenbetreiber, Netzbetreiber, Lieferant – jeder erhält nur seinen Ausschnitt.":
    "Metering point operator, grid operator, supplier – each receives only their slice.",
  Heimnetz: "Home network",
  "Der Kunde selbst, Wärmepumpe, Wallbox, Energiemanagement.":
    "The customer themselves, the heat pump, the wallbox, energy management.",

  /* ---- Lieferantenwechsel ---- */
  "Tag 0": "Day 0",
  "Kunde schließt den neuen Vertrag": "The customer signs the new contract",
  "Der neue Lieferant braucht Name, Lieferadresse und die Marktlokations-ID oder Zählernummer.":
    "The new supplier needs the name, the supply address and the market location ID or meter number.",
  "Tag 0–1": "Day 0–1",
  "Anmeldung beim Netzbetreiber": "Registration with the grid operator",
  "Der neue Lieferant meldet die Belieferung an; der Netzbetreiber prüft, ob die Marktlokation zu ihm gehört.":
    "The new supplier registers the supply; the grid operator checks whether the market location belongs to it.",
  "Tag 1": "Day 1",
  "Abmeldung des alten Lieferanten": "The old supplier is deregistered",
  "Der bisherige Lieferant wird informiert und bestätigt oder widerspricht – etwa bei offener Vertragslaufzeit.":
    "The previous supplier is informed and either confirms or objects – for instance where a minimum term is still running.",
  "ab 24 Stunden": "from 24 hours",
  "Wechsel wird wirksam": "The switch takes effect",
  "Seit Juni 2025 muss ein Lieferantenwechsel binnen 24 Stunden möglich sein. Physisch ändert sich nichts – nur die Zuordnung im Bilanzkreis.":
    "Since June 2025 a supplier switch has to be possible within 24 hours. Nothing changes physically – only the assignment within the balancing group.",
  danach: "afterwards",
  Schlussrechnung: "Final invoice",
  "Der alte Lieferant rechnet bis zum Wechseltag ab; der Zählerstand zum Stichtag kommt vom Messstellenbetreiber oder vom Kunden.":
    "The old supplier bills up to the switching day; the reading on the key date comes from the metering point operator or from the customer.",
  "Ablauf eines Lieferantenwechsels": "How a supplier switch runs",
  "Was zwischen Unterschrift und erster Rechnung passiert":
    "What happens between the signature and the first invoice",
  "Der Kunde merkt vom Wechsel physisch nichts: Es fließt derselbe Strom durch dasselbe Netz. Was wechselt, ist die Zuordnung der Entnahmestelle zu einem Bilanzkreis – und damit die Frage, wer die Energie beschafft und abrechnet.":
    "The customer notices nothing physically: the same electricity flows through the same grid. What changes is which balancing group the withdrawal point is assigned to – and with it, who procures and bills the energy.",

  /* ---- Netzebenen ---- */
  Höchstspannung: "Extra-high voltage",
  "Übertragungsnetz, Transport über weite Strecken":
    "Transmission grid, transport over long distances",
  "Umspannung HöS/HS": "Transformation EHV/HV",
  Umspannwerk: "Substation",
  Hochspannung: "High voltage",
  "Regionale Verteilung, Industrie": "Regional distribution, industry",
  "Umspannung HS/MS": "Transformation HV/MV",
  Mittelspannung: "Medium voltage",
  "Stadtteile, große Gewerbebetriebe":
    "City districts, large commercial premises",
  "Umspannung MS/NS": "Transformation MV/LV",
  Ortsnetzstation: "Local substation",
  Niederspannung: "Low voltage",
  "Haushalte, kleines Gewerbe": "Households, small businesses",
  "Die sieben Netzebenen": "The seven grid levels",
  "Und warum Netzentgelte je Ebene verschieden hoch sind":
    "And why grid fees differ from level to level",
  "Wer auf einer unteren Ebene entnimmt, nutzt alle darüberliegenden mit – deshalb zahlt ein Haushalt in der Niederspannung das höchste Netzentgelt je Kilowattstunde und ein Industriebetrieb mit Hochspannungsanschluss das niedrigste.":
    "Anyone withdrawing at a lower level also uses every level above it – which is why a household on low voltage pays the highest grid fee per kilowatt-hour and an industrial site on high voltage the lowest.",

  /* ---- Rechnungsanatomie ---- */
  "Vertrags- und Kundendaten": "Contract and customer data",
  "Vertragskonto, Kundennummer, Lieferadresse, Marktlokations-ID, Zählernummer und Netzbetreibernummer.":
    "Contract account, customer number, supply address, market location ID, meter number and grid operator number.",
  Abrechnungszeitraum: "Billing period",
  "Der Zeitraum, den die Rechnung abdeckt – meist zwölf Monate, bei Preisänderungen in Teilzeiträume zerlegt.":
    "The period the invoice covers – usually twelve months, split into sub-periods where prices changed.",
  "Zählerstände und Verbrauch": "Meter readings and consumption",
  "Anfangs- und Endstand mit Kennzeichnung, ob abgelesen, vom Kunden gemeldet oder geschätzt.":
    "Opening and closing readings, labelled as read, customer-reported or estimated.",
  Preisbestandteile: "Price components",
  "Grundpreis je Zeitraum, Arbeitspreis je kWh, bei Preisänderung mehrere Zeilen mit jeweils eigenem Preis.":
    "Standing charge per period, unit rate per kWh, and after a price change several lines each with their own price.",
  "Steuern, Abgaben und Umlagen": "Taxes, charges and levies",
  "Gesetzlich vorgeschriebene Aufschlüsselung nach § 40 EnWG – wie viel des Preises auf welche Position entfällt.":
    "The breakdown required by § 40 EnWG – how much of the price falls on which item.",
  "Abschläge und Saldo": "Instalments and balance",
  "Summe der geleisteten Abschlagszahlungen, daraus Nachzahlung oder Guthaben.":
    "The sum of the instalments paid, giving either a back-payment or a credit.",
  "Vergleich und Kennzeichnung": "Comparison and labelling",
  "Verbrauchsvergleich zum Vorjahr, Vergleich mit ähnlichen Kunden und – beim Strom – die Stromkennzeichnung.":
    "A comparison with the previous year, a comparison with similar customers and – for electricity – the electricity labelling.",
  "Anatomie einer Jahresabrechnung": "Anatomy of an annual statement",
  "Was gesetzlich draufstehen muss": "What the law requires it to contain",
  "Die Pflichtangaben stehen in § 40 EnWG. Fehlt eine davon, ist die Rechnung angreifbar – ein Grund, warum Abrechnungssysteme so viele Felder mitschleppen.":
    "The mandatory items are set out in § 40 EnWG. If one is missing, the invoice is open to challenge – one reason billing systems carry so many fields.",

  /* ---- Blindleistung ---- */
  "Wirk-, Blind- und Scheinleistung": "Active, reactive and apparent power",
  "Das Bierglas-Modell": "The beer glass model",
  "Wirkleistung (kW) verrichtet Arbeit, Blindleistung (kvar) baut die Magnetfelder in Motoren und Transformatoren auf. Beides zusammen belastet das Netz als Scheinleistung (kVA). Haushalte zahlen keine Blindarbeit – Gewerbekunden mit Leistungsmessung schon, sobald sie eine vereinbarte Grenze überschreiten.":
    "Active power (kW) does the work; reactive power (kvar) builds the magnetic fields in motors and transformers. Together they load the grid as apparent power (kVA). Households pay nothing for reactive energy – commercial customers with load metering do, once they exceed an agreed limit.",
  Wirkleistung: "Active power",
  "Was tatsächlich zu Licht, Wärme oder Bewegung wird. Sie steht auf der Stromrechnung als Verbrauch in kWh.":
    "What actually becomes light, heat or movement. It appears on the electricity bill as consumption in kWh.",
  Blindleistung: "Reactive power",
  "Pendelt zwischen Netz und Verbraucher hin und her, verrichtet keine Arbeit, belastet aber Leitungen. Gemessen in kvarh.":
    "Oscillates back and forth between grid and load, does no work, but loads the lines. Measured in kvarh.",
  Leistungsfaktor: "Power factor",
  "Verhältnis von Wirk- zu Scheinleistung. Netzbetreiber verlangen meist mindestens 0,9 – darunter wird Blindarbeit berechnet.":
    "The ratio of active to apparent power. Grid operators usually require at least 0.9 – below that, reactive energy is billed.",
  Scheinleistung: "Apparent power",

  /* ---- Portal ---- */
  "Zählerstand melden": "Submit a meter reading",
  "Foto oder Eingabe, Plausibilitätsprüfung gegen den letzten Stand.":
    "A photo or a typed value, checked for plausibility against the last reading.",
  "Abschlag anpassen": "Adjust the instalment",
  "Selbst erhöhen oder senken, innerhalb der Grenzen des Versorgers.":
    "Raise or lower it yourself, within the limits the utility sets.",
  "Rechnungen und Verträge": "Invoices and contracts",
  "Dokumentenarchiv, Tarifdetails, Laufzeiten und Kündigungsfristen.":
    "Document archive, tariff details, terms and notice periods.",
  "Umzug melden": "Report a move",
  "Auszugs- und Einzugsdatum, Zählerstände, neue Lieferadresse.":
    "Move-out and move-in dates, meter readings, the new supply address.",
  "Verbrauch verstehen": "Understand consumption",
  "Historie, Vergleich zum Vorjahr, bei iMSys bis hin zu Tageswerten.":
    "History, comparison with the previous year, and with an iMSys down to daily values.",
  "Stammdaten pflegen": "Maintain master data",
  "Bankverbindung, Kontaktdaten, Rechnungsversand digital statt Papier.":
    "Bank details, contact data, invoices delivered digitally instead of on paper.",
  "Anliegen stellen": "Raise a request",
  "Kontaktformular, Statusverfolgung, Rückfragen ohne Telefonwarteschleife.":
    "Contact form, status tracking, follow-up questions without a phone queue.",
  "Produkte kaufen": "Buy products",
  "Tarifwechsel, Zusatzprodukte, Wallbox oder Wärmepumpe direkt beauftragen.":
    "Switch tariff, buy add-ons, order a wallbox or heat pump directly.",
  "Was ein Endkundenportal können muss":
    "What a self-service portal has to be able to do",
  "Die acht Klassiker": "The eight classics",
  "Jede dieser Funktionen spart einen Anruf im Kundenservice. Deshalb misst man Portale in der Praxis nicht an der Zahl der Features, sondern an der Selbstbedienungsquote: dem Anteil der Anliegen, die ohne Mitarbeiter erledigt werden.":
    "Every one of these functions saves a call to customer service. That is why portals are measured in practice not by the number of features but by the self-service rate: the share of requests handled without a member of staff.",

  /* ---- Anlagen-Übersicht ---- */
  Photovoltaik: "Photovoltaics",
  "Erzeugt Strom auf dem Dach. Ab 2 kW seit Februar 2025 mit Steuerbox und iMSys.":
    "Generates electricity on the roof. From 2 kW, since February 2025, with a control box and an iMSys.",
  "Macht aus einer Kilowattstunde Strom drei bis vier Kilowattstunden Wärme.":
    "Turns one kilowatt-hour of electricity into three or four of heat.",
  "Verschiebt PV-Strom vom Mittag in den Abend und hebt die Eigenverbrauchsquote.":
    "Shifts solar power from midday into the evening and lifts the self-consumption rate.",
  Wallbox: "Wallbox",
  "Lädt das Auto mit meist 11 kW. Über 4,2 kW fällt sie unter § 14a EnWG.":
    "Charges the car at typically 11 kW. Above 4.2 kW it falls under § 14a EnWG.",
  Zählerplatz: "Meter position",
  "Zweirichtungszähler plus Smart-Meter-Gateway – der Übergabepunkt zum Netz.":
    "A bidirectional meter plus smart meter gateway – the handover point to the grid.",
  Warmwasserspeicher: "Hot water tank",
  "Puffert Wärme und ist damit selbst ein Speicher für PV-Überschuss.":
    "Buffers heat and is therefore itself a store for solar surplus.",
  "Was heute alles hinter dem Zähler steht":
    "Everything that sits behind the meter today",
  "Ein Haushalt ist längst kein reiner Verbraucher mehr":
    "A household stopped being a pure consumer long ago",
  "Jedes dieser Geräte verändert etwas am Vertragsverhältnis: die PV-Anlage braucht eine zweite Marktlokation, Wärmepumpe und Wallbox fallen unter § 14a EnWG, der Speicher verschiebt den Verbrauch in andere Stunden. Aus dem Letztverbraucher wird ein Prosumer – jemand, der zugleich verbraucht und erzeugt.":
    "Every one of these devices changes something about the contractual relationship: the PV system needs a second market location, the heat pump and wallbox fall under § 14a EnWG, and the battery shifts consumption into other hours. The final consumer becomes a prosumer – someone who consumes and generates at the same time.",

  /* ---- Heizungsvergleich ---- */
  "JAZ 3,7": "SPF 3.7",
  "abhängig vom Strommix, sinkend":
    "depends on the electricity mix, and falling",
  Wärmenetz: "Heat network",
  "keine eigene Umwandlung": "no conversion of its own",
  "abhängig vom Erzeugungsmix": "depends on the generation mix",
  "Gas-Brennwert": "Condensing gas",
  "92 % Nutzungsgrad": "92 % seasonal efficiency",
  "rund 0,18 kg je kWh": "around 0.18 kg per kWh",
  Pelletkessel: "Pellet boiler",
  Holzpellets: "Wood pellets",
  "88 % Nutzungsgrad": "88 % seasonal efficiency",
  "bilanziell nahezu neutral": "close to neutral on a balance-sheet basis",
  Ölheizung: "Oil heating",
  Heizöl: "Heating oil",
  "rund 0,27 kg je kWh": "around 0.27 kg per kWh",
  Direktstromheizung: "Direct electric heating",
  "99 % – aber 1 kWh je kWh": "99 % – but 1 kWh in for 1 kWh out",
  "abhängig vom Strommix": "depends on the electricity mix",
  "Heizsysteme im Vergleich": "Heating systems compared",
  "Wie viel Wärme aus einer Einheit Energie wird":
    "How much heat comes out of one unit of energy",
  "Der Balken zeigt, wie viele Kilowattstunden Wärme aus einer Kilowattstunde eingekaufter Energie entstehen. Nur die Wärmepumpe kommt über 100 %, weil sie Umweltwärme dazuholt statt Brennstoff zu verbrennen – deshalb ist sie trotz des höheren Strompreises meist günstiger im Betrieb.":
    "The bar shows how many kilowatt-hours of heat come out of one kilowatt-hour of purchased energy. Only the heat pump exceeds 100 %, because it draws in ambient heat instead of burning fuel – which is why it is usually cheaper to run despite the higher price of electricity.",

  /* ---- Formatwechsel ---- */
  Konsultation: "Consultation",
  "rund 8 Monate vorher": "around 8 months before",
  Festlegung: "Ruling",
  "rund 6 Monate vorher": "around 6 months before",
  Stichtag: "Deadline",
  "1. April oder 1. Oktober": "1 April or 1 October",
  "Ein Formatwechsel von der Konsultation bis zum Stichtag":
    "A format change, from consultation to deadline",
  "Zweimal im Jahr, immer nach demselben Muster":
    "Twice a year, always to the same pattern",
  "Um Mitternacht des Stichtags verlieren die alten Versionen ihre Gültigkeit – ohne Übergangszeitraum. Wer nicht umgestellt hat, kann nicht mehr mit dem Markt kommunizieren. Die rund sechs Monate zwischen Festlegung und Stichtag sind das gesamte Fenster, in dem Softwarehersteller entwickeln und ausliefern und Versorger einbauen, testen und schulen müssen.":
    "At midnight on the deadline the old versions lose their validity – with no transition period. Anyone who has not migrated can no longer communicate with the market. The roughly six months between the ruling and the deadline are the entire window in which software vendors have to develop and ship and utilities have to implement, test and train.",
  "~6 Monate": "~6 months",
  "Betroffene Prozesse": "Processes affected",
  Stichtage: "Deadlines",
  "1. April und 1. Oktober": "1 April and 1 October",
  Umsetzungsfenster: "Implementation window",
  "rund 6 Monate, keine Übergangsfrist":
    "around 6 months, no transition period",

  /* ---- Zählertypen ---- */
  "Ferraris-Zähler": "Ferraris meter",
  "Der schwarze Kasten mit der Drehscheibe":
    "The black box with the spinning disc",
  "Ein Induktionszähler: Der durchfließende Strom treibt eine Aluminiumscheibe an, deren Umdrehungen ein mechanisches Zählwerk weiterdrehen. Robust, wartungsarm, seit Jahrzehnten im Einsatz – aber ohne jede Kommunikationsfähigkeit. Bis Ende 2032 sollen alle ausgetauscht sein.":
    "An induction meter: the current flowing through it drives an aluminium disc whose rotations advance a mechanical register. Robust, low-maintenance, in service for decades – but with no communication capability whatsoever. All of them are to be replaced by the end of 2032.",
  "eines (Eintarif)": "one (single rate)",
  "vor Ort, meist einmal im Jahr": "on site, usually once a year",
  keiner: "none",
  "nicht geregelt, Bestandsgerät": "not regulated, legacy device",
  Zweitarifzähler: "Two-rate meter",
  "Zwei Zählwerke, zwei Preise": "Two registers, two prices",
  "Trennt Hochtarif (HT) und Niedertarif (NT) – klassisch bei Nachtspeicherheizungen und Wärmepumpen. Die Umschaltung steuert eine Rundsteuerempfänger- oder Schaltuhr. Auf der Rechnung erscheinen zwei Zählerstände mit eigenen Arbeitspreisen.":
    "Separates the peak rate (HT) from the off-peak rate (NT) – the classic case for night storage heating and heat pumps. Switching is driven by a ripple control receiver or a time switch. Two readings appear on the invoice, each with its own unit rate.",
  "zwei (HT und NT)": "two (HT and NT)",
  "1.8.1 (HT) und 1.8.2 (NT)": "1.8.1 (HT) and 1.8.2 (NT)",
  "Nachtspeicher, Wärmepumpe": "Night storage heating, heat pumps",
  "Rundsteuersignal oder Schaltuhr": "Ripple control signal or time switch",
  "Moderne Messeinrichtung (mME)": "Modern metering equipment (mME)",
  "Digital, aber offline": "Digital, but offline",
  "Ein digitaler Zähler mit Display, der Werte der letzten 24 Monate vorhält – Tages-, Wochen-, Monats- und Jahreswerte. Er kann seine Daten aber nicht von selbst versenden: Ohne Smart-Meter-Gateway wird weiterhin vor Ort abgelesen. Seit 2020 ist er der Standard beim Zählerwechsel.":
    "A digital meter with a display that holds the last 24 months of values – daily, weekly, monthly and annual. It cannot send its data by itself, though: without a smart meter gateway it is still read on site. It has been the standard on meter exchange since 2020.",
  "meist Eintarif, Zweitarif möglich":
    "usually single rate, two-rate possible",
  "24 Monate historische Werte": "24 months of history",
  "keine – nur optische Schnittstelle":
    "none – only the optical interface",
  "25 € im Jahr": "€25 a year",
  "Intelligentes Messsystem (iMSys)": "Intelligent metering system (iMSys)",
  "Moderne Messeinrichtung plus Gateway":
    "Modern metering equipment plus a gateway",
  "Erst das Smart-Meter-Gateway macht aus dem digitalen Zähler ein „Smart Meter“: Es liest die Messeinrichtung aus, verschlüsselt die Werte nach BSI-Schutzprofil und verteilt sie an Lieferant, Netzbetreiber und Kunde. Voraussetzung für dynamische Tarife und für die Steuerung nach § 14a EnWG.":
    "It is the smart meter gateway that turns a digital meter into a “smart meter”: it reads the metering equipment, encrypts the values to the BSI protection profile and distributes them to supplier, grid operator and customer. A precondition for dynamic tariffs and for control under § 14a EnWG.",
  "viertelstündlich, fernauslesbar":
    "quarter-hourly, remotely readable",
  "6.000 kWh im Jahr, PV ab 7 kW, § 14a-Anlagen":
    "6,000 kWh a year, PV from 7 kW, § 14a installations",
  "auf Wunsch Einbau binnen vier Monaten":
    "installation on request within four months",
  "gestaffelt, je nach Fall rund 20–140 € im Jahr":
    "staggered; roughly €20–140 a year depending on the case",
  Zweirichtungszähler: "Bidirectional meter",
  "Misst in beide Richtungen": "Measures in both directions",
  "Pflicht, sobald eine Erzeugungsanlage einspeist – etwa eine PV-Anlage. Zwei getrennte Register erfassen Bezug aus dem Netz und Einspeisung ins Netz. Eine Rückwärtsdrehung wie beim alten Ferraris-Zähler ist ausgeschlossen; sie wäre auch nicht zulässig.":
    "Mandatory as soon as a generating installation feeds in – a PV system, for instance. Two separate registers record withdrawal from the grid and feed-in to it. Running backwards, as an old Ferraris meter would, is impossible here; it would not be permitted either.",
  "1.8.0 Bezug, 2.8.0 Einspeisung":
    "1.8.0 consumption, 2.8.0 feed-in",
  "Photovoltaik, Batteriespeicher, BHKW":
    "Photovoltaics, home batteries, CHP units",
  "häufig zwei an einem Zähler": "often two on one meter",
  "Übergangsweise auch rückwärtslaufende Altzähler geduldet":
    "Legacy meters running backwards are tolerated transitionally",
  Wandlerzähler: "Instrument transformer meter",
  "Für Ströme, die nicht durch den Zähler passen":
    "For currents too large to pass through the meter",
  "Ab etwa 63 Ampere wird der Strom nicht mehr direkt gemessen, sondern über Stromwandler heruntergeteilt. Der Zähler zeigt dann nur einen Bruchteil an – der Wandlerfaktor steht auf dem Gerät und muss bei jeder Ablesung mitmultipliziert werden.":
    "From around 63 amperes the current is no longer measured directly but stepped down through current transformers. The meter then displays only a fraction – the transformer ratio is printed on the device and has to be multiplied in at every reading.",
  "rund 63 A Anschlussleistung": "around 63 A of connected load",
  "Zählerstand × Wandlerfaktor": "Reading × transformer ratio",
  "Gewerbe, Industrie, große Ladeparks":
    "Commercial, industrial, large charging hubs",
  "vergessener Wandlerfaktor in der Abrechnung":
    "a forgotten transformer ratio in the billing",
  Balgengaszähler: "Bellows gas meter",
  "Zählt Volumen, nicht Energie": "Counts volume, not energy",
  "Der Standardzähler im Haushalt (Baugröße G4 oder G6). Zwei Messkammern füllen und entleeren sich abwechselnd; jede Füllung dreht das Zählwerk weiter. Gemessen wird in Kubikmetern – die Umrechnung in Kilowattstunden übernimmt erst die Abrechnung.":
    "The standard household meter (size G4 or G6). Two measuring chambers fill and empty alternately, and each filling advances the register. It measures in cubic metres – the conversion to kilowatt-hours happens later, in the billing.",
  "m³ (Betriebskubikmeter)": "m³ (operating cubic metres)",
  "G4 (6 m³/h), G6 (10 m³/h)": "G4 (6 m³/h), G6 (10 m³/h)",
  "m³ × Zustandszahl × Brennwert = kWh":
    "m³ × Zustandszahl × calorific value = kWh",
  "in der Regel 8 Jahre": "as a rule 8 years",
  Wasserzähler: "Water meter",
  "Flügelrad im Rohr": "An impeller in the pipe",
  "Ein Flügelrad wird vom durchströmenden Wasser gedreht und treibt ein Rollenzählwerk an. Die Baugröße richtet sich nach dem Spitzendurchfluss – Qn 2,5 ist der Hausanschluss-Standard. Zunehmend werden funkauslesbare Ultraschallzähler verbaut.":
    "An impeller is turned by the water flowing past and drives a roller register. The nominal size follows the peak flow – Qn 2.5 is the standard for a house connection. Radio-readable ultrasonic meters are increasingly being installed instead.",
  "m³ (1 m³ = 1.000 Liter)": "m³ (1 m³ = 1,000 litres)",
  "Qn 2,5 im Einfamilienhaus": "Qn 2.5 in a detached house",
  "6 Jahre (Kaltwasser), 5 Jahre (Warmwasser)":
    "6 years (cold water), 5 years (hot water)",
  "Abwassermenge wird meist daraus abgeleitet":
    "the waste water volume is usually derived from it",
  "Zählertypen im Überblick": "Meter types at a glance",
  "Auswählen und vergleichen": "Select and compare",
  "Nicht jeder digitale Zähler ist ein Smart Meter: Erst mit Smart-Meter-Gateway wird aus einer modernen Messeinrichtung ein intelligentes Messsystem. Die Preisobergrenzen stehen im Messstellenbetriebsgesetz und wurden mit der Novelle 2025 angepasst.":
    "Not every digital meter is a smart meter: only with a smart meter gateway does modern metering equipment become an intelligent metering system. The price caps are set in the Messstellenbetriebsgesetz and were adjusted in the 2025 amendment.",

  /* ---- Zählerstandsarten ---- */
  "Ablesung durch den Messstellenbetreiber":
    "Read by the metering point operator",
  "Ein Mitarbeiter oder die Fernauslesung liefert den Wert. Der verlässlichste Fall – und bei intelligenten Messsystemen der Normalfall.":
    "A member of staff or the remote reading supplies the value. The most reliable case – and the normal one with intelligent metering systems.",
  "Selbstablesung durch den Kunden": "Read by the customer",
  "Der Kunde meldet den Stand per Karte, Portal oder App. Der Versorger prüft ihn gegen die Historie auf Plausibilität.":
    "The customer submits the reading by card, portal or app. The utility checks it for plausibility against the history.",
  Verbrauchsschätzung: "Estimated consumption",
  "Wenn kein Wert vorliegt, wird der Verbrauch nach dem Vorjahr hochgerechnet. Der Grund muss auf der Rechnung stehen.":
    "Where no value is available, consumption is extrapolated from the previous year. The reason has to appear on the invoice.",
  "Woher der Zählerstand kommt": "Where the meter reading comes from",
  "Und warum das auf der Rechnung steht":
    "And why that is stated on the invoice",
  "§ 40 Abs. 2 EnWG verlangt, dass jeder Zählerstand gekennzeichnet ist. Eine Schätzung ist zulässig, aber begründungspflichtig – und sie ist der häufigste Auslöser für Rückfragen im Kundenservice.":
    "§ 40 (2) EnWG requires every meter reading to be labelled. An estimate is permitted but has to be justified – and it is the most common trigger for enquiries to customer service.",
  "Schlüssel für den Grund einer Schätzung":
    "Codes for the reason behind an estimate",
  "Fehlende Daten bei der Selbstablesung":
    "Missing data from the customer's own reading",
  "Kein Zutritt zur Messeinrichtung möglich":
    "No access to the metering equipment was possible",
  "Verbrauchszuordnung wegen unterjähriger Preisänderung":
    "Consumption allocation following a mid-year price change",

  /* ---- PV-Rechner ---- */
  "Süd, 30°": "South, 30°",
  "Südost/Südwest": "South-east / south-west",
  "Ost-West": "East–west",
  Flachdach: "Flat roof",
  ohne: "without",
  "mit Speicher": "with a battery",
  "Was eine PV-Anlage bringt": "What a PV system delivers",
  "Ertrag, Eigenverbrauch, Einspeisung":
    "Yield, self-consumption, feed-in",
  "Modellrechnung mit der Einspeisevergütung für Überschusseinspeisung bis 10 kWp (7,70 ct/kWh ab August 2026, 20 Jahre garantiert). Der eigene Strom ist rund fünfmal so viel wert wie der eingespeiste – deshalb entscheidet die Eigenverbrauchsquote über die Wirtschaftlichkeit, nicht die Anlagengröße.":
    "A model calculation using the surplus feed-in tariff up to 10 kWp (7.70 ct/kWh from August 2026, guaranteed for 20 years). Your own power is worth about five times the exported kind – which is why the self-consumption rate, not the size of the system, decides the economics.",
  Anlagengröße: "System size",
  "Stromverbrauch im Haushalt": "Household electricity consumption",
  "Strompreis (brutto)": "Electricity price (incl. VAT)",
  Dachausrichtung: "Roof orientation",
  Jahresertrag: "Annual yield",
  "Ersparnis durch Eigenverbrauch": "Saving through self-consumption",
  "Einspeisevergütung 7,70 ct/kWh": "Feed-in tariff, 7.70 ct/kWh",
  Autarkiegrad: "Degree of self-sufficiency",
  "Wirtschaftlicher Nutzen im Jahr": "Economic benefit per year",

  /* ---- Wärmepumpen-Rechner ---- */
  "Wärmepumpe oder Gasheizung?": "Heat pump or gas boiler?",
  "Betriebskosten im Jahr": "Running costs per year",
  "Nur die Energiekosten, ohne Anschaffung, Wartung und Förderung. Die Jahresarbeitszahl ist die entscheidende Größe: Sie sagt, wie viele Kilowattstunden Wärme aus einer Kilowattstunde Strom werden. Typisch sind 3,2 bis 3,8 für Luft-Wasser- und 4,0 bis 4,5 für Sole-Wasser-Wärmepumpen.":
    "Energy costs only, excluding purchase, maintenance and subsidies. The seasonal performance factor is the decisive figure: it says how many kilowatt-hours of heat come out of one kilowatt-hour of electricity. Typical values are 3.2 to 3.8 for air-to-water and 4.0 to 4.5 for brine-to-water heat pumps.",
  "Heizwärmebedarf im Jahr": "Annual space heating demand",
  "Jahresarbeitszahl (JAZ)": "Seasonal performance factor (JAZ)",
  Wärmepumpentarif: "Heat pump tariff",
  Gaspreis: "Gas price",
  "Gas-Brennwertkessel": "Condensing gas boiler",
  "Die Wärmepumpe ist günstiger": "The heat pump is cheaper",
  "Die Gasheizung ist günstiger": "The gas boiler is cheaper",

  /* ---- Wärmepumpen-Typen ---- */
  "Luft-Wasser-Wärmepumpe": "Air-to-water heat pump",
  Außenluft: "Outside air",
  "Der Normalfall im Bestand": "The normal case in existing buildings",
  "Zieht Wärme aus der Außenluft und gibt sie an das Heizwasser ab. Günstig in der Anschaffung, ohne Erdarbeiten, dafür bei Frost am wenigsten effizient – genau dann, wenn am meisten Wärme gebraucht wird.":
    "Draws heat from the outside air and passes it to the heating water. Cheap to buy and needs no groundworks, but least efficient in frost – exactly when the most heat is needed.",
  "außen oder Split innen/außen": "outdoors, or split indoor/outdoor",
  "keine, aber Schallschutz beachten":
    "none, but noise limits have to be observed",
  "Fördermindest-JAZ": "Minimum JAZ for subsidy",
  "Sanierung, Reihenhaus, Neubau":
    "Retrofit, terraced house, new build",
  "Sole-Wasser-Wärmepumpe": "Brine-to-water heat pump",
  Erdreich: "Ground",
  "Erdwärme über Sonde oder Kollektor":
    "Ground heat via a borehole or a collector",
  "Nutzt die konstante Temperatur des Erdreichs – über eine Tiefenbohrung (Erdsonde) oder flächig verlegte Kollektoren. Deutlich effizienter als Luft, weil die Quelltemperatur im Winter nicht einbricht.":
    "Uses the constant temperature of the ground – through a deep borehole or collectors laid over an area. Considerably more efficient than air, because the source temperature does not collapse in winter.",
  "Bohrung 40–100 m oder Flächenkollektor":
    "Borehole of 40–100 m, or a surface collector",
  "wasserrechtliche Anzeige nötig":
    "notification under water law required",
  "Neubau mit Grundstück": "New build with land",
  "Wasser-Wasser-Wärmepumpe": "Water-to-water heat pump",
  Grundwasser: "Groundwater",
  "Die effizienteste, aber selten möglich":
    "The most efficient, but rarely possible",
  "Fördert Grundwasser aus einem Saugbrunnen, entzieht ihm Wärme und leitet es in einen Schluckbrunnen zurück. Höchste Effizienz, weil Grundwasser ganzjährig 8 bis 12 °C hat – setzt aber die passende Hydrogeologie voraus.":
    "Pumps groundwater from an extraction well, takes heat from it and returns it through an injection well. The highest efficiency, because groundwater stays at 8 to 12 °C year-round – but it requires the right hydrogeology.",
  "zwei Brunnen": "two wells",
  "wasserrechtliche Erlaubnis": "a permit under water law",
  "Wasserqualität, Verockerung": "Water quality, iron ochre clogging",
  "Luft-Luft-Wärmepumpe": "Air-to-air heat pump",
  "Heizt und kühlt über die Luft": "Heats and cools through the air",
  "Überträgt die Wärme direkt auf die Raumluft statt auf Heizwasser – technisch eine umkehrbare Klimaanlage. Braucht kein Heizungsrohrnetz, kann im Sommer kühlen, macht aber kein Warmwasser.":
    "Transfers the heat directly to the room air rather than to heating water – technically a reversible air conditioner. Needs no pipework, can cool in summer, but produces no hot water.",
  "nein, separat nötig": "no, a separate solution is needed",
  "ja, das ist der Hauptvorteil": "yes, that is the main advantage",
  "Wohnung, Büro, Passivhaus": "Flat, office, passive house",
  "meist nicht förderfähig": "usually not eligible for subsidy",
  Brauchwasserwärmepumpe: "Hot water heat pump",
  Kellerluft: "Cellar air",
  "Nur für Warmwasser": "For hot water only",
  "Ein Speicher mit kleiner Wärmepumpe, der die Wärme aus der Kellerluft zieht. Ersetzt keine Heizung, sondern den Elektro-Boiler – und passt gut zu einer PV-Anlage, weil er den Überschuss speichern kann.":
    "A tank with a small heat pump that draws heat from the cellar air. It replaces the electric boiler rather than the heating system – and pairs well with a PV system, because it can store the surplus.",
  "typisch 1,5 – 2 kW": "typically 1.5–2 kW",
  "entfeuchtet und kühlt den Keller":
    "dehumidifies and cools the cellar",
  "PV-Überschuss, [[energiemanagement]]":
    "Solar surplus, energy management",
  "200 – 300 Liter": "200–300 litres",
  "Bauarten von Wärmepumpen": "Types of heat pump",
  "Wärmequelle und Abgabemedium im Namen":
    "The name states the source and the medium",
  "Der Name folgt immer demselben Schema: erst die Wärmequelle, dann das Medium, an das die Wärme abgegeben wird. „Sole-Wasser“ heißt also: Wärme aus dem Erdreich über eine Solelösung, abgegeben an das Heizwasser.":
    "The name always follows the same scheme: first the heat source, then the medium the heat is delivered into. So “brine-to-water” means heat from the ground, carried by a brine solution, delivered into the heating water.",
  "Quelle:": "Source:",
  Jahresarbeitszahl: "Seasonal performance factor",
  Erschließungsaufwand: "Ground works effort",
  gering: "low",
  hoch: "high",
  "sehr gering": "very low",

  // MaLo / MeLo
  "Erdgas trägt rund 0,182 kg CO₂ je Kilowattstunde. Bei 65 €/t sind das 1,18 ct/kWh netto – oder 1,41 ct/kWh mit Umsatzsteuer.":
    "Natural gas carries around 0.182 kg of CO₂ per kilowatt hour. At €65/t that comes to 1.18 ct/kWh net – or 1.41 ct/kWh including VAT.",
  "Ein Vier-Personen-Haushalt verbraucht rund 4.000 kWh Strom im Jahr, eine Gasheizung im Einfamilienhaus 15.000 bis 25.000 kWh Wärme.":
    "A four-person household uses around 4,000 kWh of electricity a year; a gas heating system in a detached house 15,000 to 25,000 kWh of heat.",

  // Calculators
  "{0}/Jahr fix": "{0}/year fixed",
  "{0} €/t × 0,182 kg/kWh": "€{0}/t × 0.182 kg/kWh",
  "{0} m³ × 2,00 €": "{0} m³ × €2.00",
  "{0} m² versiegelt": "{0} m² of sealed surface",
  "1 m³ entspricht hier {0} kWh.": "Here 1 m³ corresponds to {0} kWh.",
  "{0} erwartete Jahreskosten ÷ {1} Raten":
    "{0} expected annual cost ÷ {1} instalments",
  "Bei rund {0} Investition amortisiert sich die Anlage in etwa {1} Jahren.":
    "At an investment of around {0} the system pays for itself in roughly {1} years.",
  "{0} kWh Strom bei JAZ {1}": "{0} kWh of electricity at an SPF of {1}",
  "{0} kWh Gas bei 92 % Nutzungsgrad": "{0} kWh of gas at 92 % efficiency",
  "{0} im Jahr": "{0} a year",
  "Bei diesen Preisen liegt der Kipppunkt bei einer JAZ von {0}. Darüber lohnt sich die Wärmepumpe, darunter der Kessel.":
    "At these prices the tipping point sits at an SPF of {0}. Above that the heat pump wins, below it the boiler.",

  // Wasser / Tarifvergleich / dynamischer Tarif
  "Entspricht {0} je m³ – oder {1} Cent je Liter.":
    "That works out at {0} per m³ – or {1} cents per litre.",
  "teurer als der Festpreis ({0} ct/kWh)":
    "more expensive than the fixed price ({0} ct/kWh)",
};

