/**
 * Regenerate app/icon.png, app/apple-icon.png, and app/favicon.ico from the
 * official RKC mark source. Adds inner padding plus a thin brand-green ring
 * so the black-background mark stays visible on dark browser tabs.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE = path.join(ROOT, "public/images/rkc-favicon-source.png");
const BRAND_GREEN = "#0e8536";

async function composeIcon(size) {
  // Thicker ring + more padding so the mark stays visible at 16–32px tab sizes
  // on both dark and light browser chrome.
  const ringPx = Math.max(3, Math.round(size * 0.075));
  const logoScale = 0.64;
  const inner = size - ringPx * 2;
  const logoSize = Math.round(inner * logoScale);
  const offset = Math.round((size - logoSize) / 2);

  const logo = await sharp(SOURCE)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .png()
    .toBuffer();

  const frame = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="#000000"/>
      <rect x="${ringPx / 2}" y="${ringPx / 2}" width="${size - ringPx}" height="${size - ringPx}" fill="none" stroke="${BRAND_GREEN}" stroke-width="${ringPx}"/>
    </svg>`,
  );

  return sharp(frame).composite([{ input: logo, top: offset, left: offset }]).png().toBuffer();
}

async function writePng(outputPath, size) {
  const png = await composeIcon(size);
  await fs.writeFile(outputPath, png);
  console.log(`wrote ${path.relative(ROOT, outputPath)} (${size}x${size})`);
}

async function writeIco(outputPath) {
  const sizes = [16, 24, 32, 48, 64];
  const pngBuffers = await Promise.all(sizes.map((size) => composeIcon(size)));
  const ico = await toIco(pngBuffers);
  await fs.writeFile(outputPath, ico);
  console.log(`wrote ${path.relative(ROOT, outputPath)} (${sizes.join("/")})`);
}

await writePng(path.join(ROOT, "app/icon.png"), 512);
await writePng(path.join(ROOT, "app/apple-icon.png"), 180);
await writeIco(path.join(ROOT, "app/favicon.ico"));
