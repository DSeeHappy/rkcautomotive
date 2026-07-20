import { CONFIDENCE_DISPLAY_THRESHOLD, UNABLE_TO_VERIFY } from '@/lib/knowledge/constants';
import type {
  ConfidenceLevel,
  DataSource,
  ReviewStatus,
  VerifiedField,
  VerifiedValue,
} from '@/lib/knowledge/types';

const CONFIDENCE_RANK: Record<ConfidenceLevel, number> = {
  high: 4,
  medium: 3,
  low: 2,
  none: 1,
};

export function isDisplayableConfidence(confidence: ConfidenceLevel): boolean {
  return CONFIDENCE_RANK[confidence] >= CONFIDENCE_RANK[CONFIDENCE_DISPLAY_THRESHOLD];
}

export function formatVerifiedValue(value: VerifiedValue): string {
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return String(value);
}

type BuildVerifiedFieldOptions<T extends VerifiedValue> = {
  value: T | null;
  confidence: ConfidenceLevel;
  reviewStatus: ReviewStatus;
  sources?: DataSource[];
  notes?: string;
};

export function buildVerifiedField<T extends VerifiedValue>(
  opts: BuildVerifiedFieldOptions<T>,
): VerifiedField<T> {
  const { value, confidence, reviewStatus, sources = [], notes } = opts;
  const displayable = value !== null && isDisplayableConfidence(confidence);

  return {
    value: displayable ? value : null,
    displayValue: displayable ? formatVerifiedValue(value) : UNABLE_TO_VERIFY,
    confidence,
    reviewStatus,
    sources,
    notes,
  };
}

export function unverifiedField<T extends VerifiedValue = string>(
  reviewStatus: ReviewStatus = 'unverified',
  notes?: string,
): VerifiedField<T> {
  return buildVerifiedField<T>({
    value: null,
    confidence: 'none',
    reviewStatus,
    notes,
  });
}

export function emptySpecFields(
  entries: Array<{ key: string; label: string; notes?: string }>,
): Array<{ key: string; label: string; verified: VerifiedField }> {
  return entries.map(({ key, label, notes }) => ({
    key,
    label,
    verified: unverifiedField('unverified', notes),
  }));
}
