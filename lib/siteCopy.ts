import type { Lang } from '@/lib/language';

/** Sitewide chrome + shared shells — English for SEO/SSR; Spanish when client toggle is ES. */
export const SITE_COPY = {
  en: {
    nav: {
      services: 'Services',
      servicesMenu: 'Services menu',
      viewAll: 'View all services →',
      extendedWarranty: 'Extended warranty',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'Home',
      allServices: 'All Services',
      call: 'Call',
      featured: 'Featured service',
      links: {
        '/about': 'About',
        '/pricing': 'Pricing',
        '/contact': 'Contact',
        '/areas-we-serve': 'Areas',
        '/vehicles-we-service': 'Vehicles',
        '/warranty': 'Extended Warranty',
      } as Record<string, string>,
      groups: {
        'Engine & Diagnostics': 'Engine & Diagnostics',
        'Drivetrain & Brakes': 'Drivetrain & Brakes',
        Maintenance: 'Maintenance',
        'Climate & Electrical': 'Climate & Electrical',
      } as Record<string, string>,
    },
    footer: {
      blurb:
        'ASE-certified auto repair on W Evans Ave — honest diagnostics, quality parts, 30+ years serving Englewood & Denver metro.',
      visit: 'Visit',
      explore: 'Explore',
      services: 'Services',
      connect: 'Connect & reviews',
      hours: {
        weekdays: 'Mon–Fri: 8:00 AM – 6:00 PM',
        saturday: 'Sat: 8:00 AM – 12:00 PM',
        sunday: 'Sun: Closed',
      },
      links: {
        '/': 'Home',
        '/about': 'About',
        '/pricing': 'Pricing',
        '/contact': 'Contact',
        '/warranty': 'Extended Warranty',
        '/areas-we-serve': 'Areas We Serve',
        '/vehicles-we-service': 'Vehicles We Service',
        '/englewood-co-auto-repair': 'Location',
        '/frequently-asked-questions': 'FAQ',
        '/services': 'All Services',
        '/privacy': 'Privacy Policy',
        '/terms': 'Terms of Service',
      } as Record<string, string>,
      websiteBy: 'Website built by',
      premiumDesign: 'Premium web design for Colorado businesses',
      rights: (year: number, name: string) =>
        `© ${year} ${name}. All rights reserved. · ASE Certified · Englewood, Colorado`,
    },
    floating: {
      callNow: 'Call Now',
      aria: (phone: string) => `Call ${phone}`,
    },
    pageHero: {
      contact: 'Contact',
    },
    pageCtas: {
      callNow: 'Call Now',
      bookAppointment: 'Book Appointment',
      getDiagnostic: 'Get Diagnostic',
      textUs: 'Text Us',
      getDirections: 'Get Directions',
    },
    reviewsChrome: {
      liveVerified: 'Live verified reviews',
      carouselLabel: 'Verified customer reviews',
      progressLabel: 'Review rotation progress',
      reviewOf: (n: number, total: number) => `Review ${n} of ${total}`,
      verifiedCount: (n: number) => `${n} verified`,
      previous: 'Previous review',
      next: 'Next review',
      slides: 'Review slides',
      showFrom: (author: string) => `Show review from ${author}`,
      stars: (rating: number) => `${rating} out of 5 stars`,
      readGoogle: 'Read our Google reviews',
      leaveGoogle: 'Leave a Google review',
      contactShop: 'Contact the shop',
    },
    areaGrid: {
      neighborhoods: 'Neighborhoods served',
      more: (n: number) => `+${n} more`,
      viewRepair: (city: string) => `View ${city} auto repair →`,
      descriptions: {
        'englewood-co':
          'Home base — our shop at 2120 W Evans Ave sits right in Englewood. Many customers walk or drive just a few minutes for brakes, diagnostics, and maintenance.',
        'denver-co':
          'South Denver and central Denver neighborhoods are a short drive up Broadway or Hampden to our Englewood bay — convenient for commuters who want dealer-quality work without dealer pricing.',
        'littleton-co':
          'Littleton drivers count on RKC for dependable maintenance and repair — a straight shot north on Broadway or Santa Fe to our W Evans Ave shop.',
        'sheridan-co':
          'Sheridan sits right next door to our shop — Fort Logan and Hampden Heights residents are often here in under 10 minutes.',
        'greenwood-village-co':
          'Greenwood Village professionals and families choose RKC for dealership-alternative service — honest estimates and expert work on every make.',
        'centennial-co':
          'Centennial commuters heading north on I-25 or Broadway find RKC an easy stop for brakes, batteries, and scheduled maintenance.',
        'lakewood-co':
          'Lakewood drivers west of Denver trust RKC for thorough diagnostics and fair pricing — worth the short trip to our Englewood bay.',
        'aurora-co':
          'South Aurora and east-metro drivers make the trip to RKC for work they can trust — real diagnostics, not code-only guesses.',
        'cherry-hills-village-co':
          "Cherry Hills Village residents appreciate RKC's professional, no-pressure approach — expert care for luxury and daily drivers alike.",
        'highlands-ranch-co':
          'Highlands Ranch is one of our busiest service areas — families and commuters head north on Broadway for maintenance they can count on.',
        'lone-tree-co':
          'Lone Tree and RidgeGate commuters use RKC for dependable service north on I-25 or Broadway — expert work without the dealership wait.',
        'glendale-co':
          "Glendale's Cherry Creek corridor is a quick hop to our Englewood shop — ideal for lunch-break oil changes and brake inspections.",
        'wheat-ridge-co':
          'Wheat Ridge drivers heading east on Alameda or Hampden find RKC a trusted alternative to chain shops — real technicians, real answers.',
        'morrison-co':
          'Morrison and Bear Creek canyon residents make the drive to RKC for service they trust — especially before mountain trips and winter seasons.',
        'bow-mar-co':
          "Bow Mar's quiet lakeside community is just minutes from our Englewood shop — convenient for scheduled maintenance and repairs.",
        'columbine-co':
          'Columbine and Columbine Valley neighbors are among our closest customers — a quick drive up Wadsworth or Broadway to W Evans Ave.',
        'arvada-co':
          'Arvada drivers on the west side of the metro choose RKC when they want thorough work and straight answers — not a sales pitch.',
        'parker-co':
          'Parker and Stonegate residents heading north on Parker Rd or I-25 rely on RKC for maintenance that keeps their commute worry-free.',
        'golden-co':
          'Golden and west-metro drivers visit RKC for dependable service before canyon drives and daily commutes into Denver.',
        'edgewater-co':
          "Edgewater's compact community is a quick trip south on Sheridan or Wadsworth to our Englewood bay.",
      } as Record<string, string>,
    },
    services: {
      'brake-repair-englewood-co': {
        name: 'Brake Repair',
        description: 'Pads, rotors, and complete brake system service.',
      },
      'engine-diagnostics-englewood-co': {
        name: 'Engine Diagnostics',
        description:
          'Advanced diagnostics for check-engine lights, drivability, diesel, and electrical issues.',
      },
      'engine-rebuilds-englewood-co': {
        name: 'Engine Rebuilds',
        description: 'Long-block and short-block rebuilding, machining, and blueprinting.',
      },
      'camshaft-lifter-repair-englewood-co': {
        name: 'Camshaft & Lifters',
        description: 'Camshaft, hydraulic lifter, and valvetrain repair for ticks and misfires.',
      },
      'transmission-services-englewood-co': {
        name: 'Transmission Services',
        description: 'Diagnostics, repairs, and fluid services.',
      },
      'suspension-steering-englewood-co': {
        name: 'Suspension & Steering',
        description: 'Smooth handling and confident ride quality.',
      },
      'heating-ac-englewood-co': {
        name: 'Heating & AC',
        description: 'Climate control diagnostics and repair.',
      },
      'electrical-system-englewood-co': {
        name: 'Electrical System',
        description: 'Wiring, starters, alternators, and more.',
      },
      'oil-changes-englewood-co': {
        name: 'Oil Changes',
        description: 'Conventional and synthetic oil service.',
      },
      'check-engine-light-englewood-co': {
        name: 'Check Engine Light',
        description: 'Diagnose and clear check-engine warnings.',
      },
      'battery-testing-englewood-co': {
        name: 'Battery Testing',
        description: 'Free testing and reliable replacements.',
      },
      'exhaust-system-englewood-co': {
        name: 'Exhaust System',
        description: 'Mufflers, exhaust repair, and emissions.',
      },
      'preventative-maintenance-englewood-co': {
        name: 'Preventative Maintenance',
        description: 'Stay ahead of problems with scheduled care.',
      },
    } as Record<string, { name: string; description: string }>,
    brand: {
      eyebrow: 'All makes & models',
      title: 'Expert diagnostics for every brand we work on',
      intro:
        'RKC Automotive in Englewood services Toyota, Ford, BMW, Subaru, and every major make on Colorado roads. Select a brand for hyper-specific failure profiles, buyer warnings, and local altitude context.',
      pickMake: 'Pick your make',
      tapBrand: 'Tap a brand below',
      ariaMakes: 'Vehicle makes',
      domestic: 'Domestic',
      import: 'Import',
      servicedAt: 'Serviced at RKC Englewood',
      diagnostics: 'Diagnostics',
      allInfo: (name: string) => `All ${name} info`,
      pickModel: (name: string) => `${name} — pick your model`,
      failureProfiles: 'Hyper-Specific Failure Profiles',
      buyerWarning: "Buyer's Warning: What to Avoid / Inspect Before Buying",
      coloradoNotes: 'Colorado Notes',
      scheduleDiagnostic: (name: string) => `Schedule ${name} Diagnostic`,
      call: (phone: string) => `Call ${phone}`,
      brandAria: (name: string) => `${name} brand diagnostics`,
      reliablePicks: 'Reliable picks to drive',
      higherScrutiny: 'Higher scrutiny',
      coloradoAngle: 'Colorado angle',
      selectModel: (name: string) => `Select your ${name} model`,
      tapModel: 'Tap a model for common issues and service links',
      viewModelServices: (brand: string, model: string) => `View ${brand} ${model} services`,
    },
    skipToContent: 'Skip to main content',
    serviceChrome: {
      trustPills: [
        { sub: 'posted labor rate' },
        { sub: 'certified techs' },
        { label: 'Written', sub: 'estimates first' },
        { label: 'Evans Ave', sub: 'Englewood shop' },
      ],
      realityCheck: 'Reality check',
      laborItems: [
        {
          title: 'Written estimates',
          detail: 'Scope, labor hours, and parts documented before work begins.',
        },
        {
          title: 'Book-time baseline',
          detail: 'AllData and Mitchell guides — not inflated hours padded into the quote.',
        },
        {
          title: 'Approval before repair',
          detail: 'We call with photos if inspection findings change the plan.',
        },
      ],
      faq: 'FAQ',
      finalCtaEyebrow: 'Evans Ave · Englewood',
      getDirections: 'Get directions',
      callPhone: (phone: string) => `Call ${phone}`,
      bookService: 'Book service',
      scheduleService: 'Schedule service',
    },
    shells: {
      about: {
        eyebrow: 'About',
        title: 'Thirty years. One Englewood bay. Zero upsell theatre.',
        description:
          'Trusted automotive services for every make, model, and year — ASE-certified repairs at $120/hr with straight answers, fair pricing, and Hablamos Español.',
        home: 'Home',
        crumb: 'About',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Answers before the wrench turns',
        description:
          'Straight talk on scheduling, pricing, warranties, and what to expect at RKC Automotive.',
        home: 'Home',
        crumb: 'FAQ',
      },
      areas: {
        eyebrow: 'Areas',
        title: 'Englewood hub. Metro reach.',
        description: (street: string, n: number) =>
          `Centered in Englewood at ${street}, RKC serves ${n} cities across the south Denver metro — with neighborhood-level coverage and ASE-certified auto repair.`,
        home: 'Home',
        crumb: 'Areas We Serve',
        sectionEyebrow: (n: number) => `${n} cities · 15–20 mile radius`,
        sectionTitle: 'Every neighborhood. One honest bay.',
        sectionIntro:
          'Click any city for neighborhood details, directions from your area, and why local drivers choose RKC over dealerships and chains.',
      },
      vehicles: {
        eyebrow: 'Vehicles',
        title: 'If it rolls into Englewood, we can help',
        description:
          'From daily drivers to classics and European imports — ASE-certified tools and experience for every vehicle.',
        home: 'Home',
        crumb: 'Vehicles We Service',
      },
      services: {
        eyebrow: 'Services',
        title: 'Every system. One Englewood shop.',
        description:
          'Engine rebuilds to oil changes — ASE-certified technicians, $120/hr posted labor, and written estimates before any wrench turns at 2120 W Evans Ave.',
        home: 'Home',
        crumb: 'Services',
      },
      pricing: {
        eyebrow: 'Pricing',
        title: 'Beat dealers on price and service.',
        description: (localRange: string, rate: string) =>
          `ASE-certified Englewood shop. Dealers charge $180–220/hr. National chains quote $140–160/hr in menu packages with shop fees — but rarely post a flat rate. Typical local shops often charge ${localRange} but rarely publish it online. We charge ${rate}, publish it here, and get you back on the road.`,
        home: 'Home',
        crumb: 'Pricing',
        getEstimate: 'Get estimate',
        trustStrip: [
          { label: 'Labor rate' },
          { label: 'ASE certified', value: '30+ years' },
          { label: 'Estimates', value: 'Written first' },
          { label: 'Hours', value: 'Mon–Fri 8–6' },
        ],
      },
      warranty: {
        eyebrow: 'Warranty advocacy · Englewood, CO',
        home: 'Home',
        crumb: 'Extended Warranty',
        startClaim: 'Start a claim',
        call: (phone: string) => `Call ${phone}`,
        trustSubs: {
          labor: 'posted labor rate',
          partners: 'warranty partners',
          ase: 'certified techs',
          shop: 'Englewood shop',
        },
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Reach the bay',
        description:
          "Call for same-day availability, or leave a message with your vehicle and symptoms — we'll follow up fast.",
        home: 'Home',
        crumb: 'Contact',
        connect: 'Connect & reviews',
        details: {
          phone: { label: 'Phone', note: 'Fastest way to schedule' },
          address: { label: 'Address', note: 'Walk-ins welcome' },
          hours: { label: 'Hours' },
          email: { label: 'Email', note: 'We reply as soon as we can' },
        },
      },
    },
    contactForm: {
      eyebrow: 'Message the bay',
      title: "Tell us what's going on",
      name: 'Full name *',
      phone: 'Phone *',
      email: 'Email',
      vehicle: 'Vehicle',
      service: 'Service needed',
      notSure: 'Not sure / general question',
      message: 'How can we help? *',
      messagePlaceholder: 'Describe the issue, warning lights, or service you need…',
      send: 'Send message',
      privacy:
        'By sending this message, you agree that RKC Automotive may use your contact details to respond to your request. See our',
      privacyLink: 'Privacy Policy',
      orCall: 'Or call',
      forScheduling: 'for same-day scheduling.',
      thankYou: 'Thank you',
      thankYouBody: 'Your email client should open shortly. Prefer to talk? Call',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      servicesMenu: 'Menú de servicios',
      viewAll: 'Ver todos los servicios →',
      extendedWarranty: 'Garantía extendida',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      home: 'Inicio',
      allServices: 'Todos los servicios',
      call: 'Llamar',
      featured: 'Servicio destacado',
      links: {
        '/about': 'Nosotros',
        '/pricing': 'Precios',
        '/contact': 'Contacto',
        '/areas-we-serve': 'Áreas',
        '/vehicles-we-service': 'Vehículos',
        '/warranty': 'Garantía extendida',
      } as Record<string, string>,
      groups: {
        'Engine & Diagnostics': 'Motor y diagnóstico',
        'Drivetrain & Brakes': 'Transmisión y frenos',
        Maintenance: 'Mantenimiento',
        'Climate & Electrical': 'Clima y eléctrico',
      } as Record<string, string>,
    },
    footer: {
      blurb:
        'Reparación automotriz certificada ASE en W Evans Ave — diagnóstico honesto, piezas de calidad, más de 30 años sirviendo Englewood y el área metro de Denver.',
      visit: 'Visítenos',
      explore: 'Explorar',
      services: 'Servicios',
      connect: 'Conectar y reseñas',
      hours: {
        weekdays: 'Lun–Vie: 8:00 AM – 6:00 PM',
        saturday: 'Sáb: 8:00 AM – 12:00 PM',
        sunday: 'Dom: Cerrado',
      },
      links: {
        '/': 'Inicio',
        '/about': 'Nosotros',
        '/pricing': 'Precios',
        '/contact': 'Contacto',
        '/warranty': 'Garantía extendida',
        '/areas-we-serve': 'Áreas que servimos',
        '/vehicles-we-service': 'Vehículos que atendemos',
        '/englewood-co-auto-repair': 'Ubicación',
        '/frequently-asked-questions': 'Preguntas frecuentes',
        '/services': 'Todos los servicios',
        '/privacy': 'Política de privacidad',
        '/terms': 'Términos de servicio',
      } as Record<string, string>,
      websiteBy: 'Sitio web creado por',
      premiumDesign: 'Diseño web premium para negocios de Colorado',
      rights: (year: number, name: string) =>
        `© ${year} ${name}. Todos los derechos reservados. · Certificado ASE · Englewood, Colorado`,
    },
    floating: {
      callNow: 'Llamar ahora',
      aria: (phone: string) => `Llamar ${phone}`,
    },
    pageHero: {
      contact: 'Contacto',
    },
    pageCtas: {
      callNow: 'Llamar ahora',
      bookAppointment: 'Agendar cita',
      getDiagnostic: 'Pedir diagnóstico',
      textUs: 'Enviar mensaje',
      getDirections: 'Cómo llegar',
    },
    reviewsChrome: {
      liveVerified: 'Reseñas verificadas en vivo',
      carouselLabel: 'Reseñas verificadas de clientes',
      progressLabel: 'Progreso de rotación de reseñas',
      reviewOf: (n: number, total: number) => `Reseña ${n} de ${total}`,
      verifiedCount: (n: number) => `${n} verificadas`,
      previous: 'Reseña anterior',
      next: 'Reseña siguiente',
      slides: 'Diapositivas de reseñas',
      showFrom: (author: string) => `Mostrar reseña de ${author}`,
      stars: (rating: number) => `${rating} de 5 estrellas`,
      readGoogle: 'Leer nuestras reseñas de Google',
      leaveGoogle: 'Dejar reseña en Google',
      contactShop: 'Contactar el taller',
    },
    areaGrid: {
      neighborhoods: 'Vecindarios atendidos',
      more: (n: number) => `+${n} más`,
      viewRepair: (city: string) => `Ver reparación automotriz en ${city} →`,
      descriptions: {
        'englewood-co':
          'Nuestra base — el taller en 2120 W Evans Ave está en Englewood. Muchos clientes caminan o manejan solo unos minutos para frenos, diagnóstico y mantenimiento.',
        'denver-co':
          'Los vecindarios del sur y centro de Denver están a un corto trayecto por Broadway o Hampden hasta nuestra bahía en Englewood — conveniente para quienes quieren trabajo de calidad de concesionario sin el precio de concesionario.',
        'littleton-co':
          'Los conductores de Littleton confían en RKC para mantenimiento y reparación confiables — un trayecto directo al norte por Broadway o Santa Fe hasta nuestro taller en W Evans Ave.',
        'sheridan-co':
          'Sheridan está justo al lado de nuestro taller — residentes de Fort Logan y Hampden Heights suelen llegar en menos de 10 minutos.',
        'greenwood-village-co':
          'Profesionales y familias de Greenwood Village eligen RKC como alternativa al concesionario — presupuestos honestos y trabajo experto en todas las marcas.',
        'centennial-co':
          'Los viajeros de Centennial hacia el norte por I-25 o Broadway encuentran en RKC una parada fácil para frenos, baterías y mantenimiento programado.',
        'lakewood-co':
          'Los conductores de Lakewood al oeste de Denver confían en RKC por diagnóstico completo y precios justos — vale el corto viaje a nuestra bahía en Englewood.',
        'aurora-co':
          'Conductores del sur de Aurora y el este del metro vienen a RKC por trabajo de confianza — diagnóstico real, no solo lectura de códigos.',
        'cherry-hills-village-co':
          'Residentes de Cherry Hills Village aprecian el enfoque profesional y sin presión de RKC — cuidado experto para vehículos de lujo y de uso diario.',
        'highlands-ranch-co':
          'Highlands Ranch es una de nuestras áreas más activas — familias y viajeros van al norte por Broadway por mantenimiento en el que pueden confiar.',
        'lone-tree-co':
          'Viajeros de Lone Tree y RidgeGate usan RKC para servicio confiable al norte por I-25 o Broadway — trabajo experto sin la espera del concesionario.',
        'glendale-co':
          'El corredor Cherry Creek de Glendale está a un salto corto de nuestro taller en Englewood — ideal para cambios de aceite en el almuerzo e inspecciones de frenos.',
        'wheat-ridge-co':
          'Conductores de Wheat Ridge hacia el este por Alameda o Hampden encuentran en RKC una alternativa confiable a las cadenas — técnicos reales, respuestas reales.',
        'morrison-co':
          'Residentes de Morrison y Bear Creek canyon vienen a RKC por servicio de confianza — especialmente antes de viajes a la montaña y la temporada de invierno.',
        'bow-mar-co':
          'La tranquila comunidad a orillas del lago de Bow Mar está a minutos de nuestro taller en Englewood — conveniente para mantenimiento y reparaciones programadas.',
        'columbine-co':
          'Vecinos de Columbine y Columbine Valley están entre nuestros clientes más cercanos — un trayecto corto por Wadsworth o Broadway hasta W Evans Ave.',
        'arvada-co':
          'Conductores de Arvada en el oeste del metro eligen RKC cuando quieren trabajo completo y respuestas claras — no un discurso de ventas.',
        'parker-co':
          'Residentes de Parker y Stonegate hacia el norte por Parker Rd o I-25 confían en RKC para mantenimiento que mantiene su viaje sin preocupaciones.',
        'golden-co':
          'Conductores de Golden y el oeste del metro visitan RKC por servicio confiable antes de manejar por cañones y viajes diarios a Denver.',
        'edgewater-co':
          'La comunidad compacta de Edgewater está a un viaje corto al sur por Sheridan o Wadsworth hasta nuestra bahía en Englewood.',
      } as Record<string, string>,
    },
    services: {
      'brake-repair-englewood-co': {
        name: 'Reparación de frenos',
        description: 'Pastillas, discos y servicio completo del sistema de frenos.',
      },
      'engine-diagnostics-englewood-co': {
        name: 'Diagnóstico de motor',
        description:
          'Diagnóstico avanzado para luz de check engine, manejo, diésel y problemas eléctricos.',
      },
      'engine-rebuilds-englewood-co': {
        name: 'Reconstrucción de motores',
        description: 'Reconstrucción de bloque largo y corto, maquinado y blueprinting.',
      },
      'camshaft-lifter-repair-englewood-co': {
        name: 'Árbol de levas y lifters',
        description: 'Reparación de árbol de levas, lifters hidráulicos y tren de válvulas por ticks y fallos de encendido.',
      },
      'transmission-services-englewood-co': {
        name: 'Servicios de transmisión',
        description: 'Diagnóstico, reparaciones y servicios de fluido.',
      },
      'suspension-steering-englewood-co': {
        name: 'Suspensión y dirección',
        description: 'Manejo suave y calidad de marcha confiable.',
      },
      'heating-ac-englewood-co': {
        name: 'Calefacción y A/C',
        description: 'Diagnóstico y reparación del control de clima.',
      },
      'electrical-system-englewood-co': {
        name: 'Sistema eléctrico',
        description: 'Cableado, arranques, alternadores y más.',
      },
      'oil-changes-englewood-co': {
        name: 'Cambios de aceite',
        description: 'Servicio de aceite convencional y sintético.',
      },
      'check-engine-light-englewood-co': {
        name: 'Luz de check engine',
        description: 'Diagnóstico y resolución de advertencias de check engine.',
      },
      'battery-testing-englewood-co': {
        name: 'Prueba de batería',
        description: 'Pruebas gratis y reemplazos confiables.',
      },
      'exhaust-system-englewood-co': {
        name: 'Sistema de escape',
        description: 'Mofles, reparación de escape y emisiones.',
      },
      'preventative-maintenance-englewood-co': {
        name: 'Mantenimiento preventivo',
        description: 'Anticípese a los problemas con cuidado programado.',
      },
    } as Record<string, { name: string; description: string }>,
    brand: {
      eyebrow: 'Todas las marcas y modelos',
      title: 'Diagnóstico experto para cada marca que atendemos',
      intro:
        'RKC Automotive en Englewood da servicio a Toyota, Ford, BMW, Subaru y todas las marcas principales en las carreteras de Colorado. Seleccione una marca para perfiles de fallas específicas, avisos al comprador y contexto de altitud local.',
      pickMake: 'Elija su marca',
      tapBrand: 'Toque una marca abajo',
      ariaMakes: 'Marcas de vehículos',
      domestic: 'Nacional',
      import: 'Importado',
      servicedAt: 'Servicio en RKC Englewood',
      diagnostics: 'Diagnóstico',
      allInfo: (name: string) => `Toda la info de ${name}`,
      pickModel: (name: string) => `${name} — elija su modelo`,
      failureProfiles: 'Perfiles de fallas hiper-específicos',
      buyerWarning: 'Aviso al comprador: qué evitar / inspeccionar antes de comprar',
      coloradoNotes: 'Notas de Colorado',
      scheduleDiagnostic: (name: string) => `Agendar diagnóstico ${name}`,
      call: (phone: string) => `Llamar ${phone}`,
      brandAria: (name: string) => `Diagnóstico de marca ${name}`,
      reliablePicks: 'Opciones confiables para manejar',
      higherScrutiny: 'Mayor escrutinio',
      coloradoAngle: 'Ángulo Colorado',
      selectModel: (name: string) => `Seleccione su modelo ${name}`,
      tapModel: 'Toque un modelo para fallas comunes y enlaces de servicio',
      viewModelServices: (brand: string, model: string) => `Ver servicios ${brand} ${model}`,
    },
    skipToContent: 'Saltar al contenido principal',
    serviceChrome: {
      trustPills: [
        { sub: 'tarifa de mano de obra publicada' },
        { sub: 'técnicos certificados' },
        { label: 'Por escrito', sub: 'presupuestos primero' },
        { label: 'Evans Ave', sub: 'taller en Englewood' },
      ],
      realityCheck: 'Chequeo de realidad',
      laborItems: [
        {
          title: 'Presupuestos por escrito',
          detail: 'Alcance, horas de mano de obra y piezas documentados antes de empezar.',
        },
        {
          title: 'Base de tiempo de libro',
          detail: 'Guías AllData y Mitchell — no horas infladas en el presupuesto.',
        },
        {
          title: 'Aprobación antes de reparar',
          detail: 'Llamamos con fotos si la inspección cambia el plan.',
        },
      ],
      faq: 'Preguntas frecuentes',
      finalCtaEyebrow: 'Evans Ave · Englewood',
      getDirections: 'Cómo llegar',
      callPhone: (phone: string) => `Llamar ${phone}`,
      bookService: 'Agendar servicio',
      scheduleService: 'Programar servicio',
    },
    shells: {
      about: {
        eyebrow: 'Nosotros',
        title: 'Treinta años. Una bahía en Englewood. Cero teatro de ventas.',
        description:
          'Servicios automotrices de confianza para toda marca, modelo y año — reparaciones certificadas ASE a $120/hr con respuestas claras, precios justos y Hablamos Español.',
        home: 'Inicio',
        crumb: 'Nosotros',
      },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        title: 'Respuestas antes de que gire la llave',
        description:
          'Charla directa sobre citas, precios, garantías y qué esperar en RKC Automotive.',
        home: 'Inicio',
        crumb: 'Preguntas frecuentes',
      },
      areas: {
        eyebrow: 'Áreas',
        title: 'Centro en Englewood. Alcance metro.',
        description: (street: string, n: number) =>
          `Desde Englewood en ${street}, RKC atiende ${n} ciudades del sur del área metro de Denver — con cobertura por vecindario y reparación certificada ASE.`,
        home: 'Inicio',
        crumb: 'Áreas que servimos',
        sectionEyebrow: (n: number) => `${n} ciudades · radio de 15–20 millas`,
        sectionTitle: 'Cada vecindario. Una bahía honesta.',
        sectionIntro:
          'Haga clic en cualquier ciudad para detalles del vecindario, direcciones desde su zona y por qué los conductores locales eligen RKC frente a concesionarios y cadenas.',
      },
      vehicles: {
        eyebrow: 'Vehículos',
        title: 'Si rueda hasta Englewood, podemos ayudar',
        description:
          'Desde autos diarios hasta clásicos e importados europeos — herramientas y experiencia certificadas ASE para cada vehículo.',
        home: 'Inicio',
        crumb: 'Vehículos que atendemos',
      },
      services: {
        eyebrow: 'Servicios',
        title: 'Cada sistema. Un taller en Englewood.',
        description:
          'De reconstrucciones de motor a cambios de aceite — técnicos certificados ASE, mano de obra a $120/hr publicada y presupuestos por escrito antes de tocar una herramienta en 2120 W Evans Ave.',
        home: 'Inicio',
        crumb: 'Servicios',
      },
      pricing: {
        eyebrow: 'Precios',
        title: 'Supere a los concesionarios en precio y servicio.',
        description: (localRange: string, rate: string) =>
          `Taller certificado ASE en Englewood. Los concesionarios cobran $180–220/hr. Las cadenas nacionales cotizan $140–160/hr en paquetes de menú con cargos de taller — pero rara vez publican una tarifa fija. Los talleres locales típicos suelen cobrar ${localRange} pero rara vez lo publican en línea. Cobramos ${rate}, lo publicamos aquí y lo devolvemos a la carretera.`,
        home: 'Inicio',
        crumb: 'Precios',
        getEstimate: 'Obtener presupuesto',
        trustStrip: [
          { label: 'Tarifa de mano de obra' },
          { label: 'Certificado ASE', value: 'Más de 30 años' },
          { label: 'Presupuestos', value: 'Por escrito primero' },
          { label: 'Horario', value: 'Lun–Vie 8–6' },
        ],
      },
      warranty: {
        eyebrow: 'Defensa de garantía · Englewood, CO',
        home: 'Inicio',
        crumb: 'Garantía extendida',
        startClaim: 'Iniciar un reclamo',
        call: (phone: string) => `Llamar ${phone}`,
        trustSubs: {
          labor: 'tarifa de mano de obra publicada',
          partners: 'socios de garantía',
          ase: 'técnicos certificados',
          shop: 'taller en Englewood',
        },
      },
      contact: {
        eyebrow: 'Contacto',
        title: 'Llegue al taller',
        description:
          'Llame para disponibilidad el mismo día, o deje un mensaje con su vehículo y síntomas — le responderemos rápido.',
        home: 'Inicio',
        crumb: 'Contacto',
        connect: 'Conectar y reseñas',
        details: {
          phone: { label: 'Teléfono', note: 'La forma más rápida de agendar' },
          address: { label: 'Dirección', note: 'Se aceptan visitas sin cita' },
          hours: { label: 'Horario' },
          email: { label: 'Correo', note: 'Respondemos lo antes posible' },
        },
      },
    },
    contactForm: {
      eyebrow: 'Mensaje al taller',
      title: 'Cuéntenos qué pasa',
      name: 'Nombre completo *',
      phone: 'Teléfono *',
      email: 'Correo',
      vehicle: 'Vehículo',
      service: 'Servicio necesario',
      notSure: 'No estoy seguro / pregunta general',
      message: '¿Cómo podemos ayudar? *',
      messagePlaceholder: 'Describa el problema, luces de advertencia o el servicio que necesita…',
      send: 'Enviar mensaje',
      privacy:
        'Al enviar este mensaje, acepta que RKC Automotive use sus datos de contacto para responder a su solicitud. Consulte nuestra',
      privacyLink: 'Política de privacidad',
      orCall: 'O llame al',
      forScheduling: 'para agendar el mismo día.',
      thankYou: 'Gracias',
      thankYouBody: 'Su cliente de correo debería abrirse en breve. ¿Prefiere hablar? Llame al',
    },
  },
} as const;

export type SiteShellKey = keyof typeof SITE_COPY.en.shells;

export function siteCopy(lang: Lang) {
  return SITE_COPY[lang];
}

export function localizedServiceName(slug: string, lang: Lang, fallback: string): string {
  return SITE_COPY[lang].services[slug]?.name ?? fallback;
}

export function localizedServiceDescription(slug: string, lang: Lang, fallback: string): string {
  return SITE_COPY[lang].services[slug]?.description ?? fallback;
}
