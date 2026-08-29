import type { Block } from "../types";

export const kundeEn: Record<string, Block[]> = {
  endkundenportal: [
    {
      t: "lead",
      text: "A self-service portal is not a marketing channel but a cost lever. Every function a customer can complete themselves replaces a phone call, an email or a letter – across millions of customer contacts a year, that is the real business case.",
    },
    { t: "figure", id: "portal-funktionen" },
    { t: "h", level: 2, text: "What a portal genuinely needs" },
    {
      t: "ol",
      items: [
        "**[[zaehlerstand|Submit a meter reading]]** – with a plausibility check against the last reading and the expected volume",
        "**[[abschlagszahlung|Adjust the instalment]]** – within a sensible corridor, with the effect shown immediately",
        "**View invoices and contracts** – including an explanation of how the current amount is composed",
        "**[[umzug|Report a move]]** – moving out, moving in or both, with meter readings",
        "**Maintain master data** – bank details, address, channel of communication",
        "**Understand consumption** – history, prior-year comparison, and with an [[intelligentes-messsystem|iMSys]] also daily and hourly values",
      ],
    },
    { t: "h", level: 2, text: "Where portals fail" },
    {
      t: "cards",
      items: [
        { title: "Registration hurdle", text: "Anyone made to wait for a letter with an activation code does not come back. Identifying via customer number plus invoice amount or meter number is faster – but a GDPR trade-off: both numbers appear on documents third parties also see (landlords, property managers, previous tenants), so on their own they must not open access to consumption or bank data. A second factor such as a confirmed email address is the usual answer." },
        { title: "Display only, no action", text: "A portal that shows data but changes nothing shifts not a single service case." },
        { title: "No return path into the core system", text: "If the new instalment only takes effect after manual rework, the benefit has evaporated." },
        { title: "Language from the billing system", text: "“MaLo”, “Turnusablesung”, “Ersatzwertbildung” – terms from this wiki belong in the explanation, not in the interface." },
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "The portal is usually the most important digital touchpoint: it is where the customer handles requests, tracks the status of their orders and finds their documents. The hard part is rarely the interface but the reliable return path into the billing or ERP system.",
    },
    { t: "h", level: 2, text: "Not only end customers" },
    {
      t: "p",
      text: "Alongside the customer portal there are portals for **installers** (registering installations, grid connection enquiries) and for **partners** and sales channels. The processes behind them are similar; the permissions and data views differ considerably.",
    },
  ],

  lieferantenwechsel: [
    {
      t: "lead",
      text: "The customer signs with the new supplier, and everything after that runs between market partners. The customer neither has to terminate anything nor register anything – the new supplier handles it as part of the switching process.",
    },
    { t: "figure", id: "lieferantenwechsel" },
    { t: "h", level: 2, text: "What the new supplier needs" },
    {
      t: "ul",
      items: [
        "The customer's name and supply address",
        "The **[[marktlokation|market location ID]]** (11 digits including a check digit), or the meter number instead – the MaLo ID can be looked up from address or meter number through the BDEW's **MaLo-Ident** interface",
        "The desired start of supply",
        "Whether this is a switch, a [[umzug|move-in]] or an [[ersatzversorgung|substitute supply]] case",
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "This is where the conversion rate is decided. Every additional mandatory field costs conversion, and every missing field costs a follow-up query later. The MaLo ID can be optional, because it can be derived from address and meter number – but where the customer has it to hand, it saves an entire clarification case.",
    },
    { t: "h", level: 2, text: "The process" },
    {
      t: "ol",
      items: [
        "**Registration with the grid operator** – the new supplier registers the market location via UTILMD for the desired start date",
        "**Termination with the previous supplier** – the new supplier terminates the old contract as the customer's authorised representative (Bevollmächtigter)",
        "**Confirmation or rejection** – grid operator and previous supplier respond; a rejection becomes a clarification case",
        "**Assignment in the [[bilanzkreis|balancing group]]** – on the key date the market location moves into the new supplier's balancing group",
        "**Meter reading transfer** – the metering point operator delivers the switch reading via MSCONS",
        "**Final invoice from the previous supplier** – within six weeks of the end of supply, § 40c EnWG",
      ],
    },
    { t: "h", level: 2, text: "Grounds for rejection" },
    {
      t: "table",
      head: ["Ground", "What happens then"],
      rows: [
        ["An existing minimum term with the previous supplier", "The switch is deferred to the end of that term"],
        ["Market location not found", "A clarification case – check address and meter number"],
        ["Outstanding receivables with the previous supplier", "Not a ground for rejection – a switch may not fail on this"],
        ["Registration for a period already assigned", "Rejection due to an existing assignment (Ablehnung wegen bestehender Zuordnung): the earlier registration stands and the later one is rejected – the second supplier has to sort it out with the customer"],
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "Since 6 June 2025 a supplier switch must be technically possible within **24 hours**. The rule was originally due to take effect on 4 April 2025; the Bundesnetzagentur moved the date because most utilities could not complete the changeover in time – see [[formatanpassung|Formatanpassung]]. The legal basis is **§ 20a EnWG**, implemented as **LFW24**: the 24 hours apply to a pure supplier switch at an existing market location – move-in and move-out keep their previous deadlines. The process itself is governed by the GPKE ruling for electricity and GeLi Gas for gas.",
    },
  ],

  umzug: [
    {
      t: "lead",
      text: "Moving home is the most error-prone standard process in energy sales – because two addresses, two dates and often two market locations come together, and because the customer has entirely different worries that week.",
    },
    { t: "h", level: 2, text: "The three cases" },
    {
      t: "dl",
      items: [
        { term: "Moving out", def: "Supply ends on the move-out date. It needs a meter reading on the key date and an address for the final invoice – otherwise that invoice lands in the old flat." },
        { term: "Moving in without a contract", def: "Anyone who moves in and consumes without signing a contract ends up automatically in [[grundversorgung|basic supply]] or [[ersatzversorgung|substitute supply]]." },
        { term: "Moving with the contract", def: "The contract transfers to the new address. The supplier may refuse the transfer only if it cannot supply at the new address – for nationwide suppliers it is the norm." },
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "**Right to terminate on moving (§ 41b Abs. 1 EnWG)**: the customer may terminate the contract with **two weeks' notice to the moving date** – regardless of minimum term and ordinary notice period. Exception: the supplier offers to continue supply at the new address on the existing terms. The **final invoice** must be issued within **six weeks** of the end of supply under § 40c EnWG.",
    },
    { t: "h", level: 2, text: "What goes wrong" },
    {
      t: "ul",
      items: [
        "**No meter reading on the key date**: then it gets estimated – and the outgoing and incoming tenants argue about the split",
        "**No move-out notification**: the old customer keeps paying for a flat they no longer live in",
        "**Address matched incorrectly**: in apartment buildings, mapping a flat to a [[marktlokation|market location]] is often ambiguous without the meter number",
        "**Double supply**: outgoing and incoming tenants are registered at the same time",
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "A good move process asks for both meter readings in one step, accepts a photo as evidence, and then sends the final invoice to the new address automatically. That sounds obvious – but in practice it is still often a form plus manual processing.",
    },
  ],

  letztverbraucher: [
    {
      t: "lead",
      text: "A **Letztverbraucher**, a final consumer, is anyone who buys energy for their own consumption – as opposed to traders who resell it. Within that group the law draws fine but consequential distinctions.",
    },
    {
      t: "table",
      head: ["Type", "Definition", "Consequences"],
      rows: [
        ["Household customer", "Consumption predominantly for own domestic use, or professional own use up to 10,000 kWh a year", "Entitled to [[grundversorgung|basic supply]], special protection against disconnection, prices shown incl. VAT"],
        ["Commercial customer", "Consumption for commercial or professional purposes – a purpose of use, not a consumption threshold", "No longer a household customer above 10,000 kWh; net prices; no entitlement to Grundversorgung"],
        ["Tarifkunde (KAV)", "Supplied under [[grundversorgung|Grundversorgung]] or at general prices; a term from the Konzessionsabgabenverordnung", "Full [[konzessionsabgabe|Konzessionsabgabe]] (concession fee) by municipality size"],
        ["Sondervertragskunde (special contract customer)", "Any customer on a contract outside Grundversorgung – including households on a special tariff", "Reduced concession fee of 0.11 ct/kWh only where the price exceeds the KAV Grenzpreis (§ 2 Abs. 7 KAV); despite a special contract, anyone below 30 kW and 30,000 kWh a year still counts as a Tarifkunde (§ 1 Abs. 4 KAV)"],
        ["RLM customer", "Annual consumption above 100,000 kWh – the threshold for recorded load metering (§ 12 StromNZV)", "[[lastprofil|Quarter-hour metering]] instead of a standard load profile, [[leistungspreis|Leistungspreis]] (capacity charge)"],
        ["Connection user", "Whoever actually uses the grid connection – not necessarily the owner", "Contractual counterparty of the [[messstellenbetrieb|metering point operator]]"],
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "The difference between a household and a commercial customer is not a consumption figure but a purpose of use. A small medical practice consuming 8,000 kWh can be a household customer in the legal sense – with all the associated protections. Nor is “Sondervertragskunde” a size class: the household on an online tariff is one, the business in Grundversorgung is not. Contract form (EnWG), concession fee (KAV) and metering type (StromNZV) are three separate axes.",
    },
    { t: "h", level: 2, text: "Who else may be involved" },
    {
      t: "ul",
      items: [
        "**The connection owner** – usually the property owner, counterparty of the grid connection contract",
        "**The landlord**, for communal electricity and the heating system",
        "**Metering service providers** for heating cost allocation in apartment buildings – a separate market alongside [[messstellenbetrieb|metering point operation]]",
      ],
    },
  ],

  verbrauchsstelle: [
    {
      t: "lead",
      text: "The consumption point is the address supplied – in market jargon the [[marktlokation|Marktlokation]]. It is not necessarily the billing address, and not necessarily where the customer lives.",
    },
    {
      t: "table",
      head: ["Address", "Meaning"],
      rows: [
        ["Consumption point / supply address", "where the meter hangs and the energy flows"],
        ["Billing address", "where the invoice goes – often a different one for landlords or property managers"],
        ["Registered address", "relevant for credit checks and identification"],
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "In apartment buildings the street address is not enough. Without a flat number, floor or meter number it is impossible to say unambiguously which market location is meant – and the grid operator rejects the registration.",
    },
    {
      t: "p",
      text: "A customer can have several consumption points, one consumption point can cover several commodities – and one market location can comprise several [[messlokation|metering locations]].",
    },
  ],

  energieliefervertrag: [
    {
      t: "lead",
      text: "Legally, an energy supply contract is a sales contract for a good that flows continuously. What sets it apart is not the contract type but the density of regulation: the EnWG, the BGB and the Grundversorgung ordinances dictate what it must contain, how long it may bind the customer and how it ends again.",
    },
    { t: "h", level: 2, text: "How a contract comes about" },
    {
      t: "p",
      text: "A **Sondervertrag** (special contract, i.e. anything outside basic supply) arises through offer and acceptance – online, by phone or at the door. There is no statutory written-form requirement, but the terms must be available to the customer before conclusion. The contract in [[grundversorgung|Grundversorgung]], by contrast, comes about without any declaration at all: by drawing energy from the grid (§ 2 Abs. 2 StromGVV). [[ersatzversorgung|Ersatzversorgung]] arises by operation of law.",
    },
    { t: "h", level: 2, text: "Mandatory content under § 41 EnWG" },
    {
      t: "p",
      text: "§ 41 Abs. 1 EnWG requires contracts with [[letztverbraucher|final consumers]] to be simple and comprehensible and to contain at least the following:",
    },
    {
      t: "ul",
      items: [
        "Name and address of the supplier, type of service and quality level",
        "**Contract term**, conditions for renewal and termination, **notice periods**",
        "**Prices** and payment terms, including rules on [[abschlagszahlung|Abschlag]] instalments and advance payments",
        "Liability, compensation and refund rules where the service is not delivered as agreed",
        "Information on consumer rights, complaint procedures and out-of-court **dispute resolution** (Schlichtungsstelle Energie)",
        "A pointer to the possibility of [[lieferantenwechsel|switching supplier]] and the customer service contact details",
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "**Price changes** in a Sondervertrag must be communicated at least one month in advance in a simple and comprehensible way; the customer may then terminate without observing any notice period (**§ 41 Abs. 5 EnWG**, see [[preisanpassung|price changes]]). Termination in **Textform** – which includes email – is always possible, and the supplier must confirm receipt (§ 41b Abs. 2 EnWG).",
    },
    { t: "h", level: 2, text: "Withdrawal: 14 days" },
    {
      t: "p",
      text: "If the contract is concluded **at a distance** (web, phone, app) or **off-premises** (doorstep, trade fair stand), the consumer has a 14-day right of withdrawal (§§ 312g, 355 BGB). The period only starts once the customer has been properly informed of that right – without the notice it extends to as much as twelve months and 14 days.",
    },
    {
      t: "note",
      kind: "warn",
      text: "If the customer expressly asked for supply to start during the withdrawal period and then withdraws, they must pay **Wertersatz** (compensation for value) for the energy already delivered (§ 357 Abs. 8 BGB). If they were not informed of this, the claim lapses. For the process this means: the request for immediate supply is a separate, logged declaration – not a pre-ticked box.",
    },
    { t: "h", level: 2, text: "Contract terms since 2022" },
    {
      t: "table",
      head: ["Rule", "Content", "Basis"],
      rows: [
        ["Initial term", "at most **24 months**", "§ 309 Nr. 9 lit. a BGB"],
        ["Tacit renewal", "only **for an indefinite period**; the customer may then terminate at any time with **one month's** notice", "§ 309 Nr. 9 lit. b BGB, since 1 March 2022"],
        ["Notice period at end of term", "at most **one month** before the initial term expires", "§ 309 Nr. 9 lit. c BGB"],
        ["Cancellation button", "Anyone offering contracts online must provide a button labelled “Verträge hier kündigen” (cancel contracts here) and a confirmation page online; the termination must be confirmed immediately in Textform", "§ 312k BGB, since 1 July 2022"],
        ["Grundversorgung", "terminable at any time with **two weeks'** notice, in Textform", "§ 20 StromGVV / GasGVV"],
      ],
      caption: "The BGB rules apply to standard terms towards consumers; contracts concluded before 1 March 2022 were still allowed to renew automatically for up to a year.",
    },
    { t: "h", level: 2, text: "Special termination rights" },
    {
      t: "dl",
      items: [
        { term: "Price change", def: "Termination effective on the date the change takes effect, irrespective of term and notice period (§ 41 Abs. 5 EnWG; in Grundversorgung § 5 Abs. 3 StromGVV)." },
        { term: "Moving home", def: "Termination with **two weeks'** notice to the moving date, unless the supplier can continue supplying at the new address on the same terms (§ 41b Abs. 1 EnWG) – details in [[umzug|Moving home]]." },
        { term: "Ersatzversorgung", def: "Anyone switching out of [[ersatzversorgung|Ersatzversorgung]] has no notice period to observe." },
        { term: "Switch handled by the new supplier", def: "In a [[lieferantenwechsel|supplier switch]] the new supplier terminates as the customer's agent – the notice period of the old contract still applies." },
      ],
    },
    { t: "h", level: 2, text: "The contract as a state machine" },
    {
      t: "p",
      text: "In sales and billing systems the supply contract is an object with a lifecycle. A robust status model separates the **legal state** from the **supply state**, because the two can diverge: a contract can be concluded but not yet supplying; it can be terminated and still be supplied for months.",
    },
    {
      t: "steps",
      items: [
        { title: "Offer", text: "Price and terms are fixed, the customer has not yet accepted. Expires after the binding period." },
        { title: "Concluded", text: "Acceptance received, withdrawal period running. Supply start has been requested but depends on the switching process – see [[wechselprozess-gpke|switching processes]]." },
        { title: "Supplying", text: "The grid operator has assigned the [[marktlokation|Marktlokation]], supply start is confirmed. Instalments run, invoices are issued." },
        { title: "Terminated", text: "A termination is effective, the supply end is fixed or being calculated. Supply continues until then." },
        { title: "Ended", text: "Supply end reached, switch or move-out reading available, [[schlussrechnung|final invoice]] within six weeks (§ 40c EnWG)." },
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "**Deadline calculation** is the part most often implemented wrongly. Three rules from practice: compute periods under §§ 187 ff. BGB – the day of receipt does not count, and if the period ends on a Saturday, Sunday or public holiday it ends on the next working day. **Receipt** of the termination by the supplier is decisive, not the date sent. And the term hangs on the **supply start**, not on contract conclusion – a 12-month contract signed in January and supplied from March ends in March.",
    },
    {
      t: "example",
      title: "Calculating the termination window",
      lines: [
        { label: "Supply start", value: "1 April 2025" },
        { label: "Initial term", value: "12 months → ends 31 March 2026" },
        { label: "Notice period", value: "1 month → must be received by 28 February 2026" },
        { label: "Nothing received by then", value: "renewal for an indefinite period" },
      ],
      result: { label: "Thereafter", value: "terminable at any time with 1 month's notice, e.g. received 10 May → ends 10 June" },
    },
  ],

  "wechselprozess-gpke": [
    {
      t: "lead",
      text: "The article [[lieferantenwechsel|Switching supplier]] describes what the customer experiences. This one is about the machinery behind it: **GPKE** (“Geschäftsprozesse zur Kundenbelieferung mit Elektrizität”) for electricity and **GeLi Gas** (“Geschäftsprozesse Lieferantenwechsel Gas”) are rulings (Festlegungen) of the Bundesnetzagentur, the federal regulator. They prescribe for every market partner which message to send to whom and when – and what happens if they do not.",
    },
    { t: "h", level: 2, text: "Who is involved" },
    {
      t: "dl",
      items: [
        { term: "New supplier (LFN)", def: "Triggers the process: registers the [[marktlokation|Marktlokation]] with the grid operator and terminates with the previous supplier." },
        { term: "Old supplier (LFA)", def: "Confirms or rejects the termination, deregisters the Marktlokation and issues the [[schlussrechnung|final invoice]]." },
        { term: "Grid operator (NB)", def: "Keeps the assignment of the Marktlokation to supplier and [[bilanzkreis|balancing group]], checks registrations, responds, maintains master data and bills grid usage." },
        { term: "Metering point operator (MSB)", def: "Delivers the meter readings for the switch date – normally via the grid operator, directly where a competitive MSB is involved." },
        { term: "Balancing coordinator (BIKO)", def: "The transmission system operator in its role for [[bilanzkreis|balancing group settlement]] – receives the aggregated assignments, not the individual cases." },
      ],
    },
    {
      t: "p",
      text: "The roles are defined functionally, not organisationally: a municipal utility can be LFA, NB and MSB at the same time – and still has to route the messages internally as if it were three companies ([[unbundling|unbundling]]). Partners are addressed by their [[codenummern|market partner ID]].",
    },
    { t: "h", level: 2, text: "The messages" },
    {
      t: "p",
      text: "Technically everything runs over [[marktkommunikation|market communication]]. Master data exchange uses the **UTILMD** format; which business case is meant is stated in the **Transaktionsgrund** (transaction reason – e.g. supplier switch, move-in or move-out, assignment to substitute or basic supply). The reply is a separate UTILMD message carrying an **Antwortcode** (response code): acceptance, or rejection with a reason.",
    },
    {
      t: "table",
      head: ["Process step", "From → To", "Message", "Deadline (order of magnitude)"],
      rows: [
        ["Termination with old supplier", "LFN → LFA", "UTILMD (termination)", "Reply within a few working days; the old contract's notice period remains decisive"],
        ["Grid usage registration", "LFN → NB", "UTILMD (registration, Transaktionsgrund)", "Since LFW24 at the earliest for the next day, reply within one day"],
        ["Confirmation / rejection", "NB → LFN", "UTILMD (reply with Antwortcode)", "Deadline-bound; silence is not consent"],
        ["Deregistration by old supplier", "LFA → NB / NB → LFA", "UTILMD (deregistration or notice of supply end)", "As of the confirmed switch date"],
        ["Zuordnungsliste (assignment list)", "NB → LF", "UTILMD (list of all assigned Marktlokationen)", "Monthly; the supplier must report discrepancies back"],
        ["Master data change", "responsible role → affected roles", "UTILMD (change)", "Without delay after the change, e.g. meter replacement or address correction"],
        ["Meter reading on the key date", "MSB/NB → LFA and LFN", "MSCONS", "A few working days after the key date; otherwise a [[ersatzwertbildung|substitute value]]"],
        ["Grid usage billing", "NB → LF", "INVOIC, remittance advice back via REMADV", "Monthly (instalments) and after meter reading – see [[netznutzungsabrechnung|grid usage billing]]"],
      ],
      caption: "The exact deadlines and codes are in the currently valid version of the ruling and the implementation handbooks (bdew-mako.de, vormals edi-energy.de) and change with every [[formatanpassung|Formatanpassung]].",
    },
    {
      t: "note",
      kind: "law",
      text: "**LFW24** (§ 20a EnWG, implemented on 6 June 2025) sped up registration: the grid operator must process the switch within **24 hours**, and supply can start the **next day**. Termination with the old supplier and registration with the grid operator are **decoupled** – registration no longer waits for the termination confirmation; instead the grid operator informs the previous supplier of the supply end. So that the new supplier can address the Marktlokation at all, there is **MaLo-Ident**: an interface specified by the BDEW that determines the [[marktlokation|MaLo ID]] from address or meter number. Move-in and move-out continue with the previous deadlines.",
    },
    { t: "h", level: 2, text: "Move-in and move-out in the process" },
    {
      t: "ul",
      items: [
        "**Move-in with a contract**: the supplier registers with the Transaktionsgrund “move-in” – retroactively within narrow limits, because the customer has already consumed.",
        "**Move-in without a contract**: the grid operator assigns the Marktlokation to the basic supplier (substitute or basic supply assignment); the basic supplier learns about its new customer from this message.",
        "**Move-out**: the supplier deregisters; if no successor is known the assignment ends – and the next consumption starts [[ersatzversorgung|Ersatzversorgung]] again.",
        "**No switch**: if only the contract changes with the same supplier (tariff change), no market communication is needed – the assignment stays.",
      ],
    },
    { t: "h", level: 2, text: "Typical rejection reasons" },
    {
      t: "table",
      head: ["Category", "What is behind it", "What the supplier does"],
      rows: [
        ["Marktlokation not identifiable", "MaLo ID wrong, meter number unknown, address ambiguous", "Follow up with the customer, use MaLo-Ident, re-register"],
        ["Period already assigned", "Another supplier has already had the same period confirmed", "Clarify with the customer; the earlier registration stands"],
        ["Deadline violated", "Requested supply start is too early or too far in the future", "Choose a new date, re-register"],
        ["Contract binding with old supplier", "The old supplier rejects the termination because the notice period is not met", "Move the switch to the next possible contract end"],
        ["Formal errors", "Mandatory fields missing, code number invalid, wrong data format version", "Technical clarification case – usually a mapping problem in the billing system"],
      ],
      caption: "Outstanding debts with the old supplier are explicitly not a rejection reason.",
    },
    {
      t: "note",
      kind: "praxis",
      text: "For a sales or portal system the switching process is an **asynchronous interface with an uncertain outcome**. The contract is concluded, but the supply start is only fixed once the grid operator confirms. Good systems model this as its own state (“registration in progress”), show the customer the status in the [[endkundenportal|portal]] and turn every rejection into a clarification case with a follow-up date – instead of losing it in an email to customer service.",
    },
  ],

  bonitaetspruefung: [
    {
      t: "lead",
      text: "An energy supplier performs first: it buys the electricity and pays [[netzentgelte|grid fees]], levies and taxes to third parties – and only gets its money with the [[abschlagszahlung|Abschlag]] instalment or the [[jahresabrechnung|annual bill]]. If a customer defaults, the supplier is left with all the costs. The credit check is meant to make that risk visible before the signature.",
    },
    { t: "h", level: 2, text: "How the check works" },
    {
      t: "p",
      text: "In the mass market the check runs automatically through a **credit agency** (Auskunftei): SCHUFA, Creditreform Boniversum, CRIF or others. It returns a **score** (a probability of default), often with a traffic-light recommendation, plus negative entries such as enforced claims or insolvency. This is supplemented by in-house data: previous contracts, open receivables from the supplier's own books, returned direct debits.",
    },
    {
      t: "table",
      head: ["Data source", "What it provides", "Limits"],
      rows: [
        ["Agency score", "Probability of default based on payment experience from many contracting parties", "Knows nothing about the person; the score must not rest on address data alone"],
        ["Negative entries", "Default summonses, enforcement, insolvency, affidavits", "Observe deletion periods; old cases say little about today"],
        ["Own history", "Payment behaviour in the existing customer base, open final invoices", "Only available for returning customers"],
        ["Identity check", "Do name, date of birth and address match the population register?", "Fraud prevention, not a statement about creditworthiness"],
      ],
    },
    { t: "h", level: 2, text: "What the law says" },
    {
      t: "note",
      kind: "law",
      text: "The legal basis for the enquiry is **Art. 6 Abs. 1 lit. b DSGVO** (GDPR – steps prior to a contract) and **lit. f** (legitimate interest in protection against default) – the customer must be informed beforehand (Art. 13/14 DSGVO), usually in the privacy notice of the application flow. **§ 31 BDSG** sets rules for scoring: a scientifically recognised mathematical-statistical procedure, no assessment based on address alone, information about the use of address data. In 2023 the CJEU (case C-634/21) clarified that computing the score can itself be an automated decision under **Art. 22 DSGVO** if the contracting party substantially relies on it – with the resulting rights to information and intervention.",
    },
    {
      t: "table",
      head: ["", "Sondervertrag", "[[grundversorgung|Grundversorgung]]"],
      rows: [
        ["Rejection for weak credit", "permitted – freedom of contract", "**not** permitted: obligation to contract with household customers (§ 36 EnWG)"],
        ["Permitted safeguards", "Advance payment, deposit, higher instalment, credit reservation in the terms", "only a **Sicherheitsleistung** (security deposit) or advance payment where there are concrete indications (§§ 14, 15 StromGVV)"],
        ["Agency enquiry", "usual, with information to the customer", "possible, but without effect on whether supply is granted"],
      ],
      caption: "The basic supplier may only refuse Grundversorgung if supply is economically unreasonable for it – a high bar that goes far beyond poor credit.",
    },
    { t: "h", level: 2, text: "Manage risk instead of rejecting" },
    {
      t: "ul",
      items: [
        "**Advance payment**: the instalment falls due before the supply month rather than after – halves the open exposure",
        "**Deposit / Sicherheitsleistung**: a one-off amount of roughly two monthly instalments, interest-bearing and repaid at contract end; expressly regulated for Grundversorgung in § 15 StromGVV",
        "**Instalment level**: no instalments set so low that they produce a large [[nachzahlung-guthaben|back payment]] – the default usually happens on the annual bill, not on the instalment",
        "**Payment method**: direct debit instead of bank transfer measurably lowers the default rate; prepayment tariffs only for customers who consciously opt in",
        "**Early warning**: a returned direct debit or a missed payment in the first three months is the strongest predictor – that is where [[zahlung-und-mahnwesen|dunning]] starts",
      ],
    },
    { t: "h", level: 2, text: "Integration into onboarding" },
    {
      t: "steps",
      items: [
        { title: "Identification", text: "Capture and normalise name, date of birth, registered and supply address – the agency matches on exactly these fields, and typos produce false hits." },
        { title: "Instant decision", text: "Synchronous call during the application, answer in seconds. Green: the contract is concluded. Red: an alternative offer with advance payment or deposit instead of a hard refusal." },
        { title: "Manual review", text: "Amber cases and agency outages land in a review list with a deadline. The customer learns that the application was received – not that it is being reviewed." },
        { title: "Documentation", text: "Store score, timestamp, decision rule and outcome; the customer has a right of access under Art. 15 DSGVO and, if rejected, must be told the essential reasons." },
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "The credit check only catches the customer who cannot pay. The **fraudulent** one is recognised by patterns: the same [[marktlokation|Marktlokation]] is registered several times within days (double registration, often to collect switching bonuses), bank details and name do not match, the supply address does not exist or already carries an open final invoice. These rules belong in the same decision stage as the score – and in the same documentation.",
    },
    {
      t: "note",
      kind: "warn",
      text: "A credit reservation in the terms (“the contract is only concluded after a positive check”) has to match the customer journey: anyone who sends a contract confirmation online immediately has concluded the contract – a later rejection is then a termination, to which the rules of the [[energieliefervertrag|supply contract]] apply.",
    },
  ],
};
