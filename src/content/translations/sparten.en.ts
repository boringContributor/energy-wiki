import type { Block } from "../types";

export const spartenEn: Record<string, Block[]> = {
  strom: [
    {
      t: "lead",
      text: "Electricity cannot be stored in the grid. Whatever is fed in during one second has to be withdrawn in that same second – otherwise the frequency drifts. This physical quirk explains exchange trading, [[bilanzkreis|balancing groups]], balancing energy and, ultimately, [[dynamischer-tarif|dynamic tariffs]].",
    },
    { t: "h", level: 2, text: "Household figures" },
    {
      t: "stats",
      items: [
        { value: "1,500 kWh", label: "Single-person household", hint: "flat, no electric water heating" },
        { value: "3,500 kWh", label: "Reference household", hint: "the market's common yardstick" },
        { value: "4,500 kWh", label: "Family in a house", hint: "without heat pump or EV" },
      ],
    },
    {
      t: "p",
      text: "Orders of magnitude from the BDEW Stromspiegel and the BDEW publication “Energiemarkt Deutschland”; actual values vary considerably with water heating, building and household size.",
    },
    {
      t: "p",
      text: "A heat pump quickly adds 3,000 to 6,000 kWh, and an electric car around 2,500 kWh over 15,000 kilometres. These are precisely the customers that matter for [[intelligentes-messsystem|intelligent metering systems]] and [[paragraf-14a-enwg|§ 14a EnWG]].",
    },
    { t: "h", level: 2, text: "What makes up the price" },
    { t: "figure", id: "strompreis-stack" },
    { t: "h", level: 2, text: "Quirks in the process" },
    {
      t: "ul",
      items: [
        "Metered and billed in kWh – no conversion needed, unlike [[erdgas|gas]]",
        "Feed-in needs a [[zaehlertypen|bidirectional meter]] and often a second [[marktlokation|market location]]",
        "The origin of the power must be disclosed via [[stromkennzeichnung|electricity labelling]]",
        "Only electricity has dynamic tariffs under [[dynamischer-tarif|§ 41a EnWG]]",
      ],
    },
  ],

  erdgas: [
    {
      t: "lead",
      text: "Gas consumption starts out as a volume: the value in cubic metres (m³) is what the gas meter measured volumetrically over the billing period. How much energy that contains depends on the gas quality, the pressure and the temperature – which is exactly why it gets converted.",
    },
    { t: "figure", id: "gas-umrechner" },
    {
      t: "p",
      text: "The arithmetic in detail: [[thermische-gasabrechnung|thermal gas billing]], [[brennwert|calorific value]] and [[zustandszahl|Zustandszahl]].",
    },
    { t: "h", level: 2, text: "H-gas and L-gas" },
    {
      t: "table",
      head: ["Gas type", "Typical calorific value", "Origin", "Status"],
      rows: [
        ["H-gas (high)", "10–13.1 kWh/m³", "North Sea, imports, LNG", "the nationwide standard"],
        ["L-gas (low)", "8.4–11.2 kWh/m³", "Netherlands, northern Germany", "market area conversion still running until around 2029/2030"],
      ],
      caption:
        "L-gas contains more nitrogen and therefore less energy per cubic metre. Converting whole grid areas from L-gas to H-gas (Marktraumumstellung) has been running since 2015 and continues in parts of Lower Saxony and North Rhine-Westphalia until around 2029/2030.",
    },
    { t: "h", level: 2, text: "What makes up the price" },
    { t: "figure", id: "gaspreis-stack" },
    {
      t: "note",
      kind: "info",
      text: "Gas is the commodity where the [[co2-preis|carbon price]] lands directly on the invoice. In 2026 it sits in a corridor of 55 to 65 €/t – at an emission factor of roughly 0.182 kg CO₂ per kWh, that is 1.00 to 1.18 ct/kWh net.",
    },
    { t: "h", level: 2, text: "Common stumbling blocks" },
    {
      t: "ul",
      items: [
        "Customers compare their m³ reading with the kWh on the bill and conclude the billing is wrong",
        "Calorific value and Zustandszahl change between two billing periods – so an identical volume can produce different kWh figures",
        "On a meter exchange, the volume readings of the old and the new meter have to be converted separately and cleanly",
      ],
    },
  ],

  "thermische-gasabrechnung": [
    {
      t: "lead",
      text: "A cubic metre of gas is not a fixed amount of energy. More gas fits into the same cubic metre in a cold cellar than in a warm one, and gas from Norway carries more energy than gas from another source. So that everyone still pays for the same product, the market converts to energy.",
    },
    {
      t: "formula",
      expr: "Consumption [kWh]  =  Volume [m³]  ×  Zustandszahl z  ×  Calorific value [kWh/m³]",
      where: [
        { sym: "Volume", desc: "the difference between the meter readings, in operating cubic metres" },
        { sym: "z", desc: "the [[zustandszahl|Zustandszahl]], correcting for pressure and temperature – typically 0.90–0.98 for low-pressure household connections, above 1 at higher billing pressures" },
        { sym: "Calorific value", desc: "the [[brennwert|calorific value]] of the gas delivered; typically 8.4–13.1 kWh/m³" },
      ],
      caption:
        "The grid operator supplies both factors, and both must be shown on the invoice.",
    },
    { t: "figure", id: "gas-umrechner" },
    { t: "h", level: 2, text: "Worked example" },
    {
      t: "example",
      title: "Annual statement for a detached house",
      lines: [
        { label: "Meter reading, new", value: "08,412 m³" },
        { label: "Meter reading, old", value: "06,902 m³" },
        { label: "Volume", value: "1,510 m³" },
        { label: "Zustandszahl", value: "0.9540" },
        { label: "Calorific value", value: "11.208 kWh/m³" },
      ],
      result: { label: "Billing value", value: "16,146 kWh" },
    },
    {
      t: "note",
      kind: "law",
      text: "The conversion follows rules recognised under metrology law (DVGW code of practice G 685). The calorific value billed is a weighted average across the billing period, not an instantaneous reading.",
    },
    { t: "h", level: 2, text: "Why customers baulk here" },
    {
      t: "p",
      text: "The meter shows 1,510 – the invoice says 16,146. This is the single most common source of enquiries in the gas business. A portal that puts both figures side by side and shows the chain of arithmetic measurably reduces contacts to customer service.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "Gas meter readings are always captured in **m³** – and exchanged as volumes via MSCONS in [[marktkommunikation|market communication]] too; the **kWh** only arise downstream, in billing. A portal input field therefore has to ask unambiguously for the cubic-metre reading and must not accept kWh. The conversion belongs on the system side – never in an input field for the customer.",
    },
  ],

  brennwert: [
    {
      t: "lead",
      text: "The calorific value is a property of the gas delivered, not of the customer. It is measured continuously in the network and published per grid area as the calorific value used for billing.",
    },
    {
      t: "table",
      head: ["Gas type", "Calorific value", "What it means for the customer"],
      rows: [
        ["H-gas", "10–13.1 kWh/m³, typically 11.5", "fewer cubic metres for the same heat"],
        ["L-gas", "8.4–11.2 kWh/m³", "more cubic metres for the same heat"],
      ],
    },
    { t: "h", level: 2, text: "Brennwert or Heizwert?" },
    {
      t: "p",
      text: "The **Brennwert** (gross or higher calorific value, Hₒ – the o stands for oberer, “upper” – or H_s for “superior”) includes the condensation heat of the water vapour in the flue gas. The **Heizwert** (net calorific value, H_i) does not, and comes out around 10 % lower. Germany bills on the Brennwert.",
    },
    {
      t: "note",
      kind: "warn",
      text: "A rising calorific value does **not** mean the customer pays more. They receive more energy per cubic metre – so at the same heat output, their volume consumption falls accordingly.",
    },
  ],

  zustandszahl: [
    {
      t: "lead",
      text: "A gas meter measures **operating cubic metres** – the volume under the conditions prevailing at the meter right now. Billing, however, uses the standard state: 0 °C and 1,013.25 mbar. The Zustandszahl translates between the two.",
    },
    {
      t: "p",
      text: "It depends mainly on two things: the geodetic altitude of the connection – the higher, the lower the air pressure – and the network's supply pressure. For household connections on the low-pressure network, typical values lie between 0.90 and 0.98; at altitude it drops noticeably. Where a connection is supplied at a higher billing pressure – medium pressure for commercial and industrial sites – z is greater than 1 instead: at 1 bar gauge pressure it is around 1.9, because the same operating cubic metre holds almost twice as much gas.",
    },
    {
      t: "example",
      title: "The effect of the z-number",
      lines: [
        { label: "Volume", value: "1,000 m³" },
        { label: "Calorific value", value: "11.2 kWh/m³" },
        { label: "z = 0.98 (coast)", value: "10,976 kWh" },
        { label: "z = 0.90 (highland)", value: "10,080 kWh" },
      ],
      result: { label: "Difference", value: "896 kWh · around 8 %" },
    },
    {
      t: "note",
      kind: "info",
      text: "So the z-number is not a price component but a measurement input. It appears on the invoice and comes – like the [[brennwert|calorific value]] – from the [[netzbetreiber|grid operator]].",
    },
  ],

  wasser: [
    {
      t: "lead",
      text: "Water has no supplier switching. Wherever you live, your water comes from the utility serving that area – a local monopoly, controlled through municipal bylaws and oversight rather than through competition.",
    },
    { t: "figure", id: "wasserpreis-stack" },
    { t: "h", level: 2, text: "The three items" },
    {
      t: "dl",
      items: [
        { term: "Drinking water", def: "A [[grundpreis|standing charge]] based on meter size plus a volumetric price per m³. A supply in the VAT sense – **7 % VAT**." },
        { term: "Waste water", def: "Usually assessed on fresh water consumption, on the principle that what comes in also goes out again. A sovereign municipal fee – **no VAT**." },
        { term: "Storm water", def: "Assessed on the sealed surface area of the property, not on consumption. Also a sovereign fee." },
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "The split tax treatment is a classic source of error: treat a water bill like an electricity or gas bill, apply 19 % to everything, and you are wrong on both items.",
    },
    { t: "h", level: 2, text: "Garden water meters" },
    {
      t: "p",
      text: "Anyone watering a lot can have a second meter installed: the water drawn through it never enters the sewer and is therefore excluded from the waste water fee. The meter has to be certified and is usually read by the customer.",
    },
  ],

  fernwaerme: [
    {
      t: "lead",
      text: "District heat is generated centrally and transported to the customer as hot water. A heat exchanger station in the basement replaces the boiler. What is billed is the heat withdrawn – measured by a heat meter that combines flow rate and temperature difference.",
    },
    { t: "h", level: 2, text: "What differs from electricity and gas" },
    {
      t: "ul",
      items: [
        "**No competition**: if you are connected to a heat network, you buy from its operator – switching is physically impossible",
        "**Its own ordinance**: the AVBFernwärmeV applies, not the [[stromgvv-gasgvv|StromGVV/GasGVV]]",
        "**Indexation clauses**: the price follows contractually agreed indices – for natural gas, heat generation or wages – rather than a free price change",
        "**Long commitments**: terms of up to ten years are permitted",
        "**Mandatory connection** is imposed by bylaw in some municipalities",
      ],
    },
    {
      t: "table",
      head: ["Price component", "Basis", "Electricity equivalent"],
      rows: [
        ["Standing charge", "€/kW of connected capacity per year", "[[leistungspreis|capacity charge]]"],
        ["Unit rate", "ct/kWh of heat withdrawn", "[[arbeitspreis|unit rate]]"],
        ["Metering charge", "€/year for the heat meter", "[[messstellenbetrieb|metering point operation]]"],
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "District heating is gaining importance as municipal heat planning expands. For products that mostly means one thing: connection enquiries, feasibility checks and construction progress are processes in their own right – they have little in common with classic tariff sales.",
    },
  ],

  "gasmarkt-grundlagen": [
    {
      t: "lead",
      text: "Anyone coming from electricity recognises much of the gas market – suppliers, grid operators, balancing groups, market communication – and then stumbles over the differences: there are no control areas but one market area. Balancing is not per quarter hour but per day. And the gas itself is not measured in kWh but in cubic metres, which only [[thermische-gasabrechnung|billing]] translates into energy.",
    },
    { t: "h", level: 2, text: "One market area: Trading Hub Europe" },
    {
      t: "p",
      text: "Since **1 October 2021** Germany has had a single gas market area, run by **Trading Hub Europe GmbH (THE)** as **Marktgebietsverantwortlicher (MGV, market area manager)**. Before that there were two (NetConnect Germany and Gaspool), and earlier up to 19. The MGV is a joint venture of the transmission system operators and does what the four TSOs do as balancing coordinators in electricity – for all of Germany in one place.",
    },
    {
      t: "dl",
      items: [
        { term: "Entry-exit system", def: "Shippers book capacity separately for entry into the market area (entry: border points, storage, biogas plants, LNG terminals) and exit (exit: offtake to distribution grids and end customers). Between entry and exit sits the **Virtueller Handelspunkt (VTP, virtual trading point)**, where gas is traded and transferred between balancing groups without reference to a physical location." },
        { term: "Gas day", def: "The balancing day runs from **06:00 to 06:00** the following day. All quantities, nominations and allocations refer to the gas day, not the calendar day – meter readings at the turn of the month are also calculated for 06:00." },
        { term: "Daily balancing", def: "The [[bilanzkreis|balancing group]] must be balanced over the gas day. Within the day the grid buffers (line pack). The MGV settles deviations as **imbalance energy**; in addition there are hourly tolerances and an intraday flexibility charge for RLM customers." },
      ],
    },
    { t: "h", level: 2, text: "SLP and RLM in gas" },
    {
      t: "p",
      text: "The threshold for interval metering is much higher in gas than in electricity: **1.5 million kWh** annual consumption or **500 kWh/h** offtake capacity (§ 24 GasNZV) – practically all households and most commercial customers are SLP customers, see [[lastprofil|load profile]]. RLM customers are metered hourly and balanced daily via MSCONS.",
    },
    {
      t: "p",
      text: "Gas standard load profiles are above all temperature-dependent: they describe daily consumption as a **sigmoid function** of the daily mean temperature – near zero at 20 °C (only hot water and cooking), near the maximum at −10 °C. Balancing uses the previous day's **forecast temperature**; the difference between forecast and actual consumption is not borne by the supplier but spread over all SLP exit points via the balancing levy. A warm winter is therefore no balancing group risk for a gas supplier – but a sales volume risk.",
    },
    { t: "h", level: 2, text: "The rulebooks: GaBi Gas and GeLi Gas" },
    {
      t: "p",
      text: "The Bundesnetzagentur has issued sister decisions to the electricity rules for gas: **GeLi Gas** (business processes for supplier switching in gas) corresponds to the GPKE and governs registration, deregistration and re-registration; **GaBi Gas** (basic model of balancing service and balancing rules) corresponds to MaBiS. Ruling chamber 7 is responsible. The formats are the same EDIFACT messages as in electricity – UTILMD, MSCONS, INVOIC – with gas-specific codes; since 1 October 2025 transported via AS4 in gas as well.",
    },
    { t: "h", level: 2, text: "Levies that appear only on the gas bill" },
    {
      t: "table",
      head: ["Item", "What for", "Who sets it"],
      rows: [
        ["**Bilanzierungsumlage** (balancing levy, SLP and RLM separately)", "Covers the cost of balancing energy and the difference between balanced SLP quantities and actual consumption; formerly called Regelenergieumlage", "MGV, annually on 1 October"],
        ["**Konvertierungsumlage** (conversion levy)", "Cost of balancing H-gas and L-gas as one commodity in the same market area although they flow physically separated", "MGV, annually"],
        ["**Gasspeicherumlage** (gas storage levy, § 35e EnWG)", "Since October 2022 to finance the state-mandated filling of storage; its **abolition from 1 January 2026** has been decided – the federal government takes over the cost", "by statute; amount most recently set by the MGV"],
        ["**Energy tax**", "**0.55 ct/kWh** for natural gas used for heating (§ 2 Abs. 3 EnergieStG), see [[energiesteuer|energy tax]]", "federal government"],
        ["**CO₂ price**", "National emissions trading under the BEHG, in 2026 within a price corridor of 55 to 65 €/t – see [[co2-preis|CO₂ price]]", "federal government"],
      ],
      caption:
        "Add [[netzentgelte|grid fees]], [[konzessionsabgabe|Konzessionsabgabe]] and VAT as in electricity. The composition in detail: [[gaspreis-zusammensetzung|gas price composition]].",
    },
    {
      t: "note",
      kind: "info",
      text: "Gas grid fees follow the **capacity principle**: grid costs are allocated mainly by booked or reserved exit capacity, not by volume. For households the grid operator translates that into a price sheet with standing charge and unit rate by annual consumption band; for RLM customers the capacity appears as a capacity charge in €/(kWh/h).",
    },
    { t: "h", level: 2, text: "H-gas, L-gas and the market area conversion" },
    {
      t: "p",
      text: "Germany historically has two gas qualities: high-calorific **H-gas** and low-calorific **L-gas** from Dutch and northern German fields. Because L-gas production is running out, entire grid areas in north-western Germany are being converted to H-gas – the **Marktraumumstellung** (market area conversion), in which every gas appliance has to be adjusted or replaced. For billing that means a jump in the [[brennwert|calorific value]] on the conversion date; the details are under [[erdgas|natural gas]].",
    },
    { t: "h", level: 2, text: "Biomethane" },
    {
      t: "p",
      text: "Upgraded biogas is injected into the natural gas grid as **biomethane** and is physically indistinguishable there. It is therefore traded via dedicated **biogas balancing groups** with a balancing period of twelve months and via certificates in the dena biogas register. For the supplier, biomethane is a procurement and certification topic – on the customer's bill it appears as a product attribute, not as a separate line.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "Three things software for the gas market has to do differently from electricity: periods start at 06:00, not at midnight. Meter readings are volumes and only become kWh with calorific value and Zustandszahl – both factors belong in the database with validity periods. And the balancing group hangs off the market area, not a control area – there is only one, but the levies within it change annually on 1 October, not on 1 January.",
    },
  ],

  wasserstoff: [
    {
      t: "lead",
      text: "Hydrogen is not yet a mass market, but it is already a regulated commodity: there is an approved network, sections in the [[enwg|EnWG]] and first customers in industry. Anyone building data models for utilities today should at least know the commodity as a placeholder – the units question alone is enough to annoy a billing system.",
    },
    { t: "h", level: 2, text: "The core network" },
    {
      t: "p",
      text: "In **October 2024** the Bundesnetzagentur approved the **hydrogen core network** (Wasserstoff-Kernnetz): around **9,000 km** of pipelines, mostly converted natural gas lines, to be commissioned step by step until **2032**, linking production, import and storage sites with the industrial demand centres. It is financed privately through a nationally uniform **Hochlaufentgelt** (ramp-up fee); because in the early years few customers would have to bear high costs, initial losses are collected in an **Amortisationskonto** (amortisation account) and recovered later through the fees – the federal government backstops that account.",
    },
    {
      t: "note",
      kind: "law",
      text: "The regulation of hydrogen networks has been in **§§ 28j ff. EnWG** since 2021 – initially as an **opt-in**: network operators can submit to regulation in order to gain access to the financing instruments. Those who do are subject to unbundling and network access rules similar to gas. The 2024 European gas and hydrogen market directive is gradually aligning the rules.",
    },
    { t: "h", level: 2, text: "Colours and origin" },
    {
      t: "dl",
      items: [
        { term: "Green", def: "Electrolysis with renewable electricity – the aim of the regulation; what counts as “renewable” is defined by delegated EU acts (additionality, temporal and geographical correlation)." },
        { term: "Blue", def: "From natural gas (steam reforming) with capture and storage of the CO₂." },
        { term: "Grey", def: "From natural gas without CO₂ capture – today the norm in industry." },
        { term: "Turquoise", def: "From natural gas via methane pyrolysis, with solid carbon instead of CO₂ as the by-product." },
      ],
    },
    { t: "h", level: 2, text: "Units – the real trap" },
    {
      t: "table",
      head: ["Unit", "Where it occurs", "Conversion"],
      rows: [
        ["kg", "production, import, mobility, contracts", "1 kg ≈ **33.3 kWh** net calorific value (lower heating value), ≈ **39.4 kWh** gross calorific value"],
        ["Nm³", "network and metering, as with natural gas", "1 kg ≈ 11.1 Nm³; 1 Nm³ ≈ 3.0 kWh net, ≈ 3.54 kWh gross calorific value"],
        ["kWh", "billing, grid fees, energy statistics", "reference for prices; **gross or net calorific value must be stated**"],
      ],
      caption:
        "Per kilogram, hydrogen holds around three times the energy of natural gas, but per cubic metre only about a third – the same pipeline carries far less energy at the same volume flow.",
    },
    {
      t: "note",
      kind: "warn",
      text: "The difference between net calorific value (33.3 kWh/kg) and gross calorific value (39.4 kWh/kg) is around 18 % for hydrogen – far more than for natural gas at about 10 %. A contract “in kWh” without stating the reference is, for hydrogen, a dispute worth almost a fifth of the bill. Network and billing use the gross [[brennwert|Brennwert]] as in gas; electrolyser manufacturers and efficiency figures usually the net value.",
    },
    { t: "h", level: 2, text: "Blending and H2-ready" },
    {
      t: "p",
      text: "The existing [[erdgas|natural gas grid]] tolerates a limited admixture of hydrogen: the DVGW rulebook (G 260, G 262) currently allows shares in the range of roughly **10 to 20 vol.-%** depending on the grid and connected appliances; the specific limit depends on gas turbines, CNG filling stations and measuring equipment in the respective grid. “**H2-ready**” for gas power plants and boilers means that an appliance can later be converted to 100 % hydrogen – under the GEG that alone is not enough to meet the 65 % renewables requirement; the grid has to be bindingly scheduled for conversion.",
    },
    {
      t: "p",
      text: "**Electrolysis** has an efficiency of around **60 to 70 %** (relative to the net calorific value): 100 kWh of electricity become roughly 60 to 70 kWh of hydrogen. Turning it back into electricity loses half again – which is why hydrogen is seen as the solution for industrial processes, storage and hard-to-electrify applications, not for space heating in existing buildings.",
    },
    { t: "h", level: 2, text: "What this means for billing software" },
    {
      t: "ul",
      items: [
        "**Bill energy in kWh**, but carry mass in kg and volume in Nm³ as measured quantities – analogous to [[thermische-gasabrechnung|thermal gas billing]], with a calorific value per kg or per Nm³ as a conversion factor with a validity period",
        "**Reference basis** (gross/net calorific value) as a mandatory attribute of every price and every quantity",
        "**Quality and origin certificates** per delivered quantity: colour, production method, CO₂ intensity and the certificate under the EU renewables directive become contract and invoice attributes – like [[grosshandel-beschaffung|guarantees of origin]] for green electricity, but with stricter criteria",
        "**Commodity as its own value**, not as a gas variant: grid fees, levies and taxes follow their own rules, which will change several times over the coming years",
      ],
    },
  ],
};
