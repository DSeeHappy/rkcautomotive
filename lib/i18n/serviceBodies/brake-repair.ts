import type { Lang } from '@/lib/language';

/** Service page body copy — ES via Bifrost Spark vllm/smart (smart-spark). */
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
    "eyebrow": "Sistemas de frenos · Englewood, CO",
    "title": "Reparación y servicio de frenos experto en Englewood, CO",
    "description": "¿Ruido al frenar, vibración o pedal blando? Inspeccionamos pastillas, discos, calibradores y hardware ABS con una estimación por escrito antes de que se toque cualquier herramienta — aperturas el mismo día cuando las piezas están disponibles en nuestra tienda de Evans Ave.",
    "primaryCta": "Programar servicio de frenos",
    "callPrefix": "Llama"
  },
  "reality": {
    "quote": "Los discos deformados no se arreglan con un cambio de pastillas de tienda de repuestos.",
    "body": "Los descensos por las montañas de Colorado en la I-70 y el tráfico de arranca y para en Santa Fe Drive calientan los discos más allá de su límite térmico. Las pastillas por sí solas no pueden corregir la vibración del pedal ni la activación del ABS a baja velocidad: la superficie de fricción necesita medición, no suposiciones. Los conductores de Englewood que esperan hasta que haya desgaste metal contra metal terminan pagando también por las pinzas y los cubos. Medimos el grosor de los discos, verificamos los sensores de desgaste de las pastillas y probamos la humedad del fluido antes de cotizar lo que realmente necesitan tus frenos."
  },
  "symptoms": {
    "eyebrow": "Señales de advertencia",
    "title": "Cuando tus frenos te están diciendo algo",
    "intro": "Los problemas de frenos rara vez se anuncian primero con una luz en el tablero. La sensación del pedal, el ruido y la desviación del volante cambian gradualmente, hasta que una parada de emergencia en Broadway expone cuánto poder de frenado has perdido.",
    "cards": [
      {
        "title": "Pulsación del pedal y discos deformados",
        "body": "La pulsación a través del volante o del pedal de freno durante una frenada suave indica que la superficie de fricción del disco presenta zonas altas, lo cual suele deberse al sobrecalentamiento en descensos prolongados hacia Idaho Springs o a un par de apriete desigual de las tuercas de las ruedas tras un cambio de neumáticos. El rectificado solo es viable cuando el espesor permanece por encima de la especificación mínima; muchos discos modernos son demasiado delgados para ser mecanizados y requieren reemplazo. Medimos la excentricidad y el espesor con un indicador de carátula, no con un juicio visual."
      },
      {
        "title": "Desgaste por frotamiento y metal contra metal",
        "body": "Las pestañas de advertencia están diseñadas para alertar antes de que el acero toque al acero. Una vez que escuches un sonido de frotamiento, la placa de respaldo de la pastilla está mecanizando el rotor y generando calor que vidria el compuesto de la pastilla y sobrecalienta los pistones de la pinza. Continuar conduciendo daña los rotores más allá de su recuperación y puede trabar una pinza, convirtiendo un cambio de pastillas en pastillas, rotores, herrajes y una reconstrucción de la pinza. Si escuchas frotamiento, programa el servicio esta semana, no el próximo mes.",
        "warning": "El desgaste por fricción entre piezas metálicas destruye rápidamente los discos y las pinzas de freno."
      },
      {
        "title": "Pedal blando y contaminación del líquido de frenos",
        "body": "Un pedal que se hunde hacia el piso — especialmente después de estar estacionado toda la noche — se debe a la absorción de humedad por el líquido de frenos, el paso interno de sellos en la bomba maestra o aire en el circuito hidráulico después de un servicio en las pinzas. El líquido de frenos es higroscópico; los ciclos de humedad y calor en Colorado hacen que el líquido DOT 3/4 supere su vida útil. Medimos el contenido de cobre y el punto de ebullición, luego realizamos el lavado o reparamos el componente que falló, no simplemente rellenamos el depósito y te enviamos a casa."
      }
    ]
  },
  "technical": {
    "eyebrow": "Ciencia de frenos",
    "title": "Especificaciones de los rotores, fluido DOT, compuestos de pastillas y ABS",
    "intro": "El frenado en las montañas de Colorado y el calor por frenadas frecuentes y paradas castigan las superficies de fricción y el fluido de frenos. Medimos el grosor de los rotores hasta el mínimo marcado, analizamos el contenido de cobre del fluido, igualamos el compuesto de las pastillas a su estilo de conducción y escaneamos los datos de velocidad de las ruedas del ABS, no simplemente cambiamos lo que sugiera el mostrador de repuestos.",
    "cards": [
      {
        "title": "Grosor mínimo del rotor y juego axial",
        "body": "Cada rotor lleva estampado en la parte central (hat) su espesor mínimo — usualmente de 22 a 25 mm en los delanteros ventilados. Por debajo de la especificación, los rotores no pueden disipar el calor de forma segura en descensos prolongados por la I-70 y podrían agrietarse. Medimos el espesor con micrómetro y la desviación (runout) con indicador de carátula antes de recomendar rectificado vs. reemplazo. Muchos rotores modernos delgados son de un solo uso; los trabajos de pastillas incluyen rotores nuevos cuando el mecanizado no es seguro."
      },
      {
        "title": "Líquido de frenos DOT 3, DOT 4 y DOT 5.1",
        "body": "El DOT 3 y el DOT 4 son a base de glicol e higroscópicos: la humedad reduce el punto de ebullición y corroe los componentes internos del modulador ABS. El DOT 5.1 es compatible con los DOT 3/4, pero ofrece puntos de ebullición en seco y húmedo más altos. Nunca mezcles el DOT 5 de silicona con fluidos a base de glicol. Analizamos el contenido de cobre en ppm y el punto de ebullición, luego realizamos un lavado con el fluido especificado en la tapa y el manual del vehículo, no con fluido genérico de baja calidad."
      },
      {
        "title": "Pastillas cerámicas, semimetálicas y de bajo contenido metálico",
        "body": "Las pastillas cerámicas funcionan en silencio y generan poco polvo, ideales para conductores diarios. Las semimetálicas manejan mejor el calor para remolcar y subir pendientes montañosas. Las orgánicas de bajo contenido metálico son las originales (OEM) en muchos vehículos importados. Un compuesto incorrecto provoca chirridos, pérdida de frenado o desgaste acelerado de los discos. Ajustamos el material de la pastilla al tipo de disco, al diseño de la pinza y a si remolcas por las estribaciones."
      },
      {
        "title": "Módulo ABS y sensores de velocidad de rueda",
        "body": "Los moduladores del ABS generan pulsos en las pinzas individuales durante las frenadas de emergencia. Los sensores de velocidad de las ruedas leen los anillos dentados en cada cubo: los desechos metálicos de las pastillas molidas, los anillos dentados agrietados o las puntas de los sensores corroídos activan las luces del ABS y una activación falsa a baja velocidad. Escaneamos las señales de velocidad de las ruedas y limpiamos los anillos dentados después del trabajo con las pastillas; es una omisión común después de moler las pastillas en las tiendas de descuento."
      }
    ],
    "tableTitle": "Clasificaciones de líquido de frenos DOT de un vistazo",
    "tableIntro": "El punto de ebullición disminuye a medida que el fluido absorbe humedad: la humedad y los ciclos de calor en Colorado aceleran el envejecimiento.",
    "table": {
      "caption": "Comparación de especificaciones de fluido de frenos DOT",
      "columns": [
        "Especificación",
        "BP seco",
        "BP húmedo",
        "Notas"
      ],
      "rows": [
        {
          "label": "DOT 3",
          "values": [
            "401°F (205°C)",
            "284°F (140°C)",
            "Común en vehículos más antiguos; reemplazar cada 2-3 años"
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
            "Basado en glicol de alta temperatura; NO silicona DOT 5"
          ]
        },
        {
          "label": "DOT 5 (silicona)",
          "values": [
            "500°F (260°C)",
            "No absorbe agua",
            "NO compatible con sistemas ABS/glicol"
          ],
          "highlight": "3"
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Nuestro proceso",
    "title": "Desde la inspección hasta la parada verificada",
    "intro": "Cada trabajo de frenos en RKC comienza con mediciones, no con suposiciones. Documentamos el grosor de las pastillas, el estado del rotor, la función del deslizador de la pinza y la salud del fluido antes de que apruebes las piezas.",
    "bgImageAlt": "Servicio de reparación de frenos en RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Prueba en carretera y sensación del pedal",
        "body": "Reproducimos pulsación, tirón y ruido bajo frenado controlado cuando es seguro. El recorrido del pedal y la activación del ABS a velocidades de estacionamiento nos indican si el problema es hidráulico, mecánico o relacionado con sensores antes de desmontar las ruedas."
      },
      {
        "step": "02",
        "title": "Medir rotores y pastillas",
        "body": "Lecturas del micrómetro sobre el grosor del rotor y la oscilación, además de la profundidad del forro de las pastillas en los bordes interno y externo. El desgaste irregular indica guías de la pinza atascadas, mangueras colapsadas o problemas en el modulador ABS, no simplemente \"es hora de cambiar las pastillas\"."
      },
      {
        "step": "03",
        "title": "Revisión de pinzas y accesorios",
        "body": "Se limpian y lubrican los pasadores deslizantes, los clips de apoyo y las orejetas de los soportes con grasa de frenos de alta temperatura. Los pasadores oxidados provocan desgaste solo en las pastillas externas y sobrecalentamiento. Cotizamos kits de accesorios cuando los clips están corroídos: un seguro económico contra ruidos recurrentes."
      },
      {
        "step": "04",
        "title": "Escaneo de fluidos y ABS",
        "body": "El fluido contaminado con humedad se elimina cuando las tiras de prueba o las lecturas de ppm de cobre lo requieren. Los sensores de velocidad de las ruedas del ABS y los anillos dentados se inspeccionan en busca de residuos metálicos después del trabajo con pastillas; es una omisión común post-molienda que activa falsamente el ABS."
      },
      {
        "step": "05",
        "title": "Acondicionamiento y verificación final",
        "body": "Las pastillas y discos nuevos requieren un procedimiento de acondicionamiento controlado: frenadas moderadas desde 40 mph sin llegar a detenerse por completo hasta que se forme la capa de transferencia. Realizamos pruebas de firmeza del pedal y funcionamiento del ABS antes de que abandones nuestras instalaciones en Englewood."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Lo que reparamos",
    "title": "Cobertura completa del sistema de frenos",
    "intro": "Las pastillas y los discos son solo parte del sistema. Reparamos las capas hidráulicas y electrónicas que realmente convierten la fuerza del pedal en potencia de frenado.",
    "groups": [
      {
        "category": "Componentes de fricción",
        "items": [
          "Juegos de pastillas cerámicas y semimetálicas adaptados a tu estilo de conducción",
          "Reemplazo de discos o mecanizado en el vehículo cuando el grosor lo permite",
          "Reconstrucción de la pinza, servicio de guías y ajuste de las zapatas del freno de estacionamiento"
        ]
      },
      {
        "category": "Hidráulica y ABS",
        "items": [
          "Lavado del líquido de frenos con fluido con especificación DOT y prueba de humedad",
          "Inspección del cilindro maestro, línea de frenos y manguera flexible",
          "Limpieza del sensor de velocidad de rueda ABS y anillo dentado después de eventos con escombros"
        ]
      },
      {
        "category": "Inspección y seguridad",
        "items": [
          "Inspección visual gratuita de frenos con cualquier visita de servicio",
          "Presupuesto por escrito antes de ordenar las piezas",
          "Prueba de carretera post-reparación y orientación para el asentamiento de nuevos materiales de fricción"
        ]
      },
      {
        "category": "Conductores de Englewood y la zona metropolitana",
        "items": [
          "Evaluación de frenos para pendientes de montaña para conductores de la interestatal 70",
          "Paquetes de frenos para cargas pesadas en flotas y camiones de trabajo",
          "Servicio el mismo día cuando las piezas están en stock — llame antes de las 2 PM"
        ]
      }
    ]
  },
  "locale": "es-MX",
  "labor": {
    "title": "Transparencia en la mano de obra en cada trabajo de frenos",
    "description": "El trabajo de frenos nunca debería ser una factura misteriosa. Facturamos a nuestra tarifa publicada de $120/hr con los tiempos de mano de obra de AllData como referencia. Los alcances de pastillas y discos por eje, reconstrucción de la pinza y purga de fluido están documentados en su estimación por escrito antes de que ordenemos las piezas."
  },
  "faq": {
    "title": "Preguntas sobre reparación de frenos",
    "intro": "Respuestas directas sobre la vida útil de las pastillas, el rectificado de los discos, las luces de ABS y el impacto que tiene la conducción en Colorado sobre tu sistema de frenado."
  },
  "areaLabel": "reparación de frenos",
  "finalCta": {
    "title": "¿Listo para una inspección de frenos?",
    "description": "Inspección visual gratuita en 2120 W Evans Ave. Medimos, explicamos y cotizamos — pastillas, discos, fluido o calibradores — a $120/hr de mano de obra más refacciones antes de iniciar cualquier trabajo.",
    "secondaryCta": "Agendar en línea"
  },
  "relatedSlug": "brake-repair-englewood-co",
  "faqs": [
    {
      "question": "¿Cómo sé si necesito pastillas de freno o discos nuevos?",
      "answer": "Las pastillas deben reemplazarse cuando el grosor del material de fricción se acerca a los 3 mm o cuando los sensores de desgaste entran en contacto con el disco. Los discos requieren servicio cuando su grosor está por debajo de la especificación mínima, las superficies están rayadas por contacto metal contra metal, o la vibración del pedal indica una desviación circular. Medimos ambos con un micrómetro y un indicador de carátula, no adivinamos basándonos en los kilómetros. Muchos trabajos de pastillas en Englewood incluyen discos porque el ciclo térmico de Colorado deforma las superficies de fricción antes de que las pastillas lleguen al final de su vida útil."
    },
    {
      "question": "¿Por qué mi pedal de freno vibra cuando reduzco la velocidad?",
      "answer": "La vibración del pedal bajo frenado ligero es un síntoma clásico de desalineación de los discos por sobrecalentamiento, común en descensos largos o por un apriete desigual de las tuercas de las ruedas. El rectificado solo es viable si el espesor del disco supera el mínimo marcado. Muchos discos modernos son demasiado delgados para mecanizarse y requieren reemplazo. Medimos la desalineación y el espesor antes de cotizar entre rectificar o cambiar los discos."
    },
    {
      "question": "¿Con qué frecuencia se debe purgar el líquido de frenos en Colorado?",
      "answer": "La mayoría de los fabricantes recomiendan cambiar el líquido de frenos cada 2 a 3 años, ya que el líquido DOT absorbe humedad, lo que reduce el punto de ebullición y promueve la corrosión interna. Los cambios de temperatura en Colorado aceleran la entrada de humedad. Analizamos el contenido de cobre y el estado del líquido; si pasa la prueba, no insistimos en un lavado. Si falla, cotizamos un lavado con la especificación DOT correcta para su vehículo."
    },
    {
      "question": "¿Puedo conducir con un ruido de frenado por molienda?",
      "answer": "El chirrido indica que la placa de respaldo de la pastilla está contactando el rotor, lo que genera calor y puede glasear las pastillas, dañar los pistones de la pinza y rayar los rotores hasta hacerlos inservibles. Programa un servicio de inmediato. El frenado metal contra metal también aumenta la distancia de frenado, lo cual es peligroso en el tráfico del área metropolitana de Denver. Inspeccionamos la pinza en busca de daños cuando el chirrido ha continuado por más de unos días."
    },
    {
      "question": "¿Realizan servicio en sistemas de frenos ABS y electrónicos?",
      "answer": "Sí. Diagnosticamos sensores de velocidad de rueda ABS, residuos en el anillo de tono y problemas hidráulicos que activan las luces del ABS o una activación falsa a baja velocidad. Después del servicio de pastillas o discos, realizamos una prueba de carretera de la función ABS y verificamos la sensación del pedal. Los frenos de estacionamiento electrónicos en vehículos más nuevos requieren calibración con herramienta de escaneo después del servicio de las pastillas traseras; incluimos eso en el alcance cuando sea aplicable."
    },
    {
      "question": "¿Cuánto cuesta la reparación de frenos en RKC Automotive?",
      "answer": "El reemplazo de pastillas de freno por eje comienza en aproximadamente $189 más las piezas; el servicio de pastillas y discos desde unos $349 por eje — la mano de obra a nuestra tarifa publicada de $120/hora. Las reconstrucciones de pinzas, los cambios de fluido y las reparaciones relacionadas con ABS se cotizan por separado después de la inspección. Recibirá una estimación por escrito antes de que se pidan las piezas, sin cargos ocultos de suministros del taller en el total."
    },
    {
      "question": "¿Cuál es el grosor mínimo del disco y por qué es importante?",
      "answer": "Cada rotor tiene un grosor mínimo estampado en la cara o el borde — a menudo de 22–25 mm en los rotores ventilados delanteros. Por debajo del mínimo, el rotor no puede disipar el calor de manera segura y puede agrietarse bajo frenado en montaña en la I-70. Medimos cada rotor con micrómetro antes de recomendar rectificado vs. reemplazo. Muchos rotores modernos delgados son de un solo uso — se mecanizan una vez en su vida, si es que se mecanizan."
    },
    {
      "question": "Pastillas de freno cerámicas vs semimetálicas: ¿cuál debo elegir?",
      "answer": "Las pastillas cerâmicas funcionan en silencio y producen menos polvo, ideales para conductores diarios y vehículos de lujo. Las pastillas semimetálicas manejan mejor el calor para remolcar, pendientes de montaña y camiones de trabajo. Las pastillas orgánicas de bajo contenido metálico son las originales (OEM) en muchos vehículos importados. Ajustamos el compuesto a tu estilo de conducción, no te vendemos la pastilla más cara. Un compuesto incorrecto causa chirridos, pérdida de frenado o desgaste prematuro de los discos."
    },
    {
      "question": "¿Qué implica la reparación de un módulo ABS o un sensor de velocidad de rueda?",
      "answer": "Los sensores de velocidad de rueda del ABS leen los anillos dentados en cada cubo. Los desechos metálicos del rectificado de frenos, los anillos dentados dañados o las puntas de los sensores corroídos activan las luces del ABS y la activación falsa a baja velocidad. Inspeccionamos los sensores después del trabajo con pastillas, limpiamos los anillos dentados y analizamos las señales de velocidad de rueda en una prueba en carretera. El reemplazo del módulo es poco común; la mayoría de los fallos del ABS se deben a sensores, cableado o válvulas hidráulicas."
    }
  ]
},
} as const;

export function brakeRepairBodyCopy(lang: Lang) {
  return BRAKE_REPAIR_BODY[lang] ?? BRAKE_REPAIR_BODY.en;
}
