import oemPackJson from '@/data/knowledge/oem-pack.json';
import { buildVerifiedField, isDisplayableConfidence } from '@/lib/knowledge/verified';
import { createEmptyVehicleSpecs, SPEC_CATEGORY_ORDER } from '@/lib/knowledge/specs';
import type {
  ConfidenceLevel,
  DataSource,
  ModelOverviewItem,
  ReviewStatus,
  SpecCategory,
  SpecCategoryId,
  VehicleSpecs,
} from '@/lib/knowledge/types';

export type OemFieldRecord = {
  key: string;
  label: string;
  text: string;
  confidence: ConfidenceLevel;
  reviewStatus: ReviewStatus;
};

export type OemModelRecord = {
  modelId: string;
  makeSlug: string;
  modelSlug: string;
  modelName: string;
  subtitle?: string;
  fields: Record<string, OemFieldRecord>;
  sources: DataSource[];
};

type OemPackFile = {
  version: string;
  generatedAt: string;
  models: Record<string, OemModelRecord>;
};

const OEM_PACK = oemPackJson as OemPackFile;

/** Primary spec field key per category — prose from OEM pack maps here. */
const CATEGORY_FIELD_KEY: Record<SpecCategoryId, string> = {
  engine: 'configuration',
  transmission: 'type',
  horsepower: 'peak',
  torque: 'peak',
  drivetrain: 'layout',
  dimensions: 'length',
  mpg: 'combined',
  reliability: 'summary',
  knownIssues: 'patterns',
  maintenance: 'intervals',
  performance: 'zeroToSixty',
  mods: 'common',
};

const PHASE3_FIELD_KEYS = ['engineering', 'enthusiast', 'comparison'] as const;

export function getOemPackVersion(): string {
  return OEM_PACK.version;
}

export function getOemModelRecord(modelId: string): OemModelRecord | undefined {
  return OEM_PACK.models[modelId];
}

export function hasOemModelData(modelId: string): boolean {
  const rec = getOemModelRecord(modelId);
  if (!rec) return false;
  return Object.values(rec.fields).some(
    (f) => f.confidence !== 'none' && f.text.trim().length > 0,
  );
}

export function getOemModelIds(): string[] {
  return Object.keys(OEM_PACK.models);
}

function buildFieldVerified(rec: OemFieldRecord, sources: DataSource[]) {
  return buildVerifiedField({
    value: rec.text,
    confidence: rec.confidence,
    reviewStatus: rec.reviewStatus,
    sources,
    notes: rec.confidence === 'medium' ? 'Contains inline gaps marked in OEM pack.' : undefined,
  });
}

/** Build VehicleSpecs from OEM pack — empty sub-fields stay honest when pack field is sparse. */
export function buildVehicleSpecsFromOem(modelId: string): VehicleSpecs | null {
  const rec = getOemModelRecord(modelId);
  if (!rec) return null;

  const empty = createEmptyVehicleSpecs();
  const sources = rec.sources;

  for (const categoryId of SPEC_CATEGORY_ORDER) {
    const packField = rec.fields[categoryId];
    if (!packField || packField.confidence === 'none' || !packField.text.trim()) continue;

    const primaryKey = CATEGORY_FIELD_KEY[categoryId];
    const category = empty[categoryId];
    const idx = category.fields.findIndex((f) => f.key === primaryKey);
    if (idx >= 0) {
      category.fields[idx] = {
        ...category.fields[idx],
        verified: buildFieldVerified(packField, sources),
      };
    }
  }

  return empty;
}

export function countVerifiedSpecFields(specs: VehicleSpecs): number {
  let n = 0;
  for (const id of SPEC_CATEGORY_ORDER) {
    for (const field of specs[id].fields) {
      if (field.verified.value !== null && isDisplayableConfidence(field.verified.confidence)) {
        n += 1;
      }
    }
  }
  return n;
}

export function buildOemSpecOverviewItems(modelId: string): ModelOverviewItem[] {
  const rec = getOemModelRecord(modelId);
  if (!rec) return [];

  const items: ModelOverviewItem[] = [];
  const priority: SpecCategoryId[] = [
    'engine',
    'horsepower',
    'torque',
    'transmission',
    'drivetrain',
    'mpg',
    'dimensions',
  ];

  for (const key of priority) {
    const field = rec.fields[key];
    if (!field || field.confidence === 'none' || !field.text.trim()) continue;
    items.push({
      label: field.label,
      value: field.text,
      confidence: field.confidence,
      reviewStatus: 'verified',
    });
  }

  return items;
}

export function buildOemPhase3Item(
  modelId: string,
  fieldKey: (typeof PHASE3_FIELD_KEYS)[number],
): ModelOverviewItem | null {
  const rec = getOemModelRecord(modelId);
  const field = rec?.fields[fieldKey];
  if (!field || field.confidence === 'none' || !field.text.trim()) return null;
  return {
    label: field.label,
    value: field.text,
    confidence: field.confidence,
    reviewStatus: 'verified',
  };
}

export function getOemSources(modelId: string): DataSource[] {
  return getOemModelRecord(modelId)?.sources ?? [];
}

export function mergeSpecCategoriesWithOem(
  emptyCategories: SpecCategory[],
  modelId: string,
): SpecCategory[] {
  const specs = buildVehicleSpecsFromOem(modelId);
  if (!specs) return emptyCategories;
  return SPEC_CATEGORY_ORDER.map((id) => specs[id]);
}

export function getOemCoverageStats() {
  const packIds = getOemModelIds();
  return {
    packVersion: OEM_PACK.version,
    packGeneratedAt: OEM_PACK.generatedAt,
    packModelCount: packIds.length,
  };
}
