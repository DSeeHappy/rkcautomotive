import sharp from 'sharp';
import { access } from 'fs/promises';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const candidates = [
  'C:/Users/BS/.cursor/projects/c-Users-BS-Desktop-Software-rkcautomotive/assets/c__Users_BS_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_rkc_automotive_logo_transparent-b761543a-b971-4f97-8abc-90886676a8d4.png',
  path.join(root, 'public/images/rkc-logo.png'),
];

const BACKGROUND_LUM = 52;
const BACKGROUND_SAT = 0.14;
const WHITE_CUT = 238;

function luminance(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function saturation(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max === 0 ? 0 : (max - min) / max;
}

function isBackgroundPixel(r, g, b) {
  const min = Math.min(r, g, b);
  if (min >= WHITE_CUT) return true;
  return luminance(r, g, b) <= BACKGROUND_LUM && saturation(r, g, b) <= BACKGROUND_SAT;
}

async function resolveSource() {
  for (const candidate of candidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      /* try next */
    }
  }
  throw new Error('No logo source found');
}

function floodRemoveBackground(data, width, height) {
  const visited = new Uint8Array(width * height);
  const queue = [];

  const pushIfBackground = (x, y) => {
    const idx = y * width + x;
    if (visited[idx]) return;
    const px = idx * 4;
    if (!isBackgroundPixel(data[px], data[px + 1], data[px + 2])) return;
    visited[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < width; x++) {
    pushIfBackground(x, 0);
    pushIfBackground(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    pushIfBackground(0, y);
    pushIfBackground(width - 1, y);
  }

  while (queue.length > 0) {
    const idx = queue.pop();
    const x = idx % width;
    const y = (idx - x) / width;
    data[idx * 4 + 3] = 0;

    if (x > 0) pushIfBackground(x - 1, y);
    if (x < width - 1) pushIfBackground(x + 1, y);
    if (y > 0) pushIfBackground(x, y - 1);
    if (y < height - 1) pushIfBackground(x, y + 1);
  }

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (data[i + 3] === 0) continue;
    if (isBackgroundPixel(r, g, b)) data[i + 3] = 0;
  }
}

async function makeTransparent(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  floodRemoveBackground(data, info.width, info.height);

  const trimmed = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 24 })
    .extend({
      top: 24,
      bottom: 24,
      left: 24,
      right: 24,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer({ resolveWithObject: true });

  if (!trimmed.info.width || !trimmed.info.height) {
    throw new Error('Logo has no visible content after transparency pass');
  }

  return sharp(trimmed.data, {
    raw: { width: trimmed.info.width, height: trimmed.info.height, channels: trimmed.info.channels },
  });
}

async function exportVariant(pipeline, outPath, width, format) {
  const img = pipeline.clone().resize(width, null, {
    fit: 'inside',
    withoutEnlargement: false,
    kernel: sharp.kernel.lanczos3,
  });

  if (format === 'png') {
    await img.png({ compressionLevel: 9, effort: 10 }).toFile(outPath);
  } else {
    await img.webp({ quality: 96, alphaQuality: 100, effort: 6 }).toFile(outPath);
  }
}

const src = await resolveSource();
const outDir = path.join(root, 'public/images');
const iconOut = path.join(root, 'app/icon.png');

await mkdir(outDir, { recursive: true });

const transparent = await makeTransparent(src);
const trimmedMeta = await transparent.clone().metadata();

const pngOut = path.join(outDir, 'rkc-logo.png');
const webpOut = path.join(outDir, 'rkc-logo.webp');
const png2xOut = path.join(outDir, 'rkc-logo@2x.png');
const png3xOut = path.join(outDir, 'rkc-logo@3x.png');
const webp2xOut = path.join(outDir, 'rkc-logo@2x.webp');

await exportVariant(transparent, pngOut, 1024, 'png');
await exportVariant(transparent, webpOut, 1024, 'webp');
await exportVariant(transparent, png2xOut, 2048, 'png');
await exportVariant(transparent, png3xOut, 3072, 'png');
await exportVariant(transparent, webp2xOut, 2048, 'webp');

await transparent
  .clone()
  .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(iconOut);

const finalMeta = await sharp(pngOut).metadata();
console.log('Logo processed from:', src);
console.log('Trimmed source:', { width: trimmedMeta.width, height: trimmedMeta.height });
console.log('Exports:', {
  width: finalMeta.width,
  height: finalMeta.height,
  pngOut,
  webpOut,
  png2xOut,
  png3xOut,
  iconOut,
});
