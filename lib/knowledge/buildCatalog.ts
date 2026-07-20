import { slugifyModel } from '@/lib/modelCommonServices';
import { getAllModelReliabilitySnapshots } from '@/lib/modelReliabilityNotes';
import { BRAND_RELIABILITY_SNAPSHOTS } from '@/lib/brandReliabilityNotes';
import { VEHICLE_BRANDS } from '@/lib/vehicleBrands';
import { getVehicleImageRecord } from '@/lib/vehicleImages';
import { VEHICLE_MODELS } from '@/lib/vehicleModels';
import type {
  ClaimRecord,
  GenerationRecord,
  KnowledgeCatalog,
  ManufacturerRecord,
  ModelRecord,
  ModelYearRecord,
} from '@/lib/knowledge/types';
import {
  getModelIdsWithOwnershipClaims,
  buildFailureProfileModelClaims,
} from '@/lib/knowledge/mapFailureProfileClaims';
import { buildVerifiedField } from '@/lib/knowledge/verified';

const CATALOG_VERSION = 'phase2-oem-pack-2026-07-20';

function parseYearRange(range: string): { start: number; end: number | null } | null {
  const normalized = range.replace(/\u2013/g, '-').replace(/\u2014/g, '-');
  const match = normalized.match(/(\d{4})\s*[-–]\s*(\d{4}|present|current)/i);
  if (!match) {
    const single = normalized.match(/(\d{4})/);
    if (!single) return null;
    const year = Number(single[1]);
    return Number.isFinite(year) ? { start: year, end: year } : null;
  }
  const start = Number(match[1]);
  const endToken = match[2].toLowerCase();
  const end = endToken === 'present' || endToken === 'current' ? null : Number(endToken);
  if (!Number.isFinite(start)) return null;
  if (end !== null && !Number.isFinite(end)) return null;
  return { start, end };
}

/**
 * Spark (p2-schema-design): do not fabricate OEM rows.
 * Store generation year bounds only — expand Year/Trim when sourced data exists.
 */
function buildYearsPlaceholder(): ModelYearRecord[] {
  return [];
}

function buildManufacturers(): ManufacturerRecord[] {
  return VEHICLE_BRANDS.map((brand) => ({
    id: brand.slug,
    name: brand.name,
    slug: brand.slug,
    logoPath: brand.logoPath,
    category: brand.category,
  }));
}

function buildModels(): ModelRecord[] {
  return VEHICLE_MODELS.map((vehicle) => {
    const modelSlug = slugifyModel(vehicle.model);
    const imageRecord = getVehicleImageRecord(vehicle.brand, vehicle.model);
    const parsedFromImage = imageRecord?.yearRange
      ? parseYearRange(imageRecord.yearRange)
      : null;
    const parsedFromCatalog = parseYearRange(vehicle.yearRange);
    const parsedRange = parsedFromImage ?? parsedFromCatalog;
    const yearRangeSources = imageRecord?.sourceUrl
      ? [
          {
            id: `img-${vehicle.slug}`,
            label: 'Vehicle image catalog',
            url: imageRecord.sourceUrl,
            license: imageRecord.license,
          },
        ]
      : [
          {
            id: `catalog-${vehicle.slug}`,
            label: 'RKC vehicle catalog',
          },
        ];

    const yearRange = buildVerifiedField<string>({
      value: parsedRange
        ? `${parsedRange.start}–${parsedRange.end ?? 'present'}`
        : vehicle.yearRange || null,
      confidence: imageRecord?.sourceUrl ? 'medium' : 'medium',
      reviewStatus: imageRecord?.sourceUrl ? 'verified' : 'marketing_unverified',
      sources: yearRangeSources,
      notes: imageRecord?.sourceUrl
        ? 'Year span from curated image metadata — not trim-level OEM verification.'
        : 'Year span from RKC marketing catalog — not trim-level OEM verification.',
    });

    const generation: GenerationRecord = {
      id: `${vehicle.slug}-gen-catalog`,
      name: 'Catalog generation (unsplit)',
      yearStart: parsedRange?.start ?? new Date().getFullYear() - 10,
      yearEnd: parsedRange?.end ?? null,
      years: buildYearsPlaceholder(),
      notes:
        'Phase 2 placeholder — OEM generation splits, years, and trim specs require sourced data before promotion (Spark doNotFabricate).',
    };

    return {
      id: vehicle.slug,
      manufacturerId: vehicle.brand,
      name: vehicle.model,
      slug: modelSlug,
      vehicleType: vehicle.vehicleType,
      yearRange,
      generations: parsedRange ? [generation] : [],
    } satisfies ModelRecord;
  });
}

function buildBrandClaims(): ClaimRecord[] {
  const createdAt = new Date().toISOString();
  const claims: ClaimRecord[] = [];

  for (const snapshot of BRAND_RELIABILITY_SNAPSHOTS) {
    claims.push({
      id: `claim-brand-${snapshot.id}-reliable-picks`,
      entityType: 'manufacturer',
      entityId: snapshot.id,
      topic: 'reliable-picks',
      statement: snapshot.reliablePicks.join('; '),
      confidence: 'medium',
      reviewStatus: 'shop_observation',
      sources: [
        {
          id: `rkc-shop-brand-${snapshot.id}`,
          label: 'RKC shop observation (brand reliability notes)',
        },
      ],
      createdAt,
    });

    for (const bullet of snapshot.bullets) {
      claims.push({
        id: `claim-brand-${snapshot.id}-${slugifyModel(bullet.label)}`,
        entityType: 'manufacturer',
        entityId: snapshot.id,
        topic: slugifyModel(bullet.label),
        statement: bullet.text,
        confidence: 'medium',
        reviewStatus: 'shop_observation',
        sources: [
          {
            id: `rkc-shop-brand-${snapshot.id}`,
            label: 'RKC shop observation (brand reliability notes)',
          },
        ],
        createdAt,
      });
    }
  }

  return claims;
}

function buildClaims(): ClaimRecord[] {
  const createdAt = new Date().toISOString();
  const claims: ClaimRecord[] = [...buildBrandClaims()];

  for (const snapshot of getAllModelReliabilitySnapshots()) {
    claims.push({
      id: `claim-${snapshot.id}-intro`,
      entityType: 'model',
      entityId: snapshot.id,
      topic: 'shop_observation',
      statement: snapshot.intro,
      confidence: 'medium',
      reviewStatus: 'shop_observation',
      sources: [
        {
          id: `rkc-shop-${snapshot.id}`,
          label: 'RKC shop observation (ASE field notes)',
        },
      ],
      createdAt,
    });

    for (const bullet of snapshot.bullets) {
      claims.push({
        id: `claim-${snapshot.id}-${slugifyModel(bullet.label)}`,
        entityType: 'model',
        entityId: snapshot.id,
        topic: slugifyModel(bullet.label),
        statement: bullet.text,
        confidence: 'medium',
        reviewStatus: 'shop_observation',
        sources: [
          {
            id: `rkc-shop-${snapshot.id}`,
            label: 'RKC shop observation (ASE field notes)',
          },
        ],
        createdAt,
      });
    }

    for (const [index, faq] of snapshot.faqs.entries()) {
      claims.push({
        id: `claim-${snapshot.id}-faq-${index + 1}`,
        entityType: 'model',
        entityId: snapshot.id,
        topic: 'faq',
        statement: `${faq.question} ${faq.answer}`,
        confidence: 'medium',
        reviewStatus: 'shop_observation',
        sources: [
          {
            id: `rkc-shop-${snapshot.id}`,
            label: 'RKC shop observation (ASE field notes)',
          },
        ],
        createdAt,
      });
    }
  }

  claims.push(...buildFailureProfileModelClaims(createdAt));

  return claims;
}

/** Build the Phase 2 knowledge catalog from existing static modules — no invented OEM specs. */
export function buildKnowledgeCatalog(): KnowledgeCatalog {
  return {
    version: CATALOG_VERSION,
    generatedAt: new Date().toISOString(),
    manufacturers: buildManufacturers(),
    models: buildModels(),
    claims: buildClaims(),
  };
}

export const KNOWLEDGE_CATALOG = buildKnowledgeCatalog();

/** Models with ownership shop claims — modelReliabilityNotes and/or brandFailureProfiles commonModels. */
export const KNOWLEDGE_OWNERSHIP_MODEL_IDS = getModelIdsWithOwnershipClaims(
  KNOWLEDGE_CATALOG.claims,
);
