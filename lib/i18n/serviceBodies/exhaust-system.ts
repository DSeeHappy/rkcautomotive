import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost Nemotron (vllm/research/research-spark + vllm/smart/smart-spark). */
export const EXHAUST_SYSTEM_BODY = {
  en: {
  "breadcrumb": "Exhaust System",
  "hero": {
    "imageAlt": "Exhaust System at RKC Automotive Englewood CO",
    "eyebrow": "Exhaust & emissions · Englewood, CO",
    "title": "Exhaust System Repair in Englewood, CO",
    "description": "Rattles, rotten-egg smell, or P0420 catalyst codes? We inspect manifolds, flex pipes, converters, and mufflers — weld, clamp, or replace with emissions-compliant parts and written estimates first.",
    "primaryCta": "Exhaust Inspection",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "A check-engine P0420 is not always a bad catalytic converter.",
    "body": "Upstream misfires, leaking exhaust manifolds, and lazy O2 sensors set efficiency codes on converters that still flow fine. Colorado emissions stations do not care about the nuance — they read monitors and tailpipe numbers. We compare upstream/downstream O2 waveforms, inspect for leaks that pull false air, and fix root causes before quoting CARB-compliant converters that cost four figures."
  },
  "symptoms": {
    "eyebrow": "Exhaust faults",
    "title": "Exhaust and emissions symptoms",
    "intro": "Exhaust problems range from annoying rattles to failed emissions tests — each needs inspection under the vehicle, not a catalog muffler quote.",
    "cards": [
      {
        "title": "Catalytic efficiency codes",
        "body": "P0420/P0430 mean the downstream O2 sensor sees too little activity — worn catalyst, or a sensor/reporting issue. Exhaust leaks upstream of the converter let oxygen in and mimic failure. We graph O2 switching, check for manifold cracks, and verify fuel trim is not running rich before recommending converter replacement."
      },
      {
        "title": "Leaks, rattle & fumes",
        "body": "Ticking on cold start that fades may be an exhaust manifold crack — common on cast-iron manifolds and certain V8s. Flex-pipe bellows tear on lowered vehicles and trucks with broken motor mounts. Carbon monoxide does not smell; rotten egg is catalyst sulfate — different dangers. We lift every vehicle, smoke-test critical joints, and weld or replace sections to seal fumes out of the cabin."
      },
      {
        "title": "Colorado emissions compliance",
        "body": "Englewood and Denver metro emissions require ready monitors and passing tailpipe standards on applicable vehicles. Converter deletes fail inspection and risk fines. We install EPA/CARB-compliant components, complete drive cycles after repair, and document readiness so you are not back in line twice."
      }
    ]
  },
  "technical": {
    "eyebrow": "Emissions science",
    "title": "Catalytic efficiency, O2 switching & Colorado compliance",
    "intro": "P0420 is not always a bad catalytic converter — we graph O2 sensor behavior, fix upstream faults first, and install EPA/CARB-compliant components so Englewood emissions tests pass once.",
    "cards": [
      {
        "title": "Catalyst efficiency testing",
        "body": "We compare upstream and downstream O2 switching — a healthy catalyst shows reduced downstream activity. Exhaust leaks upstream of sensors, rich fuel trim, and misfires can set P0420 on a good cat. Converter replacement is quoted only when live data confirms efficiency loss, not on code alone."
      },
      {
        "title": "O2 sensor switching analysis",
        "body": "Upstream O2 should switch rich/lean roughly once per second at idle. Downstream on a healthy cat stays relatively steady. Rapid downstream switching mirrors upstream — efficiency failure territory. Lazy upstream sensors cause rich/lean faults that mimic cat failure — we graph both before quoting four-figure converters."
      },
      {
        "title": "Manifold crack vs muffler rattle",
        "body": "Ticking on cold start that fades may be cast exhaust manifold crack — common on certain V8 and inline engines. Flex-pipe bellows tear on lowered vehicles. Heat shield rattle is independent of muffler internals — we inspect under lift before quoting mufflers when a shield tack-weld fixes the noise for minimal cost."
      },
      {
        "title": "Colorado emissions & CARB compliance",
        "body": "Denver metro requires functioning catalysts and ready OBD-II monitors on applicable vehicles. Tampered or missing cats fail inspection and risk fines. We install compliant converters, complete drive cycles after repair, and document readiness so you are not back in line twice."
      }
    ],
    "tableTitle": "O2 sensor behavior vs exhaust fault",
    "table": {
      "caption": "O2 sensor switching patterns and likely causes",
      "columns": [
        "Pattern",
        "Likely cause",
        "First test"
      ],
      "rows": [
        {
          "label": "Upstream switching, steady downstream",
          "values": [
            "Healthy catalyst",
            "Verify if code present — may be marginal"
          ]
        },
        {
          "label": "Both switching rapidly",
          "values": [
            "Efficiency loss or exhaust leak",
            "Leak test + compare waveforms"
          ],
          "highlight": 1
        },
        {
          "label": "Upstream lazy / stuck",
          "values": [
            "Sensor or fuel fault",
            "Scope sensor — do not replace cat first"
          ],
          "highlight": 1
        },
        {
          "label": "Rich trim + efficiency code",
          "values": [
            "Fuel fault poisoning cat",
            "Fix fuel before converter"
          ],
          "highlight": 1
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Repair path",
    "title": "Exhaust diagnosis to compliant repair",
    "intro": "Emissions-aware repair — fix the cause, seal the path, verify the monitors.",
    "bgImageAlt": "Exhaust System at RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Lift & visual map",
        "body": "Manifold, flex, hangers, and converter shells inspected for rust, crush, and tamper evidence."
      },
      {
        "step": "02",
        "title": "Leak & O2 data",
        "body": "Smoke or pressure test on manifolds. Scan tool O2 comparison at steady cruise and idle."
      },
      {
        "step": "03",
        "title": "Root-cause first",
        "body": "Misfire, fuel trim, and exhaust leak repairs before converter quote when data supports it."
      },
      {
        "step": "04",
        "title": "Section repair or replace",
        "body": "Quality mufflers, direct-fit pipes, and compliant converters. Welds ground smooth, hangers isolated from vibration."
      },
      {
        "step": "05",
        "title": "Emissions verification",
        "body": "Monitor readiness guidance and road test for noise. Re-scan confirms code resolution when converter was the fault."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Components",
    "title": "Exhaust services we perform",
    "intro": "From manifold gaskets to full cat-back, we keep your exhaust quiet, sealed, and emissions-legal.",
    "groups": [
      {
        "category": "Repair",
        "items": [
          "Manifold gasket and stud extraction",
          "Flex-pipe and intermediate pipe replacement",
          "Muffler and resonator delete-and-replace (compliant)"
        ]
      },
      {
        "category": "Emissions",
        "items": [
          "Catalytic converter replacement — CARB/EPA compliant",
          "O2 sensor diagnosis and replacement",
          "Post-repair monitor drive-cycle coaching"
        ]
      },
      {
        "category": "Custom & HD",
        "items": [
          "Truck exhaust hanger and stack support",
          "Rust-belt section replacement with quality steel",
          "Welding and fabrication for odd sections"
        ]
      },
      {
        "category": "Inspection",
        "items": [
          "Pre-purchase exhaust and emissions assessment",
          "Colorado emissions-failure triage",
          "Written estimate before cutting pipe"
        ]
      }
    ]
  },
  "labor": {
    "title": "Exhaust repair labor",
    "description": "Exhaust labor at $120/hr with compliant parts itemized. Converter jobs include O2 verification and readiness coaching — not just bolt-on and clear codes."
  },
  "faq": {
    "title": "Exhaust system questions",
    "intro": "Catalytic converter cost, emissions tests, manifold cracks, and aftermarket exhaust legality in Colorado."
  },
  "areaLabel": "exhaust system repair",
  "finalCta": {
    "title": "Exhaust noise or emissions code?",
    "description": "Inspect exhaust at RKC on Evans Ave. Leak sealed, catalyst verified, monitors ready — $120/hr labor on every repair.",
    "secondaryCta": "Schedule inspection"
  },
  "relatedSlug": "exhaust-system-englewood-co",
  "faqs": [
    {
      "question": "Why did I get a P0420 code — do I need a new catalytic converter?",
      "answer": "P0420 indicates catalyst efficiency below threshold — but upstream leaks, misfires, and lazy O2 sensors can set the same code on a healthy converter. We graph O2 sensor behavior and inspect for exhaust leaks before quoting converter replacement. Fixing root cause first saves money when the cat is not actually worn."
    },
    {
      "question": "Is it legal to remove a catalytic converter in Colorado?",
      "answer": "Federal and Colorado emissions rules require functioning catalysts on applicable vehicles. Removal fails emissions inspection and can result in fines. We install EPA/CARB-compliant replacement converters and complete repairs that allow monitors to set before your test."
    },
    {
      "question": "What causes exhaust rattling at idle?",
      "answer": "Broken heat shields, failed hanger isolators, and loose flex-pipe bellows rattle independently of muffler internals. We inspect under lift before quoting mufflers — sometimes a shield tack-weld or hanger fixes the noise for minimal cost."
    },
    {
      "question": "Can an exhaust leak cause a check engine light?",
      "answer": "Leaks upstream of O2 sensors let oxygen into the exhaust stream, biasing fuel trim and setting lean or efficiency codes. Manifold cracks are common on certain V8 and inline engines — tick when cold that fades as metal expands. We smoke-test and pressure-check critical joints."
    },
    {
      "question": "How much does catalytic converter replacement cost?",
      "answer": "Converters are among the most expensive exhaust components — often $800–$2,500+ parts plus labor at $120/hr depending on vehicle and CARB compliance requirements. We confirm failure with data, fix contributing misfires or leaks first, and quote compliant parts before cutting pipe."
    },
    {
      "question": "Do you weld exhaust or use clamp-on parts?",
      "answer": "We use direct-fit sections, quality clamps, and welding where appropriate for durability. Flanges and flex sections are aligned to prevent stress cracks. All work is scoped on a written estimate before torches or cutters touch the system."
    },
    {
      "question": "How do you test catalytic converter efficiency?",
      "answer": "We compare upstream and downstream O2 sensor switching — a healthy catalyst shows reduced downstream activity. We also verify fuel trims are not running rich, check for exhaust leaks upstream of sensors, and confirm no misfires are poisoning the cat. Converter replacement is quoted only when data confirms efficiency loss, not on P0420 alone."
    },
    {
      "question": "What does O2 sensor switching tell you about exhaust health?",
      "answer": "Upstream O2 should switch rich/lean roughly once per second at idle — the PCM uses this to adjust fuel. Downstream O2 on a healthy cat stays relatively steady. Rapid downstream switching mirrors upstream — efficiency code territory. Lazy upstream sensors cause rich/lean faults that mimic cat failure. We graph both sensors before quoting converters."
    },
    {
      "question": "What are Colorado emissions requirements for exhaust repairs?",
      "answer": "Gasoline vehicles in the Denver metro require passing OBD-II readiness and tailpipe standards where applicable. Tampered or missing catalysts fail inspection. We install EPA/CARB-compliant converters, complete repairs that allow monitors to set, and coach drive cycles before your emissions appointment — so you pass once, not twice."
    }
  ]
},
  es: {
  "breadcrumb": "Sistema de escape",
  "hero": {
    "imageAlt": "Sistema de escape en RKC Automotive Englewood CO",
    "eyebrow": "Escape y emisiones · Englewood, CO",
    "title": "Reparación del sistema de escape in Englewood, CO",
    "description": "¿Ruidos de golpeteo, olor a huevo podrido o códigos P0420 de catalizador? Inspeccionamos colectores, tubos flexibles, convertidores y silenciadores; soldamos, abrochamos o reemplazamos con piezas compatibles con las emisiones y estimados por escrito primero.",
    "primaryCta": "Inspección de escape",
    "callPrefix": "Llamar"
  },
  "reality": {
    "quote": "Un código de motor de falla P0420 no siempre significa un convertidor catalítico defectuoso.",
    "body": "Los fallos de encendido en la parte superior, las fugas en los colectores de escape y los sensores O2 lentos generan códigos de eficiencia en los convertidores que aún funcionan bien. Las estaciones de emisiones de Colorado no se preocupan por los matices: leen los monitores y los números de escape. Comparamos las formas de onda de los sensores O2 superior e inferior, inspeccionamos en busca de fugas que introduzcan aire falso y solucionamos las causas raíz antes de cotizar convertidores compatibles con CARB que cuestan cuatro cifras."
  },
  "symptoms": {
    "eyebrow": "Fallas en el sistema de escape",
    "title": "Síntomas de escape y emisiones",
    "intro": "Los problemas de escape van desde ruidos molestos hasta la falla en las pruebas de emisiones; cada uno requiere inspección bajo el vehículo, no una cotización de silenciador de catálogo.",
    "cards": [
      {
        "title": "Códigos de eficiencia catalítica",
        "body": "Los códigos P0420/P0430 indican que el sensor de oxígeno posterior detecta muy poca actividad: catalizador desgastado, o un problema del sensor o de su reporte. Las fugas de escape aguas arriba del convertidor permiten la entrada de oxígeno y simulan una falla. Graficamos el cambio del sensor de O2, verificamos si hay grietas en el múltiple de escape y confirmamos que el ajuste de combustible no esté rico antes de recomendar el reemplazo del convertidor."
      },
      {
        "title": "Fugas, vibraciones y olores",
        "body": "El sonido de golpeteo al arrancar en frío que se desvanece puede deberse a una fisura en el múltiple de escape, común en múltiples de hierro fundido y en ciertos motores V8. Los fuelles de la tubería flexible se desgarran en vehículos con suspensión rebajada y camiones con soportes de motor rotos. El monóxido de carbono no tiene olor; el olor a huevo podre indica sulfato del catalizador, lo que representa peligros diferentes. Levantamos cada vehículo, realizamos pruebas de humo en las uniones críticas y soldamos o reemplazamos secciones para sellar los gases y evitar que entren a la cabina."
      },
      {
        "title": "Cumplimiento de emisiones de Colorado",
        "body": "Las emisiones en Englewood y el área metropolitana de Denver requieren monitores listos y aprobación de las normas de escape en los vehículos aplicables. La eliminación de los convertidores catalíticos hace que el vehículo no apruebe la inspección y conlleva el riesgo de multas. Instalamos componentes compatibles con la EPA y CARB, completamos los ciclos de conducción después de la reparación y documentamos el estado de los monitores para que no tenga que hacer cola dos veces."
      }
    ]
  },
  "technical": {
    "eyebrow": "Ciencia de las emisiones",
    "title": "Eficiencia catalítica, conmutación de O2 y cumplimiento de Colorado",
    "intro": "P0420 no siempre indica un convertidor catalítico defectuoso: graficamos el comportamiento del sensor de oxígeno, solucionamos primero las fallas upstream e instalamos componentes conformes con EPA/CARB para que las pruebas de emisiones en Englewood se aprueben a la primera.",
    "cards": [
      {
        "title": "Pruebas de eficiencia del catalizador",
        "body": "Comparamos la conmutación de los sensores de oxígeno upstream y downstream: un catalizador saludable muestra una actividad reducida en downstream. Las fugas de escape upstream de los sensores, el ajuste de combustible rico y los fallos de encendido pueden generar el código P0420 incluso con un catalizador en buen estado. El reemplazo del convertidor se cotiza únicamente cuando los datos en vivo confirman una pérdida de eficiencia, no solo por el código."
      },
      {
        "title": "Análisis de conmutación del sensor O2",
        "body": "Upstream O2 debe cambiar de rico/pobre aproximadamente una vez por segundo en ralentí. Downstream en un cat saludable se mantiene relativamente estable. El cambio rápido de downstream refleja el upstream — territorio de falla de eficiencia. Los sensores upstream perezosos causan fallos rico/pobre que imitan la falla del cat — graficamos ambos antes de cotizar convertidores de cuatro cifras."
      },
      {
        "title": "Grieta del colector vs ruido del silenciador",
        "body": "El tiqueo al arranque en frío que desaparece puede deberse a una grieta en el colector de escape fundido — común en ciertos motores V8 y en línea. El fuelle de la tubería flexible se rompe en vehículos bajados. El ruido del escudo térmico es independiente de los componentes internos del silenciador — inspeccionamos bajo el elevador antes de cotizar silenciadores cuando una soldadura de punta del escudo corrige el ruido con un costo mínimo."
      },
      {
        "title": "Emisiones de Colorado y cumplimiento de CARB",
        "body": "El área metropolitana de Denver requiere catalizadores funcionando y monitores OBD-II listos en los vehículos aplicables. Los catalizadores manipulados o faltantes fallan la inspección y arriesgan multas. Instalamos convertidores cumplidores, completamos ciclos de manejo después de la reparación y documentamos la preparación para que no tengas que volver a hacer fila dos veces."
      }
    ],
    "tableTitle": "Comportamiento del sensor O2 vs falla de escape",
    "table": {
      "caption": "Patrones de conmutación del sensor O2 y causas probables",
      "columns": [
        "Patrón",
        "Causa probable",
        "Primera prueba"
      ],
      "rows": [
        {
          "label": "Cambio ascendente, flujo descendente estable",
          "values": [
            "Catalizador saludable",
            "Verifique si el código está presente — puede ser marginal"
          ]
        },
        {
          "label": "Ambos cambiando rápidamente",
          "values": [
            "Pérdida de eficiencia o fuga de escape",
            "Prueba de fuga + comparar formas de onda"
          ]
        },
        {
          "label": "Ascendente lento / atascado",
          "values": [
            "Sensor o falla de combustible",
            "Scope sensor — no reemplazar primero cat"
          ]
        },
        {
          "label": "Código de ajuste rico + código de eficiencia",
          "values": [
            "Fallo de combustible que envenena el catalizador",
            "Corrige el combustible antes del convertidor"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Ruta de reparación",
    "title": "Diagnóstico de escape a reparación conforme",
    "intro": "Reparación consciente de emisiones — corrige la causa, sella el camino, verifica los monitores.",
    "bgImageAlt": "Sistema de escape en RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Levantamiento y mapa visual",
        "body": "Colector, flex, soportes y carcasas del convertidor inspeccionados en busca de óxido, aplastamiento y evidencia de manipulación."
      },
      {
        "step": "02",
        "title": "Fuga y datos de O2",
        "body": "Prueba de humo o presión en los colectores. Comparación de O2 con herramienta de escaneo a crucero estable y ralentí."
      },
      {
        "step": "03",
        "title": "Identificar la causa raíz primero",
        "body": "Reparaciones de falla de encendido, ajuste de combustible y fuga de escape antes de la cotización del convertidor cuando los datos lo respalden."
      },
      {
        "step": "04",
        "title": "Reparación o reemplazo de la sección",
        "body": "Mufflers de calidad, tubos de ajuste directo y convertidores compatibles. Soldaduras lijadas suaves, soportes aislados de la vibración."
      },
      {
        "step": "05",
        "title": "Verificación de emisiones",
        "body": "Supervise la guía de preparación y la prueba de carretera para ruido. El re‑escaneo confirma la resolución del código cuando el convertidor era la falla."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Componentes",
    "title": "Servicios de escape que realizamos",
    "intro": "Desde manifold gaskets hasta cat-back completo, mantenemos su exhaust silencioso, sellado y conforme a las normas de emisiones.",
    "groups": [
      {
        "category": "Reparación",
        "items": [
          "Extracción de la junta del colector y los pernos",
          "Reemplazo de flex-pipe y tubería intermedia",
          "Eliminación y sustitución de silenciador y resonador (cumplimiento)"
        ]
      },
      {
        "category": "Emisiones",
        "items": [
          "Reemplazo del convertidor catalítico — CARB/EPA conforme",
          "O2 sensor diagnóstico y reemplazo",
          "Entrenamiento de ciclo de manejo de monitoreo post-reparación"
        ]
      },
      {
        "category": "Personalizado & HD",
        "items": [
          "Soporte de colgador de escape de camión y soporte de chimenea",
          "Rust-belt reemplazo de sección con acero de calidad",
          "Soldadura y fabricación para secciones impares"
        ]
      },
      {
        "category": "Inspección",
        "items": [
          "Evaluación de escape y emisiones antes de la compra",
          "Colorado triaje de falla de emisiones",
          "Estimado por escrito antes de cortar la tubería"
        ]
      }
    ]
  },
  "labor": {
    "title": "Mano de obra para reparación de escape",
    "description": "Mano de obra de escape a $120/hr con piezas cumplidoras detalladas. Los trabajos de Converter incluyen verificación de O2 y capacitación de preparación — no solo bolt-on y borrado de códigos."
  },
  "faq": {
    "title": "Preguntas sobre el sistema de escape",
    "intro": "Costo del convertidor catalítico, pruebas de emisiones, grietas en el colector y legalidad del escape de posventa en Colorado."
  },
  "areaLabel": "reparación del sistema de escape",
  "finalCta": {
    "title": "¿Ruido de escape o código de emisiones?",
    "description": "Inspeccione el escape en RKC en Evans Ave. Fuga sellada, catalizador verificado, monitores listos — $120/hora de mano de obra en cada reparación.",
    "secondaryCta": "Programar inspección"
  },
  "relatedSlug": "sistema-de-escape-englewood-co",
  "faqs": [
    {
      "question": "¿Por qué recibí un código P0420 — necesito un nuevo convertidor catalítico?",
      "answer": "P0420 indica que la eficiencia del catalizador está por debajo del umbral — pero las fugas upstream, los fallos de encendido y los sensores O2 perezosos pueden establecer el mismo código en un convertidor saludable. Graficamos el comportamiento del sensor O2 e inspeccionamos en busca de fugas de escape antes de cotizar el reemplazo del convertidor. Corregir la causa raíz primero ahorra dinero cuando el cat no está realmente desgastado."
    },
    {
      "question": "¿Es legal quitar un convertidor catalítico en Colorado?",
      "answer": "Las normas federales y de Colorado sobre emisiones requieren catalizadores funcionando en los vehículos aplicables. La eliminación falla la inspección de emisiones y puede resultar en multas. Instalamos convertidores de reemplazo compatibles con EPA/CARB y realizamos reparaciones completas que permiten que los monitores se establezcan antes de su prueba."
    },
    {
      "question": "¿Qué causa el ruido de escape al ralentí?",
      "answer": "Los heat shields rotos, los hanger isolators fallidos y los flex-pipe bellows sueltos vibran independientemente de los muffler internals. Inspeccionamos bajo el elevador antes de cotizar los mufflers — a veces un shield tack-weld o un hanger arregla el ruido con costo mínimo."
    },
    {
      "question": "¿Puede una fuga en el sistema de escape encender la luz del motor?",
      "answer": "Las fugas aguas arriba de los sensores de O2 permiten que el oxígeno entre en el flujo de escape, sesgando el ajuste de combustible y activando códigos de mezcla pobre o de eficiencia. Las grietas en el múltiple son comunes en ciertos motores V8 y en línea: suenan como un silbido cuando están fríos y desaparecen a medida que el metal se expande. Realizamos pruebas de humo y verificación de presión en las uniones críticas."
    },
    {
      "question": "¿Cuánto cuesta reemplazar el catalytic converter?",
      "answer": "Los convertidores son entre los componentes de escape más costosos — a menudo piezas de $800–$2,500+ más mano de obra a $120/hora según el vehículo y los requisitos de cumplimiento de CARB. Confirmamos la falla con datos, arreglamos primero las fallas de encendido o fugas contribuyentes, y cotizamos piezas compatibles antes de cortar la tubería."
    },
    {
      "question": "¿Soldas el escape o usas piezas de sujeción?",
      "answer": "Utilizamos secciones direct-fit, abrazaderas de calidad y soldadura donde corresponda para garantizar la durabilidad. Las bridas y las secciones flex se alinean para evitar grietas por esfuerzo. Todo el trabajo se presupuesta en un estimado escrito antes de que las antorchas o las herramientas de corte entren en contacto con el sistema."
    },
    {
      "question": "¿Cómo se prueba la eficiencia del convertidor catalítico?",
      "answer": "Comparamos el cambio de los sensores O2 de entrada y salida — un catalizador saludable muestra actividad reducida en la salida. También verificamos que los ajustes de combustible no estén funcionando ricos, revisamos fugas de escape aguas arriba de los sensores y confirmamos que no haya fallos de encendido que envenenen el catalizador. La sustitución del convertidor se cotiza solo cuando los datos confirman pérdida de eficiencia, no solo por el código P0420."
    },
    {
      "question": "¿Qué le dice el cambio del sensor O2 sobre la salud del escape?",
      "answer": "Upstream O2 debe cambiar de rico/pobre aproximadamente una vez por segundo en ralentí — el PCM usa esto para ajustar el combustible. Downstream O2 en un catalizador saludable se mantiene relativamente estable. El cambio rápido del downstream refleja al upstream — territorio de código de eficiencia. Los sensores upstream perezosos causan fallos rico/pobre que imitan la falla del catalizador. Graficamos ambos sensores antes de cotizar los catalizadores."
    },
    {
      "question": "¿Cuáles son los requisitos de emisiones de Colorado para reparaciones de escape?",
      "answer": "Los vehículos de gasolina en el área metropolitana de Denver requieren pasar la preparación OBD-II y los estándares de escape donde aplique. Los catalizadores manipulados o faltantes no pasan la inspección. Instalamos convertidores compatibles con EPA/CARB, realizamos reparaciones completas que permiten que los monitores se activen, y orientamos los ciclos de conducción antes de su cita de emisiones — para que pase a la primera, no dos veces."
    }
  ]
},
} as const;

export function exhaustSystemBodyCopy(lang: Lang) {
  return EXHAUST_SYSTEM_BODY[lang] ?? EXHAUST_SYSTEM_BODY.en;
}
