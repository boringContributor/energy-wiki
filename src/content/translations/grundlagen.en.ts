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
          term: "Grid usage contract",
          def: "Between supplier and grid operator. The customer pays the [[netzentgelte|grid fees]] but never sees the contract.",
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
      text: "Every market partner needs a unique identification number. In the electricity market the BDEW issues the **BDEW-Codenummer** (13 digits, starting with 98…); in the gas market the DVGW issues the **DVGW-Codenummer**. Across Europe the **EIC** (Energy Identification Code) is gaining ground as well. Of these, usually only the [[netzbetreiber|grid operator number]] appears on the invoice.",
    },
    {
      t: "table",
      head: ["Role", "Abbr.", "Main job", "Can the customer switch it?"],
      rows: [
        ["Supplier", "LF", "Sell and bill energy", "yes, at any time"],
        ["Distribution grid operator", "VNB / NB", "Run the grid, levy grid fees", "no – local monopoly"],
        ["Transmission grid operator", "ÜNB", "Extra-high voltage, system stability", "no"],
        ["Metering point operator", "MSB", "Operate and read the meter", "yes, open competition"],
        ["Balancing group manager", "BKV", "Run the balancing group", "indirectly, via the supplier"],
        ["Basic supplier", "GV", "Guarantee supply without a contract", "no – set by law"],
      ],
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
      text: "Grid fees vary a great deal by region. Grid areas with lots of wind power and little consumption spread high expansion costs over few kilowatt-hours – electricity is noticeably more expensive there than in densely populated regions.",
    },
    { t: "h", level: 2, text: "Levies collected with the grid fee" },
    {
      t: "p",
      text: "Several statutory levies are collected together with the grid fees. In 2026 those are the [[kwk-umlage|KWKG levy]], the [[offshore-netzumlage|offshore grid levy]] and the [[besondere-netznutzung|surcharge for special grid use]] – 2.946 ct/kWh net in total.",
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
        "Controllable devices under [[paragraf-14a-enwg|§ 14a EnWG]]",
      ],
    },
  ],

  bilanzkreis: [
    {
      t: "lead",
      text: "Because individual kilowatt-hours cannot be traced through the grid, the market works with accounts instead. Every supplier runs at least one balancing group – itself or through a service provider. Everything its customers withdraw is booked there as a debit, everything it procures as a credit.",
    },
    { t: "h", level: 2, text: "The quarter hour sets the beat" },
    {
      t: "p",
      text: "Balancing happens per quarter hour. For each of those 96 periods a day the balancing group must add up. If it does not, the transmission grid operator supplies **balancing energy** – at a price deliberately made unattractive, so that forecasting well pays off.",
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
      text: "Why this matters for product decisions: a [[dynamischer-tarif|dynamic tariff]] requires the actual quarter-hourly consumption to be known. Without an [[intelligentes-messsystem|intelligent metering system]] there is no load curve – and therefore no sound basis for hourly prices.",
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
      text: "Technically this was EDIFACT over email with signed attachments for decades. The market is moving step by step to **AS4** and JSON-based formats – but the business processes behind them stay the same.",
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
      text: "Around 800 energy suppliers in Germany go through this cycle twice a year. The current state is always in the latest [Mitteilung from the Bundesnetzagentur](https://www.bundesnetzagentur.de/DE/Beschlusskammern/BK06/BK6_83_Zug_Mess/835_mitteilungen_datenformate/Datenformate-node.html); the documents themselves live on the BDEW MaKo platform.",
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
        { term: "Legal unbundling", def: "Above 100,000 connected customers, grid operation must be a separate legal entity." },
        { term: "Operational unbundling", def: "Its own management, its own decision-making, no right of instruction from the sales side." },
        { term: "Informational unbundling", def: "Grid data must not flow to the company's own sales arm unless it is equally available to competitors." },
        { term: "Accounting unbundling", def: "Separate accounts per activity, so that no cross-subsidy arises." },
      ],
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
};
