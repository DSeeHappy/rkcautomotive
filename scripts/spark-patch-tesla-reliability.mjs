/**
 * Patch Tesla reliability + ES fields from Spark picks-fix (small→smart).
 */
import fs from 'fs';
import path from 'path';
import { ROOT, sparkRoutedRetry, getCallCount } from './spark-routed.mjs';

const hub = JSON.parse(fs.readFileSync(path.join(ROOT, '.tmp-brand-hub-tesla.json'), 'utf8'));
const picks = hub.en.reliablePicks;
const hs = hub.en.higherScrutiny;
const ca = hub.en.coloradoAngle;

const esHs = sparkRoutedRetry(
  'small',
  'tesla-es-hs-fix',
  `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ higherScrutiny: hs })}`,
  {
    system:
      'Translate to natural US/Mexican Spanish. Return ONLY JSON same keys. Keep proper nouns. Use usted.',
    max_tokens: 280,
  },
  4,
);
const esCa = sparkRoutedRetry(
  'small',
  'tesla-es-ca-fix',
  `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ coloradoAngle: ca })}`,
  {
    system:
      'Translate to natural US/Mexican Spanish. Return ONLY JSON same keys. Keep proper nouns. Use usted.',
    max_tokens: 280,
  },
  4,
);

hub.es.higherScrutiny = esHs.parsed.higherScrutiny;
hub.es.coloradoAngle = esCa.parsed.coloradoAngle;
hub.picksEsFix = [esHs.meta, esCa.meta];
fs.writeFileSync(path.join(ROOT, '.tmp-brand-hub-tesla.json'), JSON.stringify(hub, null, 2));

// Patch brandReliabilityNotes.ts
let rel = fs.readFileSync(path.join(ROOT, 'lib/brandReliabilityNotes.ts'), 'utf8');
const solid = picks.join(', ');
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const block = `  {
    id: 'tesla',
    reliablePicks: [
${picks.map((p) => `      '${esc(p)}',`).join('\n')}
    ],
    bullets: [
      {
        label: 'Generally solid',
        text: '${esc(solid)} — solid when maintenance is documented.',
      },
      {
        label: 'Higher scrutiny',
        text: '${esc(hs)}',
      },
      {
        label: 'Colorado angle',
        text: '${esc(ca)}',
      },
    ],
  },`;

const re = /  \{\n    id: 'tesla',[\s\S]*?\n  \},/;
if (!re.test(rel)) throw new Error('tesla block not found');
rel = rel.replace(re, block);
fs.writeFileSync(path.join(ROOT, 'lib/brandReliabilityNotes.ts'), rel);

// Patch brandContentEs tesla higherScrutiny + coloradoAngle
let es = fs.readFileSync(path.join(ROOT, 'lib/i18n/brandContentEs.ts'), 'utf8');
es = es.replace(
  /(acura: \{[\s\S]*?\n  \},\n  tesla: \{[\s\S]*?higherScrutiny:\n\s*')([^']*)(')/,
  `$1${esc(esHs.parsed.higherScrutiny)}$3`,
);
// simpler: find tesla block
const teslaStart = es.indexOf('  tesla: {');
const teslaEnd = es.indexOf('\n  },', teslaStart);
if (teslaStart < 0) throw new Error('no tesla es');
let teslaBlock = es.slice(teslaStart, teslaEnd + 4);
teslaBlock = teslaBlock.replace(
  /higherScrutiny:\n\s*'[^']*'/,
  `higherScrutiny:\n      '${esc(esHs.parsed.higherScrutiny)}'`,
);
teslaBlock = teslaBlock.replace(
  /coloradoAngle:\n\s*'[^']*'/,
  `coloradoAngle:\n      '${esc(esCa.parsed.coloradoAngle)}'`,
);
es = es.slice(0, teslaStart) + teslaBlock + es.slice(teslaEnd + 4);
fs.writeFileSync(path.join(ROOT, 'lib/i18n/brandContentEs.ts'), es);

console.log('patched tesla reliability+es calls=', getCallCount());
