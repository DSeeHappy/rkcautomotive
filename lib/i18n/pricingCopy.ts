import type { Lang } from '@/lib/language';
import type { FAQItem } from '@/lib/constants';
import { LOCAL_SHOP_RATE_RANGE, LABOR_RATE, PRICING_PAGE_FAQ } from '@/lib/constants';

export const PRICING_COPY = {
  en: {
    compare: {
      eyebrow: 'Compare',
      title: 'Dealer vs chain vs local vs RKC',
      intro:
        'Same ASE-certified work. Different labor rates, different transparency. Here is what Englewood and Denver metro drivers typically pay — and whether you can see the rate before you call.',
      rateBar: [
        { label: 'Dealership', rate: '$180–220/hr' },
        { label: 'Chain shop', rate: '$140–160/hr' },
        { label: 'Typical local shop', rate: LOCAL_SHOP_RATE_RANGE },
        { label: 'RKC Automotive', rate: LABOR_RATE },
      ],
      yourShop: 'Your shop',
      tableCaption: 'Comparison of labor rates and service practices in Englewood, Colorado',
      disclaimer:
        'Typical labor rates and fees reported by Englewood and Denver metro drivers. Many local shops do not publish hourly rates online — actual charges vary by vehicle, brand, and shop.',
      rows: [
        { label: 'Labor rate', key: 'laborRate' as const },
        { label: 'Rate posted online', key: 'ratePosted' as const },
        { label: 'Diagnostic fee', key: 'diagnosticFee' as const },
        { label: 'Upselling', key: 'upselling' as const },
        { label: 'Turnaround', key: 'turnaround' as const },
        { label: 'Estimate', key: 'estimate' as const },
        { label: 'Shop fees', key: 'shopFees' as const },
        { label: 'Who works on your car', key: 'technicianContinuity' as const },
        { label: 'Weekday hours', key: 'weekdayHours' as const },
      ],
      shops: [
        {
          name: 'Dealership',
          laborRate: '$180–220/hr',
          ratePosted: 'Sometimes — often buried in fine print',
          diagnosticFee: '$150–250 (often non-refundable)',
          upselling: 'High — recommended services lists, fluid flushes, cabin filters',
          turnaround: '2–5 business days',
          estimate: 'Often itemized only after work starts',
          shopFees: 'Facilities & environmental fees common',
          technicianContinuity: 'Varies — advisor turnover, rotating techs',
          weekdayHours: 'Mon–Fri until 5–6 PM',
          highlight: false,
        },
        {
          name: 'Chain Shop',
          laborRate: '$140–160/hr',
          ratePosted: 'Menu & package pricing — ZIP code required, no flat hourly rate',
          diagnosticFee: 'Often "free" inspections — recommended add-ons follow',
          upselling: 'Heavy — coupons, bundles, fluid flushes, store credit offers',
          turnaround: 'Appointment queue — 1–3 days; walk-in waits common',
          estimate: 'Package pricing + 8–10% shop supply fee on labor',
          shopFees: '8–10% supply fee on labor (typical at national chains)',
          technicianContinuity: 'Rotating staff — high-volume, 1,000+ locations',
          weekdayHours: 'Mon–Sat until 6–7 PM; many open Sundays',
          highlight: false,
        },
        {
          name: 'Typical Local Shop',
          laborRate: `${LOCAL_SHOP_RATE_RANGE} — quote only`,
          ratePosted: 'Rarely — call or online form for pricing',
          diagnosticFee: 'Varies — quoted at intake',
          upselling: 'Varies — warranty and fleet upsells common',
          turnaround: 'Often 24–48 hrs to confirm appointment',
          estimate: 'Provided after callback or first visit',
          shopFees: 'Varies — some add supply or disposal fees',
          technicianContinuity: 'Often same owner-operator bay',
          weekdayHours: 'Mon–Fri until 5 PM typical',
          highlight: false,
        },
        {
          name: 'RKC Automotive',
          laborRate: LABOR_RATE,
          ratePosted: 'Yes — posted on this page and every estimate',
          diagnosticFee: 'From $99 — credited toward approved repair',
          upselling: 'None — fix what is broken, skip what is not',
          turnaround: 'Same-day when parts are available',
          estimate: 'Written estimate before any wrench turns',
          shopFees: 'None — posted rate is the rate',
          technicianContinuity: 'Same ASE-certified crew every visit',
          weekdayHours: 'Mon–Fri until 6 PM · Sat 8–12',
          highlight: true,
        },
      ],
    },
    why: {
      eyebrow: 'Why it matters',
      title: 'Transparency you can verify',
      intro: (rate: string) =>
        `Plenty of Front Range shops advertise honest pricing — then ask you to request a quote before sharing their hourly rate. RKC puts ${rate} on the page so you can compare the full estimate upfront.`,
    },
    math: {
      eyebrow: 'Real math',
      title: (rate: string) => `What ${rate} means for you`,
      intro:
        'Labor is where dealerships make their margin. Same job, same technician skill — different hourly rate. Here is what you actually save.',
      hoursLabor: (h: number) => `~${h} hr${h !== 1 ? 's' : ''} labor`,
      saveVs: (local: string, dealer: string) =>
        `Save ${local}+ vs. typical local shop · ${dealer}+ vs. dealer`,
      formulaTitle: 'The formula is simple:',
      formulaBody:
        'labor hours × hourly rate + parts. At RKC, the rate is always $120/hr. A 2-hour brake job is $240 in labor here — $310+ at a typical local shop and $360+ at a $180/hr dealer. Parts are quoted separately at every shop; we do not hide behind quote-only forms or bundled "starting at" prices.',
      scenarios: [
        {
          title: 'Brake pads & rotors (per axle)',
          hours: 2,
          note: 'Labor only — parts quoted separately at every shop. Same OEM-quality work, lower hourly rate.',
        },
        {
          title: 'Timing belt & water pump',
          hours: 4.5,
          note: 'Major service where dealer labor markup hurts most. RKC saves $270–$450 on labor alone.',
        },
        {
          title: 'A/C compressor replacement',
          hours: 3,
          note: 'Summer breakdowns do not need a $600+ labor bill. We charge for the hours the job actually takes.',
        },
        {
          title: 'Check-engine diagnostic',
          hours: 1,
          note: 'Our $99 diagnostic is applied to your repair. Dealers often charge $150–250 and keep it.',
        },
      ],
    },
    philosophy: {
      eyebrow: 'Our philosophy',
      title: 'Honest pricing. No overselling.',
      intro:
        'We are not the cheapest shop in Denver — we are the fair one. Lower overhead than a dealership, better technicians than a chain, and zero pressure to approve work you do not need.',
      getEstimate: 'Get a written estimate',
      requestQuote: 'Request quote online',
      items: [
        {
          title: 'One rate. Posted publicly.',
          description:
            'No menu of mystery packages. $120/hr is the rate — on this page, on your estimate, and on the final invoice.',
          icon: 'rate' as const,
        },
        {
          title: 'Quality parts, not the cheapest bin.',
          description:
            'We use OEM and reputable aftermarket parts matched to your vehicle — not whatever clears inventory first.',
          icon: 'shield' as const,
        },
        {
          title: 'Fix what is broken.',
          description:
            'We show you the problem, explain urgency, and skip the coupon-driven fluid flush you do not need.',
          icon: 'wrench' as const,
        },
        {
          title: 'Diagnostics that find the cause.',
          description:
            'Scan tools, smoke tests, and road tests — not a parts-cannon approach that guesses until something sticks.',
          icon: 'diagnostic' as const,
        },
        {
          title: 'Written estimates first.',
          description:
            'Nothing turns until you approve the scope. If inspection finds more, you get a change order — not a surprise bill.',
          icon: 'estimate' as const,
        },
        {
          title: 'ASE-certified skill without dealer markup.',
          description:
            'Dealership-level diagnostics and repair — the same ASE-certified skill other Front Range shops advertise — without the $180–220/hr dealer markup or the quote-only runaround.',
          icon: 'certified' as const,
        },
      ],
    },
    tiers: {
      eyebrow: 'Pricing',
      title: 'Starting prices, honest labor',
      intro: (rate: string) =>
        `Starting prices for common jobs — all at ${rate} labor. Labor time estimates shown so you can do the math yourself. Parts quoted separately where applicable.`,
      howTitle: 'How starting prices work:',
      disclaimer:
        'Starting prices assume typical conditions. Parts vary by vehicle, and we may find additional issues during inspection. If anything changes, you get a written change order before we proceed — no surprise charges.',
      footerBefore: "Final cost depends on parts and your vehicle's condition — we may find more issues once we're under the hood.",
      footerBold: 'You always get a written change order before we do additional work.',
      footerAfter: (rate: string) =>
        `Labor billed at ${rate}. Diagnostic fees applied toward approved repairs. Free multi-point inspection with any service — no upsell pressure.`,
      categories: [
        {
          category: 'Maintenance',
          items: [
            { service: 'Oil Change (Conventional)', price: 'From $49', note: 'Includes filter & multi-point inspection', laborEstimate: '~0.3 hrs labor' },
            { service: 'Oil Change (Synthetic)', price: 'From $79', note: 'Premium synthetic oil', laborEstimate: '~0.5 hrs labor' },
            { service: 'Tire Rotation', price: 'From $29', note: 'Extend tire life', laborEstimate: '~0.25 hrs labor' },
            { service: 'Multi-Point Inspection', price: 'Free', note: 'With any service — no upsell pressure' },
          ],
        },
        {
          category: 'Brakes & Safety',
          items: [
            { service: 'Brake Inspection', price: 'Free', note: 'Visual inspection — replace only if you approve' },
            { service: 'Brake Pad Replacement (per axle)', price: 'From $189', note: 'Pads + labor at $120/hr', laborEstimate: '~1.5 hrs = ~$180 labor + parts' },
            { service: 'Brake Pad + Rotor (per axle)', price: 'From $349', note: 'Pads, rotors + labor at $120/hr', laborEstimate: '~2 hrs = ~$240 labor + parts' },
            { service: 'Brake Fluid Flush', price: 'From $99', note: 'Fresh fluid for responsive braking', laborEstimate: '~0.75 hrs labor' },
          ],
        },
        {
          category: 'Diagnostics & Electrical',
          items: [
            { service: 'Check Engine Light Diagnostic', price: 'From $99', note: 'Applied toward repair if approved', laborEstimate: '~1 hr at $120/hr' },
            { service: 'Battery Test', price: 'Free', note: 'Quick health check' },
            { service: 'Battery Replacement', price: 'From $149', note: 'Labor at $120/hr + battery cost', laborEstimate: '~0.5 hrs labor + battery' },
            { service: 'Electrical Diagnostic', price: 'From $129', note: 'Wiring & component testing', laborEstimate: '~1–1.5 hrs at $120/hr' },
          ],
        },
        {
          category: 'Fluids & Filters',
          items: [
            { service: 'Coolant Flush', price: 'From $129', note: 'Protect your engine', laborEstimate: '~1 hr labor + fluid' },
            { service: 'Transmission Fluid Service', price: 'From $179', note: 'Extend transmission life', laborEstimate: '~1.5 hrs labor + fluid' },
            { service: 'Cabin Air Filter', price: 'From $39', note: 'Cleaner air inside', laborEstimate: '~0.2 hrs labor' },
            { service: 'Engine Air Filter', price: 'From $29', note: 'Better fuel economy', laborEstimate: '~0.2 hrs labor' },
          ],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Pricing questions',
      intro: 'Straight answers about our $120/hr rate — no fine print.',
      items: [] as FAQItem[],
    },
    cta: {
      title: 'Ready for a straight answer?',
      body: (rate: string) =>
        `Tell us what is going on with your vehicle. We will give you an honest estimate at ${rate} — no upsell, no runaround. ASE certified, 30+ years in Englewood.`,
      getEstimate: 'Get estimate',
      contact: 'Contact',
    },
  },
  es: {
    compare: {
      eyebrow: 'Comparar',
      title: 'Concesionario vs cadena vs local vs RKC',
      intro:
        'El mismo trabajo certificado ASE. Distintas tarifas de mano de obra, distinta transparencia. Esto es lo que suelen pagar los conductores de Englewood y el área metro de Denver — y si puede ver la tarifa antes de llamar.',
      rateBar: [
        { label: 'Concesionario', rate: '$180–220/hr' },
        { label: 'Cadena', rate: '$140–160/hr' },
        { label: 'Taller local típico', rate: LOCAL_SHOP_RATE_RANGE },
        { label: 'RKC Automotive', rate: LABOR_RATE },
      ],
      yourShop: 'Su taller',
      tableCaption: 'Comparación de tarifas de mano de obra y prácticas de servicio en Englewood, Colorado',
      disclaimer:
        'Tarifas y cargos típicos reportados por conductores de Englewood y el área metro de Denver. Muchos talleres locales no publican tarifas por hora en línea — los cargos reales varían según vehículo, marca y taller.',
      rows: [
        { label: 'Tarifa de mano de obra', key: 'laborRate' as const },
        { label: 'Tarifa publicada en línea', key: 'ratePosted' as const },
        { label: 'Tarifa de diagnóstico', key: 'diagnosticFee' as const },
        { label: 'Ventas adicionales', key: 'upselling' as const },
        { label: 'Tiempo de entrega', key: 'turnaround' as const },
        { label: 'Presupuesto', key: 'estimate' as const },
        { label: 'Cargos de taller', key: 'shopFees' as const },
        { label: 'Quién trabaja en su auto', key: 'technicianContinuity' as const },
        { label: 'Horario entre semana', key: 'weekdayHours' as const },
      ],
      shops: [
        {
          name: 'Concesionario',
          laborRate: '$180–220/hr',
          ratePosted: 'A veces — a menudo en letra pequeña',
          diagnosticFee: '$150–250 (a menudo no reembolsable)',
          upselling: 'Alto — listas de servicios recomendados, lavados de fluidos, filtros de cabina',
          turnaround: '2–5 días hábiles',
          estimate: 'A menudo detallado solo después de empezar',
          shopFees: 'Cargos de instalaciones y ambientales comunes',
          technicianContinuity: 'Varía — rotación de asesores y técnicos',
          weekdayHours: 'Lun–Vie hasta 5–6 PM',
          highlight: false,
        },
        {
          name: 'Cadena',
          laborRate: '$140–160/hr',
          ratePosted: 'Precios de menú y paquetes — requiere ZIP, sin tarifa fija por hora',
          diagnosticFee: 'A menudo inspecciones "gratis" — luego extras recomendados',
          upselling: 'Fuerte — cupones, paquetes, lavados de fluidos, crédito de tienda',
          turnaround: 'Cola de citas — 1–3 días; esperas sin cita comunes',
          estimate: 'Precio de paquete + 8–10% cargo de suministros sobre mano de obra',
          shopFees: '8–10% cargo de suministros sobre mano de obra (típico en cadenas)',
          technicianContinuity: 'Personal rotativo — alto volumen, 1,000+ ubicaciones',
          weekdayHours: 'Lun–Sáb hasta 6–7 PM; muchos abiertos domingos',
          highlight: false,
        },
        {
          name: 'Taller local típico',
          laborRate: `${LOCAL_SHOP_RATE_RANGE} — solo cotización`,
          ratePosted: 'Rara vez — llame o formulario en línea para precios',
          diagnosticFee: 'Varía — se cotiza al ingreso',
          upselling: 'Varía — extras de garantía y flotillas comunes',
          turnaround: 'A menudo 24–48 hrs para confirmar cita',
          estimate: 'Después de devolución de llamada o primera visita',
          shopFees: 'Varía — algunos agregan cargos de suministro o disposición',
          technicianContinuity: 'A menudo el mismo dueño-operador',
          weekdayHours: 'Lun–Vie hasta 5 PM típico',
          highlight: false,
        },
        {
          name: 'RKC Automotive',
          laborRate: LABOR_RATE,
          ratePosted: 'Sí — publicada en esta página y en cada presupuesto',
          diagnosticFee: 'Desde $99 — se acredita a la reparación aprobada',
          upselling: 'Ninguna — reparamos lo roto, omitimos lo demás',
          turnaround: 'El mismo día cuando hay piezas',
          estimate: 'Presupuesto por escrito antes de tocar una herramienta',
          shopFees: 'Ninguno — la tarifa publicada es la tarifa',
          technicianContinuity: 'El mismo equipo certificado ASE en cada visita',
          weekdayHours: 'Lun–Vie hasta 6 PM · Sáb 8–12',
          highlight: true,
        },
      ],
    },
    why: {
      eyebrow: 'Por qué importa',
      title: 'Transparencia que puede verificar',
      intro: (rate: string) =>
        `Muchos talleres del Front Range anuncian precios honestos — y luego piden una cotización antes de compartir su tarifa por hora. RKC pone ${rate} en la página para que compare el presupuesto completo de antemano.`,
    },
    math: {
      eyebrow: 'Matemática real',
      title: (rate: string) => `Qué significa ${rate} para usted`,
      intro:
        'La mano de obra es donde los concesionarios hacen su margen. El mismo trabajo, la misma habilidad — distinta tarifa por hora. Esto es lo que realmente ahorra.',
      hoursLabor: (h: number) => `~${h} hr${h !== 1 ? 's' : ''} de mano de obra`,
      saveVs: (local: string, dealer: string) =>
        `Ahorre ${local}+ vs. taller local típico · ${dealer}+ vs. concesionario`,
      formulaTitle: 'La fórmula es simple:',
      formulaBody:
        'horas de mano de obra × tarifa por hora + piezas. En RKC, la tarifa siempre es $120/hr. Un trabajo de frenos de 2 horas es $240 de mano de obra aquí — $310+ en un taller local típico y $360+ en un concesionario a $180/hr. Las piezas se cotizan por separado en todo taller; no nos escondemos detrás de formularios de solo cotización ni precios "desde".',
      scenarios: [
        {
          title: 'Pastillas y rotores (por eje)',
          hours: 2,
          note: 'Solo mano de obra — las piezas se cotizan por separado en todo taller. El mismo trabajo de calidad OEM, menor tarifa por hora.',
        },
        {
          title: 'Correa de distribución y bomba de agua',
          hours: 4.5,
          note: 'Servicio mayor donde el sobrecargo de concesionario duele más. RKC ahorra $270–$450 solo en mano de obra.',
        },
        {
          title: 'Reemplazo de compresor de A/C',
          hours: 3,
          note: 'Las fallas de verano no necesitan una factura de mano de obra de $600+. Cobramos por las horas que el trabajo realmente toma.',
        },
        {
          title: 'Diagnóstico de check engine',
          hours: 1,
          note: 'Nuestro diagnóstico de $99 se aplica a su reparación. Los concesionarios suelen cobrar $150–250 y quedárselo.',
        },
      ],
    },
    philosophy: {
      eyebrow: 'Nuestra filosofía',
      title: 'Precios honestos. Sin ventas excesivas.',
      intro:
        'No somos el taller más barato de Denver — somos el justo. Menos costos fijos que un concesionario, mejores técnicos que una cadena, y cero presión para aprobar trabajo que no necesita.',
      getEstimate: 'Obtener presupuesto por escrito',
      requestQuote: 'Solicitar cotización en línea',
      items: [
        {
          title: 'Una tarifa. Publicada.',
          description:
            'Sin menús de paquetes misteriosos. $120/hr es la tarifa — en esta página, en su presupuesto y en la factura final.',
          icon: 'rate' as const,
        },
        {
          title: 'Piezas de calidad, no el contenedor más barato.',
          description:
            'Usamos piezas OEM y de posventa reputadas según su vehículo — no lo que primero salga del inventario.',
          icon: 'shield' as const,
        },
        {
          title: 'Reparar lo que está roto.',
          description:
            'Le mostramos el problema, explicamos la urgencia y omitimos el lavado de fluidos impulsado por cupones que no necesita.',
          icon: 'wrench' as const,
        },
        {
          title: 'Diagnóstico que encuentra la causa.',
          description:
            'Escáneres, pruebas de humo y pruebas de manejo — no un enfoque de adivinar piezas hasta que algo funcione.',
          icon: 'diagnostic' as const,
        },
        {
          title: 'Presupuestos por escrito primero.',
          description:
            'Nada se mueve hasta que apruebe el alcance. Si la inspección encuentra más, recibe una orden de cambio — no una factura sorpresa.',
          icon: 'estimate' as const,
        },
        {
          title: 'Habilidad ASE sin recargo de concesionario.',
          description:
            'Diagnóstico y reparación a nivel de concesionario — la misma habilidad certificada ASE que anuncian otros talleres del Front Range — sin el recargo de $180–220/hr ni el juego de solo cotizar.',
          icon: 'certified' as const,
        },
      ],
    },
    tiers: {
      eyebrow: 'Precios',
      title: 'Precios iniciales, mano de obra honesta',
      intro: (rate: string) =>
        `Precios iniciales para trabajos comunes — todos a ${rate} de mano de obra. Estimaciones de tiempo mostradas para que haga la matemática usted mismo. Piezas cotizadas por separado cuando aplique.`,
      howTitle: 'Cómo funcionan los precios iniciales:',
      disclaimer:
        'Los precios iniciales asumen condiciones típicas. Las piezas varían según el vehículo, y podemos encontrar problemas adicionales en la inspección. Si algo cambia, recibe una orden de cambio por escrito antes de continuar — sin cargos sorpresa.',
      footerBefore:
        'El costo final depende de las piezas y del estado de su vehículo — podemos encontrar más problemas una vez bajo el capó.',
      footerBold: 'Siempre recibe una orden de cambio por escrito antes de trabajo adicional.',
      footerAfter: (rate: string) =>
        `Mano de obra a ${rate}. Tarifas de diagnóstico aplicadas a reparaciones aprobadas. Inspección multipunto gratis con cualquier servicio — sin presión de venta.`,
      categories: [
        {
          category: 'Mantenimiento',
          items: [
            { service: 'Cambio de aceite (convencional)', price: 'Desde $49', note: 'Incluye filtro e inspección multipunto', laborEstimate: '~0.3 hrs mano de obra' },
            { service: 'Cambio de aceite (sintético)', price: 'Desde $79', note: 'Aceite sintético premium', laborEstimate: '~0.5 hrs mano de obra' },
            { service: 'Rotación de llantas', price: 'Desde $29', note: 'Extienda la vida de las llantas', laborEstimate: '~0.25 hrs mano de obra' },
            { service: 'Inspección multipunto', price: 'Gratis', note: 'Con cualquier servicio — sin presión de venta' },
          ],
        },
        {
          category: 'Frenos y seguridad',
          items: [
            { service: 'Inspección de frenos', price: 'Gratis', note: 'Inspección visual — reemplazo solo si aprueba' },
            { service: 'Pastillas de freno (por eje)', price: 'Desde $189', note: 'Pastillas + mano de obra a $120/hr', laborEstimate: '~1.5 hrs = ~$180 mano de obra + piezas' },
            { service: 'Pastillas + rotores (por eje)', price: 'Desde $349', note: 'Pastillas, rotores + mano de obra a $120/hr', laborEstimate: '~2 hrs = ~$240 mano de obra + piezas' },
            { service: 'Lavado de líquido de frenos', price: 'Desde $99', note: 'Líquido fresco para frenado responsivo', laborEstimate: '~0.75 hrs mano de obra' },
          ],
        },
        {
          category: 'Diagnóstico y eléctrico',
          items: [
            { service: 'Diagnóstico de luz check engine', price: 'Desde $99', note: 'Se aplica a la reparación si se aprueba', laborEstimate: '~1 hr a $120/hr' },
            { service: 'Prueba de batería', price: 'Gratis', note: 'Revisión rápida de salud' },
            { service: 'Reemplazo de batería', price: 'Desde $149', note: 'Mano de obra a $120/hr + costo de batería', laborEstimate: '~0.5 hrs mano de obra + batería' },
            { service: 'Diagnóstico eléctrico', price: 'Desde $129', note: 'Prueba de cableado y componentes', laborEstimate: '~1–1.5 hrs a $120/hr' },
          ],
        },
        {
          category: 'Fluidos y filtros',
          items: [
            { service: 'Lavado de refrigerante', price: 'Desde $129', note: 'Proteja su motor', laborEstimate: '~1 hr mano de obra + fluido' },
            { service: 'Servicio de fluido de transmisión', price: 'Desde $179', note: 'Extienda la vida de la transmisión', laborEstimate: '~1.5 hrs mano de obra + fluido' },
            { service: 'Filtro de aire de cabina', price: 'Desde $39', note: 'Aire más limpio adentro', laborEstimate: '~0.2 hrs mano de obra' },
            { service: 'Filtro de aire del motor', price: 'Desde $29', note: 'Mejor economía de combustible', laborEstimate: '~0.2 hrs mano de obra' },
          ],
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Preguntas sobre precios',
      intro: 'Respuestas claras sobre nuestra tarifa de $120/hr — sin letra pequeña.',
      items: [
        {
          question: '¿Por qué no ir al taller más barato?',
          answer:
            'El taller más barato a menudo recorta en piezas, omite el diagnóstico real o infla la factura en otro lado. A $120/hr, RKC está por debajo de concesionarios y la mayoría de cadenas usando piezas de calidad y técnicos certificados ASE. Paga menos por hora por el mismo calibre de trabajo — no un trabajo recortado.',
        },
        {
          question: '¿Igualan cupones de concesionario o cadena?',
          answer:
            'Los cupones de concesionario y cadenas nacionales suelen ocultar una tarifa de mano de obra más alta, exigir servicios empaquetados o agregar cargos de suministros. Nuestros $120/hr son la tarifa — todos los días, en cada trabajo, sin matemática de cupones. Compare el presupuesto completo: horas × tarifa + piezas. A menudo supera el "especial" sin la letra pequeña.',
        },
        {
          question: '¿En qué se diferencia RKC de una cadena nacional?',
          answer:
            'Las cadenas nacionales anuncian precios de paquete y cupones acumulables, pero las tarifas varían por código postal y a menudo incluyen un cargo de suministros del 8–10%. Puede esperar en cola y ver un técnico distinto cada visita. RKC es una bahía en Englewood con el mismo equipo, $120/hr publicados en línea, órdenes de cambio por escrito si cambia el alcance, y sin presión para aprobar lavados de fluidos o extras que no necesita.',
        },
        {
          question: '¿$120/hr es realmente todo?',
          answer:
            'Sí — $120/hr cubre la mano de obra del técnico. Las piezas se cotizan por separado a costo-plus, igual que en cualquier taller. Sin cargos ocultos, sin "paquetes de servicio" obligatorios, sin doble cobro de diagnóstico cuando aprueba la reparación. Lo que cotizamos es lo que paga.',
        },
        {
          question: '¿Cómo sé que no me están vendiendo de más?',
          answer:
            'Le mostramos lo que encontramos, explicamos qué es urgente vs. qué puede esperar, y usted decide. Su presupuesto por escrito es el alcance — nada se agrega sin su OK. Ese es el punto de publicar nuestra tarifa.',
        },
        {
          question: '¿Por qué otros talleres de Englewood no muestran su tarifa?',
          answer: `La mayoría de talleres independientes del área metro de Denver cobran ${LOCAL_SHOP_RATE_RANGE} cuando revelan una tarifa — pero muchos solo cotizan después de una llamada o formulario. Publicar $120/hr le permite hacer la matemática: horas × tarifa + piezas. Sin esperar una devolución de llamada para comparar.`,
        },
        {
          question: '¿Trabajan con garantías extendidas o cuentas de flotilla?',
          answer:
            'Sí — damos servicio a vehículos personales, camiones de flotilla y diésel a diario, y podemos ayudar con reclamos de garantía extendida de terceros cuando aplica la cobertura. Sigue recibiendo nuestra tarifa publicada de $120/hr y un presupuesto por escrito antes de cualquier trabajo.',
        },
      ] as FAQItem[],
    },
    cta: {
      title: '¿Listo para una respuesta directa?',
      body: (rate: string) =>
        `Cuéntenos qué pasa con su vehículo. Le daremos un presupuesto honesto a ${rate} — sin ventas extras ni rodeos. Certificados ASE, más de 30 años en Englewood.`,
      getEstimate: 'Obtener presupuesto',
      contact: 'Contacto',
    },
  },
} as const;

export function pricingCopy(lang: Lang) {
  if (lang === 'en') {
    return {
      ...PRICING_COPY.en,
      faq: { ...PRICING_COPY.en.faq, items: PRICING_PAGE_FAQ },
    };
  }
  return PRICING_COPY.es;
}
