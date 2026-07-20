import fs from 'fs';
import path from 'path';
import { buildKnowledgeCatalog } from './buildCatalog';

const ROOT = path.resolve(import.meta.dirname, '../..');
const OUT_DIR = path.join(ROOT, 'data', 'knowledge');
const OUT_FILE = path.join(OUT_DIR, 'catalog.snapshot.json');

fs.mkdirSync(OUT_DIR, { recursive: true });
const catalog = buildKnowledgeCatalog();
fs.writeFileSync(OUT_FILE, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
console.log(
  JSON.stringify({
    outFile: path.relative(ROOT, OUT_FILE),
    version: catalog.version,
    manufacturers: catalog.manufacturers.length,
    models: catalog.models.length,
    claims: catalog.claims.length,
  }),
);
