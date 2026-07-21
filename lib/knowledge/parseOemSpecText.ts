/**
 * Parse OEM pack prose into generation blocks and scannable line items.
 * Never mutates or invents values — falls back to raw prose when parsing is uncertain.
 */

export type OemSpecLineItem = {
  label: string;
  value: string;
};

/** One `;`/sentence-delimited clause of prose, with optional bold lead-in label. */
export type OemProseClause = {
  label?: string;
  text: string;
  unverified: boolean;
  notes: string[];
};

export type OemSpecGeneration = {
  code: string;
  /** Display label, e.g. "XA40 (2013–2018)" when years are known from subtitle */
  displayLabel: string;
  yearRange?: string;
  body: string;
  lineItems: OemSpecLineItem[];
  clauses: OemProseClause[];
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
  /** Prose broken into scannable clauses (prose layout only) */
  clauses: OemProseClause[];
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

/** Abbreviations that should not end a sentence split (lowercase, no dots). */
const NON_TERMINAL_ABBREVIATIONS = new Set(['vs', 'etc', 'eg', 'ie', 'ca', 'no', 'approx', 'incl', 'inc']);

/**
 * Split prose into clauses on top-level `;` and sentence boundaries.
 * Parentheses are respected so "(sealer voids; stains)" stays intact.
 */
function splitProseClauses(text: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = '';

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (ch === '(') depth += 1;
    else if (ch === ')') depth = Math.max(0, depth - 1);

    if (ch === ';' && depth === 0) {
      parts.push(current);
      current = '';
      continue;
    }

    if (ch === '.' && depth === 0 && /^\s+[A-Z(0-9]/.test(text.slice(i + 1))) {
      const prev = text[i - 1] ?? '';
      const lastWord = current.match(/([A-Za-z]+)$/)?.[1]?.toLowerCase() ?? '';
      const isAbbreviation =
        /[A-Z]/.test(prev) || NON_TERMINAL_ABBREVIATIONS.has(lastWord) || lastWord.length === 1;
      if (!isAbbreviation) {
        current += ch;
        parts.push(current);
        current = '';
        while (i + 1 < text.length && /\s/.test(text[i + 1])) i += 1;
        continue;
      }
    }

    current += ch;
  }
  if (current.trim()) parts.push(current);

  return parts.map((p) => p.trim().replace(/^[;,]\s*/, '')).filter(Boolean);
}

const CLAUSE_LABEL_COLON = /^([^:.;]{2,48}?):\s+(\S.*)$/;
/** Lead-in like "RWD (2021 Standard Range)", "320i", "2025 Long Range RWD" followed by a numeric value. */
const CLAUSE_LABEL_LEAD =
  /^([A-Za-z0-9][\w.+/&-]*(?:\s+[\w.+/&-]+){0,4}?(?:\s+\([^)]{1,48}\))?)\s+(?=[≈~]?\d)/;

/** Sentence fillers — a lead-in containing these is prose, not a variant label. */
const LABEL_STOPWORDS =
  /\b(the|a|an|of|to|at|for|in|on|is|are|was|were|does|do|not|with|and|or|per|from|by|reported|uses?|has|have|had)\b/;

/** Pure measurement tokens like "2.5L" or "18.1 kWh" are values, not labels. */
const MEASUREMENT_LABEL = /^[\d.,]+\s*(?:L|kWh|kW|hp|mm|in|ft|lb|kg|mi|km|s|V|gal|qt)$/i;

/**
 * Value must look like a spec figure (unit-bearing number, oil viscosity,
 * or MPG-style triple) for the lead-in to count as a variant label.
 */
const SPEC_VALUE_HINT =
  /\d\s*(?:hp|lb-?ft|mpg|mpge|mi\b|km\b|kwh|kw\b|rpm|in\b|lbs?\b|kg\b|s\b|sec|yr|mo\b|psi|nm\b|volts?|kwh)|\dW-\d|\d+\/\d+\/\d+|%/i;

function extractClauseLabel(clause: string): { label?: string; text: string } {
  const colonMatch = clause.match(CLAUSE_LABEL_COLON);
  if (colonMatch && colonMatch[1].length <= 40) {
    return { label: colonMatch[1].trim(), text: colonMatch[2].trim() };
  }

  const leadMatch = clause.match(CLAUSE_LABEL_LEAD);
  if (leadMatch) {
    const label = leadMatch[1].trim();
    const rest = clause.slice(leadMatch[0].length).trim();
    if (
      label.length <= 40 &&
      rest.length >= 2 &&
      !/^\d[\d,.–-]*$/.test(label) &&
      !MEASUREMENT_LABEL.test(label) &&
      !LABEL_STOPWORDS.test(label) &&
      SPEC_VALUE_HINT.test(rest)
    ) {
      return { label, text: rest };
    }
  }

  return { text: clause };
}

function cleanupClauseText(text: string): string {
  return text
    .replace(/\s*—\s*(?=\()/, ' ')
    .replace(/\s*[—–-]\s*$/, '')
    .replace(/\s*[:;,]\s*$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** Break prose into scannable clauses with per-clause labels and unverified flags. */
export function parseProseClauses(body: string): OemProseClause[] {
  const trimmed = body.trim();
  if (!trimmed) return [];

  return splitProseClauses(trimmed).map((raw) => {
    const { cleaned, notes } = extractUnverifiedNotes(raw);
    const { label, text } = extractClauseLabel(cleanupClauseText(cleaned));
    return {
      label,
      text,
      unverified: notes.length > 0,
      notes,
    };
  });
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
      clauses: lineItems.length > 0 ? [] : parseProseClauses(segment),
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
      clauses: [],
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
      clauses: [],
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
    clauses: lineItems.length > 0 ? [] : parseProseClauses(raw),
  };
}

export type OemParseCoverageReport = {
  totalFields: number;
  generationLayout: number;
  proseLayout: number;
  structuredContent: number;
  proseContent: number;
  /** Prose fields broken into 2+ scannable clauses */
  multiClauseProse: number;
  /** Prose fields left as a single paragraph */
  singleClauseProse: number;
  /** Clauses (across all prose fields) that gained a bold lead-in label */
  labeledClauses: number;
  totalClauses: number;
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
  let multiClauseProse = 0;
  let singleClauseProse = 0;
  let labeledClauses = 0;
  let totalClauses = 0;

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

      const clauseGroups =
        parsed.layout === 'generations'
          ? parsed.generations.map((g) => g.clauses)
          : [parsed.clauses.length > 0 ? parsed.clauses : parseProseClauses(parsed.raw)];
      for (const clauses of clauseGroups) {
        if (clauses.length === 0) continue;
        if (clauses.length >= 2) multiClauseProse += 1;
        else singleClauseProse += 1;
        totalClauses += clauses.length;
        labeledClauses += clauses.filter((c) => c.label).length;
      }
    }
  }

  return {
    totalFields,
    generationLayout,
    proseLayout,
    structuredContent,
    proseContent,
    multiClauseProse,
    singleClauseProse,
    labeledClauses,
    totalClauses,
  };
}
