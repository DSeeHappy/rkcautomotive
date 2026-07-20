import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost ds Nemotron vllm/research (research-spark). */
export const PREVENTATIVE_MAINTENANCE_BODY = {
  en: {
  "breadcrumb": "Preventative Maintenance",
  "hero": {
    "imageAlt": "Preventative Maintenance at RKC Automotive Englewood CO",
    "eyebrow": "Scheduled care · Englewood, CO",
    "title": "Preventative Maintenance in Englewood, CO",
    "description": "Factory-interval service done honestly — oil, fluids, filters, belts, and milestone inspections at 30k/60k/90k — with a written plan that fixes what is due, not everything on a generic menu.",
    "primaryCta": "Plan My Service",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "Deferred maintenance is a payment plan — with interest.",
    "body": "Skipping a $150 coolant flush does not save money when a $1,800 head gasket follows. Englewood commuters stacking miles on I-25 and mountain weekends qualify for severe schedules on most owner manuals — yet dash reminders stretch intervals for marketing. We read your manual, log your mileage, and quote only the services that protect the engine, trans, and brakes you rely on daily."
  },
  "symptoms": {
    "eyebrow": "Milestone science",
    "title": "What preventative maintenance actually prevents",
    "intro": "Maintenance is not generic — timing belts, CVT fluid, and spark intervals are engine-specific failure prevention.",
    "cards": [
      {
        "title": "30k / 60k / 90k milestones",
        "body": "Honda 60k includes trans fluid and spark plugs; Toyota has coolant first-drain intervals; German cars need brake-fluid time changes regardless of mileage. We build milestone packages from your VIN spec — not a one-size coupon sheet. Each item is tied to a failure mode: belt service prevents valve crash, fluid service prevents CVT slip."
      },
      {
        "title": "Colorado severe-duty factors",
        "body": "Short trips, idling in winter, towing through the foothills, and salted roads push you into severe tables — shorter oil, brake fluid, and trans intervals. Altitude and heat stress cooling systems. We label your service file severe or normal based on how you actually drive, not how the dash average looks."
      },
      {
        "title": "Inspection before upsell",
        "body": "Multi-point inspection finds cracked serpentine belts, seeping water pumps, and torn CV boots before they strand you. We photograph wear when it matters, recommend fixes with priority levels — safety first, convenience second, cosmetic never pressured. No 27-point printout designed to sell cabin filters you changed last month."
      }
    ]
  },
  "technical": {
    "eyebrow": "Maintenance schedules",
    "title": "30/60/90k milestones & fluid exchange intervals",
    "intro": "Factory maintenance is VIN-specific — not a generic coupon. We build milestone packages from your owner manual tables with due-now vs due-soon priority so you spend on prevention, not emergency tow bills.",
    "cards": [
      {
        "title": "30k / 60k / 90k milestone content",
        "body": "Honda 60k includes trans fluid and spark plugs; Toyota specifies coolant first-drain intervals; German cars need brake-fluid time changes regardless of mileage. Timing-belt service on interference engines prevents valve crash worth thousands. We quote each line at $120/hr — you approve the bundle before work starts."
      },
      {
        "title": "Fluid exchange intervals",
        "body": "Engine coolant at 60k–100k, brake fluid every 2–3 years, transmission fluid at 30k–60k on severe schedules, differential and transfer-case on AWD at 30k–60k. Fluids break down by time and heat — not mileage alone. Denver heat and salt qualify as severe for most commuters."
      },
      {
        "title": "Belt, brake & suspension at service visits",
        "body": "Serpentine belt crack scan, brake pad thickness, ball-joint play — caught at maintenance before they become repairs. We photograph wear when it matters and prioritize safety-first items. No 27-point printout designed to sell cabin filters you changed last month."
      },
      {
        "title": "Fleet & multi-vehicle logging",
        "body": "Commercial accounts receive scheduled logging, consolidated invoicing, and priority booking when available. Each vehicle gets due-now vs due-soon lists — oil, brakes, inspections — so fleet managers are not guessing which unit needs service this week."
      }
    ],
    "tableTitle": "Typical fluid exchange intervals (severe schedule)",
    "tableIntro": "Always verify against your owner manual — this illustrates why deferred fluid service leads to expensive failures.",
    "table": {
      "caption": "Preventative maintenance fluid exchange intervals",
      "columns": [
        "Fluid",
        "Typical severe interval",
        "Failure if deferred"
      ],
      "rows": [
        {
          "label": "Engine oil",
          "values": [
            "5,000 mi / 6 mo",
            "Turbo bearing coke, sludge"
          ],
          "highlight": 2
        },
        {
          "label": "Coolant",
          "values": [
            "60k–100k / 5 yr",
            "Head gasket, heater core clog"
          ]
        },
        {
          "label": "Brake fluid",
          "values": [
            "2–3 years",
            "Moisture, ABS corrosion"
          ]
        },
        {
          "label": "Transmission",
          "values": [
            "30k–60k severe",
            "Slip, overheat, rebuild"
          ]
        },
        {
          "label": "Diff / transfer case",
          "values": [
            "30k–60k AWD",
            "Gear wear, chatter"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Maintenance plan",
    "title": "How we build your service schedule",
    "intro": "VIN-specific intervals, honest inspection, and logged history — so the next visit picks up where we left off.",
    "bgImageAlt": "Preventative Maintenance at RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "History & mileage review",
        "body": "Prior service records, current mileage, and driving pattern — commute, tow, or mixed — set the interval table."
      },
      {
        "step": "02",
        "title": "Due-now vs due-soon",
        "body": "Items past interval flagged safety-critical first. Due-soon items quoted for planning — no batch scare packaging."
      },
      {
        "step": "03",
        "title": "Fluid & filter service",
        "body": "Oil, coolant, brake, trans, and differential per spec. Filters matched to engine and cabin air quality needs."
      },
      {
        "step": "04",
        "title": "Belt, brake & suspension check",
        "body": "Belt deflection and crack scan, brake thickness, ball-joint play — caught at maintenance before they become repairs."
      },
      {
        "step": "05",
        "title": "Log & remind",
        "body": "Sticker and digital notes for next due mileage/date. Fleet accounts get consolidated invoicing."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Service menu",
    "title": "Preventative services we schedule",
    "intro": "Everything your owner manual expects — performed at RKC with $120/hr labor transparency.",
    "groups": [
      {
        "category": "Fluids",
        "items": [
          "Engine oil and filter per spec",
          "Coolant exchange with OEM chemistry",
          "Brake, power-steering, and washer fluid checks"
        ]
      },
      {
        "category": "Filters & belts",
        "items": [
          "Engine, cabin, and fuel filters",
          "Serpentine and timing belt inspection",
          "Timing belt/water-pump packages on interference engines"
        ]
      },
      {
        "category": "Drivetrain",
        "items": [
          "Transmission fluid service — drain/fill or exchange per manual",
          "Differential and transfer-case fluids on AWD/4WD",
          "Spark plugs and coil inspection at mileage"
        ]
      },
      {
        "category": "Fleet & family",
        "items": [
          "Multi-vehicle maintenance scheduling",
          "Priority booking for commercial accounts",
          "Pre-trip inspection before mountain travel season"
        ]
      }
    ]
  },
  "labor": {
    "title": "Maintenance labor transparency",
    "description": "Scheduled maintenance labor at $120/hr with parts listed line-by-line. Milestone packages quoted as a whole — you approve the bundle before we start."
  },
  "faq": {
    "title": "Preventative maintenance questions",
    "intro": "Severe vs normal schedules, 30k/60k content, fleet plans, and why dealer menus oversell."
  },
  "areaLabel": "preventative maintenance",
  "finalCta": {
    "title": "Build your maintenance plan",
    "description": "Visit RKC on Evans Ave with your mileage and manual. We quote what is due — not everything on a poster — at $120/hr labor plus parts.",
    "secondaryCta": "Schedule service"
  },
  "relatedSlug": "preventative-maintenance-englewood-co",
  "faqs": [
    {
      "question": "What is the difference between normal and severe maintenance schedules?",
      "answer": "Severe schedules shorten oil, fluid, and inspection intervals for short trips, towing, dusty conditions, and extreme temperatures — all common in Colorado. Owner manuals default to normal in marketing copy, but Denver commuting often qualifies as severe. We classify your driving honestly and quote intervals that match reality."
    },
    {
      "question": "What is included in a 30k / 60k / 90k service?",
      "answer": "Milestones are VIN-specific — not generic. A 60k Honda may need trans fluid and spark plugs; a Toyota may need coolant exchange; German cars need brake-fluid time changes. We build packages from your manual tables: fluids, filters, belts, plugs, and inspections due at that mileage. You approve the bundle before work starts."
    },
    {
      "question": "Will maintenance at RKC void my factory warranty?",
      "answer": "No. Federal Magnuson-Moss law protects your right to service at independent shops when proper procedures and parts are used. We document maintenance with invoices and fluid specs your warranty claims may request."
    },
    {
      "question": "How do I know which maintenance my car actually needs?",
      "answer": "We read the owner manual interval tables, check your mileage and prior service history, and inspect wear items. Due-now vs. due-soon items are separated — we do not sell a 90k package at 45k miles unless items are legitimately early due to age or condition."
    },
    {
      "question": "Do you offer fleet preventative maintenance plans?",
      "answer": "Yes — commercial accounts receive scheduled logging, consolidated invoicing, and priority booking when available. We track oil, brake, and inspection intervals per vehicle so fleet managers are not guessing which unit is due."
    },
    {
      "question": "Why is preventative maintenance cheaper than waiting for breakdowns?",
      "answer": "Coolant exchanges cost far less than head gaskets from overheating. Timing-belt service prevents valve interference damage worth thousands. Trans fluid service extends life vs. slip and overhaul. Maintenance spends small dollars on schedule instead of large dollars on emergency tow and collateral damage."
    },
    {
      "question": "What fluids should be exchanged at 30k, 60k, and 90k?",
      "answer": "Intervals are VIN-specific — not universal. Common milestones: engine coolant at 60k–100k, brake fluid every 2–3 years, transmission fluid at 30k–60k on severe schedules, differential and transfer-case on AWD at 30k–60k. We build your list from the owner manual table, not a generic shop poster."
    },
    {
      "question": "What is included in a typical 60k service package?",
      "answer": "A Honda 60k may include trans fluid, spark plugs, and valve adjustment inspection. Toyota often specifies coolant first drain. German vehicles need brake-fluid time changes regardless of mileage. We quote each line item with labor at $120/hr — you approve the bundle before work starts, not a mystery \"60k special.\""
    },
    {
      "question": "How do I track maintenance for multiple vehicles or a fleet?",
      "answer": "We log mileage, services performed, and next-due items on each invoice. Fleet accounts receive consolidated billing and priority booking when available. Each vehicle gets a due-now vs. due-soon list — oil, brakes, inspections — so managers are not guessing which unit needs service this week."
    }
  ]
},
  es: {
  "breadcrumb": "Mantenimiento preventivo",
  "hero": {
    "imageAlt": "Mantenimiento preventivo en RKC Automotive Englewood CO",
    "eyebrow": "Cuidado programado · Englewood, CO",
    "title": "Mantenimiento preventivo en Englewood, CO",
    "description": "Servicio de intervalo de fábrica realizado con honestidad: aceite, líquidos, filtros, correas e inspecciones de hitos en 30k/60k/90k, con un plan por escrito que soluciona lo que corresponde, no todo lo de un menú genérico.",
    "primaryCta": "Planificar mi servicio",
    "callPrefix": "Llamar"
  },
  "reality": {
    "quote": "El mantenimiento diferido es un plan de pagos — con intereses.",
    "body": "Saltarse un lavado de anticongelante de $150 no ahorra dinero cuando aparece una junta de culata de $1,800. Los conductores de Englewood que acumulan millas en la I-25 y los fines de semana en la montaña califican para condiciones severas según la mayoría de los manuales del propietario, pero las advertencias del tablero alargan los intervalos por motivos de marketing. Leemos su manual, registramos su kilometraje y cotizamos únicamente los servicios que protegen el motor, la transmisión y los frenos en los que usted confía a diario."
  },
  "symptoms": {
    "eyebrow": "Ciencia de hitos",
    "title": "Qué previene realmente el mantenimiento preventivo",
    "intro": "El mantenimiento no es genérico: las correas de distribución, el fluido de la transmisión CVT y los intervalos de las bujías son medidas preventivas específicas para cada motor.",
    "cards": [
      {
        "title": "Hitos de 30k / 60k / 90k millas",
        "body": "El servicio de 60,000 km para Honda incluye fluido de transmisión y bujías; Toyota tiene intervalos específicos para el primer drenaje del refrigerante; los vehículos alemanes requieren cambios de fluido de frenos según el tiempo, independientemente del kilometraje. Construimos paquetes personalizados según la especificación del VIN de su vehículo, no una hoja de cupones genérica. Cada elemento está vinculado a un modo de falla: el servicio de correas previene el daño a las válvulas, y el servicio de fluidos previene el deslizamiento de la transmisión CVT."
      },
      {
        "title": "Factores de trabajo pesado para Colorado",
        "body": "Los viajes cortos, el ralentí en invierno, el remolque por las estribaciones y las carreteras con sal te llevan a intervalos severos — más cortos para aceite, líquido de frenos y transmisión. La altitud y el estrés por calor afectan los sistemas de refrigeración. Etiquetamos tu archivo de servicio como severo o normal según cómo conduces realmente, no según el promedio que muestra el tablero."
      },
      {
        "title": "Inspección antes de la venta adicional",
        "body": "La inspección multipunto detecta correas serpentin agrietadas, bombas de agua que gotean y fundas de CV desgarradas antes de que lo dejen varado. Fotografiamos el desgaste cuando es relevante, recomendamos reparaciones con niveles de prioridad: la seguridad primero, la comodidad en segundo lugar, lo cosmético nunca se presiona. Sin un informe de 27 puntos diseñado para venderle filtros de cabina que cambió el mes pasado."
      }
    ]
  },
  "technical": {
    "eyebrow": "Calendarios de mantenimiento",
    "title": "Hitos de 30/60/90k e intervalos de cambio de fluidos",
    "intro": "El mantenimiento de fábrica es específico según el VIN, no un cupón genérico. Construimos paquetes de mantenimiento basados en las tablas del manual del propietario, con prioridad de 'debido ahora' frente a 'próximo vencimiento', para que usted gaste en prevención y no en facturas de remolque de emergencia.",
    "cards": [
      {
        "title": "Contenido de hitos 30k / 60k / 90k",
        "body": "El servicio de 60k millas para Honda incluye fluido de transmisión y bujías; Toyota especifica intervalos de drenaje inicial para el líquido refrigerante; los automóviles alemanes requieren cambios de fluido de frenos según el tiempo, independientemente del kilometraje. El servicio de correa de distribución en motores de interferencia previene daños en las válvulas que cuestan miles. Cotizamos cada línea a $120/hora: usted aprueba el paquete antes de que comience el trabajo."
      },
      {
        "title": "Intervalos de cambio de fluidos",
        "body": "El líquido refrigerante del motor se cambia entre los 60.000 y 100.000 km; el líquido de frenos, cada 2 a 3 años; el líquido de transmisión, entre los 30.000 y 60.000 km en condiciones de uso severo; y los líquidos del diferencial y del caso de transferencia en vehículos con tracción en las cuatro ruedas (AWD), también entre los 30.000 y 60.000 km. Los líquidos se degradan con el tiempo y el calor, no solo por el kilometraje. El calor y la sal de Denver califican como condiciones severas para la mayoría de los conductores diarios."
      },
      {
        "title": "Cinturón, frenos y suspensión en las visitas de servicio",
        "body": "Escaneo de grietas en la correa serpentina, espesor de las pastillas de freno, juego en las rótulas: se detectan durante el mantenimiento antes de que se conviertan en reparaciones. Fotografizamos el desgaste cuando es relevante y priorizamos los elementos que garantizan la seguridad. Sin listas de 27 puntos diseñadas para venderle filtros de cabina que usted cambió el mes pasado."
      },
      {
        "title": "Registro de flotas y vehículos múltiples",
        "body": "Las cuentas comerciales reciben programación de mantenimiento, facturación consolidada y reserva prioritaria cuando está disponible. Cada vehículo cuenta con listas de tareas urgentes versus próximas — aceite, frenos, inspecciones — para que los gestores de flotas no tengan que adivinar qué unidad necesita servicio esta semana."
      }
    ],
    "tableTitle": "Intervalos típicos de cambio de fluidos (programa severo)",
    "tableIntro": "Siempre verifique contra su manual del propietario: esto ilustra por qué el servicio diferido de fluidos conduce a fallas costosas.",
    "table": {
      "caption": "Intervalos de cambio de fluidos de mantenimiento preventivo",
      "columns": [
        "Fluido",
        "Intervalo típico severo",
        "Fallo si se pospone"
      ],
      "rows": [
        {
          "label": "Aceite de motor",
          "values": [
            "5,000 millas / 6 meses",
            "Coque de cojinete turbo, lodo"
          ]
        },
        {
          "label": "Refrigerante",
          "values": [
            "60k–100k / 5 años",
            "Junta de culata, obstrucción del núcleo del calefactor"
          ]
        },
        {
          "label": "Fluido de frenos",
          "values": [
            "2–3 años",
            "Humedad, corrosión del ABS"
          ]
        },
        {
          "label": "Transmisión",
          "values": [
            "30k–60k severas",
            "Deslizamiento, sobrecalentamiento, reconstrucción"
          ]
        },
        {
          "label": "Diferencial / caja de transferencia",
          "values": [
            "30k–60k AWD",
            "Desgaste de engranajes, chirrido"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Plan de mantenimiento",
    "title": "Cómo construimos su programa de servicio",
    "intro": "Intervalos específicos según el VIN, inspección honesta e historial registrado para que la próxima visita continúe donde lo dejamos.",
    "bgImageAlt": "Mantenimiento preventivo en RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Historial y revisión de kilometraje",
        "body": "Los registros de servicio previos, el kilometraje actual y el patrón de conducción — desplazamiento, remolque o mixto — establecen la tabla de intervalos."
      },
      {
        "step": "02",
        "title": "Debido ahora vs. debido pronto",
        "body": "Los elementos que superan el intervalo se marcan como críticos para la seguridad en primer lugar. Los elementos próximos a vencer se cotizan para la planificación, sin empaquetado alarmante por lotes."
      },
      {
        "step": "03",
        "title": "Servicio de fluidos y filtros",
        "body": "Cambio de aceite, refrigerante, líquido de frenos, transmisión y diferencial según especificaciones. Filtros seleccionados según las necesidades de calidad del aire del motor y del habitáculo."
      },
      {
        "step": "04",
        "title": "Revisión de correas, frenos y suspensión",
        "body": "Inspección de la desviación y grietas en las correas, grosor de los frenos y juego en las rótulas: se detectan durante el mantenimiento antes de que se conviertan en reparaciones."
      },
      {
        "step": "05",
        "title": "Registro y recordatorio",
        "body": "Notas en forma de adhesivo y digitales para el próximo kilometraje/fecha de vencimiento. Las cuentas de flotas obtienen facturación consolidada."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Menú de servicio",
    "title": "Servicios preventivos que programamos",
    "intro": "Todo lo que su manual del propietario espera — realizado en RKC con transparencia de mano de obra a $120/hr.",
    "groups": [
      {
        "category": "Fluidos",
        "items": [
          "Aceite de motor y filtro según especificación",
          "Intercambio de anticongelante con química OEM",
          "Revisiones de frenos, dirección asistida y líquido limpiaparabrisas"
        ]
      },
      {
        "category": "Filtros y correas",
        "items": [
          "Filtros de motor, cabina y combustible",
          "Inspección de la correa serpentina y la correa de distribución",
          "Paquetes de correa de distribución y bomba de agua en motores de interferencia"
        ]
      },
      {
        "category": "Transmisión",
        "items": [
          "Servicio de fluido de transmisión — drenado/llenado o intercambio según el manual",
          "Líquidos del diferencial y de la caja de transferencia en vehículos AWD/4WD",
          "Inspección de bujías y bobinas según el kilometraje"
        ]
      },
      {
        "category": "Flota y familia",
        "items": [
          "Programación de mantenimiento para múltiples vehículos",
          "Reserva prioritaria para cuentas comerciales",
          "Inspección previa al viaje antes de la temporada de montaña"
        ]
      }
    ]
  },
  "labor": {
    "title": "Transparencia en la mano de obra de mantenimiento",
    "description": "Servicio de mantenimiento programado a $120/hora, con las piezas listadas línea por línea. Los paquetes de hitos se cotizan en su totalidad: usted aprueba el paquete antes de que comencemos."
  },
  "faq": {
    "title": "Preguntas sobre mantenimiento preventivo",
    "intro": "Horarios severos vs. normales, contenido de 30k/60k, planes para flotas y por qué los menús de los concesionarios sobreventas."
  },
  "areaLabel": "mantenimiento preventivo",
  "finalCta": {
    "title": "Construye tu plan de mantenimiento",
    "description": "Visite RKC en Evans Ave con su kilometraje y manual. Cotizamos lo que se debe — no todo lo que aparece en un cartel — a $120/hr de mano de obra más las piezas.",
    "secondaryCta": "Agendar servicio"
  },
  "relatedSlug": "preventative-maintenance-englewood-co",
  "faqs": [
    {
      "question": "¿Cuál es la diferencia entre los programas de mantenimiento normales y severos?",
      "answer": "Los ciclos de conducción severos acortan los intervalos de cambio de aceite, fluidos e inspecciones para viajes cortos, remolcar, condiciones polvorientas y temperaturas extremas, todos comunes en Colorado. Los manuales del propietario por defecto se refieren a condiciones normales en la documentación de marketing, pero el desplazamiento diario en Denver a menudo califica como severo. Clasificamos su conducción de manera honesta y cotizamos intervalos que se ajustan a la realidad."
    },
    {
      "question": "¿Qué incluye el servicio de 30k / 60k / 90k?",
      "answer": "Los hitos son específicos del VIN, no genéricos. Un Honda con 60k millas puede necesitar cambio de fluido de transmisión y bujías; un Toyota puede requerir intercambio de anticongelante; los vehículos alemanes necesitan cambios de fluido de frenos en intervalos específicos. Construimos paquetes basados en las tablas de su manual: fluidos, filtros, correas, bujías e inspecciones correspondientes a ese kilometraje. Usted aprueba el paquete antes de que comience el trabajo."
    },
    {
      "question": "¿El mantenimiento en RKC anulará mi garantía de fábrica?",
      "answer": "No. La ley federal Magnuson-Moss protege su derecho a recibir servicio en talleres independientes cuando se utilizan los procedimientos y las piezas adecuadas. Documentamos el mantenimiento con facturas y especificaciones de fluidos que sus reclamaciones de garantía podrían solicitar."
    },
    {
      "question": "¿Cómo sé qué mantenimiento necesita realmente mi coche?",
      "answer": "Leemos las tablas de intervalos del manual del propietario, verificamos el kilometraje y el historial de servicio previo, e inspeccionamos los elementos de desgaste. Separamos los elementos que deben atenderse ahora de los que pueden esperar — no vendemos un paquete de 90,000 millas a 45,000 millas a menos que los elementos deban atenderse antes de lo previsto debido a la edad o condición."
    },
    {
      "question": "¿Ofrecen planes de mantenimiento preventivo para flotas?",
      "answer": "Sí: las cuentas comerciales reciben registro programado, facturación consolidada y reserva prioritaria cuando está disponible. Rastreamos los intervalos de aceite, frenos e inspección por vehículo para que los gestores de flotas no tengan que adivinar qué unidad está próxima al mantenimiento."
    },
    {
      "question": "¿Por qué el mantenimiento preventivo es más económico que esperar a que ocurran averías?",
      "answer": "Los cambios de líquido refrigerante cuestan mucho menos que las juntas de la culata por sobrecalentamiento. El servicio de la correa de distribución previene daños por interferencia de válvulas que valen miles. El servicio del fluido de transmisión prolonga la vida útil frente al patinaje y la reconstrucción. El mantenimiento gasta pequeñas cantidades de dinero según el programa en lugar de grandes cantidades de dinero en remolque de emergencia y daños colaterales."
    },
    {
      "question": "¿Qué fluidos deben cambiarse a los 30k, 60k y 90k millas?",
      "answer": "Los intervalos son específicos del VIN, no universales. Hitos comunes: líquido refrigerante del motor cada 60k–100k, líquido de frenos cada 2–3 años, líquido de transmisión cada 30k–60k en condiciones severas, diferencial y caja de transferencia en tracción AWD cada 30k–60k. Construimos su lista a partir de la tabla del manual del propietario, no de un póster genérico del taller."
    },
    {
      "question": "¿Qué incluye el paquete de servicio típico de 60,000 millas?",
      "answer": "Un servicio de 60,000 millas para Honda puede incluir fluido de transmisión, bujías e inspección de ajuste de válvulas. Toyota suele especificar primero el drenaje del anticongelante. Los vehículos alemanes requieren cambios de fluido de frenos según el tiempo, independientemente del kilometraje. Cotizamos cada partida con una mano de obra de $120 por hora; usted aprueba el paquete antes de que comience el trabajo, no una \"oferta especial de 60,000 millas\" misteriosa."
    },
    {
      "question": "¿Cómo puedo llevar el control del mantenimiento de varios vehículos o de una flota?",
      "answer": "Registramos el kilometraje, los servicios realizados y los elementos próximos a vencer en cada factura. Las cuentas de flotas reciben facturación consolidada y prioridad en la reserva de citas cuando está disponible. Cada vehículo recibe una lista de elementos que requieren atención inmediata versus aquellos que pueden esperar — aceite, frenos, inspecciones — para que los gerentes no tengan que adivinar qué unidad necesita servicio esta semana."
    }
  ]
},
} as const;

export function preventativeMaintenanceBodyCopy(lang: Lang) {
  return PREVENTATIVE_MAINTENANCE_BODY[lang] ?? PREVENTATIVE_MAINTENANCE_BODY.en;
}
