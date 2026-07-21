import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  analyzeOemParseCoverage,
  parseOemSpecText,
  parseGenerationYearMap,
} from '../lib/knowledge/parseOemSpecText.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const oemPack = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/knowledge/oem-pack.json'), 'utf8'),
);

const rav4 = oemPack.models['toyota-rav4'];
const subtitle = rav4.subtitle;
console.log('RAV4 year map:', Object.fromEntries(parseGenerationYearMap(subtitle)));

for (const key of ['engine', 'dimensions', 'mpg', 'torque', 'maintenance']) {
  const text = rav4.fields[key].text;
  const parsed = parseOemSpecText(text, subtitle);
  console.log(`\n${key}: layout=${parsed.layout} content=${parsed.contentFormat} gens=${parsed.generations.length}`);
  if (parsed.generations.length) {
    console.log('  labels:', parsed.generations.map((g) => g.displayLabel).join(', '));
  }
}

const report = analyzeOemParseCoverage(oemPack.models);
console.log('\nCoverage:', report);
console.log(
  `Structured: ${report.structuredContent}/${report.totalFields} (${((report.structuredContent / report.totalFields) * 100).toFixed(1)}%)`,
);
console.log(
  `Generation layout: ${report.generationLayout}/${report.totalFields} (${((report.generationLayout / report.totalFields) * 100).toFixed(1)}%)`,
);
const proseBlocks = report.multiClauseProse + report.singleClauseProse;
console.log(
  `Multi-clause prose blocks: ${report.multiClauseProse}/${proseBlocks} (${((report.multiClauseProse / proseBlocks) * 100).toFixed(1)}%)`,
);
console.log(
  `Labeled clauses: ${report.labeledClauses}/${report.totalClauses} (${((report.labeledClauses / report.totalClauses) * 100).toFixed(1)}%)`,
);
