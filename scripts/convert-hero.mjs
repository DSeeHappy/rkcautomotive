import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(
  process.env.HERO_SRC ??
    'C:/Users/BS/.cursor/projects/c-Users-BS-Desktop-Software-rkcautomotive/assets/c__Users_BS_AppData_Roaming_Cursor_User_workspaceStorage_92ef6d88963b64fff61d0bf2ac5d318e_images_JDS05542-f25f80f2-0212-4fe5-a1b8-195ccb0351f6.png',
);
const out = path.join(root, 'public', 'images', 'hero-main.webp');

if (!fs.existsSync(src)) {
  console.error('Source not found:', src);
  process.exit(1);
}

const sharp = (await import('sharp')).default;
const meta = await sharp(src).metadata();
console.log(`Source: ${meta.width}x${meta.height} ${meta.format}`);

await sharp(src)
  .rotate()
  .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 92, effort: 4 })
  .toFile(out);

const stat = fs.statSync(out);
console.log(`Wrote ${out} (${(stat.size / 1e6).toFixed(2)} MB)`);
