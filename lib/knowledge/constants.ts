import { BRAND_RELIABILITY_SNAPSHOTS } from '@/lib/brandReliabilityNotes';

/** Minimum confidence to treat a field as verified for display. */
export const CONFIDENCE_DISPLAY_THRESHOLD = 'medium' as const;

/** Shown when a spec or fact cannot be sourced. */
export const UNABLE_TO_VERIFY = 'Unable to verify with available data.';

/** Makes with catalog + brandReliabilityNotes — all model hubs get Phase 3 authority shells. */
export const KNOWLEDGE_WIRED_BRAND_SLUGS = BRAND_RELIABILITY_SNAPSHOTS.map(
  (snapshot) => snapshot.id,
) as readonly string[];

/** Toyota models with full modelReliabilityNotes snapshots (richer than failure-profile stubs). */
export const KNOWLEDGE_PILOT_MODEL_IDS = [
  'toyota-rav4',
  'toyota-4runner',
  'toyota-highlander',
  'toyota-camry',
  'toyota-corolla',
] as const;

export type KnowledgePilotModelId = (typeof KNOWLEDGE_PILOT_MODEL_IDS)[number];

export function isKnowledgeWiredBrand(slug: string): boolean {
  return KNOWLEDGE_WIRED_BRAND_SLUGS.includes(slug);
}
