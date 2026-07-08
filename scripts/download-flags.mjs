/**
 * Download Colorado municipal/county flags from Wikimedia Commons at full resolution.
 * SVGs are saved as-is; raster files are converted to optimized WebP at quality 90.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images', 'flags');
const denverHoodDir = path.join(outDir, 'neighborhoods', 'denver');
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(denverHoodDir, { recursive: true });

/** @type {{ wiki: string; local: string; raster?: boolean }[]} */
const FLAGS = [
  { wiki: 'Flag_of_Denver,_Colorado.svg', local: 'denver.svg' },
  { wiki: 'Flag_of_Arapahoe_County,_Colorado.svg', local: 'arapahoe-county.svg' },
  { wiki: 'Flag_of_Douglas_County,_Colorado.svg', local: 'douglas-county.svg' },
  { wiki: 'Flag_of_Jefferson_County,_Colorado.svg', local: 'jefferson-county.svg' },
  { wiki: 'Flag_of_Centennial,_Colorado.svg', local: 'centennial.svg' },
  { wiki: 'Flag_of_Lakewood,_Colorado.svg', local: 'lakewood.svg' },
  { wiki: 'Flag_of_Aurora,_Colorado.svg', local: 'aurora.svg' },
  { wiki: 'Flag_of_Arvada,_Colorado.svg', local: 'arvada.svg' },
  { wiki: 'Flag_of_Parker,_Colorado.svg', local: 'parker.svg' },
  { wiki: 'Flag_of_Golden,_Colorado.svg', local: 'golden.svg' },
  { wiki: 'Flag_of_Colorado.svg', local: 'colorado.svg' },
  // Raster-only sources — download original then convert to webp
  { wiki: 'Flag_of_Edgewater,_Colorado.png', local: 'edgewater.webp', raster: true },
  { wiki: 'The_new_flag_of_Lone_Tree_selected_in_2025.png', local: 'lone-tree.webp', raster: true },
  // Englewood & Wheat Ridge — no Wikimedia municipal flag; use high-res emblem PNGs
  {
    wiki: 'Englewood,_Colorado_logo.png',
    local: 'englewood.webp',
    raster: true,
  },
  {
    wiki: 'Wheat_Ridge,_Colorado_seal.png',
    local: 'wheat-ridge.webp',
    raster: true,
  },
];

/** Denver neighborhood flags from Wikimedia "Neighborhoods of Denver" section */
// Run: node scripts/download-denver-neighborhood-flags.mjs (parses wiki live, downloads all available)
// Run: node scripts/download-missing-city-flags.mjs (Edgewater, Wheat Ridge, Lone Tree, Englewood from en.wikipedia)

async function getImageUrl(filename) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`;
  const res = await fetch(api, {
    headers: { 'User-Agent': 'RKCAutomotive/1.0 (flag download script)' },
  });
  const text = await res.text();
  try {
    const data = JSON.parse(text);
    const pages = data.query?.pages ?? {};
    const page = Object.values(pages)[0];
    const url = page?.imageinfo?.[0]?.url;
    if (url) return url;
  } catch {
    // fall through to direct path when API rate-limits
  }
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}

const sharp = (await import('sharp')).default;

async function downloadFlag({ wiki, local, raster, targetDir = outDir }) {
  const url = await getImageUrl(wiki);
  console.log(`Downloading ${wiki}…`);
  const res = await fetch(url, {
    redirect: 'follow',
    headers: { 'User-Agent': 'RKCAutomotive/1.0 (flag download script)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = path.join(targetDir, local);

  if (local.endsWith('.svg')) {
    fs.writeFileSync(outPath, buf);
    console.log(`  → ${local} (${(buf.length / 1024).toFixed(1)} KB)`);
  } else if (raster) {
    await sharp(buf)
      .resize({ width: 1200, height: 800, fit: 'inside', withoutEnlargement: false })
      .webp({ quality: 90, effort: 4 })
      .toFile(outPath);
    const size = fs.statSync(outPath).size;
    console.log(`  → ${local} (${(size / 1024).toFixed(1)} KB webp)`);
  }
}

for (const entry of FLAGS) {
  try {
    await downloadFlag(entry);
  } catch (err) {
    console.warn(`  ⚠ Skipped ${entry.wiki}: ${err.message}`);
  }
}

console.log('\nDenver neighborhood flags…');
const { execSync } = await import('node:child_process');
execSync('node scripts/download-denver-neighborhood-flags.mjs', {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit',
});
console.log('\nMissing municipal webp flags…');
execSync('node scripts/download-missing-city-flags.mjs', {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit',
});

// Copy county SVGs to city fallback aliases (keep single source of truth on disk)
const aliases = [
  ['arapahoe-county.svg', 'littleton.svg'],
  ['arapahoe-county.svg', 'sheridan.svg'],
  ['arapahoe-county.svg', 'greenwood-village.svg'],
  ['arapahoe-county.svg', 'cherry-hills-village.svg'],
  ['arapahoe-county.svg', 'glendale.svg'],
  ['arapahoe-county.svg', 'bow-mar.svg'],
  ['douglas-county.svg', 'highlands-ranch.svg'],
  ['jefferson-county.svg', 'morrison.svg'],
  ['jefferson-county.svg', 'columbine.svg'],
];

for (const [src, dest] of aliases) {
  const srcPath = path.join(outDir, src);
  const destPath = path.join(outDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Alias: ${src} → ${dest}`);
  }
}

console.log('Done.');
