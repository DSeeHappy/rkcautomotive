import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images', 'flags');
const sharp = (await import('sharp')).default;

const FILES = [
  {
    wiki: 'Flag_of_Edgewater,_Colorado.png',
    local: 'edgewater.webp',
    source: 'en.wikipedia.org',
  },
  {
    wiki: 'Flag_of_Wheat_Ridge,_Colorado.png',
    local: 'wheat-ridge.webp',
    source: 'en.wikipedia.org',
  },
  {
    wiki: 'The_new_flag_of_Lone_Tree_selected_in_2025.png',
    local: 'lone-tree.webp',
    source: 'en.wikipedia.org',
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const { wiki, local, source } of FILES) {
  const url = `https://${source}/wiki/Special:FilePath/${encodeURIComponent(wiki)}`;
  console.log('Fetching', wiki);
  await sleep(2000);
  const res = await fetch(url, {
    redirect: 'follow',
    headers: { 'User-Agent': 'RKCAutomotive/1.0' },
  });
  console.log(' ', res.status, res.url.slice(0, 80));
  if (!res.ok) continue;
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = path.join(outDir, local);
  await sharp(buf)
    .resize({ width: 1200, height: 800, fit: 'inside', withoutEnlargement: false })
    .webp({ quality: 90, effort: 4 })
    .toFile(outPath);
  console.log('  ->', local, fs.statSync(outPath).size);
}

// Englewood: no Wikimedia file — fetch city logo from official site
const englewoodLogo =
  'https://www.englewoodco.gov/ImageRepository/Document?documentId=10268';
console.log('Fetching Englewood city logo…');
await sleep(2000);
const engRes = await fetch(englewoodLogo, {
  headers: { 'User-Agent': 'RKCAutomotive/1.0' },
});
if (engRes.ok) {
  const buf = Buffer.from(await engRes.arrayBuffer());
  await sharp(buf)
    .resize({ width: 1200, height: 800, fit: 'inside', background: '#ffffff' })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'englewood.webp'));
  console.log('  -> englewood.webp');
} else {
  // Fallback: white field with Arapahoe county (documented)
  fs.copyFileSync(path.join(outDir, 'arapahoe-county.svg'), path.join(outDir, 'englewood-fallback.svg'));
  console.log('  Englewood logo fetch failed:', engRes.status);
}
