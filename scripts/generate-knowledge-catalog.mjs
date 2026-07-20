/**
 * Phase 2 — export knowledge catalog snapshot for DB migration / audit.
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOG_DIR = path.join(ROOT, 'scripts', '.spark-logs');

function main() {
  fs.mkdirSync(LOG_DIR, { recursive: true });
  const r = spawnSync(
    'node',
    ['--experimental-strip-types', path.join(ROOT, 'lib/knowledge/writeSnapshot.ts')],
    { encoding: 'utf8', cwd: ROOT },
  );
  if (r.status !== 0) {
    console.error(r.stderr || r.stdout);
    process.exit(r.status ?? 1);
  }
  console.log(r.stdout.trim());
  const logFile = path.join(LOG_DIR, `phase2-catalog-export-${Date.now()}.json`);
  fs.writeFileSync(logFile, r.stdout, 'utf8');
}

main();
