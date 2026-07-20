import type { Lang } from '@/lib/language';

/** Service page body copy — ES via Bifrost Spark vllm/smart (smart-spark). */
export const ELECTRICAL_SYSTEM_BODY = {
  en: {
  "breadcrumb": "Electrical System",
  "hero": {
    "imageAlt": "Electrical System at RKC Automotive Englewood CO",
    "eyebrow": "Electrical · Englewood, CO",
    "title": "Auto Electrical System Repair in Englewood, CO",
    "description": "No-start, dim lights, or parasitic drain killing your battery overnight? We test starting and charging circuits, trace wiring faults, and repair alternators and starters — with documented voltage readings on every estimate.",
    "primaryCta": "Electrical Diagnosis",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "Replacing the battery without testing the alternator is guesswork.",
    "body": "A new battery on a weak alternator dies in three days — and you blame the parts store. Modern Englewood vehicles run 30+ modules that draw milliamp parasitic current; a stuck relay or aftermarket accessory can flatten a group 24 overnight. We measure resting draw, alternator ripple, and starter amperage before recommending parts — so the fix matches the circuit that failed."
  },
  "symptoms": {
    "eyebrow": "Electrical faults",
    "title": "Common electrical failure patterns",
    "intro": "Electrical problems look like engine problems until you read voltage — we start with the battery and work upstream.",
    "cards": [
      {
        "title": "Slow crank & no-start",
        "body": "Cranking below 9.6 volts at the starter often means weak battery or high-resistance cables — not always a bad starter. Heat-soaked starters on V8 trucks fail intermittently after the third stop of the day. We voltage-drop test positive and ground circuits under load before quoting a $400 starter on a $40 cable."
      },
      {
        "title": "Alternator & warning lights",
        "body": "Battery light on at idle that goes out at 2,000 RPM can be a slipping serpentine belt or failing diode trio. Ripple above 500 mV AC at the battery means toasted rectifier plates. We scope charging voltage across RPM range and load — headlights and blower on — before swapping alternators."
      },
      {
        "title": "Parasitic drain & module wake",
        "body": "Dead battery after 48 hours parked means a module not sleeping — aftermarket amps, dashcams hardwired wrong, or a stuck GEM on Ford trucks. We measure amp draw after door-trigger shutdown timers expire, then pull fuses to isolate the circuit. Wiring harness rub-through on unibody pinch welds is common on high-mileage Denver commuters."
      }
    ]
  },
  "technical": {
    "eyebrow": "Electrical diagnostics",
    "title": "Parasitic draw, alternator ripple & CAN bus fundamentals",
    "intro": "Modern Englewood vehicles run 30+ modules on shared networks. We measure current draw after shutdown, scope alternator ripple under load, and trace CAN communication faults — not just swap batteries and alternators.",
    "cards": [
      {
        "title": "Parasitic draw isolation",
        "body": "After modules sleep — typically 20–45 minutes post-shutdown — total draw should be under 50 mA on most vehicles. Draw above 100–150 mA flattens a battery in days. We measure at the battery, then pull fuses to isolate the circuit. Aftermarket dashcams, amps, and stuck relays are weekly culprits on Denver commuters."
      },
      {
        "title": "Alternator ripple test",
        "body": "Healthy alternators produce smooth DC under 500 mV AC ripple at the battery. High ripple means failing diode trio or rectifier plates — pulsed voltage that cannot fully charge. We scope output under load with headlights and blower on before recommending alternator replacement over a $40 ground strap fix."
      },
      {
        "title": "Voltage drop testing",
        "body": "Crank sag below 9.6V with good battery capacity points to high resistance in positive cables, ground straps, or starter trigger circuits. We voltage-drop each leg under load — a $0 cable clean prevents a $400 starter misdiagnosis on heat-soaked V8 trucks."
      },
      {
        "title": "CAN bus communication basics",
        "body": "Controller Area Network connects PCM, BCM, ABS, HVAC, and steering modules on two-wire high-speed lines. U-codes mean a module stopped responding — from power/ground loss, wiring rub-through on unibody pinch welds, or failed module. We verify termination resistance and module wake before parts replacement."
      }
    ],
    "tableTitle": "Electrical test reference values",
    "table": {
      "caption": "Typical electrical system test values",
      "columns": [
        "Test",
        "Good range",
        "Indicates if bad"
      ],
      "rows": [
        {
          "label": "Resting battery voltage",
          "values": [
            "12.4–12.7 V",
            "Below 12.4 = discharge or weak cell"
          ],
          "highlight": 1
        },
        {
          "label": "Crank voltage",
          "values": [
            "Above 9.6 V",
            "Below = cable, ground, or battery"
          ]
        },
        {
          "label": "Charging voltage",
          "values": [
            "13.5–14.5 V loaded",
            "Low = belt, alt; high = regulator"
          ]
        },
        {
          "label": "Alternator ripple",
          "values": [
            "< 500 mV AC",
            "High = diode/rectifier failure"
          ]
        },
        {
          "label": "Parasitic draw (asleep)",
          "values": [
            "< 50 mA typical",
            "> 100 mA = drain hunt needed"
          ],
          "highlight": 1
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Test sequence",
    "title": "Electrical diagnostic workflow",
    "intro": "Voltage, resistance, and current — measured, not assumed.",
    "bgImageAlt": "Electrical System at RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Battery health test",
        "body": "Conductance or load test with printed results. Terminals cleaned and torque-checked before any charging-system diagnosis."
      },
      {
        "step": "02",
        "title": "Charging system analysis",
        "body": "Alternator output, ripple, and belt tension verified under electrical load. PCM charging setpoints compared on vehicles with smart charge."
      },
      {
        "step": "03",
        "title": "Starter circuit drop test",
        "body": "Voltage drop on positive cable, ground strap, and starter trigger wire isolates high resistance vs. mechanical starter failure."
      },
      {
        "step": "04",
        "title": "Parasitic & wiring",
        "body": "Milliamp draw test and fuse isolation for overnight drains. Wiring repaired with heat-shrink, solder, and loom — not twist-and-tape."
      },
      {
        "step": "05",
        "title": "Repair verification",
        "body": "Re-test after part install. No-start tickets get a cold-start crank log before you pick up from our Englewood lot."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Repairs",
    "title": "Electrical services we provide",
    "intro": "From battery replacement to harness repair — one shop for starting, charging, and lighting faults.",
    "groups": [
      {
        "category": "Starting & charging",
        "items": [
          "Battery test, install, and terminal service",
          "Alternator and starter replacement",
          "Voltage-drop testing on main cables"
        ]
      },
      {
        "category": "Lighting & accessories",
        "items": [
          "Headlight, taillight, and trailer wiring repair",
          "Power-window and lock motor diagnosis",
          "Aftermarket accessory integration done safely"
        ]
      },
      {
        "category": "Diagnostics",
        "items": [
          "Parasitic draw isolation",
          "CAN-bus communication fault tracing",
          "Module power and ground integrity checks"
        ]
      },
      {
        "category": "Fleet & commercial",
        "items": [
          "Work-truck dual-battery systems",
          "Liftgate and upfitter electrical loads",
          "Priority no-start service when available"
        ]
      }
    ]
  },
  "labor": {
    "title": "Electrical labor transparency",
    "description": "Electrical diagnostics from $129 with repair labor at $120/hr. Test results stay on your invoice — resistance readings, draw measurements, and parts spec."
  },
  "faq": {
    "title": "Electrical system questions",
    "intro": "Battery vs alternator, parasitic drain causes, and when a no-start is a starter."
  },
  "areaLabel": "electrical system repair",
  "finalCta": {
    "title": "Electrical problem leaving you stranded?",
    "description": "Diagnose starting and charging at RKC on Evans Ave. Tested circuits, quoted repairs, $120/hr labor — before you buy parts that do not fix the fault.",
    "secondaryCta": "Schedule diagnosis"
  },
  "relatedSlug": "electrical-system-englewood-co",
  "faqs": [
    {
      "question": "How do I know if my alternator or battery is bad?",
      "answer": "Batteries fail crank tests and show high internal resistance; alternators fail to hold 13.5–14.5V under load or produce AC ripple indicating diode damage. We test both before recommending parts. Replacing only the battery on a weak alternator repeats the no-start in days."
    },
    {
      "question": "What causes a parasitic battery drain?",
      "answer": "Modules that fail to sleep, aftermarket accessories wired to constant power, stuck relays, and interior lights left on circuits draw milliamps overnight until the battery flatlines. We measure draw after shutdown timers expire and isolate circuits by fuse pull — documenting the offending branch before repair."
    },
    {
      "question": "Do you repair wiring harnesses and shorts?",
      "answer": "Yes — we repair chafed harnesses with solder, heat-shrink, and loom rather than tape wraps. Rub-through on body pinch welds and rodent damage are common on high-mileage Denver vehicles. We trace shorts with schematic-based testing instead of replacing entire harnesses when a section repair is sound."
    },
    {
      "question": "Can a bad starter drain my battery?",
      "answer": "A starter with shorted windings or a stuck solenoid can draw excessive current and heat — sometimes failing intermittently on hot restart. We measure starter amperage and voltage drop on cables. A good battery with slow crank may be cables or starter, not capacity."
    },
    {
      "question": "How much does electrical diagnosis cost?",
      "answer": "Electrical diagnostics start from $129 with labor at $120/hr for repairs. Complex CAN-bus or multi-circuit faults may require additional time — we communicate before expanding scope. Test results stay on your invoice."
    },
    {
      "question": "Do you install aftermarket electrical accessories?",
      "answer": "We integrate lights, radios, and fleet equipment with proper fusing and wire gauge — avoiding tap-into circuits that wake modules or void warranties. Poor accessory installs are a leading cause of parasitic drain complaints we diagnose weekly."
    },
    {
      "question": "What is a parasitic draw test and what is normal?",
      "answer": "After modules enter sleep mode — typically 20–45 minutes post-shutdown — total draw should be under 50 milliamps on most vehicles. Draw above 100–150 mA flattens a battery in days. We measure amp draw at the battery, then pull fuses to isolate the circuit. Aftermarket dashcams, amps, and stuck relays are common culprits on Denver commuters."
    },
    {
      "question": "What is alternator ripple and why does it matter?",
      "answer": "Healthy alternators produce smooth DC under 500 mV AC ripple at the battery. High ripple means failing diode trio or rectifier plates — the battery receives pulsed voltage that cannot fully charge. We scope charging output under load with headlights and blower on before recommending alternator replacement over a $40 ground strap fix."
    },
    {
      "question": "What is CAN bus and how does it relate to electrical faults?",
      "answer": "Controller Area Network connects modules — PCM, BCM, ABS, HVAC, steering — on two-wire high-speed data lines. Communication faults set U-codes and cause symptoms from no-start to random warning lights. We verify termination resistance, check power and ground at modules, and use scan tools to see which module stopped responding — not replace parts blindly."
    }
  ]
},
  es: {
  "breadcrumb": "Sistema Eléctrico",
  "hero": {
    "imageAlt": "Sistema Eléctrico en RKC Automotive Englewood CO",
    "eyebrow": "Eléctrico · Englewood, CO",
    "title": "Reparación de Sistemas Eléctricos de Automóviles en Englewood, CO",
    "description": "¿El auto no enciende, las luces están tenues o un drenaje parasitario está agotando tu batería durante la noche? Realizamos pruebas en los circuitos de arranque y carga, rastreamos fallas en el cableado y reparamos alternadores y motores de arranque, con lecturas de voltaje documentadas en cada cotización.",
    "primaryCta": "Diagnóstico Eléctrico",
    "callPrefix": "Llama"
  },
  "reality": {
    "quote": "Reemplazar la batería sin probar el alternador es adivinar.",
    "body": "Una batería nueva con un alternador débil falla en tres días, y tú culpas a la tienda de repuestos. Los vehículos modernos de Englewood tienen más de 30 módulos que consumen corriente parásita en miliamperios; un relé atascado o un accesorio posterior pueden dejar sin carga un grupo 24 en una noche. Medimos la carga en reposo, la ondulación del alternador y el amperaje del motor de arranque antes de recomendar repuestos, para que la reparación coincida con el circuito que falló."
  },
  "symptoms": {
    "eyebrow": "Fallos eléctricos",
    "title": "Patrones comunes de fallo eléctrico",
    "intro": "Los problemas eléctricos parecen problemas del motor hasta que lees el voltaje; comenzamos con la batería y trabajamos hacia arriba.",
    "cards": [
      {
        "title": "Arranque lento y no enciende",
        "body": "El arranque por debajo de 9.6 voltios en el motor de arranque suele indicar una batería débil o cables de alta resistencia, no necesariamente un motor de arranque defectuoso. Los motores de arranque sobrecalentados en camiones V8 fallan intermitentemente después del tercer parada del día. Realizamos pruebas de caída de voltaje en los circuitos positivos y de tierra bajo carga antes de cotizar un motor de arranque de $400 por un cable de $40."
      },
      {
        "title": "Alternador y luces de advertencia",
        "body": "La luz del cargador encendida en ralentí que se apaga a 2,000 RPM puede deberse a una correa serpentina deslizante o a un trio de diodos defectuoso. Una ondulación superior a 500 mV CA en la batería indica placas rectificadoras quemadas. Escopeamos el voltaje de carga en todo el rango de RPM y bajo carga — con faros y ventilador encendidos — antes de cambiar los alternadores."
      },
      {
        "title": "Drenaje parasitario y activación de módulos",
        "body": "La batería muerta después de 48 horas estacionado indica que un módulo no entra en modo de reposo: amplificadores posteriores, cámaras de tablero conectadas en duro de forma incorrecta o un módulo GEM atascado en camiones Ford. Medimos el consumo de amperios después de que expiren los temporizadores de apagado por activación de puerta, luego extraemos los fusibles para aislar el circuito. El desgaste por fricción del arnés de cableado en las uniones de la carrocería unificada es común en vehículos de alta kilometraje para desplazamientos diarios."
      }
    ]
  },
  "technical": {
    "eyebrow": "Diagnóstico eléctrico",
    "title": "Consumo parasitario, ondulación del alternador y fundamentos del bus CAN",
    "intro": "Los vehículos modernos de Englewood utilizan más de 30 módulos en redes compartidas. Medimos el consumo de corriente después del apagado, analizamos las oscilaciones del alternador bajo carga y rastreamos fallos de comunicación CAN, no simplemente reemplazamos baterías y alternadores.",
    "cards": [
      {
        "title": "Aislamiento de consumo parásito",
        "body": "Después de que los módulos entran en reposo —típicamente entre 20 y 45 minutos después de apagar el vehículo—, el consumo total debe ser inferior a 50 mA en la mayoría de los vehículos. Un consumo superior a 100–150 mA agota la batería en pocos días. Medimos en la batería y luego retiramos los fusibles para aislar el circuito. Las cámaras de dashcam posteriores al fabricante, los amplificadores y los relés pegados son los culpables semanales en los conductores de Denver."
      },
      {
        "title": "Prueba de ondulación del alternador",
        "body": "Los alternadores en buen estado producen una corriente continua suave con una ondulación AC inferior a 500 mV en la batería. Una ondulación elevada indica un fallo en el trío de diodos o en las placas rectificadoras, lo que genera una tensión pulsada que no puede cargar completamente la batería. Realizamos un análisis de la salida bajo carga con las luces y el ventilador encendidos antes de recomendar el reemplazo del alternador, en lugar de una solución más económica como la reparación de la correa de tierra por $40."
      },
      {
        "title": "Pruebas de caída de voltaje",
        "body": "La caída de voltaje del cigüeñal por debajo de 9.6V con una capacidad de batería adecuada indica alta resistencia en los cables positivos, correas de tierra o circuitos de activación del motor de arranque. Medimos la caída de voltaje en cada rama bajo carga: una limpieza de cable de $0 evita un diagnóstico erróneo del motor de arranque por $400 en camiones V8 sobrecalentados."
      },
      {
        "title": "Conceptos básicos de comunicación del bus CAN",
        "body": "La red de área de control (CAN) conecta los módulos PCM, BCM, ABS, HVAC y de dirección mediante líneas de alta velocidad de dos hilos. Los códigos U indican que un módulo dejó de responder, lo cual puede deberse a pérdida de alimentación/tierra, desgaste del aislamiento por fricción en las soldaduras de canto de la carrocería unibody, o fallo del módulo. Verificamos la resistencia de terminación y el despertar del módulo antes de proceder con el reemplazo de piezas."
      }
    ],
    "tableTitle": "Valores de referencia para pruebas eléctricas",
    "table": {
      "caption": "Valores típicos de prueba del sistema eléctrico",
      "columns": [
        "Prueba",
        "Rango correcto",
        "Indica si está mal"
      ],
      "rows": [
        {
          "label": "Voltaje de la batería en reposo",
          "values": [
            "12.4–12.7 V",
            "Menor de 12.4 = descarga o celda débil"
          ],
          "highlight": "1"
        },
        {
          "label": "Voltaje del cigüeñal",
          "values": [
            "Por encima de 9.6 V",
            "Abajo = cable, tierra o batería"
          ]
        },
        {
          "label": "Voltaje de carga",
          "values": [
            "13.5–14.5 V bajo carga",
            "Bajo = correa, alternador; alto = regulador"
          ]
        },
        {
          "label": "Ondulación del alternador",
          "values": [
            "< 500 mV CA",
            "Alto = falla del diodo/rectificador"
          ]
        },
        {
          "label": "Consumo parásito (en reposo)",
          "values": [
            "< 50 mA típico",
            "> 100 mA = se necesita búsqueda de drenaje"
          ],
          "highlight": "1"
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Secuencia de prueba",
    "title": "Flujo de trabajo de diagnóstico eléctrico",
    "intro": "Voltaje, resistencia y corriente: medidos, no asumidos.",
    "bgImageAlt": "Sistema eléctrico en RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Prueba de salud de la batería",
        "body": "Prueba de conductancia o carga con resultados impresos. Los terminales se limpian y se revisa el par de apriete antes de cualquier diagnóstico del sistema de carga."
      },
      {
        "step": "02",
        "title": "Análisis del sistema de carga",
        "body": "Se verificó la salida del alternador, el rizado y la tensión de la correa bajo carga eléctrica. Se compararon los puntos de ajuste de carga del PCM en vehículos con carga inteligente."
      },
      {
        "step": "03",
        "title": "Prueba de caída de voltaje en el circuito del motor de arranque",
        "body": "La caída de voltaje en el cable positivo, la correa de tierra y el cable de disparo del motor de arranque aísla la alta resistencia frente a una falla mecánica del motor de arranque."
      },
      {
        "step": "04",
        "title": "Parasitic & wiring",
        "body": "Prueba de consumo en miliamperios y aislamiento de fusibles para fugas nocturnas. Cableado reparado con termoretráctil, soldadura y manguito protector, no con cinta aislante."
      },
      {
        "step": "05",
        "title": "Verificación de reparación",
        "body": "Vuelve a probar después de instalar la pieza. Los tickets de fallo de arranque deben incluir un registro de arranque en frío antes de recoger el vehículo de nuestra ubicación en Englewood."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Reparaciones",
    "title": "Servicios eléctricos que ofrecemos",
    "intro": "Desde el reemplazo de la batería hasta la reparación de arneses: un solo taller para fallas de encendido, carga e iluminación.",
    "groups": [
      {
        "category": "Arranque y carga",
        "items": [
          "Prueba, instalación y servicio de bornes de la batería",
          "Reemplazo del alternador y el motor de arranque",
          "Prueba de caída de voltaje en los cables principales"
        ]
      },
      {
        "category": "Iluminación y accesorios",
        "items": [
          "Reparación de cableado de faros, luces traseras y remolque",
          "Diagnóstico del motor de la ventanilla eléctrica y la cerradura",
          "Integración segura de accesorios posteriores"
        ]
      },
      {
        "category": "Diagnósticos",
        "items": [
          "Aislamiento de consumo parasitario",
          "Detección de fallos de comunicación en bus CAN",
          "Verificaciones de integridad de alimentación y masa de módulos"
        ]
      },
      {
        "category": "Flota y comercial",
        "items": [
          "Sistemas de doble batería para camiones de trabajo",
          "Cargas eléctricas de portón trasero y equipamiento personalizado",
          "Servicio prioritario de no encendido cuando esté disponible"
        ]
      }
    ]
  },
  "labor": {
    "title": "Transparencia en la mano de obra eléctrica",
    "description": "Diagnóstico eléctrico desde $129 con mano de obra de reparación a $120/hora. Los resultados de las pruebas permanecen en su factura: lecturas de resistencia, mediciones de consumo y especificaciones de las piezas."
  },
  "faq": {
    "title": "Preguntas sobre el sistema eléctrico",
    "intro": "Batería vs. alternador, causas de drenaje parasitario y cuándo un fallo de encendido se debe al motor de arranque."
  },
  "areaLabel": "reparación del sistema eléctrico",
  "finalCta": {
    "title": "¿Un problema eléctrico te deja varado?",
    "description": "Diagnostica el sistema de arranque y carga en RKC en la Ave Evans. Circuitos probados, presupuesto de reparaciones, $120/hr de mano de obra — antes de que compres piezas que no solucionan el fallo.",
    "secondaryCta": "Agendar diagnóstico"
  },
  "relatedSlug": "electrical-system-englewood-co",
  "faqs": [
    {
      "question": "¿Cómo sé si mi alternador o batería están malos?",
      "answer": "Las baterías fallan las pruebas de arranque y muestran alta resistencia interna; los alternadores no logran mantener 13.5–14.5V bajo carga o producen ondulación de CA que indica daño en los diodos. Probamos ambos antes de recomendar repuestos. Reemplazar solo la batería cuando el alternador está débil provoca que el vehículo no arranque en días."
    },
    {
      "question": "¿Qué causa el drenaje parasitario de la batería?",
      "answer": "Los módulos que no entran en modo de reposo, los accesorios posteriores conectados a alimentación constante, los relés atascados y las luces interiores dejadas en circuitos activos consumen miliamperios durante la noche hasta que la batería se agota por completo. Medimos el consumo después de que expiren los temporizadores de apagado y aislamos los circuitos mediante la extracción de fusibles, documentando la rama defectuosa antes de la reparación."
    },
    {
      "question": "¿Reparan arneses de cableado y cortocircuitos?",
      "answer": "Sí — reparamos arneses con aislamiento desgastado mediante soldadura, termorretráctil y manguito protector, en lugar de usar cinta aislante. El desgaste por fricción en las soldaduras de la carrocería y los daños por roedores son comunes en vehículos de alto kilometraje en Denver. Detectamos cortocircuitos mediante pruebas basadas en esquemas eléctricos, en lugar de reemplazar arneses completos cuando una reparación parcial es viable."
    },
    {
      "question": "¿Puede un motor de arranque defectuoso agotar la batería?",
      "answer": "Un motor de arranque con devanados en cortocircuito o un solenoide atascado puede absorber una corriente excesiva y generar calor, lo que a veces provoca fallos intermitentes al reiniciar con el motor caliente. Medimos la amperaje del motor de arranque y la caída de tensión en los cables. Una batería en buen estado con un giro lento puede indicar un problema en los cables o en el motor de arranque, no en la capacidad de la batería."
    },
    {
      "question": "¿Cuánto cuesta el diagnóstico eléctrico?",
      "answer": "El diagnóstico eléctrico comienza en $129, con mano de obra a $120/hora para reparaciones. Las fallas complejas en el bus CAN o en múltiples circuitos pueden requerir tiempo adicional; nos comunicamos antes de ampliar el alcance. Los resultados de las pruebas se incluyen en su factura."
    },
    {
      "question": "¿Instalan accesorios eléctricos después de la venta?",
      "answer": "Integramos luces, radios y equipos de flota con fusibles adecuados y calibre de cable correcto, evitando conexiones directas que activen módulos o anulen garantías. Las instalaciones deficientes de accesorios son una causa principal de las quejas por drenaje parasitario que diagnosticamos semanalmente."
    },
    {
      "question": "¿Qué es una prueba de drenaje parasitario y cuál es el valor normal?",
      "answer": "Después de que los módulos entran en modo de suspensión —típicamente entre 20 y 45 minutos después del apagado—, el consumo total debe ser inferior a 50 miliamperios en la mayoría de los vehículos. Un consumo superior a 100–150 mA agota la batería en cuestión de días. Medimos el consumo de amperios en la batería y luego retiramos los fusibles para aislar el circuito. Las dashcams aftermarket, los amplificadores y los relés pegados son las causas más comunes en los vehículos de los commuters de Denver."
    },
    {
      "question": "¿Qué es la ondulación del alternador y por qué es importante?",
      "answer": "Los alternadores en buen estado producen una corriente continua (DC) estable con una ondulación de corriente alterna (AC) inferior a 500 mV en la batería. Una ondulación elevada indica un fallo en el trio de diodos o en las placas rectificadoras; la batería recibe un voltaje pulsado que no permite una carga completa. Analizamos la salida de carga bajo carga, con faros y ventilador encendidos, antes de recomendar la sustitución del alternador en lugar de una reparación de $40 por una correa de masa."
    },
    {
      "question": "¿Qué es el bus CAN y cómo se relaciona con las fallas eléctricas?",
      "answer": "La red CAN (Controller Area Network) conecta módulos — PCM, BCM, ABS, HVAC, dirección — en líneas de datos de alta velocidad de dos hilos. Las fallas de comunicación generan códigos U y provocan síntomas que van desde el no encendido hasta luces de advertencia aleatorias. Verificamos la resistencia de terminación, revisamos la alimentación y la tierra en los módulos, y usamos herramientas de diagnóstico para identificar qué módulo dejó de responder, evitando el reemplazo ciego de piezas."
    }
  ]
},
} as const;

export function electricalSystemBodyCopy(lang: Lang) {
  return ELECTRICAL_SYSTEM_BODY[lang] ?? ELECTRICAL_SYSTEM_BODY.en;
}
