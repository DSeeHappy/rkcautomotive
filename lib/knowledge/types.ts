import type { VehicleType } from '@/lib/vehicleModels';

/** How a value was reviewed before entering the knowledge layer. */
export type ReviewStatus =
  | 'verified'
  | 'shop_observation'
  | 'marketing_unverified'
  | 'unverified';

export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'none';

export type DataSource = {
  id: string;
  label: string;
  url?: string;
  retrievedAt?: string;
  license?: string;
};

export type VerifiedScalar = string | number | boolean;

export type VerifiedValue = VerifiedScalar | VerifiedScalar[];

/** Field wrapper — never invent values; null + UNABLE_TO_VERIFY when unverified. */
export type VerifiedField<T extends VerifiedValue = VerifiedScalar> = {
  value: T | null;
  displayValue: string;
  confidence: ConfidenceLevel;
  reviewStatus: ReviewStatus;
  sources: DataSource[];
  notes?: string;
};

export type SpecCategoryId =
  | 'engine'
  | 'transmission'
  | 'horsepower'
  | 'torque'
  | 'drivetrain'
  | 'dimensions'
  | 'mpg'
  | 'reliability'
  | 'knownIssues'
  | 'maintenance'
  | 'performance'
  | 'mods';

export type SpecField = {
  key: string;
  label: string;
  verified: VerifiedField;
};

export type SpecCategory = {
  category: SpecCategoryId;
  label: string;
  fields: SpecField[];
};

export type VehicleSpecs = Record<SpecCategoryId, SpecCategory>;

export type TrimRecord = {
  id: string;
  name: string;
  slug: string;
  specs: VehicleSpecs;
};

export type ModelYearRecord = {
  year: number;
  trims: TrimRecord[];
};

export type GenerationRecord = {
  id: string;
  name: string;
  yearStart: number;
  yearEnd: number | null;
  years: ModelYearRecord[];
  notes?: string;
};

export type ManufacturerRecord = {
  id: string;
  name: string;
  slug: string;
  logoPath?: string;
  category?: 'domestic' | 'import';
};

export type ModelRecord = {
  id: string;
  manufacturerId: string;
  name: string;
  slug: string;
  vehicleType: VehicleType;
  /** Catalog year span when sourced from image metadata — not trim-level OEM data. */
  yearRange: VerifiedField<string>;
  generations: GenerationRecord[];
};

export type ClaimEntityType = 'manufacturer' | 'model' | 'generation' | 'year' | 'trim';

export type ClaimRecord = {
  id: string;
  entityType: ClaimEntityType;
  entityId: string;
  topic: string;
  statement: string;
  confidence: ConfidenceLevel;
  reviewStatus: ReviewStatus;
  sources: DataSource[];
  createdAt: string;
};

export type KnowledgeCatalog = {
  version: string;
  generatedAt: string;
  manufacturers: ManufacturerRecord[];
  models: ModelRecord[];
  claims: ClaimRecord[];
};

export type ModelOverviewSection = {
  id: string;
  title: string;
  items: ModelOverviewItem[];
  reviewStatus: ReviewStatus;
  confidence: ConfidenceLevel;
  sources: DataSource[];
  emptyMessage?: string;
};

export type ModelOverviewItem = {
  label: string;
  value: string;
  confidence: ConfidenceLevel;
  reviewStatus: ReviewStatus;
};

export type ModelKnowledgeOverview = {
  modelId: string;
  isPilot: boolean;
  sections: ModelOverviewSection[];
  specCategories: SpecCategory[];
  claims: ClaimRecord[];
};
