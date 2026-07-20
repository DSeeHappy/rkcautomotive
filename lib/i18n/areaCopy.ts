import type { Lang } from '@/lib/language';

/** City service-area page templates — inject city proper nouns. */
export const AREA_COPY = {
  en: {
    home: 'Home',
    areasCrumb: 'Areas We Serve',
    servingEyebrow: (city: string) => `Serving ${city}, CO`,
    heroTitle: (city: string) => `Auto repair for ${city} & nearby neighborhoods`,
    repairHeading: (city: string) => `Auto repair for ${city} drivers`,
    neighborhoodsHeading: (city: string) => `Neighborhoods we serve in ${city}`,
    neighborhoodsIntro: (address: string, distance: string, city: string) =>
      `RKC Automotive at ${address} is ${distance} from ${city}. We welcome drivers from these neighborhoods and surrounding areas.`,
    neighborhoodFlagAlt: (name: string) => `${name} neighborhood flag`,
    whyHeading: (city: string) => `Why ${city} drivers choose RKC`,
    popularHeading: (city: string) => `Popular services for ${city} drivers`,
    popularIntro: (distance: string, city: string) =>
      `From our Englewood shop on W Evans Ave — ${distance} from ${city} — we handle the repairs neighbors call about most.`,
    serviceInEnglewood: (name: string) => `${name} in Englewood`,
    directionsHeading: (city: string) => `Directions from ${city}`,
    shopAddress: 'Shop address:',
    getDirections: 'Get directions',
    moreAreas: 'More areas we serve',
    moreAreasIntro: (n: number, city: string) =>
      `RKC Automotive serves ${n} cities across the south Denver metro. These communities are closest to ${city}.`,
    allAreas: 'All service areas',
    nearbyTitle: 'Nearby cities we serve',
    autoRepairIn: (city: string) => `Auto repair in ${city}, CO`,
    fromShop: (distance: string) => `${distance} from our Englewood shop`,
    crossCityTitle: (city: string) => `Popular services near ${city}`,
    crossCityIntro: (city: string) =>
      `Same Englewood shop — hub service pages for drivers in ${city} and neighboring cities.`,
    crossCityLabel: (service: string, nearby: string) => `${service} serving ${nearby}`,
    crossCityDesc: (description: string, distance: string, nearby: string) =>
      `${description} — ${distance} from ${nearby}.`,
  },
  es: {
    home: 'Inicio',
    areasCrumb: 'Áreas que servimos',
    servingEyebrow: (city: string) => `Atendemos ${city}, CO`,
    heroTitle: (city: string) => `Reparación automotriz para ${city} y vecindarios cercanos`,
    repairHeading: (city: string) => `Reparación automotriz para conductores de ${city}`,
    neighborhoodsHeading: (city: string) => `Vecindarios que atendemos en ${city}`,
    neighborhoodsIntro: (address: string, distance: string, city: string) =>
      `RKC Automotive en ${address} está a ${distance} de ${city}. Atendemos conductores de estos vecindarios y zonas aledañas.`,
    neighborhoodFlagAlt: (name: string) => `Bandera del vecindario ${name}`,
    whyHeading: (city: string) => `Por qué los conductores de ${city} eligen RKC`,
    popularHeading: (city: string) => `Servicios populares para conductores de ${city}`,
    popularIntro: (distance: string, city: string) =>
      `Desde nuestro taller en Englewood en W Evans Ave — a ${distance} de ${city} — manejamos las reparaciones que más piden los vecinos.`,
    serviceInEnglewood: (name: string) => `${name} en Englewood`,
    directionsHeading: (city: string) => `Cómo llegar desde ${city}`,
    shopAddress: 'Dirección del taller:',
    getDirections: 'Cómo llegar',
    moreAreas: 'Más áreas que atendemos',
    moreAreasIntro: (n: number, city: string) =>
      `RKC Automotive atiende ${n} ciudades del sur del área metro de Denver. Estas comunidades son las más cercanas a ${city}.`,
    allAreas: 'Todas las áreas de servicio',
    nearbyTitle: 'Ciudades cercanas que atendemos',
    autoRepairIn: (city: string) => `Reparación automotriz en ${city}, CO`,
    fromShop: (distance: string) => `${distance} de nuestro taller en Englewood`,
    crossCityTitle: (city: string) => `Servicios populares cerca de ${city}`,
    crossCityIntro: (city: string) =>
      `El mismo taller en Englewood — páginas de servicio para conductores en ${city} y ciudades vecinas.`,
    crossCityLabel: (service: string, nearby: string) => `${service} para ${nearby}`,
    crossCityDesc: (description: string, distance: string, nearby: string) =>
      `${description} — a ${distance} de ${nearby}.`,
  },
} as const;

export function areaCopy(lang: Lang) {
  return AREA_COPY[lang];
}
