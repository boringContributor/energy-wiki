import type { Block } from "../types";

export const messwesenEn: Record<string, Block[]> = {
  zaehler: [
    {
      t: "lead",
      text: "The meter is the only point where the energy market touches reality. Everything else – contracts, balancing groups, forecasts – is bookkeeping arranged around that one measured value.",
    },
    { t: "figure", id: "zaehler-anatomie" },
    { t: "h", level: 2, text: "Meter, meter number, meter reading" },
    {
      t: "dl",
      items: [
        { term: "Meter (Messeinrichtung)", def: "The physical device. It belongs to the [[messstellenbetrieb|metering point operator]], not to the customer and not to the landlord." },
        { term: "Meter number (Zählernummer)", def: "The device serial number. It changes with every meter exchange – the [[messlokation|metering location ID]] does not." },
        { term: "[[zaehlerstand|Meter reading]]", def: "The value currently displayed. The difference between two readings gives the [[verbrauch|consumption]]." },
        { term: "[[zaehlwerk|Register]]", def: "A single counter inside the meter. A two-rate meter has two, and so does a bidirectional meter." },
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "Meter number and metering location ID get confused constantly. Rule of thumb: what is printed on the device is the meter number. What appears on the invoice as a 33-character identifier is the [[messlokation|MeLo ID]].",
    },
    { t: "h", level: 2, text: "Certification" },
    {
      t: "p",
      text: "Meters are subject to metrology law. When the certification period expires the device has to be replaced – or the period extended through a sampling procedure. Typical periods: 8 years for electronic electricity meters and bellows gas meters, 16 years for Ferraris meters, 6 years for cold water meters.",
    },
    {
      t: "note",
      kind: "info",
      text: "A meter exchange is a market process in its own right: the metering point operator reports the removal and installation readings, and the supplier bills the period up to the exchange. To the customer this looks like two invoices – but it is one, in two sections.",
    },
  ],

  zaehlertypen: [
    {
      t: "lead",
      text: "Which meter is installed decides which products are possible at all. No remotely readable meter means no [[dynamischer-tarif|dynamic tariff]]; no second register means no night rate; no bidirectional metering means no feed-in payment.",
    },
    { t: "figure", id: "zaehler-typen" },
    { t: "h", level: 2, text: "The distinction that matters" },
    {
      t: "table",
      head: ["", "Modern metering equipment", "Intelligent metering system"],
      rows: [
        ["Abbreviation", "mME", "iMSys"],
        ["Structure", "digital meter", "digital meter **+** smart meter gateway"],
        ["Remote reading", "no", "yes"],
        ["Metered values", "24 months in storage, read on site", "quarter-hourly, transmitted automatically"],
        ["Price cap", "€25 a year", "staggered by consumption and trigger"],
        ["Dynamic tariff possible", "no", "yes"],
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "“Digital meter” is **not** the same as “smart meter”. Most newly installed devices are modern metering equipment without any communication link – they continue to be read on site.",
    },
    { t: "h", level: 2, text: "Other types in the field" },
    {
      t: "ul",
      items: [
        "**Instrument transformer meters** from around 63 A: the displayed value has to be multiplied by the transformer ratio – a classic billing trap",
        "**Bidirectional meters** wherever there is feed-in, usually with two [[marktlokation|market locations]] on the same meter",
        "**Bellows gas meters** of size G4 or G6 in households, measured in m³ – see [[thermische-gasabrechnung|thermal gas billing]]",
        "**Water meters** of size **Q3 = 4** (permanent flow rate 4 m³/h under the MID) – older stock is still labelled **Qn 2.5**; certification period 6 years",
        "**RLM meters** with registering load metering – see [[lastprofil|load profiles]] and [[leistungspreis|capacity charge]]",
      ],
    },
  ],

  zaehlerstand: [
    {
      t: "lead",
      text: "A meter reading is not a consumption figure. The meter keeps counting up from the day it was installed; [[verbrauch|consumption]] is only the difference between two readings.",
    },
    { t: "figure", id: "zaehlerstandsarten" },
    { t: "h", level: 2, text: "Reading it correctly" },
    {
      t: "ul",
      items: [
        "Only the digits **before the decimal point** count – decimals are usually set off in red",
        "On two-rate meters, report both values, HT and NT separately",
        "On instrument transformer meters, apply the **transformer ratio**",
        "Digital meters often have to be switched to the right display first – the [[obis-kennzahlen|OBIS code]] tells you which register you are looking at",
      ],
    },
    { t: "h", level: 2, text: "When it is estimated" },
    {
      t: "p",
      text: "Where no value is available, consumption is extrapolated from the previous year. That is permitted, but it has to be justified. The usual codes on the invoice:",
    },
    {
      t: "ol",
      items: [
        "missing data from the customer's own reading",
        "no access to the metering equipment was possible",
        "consumption allocation following a mid-year [[preisanpassung|price change]]",
      ],
    },
    { t: "h", level: 3, text: "Substitute values in metering point operation" },
    {
      t: "p",
      text: "Where a metered value is missing or fails the plausibility check, the [[messstellenbetrieb|metering point operator]] forms an **Ersatzwert** (substitute value). The usual methods, in order of preference:",
    },
    {
      t: "ul",
      items: [
        "**Vorjahreswert** – the same period of the previous year, temperature-adjusted for gas",
        "**Vergleichswert** – a comparable period of the same metering location, such as the previous week for a load curve",
        "**Interpolation** – for gaps in a load curve, between the last and the next valid value",
        "**Schätzung nach Lastprofil** – annual consumption spread across the period using the [[lastprofil|standard load profile]]",
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "In [[marktkommunikation|market communication]] every value in a `MSCONS` message carries a status: **wahrer Wert** (true, metered value), **Ersatzwert** (substitute value) or **vorläufiger Wert** (provisional, not yet fully validated). A supplier can therefore see whether it is billing a metered or a calculated value.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "Submitting a meter reading is the most used function in almost every [[endkundenportal|self-service portal]]. Two things decide its quality: a **plausibility check** against the last reading and the expected consumption – and a clear statement of which unit is meant (kWh or m³) and whether decimals should be entered.",
    },
    {
      t: "note",
      kind: "law",
      text: "§ 40 (2) EnWG requires every meter reading to be labelled: read by the metering point operator, read by the customer, or estimated.",
    },
  ],

  zaehlwerk: [
    {
      t: "lead",
      text: "A single-rate meter has one register and therefore one reading. As soon as tariff periods or energy directions have to be told apart, it needs several.",
    },
    {
      t: "table",
      head: ["Register", "[[obis-kennzahlen|OBIS]]", "What it counts"],
      rows: [
        ["Consumption, total", "1.8.0", "all kWh withdrawn from the grid"],
        ["Peak rate", "1.8.1", "consumption during the expensive period (HT)"],
        ["Off-peak rate", "1.8.2", "consumption during the cheap period (NT)"],
        ["Feed-in", "2.8.0", "kWh delivered into the grid"],
        ["Reactive energy", "3.8.0 / 4.8.0", "[[blindarbeit|reactive energy]] for customers with load metering"],
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "For HT/NT the rule is **1.8.0 = 1.8.1 + 1.8.2.** Some meters display all three values – reporting all three does not double the consumption, it just includes the total as well.",
    },
    {
      t: "p",
      text: "Switching between HT and NT is controlled either by a time switch in the meter cabinet or by a **ripple control receiver** that receives a signal over the grid. The time windows are set by the grid operator and differ by region.",
    },
  ],

  "obis-kennzahlen": [
    {
      t: "lead",
      text: "On the display of a digital meter, a cryptic sequence such as `1.8.0` appears above the number. That is an OBIS code: it states which physical quantity the displayed value measures.",
    },
    {
      t: "formula",
      expr: "A - B : C . D . E * F",
      where: [
        { sym: "A", desc: "medium – 1 = electricity, 7 = gas, 8 = water, 6 = heat" },
        { sym: "C", desc: "quantity – 1 = active energy consumed, 2 = active energy delivered, 3/4 = reactive energy" },
        { sym: "D", desc: "processing – 8 = cumulative register, 29 = load curve" },
        { sym: "E", desc: "tariff stage – 0 = total, 1 = peak, 2 = off-peak" },
      ],
      caption:
        "In the short form on the meter display, A, B and F are omitted – leaving C.D.E.",
    },
    {
      t: "table",
      head: ["Code", "Meaning"],
      rows: [
        ["1.8.0", "Active energy consumed, total"],
        ["1.8.1 / 1.8.2", "Active energy consumed, peak / off-peak"],
        ["2.8.0", "Active energy delivered – feed-in to the grid"],
        ["1.7.0", "Instantaneous active power in kW"],
        ["7-0:3.0.0", "Gas: operating volume in m³"],
        ["16.7.0", "Net instantaneous power – consumption minus feed-in"],
      ],
    },
    {
      t: "note",
      kind: "tip",
      text: "Useful for portals and apps: if the meter shows `2.8.0` with a value above zero, a generating installation is connected. That is a good moment to offer matching products – and a signal that two [[marktlokation|market locations]] may exist here.",
    },
  ],

  "intelligentes-messsystem": [
    {
      t: "lead",
      text: "The intelligent metering system is the component the digitalisation of the energy transition hangs on. Without remotely readable quarter-hourly values there are no [[dynamischer-tarif|dynamic tariffs]], no grid-friendly control and no reliable consumption feedback.",
    },
    { t: "figure", id: "smart-meter-gateway" },
    { t: "h", level: 2, text: "Who gets one" },
    {
      t: "table",
      head: ["Case", "Rule"],
      rows: [
        ["Consumption above 6,000 kWh a year", "mandatory installation"],
        ["Generating installation above 7 kW of installed capacity", "mandatory installation"],
        ["Controllable device under [[paragraf-14a-enwg|§ 14a EnWG]]", "mandatory installation"],
        ["At the customer's request", "entitlement to installation within four months"],
        ["All other cases", "modern metering equipment, rollout until 2032"],
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "The legal basis is the [[msbg|Messstellenbetriebsgesetz]], last amended in February 2025. By the end of 2025, 20 % of the mandatory installation cases had to be equipped; the rollout is to be complete by 2032.",
    },
    { t: "h", level: 2, text: "What it costs the customer" },
    {
      t: "p",
      text: "The MsbG caps the annual charges. For modern metering equipment the cap is €25 a year. For intelligent metering systems a scale applies, based on annual consumption or installed capacity – for mandatory installation cases with high consumption it reaches €140 a year, with at most €50 on top for a control unit under § 14a. Customers who request installation themselves typically pay €40 to €50 a year.",
    },
    { t: "h", level: 2, text: "The gateway as the security anchor" },
    {
      t: "ul",
      items: [
        "Certified against the BSI protection profile and technical guideline",
        "Encrypted communication outwards (WAN) and into the home network (HAN)",
        "Star-shaped data distribution: each market participant receives only what they are entitled to",
        "Logs every access traceably",
        "Implements tariff application cases (TAF) – TAF 1 for annual consumption, TAF 7 for the register-reading series (Zählerstandsgang)",
      ],
    },
    { t: "h", level: 2, text: "Gateway administrator and star-shaped communication" },
    {
      t: "p",
      text: "The gateway talks to nobody directly. It is operated by the **Gateway-Administrator (GWA)** – normally the [[messstellenbetrieb|metering point operator]] or a service provider acting for it. The GWA commissions the device, manages certificates and keys, installs updates and configures which data go to whom, and how often. **Star-shaped** means: the gateway sends each entitled market participant – grid operator, supplier, direct marketer – exactly its own slice, encrypted and separated from the others. No recipient sees another's data, and no recipient can address the gateway itself.",
    },
    {
      t: "dl",
      items: [
        { term: "CLS channel", def: "The **Controllable Local Systems** channel is a transparent, encrypted tunnel through the gateway to devices in the building. Control under [[paragraf-14a-enwg|§ 14a EnWG]] runs through it – the gateway itself only measures, it does not control." },
        { term: "Steuerbox (control box)", def: "The device at the far end of the CLS channel: it receives the grid operator's control command and switches or dims the [[waermepumpe|heat pump]], [[wallbox|wallbox]] or battery. It replaces the classic ripple control receiver." },
      ],
    },
    { t: "h", level: 2, text: "Register-reading series or load curve" },
    {
      t: "p",
      text: "Two terms that are often used interchangeably in daily work but mean different data:",
    },
    {
      t: "table",
      head: ["", "Zählerstandsgang (TAF 7)", "Quarter-hour load curve (RLM)"],
      rows: [
        ["What is transmitted", "a **meter reading** every 15 minutes, i.e. the cumulative register value", "an **energy quantity** (kWh) or power (kW) per quarter hour"],
        ["Source", "iMSys via the GWA", "RLM meter, see [[lastprofil|load profile]]"],
        ["Consumption per quarter hour", "calculated as the difference between two readings", "metered directly"],
        ["Gaps", "visible in the reading; the next reading closes them", "have to be filled with substitute values"],
      ],
      caption: "A load curve can be derived from a register-reading series, but not the other way round.",
    },
    {
      t: "note",
      kind: "warn",
      text: "A common misconception: an iMSys does **not** transmit constantly. What is sent depends on the tariff application case – for a standard household without a dynamic tariff, often only a handful of values a year.",
    },
  ],

  messstellenbetrieb: [
    {
      t: "lead",
      text: "The metering point operator is the quiet third party in every energy relationship: it owns the [[zaehler|meter]], reads it, and sends the values to everyone who needs them – supplier, grid operator and customer.",
    },
    { t: "h", level: 2, text: "The scope of service" },
    {
      t: "ul",
      items: [
        "Installing, operating and maintaining the metering equipment",
        "Reading the metering equipment, on site or remotely",
        "Forwarding the data to those entitled to it",
        "**Plausibility checking** – testing whether a value is possible at all",
        "**Ersatzwertbildung** (substitute values) – producing a justified value where one is missing: previous-year value, comparable value, interpolation or an estimate from the [[lastprofil|load profile]]; flagged as a substitute value in the `MSCONS` message, see [[zaehlerstand|meter reading]]",
        "Observing certification periods and replacing devices in time",
      ],
    },
    { t: "h", level: 2, text: "Incumbent or competitive" },
    {
      t: "p",
      text: "By default the [[netzbetreiber|grid operator]] is the incumbent metering point operator. The connection user may, however, appoint a **competitive** operator – for instance because it offers additional analysis or sub-metering. The switch runs as a market process of its own, similar to a [[lieferantenwechsel|supplier switch]].",
    },
    {
      t: "note",
      kind: "info",
      text: "For household customers the metering charge usually disappears invisibly into the [[grundpreis|standing charge]] – the supplier collects it on the operator's behalf. It still has to be disclosed.",
    },
  ],

  marktlokation: [
    {
      t: "lead",
      text: "The Marktlokation is the place where energy is withdrawn or fed in, seen from the market's perspective. Everything commercial hangs on its ID: registration, [[lieferantenwechsel|supplier switching]], [[bilanzkreis|balancing]] and billing.",
    },
    { t: "figure", id: "malo-melo" },
    { t: "h", level: 2, text: "Structure of the ID" },
    {
      t: "ul",
      items: [
        "**11 digits**, purely numeric",
        "the **first digit** identifies the issuing body: 1 to 3 for the DVGW (gas), 4 to 9 for the BDEW (electricity)",
        "the **last digit** is a check digit – so typos surface immediately",
      ],
    },
    { t: "h", level: 3, text: "How the check digit is calculated" },
    {
      t: "ol",
      items: [
        "The first **10 digits** are the payload, positions counted from the left as **1 to 10**",
        "Add the digits in the **odd** positions (1, 3, 5, 7, 9)",
        "Add the digits in the **even** positions (2, 4, 6, 8, 10) and **double** that sum",
        "Add both results; the check digit is the distance to the next multiple of ten: **(10 − sum mod 10) mod 10**",
      ],
    },
    {
      t: "example",
      title: "Payload 4137356789",
      lines: [
        { label: "odd positions 4 + 3 + 3 + 6 + 8", value: "24" },
        { label: "even positions 1 + 7 + 5 + 7 + 9 = 29, doubled", value: "58" },
        { label: "Sum", value: "82" },
        { label: "Check digit (10 − 2) mod 10", value: "8" },
      ],
      result: { label: "MaLo ID", value: "41373567898" },
    },
    {
      t: "note",
      kind: "praxis",
      text: "That check digit is a gift for any input form: it can be validated client-side before any process starts. A wrong MaLo ID is one of the most common reasons a registration is rejected by the grid operator.",
    },
    { t: "h", level: 2, text: "Market location and metering location" },
    {
      t: "p",
      text: "The Marktlokation answers the commercial question (“who supplies this place?”), the [[messlokation|Messlokation]] the technical one (“where is the measurement taken?”). Both were introduced in 2018 and replaced the earlier Zählpunktbezeichnung.",
    },
    {
      t: "note",
      kind: "info",
      text: "A PV installation typically has two market locations on a single meter: one for consumption, one for feed-in.",
    },
  ],

  messlokation: [
    {
      t: "lead",
      text: "The Messlokation is the metering point, not the meter. Replace the device and the meter number changes – the metering location ID stays the same.",
    },
    { t: "figure", id: "malo-melo" },
    { t: "h", level: 2, text: "Structure" },
    {
      t: "ul",
      items: [
        "**33 characters**, alphanumeric, upper case",
        "positions 1–2: country code **DE**",
        "positions 3–8: the **6-digit grid operator number** of the [[netzbetreiber|grid operator]]",
        "positions 9–13: the grid operator's **postcode** (5 digits)",
        "positions 14–33: a unique **20-character** alphanumeric identifier assigned by the grid operator",
      ],
    },
    {
      t: "quote",
      text: "DE 000562 66802 AO6G56M11SN51G21M24S",
      source: "Illustrative structure – country code (2), grid operator number (6), postcode (5), local identifier (20) = 33 characters",
    },
    {
      t: "note",
      kind: "info",
      text: "The MeLo ID is structurally identical to the old **Zählpunktbezeichnung** (metering point designation) under DIN VDE. In the 2018 changeover the existing designations simply became the metering location IDs – a 33-character identifier from a legacy system already is the MeLo ID. Only the 11-digit [[marktlokation|MaLo ID]] was newly assigned.",
    },
    {
      t: "note",
      kind: "warn",
      text: "Customers regularly confuse the MeLo ID with the meter number, because both appear on the invoice. In forms, a cropped image of an invoice with the field highlighted helps far more than any amount of explanatory prose.",
    },
  ],

  lastprofil: [
    {
      t: "lead",
      text: "The market balances per quarter hour – but a household meter is read once a year. The standard load profile closes that gap: a normalised curve stating how a typical customer spreads their annual consumption across the year.",
    },
    { t: "figure", id: "lastprofil" },
    { t: "h", level: 2, text: "The common profiles" },
    {
      t: "table",
      head: ["Profile", "Customer group"],
      rows: [
        ["H0", "household"],
        ["G0 – G6", "commercial, split by daily pattern – G4 retail, G5 bakery, G6 weekend operation"],
        ["L0 – L2", "agriculture"],
        ["SLP gas", "additionally temperature-dependent, via degree days"],
      ],
    },
    {
      t: "note",
      kind: "info",
      title: "New profiles from 2025/2026",
      text: "The electricity profiles H0, G0 and L0 date from the 1990s – before heat pumps, wallboxes and PV. The BDEW has re-surveyed them: the **Standardlastprofile 2025** are **H25** (household), **G25** (commercial), **L25** (agriculture), **P25** (household with PV) and **S25** (household with PV and battery). They are being phased in by grid operators from 2025/2026 and replace the old profiles; systems will carry both generations in parallel for a while.",
    },
    {
      t: "note",
      kind: "info",
      text: "For gas the profile depends on the outside temperature: a cold January shifts the forecast consumption forward. That is why the **degree day figure** appears on gas bills whenever a period has to be split.",
    },
    { t: "h", level: 2, text: "When RLM applies" },
    {
      t: "ul",
      items: [
        "**Electricity**: from **100,000 kWh** of annual consumption (§ 12 StromNZV)",
        "**Gas**: from **1.5 million kWh** a year or from **500 kWh/h** of hourly offtake (§ 24 GasNZV) – gas works in hourly values rather than quarter hours",
        "Measurement in **quarter-hour intervals**, transmitted daily to the grid operator",
        "The basis for the [[leistungspreis|capacity charge]] and for [[blindarbeit|reactive energy]]",
        "Also possible for smaller customers where an [[intelligentes-messsystem|iMSys]] is installed",
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "The often-quoted threshold of “30 kW or 30,000 kWh” is **not** an RLM threshold. It comes from the Konzessionsabgabenverordnung, where it defines the point from which a customer counts as a special contract customer and pays the lower rate of [[konzessionsabgabe|Konzessionsabgabe]].",
    },
    {
      t: "note",
      kind: "tip",
      text: "This is the quiet upheaval of the smart meter rollout: the more households have an iMSys, the less forecasting and the more measurement. Standard load profiles will become the exception rather than the rule.",
    },
  ],

  "gateway-administrator": [
    {
      t: "lead",
      text: "A smart meter gateway does nothing on its own. What it measures, how often it sends and to whom is loaded into it from outside – by the gateway administrator. Anyone who wants to understand why a supplier system sometimes receives one annual value and sometimes 35,040 quarter-hour values from an [[intelligentes-messsystem|iMSys]] needs to know this role.",
    },
    { t: "h", level: 2, text: "Who fills the role" },
    {
      t: "p",
      text: "Under § 25 MsbG the [[messstellenbetrieb|metering point operator]] is responsible for administering the gateway. It may outsource the task to a service provider – many smaller grid operators do – but remains legally responsible. The **Gateway-Administrator (GWA)** is therefore not a market role of its own in the sense of the [[marktrollen|GPKE market roles]], but a technical function the metering point operator has to fulfil.",
    },
    {
      t: "dl",
      items: [
        { term: "Commissioning", def: "On installation the gateway is paired with the GWA, receives its certificates and from then on knows exactly one administrator." },
        { term: "Key and certificate management", def: "Every communication is signed and encrypted. The GWA manages the certificates of the gateway and of the connected market participants in the smart metering PKI." },
        { term: "Configuration", def: "Which meters are connected, which tariff application cases run, which recipients get which data at which interval – all of that is configuration profiles the GWA loads." },
        { term: "Firmware and monitoring", def: "Updates, time synchronisation, evaluation of the gateway logs, fault handling." },
        { term: "Data forwarding", def: "The GWA ensures that metered values reach the entitled parties – either directly from the gateway or via the metering point operator in [[marktkommunikation|market communication]]." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "The GWA has to operate according to the technical guideline BSI TR-03109-6 and run a certified information security management system under ISO 27001. The gateway itself is certified against the BSI protection profile and TR-03109-1; its **Sicherheitsmodul** (security module) – a crypto chip comparable to a smartcard – against TR-03109-2. Without that certification a device may not be used as an intelligent metering system (§§ 21, 22 [[msbg|MsbG]]).",
    },
    { t: "h", level: 2, text: "Three interfaces, three networks" },
    {
      t: "table",
      head: ["Interface", "Connects", "Examples"],
      rows: [
        ["**LMN** – Local Metrological Network", "Gateway ↔ meters", "Electricity, gas, water and heat meters; wired or by radio (wireless M-Bus)"],
        ["**HAN** – Home Area Network", "Gateway ↔ building", "Display for the connection user, service technician, **CLS devices** such as the control box"],
        ["**WAN** – Wide Area Network", "Gateway ↔ outside world", "Exclusively to the GWA and to the configured external market participants; via mobile network, LTE-450, powerline or DSL"],
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Nobody can open a connection to the gateway from the WAN. The gateway calls out itself – to the GWA and to the recipients the GWA has registered. That is the core of the security concept and the reason a supplier technically cannot “access the meter” at all.",
    },
    { t: "h", level: 2, text: "Star-shaped communication" },
    {
      t: "p",
      text: "The gateway distributes metered values in a **star**: for each entitled recipient it produces a separate, encrypted data set containing only what that recipient needs for its purpose. Entitled parties are the [[netzbetreiber|grid operator]] for grid operation and balancing, the supplier for billing, the metering point operator, the direct marketer for generating installations – and the connection user itself via the HAN interface. Who may receive what is laid down by the [[msbg|MsbG]], not by the recipient (see [[datenschutz-energiedaten|data protection for energy data]]).",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For the system landscape of a supplier or grid operator this means: the metered values do **not** arrive in your own system from the gateway. They arrive as an `MSCONS` message via [[marktkommunikation|market communication]] from the metering point operator – with [[marktlokation|MaLo]] and [[messlokation|MeLo]] ID, [[obis-kennzahlen|OBIS code]] and a status per value. Whether a Ferraris meter or an iMSys sits behind them is visible to the receiving system only through the resolution and origin of the values. Direct connection to the gateway as a so-called external market participant remains, in practice, mostly reserved to the metering point operator.",
    },
    { t: "h", level: 2, text: "Tariff application cases (TAF)" },
    {
      t: "p",
      text: "A **Tarifanwendungsfall** (tariff application case) is a processing pattern in the gateway standardised by the BSI: it defines which metered values from which meter are formed, stored and sent at which resolution. The GWA activates one or more TAFs per metering location – ordered by the supplier or grid operator through the metering point operator.",
    },
    {
      t: "table",
      head: ["TAF", "Name", "What the gateway delivers", "Typical trigger"],
      rows: [
        ["TAF 1", "Data-minimising tariffs", "One meter reading per billing period, no consumption values in between", "Standard household without a special tariff"],
        ["TAF 2", "Time-variable tariffs", "Consumption per defined time window (tariff stage), summed inside the gateway", "HT/NT tariffs, [[zaehlzeitdefinitionen|metering time definitions]], time-variable grid fees"],
        ["TAF 6", "Reading on demand", "One current meter reading on request", "Move, supplier switch, interim reading"],
        ["TAF 7", "Zählerstandsgang (register-reading series)", "One meter reading every 15 minutes", "[[dynamischer-tarif|Dynamic tariffs]], balancing with real values instead of a load profile"],
        ["TAF 9", "Actual feed-in", "Current feed-in power of a generating installation", "Direct marketing, feed-in management"],
        ["TAF 10", "Grid status data", "Voltage, current, frequency, phase angle at the grid connection", "Grid operation by the distribution grid operator"],
        ["TAF 14", "High-frequency metered values", "Values at second-to-minute intervals for value-added services", "Energy management, visualisation – only with the connection user's consent"],
      ],
      caption: "A selection. The guideline knows further cases, such as TAF 3 to 5 (load-, consumption- and event-variable tariffs), TAF 8 (extreme values) and TAF 13 (visualisation for the final consumer).",
    },
    {
      t: "note",
      kind: "warn",
      text: "A TAF does not become active retroactively. Whoever wants to bill a customer on a dynamic tariff from the 1st of the month needs a running TAF 7 from that day – the order to the metering point operator necessarily precedes the tariff change. Without it, only the TAF 1 meter reading exists for the period and billing falls back to the [[lastprofil|standard load profile]].",
    },
    { t: "h", level: 2, text: "CLS channel and control box" },
    {
      t: "p",
      text: "Measuring and controlling are separated in the iMSys. The gateway measures; controlling is done by a device in the HAN, the **Steuerbox** (control box), addressed via the **CLS channel** (Controllable Local Systems). The CLS channel is a transparent, encrypted tunnel opened by the gateway: the entitled external market participant – for [[paragraf-14a-enwg|§ 14a EnWG]] the grid operator, for feed-in management likewise the grid operator or the direct marketer – talks through the gateway to the control box, without the gateway understanding or altering the content.",
    },
    {
      t: "steps",
      items: [
        { title: "Configure the entitlement", text: "The GWA registers the controlling market participant as an active external market participant for this CLS channel." },
        { title: "Open the channel", text: "The gateway opens the tunnel – again from inside to outside, never the other way round." },
        { title: "Send the control command", text: "The grid operator transmits, say, “limit offtake to 4.2 kW” to the control box." },
        { title: "Execute and log", text: "The control box switches or dims the [[waermepumpe|heat pump]], [[wallbox|wallbox]] or [[batteriespeicher|battery]]. The gateway logs the event; the customer can trace it via the HAN interface." },
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "For a product around heat pumps or wallboxes that means an ordering chain: iMSys **plus** control box **plus** CLS configuration – three items, three possible delays, one installation appointment. Promising the customer just “a smart meter” regularly underestimates this.",
    },
  ],

  ersatzwertbildung: [
    {
      t: "lead",
      text: "No metering system delivers without gaps. Meters fail, reading cards are not returned, a radio module has no reception for three days. So that billing and balancing keep running anyway, there is a regulated procedure for deriving the value that is missing from what is known. The **Ersatzwert** (substitute value) is not a stopgap but a defined data object with its own status.",
    },
    { t: "h", level: 2, text: "When a substitute value is needed" },
    {
      t: "ul",
      items: [
        "**Missing meter reading** – no reading on the key date, neither by the metering point operator nor by the customer",
        "**Meter failure** – the meter or its communication delivers nothing for a period",
        "**Implausible value** – a reading exists but fails the check (see below)",
        "**Gaps in the load curve** – single or many quarter hours of an RLM or iMSys measurement are missing",
        "**Key date without a reading** – a price change, supplier switch or move between two real readings",
      ],
    },
    { t: "h", level: 2, text: "Who forms it" },
    {
      t: "dl",
      items: [
        { term: "Metering point operator", def: "Responsible for the metered values themselves: it checks plausibility, forms the substitute value and transmits it, flagged, to the [[netzbetreiber|grid operator]] and supplier. This is part of metered-value processing under the [[msbg|MsbG]]." },
        { term: "Grid operator", def: "Responsible for balancing: if a load curve is missing for the [[bilanzkreis|balancing group settlement]], it forms a substitute load curve under the MaBiS rules so that the balancing group stays complete." },
        { term: "Supplier", def: "Does not form substitute values in the metrological sense. It may, however, estimate for billing where no value is available – under § 11 StromGVV on the basis of the last reading or the consumption of comparable customers – and has to flag that on the invoice." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "The metrological procedures are set out in the **Metering Code** VDE-AR-N 4400 of the VDE FNN, which describes the requirements for measurement, plausibility checking and substitute values in the electricity market. The labelling duty on the invoice follows from § 40 (2) [[enwg|EnWG]]: every meter reading has to be shown as read, reported by the customer, or estimated.",
    },
    { t: "h", level: 2, text: "Plausibility checking: the step before" },
    {
      t: "p",
      text: "Before a value counts as true it is checked. If it fails, it is replaced – even if it was physically read.",
    },
    {
      t: "table",
      head: ["Check", "Question", "Typical cause on failure"],
      rows: [
        ["Limit", "Is consumption within an expected band compared with the previous year or the forecast?", "Reading error, transposed digits, changed usage"],
        ["Negative consumption", "Is the new reading lower than the old one?", "Meter exchange without removal/installation readings, meter rollover, HT and NT swapped, decimals included"],
        ["Zero consumption", "Has the reading not moved for months?", "Vacancy – or a stopped meter"],
        ["Jump", "Does the consumption of a sub-period fit the rest?", "Wrong reading date, a value from another metering location"],
        ["Load curve", "Are quarter hours missing, are there outliers or sign errors?", "Communication loss, wrong transformer ratio on file"],
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "**Meter rollover** is the classic among mishandled negative consumptions: a meter with five integer digits jumps from 99,999 to 00,000. The true consumption is then new reading + 100,000 − old reading. A system that stubbornly reports “negative consumption = error” here produces an unnecessary clearing case; one that assumes rollover automatically without ruling out a meter exchange produces a wrong invoice.",
    },
    { t: "h", level: 2, text: "Methods for meter readings" },
    {
      t: "table",
      head: ["Method", "How", "When suitable"],
      rows: [
        ["**Vorjahreswert** (previous-year value)", "Consumption of the same period in the previous year, temperature-adjusted for gas via degree days", "Established site, unchanged use"],
        ["**Load profile extrapolation**", "Annual consumption forecast spread across the period with the [[lastprofil|standard load profile]]", "The standard case for SLP customers, especially for key-date splits"],
        ["**Interpolation**", "Consumption between two real readings spread linearly – day-weighted or profile-weighted – onto the key date", "Key date lies between two readings (see example)"],
        ["**Vergleichswert** (comparable value)", "Consumption of comparable customers or periods", "New customer without history"],
        ["**Customer estimate**", "The customer reports an estimated reading", "Only as a last resort; also has to be plausibility-checked"],
      ],
    },
    {
      t: "example",
      title: "Interpolation onto a key date (day-weighted)",
      lines: [
        { label: "Reading 1 on 1 March 2026", value: "12,480 kWh" },
        { label: "Reading 2 on 15 May 2026", value: "13,230 kWh" },
        { label: "Consumption between the readings", value: "750 kWh in 75 days" },
        { label: "Daily average", value: "10 kWh/day" },
        { label: "Key date: price change on 1 April", value: "31 days after reading 1" },
        { label: "Consumption up to the key date", value: "31 × 10 = 310 kWh" },
      ],
      result: { label: "Substitute reading on 1 April", value: "12,790 kWh" },
    },
    {
      t: "note",
      kind: "praxis",
      text: "Day-weighting is usually good enough for electricity and almost always wrong for gas: March consumes a multiple of May. There the same period is weighted with degree days or the gas profile, see [[thermische-gasabrechnung|thermal gas billing]]. A billing engine should make the weighting method configurable per commodity and traceable in the result – after a [[preisanpassung|price adjustment]] that is exactly what the customer asks about.",
    },
    { t: "h", level: 2, text: "Methods for load curves" },
    {
      t: "p",
      text: "A load curve has 96 values a day. If some are missing that is a different problem from a missing annual reading – the gap has to be closed at the same resolution.",
    },
    {
      t: "ul",
      items: [
        "**Interpolation of short gaps** – a few missing quarter hours are filled linearly between the last and the next valid value",
        "**Previous-day or previous-week method** – longer gaps are filled with the load curve of the same time window on the previous day or, better, the same weekday of the previous week, scaled if necessary",
        "**Comparable load curve** – where no reference day of the site exists, a load curve of a comparable metering location or a profile",
        "**Reconciliation with the meter reading** – if readings exist before and after the gap, the substitute curve is scaled so that the total energy matches",
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "For the [[intelligentes-messsystem|register-reading series]] of an iMSys the last point is decisive: because every quarter-hour value is a meter reading, the first value after the gap closes the energy balance automatically. Only the distribution in time inside the gap has to be substituted, not the quantity.",
    },
    { t: "h", level: 2, text: "Status in market communication" },
    {
      t: "p",
      text: "In the `MSCONS` message every value carries a status flag. The receiving system has to evaluate it, not just the number.",
    },
    {
      t: "dl",
      items: [
        { term: "Wahrer Wert (true value)", def: "Metered and plausibility-checked. A billing basis without reservation." },
        { term: "Ersatzwert (substitute value)", def: "Formed by one of the methods above. Billable, but to be flagged as estimated on the invoice and corrected when the true value arrives." },
        { term: "Vorläufiger Wert (provisional value)", def: "Transmitted before plausibility checking is complete. Usable for forecasts and interim information, not for the final bill." },
        { term: "Prognosewert (forecast value)", def: "Not a metered value but an expectation – transmitted as such in certain processes, for instance as the basis for instalments or balancing forecasts." },
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "Store the status **on the value**, not only on the invoice. When a true value is delivered later, the system has to recognise which invoices rest on the substitute value and trigger an [[rechnungskorrektur|invoice correction]]. Without that link the late delivery lands nowhere – the customer then has an estimated invoice and a correct meter reading that never meet.",
    },
    { t: "h", level: 2, text: "When the true value does arrive" },
    {
      t: "steps",
      items: [
        { title: "Receipt and assignment", text: "The late value arrives via `MSCONS` and is assigned to the same metering location and the same period." },
        { title: "Supersede the substitute", text: "The substitute value is kept in the history but loses its validity for billing." },
        { title: "Identify affected invoices", text: "All invoices resting on the substitute value – including subsequent periods for which it was the opening reading." },
        { title: "Correct", text: "Cancellation and recalculation under the rules of [[rechnungskorrektur|invoice correction]]; the difference as an additional payment or credit, see [[nachzahlung-guthaben|additional payment and credit]]." },
      ],
    },
  ],

  zaehlzeitdefinitionen: [
    {
      t: "lead",
      text: "An HT/NT meter used to know by itself when night falls: a time switch or ripple control receiver flipped the register, and the grid operator had the times written down somewhere in a PDF. With time-variable grid fees and dynamic tariffs that is no longer enough. The time windows have to be exchanged between market partners as data – that is the **Zählzeitdefinition** (metering time definition).",
    },
    { t: "h", level: 2, text: "What a metering time definition is" },
    {
      t: "p",
      text: "A Zählzeitdefinition assigns exactly one **Zählzeitregister** (metering time register) to every point in a calendar. It consists of a unique identifier, a validity period and a set of time windows that together cover every quarter hour of the year – without gaps and without overlaps. From the register-reading series of an [[intelligentes-messsystem|iMSys]] the consumption per register can then be formed: each quarter hour is assigned to a register by its timestamp and summed there.",
    },
    {
      t: "dl",
      items: [
        { term: "Zählzeitregister", def: "The target of the assignment – for example “peak”, “standard”, “off-peak”, or classically HT and NT. Functionally it corresponds to the [[zaehlwerk|register]] of a multi-rate meter but exists as a computed register, not necessarily as hardware." },
        { term: "Time window", def: "A period within a day type – say weekdays 17:00 to 20:00 – assigned to a register. Day types distinguish weekday, Saturday, Sunday and public holiday." },
        { term: "Konfigurations-ID (configuration ID)", def: "The identifier of the specific bundle of metering time definition, registers and assignments that applies at a market location. If the bundle changes a new ID is created – so it stays unambiguous under which configuration a value was formed." },
      ],
    },
    { t: "h", level: 2, text: "Who defines – and for what" },
    {
      t: "table",
      head: ["Defined by", "Purpose", "Example"],
      rows: [
        ["[[netzbetreiber|Grid operator]]", "[[zeitvariable-netzentgelte|Time-variable grid fees]], in particular Module 3 under [[paragraf-14a-enwg|§ 14a EnWG]]", "Three time windows per grid area with peak, standard and off-peak prices"],
        ["Supplier", "Time-variable tariff towards the customer", "Two registers for an HT/NT tariff or several stages for a time-of-use tariff"],
      ],
      caption: "Both can apply side by side at the same market location: the grid fee follows the grid operator's definition, the unit rate the supplier's.",
    },
    {
      t: "note",
      kind: "info",
      text: "Metering time definitions were introduced as a master data object of their own with the **MaKo 2025** market processes, precisely because § 14a Module 3 and dynamic tariffs overwhelm the old, informally maintained switching times. They are exchanged via `UTILMD` messages – the grid operator transmits its definitions to the suppliers and metering point operators in its grid area, the supplier its own to the metering point operator, which implements them in the gateway. The exact segments and deadlines are in the UTILMD version in force and the BDEW application guides.",
    },
    { t: "h", level: 2, text: "From quarter hour to register" },
    {
      t: "steps",
      items: [
        { title: "Obtain the time series", text: "The register-reading series (TAF 7) delivers a meter reading every 15 minutes; the differences are the quarter-hour consumptions. Alternatively the gateway forms the register values itself (TAF 2) once the metering time definition has been loaded via the [[gateway-administrator|gateway administrator]]." },
        { title: "Determine the day type", text: "For every calendar day: weekday, Saturday, Sunday or public holiday – according to the holiday calendar the definition prescribes." },
        { title: "Assign the time window", text: "Each quarter hour is assigned to the matching time window, and thus a register, by day type and time of day." },
        { title: "Aggregate", text: "Consumption per register is summed over the billing period and billed like register consumption – at the price of the respective register." },
      ],
    },
    {
      t: "example",
      title: "Three registers on one weekday (simplified)",
      lines: [
        { label: "Peak 17:00–20:00, 12 quarter hours at 0.75 kWh", value: "9 kWh" },
        { label: "Off-peak 00:00–06:00, 24 quarter hours at 0.25 kWh", value: "6 kWh" },
        { label: "Standard, remaining 60 quarter hours at 0.30 kWh", value: "18 kWh" },
      ],
      result: { label: "Daily consumption, sum of all registers", value: "33 kWh" },
    },
    {
      t: "note",
      kind: "praxis",
      text: "The checksum is your friend: sum of all registers = total consumption under [[obis-kennzahlen|OBIS]] 1.8.0. If it does not match, a quarter hour is assigned twice or not at all – almost always on a clock-change day.",
    },
    { t: "h", level: 2, text: "Calendar, public holidays, clock changes" },
    {
      t: "p",
      text: "The assignment hangs on three things that each look harmless and together produce most of the errors.",
    },
    {
      t: "dl",
      items: [
        { term: "Public holidays", def: "Are a matter for the federal states in Germany. Corpus Christi is a holiday in Bavaria but not in Hamburg. The grid operator determines which holiday calendar applies in its grid area – and whether a holiday is treated like a Sunday." },
        { term: "Summer and winter time", def: "The day of the switch to summer time has **23 hours** (92 quarter hours), the day of the switch back **25 hours** (100 quarter hours). In October the quarter hours between 02:00 and 03:00 local time occur **twice**." },
        { term: "Time zone of the metered values", def: "Gateways and market communication work in UTC. A time window “17:00 to 20:00”, however, is local time. The conversion has to be done per calendar day, not with a fixed offset." },
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "The most common mistake in billing engines: storing timestamps as local time without a zone. On the day of the switch back two values then exist with the timestamp 02:15 – one is overwritten, one quarter hour is missing, the checksum fails. Store metered values in UTC or with an explicit zone identifier and apply the metering time definition when evaluating, not when storing.",
    },
    { t: "h", level: 2, text: "Relation to HT/NT and § 14a Module 3" },
    {
      t: "p",
      text: "A classic two-rate meter is the special case of a metering time definition with two registers, fixed switching times and an implementation in hardware. The Zählzeitdefinition generalises that: any number of registers, day-type-dependent windows, changeable each year, implemented as a calculation rule on quarter-hour values. For [[paragraf-14a-enwg|§ 14a Module 3]] that is exactly the technical precondition – the grid operator defines at least three time windows with different unit rates in the grid fee, and without an iMSys and a metering time definition that cannot be billed.",
    },
    {
      t: "note",
      kind: "info",
      text: "A [[dynamischer-tarif|dynamic tariff]] needs no metering time definition: there every quarter hour has its own price, so there are 35,040 “registers” a year. Time-variable tariffs with fixed windows and dynamic tariffs with exchange prices are two different products on the same data basis.",
    },
    { t: "h", level: 2, text: "What a billing engine needs" },
    {
      t: "ul",
      items: [
        "A **time zone calendar** with public holidays per federal state or per grid area, including the rules for clock-change days",
        "Metering time definitions as **versioned master data** with a validity period – the definition for 2026 must not overwrite the one for 2025, because corrective invoices still need the old one",
        "The **configuration ID** on every register value formed from it, so it remains traceable under which rule it came about",
        "Two parallel assignments per market location: one for the grid fee (the grid operator's definition), one for the tariff (the supplier's definition)",
        "A **checksum test** against total consumption and error handling for quarter hours without an assignment",
        "The fallback to the registers of a multi-rate meter where no iMSys is installed – there the meter delivers the register readings, and the metering time definition only documents the switching times",
      ],
    },
  ],
};
