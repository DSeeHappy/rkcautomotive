import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost Nemotron (vllm/smart/smart-spark). */
export const SUSPENSION_STEERING_BODY = {
  en: {
  "breadcrumb": "Suspension & Steering",
  "hero": {
    "imageAlt": "Suspension & Steering at RKC Automotive Englewood CO",
    "eyebrow": "Ride & handling · Englewood, CO",
    "title": "Suspension & Steering Repair in Englewood, CO",
    "description": "Clunks over bumps, wandering on I-25, or uneven tire wear? We inspect shocks, struts, ball joints, tie rods, and steering racks — then align and road-test with a written estimate first.",
    "primaryCta": "Suspension Inspection",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "Alignment cannot fix a worn ball joint.",
    "body": "Shops that align first on a clunking front end are masking loose joints that will separate — Colorado potholes after winter freeze-thaw accelerate wear on Englewood streets. We load-test ball joints and tie rods, measure strut damping, and replace worn components before alignment pins are touched. You get stable handling and tires that last, not a straight steering wheel on failing hardware."
  },
  "symptoms": {
    "eyebrow": "Handling signs",
    "title": "Suspension and steering warning signs",
    "intro": "Ride quality degrades slowly until a pothole on Broadway exposes how much control you have lost.",
    "cards": [
      {
        "title": "Clunk & wander over bumps",
        "body": "A sharp clunk on uneven railroad crossings near Evans Ave often means lower ball joint or stabilizer-link slop. Highway wander with new tires points to tie-rod inner wear or a tired steering rack. We use pry-bar and dial-indicator tests with wheels loaded — not just shake the tire with the vehicle in the air where joints can hide play."
      },
      {
        "title": "Uneven tire wear patterns",
        "body": "Feathering on one edge is toe; cupping is shock failure; center wear is over-inflation. But worn struts let the tire bounce instead of maintaining contact — looks like alignment fault, fixes with dampers. We read wear patterns before recommending a four-wheel align, saving you $120 on adjustments that cannot fix mechanical slop."
      },
      {
        "title": "Power steering & EPS faults",
        "body": "Groaning pumps mean low fluid or aeration from a leaking rack seal. Electric power steering modules throw codes on GM and Ford platforms when torque sensors drift — feels like binding mid-corner. We differentiate hydraulic leaks from electronic calibration and quote rack, pump, or sensor repair based on pressure tests and scan data."
      }
    ]
  },
  "technical": {
    "eyebrow": "Alignment & wear limits",
    "title": "Alignment specs, ball joint play & strut mount diagnosis",
    "intro": "Suspension repair is safety-critical — we load-test joints, measure alignment geometry, and replace strut mounts with struts because alignment alone cannot fix mechanical slop.",
    "cards": [
      {
        "title": "Camber, caster & toe targets",
        "body": "Camber near 0° with slight negative improves cornering; toe is adjusted for tire wear and straight tracking. Thrust angle must be corrected so rear axle aim does not force front toe compensation. We provide before-and-after alignment printouts — Englewood potholes can shift subframe geometry requiring component replacement before pins are touched."
      },
      {
        "title": "Ball joint play limits",
        "body": "Load-bearing lower ball joints with vertical play under pry-bar test are a safety failure. Upper joints and tie-rod ends have tighter tolerances — we measure with dial indicators where spec exists. Clunk over railroad crossings near Evans Ave with joint play means replace before separation, especially on trucks and SUVs."
      },
      {
        "title": "Strut mount clunk on cold start",
        "body": "Strut mount bearings allow the strut to rotate with steering. Worn rubber isolators and dry bearings clunk on first bumps, then quiet as grease warms. Worn mounts cause steering bind and uneven tire wear. MacPherson strut jobs include new mounts — reusing old mounts transfers noise to the new strut within weeks."
      },
      {
        "title": "Tire wear pattern diagnosis",
        "body": "Feathering is toe; cupping is shock failure; center wear is over-inflation. Worn struts let tires bounce — looks like alignment fault but fixes with dampers. We read wear patterns before recommending a four-wheel align, saving $120 on adjustments that cannot fix mechanical slop."
      }
    ],
    "tableTitle": "Common alignment specifications (typical passenger car)",
    "tableIntro": "Exact specs are VIN-specific — this illustrates why thrust angle and camber matter for tire life.",
    "table": {
      "caption": "Typical alignment specification ranges",
      "columns": [
        "Parameter",
        "Typical spec",
        "Wear symptom if out"
      ],
      "rows": [
        {
          "label": "Front camber",
          "values": [
            "0° to −1.0°",
            "Inside or outside edge wear"
          ]
        },
        {
          "label": "Front toe",
          "values": [
            "0° to +0.10° total",
            "Feathering, pull, wander"
          ]
        },
        {
          "label": "Thrust angle",
          "values": [
            "0° ± 0.25°",
            "Dog-track, crooked steering wheel"
          ]
        },
        {
          "label": "Rear camber (if adjustable)",
          "values": [
            "Manufacturer spec",
            "Rear tire wear, instability"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Inspection flow",
    "title": "Suspension diagnosis to alignment",
    "intro": "Mechanical integrity first, geometry second — that order keeps alignments lasting.",
    "bgImageAlt": "Suspension & Steering at RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Road test & noise map",
        "body": "Reproduce clunks, drift, and brake-pedal vibration under braking — separates warped rotors from control-arm bushings."
      },
      {
        "step": "02",
        "title": "Lift inspection",
        "body": "Ball joints, tie rods, strut mounts, and sway-bar links tested under load. Boot tears on racks and CV joints noted before grease empties."
      },
      {
        "step": "03",
        "title": "Component replacement",
        "body": "Torque-to-spec fasteners, aligned strut towers, and new hardware kits where supplied. We do not reuse stretched eccentric bolts."
      },
      {
        "step": "04",
        "title": "Alignment & thrust angle",
        "body": "Four-wheel align on computerized rack with before/after printout. Thrust angle corrected so rear track guides front toe."
      },
      {
        "step": "05",
        "title": "Verification drive",
        "body": "Return drive on local streets confirms straight wheel, quiet bumps, and no ABS false-trigger from damaged tone rings during hub work."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Components",
    "title": "Steering and suspension services",
    "intro": "From daily-driver struts to work-truck leaf hardware, we service the systems that keep you pointed straight.",
    "groups": [
      {
        "category": "Wear items",
        "items": [
          "Struts, shocks, and coil springs",
          "Ball joints, tie rods, and sway-bar links",
          "Control-arm bushings and wheel bearings"
        ]
      },
      {
        "category": "Steering systems",
        "items": [
          "Power-steering pump, rack, and hose replacement",
          "Electric power steering sensor calibration",
          "Steering column U-joint and intermediate shaft"
        ]
      },
      {
        "category": "Alignment",
        "items": [
          "Four-wheel alignment with printout",
          "Camber bolt and eccentric shim correction",
          "Post-lift alignment after any front-end part swap"
        ]
      },
      {
        "category": "Colorado driving",
        "items": [
          "Pothole-damage inspections after winter",
          "Truck and SUV load-leveling shock options",
          "Lifted-vehicle alignment considerations discussed honestly"
        ]
      }
    ]
  },
  "labor": {
    "title": "Suspension labor at posted rate",
    "description": "Shocks, joints, and alignment labor bills at $120/hr with parts quoted separately. We list each component on the estimate — no bundled mystery front-end rebuilds."
  },
  "faq": {
    "title": "Suspension & steering questions",
    "intro": "Strut life, alignment frequency, ball joint safety, and when tire wear is a suspension problem."
  },
  "areaLabel": "suspension and steering repair",
  "finalCta": {
    "title": "Handling feel off?",
    "description": "Inspect suspension and steering at RKC on Evans Ave. We find the clunk, fix the joint, align the geometry — at transparent $120/hr labor.",
    "secondaryCta": "Book inspection"
  },
  "relatedSlug": "suspension-steering-englewood-co",
  "faqs": [
    {
      "question": "How do I know if I need new struts or shocks?",
      "answer": "Cupped tire wear, excessive bounce after bumps, nose dive under braking, and fluid leakage on struts indicate worn dampers. We perform bounce and visual tests plus inspect mounts and boots. Struts are often replaced as assemblies on MacPherson designs because the spring and mount are integral to safe disassembly."
    },
    {
      "question": "Why does my car pull to one side after hitting a pothole?",
      "answer": "Impact can bend control arms, shift subframe alignment, or damage tire sidewalls. We inspect for bent components before aligning — alignment alone cannot fix structural bend. Colorado spring potholes on Englewood arterials are a common cause of sudden pull and uneven tire wear."
    },
    {
      "question": "Do I need an alignment after replacing suspension parts?",
      "answer": "Yes — any front-end or rear adjustable component replacement changes geometry. We provide before-and-after alignment printouts. Replacing struts, control arms, tie rods, or steering racks without alignment leads to tire wear and wandering within weeks."
    },
    {
      "question": "What is a ball joint and why is it dangerous when worn?",
      "answer": "Ball joints connect control arms to steering knuckles and allow suspension travel. Excessive play lets the wheel camber change under load — causing clunks, wandering, and in extreme cases separation. We load-test joints with pry bars and dial indicators; worn joints are a safety repair, not a convenience item."
    },
    {
      "question": "Can bad suspension cause vibration when braking?",
      "answer": "Warped rotors cause brake pulsation, but worn control-arm bushings and loose tie rods also transmit vibration through the steering wheel. We separate brake vs. suspension causes during road test so you do not replace rotors when bushings are the real issue."
    },
    {
      "question": "How much does suspension repair cost at RKC?",
      "answer": "Strut replacement, ball joints, and alignments are quoted per axle and component at $120/hr labor plus parts. We itemize each line on the written estimate — no bundled mystery front-end packages. Alignment is typically added after any geometry-affecting repair."
    },
    {
      "question": "What alignment specs matter after suspension repair?",
      "answer": "Camber, caster, and toe are set to manufacturer spec — typically camber near 0° with slight negative for handling, toe adjusted for tire wear. Thrust angle must be corrected so rear axle aim does not force front toe compensation. We provide before-and-after alignment printouts. Englewood potholes can shift subframe geometry — we inspect for bent components before aligning."
    },
    {
      "question": "How much ball joint play is too much?",
      "answer": "Load-bearing lower ball joints with visible vertical play under pry-bar test are a safety failure — not a wait-and-see item. Upper joints and tie-rod ends have tighter tolerances. We measure with dial indicators where spec exists. A clunk over bumps with play at the joint means replace before separation — especially on trucks and SUVs on Colorado roads."
    },
    {
      "question": "What causes strut mount clunk on cold mornings?",
      "answer": "Strut mount bearings allow the strut to rotate with steering. Worn rubber isolators and dry bearings clunk on first bumps of the day, then quiet as grease warms. Worn mounts also cause steering bind and uneven tire wear. We inspect mount play during strut replacement — mounts should be replaced with struts on MacPherson designs, not reused."
    }
  ]
},
  es: {
  "breadcrumb": "Suspensión y Dirección",
  "hero": {
    "imageAlt": "Suspensión y Dirección en RKC Automotive Englewood CO",
    "eyebrow": "Manejo y Confort · Englewood, CO",
    "title": "Reparación de Suspensión y Dirección en Englewood, CO",
    "description": "¿Ruidos secos al pasar por baches, desvío en la interestatal I-25 o desgaste irregular de los neumáticos? Revisamos amortiguadores, struts, rótulas, barras de dirección y cremalleras de dirección; luego realizamos una alineación y una prueba en carretera con una estimación por escrito primero.",
    "primaryCta": "Inspección de la suspensión",
    "callPrefix": "Llamar"
  },
  "reality": {
    "quote": "La alineación no puede corregir una rótula desgastada.",
    "body": "Los talleres que alinean primero un extremo delantero con golpeteos están enmascarando juntas sueltas que se separarán — los baches de Colorado después del ciclo de congelación y descongelación invernal aceleran el desgaste en las calles de Englewood. Realizamos pruebas de carga en las rótulas y las barras de dirección, medimos el amortiguamiento de los amortiguadores y reemplazamos los componentes desgastados antes de tocar los pasadores de alineación. Obtienes un manejo estable y neumáticos que duran, no un volante recto sobre un hardware defectuoso."
  },
  "symptoms": {
    "eyebrow": "Signos de manejo",
    "title": "Signos de advertencia de suspensión y dirección",
    "intro": "La calidad de conducción se degrada lentamente hasta que un bache en Broadway expone cuánto control has perdido.",
    "cards": [
      {
        "title": "Golpes y desvío sobre baches",
        "body": "Un golpe seco en cruces de ferrocarril irregulares cerca de Evans Ave suele indicar holgura en la rótula inferior o en la barra estabilizadora. La inestabilidad en carretera con neumáticos nuevos apunta al desgaste de la rótula interior o a un sistema de dirección desgastado. Utilizamos pruebas con barra de palanca e indicador de dial con las ruedas cargadas, no simplemente sacudiendo el neumático con el vehículo en el aire, donde las juntas pueden ocultar holgura."
      },
      {
        "title": "Patrones de desgaste irregular en los neumáticos",
        "body": "El desgaste en un borde indica alineación incorrecta; el desgaste irregular indica falla en los amortiguadores; el desgaste central indica sobreinflado. Pero los amortiguadores desgastados hacen que el neumático rebote en lugar de mantener el contacto, lo que parece un problema de alineación, pero se soluciona con los amortiguadores. Leemos los patrones de desgaste antes de recomendar una alineación de cuatro ruedas, ahorrándole $120 en ajustes que no pueden corregir holgura mecánica."
      },
      {
        "title": "Fallas de dirección asistida y EPS",
        "body": "Las bombas que producen gemidos indican bajo nivel de fluido o aireación por una fuga en el sello del riel. Los módulos de dirección asistida eléctrica generan códigos de falla en plataformas GM y Ford cuando los sensores de par se desvían, lo que se siente como un atasco en medio de una curva. Diferenciamos las fugas hidráulicas de la calibración electrónica y cotizamos la reparación del riel, la bomba o el sensor según las pruebas de presión y los datos del escáner."
      }
    ]
  },
  "technical": {
    "eyebrow": "Límites de alineación y desgaste",
    "title": "Especificaciones de alineación, juego de rótulas y diagnóstico de montantes de amortiguador",
    "intro": "La reparación de la suspensión es crítica para la seguridad: sometemos las rótulas a pruebas de carga, medimos la geometría de alineación y reemplazamos los montantes de amortiguador junto con los amortiguadores, ya que la alineación por sí sola no puede corregir el juego mecánico.",
    "cards": [
      {
        "title": "Objetivos de caída, avance y convergencia",
        "body": "El ángulo de camber cercano a 0° con ligera inclinación negativa mejora el manejo; la convergencia se ajusta para el desgaste de los neumáticos y el desplazamiento recto. El ángulo de empuje debe corregirse para que la orientación del eje trasero no obligue a compensar la convergencia delantera. Proporcionamos impresiones de alineación antes y después: los baches de Englewood pueden desplazar la geometría del subchasis, lo que requiere el reemplazo de componentes antes de ajustar los pernos."
      },
      {
        "title": "Límites de holgura de la rótula",
        "body": "Las rótulas inferiores inferiores que soportan carga con juego vertical bajo la prueba de barra de apalancamiento constituyen un fallo de seguridad. Las rótulas superiores y las terminales de la barra de dirección tienen tolerancias más estrictas; medimos con indicadores de carátula cuando existe una especificación. Un golpe seco al pasar por cruces de ferrocarril cerca de Evans Ave con juego en las rótulas indica que deben reemplazarse antes de que se separen, especialmente en camiones y SUVs."
      },
      {
        "title": "Golpe en el soporte de la barra estabilizadora al arrancar en frío",
        "body": "Los cojinetes de los soportes de la barra estabilizadora permiten que la barra gire con la dirección. Los aislantes de goma desgastados y los cojinetes secos producen golpes en los primeros baches, luego se silencian cuando la grasa se calienta. Los soportes desgastados causan atascos en la dirección y un desgaste desigual de los neumáticos. Los trabajos con barras MacPherson incluyen nuevos soportes; reutilizar los soportes antiguos transfiere el ruido a la nueva barra en cuestión de semanas."
      },
      {
        "title": "Diagnóstico del patrón de desgaste de los neumáticos",
        "body": "El desgaste en forma de pluma indica problemas de convergencia; el desgaste irregular (cupping) suele deberse a fallas en los amortiguadores; el desgaste en el centro indica sobreinflado. Los amortiguadores desgastados permiten que los neumáticos reboten, lo que parece un error de alineación pero se soluciona con los amortiguadores. Analizamos los patrones de desgaste antes de recomendar una alineación de las cuatro ruedas, ahorrando $120 en ajustes que no pueden corregir holgura mecánica."
      }
    ],
    "tableTitle": "Especificaciones comunes de alineación (vehículo particular típico)",
    "tableIntro": "Las especificaciones exactas dependen del VIN; esto ilustra por qué el ángulo de empuje y la convergencia externa son importantes para la vida útil de los neumáticos.",
    "table": {
      "caption": "Rangos típicos de especificación de alineación",
      "columns": [
        "Parámetro",
        "Especificación típica",
        "Síntoma de desgaste si está fuera"
      ],
      "rows": [
        {
          "label": "Camber delantero",
          "values": [
            "0° a −1.0°",
            "Desgaste en el borde interior o exterior"
          ]
        },
        {
          "label": "Convergencia delantera",
          "values": [
            "0° a +0,10° en total",
            "Desplazamiento lateral, tracción, desvío"
          ]
        },
        {
          "label": "Ángulo de empuje",
          "values": [
            "0° ± 0,25°",
            "Pista de perro, volante torcido"
          ]
        },
        {
          "label": "Camber trasero (si es ajustable)",
          "values": [
            "Especificación del fabricante",
            "Desgaste de neumáticos traseros, inestabilidad"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Flujo de inspección",
    "title": "Diagnóstico de suspensión a alineación",
    "intro": "Integridad mecánica primero, geometría después — ese orden mantiene las alineaciones duraderas.",
    "bgImageAlt": "Suspensión y Dirección en RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Prueba en carretera y mapa de ruido",
        "body": "Reproduce golpes, desviación y vibración del pedal de freno durante el frenado: separa los discos deformados de los bujes de los brazos de control."
      },
      {
        "step": "02",
        "title": "Inspección de elevador",
        "body": "Las rótulas, las barras de dirección, los soportes de amortiguador y las barras estabilizadoras se probaron bajo carga. Se registraron desgarros en las fundas de las cajas de dirección y de las juntas homocinéticas antes de que se agotara la grasa."
      },
      {
        "step": "03",
        "title": "Reemplazo de componentes",
        "body": "Tornillos de apriete según especificaciones, torres de struts alineadas y kits de hardware nuevos cuando se proporcionan. No reutilizamos pernos excéntricos estirados."
      },
      {
        "step": "04",
        "title": "Alineación y ángulo de empuje",
        "body": "Alineación de las cuatro ruedas en banco computarizado con impresión antes y después. El ángulo de empuje se corrige para que la pista trasera guíe la convergencia delantera."
      },
      {
        "step": "05",
        "title": "Prueba de verificación",
        "body": "La prueba de retorno en calles locales confirma dirección recta, golpes silenciosos y sin falsas activaciones del ABS por anillos de tono dañados durante el trabajo del cubo."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Componentes",
    "title": "Servicios de dirección y suspensión",
    "intro": "Desde los amortiguadores de los vehículos de uso diario hasta el hardware de ballestas de los camiones de trabajo, atendemos los sistemas que mantienen tu trayectoria recta.",
    "groups": [
      {
        "category": "Artículos de desgaste",
        "items": [
          "Repuestos desgastables",
          "Bolas de dirección, barras de dirección y barras estabilizadoras",
          "Bujes de brazo de control y rodamientos de rueda"
        ]
      },
      {
        "category": "Sistemas de dirección",
        "items": [
          "Reemplazo de bomba de dirección asistida, cremallera y mangueras",
          "Calibración del sensor de dirección asistida eléctrica",
          "Junta universal y árbol intermedio de la columna de dirección"
        ]
      },
      {
        "category": "Alineación",
        "items": [
          "Alineación de las cuatro ruedas con impresión",
          "Corrección de perno de camber y calza excéntrica",
          "Alineación posterior al levantamiento tras cualquier cambio de pieza del tren delantero"
        ]
      },
      {
        "category": "Conducción de Colorado",
        "items": [
          "Inspecciones de daños por baches después del invierno",
          "Opciones de amortiguadores de nivelación de carga para camiones y SUV",
          "Consideraciones honestas sobre la alineación de vehículos elevados"
        ]
      }
    ]
  },
  "labor": {
    "title": "Mano de obra de suspensión a la tarifa publicada",
    "description": "Facturas de mano de obra para amortiguadores, rótulas y alineación a $120/hr, con las piezas cotizadas por separado. Listamos cada componente en la estimación: sin reconstrucciones misteriosas del frente del vehículo."
  },
  "faq": {
    "title": "Preguntas sobre suspensión y dirección",
    "intro": "Duración de los soportes, frecuencia de la alineación, seguridad de las rótulas y cuándo el desgaste de los neumáticos es un problema de suspensión."
  },
  "areaLabel": "reparación de suspensión y dirección",
  "finalCta": {
    "title": "¿La sensación de manejo es extraña?",
    "description": "Inspecciona la suspensión y la dirección en RKC en la Ave Evans. Detectamos el golpe, reparamos la junta, alineamos la geometría — a $120/hora de mano de obra transparente.",
    "secondaryCta": "Reservar inspección"
  },
  "relatedSlug": "suspension-steering-englewood-co",
  "faqs": [
    {
      "question": "¿Cómo sé si necesito nuevos amortiguadores o struts?",
      "answer": "El desgaste en forma de copa de los neumáticos, el rebote excesivo tras los baches, el cabeceo hacia adelante al frenar y la fuga de líquido en los amortiguadores indican amortiguadores desgastados. Realizamos pruebas de rebote y visuales, además de inspeccionar los soportes y las fundas. Los amortiguadores suelen reemplazarse como conjuntos en los diseños MacPherson, ya que el resorte y el soporte son parte integral para un desmontaje seguro."
    },
    {
      "question": "¿Por qué mi auto se desvía hacia un lado después de pasar por un bache?",
      "answer": "El impacto puede doblar los brazos de control, desplazar la alineación del subchasis o dañar los flancos de los neumáticos. Realizamos una inspección de componentes doblados antes de alinear; la alineación por sí sola no puede corregir una deformación estructural. Los baches en las arterias de Englewood, especialmente en Colorado, son una causa común de desvío repentino y desgaste irregular de los neumáticos."
    },
    {
      "question": "¿Necesito una alineación después de reemplazar las piezas de la suspensión?",
      "answer": "Sí: cualquier cambio en componentes ajustables delanteros o traseros altera la geometría. Proporcionamos reportes de alineación antes y después. Reemplazar amortiguadores, brazos de control, barras de dirección o cremalleras de dirección sin realizar una alineación provoca desgaste prematuro de los neumáticos y desviación del vehículo en cuestión de semanas."
    },
    {
      "question": "¿Qué es una rótula y por qué es peligrosa cuando está desgastada?",
      "answer": "Los rótulas conectan los brazos de control a los nudillos de dirección y permiten el recorrido de la suspensión. El juego excesivo hace que la cambre de la rueda cambie bajo carga, lo que provoca golpes, inestabilidad y, en casos extremos, separación. Realizamos pruebas de carga en las rótulas con barras de palanca e indicadores de dial; las rótulas desgastadas son una reparación de seguridad, no un artículo de conveniencia."
    },
    {
      "question": "¿Puede un sistema de suspensión defectuoso causar vibración al frenar?",
      "answer": "Los discos de freno deformados causan pulsación en el freno, pero las bujías desgastadas del brazo de control y las barras de dirección flojas también transmiten vibración a través del volante. Separamos las causas del freno de las de la suspensión durante la prueba en carretera para que no reemplace los discos cuando el problema real sean las bujías."
    },
    {
      "question": "¿Cuánto cuesta la reparación de la suspensión en RKC?",
      "answer": "El reemplazo de struts, las rótulas y la alineación se cotizan por eje y componente a $120/hr de mano de obra más las piezas. Detallamos cada línea en la estimación escrita — no hay paquetes misteriosos de la parte delantera del vehículo. La alineación generalmente se realiza después de cualquier reparación que afecte la geometría."
    },
    {
      "question": "¿Qué especificaciones de alineación son importantes después de una reparación de suspensión?",
      "answer": "El ángulo de cámara, el caster y la convergencia están ajustados según las especificaciones del fabricante; normalmente, la cámara se mantiene cerca de 0° con una ligera inclinación negativa para mejorar el manejo, y la convergencia se ajusta para optimizar el desgaste de los neumáticos. El ángulo de empuje debe corregirse para que la orientación del eje trasero no obligue a compensar la convergencia delantera. Proporcionamos reportes de alineación antes y después del servicio. Los baches en Englewood pueden alterar la geometría del subchasis; por ello, inspeccionamos la presencia de componentes doblados antes de realizar la alineación."
    },
    {
      "question": "¿Cuánto juego de rótula es demasiado?",
      "answer": "Las rótulas inferiores portantes con juego vertical visible bajo la prueba de palanca constituyen un fallo de seguridad, no un elemento de «esperar y ver». Las rótulas superiores y las terminales de la barra de dirección tienen tolerancias más ajustadas. Medimos con indicadores de carátula cuando existe una especificación. Un golpe seco sobre irregularidades con juego en la junta indica que se debe reemplazar antes de la separación, especialmente en camiones y SUVs en las carreteras de Colorado."
    },
    {
      "question": "¿Qué causa el golpe del soporte de la barra estabilizadora en las mañanas frías?",
      "answer": "Los cojinetes de soporte de la barra de torsión permiten que la barra gire con la dirección. Los aislantes de goma desgastados y los cojinetes secos producen golpes en los primeros baches del día, luego se calman a medida que la grasa se calienta. Los soportes desgastados también causan atascos en la dirección y un desgaste desigual de los neumáticos. Inspeccionamos el juego del soporte durante el reemplazo de la barra de torsión: los soportes deben reemplazarse junto con las barras de torsión en diseños MacPherson, no reutilizarse."
    }
  ]
},
} as const;

export function suspensionSteeringBodyCopy(lang: Lang) {
  return SUSPENSION_STEERING_BODY[lang] ?? SUSPENSION_STEERING_BODY.en;
}
