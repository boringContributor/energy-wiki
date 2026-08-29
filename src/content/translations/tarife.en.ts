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
        ["Dynamic tariff", "changes hourly or quarter-hourly (96 values a day) with the exchange price", "anyone who can shift consumption – see [[dynamischer-tarif|dynamic tariff]]"],
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
      text: "**Pro-rata calculation:** if supply starts or ends mid-year, the standing charge is split by the day. The usual formula is annual standing charge × days ÷ days in the year – that is ÷ 365, but ÷ 366 in leap years such as 2028. Hard-code 365 and you overbill one day every fourth year. Where the Grundpreis is agreed as a monthly price there are two readings: monthly price × 12 ÷ days in the year, or day-exact within each month (monthly price ÷ 28 to 31 days) – both are common but yield slightly different amounts. Where a price change falls within the year, this produces several lines on the [[jahresabrechnung|annual statement]].",
    },
    {
      t: "note",
      kind: "praxis",
      text: "A classic billing-engine bug: the billing period straddles the turn of the year, one calendar year has 365 days and the other 366 – and the time slices are valued with the wrong denominator. The clean approach is to weight every slice by the days of its own calendar year.",
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
        "**Hourly or quarter-hourly changing (96 values a day)** – in a [[dynamischer-tarif|dynamic tariff]]",
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
      text: "The statutory criterion is consumption alone: from an annual consumption of 100,000 kWh, registering load metering (RLM) becomes mandatory (§ 12 StromNZV) – and then the actual [[lastprofil|load curve]] counts rather than a standard load profile. The law names no capacity threshold in kW. Some distribution grid operators do work with their own internal cut-offs – a connection capacity, say, above which they require load metering even below 100,000 kWh. Those live in the technical connection conditions or the price sheet, not in the regulation.",
    },
    { t: "h", level: 2, text: "Two price sheets, two time bases" },
    {
      t: "p",
      text: "[[netzbetreiber|Grid operators]] publish two price sheets for RLM customers, split by **Benutzungsstunden** (hours of use: annual consumption ÷ annual peak load): one for fewer than 2,500 hours a year with a low capacity charge and a high unit rate, and one from 2,500 hours upwards with the reverse ratio. Customers with an even load are better off on the second – and which one applies only becomes clear at year end from the metered values.",
    },
    {
      t: "note",
      kind: "info",
      text: "**Annual or monthly capacity charge:** the annual capacity charge uses the highest quarter hour of the whole year. The monthly capacity charge values each month's peak separately and sums them – common in the gas sector and for seasonal consumers, for whom a single winter peak would otherwise make the whole year more expensive.",
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
      text: "In a dynamic tariff the unit rate is no longer a number in the contract but a formula: the exchange price for that hour or quarter hour plus a fixed adder for grid fees, levies, taxes and the supplier's margin.",
    },
    { t: "figure", id: "dynamischer-tarif" },
    { t: "h", level: 2, text: "Where the price comes from" },
    {
      t: "steps",
      items: [
        { title: "Day-ahead auction", text: "Every midday the power exchange determines the prices for the whole of the following day – since 1 October 2025 in quarter hours on EPEX Spot, i.e. hourly or quarter-hourly (96 values a day). From that moment they are fixed." },
        { title: "Conversion to ct/kWh", text: "Exchange prices are quoted in €/MWh. 95 €/MWh is 9.5 ct/kWh – see [[energie-einheiten|units]]." },
        { title: "The adder", text: "Grid fee, [[kwk-umlage|levies]], [[stromsteuer|electricity tax]], [[konzessionsabgabe|concession fee]], margin and VAT are added – roughly 18 to 22 ct/kWh in total." },
        { title: "Billing", text: "The [[intelligentes-messsystem|iMSys]] load curve is valued quarter hour by quarter hour at the respective price and summed." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "**§ 41a EnWG**: since 1 January 2025 every supplier serving final consumers must offer a dynamic electricity contract, provided the customer has an intelligent metering system as defined in the [[msbg|MsbG]]. The earlier threshold of 200,000 final consumers (§ 41a (2) EnWG, old version) was removed by the GNDEW.",
    },
    { t: "h", level: 2, text: "Who it pays off for" },
    {
      t: "cards",
      items: [
        { title: "Worth it", text: "Heat pump, wallbox, home battery, home office with controllable appliances – anything that can move consumption in time." },
        { title: "Barely worth it", text: "A small flat with a fixed daily routine. Cooking at six in the evening hits exactly the most expensive hours." },
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
        ["Dynamic tariff", "hourly or quarter-hourly (96 values a day), following the exchange", "[[intelligentes-messsystem|iMSys]] mandatory"],
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
        ["Price", "the basic supplier's general prices", "separate Ersatzversorgung prices – allowed to differ since 2022"],
        ["Afterwards", "—", "ends after three months; anyone who keeps drawing energy lands in basic supply through implied conduct"],
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "Substitute supply **ends after three months** (§ 38 (2) EnWG) – it does not roll over “automatically” into basic supply. If the customer keeps drawing energy after that, the Grundversorgung contract comes about under § 2 (2) StromGVV through implied conduct, i.e. through the act of drawing energy itself. Since 2022 the basic supplier may also set **separate prices** for substitute supply that differ from the general prices of basic supply (§ 38 (1) sentence 2 EnWG) – during the procurement crisis they were at times well above them.",
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
        { title: "Announcement", text: "In [[grundversorgung|Grundversorgung]] at least **six weeks** before it takes effect (§ 5 (2) StromGVV), in special contracts at least **one month** (§ 41 (5) EnWG) – in each case in clear and comprehensible language, sent directly to the customer." },
        { title: "Justification", text: "The occasion, the conditions and the extent must be recognisable – which components are rising and which are falling." },
        { title: "Special right of termination", text: "The customer may terminate as of the date the change takes effect, regardless of the agreed contract term – in basic supply and special contracts alike." },
        { title: "Implementation", text: "From the effective date the new price applies. The billing period splits into sub-periods, each with its own [[arbeitspreis|unit rate]]." },
      ],
    },
    {
      t: "table",
      head: ["", "Grundversorgung", "Special contract"],
      rows: [
        ["Legal basis", "§ 5 (2) StromGVV / GasGVV", "§ 41 (5) EnWG"],
        ["Notice period", "at least six weeks", "at least one month"],
        ["Form", "public announcement plus a letter to the customer, published online", "notice sent directly to the customer, in a simple and comprehensible way"],
        ["Special right of termination", "yes, as of the effective date", "yes, as of the effective date"],
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

  "bonus-preisgarantie": [
    {
      t: "lead",
      text: "Bonuses and price guarantees are the sales tools of the comparison-portal era: one makes the first year's price attractive, the other promises peace from the next price letter. Both are arithmetically harmless and operationally treacherous – because they are tied to conditions and periods the billing system has to know exactly.",
    },
    { t: "h", level: 2, text: "The bonus types" },
    {
      t: "dl",
      items: [
        { term: "Neukundenbonus (new-customer or switching bonus)", def: "A fixed amount or a percentage of annual costs credited **with the first annual statement**. The condition is almost always **twelve months of uninterrupted supply** – terminate or switch earlier and it is forfeited. It is granted once only, and only if the customer was not already with the same supplier in the preceding months." },
        { term: "Sofortbonus (instant bonus)", def: "A fixed amount paid out or posted as credit to the contract account **a few weeks after the start of supply** – not only with the statement. It is smaller than the new-customer bonus but immediately visible. Some suppliers reserve the right to reclaim it on early termination." },
        { term: "Treuebonus (loyalty bonus)", def: "A credit **for staying** beyond the initial term – after the second year of supply, say. It is meant to make termination after the first year unattractive, once the new-customer bonus is used up and the tariff suddenly looks more expensive without it." },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Comparison portals fold bonuses into the displayed **total price for the first year** – which is why tariffs with a large new-customer bonus land at the top although their running [[arbeitspreis|Arbeitspreis]] (unit rate) is higher than the competition's. That is the mechanism behind the “second year” shock: without the bonus, annual costs come out higher by the bonus amount, often coinciding with a [[preisanpassung|price change]].",
    },
    {
      t: "example",
      title: "First-year statement with a new-customer bonus",
      lines: [
        { label: "Consumption", value: "3,200 kWh" },
        { label: "Arbeitspreis 38.90 ct/kWh", value: "€1,244.80" },
        { label: "Grundpreis €14.50/month", value: "€174.00" },
        { label: "New-customer bonus (condition: 12 months of supply met)", value: "− €150.00" },
        { label: "Invoice total", value: "€1,268.80" },
        { label: "11 instalments of €118.00", value: "− €1,298.00" },
      ],
      result: { label: "Credit", value: "€29.20" },
    },
    { t: "h", level: 2, text: "Typical clauses" },
    {
      t: "ul",
      items: [
        "**Duration of supply**: bonus only after at least twelve months of uninterrupted supply – a [[umzug|move]] taking the contract along still counts, a termination because of a price change usually does not.",
        "**Set-off rather than payout**: the bonus is set off in the annual statement; a resulting credit is paid out, whereas an instant bonus is actively transferred.",
        "**Once only**: only for new customers who were not supplied by this supplier at the same [[marktlokation|Marktlokation]] in the last six or twelve months.",
        "**No bonus in basic supply**: [[grundversorgung|Grundversorgung]] knows no bonuses – the general prices apply equally to everyone.",
        "**Clawback**: on payment default or termination before the end of the term, an instant bonus already paid may be reclaimed.",
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "Bonus conditions are standard terms and subject to review under §§ 305 ff. BGB. Clauses that forfeit the bonus when the supplier itself triggers a price increase and the customer then exercises their special termination right have repeatedly been challenged by the courts. The safer route is to grant the bonus pro rata or in full when the customer terminates because of a price change.",
    },
    { t: "h", level: 2, text: "Price guarantee" },
    {
      t: "p",
      text: "A price guarantee promises that the price will not rise for a defined period – usually twelve or 24 months from the start of supply. What matters is **which** price is meant:",
    },
    {
      t: "table",
      head: ["Component", "Limited price guarantee", "Full price guarantee"],
      rows: [
        ["Energy price (procurement, sales, margin)", "guaranteed", "guaranteed"],
        ["[[netzentgelte|Grid fees]]", "passed through", "guaranteed"],
        ["Levies ([[kwk-umlage|KWK]], [[offshore-netzumlage|offshore]], § 19 StromNEV, interruptible loads)", "passed through", "guaranteed"],
        ["[[konzessionsabgabe|Konzessionsabgabe]]", "passed through", "guaranteed"],
        ["[[stromsteuer|Electricity tax]] / [[energiesteuer|energy tax]], [[co2-preis|CO₂ price]]", "passed through", "mostly excluded"],
        ["[[umsatzsteuer-energie|VAT]]", "always excluded", "always excluded"],
      ],
      caption: "VAT is never part of a price guarantee – it is levied on the net price and follows the law.",
    },
    {
      t: "dl",
      items: [
        { term: "Limited price guarantee (eingeschränkte Preisgarantie)", def: "The normal case. Only the share the supplier controls is guaranteed – for electricity about half the end price. If grid fees or levies change at the turn of the year, the total price may rise without the guarantee being breached. The customer still has their special termination right under § 41 (5) EnWG, because the price changes." },
        { term: "Full price guarantee (Vollpreisgarantie)", def: "Rare, expensive and with a clear limit: taxes and new statutory charges are practically always excluded – nobody guarantees a figure the legislator can change tomorrow. The supplier bears the risk of rising grid fees and levies itself and prices it in." },
        { term: "Umlagenklausel (pass-through clause)", def: "The passage in the contract describing how changes to the passed-through components are handed on: one to one, at the time they take effect, in both directions. A sound clause also lowers the price when a levy falls – otherwise it is open to challenge." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "Even a price change affecting only passed-through components is a price change within the meaning of § 41 (5) [[enwg|EnWG]]: it must be announced at least one month in advance, stating reason, conditions and scope, and the customer may terminate as of the date it takes effect. The price guarantee limits only **what** may change – not **how** it must be communicated.",
    },
    { t: "h", level: 2, text: "Modelling in the tariff engine" },
    {
      t: "p",
      text: "Both – bonuses and guarantees – can only be represented cleanly if a tariff is modelled not as “one price” but as a set of **price components, each with its own validity period**:",
    },
    {
      t: "steps",
      items: [
        { title: "Separate the price components", text: "Energy price, grid fee unit rate, grid fee standing charge, each levy, Konzessionsabgabe and electricity tax as their own line with `gueltig_von` / `gueltig_bis`. The unit rate on the invoice is the sum of the components valid on the date in question." },
        { title: "Guarantee as an attribute, not a price", text: "The price guarantee is a flag per component (“guaranteed until 31 March”) plus a contract date. When a change comes in, the engine checks per component whether it is frozen within the guarantee period – only then does the new value take effect after the guarantee ends." },
        { title: "Load regulated changes centrally", text: "Grid fees arrive per grid area at the turn of the year, levies nationwide; they are created once as a new validity period and apply to every affected contract without touching a tariff." },
        { title: "Bonus as a conditional line item", text: "The bonus is an invoice line with a **condition** (supply duration ≥ 12 months, no previous contract, no payment default) and a **trigger** (first periodic bill, or day X after the start of supply). Billing evaluates the condition on the cut-off date – sales only maintains the amount." },
        { title: "Mind the instalment", text: "A new-customer bonus lowers the first year's annual costs but does **not** belong in the running [[abschlagszahlung|Abschlag]] – otherwise the back-payment follows in year two. It is sensible to make the bonus visible only with the statement." },
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "Splitting by price component pays off in both directions: it is what makes the limited price guarantee computable in the first place – and it delivers the breakdown that § 40 (2) EnWG demands on the invoice. A system that stores only a gross unit rate has to reverse-engineer the components for invoicing anyway.",
    },
  ],

  "zeitvariable-netzentgelte": [
    {
      t: "lead",
      text: "Electricity is cheaper at night – that sentence is as old as the night storage heater. What has changed is the mechanics behind it: a ripple-control receiver used to switch on the second register at 10 pm; today the distribution grid operator defines time windows, distributes them via market communication and the [[intelligentes-messsystem|intelligent metering system]] assigns every quarter-hour. The principle is unchanged, the demands on billing are not.",
    },
    { t: "h", level: 2, text: "Three generations of time-dependent prices" },
    {
      t: "table",
      head: ["", "HT/NT (two-rate tariff)", "Heating power / heat pump tariff", "§ 14a Module 3"],
      rows: [
        ["What varies", "the supplier's unit rate, often the grid fee too", "the supplier's unit rate for a separately metered installation", "**only** the distribution grid operator's grid fee"],
        ["Time windows", "two: Hochtarif (HT, high rate) by day, Niedertarif (NT, low rate) at night (and often at weekends)", "release periods and **Sperrzeiten** (blocking periods), usually several blocks a day", "at least three: high load, standard, low load – set per grid area"],
        ["Metering", "[[zaehlertypen|two-rate meter]] with two [[zaehlwerk|registers]] (1.8.1 / 1.8.2)", "own meter for the installation, switched by ripple-control receiver or control box", "intelligent metering system with quarter-hour values"],
        ["Who switches", "grid operator (ripple-control signal) or a timer in the meter", "grid operator", "nobody – assignment is arithmetic, per quarter-hour"],
        ["Since", "decades", "decades, re-regulated by § 14a EnWG", "1 April 2025"],
      ],
    },
    { t: "h", level: 2, text: "HT/NT: high and low rate" },
    {
      t: "p",
      text: "The two-rate tariff divides the day into two **Zählzeiten** (tariff periods). During the high-rate period (HT) the first register counts, during the low-rate period (NT) the second; each gets its own [[arbeitspreis|Arbeitspreis]]. The boundaries are set by the [[netzbetreiber|grid operator]] – classically NT runs from 10 pm to 6 am, and many grid areas count the weekend wholly or partly as NT time. The supplier adopts the grid operator's tariff periods because it does not control the meter's switching itself.",
    },
    {
      t: "note",
      kind: "info",
      text: "On the meter the registers appear under the [[obis-kennzahlen|OBIS codes]] **1.8.1** (HT) and **1.8.2** (NT); their sum is **1.8.0**. Reporting all three values at a reading does not double the consumption – a frequent mistake in portals that offer a mandatory field for every register. With a two-rate meter the invoice too must show two consumption lines with two prices.",
    },
    {
      t: "example",
      title: "Two-rate billing",
      lines: [
        { label: "Consumption HT (1.8.1)", value: "2,400 kWh × 36.50 ct/kWh = €876.00" },
        { label: "Consumption NT (1.8.2)", value: "3,600 kWh × 28.90 ct/kWh = €1,040.40" },
        { label: "Grundpreis €16.90/month", value: "€202.80" },
      ],
      result: { label: "Invoice total", value: "€2,119.20" },
    },
    { t: "h", level: 2, text: "Heating power and heat pump tariffs" },
    {
      t: "p",
      text: "Night storage heaters and [[waermepumpe|heat pumps]] have long had tariffs of their own, because their consumption is large, predictable and interruptible. The price advantage comes above all from the **reduced grid fee** the grid operator grants in return for controllability. That comes with conditions:",
    },
    {
      t: "ul",
      items: [
        "**Separate metering**: the installation hangs on its own meter or its own [[marktlokation|Marktlokation]] – household electricity continues through the standard meter on the standard tariff. For heat pumps a **cascade metering** setup is also common: the heat pump meter sits behind the main meter and its consumption is deducted.",
        "**Sperrzeiten (blocking periods)**: the grid operator may interrupt the installation at peak times – classically up to three times two hours a day, laid down in the technical connection conditions. The installation's storage (water, screed, storage bricks) bridges the pause.",
        "**Release periods**: night storage heaters typically charge in a night window of about eight hours, often with a shorter top-up at midday. During release periods the meter counts to the NT register.",
        "**No mixed consumption**: connect a household appliance to the heat pump meter and the tariff is lost – meter control lies with the metering point operator.",
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "For installations newly registered since 1 January 2024, [[paragraf-14a-enwg|§ 14a EnWG]] replaces the old blocking-period agreements: instead of fixed interruption windows there is grid-oriented **dimming** to at least 4.2 kW, and the reduced grid fee comes from **Module 1** (flat reduction) or **Module 2** (reduced unit rate, separate metering). Legacy installations with existing blocking-period contracts continue under transitional rules – with deadlines that differ by grid operator.",
    },
    { t: "h", level: 2, text: "§ 14a Module 3: the time-variable grid fee" },
    {
      t: "p",
      text: "Module 3 is the newest stage: since **1 April 2025** distribution grid operators must offer a **time-variable grid fee** for controllable consumption devices. It is not a stand-alone module but an add-on to Module 1 – the flat reduction stays, and on top the grid fee's unit rate varies by time of day. It cannot be combined with Module 2, because there the unit rate is already reduced.",
    },
    {
      t: "dl",
      items: [
        { term: "Three time windows", def: "The distribution grid operator sets at least three time windows with different unit rates for its grid area: **high load** (HT, markedly dearer than the standard price), **standard** (ST) and **low load** (NT, markedly cheaper). The windows may differ by weekday and season and are published by the grid operator." },
        { term: "Only for the controllable device", def: "The time-variable grid fee applies to the [[marktlokation|Marktlokation]] the controllable device hangs on – with shared metering alongside the household, therefore, to that Marktlokation's entire consumption; with separate metering only to the device's consumption." },
        { term: "Prerequisite", def: "An [[intelligentes-messsystem|intelligent metering system]] delivering quarter-hour values. Without an iMSys nobody can establish in which window the consumption occurred." },
        { term: "Effect", def: "The grid-fee share of the unit rate shifts: whoever runs heat pump or wallbox in the low-load windows pays less grid fee than under Module 1 alone; whoever charges in the evening of all times pays more. The supplier has to reflect this in its tariff – as a time-variable tariff of its own or by passing the grid fee through." },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Module 3 varies **only** the grid fee. The supplier's energy price can stay fixed – or vary in turn, producing a [[dynamischer-tarif|dynamic tariff]] with a time-variable grid fee: two independent time axes added up per quarter-hour. For the customer that is one price; for billing it is two price components with separate calendars.",
    },
    { t: "h", level: 2, text: "Zählzeitdefinitionen in market communication" },
    {
      t: "p",
      text: "So that supplier and metering point operator use the same time windows as the grid operator, **[[zaehlzeitdefinitionen|Zählzeitdefinitionen]]** (tariff period definitions) are exchanged via [[marktkommunikation|market communication]]. The grid operator publishes, per grid area, which registers count at which times on which days; the metering point operator configures the metering system accordingly, the supplier adopts the windows into its tariff logic. The message format `UTILTS` exists for this, carrying tariff period definitions and calculation formulas; the assignment of a Marktlokation to a tariff period definition runs through the master data in `UTILMD`.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "Zählzeitdefinitionen differ **per grid area** and change – when a grid operator recuts its Module 3 windows at the turn of the year, for instance. Hard-code them into the tariff and every change becomes a migration. It is sensible to keep them as master data of their own with a validity period, and to let the tariff refer only to the **registers** (HT, NT, ST), not to clock times.",
    },
    { t: "h", level: 2, text: "What the billing system needs" },
    {
      t: "steps",
      items: [
        { title: "A register per time zone", text: "Consumption is not kept as one number but per tariff period – with HT/NT two [[zaehlwerk|registers]] on the meter, with Module 3 three registers formed arithmetically from quarter-hour values. Each register has its own [[obis-kennzahlen|OBIS code]], its own reading and its own price." },
        { title: "A calendar with validity", text: "Which quarter-hour falls into which window is decided by a calendar per grid area and tariff period definition: weekdays, clock times, season. The calendar has a validity period and is versioned – billing a period uses the version valid at the time." },
        { title: "Public holidays", text: "Many tariff period definitions treat national and **state-specific** public holidays like a Sunday. The grid area determines the federal state – a grid operator with networks in two states can have two holiday calendars. Corpus Christi is a holiday in Bavaria, not in Hamburg." },
        { title: "Assigning the metered values", text: "For iMSys customers the metering point operator delivers via `MSCONS` either the quarter-hour values or values already aggregated per register. In the second case the assignment used by MSB and supplier must be identical – otherwise the grid invoice will not match the customer invoice." },
        { title: "Daylight saving", text: "The day with 23 hours and the day with 25 are the most reliable sources of error: quarter-hour series run in UTC, tariff windows in local time. The mapping must be tested on both changeover days." },
        { title: "Two calendars when combined", text: "With a dynamic tariff plus Module 3, the exchange price (hourly or quarter-hourly, nationwide) and the grid fee (three windows, per grid area) run on separate time axes. The price per quarter-hour is the sum of the components valid at that moment." },
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "Under Module 3 the grid operator's grid usage bill also arrives broken down by time window. If the supplier's registers do not match the grid operator's to the quarter-hour, the [[netznutzungsabrechnung|grid invoice]] deviates from the supplier's own billing – and every deviation ends up in manual clarification.",
    },
  ],
};
