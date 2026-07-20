/**
 * Favicon pipeline for the official RKC mark.
 *
 * - Animated source (`public/images/rkc-favicon-source.png`, APNG) is never
 *   overwritten. It is copied as-is to `public/favicon.png` so browsers that
 *   support APNG keep the bolt/oval motion.
 * - Static fallbacks (`app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`)
 *   are generated from the first frame only (sharp drops animation frames).
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const ROOT = path.resolve(import.meta.dirname, "..");
const ANIMATED_SOURCE = path.join(ROOT, "public/images/rkc-favicon-source.png");
const ANIMATED_PUBLIC = path.join(ROOT, "public/favicon.png");
const BRAND_GREEN = "#0e8536";

async function assertAnimatedSource() {
  const buf = await fs.readFile(ANIMATED_SOURCE);
  if (!buf.includes(Buffer.from("acTL"))) {
    throw new Error(
      `Expected animated APNG at ${path.relative(ROOT, ANIMATED_SOURCE)} (missing acTL chunk).`,
    );
  }
  return buf;
}

/** Copy the official APNG unchanged — never re-encode (that would kill animation). */
async function writeAnimatedFavicon(sourceBuf) {
  await fs.writeFile(ANIMATED_PUBLIC, sourceBuf);
  console.log(`wrote ${path.relative(ROOT, ANIMATED_PUBLIC)} (APNG, animation preserved)`);
}

/**
 * Static fallback from first APNG frame. Light padding + thin green ring so the
 * black mark stays visible on dark tabs — does not touch the animated asset.
 */
async function composeStaticIcon(size) {
  const ringPx = Math.max(2, Math.round(size * 0.04));
  const logoScale = 0.78;
  const inner = size - ringPx * 2;
  const logoSize = Math.round(inner * logoScale);
  const offset = Math.round((size - logoSize) / 2);

  // sharp reads the first frame of an APNG by default
  const logo = await sharp(ANIMATED_SOURCE)
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
  const png = await composeStaticIcon(size);
  await fs.writeFile(outputPath, png);
  console.log(`wrote ${path.relative(ROOT, outputPath)} (${size}x${size} static fallback)`);
}

async function writeIco(outputPath) {
  const sizes = [16, 24, 32, 48, 64];
  const pngBuffers = await Promise.all(sizes.map((size) => composeStaticIcon(size)));
  const ico = await toIco(pngBuffers);
  await fs.writeFile(outputPath, ico);
  console.log(`wrote ${path.relative(ROOT, outputPath)} (${sizes.join("/")} static fallback)`);
}

const sourceBuf = await assertAnimatedSource();
await writeAnimatedFavicon(sourceBuf);
await writePng(path.join(ROOT, "app/icon.png"), 512);
await writePng(path.join(ROOT, "app/apple-icon.png"), 180);
await writeIco(path.join(ROOT, "app/favicon.ico"));
