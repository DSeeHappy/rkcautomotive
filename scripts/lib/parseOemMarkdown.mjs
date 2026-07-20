/**
 * Deterministic parser for rkc-vehicle-data make markdown files.
 * Never invents values — extracts only what is in the source text.
 */

const FIELD_LABELS = [
  'Engine',
  'Transmission',
  'Horsepower',
  'Torque',
  'Drivetrain',
  'Dimensions',
  'Fuel economy (MPG)',
  'Reliability',
  'Known issues',
  'Maintenance',
  'Performance',
  'Modifications',
  'Engineering',
  'Enthusiast',
  'Comparison',
];

const FIELD_KEY_MAP = {
  Engine: 'engine',
  Transmission: 'transmission',
  Horsepower: 'horsepower',
  Torque: 'torque',
  Drivetrain: 'drivetrain',
  Dimensions: 'dimensions',
  'Fuel economy (MPG)': 'mpg',
  Reliability: 'reliability',
  'Known issues': 'knownIssues',
  Maintenance: 'maintenance',
  Performance: 'performance',
  Modifications: 'mods',
  Engineering: 'engineering',
  Enthusiast: 'enthusiast',
  Comparison: 'comparison',
};

const SKIP_SECTION_PATTERNS = [
  /^cross-model/i,
  /^verification notes/i,
  /^notes for the generator/i,
  /^cross-model maintenance/i,
];

/** @param {string} filename e.g. mercedes-benz.md */
export function makeFileToSlug(filename) {
  const base = filename.replace(/\.md$/i, '');
  if (base === 'mercedes-benz') return 'mercedes';
  return base;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Map markdown ## header → RKC catalog model slug (second segment of model id). */
export function modelHeaderToCatalogSlug(makeSlug, header) {
  const normalized = header.trim().toLowerCase();
  const overrides = {
    'chevrolet:silverado 1500': 'silverado',
    'ram:ram 1500': '1500',
    'ram:ram 2500': '2500',
    'ram:ram 3500': '3500',
    'ram:ram promaster': 'promaster',
    'ram:ram promaster city': 'promaster-city',
    'ram:ram 1500 trx': 'trx',
    'ram:ram 1500 rebel': 'rebel',
    'kia:optima / k5': 'k5',
    'volkswagen:golf / gti': 'golf',
    'volkswagen:atlas (incl. atlas cross sport)': 'atlas',
    'audi:e-tron (q8 e-tron)': 'e-tron',
    'jeep:wagoneer / grand wagoneer': 'wagoneer',
    'gmc:sierra hd (2500hd / 3500hd)': 'sierra-hd',
    'gmc:sierra 1500': 'sierra-1500',
  };
  const key = `${makeSlug}:${normalized}`;
  if (overrides[key]) return overrides[key];
  return slugify(header.trim());
}

export function modelIdFromSlugs(makeSlug, modelSlug) {
  return `${makeSlug}-${modelSlug}`;
}

function shouldSkipSection(header) {
  return SKIP_SECTION_PATTERNS.some((re) => re.test(header.trim()));
}

function isUnverifiedOnly(text) {
  const t = text.trim();
  if (!t) return true;
  if (/^not verified\s*[—–-]\s*needs oem source\.?$/i.test(t)) return true;
  return false;
}

function fieldConfidence(text) {
  if (isUnverifiedOnly(text)) return 'none';
  if (/not verified\s*[—–-]\s*needs oem source/i.test(text)) return 'medium';
  return 'high';
}

function parseSources(block) {
  const match = block.match(/\*\*Sources:\*\*\s*(.+)/s);
  if (!match) return [];
  const raw = match[1].trim();
  const urls = [...raw.matchAll(/https?:\/\/[^\s,)]+/g)].map((m) => m[0].replace(/[.,;]+$/, ''));
  return urls.map((url, i) => ({
    id: `oem-src-${i + 1}`,
    label: new URL(url).hostname.replace(/^www\./, ''),
    url,
    retrievedAt: '2026-07-20',
  }));
}

/**
 * @param {string} content full make .md file
 * @param {string} makeSlug
 */
export function parseMakeMarkdown(content, makeSlug) {
  const models = [];
  const parts = content.split(/^## /m).slice(1);

  for (const part of parts) {
    const lines = part.split('\n');
    const header = lines[0]?.trim() ?? '';
    if (!header || shouldSkipSection(header)) continue;

    const modelSlug = modelHeaderToCatalogSlug(makeSlug, header);
    const modelId = modelIdFromSlugs(makeSlug, modelSlug);

    let subtitle = '';
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        subtitle = line.replace(/^\*|\*$/g, '').trim();
        break;
      }
      if (line.startsWith('- **')) break;
    }

    const fields = {};
    for (const label of FIELD_LABELS) {
      const re = new RegExp(
        `- \\*\\*${label.replace(/[()]/g, '\\$&')}:\\*\\*\\s*([\\s\\S]*?)(?=\\n- \\*\\*|\\n\\*\\*Sources:|\\n---|$)`,
        'i',
      );
      const m = part.match(re);
      const text = m ? m[1].replace(/\s+/g, ' ').trim() : '';
      const key = FIELD_KEY_MAP[label];
      fields[key] = {
        key,
        label,
        text,
        confidence: fieldConfidence(text),
        reviewStatus: isUnverifiedOnly(text) ? 'unverified' : 'verified',
      };
    }

    models.push({
      modelId,
      makeSlug,
      modelSlug,
      modelName: header.trim(),
      subtitle,
      fields,
      sources: parseSources(part),
    });
  }

  return models;
}

/** @param {string} dir path to rkc-vehicle-data */
export function parseAllMakeFiles(dir, fs) {
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'README.md');
  const all = [];
  for (const file of files) {
    const makeSlug = makeFileToSlug(file);
    const content = fs.readFileSync(`${dir}/${file}`, 'utf8');
    all.push(...parseMakeMarkdown(content, makeSlug));
  }
  return all;
}
