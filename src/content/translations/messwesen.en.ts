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
        "**Water meters** of size Qn 2.5, certification period 6 years",
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
        "Implements tariff application cases (TAF) – TAF 1 for annual consumption, TAF 7 for load curves",
      ],
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
        "**Substitute value formation** – producing a justified value where one is missing",
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
        "**33 characters**, alphanumeric",
        "starts with the country code **DE**",
        "contains the code number of the [[netzbetreiber|grid operator]]",
        "the remainder is a unique identifier assigned by the grid operator",
      ],
    },
    {
      t: "quote",
      text: "DE 0005266580 2AO6G56M11SN51G21M24S",
      source: "Illustrative structure – country code, grid operator, local identifier",
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
      text: "For gas the profile depends on the outside temperature: a cold January shifts the forecast consumption forward. That is why the **degree day figure** appears on gas bills whenever a period has to be split.",
    },
    { t: "h", level: 2, text: "When RLM applies" },
    {
      t: "ul",
      items: [
        "From roughly **100,000 kWh** of annual consumption or above 30 kW of load",
        "Measurement in **quarter-hour intervals**, transmitted daily to the grid operator",
        "The basis for the [[leistungspreis|capacity charge]] and for [[blindarbeit|reactive energy]]",
        "Also possible for smaller customers where an [[intelligentes-messsystem|iMSys]] is installed",
      ],
    },
    {
      t: "note",
      kind: "tip",
      text: "This is the quiet upheaval of the smart meter rollout: the more households have an iMSys, the less forecasting and the more measurement. Standard load profiles will become the exception rather than the rule.",
    },
  ],
};
