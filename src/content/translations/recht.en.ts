import type { Block } from "../types";

export const rechtEn: Record<string, Block[]> = {
  enwg: [
    {
      t: "lead",
      text: "Ask “why is it done this way?” in the German energy industry and the answer is usually in the EnWG. It implements the European internal market directives and has been the framework for the liberalised market since 1998.",
    },
    { t: "h", level: 2, text: "Sections you meet in daily work" },
    {
      t: "table",
      head: ["Provision", "Content"],
      rows: [
        ["§ 14a", "[[paragraf-14a-enwg|Controllable devices]] – heat pump, wallbox, battery"],
        ["§ 36", "[[grundversorgung|Basic supply obligation]]"],
        ["§ 38", "[[ersatzversorgung|Substitute supply]]"],
        ["§ 40", "[[jahresabrechnung|Content of electricity and gas invoices]]"],
        ["§ 41", "Energy supply contracts with household customers"],
        ["§ 41a", "[[dynamischer-tarif|Dynamic electricity tariffs]]"],
        ["§ 42", "[[stromkennzeichnung|Electricity labelling]]"],
        ["§ 6 ff.", "[[unbundling|Unbundling]]"],
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Much of the concrete detail is not in the EnWG itself but in ordinances beneath it – [[stromgvv-gasgvv|StromGVV and GasGVV]], StromNEV, GasNEV – or in rulings of the Bundesnetzagentur such as GPKE and GeLi Gas.",
    },
  ],

  msbg: [
    {
      t: "lead",
      text: "The MsbG is the law behind the smart meter rollout. It separates metering point operation from grid operation, defines incumbent and competitive metering point operators, and caps the prices.",
    },
    { t: "h", level: 2, text: "The rollout framework" },
    {
      t: "ul",
      items: [
        "Mandatory installation of an [[intelligentes-messsystem|intelligent metering system]] above 6,000 kWh of annual consumption, for generating installations above 7 kW, and for installations under [[paragraf-14a-enwg|§ 14a EnWG]]",
        "An entitlement to installation **on customer request** within four months, in force since 1 January 2025",
        "Interim target: 20 % of mandatory installation cases by the end of 2025",
        "Rollout to be complete by 2032",
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "The amendment of February 2025 accelerated the rollout, extended the obligations and adjusted the price caps. The basis for that acceleration was the Gesetz zum Neustart der Digitalisierung der Energiewende (**GNDEW**) of 2023.",
    },
    { t: "h", level: 2, text: "Price caps" },
    {
      t: "p",
      text: "Modern metering equipment is capped at €25 a year. For intelligent metering systems a scale applies based on annual consumption and on the trigger; for mandatory installation cases with high consumption it reaches €140 a year, with at most €50 on top for a control unit under § 14a.",
    },
  ],

  "stromgvv-gasgvv": [
    {
      t: "lead",
      text: "StromGVV and GasGVV are nearly identical in wording. Formally they apply only to [[grundversorgung|basic supply]] – in practice many suppliers adopt their rules for special contracts too, because they are tested and hold up in court.",
    },
    {
      t: "table",
      head: ["Provision", "Governs"],
      rows: [
        ["§ 5", "[[preisanpassung|Price adjustment]] – public announcement and notice to the customer at least **6 weeks** before it takes effect"],
        ["§ 12", "Billing and the billing period"],
        ["§ 13", "[[abschlagszahlung|Instalment payments]]"],
        ["§ 14", "Advance payment – only where the customer fails to pay or there is reason to expect non-payment"],
        ["§ 16", "Invoices and instalments – itemisation, due no earlier than two weeks after receipt"],
        ["§ 17", "Payment and default; objections to an invoice justify withholding payment only for obvious errors (§ 17 (1) sentence 2)"],
        ["§ 18", "Calculation errors – corrective billing and refunds, retroactive for at most **3 years**"],
        ["§ 19 (2)", "[[zahlung-und-mahnwesen|Interruption of supply]] for payment default: only from **€100** in arrears, after a warning with four weeks' notice"],
        ["§ 19 (3)", "The start of the interruption has to be announced **8 working days** in advance"],
        ["§ 20", "Termination at two weeks' notice"],
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "[[fernwaerme|District heating]] is governed instead by the AVBFernwärmeV – with noticeably different rules, particularly on contract terms and price adjustment clauses.",
    },
  ],

  stromsteuer: [
    {
      t: "lead",
      text: "Electricity tax was introduced in 1999 as part of the ecological tax reform. It is uniform across Germany, based on consumption, and remitted by the supplier – the customer only ever sees it as a line on the invoice.",
    },
    {
      t: "stats",
      items: [
        { value: "2.05 ct", label: "per kWh", hint: "standard rate, unchanged for years" },
        { value: "0.05 ct", label: "per kWh", hint: "reduced rate for manufacturing, agriculture and forestry (§ 9b StromStG)" },
        { value: "19 %", label: "VAT", hint: "charged on top of the electricity tax" },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "VAT is charged on the electricity tax – a tax on a tax. That is deliberate: the VAT base is the entire consideration, including excise duties.",
    },
    { t: "h", level: 2, text: "Exemptions and reductions" },
    {
      t: "ul",
      items: [
        "Electricity from renewable sources drawn from a grid fed exclusively by them",
        "Electricity used for generating electricity itself",
        "Small installations up to 2 MW in spatial proximity – relevant for tenant electricity and self-consumption",
        "A reduced rate for manufacturing industry and for agriculture and forestry under § 9b StromStG",
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "Until 2023 the relief under § 9b StromStG was a partial rebate: businesses effectively paid **1.537 ct/kWh**. Since 1 January 2024 the tax has been reduced to the European minimum of **0.05 ct/kWh** – initially limited to two years, then made permanent in 2025. The relief is claimed from the main customs office; the electricity invoice still shows the standard rate.",
    },
  ],

  energiesteuer: [
    {
      t: "lead",
      text: "The energy tax is the successor to the mineral oil tax and covers all energy products – heating oil, motor fuels and natural gas. For natural gas used for heating it is 0.55 ct/kWh.",
    },
    {
      t: "note",
      kind: "warn",
      text: "Not to be confused with the [[co2-preis|carbon price]]. Both sit side by side on a gas invoice: the energy tax taxes the quantity of energy, the carbon price taxes the emission. Together they come to roughly 1.55 to 1.73 ct/kWh net in 2026.",
    },
    {
      t: "p",
      text: "Like the [[stromsteuer|electricity tax]], the energy tax is remitted by the supplier and forms part of the base for [[umsatzsteuer-energie|VAT]].",
    },
  ],

  "co2-preis": [
    {
      t: "lead",
      text: "Since 2021, anyone placing fuels on the market has had to buy allowances for the emissions they contain. That cost is passed on to customers – for natural gas as a separate line on the invoice.",
    },
    { t: "figure", id: "co2-preis-pfad" },
    { t: "h", level: 2, text: "From a fixed price to auctions" },
    {
      t: "ul",
      items: [
        "**2021 to 2025**: fixed prices, rising from 25 to 55 €/t",
        "**2026 and 2027**: auctioning within a price corridor of 55 to 65 €/t; auctions start in July 2026 on the EEX",
        "**From 2028**: the European emissions trading system **ETS 2** replaces the national scheme and the price forms freely on the market",
      ],
    },
    { t: "h", level: 2, text: "What that means per kilowatt-hour" },
    {
      t: "formula",
      expr: "CO₂ cost [ct/kWh]  =  CO₂ price [€/t]  ×  Emission factor [t/MWh]  ÷  10",
      where: [
        { sym: "Natural gas", desc: "emission factor of roughly 0.182 t CO₂ per MWh" },
        { sym: "65 €/t", desc: "gives 1.18 ct/kWh net, or around 1.41 ct/kWh including VAT" },
        { sym: "55 €/t", desc: "gives 1.00 ct/kWh net" },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "For rented flats the carbon price has been split between tenant and landlord since 2023 under a staged model: the worse the building's energy performance, the larger the landlord's share.",
    },
  ],

  konzessionsabgabe: [
    {
      t: "lead",
      text: "Cables and pipes run under public streets. For that the grid operator pays the municipality a concession fee – for many municipalities one of the most reliable sources of income there is.",
    },
    { t: "h", level: 2, text: "Maximum rates under the KAV" },
    {
      t: "table",
      head: ["Size of municipality", "Electricity (tariff customers)", "Gas, cooking / hot water", "Gas, other tariff gas"],
      align: ["l", "r", "r", "r"],
      rows: [
        ["up to 25,000 inhabitants", "1.32 ct/kWh", "0.51 ct/kWh", "0.22 ct/kWh"],
        ["up to 100,000 inhabitants", "1.59 ct/kWh", "0.61 ct/kWh", "0.27 ct/kWh"],
        ["up to 500,000 inhabitants", "1.99 ct/kWh", "0.77 ct/kWh", "0.33 ct/kWh"],
        ["above 500,000 inhabitants", "2.39 ct/kWh", "0.93 ct/kWh", "0.40 ct/kWh"],
      ],
      caption:
        "Maximum rates under the Konzessionsabgabenverordnung (KAV). For electricity on an off-peak tariff a reduced rate of 0.61 ct/kWh applies.",
    },
    {
      t: "table",
      head: ["Customer group", "Electricity", "Gas"],
      align: ["l", "r", "r"],
      rows: [["Special contract customers", "0.11 ct/kWh", "0.03 ct/kWh"]],
      caption:
        "For gas the fee falls away entirely where annual consumption exceeds 5 million kWh.",
    },
    {
      t: "note",
      kind: "warn",
      text: "The concession fee is one reason why the same tariff costs different amounts in two neighbouring towns. It depends solely on the municipality's population – not on the supplier.",
    },
  ],

  "kwk-umlage": [
    {
      t: "lead",
      text: "Combined heat and power uses the waste heat from electricity generation for heating, and so reaches much higher overall efficiencies than generating each separately. The Kraft-Wärme-Kopplungsgesetz supports such plants – financed through a levy on every kilowatt-hour.",
    },
    {
      t: "stats",
      items: [
        { value: "0.446 ct", label: "per kWh in 2026" },
        { value: "+61 %", label: "against 2025" },
        { value: "2.946 ct", label: "all grid levies 2026", hint: "KWKG, offshore, special grid use" },
      ],
    },
    {
      t: "p",
      text: "The levy is collected together with the [[netzentgelte|grid fees]] and published each year in mid-October by the four transmission grid operators for the following year.",
    },
    {
      t: "note",
      kind: "law",
      text: "Since 1 January 2023 the legal basis of the levy is no longer the KWKG itself but the **Energiefinanzierungsgesetz (EnFG)**, § 26 ff. It bundles the financing of the EEG, the KWKG and offshore grid connections in one act and sets uniform rules on who pays the levies and which consumers – such as electricity-intensive companies or storage – are capped or exempt. The KWKG now governs only the support for the plants themselves.",
    },
  ],

  "offshore-netzumlage": [
    {
      t: "lead",
      text: "An offshore wind farm is finished but its connection cable is not – who bears the lost revenue? That is the question the offshore grid levy answers. It covers both liability cases and the cost of the grid connections themselves.",
    },
    {
      t: "p",
      text: "Like the [[kwk-umlage|KWKG levy]] it is collected through the [[netzentgelte|grid fees]] and set annually by the transmission grid operators. In 2026 it is 0.941 ct/kWh net.",
    },
    {
      t: "note",
      kind: "info",
      text: "Until 2019 it was called the Offshore-Haftungsumlage, the offshore liability levy. It was renamed when its scope was extended to the connection costs.",
    },
    {
      t: "note",
      kind: "law",
      text: "Since 1 January 2023 the legal basis is no longer § 17f EnWG but the **Energiefinanzierungsgesetz (EnFG)**, § 17 ff. It also stipulates that the levy – like the [[kwk-umlage|KWKG levy]] – is charged in full to final consumers without a cap, and is capped for electricity-intensive companies.",
    },
  ],

  "besondere-netznutzung": [
    {
      t: "lead",
      text: "Some customers relieve the grid: consuming outside peak-load periods (**atypical grid use**) or drawing a great deal very evenly (**energy-intensive grid use**) earns reduced [[netzentgelte|grid fees]]. What the grid operator loses as a result is borne by all other final consumers.",
    },
    {
      t: "note",
      kind: "info",
      text: "Until 2024 this item was called the **§ 19 StromNEV levy**. Since 2025 its official name has been “Aufschlag für besondere Netznutzung”, the surcharge for special grid use – both names appear on invoices and in systems.",
    },
    {
      t: "stats",
      items: [
        { value: "1.559 ct", label: "per kWh in 2026" },
        { value: "§ 19 (2)", label: "StromNEV", hint: "the legal basis for the reduction" },
      ],
    },
  ],

  "eeg-umlage": [
    {
      t: "lead",
      text: "For two decades the EEG levy was the most prominent item on every electricity bill – 3.723 ct/kWh at the end. It was set to zero on 1 July 2022 and abolished entirely at the end of that year.",
    },
    { t: "h", level: 2, text: "How the support is financed now" },
    {
      t: "p",
      text: "The balance between income and expenditure on the EEG account has since come from the federal budget, specifically through the Climate and Transformation Fund. The EEG funding requirement for 2026 is around €16.2 billion – arithmetically that would correspond to a levy of about 4.6 ct/kWh, which consumers no longer pay.",
    },
    {
      t: "note",
      kind: "warn",
      text: "Older explainers, sample invoices and test data still contain the EEG levy. Finding it in a current price calculation means you are looking at an outdated source.",
    },
    {
      t: "p",
      text: "The support itself continues: operators of PV and wind installations still receive a feed-in tariff or market premium under the EEG. Only the financing has moved from the electricity customer to the taxpayer.",
    },
  ],

  "umlage-abschaltbare-lasten": [
    {
      t: "lead",
      text: "Large industrial plants could contract to shut down at short notice during grid congestion. That availability was remunerated and financed through a levy on all final consumers.",
    },
    {
      t: "p",
      text: "The underlying ordinance (AbLaV) expired on 1 July 2022. The levy was published one last time for 2022 – at 0.003 ct/kWh. It has not been charged since 2023.",
    },
    {
      t: "note",
      kind: "info",
      text: "The underlying idea has not disappeared, only moved: flexible loads are integrated today through balancing markets, redispatch and – at household level – [[paragraf-14a-enwg|§ 14a EnWG]].",
    },
  ],

  "paragraf-14a-enwg": [
    {
      t: "lead",
      text: "When ten heat pumps start up and five cars charge in the same street at once, the local transformer is at its limit. § 14a EnWG solves that not through prohibitions but through a trade: the grid operator may curtail in an emergency, and in return the customer pays a lower grid fee.",
    },
    { t: "h", level: 2, text: "What falls under it" },
    {
      t: "ul",
      items: [
        "[[waermepumpe|Heat pumps]], non-public charge points ([[wallbox|wallboxes]]), air conditioning and [[batteriespeicher|battery storage]]",
        "with a capacity of **more than 4.2 kW**",
        "newly registered with the grid **on or after 1 January 2024**",
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Curtailment is not disconnection: a minimum draw of 4.2 kW remains guaranteed – enough to keep a heat pump running and to charge a car for around 20 kilometres of range in an hour.",
    },
    { t: "h", level: 2, text: "The three modules" },
    {
      t: "table",
      head: ["Module", "Benefit", "Requirement"],
      rows: [
        ["Module 1", "A flat deduction from the grid fee, varying by grid area", "The default, no separate meter needed"],
        ["Module 2", "A substantially reduced unit rate in the grid fee instead of a flat deduction", "Separate metering of the controllable device"],
        ["Module 3", "A time-variable grid fee **on top of the flat deduction of Module 1** – cheap in off-peak periods, dearer at peak", "Only in combination with Module 1; an [[intelligentes-messsystem|intelligent metering system]]; available since 1 April 2025"],
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Module 3 is not a standalone module but an add-on: the customer first chooses Module 1 and, since 1 April 2025, can add the time-variable grid fee on top. It cannot be combined with Module 2. For it, the grid operator defines at least three time windows per grid area with different unit rates.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For products around heat pumps and wallboxes, § 14a is one of the most important forks in the road: it determines whether a second metering point is needed, which metering concept applies, and which tariff the customer can have at all.",
    },
  ],

  "umsatzsteuer-energie": [
    {
      t: "lead",
      text: "VAT is applied last – on the sum of every other component, taxes and levies included. Anyone checking an invoice has to apply it right at the end.",
    },
    {
      t: "table",
      head: ["Supply", "Rate", "Reason"],
      align: ["l", "r", "l"],
      rows: [
        ["Electricity", "19 %", "standard rate"],
        ["Natural gas", "19 %", "standard rate; the temporary reduction to 7 % has expired"],
        ["District heating", "19 %", "standard rate"],
        ["Drinking water", "7 %", "reduced rate for foodstuffs and water supply"],
        ["Waste water fee", "0 %", "a sovereign municipal service, not a taxable supply"],
        ["PV installation up to 30 kWp incl. battery", "0 %", "**zero rate** under § 12 (3) UStG, since 1 January 2023"],
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "The zero rate applies to the supply and installation of [[photovoltaik|PV systems]] on or near dwellings and public buildings, including inverters and [[batteriespeicher|battery storage]]. Up to **30 kWp** according to the Marktstammdatenregister the condition is presumed without further proof. Unlike an exemption, the zero rate leaves the installer's input tax deduction untouched – the customer simply pays the net price.",
    },
    {
      t: "note",
      kind: "warn",
      text: "Commercial customers see net prices, household customers see gross prices. Comparing across the two without converting always goes wrong – a classic in quoting flows that serve both customer groups.",
    },
  ],

  "datenschutz-energiedaten": [
    {
      t: "lead",
      text: "A quarter-hour load curve reveals when someone gets up, when the flat is empty and whether a television is on. That is why the law treats energy data not as technical operating data but as what it is: personal data about life in a household.",
    },
    { t: "h", level: 2, text: "What counts as personal" },
    {
      t: "p",
      text: "Personal data is any information that can be attributed to an identifiable person. For an energy customer that is almost everything: name, address and contract account obviously – but also [[zaehlerstand|meter readings]], [[lastprofil|load curves]], meter number, [[marktlokation|MaLo ID]] and [[messlokation|MeLo ID]]. The identifiers are not names, but via the grid operator's master data they lead unambiguously to a connection and thus to a connection user.",
    },
    {
      t: "note",
      kind: "warn",
      text: "The **meter number** is a quasi-identifier: it is printed on the device in the stairwell, on every invoice and on every reading slip. A system that stores consumption data “only with the meter number” and therefore treats it as anonymous is not anonymous. The link to the person can be re-established with trivial effort.",
    },
    { t: "h", level: 2, text: "GDPR and MsbG: which applies to what" },
    {
      t: "p",
      text: "The GDPR is the general framework: legal basis, data subject rights, processing on behalf, security of processing. For metering point operation and data communication in smart energy grids the legislator has specified it sector-specifically in §§ 49 to 75 [[msbg|MsbG]]. These provisions are the legal basis on which metering point operators, grid operators and suppliers may collect and pass on metered values at all.",
    },
    {
      t: "dl",
      items: [
        { term: "Permissibility and purpose limitation (§ 49 MsbG)", def: "Personal data from metering point operation may be collected, processed and used only insofar as the MsbG or another legal provision permits it or the connection user has consented. The purpose is narrow: billing, balancing, grid operation, metering point operation." },
        { term: "Entitled parties (§ 50 MsbG)", def: "The law lists exhaustively who may receive data: [[messstellenbetrieb|metering point operator]], [[netzbetreiber|grid operator]], balancing coordinator and balancing group manager, supplier, direct marketer, installation operator, the connection user themselves – and any further party the connection user explicitly names." },
        { term: "Data minimisation", def: "Only what the respective purpose requires is collected. A household without a time-variable tariff delivers one annual value (TAF 1), not a load curve. The register-reading series is formed only where a tariff or a balancing rule needs it – see [[gateway-administrator|gateway administrator]]." },
        { term: "Star-shaped communication", def: "Every entitled party receives exactly its slice, encrypted and separated. The supplier sees no grid status data, the grid operator no tariff information." },
        { term: "Deletion", def: "Data has to be deleted once the purpose is fulfilled. Grid status data serving only grid operation may not be stored permanently in personal form; billing data is subject to the commercial and tax retention periods and is deleted afterwards." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "The rules apply regardless of whether an intelligent metering system is installed. The annually read reading of a Ferraris meter is also personal data that may only go to entitled parties. The iMSys merely increases the volume and expressiveness of the data – and with it the requirements for technical protective measures.",
    },
    { t: "h", level: 2, text: "The connection user's data sovereignty" },
    {
      t: "p",
      text: "The connection user – usually the resident, not the owner – is master of their data. They can read it out themselves via the gateway's HAN interface, are entitled to consumption information, and decide who gets access beyond the statutory circle.",
    },
    {
      t: "table",
      head: ["Data flow", "Legal basis", "Consent required?"],
      rows: [
        ["Meter reading to supplier for the annual bill", "MsbG, supply contract", "No"],
        ["Register-reading series to supplier for a dynamic tariff", "MsbG; the tariff is the purpose", "No – but the customer chose the tariff"],
        ["Grid status data to grid operator", "MsbG, grid operation", "No"],
        ["Consumption information to the customer (§ 40a EnWG)", "EnWG – statutory entitlement, free of charge", "No"],
        ["High-frequency metered values (TAF 14) to an energy management provider", "Consent of the connection user", "**Yes**, explicit and revocable"],
        ["Consumption data to a comparison portal or for marketing", "Consent", "**Yes**"],
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "§ 40a [[enwg|EnWG]] gives customers with an intelligent metering system an entitlement to regular, free consumption information; for a supplier with iMSys customers providing it is a duty, not an add-on service. Everything beyond that – consumption analyses, appliance recognition, comparisons with neighbours – is a value-added service and needs consent under Art. 6 (1) (a) GDPR, which has to be as easy to withdraw as it was to give.",
    },
    { t: "h", level: 2, text: "The company's obligations" },
    {
      t: "dl",
      items: [
        { term: "Processing on behalf (Art. 28 GDPR)", def: "Whoever outsources billing, the portal or market communication to an IT service provider remains the controller and needs a data processing agreement with instruction binding, confidentiality, technical measures and deletion rules. That also applies to the gateway administrator as a service provider of the metering point operator." },
        { term: "Data protection impact assessment (Art. 35 GDPR)", def: "For processing high-resolution consumption data from intelligent metering systems a DPIA is regularly required, because behavioural profiles can be derived from it. It documents purpose, risks and protective measures – before go-live, not after." },
        { term: "Access (Art. 15 GDPR)", def: "The customer can demand to receive all data stored about them – including meter readings, load curves, substitute values and communication logs. A system that cannot export this data per person has a compliance problem." },
        { term: "Rectification and erasure (Art. 16, 17 GDPR)", def: "A wrong meter reading has to be rectified – through [[rechnungskorrektur|invoice correction]], not by silent overwriting. Erasure claims end where retention duties begin." },
        { term: "Breach notification (Art. 33 GDPR)", def: "An open portal from which other people's load curves can be retrieved has to be reported to the supervisory authority within 72 hours." },
      ],
    },
    { t: "h", level: 2, text: "Practice for portals, CRM and billing" },
    {
      t: "steps",
      items: [
        { title: "Roles and rights", text: "Consumption data is seen only by roles that need it for their task. Sales needs contract data, not the load curve; customer service sees it, but is logged. Rights are granted per [[marktlokation|market location]] and period, not wholesale per tenant." },
        { title: "Pseudonymisation", text: "Analytics, forecasting and test systems work with a surrogate key instead of MaLo ID, meter number or name. The mapping table is kept separately with restricted access. Production test data without pseudonymisation is a data protection breach, not a convenience." },
        { title: "Logging", text: "Every access to consumption data is logged with user, time and purpose. The logs are personal data themselves and need their own deletion period." },
        { title: "Deletion concept", text: "One period per data type: load curves after billing and the objection period, grid status data immediately after fulfilment of purpose, billing documents after the tax retention periods. The period belongs on the record as an attribute so that it takes effect automatically." },
        { title: "Consent management", text: "Every consent for value-added services is stored with time, text and scope and becomes technically effective on withdrawal – the data delivery to the service ends, not just the display." },
        { title: "Customer self-service access", text: "The [[endkundenportal|self-service portal]] offers export of one's own data as a standard function. That satisfies Art. 15 GDPR and takes the most laborious manual case off customer service." },
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "An aggregation principle helps in doubt: whatever suffices for the purpose is reduced to that level. A sales dashboard needs monthly totals, not a quarter-hour grid; a forecast needs load curves but no names. Data minimisation is thus less a legal principle than an architecture decision – and it makes the data protection impact assessment considerably shorter.",
    },
    {
      t: "note",
      kind: "info",
      text: "Supervision lies with the state data protection authorities, and for market communication and metering point operation additionally with the Bundesnetzagentur (the federal regulator). The Datenschutzkonferenz (DSK) of the supervisory authorities publishes guidance, among other things on processing on behalf, data protection impact assessments and the requirements for smart metering.",
    },
  ],

  mieterstrom: [
    {
      t: "lead",
      text: "Homeowners consume their own solar power and save grid fees, levies and taxes. Tenants could not do that for a long time – the installation belongs to the landlord, and the electricity would be a supply with all the obligations of an energy supplier. **Mieterstrom** (tenant electricity) and **gemeinschaftliche Gebäudeversorgung** (shared building supply) are two answers of the legislator to that problem.",
    },
    { t: "h", level: 2, text: "Why it works economically" },
    {
      t: "p",
      text: "Electricity that never touches the public grid incurs no [[netzentgelte|grid fees]], no grid-side levies and no [[konzessionsabgabe|Konzessionsabgabe]]. For installations up to 2 MW in spatial proximity the [[stromsteuer|electricity tax]] also falls away. Roughly half of the household electricity price consists of exactly these components – that is the margin from which operator and residents draw their advantage. What remains is the residual electricity from the grid when the sun is not shining.",
    },
    { t: "h", level: 2, text: "Model 1: Mieterstrom with bonus (§ 21 (3) EEG, § 42a EnWG)" },
    {
      t: "p",
      text: "The classic model since 2017. The installation operator – landlord, energy service provider or cooperative – supplies the solar power to the residents **and** procures the residual electricity. It is thereby an electricity supplier with all the obligations: [[energieliefervertrag|supply contract]], [[jahresabrechnung|invoice under § 40 EnWG]], [[stromkennzeichnung|electricity labelling]], balancing group. In return, the grid operator pays it the **Mieterstromzuschlag** (tenant electricity bonus) for every solar kilowatt-hour delivered to final consumers.",
    },
    {
      t: "table",
      head: ["Requirement", "Rule"],
      rows: [
        ["Installation", "[[photovoltaik|PV system]] up to 100 kW on, at or in a residential building or an ancillary structure; at least 40 % of the building's floor area used for housing"],
        ["Supply", "To final consumers in the same building or in residential buildings and ancillary structures in the **same neighbourhood** (Quartier), without transit through the public grid"],
        ["Contract (§ 42a EnWG)", "May **not** be part of the tenancy agreement; a resident can decline or terminate it without losing the flat"],
        ["Term", "At most one year, tacit extension permitted"],
        ["Price", "At most **90 %** of the [[grundversorgung|basic supply tariff]] applicable in the grid area – for the total electricity including residual supply"],
        ["Bonus", "A few cents per kWh, staggered by installation size and degressive; the current rates are published by the Bundesnetzagentur"],
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "The 90 % cap refers to the total price the resident pays – standing charge and unit rate across solar and residual electricity. If the basic supply tariff rises, the Mieterstrom price may follow; if it falls, the operator has to follow suit. A price adjustment logic that does not know the basic supply tariff of the grid area cannot bill Mieterstrom.",
    },
    { t: "h", level: 2, text: "Model 2: shared building supply (§ 42b EnWG)" },
    {
      t: "p",
      text: "Introduced with **Solarpaket I** in May 2024. The basic idea: the operator distributes the solar power among the participants but is **not a supplier** – every resident keeps their own electricity supplier for the residual electricity. This removes the supplier obligations that make the classic Mieterstrom model so burdensome for small landlords.",
    },
    {
      t: "dl",
      items: [
        { term: "Gebäudestromnutzungsvertrag (building electricity use contract)", def: "Governs between operator and participant the offtake of the solar power, the price and the allocation key. The operator owes no full supply." },
        { term: "Allocation key (Aufteilungsschlüssel)", def: "**Static**: fixed percentage shares per participant, independent of consumption. **Dynamic**: the quantity generated is distributed each quarter hour in proportion to actual consumption. The dynamic key is more accurate and uses more solar power on site, but requires quarter-hour values from all participants." },
        { term: "Metering", def: "The precondition is an [[intelligentes-messsystem|intelligent metering system]] at every participating market location and at the generating installation, because the allocation is done per quarter hour." },
        { term: "Residual electricity", def: "Supplied by each participant's own supplier – based on the consumption left after deducting the allocated solar power. The allocation is transmitted to grid operator and suppliers via [[marktkommunikation|market communication]]." },
        { term: "Mieterstromzuschlag", def: "There is **none** for shared building supply. The economic advantage lies solely in the grid fees, levies and taxes that fall away." },
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "For the resident's supplier, shared building supply is a new case: its market location suddenly draws less from the grid than the customer consumes, and the difference comes from another market location in the same building. Billing is based on grid offtake after allocation – whoever bills gross consumption instead invoices solar power it never supplied.",
    },
    { t: "h", level: 2, text: "Comparison" },
    {
      t: "table",
      head: ["", "Mieterstrom (EEG / § 42a EnWG)", "Shared building supply (§ 42b EnWG)"],
      rows: [
        ["Operator is a supplier", "Yes, with a full-supply obligation", "No"],
        ["Residual electricity", "Procured by the operator", "Each participant via their own supplier"],
        ["Mieterstromzuschlag", "Yes", "No"],
        ["Price cap", "90 % of the basic supply tariff", "Freely negotiable"],
        ["Metering", "Summation meter or sub-meter concept, iMSys not mandatory", "iMSys at all participants, quarter-hourly"],
        ["Effort for the operator", "High – an energy supplier in miniature", "Low – allocation and billing of the solar power"],
      ],
    },
    { t: "h", level: 2, text: "Kundenanlage – and what the ECJ said about it" },
    {
      t: "p",
      text: "Both models presuppose that the electricity does not use the **public grid**. Under German law the wiring inside the building counts as a **Kundenanlage** (customer installation, § 3 no. 24a [[enwg|EnWG]]): energy installations on a spatially coherent area that are insignificant for competition and open to every supplier without discrimination. A Kundenanlage is not a grid and its operator is not a grid operator – no regulation, no grid fees.",
    },
    {
      t: "note",
      kind: "law",
      text: "On 28 November 2024 (C-293/23) the European Court of Justice, on a referral from the Bundesgerichtshof, ruled that Union law leaves member states no room to exempt installations that are conceptually distribution systems from regulation wholesale. That calls the German Kundenanlage concept in its previous breadth into question. Which installations will still count as a Kundenanlage in future is the subject of further case law and of new legislation the legislator is working on. For Mieterstrom projects this means: the legal situation is in flux; existing installations keep running, and for new projects the classification of the building wiring belongs in the risk assessment.",
    },
    { t: "h", level: 2, text: "Metering concepts" },
    {
      t: "dl",
      items: [
        { term: "Summation meter model", def: "A bidirectional meter at the grid connection measures what the building as a whole draws and feeds in. Behind it, sub-meters record each flat's consumption and a generation meter the PV production. The solar share per flat is derived arithmetically. The standard model for classic Mieterstrom." },
        { term: "Sub-meter per participant", def: "Here the flat meters are no longer independent market locations but sub-measurements within the Kundenanlage. Residents who do not participate keep their own [[marktlokation|market location]] on the grid – their meter is netted out of the total." },
        { term: "Virtual summation meter", def: "Instead of a physical summation meter, the grid operator calculates the building balance from the quarter-hour values of all participating intelligent metering systems. That saves rebuilding the meter cabinet and is the model § 42b EnWG presupposes. Whether and how it is offered depends on the metering concept of the respective grid operator." },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Every metering concept has to be agreed with the [[netzbetreiber|grid operator]] before implementation; most publish standard metering concepts for Mieterstrom. A key point is the treatment of the generating installation: it gets a market location of its own for the feed-in of the surplus, see [[einspeiseverguetung|feed-in tariff]] and [[eigenverbrauch|self-consumption]].",
    },
    { t: "h", level: 2, text: "Billing" },
    {
      t: "steps",
      items: [
        { title: "Record generation and consumption", text: "PV generation, grid offtake at the summation meter, feed-in and consumption per participant – under § 42b quarter-hourly from the iMSys." },
        { title: "Allocate the solar power", text: "By allocation key per participant; the sum of allocations must not exceed the generation consumed on site. Whatever is not consumed is feed-in." },
        { title: "Determine the residual electricity", text: "Consumption minus allocated solar power per participant. Under Mieterstrom the operator bills it as well, under § 42b the respective supplier does." },
        { title: "Issue the invoice", text: "Mieterstrom: one invoice with a solar and a residual share, check the price cap, observe [[stromkennzeichnung|electricity labelling]]. § 42b: the operator bills only the solar power, the supplier the grid offtake." },
        { title: "Claim the bonus", text: "Mieterstrom only: the operator proves to the grid operator the solar kilowatt-hours delivered to final consumers and receives the Mieterstromzuschlag – together with the feed-in tariff for the surplus." },
      ],
    },
    {
      t: "example",
      title: "Mieterstrom, one month, three flats (simplified)",
      lines: [
        { label: "PV generation", value: "1,200 kWh" },
        { label: "Total consumption of the three flats", value: "900 kWh" },
        { label: "Of which covered simultaneously from PV (solar share)", value: "540 kWh" },
        { label: "Residual electricity from the grid", value: "360 kWh" },
        { label: "Feed-in of the surplus", value: "660 kWh" },
      ],
      result: { label: "Mieterstromzuschlag is paid for", value: "540 kWh" },
    },
    {
      t: "note",
      kind: "warn",
      text: "The solar share is not “generation minus feed-in” divided by the number of flats. It is the quantity generated and consumed **at the same time**, and it has to be attributed per flat by the agreed key. A monthly key that knows only totals overestimates the solar share of residents who are out during the day – and thereby underestimates their residual electricity.",
    },
  ],
};
