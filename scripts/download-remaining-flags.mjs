import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images', 'flags', 'neighborhoods', 'denver');
const sharp = (await import('sharp')).default;

async function getDirectUrl(wikiFile) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(wikiFile)}&prop=imageinfo&iiprop=url&format=json`;
  const res = await fetch(api, { headers: { 'User-Agent': 'RKCAutomotive/1.0' } });
  const data = await res.json();
  const page = Object.values(data.query?.pages ?? {})[0];
  return page?.imageinfo?.[0]?.url ?? null;
}

const missing = [
  ['washington-virginia-vale', 'Flag_of_Washington_Virginia_Vale,_Denver.png'],
  ['westwood', 'Flag_of_Westwood,_Denver.png'],
];

for (const [slug, wiki] of missing) {
  const outPath = path.join(outDir, `${slug}.webp`);
  if (fs.existsSync(outPath)) {
    console.log('exists', slug);
    continue;
  }
  await new Promise((r) => setTimeout(r, 10000));
  const url = await getDirectUrl(wiki);
  console.log(slug, url?.slice(0, 80));
  if (!url) continue;
  const res = await fetch(url, { headers: { 'User-Agent': 'RKCAutomotive/1.0' } });
  if (!res.ok) {
    console.log(' fail', res.status);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf).resize({ width: 1200, height: 800, fit: 'inside' }).webp({ quality: 90 }).toFile(outPath);
  console.log(' ok', fs.statSync(outPath).size);
}

// Englewood city flag — white field + city logo (no Wikimedia file)
const englewoodOut = path.join(__dirname, '..', 'public', 'images', 'flags', 'englewood.webp');
if (!fs.existsSync(englewoodOut)) {
  const logoUrl = 'https://www.englewoodco.gov/ImageRepository/Document?documentID=10268';
  await new Promise((r) => setTimeout(r, 2000));
  let logoBuf = null;
  for (const url of [
    logoUrl,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Englewood%2C_Colorado_logo.png/320px-Englewood%2C_Colorado_logo.png',
  ]) {
    const res = await fetch(url, { headers: { 'User-Agent': 'RKCAutomotive/1.0' } });
    if (res.ok) {
      logoBuf = Buffer.from(await res.arrayBuffer());
      break;
    }
  }
  if (logoBuf) {
    const logo = await sharp(logoBuf).resize({ width: 400, height: 400, fit: 'inside' }).png().toBuffer();
    await sharp({
      create: { width: 800, height: 533, channels: 3, background: '#ffffff' },
    })
      .composite([{ input: logo, gravity: 'centre' }])
      .webp({ quality: 90 })
      .toFile(englewoodOut);
    console.log('englewood.webp created');
  } else {
    console.log('Could not fetch Englewood logo');
  }
}
