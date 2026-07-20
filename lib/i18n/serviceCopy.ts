import type { Lang } from '@/lib/language';

/** Shared service-page chrome (area band, breadcrumbs, CTAs). */
export const SERVICE_COPY = {
  en: {
    breadcrumbs: {
      home: 'Home',
      services: 'Services',
    },
    areaServed: {
      eyebrow: 'Service area',
      title: (serviceLabel: string) => `${serviceLabel} serving Englewood & Denver metro`,
      bodyLead: (address: string, serviceLabel: string) =>
        `RKC Automotive at ${address} provides ${serviceLabel} for drivers across the south Denver metro. We welcome customers from`,
      and: ', and ',
      viewAll: (n: number) => `View all ${n} cities we serve`,
      nearYou: (serviceLabel: string) => `${serviceLabel} near you`,
      forDrivers: (serviceLabel: string, city: string) => `${serviceLabel} for ${city} drivers`,
      fromShop: (distance: string) => `${distance} from shop`,
      popularModels: 'Popular models we service',
      platformHeading: 'Platform-specific diagnostics',
      platformIntro:
        'Model-specific guides for Ford, Chevy, BMW, Jeep, Toyota, and Honda platforms we diagnose every week.',
    },
    hero: {
      call: (phone: string) => `Call ${phone}`,
      scheduleService: 'Schedule service',
      bookService: 'Book service',
    },
  },
  es: {
    breadcrumbs: {
      home: 'Inicio',
      services: 'Servicios',
    },
    areaServed: {
      eyebrow: 'Área de servicio',
      title: (serviceLabel: string) => `${serviceLabel} para Englewood y el área metro de Denver`,
      bodyLead: (address: string, serviceLabel: string) =>
        `RKC Automotive en ${address} ofrece ${serviceLabel} para conductores del sur del área metro de Denver. Atendemos clientes de`,
      and: ' y ',
      viewAll: (n: number) => `Ver las ${n} ciudades que atendemos`,
      nearYou: (serviceLabel: string) => `${serviceLabel} cerca de usted`,
      forDrivers: (serviceLabel: string, city: string) => `${serviceLabel} para conductores de ${city}`,
      fromShop: (distance: string) => `${distance} del taller`,
      popularModels: 'Modelos populares que atendemos',
      platformHeading: 'Diagnóstico específico por plataforma',
      platformIntro:
        'Guías por modelo para plataformas Ford, Chevy, BMW, Jeep, Toyota y Honda que diagnosticamos cada semana.',
    },
    hero: {
      call: (phone: string) => `Llamar ${phone}`,
      scheduleService: 'Programar servicio',
      bookService: 'Agendar servicio',
    },
  },
} as const;

export function serviceCopy(lang: Lang) {
  return SERVICE_COPY[lang];
}
