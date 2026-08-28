import type { Block } from "../types";

import { grundlagenEn } from "./grundlagen.en";
import { spartenEn } from "./sparten.en";
import { anlagenEn } from "./anlagen.en";
import { tarifeEn } from "./tarife.en";
import { messwesenEn } from "./messwesen.en";
import { abrechnungEn } from "./abrechnung.en";
import { kundeEn } from "./kunde.en";
import { rechtEn } from "./recht.en";

/** English article bodies, keyed by slug. See README.md for the terminology policy. */
export const enBodies: Record<string, Block[]> = {
  ...grundlagenEn,
  ...spartenEn,
  ...anlagenEn,
  ...tarifeEn,
  ...messwesenEn,
  ...abrechnungEn,
  ...kundeEn,
  ...rechtEn,
};

export type EnBodies = typeof enBodies;
