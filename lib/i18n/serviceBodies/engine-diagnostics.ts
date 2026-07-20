import type { Lang } from '@/lib/language';

/** Engine Diagnostics page body â€” ES via Bifrost Spark vllm/smart (smart-spark). */
export const ENGINE_DIAGNOSTICS_BODY = {
  en: {
  "breadcrumb": "Engine Diagnostics",
  "hero": {
    "imageAlt": "Engine Diagnostics at RKC Automotive Englewood CO",
    "eyebrow": "Diagnostics · Englewood, CO",
    "title": "Advanced Engine Diagnostics in Englewood, CO",
    "description": "Rough idle, power loss, or mystery misfires? We scan OBD-II, analyze live data, run compression and smoke tests, and isolate fuel-trim faults â€” with a written repair plan before parts get thrown at codes.",
    "primaryCta": "Book Diagnostics",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "A stored code is a clue â€” not a diagnosis.",
    "bodyBefore": "Parts stores read P0xxx codes for free, but codes only report which sensor or circuit tripped â€” not whether the sensor failed, a wire rubbed through, or the root cause is mechanical. Denver metro drivers often replace three oxygen sensors before finding a vacuum leak or burnt exhaust valve. At RKC we verify every code with live data, scope traces, and mechanical tests so you pay for the fix, not the guess. When a",
    "linkText": "check engine light in Englewood",
    "bodyAfter": "points to misfire or fuel-trim faults, we isolate the root cause before recommending parts."
  },
  "symptomsHead": {
    "eyebrow": "Drivability signs",
    "title": "Symptoms that need real diagnostics",
    "intro": "Modern powertrains mask problems until load, altitude, or cold-start conditions expose them. These patterns need scan tools and test equipment â€” not a generic tune-up quote."
  },
  "symptomsCards": [
    {
      "title": "Random misfire & fuel trim drift",
      "body": "P0300-series codes with positive long-term fuel trim on multiple banks often mean unmetered air â€” cracked PCV hoses, intake gasket leaks, or torn MAF boots. Negative trim on one bank can trace to leaking injectors or low compression. We graph fuel trims at idle, 2,500 RPM, and light load on a road test loop near Evans Ave to see which cells are out of spec before recommending coils or plugs."
    },
    {
      "title": "Rough idle & smoke signals",
      "body": "Blue smoke at startup points to valve-guide seal or turbo seal wear; white smoke that smells sweet suggests coolant in the combustion chamber; black smoke under load is rich fuel or restricted airflow. A smoke-machine test through the intake isolates vacuum leaks in minutes. Compression and leak-down tests separate ring wear from head-gasket failure â€” critical before you approve a $2,000 head job on a high-mileage SUV."
    },
    {
      "title": "Power loss at altitude",
      "body": "Colorado's thin air stresses turbochargers, VVT solenoids, and fuel delivery. A vehicle that feels fine at sea level may show boost leaks, clogged intercoolers, or MAF scaling errors above 5,000 feet. We compare requested vs. actual boost, knock retard, and catalyst efficiency on live data â€” especially on EcoBoost, TDI, and direct-injection platforms common in Englewood commutes."
    }
  ],
  "techHead": {
    "eyebrow": "Diagnostic depth",
    "title": "OBD-II PIDs, freeze frame, smoke test & relative compression",
    "intro": "Professional engine diagnostics goes beyond reading codes. We capture the conditions when the fault set, graph live data under load, smoke-test vacuum leaks, and compare cylinder cranking speed â€” so repairs target root cause, not the cheapest guess."
  },
  "techCards": [
    {
      "title": "Live OBD-II PIDs we graph",
      "body": "Short-term and long-term fuel trims (STFT/LTFT), MAF grams-per-second vs. calculated load, O2 sensor switching voltage, misfire counters per cylinder, MAP/MAF correlation, and VVT commanded vs. actual cam angles. Denver altitude exposes marginal sensors that pass at sea level â€” we test on Englewood routes, not just in the bay."
    },
    {
      "title": "Freeze-frame capture",
      "body": "When a code sets, the PCM records RPM, coolant temp, fuel status, and load at that moment. A P0171 lean code at cold idle differs from one at 70 mph uphill on C-470. Freeze-frame tells us which operating cell failed â€” critical for intermittent faults that disappear when you arrive at the shop."
    },
    {
      "title": "Smoke-machine vacuum & EVAP test",
      "body": "Visible vapor injected into the intake finds cracked PCV hoses, intake gasket leaks, and torn MAF boots that set lean codes. EVAP smoke locates gas-cap, purge-valve, and vent-hose leaks causing P044x codes. Leaks too small to hear are found in minutes â€” common on high-mileage rubber in Colorado heat."
    },
    {
      "title": "Relative compression testing",
      "body": "Uses crankshaft position sensor to compare cranking acceleration between cylinders â€” no spark plugs removed. A weak cylinder shows slower compression stroke speed. We follow with traditional compression or leak-down on flagged cylinders before recommending top-end or bottom-end repair â€” saving hours on multi-cylinder misfire diagnosis."
    }
  ],
  "techTable": {
    "tableTitle": "Key OBD-II PIDs for drivability diagnosis",
    "tableIntro": "These parameters tell us whether the fault is fuel, air, ignition, or mechanical â€” before parts get ordered.",
    "tableCaption": "Common OBD-II PIDs used during engine diagnostics",
    "tableColumns": [
      "PID",
      "What it tells us",
      "Red flag"
    ],
    "tableRows": [
      {
        "label": "STFT / LTFT",
        "values": [
          "Fuel trim correction",
          "±10% sustained = lean/rich fault"
        ]
      },
      {
        "label": "MAF g/s",
        "values": [
          "Airflow at RPM/load",
          "Low vs. calculated load = restriction or bad MAF"
        ]
      },
      {
        "label": "O2 B1S1",
        "values": [
          "Upstream O2 switching",
          "Lazy or stuck = fuel or cat issue"
        ]
      },
      {
        "label": "Misfire counts",
        "values": [
          "Per-cylinder misfires",
          "Climbing count = coil, injector, or mechanical"
        ]
      },
      {
        "label": "VVT actual vs. cmd",
        "values": [
          "Cam timing correlation",
          "Deviation = solenoid, oil, or chain"
        ]
      }
    ]
  },
  "process": {
    "eyebrow": "Diagnostic workflow",
    "title": "How we isolate engine faults",
    "intro": "Our ASE-certified techs follow a verify-first workflow â€” scan, test, confirm â€” so the repair matches the failure mode.",
    "bgImageAlt": "Engine Diagnostics at RKC Automotive Englewood CO",
    "steps": [
      {
        "title": "OBD-II scan & freeze frame",
        "body": "We pull stored, pending, and permanent codes with freeze-frame RPM, load, and fuel status. Pending codes on cold mornings often differ from stored codes after a full warm-up cycle."
      },
      {
        "title": "Live data & bidirectional tests",
        "body": "Fuel trims, O2 sensor switching, MAP/MAF correlation, and VVT commanded vs. actual angles. Actuator tests command EGR, EVAP purge, and cooling fans to confirm PCM control."
      },
      {
        "title": "Scope & waveform analysis",
        "body": "Ignition patterns, injector pintle time, and crank/cam correlation on a digital scope catch intermittent faults scan tools miss â€” especially coil-on-plug breakdown under load."
      },
      {
        "title": "Mechanical verification",
        "body": "Compression, leak-down, cooling-system pressure test, and smoke test when codes or smoke color suggest internal wear or vacuum leaks."
      },
      {
        "title": "Written repair plan",
        "body": "You receive a prioritized fix list with parts and labor at $120/hr. Diagnostic fee applies toward approved repairs â€” you are not paying twice to learn what failed."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Equipment & tests",
    "title": "Diagnostic tools we use daily",
    "intro": "Professional diagnostics require more than a code reader. Our Englewood bay is equipped for mechanical and electrical root-cause work.",
    "groups": [
      {
        "category": "Electronic diagnostics",
        "items": [
          "Factory-level scan tools for domestic, Asian, and European platforms",
          "Live data graphing and freeze-frame analysis",
          "Oscilloscope for ignition and sensor waveforms"
        ]
      },
      {
        "category": "Mechanical testing",
        "items": [
          "Compression and cylinder leak-down testing",
          "Cooling-system pressure and combustion-gas detection",
          "Smoke-machine vacuum leak isolation"
        ]
      },
      {
        "category": "Drivability verification",
        "items": [
          "Controlled road test on local Englewood routes",
          "Fuel trim capture at altitude and under load",
          "Post-repair monitor readiness and code clearing"
        ]
      },
      {
        "category": "What you receive",
        "items": [
          "Plain-language explanation of findings",
          "Written estimate before repair authorization",
          "Diagnostic fee credited toward approved work"
        ]
      }
    ]
  },
  "labor": {
    "title": "Labor transparency on diagnostics",
    "description": "Engine diagnostics start from $99 and credit toward approved repairs. Labor bills at our posted $120/hr rate with documented test results â€” not open-ended hourly guessing."
  },
  "faqSection": {
    "title": "Engine diagnostics questions",
    "intro": "Answers on diagnostic fees, live data, compression tests, and why we do not just clear codes."
  },
  "areaLabel": "engine diagnostics",
  "finalCta": {
    "title": "Need engine diagnostics today?",
    "description": "Schedule at 2120 W Evans Ave. We find the root cause â€” misfire, vacuum leak, sensor fault, or mechanical wear â€” with tests you can understand before you approve the fix.",
    "secondaryCta": "Request appointment"
  },
  "faqs": [
    {
      "question": "What is included in an engine diagnostic at RKC?",
      "answer": "We scan OBD-II for stored, pending, and permanent codes; review freeze-frame data; analyze live fuel trims, sensor response, and misfire counters; and perform targeted tests â€” smoke test for vacuum leaks, compression or leak-down for mechanical faults, scope traces for ignition patterns. You receive a written repair plan with prioritized fixes at $120/hr labor. The diagnostic fee credits toward approved repairs."
    },
    {
      "question": "Why should I pay for diagnostics when parts stores scan for free?",
      "answer": "Free scans read codes â€” they do not verify root cause. A P0171 lean code can be a vacuum leak, weak fuel pump, dirty MAF, or exhaust leak pulling false air. Throwing parts at codes wastes money. Our paid diagnostic applies professional test equipment and technician time to confirm what failed before you buy parts. The fee is credited toward repair when you approve the work."
    },
    {
      "question": "When do you recommend a compression or leak-down test?",
      "answer": "When misfires follow a mechanical pattern â€” equal on cold start, oil consumption, or coolant loss â€” or when fuel and ignition tests check out but power remains low. Compression identifies ring or valve sealing issues; leak-down pinpoints which valve or ring land leaks. These tests prevent approving expensive coil or injector jobs on an engine with internal wear."
    },
    {
      "question": "Can you diagnose rough idle and stalling problems?",
      "answer": "Yes. Rough idle traces to vacuum leaks, carbon on direct-injection valves, idle-air control faults, or misfires. We graph fuel trims at idle and off-idle, smoke-test intake plumbing, and scope ignition on cylinders that show elevated misfire counts. Denver altitude can expose marginal sensors that pass at sea level â€” we test under your actual driving conditions."
    },
    {
      "question": "Do you diagnose diesel engine problems?",
      "answer": "We handle common diesel drivability â€” boost leaks, DEF/SCR faults, fuel-filter restrictions, and sensor-related power loss on HD pickups and passenger diesels where equipment allows. Complex emissions-aftertreatment repairs are scoped honestly with parts availability and timeline before authorization."
    },
    {
      "question": "How long does engine diagnostics take?",
      "answer": "Straightforward single-code faults may resolve in an hour. Intermittent drivability, multiple codes, or mechanical follow-up tests can take longer. We communicate findings as we go and never expand scope without your approval. Same-day diagnosis is common when you call before early afternoon."
    },
    {
      "question": "What OBD-II live data PIDs do you monitor during diagnostics?",
      "answer": "We graph short-term and long-term fuel trims (STFT/LTFT), MAF grams-per-second vs. calculated load, O2 sensor switching voltage, misfire counters per cylinder, MAP/MAF correlation, and VVT commanded vs. actual cam angles. Freeze-frame captures RPM, coolant temp, and fuel status at the moment the fault set â€” critical for intermittent lean codes on cold mornings in Englewood."
    }
  ]
},
  es: {
  "breadcrumb": "Diagn�stico de motor",
  "hero": {
    "imageAlt": "Diagn�stico de motor en RKC Automotive Englewood CO",
    "eyebrow": "Diagn�sticos � Englewood, CO",
    "title": "Diagn�stico avanzado de motores en Englewood, CO",
    "description": "�Ralent� irregular, p�rdida de potencia o fallas de encendido misteriosas? Escaneamos OBD-II, analizamos datos en tiempo real, realizamos pruebas de compresi�n y de humo, e identificamos fallas en el ajuste de combustible, todo ello con un plan de reparaci�n por escrito antes de reemplazar piezas al azar por c�digos de error.",
    "primaryCta": "Reservar Diagn�stico",
    "callPrefix": "Llamar"
  },
  "reality": {
    "quote": "Un c�digo almacenado es una pista, no un diagn�stico.",
    "bodyBefore": "Las tiendas de repuestos leen los c�digos P0xxx de forma gratuita, pero estos c�digos solo indican qu� sensor o circuito se activ�, no si el sensor fall�, si un cable se desgast� por fricci�n o si la causa ra�z es mec�nica. Los conductores de la zona metropolitana de Denver a menudo reemplazan tres sensores de ox�geno antes de encontrar una fuga de vac�o o una v�lvula de escape quemada. En RKC verificamos cada c�digo con datos en tiempo real, trazados de osciloscopio y pruebas mec�nicas, para que usted pague por la reparaci�n, no por las suposiciones. Cuando un",
    "linkText": "luz de motor de verificaci�n en Englewood",
    "bodyAfter": "se�ala fallos de fallo de encendido o de ajuste de combustible, aislamos la causa ra�z antes de recomendar piezas."
  },
  "symptomsHead": {
    "eyebrow": "Signos de manejabilidad",
    "title": "S�ntomas que requieren diagn�stico real",
    "intro": "Los sistemas de propulsi�n modernos ocultan los problemas hasta que las condiciones de carga, altitud o arranque en fr�o los exponen. Estos patrones requieren herramientas de diagn�stico y equipos de prueba, no una cotizaci�n gen�rica de mantenimiento."
  },
  "symptomsCards": [
    {
      "title": "Fallas de encendido aleatorias y desviaci�n de ajuste de combustible",
      "body": "Los c�digos de la serie P0300 con ajuste de combustible a largo plazo positivo en m�ltiples bancos suelen indicar aire no medido: mangueras de PCV agrietadas, fugas en la junta de admisi�n o fundas del MAF desgarradas. Un ajuste negativo en un banco puede deberse a inyectores con fugas o baja compresi�n. Graficamos los ajustes de combustible en ralent�, a 2,500 RPM y con carga ligera en un circuito de prueba en carretera cerca de Evans Ave para identificar qu� celdas est�n fuera de especificaci�n antes de recomendar bobinas o buj�as."
    },
    {
      "title": "Ralent� irregular y se�ales de humo",
      "body": "El humo azul al arrancar indica desgaste en los sellos de las gu�as de las v�lvulas o en el sello del turbo; el humo blanco con olor dulce sugiere la presencia de refrigerante en la c�mara de combusti�n; el humo negro bajo carga indica una mezcla rica de combustible o un flujo de aire restringido. Una prueba con m�quina de humo a trav�s del sistema de admisi�n permite aislar las fugas de vac�o en minutos. Las pruebas de compresi�n y de p�rdida de presi�n distinguen el desgaste de los anillos del fallo de la junta de la culata, lo cual es cr�tico antes de aprobar una reparaci�n de la culata de $2,000 en un SUV con muchos kil�metros."
    },
    {
      "title": "P�rdida de potencia a gran altitud",
      "body": "El aire enrarecido de Colorado estresa los turbocompresores, los solenoides VVT y el sistema de alimentaci�n de combustible. Un veh�culo que funciona bien a nivel del mar puede presentar fugas de presi�n, intercambiadores de calor obstruidos o errores de calibraci�n del sensor MAF por encima de los 5,000 pies. Comparamos la presi�n de sobrealimentaci�n solicitada frente a la real, el retraso por detonaci�n y la eficiencia del catalizador en datos en vivo, especialmente en plataformas EcoBoost, TDI y de inyecci�n directa, comunes en los trayectos diarios por Englewood."
    }
  ],
  "techHead": {
    "eyebrow": "Profundidad de diagn�stico",
    "title": "PIDs OBD-II, cuadro de datos congelados, prueba de humo y compresi�n relativa",
    "intro": "El diagn�stico profesional de motores va m�s all� de la lectura de c�digos. Capturamos las condiciones en las que se estableci� la falla, graficamos datos en vivo bajo carga, realizamos pruebas de humo para detectar fugas de vac�o y comparamos la velocidad de arranque de cada cilindro, de modo que las reparaciones se centren en la causa ra�z y no en la suposici�n m�s econ�mica."
  },
  "techCards": [
    {
      "title": "PIDs OBD-II en vivo que graficamos",
      "body": "Trims de combustible a corto y largo plazo (STFT/LTFT), gramos por segundo del MAF frente a la carga calculada, voltaje de conmutaci�n del sensor O2, contadores de falla de encendido por cilindro, correlaci�n MAP/MAF y �ngulos de leva comandados vs. reales del VVT. La altitud de Denver expone sensores marginales que pasan la prueba a nivel del mar; probamos en rutas de Englewood, no solo en la bah�a."
    },
    {
      "title": "Captura de datos congelados",
      "body": "Cuando se establece un c�digo, la PCM registra las RPM, la temperatura del refrigerante, el estado del combustible y la carga en ese momento. Un c�digo P0171 de mezcla pobre en ralent� en fr�o difiere de uno a 112 km/h subiendo una cuesta en la carretera C-470. Los datos congelados nos indican en qu� condici�n operativa fall� � lo cual es cr�tico para fallas intermitentes que desaparecen cuando llegas al taller."
    },
    {
      "title": "Prueba de vac�o con m�quina de humo y sistema EVAP",
      "body": "El vapor visible inyectado en el sistema de admisi�n permite detectar mangueras PCV agrietadas, fugas en la junta del colector de admisi�n y fundas del sensor MAF desgarradas, las cuales generan c�digos de mezcla pobre. El humo EVAP localiza fugas en la tapa de combustible, la v�lvula de purga y las mangueras de ventilaci�n, las cuales provocan c�digos P044x. Las fugas demasiado peque�as para escucharse se detectan en minutos; un problema com�n en la goma de alto kilometraje bajo el calor de Colorado."
    },
    {
      "title": "Prueba de compresi�n relativa",
      "body": "Utiliza el sensor de posici�n del cig�e�al para comparar la aceleraci�n de arranque entre los cilindros � sin quitar las buj�as. Un cilindro d�bil muestra una velocidad m�s lenta en la carrera de compresi�n. Posteriormente, realizamos una prueba de compresi�n tradicional o de p�rdida de presi�n en los cilindros identificados antes de recomendar una reparaci�n en la parte superior o inferior del motor, lo que ahorra horas en el diagn�stico de fallos de encendido en motores de m�ltiples cilindros."
    }
  ],
  "techTable": {
    "tableRows": [
      {
        "label": "STFT / LTFT",
        "values": [
          "Correcci�n de ajuste de combustible",
          "�10% sostenido = falla de mezcla pobre/rica"
        ]
      },
      {
        "label": "MAF g/s",
        "values": [
          "Flujo de aire en RPM/carga",
          "Bajo vs. carga calculada = restricci�n o MAF defectuoso"
        ]
      },
      {
        "label": "Sonda O2 B1S1",
        "values": [
          "Cambio de sonda O2 aguas arriba",
          "Lenta o atascada = problema de combustible o catalizador"
        ]
      },
      {
        "label": "Cuentas de fallo de encendido",
        "values": [
          "Fallos de encendido por cilindro",
          "Conteo ascendente = bobina, inyector o mec�nico"
        ]
      },
      {
        "label": "VVT actual vs. cmd",
        "values": [
          "Correlaci�n del tiempo de la leva",
          "Desviaci�n = solenoide, aceite o cadena"
        ]
      }
    ],
    "tableTitle": "PIDs OBD-II clave para el diagn�stico de la conducibilidad",
    "tableIntro": "Estos par�metros nos indican si la falla es de combustible, aire, encendido o mec�nica, antes de que se pidan las piezas.",
    "tableCaption": "PIDs OBD-II comunes utilizados durante el diagn�stico del motor",
    "tableColumns": [
      "PID",
      "Qu� nos indica",
      "Bandera roja"
    ]
  },
  "process": {
    "steps": [
      {
        "title": "Escaneo OBD-II y cuadro de datos congelados",
        "body": "Leemos c�digos almacenados, pendientes y permanentes, junto con RPM, carga y estado de combustible del cuadro de datos congelados. Los c�digos pendientes en las ma�anas fr�as suelen diferir de los c�digos almacenados despu�s de un ciclo completo de calentamiento."
      },
      {
        "title": "Datos en vivo y pruebas bidireccionales",
        "body": "Trims de combustible, conmutaci�n del sensor de O2, correlaci�n MAP/MAF y �ngulos comandados vs. reales del VVT. Las pruebas de actuadores comandan la EGR, la purga del EVAP y los ventiladores de refrigeraci�n para confirmar el control del PCM."
      },
      {
        "title": "An�lisis de alcance y forma de onda",
        "body": "Los patrones de encendido, el tiempo de aguja del inyector y la correlaci�n cig�e�al/cigom en un osciloscopio digital captan fallas intermitentes que las herramientas de diagn�stico pasan por alto, especialmente la falla de la bobina sobre la buj�a bajo carga."
      },
      {
        "title": "Verificaci�n mec�nica",
        "body": "Prueba de compresi�n, prueba de p�rdida de compresi�n, prueba de presi�n del sistema de enfriamiento y prueba de humo cuando los c�digos o el color del humo sugieren desgaste interno o fugas de vac�o."
      },
      {
        "title": "Plan de reparaci�n escrito",
        "body": "Recibir�s una lista de reparaciones priorizadas con piezas y mano de obra a $120/h. La tarifa de diagn�stico se aplica a las reparaciones aprobadas; no pagas dos veces por saber qu� fall�."
      }
    ],
    "eyebrow": "Flujo de trabajo de diagn�stico",
    "title": "C�mo aislamos las fallas del motor",
    "intro": "Nuestros t�cnicos certificados por ASE siguen un flujo de trabajo de verificaci�n primero: escanear, probar, confirmar, para que la reparaci�n coincida con el modo de falla.",
    "bgImageAlt": "Diagn�stico de motor en RKC Automotive Englewood CO"
  },
  "checklist": {
    "groups": [
      {
        "category": "Diagn�stico electr�nico",
        "items": [
          "Herramientas de escaneo de nivel de f�brica para plataformas nacionales, asi�ticas y europeas",
          "Graficaci�n de datos en vivo y an�lisis de fotogramas congelados",
          "Osciloscopio para formas de onda de encendido y sensores"
        ]
      },
      {
        "category": "Pruebas mec�nicas",
        "items": [
          "Pruebas de compresi�n y p�rdida de compresi�n en cilindros",
          "Pruebas de presi�n del sistema de enfriamiento y detecci�n de gases de combusti�n",
          "Aislamiento de fugas al vac�o con m�quina de humo"
        ]
      },
      {
        "category": "Verificaci�n de manejabilidad",
        "items": [
          "Prueba de carretera controlada en rutas locales de Englewood",
          "Captura de ajuste de combustible a altitud y bajo carga",
          "Listo del monitor post-reparaci�n y borrado de c�digos"
        ]
      },
      {
        "category": "Lo que recibes",
        "items": [
          "Explicaci�n en lenguaje claro de los hallazgos",
          "Estimado por escrito antes de la autorizaci�n de reparaci�n",
          "Tarifa de diagn�stico acreditada hacia el trabajo aprobado"
        ]
      }
    ],
    "eyebrow": "Equipamiento y pruebas",
    "title": "Herramientas de diagn�stico que usamos a diario",
    "intro": "El diagn�stico profesional requiere m�s que un lector de c�digos. Nuestro taller en Englewood est� equipado para realizar trabajos de causa ra�z mec�nica y el�ctrica."
  },
  "labor": {
    "title": "Transparencia en la mano de obra para diagn�sticos",
    "description": "Los diagn�sticos de motor comienzan desde $99 y se aplican como cr�dito hacia reparaciones aprobadas. Las facturas de mano de obra se calculan a nuestra tarifa publicada de $120/hr con resultados de pruebas documentados � no adivinaciones por horas sin l�mite."
  },
  "faqSection": {
    "title": "Preguntas sobre diagn�stico del motor",
    "intro": "Respuestas sobre tarifas de diagn�stico, datos en vivo, pruebas de compresi�n y por qu� no solo borramos c�digos."
  },
  "areaLabel": "diagn�stico del motor",
  "finalCta": {
    "title": "�Necesitas diagn�sticos de motor hoy?",
    "description": "Agenda tu cita en 2120 W Evans Ave. Identificamos la causa ra�z � fallo de encendido, fuga de vac�o, falla de sensor o desgaste mec�nico � con pruebas que puedes entender antes de aprobar la reparaci�n.",
    "secondaryCta": "Solicitar cita"
  },
  "faqs": [
    {
      "question": "�Qu� incluye un diagn�stico de motor en RKC?",
      "answer": "Escaneamos OBD-II para c�digos almacenados, pendientes y permanentes; revisamos datos de cuadro de congelaci�n; analizamos los ajustes de combustible en vivo, la respuesta de los sensores y los contadores de fallas de encendido; y realizamos pruebas dirigidas: prueba de humo para fugas de vac�o, compresi�n o prueba de p�rdida de presi�n para fallas mec�nicas, y trazados de osciloscopio para patrones de encendido. Recibir�s un plan de reparaci�n por escrito con arreglos priorizados a $120/hr de mano de obra. La tarifa de diagn�stico se acredita hacia las reparaciones aprobadas."
    },
    {
      "question": "�Por qu� deber�a pagar por el diagn�stico cuando las tiendas de repuestos escanean gratis?",
      "answer": "Los escaneos gratuitos leen c�digos, pero no verifican la causa ra�z. Un c�digo P0171 de mezcla pobre puede deberse a una fuga de vac�o, una bomba de combustible d�bil, un sensor MAF sucio o una fuga de escape que introduce aire falso. Cambiar piezas bas�ndose solo en c�digos desperdicia dinero. Nuestro diagn�stico de pago utiliza equipo de prueba profesional y tiempo t�cnico para confirmar qu� fall� antes de que compre repuestos. La tarifa se acredita hacia la reparaci�n cuando aprueba el trabajo."
    },
    {
      "question": "�Cu�ndo se recomienda realizar una prueba de compresi�n o de p�rdida de estanqueidad?",
      "answer": "Cuando las fallas de encendido siguen un patr�n mec�nico � iguales al arranque en fr�o, consumo de aceite o p�rdida de refrigerante � o cuando las pruebas de combustible e ignici�n son correctas pero la potencia sigue siendo baja. La prueba de compresi�n identifica problemas de sellado de anillos o v�lvulas; la prueba de p�rdida de estanqueidad localiza exactamente qu� v�lvula o zona de anillo presenta fugas. Estas pruebas evitan aprobar costosas reparaciones de bobinas o inyectores en un motor con desgaste interno."
    },
    {
      "question": "�Pueden diagnosticar problemas de ralent� irregular y apagados del motor?",
      "answer": "S�. El ralent� irregular se origina por fugas de vac�o, acumulaci�n de carbono en las v�lvulas de inyecci�n directa, fallas en el control de aire en ralent� o fallos de encendido. Graficamos los ajustes de mezcla de combustible en ralent� y fuera de ralent�, realizamos pruebas de humo en el sistema de admisi�n y analizamos con osciloscopio el encendido en los cilindros que presentan conteos elevados de fallos de encendido. La altitud de Denver puede exponer sensores marginales que pasar�an las pruebas a nivel del mar; por ello, realizamos las pruebas bajo sus condiciones reales de conducci�n."
    },
    {
      "question": "�Diagnostican problemas de motores di�sel?",
      "answer": "Manejamos problemas comunes de operatividad del di�sel: fugas de presi�n de admisi�n, fallas en el sistema DEF/SCR, restricciones en los filtros de combustible y p�rdida de potencia relacionada con sensores en camionetas pesadas y veh�culos ligeros di�sel, seg�n lo permita el equipo. Las reparaciones complejas del sistema de post-tratamiento de emisiones se eval�an con honestidad, considerando la disponibilidad de repuestos y los tiempos de entrega antes de obtener su autorizaci�n."
    },
    {
      "question": "�Cu�nto tiempo toma el diagn�stico del motor?",
      "answer": "Las fallas simples con un solo c�digo pueden resolverse en una hora. La conductibilidad intermitente, m�ltiples c�digos o pruebas mec�nicas de seguimiento pueden tomar m�s tiempo. Comunicamos los hallazgos a medida que avanzamos y nunca ampliamos el alcance sin su aprobaci�n. El diagn�stico el mismo d�a es com�n cuando llama antes de la primera tarde."
    },
    {
      "question": "�Qu� PIDs de datos en vivo de OBD-II monitorea durante los diagn�sticos?",
      "answer": "Graficamos las correcciones de combustible a corto y largo plazo (STFT/LTFT), los gramos por segundo del sensor MAF frente a la carga calculada, el voltaje de conmutaci�n del sensor O2, los contadores de falla de encendido por cilindro, la correlaci�n MAP/MAF y los �ngulos de �rbol de levas comandados frente a los reales. Las capturas de marco congelado registran las RPM, la temperatura del refrigerante y el estado del combustible en el momento en que se activ� la falla, lo cual es cr�tico para los c�digos de mezcla pobre intermitentes en las ma�anas fr�as de Englewood."
    }
  ]
},
} as const;

export function engineDiagnosticsBody(lang: Lang) {
  return ENGINE_DIAGNOSTICS_BODY[lang] ?? ENGINE_DIAGNOSTICS_BODY.en;
}

/** Alias for LocalizedSharedServiceContent / registry naming. */
export const engineDiagnosticsBodyCopy = engineDiagnosticsBody;

