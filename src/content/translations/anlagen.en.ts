import type { Block } from "../types";

export const anlagenEn: Record<string, Block[]> = {
  erzeugungsanlagen: [
    {
      t: "lead",
      text: "For twenty years the household was a simple case: one meter, one direction, one tariff. Today that same household generates electricity, stores it, heats with it and charges a car. Every one of those devices has consequences for the contract, the metering concept and the billing.",
    },
    { t: "figure", id: "anlagen-uebersicht" },
    { t: "h", level: 2, text: "What changes for the utility" },
    {
      t: "table",
      head: ["Device", "Consequence for meter and contract"],
      rows: [
        ["[[photovoltaik|PV system]]", "[[zaehlertypen|bidirectional meter]], usually two [[marktlokation|market locations]], [[einspeiseverguetung|feed-in tariff]], and from 2 kW an iMSys plus control box"],
        ["[[waermepumpe|Heat pump]]", "above 4.2 kW it falls under [[paragraf-14a-enwg|§ 14a EnWG]]; its own heating-power tariff, often a second register"],
        ["[[batteriespeicher|Home battery]]", "shifts consumption into other hours and changes the [[lastprofil|load profile]]"],
        ["[[wallbox|Wallbox]]", "above 4.2 kW § 14a applies; registration with the grid operator, approval required above 12 kW"],
        ["[[bhkw|CHP unit]]", "generation and heat at once, a [[kwk-umlage|KWKG]] bonus, and questions about electricity tax"],
      ],
    },
    {
      t: "note",
      kind: "tip",
      text: "Rule of thumb for product decisions: **anything above 4.2 kW, and anything that feeds in, changes the metering concept.** Whoever sells one of these devices is always also selling a meter exchange and usually a new tariff.",
    },
    { t: "h", level: 2, text: "The common denominator: registration" },
    {
      t: "p",
      text: "Nearly all of these devices have to be reported twice – to the [[netzbetreiber|grid operator]] (technically, usually by the installer) and in the [[marktstammdatenregister|Marktstammdatenregister]] run by the federal regulator (administratively, by the operator). Miss either one and there is no remuneration, and in the extreme case a fine.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For onboarding flows this is a real opportunity: capturing the device data cleanly at contract time – capacity, commissioning date, MaStR number, metering concept – saves a whole chain of follow-up questions later between customer, installer and grid operator.",
    },
  ],

  photovoltaik: [
    {
      t: "lead",
      text: "A PV system is measured in **kilowatt peak (kWp)** – its output under standard test conditions. In Germany one kWp yields 850 to 1,050 kWh a year depending on orientation. A typical system on a detached house is 8 to 12 kWp.",
    },
    { t: "figure", id: "pv-rechner" },
    { t: "h", level: 2, text: "Self-consumption beats feed-in" },
    {
      t: "p",
      text: "Power used on site saves the full retail price of around 37 ct/kWh. Power fed into the grid earns 7.70 ct/kWh in [[einspeiseverguetung|feed-in tariff]]. A self-consumed kilowatt-hour is therefore worth almost five times an exported one – which explains why [[batteriespeicher|batteries]], [[waermepumpe|heat pumps]] and [[wallbox|wallboxes]] are so often sold alongside PV.",
    },
    {
      t: "stats",
      items: [
        { value: "25–35 %", label: "Self-consumption without a battery" },
        { value: "55–70 %", label: "Self-consumption with a battery" },
        { value: "20 years", label: "Tariff guaranteed", hint: "from commissioning" },
      ],
    },
    { t: "h", level: 2, text: "What has applied since February 2025" },
    {
      t: "note",
      kind: "law",
      text: "**Solarspitzengesetz**: new systems from 2 kW commissioned on or after 25 February 2025 need an [[intelligentes-messsystem|intelligent metering system]] and a control box. Without both, feed-in capacity is capped at **60 %**. During hours with negative exchange prices the feed-in tariff is not paid; that time is added to the end of the 20 years in quarter-hour increments. Existing systems are not affected.",
    },
    { t: "h", level: 2, text: "Meters and market locations" },
    {
      t: "ul",
      items: [
        "A [[zaehlertypen|bidirectional meter]] records consumption (OBIS 1.8.0) and feed-in (2.8.0) separately",
        "There are usually **two [[marktlokation|market locations]]**: one for withdrawal, one for feed-in",
        "The old meter has to be replaced – Ferraris meters running backwards are not permitted",
        "Above 7 kW of installed capacity, an iMSys is a mandatory installation case under the [[msbg|MsbG]]",
      ],
    },
    { t: "h", level: 2, text: "Tax" },
    {
      t: "p",
      text: "Since 2023, systems up to 30 kWp on single-family homes carry a **zero rate** of [[umsatzsteuer-energie|VAT]] on purchase and installation, and the income is exempt from income tax. That has simplified acquisition considerably – the operator no longer has to register as a business.",
    },
  ],

  balkonkraftwerk: [
    {
      t: "lead",
      text: "The plug-in solar device is the entry point to generating your own power: two modules on a balcony or a garage roof, an inverter, a plug into the socket. It mostly covers the base load – fridge, router, standby.",
    },
    { t: "h", level: 2, text: "The rules" },
    {
      t: "dl",
      items: [
        { term: "800 watt inverter", def: "Since the Solarpaket I (16 May 2024) the feed-in capacity may be 800 W instead of the previous 600 W." },
        { term: "2,000 Wp of modules", def: "Installed module capacity may be up to 2,000 Wp, as long as the inverter is limited to 800 W." },
        { term: "MaStR only", def: "Registration with the [[netzbetreiber|grid operator]] is no longer required. Registering in the [[marktstammdatenregister|Marktstammdatenregister]] within one month of commissioning is enough – a handful of fields, around 15 minutes." },
        { term: "Meter", def: "A meter running backwards is tolerated on a transitional basis until the grid operator replaces it. After that a [[zaehlertypen|bidirectional meter]] counts." },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "A plug-in system generally receives **no feed-in tariff**. Surplus goes into the grid unpaid. It only pays off through self-consumption – realistically 200 to 500 kWh a year, so roughly €75 to €185 saved.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For utilities, plug-in solar is a frequent trigger for service enquiries: the customer reports a lower meter reading than expected, or is puzzled by a meter-exchange notice. A short explanatory note in the [[endkundenportal|portal]] absorbs most of that.",
    },
  ],

  einspeiseverguetung: [
    {
      t: "lead",
      text: "Anyone operating a [[photovoltaik|PV system]] is entitled to a fixed payment for every kilowatt-hour fed into the grid. The rate applies for **20 years plus the year of commissioning** and does not change afterwards.",
    },
    { t: "h", level: 2, text: "Two models" },
    {
      t: "table",
      head: ["Model", "What happens", "Rate from August 2026 (up to 10 kW)"],
      align: ["l", "l", "r"],
      rows: [
        ["Surplus feed-in", "Self-consumption first, only the remainder goes to the grid", "7.70 ct/kWh"],
        ["Full feed-in", "The entire output goes to the grid, no self-consumption", "12.22 ct/kWh"],
      ],
      caption:
        "Rates fall in steps for larger roof systems – to 6.66 and 10.24 ct/kWh up to 40 kW, and 5.44 and 10.24 ct/kWh up to 100 kW.",
    },
    {
      t: "note",
      kind: "tip",
      text: "Full feed-in only pays off where hardly any power is used on site – on a barn, say. As soon as a household is attached, [[photovoltaik|self-consumption]] clearly beats the higher rate: 37 ct saved outweighs 12 ct earned.",
    },
    { t: "h", level: 2, text: "Degression" },
    {
      t: "p",
      text: "Since 2024 the rate falls **by one percent every six months** rather than monthly. What counts is the rate on the day of commissioning – one reason why installation dates at the end of a month regularly become a point of contention.",
    },
    { t: "h", level: 2, text: "When the power is worth nothing" },
    {
      t: "note",
      kind: "law",
      text: "For systems commissioned on or after 25 February 2025: in quarter hours with a **negative exchange price**, no tariff is paid. The lost time is appended to the end of the 20 years. That is the core of the Solarspitzengesetz – it is meant to stop power being pushed into the grid at midday that nobody needs.",
    },
    { t: "h", level: 2, text: "Direct marketing" },
    {
      t: "p",
      text: "From 100 kW of installed capacity, **direct marketing** is mandatory: the power is sold on the exchange through a service provider and the operator receives the difference to the applicable value as a **market premium**. Smaller systems may switch voluntarily – which becomes interesting as soon as exchange prices exceed the fixed tariff.",
    },
  ],

  batteriespeicher: [
    {
      t: "lead",
      text: "A PV system produces most when nobody is home. A battery solves that timing problem: it absorbs the midday surplus and releases it again in the evening.",
    },
    { t: "h", level: 2, text: "Sizing" },
    {
      t: "ul",
      items: [
        "Rule of thumb: **about 1 kWh of usable capacity per 1 kWp** of system size",
        "Typical in a detached house: 5 to 10 kWh",
        "Bigger is rarely better – the extra kilowatt-hours are only needed on a handful of days a year",
        "Round-trip efficiency is around 90 %, so roughly 10 % is lost",
      ],
    },
    { t: "figure", id: "pv-rechner" },
    { t: "h", level: 2, text: "What else a battery can do" },
    {
      t: "cards",
      items: [
        { title: "Backup power", text: "Only if it is explicitly backup-capable – most batteries shut down on a grid outage for safety reasons." },
        { title: "Dynamic tariffs", text: "With a [[dynamischer-tarif|dynamic tariff]] the battery can charge from the grid in cheap hours, not only from the PV system." },
        { title: "§ 14a EnWG", text: "As a controllable device above 4.2 kW it falls under [[paragraf-14a-enwg|§ 14a]] – with reduced grid fees." },
        { title: "Grid services", text: "Larger batteries can take part in balancing markets, usually pooled through an aggregator." },
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "A battery rarely pays for itself on electricity savings alone. It sells on independence and comfort – and becomes economic once it also supplies a heat pump or a wallbox.",
    },
  ],

  waermepumpe: [
    {
      t: "lead",
      text: "A heat pump does not create heat, it **moves** it – from outside to inside, against the natural temperature gradient. The drive energy for that is electricity, and the ratio of heat gained to electricity spent is the number that decides everything.",
    },
    { t: "h", level: 2, text: "JAZ and COP" },
    {
      t: "dl",
      items: [
        { term: "COP (coefficient of performance)", def: "The instantaneous value on the test bench, at defined temperatures. Marketing-friendly, but says little about everyday operation." },
        { term: "JAZ (Jahresarbeitszahl, seasonal performance factor)", def: "The real ratio across a whole year, including cold days, defrost cycles and the immersion heater. This is the number that counts." },
      ],
    },
    {
      t: "formula",
      expr: "JAZ  =  Heat delivered [kWh]  ÷  Electricity consumed [kWh]",
      where: [
        { sym: "JAZ 3.5", desc: "1 kWh of electricity becomes 3.5 kWh of heat – 71 % comes free from the environment" },
        { sym: "Typical", desc: "3.2–3.8 for air-to-water, 4.0–4.5 for brine-to-water" },
      ],
    },
    { t: "figure", id: "waermepumpe-rechner" },
    { t: "h", level: 2, text: "What efficiency depends on" },
    {
      t: "ul",
      items: [
        "**Flow temperature** – the biggest lever. Underfloor heating at 35 °C instead of radiators at 55 °C lifts the JAZ by roughly 1.0",
        "**Heat source** – see [[waermepumpen-typen|the types]]: ground beats outside air, especially in winter",
        "**Hydraulic balancing** and correct sizing – an oversized unit cycles and loses efficiency",
        "**The immersion heater** – every kilowatt-hour from the electric backup pushes the JAZ straight down",
      ],
    },
    { t: "h", level: 2, text: "Tariff and grid fee" },
    {
      t: "p",
      text: "Heat pumps above 4.2 kW fall under [[paragraf-14a-enwg|§ 14a EnWG]]: the grid operator may curtail them to 4.2 kW in an emergency, and in exchange the [[netzentgelte|grid fees]] are reduced. With a separate meter, heat pump tariffs in 2026 run at roughly 21 to 26 ct/kWh instead of the 33 to 40 ct/kWh of a household tariff.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "In sales, the JAZ is the number everything is later measured against – including customer satisfaction. An honest forecast based on the building and its flow temperature beats any brochure figure. Advertise a COP and have the customer check it against the JAZ later, and you have a problem.",
    },
  ],

  "waermepumpen-typen": [
    {
      t: "lead",
      text: "“Air-to-water”, “brine-to-water”, “air-to-air”: the naming scheme is always the same. The first part is the heat source, the second the medium the heat is delivered into. Efficiency, groundworks and permitting all follow from that.",
    },
    { t: "figure", id: "waermepumpen-typen" },
    {
      t: "note",
      kind: "info",
      text: "Subsidies come with minimum values: air-to-water heat pumps must reach a [[waermepumpe|JAZ]] of at least 3.0, brine-to-water and water-to-water at least 3.8.",
    },
    { t: "h", level: 2, text: "What decides it in practice" },
    {
      t: "ol",
      items: [
        "**The plot** – without land or drilling permission, air is the only available source",
        "**Noise** – air-source units stand outdoors and have to meet the TA Lärm noise limits, especially at night and on tight plot boundaries",
        "**The flow temperature** of the existing heating system – it decides more about efficiency than the type does",
        "**Hot water** – air-to-air systems do not produce any, so a second solution is needed",
      ],
    },
  ],

  heizungsarten: [
    {
      t: "lead",
      text: "Heating is the largest energy consumer in a building – and the point where energy policy becomes concrete for households. The rules changed fundamentally in 2026.",
    },
    { t: "figure", id: "heizungsvergleich" },
    { t: "h", level: 2, text: "What the Gebäudemodernisierungsgesetz changed" },
    {
      t: "note",
      kind: "law",
      text: "On **29 July 2026** the Gebäudemodernisierungsgesetz replaced the previous heating law. The requirement that every new heating system must immediately use **65 % renewable energy** has been dropped. Owners once again choose freely between heat pump, district heating, hybrid, biomass, gas and oil.",
    },
    {
      t: "p",
      text: "In place of the equipment requirement comes the **Bio-Treppe**, a biofuel staircase: from 2029 a growing share of bio content is blended into gas and oil, until all fuels must be climate-neutral by 2045. A separate green gas quota starting in 2028 is to be set out in legislation by December 2026.",
    },
    {
      t: "note",
      kind: "tip",
      text: "For advice this means the question is no longer “am I still allowed to install a gas boiler?” but “what will the fuel cost me in fifteen years?” – with a rising [[co2-preis|carbon price]] and a rising blending quota.",
    },
    { t: "h", level: 2, text: "Subsidies" },
    {
      t: "p",
      text: "Heating subsidies continue and are secured until at least 2029. Reformed conditions have applied since 21 July 2026: income-dependent bonuses (40 % below €30,000, 30 % up to €40,000, 10 % up to €50,000 of household income), a child supplement that deducts €10,000 from the assessed income, and lower cost caps – at most €28,000, falling by €750 every six months.",
    },
    { t: "h", level: 2, text: "The systems" },
    {
      t: "dl",
      items: [
        { term: "[[waermepumpe|Heat pump]]", def: "Highest efficiency, electricity as the energy carrier, subsidies and a reduced grid fee under [[paragraf-14a-enwg|§ 14a]]." },
        { term: "Condensing gas boiler", def: "Cheap to buy, around 92 % efficiency, but fuel costs carry the [[co2-preis|carbon price]] and a future blending obligation." },
        { term: "[[fernwaerme|District heating]]", def: "No plant of your own and no chimney – but no switching either, and indexation clauses." },
        { term: "Pellet boiler", def: "Close to carbon-neutral on a balance-sheet basis, but needs storage space and regular refilling." },
        { term: "Hybrid heating", def: "A heat pump plus a peak-load boiler. Covers cold days with gas and keeps the heat pump small." },
        { term: "[[solarthermie|Solar thermal]]", def: "Not a standalone system but a supplement for hot water and space heating support." },
      ],
    },
  ],

  solarthermie: [
    {
      t: "lead",
      text: "Solar thermal and [[photovoltaik|photovoltaics]] are constantly confused. The difference is fundamental: solar thermal produces **heat**, photovoltaics produces **electricity**. A solar thermal system feeds no grid; it heats a water tank.",
    },
    {
      t: "table",
      head: ["", "Solar thermal", "[[photovoltaik|Photovoltaics]]"],
      rows: [
        ["Produces", "heat", "electricity"],
        ["Efficiency per m²", "around 50–70 %", "around 20 %"],
        ["Usable for", "hot water, space heating support", "anything that needs electricity"],
        ["Surplus", "wasted once the tank is full", "goes to the grid, [[einspeiseverguetung|paid for]]"],
        ["Combines with", "a boiler or a heat pump", "a [[batteriespeicher|battery]], [[waermepumpe|heat pump]], [[wallbox|wallbox]]"],
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "Because PV electricity can also produce heat through a heat pump – and stays flexible while doing so – photovoltaics has largely displaced solar thermal in new builds. In existing buildings with a tank already in place it remains a sensible supplement.",
    },
    { t: "h", level: 2, text: "Types" },
    {
      t: "ul",
      items: [
        "**Flat plate collector** – cheap, robust, the standard for hot water",
        "**Evacuated tube collector** – higher yield at low irradiation and in winter, more expensive",
        "Typical sizing: around 1.5 m² per person for hot water, 0.8 to 1 m² per 10 m² of floor area for space heating support",
      ],
    },
  ],

  bhkw: [
    {
      t: "lead",
      text: "An engine burns gas, drives a generator and produces electricity. The waste heat is not dumped but used for heating. That dual use is the principle of [[kwk-umlage|combined heat and power]].",
    },
    { t: "h", level: 2, text: "Heat-led, not power-led" },
    {
      t: "p",
      text: "A CHP unit runs when heat is needed – the electricity is a by-product. So the decisive sizing figure is the heat load, not the electricity demand. An oversized unit reaches too few full-load hours and does not pay off.",
    },
    { t: "h", level: 2, text: "Remuneration" },
    {
      t: "ul",
      items: [
        "A **KWK bonus** under the KWKG for every kilowatt-hour generated, staggered by capacity",
        "**Avoided grid usage fees** and the usual power price for electricity fed in",
        "**Energy tax relief** on the gas used, under certain conditions",
        "Electricity used on site saves the full retail price – the strongest lever, as with [[photovoltaik|PV]]",
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "The **fuel cell** is the quiet, low-maintenance variant for a detached house: it produces electricity electrochemically rather than through an engine, with a higher electrical efficiency and less heat per kilowatt-hour of power.",
    },
    {
      t: "note",
      kind: "warn",
      text: "A CHP unit is demanding to bill: there is generation, self-consumption, feed-in, heat delivery and, depending on the setup, questions about [[stromsteuer|electricity tax]] and levy liability on self-consumed power. Modelling this cleanly from the start pays off.",
    },
  ],

  wallbox: [
    {
      t: "lead",
      text: "A wallbox is the largest single load a household ever adds. 11 kW is the connected load of five kettles running at once – which is why the [[netzbetreiber|grid operator]] takes an interest.",
    },
    { t: "h", level: 2, text: "Power classes" },
    {
      t: "table",
      head: ["Power", "Time for 50 kWh", "Formalities"],
      align: ["l", "l", "l"],
      rows: [
        ["2.3 kW (household socket)", "around 22 hours", "none, but not rated for continuous load"],
        ["11 kW (three-phase)", "around 4.5 hours", "registration with the grid operator"],
        ["22 kW", "around 2.5 hours", "approval by the grid operator"],
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "11 kW is the domestic standard because up to 12 kW only a registration is needed – above that it becomes subject to approval. For a car parked overnight it is more than sufficient anyway.",
    },
    { t: "h", level: 2, text: "§ 14a and tariffs" },
    {
      t: "p",
      text: "As a controllable device above 4.2 kW, a wallbox falls under [[paragraf-14a-enwg|§ 14a EnWG]]. The grid operator may curtail it to 4.2 kW during congestion – enough for around 20 kilometres of range per hour. In exchange the [[netzentgelte|grid fees]] are reduced, either as a flat deduction or as a lowered unit rate depending on the module chosen.",
    },
    {
      t: "note",
      kind: "tip",
      text: "The wallbox is the best reason to take a [[dynamischer-tarif|dynamic tariff]]: it is the one large load whose timing the customer genuinely does not care about. Charging at three in the morning often costs half of charging at six in the evening.",
    },
    { t: "h", level: 2, text: "The THG quota" },
    {
      t: "p",
      text: "Owners of a pure electric car can sell their avoided emissions as a **greenhouse gas reduction quota (THG-Quote)** to oil companies – usually through an intermediary, for a few dozen to a few hundred euros a year. For publicly accessible charge points, the energy delivered can be registered on top.",
    },
  ],

  energiemanagement: [
    {
      t: "lead",
      text: "Once a household has PV, a battery, a heat pump and a wallbox, four devices compete for the same electricity and the same house connection. An energy management system coordinates them.",
    },
    { t: "h", level: 2, text: "What it does" },
    {
      t: "ol",
      items: [
        "**Distribute the surplus** – PV power into the house first, then the [[batteriespeicher|battery]], then the car, and only last into the grid",
        "**Shift loads** – into cheap hours on a [[dynamischer-tarif|dynamic tariff]], into midday with PV",
        "**Protect the connection** – load management, so that wallbox and heat pump together do not trip the main fuse",
        "**Implement § 14a** – receive the grid operator's control signals and distribute them intelligently across the devices",
      ],
    },
    { t: "h", level: 2, text: "How it reaches the devices" },
    {
      t: "p",
      text: "The official route runs through the **HAN interface** of the [[intelligentes-messsystem|smart meter gateway]] and a control box. Alongside it there are vendor protocols, EEBus, and SG-Ready contacts on heat pumps. In practice the depth of integration is where products differ – not the user interface.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "An energy management system is the natural anchor for add-on products: it sees generation, consumption and prices in real time, and is therefore the place where a [[dynamischer-tarif|dynamic tariff]] first creates any value at all. Without automation the advantage of such tariffs stays largely theoretical.",
    },
  ],

  marktstammdatenregister: [
    {
      t: "lead",
      text: "The MaStR is the central database of every installation in the German energy system – from a 300-watt balcony panel to a nuclear power station. Without an entry there is no [[einspeiseverguetung|feed-in tariff]].",
    },
    { t: "h", level: 2, text: "What has to be registered" },
    {
      t: "ul",
      items: [
        "Every electricity generating installation, including [[balkonkraftwerk|plug-in solar devices]]",
        "Every [[batteriespeicher|home battery]]",
        "Deadline: **within one month** of commissioning",
        "Changes – extension, decommissioning, change of operator – also within one month",
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "Two registrations, not one: registering in the MaStR does **not** replace the technical registration with the [[netzbetreiber|grid operator]] – except for plug-in solar devices, where that step was dropped with the Solarpaket I. Conversely, registering with the grid operator never replaces the MaStR entry.",
    },
    { t: "h", level: 2, text: "Why this matters for systems" },
    {
      t: "p",
      text: "The **MaStR number** identifies an installation uniquely, much as the [[marktlokation|MaLo ID]] identifies a withdrawal point. It appears in remuneration processes and in data exchange, and therefore belongs in any data model that represents generating installations. The register is also publicly searchable – useful for plausibility checks.",
    },
  ],
};
