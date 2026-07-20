import type { Lang } from '@/lib/language';

/** Service page body copy — ES via Bifrost Spark vllm/smart (smart-spark). */
export const OIL_CHANGES_BODY = {
  en: {
  "breadcrumb": "Oil Changes",
  "hero": {
    "imageAlt": "Oil Changes at RKC Automotive Englewood CO",
    "eyebrow": "Maintenance · Englewood, CO",
    "title": "Professional Oil Change Service in Englewood, CO",
    "description": "Conventional, full synthetic, and high-mileage oil changes with OEM-spec filters, torque-to-spec drain plugs, and a multi-point inspection — not a fifteen-minute pit-lane rush job on Evans Ave.",
    "primaryCta": "Schedule Oil Change",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "The cheapest oil change is the one that does not bypass your filter.",
    "body": "Quick-lube lanes optimize volume — cross-threaded drain plugs, wrong-viscosity bulk oil, and crushed filter gaskets show up in our bay weekly from Englewood drivers who saved ten dollars. Colorado cold starts at 5,280 feet demand correct viscosity and a filter that actually traps soot from direct-injection engines. We use the right spec, reset your oil-life monitor, and inspect leaks under the shield you never look at."
  },
  "symptoms": {
    "eyebrow": "Oil science",
    "title": "Why interval and spec matter in Colorado",
    "intro": "Oil is not just mileage math — turbochargers, GDI soot, and altitude change how fast additive packages deplete.",
    "cards": [
      {
        "title": "Synthetic vs conventional intervals",
        "body": "Modern turbocharged engines — EcoBoost, Honda 1.5T, BMW B48 — specify synthetic 0W-20 or 5W-30 with 5,000–7,500 mile intervals despite dash reminders stretching farther. Conventional oil in a turbo application cokes on hot bearing surfaces. We match viscosity and API/ILSAC spec to your owner manual and driving pattern — short trips on Federal Blvd count as severe service."
      },
      {
        "title": "Filter bypass & drain plug integrity",
        "body": "Cheap filters collapse under bypass valve pressure and send unfiltered oil to bearings. Over-torqued aluminum drain pans strip threads — a $400 pan replacement from a $29 change. We torque drain plugs to spec, lubricate gaskets, and use filter brands with documented burst strength. Undercarriage shields come off so we actually see the plug and filter, not just reach blindly."
      },
      {
        "title": "30/60/90k companion services",
        "body": "Oil changes are the touchpoint for coolant strength, brake fluid age, cabin filter debris, and timing-belt mileage on interference engines. A 60k service on a Honda includes more than oil — trans fluid, spark plugs, and valve adjustment windows matter. We align maintenance with factory severe schedules because Denver heat and winter salt qualify as severe for most commuters."
      }
    ]
  },
  "technical": {
    "eyebrow": "Oil specification",
    "title": "0W-20 vs 5W-30, OEM intervals & Colorado severe service",
    "intro": "Oil is not one-size-fits-all — turbocharged direct-injection engines, altitude, and short-trip commuting change which viscosity and interval actually protect your engine in Englewood.",
    "cards": [
      {
        "title": "0W-20 vs 5W-30 viscosity",
        "body": "The first number is cold-start flow — 0W flows faster in Colorado winter. The second is hot operating viscosity. Many turbo DI engines specify 0W-20 for fuel economy and turbo bearing protection. Using 5W-30 where 0W-20 is required can void warranty coverage and increase cold-start wear on EcoBoost, Honda 1.5T, and Toyota 2.5L platforms."
      },
      {
        "title": "OEM interval vs dash reminder",
        "body": "Owner manuals list normal and severe schedules — severe is often 5,000 miles vs. 7,500–10,000 normal. Oil-life monitors optimize for marketing as much as protection. Short trips on Federal Blvd, idling in winter, and towing qualify as severe for most Denver commuters — we reset monitors based on your actual pattern."
      },
      {
        "title": "API / ILSAC / OEM approvals",
        "body": "Dexos, LL-01, 502.00, and other OEM specs require specific additive packages — bulk oil from quick-lube lanes may not meet them. Turbo DI engines coke on hot bearings with wrong spec. We match API/ILSAC and manufacturer approval to your under-hood label and VIN."
      },
      {
        "title": "High-mileage & diesel considerations",
        "body": "High-mileage formulas with seal conditioners help aging gaskets on 150k+ engines when appropriate. Diesel pickups need CJ-4/CK-4 and correct viscosity for CP4 pump protection. DEF and fuel filter intervals are separate from oil — we flag diesel-specific items on the same visit."
      }
    ],
    "tableTitle": "Normal vs severe service intervals (typical)",
    "tableIntro": "Your owner manual is authoritative — this table shows why Denver commuting often qualifies as severe.",
    "table": {
      "caption": "Normal vs severe oil change interval comparison",
      "columns": [
        "Condition",
        "Normal schedule",
        "Severe schedule"
      ],
      "rows": [
        {
          "label": "Turbo DI gasoline",
          "values": [
            "7,500–10,000 mi",
            "5,000 mi"
          ],
          "highlight": 1
        },
        {
          "label": "Short trips (<5 mi)",
          "values": [
            "Often normal on paper",
            "Severe — moisture in oil"
          ],
          "highlight": 1
        },
        {
          "label": "Towing / mountains",
          "values": [
            "Extended if lucky",
            "Severe — heat & load"
          ],
          "highlight": 1
        },
        {
          "label": "Older conventional",
          "values": [
            "3,000–5,000 mi",
            "3,000 mi typical"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Every visit",
    "title": "What our oil service includes",
    "intro": "An RKC oil change is a documented maintenance event — not a conveyor belt.",
    "bgImageAlt": "Oil Changes at RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Spec verification",
        "body": "VIN and sticker lookup confirm viscosity, capacity, and filter part number — turbo DI engines get specific synthetic approvals."
      },
      {
        "step": "02",
        "title": "Drain & inspect",
        "body": "Plug gasket replaced, threads inspected, and drain stream checked for metal glitter that would flag bearing wear."
      },
      {
        "step": "03",
        "title": "Filter & fill",
        "body": "Filter pre-filled when orientation allows, torque-to-spec install, and fill to level with dipstick verification — not just pump auto-stop."
      },
      {
        "step": "04",
        "title": "Multi-point inspection",
        "body": "Fluids, belts, hoses, tire wear, and visible leaks documented on your invoice — no pressure to fix what is healthy."
      },
      {
        "step": "05",
        "title": "Monitor reset & sticker",
        "body": "Oil-life monitor reset, service reminder sticker, and recommended return mileage based on your actual driving — not a generic 3,000-mile scare."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Fluids & filters",
    "title": "Maintenance beyond the oil change",
    "intro": "Pair your oil service with the filters and fluids that protect the rest of the powertrain.",
    "groups": [
      {
        "category": "Oil options",
        "items": [
          "Conventional for older low-stress engines per manual",
          "Full synthetic and synthetic-blend per OEM spec",
          "High-mileage formulations with seal conditioners when appropriate"
        ]
      },
      {
        "category": "Filters",
        "items": [
          "OEM and premium aftermarket oil filters",
          "Engine air and cabin filter replacement on request",
          "Fuel filter on diesel and high-mileage applications"
        ]
      },
      {
        "category": "Fluid top-offs",
        "items": [
          "Coolant, brake, power-steering, and washer fluid level check",
          "Transmission and differential level inspection where dipstick exists",
          "DEF top-off on diesel when low"
        ]
      },
      {
        "category": "Scheduled packages",
        "items": [
          "30k/60k/90k milestone service bundles quoted upfront",
          "Timing-belt interval reminders on interference engines",
          "Fleet maintenance logging for commercial accounts"
        ]
      }
    ]
  },
  "labor": {
    "title": "Oil change pricing transparency",
    "description": "Oil changes from $49 conventional and $79 synthetic plus parts — labor at $120/hr when additional services are approved. No hidden shop-supply fees on the menu price."
  },
  "faq": {
    "title": "Oil change questions",
    "intro": "Synthetic intervals, filter quality, and what Colorado severe service means for your engine."
  },
  "areaLabel": "oil changes",
  "finalCta": {
    "title": "Due for an oil change?",
    "description": "Walk in or schedule at RKC Automotive on Evans Ave. Correct spec, honest inspection, and $120/hr labor on anything beyond the basic service.",
    "secondaryCta": "Book online"
  },
  "relatedSlug": "oil-changes-englewood-co",
  "faqs": [
    {
      "question": "How often should I change my oil in Colorado?",
      "answer": "Follow your owner manual with severe-duty adjustment for short trips, towing, and extreme temperatures — common in Denver metro. Many modern turbo engines specify 5,000–7,500 mile synthetic intervals despite longer dash reminders. Conventional oil in older low-stress engines may use 3,000–5,000 miles. We stamp the windshield and reset monitors based on your actual driving — not a generic 3,000-mile scare tactic."
    },
    {
      "question": "Is synthetic oil worth the extra cost?",
      "answer": "Turbocharged, direct-injection, and high-performance engines require synthetic viscosity and additive packages — conventional oil can coke on hot turbo bearings. Naturally aspirated older engines may use conventional or synthetic blend per manual. We match API/ILSAC spec and viscosity to your VIN rather than upsell synthetic where conventional is specified."
    },
    {
      "question": "What is included in an RKC oil change?",
      "answer": "Correct-spec oil and filter, drain-plug gasket, torque-to-spec plug and filter install, oil-level verification, oil-life monitor reset, and multi-point inspection of fluids, belts, hoses, tires, and visible leaks. Undercarriage shields are removed when needed so we actually see the drain point — not a blind quick-lube reach."
    },
    {
      "question": "Can a cheap oil filter damage my engine?",
      "answer": "Yes. Filters with weak media or poor bypass valves allow unfiltered oil or collapsed elements to starve bearings. We use quality filter brands with documented burst strength. The few dollars saved on a no-name filter are not worth the risk on a turbo DI engine."
    },
    {
      "question": "Do you reset the oil life monitor on my dashboard?",
      "answer": "Yes — for vehicles with oil-life monitoring systems we reset after service so reminders align with the interval we recommend. Some European platforms require scan-tool reset; we handle that in-house when needed."
    },
    {
      "question": "What other services should I pair with an oil change?",
      "answer": "Cabin and engine air filters, tire rotation, and fluid level checks are common companions. Milestone items — transmission fluid, coolant exchange, spark plugs — are due by mileage and time, not every oil change. We flag due-soon items on your invoice without pressure to bundle unnecessary services."
    },
    {
      "question": "What is the difference between 0W-20 and 5W-30 oil?",
      "answer": "The first number (0W, 5W) is cold-start viscosity — lower numbers flow faster in Colorado winter. The second number (20, 30) is hot operating viscosity. Many turbo DI engines specify 0W-20 for fuel economy and turbo bearing protection. Using 5W-30 where 0W-20 is required can trigger warranty issues and cold-start wear. We match viscosity to your under-hood label and API spec."
    },
    {
      "question": "When should I follow severe vs normal oil change intervals?",
      "answer": "Severe schedules apply to short trips under 5 miles, frequent idling, towing, dusty conditions, and extreme temperatures — typical Denver metro commuting qualifies for many vehicles. Severe intervals are often 5,000 miles vs. 7,500–10,000 normal. Dash oil-life monitors may stretch reminders; we reset based on your actual driving pattern, not marketing defaults."
    },
    {
      "question": "Does altitude affect oil change intervals in Colorado?",
      "answer": "Altitude itself does not shorten oil life dramatically, but cold starts at 5,280 feet stress oil until operating temperature — especially on short Englewood commutes. Turbocharged engines run hotter and dilute oil with fuel during cold enrichment. Combined with severe-duty driving, we often recommend shorter intervals than the dash displays for turbo DI platforms."
    }
  ]
},
  es: {
  "breadcrumb": "Cambios de aceite",
  "hero": {
    "imageAlt": "Cambios de aceite en RKC Automotive Englewood CO",
    "eyebrow": "Mantenimiento · Englewood, CO",
    "title": "Servicio profesional de cambio de aceite en Englewood, CO",
    "description": "Cambios de aceite convencionales, sintéticos completos y de alto kilometraje con filtros de especificaciones OEM, tapones de drenaje con torque especificado e inspección multipunto: no es un trabajo apresurado de quince minutos en Evans Ave.",
    "primaryCta": "Programar cambio de aceite",
    "callPrefix": "Llamar"
  },
  "reality": {
    "quote": "El cambio de aceite más barato es el que no salta tu filtro.",
    "body": "Los carriles de lubricación rápida optimizan el volumen: los tapones de drenaje mal roscados, el aceite a granel de viscosidad incorrecta y las juntas de filtro aplastadas aparecen semanalmente en nuestro taller con conductores de Englewood que ahorraron diez dólares. Las partidas en frío en Colorado, a 5,280 pies de altitud, exigen una viscosidad correcta y un filtro que realmente atrape las partículas de hollín de los motores de inyección directa. Utilizamos la especificación adecuada, reiniciamos el indicador de vida útil del aceite e inspeccionamos fugas debajo del protector que nunca revisas."
  },
  "symptoms": {
    "eyebrow": "Ciencia del aceite",
    "title": "Por qué importan el intervalo y las especificaciones en Colorado",
    "intro": "El aceite no es solo una cuestión de kilómetros: los turbocompresores, la hollín de los motores GDI y la altitud cambian la velocidad a la que se agotan los paquetes de aditivos.",
    "cards": [
      {
        "title": "Intervalos entre sintético y convencional",
        "body": "Los motores modernos con turbo — EcoBoost, Honda 1.5T, BMW B48 — especifican aceite sintético 0W-20 o 5W-30 con intervalos de 5,000 a 7,500 millas, a pesar de que las indicaciones del tablero sugieran períodos más largos. El aceite convencional en una aplicación con turbo se carboniza en las superficies calientes de los cojinetes. Nosotros igualamos la viscosidad y la especificación API/ILSAC según el manual del propietario y el patrón de conducción — los viajes cortos por Federal Blvd se consideran servicio severo."
      },
      {
        "title": "Derivación del filtro e integridad del tapón de drenaje",
        "body": "Los filtros baratos se colapsan bajo la presión de la válvula de derivación y envían aceite sin filtrar a los cojinetes. Las bandejas de drenaje de aluminio con sobreapriete desgastan las roscas: un reemplazo de bandeja de $400 por un cambio de $29. Aprietamos los tapones de drenaje según las especificaciones, lubricamos las juntas tóricas y utilizamos marcas de filtros con resistencia a la explosión documentada. Los protectores del chasis se retiran para que realmente veamos el tapón y el filtro, no solo alcanzar a ciegas."
      },
      {
        "title": "Servicios complementarios a los 30k/60k/90k",
        "body": "Los cambios de aceite son el punto de contacto para la fuerza del anticongelante, la antigüedad del fluido de frenos, los residuos del filtro de cabina y el kilometraje de la correa de distribución en motores de interferencia. Un servicio a los 60k en un Honda incluye más que aceite: el fluido de transmisión, las bujías y los intervalos de ajuste de válvulas son importantes. Alineamos el mantenimiento con los programas severos de fábrica porque el calor de Denver y la sal de invierno califican como severos para la mayoría de los conductores diarios."
      }
    ]
  },
  "technical": {
    "eyebrow": "Especificación de aceite",
    "title": "0W-20 vs 5W-30, intervalos OEM y servicio severo en Colorado",
    "intro": "El aceite no es universal: los motores turboalimentados de inyección directa, la altitud y los desplazamientos cortos cambian la viscosidad y el intervalo que realmente protegen tu motor en Englewood.",
    "cards": [
      {
        "title": "Viscosidad 0W-20 vs 5W-30",
        "body": "El primer número es el flujo en arranque en frío: el 0W fluye más rápido en los inviernos de Colorado. El segundo es la viscosidad en operación a alta temperatura. Muchos motores turboalimentados de inyección directa especifican 0W-20 para mejorar la eficiencia de combustible y proteger los cojinetes del turbo. Usar 5W-30 donde se requiere 0W-20 puede anular la cobertura de la garantía y aumentar el desgaste en arranque en frío en las plataformas EcoBoost, Honda 1.5T y Toyota 2.5L."
      },
      {
        "title": "Intervalo del fabricante vs. aviso del tablero",
        "body": "Los manuales del propietario enumeran programas de mantenimiento normales y severos; el programa severo suele ser cada 5,000 millas, frente a las 7,500–10,000 millas del programa normal. Los monitores de vida útil del aceite se optimizan tanto para fines de marketing como para la protección. Los viajes cortos por Federal Blvd, la inmovilización en invierno y el remolque califican como condiciones severas para la mayoría de los conductores en Denver; nosotros reiniciamos los monitores según su patrón de uso real."
      },
      {
        "title": "Aprobaciones API / ILSAC / del fabricante del equipo original (OEM)",
        "body": "Las especificaciones Dexos, LL-01, 502.00 y otras de los fabricantes requieren paquetes de aditivos específicos; el aceite a granel de las estaciones de cambio rápido puede no cumplirlas. Los motores turbo DI con especificación incorrecta generan coque en los cojinetes calientes. Coincidimos con las aprobaciones API/ILSAC y del fabricante según la etiqueta bajo el capó y el VIN."
      },
      {
        "title": "Consideraciones para vehículos de alto kilometraje y diésel",
        "body": "Las fórmulas para alto kilometraje con acondicionadores de sellos ayudan a las juntas viejas en motores de 150k+ km cuando es apropiado. Las camionetas diésel necesitan CJ-4/CK-4 y la viscosidad correcta para proteger la bomba CP4. Los intervalos de DEF y filtro de combustible son independientes del aceite; marcamos los elementos específicos para diésel en la misma visita."
      }
    ],
    "tableTitle": "Intervalos de servicio normal vs severo (típico)",
    "tableIntro": "El manual del propietario es la autoridad; esta tabla muestra por qué el tráfico diario en Denver a menudo califica como servicio severo.",
    "table": {
      "caption": "Comparación de intervalos de cambio de aceite: normal vs. severo",
      "columns": [
        "Condición",
        "Programa normal",
        "Programa severo"
      ],
      "rows": [
        {
          "label": "Turbo DI de gasolina",
          "values": [
            "7,500–10,000 millas",
            "5,000 millas"
          ],
          "highlight": "1"
        },
        {
          "label": "Viajes cortos (<5 millas)",
          "values": [
            "A menudo normal en papel",
            "Grave — humedad en el aceite"
          ],
          "highlight": "1"
        },
        {
          "label": "Remolque / montañas",
          "values": [
            "Extendido si hay suerte",
            "Severo — calor y carga"
          ],
          "highlight": "1"
        },
        {
          "label": "Convencional antiguo",
          "values": [
            "3,000–5,000 millas",
            "3,000 millas típico"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Cada visita",
    "title": "Qué incluye nuestro servicio de aceite",
    "intro": "Un cambio de aceite en RKC es un evento de mantenimiento documentado, no una línea de producción.",
    "bgImageAlt": "Cambios de aceite en RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Verificación de especificaciones",
        "body": "La búsqueda del VIN y la etiqueta confirman la viscosidad, la capacidad y el número de parte del filtro: los motores turbo DI requieren aprobaciones específicas de sintético."
      },
      {
        "step": "02",
        "title": "Drenar e inspeccionar",
        "body": "Se reemplazó la junta del tapón, se inspeccionaron las roscas y se verificó el flujo de drenaje en busca de partículas metálicas que indiquen desgaste de los cojinetes."
      },
      {
        "step": "03",
        "title": "Filtro y llenado",
        "body": "El filtro se prellena cuando la orientación lo permite, se instala con el par de apriete especificado y se llena hasta el nivel con verificación mediante la varilla de nivel, no solo con la parada automática de la bomba."
      },
      {
        "step": "04",
        "title": "Inspección multipunto",
        "body": "Fluidos, correas, mangueras, desgaste de neumáticos y fugas visibles documentados en su factura — sin presión para reparar lo que está en buen estado."
      },
      {
        "step": "05",
        "title": "Reinicio del monitor de vida útil del aceite y calcomanía",
        "body": "Reinicio del monitor de vida útil del aceite, calcomanía de recordatorio de servicio y kilometraje recomendado de regreso basado en su conducción real, no en un genérico y alarmante intervalo de 3,000 millas."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Líquidos y filtros",
    "title": "Mantenimiento más allá del cambio de aceite",
    "intro": "Combina tu servicio de aceite con los filtros y fluidos que protegen el resto del tren motriz.",
    "groups": [
      {
        "category": "Opciones de aceite",
        "items": [
          "Convencional para motores antiguos de baja tensión según el manual",
          "Sintético completo y mezcla sintética según especificación del fabricante",
          "Fórmulas de alto kilometraje con acondicionadores de sellos cuando sea apropiado"
        ]
      },
      {
        "category": "Filtros",
        "items": [
          "Filtros de aceite de marca original y premium del mercado de repuestos",
          "Reemplazo de filtros de aire del motor y del habitáculo bajo solicitud",
          "Filtro de combustible en aplicaciones diésel y de alto kilometraje"
        ]
      },
      {
        "category": "Completado de fluidos",
        "items": [
          "Verificación de nivel de anticongelante, líquido de frenos, dirección asistida y fluido del limpiaparabrisas",
          "Inspección del nivel de transmisión y diferencial donde existe la varilla de medición",
          "Completar DEF en diésel cuando esté bajo"
        ]
      },
      {
        "category": "Paquetes programados",
        "items": [
          "Paquetes de servicios de hitos 30k/60k/90k cotizados por adelantado",
          "Recordatorios de intervalo de correa de distribución en motores de interferencia",
          "Registro de mantenimiento de flotas para cuentas comerciales"
        ]
      }
    ]
  },
  "labor": {
    "title": "Transparencia en los precios del cambio de aceite",
    "description": "Cambios de aceite desde $49 convencional y $79 sintético más piezas — mano de obra a $120/hora cuando se aprueben servicios adicionales. Sin tarifas ocultas de suministros del taller en el precio del menú."
  },
  "faq": {
    "title": "Preguntas frecuentes sobre el cambio de aceite",
    "intro": "Intervalos sintéticos, calidad del filtro y lo que el servicio severo de Colorado significa para tu motor."
  },
  "areaLabel": "cambios de aceite",
  "finalCta": {
    "title": "¿Es hora de cambiar el aceite?",
    "description": "Visítanos o agenda tu cita en RKC Automotive en Evans Ave. Especificación correcta, inspección honesta y $120/hr de mano de obra en cualquier servicio adicional al básico.",
    "secondaryCta": "Reserva en línea"
  },
  "relatedSlug": "oil-changes-englewood-co",
  "faqs": [
    {
      "question": "¿Con qué frecuencia debo cambiar el aceite en Colorado?",
      "answer": "Siga el manual del propietario con el ajuste para servicio severo en viajes cortos, remolque y temperaturas extremas, comunes en el área metropolitana de Denver. Muchos motores turbo modernos especifican intervalos sintéticos de 5,000 a 7,500 millas, a pesar de que las advertencias del tablero indican períodos más largos. El aceite convencional en motores antiguos de bajo estrés puede utilizarse cada 3,000 a 5,000 millas. Nosotros sellamos el parabrisas y reiniciamos los monitores según su conducción real, no como una táctica de miedo genérica de 3,000 millas."
    },
    {
      "question": "¿Vale la pena el aceite sintético el costo adicional?",
      "answer": "Los motores turboalimentados, de inyección directa y de alto rendimiento requieren aceites sintéticos con paquetes de aditivos; el aceite convencional puede carbonizarse en los cojinetes calientes del turbo. Los motores más antiguos atmosféricos pueden usar aceite convencional o una mezcla sintética según el manual. Nos ajustamos a las especificaciones API/ILSAC y a la viscosidad correspondiente a tu VIN, en lugar de ofrecer una actualización a sintético cuando se especifica aceite convencional."
    },
    {
      "question": "¿Qué incluye el cambio de aceite de RKC?",
      "answer": "Aceite y filtro de especificación correcta, junta del tapón de drenaje, instalación del tapón y filtro con torque según especificaciones, verificación del nivel de aceite, reinicio del monitor de vida útil del aceite e inspección multipunto de fluidos, correas, mangueras, neumáticos y fugas visibles. Los protectores del chasis se retiran cuando es necesario para que veamos realmente el punto de drenaje, no solo un acceso rápido a ciegas."
    },
    {
      "question": "¿Puede un filtro de aceite barato dañar mi motor?",
      "answer": "Sí. Los filtros con medios débiles o válvulas de derivación deficientes permiten que el aceite sin filtrar o los elementos colapsados privan de lubricación a los cojinetes. Utilizamos marcas de filtros de calidad con resistencia a la explosión documentada. Los pocos dólares ahorrados en un filtro sin marca no valen la pena por el riesgo en un motor turbo DI."
    },
    {
      "question": "¿Restableces el monitor de vida útil del aceite en mi tablero?",
      "answer": "Sí — para vehículos con sistemas de monitoreo de vida útil del aceite, restablecemos el indicador después del servicio para que las alertas se alineen con el intervalo que recomendamos. Algunas plataformas europeas requieren un restablecimiento con herramienta de diagnóstico; nosotros gestionamos eso internamente cuando es necesario."
    },
    {
      "question": "¿Qué otros servicios debería combinar con un cambio de aceite?",
      "answer": "Los filtros de aire de la cabina y del motor, el cambio de posición de los neumáticos y las verificaciones de los niveles de líquidos son servicios comunes. Los elementos clave, como el fluido de la transmisión, el intercambio de anticongelante y las bujías, se deben cambiar según el kilometraje y el tiempo, no en cada cambio de aceite. Indicamos en su factura los servicios que están por vencer, sin presionarlo para incluir servicios innecesarios."
    },
    {
      "question": "¿Cuál es la diferencia entre el aceite 0W-20 y el 5W-30?",
      "answer": "El primer número (0W, 5W) es la viscosidad en frío: los números más bajos fluyen más rápido en los inviernos de Colorado. El segundo número (20, 30) es la viscosidad en operación caliente. Muchos motores turbo DI especifican 0W-20 para economía de combustible y protección de los cojinetes del turbo. Usar 5W-30 donde se requiere 0W-20 puede generar problemas de garantía y desgaste en el arranque en frío. Nosotros igualamos la viscosidad a la etiqueta bajo el capó y la especificación API."
    },
    {
      "question": "¿Cuándo debo seguir los intervalos de cambio de aceite severos vs normales?",
      "answer": "Los intervalos severos aplican para viajes cortos de menos de 5 millas, ralentí frecuente, remolcar cargas, condiciones polvorientas y temperaturas extremas. El desplazamiento típico del área metropolitana de Denver califica para muchos vehículos bajo estas condiciones. Los intervalos severos suelen ser de 5,000 millas, en comparación con 7,500–10,000 para condiciones normales. Los monitores de vida útil del aceite del tablero pueden extender los recordatorios; nosotros los reiniciamos según tu patrón de conducción real, no según los valores predeterminados del fabricante."
    },
    {
      "question": "¿Afecta la altitud los intervalos de cambio de aceite en Colorado?",
      "answer": "La altitud en sí no acorta drásticamente la vida útil del aceite, pero las arranques en frío a 5,280 pies estresan el aceite hasta alcanzar la temperatura de funcionamiento, especialmente en los desplazamientos cortos por Englewood. Los motores con turboalimentación funcionan a mayor temperatura y diluyen el aceite con combustible durante el enriquecimiento en frío. Combinado con un manejo de servicio severo, a menudo recomendamos intervalos más cortos que los que muestra el tablero para las plataformas turbo DI."
    }
  ]
},
} as const;

export function oilChangesBodyCopy(lang: Lang) {
  return OIL_CHANGES_BODY[lang] ?? OIL_CHANGES_BODY.en;
}
