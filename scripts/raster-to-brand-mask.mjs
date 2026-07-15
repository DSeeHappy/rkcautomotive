/**
 * Convert car-logos PNGs (typically black bg) into black-on-transparent mask assets.
 * Run: node scripts/raster-to-brand-mask.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const tmp = path.join(root, '.tmp-brand-logos');
const out = path.join(root, 'public', 'images', 'brands');

const jobs = [
  { name: 'buick', threshold: 28 },
  { name: 'lincoln', threshold: 18 },
  { name: 'dodge', threshold: 28 },
  { name: 'lexus', threshold: 28 },
];

for (const job of jobs) {
  const src = path.join(tmp, `${job.name}.png`);
  const dest = path.join(out, `${job.name}.png`);
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);
  let opaque = 0;
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    // Keep logo pixels (brighter / chromatic than near-black canvas)
    const isLogo = a > 8 && luminance >= job.threshold;
    if (isLogo) {
      pixels[i] = 0;
      pixels[i + 1] = 0;
      pixels[i + 2] = 0;
      pixels[i + 3] = 255;
      opaque += 1;
    } else {
      pixels[i] = 0;
      pixels[i + 1] = 0;
      pixels[i + 2] = 0;
      pixels[i + 3] = 0;
    }
  }

  console.log(`${job.name}: ${opaque} opaque pixels of ${info.width * info.height}`);

  if (opaque < 40) {
    throw new Error(`${job.name}: silhouette too empty — lower threshold`);
  }

  const trimmed = await sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 0 })
    .png()
    .toBuffer({ resolveWithObject: true });

  await sharp(trimmed.data)
    .extend({
      top: 16,
      bottom: 16,
      left: 16,
      right: 16,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(dest);

  const svgPath = path.join(out, `${job.name}.svg`);
  if (fs.existsSync(svgPath)) fs.unlinkSync(svgPath);
  console.log('wrote', dest);
}
