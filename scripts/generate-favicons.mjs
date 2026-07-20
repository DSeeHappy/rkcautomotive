/**
 * Favicon pipeline for the official RKC mark.
 *
 * - Tab icons (`app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`) are
 *   generated from `public/images/rkc-favicon-source.png` (first frame if APNG).
 * - Animated header (`public/images/rkc-logo-animated.png`) is separate and is
 *   only updated when `--include-header` is passed — default runs are tab icons only.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const ROOT = path.resolve(import.meta.dirname, "..");
const STATIC_SOURCE = path.join(ROOT, "public/images/rkc-favicon-source.png");
const ANIMATED_HEADER = path.join(ROOT, "public/images/rkc-logo-animated.png");
const ANIMATED_STATIC = path.join(ROOT, "public/images/rkc-logo-animated-static.png");
const includeHeader = process.argv.includes("--include-header");

/** Official 64×64 black-square mark — resize directly for tab icons. */
async function composeStaticIcon(size) {
  return sharp(STATIC_SOURCE)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .png()
    .toBuffer();
}

async function writePng(outputPath, size) {
  const png = await composeStaticIcon(size);
  await fs.writeFile(outputPath, png);
  console.log(`wrote ${path.relative(ROOT, outputPath)} (${size}x${size})`);
}

async function writeIco(outputPath) {
  const sizes = [16, 24, 32, 48, 64];
  const pngBuffers = await Promise.all(sizes.map((size) => composeStaticIcon(size)));
  const ico = await toIco(pngBuffers);
  await fs.writeFile(outputPath, ico);
  console.log(`wrote ${path.relative(ROOT, outputPath)} (${sizes.join("/")})`);
}

async function updateAnimatedHeaderAssets() {
  const sourceBuf = await fs.readFile(ANIMATED_HEADER);
  if (!sourceBuf.includes(Buffer.from("acTL"))) {
    throw new Error(
      `Expected animated APNG at ${path.relative(ROOT, ANIMATED_HEADER)} (missing acTL chunk).`,
    );
  }

  const png = await sharp(ANIMATED_HEADER).png().toBuffer();
  await fs.writeFile(ANIMATED_STATIC, png);
  console.log(`wrote ${path.relative(ROOT, ANIMATED_STATIC)} (static first frame)`);
}

await fs.access(STATIC_SOURCE);

if (includeHeader) {
  await updateAnimatedHeaderAssets();
} else {
  console.log("skipping header animated assets (tab icons only)");
}

await writePng(path.join(ROOT, "app/icon.png"), 512);
await writePng(path.join(ROOT, "app/apple-icon.png"), 180);
await writeIco(path.join(ROOT, "app/favicon.ico"));
