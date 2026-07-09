#!/usr/bin/env node
/**
 * Static SEO verification for RKC Automotive.
 * Checks metadata exports, sitemap route coverage, and JSON-LD on key pages.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const ROUTES = [
  '/',
  '/about',
  '/reviews',
  '/contact',
  '/pricing',
  '/services',
  '/englewood-co-auto-repair',
  '/frequently-asked-questions',
  '/areas-we-serve',
  '/vehicles-we-service',
  '/warranty',
  '/privacy',
  '/terms',
  '/services/brake-repair-englewood-co',
  '/services/engine-diagnostics-englewood-co',
  '/services/transmission-services-englewood-co',
  '/services/suspension-steering-englewood-co',
  '/services/heating-ac-englewood-co',
  '/services/electrical-system-englewood-co',
  '/services/oil-changes-englewood-co',
  '/services/check-engine-light-englewood-co',
  '/services/battery-testing-englewood-co',
  '/services/exhaust-system-englewood-co',
  '/services/preventative-maintenance-englewood-co',
  '/services/engine-rebuilds-englewood-co',
  '/services/camshaft-lifter-repair-englewood-co',
];

const ROUTE_TO_FILE = {
  '/': 'app/page.tsx',
  '/about': 'app/about/page.tsx',
  '/reviews': 'app/reviews/page.tsx',
  '/contact': 'app/contact/page.tsx',
  '/pricing': 'app/pricing/page.tsx',
  '/services': 'app/services/page.tsx',
  '/englewood-co-auto-repair': 'app/englewood-co-auto-repair/page.tsx',
  '/frequently-asked-questions': 'app/frequently-asked-questions/page.tsx',
  '/areas-we-serve': 'app/areas-we-serve/page.tsx',
  '/vehicles-we-service': 'app/vehicles-we-service/page.tsx',
  '/warranty': 'app/warranty/page.tsx',
  '/privacy': 'app/privacy/page.tsx',
  '/terms': 'app/terms/page.tsx',
  '/services/brake-repair-englewood-co': 'app/services/brake-repair-englewood-co/page.tsx',
  '/services/engine-diagnostics-englewood-co': 'app/services/engine-diagnostics-englewood-co/page.tsx',
  '/services/transmission-services-englewood-co': 'app/services/transmission-services-englewood-co/page.tsx',
  '/services/suspension-steering-englewood-co': 'app/services/suspension-steering-englewood-co/page.tsx',
  '/services/heating-ac-englewood-co': 'app/services/heating-ac-englewood-co/page.tsx',
  '/services/electrical-system-englewood-co': 'app/services/electrical-system-englewood-co/page.tsx',
  '/services/oil-changes-englewood-co': 'app/services/oil-changes-englewood-co/page.tsx',
  '/services/check-engine-light-englewood-co': 'app/services/check-engine-light-englewood-co/page.tsx',
  '/services/battery-testing-englewood-co': 'app/services/battery-testing-englewood-co/page.tsx',
  '/services/exhaust-system-englewood-co': 'app/services/exhaust-system-englewood-co/page.tsx',
  '/services/preventative-maintenance-englewood-co': 'app/services/preventative-maintenance-englewood-co/page.tsx',
  '/services/engine-rebuilds-englewood-co': 'app/services/engine-rebuilds-englewood-co/page.tsx',
  '/services/camshaft-lifter-repair-englewood-co': 'app/services/camshaft-lifter-repair-englewood-co/page.tsx',
};

const KEY_JSON_LD_PAGES = [
  'app/page.tsx',
  'app/englewood-co-auto-repair/page.tsx',
  'app/frequently-asked-questions/page.tsx',
  'app/services/brake-repair-englewood-co/page.tsx',
  'app/areas-we-serve/[slug]/page.tsx',
  'app/layout.tsx',
];

const errors = [];
const warnings = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function extractAreaRoutes() {
  const content = read('lib/serviceAreas.ts');
  const slugs = [...content.matchAll(/area\(\s*\n?\s*'[^']+',\s*\n?\s*'([^']+)'/g)].map((m) => `/areas-we-serve/${m[1]}`);
  return [...new Set(slugs)];
}

function extractSitemapRoutes() {
  const content = read('lib/seo.ts');
  const hasGetAll = content.includes('export function getAllSiteRoutes');
  if (!hasGetAll) errors.push('lib/seo.ts missing getAllSiteRoutes()');
  if (!content.includes('getRoutesForSitemapShard')) {
    errors.push('lib/seo.ts missing getRoutesForSitemapShard() for sitemap sharding');
  }
  if (!content.includes('SITEMAP_SHARD_IDS')) {
    errors.push('lib/seo.ts missing SITEMAP_SHARD_IDS');
  }

  const sitemap = read('app/sitemap.ts');
  if (!sitemap.includes('generateSitemaps')) {
    errors.push('app/sitemap.ts must use generateSitemaps() for sharded sitemaps');
  }
  if (!sitemap.includes('getRoutesForSitemapShard')) {
    errors.push('app/sitemap.ts must use getRoutesForSitemapShard()');
  }
}

function checkMetadata() {
  const titles = new Map();
  const descriptions = new Map();

  for (const route of ROUTES) {
    const file = ROUTE_TO_FILE[route];
    if (!file || !fs.existsSync(path.join(root, file))) {
      errors.push(`Missing page file for route ${route}`);
      continue;
    }
    const content = read(file);
    const hasMetadata =
      content.includes('export const metadata') ||
      content.includes('export async function generateMetadata') ||
      content.includes('createPageMetadata') ||
      content.includes('createServicePageMetadata');

    if (!hasMetadata) {
      errors.push(`${file}: missing metadata export`);
    }

    const titleMatch =
      content.match(/createServicePageMetadata\(\s*\n?\s*['"]([^'"]+)['"]/) ||
      content.match(/createPageMetadata\(\{[\s\S]*?title:\s*['"]([^'"]+)['"]/) ||
      content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const descMatch = extractPageDescription(content);

    if (titleMatch) {
      const title = titleMatch[1];
      if (titles.has(title)) warnings.push(`Duplicate title "${title}" on ${route} and ${titles.get(title)}`);
      titles.set(title, route);
      if (title.length < 30 || title.length > 70) {
        warnings.push(`${route}: title length ${title.length} (ideal 50-60): "${title}"`);
      }
    } else {
      errors.push(`${file}: could not extract title`);
    }

    if (descMatch) {
      const desc = descMatch;
      if (descriptions.has(desc)) warnings.push(`Duplicate description on ${route} and ${descriptions.get(desc)}`);
      descriptions.set(desc, route);
      if (desc.length < 120 || desc.length > 170) {
        warnings.push(`${route}: description length ${desc.length} (ideal 150-160)`);
      }
    } else {
      errors.push(`${file}: could not extract description`);
    }

    if (!content.includes('canonical') && !content.includes('createPageMetadata') && !content.includes('createServicePageMetadata')) {
      errors.push(`${file}: no canonical URL via createPageMetadata`);
    }
  }
}

function checkJsonLd() {
  for (const file of KEY_JSON_LD_PAGES) {
    const content = read(file);
    const hasLd =
      content.includes('application/ld+json') ||
      content.includes('JsonLd') ||
      content.includes('createLocalBusinessSchema') ||
      content.includes('createOrganizationSchema') ||
      content.includes('createServiceSchema') ||
      content.includes('createFAQPageSchema');
    if (!hasLd) errors.push(`${file}: missing JSON-LD`);
  }
}

function checkRobotsAndSitemap() {
  if (!fs.existsSync(path.join(root, 'app/robots.ts'))) {
    errors.push('Missing app/robots.ts');
  } else {
    const robots = read('app/robots.ts');
    if (!robots.includes('sitemap')) errors.push('app/robots.ts missing sitemap reference');
    if (!robots.includes('SITE_URL')) errors.push('app/robots.ts must reference SITE_URL');
  }

  if (fs.existsSync(path.join(root, 'public/sitemap.xml'))) {
    warnings.push('public/sitemap.xml exists — may conflict with app/sitemap.ts');
  }
  if (!fs.existsSync(path.join(root, 'app/sitemap-index/route.ts'))) {
    errors.push('Missing app/sitemap-index/route.ts sitemap index handler');
  }
  if (fs.existsSync(path.join(root, 'public/robots.txt'))) {
    warnings.push('public/robots.txt exists — may conflict with app/robots.ts');
  }

  if (!fs.existsSync(path.join(root, 'app/not-found.tsx'))) {
    errors.push('Missing app/not-found.tsx');
  }
}

function extractPageDescription(content) {
  const constDesc = content.match(
    /const \w+_PAGE_DESCRIPTION\s*=\s*\n?\s*'((?:[^'\\]|\\.)*)'/,
  );
  if (constDesc) return constDesc[1].replace(/\\'/g, "'");

  const constDescDouble = content.match(
    /const \w+_PAGE_DESCRIPTION\s*=\s*\n?\s*"((?:[^"\\]|\\.)*)"/,
  );
  if (constDescDouble) return constDescDouble[1];

  const serviceDouble = content.match(
    /createServicePageMetadata\(\s*\n?\s*['"][^'"]+['"],\s*\n?\s*"([^"]+)"/,
  );
  if (serviceDouble) return serviceDouble[1];

  const serviceSingle = content.match(
    /createServicePageMetadata\(\s*\n?\s*['"][^'"]+['"],\s*\n?\s*'([^']+)'/,
  );
  if (serviceSingle) return serviceSingle[1];

  const pageMeta = content.match(/createPageMetadata\(\{[\s\S]*?description:\s*\n?\s*['"]([^'"]+)['"]/);
  if (pageMeta) return pageMeta[1];

  const generic = content.match(/description:\s*\n?\s*['"]([^'"]+)['"]/);
  return generic ? generic[1] : null;
}

function getAreaMetaDescription(slug, serviceAreasContent) {
  const slugIdx = serviceAreasContent.indexOf(`'${slug}'`);
  if (slugIdx === -1) return null;
  const blockStart = serviceAreasContent.lastIndexOf('area(', slugIdx);
  const blockEnd = serviceAreasContent.indexOf('\n  ),', slugIdx);
  if (blockStart === -1 || blockEnd === -1) return null;
  const block = serviceAreasContent.slice(blockStart, blockEnd);
  const whyClose = block.lastIndexOf('],');
  if (whyClose === -1) return null;
  const tail = block.slice(whyClose + 2);
  const metaMatch = tail.match(/\n\s*'((?:[^'\\]|\\.)*)'\s*$/);
  return metaMatch ? metaMatch[1].replace(/\\'/g, "'") : null;
}

function checkAreaPages() {
  const areaRoutes = extractAreaRoutes();
  const serviceAreasContent = read('lib/serviceAreas.ts');
  for (const href of areaRoutes) {
    const slug = href.replace('/areas-we-serve/', '');
    const metaDescription = getAreaMetaDescription(slug, serviceAreasContent);
    if (!metaDescription) {
      warnings.push(`Area ${slug}: no metaDescription found`);
    } else if (metaDescription.length < 120 || metaDescription.length > 170) {
      warnings.push(`Area ${slug}: metaDescription length ${metaDescription.length} (ideal 150-160)`);
    }
  }
  console.log(`Area routes found: ${areaRoutes.length}`);
  return areaRoutes;
}

console.log('RKC Automotive SEO Verification\n');

extractSitemapRoutes();
checkMetadata();
checkJsonLd();
checkRobotsAndSitemap();
const areaRoutes = checkAreaPages();

const coreCount = 14;
const serviceCount = 13;
const areaCount = areaRoutes.length;
const totalRoutes = coreCount + serviceCount + areaCount;

console.log(`\nRoute inventory: ${totalRoutes} total (${coreCount} core + ${serviceCount} services + ${areaCount} cities)`);

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  warnings.forEach((w) => console.log(`  ⚠ ${w}`));
}

if (errors.length) {
  console.log(`\nErrors (${errors.length}):`);
  errors.forEach((e) => console.log(`  ✗ ${e}`));
  process.exit(1);
}

console.log('\n✓ All SEO checks passed');
process.exit(0);
