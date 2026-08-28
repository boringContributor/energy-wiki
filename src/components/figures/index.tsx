import type { Locale } from "@/lib/i18n";

import {
  AbschlagRechner,
  GaspreisStack,
  GasUmrechner,
  StrompreisStack,
  TarifAnatomie,
  WasserpreisStack,
} from "./calculators";
import {
  Co2PreisPfad,
  DynamischerTarifSimulator,
  KilowattstundeVergleich,
  LastprofilChart,
} from "./charts";
import {
  PvRechner,
  WaermepumpeRechner,
  WaermepumpenTypen,
} from "./anlagen";
import {
  AnlagenUebersicht,
  Blindleistung,
  Heizungsvergleich,
  Lieferantenwechsel,
  MaloMelo,
  Marktrollen,
  Netzebenen,
  PortalFunktionen,
  RechnungAnatomie,
  SmartMeterGateway,
  Wertschoepfungskette,
  ZaehlerAnatomie,
} from "./diagrams";
import { ZaehlerTypen, Zaehlerstandsarten } from "./zaehler";

/**
 * Content references figures by id. Keeping the mapping in one place means an
 * article file never imports a component directly and stays pure data.
 */
export const figures = {
  "strompreis-stack": StrompreisStack,
  "gaspreis-stack": GaspreisStack,
  "wasserpreis-stack": WasserpreisStack,
  "gas-umrechner": GasUmrechner,
  "abschlag-rechner": AbschlagRechner,
  "tarif-anatomie": TarifAnatomie,
  "dynamischer-tarif": DynamischerTarifSimulator,
  lastprofil: LastprofilChart,
  "co2-preis-pfad": Co2PreisPfad,
  "kwh-vergleich": KilowattstundeVergleich,
  wertschoepfungskette: Wertschoepfungskette,
  marktrollen: Marktrollen,
  "malo-melo": MaloMelo,
  "zaehler-anatomie": ZaehlerAnatomie,
  "zaehler-typen": ZaehlerTypen,
  "zaehlerstandsarten": Zaehlerstandsarten,
  "smart-meter-gateway": SmartMeterGateway,
  lieferantenwechsel: Lieferantenwechsel,
  netzebenen: Netzebenen,
  "rechnung-anatomie": RechnungAnatomie,
  blindleistung: Blindleistung,
  "portal-funktionen": PortalFunktionen,
  "anlagen-uebersicht": AnlagenUebersicht,
  "pv-rechner": PvRechner,
  "waermepumpe-rechner": WaermepumpeRechner,
  "waermepumpen-typen": WaermepumpenTypen,
  heizungsvergleich: Heizungsvergleich,
} as const;

export type FigureId = keyof typeof figures;

export function Figure({ id }: { id: string; locale?: Locale }) {
  const Component = figures[id as FigureId];
  if (!Component) {
    return (
      <div className="rounded-xl border border-dashed border-border-strong p-6 text-center text-sm text-fg-subtle">
        Grafik „{id}“ fehlt noch.
      </div>
    );
  }
  return <Component />;
}
