import { SERVICE_AREAS_DATA } from '../lib/serviceAreas.ts';
const denver = SERVICE_AREAS_DATA.find((a) => a.slug === 'denver-co');
const denverUnique = new Set(
  denver?.neighborhoods.map((n) => n.flag).filter((f) => f.includes('/neighborhoods/denver/')) ?? []
);

console.log('=== RKC Service Areas Summary ===\n');
for (const area of SERVICE_AREAS_DATA) {
  const uniqueFlags = new Set(area.neighborhoods.map((n) => n.flag));
  const cityFlag = area.flag;
  const uniqueNeighborhoodFlags = [...uniqueFlags].filter((f) => f !== cityFlag);
  const fallbackCount = area.neighborhoods.filter((n) => n.flag === cityFlag).length;
  const uniqueCount = uniqueFlags.size;

  console.log(`${area.name} (${area.neighborhoods.length} neighborhoods)`);
  console.log(`  City flag: ${cityFlag}`);
  console.log(`  Unique flag paths: ${uniqueCount}`);
  console.log(`  Neighborhood-specific flags: ${uniqueNeighborhoodFlags.length}`);
  console.log(`  City/county fallback chips: ${fallbackCount}`);
  console.log('');
}

if (denver) {
  const tbd = denver.neighborhoods.filter((n) => n.flag === '/images/flags/denver.svg');
  console.log('Denver detail:');
  console.log(`  Wikimedia neighborhood flags: ${denverUnique.size} unique files`);
  console.log(`  Denver city fallback (TBD): ${tbd.length}`);
}
