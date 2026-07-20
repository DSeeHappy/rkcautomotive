import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SERVICE_CONFIGS } from './service-body-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'app/components/ui/services');
const CONSTANTS = fs.readFileSync(path.join(ROOT, 'lib/constants.ts'), 'utf8');
const OUT = path.join(ROOT, 'lib/i18n/serviceBodies/_en');
fs.mkdirSync(OUT, { recursive: true });

function parseFaq(constName) {
  const re = new RegExp('export const ' + constName + '[^=]*=\\s*(\\[[\\s\\S]*?\\n\\]);');
  const m = CONSTANTS.match(re);
  if (!m) throw new Error('FAQ ' + constName + ' not found');
  return Function('return ' + m[1])();
}

function stripDecorations(arrText) {
  return arrText
    .replace(/icon:\s*icons\[\d+\],?\s*/g, '')
    .replace(/icon:\s*[A-Za-z]+,?\s*/g, '')
    .replace(/accent(?:Bg|Border)?:\s*['"][^'"]*['"],?\s*/g, '')
    .replace(/accent:\s*['"][^'"]*['"],?\s*/g, '');
}

function parseConst(source, name) {
  const re = new RegExp('const ' + name + ' =\\s*(\\[[\\s\\S]*?\\n\\]);');
  const m = source.match(re);
  if (!m) return null;
  return Function('return ' + stripDecorations(m[1]))();
}

function propStr(block, name) {
  let m = block.match(new RegExp(name + '=\\{"([^"]*)"\\}'));
  if (m) return m[1];
  m = block.match(new RegExp(name + '="([^"]*)"'));
  if (m) return m[1];
  m = block.match(new RegExp(name + "=\\{'([^']*)'\\}"));
  return m?.[1] ?? null;
}

function propCtaLabel(block) {
  const m = block.match(/primaryCta=\{\{\s*href:[^,]+,\s*label:\s*"([^"]*)"/);
  return m?.[1] ?? null;
}

function extractCardsFromBlock(block) {
  const m = block.match(/cards=\{\[([\s\S]*?)\]\}/);
  if (!m) return [];
  return Function('return [' + stripDecorations(m[1]) + ']')();
}

function extractTable(block) {
  const m = block.match(/table=\{\{([\s\S]*?)\}\}/);
  if (!m) return null;
  try {
    const t = Function('return {' + m[1] + '}')();
    return {
      caption: t.caption,
      columns: t.columns,
      rows: t.rows.map((r) => ({
        label: r.label,
        values: r.values,
        ...(r.highlight != null ? { highlight: r.highlight } : {}),
      })),
    };
  } catch {
    return null;
  }
}

function extractReality(source, config) {
  const m = source.match(/<ServiceRealityBand([\s\S]*?)\/>/);
  if (!m) return { quote: '', body: '' };
  const block = m[1];
  const quote = propStr(block, 'quote') ?? '';
  if (block.includes('<Link')) {
    const linkText = block.match(/<Link[^>]*>\s*([\s\S]*?)\s*<\/Link>/)?.[1]?.trim() ?? '';
    const before = block.split('<Link')[0];
    const bodyBefore = before
      .replace(/[\s\S]*body=\{\s*<>\s*/, '')
      .replace(/quote=\{[^}]+\}\s*/, '')
      .trim();
    const afterLink = (block.split('</Link>')[1] ?? '').replace(/[\s\S]*?>\s*/, '').replace(/\s*<\/>[\s\S]*$/, '').trim();
    return { quote, bodyBefore, linkText, linkHref: config.realityLink ?? null, bodyAfter: afterLink };
  }
  return { quote, body: propStr(block, 'body') ?? '' };
}

function extractStandard(source, config) {
  const breadcrumb = source.match(/getServiceBreadcrumbs\(['"]([^'"]+)['"]\)/)?.[1] ?? '';
  const heroBlock = source.match(/<ServiceCinematicHero([\s\S]*?)\/>/)?.[1] ?? '';
  const hero = {
    imageAlt: propStr(heroBlock, 'imageAlt') ?? '',
    eyebrow: propStr(heroBlock, 'eyebrow') ?? '',
    title: propStr(heroBlock, 'title') ?? '',
    description: propStr(heroBlock, 'description') ?? '',
    primaryCta: propCtaLabel(heroBlock) ?? 'Book service',
    callPrefix: 'Call',
  };
  const techBlock = source.match(/<ServiceTechnicalSection([\s\S]*?)\/>/)?.[1] ?? '';
  const technical = techBlock
    ? {
        eyebrow: propStr(techBlock, 'eyebrow') ?? '',
        title: propStr(techBlock, 'title') ?? '',
        intro: propStr(techBlock, 'intro') ?? '',
        cards: extractCardsFromBlock(techBlock),
        tableTitle: propStr(techBlock, 'tableTitle') || undefined,
        tableIntro: propStr(techBlock, 'tableIntro') || undefined,
        table: extractTable(techBlock),
      }
    : undefined;
  const procBlock = source.match(/<ServiceProcessTimeline([\s\S]*?)\/>/)?.[1] ?? '';
  const process = {
    eyebrow: propStr(procBlock, 'eyebrow') ?? '',
    title: propStr(procBlock, 'title') ?? '',
    intro: propStr(procBlock, 'intro') ?? '',
    bgImageAlt: propStr(procBlock, 'bgImageAlt') ?? hero.imageAlt,
    steps: (parseConst(source, 'PROCESS_STEPS') ?? []).map(({ step, title, body }) => ({ step, title, body })),
  };
  const checkBlock = source.match(/<ServiceChecklistGrid([\s\S]*?)\/>/)?.[1] ?? '';
  const checklist = {
    eyebrow: propStr(checkBlock, 'eyebrow') ?? '',
    title: propStr(checkBlock, 'title') ?? '',
    intro: propStr(checkBlock, 'intro') ?? '',
    groups: parseConst(source, 'CHECKLIST_GROUPS') ?? [],
  };
  const laborBlock = source.match(/<ServiceLaborBand([\s\S]*?)\/>/)?.[1] ?? '';
  const labor = {
    title: propStr(laborBlock, 'title') ?? '',
    description: propStr(laborBlock, 'description') ?? '',
  };
  const faqBlock = source.match(/<ServiceFAQSection([\s\S]*?)\/>/)?.[1] ?? '';
  const faq = {
    title: propStr(faqBlock, 'title') ?? '',
    intro: propStr(faqBlock, 'intro') ?? '',
  };
  const finalBlock = source.match(/<ServiceFinalCTA([\s\S]*?)\/>/)?.[1] ?? '';
  const secondaryM = finalBlock.match(/secondaryCta=\{\{\s*href:[^,]+,\s*label:\s*"([^"]*)"/);
  const finalCta = {
    title: propStr(finalBlock, 'title') ?? '',
    description: propStr(finalBlock, 'description') ?? '',
    secondaryCta: secondaryM?.[1] ?? 'Request appointment',
  };
  const areaLabel = source.match(/serviceLabel="([^"]+)"/)?.[1] ?? '';
  const symBlock = source.match(/<ServiceSymptomGrid([\s\S]*?)\/>/)?.[1] ?? '';
  const symptoms = {
    eyebrow: propStr(symBlock, 'eyebrow') ?? '',
    title: propStr(symBlock, 'title') ?? '',
    intro: propStr(symBlock, 'intro') ?? '',
    cards: (parseConst(source, 'SYMPTOMS') ?? []).map(({ title, body, warning }) => ({
      title,
      body,
      ...(warning ? { warning } : {}),
    })),
  };
  return {
    breadcrumb,
    hero,
    reality: extractReality(source, config),
    symptoms,
    ...(technical ? { technical } : {}),
    process,
    checklist,
    labor,
    faq,
    areaLabel,
    finalCta,
    relatedSlug: config.related,
    faqs: parseFaq(config.faq).map(({ question, answer }) => ({ question, answer })),
  };
}

for (const config of SERVICE_CONFIGS) {
  const source = fs.readFileSync(path.join(CONTENT_DIR, config.file), 'utf8');
  try {
    const en = extractStandard(source, config);
    fs.writeFileSync(path.join(OUT, config.slug + '.json'), JSON.stringify(en, null, 2), 'utf8');
    console.log('extracted', config.slug, 'cards', en.symptoms?.cards?.length ?? 0);
  } catch (err) {
    console.error('FAIL', config.slug, err.message);
  }
}
