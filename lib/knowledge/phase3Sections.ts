import { KNOWLEDGE_CATALOG } from '@/lib/knowledge/buildCatalog';
import { UNABLE_TO_VERIFY } from '@/lib/knowledge/constants';
import type { ClaimRecord, ModelOverviewSection, ModelRecord } from '@/lib/knowledge/types';

export type Phase3SectionId =
  | 'overview'
  | 'engineering'
  | 'ownership'
  | 'enthusiast'
  | 'comparison';

const PHASE3_TITLES: Record<Phase3SectionId, string> = {
  overview: 'Overview',
  engineering: 'Engineering',
  ownership: 'Ownership',
  enthusiast: 'Enthusiast',
  comparison: 'Comparison',
};

function claimByTopic(claims: ClaimRecord[], topic: string): ClaimRecord | undefined {
  return claims.find((claim) => claim.topic === topic);
}

function shopClaims(claims: ClaimRecord[]): ClaimRecord[] {
  return claims.filter((claim) => claim.reviewStatus === 'shop_observation');
}

/** Phase 3 authority shells — verified shop/repair content only; OEM gaps stay honest. */
export function buildPhase3Sections(
  model: ModelRecord,
  claims: ClaimRecord[],
): ModelOverviewSection[] {
  const manufacturer = KNOWLEDGE_CATALOG.manufacturers.find(
    (entry) => entry.slug === model.manufacturerId,
  );
  const intro = claimByTopic(claims, 'shop_observation');
  const commonIssues = claimByTopic(claims, 'common-issues');
  const coloradoAngle = claimByTopic(claims, 'colorado-angle');
  const serviceNotes = claimByTopic(claims, 'service-notes');
  const faqs = claims.filter((claim) => claim.topic === 'faq');
  const sources = shopClaims(claims)[0]?.sources ?? [];

  const overviewItems = [
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

  if (intro) {
    overviewItems.push({
      label: 'Shop summary',
      value: intro.statement,
      confidence: intro.confidence,
      reviewStatus: intro.reviewStatus,
    });
  }

  const ownershipItems = [
    commonIssues && {
      label: 'Common issues',
      value: commonIssues.statement,
      confidence: commonIssues.confidence,
      reviewStatus: commonIssues.reviewStatus,
    },
    coloradoAngle && {
      label: 'Colorado angle',
      value: coloradoAngle.statement,
      confidence: coloradoAngle.confidence,
      reviewStatus: coloradoAngle.reviewStatus,
    },
    serviceNotes && {
      label: 'Service notes',
      value: serviceNotes.statement,
      confidence: serviceNotes.confidence,
      reviewStatus: serviceNotes.reviewStatus,
    },
    ...faqs.map((faq, index) => ({
      label: `FAQ ${index + 1}`,
      value: faq.statement,
      confidence: faq.confidence,
      reviewStatus: faq.reviewStatus,
    })),
  ].filter(Boolean) as ModelOverviewSection['items'];

  const sections: ModelOverviewSection[] = [
    {
      id: 'overview',
      title: PHASE3_TITLES.overview,
      items: overviewItems,
      reviewStatus: intro ? 'shop_observation' : 'verified',
      confidence: 'medium',
      sources: [...model.yearRange.sources, ...sources],
      emptyMessage: overviewItems.length === 0 ? UNABLE_TO_VERIFY : undefined,
    },
    {
      id: 'engineering',
      title: PHASE3_TITLES.engineering,
      items: [],
      reviewStatus: 'unverified',
      confidence: 'none',
      sources: [],
      emptyMessage: UNABLE_TO_VERIFY,
    },
    {
      id: 'ownership',
      title: PHASE3_TITLES.ownership,
      items: ownershipItems,
      reviewStatus: ownershipItems.length > 0 ? 'shop_observation' : 'unverified',
      confidence: ownershipItems.length > 0 ? 'medium' : 'none',
      sources,
      emptyMessage: ownershipItems.length === 0 ? UNABLE_TO_VERIFY : undefined,
    },
    {
      id: 'enthusiast',
      title: PHASE3_TITLES.enthusiast,
      items: [],
      reviewStatus: 'unverified',
      confidence: 'none',
      sources: [],
      emptyMessage: UNABLE_TO_VERIFY,
    },
    {
      id: 'comparison',
      title: PHASE3_TITLES.comparison,
      items: [],
      reviewStatus: 'unverified',
      confidence: 'none',
      sources: [],
      emptyMessage: UNABLE_TO_VERIFY,
    },
  ];

  return sections;
}
