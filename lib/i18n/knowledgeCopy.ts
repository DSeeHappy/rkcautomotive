import { UNABLE_TO_VERIFY } from '@/lib/knowledge/constants';

type Lang = 'en' | 'es';

const EN = {
  eyebrow: 'Vehicle intelligence',
  heading: (brand: string, model: string) => `${brand} ${model} — verified overview`,
  intro:
    'Facts below come from RKC’s curated catalog and sourced image metadata. OEM horsepower, torque, and trim specs are not shown until verified — never fabricated.',
  pilotNote:
    'Knowledge layer active — Phase 3 authority sections wired. Ownership populates only from model-specific shop notes when available.',
  phase3Heading: 'Authority sections',
  phase3Intro:
    'Overview and Ownership show verified catalog identity and RKC shop observations. Engineering, Enthusiast, and Comparison stay empty until sourced — never fabricated.',
  specScaffoldTitle: 'Specification categories (awaiting verified data)',
  specScaffoldIntro:
    'These categories are scaffolded for future OEM-sourced rows. Empty fields remain unavailable rather than invented.',
  unverifiedCategory: UNABLE_TO_VERIFY,
  badges: {
    verified: 'Catalog verified',
    shopObservation: 'Shop observation',
    marketing: 'Marketing catalog',
    unverified: 'Unverified',
  },
};

const ES = {
  eyebrow: 'Inteligencia vehicular',
  heading: (brand: string, model: string) => `${brand} ${model} — resumen verificado`,
  intro:
    'Los datos siguientes provienen del catálogo curado de RKC y metadatos de imágenes con fuente. No mostramos caballos de fuerza, torque ni especificaciones por trim OEM hasta verificarlas — nunca inventadas.',
  pilotNote:
    'Capa de conocimiento activa — secciones de autoridad Fase 3 conectadas. Propiedad se llena solo con notas del taller por modelo cuando existen.',
  phase3Heading: 'Secciones de autoridad',
  phase3Intro:
    'Resumen y Propiedad muestran identidad del catálogo y observaciones del taller RKC. Ingeniería, Entusiasta y Comparación permanecen vacías hasta tener fuentes — nunca inventadas.',
  specScaffoldTitle: 'Categorías de especificación (pendientes de datos verificados)',
  specScaffoldIntro:
    'Estas categorías están preparadas para filas OEM con fuente. Los campos vacíos permanecen no disponibles en lugar de inventarse.',
  unverifiedCategory: 'No se puede verificar con los datos disponibles.',
  badges: {
    verified: 'Catálogo verificado',
    shopObservation: 'Observación del taller',
    marketing: 'Catálogo de marketing',
    unverified: 'No verificado',
  },
};

export function knowledgeCopy(lang: Lang) {
  return lang === 'es' ? ES : EN;
}
