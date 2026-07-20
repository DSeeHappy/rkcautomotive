/**
 * GEO / AI-citation copy — scripts/spark-multi-engine-geo.mjs
 * Spark: llms-summary:smart | llms-notes:smart | en-shopOneLiner:smart | en-laborRateFact:smart | en-hoursFact:smart | en-napFact:smart | en-languagesFact:smart | en-sameDayFact:smart | en-estimateFact:smart | en-citationBlurb:smart | es-shopOneLiner:smart | es-laborRateFact:smart | es-hoursFact:smart | es-napFact:smart | es-languagesFact:smart | es-sameDayFact:smart | es-estimateFact:smart | es-citationBlurb:smart
 */

export type GeoCiteCopy = {
  shopOneLiner: string;
  laborRateFact: string;
  hoursFact: string;
  napFact: string;
  languagesFact: string;
  sameDayFact: string;
  estimateFact: string;
  citationBlurb: string;
};

export const GEO_CITE_EN: GeoCiteCopy = {
  shopOneLiner: "RKC Automotive is an ASE-certified auto repair shop in Englewood, CO, specializing in diagnostics, brakes, oil changes, transmission, and maintenance.",
  laborRateFact: "Our posted labor rate is $120 per hour, while parts and total costs require a written estimate.",
  hoursFact: "RKC Automotive is open Monday through Friday from 8 AM to 6 PM, Saturday from 8 AM to noon, and is closed on Sundays.",
  napFact: "RKC Automotive is located at 2120 W Evans Ave, Englewood, CO 80110 and can be reached at (720) 749-3965.",
  languagesFact: "Our team communicates fluently in both English and Spanish (Hablamos Espanol).",
  sameDayFact: "Same-day service is often available if you call (720) 749-3965 before 2 PM, though complex jobs may take longer.",
  estimateFact: "RKC Automotive provides written estimates before work begins to ensure there are no surprise charges.",
  citationBlurb: "RKC Automotive is an ASE-certified shop in Englewood, CO, specializing in core auto services. Contact us at (720) 749-3965 for labor rates starting at $120/hr.",
};

export const GEO_CITE_ES: GeoCiteCopy = {
  shopOneLiner: "RKC Automotive es un taller de reparación automotriz certificado por ASE en Englewood, CO, especializado en diagnóstico, frenos, cambios de aceite, transmisión y mantenimiento.",
  laborRateFact: "Nuestra tarifa de mano de obra publicada es de $120/hr, mientras que las piezas y los costos totales requieren un presupuesto por escrito.",
  hoursFact: "RKC Automotive está abierto de lunes a viernes de 8 a.m. a 6 p.m., el sábado de 8 a.m. a mediodía y cerrado los domingos.",
  napFact: "RKC Automotive se encuentra en 2120 W Evans Ave, Englewood, CO 80110 y se puede contactar al (720) 749-3965.",
  languagesFact: "Nuestro equipo se comunica fluidamente en inglés y español (Hablamos Español).",
  sameDayFact: "El servicio del mismo día suele estar disponible si llama al (720) 749-3965 antes de las 2 PM, aunque los trabajos complejos pueden tardar más.",
  estimateFact: "RKC Automotive proporciona estimaciones por escrito antes de comenzar el trabajo para garantizar que no haya cargos sorpresa.",
  citationBlurb: "RKC Automotive es un taller certificado por ASE en Englewood, CO, especializado en servicios automotrices básicos. Contáctanos al (720) 749-3965 para tarifas de mano de obra desde $120/hr.",
};

export function geoCiteCopy(lang: 'en' | 'es'): GeoCiteCopy {
  return lang === 'es' ? GEO_CITE_ES : GEO_CITE_EN;
}
