/**
 * Normalize WorldVectorLogo / Wikimedia SVGs into mask-friendly brand icons.
 * Run: node scripts/normalize-category-brand-logos.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const tmp = path.join(root, '.tmp-brand-logos');
const out = path.join(root, 'public', 'images', 'brands');

function toMaskSvg(raw, title) {
  let svg = raw
    .replace(/<\?xml[^>]*>/g, '')
    .replace(/<!DOCTYPE[^>]*>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  // Drop solid white full-canvas backgrounds common in WorldVectorLogo exports
  svg = svg.replace(/<path[^>]*fill="#fff"[^>]*d="M0 0h[^"]+"[^>]*\/>/gi, '');
  svg = svg.replace(/<path[^>]*d="M0 0h[^"]+"[^>]*fill="#fff"[^>]*\/>/gi, '');

  svg = svg.replace(/fill="#cf4037"/gi, 'fill="#000000"');
  svg = svg.replace(/fill="#[0-9a-fA-F]{3,8}"/g, (m) => {
    const c = m.slice(6, -1).toLowerCase();
    if (c === '#ffffff' || c === '#fff') return 'fill="#ffffff"';
    return 'fill="#000000"';
  });

  const vb = (svg.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 24 24';
  const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/i, '').replace(/<\/svg>[\s\S]*$/i, '');
  return `<svg role="img" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg"><title>${title}</title>${inner}</svg>\n`;
}

const jobs = [
  { src: 'gmc-icon.svg', dest: 'gmc.svg', title: 'GMC' },
  { src: 'buick-icon.svg', dest: 'buick.svg', title: 'Buick' },
  { src: 'lincoln-icon.svg', dest: 'lincoln.svg', title: 'Lincoln' },
  { src: 'dodge-icon.svg', dest: 'dodge.svg', title: 'Dodge' },
  { src: 'lexus-icon.svg', dest: 'lexus.svg', title: 'Lexus' },
];

for (const job of jobs) {
  const raw = fs.readFileSync(path.join(tmp, job.src), 'utf8');
  fs.writeFileSync(path.join(out, job.dest), toMaskSvg(raw, job.title));
  console.log('wrote', job.dest);
}

// Prefer WorldVectorLogo Buick — Wikimedia trace includes a solid black square that breaks CSS masks.
