import { UNABLE_TO_VERIFY } from '@/lib/knowledge/constants';

type Lang = 'en' | 'es';

const EN = {
  eyebrow: 'Vehicle intelligence',
  heading: (brand: string, model: string) => `${brand} ${model} — verified overview`,
  intro:
    'Facts below combine RKC’s curated catalog with OEM-verified specifications sourced from manufacturer materials, fueleconomy.gov, and NHTSA records (July 2026). Empty fields stay unavailable — never fabricated.',
  pilotNote:
    'Knowledge layer active — OEM specs populate from verified data pack when available. Ownership uses modelReliabilityNotes and brandFailureProfiles.',
  phase3Heading: 'Authority sections',
  phase3Intro:
    'Overview and Ownership show catalog identity and RKC shop observations. Engineering, Enthusiast, and Comparison populate from verified OEM pack data when available.',
  specScaffoldTitle: 'Specification categories (awaiting verified data)',
  specScaffoldTitleVerified: 'OEM specification categories',
  specScaffoldIntro:
    'These categories are scaffolded for future OEM-sourced rows. Empty fields remain unavailable rather than invented.',
  specScaffoldIntroVerified:
    'Verified OEM data from the July 2026 research pack — generation-level specs with cited sources. Inline gaps marked in source remain honest.',
  specScaffoldCollapsed:
    'OEM horsepower, torque, MPG, and dimensions are not shown until verified against a licensed source — we never fabricate spec numbers.',
  sourcesLabel: 'Sources',
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
    'Los datos siguientes combinan el catálogo curado de RKC con especificaciones OEM verificadas de materiales del fabricante, fueleconomy.gov y registros NHTSA (julio 2026). Los campos vacíos permanecen no disponibles — nunca inventados.',
  pilotNote:
    'Capa de conocimiento activa — especificaciones OEM del paquete verificado cuando existen. Propiedad usa modelReliabilityNotes y brandFailureProfiles.',
  phase3Heading: 'Secciones de autoridad',
  phase3Intro:
    'Resumen y Propiedad muestran identidad del catálogo y observaciones del taller. Ingeniería, Entusiasta y Comparación se llenan con datos OEM verificados cuando existen.',
  specScaffoldTitle: 'Categorías de especificación (pendientes de datos verificados)',
  specScaffoldTitleVerified: 'Categorías de especificación OEM',
  specScaffoldIntro:
    'Estas categorías están preparadas para filas OEM con fuente. Los campos vacíos permanecen no disponibles en lugar de inventarse.',
  specScaffoldIntroVerified:
    'Datos OEM verificados del paquete de investigación de julio 2026 — especificaciones por generación con fuentes citadas.',
  specScaffoldCollapsed:
    'No mostramos caballos de fuerza, torque, MPG ni dimensiones OEM hasta verificarlos con una fuente con licencia — nunca inventamos cifras.',
  sourcesLabel: 'Fuentes',
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
