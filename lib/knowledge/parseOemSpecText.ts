/**
 * Parse OEM pack prose into generation blocks and scannable line items.
 * Never mutates or invents values — falls back to raw prose when parsing is uncertain.
 */

export type OemSpecLineItem = {
  label: string;
  value: string;
};

export type OemSpecGeneration = {
  code: string;
  /** Display label, e.g. "XA40 (2013–2018)" when years are known from subtitle */
  displayLabel: string;
  yearRange?: string;
  body: string;
  lineItems: OemSpecLineItem[];
  unverifiedNotes: string[];
  contentFormat: 'structured' | 'prose';
};

export type ParsedOemSpecText = {
  raw: string;
  /** generations when text splits cleanly; empty when prose-only */
  generations: OemSpecGeneration[];
  /** Top-level unverified notes when no generation split */
  unverifiedNotes: string[];
  layout: 'generations' | 'prose';
  /** structured when line items were extracted; prose otherwise */
  contentFormat: 'structured' | 'prose';
  lineItems: OemSpecLineItem[];
};

const UNVERIFIED_PATTERN =
  /\*{0,2}\s*Not verified\s*[—-]\s*needs OEM source\*{0,2}/gi;

const DIMENSION_PREFIX: Record<string, string> = {
  L: 'Length',
  W: 'Width',
  H: 'Height',
  WB: 'Wheelbase',
};

const YEAR_RANGE_IN_PARENS =
  /(\d{4}(?:[–-]\d{2,4})?)\s*\(\s*([^,)]+?)(?:\s*,|\s*\)|$)/g;

/** Platform / generation codes from subtitle, e.g. XA40, F30, G20 */
export function parseGenerationYearMap(subtitle?: string): Map<string, string> {
  const map = new Map<string, string>();
  if (!subtitle?.trim()) return map;

  let match: RegExpExecArray | null;
  const re = new RegExp(YEAR_RANGE_IN_PARENS.source, 'g');
  while ((match = re.exec(subtitle)) !== null) {
    const years = match[1].trim();
    const codeRaw = match[2].trim();
    const code = codeRaw.split(/\s+/)[0]?.replace(/[^A-Za-z0-9-]/g, '') ?? '';
    if (!code || code.length < 2) continue;
    if (!map.has(code)) map.set(code, years);
  }

  return map;
}

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function cleanupBodyAfterNoteRemoval(text: string): string {
  return text
    .replace(/\s+\./g, '.')
    .replace(/\.+$/, '')
    .trim();
}

export function extractUnverifiedNotes(text: string): { cleaned: string; notes: string[] } {
  const notes: string[] = [];
  const cleaned = text.replace(UNVERIFIED_PATTERN, (match) => {
    notes.push(normalizeWhitespace(match.replace(/\*/g, '')));
    return ' ';
  });
  return { cleaned: cleanupBodyAfterNoteRemoval(normalizeWhitespace(cleaned)), notes };
}

function humanizeGenerationLabel(code: string, yearMap: Map<string, string>): string {
  const years = yearMap.get(code);
  return years ? `${code} (${years})` : code;
}

/** Split on known generation codes from subtitle or common platform markers. */
function splitByGenerations(
  text: string,
  yearMap: Map<string, string>,
): OemSpecGeneration[] | null {
  const codes = [...yearMap.keys()];
  if (codes.length >= 2) {
    const sorted = [...codes].sort((a, b) => b.length - a.length);
    const pattern = sorted
      .map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|');
    const re = new RegExp(
      `(?:^|[.;]\\s+)(${pattern})(?:\\s*\\([^)]*\\))?\\s*:\\s*`,
      'gi',
    );
    const matches: Array<{ index: number; code: string; end: number }> = [];
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      matches.push({
        index: m.index + m[0].indexOf(m[1]),
        code: m[1].toUpperCase() === m[1] ? m[1] : m[1],
        end: m.index + m[0].length,
      });
    }
    if (matches.length >= 2) {
      return buildGenerationsFromMatches(text, matches, yearMap);
    }
  }

  const platformRe =
    /(?:^|[.;]\s+)((?:Gen\s+\d+|[A-Z]{1,3}\d{2,}[A-Z]?))(?:\s*\([^)]*\))?\s*:\s*/gi;
  const platformMatches: Array<{ index: number; code: string; end: number }> = [];
  let pm: RegExpExecArray | null;
  while ((pm = platformRe.exec(text)) !== null) {
    const code = pm[1];
    if (/^Gen\s+\d+$/i.test(code) || /^[A-Z]{1,3}\d{2,}[A-Z]?$/.test(code)) {
      platformMatches.push({
        index: pm.index + pm[0].indexOf(pm[1]),
        code: pm[1],
        end: pm.index + pm[0].length,
      });
    }
  }
  if (platformMatches.length >= 2) {
    return buildGenerationsFromMatches(text, platformMatches, yearMap);
  }

  return null;
}

function buildGenerationsFromMatches(
  text: string,
  matches: Array<{ index: number; code: string; end: number }>,
  yearMap: Map<string, string>,
): OemSpecGeneration[] {
  const generations: OemSpecGeneration[] = [];
  for (let i = 0; i < matches.length; i += 1) {
    const start = matches[i].end;
    const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
    const segment = text.slice(start, end).trim();
    const { cleaned, notes } = extractUnverifiedNotes(segment);
    const lineItems = parseLineItems(cleaned);
    generations.push({
      code: matches[i].code,
      displayLabel: humanizeGenerationLabel(matches[i].code, yearMap),
      yearRange: yearMap.get(matches[i].code),
      body: cleaned,
      lineItems,
      unverifiedNotes: notes,
      contentFormat: lineItems.length > 0 ? 'structured' : 'prose',
    });
  }
  return generations;
}

function parseDimensionSegment(segment: string): OemSpecLineItem | null {
  const trimmed = segment.trim();
  const dimMatch = trimmed.match(/^(L|W|H|WB)\s+(.+)$/i);
  if (dimMatch) {
    const key = dimMatch[1].toUpperCase();
    return { label: DIMENSION_PREFIX[key] ?? key, value: dimMatch[2].trim() };
  }
  const curbMatch = trimmed.match(/^curb\s+(.+)$/i);
  if (curbMatch) {
    return { label: 'Curb weight', value: curbMatch[1].trim() };
  }
  return null;
}

function parseMpgSegment(segment: string): OemSpecLineItem | null {
  const trimmed = segment.trim();
  const triple = trimmed.match(/^(.+?)\s+(\d+(?:[–-]\d+)?)\/(\d+(?:[–-]\d+)?)\/(\d+(?:[–-]\d+)?)\s*(.*)$/);
  if (triple) {
    const suffix = triple[5]?.trim();
    const value = `${triple[2]} city / ${triple[3]} hwy / ${triple[4]} combined${suffix ? ` ${suffix}` : ''}`;
    return { label: triple[1].trim(), value };
  }
  return null;
}

/** Split on `/` and `;` when content looks like dimensions or MPG tables. */
export function parseLineItems(body: string): OemSpecLineItem[] {
  const trimmed = body.trim();
  if (!trimmed) return [];

  const looksDimensional =
    /\bL\s+\d/.test(trimmed) && (/\bW\s+\d/.test(trimmed) || /\bWB\s+\d/.test(trimmed));
  const looksMpg = /\d+\/\d+\/\d+/.test(trimmed) && /mpg|MPGe|AWD|FWD|Hybrid|gas/i.test(trimmed);

  if (!looksDimensional && !looksMpg) return [];

  const segments = trimmed.split(/\s*[;/]\s+/).filter(Boolean);
  const items: OemSpecLineItem[] = [];

  for (const segment of segments) {
    const dim = parseDimensionSegment(segment);
    if (dim) {
      items.push(dim);
      continue;
    }
    if (looksMpg) {
      const mpg = parseMpgSegment(segment);
      if (mpg) {
        items.push(mpg);
        continue;
      }
    }
    if (looksDimensional && segment.length < 120) {
      items.push({ label: 'Note', value: segment });
    }
  }

  if (items.length === 0) return [];
  const structuredCount = items.filter((i) => i.label !== 'Note').length;
  return structuredCount >= 2 ? items : [];
}

export function parseOemSpecText(text: string, subtitle?: string): ParsedOemSpecText {
  const raw = text.trim();
  const yearMap = parseGenerationYearMap(subtitle);

  if (!raw) {
    return {
      raw,
      generations: [],
      unverifiedNotes: [],
      layout: 'prose',
      contentFormat: 'prose',
      lineItems: [],
    };
  }

  const generationSplit = splitByGenerations(raw, yearMap);
  if (generationSplit && generationSplit.length >= 2) {
    const allNotes = generationSplit.flatMap((g) => g.unverifiedNotes);
    const anyStructured = generationSplit.some((g) => g.contentFormat === 'structured');
    return {
      raw,
      generations: generationSplit,
      unverifiedNotes: allNotes,
      layout: 'generations',
      contentFormat: anyStructured ? 'structured' : 'prose',
      lineItems: [],
    };
  }

  const { cleaned, notes } = extractUnverifiedNotes(raw);
  const lineItems = parseLineItems(cleaned);

  return {
    raw,
    generations: [],
    unverifiedNotes: notes,
    layout: 'prose',
    contentFormat: lineItems.length > 0 ? 'structured' : 'prose',
    lineItems,
  };
}

export type OemParseCoverageReport = {
  totalFields: number;
  generationLayout: number;
  proseLayout: number;
  structuredContent: number;
  proseContent: number;
};

/** Summarize parse outcomes across the OEM pack (for sanity checks). */
export function analyzeOemParseCoverage(
  models: Record<string, { subtitle?: string; fields: Record<string, { text?: string }> }>,
): OemParseCoverageReport {
  let totalFields = 0;
  let generationLayout = 0;
  let proseLayout = 0;
  let structuredContent = 0;
  let proseContent = 0;

  for (const model of Object.values(models)) {
    for (const field of Object.values(model.fields)) {
      const text = field.text?.trim();
      if (!text) continue;
      totalFields += 1;
      const parsed = parseOemSpecText(text, model.subtitle);
      if (parsed.layout === 'generations') generationLayout += 1;
      else proseLayout += 1;
      if (parsed.contentFormat === 'structured') structuredContent += 1;
      else proseContent += 1;
    }
  }

  return {
    totalFields,
    generationLayout,
    proseLayout,
    structuredContent,
    proseContent,
  };
}
