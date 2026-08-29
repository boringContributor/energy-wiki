import type { Block } from "../types";

export const grundlagenEn: Record<string, Block[]> = {
  "energiemarkt-ueberblick": [
    {
      t: "lead",
      text: "Until 1998 it was simple: the local Stadtwerk generated the electricity, ran the grid, read the meter and sent the bill. Today those are four separate roles – often in four separate companies, but sometimes in four departments of the same Stadtwerk that are legally required to treat each other as strangers.",
    },
    {
      t: "p",
      text: "That separation is why energy processes need so much data exchange. A supplier who wants to serve a customer owns neither the cable nor the meter. It has to register with the grid operator, obtain readings from the metering point operator, and carry its energy volume in a balancing group. Every one of those steps is a standardised message exchange.",
    },
    { t: "h", level: 2, text: "The physical path of the energy" },
    { t: "figure", id: "wertschoepfungskette" },
    {
      t: "p",
      text: "Physically the path is simple: generation, transport across the transmission grid, fine distribution in the distribution grid, metering at the handover point, consumption. A particular supplier's energy cannot be traced through it – electricity is a common pool in the grid. Who delivered how much is a purely arithmetic question.",
    },
    {
      t: "note",
      kind: "tip",
      text: "Rule of thumb: **the physics and the commercials are decoupled.** Switching supplier does not change the path of a single electron – it only changes which [[bilanzkreis|balancing group]] the withdrawal point is assigned to.",
    },
    { t: "h", level: 2, text: "The market roles" },
    { t: "figure", id: "marktrollen" },
    {
      t: "p",
      text: "In depth: [[marktrollen|market roles and their code numbers]]. What matters most is the relationship between supplier, [[netzbetreiber|grid operator]] and [[messstellenbetrieb|metering point operator]]. The customer normally has a contract only with the supplier – the other two are billed through the supplier as well (the “all-inclusive model”).",
    },
    { t: "h", level: 2, text: "Three contracts, one invoice" },
    {
      t: "dl",
      items: [
        {
          term: "Energy supply contract",
          def: "Between customer and supplier. Governs price, term, notice period and [[abschlagszahlung|Abschlag instalments]].",
        },
        {
          term: "Lieferantenrahmenvertrag (supplier framework contract)",
          def: "Between supplier and grid operator (§ 20 Abs. 1a EnWG) – governs grid usage collectively for all of the supplier's customers in that grid area. The customer pays the [[netzentgelte|grid fees]] but never sees the contract.",
        },
        {
          term: "Metering point contract",
          def: "Between the connection user and the [[messstellenbetrieb|metering point operator]] – by default the incumbent operator (grundzuständiger MSB), though the customer may switch.",
        },
      ],
    },
    { t: "h", level: 2, text: "Four commodities, four quirks" },
    {
      t: "table",
      head: ["Commodity", "Unit at the meter", "Unit on the bill", "Market"],
      align: ["l", "l", "l", "l"],
      rows: [
        ["[[strom|Electricity]]", "kWh", "kWh", "liberalised nationwide"],
        ["[[erdgas|Natural gas]]", "m³", "kWh", "liberalised nationwide"],
        ["[[wasser|Water]]", "m³", "m³", "local monopoly"],
        ["[[fernwaerme|District heating]]", "MWh or GJ", "kWh", "network-bound monopoly"],
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "The most common mistake in utility software: assuming every commodity behaves like electricity. Gas converts via [[brennwert|calorific value]] and [[zustandszahl|Zustandszahl]], water has no supplier switching at all, and district heating has no nationwide market.",
    },
    { t: "h", level: 2, text: "Where software sits in this picture" },
    {
      t: "note",
      kind: "praxis",
      text: "Most systems in energy sales serve the **customer-facing** side: quoting, contract conclusion, onboarding, and the processes around the [[endkundenportal|portal]], [[umzug|moving home]] and customer requests. Billing itself almost always lives in the utility's ERP or billing system – and the interface to it is exactly where the terms described here become concrete.",
    },
  ],

  marktrollen: [
    {
      t: "lead",
      text: "In the data exchange between market partners, nobody uses company names. What counts is the role and the code number – one company can hold several roles at once and then appears under several numbers.",
    },
    { t: "figure", id: "marktrollen" },
    { t: "h", level: 2, text: "Code numbers" },
    {
      t: "p",
      text: "Every market partner needs a unique **market partner ID (MP-ID)**. In the electricity market the BDEW issues the **BDEW-Codenummer** (13 digits, starting with 98 or 99); in the gas market the DVGW issues the likewise 13-digit **DVGW-Codenummer**. A **GS1 GLN** (Global Location Number) is accepted as an MP-ID as well. Across Europe the **EIC** (Energy Identification Code) is gaining ground too, above all for balancing groups and grid operators. Of these, usually only the [[netzbetreiber|grid operator number]] appears on the invoice.",
    },
    {
      t: "table",
      head: ["Role", "Abbr.", "Main job", "Can the customer switch it?"],
      rows: [
        ["Supplier", "LF", "Sell and bill energy", "yes, at any time"],
        ["Distribution grid operator", "VNB / NB", "Run the grid, levy grid fees", "no – local monopoly"],
        ["Transmission grid operator", "ÜNB", "Extra-high voltage, system stability", "no"],
        ["Incumbent metering point operator", "gMSB", "Operate and read the meter where nobody else has been appointed – usually the grid operator", "yes – by switching to a wMSB"],
        ["Competitive metering point operator", "wMSB", "Metering point operation ordered by the connection user or the supplier", "yes, open competition"],
        ["Balancing group manager", "BKV", "Run the [[bilanzkreis|balancing group]], submit schedules", "indirectly, via the supplier"],
        ["Balancing coordinator", "BIKO", "Balancing group settlement for electricity under MaBiS – a role of the ÜNB", "no"],
        ["Market area manager", "MGV", "Gas balancing in the market area – Trading Hub Europe (THE)", "no"],
        ["Transport customer (gas)", "TK", "Book capacity and run the balancing group in the gas network – usually the supplier or its trader", "indirectly, via the supplier"],
        ["Basic supplier", "GV", "Guarantee supply without a contract", "no – set by law"],
        ["Anschlussnehmer / Anschlussnutzer", "AN / ANU", "Owner of the grid connection (AN) and actual user of the energy, e.g. the tenant (ANU) – contract partners of grid operator and MSB", "– (customer side, no code number)"],
      ],
      caption:
        "One company can hold several roles: a Stadtwerk is often VNB, gMSB, Grundversorger and supplier at once – with separate code numbers in the data exchange.",
    },
    { t: "h", level: 2, text: "Incumbent or competitive" },
    {
      t: "p",
      text: "For metering point operation the [[msbg|MsbG]] distinguishes between the **incumbent** operator (grundzuständig) – usually the grid operator – and **competitive** operators. Do nothing and you get the incumbent automatically. Switch, and it must be reported to the grid operator so the readings keep reaching the right recipient.",
    },
    {
      t: "note",
      kind: "info",
      text: "Being the Grundversorger is not a type of company but a status: whoever supplies the most household customers in a grid area holds it. It is redetermined every three years.",
    },
  ],

  netzbetreiber: [
    {
      t: "lead",
      text: "The grid is a natural monopoly: nobody lays a second cable down the same street. So the grid operator cannot be switched – but it is tightly regulated instead. The Bundesnetzagentur, the federal regulator, approves its revenues and therefore its [[netzentgelte|grid fees]].",
    },
    { t: "h", level: 2, text: "The grid levels" },
    { t: "figure", id: "netzebenen" },
    { t: "h", level: 2, text: "The grid operator number" },
    {
      t: "p",
      text: "Every energy bill carries the **identification number of the grid operator**. It identifies the local distribution grid operator whose network the consumption point is connected to – and it matters more in the process than it looks: without it, a new supplier cannot send the registration to the right place.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "In onboarding flows it pays to derive the grid operator automatically from postcode and address rather than asking the customer. Customers practically never know their grid operator – but they can find their [[marktlokation|MaLo ID]] or meter number on their last invoice.",
    },
    { t: "h", level: 2, text: "What the grid operator does" },
    {
      t: "ul",
      items: [
        "Build, operate and, where necessary, disconnect the grid connection",
        "Calculate grid fees and bill them to suppliers",
        "Process supplier registrations and deregistrations",
        "Usually act as the incumbent [[messstellenbetrieb|metering point operator]]",
        "Connect generators and record feed-in volumes",
        "Integrate controllable devices under [[paragraf-14a-enwg|§ 14a EnWG]]",
      ],
    },
  ],

  netzentgelte: [
    {
      t: "lead",
      text: "The grid fee pays for building, running and maintaining the lines – and increasingly for the grid expansion the energy transition requires. It goes to the [[netzbetreiber|grid operator]], but it is collected by the supplier and sits invisibly inside the end price.",
    },
    { t: "h", level: 2, text: "What it is made of" },
    {
      t: "ul",
      items: [
        "**Unit rate** in ct/kWh – the largest share for households",
        "**Standing charge** in €/year – covers connection-related fixed costs",
        "**Capacity charge** in €/kW – only for customers with load metering, see [[leistungspreis|Leistungspreis]]",
        "A charge for **metering point operation** and **billing**, where not shown separately",
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Grid fees vary a great deal by region. Grid areas with lots of wind power and little consumption long spread high expansion costs over few kilowatt-hours – electricity was noticeably more expensive there than in densely populated regions. Since 2025 part of these renewables-driven extra grid costs has been socialised nationwide (see below), which softens the gap without removing it.",
    },
    {
      t: "p",
      text: "Order of magnitude for a household: in 2026 the grid fee including metering point operation averages around 11–12 ct/kWh net nationally – with a wide regional spread from under 8 to over 15 ct/kWh depending on the grid area.",
    },
    { t: "h", level: 2, text: "Levies collected with the grid fee" },
    {
      t: "p",
      text: "Several statutory levies are collected together with the grid fees. In 2026 those are the [[kwk-umlage|KWKG levy]], the [[offshore-netzumlage|offshore grid levy]] and the [[besondere-netznutzung|surcharge for special grid use]] – 2.946 ct/kWh net in total. Since 2025 the surcharge for special grid use carries not only the § 19 StromNEV discounts but also the nationwide **socialisation of renewables-driven extra grid costs** under a Bundesnetzagentur ruling – hence the jump from 0.643 ct/kWh (2024) to over 1.5 ct/kWh.",
    },
    {
      t: "table",
      head: ["Levy, 2026", "ct/kWh net"],
      align: ["l", "r"],
      rows: [
        ["[[kwk-umlage|KWKG levy]]", "0.446"],
        ["[[offshore-netzumlage|Offshore grid levy]]", "0.941"],
        ["[[besondere-netznutzung|Surcharge for special grid use]]", "1.559"],
        ["**Total**", "**2.946**"],
      ],
      caption:
        "Published by the four transmission grid operators in October 2025 for the 2026 calendar year.",
    },
    {
      t: "p",
      text: "In 2026 the federal government additionally covers part of the transmission grid fees – a subsidy worth around €6.5 billion a year, which lowers grid fees against their unsubsidised level.",
    },
    { t: "h", level: 2, text: "Who pays less" },
    {
      t: "ul",
      items: [
        "Customers on higher [[netzbetreiber|grid levels]] – they use less of the network",
        "Businesses with atypical or energy-intensive grid use under § 19 StromNEV – their discount is financed by the [[besondere-netznutzung|surcharge for special grid use]]",
        "Controllable devices under [[paragraf-14a-enwg|§ 14a EnWG]] – a heat pump, wallbox or battery gets, at the customer's choice, a flat grid-fee reduction (Modul 1), a unit rate reduced by 60 % via a separate meter (Modul 2) or a time-variable grid fee (Modul 3, combined with Modul 1 since April 2025)",
      ],
    },
  ],

  bilanzkreis: [
    {
      t: "lead",
      text: "Because individual kilowatt-hours cannot be traced through the grid, the market works with accounts instead. Every supplier runs at least one balancing group – itself or through a service provider. Everything its customers withdraw is booked there as a debit, everything it procures as a credit.",
    },
    {
      t: "note",
      kind: "info",
      text: "This article describes balancing in the **electricity market** (MaBiS). Gas balances under its own rules – see below.",
    },
    { t: "h", level: 2, text: "The quarter hour sets the beat" },
    {
      t: "p",
      text: "Balancing happens per quarter hour. For each of those 96 periods a day the balancing group must add up. If it does not, the transmission grid operator supplies **balancing energy** – at a price deliberately made unattractive, so that forecasting well pays off. It is settled by the ÜNB in its role as **Bilanzkoordinator (BIKO)**, the balancing coordinator with whom every balancing group manager holds a balancing group contract.",
    },
    { t: "h", level: 2, text: "Where the volumes come from" },
    {
      t: "p",
      text: "For customers with registering load metering, the metered load curve supplies the real values. For everyone else – which is practically every household – the market works with a [[lastprofil|standard load profile]]. The difference between profile and reality is settled by the grid operator through **Differenzbilanzierung**, residual balancing.",
    },
    { t: "figure", id: "lastprofil" },
    {
      t: "note",
      kind: "tip",
      text: "Why this matters for product decisions: a [[dynamischer-tarif|dynamic tariff]] requires the actual quarter-hourly consumption to be known. Without an [[intelligentes-messsystem|intelligent metering system]] there is no load curve – and therefore no sound basis for quarter-hourly prices. Since 1 October 2025 the EPEX day-ahead market has also been trading in 15-minute intervals, so balancing and exchange price now run on the same beat.",
    },
    { t: "h", level: 2, text: "The MaBiS timeline" },
    {
      t: "p",
      text: "Balancing group settlement is not a real-time process. The **Marktregeln für die Bilanzkreisabrechnung Strom (MaBiS)**, the market rules for electricity balancing group settlement, define when which data flows:",
    },
    {
      t: "steps",
      items: [
        { title: "Delivery month", text: "The grid operators aggregate the volumes per balancing group – load curves from metering, standard load profiles from the forecast – and report them to the BIKO." },
        { title: "Bilanzkreisabrechnung", text: "Around two months after the delivery month the BIKO settles the balancing energy per balancing group. The basis is the time series reported and reconciled between the parties by then." },
        { title: "Korrekturbilanzkreisabrechnung", text: "Around eight months after the delivery month a correction settlement follows, using the metered values delivered late or corrected in the meantime. Only then is the month finally closed for the balancing group." },
      ],
    },
    {
      t: "p",
      text: "In parallel, the grid operator settles the **Mehr-/Mindermengen** (surplus and shortfall quantities) with the supplier: the difference between the profile volumes that were balanced and the consumption actually metered for its customers.",
    },
    { t: "h", level: 2, text: "Gas balances differently" },
    {
      t: "p",
      text: "In the [[erdgas|gas market]] the balancing period is not the quarter hour but the **Gastag**, the gas day from 06:00 to 06:00 the next morning (**daily balancing**). The network itself buffers within the day. The responsible party is not a transmission operator but the **Marktgebietsverantwortlicher (MGV)**, the market area manager – since 2021 Trading Hub Europe (THE) for all of Germany. The rules are called **GaBi Gas** rather than MaBiS, the balancing group manager acts towards the grid operators as a Transportkunde (transport customer), and households are balanced via standard load profiles that depend mainly on the daily temperature.",
    },
  ],

  marktkommunikation: [
    {
      t: "lead",
      text: "Because no single market participant holds all the data, everyone exchanges messages constantly. Format, content and deadlines are specified down to the detail by the Bundesnetzagentur in rulings such as **GPKE** (supplier switching, electricity), **MaBiS** (balancing group settlement), **WiM** (metering), **MPES** (generation plants) and **GeLi Gas** (gas). These rulings are revised twice a year – see [[formatanpassung|Formatanpassung]].",
    },
    { t: "h", level: 2, text: "The main message types" },
    {
      t: "table",
      head: ["Format", "Used for"],
      rows: [
        ["UTILMD", "Master data: registration and deregistration, supplier switching, master data changes"],
        ["MSCONS", "Metered values: meter readings and load curves"],
        ["INVOIC / REMADV", "Invoice and remittance advice between market partners"],
        ["APERAK / CONTRL", "Error and receipt acknowledgement"],
        ["ORDERS / ORDRSP", "Order and response, for example in metering point operation"],
      ],
    },
    {
      t: "p",
      text: "Technically this was EDIFACT over email with signed attachments for decades. That is history: since 1 October 2024 transport over **AS4** has been mandatory in the electricity market, and since 1 October 2025 in the gas market too – email is no longer used in the regulated processes. The messages themselves remain EDIFACT. Alongside them, JSON-based REST interfaces are emerging: the first mandatory one is the BDEW's **MaLo-Ident API**, which a supplier uses to look up a customer's [[marktlokation|MaLo ID]] at the grid operator before registering – required since the 24-hour [[lieferantenwechsel|supplier switch]].",
    },
    {
      t: "p",
      text: "The 24-hour supplier switch (LFW24) is first and foremost a **process ruling** by the Bundesnetzagentur (decision BK6-22-024), implemented through accompanying format releases – not the other way round. The business processes determine the formats, see [[formatanpassung|Formatanpassung]].",
    },
    {
      t: "note",
      kind: "warn",
      text: "Deadlines here are not suggestions. Send a registration late or fail to process a response, and you produce an [[ersatzversorgung|Ersatzversorgung]] or an incorrect bill – with real costs for the customer.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "Sales and portal systems do **not** speak EDIFACT directly. Their handover point is the utility's billing or ERP system, which they feed with clean, validated contract and customer data. That is exactly why validating early pays off: a typo in the [[marktlokation|MaLo ID]] otherwise surfaces two systems later.",
    },
  ],

  formatanpassung: [
    {
      t: "lead",
      text: "The formats used in [[marktkommunikation|market communication]] are not set permanently. The Bundesnetzagentur defines them bindingly and replaces them **twice a year**. At midnight on the deadline the old versions lose their validity – there is no transition period and no leniency.",
    },
    { t: "figure", id: "formatwechsel-zyklus" },
    { t: "h", level: 2, text: "What gets replaced" },
    {
      t: "p",
      text: "The core energy industry processes are affected – not only the message formats themselves, but the decision trees, code lists and deadlines behind them:",
    },
    {
      t: "table",
      head: ["Abbr.", "Process"],
      rows: [
        ["**GPKE**", "Business processes for supplying customers with electricity – [[lieferantenwechsel|supplier switching]] for power"],
        ["**MaBiS**", "Market rules for electricity balancing group settlement – see [[bilanzkreis|balancing groups]]"],
        ["**WiM**", "Switching processes in metering – changing the [[messstellenbetrieb|metering point operator]]"],
        ["**MPES**", "Market processes for generating market locations – feed-in, see [[photovoltaik|PV systems]]"],
      ],
      caption:
        "Gas has the sibling processes GeLi Gas and GaBi Gas, on the same rhythm.",
    },
    { t: "h", level: 2, text: "The cycle" },
    {
      t: "steps",
      items: [
        { title: "Consultation", text: "The EDI@Energy project group submits revised message versions to the Bundesnetzagentur in draft. Around eight months before the deadline, every market participant can comment." },
        { title: "Ruling", text: "About six months before the deadline the Bundesnetzagentur publishes the final versions in a numbered **Mitteilung zu den Datenformaten**." },
        { title: "Implementation", text: "In those six months the software vendor has to develop and ship, and the utility has to implement, test and train. That is the entire window." },
        { title: "Deadline", text: "On 1 April or 1 October the new versions become binding for all market participants. The old ones stop applying at that moment." },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Well over 1,000 market partners – more than 850 electricity grid operators and around 1,400 suppliers alone – go through this cycle twice a year. The current state is always in the latest [Mitteilung from the Bundesnetzagentur](https://www.bundesnetzagentur.de/DE/Beschlusskammern/BK06/BK6_83_Zug_Mess/835_mitteilungen_datenformate/Datenformate-node.html); the documents themselves live on the BDEW MaKo platform.",
    },
    { t: "h", level: 2, text: "Why this is not a software update" },
    {
      t: "p",
      text: "The most common misconception: “the vendor ships a patch for that.” The patch is the easy part. The real work is the **process** changes around it – altered decision trees, new mandatory fields, adjusted clearing cases, changed deadlines – and the testing effort:",
    },
    {
      t: "ul",
      items: [
        "Regression, load and security tests",
        "Cut-over tests and training for the business departments",
        "**Tests with market partners** – market communication is bilateral, so coordination has to cross company boundaries",
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "EDIFACT, AS4 and the newer JSON APIs **coexist**. The APIs do not replace EDIFACT. Affected systems have to support both worlds in parallel and keep them in sync – so one format change often hits several systems at once.",
    },
    { t: "h", level: 2, text: "When the deadline does not hold: LFW24" },
    {
      t: "p",
      text: "The 24-hour [[lieferantenwechsel|supplier switch]] was the largest format change of recent years, and it shows what happens when the six-month window is not enough. The German-speaking SAP user group (DSAG) published survey data on it: the realistic implementation need after the software shipped was around **37 weeks**, while the deadline allowed **26**. In a survey of 160 energy suppliers, **88 %** said they could not complete the work by April 2025.",
    },
    {
      t: "p",
      text: "The Bundesnetzagentur consequently moved the deadline from 4 April to **6 June 2025**. A move to 1 October 2025 had been requested – and was rejected.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "Anyone building software for utilities should know the rhythm: **March/April and September/October** are freeze windows at many utilities. Systems are being migrated, test data loses its validity after the freeze and has to be rebuilt, and the specialists you need for coordination are tied up. Go-lives and test phases can be planned into those weeks – but only as a deliberate decision, not by accident.",
    },
  ],

  unbundling: [
    {
      t: "lead",
      text: "A grid operator knows who consumes how much and when. If its own sales arm were allowed to use that data, it would hold an unbeatable advantage over every competitor. That is why the [[enwg|EnWG]] requires unbundling.",
    },
    {
      t: "dl",
      items: [
        { term: "Legal unbundling (§ 7 EnWG)", def: "Above 100,000 connected customers, grid operation must be a separate legal entity." },
        { term: "Operational unbundling (§ 7a EnWG)", def: "Its own management, its own decision-making, no right of instruction from the sales side. Like legal unbundling it only applies from 100,000 connected customers upwards (de-minimis rule, § 7a Abs. 7 EnWG)." },
        { term: "Brand unbundling (§ 7a Abs. 6 EnWG)", def: "The grid operator's communication and branding must be clearly distinguishable from the sales arm – its own name, its own logo, its own website." },
        { term: "Informational unbundling (§ 6a EnWG)", def: "Grid data must not flow to the company's own sales arm unless it is equally available to competitors. Applies to every grid operator regardless of size." },
        { term: "Accounting unbundling (§ 6b EnWG)", def: "Separate accounts per activity, so that no cross-subsidy arises. Also applies regardless of size." },
      ],
    },
    {
      t: "p",
      text: "For transmission grid operators the EnWG goes further still: they must be **ownership-unbundled** or organised as an **Independent Transmission Operator (ITO)** or Independent System Operator (ISO) (§§ 8–10e EnWG) – grid and generation/sales may not sit in the same hands there.",
    },
    {
      t: "note",
      kind: "warn",
      text: "The practical consequence for systems: a shared CRM for grid and sales is delicate. Access rights have to implement unbundling technically – “but we are the same company” is not an acceptable justification.",
    },
  ],

  "energie-einheiten": [
    {
      t: "lead",
      text: "Almost every misunderstanding in energy products traces back to confusing **power** with **energy**. Power says how fast energy is flowing. Energy says how much has flowed in total.",
    },
    {
      t: "table",
      head: ["Quantity", "Unit", "Car analogy", "Where it shows up"],
      rows: [
        ["Power", "kW", "speed", "connection capacity, [[leistungspreis|capacity charge]], wallbox"],
        ["Energy", "kWh", "distance travelled", "[[verbrauch|consumption]], [[arbeitspreis|unit rate]], meter reading"],
        ["Volume", "m³", "tank contents", "[[erdgas|gas meter]], [[wasser|water meter]]"],
        ["Reactive energy", "kvarh", "idling in the gearbox", "[[blindarbeit|reactive energy]] for commercial customers"],
      ],
    },
    {
      t: "formula",
      expr: "Energy [kWh]  =  Power [kW]  ×  Time [h]",
      where: [
        { sym: "2 kW × 3 h", desc: "6 kWh – a fan heater, running for three hours" },
        { sym: "11 kW × 1 h", desc: "11 kWh – one hour at the wallbox" },
      ],
    },
    { t: "figure", id: "kwh-vergleich" },
    { t: "h", level: 2, text: "Prefixes" },
    {
      t: "ul",
      items: [
        "1 kWh = 1,000 Wh",
        "1 MWh = 1,000 kWh — the wholesale unit; exchange prices are quoted in €/MWh",
        "1 GWh = 1,000 MWh — the scale of a municipal utility",
        "1 TWh = 1,000 GWh — the scale of national statistics",
      ],
    },
    {
      t: "note",
      kind: "tip",
      text: "Conversion you can do in your head: **1 €/MWh = 0.1 ct/kWh.** An exchange price of 95 €/MWh is therefore 9.5 ct/kWh – everything from there to the end price is grid fees, levies, taxes and margin.",
    },
    { t: "h", level: 2, text: "Heat sometimes counts differently" },
    {
      t: "p",
      text: "In [[fernwaerme|district heating]] you still meet the joule: 1 GJ equals 277.78 kWh. Billing today is usually in MWh or kWh regardless.",
    },
  ],

  lokationsmodell: [
    {
      t: "lead",
      text: "To the customer, a house with photovoltaics, a battery and a heat pump is one connection with one bill. To [[marktkommunikation|market communication]] it is half a dozen objects with their own IDs, their own responsible parties and their own life cycles. The location model defines which objects those are – and who is allowed to manage which of them.",
    },
    {
      t: "p",
      text: "The reason for the decomposition is always the same: each question should be answered by exactly one object. “Who supplies here?” is a different question from “Which device measures?”, and both differ from “What may the grid operator curtail here?”. As long as everything hung off a single metering point, a meter exchange could not be separated from a supplier switch, and a PV system behind the house meter could not be balanced cleanly.",
    },
    { t: "h", level: 2, text: "The five objects" },
    {
      t: "table",
      head: ["Object", "Short", "ID", "Answers", "Assigned by"],
      rows: [
        ["[[marktlokation|Marktlokation (market location)]]", "MaLo", "11 digits, numeric with check digit", "Where is energy supplied or generated? Tied to contract, balancing group, billing", "grid operator"],
        ["[[messlokation|Messlokation (metering location)]]", "MeLo", "33 characters, starting with DE", "Where is it measured? Tied to the meter panel, not the device", "grid operator; managed by the metering point operator"],
        ["Netzlokation (grid location)", "NeLo", "11 characters, alphanumeric", "Where is the energy physically handed over to the grid – the point where grid-fee-relevant quantities such as capacity arise", "grid operator"],
        ["Technische Ressource (technical resource)", "TR", "11 characters, alphanumeric", "Which physical device sits behind it – PV system, battery, heat pump, charging point", "grid operator"],
        ["Steuerbare Ressource (controllable resource)", "SR", "11 characters, alphanumeric", "What may the grid operator control under [[paragraf-14a-enwg|§ 14a EnWG]] – and via which channel", "grid operator"],
      ],
      caption:
        "MaLo and MeLo have existed since 2018. Netzlokation, Technische Ressource and Steuerbare Ressource arrived with MaKo 2022 and were phased into the processes with the following format releases.",
    },
    {
      t: "note",
      kind: "info",
      text: "The Netzlokation is the most misunderstood object. It is **not** a second meter but the point in the grid where grid fees are measured. For a simple household, MaLo, MeLo and NeLo practically coincide; they are still kept as separate objects so the model does not have to be rebuilt for complex cases.",
    },
    { t: "h", level: 2, text: "How the objects relate" },
    {
      t: "dl",
      items: [
        { term: "MaLo ↔ MeLo: n:m", def: "One Marktlokation can be measured by several Messlokationen (cascade, summation meter), and one Messlokation can serve several Marktlokationen (bidirectional meter with a consumption MaLo and a feed-in MaLo). The relationship is described by calculation rules: which meters are added, which subtracted." },
        { term: "MaLo ↔ TR: 1:n", def: "A generating Marktlokation can have several Technische Ressourcen attached – say PV modules and a battery that share the same feed-in point." },
        { term: "TR ↔ SR: 1:n", def: "A device may or may not be controllable. If it is, the Steuerbare Ressource describes the how: control channel, control mode, § 14a agreement." },
        { term: "NeLo ↔ MaLo: 1:n", def: "Several Marktlokationen can sit behind one grid connection point – the heat pump with reduced grid fee and the household on the same house connection." },
      ],
    },
    {
      t: "p",
      text: "All objects that belong together at one grid connection form a **Lokationsbündel** (location bundle). The bundle has no ID of its own; it is the grouping the grid operator holds together in the master data – and in which it describes the calculation steps between metering and market locations.",
    },
    { t: "h", level: 2, text: "One house, many objects" },
    {
      t: "example",
      title: "Detached house with PV, battery and heat pump (cascade metering)",
      lines: [
        { label: "Netzlokation", value: "1 NeLo – the house connection" },
        { label: "Marktlokationen", value: "3 MaLo – household consumption, heat pump consumption, PV feed-in" },
        { label: "Messlokationen", value: "2 MeLo – bidirectional meter at the house connection, sub-meter for the heat pump" },
        { label: "Technische Ressourcen", value: "3 TR – PV system, battery storage, heat pump" },
        { label: "Steuerbare Ressourcen", value: "1 SR – the heat pump under § 14a EnWG (the battery, if grid-friendly controlled, would be a second)" },
      ],
      result: { label: "Objects in the Lokationsbündel", value: "10 – for a single customer" },
    },
    {
      t: "p",
      text: "Heat pump consumption is measured as a difference: main meter minus sub-meter gives household consumption, the sub-meter alone gives the heat pump. Exactly this calculation rule is part of the master data – without it no supplier can attribute the bidirectional meter's values to its Marktlokation.",
    },
    { t: "h", level: 2, text: "Why the model exists" },
    {
      t: "ul",
      items: [
        "**Meter exchange without contract change**: a new meter changes the meter number, not the MeLo – and certainly not the MaLo. Contract and balancing group are untouched.",
        "**Cascades and sub-meters**: without separate metering and market locations, a heat pump behind the house meter cannot be billed with its own grid fee.",
        "**Control**: § 14a EnWG requires the grid operator to know *what* it may control without dimming the whole connection – that is what TR and SR provide.",
        "**Feed-in and consumption on one device**: two Marktlokationen on one bidirectional meter can have different suppliers and balancing groups.",
      ],
    },
    { t: "h", level: 2, text: "Where it shows up in MaKo" },
    {
      t: "p",
      text: "The objects are exchanged as master data via UTILMD. The grid operator is responsible for MaLo, NeLo, TR and SR, the [[messstellenbetrieb|metering point operator]] for the data of the Messlokation. In the registration confirmation a supplier sees the Marktlokation with its assigned Messlokationen and calculation rule; meter values arrive via MSCONS per Messlokation and only then become quantities per Marktlokation. Master data changes – new meter, new calculation rule, new Steuerbare Ressource – run as separate UTILMD processes, triggered by whoever is responsible.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For the data model this yields one clear rule: **every object is its own entity with a validity period.** Marktlokation, Messlokation, Netzlokation, resources – and the relationships between them – with from/to dates. Anyone who stores the MeLo as an attribute of the contract cannot represent a meter exchange; anyone who hangs the meter number on the MaLo loses the history when the device is swapped. The contract points to the MaLo, nothing else.",
    },
    {
      t: "note",
      kind: "warn",
      text: "The 11 characters of NeLo, TR and SR IDs look similar to a MaLo ID – but they are alphanumeric and cannot be validated with the MaLo check digit. An input form that accepts everything as a “Marktlokation” produces clarification cases at the grid operator.",
    },
  ],

  "grosshandel-beschaffung": [
    {
      t: "lead",
      text: "A supplier usually owns no power plant. What it sells to its customers it has bought beforehand – months or years ahead on the forward market, the day before on the exchange, or in the last minutes before delivery. How it mixes these instruments is its procurement strategy, and that strategy determines price, risk and product range.",
    },
    { t: "h", level: 2, text: "The marketplaces" },
    {
      t: "dl",
      items: [
        { term: "EPEX Spot – Day-Ahead", def: "The daily auction for the following day. Bids until **12:00 noon**, after which a price is fixed for every delivery period. Since 1 October 2025 trading is in **15-minute products** – **96 prices per day** instead of 24. This price is the reference for [[dynamischer-tarif|dynamic tariffs]] and for most indexed contracts." },
        { term: "EPEX Spot – Intraday", def: "Continuous trading after the day-ahead auction, in Germany until **5 minutes before delivery starts**. This is where traders correct their forecast errors – the last step before [[bilanzkreis|imbalance energy]]." },
        { term: "EEX – forward market", def: "Futures on electricity and gas for future delivery periods: **Cal** (calendar year), **Quarter**, **Month**, plus Week and Weekend. For electricity split into **Base** (all hours) and **Peak** (weekdays 8 am – 8 pm). Financially settled – delivery happens via the spot market, the future only locks in the price." },
        { term: "OTC / bilateral", def: "Direct contracts between traders, generators and suppliers, often via brokers and based on the EFET master agreement. More flexible than the exchange, but with counterparty risk." },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "**Negative prices** have become normal on the spot market: on sunny, windy days with low load, supply exceeds demand and generators pay to be allowed to feed in. For suppliers with dynamic tariffs that means customer communication (“why is the price negative and my bill still positive?” – because of grid fees, levies and taxes); for feed-in customers it has meant, since the Solarspitzengesetz, no remuneration in those quarter hours.",
    },
    {
      t: "p",
      text: "In the [[gasmarkt-grundlagen|gas market]] the trading point is the **Virtueller Handelspunkt (VTP)** of the Trading Hub Europe market area; the European price reference is the Dutch **TTF**, to which most gas futures and indexed contracts point.",
    },
    { t: "h", level: 2, text: "A supplier's procurement strategies" },
    {
      t: "table",
      head: ["Strategy", "How", "Risk", "Typical for"],
      rows: [
        ["Vollversorgung (full supply)", "One upstream supplier delivers the entire customer load at a fixed price – including forecast and balancing group risk", "low, but with a risk premium in the price", "small Stadtwerke, new entrants"],
        ["Tranche / structured procurement", "The expected volume is bought in slices over months or years on the forward market – say twelve tranches of one twelfth each", "medium: smooths the purchase price but does not protect against volume deviation", "most Stadtwerke and regional utilities"],
        ["Portfolio management", "In-house trading: forward, spot and intraday deals are steered continuously against the load forecast", "controllable, requires a trading desk and risk management", "larger utilities, traders"],
        ["Spot / index procurement", "The volume is bought on the day-ahead market and the price passed through to the customer", "price risk sits with the customer", "dynamic and indexed tariffs"],
      ],
    },
    {
      t: "p",
      text: "The difference between what has been sold and what has been bought is the **open position**. It is never zero: customers come and go, weather changes the load, forecasts err. The remainder is closed on the spot and intraday markets, and whatever is still left is settled by the balancing coordinator as [[bilanzkreis|imbalance energy]].",
    },
    {
      t: "example",
      title: "Forward hedge versus spot exposure – a model calculation",
      lines: [
        { label: "Expected sales of a portfolio", value: "10,000 MWh" },
        { label: "Of which hedged via a yearly future", value: "8,000 MWh at P(forward)" },
        { label: "Open position on the spot market", value: "2,000 MWh at P(spot)" },
        { label: "If the spot price rises by 10 €/MWh above P(forward)", value: "extra cost 2,000 × 10 = €20,000" },
        { label: "Without the hedge it would be", value: "10,000 × 10 = €100,000" },
      ],
      result: { label: "The hedge limits the price risk to the unhedged share", value: "20 % of the volume, 20 % of the risk" },
    },
    {
      t: "p",
      text: "The arithmetic works both ways: if the spot price falls, the hedged supplier misses the benefit. That is why in 2022 utilities with a high forward share came out ahead while spot-heavy providers terminated customers or went insolvent – and in 2023/2024 the picture reversed.",
    },
    { t: "h", level: 2, text: "How procurement becomes the tariff price" },
    {
      t: "p",
      text: "Procurement and sales make up roughly 40 % of the household electricity price – the only block the supplier can influence; the rest is [[netzentgelte|grid fees]], levies and taxes (see [[strompreis-zusammensetzung|electricity price composition]]). The purchase price from procurement, plus forecast and balancing group risk, sales costs and margin, gives the energy share of the [[arbeitspreis|Arbeitspreis]] (unit rate). A fixed-price tariff with a [[bonus-preisgarantie|price guarantee]] is therefore only sound as long as the volume behind it has been bought on the forward market.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For product teams this is the link between tariff and purchasing: a tariff with a 24-month price guarantee presupposes procurement for 24 months. Tariff calculation and procurement therefore need the same volume basis – customer count, expected consumption per [[lastprofil|load profile]], churn rate. Anyone who builds a quoting system that does not connect sales with portfolio management is selling prices that no longer exist on the purchasing side.",
    },
    { t: "h", level: 2, text: "Guarantees of origin for green electricity" },
    {
      t: "p",
      text: "Physically every kilowatt-hour is the same. That a tariff may be called “100 % green electricity” is proven by the supplier with **Herkunftsnachweise (HKN, guarantees of origin)**: for every MWh generated from renewable sources, the **Herkunftsnachweisregister (HKNR)** of the Umweltbundesamt (federal environment agency) issues a certificate that the supplier buys and cancels against its customer volume. HKN are traded separately from the electricity – Europe-wide, often from Norwegian hydropower. What has been cancelled appears in the [[stromkennzeichnung|electricity labelling]]. EEG-subsidised electricity receives no HKN; it is disclosed as “renewable energy financed from the EEG levy”.",
    },
  ],

  codenummern: [
    {
      t: "lead",
      text: "In [[marktkommunikation|market communication]] no company has a name. Sender and receiver of every message are code numbers, and the same firm appears under different numbers depending on whether it is currently speaking as grid operator, supplier or metering point operator. Whoever addresses the wrong number reaches the right company – but the wrong role.",
    },
    { t: "h", level: 2, text: "The code systems" },
    {
      t: "table",
      head: ["Code", "Length", "Issued by", "Use"],
      rows: [
        ["**BDEW-Codenummer**", "13 digits, starts with 98 or 99", "BDEW via bdew-codes.de", "electricity market: market partner ID per [[marktrollen|market role]]"],
        ["**DVGW-Codenummer**", "13 digits", "DVGW", "gas market: market partner ID per role"],
        ["**GS1 GLN**", "13 digits", "GS1 Germany", "Global Location Number, also accepted as market partner ID in electricity and gas"],
        ["**EIC**", "16 characters, alphanumeric", "ENTSO-E via local issuing offices (in Germany the TSOs among others, in gas the MGV)", "European identification: balancing groups, market areas, grid operators, trading parties"],
        ["ILN", "13 digits", "historical", "Internationale Lokationsnummer – the former name of the GLN; still met in legacy systems and old contracts"],
      ],
    },
    {
      t: "p",
      text: "The BDEW code number is the norm in the electricity market, the DVGW code number in the gas market. Both are 13 digits with a check digit. A Stadtwerk that supplies electricity and gas and operates both grids quickly ends up with half a dozen numbers: supplier electricity, supplier gas, grid operator electricity, grid operator gas, metering point operator – and possibly a balancing group EIC.",
    },
    { t: "h", level: 2, text: "EIC – the European code" },
    {
      t: "p",
      text: "The **Energy Identification Code** comes from ENTSO-E and is 16 characters long; the third character names the type. The important ones are **X codes** for parties (traders, grid operators, balancing group managers), **Y codes** for areas (control areas, market areas, bidding zones) and **Z codes** for metering points and time series. A balancing group in the German electricity market is identified by an EIC-based balancing group ID – which is why every [[bilanzkreis|balancing group]] carries a 16-character code, while the balancing group manager itself appears as a market partner with a BDEW code number.",
    },
    { t: "h", level: 2, text: "How the code appears in the message" },
    {
      t: "p",
      text: "In EDIFACT messages, sender and receiver sit in the **NAD** segment with the qualifiers **MS** (Message Sender) and **MR** (Message Receiver). After the number comes a code naming the code system – qualifiers such as **293** for BDEW, **332** for DVGW or **9** for GLN. This qualifier belongs to the number like the area code to a phone number: 13 digits alone are not unique, because a GLN and a BDEW number can in theory look identical.",
    },
    {
      t: "quote",
      text: "NAD+MS+9900123456789::293'   NAD+MR+9800987654321::293'",
      source: "Schematic structure of the sender and receiver segments – role and code system are attached to each code; the exact usage is in the EDI@Energy message descriptions",
    },
    {
      t: "p",
      text: "Whether a number is valid and which role it belongs to is revealed by the **Codenummerndatenbank** (code number database): for electricity the BDEW database at bdew-codes.de, for gas the DVGW code number list. They also hold the market partners' contact details for error clarification and – since the switch to AS4 – the associated communication parameters.",
    },
    { t: "h", level: 2, text: "Typical mistakes" },
    {
      t: "ul",
      items: [
        "**Wrong role**: the registration goes to the Stadtwerk's grid operator code number instead of its metering point operator number – or vice versa. The message is rejected or, worse, processed in the wrong department.",
        "**Wrong commodity**: a gas registration with the receiver's BDEW code instead of its DVGW code.",
        "**Outdated code**: after mergers, renamings or role transfers, code numbers are retired and reissued. A master data table without validity periods does not know about the change.",
        "**Qualifier forgotten**: the number is right, the code system missing – the message is syntactically incomplete.",
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "In the data model a market partner is **not** a company with one number but a company with *n* codes. Store per code: number, code system (qualifier), market role, commodity and validity from/to – and link contracts, market locations and messages to the code, not to the company. Only then can you answer which number the termination confirmation for a customer's gas MaLo went to in 2023.",
    },
    {
      t: "note",
      kind: "info",
      text: "Of all this, only the [[netzbetreiber|grid operator number]] appears on the customer's bill – and that is the distribution grid operator's code number in its grid operator role. Customers practically never know it; for onboarding flows, deriving it from postcode and [[marktlokation|MaLo ID]] is the better route.",
    },
  ],

  "regelzonen-uebertragungsnetz": [
    {
      t: "lead",
      text: "The transmission grid is the motorway of the electricity system: 220 and 380 kV, few operators, interconnected across Europe. People working here think not in customers but in frequency, power balance and congestion. Yet almost every decision the transmission system operators make ends up on a household bill.",
    },
    { t: "h", level: 2, text: "Four operators, four control areas" },
    {
      t: "table",
      head: ["TSO", "Control area (roughly)", "Distinctive feature"],
      rows: [
        ["50Hertz", "eastern Germany and Hamburg", "highest share of renewable generation, Berlin"],
        ["Amprion", "the west – North Rhine-Westphalia to Rhineland-Palatinate and Saarland, parts of Bavaria", "largest load, industrial regions"],
        ["TenneT", "north-south strip from Schleswig-Holstein via Lower Saxony and Hesse to Bavaria", "North Sea offshore connections, longest lines"],
        ["TransnetBW", "Baden-Württemberg", "smallest control area"],
      ],
      caption:
        "The control areas follow historical company boundaries, not federal states. Every market location lies in exactly one control area – which determines which TSO acts as its balancing coordinator.",
    },
    {
      t: "p",
      text: "All four are part of the Continental European **synchronous area** of **ENTSO-E**, which runs from Portugal to Turkey on a common frequency of 50 Hz. Since 2010 the German TSOs have netted their balancing needs against each other in the **Netzregelverbund** (grid control cooperation) instead of one area ramping up while its neighbour ramps down – today extended to European platforms for exchanging balancing energy.",
    },
    { t: "h", level: 2, text: "System services" },
    {
      t: "dl",
      items: [
        { term: "Balancing energy (Regelenergie)", def: "Reserves that correct frequency deviations: **FCR** (primary control, fully active within 30 seconds, shared Europe-wide), **aFRR** (secondary control, automatic within 5 minutes) and **mFRR** (minute reserve, called manually). Procured in auctions via regelleistung.net." },
        { term: "Imbalance energy (Ausgleichsenergie)", def: "The cost of balancing energy is passed on to the balancing groups that caused the deviation. Its price is the **reBAP** (uniform cross-control-area imbalance price) per quarter hour – the same figure in all four control areas. Every [[bilanzkreis|balancing group]] pays it for shortfalls and receives it for surpluses." },
        { term: "Redispatch 2.0", def: "Since 1 October 2021 grid operators can ramp generation plants **from 100 kW** upwards – and smaller ones if remotely controllable – up or down to avoid congestion. The former Einspeisemanagement (feed-in management) for renewables has been merged into it; operators are compensated for lost feed-in." },
        { term: "Congestion management", def: "When the wind blows in the north and consumption is in the south, line capacity falls short: plants in the north are curtailed, plants in the south ramped up. These costs – several billion euros a year – flow to everyone via grid fees." },
        { term: "Netzreserve and Kapazitätsreserve", def: "Power plants outside the market that run only at the TSO's request: the **Netzreserve** (grid reserve) for congestion mainly in the south, the **Kapazitätsreserve** (capacity reserve) as the last safety net if the market cannot cover the load." },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "The **50.2 Hz problem** shows why system stability also concerns small installations: older PV inverters all disconnected simultaneously at 50.2 Hz – with several gigawatts installed, a risk for the entire synchronous area. A retrofit programme from 2012 ensured the systems now respond in a staggered way.",
    },
    { t: "h", level: 2, text: "The TSO as a merchant" },
    {
      t: "p",
      text: "Beyond the physics, the transmission system operator has two commercial roles that show up in every billing system. As **Bilanzkoordinator (BIKO, balancing coordinator)** it runs balancing group settlement under MaBiS and settles imbalance energy with the balancing group managers. And as **levy administrator** it collects the statutory levies – [[kwk-umlage|KWKG levy]], [[offshore-netzumlage|offshore grid levy]], [[besondere-netznutzung|surcharge for special grid use]] – and publishes them every October on netztransparenz.de, the four TSOs' joint platform.",
    },
    { t: "h", level: 2, text: "Grid fee roll-down" },
    {
      t: "p",
      text: "The household customer does not pay the costs of the transmission grid – expansion, congestion management, reserves, system services – directly. The TSO charges them to the downstream distribution grid operators as the grid fee of the extra-high-voltage level; those roll them down level by level into low voltage. A household's [[netzentgelte|grid fee]] therefore contains a share from every grid level above it – see [[netzbetreiber|grid levels]] and [[netznutzungsabrechnung|grid usage billing]].",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For software systems the control area is a master data item of the market location, not an attribute of the customer. It determines the balancing coordinator, the supplier's balancing group EIC in that area and the time series the grid operator reports there. A supplier that sells nationwide needs its own balancing group in each of the four control areas, or a service provider that supplies one.",
    },
  ],

  "institutionen-regelwerk": [
    {
      t: "lead",
      text: "“That's what the GPKE says.” – “No, that's a BDEW application guide.” – “But the EnWG says …”. Anyone building software for utilities hears sentences like these daily and has to be able to place who is speaking and how binding it is. This article sorts out the actors and their documents.",
    },
    { t: "h", level: 2, text: "Who sets the rules" },
    {
      t: "dl",
      items: [
        { term: "Bundestag and federal government", def: "Pass statutes such as the [[enwg|EnWG]], EEG and [[msbg|MsbG]] and the ordinances beneath them. The responsible ministry is the Bundesministerium für Wirtschaft und Energie (BMWE, until 2025 BMWK)." },
        { term: "Bundesnetzagentur (BNetzA)", def: "The regulator for electricity and gas – and also for telecommunications, post and rail. It approves grid fees, supervises grid operators and, in its **Beschlusskammern** (ruling chambers), lays down the market processes: **BK6** for electricity market communication (GPKE, MaBiS, WiM, MPES), **BK7** for gas (GeLi Gas, GaBi Gas), **BK4** for grid fees; further chambers handle incentive regulation. Since 2024 it can regulate by its own decisions in many areas that were previously set in ordinances." },
        { term: "Landesregulierungsbehörden (state regulators)", def: "For grid operators with fewer than 100,000 connected customers whose grid does not cross a state border, the regulator of the federal state is responsible – many states have delegated this task to the Bundesnetzagentur." },
        { term: "Bundeskartellamt", def: "The competition authority: abuse control over prices and market power outside the regulated grids – for instance district heating, default supply prices or mergers; it runs the market transparency unit for wholesale jointly with the Bundesnetzagentur." },
      ],
    },
    { t: "h", level: 2, text: "Associations and standards bodies" },
    {
      t: "table",
      head: ["Organisation", "What it represents", "What comes from it"],
      rows: [
        ["**BDEW**", "Bundesverband der Energie- und Wasserwirtschaft – the large utilities and grid operators", "application guides for MaKo, [[codenummern|code numbers]], electricity price analysis, model contracts"],
        ["**VKU**", "Verband kommunaler Unternehmen – the Stadtwerke", "positions, model documents, advocacy for smaller grid operators"],
        ["**DVGW**", "Deutscher Verein des Gas- und Wasserfaches", "the technical rulebook for gas and water: G 260 (gas quality), G 685 (gas billing), gas code numbers"],
        ["**VDE FNN**", "Forum Netztechnik/Netzbetrieb within the VDE", "technical connection rules **VDE-AR-N 4100** (low voltage), **4105** (generation in low voltage), **4110** (medium voltage), Metering Code **VDE-AR-N 4400**, specifications for meters and gateways"],
        ["**EDI@Energy**", "project group of BDEW and other associations", "message descriptions and application handbooks of [[marktkommunikation|market communication]] on bdew-mako.de (formerly edi-energy.de) – on behalf of the Bundesnetzagentur"],
        ["**EFET**", "European Federation of Energy Traders", "the standard master agreement for OTC trading in the [[grosshandel-beschaffung|wholesale market]]"],
      ],
    },
    { t: "h", level: 2, text: "Europe" },
    {
      t: "p",
      text: "The basic architecture – unbundling, free supplier switching, regulated grids – comes from the EU internal market directives for electricity and gas, most recently the 2019 “Clean Energy Package”. **ACER**, the Agency for the Cooperation of Energy Regulators, coordinates the national regulators; **CEER** is their voluntary association. **ENTSO-E** (electricity) and **ENTSOG** (gas) are the associations of transmission system operators and draw up the European network codes, from which for instance the rules for [[regelzonen-uebertragungsnetz|balancing energy]] and cross-border trading derive.",
    },
    { t: "h", level: 2, text: "The hierarchy of rules" },
    {
      t: "steps",
      items: [
        { title: "EU law", text: "Directives (must be transposed into national law) and regulations (apply directly), such as the electricity market regulation and the European network codes." },
        { title: "Federal statutes", text: "[[enwg|EnWG]] as the market's constitution, EEG for renewables, [[msbg|MsbG]] for metering, EnergieStG and StromStG for taxes, KWKG, GEG." },
        { title: "Ordinances", text: "Flesh out the statutes: StromNZV and GasNZV (grid access, balancing), StromNEV and GasNEV (grid fees), ARegV (incentive regulation), [[stromgvv-gasgvv|StromGVV and GasGVV]] (default supply), NAV and NDAV (grid connection)." },
        { title: "Decisions of the Bundesnetzagentur", text: "Binding administrative acts of the ruling chambers: GPKE, WiM, MaBiS, MPES, GeLi Gas, GaBi Gas, the decisions on § 14a EnWG, on the 24-hour supplier switch and on the data formats. They bind all market participants although they are not statutes." },
        { title: "Application guides and technical rules", text: "BDEW application guides, EDI@Energy message descriptions, DVGW worksheets, VDE application rules. Formally not legal norms – practically binding, because decisions and contracts refer to them." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "The order is also the ranking in a conflict: an application guide cannot override a regulatory decision, a decision cannot override the statute. In practice, though, you read bottom-up – the application guide says how it works concretely, and only in a dispute do you go one level higher.",
    },
    { t: "h", level: 2, text: "Incentive regulation in five lines" },
    {
      t: "p",
      text: "Because grids are monopolies, the Bundesnetzagentur sets a **revenue cap** (Erlösobergrenze) for every grid operator under the **ARegV** – the sum it may collect in a year through [[netzentgelte|grid fees]]. It applies for a **regulatory period of five years** and falls annually along an efficiency path: whoever is more efficient than the industry benchmark keeps the gain; whoever is more expensive has to save. From the revenue cap and the expected sales volume the grid operator calculates its price sheets – which is why grid fees change every 1 January, and why they differ so much by region.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For product development this means: the source of a rule determines how often it changes. Statutes change every few years, decisions and formats twice a year ([[formatanpassung|format change]]), price sheets annually. Whoever implements a business rule should name its source in code or configuration – then, at the next release, it is clear which places are affected.",
    },
  ],
};
