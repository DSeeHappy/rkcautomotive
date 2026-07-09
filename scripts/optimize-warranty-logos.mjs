import sharp from 'sharp';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'public', 'warranty-logos');
const MAX_WIDTH = 320;

for (const file of readdirSync(dir)) {
  if (!/\.(png|webp|jpg|jpeg)$/i.test(file)) continue;
  const filePath = path.join(dir, file);
  const before = statSync(filePath).size;
  const outPath = path.join(dir, file.replace(/\.(webp|jpg|jpeg)$/i, '.png'));

  try {
    const img = sharp(filePath);
    const meta = await img.metadata();
    const needsResize = (meta.width ?? 0) > MAX_WIDTH;
    const needsConvert = !file.endsWith('.png') || outPath !== filePath;

    if (!needsResize && !needsConvert && before < 80_000) continue;

    let pipeline = sharp(filePath).resize({
      width: needsResize ? MAX_WIDTH : undefined,
      fit: 'inside',
      withoutEnlargement: true,
    });

    const buffer = await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer();
    if (buffer.length < before || needsConvert) {
      await sharp(buffer).toFile(outPath.endsWith('.png') ? outPath : `${outPath}`);
      if (outPath !== filePath && filePath !== outPath) {
        // keep single .png per slug
      }
      const after = statSync(outPath).size;
      console.log(`${file}: ${before} -> ${after} bytes (${meta.width}x${meta.height})`);
    }
  } catch (err) {
    console.warn(`${file}: skip (${String(err)})`);
  }
}
