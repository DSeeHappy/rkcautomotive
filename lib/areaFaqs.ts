/**
 * City-page FAQs assembled strictly from existing verified data:
 * - directions: lib/i18n/areaBodies.ts (existing published copy, EN/ES)
 * - distance/address: lib/serviceAreas.ts distanceFromShop + BUSINESS.address
 * - hours + Spanish-service answers: lib/geoCiteCopy.ts (existing verified facts)
 * Question chrome + distance templates generated via Bifrost Spark vllm/smart
 * (labels "faq-en-..." and "faq-es-..." in scripts/.spark-logs/TELEMETRY_LEDGER.jsonl,
 * script scripts/spark-area-faq-chrome.mjs) and human-reviewed. No invented facts.
 */
import { BUSINESS, type FAQItem } from '@/lib/constants';
import { geoCiteCopy } from '@/lib/geoCiteCopy';
import { areaBodyCopy } from '@/lib/i18n/areaBodies';
import type { Lang } from '@/lib/language';
import type { ServiceArea } from '@/lib/serviceAreas';

const FAQ_CHROME = {
  en: {
    qDirections: (city: string) => `How do I get to RKC Automotive in Englewood from ${city}?`,
    qDistance: (city: string) => `How far is RKC Automotive from ${city}?`,
    aDistance: (city: string, distance: string) =>
      `RKC Automotive is located at ${BUSINESS.address.full} and is ${distance} from ${city}.`,
    qHours: "What are RKC Automotive's business hours?",
    qSpanish: 'Does RKC Automotive have Spanish-speaking staff?',
  },
  es: {
    qDirections: (city: string) => `¿Cómo puedo llegar a RKC Automotive en Englewood desde ${city}?`,
    qDistance: (city: string) => `¿A qué distancia está RKC Automotive de ${city}?`,
    aDistance: (city: string, distance: string) =>
      `El taller RKC Automotive está a ${distance} de ${city}, en ${BUSINESS.address.full}.`,
    qHours: '¿Cuál es el horario de atención de RKC Automotive?',
    qSpanish: '¿Tiene personal que habla español en RKC Automotive?',
  },
} as const;

/**
 * One locally specific Q&A per city — route/season topics that come up in real
 * conversations with drivers from each area. Factual and general; no invented
 * statistics, prices, or certifications.
 */
const LOCAL_FAQS: Record<string, { en: FAQItem; es: FAQItem }> = {
  'englewood-co': {
    en: {
      question: 'Can I wait at the shop while my car is serviced in Englewood?',
      answer:
        'Yes. Many Englewood customers wait on site for oil changes and brake inspections, and downtown Englewood shops along S Broadway are a short walk away for longer jobs.',
    },
    es: {
      question: '¿Puedo esperar en el taller mientras dan servicio a mi auto en Englewood?',
      answer:
        'Sí. Muchos clientes de Englewood esperan en el taller durante cambios de aceite e inspecciones de frenos, y los comercios del centro de Englewood sobre S Broadway quedan a pocos pasos para trabajos más largos.',
    },
  },
  'denver-co': {
    en: {
      question: 'Is RKC Automotive convenient for south Denver commuters?',
      answer:
        'Yes. From Washington Park, Platt Park, and University Hills, S Broadway south runs directly to our shop at 2120 W Evans Ave — most south Denver drivers arrive in under 15 minutes and can drop off on the way to work.',
    },
    es: {
      question: '¿Es conveniente RKC Automotive para quienes viajan al trabajo desde el sur de Denver?',
      answer:
        'Sí. Desde Washington Park, Platt Park y University Hills, S Broadway hacia el sur llega directo a nuestro taller en 2120 W Evans Ave; la mayoría de los conductores del sur de Denver llegan en menos de 15 minutos y pueden dejar el auto de camino al trabajo.',
    },
  },
  'littleton-co': {
    en: {
      question: 'What is the fastest route from Littleton to RKC Automotive?',
      answer:
        'Most Littleton drivers take S Santa Fe Dr (US-85) or S Broadway north to W Evans Ave — about 12–18 minutes from downtown Littleton. From Ken Caryl, C-470 to Santa Fe north avoids I-25 traffic.',
    },
    es: {
      question: '¿Cuál es la ruta más rápida desde Littleton a RKC Automotive?',
      answer:
        'La mayoría de los conductores de Littleton toman S Santa Fe Dr (US-85) o S Broadway hacia el norte hasta W Evans Ave, unos 12 a 18 minutos desde el centro de Littleton. Desde Ken Caryl, la C-470 hasta Santa Fe norte evita el tráfico de la I-25.',
    },
  },
  'sheridan-co': {
    en: {
      question: 'How close is RKC Automotive to Sheridan?',
      answer:
        'Sheridan borders Englewood, so most neighborhoods — Fort Logan, Hampden Heights, and the Federal Blvd corridor — are under 10 minutes from our W Evans Ave shop.',
    },
    es: {
      question: '¿Qué tan cerca está RKC Automotive de Sheridan?',
      answer:
        'Sheridan colinda con Englewood, así que la mayoría de los vecindarios — Fort Logan, Hampden Heights y el corredor de Federal Blvd — están a menos de 10 minutos de nuestro taller en W Evans Ave.',
    },
  },
  'greenwood-village-co': {
    en: {
      question: 'Do you service vehicles for Denver Tech Center commuters?',
      answer:
        'Yes. DTC commuters often put heavy highway miles on I-25, so we keep tire, brake, and fluid intervals on schedule and offer morning drop-offs so you can get to the office while we work.',
    },
    es: {
      question: '¿Dan servicio a vehículos de quienes viajan al Denver Tech Center?',
      answer:
        'Sí. Quienes viajan al DTC acumulan muchas millas de autopista en la I-25, así que mantenemos al día los intervalos de llantas, frenos y fluidos, y ofrecemos entrega por la mañana para que llegue a su oficina mientras trabajamos.',
    },
  },
  'centennial-co': {
    en: {
      question: 'Can RKC inspect my car for hail damage in Centennial?',
      answer:
        'Yes. Centennial sits in the Front Range hail corridor, and after spring storms we inspect roofs, hoods, and windshields and document what we find so insurance claims go smoothly.',
    },
    es: {
      question: '¿Puede RKC inspeccionar mi auto por daños de granizo en Centennial?',
      answer:
        'Sí. Centennial está en el corredor de granizo del Front Range, y después de las tormentas de primavera inspeccionamos techos, cofres y parabrisas y documentamos lo que encontramos para facilitar los reclamos de seguro.',
    },
  },
  'lakewood-co': {
    en: {
      question: 'Is it worth driving from Lakewood to Englewood for auto repair?',
      answer:
        'Most Lakewood customers say yes. The trip via Hampden Ave (US-285) east takes about 20 minutes, and they get ASE-certified diagnostics and a posted $120/hr labor rate instead of chain-shop guesswork.',
    },
    es: {
      question: '¿Vale la pena manejar desde Lakewood a Englewood para reparar mi auto?',
      answer:
        'La mayoría de nuestros clientes de Lakewood dicen que sí. El trayecto por Hampden Ave (US-285) hacia el este toma unos 20 minutos, y reciben diagnósticos de técnicos certificados ASE con una tarifa publicada de $120/hr en lugar de suposiciones de cadena.',
    },
  },
  'aurora-co': {
    en: {
      question: 'Do you help Aurora drivers with Colorado emissions repairs?',
      answer:
        'Yes. We diagnose and repair exhaust, catalytic converter, and OBD-related failures with written estimates upfront, so Aurora drivers know what an emissions retest will require before spending anything.',
    },
    es: {
      question: '¿Ayudan a los conductores de Aurora con reparaciones de emisiones de Colorado?',
      answer:
        'Sí. Diagnosticamos y reparamos fallas de escape, catalizadores y sistemas OBD con presupuestos por escrito desde el inicio, para que los conductores de Aurora sepan qué requiere la nueva prueba de emisiones antes de gastar.',
    },
  },
  'cherry-hills-village-co': {
    en: {
      question: 'Do you work on European and luxury vehicles from Cherry Hills Village?',
      answer:
        'Yes. We regularly service European and premium vehicles with the same written-estimate process as every other job — no upsell pressure, just documented findings.',
    },
    es: {
      question: '¿Trabajan en vehículos europeos y de lujo de Cherry Hills Village?',
      answer:
        'Sí. Damos servicio regularmente a vehículos europeos y premium con el mismo proceso de presupuesto por escrito que cualquier otro trabajo, sin presión de ventas, solo hallazgos documentados.',
    },
  },
  'highlands-ranch-co': {
    en: {
      question: 'What is the best route from Highlands Ranch to your shop?',
      answer:
        'S Broadway north is the most direct route from Town Center and Northridge, about 15–20 minutes. From Backcountry and the south end, C-470 to Santa Fe north and W Evans Ave east avoids I-25.',
    },
    es: {
      question: '¿Cuál es la mejor ruta desde Highlands Ranch a su taller?',
      answer:
        'S Broadway hacia el norte es la ruta más directa desde Town Center y Northridge, unos 15 a 20 minutos. Desde Backcountry y el extremo sur, la C-470 hasta Santa Fe norte y W Evans Ave al este evita la I-25.',
    },
  },
  'lone-tree-co': {
    en: {
      question: 'Can I drop my car off before work in Lone Tree or RidgeGate?',
      answer:
        'Yes. Many RidgeGate and Park Meadows area customers drop off in the morning via I-25 north to Hampden west, about 15 minutes outside rush hour, and pick up after work.',
    },
    es: {
      question: '¿Puedo dejar mi auto antes del trabajo en Lone Tree o RidgeGate?',
      answer:
        'Sí. Muchos clientes del área de RidgeGate y Park Meadows dejan su auto por la mañana por la I-25 norte hasta Hampden al oeste, unos 15 minutos fuera de la hora pico, y lo recogen después del trabajo.',
    },
  },
  'glendale-co': {
    en: {
      question: 'Do short trips around Cherry Creek and Glendale affect maintenance?',
      answer:
        'They do. Short trips rarely let the engine reach full operating temperature, which is harder on oil and batteries. We adjust maintenance recommendations to how your vehicle is actually driven.',
    },
    es: {
      question: '¿Los viajes cortos por Cherry Creek y Glendale afectan el mantenimiento?',
      answer:
        'Sí. Los viajes cortos rara vez permiten que el motor alcance su temperatura de operación, lo cual desgasta más el aceite y la batería. Ajustamos las recomendaciones de mantenimiento a cómo se usa realmente su vehículo.',
    },
  },
  'wheat-ridge-co': {
    en: {
      question: 'Do you maintain older, high-mileage vehicles from Wheat Ridge?',
      answer:
        'Yes. We are glad to keep well-maintained older cars and trucks on the road, and we give honest triage on what is worth fixing and what can wait — in writing.',
    },
    es: {
      question: '¿Le dan mantenimiento a vehículos antiguos de alto millaje de Wheat Ridge?',
      answer:
        'Sí. Con gusto mantenemos en camino autos y camionetas antiguos bien cuidados, y le decimos con honestidad qué conviene reparar y qué puede esperar, por escrito.',
    },
  },
  'morrison-co': {
    en: {
      question: 'Should I get my brakes checked before driving in the foothills near Morrison?',
      answer:
        'It is a smart move. Canyon driving on Bear Creek Rd and the grades toward Evergreen heats brakes quickly, so we check pad life, fluid condition, and cooling systems before mountain seasons.',
    },
    es: {
      question: '¿Debo revisar mis frenos antes de manejar en las montañas cerca de Morrison?',
      answer:
        'Es una buena idea. Manejar por cañones como Bear Creek Rd y las subidas hacia Evergreen calienta los frenos rápidamente, así que revisamos las pastillas, el fluido y el sistema de enfriamiento antes de cada temporada.',
    },
  },
  'bow-mar-co': {
    en: {
      question: 'How long does it take to get to RKC Automotive from Bow Mar?',
      answer:
        'Under 10 minutes for most residents. S Wadsworth Blvd north to W Evans Ave east is the quickest route, and S Sheridan Blvd works from the west side of the neighborhood.',
    },
    es: {
      question: '¿Cuánto tiempo toma llegar a RKC Automotive desde Bow Mar?',
      answer:
        'Menos de 10 minutos para la mayoría de los residentes. S Wadsworth Blvd hacia el norte hasta W Evans Ave al este es la ruta más rápida, y S Sheridan Blvd funciona desde el lado oeste del vecindario.',
    },
  },
  'columbine-co': {
    en: {
      question: 'Do you inspect hitches and trailer wiring for Columbine drivers?',
      answer:
        'Yes. Weekend trips toward Chatfield State Park mean trailers, boats, and loaded SUVs, so we inspect hitches, trailer wiring, and brake controllers as part of pre-season checks.',
    },
    es: {
      question: '¿Inspeccionan enganches y cableado de remolque para conductores de Columbine?',
      answer:
        'Sí. Los viajes de fin de semana hacia Chatfield State Park implican remolques, botes y SUVs cargadas, así que inspeccionamos enganches, cableado de remolque y controles de freno como parte de las revisiones de pretemporada.',
    },
  },
  'arvada-co': {
    en: {
      question: 'What should Arvada drivers check before winter?',
      answer:
        'Battery health, coolant strength, and tires top the list. Arvada winters mean cold starts and short trips, and we test batteries and charging systems during fall inspections so you are not stranded in January.',
    },
    es: {
      question: '¿Qué deben revisar los conductores de Arvada antes del invierno?',
      answer:
        'La batería, el anticongelante y las llantas encabezan la lista. Los inviernos de Arvada implican arranques en frío y viajes cortos, y probamos baterías y sistemas de carga en las inspecciones de otoño para que no se quede varado en enero.',
    },
  },
  'parker-co': {
    en: {
      question: 'Is hail damage something Parker drivers should watch for?',
      answer:
        'Yes. Parker sits in one of the more hail-prone stretches of the Front Range, and spring storms regularly send vehicles in for inspections. We document damage thoroughly so insurance claims go smoothly.',
    },
    es: {
      question: '¿Deben preocuparse los conductores de Parker por el granizo?',
      answer:
        'Sí. Parker está en una de las zonas más propensas al granizo del Front Range, y las tormentas de primavera traen vehículos regularmente para inspección. Documentamos los daños a detalle para facilitar los reclamos de seguro.',
    },
  },
  'golden-co': {
    en: {
      question: 'Do you prepare vehicles for mountain driving from Golden?',
      answer:
        'Yes. Grades like Lookout Mountain and US-40 put real heat into brakes and cooling systems, so we inspect both before summer and ski seasons for Golden drivers heading into the canyon.',
    },
    es: {
      question: '¿Preparan vehículos para manejar en la montaña desde Golden?',
      answer:
        'Sí. Las subidas como Lookout Mountain y la US-40 calientan de verdad los frenos y el sistema de enfriamiento, así que inspeccionamos ambos antes del verano y la temporada de esquí para los conductores de Golden.',
    },
  },
  'edgewater-co': {
    en: {
      question: 'What is the quickest way from Edgewater to your Englewood shop?',
      answer:
        "Sheridan Blvd south to W Evans Ave east is the simplest route, usually 15–20 minutes from the Sloan's Lake border. Wadsworth Blvd south to Hampden Ave east works just as well from the 26th Ave corridor.",
    },
    es: {
      question: '¿Cuál es la forma más rápida de llegar de Edgewater a su taller en Englewood?',
      answer:
        'Sheridan Blvd hacia el sur hasta W Evans Ave al este es la ruta más simple, usualmente de 15 a 20 minutos desde el límite de Sloan\u2019s Lake. Wadsworth Blvd al sur hasta Hampden Ave al este funciona igual de bien desde el corredor de la 26th Ave.',
    },
  },
};

export function getAreaFaqs(slug: string, area: ServiceArea, lang: Lang): FAQItem[] {
  const chrome = FAQ_CHROME[lang];
  const geo = geoCiteCopy(lang);
  const directions = areaBodyCopy(slug, lang)?.directions ?? area.directions;

  const faqs: FAQItem[] = [
    { question: chrome.qDirections(area.name), answer: directions },
  ];

  const localFaq = LOCAL_FAQS[slug]?.[lang];
  if (localFaq) faqs.push(localFaq);

  // Englewood is the shop's own city ('0 miles — shop location') — a distance
  // Q&A would read awkwardly and adds nothing, so it is omitted there.
  if (slug !== 'englewood-co') {
    faqs.push({
      question: chrome.qDistance(area.name),
      answer: chrome.aDistance(area.name, area.distanceFromShop),
    });
  }

  faqs.push(
    { question: chrome.qHours, answer: geo.hoursFact },
    { question: chrome.qSpanish, answer: geo.languagesFact },
  );

  return faqs;
}
