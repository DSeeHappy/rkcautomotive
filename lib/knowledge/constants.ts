import { BRAND_RELIABILITY_SNAPSHOTS } from '@/lib/brandReliabilityNotes';

/** Minimum confidence to treat a field as verified for display. */
export const CONFIDENCE_DISPLAY_THRESHOLD = 'medium' as const;

/** Shown when a spec or fact cannot be sourced. */
export const UNABLE_TO_VERIFY = 'Unable to verify with available data.';

/** Makes with catalog + brandReliabilityNotes — all model hubs get Phase 3 authority shells. */
export const KNOWLEDGE_WIRED_BRAND_SLUGS = BRAND_RELIABILITY_SNAPSHOTS.map(
  (snapshot) => snapshot.id,
) as readonly string[];

/**
 * Models with full modelReliabilityNotes snapshots (richer than failure-profile stubs).
 * Toyota batch + Spark-structured Honda/Ford/Chevy/Jeep (2026-07-20).
 */
export const KNOWLEDGE_PILOT_MODEL_IDS = [
  'toyota-rav4',
  'toyota-4runner',
  'toyota-highlander',
  'toyota-camry',
  'toyota-corolla',
  'honda-civic',
  'honda-accord',
  'honda-cr-v',
  'honda-pilot',
  'ford-f-150',
  'ford-explorer',
  'ford-escape',
  'ford-mustang',
  'chevrolet-silverado',
  'chevrolet-tahoe',
  'chevrolet-equinox',
  'chevrolet-malibu',
  'jeep-wrangler',
  'jeep-grand-cherokee',
  'jeep-gladiator',
] as const;

export type KnowledgePilotModelId = (typeof KNOWLEDGE_PILOT_MODEL_IDS)[number];

export function isKnowledgeWiredBrand(slug: string): boolean {
  return KNOWLEDGE_WIRED_BRAND_SLUGS.includes(slug);
}
