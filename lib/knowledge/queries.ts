import {
  isKnowledgeWiredBrand,
  KNOWLEDGE_PILOT_MODEL_IDS,
  KNOWLEDGE_WIRED_BRAND_SLUGS,
  UNABLE_TO_VERIFY,
} from '@/lib/knowledge/constants';
import { KNOWLEDGE_CATALOG, KNOWLEDGE_OWNERSHIP_MODEL_IDS } from '@/lib/knowledge/buildCatalog';
import {
  buildOemPhase3Item,
  buildOemSpecOverviewItems,
  buildVehicleSpecsFromOem,
  countVerifiedSpecFields,
  getOemSources,
  hasOemModelData,
  mergeSpecCategoriesWithOem,
} from '@/lib/knowledge/oemPack';
import { buildPhase3Sections } from '@/lib/knowledge/phase3Sections';
import { createEmptyVehicleSpecs, SPEC_CATEGORY_ORDER } from '@/lib/knowledge/specs';
import { isDisplayableConfidence } from '@/lib/knowledge/verified';
import type {
  ClaimRecord,
  KnowledgeCatalog,
  ModelKnowledgeOverview,
  ModelOverviewSection,
  ModelRecord,
} from '@/lib/knowledge/types';

export function getKnowledgeCatalog(): KnowledgeCatalog {
  return KNOWLEDGE_CATALOG;
}

export function getManufacturerBySlug(slug: string) {
  return KNOWLEDGE_CATALOG.manufacturers.find((m) => m.slug === slug);
}

export function getKnowledgeModel(modelId: string): ModelRecord | undefined {
  return KNOWLEDGE_CATALOG.models.find((m) => m.id === modelId);
}

export function getKnowledgeModelByMakeSlug(
  makeSlug: string,
  modelSlug: string,
): ModelRecord | undefined {
  return KNOWLEDGE_CATALOG.models.find(
    (m) => m.manufacturerId === makeSlug && m.slug === modelSlug,
  );
}

export function getClaimsForModel(modelId: string): ClaimRecord[] {
  return KNOWLEDGE_CATALOG.claims.filter(
    (claim) => claim.entityType === 'model' && claim.entityId === modelId,
  );
}

export function isKnowledgePilotModel(modelId: string): boolean {
  const model = getKnowledgeModel(modelId);
  if (!model) return false;
  return isKnowledgeWiredBrand(model.manufacturerId);
}

export function isKnowledgeModelWithClaims(modelId: string): boolean {
  return KNOWLEDGE_OWNERSHIP_MODEL_IDS.includes(modelId);
}

export function getClaimsForManufacturer(manufacturerId: string): ClaimRecord[] {
  return KNOWLEDGE_CATALOG.claims.filter(
    (claim) => claim.entityType === 'manufacturer' && claim.entityId === manufacturerId,
  );
}

function buildIdentitySection(model: ModelRecord): ModelOverviewSection {
  const manufacturer = getManufacturerBySlug(model.manufacturerId);
  const items = [
    {
      label: 'Make',
      value: manufacturer?.name ?? model.manufacturerId,
      confidence: 'high' as const,
      reviewStatus: 'verified' as const,
    },
    {
      label: 'Model',
      value: model.name,
      confidence: 'high' as const,
      reviewStatus: 'verified' as const,
    },
    {
      label: 'Body style',
      value: model.vehicleType,
      confidence: 'medium' as const,
      reviewStatus: 'verified' as const,
    },
    {
      label: 'Model years (catalog)',
      value: model.yearRange.displayValue,
      confidence: model.yearRange.confidence,
      reviewStatus: model.yearRange.reviewStatus,
    },
  ];

  return {
    id: 'identity',
    title: 'Model identity',
    items,
    reviewStatus: 'verified',
    confidence: 'medium',
    sources: model.yearRange.sources,
  };
}

/** Topics rendered in Phase 3 Ownership — omit from duplicate shop-observations strip. */
const PHASE3_OWNERSHIP_TOPICS = new Set([
  'common-issues',
  'colorado-angle',
  'service-notes',
]);

function buildShopObservationsSection(modelId: string): ModelOverviewSection | null {
  const claims = getClaimsForModel(modelId).filter(
    (claim) =>
      claim.reviewStatus === 'shop_observation' &&
      claim.topic !== 'faq' &&
      claim.topic !== 'shop_observation' &&
      !PHASE3_OWNERSHIP_TOPICS.has(claim.topic),
  );
  if (claims.length === 0) return null;

  return {
    id: 'shop-observations',
    title: 'Shop observations (not OEM specs)',
    items: claims.slice(0, 6).map((claim) => ({
      label: claim.topic.replace(/-/g, ' '),
      value: claim.statement,
      confidence: claim.confidence,
      reviewStatus: claim.reviewStatus,
    })),
    reviewStatus: 'shop_observation',
    confidence: 'medium',
    sources: claims[0]?.sources ?? [],
  };
}

function buildSpecsOverviewSection(model: ModelRecord): ModelOverviewSection {
  const oemItems = buildOemSpecOverviewItems(model.id);
  const oemSources = getOemSources(model.id);

  if (oemItems.length === 0) {
    return {
      id: 'oem-specs',
      title: 'OEM specifications',
      items: [],
      reviewStatus: 'unverified',
      confidence: 'none',
      sources: [],
      emptyMessage: UNABLE_TO_VERIFY,
    };
  }

  return {
    id: 'oem-specs',
    title: 'OEM specifications',
    items: oemItems,
    reviewStatus: 'verified',
    confidence: 'high',
    sources: oemSources,
  };
}

function enrichPhase3WithOem(
  sections: ModelOverviewSection[],
  modelId: string,
): ModelOverviewSection[] {
  const oemSources = getOemSources(modelId);
  const fieldMap = {
    engineering: buildOemPhase3Item(modelId, 'engineering'),
    enthusiast: buildOemPhase3Item(modelId, 'enthusiast'),
    comparison: buildOemPhase3Item(modelId, 'comparison'),
  } as const;

  return sections.map((section) => {
    const oemItem = fieldMap[section.id as keyof typeof fieldMap];
    if (!oemItem) return section;

    return {
      ...section,
      items: [oemItem],
      reviewStatus: 'verified',
      confidence: oemItem.confidence,
      sources: oemSources,
      emptyMessage: undefined,
    };
  });
}

/** Authority overview for model hub pages — verified facts only, honest gaps elsewhere. */
export function getModelKnowledgeOverview(
  makeSlug: string,
  modelSlug: string,
): ModelKnowledgeOverview | null {
  const model = getKnowledgeModelByMakeSlug(makeSlug, modelSlug);
  if (!model) return null;

  const modelClaims = getClaimsForModel(model.id);
  const isPilot = isKnowledgePilotModel(model.id);
  const hasModelClaims = isKnowledgeModelWithClaims(model.id);

  const sections: ModelOverviewSection[] = [buildIdentitySection(model)];
  const shopSection = buildShopObservationsSection(model.id);
  if (shopSection) sections.push(shopSection);
  sections.push(buildSpecsOverviewSection(model));

  const basePhase3 = isPilot ? buildPhase3Sections(model, modelClaims) : [];
  const phase3Sections = hasOemModelData(model.id)
    ? enrichPhase3WithOem(basePhase3, model.id)
    : basePhase3;

  const empty = createEmptyVehicleSpecs();
  const baseCategories = SPEC_CATEGORY_ORDER.map((id) => empty[id]);
  const oemSpecs = buildVehicleSpecsFromOem(model.id);
  const specCategories = oemSpecs
    ? mergeSpecCategoriesWithOem(baseCategories, model.id)
    : baseCategories;
  const hasVerifiedSpecs = oemSpecs ? countVerifiedSpecFields(oemSpecs) > 0 : false;

  return {
    modelId: model.id,
    isPilot,
    hasModelClaims,
    sections,
    phase3Sections,
    specCategories,
    hasVerifiedSpecs,
    claims: modelClaims,
  };
}

export function getKnowledgeCatalogStats() {
  const catalog = getKnowledgeCatalog();
  const modelsWithYearRange = catalog.models.filter((m) =>
    isDisplayableConfidence(m.yearRange.confidence),
  ).length;
  const modelsWithClaims = new Set(
    catalog.claims.filter((c) => c.entityType === 'model').map((c) => c.entityId),
  ).size;

  return {
    version: catalog.version,
    manufacturers: catalog.manufacturers.length,
    models: catalog.models.length,
    claims: catalog.claims.length,
    modelsWithYearRange,
    modelsWithClaims,
    wiredBrands: KNOWLEDGE_WIRED_BRAND_SLUGS.length,
    modelsWithShopClaims: KNOWLEDGE_OWNERSHIP_MODEL_IDS.length,
    wiredModels: KNOWLEDGE_CATALOG.models.filter((m) =>
      isKnowledgeWiredBrand(m.manufacturerId),
    ).length,
  };
}
