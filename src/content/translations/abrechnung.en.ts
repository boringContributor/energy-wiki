import type { Block } from "../types";

export const abrechnungEn: Record<string, Block[]> = {
  abschlagszahlung: [
    {
      t: "lead",
      text: "Billing happens once a year, payment happens monthly. The **Abschlag**, the instalment, bridges that gap: it is not a flat fee but a payment on account for a delivery whose exact volume is not yet known.",
    },
    { t: "figure", id: "abschlag-rechner" },
    { t: "h", level: 2, text: "How the amount is set" },
    {
      t: "steps",
      items: [
        { title: "Forecast the consumption", text: "The basis is consumption in the most recently billed period. Where there is none – for new customers, say – the average consumption of comparable customers is used." },
        { title: "Calculate the annual cost", text: "Forecast volume × [[arbeitspreis|unit rate]] + [[grundpreis|standing charge]], both including VAT." },
        { title: "Split into instalments", text: "Eleven is the usual number – the twelfth month is left free for the annual statement. Some utilities use twelve, or quarterly payments." },
        { title: "Adjust where necessary", text: "If prices or consumption change materially, the instalment is adjusted mid-year." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "**§ 13 StromGVV / § 13 GasGVV**: the instalment is to be calculated pro rata from consumption in the most recently billed period. If the customer credibly demonstrates that their consumption is substantially lower, that must be taken into account appropriately. Following a price change, subsequent instalments may be adjusted by the percentage of that change.",
    },
    { t: "h", level: 2, text: "Too high, too low – both are a problem" },
    {
      t: "cards",
      items: [
        { title: "Instalment too low", text: "Leads to a painful [[nachzahlung-guthaben|back-payment]] and is one of the most common causes of payment problems and churn." },
        { title: "Instalment too high", text: "The customer is effectively giving the utility an interest-free loan. Overpayments must be refunded without delay, and at the latest offset against the next instalment." },
      ],
    },
    { t: "h", level: 2, text: "In practice" },
    {
      t: "ul",
      items: [
        "On moving in there is no prior-year consumption – here the number of occupants, the floor area and the appliances count",
        "After a cold winter the gas instalment is often too low, because it was based on a mild previous year",
        "An electric car or a heat pump doubles electricity demand – without an adjustment a back-payment is guaranteed",
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "Adjusting the instalment in the [[endkundenportal|portal]] is one of the most effective self-service functions there is: it prevents exactly the back-payment that later becomes an expensive service case. A corridor around the arithmetically correct value works better than complete freedom downwards.",
    },
  ],

  jahresabrechnung: [
    {
      t: "lead",
      text: "The annual statement is the moment everything comes together: meter readings, prices, periods, instalments. It is also the document customers read most carefully – usually exactly once, but very critically.",
    },
    { t: "figure", id: "rechnung-anatomie" },
    { t: "h", level: 2, text: "The arithmetic" },
    {
      t: "example",
      title: "Electricity statement, one year",
      lines: [
        { label: "Meter reading, end", value: "27,410 kWh" },
        { label: "Meter reading, start", value: "23,760 kWh" },
        { label: "Consumption", value: "3,650 kWh" },
        { label: "Unit rate, 36.80 ct/kWh", value: "€1,343.20" },
        { label: "Standing charge, €12.90/month", value: "€154.80" },
        { label: "Invoice total", value: "€1,498.00" },
        { label: "11 instalments of €128.00", value: "− €1,408.00" },
      ],
      result: { label: "Back-payment", value: "€90.00" },
    },
    { t: "h", level: 2, text: "What has to be on it" },
    {
      t: "p",
      text: "§ 40 [[enwg|EnWG]] prescribes the content: contract and customer data, the [[vertragskonto|contract account]], the [[marktlokation|market location ID]], meter number, grid operator number, billing period, [[zaehlerstand|meter readings]] labelled with their origin, the price components, the breakdown of taxes, charges and levies, the [[abschlagszahlung|instalments]] paid – and, for electricity, the [[stromkennzeichnung|electricity labelling]].",
    },
    { t: "h", level: 2, text: "When the period splits" },
    {
      t: "p",
      text: "If a price changes mid-year, two sub-periods arise, each with its own [[arbeitspreis|unit rate]]. Without an actual meter reading on the key date the consumption is allocated arithmetically – by degree days for gas, by [[lastprofil|load profile]] for electricity. The invoice then carries a note about consumption allocation following a mid-year price change.",
    },
    {
      t: "note",
      kind: "warn",
      text: "A statement has to be produced no later than six weeks after the end of the billing period. Late statements are not merely annoying; they also weaken the utility's position when pursuing the receivable.",
    },
  ],

  verbrauch: [
    {
      t: "lead",
      text: "Consumption is the difference between two [[zaehlerstand|meter readings]] – not the reading itself. That distinction sounds trivial and is still the most common source of error in forms and data models.",
    },
    {
      t: "formula",
      expr: "Consumption  =  Meter reading, end  −  Meter reading, start",
      caption:
        "For gas, the conversion from m³ to kWh follows – see [[thermische-gasabrechnung|thermal gas billing]].",
    },
    { t: "h", level: 2, text: "Units by commodity" },
    {
      t: "table",
      head: ["Commodity", "At the meter", "On the invoice"],
      rows: [
        ["Electricity", "kWh", "kWh"],
        ["Natural gas", "m³", "kWh"],
        ["Water", "m³", "m³"],
        ["District heating", "kWh, MWh or GJ", "kWh"],
      ],
    },
    { t: "h", level: 2, text: "Reference points" },
    {
      t: "table",
      head: ["Household", "Electricity", "Gas (heating)", "Water"],
      align: ["l", "r", "r", "r"],
      rows: [
        ["1 person, flat", "1,300–1,800 kWh", "5,000–8,000 kWh", "40–50 m³"],
        ["2 people", "2,000–2,800 kWh", "9,000–14,000 kWh", "70–90 m³"],
        ["4 people, house", "4,000–5,000 kWh", "18,000–25,000 kWh", "140–170 m³"],
      ],
      caption: "Rough ranges for plausibility checks, not normative values.",
    },
    {
      t: "note",
      kind: "tip",
      text: "For plausibility checks in a [[endkundenportal|portal]] these ranges are entirely sufficient: a reported annual consumption of 40,000 kWh of electricity in a two-room flat is almost certainly a typo – and far better caught immediately than three months later in the billing run.",
    },
    { t: "figure", id: "kwh-vergleich" },
  ],

  abrechnungswert: [
    {
      t: "lead",
      text: "The billing value is the figure gas is actually billed on: the energy in kilowatt-hours, derived from the measured volume.",
    },
    {
      t: "formula",
      expr: "Billing value [kWh]  =  Consumption [m³]  ×  Zustandszahl  ×  Calorific value",
      where: [
        { sym: "Consumption", desc: "the difference between meter readings, in operating cubic metres" },
        { sym: "Zustandszahl", desc: "see [[zustandszahl|Zustandszahl]]" },
        { sym: "Calorific value", desc: "see [[brennwert|calorific value]]" },
      ],
    },
    { t: "figure", id: "gas-umrechner" },
    {
      t: "note",
      kind: "info",
      text: "Both factors come from the [[netzbetreiber|grid operator]] and apply to the grid area, not to the individual customer. They change from one billing period to the next – so an identical volume can produce a different number of kilowatt-hours.",
    },
    {
      t: "p",
      text: "In detail: [[thermische-gasabrechnung|thermal gas billing]].",
    },
  ],

  "nachzahlung-guthaben": [
    {
      t: "lead",
      text: "Every [[jahresabrechnung|annual statement]] ends in a balance. It is neither a penalty nor a gift – only the correction of a forecast.",
    },
    { t: "figure", id: "abschlag-rechner" },
    { t: "h", level: 2, text: "What has to happen" },
    {
      t: "dl",
      items: [
        { term: "Credit", def: "If the statement shows that instalments were set too high, the excess must be refunded without delay – and at the latest offset against the next instalment." },
        { term: "Back-payment", def: "Falls due with the invoice. For large amounts, payment by instalments is customary and, in basic supply, may even be required." },
        { term: "Consequence for the instalment", def: "A balance is always also a signal that the forecast no longer fits – the new [[abschlagszahlung|instalment]] should be adjusted accordingly." },
      ],
    },
    { t: "h", level: 2, text: "Typical causes" },
    {
      t: "ul",
      items: [
        "A cold winter after a mild previous year, especially for [[erdgas|gas]]",
        "A [[preisanpassung|price change]] without a matching instalment adjustment",
        "New appliances: heat pump, electric car, air conditioning",
        "A [[zaehlerstand|estimate]] in the previous year that came out too low – the shortfall catches up with the customer a year later",
        "A change in the number of people in the household",
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "What matters in the communication is not the amount but whether it can be explained. A back-payment presented next to the prior-year consumption, the price change and the too-low instalment generates far less pushback than a bare number.",
    },
  ],

  vertragskonto: [
    {
      t: "lead",
      text: "The contract account is the accounting bracket around a customer relationship: invoices, instalments, payments, reminders and credits all come together here.",
    },
    { t: "h", level: 2, text: "Telling the identifiers apart" },
    {
      t: "table",
      head: ["Term", "Refers to", "Changes"],
      rows: [
        ["Customer number / business partner", "the person or company", "never"],
        ["Contract account", "the payment relationship for one supply point", "usually yes, on moving"],
        ["Contract", "one supply of one commodity", "per commodity and per period"],
        ["[[marktlokation|Market location ID]]", "the physical place", "never, as long as the connection exists"],
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "A customer with electricity and gas at the same address often has one contract account and two contracts – but sometimes two accounts. How a utility cuts this decides whether the customer receives one invoice or two.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "When moving data into a billing system, the question “one account or several?” is among the first to settle. It determines how payments are allocated – and whether a credit on the gas contract can offset an open receivable on the electricity contract.",
    },
  ],

  "zahlung-und-mahnwesen": [
    {
      t: "lead",
      text: "Energy is a basic need. So a utility may not simply stop supplying because an invoice is outstanding – the conditions for doing so are set out explicitly in law.",
    },
    { t: "h", level: 2, text: "Ways to pay" },
    {
      t: "ul",
      items: [
        "**SEPA direct debit** – the standard case, cheap and low-default; the mandate has to be documented",
        "**Bank transfer on invoice** – higher effort in receivables management",
        "**Standing order** – awkward from the utility's perspective, because instalment adjustments do not take effect automatically",
        "**Prepayment or prepayment metering** – only within narrow limits, and usually after a prior payment problem",
      ],
    },
    { t: "h", level: 2, text: "The path to disconnection" },
    {
      t: "steps",
      items: [
        { title: "Default", text: "The receivable is due and unpaid." },
        { title: "Reminder", text: "A payment reminder, then a formal reminder with a deadline." },
        { title: "Notice of interruption", text: "In basic supply, four weeks in advance; at the same time, options such as an instalment agreement have to be pointed out." },
        { title: "Notice of the date", text: "The specific date has to be announced three working days beforehand." },
        { title: "Interruption", text: "Only permitted where the consequences are not disproportionate to the size of the receivable." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "The basis is § 19 StromGVV and § 19 GasGVV. The threshold is at least €100 in arrears; undisputed amounts and amounts not yet due do not count. Supply must be resumed without delay once the grounds fall away.",
    },
    {
      t: "note",
      kind: "tip",
      text: "Economically, almost any alternative beats disconnection: disconnecting and reconnecting cost money, and afterwards the customer is in [[ersatzversorgung|substitute supply]] or gone. Instalment agreements, adjusted [[abschlagszahlung|instalments]] and early contact are cheaper.",
    },
  ],

  blindarbeit: [
    {
      t: "lead",
      text: "Motors, transformers and fluorescent lamps need magnetic fields to work. The energy for those oscillates back and forth between grid and device without being consumed – but it loads the lines all the same.",
    },
    { t: "figure", id: "blindleistung" },
    { t: "h", level: 2, text: "When it is billed" },
    {
      t: "p",
      text: "Household customers pay no reactive energy. For customers with registering load metering, however, the [[netzbetreiber|grid operator]] agrees a limit – usually a [[leistungspreis|power factor]] cos φ of 0.9, which corresponds to reactive energy of around 50 % of the active energy. Exceed it and the excess reactive energy is billed in kvarh.",
    },
    {
      t: "example",
      title: "The reference quantities",
      lines: [
        { label: "Active energy in the month", value: "40,000 kWh" },
        { label: "Allowance at cos φ 0.9", value: "19,400 kvarh" },
        { label: "Reactive energy metered", value: "26,000 kvarh" },
        { label: "Billable", value: "6,600 kvarh" },
      ],
      result: { label: "At 1.2 ct/kvarh", value: "€79.20" },
    },
    {
      t: "note",
      kind: "tip",
      text: "The remedy is **reactive power compensation** – capacitors that supply the reactive component locally. In businesses with many motors it often pays for itself within a few years.",
    },
  ],
};
