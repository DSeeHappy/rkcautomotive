import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost Nemotron (vllm/research/research-spark + vllm/smart/smart-spark). */
export const BRAKE_REPAIR_BODY = {
  en: {
  "breadcrumb": "Brake Repair",
  "hero": {
    "imageAlt": "Brake Repair Service at RKC Automotive Englewood CO",
    "eyebrow": "Brake systems · Englewood, CO",
    "title": "Expert Brake Repair & Service in Englewood, CO",
    "description": "Grinding, vibration, or a soft pedal? We inspect pads, rotors, calipers, and ABS hardware with a written estimate before any wrench turns — same-day openings when parts are on hand at our Evans Ave shop.",
    "primaryCta": "Schedule Brake Service",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "Warped rotors do not fix themselves with a parts-store pad swap.",
    "body": "Colorado mountain descents on I-70 and stop-and-go on Santa Fe Drive heat rotors past their temper. Pads alone cannot cure pedal pulsation or ABS activation at low speed — the friction surface needs measurement, not guesswork. Englewood drivers who wait on metal-on-metal grinding pay for calipers and hubs too. We measure rotor thickness, check pad wear sensors, and test fluid moisture before quoting what your brakes actually need."
  },
  "symptoms": {
    "eyebrow": "Warning signs",
    "title": "When your brakes are telling you something",
    "intro": "Brake problems rarely announce themselves with a dashboard light first. Pedal feel, noise, and steering pull change gradually — until an emergency stop on Broadway exposes how much stopping power you have lost.",
    "cards": [
      {
        "title": "Pedal pulsation & warped rotors",
        "body": "Pulsation through the steering wheel or brake pedal under light braking means the rotor friction surface has high spots — often from overheating on long downhill grades toward Idaho Springs or from uneven lug-nut torque after a tire rotation. Resurfacing only works when thickness remains above minimum spec; many modern rotors are too thin to machine and require replacement. We measure runout and thickness with a dial indicator, not eyeball judgment."
      },
      {
        "title": "Grinding & metal-on-metal wear",
        "body": "Squeal tabs are designed to warn before steel contacts steel. Once you hear grinding, the pad backing plate is machining the rotor and generating heat that glazes pad compound and overheats caliper pistons. Continued driving scores rotors beyond salvage and can seize a caliper — turning a pad job into pads, rotors, hardware, and a caliper rebuild. If you hear grinding, schedule service this week, not next month.",
        "warning": "Metal-on-metal grinding destroys rotors and calipers fast."
      },
      {
        "title": "Soft pedal & fluid contamination",
        "body": "A pedal that sinks toward the floor — especially after sitting overnight — traces to fluid moisture absorption, internal seal bypass in the master cylinder, or air in the hydraulic circuit after a caliper service. Brake fluid is hygroscopic; Colorado humidity and heat cycles push DOT 3/4 fluid past its useful life. We test copper content and boiling point, then flush or repair the component that failed — not just top off the reservoir and send you home."
      }
    ]
  },
  "technical": {
    "eyebrow": "Brake science",
    "title": "Rotor specs, DOT fluid, pad compounds & ABS",
    "intro": "Colorado mountain braking and stop-and-go heat punish friction surfaces and brake fluid. We measure rotor thickness to stamped minimum, test fluid copper content, match pad compound to your driving, and scan ABS wheel-speed data — not just swap whatever the parts counter suggests.",
    "cards": [
      {
        "title": "Rotor minimum thickness & runout",
        "body": "Every rotor carries a minimum thickness stamped on the hat — often 22–25 mm on vented fronts. Below spec, rotors cannot shed heat safely on long I-70 descents and may crack. We micrometer thickness and dial-indicator runout before recommending resurface vs. replace. Many modern thin rotors are single-use — pad jobs include new rotors when machining is not safe."
      },
      {
        "title": "DOT 3, DOT 4 & DOT 5.1 brake fluid",
        "body": "DOT 3 and DOT 4 are glycol-based and hygroscopic — moisture lowers boiling point and corrodes ABS modulator internals. DOT 5.1 is compatible with DOT 3/4 but higher dry/wet boiling points. Never mix DOT 5 silicone with glycol fluids. We test copper ppm and boiling point, then flush with the spec your cap and manual require — not universal bulk fluid from a quick-lube lane."
      },
      {
        "title": "Ceramic, semi-metallic & low-metallic pads",
        "body": "Ceramic pads run quiet with low dust — ideal for daily commuters. Semi-metallic handles heat for towing and mountain grades. Low-metallic organic is OEM on many imports. Wrong compound causes squeal, fade, or accelerated rotor wear. We match pad material to rotor type, caliper design, and whether you tow through the foothills."
      },
      {
        "title": "ABS module & wheel-speed sensors",
        "body": "ABS modulators pulse individual calipers during panic stops. Wheel-speed sensors read tone rings on each hub — metal debris from grinding pads, cracked tone rings, or corroded sensor tips trigger ABS lights and false low-speed activation. We scope wheel-speed signals and clean tone rings after pad work — a common post-grinding oversight at discount shops."
      }
    ],
    "tableTitle": "Brake fluid DOT ratings at a glance",
    "tableIntro": "Boiling point drops as fluid absorbs moisture — Colorado humidity and heat cycles accelerate aging.",
    "table": {
      "caption": "Comparison of brake fluid DOT specifications",
      "columns": [
        "Spec",
        "Dry BP",
        "Wet BP",
        "Notes"
      ],
      "rows": [
        {
          "label": "DOT 3",
          "values": [
            "401°F (205°C)",
            "284°F (140°C)",
            "Common on older vehicles; flush every 2–3 yrs"
          ]
        },
        {
          "label": "DOT 4",
          "values": [
            "446°F (230°C)",
            "311°F (155°C)",
            "Most modern imports and domestics"
          ]
        },
        {
          "label": "DOT 5.1",
          "values": [
            "500°F (260°C)",
            "356°F (180°C)",
            "Glycol-based high-temp; NOT silicone DOT 5"
          ]
        },
        {
          "label": "DOT 5 (silicone)",
          "values": [
            "500°F (260°C)",
            "Does not absorb water",
            "NOT compatible with ABS/glycol systems"
          ],
          "highlight": 3
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Our process",
    "title": "From inspection to verified stop",
    "intro": "Every brake job at RKC starts with measurement, not assumptions. We document pad thickness, rotor condition, caliper slide function, and fluid health before you approve parts.",
    "bgImageAlt": "Brake Repair Service at RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Road test & pedal feel",
        "body": "We reproduce pulsation, pull, and noise under controlled braking when safe. Pedal travel and ABS activation at parking-lot speeds tell us whether the issue is hydraulic, mechanical, or sensor-related before the wheels come off."
      },
      {
        "step": "02",
        "title": "Measure rotors & pads",
        "body": "Micrometer readings on rotor thickness and runout, plus pad lining depth at inner and outer edges. Uneven wear flags stuck caliper slides, collapsed hoses, or ABS modulator issues — not just \"time for pads.\""
      },
      {
        "step": "03",
        "title": "Caliper & hardware check",
        "body": "Slide pins, abutment clips, and bracket ears get cleaned and lubricated with high-temp brake grease. Seized pins cause outer-pad-only wear and overheating. We quote hardware kits when clips are corroded — cheap insurance against comeback noise."
      },
      {
        "step": "04",
        "title": "Fluid & ABS scan",
        "body": "Moisture-contaminated fluid gets flushed when test strips or copper ppm readings demand it. ABS wheel-speed sensors and tone rings are inspected for metal debris after pad work — a common post-grinding oversight that triggers false ABS activation."
      },
      {
        "step": "05",
        "title": "Bed-in & final verification",
        "body": "New pads and rotors need a controlled bedding procedure — moderate stops from 40 mph without coming to a complete halt until the transfer layer forms. We road-test pedal firmness and ABS function before you leave our Englewood lot."
      }
    ]
  },
  "checklist": {
    "eyebrow": "What we service",
    "title": "Complete brake system coverage",
    "intro": "Pads and rotors are only part of the system. We service the hydraulic and electronic layers that actually translate pedal force into stopping power.",
    "groups": [
      {
        "category": "Friction components",
        "items": [
          "Ceramic and semi-metallic pad sets matched to your driving style",
          "Rotor replacement or on-car machining when thickness allows",
          "Caliper rebuild, slide service, and parking brake shoe adjustment"
        ]
      },
      {
        "category": "Hydraulics & ABS",
        "items": [
          "Brake fluid flush with DOT-spec fluid and moisture testing",
          "Master cylinder, brake line, and flexible hose inspection",
          "ABS wheel-speed sensor and tone-ring cleaning after debris events"
        ]
      },
      {
        "category": "Inspection & safety",
        "items": [
          "Free visual brake inspection with any service visit",
          "Written estimate before parts are ordered",
          "Post-repair road test and bedding guidance for new friction material"
        ]
      },
      {
        "category": "Englewood & metro drivers",
        "items": [
          "Mountain-grade brake evaluation for I-70 commuters",
          "Fleet and work-truck heavy-load brake packages",
          "Same-day service when parts are in stock — call before 2 PM"
        ]
      }
    ]
  },
  "labor": {
    "title": "Labor transparency on every brake job",
    "description": "Brake work should never be a mystery invoice. We bill at our posted $120/hr rate with AllData labor times as a baseline. Pad-and-rotor per axle, caliper rebuild, and fluid flush scopes are documented on your written estimate before we order parts."
  },
  "faq": {
    "title": "Brake repair questions",
    "intro": "Straight answers on pad life, rotor resurfacing, ABS lights, and what Colorado driving does to your stopping system."
  },
  "areaLabel": "brake repair",
  "finalCta": {
    "title": "Ready for a brake inspection?",
    "description": "Free visual inspection at 2120 W Evans Ave. We measure, explain, and quote — pads, rotors, fluid, or calipers — at $120/hr labor plus parts before any work begins.",
    "secondaryCta": "Schedule online"
  },
  "relatedSlug": "brake-repair-englewood-co",
  "faqs": [
    {
      "question": "How do I know if I need new brake pads or rotors?",
      "answer": "Pads need replacement when lining thickness drops near 3mm or wear sensors contact the rotor. Rotors need service when thickness is below minimum spec, surfaces are scored from metal-on-metal contact, or pedal pulsation indicates runout. We measure both with a micrometer and dial indicator — not guess from mileage. Many Englewood pad jobs include rotors because Colorado heat cycling warps friction surfaces before pads reach end of life."
    },
    {
      "question": "Why does my brake pedal pulse when I slow down?",
      "answer": "Pedal pulsation under light braking is classic warped rotor runout — often from overheating on long downhill grades or uneven lug-nut torque. Resurfacing works only when rotor thickness remains above the stamped minimum. Many modern rotors are too thin to machine and require replacement. We measure runout and thickness before quoting resurfacing vs. new rotors."
    },
    {
      "question": "How often should brake fluid be flushed in Colorado?",
      "answer": "Most manufacturers recommend brake fluid exchange every 2–3 years because DOT fluid absorbs moisture, lowering boiling point and promoting internal corrosion. Colorado temperature swings accelerate moisture ingress. We test copper content and fluid condition — if it passes, we do not push a flush. If it fails, we quote a flush with the correct DOT spec for your vehicle."
    },
    {
      "question": "Can I drive with a grinding brake noise?",
      "answer": "Grinding means pad backing plate is contacting the rotor — generating heat that can glaze pads, damage caliper pistons, and score rotors beyond salvage. Schedule service immediately. Metal-on-metal braking also increases stopping distance, which is dangerous in Denver metro traffic. We inspect for caliper damage when grinding has continued more than a few days."
    },
    {
      "question": "Do you service ABS and electronic brake systems?",
      "answer": "Yes. We diagnose ABS wheel-speed sensors, tone-ring debris, and hydraulic issues that trigger ABS lights or false activation at low speed. After pad or rotor service, we road-test ABS function and verify pedal feel. Electronic parking brakes on newer vehicles require scan-tool calibration after rear pad service — we include that in the scope when applicable."
    },
    {
      "question": "How much does brake repair cost at RKC Automotive?",
      "answer": "Brake pad replacement per axle starts around $189 plus parts; pad and rotor service from about $349 per axle — labor at our posted $120/hr rate. Caliper rebuilds, fluid flushes, and ABS-related repairs are quoted separately after inspection. You receive a written estimate before parts are ordered, with no shop-supply fees hidden in the total."
    },
    {
      "question": "What is the minimum rotor thickness and why does it matter?",
      "answer": "Every rotor has a minimum thickness stamped on the hat or edge — often 22–25mm on front vented rotors. Below minimum, the rotor cannot dissipate heat safely and may crack under mountain braking on I-70. We micrometer every rotor before recommending resurface vs. replace. Many modern thin rotors are single-use — machined once in life, if at all."
    },
    {
      "question": "Ceramic vs semi-metallic brake pads — which should I choose?",
      "answer": "Ceramic pads run quieter with less dust — ideal for daily commuters and luxury vehicles. Semi-metallic pads handle heat better for towing, mountain grades, and work trucks. Low-metallic organic pads are OEM on many imports. We match compound to your driving — not upsell the most expensive pad. Wrong compound causes squeal, fade, or premature rotor wear."
    },
    {
      "question": "What does an ABS module or wheel-speed sensor repair involve?",
      "answer": "ABS wheel-speed sensors read tone rings on each hub. Metal debris from grinding brakes, damaged tone rings, or corroded sensor tips trigger ABS lights and false activation at low speed. We inspect sensors after pad work, clean tone rings, and scope wheel-speed signals on a road test. Module replacement is rare — most ABS faults trace to sensors, wiring, or hydraulic valves."
    }
  ]
},
  es: {
  "breadcrumb": "Reparación de frenos",
  "hero": {
    "imageAlt": "Servicio de reparación de frenos en RKC Automotive Englewood CO",
    "eyebrow": "Sistemas de freno · Englewood, CO",
    "title": "Reparación y servicio experto de frenos en Englewood, CO",
    "description": "¿Ruido de molienda, vibración o un pedal blando? Inspeccionamos pastillas, discos, pinzas y el hardware ABS con un presupuesto escrito antes de que se apriete cualquier llave — aperturas el mismo día cuando las piezas están disponibles en nuestro taller de Evans Ave.",
    "primaryCta": "Programar servicio de frenos",
    "callPrefix": "Llamada"
  },
  "reality": {
    "quote": "Los rotores deformados no se arreglan solos con un cambio de pastillas de la tienda de repuestos.",
    "body": "Los descensos de montaña en Colorado en la I-70 y el tráfico de arranque y parada en Santa Fe Drive calientan los rotores más allá de su temple. Las pastillas por sí solas no pueden curar la pulsación del pedal ni la activación del ABS a baja velocidad — la superficie de fricción necesita medición, no conjeturas. Los conductores de Englewood que esperan el rozamiento metal contra metal pagan también por las pinzas y los bujes. Medimos el grosor del rotor, verificamos los sensores de desgaste de las pastillas y probamos la humedad del fluido antes de cotizar lo que realmente necesitan tus frenos."
  },
  "symptoms": {
    "eyebrow": "Señales de advertencia",
    "title": "Cuando tus frenos te están diciendo algo",
    "intro": "Los problemas de frenos rara vez se anuncian primero con una luz en el tablero. La sensación del pedal, el ruido y la desviación del volante cambian gradualmente, hasta que una parada de emergencia en Broadway revela cuánto poder de frenado has perdido.",
    "cards": [
      {
        "title": "Pulsación del pedal y discos deformados",
        "body": "La vibración a través del volante o el pedal de freno durante una frenada suave indica que la superficie de fricción del disco presenta puntos altos, a menudo causados por sobrecalentamiento en largas bajadas hacia Idaho Springs o por un par de apriete desigual de las tuercas de las ruedas después de un cambio de neumáticos. El rectificado solo es viable cuando el espesor permanece por encima del mínimo especificado; muchos discos modernos son demasiado delgados para ser mecanizados y requieren reemplazo. Medimos la excentricidad y el espesor con un indicador de carátula, no con un juicio visual."
      },
      {
        "title": "Desgaste por molienda y metal contra metal",
        "body": "Las pestañas de chirrido están diseñadas para advertir antes de que el acero toque al acero. Una vez que escuches un sonido de molienda, la placa de respaldo del pastillo está mecanizando el rotor y generando calor que vidria el compuesto del pastillo y sobrecalienta los pistones de la pinza. Continuar conduciendo daña los rotores más allá de su recuperación y puede trabar una pinza, convirtiendo un trabajo de pastillos en pastillos, rotores, accesorios y una reconstrucción de la pinza. Si escuchas un sonido de molienda, programa servicio esta semana, no el próximo mes.",
        "warning": "El desgaste metal contra metal destruye rápidamente los discos y las pinzas de freno."
      },
      {
        "title": "Contaminación del pedal suave y del fluido",
        "body": "Un pedal que se hunde hacia el piso, especialmente después de haber estado estacionado toda la noche, puede deberse a la absorción de humedad por parte del fluido, al paso interno de fluido a través de los sellos del cilindro maestro, o a la presencia de aire en el circuito hidráulico después de un servicio en las pinzas. El fluido de frenos es higroscópico; la humedad y los ciclos de calor en Colorado aceleran el envejecimiento del fluido DOT 3/4 más allá de su vida útil. Analizamos el contenido de cobre y el punto de ebullición, luego realizamos el lavado o reparamos el componente defectuoso, no simplemente rellenamos el depósito y te enviamos a casa."
      }
    ]
  },
  "technical": {
    "eyebrow": "Ciencia de frenos",
    "title": "Especificaciones del rotor, fluido DOT, compuestos de pastillas y ABS",
    "intro": "El frenado en montaña y las paradas frecuentes en el Colorado desgastan las superficies de fricción y el fluido de frenos. Medimos el grosor del rotor hasta el mínimo marcado, analizamos el contenido de cobre del fluido, seleccionamos la composición de las pastillas según tu estilo de conducción y escaneamos los datos de velocidad de las ruedas del sistema ABS, no simplemente cambiamos cualquier pieza que sugiera el mostrador de repuestos.",
    "cards": [
      {
        "title": "Grosor mínimo del rotor y juego",
        "body": "Cada disco lleva un espesor mínimo estampado en la parte central — a menudo de 22–25 mm en los delanteros ventilados. Por debajo de la especificación, los discos no pueden disipar el calor de forma segura en las largas bajadas de la I-70 y pueden agrietarse. Medimos el espesor con micrómetro y la oscilación con indicador de carátula antes de recomendar rectificado o reemplazo. Muchos discos modernos delgados son de un solo uso; los trabajos de pastillas incluyen discos nuevos cuando el mecanizado no es seguro."
      },
      {
        "title": "Fluido de frenos DOT 3, DOT 4 y DOT 5.1",
        "body": "El DOT 3 y el DOT 4 son a base de glicol e higroscópicos: la humedad reduce el punto de ebullición y corroe los componentes internos del modulador ABS. El DOT 5.1 es compatible con el DOT 3/4, pero tiene puntos de ebullición en seco y húmedo más altos. Nunca mezcle el DOT 5 de silicona con fluidos a base de glicol. Analizamos las ppm de cobre y el punto de ebullición, luego realizamos un enjuague con el fluido que especifican la tapa del depósito y el manual — no usamos fluido genérico a granel de las estaciones de servicio rápido."
      },
      {
        "title": "Pastillas cerámicas, semi-metálicas y de bajo contenido metálico",
        "body": "Las pastillas cerámicas funcionan en silencio y generan poco polvo, ideales para conductores diarios. Las semimetálicas manejan el calor para remolcar y pendientes de montaña. La orgánica de bajo contenido metálico es la original de fábrica en muchos importados. Un compuesto incorrecto causa chirrido, desvanecimiento o desgaste acelerado de los discos. Coincidimos el material de la pastilla con el tipo de disco, el diseño de la pinza y si remolcas por las estribaciones."
      },
      {
        "title": "ABS módulo y sensores de velocidad de rueda",
        "body": "Los moduladores ABS pulsan los calibres individuales durante las frenadas de pánico. Los sensores de velocidad de rueda leen los anillos de tono en cada cubo — los residuos metálicos de las pastillas al moler, los anillos de tono agrietados o las puntas de sensor corroídas activan las luces ABS y una activación falsa a baja velocidad. Medimos las señales de velocidad de rueda y limpiamos los anillos de tono después del trabajo de las pastillas — un descuido común después del molido en talleres de descuento."
      }
    ],
    "tableTitle": "Clasificaciones de fluido de frenos DOT de un vistazo",
    "tableIntro": "El punto de ebullición disminuye a medida que el fluido absorbe humedad — la humedad de Colorado y los ciclos de calor aceleran el envejecimiento.",
    "table": {
      "caption": "Comparación de especificaciones de fluido de frenos DOT",
      "columns": [
        "Especificación",
        "Seco BP",
        "Húmedo BP",
        "Notas"
      ],
      "rows": [
        {
          "label": "DOT 3",
          "values": [
            "401°F (205°C)",
            "284°F (140°C)",
            "Común en vehículos más antiguos; enjuague cada 2–3 años"
          ]
        },
        {
          "label": "DOT 4",
          "values": [
            "446°F (230°C)",
            "311°F (155°C)",
            "La mayoría de los importados y nacionales modernos"
          ]
        },
        {
          "label": "DOT 5.1",
          "values": [
            "500°F (260°C)",
            "356°F (180°C)",
            "A base de glicol alta temperatura; NO silicona DOT 5"
          ]
        },
        {
          "label": "DOT 5 (silicona)",
          "values": [
            "500°F (260°C)",
            "No absorbe agua",
            "NO compatible con sistemas ABS/glicol"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Nuestro proceso",
    "title": "De la inspección a la parada verificada",
    "intro": "Cada trabajo de frenos en RKC comienza con una medición, no con suposiciones. Documentamos el grosor de las pastillas, el estado del rotor, el funcionamiento del deslizamiento de la pinza y la salud del fluido antes de que apruebes las piezas.",
    "bgImageAlt": "Servicio de reparación de frenos en RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Prueba de carretera y sensación del pedal",
        "body": "Reproducimos la pulsación, el tirón y el ruido bajo frenado controlado cuando es seguro. El recorrido del pedal y la activación del ABS a velocidades de estacionamiento nos indican si el problema es hidráulico, mecánico o relacionado con sensores antes de que se quiten las ruedas."
      },
      {
        "step": "02",
        "title": "Medir rotores y pastillas",
        "body": "Lecturas de micrómetro sobre el espesor y el desviado del rotor, además de la profundidad del revestimiento de las pastillas en los bordes interno y externo. El desgaste desigual indica deslizadores de pinza atascados, mangueras colapsadas o problemas del modulador ABS — no solo \"time for pads.\""
      },
      {
        "step": "03",
        "title": "Revisión de pinzas y hardware",
        "body": "Los pasadores de deslizamiento, los clips de apoyo y las orejas del soporte se limpian y lubrican con grasa para frenos de alta temperatura. Los pasadores atascados causan desgaste solo en la pastilla externa y sobrecalentamiento. Cotizamos kits de hardware cuando los clips están corroídos — un seguro económico contra el ruido de retorno."
      },
      {
        "step": "04",
        "title": "Fluido & ABS escaneo",
        "body": "El fluido contaminado con humedad se enjuaga cuando las tiras de prueba o las lecturas de cobre en ppm lo exigen. Los sensores de velocidad de rueda ABS y los anillos de tono se inspeccionan en busca de restos metálicos después del trabajo de las pastillas — una omisión común después del rectificado que provoca una activación falsa de ABS."
      },
      {
        "step": "05",
        "title": "Rodado y verificación final",
        "body": "Las pastillas y los discos nuevos necesitan un procedimiento de asentado controlado — paradas moderadas desde 40 mph sin detenerse completamente hasta que se forme la capa de transferencia. Probamos la firmeza del pedal y la función ABS antes de que salga de nuestro lote de Englewood."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Lo que servimos",
    "title": "Cobertura completa del sistema de frenos",
    "intro": "Las pastillas y los discos son solo parte del sistema. Mantenemos las capas hidráulicas y electrónicas que realmente traducen la fuerza del pedal en potencia de frenado.",
    "groups": [
      {
        "category": "Componentes de fricción",
        "items": [
          "Juegos de pastillas cerámicas y semimetálicas adaptadas a tu estilo de conducción",
          "Reemplazo del rotor o mecanizado en el vehículo cuando el grosor lo permite",
          "Reconstrucción de pinza, servicio de guías y ajuste de zapata de freno de estacionamiento"
        ]
      },
      {
        "category": "Hidráulica y ABS",
        "items": [
          "Lavado de líquido de frenos con fluido DOT-spec y prueba de humedad",
          "Inspección del cilindro maestro, la línea de freno y la manguera flexible",
          "Limpieza del sensor de velocidad de rueda ABS y del anillo de tono después de eventos de detritos"
        ]
      },
      {
        "category": "Inspección y seguridad",
        "items": [
          "Inspección visual gratuita de los frenos con cualquier visita de servicio",
          "Estimado por escrito antes de ordenar las piezas",
          "Guía de prueba de carretera y asentado después de la reparación para material de fricción nuevo"
        ]
      },
      {
        "category": "conductores de Englewood y del área metropolitana",
        "items": [
          "Evaluación de frenos de grado montañoso para usuarios de la I-70",
          "Paquetes de frenos de carga pesada para flotas y camiones de trabajo",
          "Servicio el mismo día cuando las piezas están en stock — llame antes de las 2 PM"
        ]
      }
    ]
  },
  "labor": {
    "title": "Transparencia laboral en cada trabajo de frenos",
    "description": "El trabajo de frenos nunca debería ser una factura misteriosa. Cobramos a nuestra tarifa publicada de $120/hr con los tiempos de mano de obra de AllData como referencia. El alcance de pastillas y discos por eje, reconstrucción de pinzas y enjuague de fluido se documenta en su estimación escrita antes de ordenar las piezas."
  },
  "faq": {
    "title": "Preguntas sobre reparación de frenos",
    "intro": "Respuestas directas sobre la vida útil de las pastillas, el rectificado de los discos, las luces ABS y lo que el manejo en Colorado hace a tu sistema de frenado."
  },
  "areaLabel": "reparación de frenos",
  "finalCta": {
    "title": "¿Listo para una inspección de frenos?",
    "description": "Inspección visual gratuita en 2120 W Evans Ave. Medimos, explicamos y cotizamos — pastillas, discos, líquido o pinzas — a $120/hr de mano de obra más piezas antes de que comience cualquier trabajo.",
    "secondaryCta": "Programar en línea"
  },
  "relatedSlug": "reparación-de-frenos-englewood-co",
  "faqs": [
    {
      "question": "¿Cómo sé si necesito pastillas de freno o discos nuevos?",
      "answer": "Las pastillas necesitan reemplazo cuando el grosor del revestimiento cae cerca de 3 mm o los sensores de desgaste contactan el rotor. Los rotores necesitan servicio cuando el grosor está por debajo de la especificación mínima, las superficies están rayadas por contacto metal contra metal, o la pulsación del pedal indica desviación. Medimos ambos con un micrómetro y un indicador de dial — no adivinamos a partir del kilometraje. Muchos trabajos de pastillas en Englewood incluyen rotores porque el ciclo de calor de Colorado deforma las superficies de fricción antes de que las pastillas alcancen su vida útil."
    },
    {
      "question": "¿Por qué mi pedal de freno late cuando reduzco la velocidad?",
      "answer": "La pulsación del pedal bajo frenado ligero es un clásico rotor runout deformado — a menudo por sobrecalentamiento en largas bajadas o torque desigual de los pernos de rueda. El Resurfacing solo funciona cuando el espesor del rotor permanece por encima del mínimo estampado. Muchos rotores modernos son demasiado delgados para mecanizar y requieren reemplazo. Medimos el runout y el espesor antes de cotizar el Resurfacing frente a rotores nuevos."
    },
    {
      "question": "¿Con qué frecuencia debe purgarse el líquido de frenos en Colorado?",
      "answer": "La mayoría de los fabricantes recomiendan el cambio del líquido de frenos cada 2–3 años porque el líquido DOT absorbe humedad, lo que reduce el punto de ebullición y promueve la corrosión interna. Las variaciones de temperatura en Colorado aceleran la entrada de humedad. Probamos el contenido de cobre y la condición del líquido — si pasa, no insistimos en un lavado. Si falla, cotizamos un lavado con la especificación DOT correcta para su vehículo."
    },
    {
      "question": "¿Puedo conducir con un ruido de freno de molienda?",
      "answer": "El molido significa que la placa de soporte de la pastilla está contactando el rotor — generando calor que puede vidriar las pastillas, dañar los pistones de la caliper y marcar los rotores más allá de lo reparable. Programa el servicio inmediatamente. El frenado Metal-on-metal también aumenta la distancia de detención, lo cual es peligroso en el tráfico metropolitano de Denver. Inspeccionamos daños en la caliper cuando el molido ha continuado más de unos pocos días."
    },
    {
      "question": "¿Atendemos sistemas ABS y de frenos electrónicos?",
      "answer": "Sí. Diagnosticamos los sensores de velocidad de rueda ABS, los residuos del anillo de tono y los problemas hidráulicos que activan las luces ABS o una activación falsa a baja velocidad. Después del servicio de pastillas o discos, realizamos una prueba de ruta de la función ABS y verificamos la sensación del pedal. Los frenos de estacionamiento electrónico en vehículos más nuevos requieren calibrado con herramienta de escaneo después del servicio de pastillas traseras — lo incluimos en el alcance cuando corresponde."
    },
    {
      "question": "¿Cuánto cuesta la reparación de frenos en RKC Automotive?",
      "answer": "El reemplazo de pastillas de freno por eje comienza alrededor de $189 más piezas; el servicio de pastillas y rotores parte de aproximadamente $349 por eje — mano de obra a nuestra tarifa publicada de $120/hora. Las reconstrucciones de pinzas, los enjuagues de fluido y las reparaciones relacionadas con el ABS se cotizan por separado después de la inspección. Recibe un presupuesto escrito antes de que se ordenen las piezas, sin cargos ocultos de suministros de taller en el total."
    },
    {
      "question": "¿Cuál es el espesor mínimo del rotor y por qué es importante?",
      "answer": "Cada rotor tiene un espesor mínimo estampado en el sombrero o el borde — a menudo 22–25 mm en los rotores delanteros ventilados. Por debajo del mínimo, el rotor no puede disipar el calor de forma segura y puede agrietarse bajo el frenado de montaña en la I-70. Medimos cada rotor con micrómetro antes de recomendar rectificar o reemplazar. Muchos rotores modernos delgados son de un solo uso — se mecanizan una sola vez en su vida, si es que lo hacen."
    },
    {
      "question": "Cerámica vs pastillas de freno semimetálicas — ¿cuál debería elegir?",
      "answer": "Ceramic pads funcionan más silenciosamente con menos polvo — ideales para los desplazamientos diarios y vehículos de lujo. Semi-metallic pads manejan mejor el calor para remolque, pendientes de montaña y camiones de trabajo. Low-metallic organic pads son OEM en muchas importaciones. Coincidimos el compuesto con su conducción — no hacemos upsell de la pastilla más cara. Un compuesto incorrecto causa chirrido, pérdida de frenado o desgaste prematuro del rotor."
    },
    {
      "question": "¿En qué consiste la reparación de un módulo ABS o un sensor de velocidad de rueda?",
      "answer": "Los sensores de velocidad de rueda ABS leen los anillos de tono en cada cubo. Los restos metálicos de la molienda de los frenos, los anillos de tono dañados o las puntas de los sensores corroídos activan las luces ABS y una activación falsa a baja velocidad. Inspeccionamos los sensores después del trabajo de las pastillas, limpiamos los anillos de tono y medimos las señales de velocidad de rueda en una prueba de carretera. El reemplazo del módulo es raro — la mayoría de las fallas ABS se deben a los sensores, el cableado o las válvulas hidráulicas."
    }
  ]
},
} as const;

export function brakeRepairBodyCopy(lang: Lang) {
  return BRAKE_REPAIR_BODY[lang] ?? BRAKE_REPAIR_BODY.en;
}
