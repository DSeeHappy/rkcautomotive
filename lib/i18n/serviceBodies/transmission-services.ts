import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost ds Nemotron vllm/research (research-spark). */
export const TRANSMISSION_SERVICES_BODY = {
  en: {
  "breadcrumb": "Transmission Services",
  "hero": {
    "imageAlt": "Transmission Services at RKC Automotive Englewood CO",
    "eyebrow": "Transmissions · Englewood, CO",
    "title": "Transmission Repair & Service in Englewood, CO",
    "description": "Slipping, delayed engagement, or burnt-fluid smell? We diagnose automatic, manual, and CVT units — fluid analysis, pressure tests, and scoped teardown recommendations — with written estimates before major work.",
    "primaryCta": "Transmission Help",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "Burnt fluid is a symptom — not a service.",
    "body": "A dark-fluid flush on a slipping transmission often accelerates failure by dislodging clutch material without fixing the worn band or torque-converter clutch. Denver stop-and-go on I-25 heats fluid past 200°F on summer afternoons. We inspect color, smell, and debris on the pan magnet before recommending fluid service, valve-body work, or rebuild — because the right fix depends on what the friction material is doing inside the case."
  },
  "symptoms": {
    "eyebrow": "Shift problems",
    "title": "Transmission failure modes we diagnose",
    "intro": "Transmissions fail gradually — harsh shifts today become slip tomorrow. These symptoms need professional diagnosis, not another quart from the parts store.",
    "cards": [
      {
        "title": "Slip & flare between gears",
        "body": "RPM flare during a 2-3 shift means clutch pack capacity is gone or line pressure is low from a worn pump or leaking solenoid circuit. CVTs show the same as engine speed drifting while road speed stalls. We read TCM adaptive shift data, main-line pressure where accessible, and fluid condition before quoting internal repair vs. converter replacement."
      },
      {
        "title": "Delayed engagement & cold-stall",
        "body": "Two to three seconds from Park to Drive on a cold morning often traces to worn pump bore, stuck pressure-regulator valve, or degraded fluid viscosity. Torque-converter clutch shudder feels like driving over rumble strips at 45 mph — usually TCC apply strategy or converter clutch lining. We differentiate hydraulic delay from electronic TCC control with pressure and scan data."
      },
      {
        "title": "CVT vs traditional automatic",
        "body": "Nissan/Jatco CVTs, Honda i-MMD, and Toyota e-CVT strategies differ radically from 6-10 speed planetary units. CVT whine with metal in fluid often means belt/pulley damage — flush-only service is off the table. Traditional autos may live with a quality fluid exchange if pan debris is minimal. We identify unit type, read manufacturer TSBs, and scope fluid before recommending rebuild, replace, or service."
      }
    ]
  },
  "technical": {
    "eyebrow": "Transmission science",
    "title": "Fluid color chart, CVT vs planetary, TCM relearn",
    "intro": "Transmission failures are expensive — our technical evaluation starts with fluid condition, unit identification, and adaptive data before recommending flush, repair, or rebuild.",
    "cards": [
      {
        "title": "Automatic transmission fluid color",
        "body": "Bright red or pink with no burnt smell is healthy. Brown shows age and additive depletion. Dark brown or black with burnt odor means heat damage — internal clutch wear is likely. Metal glitter on the pan magnet confirms friction material loss. We document color, smell, and debris before recommending service scope."
      },
      {
        "title": "CVT vs traditional planetary automatic",
        "body": "Nissan/Jatco CVTs use steel belts on variable pulleys with specific friction-modified fluid — wrong fluid causes slip and overheating. Traditional 6–10 speed units use clutch packs and defined gear shifts. CVT whine with metal in fluid often means replacement, not flush. We identify unit type from VIN and pan before quoting."
      },
      {
        "title": "TCM adaptive relearn procedures",
        "body": "The transmission control module adapts shift pressure and timing to wear. After valve-body service, fluid exchange, or battery disconnect, shifts may feel harsh until relearn completes. Ford, GM, and Nissan CVTs often require scan-tool relearn — we reset adaptive tables and road-test hot and cold before return."
      },
      {
        "title": "Torque converter clutch shudder",
        "body": "TCC shudder feels like rumble strips at 45 mph — usually converter clutch apply strategy, degraded fluid, or worn converter lining. We differentiate hydraulic delay from electronic TCC control with pressure and scan data. Misdiagnosed shudder leads to unnecessary rebuilds when fluid and TCC strategy are the real fix."
      }
    ],
    "tableTitle": "Transmission fluid color & condition chart",
    "table": {
      "caption": "Automatic transmission fluid condition guide",
      "columns": [
        "Appearance",
        "Smell",
        "Typical action"
      ],
      "rows": [
        {
          "label": "Bright red / pink",
          "values": [
            "Normal",
            "Serviceable — pan inspect if due"
          ],
          "highlight": 2
        },
        {
          "label": "Light brown",
          "values": [
            "Slight aged",
            "Fluid exchange if interval due"
          ]
        },
        {
          "label": "Dark brown",
          "values": [
            "Burnt hint",
            "Inspect pan debris — may need repair"
          ]
        },
        {
          "label": "Black + burnt",
          "values": [
            "Burnt",
            "Teardown assessment — flush alone risky"
          ],
          "highlight": 2
        },
        {
          "label": "Metal on magnet",
          "values": [
            "N/A",
            "Internal wear — rebuild/replace path"
          ],
          "highlight": 2
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Diagnostic path",
    "title": "Transmission evaluation steps",
    "intro": "Major transmission work is expensive — our process is built to prove what failed before you approve teardown.",
    "bgImageAlt": "Transmission Services at RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Fluid & pan inspection",
        "body": "Color, smell, level, and magnet debris tell us how much friction material has circulated. Burnt varnish means heat damage — we document before any drain."
      },
      {
        "step": "02",
        "title": "Scan & adaptive data",
        "body": "Gear-slip counts, solenoid command vs. pressure, and stored TCM codes. Ford shift solenoid patterns differ from GM 6L80 strategies — platform knowledge matters."
      },
      {
        "step": "03",
        "title": "Road test & stall check",
        "body": "Shift quality hot and cold, TCC apply shudder, and manual-line pressure tests when fittings exist. Towing history on I-70 grades is noted — heat kills tow transmissions."
      },
      {
        "step": "04",
        "title": "Rebuild vs replace scope",
        "body": "High-mileage units with metal in pan may favor reman with warranty. Repair-in-car suits valve-body or external leaks. We quote both paths when viable."
      },
      {
        "step": "05",
        "title": "Written estimate & timeline",
        "body": "Labor at $120/hr plus parts — overhaul scope, fluid service only, or axle-seal repair — approved before the case comes apart."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Services offered",
    "title": "Transmission work we perform",
    "intro": "From fluid maintenance to full rebuild coordination, RKC handles the diagnostics and mechanical work Englewood drivers need.",
    "groups": [
      {
        "category": "Fluid & maintenance",
        "items": [
          "Manufacturer-spec fluid exchange with new filter when serviceable",
          "Pan-drop inspection with debris documentation",
          "Cooler-line and external leak repair"
        ]
      },
      {
        "category": "Diagnostics & repair",
        "items": [
          "Valve-body and solenoid testing",
          "Torque-converter shudder and bearing noise isolation",
          "Manual clutch, slave cylinder, and shifter cable service"
        ]
      },
      {
        "category": "Rebuild coordination",
        "items": [
          "In-house teardown assessment and parts sourcing",
          "Remanufactured unit comparison quotes when appropriate",
          "Post-install adaptive reset and road-test verification"
        ]
      },
      {
        "category": "Local context",
        "items": [
          "Towing and mountain-grade heat stress evaluation",
          "Fleet truck transmission service intervals",
          "CVT-specific failure-pattern experience"
        ]
      }
    ]
  },
  "labor": {
    "title": "Transmission labor transparency",
    "description": "Transmission diagnostics and repair bill at $120/hr with written scope before teardown. Fluid service, seal repair, and overhaul each get separate approval — no surprise case splits."
  },
  "faq": {
    "title": "Transmission questions",
    "intro": "Fluid flush vs pan drop, CVT life, rebuild timelines, and when to stop driving a slipping unit."
  },
  "areaLabel": "transmission service",
  "finalCta": {
    "title": "Transmission acting up?",
    "description": "Schedule diagnosis at RKC on Evans Ave. We read fluid, scan TCM data, and quote the right fix — service, repair, or rebuild — before major money moves.",
    "secondaryCta": "Schedule service"
  },
  "relatedSlug": "transmission-services-englewood-co",
  "faqs": [
    {
      "question": "How do I know if my transmission is slipping?",
      "answer": "Slip feels like engine RPM rising without matching road speed — especially during the 2-3 shift or under load climbing I-70. Delayed engagement from Park to Drive, harsh shifts, and burnt-fluid smell are related warnings. We inspect fluid color, magnet debris, and scan TCM adaptive data before recommending fluid service vs. internal repair."
    },
    {
      "question": "Is a transmission fluid flush always the right fix?",
      "answer": "No. A flush on a slipping unit with dark fluid and metal debris can worsen failure by disturbing clutch material without fixing worn packs. Pan-drop inspection with debris analysis tells us whether fluid service, valve-body repair, or overhaul is appropriate. We never recommend flush-only service when data shows internal wear."
    },
    {
      "question": "What is the difference between CVT and traditional automatic service?",
      "answer": "CVTs use steel belts or chains on variable pulleys with specific fluid friction modifiers — wrong fluid causes slip and overheating. Traditional planetary autos have defined gear shifts and often serviceable filters. CVT whine with metal in the pan often requires replacement rather than service. We identify your unit type and follow manufacturer fluid and repair procedures."
    },
    {
      "question": "Should I rebuild my transmission or install a remanufactured unit?",
      "answer": "Rebuild-in-house suits repairable valve-body or single-component failures when the case and hard parts are sound. High-mileage units with heavy pan debris often favor remanufactured replacements with warranty. We quote both paths when viable so you choose based on cost, downtime, and warranty coverage — always with written approval before teardown."
    },
    {
      "question": "How much does transmission repair cost in Englewood?",
      "answer": "Fluid service starts around $179 plus fluid; minor external repairs and seal jobs vary by labor hours at $120/hr. Major overhaul or replacement is quoted after diagnosis — often thousands depending on unit type and parts. We document fluid condition and scan data so you understand why the scope is priced as it is."
    },
    {
      "question": "Can towing or mountain driving damage my transmission?",
      "answer": "Heat is the primary killer. Towing on grades without proper cooling, repeated hard shifts in traffic, and deferred fluid changes break down friction modifiers and overheat clutch packs. We ask about towing history during diagnosis and inspect cooler lines and fluid condition — preventive fluid service at manufacturer intervals extends life on Colorado commuters."
    },
    {
      "question": "What does transmission fluid color tell you?",
      "answer": "Bright red or pink fluid with no burnt smell is healthy. Brown fluid shows age and additive depletion. Dark brown or black with burnt odor means heat damage — internal clutch wear is likely. Metal glitter on the pan magnet confirms friction material loss. We document color, smell, and debris before recommending fluid service vs. teardown."
    },
    {
      "question": "What is a TCM relearn and when is it required?",
      "answer": "The transmission control module adapts shift pressure and timing to wear. After valve-body service, fluid exchange, or battery disconnect, shift quality may feel harsh until adaptive data relearns. Some platforms require scan-tool relearn procedures — Ford, GM, and Nissan CVTs especially. We reset adaptive tables and road-test hot and cold before return."
    },
    {
      "question": "How do CVT and traditional automatic failures differ?",
      "answer": "Traditional planetary autos fail clutch packs, bands, and torque-converter clutches — often recoverable with rebuild if caught early. CVT belt/pulley damage from wrong fluid or overheating usually means replacement, not flush. CVT whine with metal in fluid is a red flag. We identify unit type from VIN and pan inspection before quoting service scope."
    }
  ]
},
  es: {
  "breadcrumb": "Servicios de Transmisión",
  "hero": {
    "imageAlt": "Servicios de transmisión en RKC Automotive Englewood CO",
    "eyebrow": "Transmisiones · Englewood, CO",
    "title": "Reparación y servicio de transmisión en Englewood, CO",
    "description": "¿Transmisión que patina, cambio de marcha retrasado o olor a fluido quemado? Diagnosticamos transmisiones automáticas, manuales y CVT: análisis de fluido, pruebas de presión y recomendaciones de desmontaje con alcance definido, todo con presupuestos por escrito antes de realizar trabajos mayores.",
    "primaryCta": "Ayuda con la transmisión",
    "callPrefix": "Llamar"
  },
  "reality": {
    "quote": "El fluido quemado es un síntoma, no un servicio.",
    "body": "Un enjuague con fluido oscuro en una transmisión que patina suele acelerar el fallo al desprender material de las pastillas sin reparar la banda desgastada ni el embrague del convertidor de par. El tráfico de arrancar y parar en Denver en la interestatal I-25 calienta el fluido por encima de 200°F en las tardes de verano. Inspeccionamos el color, el olor y los residuos en el imán del cárter antes de recomendar un servicio de fluido, trabajo en el cuerpo de válvulas o una reconstrucción, porque la solución adecuada depende de lo que esté haciendo el material de fricción dentro de la caja."
  },
  "symptoms": {
    "eyebrow": "Problemas de cambio de marcha",
    "title": "Modos de falla de transmisión que diagnosticamos",
    "intro": "Las transmisiones fallan gradualmente: los cambios bruscos de hoy se convierten en patinaje mañana. Estos síntomas requieren un diagnóstico profesional, no otra cuarto de aceite de la tienda de repuestos.",
    "cards": [
      {
        "title": "Deslizamiento y parpadeo entre engranajes",
        "body": "El aumento de las RPM durante un cambio de 2ª a 3ª marcha indica que la capacidad del paquete de embragues se ha agotado o que la presión de línea es baja debido a una bomba desgastada o a un circuito de solenoide con fugas. Las transmisiones CVT muestran el mismo comportamiento: la velocidad del motor se desvía mientras la velocidad del vehículo se estanca. Leemos los datos adaptativos de cambio de la TCM, la presión de la línea principal cuando es accesible y el estado del fluido antes de cotizar la reparación interna frente al reemplazo del convertidor de par."
      },
      {
        "title": "Demora al cambiar de marcha y apagón en frío",
        "body": "Un retraso de dos a tres segundos al pasar de Park a Drive en una mañana fría suele deberse a un desgaste en el cilindro de la bomba, una válvula reguladora de presión atascada o una viscosidad degradada del fluido. El temblor del embrague del convertidor de par se siente como conducir sobre bandas sonoras a 45 mph, lo que generalmente indica un problema en la estrategia de aplicación del embrague del convertidor de par (TCC) o en el forro del embrague del convertidor. Diferenciamos el retraso hidráulico del control electrónico del TCC mediante datos de presión y escáner."
      },
      {
        "title": "CVT vs automática tradicional",
        "body": "Las estrategias de las transmisiones CVT Nissan/Jatco, Honda i-MMD y Toyota e-CVT difieren radicalmente de las unidades planetarias de 6 a 10 velocidades. El silbido de la CVT con partículas metálicas en el fluido suele indicar daño en la correa y las poleas; por lo tanto, el servicio de solo cambio de fluido no es viable. Las transmisiones automáticas tradicionales pueden sobrevivir con un cambio de fluido de calidad si los residuos en el cárter son mínimos. Identificamos el tipo de unidad, leemos las cartas de servicio técnico (TSB) del fabricante y evaluamos el fluido antes de recomendar la reconstrucción, el reemplazo o el servicio."
      }
    ]
  },
  "technical": {
    "eyebrow": "Ciencia de la transmisión",
    "title": "Tabla de colores de fluidos, CVT vs planetario, reaprendizaje de la TCM",
    "intro": "Las fallas en la transmisión son costosas; nuestra evaluación técnica comienza con el estado del fluido, la identificación de la unidad y los datos adaptativos antes de recomendar un lavado, reparación o reconstrucción.",
    "cards": [
      {
        "title": "Color del fluido de transmisión automática",
        "body": "Un color rojo brillante o rosado sin olor a quemado indica que está en buen estado. El color marrón muestra envejecimiento y agotamiento de los aditivos. El color marrón oscuro o negro con olor a quemado significa daño por calor, lo que probablemente indica desgaste interno del embrague. Los destellos metálicos en el imán del cárter confirman la pérdida de material de fricción. Documentamos el color, el olor y los residuos antes de recomendar el alcance del servicio."
      },
      {
        "title": "CVT vs automático planetario tradicional",
        "body": "Las transmisiones CVT Nissan/Jatco utilizan correas de acero en poleas variables con fluido modificado para fricción específico; el fluido incorrecto provoca patinaje y sobrecalentamiento. Las unidades tradicionales de 6 a 10 velocidades utilizan grupos de embragues y cambios de marchas definidos. El zumbido de la CVT con metal en el fluido suele indicar reemplazo, no lavado. Identificamos el tipo de unidad a partir del VIN y del cárter antes de cotizar."
      },
      {
        "title": "Procedimientos de reaprendizaje adaptativo del TCM",
        "body": "El módulo de control de la transmisión adapta la presión y el tiempo de cambio según el desgaste. Después de la reparación del cuerpo de válvulas, el cambio de fluido o la desconexión de la batería, los cambios pueden sentirse bruscos hasta que se complete el proceso de reaprendizaje. Las transmisiones CVT de Ford, GM y Nissan a menudo requieren un reaprendizaje con herramienta de diagnóstico; nosotros restablecemos las tablas adaptativas y realizamos pruebas en carretera tanto en frío como en caliente antes de la entrega."
      },
      {
        "title": "Vibración del embrague del convertidor de par",
        "body": "El temblor del TCC se siente como bandas de ruido a 45 mph: generalmente se debe a la estrategia de acoplamiento del convertidor, fluido degradado o forro desgastado del convertidor. Diferenciamos el retraso hidráulico del control electrónico del TCC mediante datos de presión y escáner. Un diagnóstico erróneo del temblor lleva a reconstrucciones innecesarias cuando el fluido y la estrategia del TCC son la verdadera solución."
      }
    ],
    "tableTitle": "Tabla de color y condición del fluido de transmisión",
    "table": {
      "caption": "Guía de estado del fluido de transmisión automática",
      "columns": [
        "Apariencia",
        "Olor",
        "Acción típica"
      ],
      "rows": [
        {
          "label": "Rojo brillante / rosa",
          "values": [
            "Normal",
            "Reparable — revisar el pan si corresponde"
          ]
        },
        {
          "label": "Marrón claro",
          "values": [
            "Ligeramente envejecido",
            "Cambio de fluido si el intervalo es debido"
          ]
        },
        {
          "label": "Marrón oscuro",
          "values": [
            "Aroma quemado",
            "Inspeccionar los escombros del cárter; puede ser necesario realizar reparaciones"
          ]
        },
        {
          "label": "Negro + tostado",
          "values": [
            "Quemado",
            "Evaluación de desmontaje: el enjuague por sí solo es riesgoso"
          ]
        },
        {
          "label": "Metal sobre imán",
          "values": [
            "N/A",
            "Desgaste interno — reconstrucción/reemplazo"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Ruta de diagnóstico",
    "title": "Pasos de evaluación de la transmisión",
    "intro": "El trabajo mayor de transmisión es costoso; nuestro proceso está diseñado para demostrar qué falló antes de que apruebe el desmontaje.",
    "bgImageAlt": "Servicios de transmisión en RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Inspección de fluidos y bandeja",
        "body": "El color, el olor, el nivel y los residuos magnéticos nos indican cuánto material de fricción ha circulado. El barniz quemado indica daño por calor; documentamos todo antes de realizar cualquier drenaje."
      },
      {
        "step": "02",
        "title": "Escaneo y datos adaptativos",
        "body": "Cuenta de deslizamiento de engranajes, comando del solenoide frente a la presión y códigos almacenados de la TCM. Los patrones de solenoides de cambio de Ford difieren de las estrategias del GM 6L80; el conocimiento de la plataforma es importante."
      },
      {
        "step": "03",
        "title": "Prueba en carretera y verificación de frenado",
        "body": "Pruebas de calidad de cambio en frío y caliente, sacudida al acoplamiento del TCC y pruebas de presión de línea manual cuando existan adaptadores. Se registra el historial de remolque en las pendientes de la I-70: el calor destruye las transmisiones remolcadoras."
      },
      {
        "step": "04",
        "title": "Alcance de reconstrucción vs. reemplazo",
        "body": "Las unidades con alto kilometraje que presentan metal en el cárter pueden beneficiarse de la reconstrucción con garantía. La reparación en el vehículo es adecuada para fugas en el cuerpo de válvulas o en componentes externos. Cotizamos ambas opciones cuando son viables."
      },
      {
        "step": "05",
        "title": "Estimación por escrito y cronograma",
        "body": "Mano de obra a $120/hora más refacciones — alcance de la revisión, servicio de fluidos o reparación de sello del eje — aprobados antes de desarmar el caso."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Servicios ofrecidos",
    "title": "Trabajos de transmisión que realizamos",
    "intro": "Desde el mantenimiento de fluidos hasta la coordinación de reconstrucciones completas, RKC se encarga de los diagnósticos y el trabajo mecánico que los conductores de Englewood necesitan.",
    "groups": [
      {
        "category": "Fluidos y mantenimiento",
        "items": [
          "Cambio de fluido según especificaciones del fabricante con filtro nuevo cuando sea posible",
          "Inspección de pan-drop con documentación de residuos",
          "Reparación de líneas de enfriador y fugas externas"
        ]
      },
      {
        "category": "Diagnóstico y reparación",
        "items": [
          "Prueba del cuerpo de válvulas y solenoides",
          "Aislamiento de vibración y ruido de cojinete del convertidor de par",
          "Servicio de embrague manual, cilindro esclavo y cable de la palanca de cambios"
        ]
      },
      {
        "category": "Coordinación de reconstrucción",
        "items": [
          "Evaluación interna de desmontaje y abastecimiento de piezas",
          "Cotizaciones comparativas de unidades remanufacturadas cuando sea apropiado",
          "Verificación de reinicio adaptativo post-instalación y prueba en carretera"
        ]
      },
      {
        "category": "Contexto local",
        "items": [
          "Servicio de grúa y evaluación de estrés térmico para condiciones de montaña",
          "Intervalos de servicio de transmisión para camiones de flota",
          "Experiencia en patrones de falla específicos de CVT"
        ]
      }
    ]
  },
  "labor": {
    "title": "Transparencia en la mano de obra de transmisiones",
    "description": "La factura de diagnóstico y reparación de transmisión es de $120 por hora, con un alcance por escrito antes de desmontar. El servicio de fluido, la reparación de sellos y la reconstrucción requieren aprobación por separado; sin sorpresas con la división de la caja."
  },
  "faq": {
    "title": "Preguntas sobre la transmisión",
    "intro": "Diferencia entre el cambio de fluido y el vaciado del cárter, vida útil de la transmisión CVT, plazos de reconstrucción y cuándo dejar de conducir un vehículo con patinaje."
  },
  "areaLabel": "servicio de transmisión",
  "finalCta": {
    "title": "¿La transmisión está fallando?",
    "description": "Agende su diagnóstico en RKC en la Avenida Evans. Leemos el fluido, escaneamos los datos de la TCM y cotizamos la solución adecuada — servicio, reparación o reconstrucción — antes de que se generen gastos mayores.",
    "secondaryCta": "Agendar servicio"
  },
  "relatedSlug": "transmission-services-englewood-co",
  "faqs": [
    {
      "question": "¿Cómo sé si mi transmisión está patinando?",
      "answer": "El patinaje se siente como si las RPM del motor aumentaran sin que la velocidad del vehículo lo refleje, especialmente durante el cambio de 2 a 3 o al subir la I-70 con carga. El retraso en el enganche al pasar de Park a Drive, los cambios bruscos y el olor a fluido quemado son señales de advertencia relacionadas. Inspeccionamos el color del fluido, los residuos magnéticos y escaneamos los datos adaptativos de la TCM antes de recomendar un servicio de fluido o una reparación interna."
    },
    {
      "question": "¿Siempre es la solución correcta un cambio de fluido de transmisión?",
      "answer": "No. Un lavado en una unidad que patina, con fluido oscuro y residuos metálicos, puede empeorar la falla al alterar el material de los embragues sin reparar los paquetes desgastados. La inspección mediante el vaciado del cárter, junto con el análisis de residuos, nos indica si es adecuado el servicio de fluido, la reparación del cuerpo de válvulas o una reconstrucción completa. Nunca recomendamos un servicio de lavado únicamente cuando los datos muestran un desgaste interno."
    },
    {
      "question": "¿Cuál es la diferencia entre el servicio de transmisión CVT y el automático tradicional?",
      "answer": "Las transmisiones CVT utilizan correas o cadenas de acero en poleas de variación continua con modificadores específicos de fricción del fluido; el fluido incorrecto provoca patinaje y sobrecalentamiento. Las transmisiones automáticas planetarias tradicionales tienen cambios de marcha definidos y filtros generalmente reparables. El silbido de las CVT con presencia de partículas metálicas en el cárter a menudo requiere reemplazo en lugar de mantenimiento. Identificamos el tipo de unidad y seguimos los procedimientos de fluido y reparación del fabricante."
    },
    {
      "question": "¿Debería reconstruir mi transmisión o instalar una unidad remanufacturada?",
      "answer": "El reacondicionamiento en el taller es adecuado para fallas reparables del cuerpo de válvulas o de componentes individuales, cuando el cárter y las piezas rígidas están en buen estado. Las unidades con alto kilometraje que presentan residuos pesados en el cárter suelen requerir reemplazos reacondicionados con garantía. Cotizamos ambas opciones cuando son viables, para que usted elija en función del costo, el tiempo de inactividad y la cobertura de la garantía; siempre con su aprobación por escrito antes de proceder al desmontaje."
    },
    {
      "question": "¿Cuánto cuesta la reparación de la transmisión en Englewood?",
      "answer": "El servicio de fluidos comienza alrededor de $179 más el costo del fluido; las reparaciones externas menores y los trabajos de sellado varían según las horas de mano de obra a $120/hr. Una reparación mayor o el reemplazo se cotiza después del diagnóstico, a menudo miles de dólares dependiendo del tipo de unidad y las piezas. Documentamos el estado del fluido y los datos del escáner para que usted entienda por qué el alcance se cotiza de esta manera."
    },
    {
      "question": "¿El remolque o la conducción en montaña pueden dañar mi transmisión?",
      "answer": "El calor es el principal causante de fallos. Remolcar en pendientes sin un sistema de refrigeración adecuado, cambios de marcha bruscos repetidos en el tráfico y cambios de fluido pospuestos degradan los modificadores de fricción y sobrecalientan los grupos de embrague. Durante el diagnóstico, le preguntamos sobre su historial de remolque e inspeccionamos las líneas del enfriador y el estado del fluido: el servicio preventivo de fluidos en los intervalos recomendados por el fabricante prolonga la vida útil de los vehículos que se utilizan para desplazarse en Colorado."
    },
    {
      "question": "¿Qué le indica el color del fluido de la transmisión?",
      "answer": "El fluido de color rojo brillante o rosado y sin olor a quemado es saludable. El fluido marrón indica envejecimiento y agotamiento de aditivos. El color marrón oscuro o negro con olor a quemado significa daño por calor, lo que probablemente indica desgaste interno del embrague. El brillo metálico en el imán del cárter confirma la pérdida de material de fricción. Documentamos el color, el olor y los residuos antes de recomendar el servicio de fluido o la desmontaje."
    },
    {
      "question": "¿Qué es un reaprendizaje de la TCM y cuándo es necesario?",
      "answer": "El módulo de control de la transmisión adapta la presión y el tiempo de cambio según el desgaste. Después de una reparación del cuerpo de válvulas, un cambio de fluido o una desconexión de la batería, la calidad del cambio puede sentirse brusca hasta que los datos adaptativos se reaprendan. Algunas plataformas requieren procedimientos de reaprendizaje con herramienta de diagnóstico, especialmente las CVT de Ford, GM y Nissan. Nosotros restablecemos las tablas adaptativas y realizamos una prueba en carretera con el motor caliente y frío antes de la entrega."
    },
    {
      "question": "¿En qué se diferencian las fallas de la transmisión CVT y las automáticas tradicionales?",
      "answer": "Las transmisiones automáticas planetarias tradicionales fallan en los grupos de embragues, las bandas y los embragues del convertidor de par; a menudo se pueden recuperar con una reconstrucción si se detectan a tiempo. El daño a la correa y las poleas de la transmisión CVT por el uso de fluido incorrecto o sobrecalentamiento generalmente requiere reemplazo, no solo un cambio de fluido. Un silbido metálico en el fluido CVT es una señal de alerta. Identificamos el tipo de unidad a partir del VIN y la inspección del cárter antes de cotizar el alcance del servicio."
    }
  ]
},
} as const;

export function transmissionServicesBodyCopy(lang: Lang) {
  return TRANSMISSION_SERVICES_BODY[lang] ?? TRANSMISSION_SERVICES_BODY.en;
}
