import type { Lang } from '@/lib/language';

/** Homepage + hero marketing copy — English defaults for SEO; Spanish for client toggle. */
export const HOME_COPY = {
  en: {
    hero: {
      location: 'Englewood, CO · Hablamos Español',
      headline: 'Auto Repair & Diagnostics in Englewood, CO You Can Trust',
      servicesLine: 'Diagnostics • Engine Repair • Transmission • Brakes • Maintenance',
      serviceArea: 'Service area: Englewood, Denver, Littleton, Aurora & surrounding',
      callNow: 'Call Now',
      bookService: 'Book Service',
      alertTitle: 'Check engine light or no-start?',
      alertBody:
        'Call now for same-day diagnostics when bays are open — we find the real problem, not just the code.',
      emergency: 'Emergency',
      checkEngineHelp: 'Check engine help →',
    },
    trustStrip: [
      {
        title: 'Serving Englewood & Denver Metro',
        detail: '2120 W Evans Ave — your neighborhood full-service bay',
      },
      {
        title: 'Hablamos Español',
        detail: 'Bilingual team — call, text, or visit in English or Spanish',
      },
      {
        title: '$120/hr Posted Online',
        detail: 'Mon–Fri 8 AM–6 PM · Written estimates before any work',
      },
    ],
    stats: [
      { label: 'Years Serving', sublabel: 'Englewood & Denver Metro' },
      { label: 'Vehicles Serviced', sublabel: 'And counting every week' },
      { label: 'Service Categories', sublabel: 'Complete auto care' },
      { label: 'Verified Reviews', sublabel: 'Google & Facebook' },
    ],
    services: {
      eyebrow: 'What we fix',
      title: 'Full-service auto repair',
      intro:
        'Brakes, diagnostics, oil changes, transmission work, and more — real shop photos from our Englewood bay.',
      serviceLabel: 'Service',
      openService: 'Open service',
      allServices: (n: number) => `All ${n} services`,
    },
    process: {
      eyebrow: 'How it works',
      title: 'Four moves. Zero mystery.',
      steps: [
        {
          title: 'Schedule',
          description: 'Call or visit us. We offer same-day service for many repairs.',
        },
        {
          title: 'Diagnose',
          description: 'Thorough inspection with clear, written estimates before any work.',
        },
        {
          title: 'Repair',
          description: 'Expert service using quality parts and ASE-certified technicians.',
        },
        {
          title: 'Drive Confident',
          description: 'Quality-checked work backed by our commitment to your satisfaction.',
        },
      ],
    },
    why: {
      eyebrow: 'Why RKC',
      title: 'Honest work from a shop you can reach',
      body: (rate: string) =>
        `We're the Englewood shop that answers the phone, posts ${rate} on the pricing page, and puts every repair in writing before a wrench turns.`,
      reviewsOn: 'on Google & Facebook',
    },
    shop: {
      eyebrow: 'The shop',
      title: 'Real people. Real bay. Real reviews.',
      intro:
        'Visit us at 2120 W Evans Ave — ASE-certified technicians, a locally owned Englewood shop, and verified Google & Facebook reviews from customers in the metro.',
      location: 'Our location',
      team: 'Our team',
      teamDetail:
        'Same crew visit after visit — Ray, Oscar, and technicians with 30+ years in this bay.',
      certified: 'Certified technicians',
      certifiedDetail:
        'Dealer-level diagnostics and repair without the dealer markup — credentials you can ask about when you visit.',
      ratePosted: (rate: string) => `${rate} posted online`,
      writtenEstimates: 'Written estimates before work',
      hablamos: 'Hablamos Español',
    },
    areas: {
      eyebrow: 'Service area',
      title: (n: number) => `${n} cities. Your neighborhood.`,
      intro:
        'From our Englewood shop on W Evans Ave, we serve south Denver, Littleton, Highlands Ranch, Aurora, and neighborhoods in between — click your city for local details.',
      allAreas: 'All service areas',
    },
    reviews: {
      eyebrow: 'Verified reviews',
      title: 'Straight feedback from the lot',
      intro: 'Real quotes from Google and Facebook — no placeholders, no invented names.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Quick answers before you call',
      intro: 'Same-day openings, written estimates, and how we work — more on the full FAQ page.',
      allFaqs: 'All FAQs',
    },
    cta: {
      title: 'Ready when you are',
      body: "Same-day openings when available. Call the bay or send a message — we'll get you a clear next step.",
      seePricing: 'See pricing',
      warranty: 'Extended warranty',
      contact: 'Contact',
    },
    sticky: {
      call: 'Call',
      text: 'Text',
      directions: 'Directions',
      ariaLabel: 'Quick contact actions',
    },
    langToggle: {
      aria: 'Language',
      en: 'EN',
      es: 'ES',
    },
  },
  es: {
    hero: {
      location: 'Englewood, CO · Hablamos Español',
      headline: 'Reparación y Diagnóstico Automotriz en Englewood, CO de Confianza',
      servicesLine: 'Diagnóstico • Motor • Transmisión • Frenos • Mantenimiento',
      serviceArea: 'Área de servicio: Englewood, Denver, Littleton, Aurora y alrededores',
      callNow: 'Llamar ahora',
      bookService: 'Agendar servicio',
      alertTitle: '¿Luz de check engine o no arranca?',
      alertBody:
        'Llame ahora para diagnóstico el mismo día cuando haya bahías disponibles — encontramos el problema real, no solo el código.',
      emergency: 'Emergencia',
      checkEngineHelp: 'Ayuda con check engine →',
    },
    trustStrip: [
      {
        title: 'Servimos Englewood y el área metro de Denver',
        detail: '2120 W Evans Ave — su taller de servicio completo del vecindario',
      },
      {
        title: 'Hablamos Español',
        detail: 'Equipo bilingüe — llame, envíe mensaje o visítenos en inglés o español',
      },
      {
        title: '$120/hr publicado en línea',
        detail: 'Lun–Vie 8 AM–6 PM · Presupuestos por escrito antes de cualquier trabajo',
      },
    ],
    stats: [
      { label: 'Años de servicio', sublabel: 'Englewood y área metro de Denver' },
      { label: 'Vehículos atendidos', sublabel: 'Y sumando cada semana' },
      { label: 'Categorías de servicio', sublabel: 'Cuidado automotriz completo' },
      { label: 'Reseñas verificadas', sublabel: 'Google y Facebook' },
    ],
    services: {
      eyebrow: 'Qué reparamos',
      title: 'Reparación automotriz de servicio completo',
      intro:
        'Frenos, diagnóstico, cambios de aceite, transmisión y más — fotos reales de nuestro taller en Englewood.',
      serviceLabel: 'Servicio',
      openService: 'Ver servicio',
      allServices: (n: number) => `Los ${n} servicios`,
    },
    process: {
      eyebrow: 'Cómo funciona',
      title: 'Cuatro pasos. Sin misterios.',
      steps: [
        {
          title: 'Agendar',
          description: 'Llámenos o visítenos. Ofrecemos servicio el mismo día en muchas reparaciones.',
        },
        {
          title: 'Diagnosticar',
          description: 'Inspección completa con presupuestos claros por escrito antes de cualquier trabajo.',
        },
        {
          title: 'Reparar',
          description: 'Servicio experto con piezas de calidad y técnicos certificados ASE.',
        },
        {
          title: 'Maneje con confianza',
          description: 'Trabajo revisado y respaldado por nuestro compromiso con su satisfacción.',
        },
      ],
    },
    why: {
      eyebrow: 'Por qué RKC',
      title: 'Trabajo honesto de un taller al que puede llegar',
      body: (rate: string) =>
        `Somos el taller de Englewood que contesta el teléfono, publica ${rate} en la página de precios y pone cada reparación por escrito antes de tocar una herramienta.`,
      reviewsOn: 'en Google y Facebook',
    },
    shop: {
      eyebrow: 'El taller',
      title: 'Gente real. Bahía real. Reseñas reales.',
      intro:
        'Visítenos en 2120 W Evans Ave — técnicos certificados ASE, un taller local de Englewood y reseñas verificadas de Google y Facebook de clientes del área metro.',
      location: 'Nuestra ubicación',
      team: 'Nuestro equipo',
      teamDetail:
        'El mismo equipo visita tras visita — Ray, Oscar y técnicos con más de 30 años en esta bahía.',
      certified: 'Técnicos certificados',
      certifiedDetail:
        'Diagnóstico y reparación a nivel de concesionario sin el sobreprecio — credenciales que puede preguntar cuando nos visite.',
      ratePosted: (rate: string) => `${rate} publicado en línea`,
      writtenEstimates: 'Presupuestos por escrito antes del trabajo',
      hablamos: 'Hablamos Español',
    },
    areas: {
      eyebrow: 'Área de servicio',
      title: (n: number) => `${n} ciudades. Su vecindario.`,
      intro:
        'Desde nuestro taller en Englewood en W Evans Ave, servimos el sur de Denver, Littleton, Highlands Ranch, Aurora y vecindarios intermedios — haga clic en su ciudad para detalles locales.',
      allAreas: 'Todas las áreas de servicio',
    },
    reviews: {
      eyebrow: 'Reseñas verificadas',
      title: 'Comentarios directos del lote',
      intro: 'Citas reales de Google y Facebook — sin textos inventados ni nombres falsos.',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Respuestas rápidas antes de llamar',
      intro:
        'Cupos el mismo día, presupuestos por escrito y cómo trabajamos — más en la página completa de preguntas frecuentes.',
      allFaqs: 'Todas las preguntas',
    },
    cta: {
      title: 'Listos cuando usted lo esté',
      body: 'Cupos el mismo día cuando hay disponibilidad. Llame al taller o envíe un mensaje — le daremos el siguiente paso con claridad.',
      seePricing: 'Ver precios',
      warranty: 'Garantía extendida',
      contact: 'Contacto',
    },
    sticky: {
      call: 'Llamar',
      text: 'Mensaje',
      directions: 'Cómo llegar',
      ariaLabel: 'Acciones rápidas de contacto',
    },
    langToggle: {
      aria: 'Idioma',
      en: 'EN',
      es: 'ES',
    },
  },
} as const;

export function homeCopy(lang: Lang) {
  return HOME_COPY[lang];
}
