import type { Category, CategoryId } from "./types";

export const categories: Category[] = [
  {
    id: "grundlagen",
    title: { de: "Markt & Grundlagen", en: "Market & fundamentals" },
    summary: {
      de: "Wer macht was im deutschen Energiemarkt – von der Erzeugung bis zur Rechnung.",
      en: "Who does what in the German energy market – from generation to the invoice.",
    },
    tone: "markt",
    icon: "network",
  },
  {
    id: "sparten",
    title: { de: "Sparten: Strom, Gas, Wasser, Wärme", en: "Commodities: power, gas, water, heat" },
    summary: {
      de: "Was die vier Sparten unterscheidet – Einheiten, Messung, Besonderheiten.",
      en: "What sets the four commodities apart – units, metering, quirks.",
    },
    tone: "strom",
    icon: "bolt",
  },
  {
    id: "tarife",
    title: { de: "Tarife & Preisbildung", en: "Tariffs & pricing" },
    summary: {
      de: "Grundpreis, Arbeitspreis, dynamische Tarife – und wie ein Preis wirklich zustande kommt.",
      en: "Standing charge, unit rate, dynamic tariffs – and how a price is actually built.",
    },
    tone: "gas",
    icon: "tag",
  },
  {
    id: "messwesen",
    title: { de: "Zähler & Messwesen", en: "Meters & metering" },
    summary: {
      de: "Vom Ferraris-Zähler bis zum Smart-Meter-Gateway: Zählertypen, Zählwerke, Ablesung.",
      en: "From the spinning-disc meter to the smart meter gateway: types, registers, readings.",
    },
    tone: "messung",
    icon: "gauge",
  },
  {
    id: "abrechnung",
    title: { de: "Abrechnung & Zahlung", en: "Billing & payment" },
    summary: {
      de: "Abschlag, Jahresabrechnung, Nachzahlung – wie aus Zählerständen Geld wird.",
      en: "Instalments, annual statements, back-payments – how readings become money.",
    },
    tone: "waerme",
    icon: "receipt",
  },
  {
    id: "kunde",
    title: { de: "Kunde, Portal & Prozesse", en: "Customer, portal & processes" },
    summary: {
      de: "Endkundenportal, Lieferantenwechsel, Umzug – die Prozesse hinter der Kundenbeziehung.",
      en: "Self-service portals, supplier switching, moving home – the processes behind the relationship.",
    },
    tone: "wasser",
    icon: "user",
  },
  {
    id: "recht",
    title: { de: "Recht, Steuern & Umlagen", en: "Law, taxes & levies" },
    summary: {
      de: "EnWG, MsbG, StromGVV, CO₂-Preis: die Regeln, die jeden Preis mitbestimmen.",
      en: "EnWG, MsbG, StromGVV, carbon pricing: the rules behind every price.",
    },
    tone: "recht",
    icon: "scale",
  },
];

export const categoryById = new Map<CategoryId, Category>(
  categories.map((c) => [c.id, c]),
);
