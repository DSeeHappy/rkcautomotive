export {
  CONFIDENCE_DISPLAY_THRESHOLD,
  KNOWLEDGE_PILOT_MODEL_IDS,
  UNABLE_TO_VERIFY,
} from '@/lib/knowledge/constants';
export type { KnowledgePilotModelId } from '@/lib/knowledge/constants';

export { KNOWLEDGE_DB_SCHEMA } from '@/lib/knowledge/db-schema';
export type { KnowledgeDbTable } from '@/lib/knowledge/db-schema';

export { buildKnowledgeCatalog, KNOWLEDGE_CATALOG } from '@/lib/knowledge/buildCatalog';

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
  getKnowledgeCatalog,
  getKnowledgeCatalogStats,
  getKnowledgeModel,
  getKnowledgeModelByMakeSlug,
  getManufacturerBySlug,
  getModelKnowledgeOverview,
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
