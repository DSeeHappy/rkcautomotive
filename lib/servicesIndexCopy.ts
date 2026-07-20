import type { Lang } from '@/lib/language';

export const SERVICES_INDEX_COPY = {
  en: {
    featured: {
      warranty: {
        title: 'Extended warranty repair',
        detail: 'Endurance, CarShield, and third-party claims welcome',
      },
      rebuilds: {
        title: 'Engine rebuilds & camshaft',
        detail: 'Long-block, short-block, HEMI tick, GM AFM valvetrain',
      },
    },
    categories: {
      'Engine & Diagnostics': {
        label: 'Engine & Diagnostics',
        description: 'Rebuilds, camshaft repair, OBD-II diagnostics, and check-engine triage.',
      },
      'Drivetrain & Brakes': {
        label: 'Drivetrain & Brakes',
        description: 'Transmission, brakes, suspension, and emissions-compliant exhaust.',
      },
      Maintenance: {
        label: 'Maintenance',
        description: 'Oil changes, 30/60/90k milestones, and battery health testing.',
      },
      'Climate & Electrical': {
        label: 'Climate & Electrical',
        description: 'R134a/R1234yf HVAC, heater cores, and starting/charging systems.',
      },
    } as Record<string, { label: string; description: string }>,
    learnMore: 'Learn more →',
    cta: {
      title: 'Not sure what you need?',
      body: 'Call our Englewood shop — we will diagnose the issue and give you a written estimate before any work begins.',
    },
  },
  es: {
    featured: {
      warranty: {
        title: 'Reparación de garantía extendida',
        detail: 'Se aceptan reclamos de Endurance, CarShield y terceros',
      },
      rebuilds: {
        title: 'Reconstrucciones de motor y árbol de levas',
        detail: 'Bloque largo, bloque corto, tick HEMI, valvetrain GM AFM',
      },
    },
    categories: {
      'Engine & Diagnostics': {
        label: 'Motor y diagnóstico',
        description: 'Reconstrucciones, reparación de árbol de levas, diagnóstico OBD-II y triaje de check engine.',
      },
      'Drivetrain & Brakes': {
        label: 'Tren motriz y frenos',
        description: 'Transmisión, frenos, suspensión y escape conforme a emisiones.',
      },
      Maintenance: {
        label: 'Mantenimiento',
        description: 'Cambios de aceite, hitos 30/60/90k y prueba de batería.',
      },
      'Climate & Electrical': {
        label: 'Clima y eléctrico',
        description: 'HVAC R134a/R1234yf, núcleos de calefacción y sistemas de arranque/carga.',
      },
    } as Record<string, { label: string; description: string }>,
    learnMore: 'Saber más →',
    cta: {
      title: '¿No sabe qué necesita?',
      body: 'Llame a nuestro taller en Englewood — diagnosticaremos el problema y le daremos un presupuesto por escrito antes de empezar cualquier trabajo.',
    },
  },
} as const;

export function servicesIndexCopy(lang: Lang) {
  return SERVICES_INDEX_COPY[lang];
}
