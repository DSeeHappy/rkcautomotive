import type { Lang } from '@/lib/language';

export const VEHICLES_COPY = {
  en: {
    categories: {
      eyebrow: 'Vehicle makes',
      title: 'Domestic, import & European',
      intro:
        'Every major manufacturer on Colorado roads — same ASE-certified team, transparent pricing, and dealer-level diagnostics without the dealership experience.',
      makesServiced: (n: number) => `${n} makes serviced at RKC Englewood`,
      exploreBrands: 'Explore featured brands',
      titles: {
        Domestic: 'Domestic',
        'Import / Asian': 'Import / Asian',
        European: 'European',
      } as Record<string, string>,
    },
    cta: {
      title: 'Your make. Our expertise.',
      body: 'Domestic, import, or European — same ASE-certified crew, same $120/hr posted rate.',
    },
  },
  es: {
    categories: {
      eyebrow: 'Marcas de vehículos',
      title: 'Domésticos, importados y europeos',
      intro:
        'Cada fabricante importante en las carreteras de Colorado — el mismo equipo certificado ASE, precios transparentes y diagnóstico a nivel de concesionario sin la experiencia de concesionario.',
      makesServiced: (n: number) => `${n} marcas atendidas en RKC Englewood`,
      exploreBrands: 'Explorar marcas destacadas',
      titles: {
        Domestic: 'Domésticos',
        'Import / Asian': 'Importados / Asiáticos',
        European: 'Europeos',
      } as Record<string, string>,
    },
    cta: {
      title: 'Su marca. Nuestra experiencia.',
      body: 'Doméstico, importado o europeo — el mismo equipo certificado ASE, la misma tarifa publicada de $120/hr.',
    },
  },
} as const;

export function vehiclesCopy(lang: Lang) {
  return VEHICLES_COPY[lang];
}
