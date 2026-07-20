/**
 * Per-city GEO one-liners for areas-we-serve pages — scripts/spark-area-geo.mjs
 * Spark: en-englewood-co:smart | es-englewood-co:smart | en-denver-co:smart | es-denver-co:smart | en-littleton-co:smart | es-littleton-co:smart | en-sheridan-co:smart | es-sheridan-co:smart | en-greenwood-village-co:smart | es-greenwood-village-co:smart | en-centennial-co:smart | es-centennial-co:smart | en-lakewood-co:smart | es-lakewood-co:smart | en-aurora-co:smart | es-aurora-co:smart | en-cherry-hills-village-co:smart | es-cherry-hills-village-co:smart | en-highlands-ranch-co:smart | es-highlands-ranch-co:smart | en-lone-tree-co:smart | es-lone-tree-co:smart | en-glendale-co:smart | es-glendale-co:smart | en-wheat-ridge-co:smart | es-wheat-ridge-co:smart | en-morrison-co:smart | es-morrison-co:smart | en-bow-mar-co:smart | es-bow-mar-co:smart | en-columbine-co:smart | es-columbine-co:smart | en-arvada-co:smart | es-arvada-co:smart | en-parker-co:smart | es-parker-co:smart | en-golden-co:smart | es-golden-co:smart | en-edgewater-co:smart | es-edgewater-co:smart
 */
import { getServiceAreaBySlug } from '@/lib/serviceAreas';

/** Spark-generated EN lines keyed by area slug. */
export const AREA_GEO_EN: Record<string, string> = {
  "englewood-co": "RKC Automotive in Englewood, CO, offers brakes, diagnostics, and maintenance at 2120 W Evans Ave; call (720) 749-3965.",
  "denver-co": "RKC Automotive in Denver, CO, offers brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
  "littleton-co": "RKC Automotive serves Littleton, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
  "sheridan-co": "RKC Automotive serves Sheridan, CO from its ASE shop at 2120 W Evans Ave, Englewood CO 80110, offering brakes, diagnostics, and maintenance at (720) 749-3965.",
  "greenwood-village-co": "RKC Automotive serves Greenwood Village, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
  "centennial-co": "RKC Automotive serves Centennial, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
  "lakewood-co": "RKC Automotive in Lakewood, CO offers brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood CO 80110; call (720) 749-3965.",
  "aurora-co": "RKC Automotive serves Aurora, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
  "cherry-hills-village-co": "RKC Automotive serves Cherry Hills Village, CO from its ASE shop at 2120 W Evans Ave, Englewood (720) 749-3965, offering brakes, diagnostics, and maintenance.",
  "highlands-ranch-co": "RKC Automotive serves Highlands Ranch, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood CO 80110; call (720) 749-3965.",
  "lone-tree-co": "RKC Automotive serves Lone Tree, CO with brakes, diagnostics, and maintenance from its ASE shop at 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
  "glendale-co": "RKC Automotive serves Glendale, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
  "wheat-ridge-co": "RKC Automotive serves Wheat Ridge, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
  "morrison-co": "RKC Automotive serves Morrison, CO from its ASE-certified shop at 2120 W Evans Ave, Englewood CO 80110, offering brakes, diagnostics, and maintenance at (720) 749-3965.",
  "bow-mar-co": "RKC Automotive serves Bow Mar, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood CO 80110; call (720) 749-3965.",
  "columbine-co": "RKC Automotive serves Columbine, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
  "arvada-co": "RKC Automotive serves Arvada, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood CO 80110; call (720) 749-3965.",
  "parker-co": "RKC Automotive serves Parker, CO from its ASE shop at 2120 W Evans Ave, Englewood CO 80110, offering brakes, diagnostics, and maintenance at (720) 749-3965.",
  "golden-co": "RKC Automotive serves Golden, CO from its ASE-certified shop at 2120 W Evans Ave, Englewood CO 80110; call (720) 749-3965 for brakes, diagnostics, and maintenance.",
  "edgewater-co": "RKC Automotive serves Edgewater, CO with brakes, diagnostics, and maintenance at 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
};

/** Spark-generated ES lines keyed by area slug. */
export const AREA_GEO_ES: Record<string, string> = {
  "englewood-co": "RKC Automotive en Englewood, CO, ofrece frenos, diagnóstico y mantenimiento en 2120 W Evans Ave; llama al (720) 749-3965.",
  "denver-co": "RKC Automotive en Englewood, CO, ofrece frenos, diagnóstico y mantenimiento en 2120 W Evans Ave; ASE; $120/hr; (720) 749-3965.",
  "littleton-co": "RKC Automotive atiende Littleton, CO con frenos, diagnóstico y mantenimiento en 2120 W Evans Ave, Englewood, CO 80110; llama al (720) 749-3965.",
  "sheridan-co": "RKC Automotive atiende Sheridan, CO desde su taller ASE en 2120 W Evans Ave, Englewood CO 80110, ofreciendo frenos, diagnóstico y mantenimiento al (720) 749-3965.",
  "greenwood-village-co": "RKC Automotive ofrece frenos, diagnóstico y mantenimiento en Greenwood Village, CO, en 2120 W Evans Ave, Englewood, CO 80110; llama al (720) 749-3965.",
  "centennial-co": "RKC Automotive ofrece frenos, diagnóstico y mantenimiento en Englewood, CO, con técnicos ASE en 2120 W Evans Ave, Centennial, CO; llama al (720) 749-3965.",
  "lakewood-co": "RKC Automotive en Englewood, CO, ofrece frenos, diagnóstico y mantenimiento en 2120 W Evans Ave, Englewood CO 80110; llama al (720) 749-3965.",
  "aurora-co": "RKC Automotive ofrece frenos, diagnóstico y mantenimiento en 2120 W Evans Ave, Englewood, CO 80110; llama al (720) 749-3965.",
  "cherry-hills-village-co": "RKC Automotive atiende Cherry Hills Village, CO desde su taller ASE en 2120 W Evans Ave, Englewood, CO (720) 749-3965, ofreciendo frenos, diagnóstico y mantenimiento.",
  "highlands-ranch-co": "RKC Automotive ofrece frenos, diagnóstico y mantenimiento en Highlands Ranch, CO, en 2120 W Evans Ave, Englewood CO 80110; llama al (720) 749-3965.",
  "lone-tree-co": "RKC Automotive atiende a Lone Tree, CO con frenos, diagnóstico y mantenimiento desde su taller ASE en 2120 W Evans Ave, Englewood, CO 80110; llama al (720) 749-3965.",
  "glendale-co": "RKC Automotive atiende a Glendale, CO con frenos, diagnóstico y mantenimiento en 2120 W Evans Ave, Englewood, CO 80110; llama al (720) 749-3965.",
  "wheat-ridge-co": "RKC Automotive ofrece frenos, diagnóstico y mantenimiento en Wheat Ridge, CO, en 2120 W Evans Ave, Englewood, CO 80110; ASE; llama al (720) 749-3965.",
  "morrison-co": "RKC Automotive atiende Morrison, CO desde su taller ASE en 2120 W Evans Ave, Englewood, CO 80110, ofreciendo frenos, diagnóstico y mantenimiento al (720) 749-3965.",
  "bow-mar-co": "RKC Automotive atiende Bow Mar, CO con frenos, diagnóstico y mantenimiento en 2120 W Evans Ave, Englewood CO 80110; llama al (720) 749-3965.",
  "columbine-co": "RKC Automotive ofrece frenos, diagnóstico y mantenimiento en Englewood, CO, ASE, 2120 W Evans Ave, Columbine, CO 80110; llama al (720) 749-3965.",
  "arvada-co": "RKC Automotive ofrece frenos, diagnóstico y mantenimiento en Arvada, CO, en 2120 W Evans Ave, Englewood, CO 80110; llama al (720) 749-3965.",
  "parker-co": "RKC Automotive atiende a Parker, CO desde su taller ASE en 2120 W Evans Ave, Englewood CO 80110, ofreciendo frenos, diagnóstico y mantenimiento al (720) 749-3965.",
  "golden-co": "RKC Automotive atiende a Golden, CO desde su taller certificado ASE en 2120 W Evans Ave, Englewood CO 80110; llama al (720) 749-3965 para frenos, diagnóstico y mantenimiento.",
  "edgewater-co": "RKC Automotive ofrece frenos, diagnóstico y mantenimiento en Edgewater, CO, en 2120 W Evans Ave, Englewood, CO 80110; llama al (720) 749-3965.",
};

/** English cite line for Bing GEO / AI grounding on city landing pages. */
export function areaGeoOneLiner(slug: string, lang: 'en' | 'es' = 'en'): string | undefined {
  const area = getServiceAreaBySlug(slug);
  if (!area) return undefined;

  if (lang === 'es') {
    const es = AREA_GEO_ES[slug];
    if (es) return es;
    return `RKC Automotive atiende conductores de ${area.name}, CO desde su taller ASE en 2120 W Evans Ave, Englewood — llame al (720) 749-3965.`;
  }

  const en = AREA_GEO_EN[slug];
  if (en) return en;

  return `RKC Automotive serves ${area.name}, CO drivers from its ASE-certified shop at 2120 W Evans Ave, Englewood — call (720) 749-3965 for brakes, diagnostics, and maintenance.`;
}
