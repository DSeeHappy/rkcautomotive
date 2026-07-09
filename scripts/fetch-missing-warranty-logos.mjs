import { mkdirSync, writeFileSync, existsSync, readFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

/** Providers still missing logos — multiple domains and direct asset URLs per company */
const MISSING = [
  {
    slug: 'olive',
    domains: ['witholive.com', 'shopolive.com', 'olive.com'],
    directUrls: [
      'https://www.witholive.com/favicon.ico',
      'https://www.witholive.com/apple-touch-icon.png',
      'https://shopolive.com/favicon.ico',
    ],
  },
  {
    slug: 'allstate-car-care',
    domains: ['allstatecarcare.com', 'allstate.com'],
    directUrls: [
      'https://www.allstatecarcare.com/favicon.ico',
      'https://www.allstate.com/favicon.ico',
      'https://www.allstate.com/etc.clientlibs/allstate/clientlibs/clientlib-site/resources/icon-512x512.png',
    ],
  },
  {
    slug: 'matrix',
    domains: ['matrixwarranty.com', 'matrixwarrantysolutions.com'],
    directUrls: [
      'https://matrixwarranty.com/favicon.ico',
      'https://www.matrixwarranty.com/favicon.ico',
    ],
  },
  {
    slug: 'united-auto-defense',
    domains: ['unitedautodefense.com'],
    directUrls: [
      'https://unitedautodefense.com/favicon.ico',
      'https://www.unitedautodefense.com/wp-content/uploads/2021/06/UAD-Logo.png',
    ],
  },
  {
    slug: 'nvp',
    domains: ['nvpcservices.com', 'nationalvehicleprotection.com'],
    directUrls: [
      'https://www.nvpcservices.com/favicon.ico',
      'https://www.nvpcservices.com/apple-touch-icon.png',
    ],
  },
  {
    slug: 'protect-my-car',
    domains: ['protectmycar.com'],
    directUrls: [
      'https://protectmycar.com/favicon.ico',
      'https://www.protectmycar.com/wp-content/uploads/2019/07/PMC-Logo.png',
    ],
  },
  {
    slug: 'liberty-bell',
    domains: ['libertybellautoprotect.com'],
    directUrls: [
      'https://www.libertybellautoprotect.com/favicon.ico',
      'https://libertybellautoprotect.com/favicon.ico',
    ],
  },
  {
    slug: 'aa-auto-protection',
    domains: ['aaautoprotection.com'],
    directUrls: [
      'https://aaautoprotection.com/favicon.ico',
      'https://www.aaautoprotection.com/favicon.ico',
    ],
  },
  {
    slug: 'smart-auto-care',
    domains: ['smartautocare.com'],
    directUrls: [
      'https://smartautocare.com/favicon.ico',
      'https://www.smartautocare.com/favicon.ico',
      'https://smartautocare.com/apple-touch-icon.png',
    ],
  },
  {
    slug: 'preferred',
    domains: ['pwoi.com', 'preferredwarranties.com'],
    directUrls: [
      'https://www.pwoi.com/favicon.ico',
      'https://www.preferredwarranties.com/favicon.ico',
    ],
  },
];

const outDir = path.join(process.cwd(), 'public', 'warranty-logos');
mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  execFileSync(
    'powershell.exe',
    [
      '-NoProfile',
      '-Command',
      `$ProgressPreference='SilentlyContinue'; Invoke-WebRequest -Uri '${url.replace(/'/g, "''")}' -OutFile '${dest.replace(/'/g, "''")}' -UseBasicParsing -TimeoutSec 20`,
    ],
    { stdio: 'pipe', maxBuffer: 10 * 1024 * 1024 },
  );
}

function fetchHtml(url) {
  try {
    return execFileSync(
      'curl.exe',
      ['-sL', '--max-time', '15', '-A', 'Mozilla/5.0 (compatible; RKCLogoBot/1.0)', url],
      { encoding: 'utf8', maxBuffer: 2 * 1024 * 1024 },
    );
  } catch {
    return '';
  }
}

function fileSize(filePath) {
  if (!existsSync(filePath)) return 0;
  return readFileSync(filePath).length;
}

function extractLogoUrls(html, baseUrl) {
  const urls = new Set();
  const origin = new URL(baseUrl).origin;

  for (const match of html.matchAll(/<link[^>]+rel=["'](?:apple-touch-icon|icon|shortcut icon)["'][^>]*>/gi)) {
    const href = match[0].match(/href=["']([^"']+)["']/i)?.[1];
    if (href) urls.add(new URL(href, baseUrl).href);
  }

  for (const match of html.matchAll(/<meta[^>]+property=["']og:image["'][^>]*>/gi)) {
    const content = match[0].match(/content=["']([^"']+)["']/i)?.[1];
    if (content) urls.add(new URL(content, baseUrl).href);
  }

  for (const match of html.matchAll(/<img[^>]+(?:src|data-src)=["']([^"']*(?:logo|brand|header)[^"']*)["'][^>]*>/gi)) {
    urls.add(new URL(match[1], baseUrl).href);
  }

  for (const match of html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*(?:logo|brand|Logo|Brand)/gi)) {
    urls.add(new URL(match[1], baseUrl).href);
  }

  for (const match of html.matchAll(/src=["']([^"']*(?:logo|Logo|brand)[^"']*)["']/gi)) {
    const u = match[1];
    if (u.match(/\.(png|jpg|jpeg|webp|svg|ico)(\?|$)/i)) {
      urls.add(new URL(u, baseUrl).href);
    }
  }

  // Common WordPress / static paths
  for (const p of ['/wp-content/uploads/logo.png', '/assets/logo.png', '/images/logo.png', '/img/logo.png']) {
    urls.add(`${origin}${p}`);
  }

  return [...urls];
}

function buildSources(provider) {
  const sources = [];

  for (const url of provider.directUrls ?? []) {
    sources.push(url);
  }

  for (const domain of provider.domains) {
    sources.push(
      `https://logo.clearbit.com/${domain}`,
      `https://img.logo.dev/${domain}?token=public`,
      `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
      `https://icons.duckduckgo.com/ip3/${domain}.ico`,
      `https://${domain}/favicon.ico`,
      `https://www.${domain}/favicon.ico`,
      `https://${domain}/apple-touch-icon.png`,
      `https://www.${domain}/apple-touch-icon.png`,
      `https://${domain}/apple-touch-icon-precomposed.png`,
      `https://www.${domain}/apple-touch-icon-precomposed.png`,
    );
  }

  for (const domain of provider.domains) {
    for (const prefix of ['https://www.', 'https://']) {
      const home = `${prefix}${domain}/`;
      const html = fetchHtml(home);
      if (html) {
        sources.push(...extractLogoUrls(html, home));
      }
    }
  }

  return [...new Set(sources)];
}

function trySave(url, dest) {
  const tmp = `${dest}.tmp`;
  try {
    if (existsSync(tmp)) unlinkSync(tmp);
    download(url, tmp);
    const size = fileSize(tmp);
    if (size < 150) {
      if (existsSync(tmp)) unlinkSync(tmp);
      return null;
    }
    writeFileSync(dest, readFileSync(tmp));
    if (existsSync(tmp)) unlinkSync(tmp);
    return { source: url, bytes: size };
  } catch {
    if (existsSync(tmp)) unlinkSync(tmp);
    return null;
  }
}

const results = [];

for (const provider of MISSING) {
  const dest = path.join(outDir, `${provider.slug}.png`);
  if (existsSync(dest) && fileSize(dest) >= 150) {
    results.push({ slug: provider.slug, status: 'exists', bytes: fileSize(dest) });
    continue;
  }

  const sources = buildSources(provider);
  let saved = null;

  for (const url of sources) {
    saved = trySave(url, dest);
    if (saved) break;
  }

  if (saved) {
    results.push({ slug: provider.slug, status: 'saved', ...saved });
  } else {
    results.push({ slug: provider.slug, status: 'missing', tried: sources.length });
  }
}

console.log(JSON.stringify(results, null, 2));
console.log(
  `\nFound: ${results.filter((r) => r.status === 'saved' || r.status === 'exists').length}/${MISSING.length}`,
);
