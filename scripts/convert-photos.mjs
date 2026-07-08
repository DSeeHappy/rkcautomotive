/**
 * Convert public/rkc photos/*.jpg → public/images/*.webp
 * and emit a friendly naming map for the site.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'public', 'rkc photos');
const outDir = path.join(root, 'public', 'images');

const NAMED = {
  'JDS05489.jpg': 'mechanic-undercarriage.webp',
  'JDS05490.jpg': 'shop-detail-01.webp',
  'JDS05499.jpg': 'team-lift-collaboration.webp',
  'JDS05506.jpg': 'shop-detail-02.webp',
  'JDS05524.jpg': 'shop-detail-03.webp',
  'JDS05530.jpg': 'shop-exterior.webp',
  'JDS05542.jpg': 'shop-detail-04.webp',
  'JDS05550.jpg': 'classic-car-lift.webp',
  'JDS05553.jpg': 'shop-detail-05.webp',
  'JDS05565.jpg': 'shop-detail-06.webp',
  'JDS05573.jpg': 'shop-detail-07.webp',
  'JDS05580.jpg': 'shop-interior-bay.webp',
  'JDS05598.jpg': 'shop-detail-08.webp',
  'JDS05613.jpg': 'shop-detail-09.webp',
  'JDS05620.jpg': 'shop-detail-10.webp',
  'JDS05621.jpg': 'shop-detail-11.webp',
  'JDS05638.jpg': 'shop-detail-12.webp',
  'JDS05645.jpg': 'engine-bay-teamwork.webp',
  'JDS05646.jpg': 'shop-detail-13.webp',
  'JDS05686.jpg': 'shop-detail-14.webp',
  'JDS05690.jpg': 'shop-detail-15.webp',
  'JDS05721.jpg': 'engine-rebuild-team.webp',
  'JDS05729.jpg': 'shop-detail-16.webp',
  'JDS05741.jpg': 'shop-detail-17.webp',
  'JDS05744.jpg': 'shop-detail-18.webp',
  'JDS05747.jpg': 'shop-detail-19.webp',
  'JDS05749.jpg': 'shop-detail-20.webp',
  'JDS05762.jpg': 'shop-detail-21.webp',
  'JDS05767.jpg': 'shop-detail-22.webp',
  'JDS05774.jpg': 'shop-detail-23.webp',
  'JDS05797.jpg': 'shop-detail-24.webp',
};

fs.mkdirSync(outDir, { recursive: true });

const sharp = (await import('sharp')).default;

const files = fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png)$/i.test(f));
console.log(`Found ${files.length} images in rkc photos/`);

for (const file of files) {
  const outName = NAMED[file] || `${path.parse(file).name.toLowerCase()}.webp`;
  const input = path.join(srcDir, file);
  const output = path.join(outDir, outName);
  await sharp(input)
    .rotate()
    .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(output);
  const before = fs.statSync(input).size;
  const after = fs.statSync(output).size;
  console.log(`${file} → ${outName} (${(before / 1e6).toFixed(1)}MB → ${(after / 1e6).toFixed(1)}MB)`);
}

console.log('Done.');
