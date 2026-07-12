import { mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const providers = [
  { slug: 'endurance', domain: 'endurancewarranty.com' },
  { slug: 'carchex', domain: 'carchex.com' },
  { slug: 'carshield', domain: 'carshield.com' },
  { slug: 'american-auto-shield', domain: 'americanautoshield.com' },
  { slug: 'royal-administration', domain: 'royaladmin.com' },
  { slug: 'autopom', domain: 'extended-vehicle-warranty.com' },
  { slug: 'olive', domain: 'shopolive.com' },
  { slug: 'omega-auto-care', domain: 'omegaautocare.com' },
  { slug: 'zurich', domain: 'zurichna.com' },
  { slug: 'american-guardian', domain: 'agws.com' },
  { slug: 'concord-auto-protect', domain: 'concordautoprotect.com' },
  { slug: 'carguard', domain: 'carguardadmin.com' },
  { slug: 'toco', domain: 'tocowarranty.com' },
  { slug: 'continental', domain: 'continentalwarranty.org' },
  { slug: 'allstate-car-care', domain: 'allstatecarcare.com' },
  { slug: 'aegis', domain: 'aegisadmin.com' },
  { slug: 'gwc', domain: 'gwcwarranty.com' },
  { slug: 'easycare', domain: 'easycare.com' },
  { slug: 'matrix', domain: 'matrixwarranty.com' },
  { slug: 'united-auto-defense', domain: 'unitedautodefense.com' },
  { slug: 'nvp', domain: 'nvpcservices.com' },
  { slug: 'protect-my-car', domain: 'protectmycar.com' },
  { slug: 'liberty-bell', domain: 'libertybellautoprotect.com' },
  { slug: 'select-auto-protect', domain: 'selectautoprotect.com' },
  { slug: 'aa-auto-protection', domain: 'aaautoprotection.com' },
  { slug: 'smart-auto-care', domain: 'smartautocare.com' },
  { slug: 'alpha', domain: 'alphawarranty.com' },
  { slug: 'penn', domain: 'pennwarranty.com' },
  { slug: 'preferred', domain: 'pwoi.com' },
  { slug: 'assurant', domain: 'assurant.com' },
  { slug: 'fidelity', domain: 'fidelitywarrantyservices.com' },
];

const outDir = path.join(process.cwd(), 'public', 'warranty-logos');
mkdirSync(outDir, { recursive: true });

const results = [];

function download(url, dest) {
  execFileSync(
    'powershell.exe',
    [
      '-NoProfile',
      '-Command',
      `Invoke-WebRequest -Uri '${url}' -OutFile '${dest.replace(/'/g, "''")}' -UseBasicParsing`,
    ],
    { stdio: 'pipe' },
  );
}

for (const { slug, domain } of providers) {
  const pngPath = path.join(outDir, `${slug}.png`);
  if (existsSync(pngPath)) {
    results.push({ slug, domain, status: 'exists' });
    continue;
  }

  const sources = [
    `https://logo.clearbit.com/${domain}`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
  ];

  let saved = false;
  for (const url of sources) {
    try {
      download(url, pngPath);
      const stat = existsSync(pngPath);
      if (!stat) continue;
      const size = execFileSync('powershell.exe', [
        '-NoProfile',
        '-Command',
        `(Get-Item '${pngPath.replace(/'/g, "''")}').Length`,
      ]).toString().trim();
      if (Number(size) < 100) continue;
      results.push({ slug, domain, status: 'saved', source: url, bytes: Number(size) });
      saved = true;
      break;
    } catch {
      // try next source
    }
  }

  if (!saved) {
    results.push({ slug, domain, status: 'missing' });
  }
}

console.log(JSON.stringify(results, null, 2));
console.log(
  `\nSaved: ${results.filter((r) => r.status === 'saved' || r.status === 'exists').length}/${providers.length}`,
);
