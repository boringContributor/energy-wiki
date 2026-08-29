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
        ["[[photovoltaik|PV system]]", "[[zaehlertypen|bidirectional meter]], usually two [[marktlokation|market locations]], [[einspeiseverguetung|feed-in tariff]]; from 2 kW, feed-in is capped at 60 % without an iMSys and control box, while mandatory iMSys installation only starts above 7 kW"],
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
      text: "**Solarspitzengesetz**: for new systems from 2 kW commissioned on or after 25 February 2025, feed-in is capped at **60 %** of installed capacity for as long as no [[intelligentes-messsystem|intelligent metering system]] with a control box is installed – once it is, the cap falls away. There is no installation obligation from 2 kW; mandatory installation under § 29 [[msbg|MsbG]] still starts above 7 kW. In addition, new systems receive no tariff in quarter hours with negative exchange prices; that time is appended to the end of the 20-year remuneration period. Existing systems are not affected.",
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
        { term: "Schuko plug", def: "Connecting through an ordinary earthed household socket is permitted: the VDE product standard for plug-in solar devices and VDE-AR-N 4105 accept the Schuko plug, so a special energy socket is no longer a prerequisite." },
        { term: "Tenants and owners' associations", def: "Since 2024 a plug-in solar device counts as a **privilegierte Maßnahme** (privileged alteration): tenants are entitled to permission under § 554 BGB, and in a WEG a simple majority resolution on the how is enough under § 20 WEG – the association can no longer refuse the whether." },
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
        "Rates fall in steps for larger roof systems – to 6.67 and 10.23 ct/kWh up to 40 kW, and 5.44 and 10.23 ct/kWh up to 100 kW (for the share of the system in each band).",
    },
    {
      t: "table",
      head: ["Commissioned", "Surplus (up to 10 kW)", "Full feed-in (up to 10 kW)"],
      align: ["l", "r", "r"],
      rows: [
        ["Feb – Jul 2025", "7.94 ct/kWh", "12.60 ct/kWh"],
        ["Aug 2025 – Jan 2026", "7.86 ct/kWh", "12.47 ct/kWh"],
        ["Feb – Jul 2026", "7.78 ct/kWh", "12.35 ct/kWh"],
        ["from Aug 2026", "7.70 ct/kWh", "12.22 ct/kWh"],
      ],
      caption: "Each step is one percent below the previous one; the Bundesnetzagentur publishes the values to two decimal places, so a deviation in the last digit from your own calculation is normal.",
    },
    {
      t: "note",
      kind: "tip",
      text: "Full feed-in only pays off where hardly any power is used on site – on a barn, say. As soon as a household is attached, [[photovoltaik|self-consumption]] clearly beats the higher rate: 37 ct saved outweighs 12 ct earned.",
    },
    { t: "h", level: 2, text: "Degression" },
    {
      t: "p",
      text: "Since 2024 the rate falls **by one percent every six months** rather than monthly – the steps take effect on **1 February** and **1 August**. What counts is the rate on the day of commissioning; one reason why installation dates at the end of January and the end of July regularly become a point of contention.",
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
      text: "Heat pumps above 4.2 kW fall under [[paragraf-14a-enwg|§ 14a EnWG]]: the grid operator may curtail them to 4.2 kW in an emergency, and in exchange the [[netzentgelte|grid fees]] are reduced – either as **Modul 1** (a flat reduction), **Modul 2** (a percentage reduction of the Arbeitspreis, the unit rate, which requires a separate metering point) or, since 1 April 2025, additionally **Modul 3** (a time-variable grid fee, only in combination with Modul 1). With a separate meter, heat pump tariffs in 2026 run at roughly 21 to 26 ct/kWh instead of the 33 to 40 ct/kWh of a household tariff.",
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
        "A **KWK-Zuschlag** (CHP bonus) under the KWKG for every kilowatt-hour **fed in**, staggered by capacity; for self-consumed power it is only paid to small units up to 100 kW, and at a reduced rate",
        "The usual power price for electricity fed in; **vermiedene Netznutzungsentgelte** (avoided grid usage fees) now go only to existing units – for units commissioned from 2023 they were abolished under § 18 StromNEV",
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
      text: "As a controllable device above 4.2 kW, a wallbox falls under [[paragraf-14a-enwg|§ 14a EnWG]]. The grid operator may curtail it to 4.2 kW during congestion – enough for around 20 kilometres of range per hour. In exchange the [[netzentgelte|grid fees]] are reduced in three modules: **Modul 1** is a flat reduction of the grid fee, **Modul 2** a percentage reduction of the Arbeitspreis (unit rate) via a separate metering point, and since 1 April 2025 **Modul 3** – a time-variable grid fee with cheap time windows – can be chosen on top of Modul 1.",
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
        "The **operator** itself, as a market actor in its own right – registering the person or company is a separate step before registering the unit",
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
    {
      t: "table",
      head: ["Prefix", "Object"],
      rows: [
        ["`SEE`", "Electricity generating unit, such as a PV system or a CHP unit"],
        ["`SGE`", "Gas generating unit"],
        ["`SSE`", "Electricity storage unit, i.e. a [[batteriespeicher|home battery]]"],
        ["`ABR`", "Anlagenbetreiber – the operator, a person or company rather than the unit"],
      ],
      caption: "Structure of the MaStR number: a three-letter prefix followed by twelve digits.",
    },
    {
      t: "p",
      text: "For connecting your own systems, the register offers a **full data export** as a CSV/XML download and a public web interface. That lets installation data captured during onboarding be checked automatically against the official entry instead of being retyped.",
    },
  ],

  netzanschluss: [
    {
      t: "lead",
      text: "Before a meter hangs, a tariff applies or a PV system feeds in, there has to be a grid connection. It is a legal relationship in its own right, with its own contracting parties, its own costs and – for generating installations – its own registration process with statutory deadlines.",
    },
    { t: "h", level: 2, text: "Two legal relationships, two people" },
    {
      t: "p",
      text: "The **Niederspannungsanschlussverordnung (NAV)**, the low-voltage connection ordinance, separates the connection itself from its use. That is why, in a rented building, the owner and the tenant have different contracts with the [[netzbetreiber|grid operator]] – without either of them ever having signed one.",
    },
    {
      t: "table",
      head: ["", "Netzanschlussverhältnis (connection relationship)", "Anschlussnutzungsverhältnis (connection-use relationship)"],
      rows: [
        ["Contracting party", "**Anschlussnehmer** (connection owner) – normally the property owner", "**Anschlussnutzer** (connection user) – whoever actually uses the connection to draw power, so the tenant too"],
        ["Subject matter", "Construction, operation, modification and maintenance of the house connection", "The right to draw electricity through the connection, or to feed in"],
        ["How it arises", "Grid connection contract, usually with the building application", "Implicitly, by drawing power (§ 3 NAV)"],
        ["Costs", "House connection costs and Baukostenzuschuss", "None of its own – grid fees flow through the supplier"],
        ["End", "Dismantling or change of owner", "Moving out"],
      ],
    },
    {
      t: "p",
      text: "The connection user is also the contracting party of the [[messstellenbetrieb|metering point operator]] and the person the [[energieliefervertrag|supply contract]] addresses – see [[letztverbraucher|customer types]].",
    },
    { t: "h", level: 2, text: "What the connection costs" },
    {
      t: "dl",
      items: [
        { term: "House connection costs (§ 9 NAV)", def: "The actual cost of building or modifying the connection from the street main to the house connection box. The grid operator may charge them – by effort or as a flat rate." },
        { term: "Baukostenzuschuss (§ 11 NAV)", def: "A construction cost contribution towards the upstream grid, sized by the capacity reserved. For standard house connections up to 30 kW of demand many grid operators charge no BKZ; above that it becomes relevant, e.g. heat pump plus wallbox, or commercial sites." },
        { term: "Netzverträglichkeitsprüfung", def: "Before consenting, the grid operator checks whether the line and the local substation can carry the additional load or feed-in. For generating installations this grid compatibility check is the core of the answer to the connection request; it may result in a different connection point or in grid reinforcement." },
      ],
    },
    { t: "h", level: 2, text: "Generating installations: the connection request under § 8 EEG" },
    {
      t: "p",
      text: "For [[photovoltaik|PV systems]], [[bhkw|CHP units]] and other EEG installations the operator has a **right to be connected**: the grid operator must connect the installation without delay and with priority at the point that is most favourable by voltage level and distance (§ 8 Abs. 1 EEG). In practice the process runs through the distribution grid operator's portal.",
    },
    {
      t: "steps",
      items: [
        { title: "Submit the connection request", text: "The installer or operator submits location, capacity, inverter and battery data and the desired metering concept – usually in the DSO portal." },
        { title: "Grid operator's reply", text: "It must send the applicant a schedule for processing **without delay, and at the latest eight weeks** after receipt, and provide the necessary information (§ 8 Abs. 5 and 6 EEG). The result is the connection consent with the connection point." },
        { title: "Installation and commissioning", text: "An electrical contractor entered in the grid operator's **Installateurverzeichnis** (installer register, § 13 NAV) builds the installation, commissions it and produces the **Inbetriebsetzungsprotokoll** (commissioning report) under VDE-AR-N 4105." },
        { title: "Meter installation", text: "The metering point operator swaps to a [[zaehlertypen|bidirectional meter]]; from 7 kW an [[intelligentes-messsystem|intelligent metering system]] is mandatory." },
        { title: "Registration in the MaStR", text: "Within one month of commissioning in the [[marktstammdatenregister|Marktstammdatenregister]] – no entry, no [[einspeiseverguetung|feed-in tariff]]." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "**Deemed consent for small installations**: if the grid operator does not respond to a complete connection request for an installation up to **30 kW** within **one month**, the connection at the connection point of the existing house connection is deemed granted (§ 8 Abs. 5 EEG as amended by Solarpaket I, since May 2024; previously the rule applied to installations up to 10.8 kW). For [[balkonkraftwerk|plug-in solar devices]] registration with the grid operator is dropped entirely.",
    },
    { t: "h", level: 2, text: "Where processes stall" },
    {
      t: "ul",
      items: [
        "**Incomplete applications**: the one-month period only starts with a complete request – every missing data sheet resets it",
        "**Grid reinforcement needed**: then the connection slips by months; the operator is entitled to information on scope and schedule",
        "**Connection owner is not the operator**: for a tenant with PV or for [[mieterstrom|Mieterstrom]] the owner has to consent to the modification of the grid connection",
        "**Portal diversity**: around 850 distribution grid operators with their own portals and forms; uniform interfaces are only emerging step by step",
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "Anyone selling installations or onboarding installers should run the connection process as a **state object** with the milestones request submitted → consent → commissioning → meter installed → MaStR registered. The commissioning date from the report determines the remuneration rate and the MaStR deadline – it belongs in the data model as its own field, separate from the installation date and the meter installation date.",
    },
  ],

  eigenverbrauch: [
    {
      t: "lead",
      text: "Every kilowatt-hour consumed on site replaces one that would otherwise have come from the grid at the full retail price. That is why it is not the size of the installation that decides the economics, but the share of the output that stays in the house.",
    },
    { t: "h", level: 2, text: "The legal term: Eigenversorgung" },
    {
      t: "p",
      text: "**Eigenversorgung** (self-supply) under § 3 Nr. 19 EEG is the consumption of electricity that a person generates **themselves** in an installation they **operate themselves**, in **direct spatial proximity** and **without passing through a grid**. All four elements must coincide. If one is missing – for instance because the operator of the installation is not the consumer – it is a supply to third parties, as with [[mieterstrom|Mieterstrom]].",
    },
    {
      t: "table",
      head: ["Charge", "On self-consumption", "Basis"],
      rows: [
        ["[[eeg-umlage|EEG levy]]", "does not apply – the levy was set to zero on 1 July 2022 and abolished at the start of 2023; the earlier reduced rate for self-suppliers is history too", "EnFG"],
        ["[[stromsteuer|Electricity tax]]", "exempt for installations up to **2 MW** where the electricity is consumed in spatial proximity by the operator", "§ 9 Abs. 1 Nr. 3 StromStG"],
        ["[[netzentgelte|Grid fees]], [[konzessionsabgabe|Konzessionsabgabe]], other levies", "not incurred – they attach to grid withdrawal", "—"],
        ["[[umsatzsteuer-energie|VAT]]", "practically irrelevant for small installations since the zero rate of 2023", "§ 12 Abs. 3 UStG"],
      ],
    },
    { t: "h", level: 2, text: "Surplus or full feed-in" },
    {
      t: "p",
      text: "Anyone feeding in chooses between two models with different remuneration rates – the current figures are in the article [[einspeiseverguetung|Feed-in tariff]]. The choice applies for a calendar year and can be changed for the following year by notifying the grid operator before 1 December.",
    },
    {
      t: "dl",
      items: [
        { term: "Überschusseinspeisung (surplus feed-in)", def: "The power first flows to the consumers in the house; only what is left goes to the grid. The standard for residential buildings." },
        { term: "Volleinspeisung (full feed-in)", def: "The entire output goes to the grid and the household continues to draw everything from the grid. A higher rate, but no self-consumption – only worthwhile without significant consumption on site." },
      ],
    },
    { t: "h", level: 2, text: "Metering concepts" },
    {
      t: "table",
      head: ["Concept", "Meters", "When"],
      rows: [
        ["Surplus feed-in, simple", "one [[zaehlertypen|bidirectional meter]] at the grid connection (import 1.8.0, export 2.8.0)", "Standard case for a detached house; self-consumption is not metered but derived as generation minus feed-in"],
        ["with generation meter", "an additional meter directly behind the inverter", "when generation has to be evidenced – for the [[kwk-umlage|KWK bonus]], Mieterstrom, electricity tax evidence, or several installations with different rates"],
        ["Full feed-in", "a dedicated feed-in meter for the installation, separate import meter", "when no self-consumption is intended"],
        ["Kaskade (cascade)", "meters in series: a summation meter at the grid connection, sub-meters per user or installation", "Apartment buildings, commercial sites with sub-tenants, Mieterstrom"],
      ],
      caption: "The grid operator fixes the metering concept as part of the connection request ([[netzanschluss|grid connection]]); the [[marktlokation|Marktlokationen]] for import and export follow from it.",
    },
    { t: "h", level: 2, text: "Two ratios that are often confused" },
    {
      t: "formula",
      expr: "Self-consumption ratio = self-consumption / generation · 100 %   ·   Self-sufficiency = self-consumption / total consumption · 100 %",
      where: [
        { sym: "Self-consumption ratio (Eigenverbrauchsquote)", desc: "What share of the **generated** electricity stays in the house – the installation's view" },
        { sym: "Self-sufficiency (Autarkiegrad)", desc: "What share of the **consumed** electricity comes from the own installation – the household's view" },
      ],
    },
    {
      t: "example",
      title: "10 kWp on a detached house",
      lines: [
        { label: "Generation", value: "9,500 kWh a year" },
        { label: "Total consumption", value: "4,500 kWh a year" },
        { label: "Self-consumption ratio", value: "30 % → 2,850 kWh consumed on site" },
        { label: "Feed-in", value: "9,500 − 2,850 = 6,650 kWh" },
        { label: "Grid import", value: "4,500 − 2,850 = 1,650 kWh" },
        { label: "Self-sufficiency", value: "2,850 / 4,500 = 63 %" },
      ],
      result: { label: "Savings + revenue", value: "2,850 kWh × 37 ct = €1,054.50 saved, 6,650 kWh × 7.7 ct = €512.05 feed-in remuneration" },
    },
    {
      t: "note",
      kind: "info",
      text: "Without a battery the self-consumption ratio in a home is 25 to 35 %, because generation peaks at midday and consumption in the evening. A [[batteriespeicher|battery]], a [[waermepumpe|heat pump]] or a [[wallbox|wallbox]] with [[energiemanagement|energy management]] lift it to 55 to 70 %. Self-sufficiency is always the number quoted in the sales pitch – the self-consumption ratio is the one that drives the economics.",
    },
    { t: "h", level: 2, text: "Economics: the rule of thumb" },
    {
      t: "p",
      text: "A kilowatt-hour consumed on site saves the retail price of roughly **35 to 40 ct/kWh**; one fed in earns roughly **8 ct/kWh**. A kilowatt-hour of self-consumption is therefore worth about **four and a half to five times** as much as one fed in. Every measure that shifts consumption into the generating hours consequently earns more than any additional module.",
    },
    { t: "h", level: 2, text: "Direct marketing" },
    {
      t: "p",
      text: "From **100 kW** of installed capacity the electricity fed in must be sold through **Direktvermarktung** (direct marketing): a direct marketer sells it on the exchange, and the operator receives the **Marktprämie** (market premium) as the difference between the applicable value and the monthly market value. This changes nothing about self-consumption – it remains free of levies and is not marketed. For commercial sites with a large roof, the combination of high self-consumption and direct marketing of the remainder is the norm; see [[grosshandel-beschaffung|wholesale and procurement]].",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For billing systems, self-consumption is a **quantity that is not metered** but calculated: generation minus feed-in, or in cascades from the difference between several meters. Anyone displaying or remunerating self-consumption therefore needs both the generation values from the inverter or generation meter and the grid values from the bidirectional meter – and must expect discrepancies between the two sources.",
    },
  ],
};
