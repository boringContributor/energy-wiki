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
        { title: "Registration hurdle", text: "Anyone made to wait for a letter with an activation code does not come back. Identifying via customer number plus invoice amount or meter number is faster and secure enough." },
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
        "The **[[marktlokation|market location ID]]**, or the meter number instead",
        "The desired start of supply",
        "Whether this is a switch, a [[umzug|move-in]] or an [[ersatzversorgung|substitute supply]] case",
      ],
    },
    {
      t: "note",
      kind: "praxis",
      text: "This is where the conversion rate is decided. Every additional mandatory field costs conversion, and every missing field costs a follow-up query later. The MaLo ID can be optional, because it can be derived from address and meter number – but where the customer has it to hand, it saves an entire clarification case.",
    },
    { t: "h", level: 2, text: "Grounds for rejection" },
    {
      t: "table",
      head: ["Ground", "What happens then"],
      rows: [
        ["An existing minimum term with the previous supplier", "The switch is deferred to the end of that term"],
        ["Market location not found", "A clarification case – check address and meter number"],
        ["Outstanding receivables with the previous supplier", "Not a ground for rejection – a switch may not fail on this"],
        ["Two suppliers registering at once", "The grid operator rejects both and demands clarification"],
      ],
    },
    {
      t: "note",
      kind: "law",
      text: "Since 6 June 2025 a supplier switch must be technically possible within **24 hours**. The rule was originally due to take effect on 4 April 2025; the Bundesnetzagentur moved the date because most utilities could not complete the changeover in time – see [[formatanpassung|Formatanpassung]]. The process itself is governed by the GPKE ruling for electricity and GeLi Gas for gas.",
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
        { term: "Moving with the contract", def: "The contract transfers to the new address. Only possible where the supplier also supplies there – which for nationwide suppliers is the norm." },
      ],
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
        ["Commercial / tariff customer", "Small business on a standard tariff", "Usually treated like a household customer, but prices shown net"],
        ["Special contract customer", "Individually negotiated contract, usually above 100,000 kWh", "Reduced [[konzessionsabgabe|concession fee]], [[lastprofil|RLM metering]], [[leistungspreis|capacity charge]]"],
        ["Connection user", "Whoever actually uses the grid connection – not necessarily the owner", "Contractual counterparty of the [[messstellenbetrieb|metering point operator]]"],
      ],
    },
    {
      t: "note",
      kind: "warn",
      text: "The difference between a household and a commercial customer is not a consumption figure but a purpose of use. A small medical practice consuming 8,000 kWh can be a household customer in the legal sense – with all the associated protections.",
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
};
