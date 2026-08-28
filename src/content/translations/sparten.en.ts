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
        ["L-gas (low)", "8.4–11.2 kWh/m³", "Netherlands, northern Germany", "market conversion largely complete"],
      ],
      caption:
        "L-gas contains more nitrogen and therefore less energy per cubic metre. Converting whole grid areas from L-gas to H-gas is largely finished.",
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
        { sym: "z", desc: "the [[zustandszahl|Zustandszahl]], correcting for pressure and temperature; typically 0.90–0.98" },
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
      result: { label: "Billing value", value: "16,144 kWh" },
    },
    {
      t: "note",
      kind: "law",
      text: "The conversion follows rules recognised under metrology law (DVGW code of practice G 685). The calorific value billed is a weighted average across the billing period, not an instantaneous reading.",
    },
    { t: "h", level: 2, text: "Why customers baulk here" },
    {
      t: "p",
      text: "The meter shows 1,510 – the invoice says 16,144. This is the single most common source of enquiries in the gas business. A portal that puts both figures side by side and shows the chain of arithmetic measurably reduces contacts to customer service.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "When capturing a meter reading in a portal, the unit has to be unambiguous: the customer reads **m³**, while the billing system often expects **kWh**. The conversion belongs on the system side – never in an input field for the customer.",
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
      text: "The **Brennwert** (gross or higher calorific value, H₀ / H_s) includes the condensation heat of the water vapour in the flue gas. The **Heizwert** (net calorific value, H_i) does not, and comes out around 10 % lower. Germany bills on the Brennwert.",
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
      text: "It depends mainly on two things: the geodetic altitude of the connection – the higher, the lower the air pressure – and the network's supply pressure. Typical values lie between 0.90 and 0.98; at altitude it drops noticeably.",
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
};
