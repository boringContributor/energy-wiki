import type { Block } from "../types";

export const tarifeEn: Record<string, Block[]> = {
  tarif: [
    {
      t: "lead",
      text: "However different tariff names sound, almost all of them share the same structure underneath: a consumption-independent [[grundpreis|Grundpreis]], the standing charge, and a consumption-dependent [[arbeitspreis|Arbeitspreis]], the unit rate. Everything else is a variation on that.",
    },
    { t: "figure", id: "tarif-anatomie" },
    { t: "h", level: 2, text: "The building blocks" },
    {
      t: "dl",
      items: [
        { term: "Grundpreis (standing charge)", def: "€ per month or year, independent of consumption. Covers metering, billing, service and part of the grid fee. See [[grundpreis|Grundpreis]]." },
        { term: "Arbeitspreis (unit rate)", def: "ct per kWh or € per m³. Also called Verbrauchspreis. See [[arbeitspreis|Arbeitspreis]]." },
        { term: "Leistungspreis (capacity charge)", def: "€ per kW – only for customers with load metering. See [[leistungspreis|Leistungspreis]]." },
        { term: "Bonuses and discounts", def: "New-customer bonus, instant bonus, loyalty bonus. Arithmetically price reductions with their own conditions – and a frequent source of complaints in year two." },
      ],
    },
    { t: "h", level: 2, text: "Tariff types" },
    {
      t: "table",
      head: ["Type", "Price", "For whom"],
      rows: [
        ["Basic supply tariff", "regulated by law, terminable at any time with 14 days' notice", "anyone who has not signed anything else – see [[grundversorgung|Grundversorgung]]"],
        ["Special contract / standard tariff", "freely calculated, often a 12-month term", "the normal case in a competitive market"],
        ["Price guarantee", "price fixed for a period, usually excluding taxes and levies", "anyone who wants predictability"],
        ["Dynamic tariff", "changes hourly with the exchange price", "anyone who can shift consumption – see [[dynamischer-tarif|dynamic tariff]]"],
        ["Two-rate tariff (HT/NT)", "two unit rates depending on the time of day", "night storage heating, heat pumps"],
        ["Heat pump and heating-power tariff", "its own, lower unit rate", "installations under [[paragraf-14a-enwg|§ 14a EnWG]]"],
      ],
    },
    { t: "h", level: 2, text: "The GV marker" },
    {
      t: "note",
      kind: "law",
      text: "Under § 40 (2) EnWG the invoice must make clear whether supply is under the basic supply regime. The usual convention is the marker **> GV <** in the product name. Without it, supply is outside the basic supply regime.",
    },
    { t: "h", level: 2, text: "What a tariff contains besides the price" },
    {
      t: "ul",
      items: [
        "Contract term, renewal and notice period",
        "Price guarantee: scope and duration, usually excluding state-imposed components",
        "Instalment rhythm – 11 or 12 payments, see [[abschlagszahlung|Abschlagszahlung]]",
        "Start of supply, and whether this is a [[lieferantenwechsel|supplier switch]] or a [[umzug|move-in]]",
        "Customer group: household or business – this changes prices, VAT presentation and termination rights",
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "In a product catalogue a tariff is a product with price components. It pays to model the standing charge and the unit rate as genuinely separate components rather than as one blended price – otherwise neither price changes nor pro-rata periods can be represented cleanly.",
    },
  ],

  grundpreis: [
    {
      t: "lead",
      text: "Even an empty house costs the utility money: the connection is held available, the meter is operated and certified, a contract account is maintained, an invoice is produced. The Grundpreis covers those costs.",
    },
    {
      t: "ul",
      items: [
        "[[messstellenbetrieb|Metering point operation]] – installation, operation, certification, meter reading",
        "The consumption-independent share of the [[netzentgelte|grid fees]]",
        "Billing, customer service, receivables management",
        "For [[wasser|water]], additionally the availability charge based on meter size",
      ],
    },
    {
      t: "note",
      kind: "tip",
      text: "The standing charge is why comparing tariffs without stating a consumption figure is worthless. At 1,000 kWh a year a €120 standing charge adds 12 ct/kWh; at 5,000 kWh it adds only 2.4 ct/kWh.",
    },
    { t: "figure", id: "tarif-anatomie" },
    {
      t: "p",
      text: "Pro-rata calculation: if supply starts or ends mid-year, the standing charge is split by the day. The usual formula is standing charge × days ÷ 365 – and where a price change falls within the year, this produces several lines on the [[jahresabrechnung|annual statement]].",
    },
  ],

  arbeitspreis: [
    {
      t: "lead",
      text: "The unit rate is the part of the bill that scales with the customer's behaviour – and therefore the lever behind every savings message. It contains procurement, sales margin, the consumption-dependent share of the grid fee, and all levies and taxes per kilowatt-hour.",
    },
    {
      t: "table",
      head: ["Commodity", "Unit", "Order of magnitude 2026 (household, incl. VAT)"],
      align: ["l", "l", "r"],
      rows: [
        ["Electricity", "ct/kWh", "around 33–40"],
        ["Natural gas", "ct/kWh", "around 10–13"],
        ["Drinking water", "€/m³", "around 1.80–2.60"],
        ["District heating", "ct/kWh", "around 10–18"],
      ],
      caption:
        "Ranges, not quotes: grid fees and concession fees vary a great deal by region.",
    },
    { t: "h", level: 2, text: "Several unit rates in one contract" },
    {
      t: "ul",
      items: [
        "**HT/NT** – peak and off-peak rates with separate [[zaehlwerk|registers]]",
        "**Tiered rates** – a lower rate above a certain annual volume, mostly in the commercial segment",
        "**Hourly changing** – in a [[dynamischer-tarif|dynamic tariff]]",
        "**Period-based** – after a [[preisanpassung|price change]], two rates apply consecutively within one billing year",
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "On a mid-year price change the annual consumption is not simply halved. Without an actual meter reading on the key date it is allocated across the sub-periods using degree days or a [[lastprofil|load profile]] – a common reason why customers cannot reproduce their own bill.",
    },
  ],

  leistungspreis: [
    {
      t: "lead",
      text: "Drawing a lot of power at once forces the grid operator to lay thicker cables and install larger transformers – regardless of how many hours a year that happens. So customers with load metering pay not only for energy but for capacity.",
    },
    {
      t: "formula",
      expr: "Grid fee  =  Capacity charge [€/kW·a]  ×  Annual peak load [kW]  +  Unit rate [ct/kWh]  ×  Consumption [kWh]",
    },
    { t: "h", level: 2, text: "Who is affected" },
    {
      t: "p",
      text: "From roughly 100,000 kWh a year or a load above 30 kW, registering load metering (RLM) becomes mandatory – and then the actual [[lastprofil|load curve]] counts rather than a standard load profile.",
    },
    {
      t: "example",
      title: "A single quarter hour decides it",
      lines: [
        { label: "Annual consumption", value: "420,000 kWh" },
        { label: "Highest quarter hour", value: "180 kW" },
        { label: "Capacity charge", value: "€95/kW·a" },
        { label: "Capacity component", value: "€17,100" },
      ],
      result: { label: "Saving from shaving 20 kW off the peak", value: "€1,900 a year" },
    },
    {
      t: "note",
      kind: "tip",
      text: "This is the economic heart of **peak load management**: not consuming less, but consuming more evenly. A single badly timed plant start can noticeably raise the annual bill.",
    },
    {
      t: "p",
      text: "Related but not identical: [[blindarbeit|reactive energy]]. It too is billed only to customers with load metering, and only above an agreed threshold.",
    },
  ],

  "dynamischer-tarif": [
    {
      t: "lead",
      text: "In a dynamic tariff the unit rate is no longer a number in the contract but a formula: the exchange price for that hour plus a fixed adder for grid fees, levies, taxes and the supplier's margin.",
    },
    { t: "figure", id: "dynamischer-tarif" },
    { t: "h", level: 2, text: "Where the price comes from" },
    {
      t: "steps",
      items: [
        { title: "Day-ahead auction", text: "Every midday the power exchange determines the prices for all 24 hours of the following day. From that moment they are fixed." },
        { title: "Conversion to ct/kWh", text: "Exchange prices are quoted in €/MWh. 95 €/MWh is 9.5 ct/kWh – see [[energie-einheiten|units]]." },
        { title: "The adder", text: "Grid fee, [[kwk-umlage|levies]], [[stromsteuer|electricity tax]], [[konzessionsabgabe|concession fee]], margin and VAT are added – roughly 18 to 22 ct/kWh in total." },
        { title: "Billing", text: "The [[intelligentes-messsystem|iMSys]] load curve is valued quarter hour by quarter hour at the respective price and summed." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "**§ 41a EnWG**: since 1 January 2025 every supplier serving final consumers must offer a dynamic electricity contract, provided the customer has an intelligent metering system as defined in the [[msbg|MsbG]]. The earlier threshold of 100,000 customers was removed by the GNDEW.",
    },
    { t: "h", level: 2, text: "Who it pays off for" },
    {
      t: "cards",
      items: [
        { title: "Worth it", text: "Heat pump, wallbox, home battery, home office with controllable appliances – anything that can move consumption in time." },
        { title: "Barely worth it", text: "A small flat with a fixed daily routine. Cooking at six in the evening hits exactly the most expensive hour." },
        { title: "Needs automation", text: "Without an energy management system reacting to price signals automatically, the benefit usually stays theoretical." },
        { title: "Needs nerve", text: "Price spikes are real. A tariff without a cap can cost several times the fixed price in individual hours." },
      ],
    },
    { t: "h", level: 2, text: "Telling the models apart" },
    {
      t: "table",
      head: ["Model", "Price changes", "Requirement"],
      rows: [
        ["Fixed price", "only through a [[preisanpassung|price change]]", "any meter"],
        ["Two-rate HT/NT", "twice a day, at fixed times", "[[zaehlertypen|two-rate meter]]"],
        ["Time-variable tariff", "fixed time windows with fixed prices", "iMSys or two-rate meter"],
        ["Dynamic tariff", "hourly, following the exchange", "[[intelligentes-messsystem|iMSys]] mandatory"],
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "From a product perspective a dynamic tariff is not a price but a pricing rule plus a data source. Model it in the catalogue like a fixed price and you will fail at the comparison calculator, the instalment forecast and the bill explanation.",
    },
  ],

  "strompreis-zusammensetzung": [
    {
      t: "lead",
      text: "Less than half of every euro on an electricity bill goes to the supplier. The rest is grid and state – which is why switching supplier is worth doing but never saves as much as people expect.",
    },
    { t: "figure", id: "strompreis-stack" },
    { t: "h", level: 2, text: "The items one by one" },
    {
      t: "dl",
      items: [
        { term: "Procurement and sales", def: "Buying the energy on the exchange or through forward contracts, plus sales costs and margin. The only genuinely competitive share." },
        { term: "[[netzentgelte|Grid fees]]", def: "Transport and distribution. Highly regional, regulated by the Bundesnetzagentur." },
        { term: "[[messstellenbetrieb|Metering point operation]]", def: "Providing, running and reading the meter. Price caps in the [[msbg|MsbG]]." },
        { term: "[[kwk-umlage|KWKG levy]]", def: "0.446 ct/kWh in 2026." },
        { term: "[[offshore-netzumlage|Offshore grid levy]]", def: "0.941 ct/kWh in 2026." },
        { term: "[[besondere-netznutzung|Surcharge for special grid use]]", def: "1.559 ct/kWh in 2026 – called the § 19 StromNEV levy until 2024." },
        { term: "[[konzessionsabgabe|Concession fee]]", def: "1.32 to 2.39 ct/kWh depending on the size of the municipality." },
        { term: "[[stromsteuer|Electricity tax]]", def: "2.05 ct/kWh, unchanged for years." },
        { term: "[[umsatzsteuer-energie|VAT]]", def: "19 % on the sum of everything above." },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "The [[eeg-umlage|EEG levy]] still appears in many older explainers. It has been zero since 1 July 2022 and is financed from the federal budget instead. The [[umlage-abschaltbare-lasten|interruptible loads levy]] is no longer charged either.",
    },
    { t: "h", level: 2, text: "Order of magnitude, 2026" },
    {
      t: "stats",
      items: [
        { value: "≈ 37 ct", label: "per kWh incl. VAT", hint: "household, 3,500 kWh a year" },
        { value: "≈ 41 %", label: "Procurement & sales" },
        { value: "≈ 25 %", label: "Grid fees" },
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "All of these figures are averages. Two grid areas can differ by several cents per kilowatt-hour – and two suppliers within the same grid area by a similar amount again.",
    },
  ],

  "gaspreis-zusammensetzung": [
    {
      t: "lead",
      text: "The gas price is built more simply than the electricity price: fewer levies, but two taxes side by side – the classic [[energiesteuer|energy tax]] and the [[co2-preis|carbon price]] under the BEHG.",
    },
    { t: "figure", id: "gaspreis-stack" },
    { t: "h", level: 2, text: "What changed in 2026" },
    {
      t: "ul",
      items: [
        "The **gas storage levy is gone** as of 1 January 2026 – the federal government now carries that cost in full",
        "The **carbon price** is no longer set at a fixed level but auctioned within a corridor of 55 to 65 €/t; auctions start in July 2026 on the EEX",
        "The **energy tax** stays unchanged at 0.55 ct/kWh",
      ],
    },
    { t: "h", level: 2, text: "The items" },
    {
      t: "table",
      head: ["Item", "Order of magnitude 2026, net", "Type"],
      align: ["l", "r", "l"],
      rows: [
        ["Procurement & sales", "≈ 4 ct/kWh", "competitive"],
        ["[[netzentgelte|Grid fee]]", "≈ 2 ct/kWh", "regulated"],
        ["Balancing levy (SLP)", "a few hundredths of a ct/kWh", "set annually"],
        ["[[co2-preis|Carbon price]]", "1.00–1.18 ct/kWh", "55–65 €/t"],
        ["[[energiesteuer|Energy tax]]", "0.55 ct/kWh", "tax"],
        ["[[konzessionsabgabe|Concession fee]], heating gas", "0.22–0.40 ct/kWh", "municipal"],
        ["[[umsatzsteuer-energie|VAT]]", "19 %", "on everything above"],
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Gas used for cooking and hot water carries a higher concession fee than heating gas – 0.51 to 0.93 ct/kWh instead of 0.22 to 0.40 ct/kWh. In practice the heating gas rate is normally applied to households.",
    },
  ],

  grundversorgung: [
    {
      t: "lead",
      text: "Nobody should be left without energy merely because they never signed a contract. So § 36 EnWG designates a Grundversorger, a basic supplier, for every grid area: the company supplying the most household customers there. Who that is gets redetermined every three years.",
    },
    { t: "h", level: 2, text: "Who ends up in basic supply" },
    {
      t: "ul",
      items: [
        "Anyone who moves in and simply consumes electricity or gas without signing a contract",
        "Anyone who does nothing after [[ersatzversorgung|substitute supply]] ends",
        "Anyone who stays there deliberately, because they value the short notice period",
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "The notice period in basic supply is **two weeks**. The basic supplier in turn is obliged to supply and may refuse only under narrow conditions.",
    },
    { t: "h", level: 2, text: "Price and labelling" },
    {
      t: "p",
      text: "Basic supply uses the **allgemeine Preise**, the general prices. They must be published, and changes announced at least six weeks in advance – with a [[preisanpassung|special right of termination]]. On the invoice, basic supply is identifiable by the marker **> GV <** in the product name.",
    },
    {
      t: "note",
      kind: "warn",
      text: "Basic supply's reputation as “the most expensive tariff” is not always deserved. During phases of sharply rising procurement prices it was at times cheaper than offers for new customers, because basic suppliers buy further ahead.",
    },
  ],

  ersatzversorgung: [
    {
      t: "lead",
      text: "Substitute supply is the fallback case: energy is flowing, but nobody is responsible for it. Under § 38 EnWG it is then deemed to be supplied by the basic supplier – automatically, without anyone signing anything.",
    },
    { t: "h", level: 2, text: "Typical triggers" },
    {
      t: "ul",
      items: [
        "The previous supplier loses its right of grid access or becomes insolvent",
        "A [[lieferantenwechsel|supplier switch]] is delayed while the old contract has already ended",
        "A move-in goes unreported and the withdrawal point is not assigned to any contract",
      ],
    },
    { t: "h", level: 2, text: "How it differs from basic supply" },
    {
      t: "table",
      head: ["", "[[grundversorgung|Basic supply]] (§ 36)", "Substitute supply (§ 38)"],
      rows: [
        ["Duration", "open-ended", "at most three months"],
        ["Notice period", "two weeks", "none – can be ended at any time"],
        ["How it arises", "through conduct implying agreement", "by operation of law"],
        ["Afterwards", "—", "rolls over automatically into basic supply"],
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "For onboarding processes, substitute supply is an important state: a customer switching out of it has **no** notice period to observe. That is a strong argument in the communication – and a field worth asking about in the flow.",
    },
  ],

  preisanpassung: [
    {
      t: "lead",
      text: "A price change is the most sensitive moment in a customer relationship. Legally it is tightly formalised; in communication terms it decides churn rates.",
    },
    { t: "h", level: 2, text: "The obligations" },
    {
      t: "steps",
      items: [
        { title: "Announcement", text: "At least six weeks before it takes effect, in clear and comprehensible language, sent directly to the customer." },
        { title: "Justification", text: "The occasion, the conditions and the extent must be recognisable – which components are rising and which are falling." },
        { title: "Special right of termination", text: "The customer may terminate as of the date the change takes effect, regardless of the agreed contract term." },
        { title: "Implementation", text: "From the effective date the new price applies. The billing period splits into sub-periods, each with its own [[arbeitspreis|unit rate]]." },
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "Without an actual meter reading on the key date, consumption is **allocated** across the sub-periods – by degree days for gas, by [[lastprofil|load profile]] for electricity. That is exactly why the [[jahresabrechnung|annual statement]] carries the note about consumption allocation following a mid-year price change.",
    },
    { t: "h", level: 2, text: "Price guarantees – and what they do not cover" },
    {
      t: "p",
      text: "A “limited price guarantee” usually covers only procurement and sales. If [[netzentgelte|grid fees]], levies, [[stromsteuer|taxes]] or [[umsatzsteuer-energie|VAT]] change, the price may still rise. A full price guarantee is rare and expensive.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "Price changes are a mass process: thousands of contracts, each with a letter, a new price sheet, an adjusted [[abschlagszahlung|instalment]] and a termination window. Automating this process cleanly saves more effort than most day-to-day features.",
    },
  ],

  stromkennzeichnung: [
    {
      t: "lead",
      text: "Because it is impossible to tell which electron in the grid came from which power station, electricity labelling is a purely accounting statement: it says which generation the supplier **bought** for its customers.",
    },
    { t: "h", level: 2, text: "What must be disclosed" },
    {
      t: "ul",
      items: [
        "The share of each energy source: renewables (EEG-funded and other), nuclear, coal, natural gas, other fossil",
        "CO₂ emissions in grams per kilowatt-hour",
        "Radioactive waste in milligrams per kilowatt-hour",
        "A comparison with the German generation average",
      ],
    },
    {
      t: "p",
      text: "The disclosure belongs on the invoice or an annex to it, and must additionally be published on the website. The legal basis is § 42 [[enwg|EnWG]].",
    },
    { t: "h", level: 2, text: "Guarantees of origin" },
    {
      t: "p",
      text: "Green electricity is evidenced through **guarantees of origin (Herkunftsnachweise, HKN)**, held in a register run by the Federal Environment Agency. A certificate is cancelled when used, so the same kilowatt-hour cannot be sold as green twice. The certificate can be traded separately from the physical supply – which is why “100 % green electricity” on its own says little about impact.",
    },
    {
      t: "note",
      kind: "info",
      text: "Electricity whose generation was financed through [[eeg-umlage|EEG support]] is disclosed separately in the labelling and may not additionally be marketed as a green electricity product.",
    },
  ],
};
