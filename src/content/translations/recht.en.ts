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
        ["§ 12", "Billing and the billing period"],
        ["§ 13", "[[abschlagszahlung|Instalment payments]]"],
        ["§ 14", "Invoices and instalments, payment"],
        ["§ 17", "Objections to invoices"],
        ["§ 19", "[[zahlung-und-mahnwesen|Interruption of supply]]"],
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
        { value: "0.50 ct", label: "per kWh", hint: "reduced rate for manufacturing industry" },
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
        "A reduced rate for manufacturing industry and for agriculture and forestry",
      ],
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
        ["Module 3", "Additionally a time-variable grid fee – cheap in off-peak periods", "An [[intelligentes-messsystem|intelligent metering system]]; selectable from 2025"],
      ],
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
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "Commercial customers see net prices, household customers see gross prices. Comparing across the two without converting always goes wrong – a classic in quoting flows that serve both customer groups.",
    },
  ],
};
