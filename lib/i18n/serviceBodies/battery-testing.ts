import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost ds Nemotron vllm/research (research-spark). */
export const BATTERY_TESTING_BODY = {
  en: {
  "breadcrumb": "Battery Testing",
  "hero": {
    "imageAlt": "Battery Testing at RKC Automotive Englewood CO",
    "eyebrow": "Starting power · Englewood, CO",
    "title": "Car Battery Testing & Replacement in Englewood, CO",
    "description": "Free battery health testing with charging-system verification — because a new battery on a weak alternator fails twice. Same-day replacement when stock allows at our Evans Ave shop.",
    "primaryCta": "Free Battery Test",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "Colorado cold starts punish marginal batteries.",
    "body": "A battery that tests \"borderline\" at 70°F fails at 10°F on a January morning in Englewood — when you need it most. High under-hood temps in summer traffic cook plates and evaporate electrolyte on non-AGM designs. We test conductance, check alternator output, and inspect cables before selling you a group size — so winter no-starts and summer heat failures drop off your calendar."
  },
  "symptoms": {
    "eyebrow": "Battery health",
    "title": "When to test or replace your battery",
    "intro": "Batteries fail on a curve — slow crank today, no-start tomorrow. These signs mean test now, not after a jump.",
    "cards": [
      {
        "title": "Slow crank & dim headlights",
        "body": "Voltage below 12.4V resting or crank sag under 9.6V means insufficient capacity or high internal resistance. Dim lights during crank while RPM rises confirms the alternator is trying — but the battery cannot deliver cold-cranking amps. Our conductance tester prints state-of-health percentage; we share the readout before recommending replacement."
      },
      {
        "title": "Corrosion & cable resistance",
        "body": "White-green bloom on terminals adds resistance that mimics a dead battery. Side-post GM cables fail inside the lead terminal where you cannot see it. We clean, torque, and voltage-drop test cables — a $0 fix that prevents a $180 battery on the wrong diagnosis."
      },
      {
        "title": "Age & Colorado climate",
        "body": "Most flooded batteries last 3–5 years in Denver metro heat cycles. Start-stop AGM applications on newer imports demand correct group and capacity — wrong amp-hour rating triggers premature failure and idle-stop faults. We match CCA and reserve capacity to your VIN and install date-stamped stock."
      }
    ]
  },
  "technical": {
    "eyebrow": "Battery science",
    "title": "CCA testing, sulfation & Colorado cold-start demands",
    "intro": "A battery that tests borderline at 70°F fails at 10°F on a January morning in Englewood. We conductance-test CCA, inspect for sulfation, and verify alternator output before selling you a group size.",
    "cards": [
      {
        "title": "CCA conductance testing",
        "body": "Cold Cranking Amps measure starting power at 0°F — critical for Colorado winters. Resting voltage above 12.4V does not mean the battery delivers rated CCA. Our conductance tester prints state-of-health percentage — we share the readout before recommending replacement. A 70% health battery may start today and fail tomorrow at dawn."
      },
      {
        "title": "Sulfation from short trips",
        "body": "Lead sulfate crystals form when a battery sits partially discharged — short-trip Englewood commuting without full recharge accelerates sulfation. Advanced sulfation is not reversible — replacement is the fix. Regular driving or a maintainer on stored vehicles prevents capacity loss that voltage checks miss."
      },
      {
        "title": "AGM vs flooded in start-stop vehicles",
        "body": "Start-stop and idle-stop systems demand AGM batteries with correct amp-hour and CCA ratings. Wrong group size triggers premature failure and idle-stop faults. We match battery type to VIN and register BMS on European and Asian platforms that require scan-tool reset after install."
      },
      {
        "title": "Colorado heat + cold cycle stress",
        "body": "Summer under-hood temps above 140°F evaporate electrolyte on flooded designs. Winter cold increases internal resistance. Temperature swings from I-25 traffic to sub-zero mornings are harder on batteries than steady coastal climates — pre-winter testing catches borderline units before no-start season."
      }
    ],
    "tableTitle": "Battery type comparison",
    "table": {
      "caption": "Flooded vs AGM battery comparison",
      "columns": [
        "Type",
        "Best for",
        "Colorado note"
      ],
      "rows": [
        {
          "label": "Flooded (FLA)",
          "values": [
            "Older vehicles, standard cranking",
            "3–5 yr typical life in metro heat"
          ],
          "highlight": 2
        },
        {
          "label": "AGM",
          "values": [
            "Start-stop, luxury, deep cycling",
            "Required for many 2015+ platforms"
          ]
        },
        {
          "label": "EFB (enhanced flooded)",
          "values": [
            "Entry start-stop",
            "Mid-tier stop-start applications"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Test procedure",
    "title": "Free battery test — what it includes",
    "intro": "Testing takes ten minutes and includes the charging system — not just a voltmeter across the posts.",
    "bgImageAlt": "Battery Testing at RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Visual & terminal service",
        "body": "Case bulge, leak, and terminal corrosion documented. Terminals cleaned for accurate readings."
      },
      {
        "step": "02",
        "title": "Conductance test",
        "body": "Printed state-of-health and CCA available vs rated. Results explained — not just pass/fail."
      },
      {
        "step": "03",
        "title": "Charging system check",
        "body": "Alternator voltage and ripple under load. Belt and ground strap inspected."
      },
      {
        "step": "04",
        "title": "Starter draw sample",
        "body": "High draw with good battery points to starter motor — we flag before you replace the wrong part."
      },
      {
        "step": "05",
        "title": "Install & register",
        "body": "New batteries torque-to-spec, BMS registered on vehicles that require scan-tool reset — so idle-stop works day one."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Services",
    "title": "Battery and charging services",
    "intro": "Keep starting reliable through Colorado seasons with tested components — not hope.",
    "groups": [
      {
        "category": "Testing",
        "items": [
          "Free battery conductance test",
          "Charging-system voltage and ripple check",
          "Starter amperage sample on request"
        ]
      },
      {
        "category": "Replacement",
        "items": [
          "Flooded and AGM batteries matched to VIN",
          "Terminal hardware and cable end repair",
          "Battery management system reset when required"
        ]
      },
      {
        "category": "Related repairs",
        "items": [
          "Alternator and starter replacement if test flags failure",
          "Parasitic draw test for overnight dead batteries",
          "Ground strap and engine-to-chassis cable service"
        ]
      },
      {
        "category": "Winter prep",
        "items": [
          "Pre-winter battery health checks for Englewood fleets",
          "Truck dual-battery and diesel high-CCA options",
          "Same-day install when inventory allows"
        ]
      }
    ]
  },
  "labor": {
    "title": "Battery service pricing",
    "description": "Testing is free. Replacement from $149 plus battery cost — labor at $120/hr when cables, alternators, or starters are part of the fix."
  },
  "faq": {
    "title": "Battery questions",
    "intro": "Battery life in Colorado, AGM vs flooded, alternator testing, and BMS reset on newer cars."
  },
  "areaLabel": "battery testing",
  "finalCta": {
    "title": "Battery worried you?",
    "description": "Stop by RKC on Evans Ave for a free test with charging-system check. Replace only when data says so — same-day install available.",
    "secondaryCta": "Get directions"
  },
  "relatedSlug": "battery-testing-englewood-co",
  "faqs": [
    {
      "question": "Is battery testing really free at RKC?",
      "answer": "Yes — conductance testing with printed results and a charging-system voltage check is free. We explain state-of-health percentage and recommend replacement only when data supports it. There is no pressure to buy a battery you do not need."
    },
    {
      "question": "How long do car batteries last in Colorado?",
      "answer": "Most flooded batteries last 3–5 years in Denver metro due to heat cycles and cold-crank demand in winter. AGM batteries in start-stop vehicles may differ. Date codes on the case help — we advise replacement when conductance drops below reliable cold-crank threshold before you are stranded."
    },
    {
      "question": "Should I replace my battery before winter?",
      "answer": "Marginal batteries that pass summer tests often fail first sub-zero morning. Pre-winter testing is smart for commuters and fleet vehicles. We match cold-cranking amps and group size to your VIN and verify alternator output at the same visit."
    },
    {
      "question": "Do new cars need a battery management system reset?",
      "answer": "Many European and some Asian vehicles require scan-tool BMS reset after battery replacement so idle-stop and charging strategy calibrate correctly. We register the new battery when required — skipping reset causes premature failure messages and stop-start faults."
    },
    {
      "question": "Can corrosion on terminals cause a no-start?",
      "answer": "Absolutely — high resistance at terminals mimics a dead battery. We clean, torque, and sometimes replace cable ends before selling a battery. Voltage-drop testing confirms when cables, not the pack, are the problem."
    },
    {
      "question": "How much does battery replacement cost?",
      "answer": "Replacement starts around $149 plus battery cost — labor at $120/hr when cables or registration procedures add time. Premium AGM batteries for start-stop applications cost more but are required for correct operation. We quote group size and CCA before install."
    },
    {
      "question": "What is CCA testing and how is it different from voltage?",
      "answer": "Cold Cranking Amps measure available starting power at 0°F — critical for Colorado winters. Resting voltage above 12.4V does not mean the battery can deliver rated CCA. Conductance testers estimate internal resistance and state-of-health percentage. A battery at 70% health may start today and fail at 10°F tomorrow — we share printed results."
    },
    {
      "question": "What is battery sulfation and can it be reversed?",
      "answer": "Sulfation forms when a battery sits discharged — lead sulfate crystals harden on plates and reduce capacity. Short-trip Englewood commuting without full recharge accelerates sulfation. Once advanced, sulfation is not reversible — replacement is the fix. Maintaining charge with regular driving or a maintainer on stored vehicles prevents it."
    },
    {
      "question": "Why do batteries fail faster in Colorado climate?",
      "answer": "Summer under-hood heat above 140°F evaporates electrolyte and accelerates plate corrosion. Winter cold increases internal resistance — marginal batteries fail on first sub-zero morning. Temperature swings from I-25 traffic to January cold starts are harder on batteries than steady coastal climates. Pre-winter testing catches borderline units before no-start season."
    }
  ]
},
  es: {
  "breadcrumb": "Pruebas de batería",
  "hero": {
    "imageAlt": "Prueba de baterías en RKC Automotive Englewood CO",
    "eyebrow": "Potencia que inicia · Englewood, CO",
    "title": "Prueba y reemplazo de baterías de automóvil en Englewood, CO",
    "description": "Prueba gratuita de salud de la batería con verificación del sistema de carga, porque una batería nueva en un alternador débil falla dos veces. Reemplazo el mismo día cuando el stock lo permite en nuestro taller de Evans Ave.",
    "primaryCta": "Prueba de batería gratuita",
    "callPrefix": "Llamar"
  },
  "reality": {
    "quote": "Los arranques en frío en Colorado castigan a las baterías marginales.",
    "body": "Una batería que da un resultado \"limitrofe\" en una prueba a 70°F fallará a 10°F en una mañana de enero en Englewood, justo cuando más la necesita. Las altas temperaturas bajo el capó durante el tráfico de verano dañan las placas y evaporan el electrolito en los diseños no AGM. Realizamos pruebas de conductancia, verificamos la salida del alternador e inspeccionamos los cables antes de venderle una batería de tamaño de grupo, para que los fallos de arranque en invierno y las fallas por calor en verano queden fuera de su agenda."
  },
  "symptoms": {
    "eyebrow": "Salud de la batería",
    "title": "Cuándo probar o reemplazar su batería",
    "intro": "Las baterías fallan de forma gradual: hoy arranca lento, mañana no enciende. Estas señales indican que se debe hacer una prueba ahora, no después de un arranque con cables.",
    "cards": [
      {
        "title": "Arranque lento y faros débiles",
        "body": "Un voltaje inferior a 12.4V en reposo o una caída por debajo de 9.6V durante el arranque indica capacidad insuficiente o alta resistencia interna. Las luces tenues durante el arranque, mientras las RPM aumentan, confirman que el alternador está intentando trabajar, pero la batería no puede entregar los amperios de arranque en frío. Nuestro probador de conductancia imprime el porcentaje de estado de salud; compartimos la lectura antes de recomendar el reemplazo."
      },
      {
        "title": "Corrosión y resistencia del cable",
        "body": "La floración blanco-verdosa en los terminales añade resistencia que simula una batería agotada. Los cables GM de poste lateral fallan dentro del terminal de plomo, donde no se puede ver. Limpiamos, ajustamos con torque y realizamos pruebas de caída de voltaje en los cables: una reparación sin costo que evita la compra de una batería de $180 por un diagnóstico incorrecto."
      },
      {
        "title": "Edad y clima de Colorado",
        "body": "La mayoría de las baterías inundadas duran de 3 a 5 años en los ciclos de calor del área metropolitana de Denver. Las aplicaciones AGM con tecnología start-stop en importaciones más recientes exigen el grupo y la capacidad correctos: una clasificación de amperios-hora incorrecta provoca un fallo prematuro y fallos en el sistema de parada en ralentí. Igualamos la CCA y la capacidad de reserva según su VIN y la fecha de instalación, y suministramos stock con fecha de fabricación estampada."
      }
    ]
  },
  "technical": {
    "eyebrow": "Ciencia de las baterías",
    "title": "Pruebas de CCA, sulfatación y exigencias de arranque en frío en Colorado",
    "intro": "Una batería que da resultados límite a 70°F falla a 10°F en una mañana de enero en Englewood. Realizamos pruebas de conductancia de CCA, inspeccionamos la presencia de sulfatación y verificamos la salida del alternador antes de venderle una batería de tamaño de grupo determinado.",
    "cards": [
      {
        "title": "Prueba de conductancia CCA",
        "body": "Los Amperios de Arranque en Frío (CCA) miden la potencia de arranque a 0°F — crucial para los inviernos de Colorado. Un voltaje en reposo superior a 12.4V no significa que la batería entregue el CCA nominal. Nuestro probador de conductancia imprime el porcentaje de estado de salud; compartimos la lectura antes de recomendar el reemplazo. Una batería con 70% de salud puede arrancar hoy y fallar mañana al amanecer."
      },
      {
        "title": "Sulfatación por viajes cortos",
        "body": "Los cristales de sulfato de plomo se forman cuando una batería permanece parcialmente descargada: los desplazamientos cortos por Englewood sin una recarga completa aceleran la sulfatación. La sulfatación avanzada no es reversible; la solución es el reemplazo. El manejo regular o el uso de un mantenedor en vehículos almacenados previene la pérdida de capacidad que las mediciones de voltaje no detectan."
      },
      {
        "title": "AGM vs. inundadas en vehículos con start-stop",
        "body": "Los sistemas start-stop y de parada en ralentí requieren baterías AGM con las calificaciones correctas de amperaje-hora y corriente de arranque en frío. El tamaño de grupo incorrecto provoca fallos prematuros y errores en el sistema start-stop. Coincidimos el tipo de batería con el VIN y registramos el BMS en plataformas europeas y asiáticas que requieren un reinicio con herramienta de diagnóstico después de la instalación."
      },
      {
        "title": "Estrés por ciclos de calor y frío en Colorado",
        "body": "Las temperaturas bajo el capó en verano superan los 140°F y evaporan el electrolito en los diseños inundados. El frío invernal aumenta la resistencia interna. Los cambios de temperatura desde el tráfico de la I-25 hasta las mañanas bajo cero son más perjudiciales para las baterías que los climas costeros estables: las pruebas previas al invierno detectan las unidades borderline antes de la temporada de no arranque."
      }
    ],
    "tableTitle": "Comparación de tipos de baterías",
    "table": {
      "caption": "Comparación de baterías inundadas vs AGM",
      "columns": [
        "Tipo",
        "Mejor para",
        "Nota de Colorado"
      ],
      "rows": [
        {
          "label": "Inundado (FLA)",
          "values": [
            "Vehículos más antiguos, arranque estándar",
            "vida útil típica de 3–5 años en el calor de la ciudad"
          ]
        },
        {
          "label": "AGM",
          "values": [
            "Inicio-parada, lujo, ciclo profundo",
            "Requerido para muchas plataformas 2015+"
          ]
        },
        {
          "label": "EFB (batería inundada mejorada)",
          "values": [
            "Inicio y parada de entrada",
            "Aplicaciones de nivel medio con sistema de arranque y parada"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Procedimiento de prueba",
    "title": "Prueba gratuita de batería — qué incluye",
    "intro": "La prueba dura diez minutos e incluye el sistema de carga, no solo un voltímetro conectado a los bornes.",
    "bgImageAlt": "Prueba de baterías en RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Servicio visual y de terminales",
        "body": "Se documentó abultamiento, fuga y corrosión en los terminales. Los terminales se limpiaron para obtener lecturas precisas."
      },
      {
        "step": "02",
        "title": "Prueba de conductancia",
        "body": "Estado de salud impreso y CCA disponible frente a la clasificación. Resultados explicados, no solo aprobado/reprobado."
      },
      {
        "step": "03",
        "title": "Verificación del sistema de carga",
        "body": "Voltaje y ondulación del alternador bajo carga. Se inspeccionan la correa y la correa de tierra."
      },
      {
        "step": "04",
        "title": "Muestra de consumo del motor de arranque",
        "body": "Un alto consumo de corriente con una batería en buen estado apunta al motor de arranque: lo advertimos antes de que reemplace la pieza incorrecta."
      },
      {
        "step": "05",
        "title": "Instalar y registrar",
        "body": "Baterías nuevas con par de apriete según especificaciones, BMS registrado en vehículos que requieren reinicio con herramienta de diagnóstico — para que el sistema de parada en ralentí funcione desde el primer día."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Servicios",
    "title": "Servicios de batería y carga",
    "intro": "Mantenga un arranque confiable durante las estaciones de Colorado con componentes probados, no con esperanzas.",
    "groups": [
      {
        "category": "Pruebas",
        "items": [
          "Prueba de conductancia de batería sin costo",
          "Verificación de voltaje y ondulación del sistema de carga",
          "Muestra de amperaje del motor de arranque bajo solicitud"
        ]
      },
      {
        "category": "Reemplazo",
        "items": [
          "Baterías inundadas y AGM emparejadas según VIN",
          "Reparación de hardware de terminal y extremo de cable",
          "Reinicio del sistema de gestión de la batería cuando sea necesario"
        ]
      },
      {
        "category": "Reparaciones relacionadas",
        "items": [
          "Reemplazo del alternador y del motor de arranque si la prueba indica falla",
          "Prueba de drenaje parasitario para baterías descargadas por la noche",
          "Servicio de cinta de puesta a tierra y cable de motor a chasis"
        ]
      },
      {
        "category": "Preparación para el invierno",
        "items": [
          "Verificaciones de salud de la batería antes del invierno para flotas en Englewood",
          "Opciones de batería dual para camiones y alta CCA para diésel",
          "Instalación el mismo día cuando el inventario lo permite"
        ]
      }
    ]
  },
  "labor": {
    "title": "Precios del servicio de batería",
    "description": "La prueba es gratuita. El reemplazo desde $149 más el costo de la batería; la mano de obra es de $120 por hora cuando los cables, el alternador o el motor de arranque forman parte de la reparación."
  },
  "faq": {
    "title": "Preguntas sobre baterías",
    "intro": "Duración de la batería en Colorado, AGM vs. inundada, prueba del alternador y reinicio del BMS en autos más nuevos."
  },
  "areaLabel": "prueba de batería",
  "finalCta": {
    "title": "¿Le preocupa la batería?",
    "description": "Visite RKC en la Avenida Evans para una prueba gratuita con revisión del sistema de carga. Reemplace únicamente cuando los datos lo indiquen; instalación el mismo día disponible.",
    "secondaryCta": "Obtener indicaciones"
  },
  "relatedSlug": "battery-testing-englewood-co",
  "faqs": [
    {
      "question": "¿La prueba de baterías es realmente gratuita en RKC?",
      "answer": "Sí: la prueba de conductancia con resultados impresos y la verificación del voltaje del sistema de carga son gratuitas. Explicamos el porcentaje de estado de salud y recomendamos el reemplazo únicamente cuando los datos lo respaldan. No hay presión para comprar una batería que no necesite."
    },
    {
      "question": "¿Cuánto duran las baterías de los autos en Colorado?",
      "answer": "La mayoría de las baterías inundadas duran de 3 a 5 años en el área metropolitana de Denver debido a los ciclos de calor y la demanda de arranque en frío durante el invierno. Las baterías AGM en vehículos con start-stop pueden variar. Los códigos de fecha en la carcasa ayudan; le aconsejamos reemplazar la batería cuando la conductancia cae por debajo del umbral fiable de arranque en frío, antes de que se quede varado."
    },
    {
      "question": "¿Debería reemplazar mi batería antes del invierno?",
      "answer": "Las baterías marginales que superan las pruebas de verano a menudo fallan en la primera mañana bajo cero. Realizar pruebas antes del invierno es una buena decisión para conductores habituales y vehículos de flota. Igualamos los amperios de arranque en frío y el tamaño del grupo según su VIN y verificamos la salida del alternador en la misma visita."
    },
    {
      "question": "¿Los coches nuevos necesitan un reinicio del sistema de gestión de la batería?",
      "answer": "Muchos vehículos europeos y algunos asiáticos requieren un restablecimiento de la herramienta de diagnóstico del sistema de gestión de la batería (BMS) después de reemplazar la batería, para que la estrategia de arranque en marcha y la calibración del sistema de carga funcionen correctamente. Registramos la batería nueva cuando es necesario; omitir este restablecimiento provoca mensajes de falla prematura y fallos en el sistema de arranque en marcha."
    },
    {
      "question": "¿La corrosión en los terminales puede causar que el vehículo no arranque?",
      "answer": "Absolutamente: una alta resistencia en los terminales simula una batería agotada. Limpiamos, ajustamos al par de apriete especificado y, en ocasiones, reemplazamos las puntas de los cables antes de vender una batería. La prueba de caída de voltaje confirma cuándo los cables, y no el paquete de baterías, son el problema."
    },
    {
      "question": "¿Cuánto cuesta el reemplazo de la batería?",
      "answer": "El reemplazo comienza en aproximadamente $149 más el costo de la batería, con una mano de obra de $120/hora cuando los cables o los procedimientos de registro agregan tiempo. Las baterías AGM premium para aplicaciones con sistema de arranque y parada cuestan más, pero son necesarias para un funcionamiento correcto. Cotizamos el tamaño del grupo y los CCA antes de la instalación."
    },
    {
      "question": "¿Qué es la prueba CCA y cómo se diferencia del voltaje?",
      "answer": "Los Amperios de Arranque en Frío (CCA) miden la potencia de arranque disponible a 0°F, lo cual es crucial para los inviernos de Colorado. Un voltaje en reposo superior a 12.4V no significa que la batería pueda entregar los CCA nominales. Los analizadores de conductancia estiman la resistencia interna y el porcentaje de estado de salud. Una batería con un 70% de salud puede arrancar hoy y fallar a 10°F mañana; compartimos los resultados impresos."
    },
    {
      "question": "¿Qué es la sulfatación de la batería y puede revertirse?",
      "answer": "La sulfatación se produce cuando una batería permanece descargada: los cristales de sulfato de plomo se endurecen en las placas y reducen la capacidad. Los desplazamientos cortos por Englewood sin una recarga completa aceleran la sulfatación. Una vez avanzada, la sulfatación no es reversible; la solución es el reemplazo. Mantener la carga mediante la conducción regular o el uso de un dispositivo de mantenimiento en vehículos almacenados previene este problema."
    },
    {
      "question": "¿Por qué las baterías fallan más rápido en el clima de Colorado?",
      "answer": "El calor bajo el capó en verano, superior a 140°F, evapora el electrolito y acelera la corrosión de las placas. El frío invernal aumenta la resistencia interna; las baterías marginales fallan en la primera mañana por debajo de cero. Los cambios de temperatura desde el tráfico en la I-25 hasta los arranques en frío de enero son más perjudiciales para las baterías que los climas costeros estables. La prueba previa al invierno detecta las unidades borderline antes de la temporada de no arranque."
    }
  ]
},
} as const;

export function batteryTestingBodyCopy(lang: Lang) {
  return BATTERY_TESTING_BODY[lang] ?? BATTERY_TESTING_BODY.en;
}
