import { BRAND_FAILURE_PROFILES } from '@/lib/brandFailureProfiles';
import { slugifyModel } from '@/lib/modelCommonServices';
import { getModelReliabilitySnapshot } from '@/lib/modelReliabilityNotes';
import { VEHICLE_MODELS } from '@/lib/vehicleModels';
import type { ClaimRecord } from '@/lib/knowledge/types';

function matchesCommonModel(modelName: string, commonModels: readonly string[]): boolean {
  const normalized = modelName.toLowerCase();
  return commonModels.some((commonModel) => {
    const common = commonModel.toLowerCase();
    return common === normalized || normalized.includes(common);
  });
}

function formatFailureProfiles(
  profiles: { title: string; description: string }[],
): string {
  return profiles.map((profile) => `${profile.title}: ${profile.description}`).join(' ');
}

/**
 * Map brandFailureProfiles shop notes into model ClaimRecords for catalog commonModels.
 * Skips models that already have richer modelReliabilityNotes snapshots.
 */
export function buildFailureProfileModelClaims(createdAt: string): ClaimRecord[] {
  const claims: ClaimRecord[] = [];

  for (const vehicle of VEHICLE_MODELS) {
    const profile = BRAND_FAILURE_PROFILES.find((entry) => entry.id === vehicle.brand);
    if (!profile || !matchesCommonModel(vehicle.model, profile.commonModels)) continue;
    if (getModelReliabilitySnapshot(vehicle.brand, slugifyModel(vehicle.model))) continue;

    const modelId = vehicle.slug;
    const source = {
      id: `rkc-failure-profile-${profile.id}`,
      label: 'RKC shop observation (brand failure profiles)',
    };

    const intro = profile.failureProfiles[0];
    if (intro) {
      claims.push({
        id: `claim-${modelId}-intro-fp`,
        entityType: 'model',
        entityId: modelId,
        topic: 'shop_observation',
        statement: `${intro.title}: ${intro.description}`,
        confidence: 'medium',
        reviewStatus: 'shop_observation',
        sources: [source],
        createdAt,
      });
    }

    if (profile.failureProfiles.length > 0) {
      claims.push({
        id: `claim-${modelId}-common-issues-fp`,
        entityType: 'model',
        entityId: modelId,
        topic: 'common-issues',
        statement: formatFailureProfiles(profile.failureProfiles),
        confidence: 'medium',
        reviewStatus: 'shop_observation',
        sources: [source],
        createdAt,
      });
    }

    if (profile.coloradoNotes.trim()) {
      claims.push({
        id: `claim-${modelId}-colorado-angle-fp`,
        entityType: 'model',
        entityId: modelId,
        topic: 'colorado-angle',
        statement: profile.coloradoNotes,
        confidence: 'medium',
        reviewStatus: 'shop_observation',
        sources: [source],
        createdAt,
      });
    }

    if (profile.buyerWarning.trim()) {
      claims.push({
        id: `claim-${modelId}-service-notes-fp`,
        entityType: 'model',
        entityId: modelId,
        topic: 'service-notes',
        statement: profile.buyerWarning,
        confidence: 'medium',
        reviewStatus: 'shop_observation',
        sources: [source],
        createdAt,
      });
    }
  }

  return claims;
}

/** Model IDs with ownership-relevant shop claims (model notes or failure profiles). */
export function getModelIdsWithOwnershipClaims(
  claims: readonly ClaimRecord[],
): readonly string[] {
  const ownershipTopics = new Set(['common-issues', 'colorado-angle', 'service-notes', 'faq']);
  const ids = new Set<string>();
  for (const claim of claims) {
    if (claim.entityType !== 'model') continue;
    if (claim.reviewStatus !== 'shop_observation') continue;
    if (!ownershipTopics.has(claim.topic)) continue;
    ids.add(claim.entityId);
  }
  return [...ids].sort();
}
