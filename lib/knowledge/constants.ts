/** Minimum confidence to treat a field as verified for display. */
export const CONFIDENCE_DISPLAY_THRESHOLD = 'medium' as const;

/** Shown when a spec or fact cannot be sourced. */
export const UNABLE_TO_VERIFY = 'Unable to verify with available data.';

/** Phase 2/3 pilot models wired for authority overview sections (shop-observation claims exist). */
export const KNOWLEDGE_PILOT_MODEL_IDS = [
  'toyota-rav4',
  'toyota-4runner',
  'toyota-highlander',
  'toyota-camry',
  'toyota-corolla',
] as const;

export type KnowledgePilotModelId = (typeof KNOWLEDGE_PILOT_MODEL_IDS)[number];
