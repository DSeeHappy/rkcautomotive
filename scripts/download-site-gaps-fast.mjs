/** Download missing site-relevant WebP files with moderate delay (5s). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const DELAY_MS = 5000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function downloadAndConvert(sourceUrl, destPath, attempt = 1) {
  const response = await fetch(sourceUrl, {
    headers: { 'User-Agent': 'RKC-Automotive-Site/1.0 (vehicle image sync)' },
  });
  if ((response.status === 429 || response.status === 503) && attempt < 8) {
    const waitMs = DELAY_MS * attempt * 2;
    console.log(`Rate limited (${response.status}), retry in ${waitMs}ms`);
    await sleep(waitMs);
    return downloadAndConvert(sourceUrl, destPath, attempt + 1);
  }
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  const sharp = (await import('sharp')).default;
  await sharp(buffer)
    .rotate()
    .resize(1600, 900, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(destPath);
}

const audit = spawnSync('node', ['scripts/audit-site-images.mjs'], {
  cwd: root,
  encoding: 'utf8',
});
const lines = audit.stdout.split(/\r?\n/).filter((l) => l.startsWith('{'));
let downloaded = 0;
let failed = 0;

for (const line of lines) {
  const row = JSON.parse(line);
  if (row.reason === 'no CSV row') continue;
  const destPath = path.join(root, 'public', row.webPath.replace(/^\//, ''));
  if (fs.existsSync(destPath)) continue;
  try {
    await downloadAndConvert(row.url, destPath);
    downloaded += 1;
    console.log(`Saved ${row.webPath}`);
  } catch (error) {
    failed += 1;
    console.warn(`Failed ${row.slug}: ${error.message}`);
  }
  await sleep(DELAY_MS);
}

console.log(`\nDownloaded: ${downloaded}, failed: ${failed}`);
