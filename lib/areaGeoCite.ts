/**
 * Per-city GEO one-liners for areas-we-serve pages — scripts/spark-area-geo.mjs
 * Spark: en-englewood-co:smart | es-englewood-co:smart | en-denver-co:smart | es-denver-co:smart | en-littleton-co:smart | es-littleton-co:smart | en-sheridan-co:smart | es-sheridan-co:smart | en-greenwood-village-co:smart | es-greenwood-village-co:smart | en-centennial-co:smart | es-centennial-co:smart | en-lakewood-co:smart | es-lakewood-co:smart | en-aurora-co:smart | es-aurora-co:smart | en-cherry-hills-village-co:smart | es-cherry-hills-village-co:smart | en-highlands-ranch-co:smart | es-highlands-ranch-co:smart | en-lone-tree-co:smart | es-lone-tree-co:smart | en-glendale-co:smart | es-glendale-co:smart | en-wheat-ridge-co:smart | es-wheat-ridge-co:smart | en-morrison-co:smart | es-morrison-co:smart | en-bow-mar-co:smart | es-bow-mar-co:smart | en-columbine-co:smart | es-columbine-co:smart | en-arvada-co:smart | es-arvada-co:smart | en-parker-co:smart | es-parker-co:smart | en-golden-co:smart | es-golden-co:smart | en-edgewater-co:smart | es-edgewater-co:smart
 */
import { getServiceAreaBySlug } from '@/lib/serviceAreas';

/** Spark-generated EN lines keyed by area slug. */
export const AREA_GEO_EN: Record<string, string> = {
  "englewood-co": "RKC Automotive is located in Englewood, CO at 2120 W Evans Ave near S Broadway and Hampden, offering ASE-certified brakes, diagnostics, and maintenance; call (720) 749-3965.",
  "denver-co": "South Denver drivers reach RKC Automotive in under 15 minutes via S Broadway to 2120 W Evans Ave, Englewood, CO 80110; ASE-certified brakes, diagnostics, and maintenance at (720) 749-3965.",
  "littleton-co": "RKC Automotive serves Littleton, CO from 2120 W Evans Ave, Englewood, about 12–18 minutes north via S Santa Fe Dr (US-85) or S Broadway; call (720) 749-3965 for brakes, diagnostics, and maintenance.",
  "sheridan-co": "RKC Automotive borders Sheridan, CO — Fort Logan and Hampden Heights are under 10 minutes from its ASE-certified shop at 2120 W Evans Ave, Englewood CO 80110; call (720) 749-3965.",
  "greenwood-village-co": "RKC Automotive serves Greenwood Village and the Denver Tech Center from 2120 W Evans Ave, Englewood, CO 80110, about 10–15 minutes via I-25 and Hampden Ave; call (720) 749-3965.",
  "centennial-co": "Centennial, CO drivers take S Broadway or I-25 north to RKC Automotive at 2120 W Evans Ave, Englewood, CO 80110 for brakes, diagnostics, and maintenance; call (720) 749-3965.",
  "lakewood-co": "RKC Automotive serves Lakewood, CO from 2120 W Evans Ave, Englewood CO 80110 — about 20 minutes east via Hampden Ave (US-285); ASE-certified brakes, diagnostics, and maintenance at (720) 749-3965.",
  "aurora-co": "RKC Automotive serves Aurora, CO with brakes, diagnostics, and emissions repair from 2120 W Evans Ave, Englewood, CO 80110; call (720) 749-3965.",
  "cherry-hills-village-co": "Cherry Hills Village, CO is about 10–12 minutes from RKC Automotive's ASE-certified shop at 2120 W Evans Ave, Englewood via University Blvd and Hampden Ave; call (720) 749-3965.",
  "highlands-ranch-co": "Highlands Ranch, CO drivers reach RKC Automotive in 15–20 minutes via S Broadway north to 2120 W Evans Ave, Englewood CO 80110; brakes, diagnostics, and maintenance at (720) 749-3965.",
  "lone-tree-co": "RKC Automotive serves Lone Tree and RidgeGate, CO from its ASE-certified shop at 2120 W Evans Ave, Englewood, CO 80110 — I-25 north to Hampden Ave west; call (720) 749-3965.",
  "glendale-co": "Glendale, CO and the Cherry Creek corridor are about 10 minutes from RKC Automotive at 2120 W Evans Ave, Englewood, CO 80110 via Colorado Blvd and Hampden Ave; call (720) 749-3965.",
  "wheat-ridge-co": "RKC Automotive serves Wheat Ridge, CO from 2120 W Evans Ave, Englewood, CO 80110 — Wadsworth Blvd south to Hampden Ave east; ASE-certified brakes, diagnostics, and maintenance at (720) 749-3965.",
  "morrison-co": "Morrison, CO drivers take US-285 (Hampden) east about 25 minutes to RKC Automotive's ASE-certified shop at 2120 W Evans Ave, Englewood CO 80110 for brakes, suspension, and pre-trip inspections; call (720) 749-3965.",
  "bow-mar-co": "Bow Mar, CO is under 10 minutes from RKC Automotive at 2120 W Evans Ave, Englewood CO 80110 via S Wadsworth Blvd north; brakes, diagnostics, and maintenance at (720) 749-3965.",
  "columbine-co": "RKC Automotive serves Columbine and Columbine Valley, CO from 2120 W Evans Ave, Englewood, CO 80110, about 10 minutes north via Wadsworth Blvd or Pierce St; call (720) 749-3965.",
  "arvada-co": "Arvada, CO drivers reach RKC Automotive at 2120 W Evans Ave, Englewood CO 80110 in about 30 minutes via Wadsworth Blvd south and Hampden Ave east; ASE-certified service at (720) 749-3965.",
  "parker-co": "RKC Automotive serves Parker, CO from its ASE-certified shop at 2120 W Evans Ave, Englewood CO 80110 — Parker Rd (CO-83) to I-25 north and Hampden west; call (720) 749-3965.",
  "golden-co": "Golden, CO drivers take 6th Ave and Wadsworth Blvd about 30 minutes to RKC Automotive's ASE-certified shop at 2120 W Evans Ave, Englewood CO 80110 for brakes, diagnostics, and maintenance; call (720) 749-3965.",
  "edgewater-co": "Edgewater, CO is 15–20 minutes from RKC Automotive at 2120 W Evans Ave, Englewood, CO 80110 via Sheridan Blvd south; brakes, diagnostics, and oil changes at (720) 749-3965.",
};

/** Spark-generated ES lines keyed by area slug. */
export const AREA_GEO_ES: Record<string, string> = {
  "englewood-co": "RKC Automotive está en Englewood, CO, en 2120 W Evans Ave cerca de S Broadway y Hampden, con frenos, diagnóstico y mantenimiento certificados ASE; llame al (720) 749-3965.",
  "denver-co": "Los conductores del sur de Denver llegan a RKC Automotive en menos de 15 minutos por S Broadway hasta 2120 W Evans Ave, Englewood, CO 80110; frenos, diagnóstico y mantenimiento certificados ASE al (720) 749-3965.",
  "littleton-co": "RKC Automotive atiende Littleton, CO desde 2120 W Evans Ave, Englewood, a unos 12-18 minutos al norte por S Santa Fe Dr (US-85) o S Broadway; llame al (720) 749-3965 para frenos, diagnóstico y mantenimiento.",
  "sheridan-co": "RKC Automotive colinda con Sheridan, CO: Fort Logan y Hampden Heights están a menos de 10 minutos de su taller certificado ASE en 2120 W Evans Ave, Englewood CO 80110; llame al (720) 749-3965.",
  "greenwood-village-co": "RKC Automotive atiende Greenwood Village y el Denver Tech Center desde 2120 W Evans Ave, Englewood, CO 80110, a unos 10-15 minutos por la I-25 y Hampden Ave; llame al (720) 749-3965.",
  "centennial-co": "Los conductores de Centennial, CO toman S Broadway o la I-25 hacia el norte hasta RKC Automotive en 2120 W Evans Ave, Englewood, CO 80110 para frenos, diagnóstico y mantenimiento; llame al (720) 749-3965.",
  "lakewood-co": "RKC Automotive atiende Lakewood, CO desde 2120 W Evans Ave, Englewood CO 80110, a unos 20 minutos al este por Hampden Ave (US-285); frenos, diagnóstico y mantenimiento certificados ASE al (720) 749-3965.",
  "aurora-co": "RKC Automotive atiende Aurora, CO con frenos, diagnóstico y reparación de emisiones desde 2120 W Evans Ave, Englewood, CO 80110; llame al (720) 749-3965.",
  "cherry-hills-village-co": "Cherry Hills Village, CO está a unos 10-12 minutos del taller certificado ASE de RKC Automotive en 2120 W Evans Ave, Englewood por University Blvd y Hampden Ave; llame al (720) 749-3965.",
  "highlands-ranch-co": "Los conductores de Highlands Ranch, CO llegan a RKC Automotive en 15-20 minutos por S Broadway hacia el norte hasta 2120 W Evans Ave, Englewood CO 80110; frenos, diagnóstico y mantenimiento al (720) 749-3965.",
  "lone-tree-co": "RKC Automotive atiende Lone Tree y RidgeGate, CO desde su taller certificado ASE en 2120 W Evans Ave, Englewood, CO 80110: I-25 norte hasta Hampden Ave al oeste; llame al (720) 749-3965.",
  "glendale-co": "Glendale, CO y el corredor de Cherry Creek están a unos 10 minutos de RKC Automotive en 2120 W Evans Ave, Englewood, CO 80110 por Colorado Blvd y Hampden Ave; llame al (720) 749-3965.",
  "wheat-ridge-co": "RKC Automotive atiende Wheat Ridge, CO desde 2120 W Evans Ave, Englewood, CO 80110: Wadsworth Blvd al sur hasta Hampden Ave al este; frenos, diagnóstico y mantenimiento certificados ASE al (720) 749-3965.",
  "morrison-co": "Los conductores de Morrison, CO toman la US-285 (Hampden) al este unos 25 minutos hasta el taller certificado ASE de RKC Automotive en 2120 W Evans Ave, Englewood CO 80110 para frenos, suspensión e inspecciones de pre-viaje; llame al (720) 749-3965.",
  "bow-mar-co": "Bow Mar, CO está a menos de 10 minutos de RKC Automotive en 2120 W Evans Ave, Englewood CO 80110 por S Wadsworth Blvd al norte; frenos, diagnóstico y mantenimiento al (720) 749-3965.",
  "columbine-co": "RKC Automotive atiende Columbine y Columbine Valley, CO desde 2120 W Evans Ave, Englewood, CO 80110, a unos 10 minutos al norte por Wadsworth Blvd o Pierce St; llame al (720) 749-3965.",
  "arvada-co": "Los conductores de Arvada, CO llegan a RKC Automotive en 2120 W Evans Ave, Englewood CO 80110 en unos 30 minutos por Wadsworth Blvd al sur y Hampden Ave al este; servicio certificado ASE al (720) 749-3965.",
  "parker-co": "RKC Automotive atiende Parker, CO desde su taller certificado ASE en 2120 W Evans Ave, Englewood CO 80110: Parker Rd (CO-83) hasta la I-25 norte y Hampden al oeste; llame al (720) 749-3965.",
  "golden-co": "Los conductores de Golden, CO toman 6th Ave y Wadsworth Blvd unos 30 minutos hasta el taller certificado ASE de RKC Automotive en 2120 W Evans Ave, Englewood CO 80110 para frenos, diagnóstico y mantenimiento; llame al (720) 749-3965.",
  "edgewater-co": "Edgewater, CO está a 15-20 minutos de RKC Automotive en 2120 W Evans Ave, Englewood, CO 80110 por Sheridan Blvd al sur; frenos, diagnóstico y cambios de aceite al (720) 749-3965.",
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
