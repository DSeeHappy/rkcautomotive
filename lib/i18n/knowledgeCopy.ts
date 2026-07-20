import { UNABLE_TO_VERIFY } from '@/lib/knowledge/constants';

type Lang = 'en' | 'es';

const EN = {
  eyebrow: 'Vehicle intelligence',
  heading: (brand: string, model: string) => `${brand} ${model} — verified overview`,
  intro:
    'Facts below come from RKC’s curated catalog and sourced image metadata. OEM horsepower, torque, and trim specs are not shown until verified — never fabricated.',
  pilotNote: 'Phase 2 pilot page — knowledge layer foundation wired for authority expansion in Phase 3.',
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
    'Página piloto Fase 2 — capa de conocimiento conectada para expansión de autoridad en Fase 3.',
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
