export {
  CONFIDENCE_DISPLAY_THRESHOLD,
  isKnowledgeWiredBrand,
  KNOWLEDGE_PILOT_MODEL_IDS,
  KNOWLEDGE_WIRED_BRAND_SLUGS,
  UNABLE_TO_VERIFY,
} from '@/lib/knowledge/constants';
export type { KnowledgePilotModelId } from '@/lib/knowledge/constants';

export { KNOWLEDGE_DB_SCHEMA } from '@/lib/knowledge/db-schema';
export type { KnowledgeDbTable } from '@/lib/knowledge/db-schema';

export {
  buildKnowledgeCatalog,
  KNOWLEDGE_CATALOG,
  KNOWLEDGE_OWNERSHIP_MODEL_IDS,
} from '@/lib/knowledge/buildCatalog';

export {
  createEmptyVehicleSpecs,
  SPEC_CATEGORY_ORDER,
} from '@/lib/knowledge/specs';

export {
  buildVerifiedField,
  formatVerifiedValue,
  isDisplayableConfidence,
  unverifiedField,
} from '@/lib/knowledge/verified';

export { buildPhase3Sections } from '@/lib/knowledge/phase3Sections';
export type { Phase3SectionId } from '@/lib/knowledge/phase3Sections';

export {
  getClaimsForModel,
  getClaimsForManufacturer,
  getKnowledgeCatalog,
  getKnowledgeCatalogStats,
  getKnowledgeModel,
  getKnowledgeModelByMakeSlug,
  getManufacturerBySlug,
  getModelKnowledgeOverview,
  isKnowledgeModelWithClaims,
  isKnowledgePilotModel,
} from '@/lib/knowledge/queries';

export type {
  ClaimEntityType,
  ClaimRecord,
  ConfidenceLevel,
  DataSource,
  GenerationRecord,
  KnowledgeCatalog,
  ManufacturerRecord,
  ModelKnowledgeOverview,
  ModelOverviewItem,
  ModelOverviewSection,
  ModelRecord,
  ModelYearRecord,
  ReviewStatus,
  SpecCategory,
  SpecCategoryId,
  SpecField,
  TrimRecord,
  VehicleSpecs,
  VerifiedField,
  VerifiedScalar,
  VerifiedValue,
} from '@/lib/knowledge/types';
