import type { Lang } from '@/lib/language';

/** About page body — SEO metadata stays English; client toggle swaps this copy. */
export const ABOUT_COPY = {
  en: {
    story: {
      title: 'Built on trust. Kept by craftsmanship.',
      p1: "We're a locally owned Englewood shop focused on long-term relationships — not one-time upsells. Families across the Denver metro bring their vehicles here because we listen first, diagnose carefully, and stand behind the work.",
      p2: (rate: string) =>
        `Plenty of Front Range shops promise dealership-level diagnostics and transparent pricing, but many won't share their labor rate until you call or submit a form. We publish ${rate} so you can compare the full estimate — hours × rate + parts — before you visit.`,
      p3: 'RKC has served the Denver south metro for more than 30 years from our Englewood bay at 2120 W Evans Ave — same location, same commitment to written estimates and ASE-certified work.',
      shortDescription:
        'Trusted automotive services — engine and auto repair for every make, model, and year. Serving Englewood and the Denver metro.',
    },
    stats: [
      { value: '30+', label: 'Years serving' },
      { value: '5,000+', label: 'Vehicles serviced' },
      { value: 'ASE', label: 'Certified techs' },
      { value: '5★', label: 'Verified reviews' },
    ],
    values: {
      eyebrow: 'What we stand on',
      title: 'Three non-negotiables',
      items: [
        {
          title: 'Honesty',
          description:
            "Transparent communication and honest recommendations. We'll never suggest unnecessary repairs.",
        },
        {
          title: 'Craft',
          description:
            'ASE-certified technicians using quality parts and proven techniques — done right the first time.',
        },
        {
          title: 'Respect',
          description:
            'Your time and your budget matter. We explain repairs clearly and answer every question.',
        },
      ],
      visitShop: 'Visit the shop',
      readReviews: 'Read Google reviews',
    },
    compare: {
      eyebrow: 'How we compare',
      title: 'Posted pricing beats quote-only',
      intro:
        'Same ASE-certified skill other Denver metro shops advertise — with a labor rate you can verify before you drive over.',
    },
    reviews: {
      eyebrow: 'What customers say',
      title: 'Verified public reviews',
      findUs: 'Find us online',
    },
  },
  es: {
    story: {
      title: 'Construido sobre confianza. Sostenido por el oficio.',
      p1: 'Somos un taller de propiedad local en Englewood centrado en relaciones a largo plazo — no en ventas de una sola vez. Familias de todo el área metro de Denver traen sus vehículos aquí porque escuchamos primero, diagnosticamos con cuidado y respaldamos el trabajo.',
      p2: (rate: string) =>
        `Muchos talleres del Front Range prometen diagnóstico a nivel de concesionario y precios transparentes, pero muchos no comparten su tarifa de mano de obra hasta que usted llama o envía un formulario. Publicamos ${rate} para que pueda comparar el presupuesto completo — horas × tarifa + piezas — antes de visitarnos.`,
      p3: 'RKC ha servido al sur del área metro de Denver por más de 30 años desde nuestra bahía en Englewood en 2120 W Evans Ave — misma ubicación, mismo compromiso con presupuestos por escrito y trabajo certificado ASE.',
      shortDescription:
        'Servicios automotrices de confianza — reparación de motor y auto para toda marca, modelo y año. Sirviendo Englewood y el área metro de Denver.',
    },
    stats: [
      { value: '30+', label: 'Años sirviendo' },
      { value: '5,000+', label: 'Vehículos atendidos' },
      { value: 'ASE', label: 'Técnicos certificados' },
      { value: '5★', label: 'Reseñas verificadas' },
    ],
    values: {
      eyebrow: 'En lo que nos sostenemos',
      title: 'Tres no negociables',
      items: [
        {
          title: 'Honestidad',
          description:
            'Comunicación transparente y recomendaciones honestas. Nunca sugeriremos reparaciones innecesarias.',
        },
        {
          title: 'Oficio',
          description:
            'Técnicos certificados ASE usando piezas de calidad y técnicas probadas — bien hecho a la primera.',
        },
        {
          title: 'Respeto',
          description:
            'Su tiempo y su presupuesto importan. Explicamos las reparaciones con claridad y respondemos cada pregunta.',
        },
      ],
      visitShop: 'Visitar el taller',
      readReviews: 'Leer reseñas de Google',
    },
    compare: {
      eyebrow: 'Cómo nos comparamos',
      title: 'Precios publicados superan a solo cotizar',
      intro:
        'La misma habilidad certificada ASE que anuncian otros talleres del área metro de Denver — con una tarifa de mano de obra que puede verificar antes de manejar hasta aquí.',
    },
    reviews: {
      eyebrow: 'Lo que dicen los clientes',
      title: 'Reseñas públicas verificadas',
      findUs: 'Encuéntrenos en línea',
    },
  },
} as const;

export function aboutCopy(lang: Lang) {
  return ABOUT_COPY[lang];
}
