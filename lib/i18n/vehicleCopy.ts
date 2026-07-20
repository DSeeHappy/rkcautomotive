import type { Lang } from '@/lib/language';
import { getDeepDiveServiceEs } from '@/lib/i18n/deepDiveServiceEs';
import { getServiceCatalogEntry } from '@/lib/modelCommonServices';

/** Model hub, vehicles crawl index, sibling services, deep-dive chrome templates. */
export const VEHICLE_COPY = {
  en: {
    crawl: {
      eyebrow: 'Model repair guides',
      title: 'Browse by make & model',
      intro:
        'Model-specific service guides for Colorado driving — every link below is a full repair deep-dive at RKC Automotive in Englewood.',
      brandDiagnostics: 'Brand diagnostics →',
      allServices: (n: number, model: string) => `All ${n} ${model} services →`,
    },
    hub: {
      repairTitle: (brand: string, model: string) => `${brand} ${model} repair in Englewood`,
      home: 'Home',
      vehiclesCrumb: 'Vehicles We Service',
      modelServices: 'Model services',
      servicesHeading: (brand: string, model: string) => `${brand} ${model} services we perform`,
      servicesIntro: (yearRange: string, brand: string, model: string) =>
        `Every guide below is written for the ${yearRange} ${brand} ${model} — Colorado altitude, severe-service wear, and the failure patterns we see at our Englewood shop.`,
      call: (phone: string) => `Call ${phone}`,
      schedule: (model: string) => `Schedule ${model} service`,
      atRkc: (brand: string, model: string) => `${brand} ${model} at RKC`,
      issuesHeading: 'Model-specific issues we see in Colorado',
      faqsHeading: (model: string) => `${model} FAQs`,
      moreModels: (brand: string) => `More ${brand} models we service`,
      moreModelsIntro: (brand: string) =>
        `Browse other ${brand} model hubs or return to the full makes list.`,
      allMakes: '← All makes & models',
      serviceTitle: (model: string, serviceName: string) => `${model} ${serviceName} in Englewood, CO`,
    },
    sibling: {
      title: (model: string) => `Other services for this ${model}`,
      intro: (brand: string, model: string) =>
        `More ${brand} ${model} repair guides from RKC Automotive — same ASE-certified crew and posted labor rate.`,
    },
    deepDive: {
      local:
        'RKC Automotive on Evans Ave in Englewood serves south Denver, Littleton, Aurora, and Highlands Ranch.',
      vehicleLabel: {
        truck: 'truck',
        suv: 'SUV',
        sedan: 'sedan',
        hybrid: 'hybrid',
        ev: 'electric vehicle',
        performance: 'performance vehicle',
        van: 'van',
        luxury: 'luxury vehicle',
      } as Record<string, string>,
      typeNoteFallback: (brand: string, model: string, vLabel: string) =>
        `${brand} ${model} ${vLabel} service tailored to Colorado driving.`,
      heroEyebrow: (brand: string, model: string) => `${brand} ${model} · Englewood, CO`,
      heroTitle: (model: string, serviceName: string) => `${model} ${serviceName} in Englewood, CO`,
      heroDescription: (
        brand: string,
        model: string,
        yearRange: string,
        focus: string,
        laborRate: string,
        typeNote: string,
      ) =>
        `${brand} ${model} (${yearRange}) ${focus} — expert service at RKC Automotive with written estimates at ${laborRate} labor before any work begins. ${typeNote}`,
      primaryCta: (model: string) => `Schedule ${model} Service`,
      call: (phone: string) => `Call ${phone}`,
      scheduleService: 'Schedule service',
      processBgAlt: (eyebrow: string) => `${eyebrow} service at RKC Automotive Englewood CO`,
      symptomsEyebrow: (model: string) => `${model} warning signs`,
      symptomsTitle: (model: string, serviceNameLower: string) =>
        `Symptoms that mean your ${model} needs ${serviceNameLower}`,
      symptomsIntro: (brand: string, model: string, focus: string) =>
        `${brand} ${model} drivers across Englewood and the south Denver metro notice these patterns when ${focus} is overdue or failing — correlate them early, not after a tow.`,
      technicalEyebrow: 'Technical depth',
      technicalTitle: (brand: string, model: string, serviceNameLower: string) =>
        `${brand} ${model} ${serviceNameLower} — what matters in Colorado`,
      technicalIntro: (yearRange: string, model: string) =>
        `Model-specific context, severe-service wear, and what RKC measures before recommending parts on your ${yearRange} ${model}.`,
      tableTitle: (model: string) => `${model} service quick reference`,
      tableIntro: (serviceNameLower: string, brand: string, model: string) =>
        `Use this table when scheduling ${serviceNameLower} for your ${brand} ${model} at RKC Automotive.`,
      tableCaption: (brand: string, model: string, serviceName: string) =>
        `${brand} ${model} ${serviceName} reference`,
      tableColumns: ['Area', 'What we inspect', 'Colorado note'],
      processEyebrow: 'RKC workflow',
      processTitle: (model: string, serviceNameLower: string) =>
        `How we perform ${model} ${serviceNameLower}`,
      processIntro: (brand: string, model: string) =>
        `Structured diagnosis, approval, and verification for ${brand} ${model} — no parts cannon, no surprise labor.`,
      checklistEyebrow: 'Complete scope',
      checklistTitle: (model: string, serviceNameLower: string) =>
        `What we cover on ${model} ${serviceNameLower}`,
      checklistIntro: (brand: string) =>
        `Inspection depth matches ${brand} specifications and Colorado driving realities — not a express-lane fluid top-off.`,
      laborTitle: (model: string, serviceName: string) =>
        `${model} ${serviceName} pricing transparency`,
      laborDescription: (
        brand: string,
        model: string,
        serviceNameLower: string,
        laborRate: string,
        phone: string,
      ) =>
        `${brand} ${model} ${serviceNameLower} is quoted at our posted ${laborRate} labor rate plus parts. Written estimate before major disassembly — always. Call ${phone} or schedule online.`,
      faqTitle: (model: string, serviceName: string) => `${model} ${serviceName} questions`,
      faqIntro: (brand: string, model: string) =>
        `Common questions from ${brand} ${model} owners in Englewood, Littleton, and the Denver metro.`,
      relatedTitle: (model: string) => `Related ${model} services`,
      serviceAreaLabel: (model: string, serviceNameLower: string) =>
        `${model} ${serviceNameLower}`,
      finalCtaTitle: (model: string, serviceNameLower: string) =>
        `${model} ${serviceNameLower} in Englewood`,
      finalCtaDescription: (brand: string, model: string) =>
        `Call or schedule at RKC Automotive on Evans Ave. We service ${brand} ${model} vehicles with honest estimates and ${brand}-level expertise — without dealership wait times.`,
    },
  },
  es: {
    crawl: {
      eyebrow: 'Guías de reparación por modelo',
      title: 'Explore por marca y modelo',
      intro:
        'Guías de servicio específicas por modelo para manejar en Colorado — cada enlace es una guía completa de reparación en RKC Automotive en Englewood.',
      brandDiagnostics: 'Diagnóstico por marca →',
      allServices: (n: number, model: string) => `Los ${n} servicios de ${model} →`,
    },
    hub: {
      repairTitle: (brand: string, model: string) => `Reparación de ${brand} ${model} en Englewood`,
      home: 'Inicio',
      vehiclesCrumb: 'Vehículos que atendemos',
      modelServices: 'Servicios del modelo',
      servicesHeading: (brand: string, model: string) => `Servicios que realizamos en ${brand} ${model}`,
      servicesIntro: (yearRange: string, brand: string, model: string) =>
        `Cada guía está escrita para el ${brand} ${model} ${yearRange} — altitud de Colorado, desgaste de servicio severo y los patrones de falla que vemos en nuestro taller de Englewood.`,
      call: (phone: string) => `Llamar ${phone}`,
      schedule: (model: string) => `Agendar servicio de ${model}`,
      atRkc: (brand: string, model: string) => `${brand} ${model} en RKC`,
      issuesHeading: 'Problemas específicos del modelo que vemos en Colorado',
      faqsHeading: (model: string) => `Preguntas frecuentes de ${model}`,
      moreModels: (brand: string) => `Más modelos ${brand} que atendemos`,
      moreModelsIntro: (brand: string) =>
        `Explore otros centros de modelo ${brand} o vuelva a la lista completa de marcas.`,
      allMakes: '← Todas las marcas y modelos',
      serviceTitle: (model: string, serviceName: string) => `${serviceName} de ${model} en Englewood, CO`,
    },
    sibling: {
      title: (model: string) => `Otros servicios para este ${model}`,
      intro: (brand: string, model: string) =>
        `Más guías de reparación de ${brand} ${model} de RKC Automotive — el mismo equipo certificado ASE y tarifa de mano de obra publicada.`,
    },
    deepDive: {
      local:
        'RKC Automotive en Evans Ave en Englewood atiende el sur de Denver, Littleton, Aurora y Highlands Ranch.',
      vehicleLabel: {
        truck: 'camión',
        suv: 'SUV',
        sedan: 'sedán',
        hybrid: 'híbrido',
        ev: 'vehículo eléctrico',
        performance: 'vehículo de alto rendimiento',
        van: 'van',
        luxury: 'vehículo de lujo',
      } as Record<string, string>,
      typeNoteFallback: (brand: string, model: string, vLabel: string) =>
        `Servicio de ${brand} ${model} (${vLabel}) adaptado a manejar en Colorado.`,
      heroEyebrow: (brand: string, model: string) => `${brand} ${model} · Englewood, CO`,
      heroTitle: (model: string, serviceName: string) => `${serviceName} de ${model} en Englewood, CO`,
      heroDescription: (
        brand: string,
        model: string,
        yearRange: string,
        focus: string,
        laborRate: string,
        typeNote: string,
      ) =>
        `${brand} ${model} (${yearRange}): ${focus} — servicio experto en RKC Automotive con presupuestos por escrito a ${laborRate} de mano de obra antes de empezar. ${typeNote}`,
      primaryCta: (model: string) => `Agendar servicio de ${model}`,
      call: (phone: string) => `Llamar ${phone}`,
      scheduleService: 'Programar servicio',
      processBgAlt: (eyebrow: string) => `Servicio ${eyebrow} en RKC Automotive Englewood CO`,
      symptomsEyebrow: (model: string) => `Señales de alerta del ${model}`,
      symptomsTitle: (model: string, serviceNameLower: string) =>
        `Síntomas que indican que su ${model} necesita ${serviceNameLower}`,
      symptomsIntro: (brand: string, model: string, focus: string) =>
        `Los conductores de ${brand} ${model} en Englewood y el sur del área metro de Denver notan estos patrones cuando ${focus} está vencido o fallando — correlacione a tiempo, no después de una grúa.`,
      technicalEyebrow: 'Profundidad técnica',
      technicalTitle: (brand: string, model: string, serviceNameLower: string) =>
        `${serviceNameLower} de ${brand} ${model} — lo que importa en Colorado`,
      technicalIntro: (yearRange: string, model: string) =>
        `Contexto específico del modelo, desgaste de servicio severo y lo que RKC mide antes de recomendar piezas en su ${model} ${yearRange}.`,
      tableTitle: (model: string) => `Referencia rápida de servicio del ${model}`,
      tableIntro: (serviceNameLower: string, brand: string, model: string) =>
        `Use esta tabla al agendar ${serviceNameLower} para su ${brand} ${model} en RKC Automotive.`,
      tableCaption: (brand: string, model: string, serviceName: string) =>
        `Referencia de ${serviceName} de ${brand} ${model}`,
      tableColumns: ['Área', 'Qué inspeccionamos', 'Nota de Colorado'],
      processEyebrow: 'Flujo de trabajo RKC',
      processTitle: (model: string, serviceNameLower: string) =>
        `Cómo realizamos ${serviceNameLower} en el ${model}`,
      processIntro: (brand: string, model: string) =>
        `Diagnóstico estructurado, aprobación y verificación para ${brand} ${model} — sin disparar piezas ni mano de obra sorpresa.`,
      checklistEyebrow: 'Alcance completo',
      checklistTitle: (model: string, serviceNameLower: string) =>
        `Qué cubrimos en ${serviceNameLower} del ${model}`,
      checklistIntro: (brand: string) =>
        `La profundidad de inspección coincide con especificaciones ${brand} y la realidad de Colorado — no un relleno exprés de fluidos.`,
      laborTitle: (model: string, serviceName: string) =>
        `Transparencia de precios: ${serviceName} del ${model}`,
      laborDescription: (
        brand: string,
        model: string,
        serviceNameLower: string,
        laborRate: string,
        phone: string,
      ) =>
        `${serviceNameLower} de ${brand} ${model} se cotiza a nuestra tarifa publicada de ${laborRate} más piezas. Presupuesto por escrito antes de desarmar — siempre. Llame al ${phone} o agende en línea.`,
      faqTitle: (model: string, serviceName: string) => `Preguntas sobre ${serviceName} del ${model}`,
      faqIntro: (brand: string, model: string) =>
        `Preguntas frecuentes de dueños de ${brand} ${model} en Englewood, Littleton y el área metro de Denver.`,
      relatedTitle: (model: string) => `Servicios relacionados del ${model}`,
      serviceAreaLabel: (model: string, serviceNameLower: string) =>
        `${serviceNameLower} de ${model}`,
      finalCtaTitle: (model: string, serviceNameLower: string) =>
        `${serviceNameLower} de ${model} en Englewood`,
      finalCtaDescription: (brand: string, model: string) =>
        `Llame o agende en RKC Automotive en Evans Ave. Atendemos vehículos ${brand} ${model} con presupuestos honestos y experiencia al nivel ${brand} — sin las esperas del concesionario.`,
    },
  },
} as const;

export function vehicleCopy(lang: Lang) {
  return VEHICLE_COPY[lang];
}

/** Localized model×service link title (proper nouns kept). */
export function localizedModelServiceTitle(
  model: string,
  serviceId: string,
  lang: Lang,
  fallbackName?: string,
): string {
  const catalog = getServiceCatalogEntry(serviceId);
  const enName = fallbackName ?? catalog?.name ?? serviceId;
  if (lang !== 'es') {
    return VEHICLE_COPY.en.hub.serviceTitle(model, enName);
  }
  const esName = getDeepDiveServiceEs(serviceId)?.serviceName ?? enName;
  return VEHICLE_COPY.es.hub.serviceTitle(model, esName);
}

/** Short hub-card description — full catalog.describe stays EN for SEO; ES uses template. */
export function localizedModelServiceDescription(
  brandName: string,
  model: string,
  serviceId: string,
  lang: Lang,
  fallback: string,
): string {
  if (lang !== 'es') return fallback;
  const es = getDeepDiveServiceEs(serviceId);
  const focus = es?.focus ?? es?.serviceName ?? serviceId;
  return `RKC inspecciona y repara ${focus} en su ${brandName} ${model} con presupuestos por escrito en Englewood. Diagnóstico honesto y servicio listo para Colorado.`;
}

/** Hub hero / vehicle blurb when no reliability snapshot intro. */
export function localizedVehicleDescription(
  brandName: string,
  model: string,
  vehicleTypeLabel: string,
  lang: Lang,
  fallback: string,
): string {
  if (lang !== 'es') return fallback;
  return `RKC Automotive en Englewood atiende ${brandName} ${model} (${vehicleTypeLabel}) con mantenimiento según agenda de fábrica, diagnósticos honestos e inspecciones listas para Colorado. Del cambio de aceite a servicios de intervalo mayor, nuestro equipo certificado ASE mantiene su ${model} confiable en I-25 y en la montaña.`;
}
