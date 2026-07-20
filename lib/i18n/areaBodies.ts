import type { Lang } from '@/lib/language';

export type AreaBodyCopy = {
  description: string;
  directions: string;
  whyChoose: string[];
  localParagraphs: string[];
};

/** City page body fields — ES via Bifrost ds (vllm/smart / vllm/research). SEO meta stays English. */
export const AREA_BODIES: Record<string, { en: AreaBodyCopy; es: AreaBodyCopy }> = {
  "englewood-co": {
    "en": {
      "description": "Home base — our shop at 2120 W Evans Ave sits right in Englewood. Many customers walk or drive just a few minutes for brakes, diagnostics, and maintenance.",
      "directions": "We are at 2120 W Evans Ave near S Broadway and Hampden. Take Broadway south from Denver or Hampden west from I-25.",
      "whyChoose": [
        "Your neighborhood shop — no highway trek for routine service",
        "Same-day appointments when bays are open",
        "30+ years serving Englewood drivers",
        "Written estimates before any repair begins"
      ],
      "localParagraphs": [
        "Downtown Englewood, Arapahoe Acres, and the Hampden corridor are all within a few minutes of our bay — many customers drop off on the way to work along S Broadway.",
        "If you live near Belleview Park or Broken Arrow, you can walk in for oil changes and brake checks when bays are open, or call ahead for same-day diagnostics."
      ]
    },
    "es": {
      "description": "Sede principal: nuestro taller en 2120 W Evans Ave está ubicado en Englewood. Muchos clientes llegan caminando o en auto en solo unos minutos para servicios de frenos, diagnóstico y mantenimiento.",
      "directions": "Estamos en 2120 W Evans Ave, cerca de S Broadway y Hampden. Tome Broadway hacia el sur desde Denver o Hampden hacia el oeste desde la I-25.",
      "whyChoose": [
        "Su taller de barrio — no necesita recorrer la autopista para un servicio rutinario",
        "Citas el mismo día cuando hay espacios disponibles",
        "Más de 30 años atendiendo a los conductores de Englewood",
        "Estimaciones por escrito antes de que comience cualquier reparación"
      ],
      "localParagraphs": [
        "El centro de Englewood, Arapahoe Acres y el corredor Hampden están a pocos minutos de nuestro taller; muchos clientes dejan su vehículo de camino al trabajo por la S Broadway.",
        "Si vive cerca de Belleview Park o Broken Arrow, puede acudir para cambios de aceite y revisiones de frenos cuando haya espacios disponibles, o llame por adelantado para obtener diagnósticos el mismo día."
      ]
    }
  },
  "denver-co": {
    "en": {
      "description": "South Denver and central Denver neighborhoods are a short drive up Broadway or Hampden to our Englewood bay — convenient for commuters who want dealer-quality work without dealer pricing.",
      "directions": "From south Denver, take S Broadway south or Hampden Ave west to W Evans Ave. Most south-side neighborhoods reach us in under 15 minutes.",
      "whyChoose": [
        "Easy access from Wash Park, Capitol Hill, Five Points, and University Hills",
        "Honest diagnostics — we find the root cause, not just the code",
        "All makes and models, domestic and import",
        "Hablamos Español — bilingual service team"
      ],
      "localParagraphs": [
        "Drivers from Wash Park, Platt Park, and University Hills often reach us in under 15 minutes via S Broadway or Hampden — faster than fighting traffic to a dealer on the north side.",
        "Capitol Hill, Five Points, and RiNo commuters use RKC when they want a second opinion on check-engine codes without the dealership markup."
      ]
    },
    "es": {
      "description": "Los barrios del sur y el centro de Denver están a un corto trayecto en auto por Broadway o Hampden hasta nuestra sucursal en Englewood, lo cual es conveniente para los conductores que buscan trabajo de calidad de agencia sin los precios de la agencia.",
      "directions": "Desde el sur de Denver, tome S Broadway hacia el sur o Hampden Ave hacia el oeste hasta W Evans Ave. La mayoría de los vecindarios del lado sur llegan hasta nosotros en menos de 15 minutos.",
      "whyChoose": [
        "Acceso fácil desde Wash Park, Capitol Hill, Five Points y University Hills",
        "Diagnósticos honestos: encontramos la causa raíz, no solo el código",
        "Todas las marcas y modelos, nacionales e importados",
        "Hablamos Español — equipo de servicio bilingüe"
      ],
      "localParagraphs": [
        "Los conductores de Wash Park, Platt Park y University Hills suelen llegar en menos de 15 minutos por S Broadway o Hampden — más rápido que enfrentar el tráfico hacia un concesionario al norte.",
        "Los conductores de Capitol Hill, Five Points y RiNo acuden a RKC cuando desean una segunda opinión sobre los códigos de la luz del motor, sin el sobreprecio de la agencia."
      ]
    }
  },
  "littleton-co": {
    "en": {
      "description": "Littleton drivers count on RKC for dependable maintenance and repair — a straight shot north on Broadway or Santa Fe to our W Evans Ave shop.",
      "directions": "From downtown Littleton, head north on S Santa Fe Dr or S Broadway to W Evans Ave in Englewood. Typical drive is 12–18 minutes.",
      "whyChoose": [
        "Trusted by Littleton families for preventative maintenance",
        "Brake, transmission, and AC specialists on staff",
        "Free multi-point inspection with most services",
        "Transparent pricing — no surprise line items"
      ],
      "localParagraphs": [
        "Historic Main Street and Grant Ranch residents head north on Santa Fe or Broadway — our W Evans Ave shop is a straight shot from most Littleton neighborhoods.",
        "Ken Caryl and Columbine Hills families trust RKC for multi-vehicle maintenance because we explain every line on the estimate before work starts."
      ]
    },
    "es": {
      "description": "Los conductores de Littleton confían en RKC para mantenimiento y reparación confiables: un trayecto directo hacia el norte por Broadway o Santa Fe hasta nuestro taller en W Evans Ave.",
      "directions": "Desde el centro de Littleton, diríjase hacia el norte por S Santa Fe Dr o S Broadway hasta W Evans Ave en Englewood. El tiempo de conducción típico es de 12 a 18 minutos.",
      "whyChoose": [
        "Confiable para las familias de Littleton en mantenimiento preventivo",
        "Especialistas en frenos, transmisión y aire acondicionado en el personal",
        "Inspección gratuita de múltiples puntos con la mayoría de los servicios",
        "Precios transparentes — sin cargos sorpresa"
      ],
      "localParagraphs": [
        "Los residentes de Historic Main Street y Grant Ranch se dirigen al norte por Santa Fe o Broadway — nuestro taller en W Evans Ave está a un trayecto directo desde la mayoría de los barrios de Littleton.",
        "Las familias de Ken Caryl y Columbine Hills confían en RKC para el mantenimiento de múltiples vehículos porque explicamos cada línea de la estimación antes de que comience el trabajo."
      ]
    }
  },
  "sheridan-co": {
    "en": {
      "description": "Sheridan sits right next door to our shop — Fort Logan and Hampden Heights residents are often here in under 10 minutes.",
      "directions": "From Sheridan, take Hampden Ave or Federal Blvd north to W Evans Ave. Our shop is minutes from the Sheridan city limits.",
      "whyChoose": [
        "Closest independent shop for many Sheridan neighborhoods",
        "Quick turnaround on oil changes and brake work",
        "ASE-certified technicians",
        "Walk-ins welcome — call ahead for faster service"
      ],
      "localParagraphs": [
        "Fort Logan and Hampden Heights are among our closest customers — many Sheridan drivers are here in under 10 minutes for brakes and oil changes.",
        "If you commute along Sheridan Boulevard or Federal, our shop is an easy stop before or after work on W Evans Ave."
      ]
    },
    "es": {
      "description": "Sheridan está justo al lado de nuestro taller. Los residentes de Fort Logan y Hampden Heights suelen llegar en menos de 10 minutos.",
      "directions": "Desde Sheridan, tome Hampden Ave o Federal Blvd hacia el norte hasta W Evans Ave. Nuestro taller está a minutos de los límites de la ciudad de Sheridan.",
      "whyChoose": [
        "La tienda independiente más cercana para muchos barrios de Sheridan",
        "Rápida entrega en cambios de aceite y trabajo de frenos",
        "técnicos certificados por ASE",
        "Se aceptan visitas sin cita; llame con anticipación para un servicio más rápido"
      ],
      "localParagraphs": [
        "Fort Logan y Hampden Heights están entre nuestros clientes más cercanos; muchos conductores de Sheridan llegan aquí en menos de 10 minutos para servicio de frenos y cambio de aceite.",
        "Si usted se desplaza por la Avenida Sheridan o Federal, nuestro taller es una parada fácil antes o después del trabajo en la Avenida W Evans."
      ]
    }
  },
  "greenwood-village-co": {
    "en": {
      "description": "Greenwood Village professionals and families choose RKC for dealership-alternative service — honest estimates and expert work on every make.",
      "directions": "From Greenwood Village, take I-25 north to Hampden Ave west, or take Belleview east to Broadway south. About 10–15 minutes to our shop.",
      "whyChoose": [
        "Convenient for DTC and Orchard Hills commuters",
        "European and luxury vehicle experience",
        "Written estimates before any repair",
        "Same-day service available for many jobs"
      ],
      "localParagraphs": [
        "Denver Tech Center and Orchard Hills professionals choose RKC for European and luxury vehicles — we diagnose root causes, not just dashboard codes.",
        "Belleview and Happy Canyon residents can take Belleview east to Broadway south or I-25 to Hampden west — both routes reach our bay in about 15 minutes."
      ]
    },
    "es": {
      "description": "Los profesionales y familias de Greenwood Village eligen a RKC para un servicio alternativo al concesionario: estimaciones honestas y trabajo experto en todas las marcas.",
      "directions": "Desde Greenwood Village, tome la interestatal I-25 hacia el norte hasta la avenida Hampden en dirección oeste, o tome la avenida Belleview hacia el este hasta la avenida Broadway en dirección sur. El trayecto hasta nuestro taller toma aproximadamente 10 a 15 minutos.",
      "whyChoose": [
        "Cómodo para los conductores de DTC y Orchard Hills",
        "Experiencia en vehículos europeos y de lujo",
        "Estimaciones por escrito antes de cualquier reparación",
        "Servicio el mismo día disponible para muchos trabajos"
      ],
      "localParagraphs": [
        "Los profesionales de Denver Tech Center y Orchard Hills confían en RKC para vehículos europeos y de lujo: diagnosticamos las causas raíz, no solo los códigos del tablero.",
        "Los residentes de Belleview y Happy Canyon pueden tomar Belleview hacia el este hasta Broadway hacia el sur o la I-25 hacia Hampden hacia el oeste; ambas rutas lo llevan a nuestra tienda en aproximadamente 15 minutos."
      ]
    }
  },
  "centennial-co": {
    "en": {
      "description": "Centennial commuters heading north on I-25 or Broadway find RKC an easy stop for brakes, batteries, and scheduled maintenance.",
      "directions": "From Southglenn or Willow Creek, take S Broadway north or I-25 north to Hampden west. Plan 15–20 minutes depending on traffic.",
      "whyChoose": [
        "Reliable maintenance for Centennial daily drivers",
        "Check-engine light diagnosis from $99",
        "Quality parts with warranty coverage explained upfront",
        "Locally owned — not a national chain"
      ],
      "localParagraphs": [
        "Southglenn and Willow Creek commuters heading north on Broadway pass our Englewood shop daily — ideal for scheduled maintenance before the I-25 merge.",
        "Fox Ridge and Piney Creek families count on RKC for check-engine diagnostics and transmission fluid service without the dealership wait."
      ]
    },
    "es": {
      "description": "Los conductores de Centennial que viajan hacia el norte por la carretera I-25 o Broadway encuentran en RKC una parada fácil para frenos, baterías y mantenimiento programado.",
      "directions": "Desde Southglenn o Willow Creek, tome S Broadway hacia el norte o I-25 hacia el norte hasta Hampden hacia el oeste. Planifique 15–20 minutos dependiendo del tráfico.",
      "whyChoose": [
        "Mantenimiento confiable para vehículos de uso diario en Centennial",
        "Diagnóstico de la luz de verificación del motor desde $99",
        "Piezas de calidad con cobertura de garantía explicada de manera clara desde el inicio",
        "Propiedad local, no una cadena nacional"
      ],
      "localParagraphs": [
        "Los conductores de Southglenn y Willow Creek que se dirigen hacia el norte por Broadway pasan diariamente por nuestro taller en Englewood, lo cual es ideal para el mantenimiento programado antes de incorporarse a la carretera I-25.",
        "Las familias de Fox Ridge y Piney Creek confían en RKC para diagnósticos de la luz de verificación del motor y servicio de fluido de transmisión sin la espera de la agencia."
      ]
    }
  },
  "lakewood-co": {
    "en": {
      "description": "Lakewood drivers west of Denver trust RKC for thorough diagnostics and fair pricing — worth the short trip to our Englewood bay.",
      "directions": "From Belmar or Green Mountain, take W Alameda or Hampden Ave east toward Englewood. W Evans Ave is just off Hampden near Broadway.",
      "whyChoose": [
        "Full-service shop for Lakewood import and domestic vehicles",
        "Suspension, steering, and alignment expertise",
        "Comfortable waiting area or convenient drop-off",
        "30+ years of metro Denver experience"
      ],
      "localParagraphs": [
        "Belmar and Green Mountain drivers take Hampden or Alameda east to W Evans — worth the trip when you want ASE-certified work and a posted labor rate.",
        "Bear Creek and Kendrick Lake residents choose RKC for suspension, steering, and alignment work that chain shops often refer out."
      ]
    },
    "es": {
      "description": "Los conductores de Lakewood, al oeste de Denver, confían en RKC para diagnósticos exhaustivos y precios justos, lo que hace que el breve viaje a nuestro taller en Englewood valga la pena.",
      "directions": "Desde Belmar o Green Mountain, tome W Alameda o Hampden Ave hacia el este en dirección a Englewood. W Evans Ave está justo al lado de Hampden cerca de Broadway.",
      "whyChoose": [
        "Taller de servicio completo para vehículos importados y nacionales en Lakewood",
        "Experiencia en suspensión, dirección y alineación",
        "Área de espera cómoda o entrega conveniente",
        "Más de 30 años de experiencia en el área metropolitana de Denver"
      ],
      "localParagraphs": [
        "Los conductores de Belmar y Green Mountain tomen Hampden o Alameda hacia el este hasta W Evans — vale la pena el viaje cuando buscan un trabajo certificado por ASE y una tarifa de mano de obra publicada.",
        "Los residentes de Bear Creek y Kendrick Lake eligen a RKC para trabajos de suspensión, dirección y alineación, servicios que las cadenas de talleres suelen subcontratar."
      ]
    }
  },
  "aurora-co": {
    "en": {
      "description": "South Aurora and east-metro drivers make the trip to RKC for work they can trust — real diagnostics, not code-only guesses.",
      "directions": "From south Aurora, take I-225 north to I-25 north, exit Hampden west to W Evans. Alternatively, take Iliff or Mississippi west to Santa Fe north.",
      "whyChoose": [
        "Worth the drive for honest second opinions",
        "Emissions and exhaust repair for Colorado inspections",
        "Transmission fluid service and diagnostics",
        "Bilingual team — Hablamos Español"
      ],
      "localParagraphs": [
        "Southlands, Saddle Rock, and Heather Ridge drivers make the trip for honest second opinions — we test and verify before recommending parts.",
        "Before Colorado emissions season, Aurora customers visit for exhaust, catalytic converter, and OBD diagnostics with written estimates upfront."
      ]
    },
    "es": {
      "description": "Los conductores de South Aurora y del este del metro viajan a RKC para recibir un trabajo en el que pueden confiar: diagnósticos reales, no suposiciones basadas únicamente en códigos.",
      "directions": "Desde el sur de Aurora, tome la I-225 hacia el norte hasta la I-25 hacia el norte, salga en Hampden hacia el oeste para llegar a W Evans. Alternativamente, tome Iliff o Mississippi hacia el oeste y luego Santa Fe hacia el norte.",
      "whyChoose": [
        "Vale la pena el viaje para obtener segundas opiniones honestas",
        "Reparación de emisiones y escape para inspecciones en Colorado",
        "Servicio y diagnóstico de fluido de transmisión",
        "Equipo bilingüe — Hablamos Español"
      ],
      "localParagraphs": [
        "Los conductores de Southlands, Saddle Rock y Heather Ridge realizan el viaje para obtener segundas opiniones honestas: nosotros realizamos pruebas y verificaciones antes de recomendar piezas.",
        "Antes de la temporada de emisiones en Colorado, los clientes de Aurora visitan para realizar diagnósticos de escape, convertidor catalítico y OBD, con estimados por escrito de antemano."
      ]
    }
  },
  "cherry-hills-village-co": {
    "en": {
      "description": "Cherry Hills Village residents appreciate RKC's professional, no-pressure approach — expert care for luxury and daily drivers alike.",
      "directions": "From Cherry Hills Village, take Hampden Ave west or University Blvd north to Hampden, then west to W Evans Ave. About 10–12 minutes.",
      "whyChoose": [
        "Experienced with European and premium vehicles",
        "Discreet, professional service",
        "Written estimates — no upsell pressure",
        "Preventative maintenance programs"
      ],
      "localParagraphs": [
        "Cherry Hills Country Club and Gallup Gardens residents appreciate our no-pressure approach — professional service for premium and daily drivers alike.",
        "We are minutes from Quincy Ave and the Greenwood Village border via Hampden or University — convenient for preventative maintenance between seasons."
      ]
    },
    "es": {
      "description": "Los residentes de Cherry Hills Village aprecian el enfoque profesional y sin presión de RKC: atención experta tanto para vehículos de lujo como para los de uso diario.",
      "directions": "Desde Cherry Hills Village, tome Hampden Ave hacia el oeste o University Blvd hacia el norte hasta Hampden, luego hacia el oeste hasta W Evans Ave. Aproximadamente 10–12 minutos.",
      "whyChoose": [
        "Experiencia con vehículos europeos y de gama alta",
        "Servicio discreto y profesional",
        "Presupuestos por escrito — sin presión para vender más",
        "Programas de mantenimiento preventivo"
      ],
      "localParagraphs": [
        "Los residentes de Cherry Hills Country Club y Gallup Gardens aprecian nuestro enfoque sin presión — servicio profesional tanto para vehículos premium como de uso diario.",
        "Estamos a minutos de la Avenida Quincy y de la frontera de Greenwood Village, por la Hampden o la University — convenientes para el mantenimiento preventivo entre temporadas."
      ]
    }
  },
  "highlands-ranch-co": {
    "en": {
      "description": "Highlands Ranch is one of our busiest service areas — families and commuters head north on Broadway for maintenance they can count on.",
      "directions": "From Highlands Ranch Town Center, take S Broadway north directly to W Evans Ave in Englewood. Typical drive is 15–20 minutes.",
      "whyChoose": [
        "Popular with Highlands Ranch families for oil changes and brakes",
        "Multi-vehicle fleet discounts available — ask when you call",
        "Same-day slots when available",
        "All major makes serviced"
      ],
      "localParagraphs": [
        "Northridge, Backcountry, and Town Center families are regulars for oil changes and brake work — Broadway north is the most direct route to our bay.",
        "Wildcat Reserve and Eastridge commuters often schedule morning drop-offs and pick up after work thanks to our Englewood location."
      ]
    },
    "es": {
      "description": "Highlands Ranch es una de nuestras áreas de servicio más concurridas: las familias y los conductores que se desplazan hacia el norte por Broadway buscan un mantenimiento en el que puedan confiar.",
      "directions": "Desde el Centro de la Ciudad de Highlands Ranch, tome S Broadway hacia el norte directamente hasta W Evans Ave en Englewood. El tiempo de conducción típico es de 15 a 20 minutos.",
      "whyChoose": [
        "Popular entre las familias de Highlands Ranch por cambios de aceite y frenos",
        "Descuentos disponibles para flotas de múltiples vehículos — consulte al llamar",
        "Turnos el mismo día cuando estén disponibles",
        "Se atienden todas las marcas principales"
      ],
      "localParagraphs": [
        "Las familias de Northridge, Backcountry y Town Center son clientes habituales para cambios de aceite y trabajo de frenos: Broadway norte es la ruta más directa hacia nuestro taller.",
        "Los conductores que se desplazan entre Wildcat Reserve y Eastridge suelen dejar sus vehículos por la mañana y recogerlos después del trabajo gracias a nuestra ubicación en Englewood."
      ]
    }
  },
  "lone-tree-co": {
    "en": {
      "description": "Lone Tree and RidgeGate commuters use RKC for dependable service north on I-25 or Broadway — expert work without the dealership wait.",
      "directions": "From Lone Tree, take I-25 north to Hampden Ave west, or take S Broadway north through Centennial to W Evans Ave.",
      "whyChoose": [
        "Convenient for RidgeGate and Park Meadows area workers",
        "Quick oil change and inspection appointments",
        "Engine and transmission diagnostics",
        "Fair pricing with written estimates"
      ],
      "localParagraphs": [
        "RidgeGate and Heritage Hills residents use I-25 north to Hampden or Broadway through Centennial — both routes reach RKC in about 15 minutes.",
        "Park Meadows and Lincoln Station workers stop in for quick oil changes and battery testing during lunch breaks when slots are open."
      ]
    },
    "es": {
      "description": "Los conductores de Lone Tree y RidgeGate confían en RKC para un servicio confiable al norte por la I-25 o Broadway: trabajo experto sin la espera de la agencia.",
      "directions": "Desde Lone Tree, tome la I-25 hacia el norte hasta la Avenida Hampden en dirección oeste, o tome la S Broadway hacia el norte a través de Centennial hasta la Avenida W Evans.",
      "whyChoose": [
        "Conveniente para trabajadores de las áreas de RidgeGate y Park Meadows",
        "Citas rápidas para cambio de aceite e inspección",
        "Diagnóstico de motor y transmisión",
        "Precios justos con estimaciones por escrito"
      ],
      "localParagraphs": [
        "Los residentes de RidgeGate y Heritage Hills utilizan la I-25 hacia el norte hasta Hampden o Broadway a través de Centennial; ambas rutas llegan a RKC en aproximadamente 15 minutos.",
        "Los trabajadores de Park Meadows y Lincoln Station se detienen para cambios de aceite rápidos y pruebas de batería durante sus descansos de almuerzo, cuando hay espacios disponibles."
      ]
    }
  },
  "glendale-co": {
    "en": {
      "description": "Glendale's Cherry Creek corridor is a quick hop to our Englewood shop — ideal for lunch-break oil changes and brake inspections.",
      "directions": "From Glendale, take Colorado Blvd south to Hampden Ave west, or take Leetsdale Dr west to Broadway south.",
      "whyChoose": [
        "Fast access from Cherry Creek and Colorado Blvd",
        "Same-day brake and battery service",
        "AC and heating diagnostics",
        "Locally owned Englewood shop"
      ],
      "localParagraphs": [
        "Cherry Creek corridor and Colorado Blvd drivers are 10 minutes from our shop — popular for brake inspections and AC diagnostics.",
        "Village East and Creekside residents take Leetsdale west to Broadway south for full-service repair without crossing downtown."
      ]
    },
    "es": {
      "description": "El corredor Cherry Creek de Glendale está a un corto trayecto de nuestra tienda en Englewood, ideal para cambios de aceite e inspecciones de frenos durante el almuerzo.",
      "directions": "Desde Glendale, tome Colorado Blvd hacia el sur hasta Hampden Ave hacia el oeste, o tome Leetsdale Dr hacia el oeste hasta Broadway hacia el sur.",
      "whyChoose": [
        "Acceso rápido desde Cherry Creek y Colorado Blvd",
        "Servicio de frenos y baterías el mismo día",
        "Diagnóstico de aire acondicionado y calefacción",
        "Taller local en Englewood"
      ],
      "localParagraphs": [
        "Los conductores del corredor de Cherry Creek y de la Avenida Colorado están a 10 minutos de nuestro taller, un lugar popular para inspecciones de frenos y diagnósticos del aire acondicionado.",
        "Los residentes de Village East y Creekside toman Leetsdale hacia el oeste hasta Broadway hacia el sur para reparaciones completas sin cruzar el centro."
      ]
    }
  },
  "wheat-ridge-co": {
    "en": {
      "description": "Wheat Ridge drivers heading east on Alameda or Hampden find RKC a trusted alternative to chain shops — real technicians, real answers.",
      "directions": "From Wheat Ridge, take W 38th Ave or W Alameda Ave east to S Wadsworth Blvd south to Hampden Ave east to W Evans.",
      "whyChoose": [
        "Honest alternative to quick-lube chains",
        "Coolant flushes and Colorado winter prep",
        "Electrical and charging system diagnostics",
        "ASE-certified team"
      ],
      "localParagraphs": [
        "Applewood and Prospect Park drivers heading east on 38th or Alameda choose RKC over quick-lube chains for coolant flushes and winter prep.",
        "Crown Hill and Ranchland residents trust our electrical and charging system diagnostics before long commutes across the metro."
      ]
    },
    "es": {
      "description": "Los conductores de Wheat Ridge que se dirigen hacia el este por Alameda o Hampden encuentran en RKC una alternativa confiable a las cadenas de talleres: técnicos reales y respuestas reales.",
      "directions": "Desde Wheat Ridge, tome W 38th Ave o W Alameda Ave hacia el este hasta S Wadsworth Blvd hacia el sur, luego Hampden Ave hacia el este hasta W Evans.",
      "whyChoose": [
        "Alternativa honesta a las cadenas de cambio rápido de aceite",
        "Purgas de anticongelante y preparación para el invierno en Colorado",
        "Diagnóstico de sistemas eléctricos y de carga",
        "equipo certificado por ASE"
      ],
      "localParagraphs": [
        "Los conductores de Applewood y Prospect Park que se dirigen hacia el este por la 38th o Alameda, elijan RKC en lugar de las cadenas de servicio rápido para los lavados de anticongelante y la preparación para el invierno.",
        "Los residentes de Crown Hill y Ranchland confían en nuestros diagnósticos del sistema eléctrico y de carga antes de sus largos viajes por la zona metropolitana."
      ]
    }
  },
  "morrison-co": {
    "en": {
      "description": "Morrison and Bear Creek canyon residents make the drive to RKC for service they trust — especially before mountain trips and winter seasons.",
      "directions": "From Morrison, take Bear Creek Ave or Hampden Ave (Hwy 285) east to S Wadsworth Blvd north to Hampden east to W Evans.",
      "whyChoose": [
        "Pre-trip inspections for mountain driving",
        "Brake and suspension work for canyon roads",
        "Battery testing before winter",
        "Trusted by west-metro commuters"
      ],
      "localParagraphs": [
        "Red Rocks and Bear Creek canyon drivers visit before mountain trips for brake, suspension, and pre-trip inspections.",
        "Mount Vernon Country Club and downtown Morrison residents take Hwy 285 east to Wadsworth — plan extra time on concert nights but routine service is quick."
      ]
    },
    "es": {
      "description": "Los residentes de Morrison y del cañón de Bear Creek recorren la distancia hasta RKC para recibir el servicio en el que confían, especialmente antes de los viajes a la montaña y durante la temporada invernal.",
      "directions": "Desde Morrison, tome Bear Creek Ave o Hampden Ave (Hwy 285) hacia el este hasta S Wadsworth Blvd, luego hacia el norte hasta Hampden, y después hacia el este hasta W Evans.",
      "whyChoose": [
        "Inspecciones previas al viaje para conducción en montaña",
        "Trabajo de frenos y suspensión para carreteras de montaña",
        "Prueba de baterías antes del invierno",
        "Confiado por los viajeros del oeste del metro"
      ],
      "localParagraphs": [
        "Los conductores de Red Rocks y el cañón de Bear Creek nos visitan antes de sus viajes de montaña para inspecciones de frenos, suspensión y revisión previa al viaje.",
        "Los residentes de Mount Vernon Country Club y del centro de Morrison toman la Hwy 285 hacia el este hasta Wadsworth — planifique tiempo extra en noches de conciertos, pero el servicio de rutina es rápido."
      ]
    }
  },
  "bow-mar-co": {
    "en": {
      "description": "Bow Mar's quiet lakeside community is just minutes from our Englewood shop — convenient for scheduled maintenance and repairs.",
      "directions": "From Bow Mar, take S Wadsworth Blvd or S Broadway north to W Evans Ave. Most Bow Mar residents reach us in under 10 minutes.",
      "whyChoose": [
        "Neighborhood-close independent shop",
        "Scheduled maintenance reminders",
        "Quality oil changes and fluid services",
        "No high-pressure sales tactics"
      ],
      "localParagraphs": [
        "Bow Mar Lake and Bow Mar South homeowners are often here in under 10 minutes via Wadsworth or Broadway — one of our closest service areas.",
        "Grant Ranch border residents use RKC for scheduled maintenance without high-pressure upsells common at national chains."
      ]
    },
    "es": {
      "description": "La tranquila comunidad junto al lago de Bow Mar está a solo minutos de nuestro taller en Englewood, CO — conveniente para el mantenimiento y las reparaciones programadas.",
      "directions": "Desde Bow Mar, tome la S Wadsworth Blvd o S Broadway hacia el norte hasta W Evans Ave. La mayoría de los residentes de Bow Mar llegan a nosotros en menos de 10 minutos.",
      "whyChoose": [
        "Taller independiente cercano a la vecindad",
        "Recordatorios de mantenimiento programado",
        "Cambios de aceite y servicios de fluidos de calidad",
        "Sin tácticas de venta agresivas"
      ],
      "localParagraphs": [
        "Los residentes de Bow Mar Lake y Bow Mar South suelen llegar en menos de 10 minutos por Wadsworth o Broadway, una de nuestras áreas de servicio más cercanas.",
        "Los residentes del borde de Grant Ranch utilizan RKC para el mantenimiento programado sin las ventas agresivas comunes en las cadenas nacionales."
      ]
    }
  },
  "columbine-co": {
    "en": {
      "description": "Columbine and Columbine Valley neighbors are among our closest customers — a quick drive up Wadsworth or Broadway to W Evans Ave.",
      "directions": "From Columbine, take S Wadsworth Blvd or S Pierce St north to W Evans Ave. Under 10 minutes from most Columbine neighborhoods.",
      "whyChoose": [
        "One of the closest full-service shops to Columbine",
        "Trusted for brakes, tires, and suspension",
        "Family-friendly service",
        "30+ years in the south metro"
      ],
      "localParagraphs": [
        "Columbine Valley and Columbine Knolls neighbors are minutes away on Wadsworth or Pierce — many are repeat customers for brakes and tires.",
        "Ken Caryl border drivers choose RKC for family fleet maintenance because we post $120/hr online and explain every repair in writing."
      ]
    },
    "es": {
      "description": "Los vecinos de Columbine y Columbine Valley están entre nuestros clientes más cercanos: un breve trayecto por Wadsworth o Broadway hasta W Evans Ave.",
      "directions": "Desde Columbine, tome S Wadsworth Blvd o S Pierce St hacia el norte hasta W Evans Ave. Menos de 10 minutos desde la mayoría de los barrios de Columbine.",
      "whyChoose": [
        "Uno de los talleres de servicio completo más cercanos a Columbine",
        "Confianza en frenos, llantas y suspensión",
        "Servicio amigable para la familia",
        "más de 30 años en el sur del metro"
      ],
      "localParagraphs": [
        "Los vecinos de Columbine Valley y Columbine Knolls están a solo minutos de distancia por Wadsworth o Pierce; muchos son clientes recurrentes para frenos y llantas.",
        "Los conductores de la frontera de Ken Caryl eligen a RKC para el mantenimiento de su flota familiar porque publicamos $120/hora en línea y explicamos cada reparación por escrito."
      ]
    }
  },
  "arvada-co": {
    "en": {
      "description": "Arvada drivers on the west side of the metro choose RKC when they want thorough work and straight answers — not a sales pitch.",
      "directions": "From Olde Town Arvada, take W 58th Ave or W Colfax Ave east to Wadsworth Blvd south to Hampden Ave east to W Evans.",
      "whyChoose": [
        "Full diagnostic capabilities",
        "Exhaust and emissions repair",
        "Competitive pricing vs. Arvada dealerships",
        "Written estimates on every job"
      ],
      "localParagraphs": [
        "Olde Town Arvada and Ralston Valley drivers head east on Colfax or 58th to Wadsworth south — a reliable alternative to franchise shops.",
        "Candelas and Leyden Rock west-side commuters visit when they want thorough diagnostics on imports and domestic daily drivers."
      ]
    },
    "es": {
      "description": "Los conductores de Arvada en el lado oeste del área metropolitana eligen a RKC cuando buscan un trabajo minucioso y respuestas directas, no una venta agresiva.",
      "directions": "Desde Olde Town Arvada, tome W 58th Ave o W Colfax Ave hacia el este hasta Wadsworth Blvd, luego hacia el sur hasta Hampden Ave, y finalmente hacia el este hasta W Evans.",
      "whyChoose": [
        "Capacidades completas de diagnóstico",
        "Reparación de sistemas de escape y emisiones",
        "Precios competitivos en comparación con los concesionarios de Arvada",
        "Presupuestos por escrito para cada trabajo"
      ],
      "localParagraphs": [
        "Los conductores de Olde Town Arvada y Ralston Valley diríjanse hacia el este por Colfax o la calle 58th hasta Wadsworth al sur, una alternativa confiable a los talleres de franquicias.",
        "Los conductores de Candelas y Leyden Rock, del lado oeste, acuden cuando desean diagnósticos exhaustivos para vehículos importados y de uso diario."
      ]
    }
  },
  "parker-co": {
    "en": {
      "description": "Parker and Stonegate residents heading north on Parker Rd or I-25 rely on RKC for maintenance that keeps their commute worry-free.",
      "directions": "From Parker, take Parker Rd north to E-470 west to I-25 north to Hampden west, or take S Parker Rd to Arapahoe Rd west to I-25.",
      "whyChoose": [
        "Trusted by south-metro commuters",
        "Transmission and engine diagnostics",
        "Preventative maintenance packages",
        "Quality parts and labor"
      ],
      "localParagraphs": [
        "Stonegate and The Pinery families drive north on Parker Rd or I-25 to our Englewood bay for transmission and engine diagnostics.",
        "Stroh Ranch and Meridian Village residents schedule preventative maintenance before school-year commutes intensify."
      ]
    },
    "es": {
      "description": "Los residentes de Parker y Stonegate que viajan hacia el norte por la carretera Parker o la interestatal 25 confían en RKC para el mantenimiento que mantiene su trayecto sin preocupaciones.",
      "directions": "Desde Parker, tome Parker Rd hacia el norte hasta E-470, luego hacia el oeste hasta I-25 hacia el norte hasta Hampden hacia el oeste, o tome S Parker Rd hacia Arapahoe Rd hacia el oeste hasta I-25.",
      "whyChoose": [
        "Confiado por los viajeros del sur de la metrópoli",
        "Diagnóstico de transmisión y motor",
        "Paquetes de mantenimiento preventivo",
        "Piezas y mano de obra de calidad"
      ],
      "localParagraphs": [
        "Las familias de Stonegate y The Pinery se dirigen al norte por Parker Rd o la I-25 hasta nuestro taller en Englewood para diagnósticos de transmisión y motor.",
        "Los residentes de Stroh Ranch y Meridian Village programan el mantenimiento preventivo antes de que se intensifiquen los desplazamientos al inicio del año escolar."
      ]
    }
  },
  "golden-co": {
    "en": {
      "description": "Golden and west-metro drivers visit RKC for dependable service before canyon drives and daily commutes into Denver.",
      "directions": "From downtown Golden, take W Colfax Ave or 6th Ave east to S Wadsworth Blvd south to Hampden Ave east to W Evans.",
      "whyChoose": [
        "Pre-canyon trip safety inspections",
        "Brake and tire expertise for mountain roads",
        "Honest, experienced technicians",
        "All makes and models"
      ],
      "localParagraphs": [
        "Downtown Golden and Coal Creek drivers take 6th or Colfax east to Wadsworth — RKC is a trusted stop before canyon and mountain driving.",
        "North Golden and Golden Gate Canyon commuters visit for brake and battery work before winter weather hits Lookout Mountain routes."
      ]
    },
    "es": {
      "description": "Los conductores de Golden y del oeste del metro visitan RKC para recibir un servicio confiable antes de sus viajes por las cañadas y sus desplazamientos diarios hacia Denver.",
      "directions": "Desde el centro de Golden, tome W Colfax Ave o 6th Ave hacia el este hasta S Wadsworth Blvd, luego hacia el sur hasta Hampden Ave, y finalmente hacia el este hasta W Evans.",
      "whyChoose": [
        "Inspecciones de seguridad previas al viaje por el cañón",
        "Experiencia en frenos y llantas para carreteras de montaña",
        "Técnicos honestos y experimentados",
        "Todas las marcas y modelos"
      ],
      "localParagraphs": [
        "Los conductores del centro de Golden y Coal Creek toman la 6th o Colfax hacia el este hasta Wadsworth — RKC es una parada confiable antes de conducir por cañadas y montaña.",
        "Los viajeros de North Golden y Golden Gate Canyon visitan para trabajo de frenos y batería antes de que el clima invernal afecte las rutas de Lookout Mountain."
      ]
    }
  },
  "edgewater-co": {
    "en": {
      "description": "Edgewater's compact community is a quick trip south on Sheridan or Wadsworth to our Englewood bay.",
      "directions": "From Edgewater, take Sheridan Blvd or W 20th Ave south to Hampden Ave west to W Evans Ave.",
      "whyChoose": [
        "Close alternative to Sloans Lake area shops",
        "Oil changes and brake service",
        "Electrical diagnostics",
        "Fair, transparent pricing"
      ],
      "localParagraphs": [
        "Sloans Lake border and 20th Ave corridor residents cross into Englewood in about 15 minutes via Sheridan or Alameda to Hampden.",
        "Edgewater drivers near Jefferson Park choose RKC for honest check-engine diagnostics without the Colfax quick-lube rush."
      ]
    },
    "es": {
      "description": "La comunidad compacta de Edgewater está a un corto recorrido hacia el sur por Sheridan o Wadsworth hasta nuestra sucursal en Englewood.",
      "directions": "Desde Edgewater, tome Sheridan Blvd o W 20th Ave hacia el sur hasta Hampden Ave, luego diríjase hacia el oeste hasta W Evans Ave.",
      "whyChoose": [
        "Alternativa cercana a los talleres de la zona de Sloans Lake",
        "Cambio de aceite y servicio de frenos",
        "Diagnóstico eléctrico",
        "Precios justos y transparentes"
      ],
      "localParagraphs": [
        "Los residentes del borde de Sloans Lake y del corredor de la Avenida 20 cruzan a Englewood en aproximadamente 15 minutos por Sheridan o Alameda hasta Hampden.",
        "Los conductores de Edgewater cerca de Jefferson Park eligen a RKC para diagnósticos honestos del motor, sin la prisa de los cambios de aceite rápidos en Colfax."
      ]
    }
  }
};

export function areaBodyCopy(slug: string, lang: Lang): AreaBodyCopy | null {
  const entry = AREA_BODIES[slug];
  if (!entry) return null;
  return entry[lang] ?? entry.en;
}
