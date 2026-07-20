/**
 * Centralized repair/service duration estimates for dynamic FAQ copy.
 * Keys include short aliases (booking/URL params) and full service page slugs.
 */

export type ServiceDuration = {
  label: string;
  minimum: string;
  maximum: string;
  explanation: string;
};

export const REPAIR_TIME_FAQ_FALLBACK_QUESTION = 'How long will my repair take?';

export const REPAIR_TIME_FAQ_FALLBACK_ANSWER =
  'Repair time depends on the service you need and what we find during inspection. Pick a service on our site or tell us what you need when you call — we will give you a realistic window for your vehicle. Many maintenance visits finish the same day; complex diagnostics or parts-order jobs may take longer. Call (720) 749-3965 for an estimate based on your make and model.';

/** Session key so a selected service follows the visitor across FAQ / home / contact. */
export const SELECTED_SERVICE_STORAGE_KEY = 'rkc-selected-service';

export const serviceDurations: Record<string, ServiceDuration> = {
  'oil-change': {
    label: 'oil change',
    minimum: '30 minutes',
    maximum: '45 minutes',
    explanation:
      'The final time may vary depending on the vehicle, oil type, filter accessibility, and shop workload.',
  },
  'brake-repair': {
    label: 'brake repair',
    minimum: '1 hour',
    maximum: '3 hours',
    explanation:
      'Timing depends on whether the vehicle needs pads, rotors, calipers, fluid service, or additional repairs.',
  },
  'battery-replacement': {
    label: 'battery replacement',
    minimum: '30 minutes',
    maximum: '1 hour',
    explanation:
      'Some vehicles require additional programming, battery registration, or removal of surrounding components.',
  },
  'battery-testing': {
    label: 'battery test or replacement',
    minimum: '15 minutes',
    maximum: '1 hour',
    explanation:
      'Testing itself is quick; replacement time depends on battery location, hold-downs, and whether registration or coding is required.',
  },
  'alternator-replacement': {
    label: 'alternator replacement',
    minimum: '2 hours',
    maximum: '4 hours',
    explanation:
      'The exact time depends on the alternator location, vehicle design, and whether related electrical problems are found.',
  },
  'starter-replacement': {
    label: 'starter replacement',
    minimum: '2 hours',
    maximum: '4 hours',
    explanation:
      'Accessibility varies significantly by make and model, so some vehicles may require additional labor.',
  },
  'engine-diagnostic': {
    label: 'engine diagnostic',
    minimum: '1 hour',
    maximum: '2 hours',
    explanation:
      'Complex or intermittent problems may require extended testing before an accurate repair recommendation can be made.',
  },
  'check-engine-light': {
    label: 'check-engine-light diagnosis',
    minimum: '1 hour',
    maximum: '2 hours',
    explanation:
      'Reading a trouble code is only the first step. Proper diagnosis may require testing related sensors, wiring, and mechanical systems.',
  },
  'ac-repair': {
    label: 'A/C diagnosis or repair',
    minimum: '1 hour',
    maximum: '4 hours',
    explanation:
      'Timing depends on whether the issue involves refrigerant leaks, electrical faults, compressor failure, or component replacement.',
  },
  'transmission-service': {
    label: 'transmission service',
    minimum: '1 hour',
    maximum: '3 hours',
    explanation:
      'The estimate depends on the transmission type, required fluid, filter accessibility, and whether diagnostic testing is needed.',
  },
  'suspension-repair': {
    label: 'suspension repair',
    minimum: '2 hours',
    maximum: '6 hours',
    explanation:
      'Timing varies depending on the damaged components, vehicle condition, alignment requirements, and rust or seized hardware.',
  },
  'electrical-system': {
    label: 'electrical system diagnosis or repair',
    minimum: '1 hour',
    maximum: '4 hours',
    explanation:
      'Electrical faults can be intermittent. Timing depends on whether the issue is a battery, starter, alternator, wiring, or module-related problem.',
  },
  'exhaust-system': {
    label: 'exhaust repair',
    minimum: '1 hour',
    maximum: '4 hours',
    explanation:
      'Simple clamp or hanger work is quicker; welded sections, catalytic converters, or seized hardware can extend the visit.',
  },
  'preventative-maintenance': {
    label: 'preventative maintenance visit',
    minimum: '1 hour',
    maximum: '3 hours',
    explanation:
      'A multi-point inspection with fluid services is often same-day; milestone packages (30/60/90k) take longer depending on the checklist.',
  },
  'engine-rebuild': {
    label: 'engine rebuild',
    minimum: 'several days',
    maximum: 'several weeks',
    explanation:
      'Machine-shop queue, parts availability, and findings after teardown drive the schedule. We provide a realistic window at estimate time and call if measurements change the plan.',
  },
  'camshaft-lifter-repair': {
    label: 'camshaft and lifter repair',
    minimum: '1 day',
    maximum: 'several days',
    explanation:
      'Access, parts lead time, and whether related valvetrain components need replacement all affect the calendar. Overnight or multi-day service is common.',
  },
};

/** Map site service slugs and common aliases → canonical duration keys. */
const SERVICE_KEY_ALIASES: Record<string, keyof typeof serviceDurations | string> = {
  // Full page slugs
  'oil-changes-englewood-co': 'oil-change',
  'brake-repair-englewood-co': 'brake-repair',
  'battery-testing-englewood-co': 'battery-testing',
  'engine-diagnostics-englewood-co': 'engine-diagnostic',
  'check-engine-light-englewood-co': 'check-engine-light',
  'heating-ac-englewood-co': 'ac-repair',
  'transmission-services-englewood-co': 'transmission-service',
  'suspension-steering-englewood-co': 'suspension-repair',
  'electrical-system-englewood-co': 'electrical-system',
  'exhaust-system-englewood-co': 'exhaust-system',
  'preventative-maintenance-englewood-co': 'preventative-maintenance',
  'engine-rebuilds-englewood-co': 'engine-rebuild',
  'camshaft-lifter-repair-englewood-co': 'camshaft-lifter-repair',

  // Short / booking aliases
  'oil-changes': 'oil-change',
  brakes: 'brake-repair',
  'brake-job': 'brake-repair',
  battery: 'battery-testing',
  'battery-replacement': 'battery-replacement',
  alternator: 'alternator-replacement',
  starter: 'starter-replacement',
  diagnostics: 'engine-diagnostic',
  'engine-diagnostics': 'engine-diagnostic',
  'check-engine': 'check-engine-light',
  ac: 'ac-repair',
  'a-c': 'ac-repair',
  'heating-ac': 'ac-repair',
  hvac: 'ac-repair',
  transmission: 'transmission-service',
  'transmission-services': 'transmission-service',
  suspension: 'suspension-repair',
  'suspension-steering': 'suspension-repair',
  electrical: 'electrical-system',
  exhaust: 'exhaust-system',
  maintenance: 'preventative-maintenance',
  'preventative-maintenance': 'preventative-maintenance',
  'engine-rebuilds': 'engine-rebuild',
  'engine-rebuild': 'engine-rebuild',
  'camshaft-lifter': 'camshaft-lifter-repair',
  'camshaft-lifter-repair': 'camshaft-lifter-repair',
};

export function normalizeServiceDurationKey(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const key = raw.trim().toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '');
  if (!key) return null;

  if (key in serviceDurations) return key;

  const aliased = SERVICE_KEY_ALIASES[key];
  if (aliased && aliased in serviceDurations) return aliased;

  // Strip location suffix if present: foo-englewood-co → try alias map again
  const withoutLocale = key.replace(/-englewood-co$/, '');
  if (withoutLocale !== key) {
    return normalizeServiceDurationKey(withoutLocale);
  }

  return null;
}

export function getServiceDuration(rawKey: string | null | undefined): ServiceDuration | null {
  const key = normalizeServiceDurationKey(rawKey);
  if (!key) return null;
  return serviceDurations[key] ?? null;
}

function indefiniteArticle(label: string): string {
  const first = label.trim().charAt(0).toLowerCase();
  // "A/C..." and vowel starts use "an"
  if (first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u') {
    return 'an';
  }
  return 'a';
}

export function isRepairTimeFaqQuestion(question: string): boolean {
  return /^how long (will my repair take|does )\??$/i.test(question.trim())
    || /^how long does .+ take\??$/i.test(question.trim());
}

export function buildRepairTimeFaq(duration: ServiceDuration | null): {
  question: string;
  answer: string;
} {
  if (!duration) {
    return {
      question: REPAIR_TIME_FAQ_FALLBACK_QUESTION,
      answer: REPAIR_TIME_FAQ_FALLBACK_ANSWER,
    };
  }

  const article = indefiniteArticle(duration.label);
  return {
    question: `How long does ${article} ${duration.label} take?`,
    answer: `Most ${duration.label} visits take about ${duration.minimum} to ${duration.maximum}. ${duration.explanation} For a tighter window on your specific vehicle, call (720) 749-3965.`,
  };
}

export function applyRepairTimeFaq<T extends { question: string; answer: string }>(
  items: T[],
  serviceKey: string | null | undefined,
  options?: { injectIfMissing?: boolean },
): T[] {
  const duration = getServiceDuration(serviceKey);
  const repairFaq = buildRepairTimeFaq(duration);
  const index = items.findIndex((item) => isRepairTimeFaqQuestion(item.question));

  if (index >= 0) {
    return items.map((item, i) =>
      i === index ? { ...item, question: repairFaq.question, answer: repairFaq.answer } : item,
    );
  }

  if (options?.injectIfMissing && duration) {
    return [...items, { question: repairFaq.question, answer: repairFaq.answer } as T];
  }

  return items;
}

/** Extract a service key from a pathname (service pages + vehicle deep-dives). */
export function serviceKeyFromPathname(pathname: string | null | undefined): string | null {
  if (!pathname) return null;

  const serviceMatch = pathname.match(/^\/services\/([^/?#]+)/i);
  if (serviceMatch) {
    return normalizeServiceDurationKey(serviceMatch[1]);
  }

  // /vehicles/{make}/{model}/{serviceSlug} — map known deep-dive ids via aliases / hrefs
  const vehicleMatch = pathname.match(/^\/vehicles\/[^/]+\/[^/]+\/([^/?#]+)/i);
  if (vehicleMatch) {
    const slug = vehicleMatch[1].toLowerCase();
    // Common deep-dive slugs that map to catalog services
    const deepDiveHints: Record<string, string> = {
      'heavy-brake': 'brake-repair',
      'ecoboost-diagnostics': 'engine-diagnostic',
      'four-wheel-drive': 'transmission-service',
      'suspension-lift': 'suspension-repair',
      'fleet-maintenance': 'preventative-maintenance',
      'towing-prep': 'preventative-maintenance',
      'oil-service': 'oil-change',
      'check-engine': 'check-engine-light',
      'battery-service': 'battery-testing',
      'ac-service': 'ac-repair',
      'transmission-service': 'transmission-service',
    };
    if (deepDiveHints[slug]) return deepDiveHints[slug];
    return normalizeServiceDurationKey(slug);
  }

  return null;
}

export function persistSelectedService(rawKey: string | null | undefined): void {
  if (typeof window === 'undefined') return;
  const key = normalizeServiceDurationKey(rawKey);
  if (!key) return;
  try {
    sessionStorage.setItem(SELECTED_SERVICE_STORAGE_KEY, key);
  } catch {
    // Ignore quota / private mode failures
  }
}

export function readPersistedSelectedService(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return normalizeServiceDurationKey(sessionStorage.getItem(SELECTED_SERVICE_STORAGE_KEY));
  } catch {
    return null;
  }
}

/** Map a duration key (or alias) back to the site's `/services/{slug}` catalog slug when possible. */
export function servicePageSlugFromKey(rawKey: string | null | undefined): string | null {
  const key = normalizeServiceDurationKey(rawKey);
  if (!key) return null;

  const reverse: Record<string, string> = {
    'oil-change': 'oil-changes-englewood-co',
    'brake-repair': 'brake-repair-englewood-co',
    'battery-testing': 'battery-testing-englewood-co',
    'battery-replacement': 'battery-testing-englewood-co',
    'engine-diagnostic': 'engine-diagnostics-englewood-co',
    'check-engine-light': 'check-engine-light-englewood-co',
    'ac-repair': 'heating-ac-englewood-co',
    'transmission-service': 'transmission-services-englewood-co',
    'suspension-repair': 'suspension-steering-englewood-co',
    'electrical-system': 'electrical-system-englewood-co',
    'alternator-replacement': 'electrical-system-englewood-co',
    'starter-replacement': 'electrical-system-englewood-co',
    'exhaust-system': 'exhaust-system-englewood-co',
    'preventative-maintenance': 'preventative-maintenance-englewood-co',
    'engine-rebuild': 'engine-rebuilds-englewood-co',
    'camshaft-lifter-repair': 'camshaft-lifter-repair-englewood-co',
  };

  return reverse[key] ?? null;
}
