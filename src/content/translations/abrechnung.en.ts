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
    {
      t: "note",
      kind: "law",
      text: "Outside basic supply the [[enwg|EnWG]] applies: under **§ 41b (1)** instalments must reasonably reflect actual or expected consumption – a blanket inflated instalment is not permitted, and overpayments must be refunded without delay. Under **§ 40b (1)** the supplier must, on request, offer monthly, quarterly or half-yearly billing instead of the annual statement. Customers with an [[intelligentes-messsystem|intelligent metering system]] additionally receive free monthly consumption information under **§ 40a** – even without a bill.",
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
      text: "§ 40 (2) and (3) [[enwg|EnWG]] prescribe the content. Beyond the master data – contract and customer data, the [[vertragskonto|contract account]], the [[marktlokation|market location ID]], meter number, grid operator number, billing period – it must include:",
    },
    {
      t: "ul",
      items: [
        "the [[zaehlerstand|meter readings]] labelled with their **origin**: read, estimated or reported by the customer",
        "the price components and the breakdown of taxes, charges and levies, plus the [[abschlagszahlung|instalments]] paid",
        "the **prior-year comparison**: consumption in the billing period alongside the comparable period of the previous year, graphically where possible",
        "a comparison with a **reference customer group** (a household of the same size, say), as a figure or chart",
        "**contract term**, next possible termination date and notice period",
        "a note on the option of a [[lieferantenwechsel|supplier switch]] and on comparison offers",
        "a reference to the **Schlichtungsstelle Energie** (the energy ombudsman) and the **Bundesnetzagentur consumer service**, each with contact details",
        "for electricity, the [[stromkennzeichnung|electricity labelling]]",
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "The **Schlussrechnung** (final statement) is a separate document: it is produced when supply ends – termination, [[lieferantenwechsel|switch]], [[umzug|move-out]] – and under § 40c (1) EnWG it too must be issued no later than six weeks after the supply relationship ends. It follows the same content rules but bills up to the end of supply rather than to the regular cycle date.",
    },
    { t: "h", level: 2, text: "When the period splits" },
    {
      t: "p",
      text: "If a price changes mid-year, two sub-periods arise, each with its own [[arbeitspreis|unit rate]]. Without an actual meter reading on the key date the consumption is allocated arithmetically – by degree days for gas, by [[lastprofil|load profile]] for electricity. The invoice then carries a note about consumption allocation following a mid-year price change.",
    },
    {
      t: "note",
      kind: "warn",
      text: "Under § 40c (1) EnWG a statement has to be produced no later than six weeks after the end of the billing period – the same applies to the Schlussrechnung after supply ends. Late statements are not merely annoying; they also weaken the utility's position when pursuing the receivable.",
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
        { title: "Notice of interruption", text: "In basic supply, four weeks in advance (§ 19 (2) StromGVV). At the same time the basic supplier must offer an **Abwendungsvereinbarung** (avoidance agreement): interest-free instalments on the arrears while supply continues, tied to the obligation to keep paying the current instalments (§ 19 (5))." },
        { title: "Notice of the date", text: "The specific start of the interruption has to be announced **eight working days** beforehand (§ 19 (3) StromGVV)." },
        { title: "Interruption", text: "Only permitted where the consequences are not disproportionate to the size of the receivable and the customer does not show a sufficient prospect of payment. The contract continues – only the supply is interrupted." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "The basis is § 19 StromGVV and § 19 GasGVV. The threshold is at least €100 in arrears; **disputed** amounts – those contested in due form and time – and amounts not yet due do not count. The customer bears the cost of disconnection and reconnection (§ 19 (4)); the utility may charge a flat rate but must substantiate the calculation on request. Supply must be resumed without delay once the grounds fall away and the costs have been paid.",
    },
    {
      t: "note",
      kind: "tip",
      text: "Economically, almost any alternative beats disconnection: disconnecting and reconnecting cost money that the customer owes but does not have right now. A disconnection neither ends the contract nor triggers Ersatzversorgung – the customer stays in the contract, and the standing charge and the arrears keep running. Instalment agreements, adjusted [[abschlagszahlung|instalments]] and early contact are cheaper.",
    },
    { t: "h", level: 2, text: "Limitation and rebilling" },
    {
      t: "dl",
      items: [
        { term: "Limitation period", def: "Claims from energy supply become time-barred after **three years** (§ 195 BGB). The period starts at the end of the year in which the claim arose and the utility knew of it (§ 199 BGB) – so an invoice from March 2023 is time-barred at the end of 2026." },
        { term: "Rebilling", def: "If a calculation error or a wrong meter reading comes to light, the basic supplier may rebill retroactively under § 18 (2) StromGVV – but for at most **three years**; overpayments must be refunded for the same period." },
        { term: "Withholding payment", def: "Objections to an invoice justify deferring or refusing payment only where there is a serious possibility of an **obvious error** – consumption more than double the previous year's, say, or a meter reading below the prior-year value (§ 18 (1) StromGVV). Such amounts count as disputed and are left out of the disconnection threshold." },
      ],
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

  schlussrechnung: [
    {
      t: "lead",
      text: "Every invoice settles a period – the only question is what ends the period. For the periodic bill it is the calendar, for the interim bill an event in the middle of the contract, for the **Schlussrechnung** (final bill) the end of the supply contract itself. Deadline, source of the meter reading and the treatment of instalments all follow from that one distinction.",
    },
    { t: "h", level: 2, text: "Three bill types, one calculation" },
    {
      t: "table",
      head: ["", "Turnusabrechnung (periodic bill)", "Zwischenabrechnung (interim bill)", "Schlussrechnung (final bill)"],
      rows: [
        ["Trigger", "end of the billing period, usually annual", "event during the running contract: [[preisanpassung|price change]], customer request, meter exchange, change of billing mode", "end of the supply contract: [[lieferantenwechsel|supplier switch]], [[umzug|move-out]], termination, death of the customer, decommissioning"],
        ["Contract afterwards", "continues", "continues", "ended – the [[vertragskonto|contract account]] is settled and closed"],
        ["Deadline", "no later than six weeks after the end of the billing period", "no statutory deadline of its own; at the customer's request under § 40b EnWG in the agreed rhythm", "no later than six weeks after the end of the supply relationship"],
        ["Instalments", "set off, a new [[abschlagszahlung|instalment plan]] starts", "set off, the instalment plan continues adjusted", "set off, the instalment plan ends; a credit is paid out"],
        ["Meter reading", "periodic reading by the [[messstellenbetrieb|MSB]] or customer self-reading", "frequently apportioned arithmetically", "switch or move-out reading, transmitted by the grid operator via `MSCONS`"],
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "**§ 40c (1) [[enwg|EnWG]]**: the supplier must issue the bill no later than **six weeks after the end of the billing period** and the final bill no later than **six weeks after the end of the supply relationship**. The deadline cannot be contracted away – it applies in [[grundversorgung|Grundversorgung]] (basic supply) and in special contracts alike. The usual billing period may not materially exceed twelve months (§ 40b (1) EnWG); at the customer's request, monthly, quarterly or half-yearly billing must be offered.",
    },
    { t: "h", level: 2, text: "The meter reading at the cut-off date" },
    {
      t: "p",
      text: "Whether a bill is sound is decided by the reading at the cut-off date. It has three possible sources, and the bill must state which one it was (§ 40 (2) EnWG):",
    },
    {
      t: "dl",
      items: [
        { term: "Read", def: "Collected by the metering point operator or grid operator – automatically and to the day with an [[intelligentes-messsystem|intelligent metering system]], otherwise on site during a periodic or switch reading. The most reliable value." },
        { term: "Reported by the customer", def: "Self-reading by card, [[endkundenportal|portal]] or app. Counts as a read value but is sanity-checked: if it is below the previous reading or far above the forecast, it goes back into clarification." },
        { term: "Estimated / apportioned arithmetically", def: "Where no reading exists at all, the value is derived from the last known reading and the consumption pattern – by [[lastprofil|load profile]] for electricity, by degree days for gas. Technically this is [[ersatzwertbildung|substitute value formation]]; the bill says “estimated”." },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "On a [[lieferantenwechsel|supplier switch]] there is exactly **one** switch reading, determined by the grid operator and distributed via `MSCONS` to both the old and the new supplier – so both contracts end and begin with the same number. A reading the customer reports to the old supplier is only a hint; the value from [[marktkommunikation|market communication]] remains authoritative. The same applies to a [[umzug|move]]: the move-out reading arrives from the grid operator in the process, even if the customer read it themselves.",
    },
    { t: "h", level: 2, text: "Apportioning around a price change" },
    {
      t: "p",
      text: "When the price changes in the middle of a billing period, an interim bill is rarely written. Instead the periodic or final bill splits into sub-periods, each with its own [[arbeitspreis|Arbeitspreis]] (unit rate), and without a reading at the cut-off date the consumption is distributed across them:",
    },
    {
      t: "ul",
      items: [
        "**Pro rata by time (linear)**: days in the sub-period ÷ days in the whole period. Simple, but badly wrong for heating gas – there, two thirds of consumption falls in five winter months.",
        "**By load profile or degree days**: consumption is weighted by the [[lastprofil|standard load profile]] (electricity) or the grid operator's degree-day figures (gas). This is the standard and the reason for the invoice note “consumption allocated due to a mid-year price change”.",
        "**By metered values**: with intelligent metering systems or registering load metering, true daily values exist – nothing is distributed, the split is metered.",
      ],
    },
    {
      t: "example",
      title: "Final bill after a move-out with a price change in the period",
      lines: [
        { label: "Period", value: "1 October to 15 May (227 days)" },
        { label: "Consumption (move-out reading − opening reading)", value: "2,840 kWh" },
        { label: "Share up to 31 December by load profile", value: "1,220 kWh × 34.50 ct/kWh = €420.90" },
        { label: "Share from 1 January by load profile", value: "1,620 kWh × 36.80 ct/kWh = €596.16" },
        { label: "Grundpreis €12.90/month, pro rata by day", value: "€96.27" },
        { label: "Invoice total", value: "€1,113.33" },
        { label: "7 instalments of €140.00", value: "− €980.00" },
      ],
      result: { label: "Back-payment, due with the final bill", value: "€133.33" },
    },
    {
      t: "note",
      kind: "praxis",
      text: "The Grundpreis (standing charge) is almost always apportioned to the day, the consumption by profile – two different allocation keys in one bill. A billing system that runs both components through the same key will draw complaints on every gas bill with a winter cut-off date.",
    },
    { t: "h", level: 2, text: "Setting off the instalments" },
    {
      t: "p",
      text: "All [[abschlagszahlung|Abschläge]] (instalments) that fell due in the period are deducted from the invoice total – whether they were actually paid is a question for the contract account, not the bill. An unpaid instalment remains as a receivable in its own right; the bill itself shows only the balance of consumption costs and instalments **demanded**. A [[nachzahlung-guthaben|credit]] on a final bill must be paid out without delay – there is no more offsetting against the next instalment, because no instalment follows.",
    },
    { t: "h", level: 2, text: "The data flow" },
    {
      t: "steps",
      items: [
        { title: "Detect the trigger", text: "A termination confirmation, a deregistration from the [[wechselprozess-gpke|switching process]] or a move-out notice sets the end of supply on the contract – the six-week clock starts here." },
        { title: "Receive the reading", text: "The grid operator transmits the cut-off reading via `MSCONS`. If it has not arrived after a reasonable wait, estimate – the deadline does not wait for the grid operator." },
        { title: "Apportion and price", text: "Distribute consumption across price periods, Grundpreis to the day, taxes and levies each with their own validity periods." },
        { title: "Set off and post", text: "Net the instalments, post the balance to the contract account, end or recalculate the instalment plan, pay out the credit or make the back-payment due." },
        { title: "Deliver", text: "The bill with all mandatory content under § 40 EnWG – for the final bill additionally the statement that the contract has ended and no further instalments will be collected." },
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "A classic: the SEPA direct debit keeps running after the end of supply because the instalment plan was not ended together with the contract. The money has to go back, the customer is annoyed, and the final bill no longer matches the account anyway. The end of supply must end the instalment plan **hard** – not the final bill.",
    },
  ],

  rechnungskorrektur: [
    {
      t: "lead",
      text: "Invoices are accounting documents, not files you regenerate “properly this time”. To change an invoice you create a second posting that cancels the first, and a third that gets it right. Anything else throws bookkeeping, VAT and customer communication out of step.",
    },
    { t: "h", level: 2, text: "Three ways to fix a mistake" },
    {
      t: "dl",
      items: [
        { term: "Storno + rebilling", def: "The **Stornorechnung** (reversal invoice) cancels the original in full (every line with the sign reversed); the **new invoice** bills the same period again with corrected data. Three documents, three numbers, a clean account history. The standard route in energy billing systems." },
        { term: "Korrekturrechnung (difference invoice)", def: "A single document showing only the difference between old and new. Shorter, but harder to follow – the customer can no longer see how the new total is made up. Common for small rebillings of individual line items." },
        { term: "Gutschrift (credit note)", def: "A document in the customer's favour – a goodwill credit, say, or the refund of an overcharged amount. Beware: for VAT purposes a “Gutschrift” is strictly an invoice issued by the recipient of the supply (§ 14 (2) UStG). What the utility sends the customer is, correctly, an **invoice correction**; in everyday use it is still called a Gutschrift." },
      ],
    },
    { t: "h", level: 2, text: "Typical causes" },
    {
      t: "table",
      head: ["Cause", "How it surfaces", "What gets corrected"],
      rows: [
        ["Wrong [[zaehlerstand|meter reading]]", "customer complaint, plausibility check, control reading", "consumption and with it every volume-based line"],
        ["Meter exchange not recorded", "consumption jumps or turns negative because old and new meter were mixed", "two consumption segments: old meter up to the removal reading, new meter from the installation reading"],
        ["Wrong price or wrong price period", "price change entered late, wrong price sheet, wrong tariff", "the pricing; the volumes stay"],
        ["[[ersatzwertbildung|Substitute value]] replaced by a true value", "the metering point operator delivers the real value later via `MSCONS`", "consumption; often a small difference, but correction is mandatory"],
        ["Wrong master data", "tax exemption, Konzessionsabgabe group, customer group or load profile assigned incorrectly", "individual price components, frequently across several years"],
      ],
    },
    { t: "h", level: 2, text: "How far back?" },
    {
      t: "note",
      kind: "law",
      text: "**§ 18 StromGVV / § 18 GasGVV**: if a check of the metering equipment shows the permitted error limits were exceeded, or errors are found in how the invoice amount was determined, the amount over- or under-charged is **refunded or paid retrospectively** (para. 2). Claims are limited to the reading period preceding the discovery where the error cannot be traced further back – and in any case to no more than **three years**. Under para. 1, objections to an invoice justify withholding payment only where there is a serious possibility of an **obvious error**.",
    },
    {
      t: "p",
      text: "The three-year limit in the basic-supply ordinances runs in parallel with the standard **limitation period** under § 195 BGB: also three years, starting at the end of the year in which the claim arose and the creditor knew or ought to have known of it (§ 199 BGB). For a rebilling this means in practice: anything older than three full calendar years the utility can generally no longer enforce – and conversely the customer can demand a refund for the same span. In special contracts § 18 StromGVV does not apply directly, but the terms and conditions almost always contain an identical clause.",
    },
    { t: "h", level: 2, text: "Invoice numbers and the document chain" },
    {
      t: "p",
      text: "§ 14 (4) UStG requires every invoice to carry a **sequential number with one or more series of digits, assigned once only to identify the invoice**. For corrections that means:",
    },
    {
      t: "ul",
      items: [
        "The reversal and the new invoice each receive their **own, new** number from the running sequence – the original number is never reused.",
        "The reversal **references the original** (“reversal of invoice no. …”), as does the new invoice (“replaces invoice no. …”). The chain stays traceable in both directions.",
        "An invoice correction must refer unambiguously to the original invoice (§ 31 (5) UStDV); only the incorrect details need to be transmitted – in energy billing the full invoice is nevertheless almost always regenerated.",
        "Gaps in the number sequence are permitted, duplicates are not. A reversal that physically deletes the original creates exactly such a gap without a document – and thereby breaches the retention obligation.",
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "**Never overwrite.** An invoice that has been generated and delivered to the customer is immutable – even when it is visibly wrong. The billing system should technically seal the state “invoiced” and allow changes exclusively through reversal + rebilling. The same rule applies to the PDF: the original stays retrievable, the correction is added.",
    },
    { t: "h", level: 2, text: "Effect on the contract account and instalment plan" },
    {
      t: "steps",
      items: [
        { title: "Write off the receivable", text: "The reversal creates a counter-posting to the original in the [[vertragskonto|contract account]]. If the original receivable has already been paid, a temporary credit arises." },
        { title: "Post the new receivable", text: "The new invoice is posted with its own due date. Payments already made are reassigned, so only the **difference** remains open or is refunded as a [[nachzahlung-guthaben|credit]]." },
        { title: "Pause dunning", text: "No dunning run may bite between reversal and rebilling – a customer dunned over a reversed invoice is the most expensive service case there is. The usual solution is a dunning block on the account for the duration of the clarification." },
        { title: "Review the instalment plan", text: "If the consumption was wrong, so was the forecast: the new invoice recalculates the [[abschlagszahlung|Abschlag]] and replaces the plan's remaining instalments." },
        { title: "Review subsequent invoices", text: "If a meter reading was corrected, every later invoice built on the same opening reading is wrong too – the correction then cascades up to the current invoice." },
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "The cascade is the real reason invoice corrections are expensive: a reading error from last year drags down the annual statement, the instalment plan derived from it and the current billing. Systems that model invoices as an immutable chain can handle this automatically; systems that let individual fields be edited regularly end up inconsistent here.",
    },
  ],

  netznutzungsabrechnung: [
    {
      t: "lead",
      text: "The customer pays one invoice, the supplier pays two: one for the energy to its wholesale supplier and one for the grid to the [[netzbetreiber|grid operator]]. Grid usage billing is the second – a purely B2B affair between [[marktrollen|market partners]] that the customer never sees, but whose amounts make up roughly a quarter of their electricity price.",
    },
    { t: "h", level: 2, text: "The basis: the Lieferantenrahmenvertrag" },
    {
      t: "p",
      text: "A supplier wanting to serve customers in a grid area concludes a **Lieferantenrahmenvertrag** (supplier framework agreement, electricity) or **Netznutzungsvertrag** (grid usage contract) with the grid operator. § 20 (1a) [[enwg|EnWG]] frames it like this: grid access is granted through a contract between grid operator and supplier that covers all of the supplier's [[marktlokation|Marktlokationen]] in the grid area – the customer needs no grid usage contract of their own, their grid usage is bundled “all inclusive” into the supply contract. The Bundesnetzagentur (the federal regulator) largely dictates the contract's content by determination; in practice nothing is negotiated.",
    },
    {
      t: "note",
      kind: "info",
      text: "The opposite model – the customer concludes supply contract and grid usage contract separately – exists as the **grid usage contract with the end consumer**, in practice only for industrial customers. For the mass market the “all inclusive” model with a Lieferantenrahmenvertrag is the standard.",
    },
    { t: "h", level: 2, text: "What the grid operator bills" },
    {
      t: "table",
      head: ["Line item", "Basis", "Note"],
      rows: [
        ["[[netzentgelte|Grid fee]] unit rate", "ct/kWh × consumption", "the grid operator's price sheet per voltage level and customer group"],
        ["Grid fee standing charge", "€/year per Marktlokation", "for [[lastprofil|SLP]] customers; frequently includes the cost of conventional metering"],
        ["Grid fee [[leistungspreis|Leistungspreis]] (capacity charge)", "€/kW × annual or monthly peak", "RLM customers only; price sheet assigned by hours of use"],
        ["[[messstellenbetrieb|Messstellenbetrieb]] (metering) and measurement", "€/year per meter", "only where the grid operator is also the default metering point operator; otherwise the competitive MSB bills separately"],
        ["[[konzessionsabgabe|Konzessionsabgabe]]", "ct/kWh under the KAV", "the grid operator collects it and passes it on to the municipality"],
        ["Levies", "ct/kWh", "[[kwk-umlage|KWK levy]], [[offshore-netzumlage|offshore grid levy]], § 19 StromNEV levy, [[umlage-abschaltbare-lasten|interruptible loads levy]] – collected through the grid invoice"],
        ["[[blindarbeit|Reactive energy]]", "ct/kvarh above the allowance", "RLM only"],
      ],
      caption: "Electricity tax and VAT do not belong on the grid invoice – the supplier owes electricity tax directly to the main customs office.",
    },
    { t: "h", level: 2, text: "Rhythm: instalments and periodic bill" },
    {
      t: "p",
      text: "The sequence mirrors customer billing: for SLP customers the grid operator raises **monthly instalments** based on the annual consumption forecast, and after the periodic reading comes the **grid usage periodic bill** per Marktlokation, in which the instalments are set off. RLM customers are billed monthly on the metered load curve – no instalments. At the end of supply there is a grid usage final bill, analogous to the [[schlussrechnung|Schlussrechnung]].",
    },
    {
      t: "dl",
      items: [
        { term: "INVOIC", def: "The EDIFACT invoice. The grid operator sends one `INVOIC` per Marktlokation and billing period with every line item, volume, price and period – machine-readable, no PDF. The invoice type (instalment, periodic, final, reversal, MMMA) is coded in the message header." },
        { term: "REMADV", def: "The remittance advice. The supplier checks the INVOIC against its own data (meter readings, periods, price sheet) and answers with a `REMADV`: accepted, partly accepted or rejected with a reason. Payment is made in bulk; the REMADV assigns the payment to individual invoices." },
        { term: "Invoice verification", def: "Where the real effort lies. Grid invoices arrive in the tens of thousands; they are checked automatically against contract data, master data from `UTILMD` and metered values from `MSCONS`. Discrepancies go into clarification – and the most frequent causes are differing periods and meter readings, not wrong prices." },
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "Grid invoice verification is a volume business on a thin margin: a supplier serving 100,000 Marktlokationen receives well over a million INVOIC line items a year. Without automatic checks against its own billing – same reading, same period, same price sheet – it cannot be managed. Every manually clarified grid invoice costs more than the Marktlokation's margin for the month.",
    },
    { t: "h", level: 2, text: "Mehr-/Mindermengenabrechnung (MMMA)" },
    {
      t: "p",
      text: "SLP customers are not settled in the [[bilanzkreis|balancing group]] with their real consumption but with the [[lastprofil|standard load profile]] and the annual consumption forecast. Over the year the supplier has therefore procured exactly the **forecast** volume and placed it in its balancing group. Only after the periodic reading is it known what the customer actually consumed – and someone has to pay for, or be paid for, the difference.",
    },
    {
      t: "dl",
      items: [
        { term: "Mehrmenge (surplus quantity)", def: "The customer consumed **more** than was allocated. The supplier placed too little; the grid operator covered the difference through the difference balancing group and invoices it to the supplier." },
        { term: "Mindermenge (shortfall quantity)", def: "The customer consumed **less** than was allocated. The supplier delivered too much energy; the grid operator reimburses it for the difference." },
        { term: "Price", def: "Not the customer's contract price but the **Mehr-/Mindermengenpreis**: for electricity a nationally uniform monthly price in ct/kWh that the transmission system operators derive from spot market prices and publish on netztransparenz.de; for gas a price published by the market area manager. The difference is valued month by month, spread across the billing period." },
        { term: "Timing", def: "The MMMA follows the grid usage periodic bill at a distance – the prices for the final month have to be fixed first. It arrives as its own `INVOIC` and is likewise answered via `REMADV`." },
      ],
    },
    {
      t: "example",
      title: "Surplus quantity of an SLP Marktlokation",
      lines: [
        { label: "Annual consumption forecast (allocated)", value: "3,500 kWh" },
        { label: "Actual consumption per periodic reading", value: "3,920 kWh" },
        { label: "Surplus quantity", value: "420 kWh" },
        { label: "Spread across the months by load profile, valued at monthly prices", value: "avg. 9.50 ct/kWh" },
      ],
      result: { label: "Grid operator invoices the supplier", value: "€39.90" },
    },
    {
      t: "note",
      kind: "info",
      text: "The MMMA is **not** a transaction with the customer: the customer pays for their 3,920 kWh at the contract price regardless. It only compensates for the fact that the 420 kWh physically came from the grid operator's network and not from the supplier's balancing group. For RLM customers surplus and shortfall quantities arise practically only when substitute values are later replaced by real metered values.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For a supplier's contribution margin the MMMA is an awkward item: it arrives months after the year it relates to, its sign depends on forecast quality, and its price on the spot market in hindsight. A good annual consumption forecast saves more here than any negotiation with the wholesale supplier.",
    },
  ],

  "ratenzahlung-abwendungsvereinbarung": [
    {
      t: "lead",
      text: "Between “invoice paid” and “supply disconnected” lies a whole toolbox. It is not only socially intended but also commercially sensible: a [[zahlung-und-mahnwesen|disconnection]] costs money and brings none back. The instruments here do the opposite – provided the billing system can represent them cleanly.",
    },
    { t: "h", level: 2, text: "Overview" },
    {
      t: "table",
      head: ["Instrument", "Who initiates", "When", "Legal basis"],
      rows: [
        ["Ratenzahlungsvereinbarung (instalment agreement)", "customer or utility", "large [[nachzahlung-guthaben|back-payment]], temporary shortfall", "freedom of contract; due dates under § 17 StromGVV / GasGVV"],
        ["Abwendungsvereinbarung (hardship agreement)", "utility – **must** offer", "together with the threat of disconnection", "§ 19 (5) StromGVV / GasGVV"],
        ["Vorauszahlung (prepayment)", "utility", "justified doubts about ability to pay", "§ 14 StromGVV / GasGVV"],
        ["Sicherheitsleistung (security deposit)", "utility, as an alternative to prepayment", "as for prepayment", "§ 15 StromGVV / GasGVV"],
        ["Vorkassezähler / prepaid meter", "utility, customer may consent", "instead of prepayment or instead of disconnection", "§ 14 (3) StromGVV; outside the GVV by contract"],
      ],
    },
    { t: "h", level: 2, text: "Ratenzahlungsvereinbarung" },
    {
      t: "p",
      text: "The simplest form: a receivable that has fallen due – usually a back-payment from the [[jahresabrechnung|annual statement]] – is split into several instalments paid alongside the running [[abschlagszahlung|Abschläge]]. Outside basic supply it is not legally required, but almost every utility offers it because it reduces bad debt. Three to twelve instalments are usual, interest-free or with a small surcharge; the agreement normally contains an **acceleration clause**: miss one instalment and the entire remaining balance falls due immediately.",
    },
    {
      t: "note",
      kind: "law",
      text: "In basic supply the invoice amount falls due only **two weeks** after receipt of the invoice (§ 17 (1) StromGVV / GasGVV) – so an instalment plan starts there at the earliest. The ordinance knows no general duty to grant instalments outside the disconnection situation; that arises only through the Abwendungsvereinbarung.",
    },
    { t: "h", level: 2, text: "Abwendungsvereinbarung" },
    {
      t: "p",
      text: "Since the amendment of the basic-supply ordinances the Abwendungsvereinbarung is no longer a goodwill offer but a **duty**: a basic supplier threatening disconnection must at the same time offer the customer an agreement with which they can avert it. The customer only has to accept – then no disconnection may take place as long as they comply.",
    },
    {
      t: "note",
      kind: "law",
      text: "**§ 19 (5) StromGVV / GasGVV**: the basic supplier is obliged to offer the customer an Abwendungsvereinbarung no later than with the threat of disconnection. It comprises an **interest-free instalment plan** for the arrears and **continued supply** under the basic-supply contract, coupled with the customer's duty to pay the running instalments or prepayments. The instalments must be sized so the customer can afford them; the ordinance names a standard range of **six to 18 months**. If the customer fails to honour the agreement, the protection lapses and disconnection may proceed after a fresh notice.",
    },
    {
      t: "example",
      title: "An Abwendungsvereinbarung in numbers",
      lines: [
        { label: "Arrears (instalments due + back-payment)", value: "€540.00" },
        { label: "Term", value: "12 months" },
        { label: "Instalment, interest-free", value: "€45.00/month" },
        { label: "Running Abschlag", value: "€115.00/month" },
      ],
      result: { label: "Monthly burden during the term", value: "€160.00" },
    },
    {
      t: "note",
      kind: "praxis",
      text: "The Abwendungsvereinbarung belongs **inside** the disconnection notice – not as an enclosure but with concrete figures: arrears, instalment amount, term, how to return it. A letter that merely points to the possibility does not serve the purpose. Whoever automates the process generates the offer from the contract account and creates the instalment plan directly on acceptance.",
    },
    { t: "h", level: 2, text: "Prepayment, security deposit, prepaid" },
    {
      t: "dl",
      items: [
        { term: "Vorauszahlung (§ 14 StromGVV)", def: "The basic supplier may demand a **prepayment** for the billing period where the circumstances of the individual case give reason to assume the customer will not meet their payment obligations, or not on time – typically after repeated dunning or a disconnection. It is sized on the consumption of the previous billing period or the average consumption of comparable customers. In practice it is an Abschlag that falls due **before** rather than after the month of consumption." },
        { term: "Sicherheitsleistung (§ 15 StromGVV)", def: "Instead of prepayment the basic supplier may demand a **security** – a cash deposit or a guarantee. Cash securities bear interest at the base rate; the utility may draw on it if the customer fails to pay despite a reminder, and must return it once the conditions no longer apply. It is not revenue but a **liability** on the balance sheet." },
        { term: "Vorkassezähler / prepaid (§ 14 (3) StromGVV)", def: "Instead of prepayment the basic supplier may install a **cash or chip-card meter** or a comparable prepaid system – today often a prepaid function of an [[intelligentes-messsystem|intelligent metering system]]. The customer tops up credit, the meter supplies until it is used up. The rule is intended as an alternative to disconnection: the customer keeps control, the utility keeps the default risk only up to the emergency credit." },
      ],
    },
    {
      t: "note",
      kind: "info",
      text: "All three instruments sit in the basic-supply ordinances and therefore apply directly only to [[grundversorgung|Grundversorgung]]. In special contracts they can be agreed – the terms of large suppliers almost always follow the GVV wording, and § 41b EnWG sets prepayments the same limits as instalments: they must reasonably reflect actual or expected consumption.",
    },
    { t: "h", level: 2, text: "What the billing system must be able to do" },
    {
      t: "ul",
      items: [
        "**The instalment plan as an object in its own right** in the [[vertragskonto|contract account]]: reference to the original receivables, instalment amount, due dates, status per instalment, acceleration clause. The original receivable remains; the plan only replaces its due date.",
        "**Due-date logic**: the original receivable must no longer count as overdue while the plan is honoured. If an instalment is missed, the remainder – depending on the agreement – falls due immediately or only after a grace period.",
        "**Dunning block**: while an instalment plan or Abwendungsvereinbarung is running, the affected receivables may enter neither the dunning run nor the disconnection threshold. Running instalments, by contrast, continue to be dunned normally.",
        "**Two payment streams**: instalment and Abschlag in parallel, with unambiguous assignment of incoming payments – for SEPA ideally as two items or one collection with a defined order of allocation.",
        "**Book securities separately**: deposits and prepaid credit are liabilities towards the customer, not payments against receivables – with their own interest and return logic.",
        "**History**: how often and when a customer received and honoured an agreement is information in itself – for the next [[bonitaetspruefung|credit check]] and for the question of whether a prepayment may be demanded.",
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "The most common mistake in practice: the instalment plan is created but the original receivable stays in the dunning run – and two weeks after concluding the Abwendungsvereinbarung the customer receives a disconnection notice for exactly the amounts they are now paying in instalments. That is not just embarrassing; in basic supply it is unlawful.",
    },
  ],
};
