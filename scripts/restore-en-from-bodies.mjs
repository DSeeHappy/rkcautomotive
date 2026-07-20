/**
 * Restore lib/i18n/serviceBodies/_en/*.json from en: sections in *.ts modules.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, '../lib/i18n/serviceBodies');
const OUT = path.join(DIR, '_en');
fs.mkdirSync(OUT, { recursive: true });

for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.ts') && x !== 'index.ts')) {
  const slug = f.replace(/\.ts$/, '');
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  const m = src.match(/en:\s*(\{[\s\S]*?\n\})\s*,\s*\n\s*es:/);
  if (!m) {
    console.error('no en', slug);
    continue;
  }
  const en = Function('return (' + m[1] + ')')();
  fs.writeFileSync(path.join(OUT, `${slug}.json`), JSON.stringify(en, null, 2), 'utf8');
  console.log('restored', slug, 'cards', en.symptoms?.cards?.length ?? en.symptomsCards?.length ?? 0);
}
