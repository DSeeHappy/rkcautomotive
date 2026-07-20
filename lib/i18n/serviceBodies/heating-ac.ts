import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost ds (vllm/smart / vllm/research). Normalized to SharedServiceBody. */
export const HEATING_AC_BODY = {
  en: {
  "breadcrumb": "Heating & AC",
  "hero": {
    "imageAlt": "Auto AC and heating repair at RKC Automotive Englewood CO",
    "eyebrow": "Climate control · Englewood, CO",
    "title": "Auto AC & Heating Repair in Englewood, CO",
    "description": "R134a and R1234yf AC repair, EPA Section 609–compliant refrigerant service, heater core and compressor diagnostics — for Denver south metro drivers who need cold vents in July and heat that works in January.",
    "primaryCta": "AC & Heating Service",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "A recharge without a leak search is a summer rental — not a repair.",
    "body": "R134a and R1234yf systems lose refrigerant only through leaks — o-rings at the compressor, porous condensers from road debris on C-470, or corroded evaporator cores. Englewood summer heat above 95°F exposes weak compressors that cooled adequately in spring. We vacuum-test, dye-trace, and repair the leak before charging to spec — so your vent temp stays in the 40s°F through Denver heat waves. Heat complaints share the same HVAC case: blend doors, blower motors, and clogged heater cores fail on the same vehicles we see for deferred coolant service, electrical system repair ; we read live data on the CAN bus before replacing a $600 compressor that was never getting a clutch signal."
  },
  "symptoms": {
    "eyebrow": "HVAC faults",
    "title": "Climate control symptoms we fix",
    "intro": "AC and heat complaints share blend doors, blower motors, and control modules — but each symptom has a distinct test path we document on your invoice.",
    "cards": [
      {
        "title": "Weak AC & warm vents",
        "body": "Center-vent temperature above 50°F at idle with the fan on high often means low refrigerant charge, weak compressor, or a stuck expansion valve. Dual-zone systems add blend-door actuators that default to heat on one side when a motor fails. We measure high- and low-side pressures against ambient temperature charts, check condenser fan operation at idle on a hot Englewood afternoon, and command actuators on scan tools before recommending compressor replacement."
      },
      {
        "title": "No heat & foggy windshield",
        "body": "Coolant full but lukewarm heat at idle points to a clogged heater core or stuck thermostat — common when deferred coolant service lets Dex-Cool gel form inside the core tubes. Sweet fog on the windshield means heater-core seep — stop driving and schedule service before coolant contaminates the carpet and electronics under the center stack.",
        "warning": "Sweet fog inside = possible heater core leak. Schedule service promptly."
      },
      {
        "title": "Compressor noise & clutch",
        "body": "Clicking every few seconds is normal clutch cycling on a properly charged system; grinding on engagement means bearing failure. Overcharged systems from DIY cans slug the compressor with liquid refrigerant and destroy it within days. We verify charge weight by scale, inspect clutch air gap, and listen for bearing roughness — compressor swaps are labor-heavy at $120/hr, so we prove failure before ordering reman units."
      }
    ]
  },
  "process": {
    "eyebrow": "HVAC workflow",
    "title": "Climate diagnosis and repair",
    "intro": "EPA-compliant service with leak detection — not vent-to-atmosphere shortcuts.",
    "bgImageAlt": "Heating & AC repair workflow at RKC Automotive Englewood CO",
    "steps": [
      {
        "title": "Performance baseline",
        "body": "Vent temp, fan speeds, and dual-zone behavior recorded. Ambient and humidity noted — pressure specs are temperature-dependent at Denver altitude."
      },
      {
        "title": "Refrigerant recovery & leak test",
        "body": "Recover existing charge into EPA-certified equipment, vacuum to 500 microns, and hold vacuum. UV dye and electronic sniffer trace condenser and fitting leaks."
      },
      {
        "title": "Component isolation",
        "body": "Compressor, condenser fan, expansion device, and blend doors tested independently. Heater-core flow checked when heat is the complaint."
      },
      {
        "title": "Repair & evacuate",
        "body": "O-rings, condensers, compressors, and actuators installed to spec. System evacuated and charged by weight — not guesswork cans."
      },
      {
        "title": "Verify temps",
        "body": "Center vent temp verified at idle and 1,500 RPM. Heat output confirmed on cold morning test when season demands."
      }
    ]
  },
  "checklist": {
    "eyebrow": "System coverage",
    "title": "Heating and AC services",
    "intro": "Summer AC and winter heat share plumbing — we service both sides of the firewall at our Englewood shop.",
    "groups": [
      {
        "category": "Air conditioning",
        "items": [
          "R134a and R1234yf leak repair and recharge",
          "Compressor, condenser, and evaporator replacement",
          "Expansion valve and orifice-tube service",
          "R-12 retrofit to R134a on classic vehicles"
        ]
      },
      {
        "category": "Heating",
        "items": [
          "Thermostat and water-pump-related heat issues",
          "Heater-core flush or replacement",
          "Blend-door and actuator calibration",
          "Blower-motor resistor and module replacement"
        ]
      },
      {
        "category": "Cabin comfort",
        "items": [
          "Blower-motor and resistor replacement",
          "Cabin air filter install",
          "Evaporator odor treatment when mold forms on core"
        ]
      },
      {
        "category": "Denver climate",
        "items": [
          "High-ambient AC performance tuning",
          "Winter defrost and heater-core flow checks",
          "Fleet van HVAC for commercial routes on I-25"
        ]
      }
    ]
  },
  "labor": {
    "title": "HVAC labor transparency",
    "description": "HVAC diagnosis and repair billed at our posted $120/hr rate with refrigerant type, leak findings, and parts itemized before charge or compressor work begins."
  },
  "faq": {
    "title": "heating-ac questions",
    "intro": "Answers on R134a vs R1234yf, weak AC at altitude, heater cores, and why topping off is not a repair."
  },
  "areaLabel": "heating and AC repair",
  "finalCta": {
    "title": "AC blowing warm?",
    "description": "Schedule HVAC service at RKC on Evans Ave. Leak found, leak fixed, charged to spec — written estimate at $120/hr labor before compressor swaps.",
    "secondaryCta": "Book service"
  },
  "relatedSlug": "heating-ac-englewood-co",
  "faqs": [
    {
      "question": "Why is my car AC blowing warm air in Denver summer heat?",
      "answer": "Common causes include low refrigerant from leaks, weak compressor, stuck blend doors, or condenser fan failure — especially noticeable above 95°F on I-25 stop-and-go traffic. We measure center-vent temperature and high/low-side pressures against ambient temperature charts, not just add refrigerant. Recharge without leak repair fails again within weeks in Colorado summer heat."
    },
    {
      "question": "How often does car AC need to be recharged?",
      "answer": "Never, if the system is sealed. Refrigerant loss always means a leak — o-rings at the compressor, condenser stone damage on C-470, or evaporator corrosion. We vacuum-test and dye-trace leaks, repair the source, then charge by weight to manufacturer spec. Annual top-offs from DIY cans mask problems until the compressor slugs with liquid refrigerant."
    },
    {
      "question": "What is the difference between R134a and R1234yf?",
      "answer": "R134a (HFC-134a) was the industry standard from roughly 1994 through the mid-2010s with a global-warming potential (GWP) of 1,430. R1234yf (HFO-1234yf) has a GWP near 4 and became mandatory on new U.S. light vehicles. R1234yf uses different service port fittings, requires EPA Section 609–certified recovery equipment rated for A2L refrigerants, and must never be mixed with R134a. Using the wrong refrigerant damages compressors, voids warranties, and violates federal law."
    },
    {
      "question": "How much more does R1234yf cost than R134a?",
      "answer": "R1234yf refrigerant typically costs three to five times more per pound than R134a because of patent licensing, specialized handling, and lower production volume. A full charge on a newer SUV can run $150–$300 in refrigerant alone before labor — which is why leak repair matters. We quote refrigerant by weight from your under-hood label so you know the cost before we open the system."
    },
    {
      "question": "Can I use a recharge can from AutoZone or O'Reilly?",
      "answer": "We do not recommend DIY recharge cans for several reasons. They rarely fix the underlying leak, overcharging slugging the compressor with liquid refrigerant is common, sealant additives gum up shop recovery machines, and using R134a on an R1234yf system causes serious damage. EPA regulations require recovered refrigerant to be handled by Section 609–certified technicians — venting to atmosphere is illegal regardless of can size."
    },
    {
      "question": "Why does my car AC smell musty or like dirty socks?",
      "answer": "Musty odor usually means mold and bacteria growing on the evaporator core — the cold, damp heat exchanger behind your dash. Colorado drivers who run AC all summer then switch to heat without drying the evaporator see this every fall. Cabin air filter replacement helps airflow, but evaporator treatment or core removal may be needed when biofilm is established. A sweet smell is different — that points to heater-core coolant leak, not mold."
    },
    {
      "question": "What are heater core leak symptoms?",
      "answer": "Heater core leaks show as sweet-smelling fog on the windshield, sticky film on interior glass, damp carpet on the passenger footwell, slow coolant loss with no external puddle, or greasy residue on the defroster vents. Coolant on the carpet can damage airbag modules and body control electronics under the center stack. If you smell ethylene glycol inside the cabin, schedule service promptly and avoid prolonged heat use."
    },
    {
      "question": "How much does AC compressor replacement cost at RKC?",
      "answer": "Compressor jobs are labor-intensive — often 3–5 hours at $120/hr plus reman or new compressor, receiver-drier or accumulator, o-rings, and refrigerant by weight. R1234yf systems add refrigerant cost. We confirm compressor failure with clutch air gap, bearing noise, and pressure differential tests before ordering parts. Leak repair, evacuation to 500 microns, and charge-by-weight are included in scope quotes."
    },
    {
      "question": "Can you fix heat that only works when driving?",
      "answer": "Heat at highway speed but cold at idle in Englewood traffic often points to low coolant, air in the cooling system, clogged heater core from neglected Dex-Cool service, or a thermostat stuck open. A weak water pump also reduces circulation at low RPM. We pressure-test the cooling system, measure heater-core inlet/outlet temperature delta, and verify water-pump flow before recommending core replacement — which is a dash-out job on many vehicles."
    },
    {
      "question": "Do you service R12 (Freon) systems on classic cars?",
      "answer": "Pre-1994 vehicles originally charged with R-12 (CFC-12) cannot legally receive new R-12 — production ended in 1995 and venting any refrigerant violates the Clean Air Act. We recover remaining charge, inspect for leaks, and retrofit to R134a with compatible POE or mineral oil, new service port adapters, and often a replacement compressor and seals. Retrofit performance varies by vehicle age; we document expected vent temps so classic car owners know what to expect in Denver heat."
    }
  ]
},
  es: {
  "breadcrumb": "Calefacción y aire acondicionado",
  "hero": {
    "imageAlt": "Reparación de aire acondicionado y calefacción para autos en RKC Automotive Englewood CO",
    "eyebrow": "Control de clima · Englewood, CO",
    "title": "Reparación de aire acondicionado y calefacción para autos en Englewood, CO",
    "description": "Reparación de aire acondicionado R134a y R1234yf, servicio de refrigerante conforme a la Sección 609 de la EPA, diagnóstico de núcleo del calefactor y compresor — para conductores del sur de Denver que necesitan aire frío en julio y calefacción funcional en enero.",
    "primaryCta": "Servicio de Aire Acondicionado y Calefacción",
    "callPrefix": "Llama"
  },
  "reality": {
    "quote": "Una recarga sin buscar fugas es un alquiler de verano, no una reparación.",
    "body": "Los sistemas R134a y R1234yf pierden refrigerante únicamente por fugas: juntas tóricas en el compresor, condensadores porosos por escombros de carretera en la C-470 o núcleos de evaporador corroídos. El calor del verano en Englewood, superior a 95°F, expone compresores débiles que se enfriaban adecuadamente en primavera. Realizamos pruebas de vacío, trazado con tinte y reparación de la fuga antes de cargar el sistema a las especificaciones, para que la temperatura de los conductos de aire se mantenga en el rango de 40°F durante las olas de calor en Denver. Las quejas por calor comparten el mismo caso de HVAC: las puertas de mezcla, los motores del ventilador y los núcleos del calentador obstruidos fallan en los mismos vehículos que atendemos para servicio de anticongelante diferido, reparación del sistema eléctrico ; leemos datos en vivo en el bus CAN antes de reemplazar un compresor de $600 que nunca recibía señal de embrague."
  },
  "symptoms": {
    "eyebrow": "fallas de HVAC",
    "title": "Síntomas de control climático que reparamos",
    "intro": "Las quejas de aire acondicionado y calefacción comparten puertas de mezcla, motores del ventilador y módulos de control, pero cada síntoma tiene una ruta de prueba distinta que documentamos en su factura.",
    "cards": [
      {
        "title": "Aire acondicionado débil y salidas de aire tibias",
        "body": "La temperatura del centro de ventilación superior a 50°F en ralentí con el ventilador a máxima velocidad suele indicar una carga baja de refrigerante, un compresor débil o una válvula de expansión atascada. Los sistemas de zona dual incluyen actuadores de la compuerta de mezcla que por defecto activan el calor en un lado cuando falla un motor. Medimos las presiones de alta y baja presión en comparación con las tablas de temperatura ambiente, verificamos el funcionamiento del ventilador del condensador en ralentí en una tarde calurosa en Englewood y comandamos los actuadores con herramientas de diagnóstico antes de recomendar el reemplazo del compresor."
      },
      {
        "title": "Sin calor y parabrisas empañado",
        "body": "El nivel de anticongelante está lleno pero el calor es tibio en ralentí, lo que indica un núcleo del calentador obstruido o un termostato atascado; esto es común cuando el mantenimiento del anticongelante se pospone y se forma gel Dex-Cool dentro de los tubos del núcleo. La niebla dulce en el parabrisas significa una filtración del núcleo del calentador; deje de conducir y programe una revisión antes de que el anticongelante contamine la alfombra y la electrónica debajo de la consola central.",
        "warning": "Niebla dulce dentro = posible fuga del núcleo del calentador. Programe una revisión de inmediato."
      },
      {
        "title": "Ruido del compresor y embrague",
        "body": "El clic cada pocos segundos es un ciclo normal del embrague en un sistema con la carga adecuada; el chirrido al acoplamiento indica falla del cojinete. Los sistemas sobrecargados con latas de bricolaje envían refrigerante líquido al compresor y lo destruyen en días. Verificamos el peso de la carga con báscula, inspeccionamos la holgura del embrague y escuchamos la rugosidad del cojinete: el reemplazo del compresor requiere mucha mano de obra a $120/hora, por lo que confirmamos la falla antes de pedir unidades reacondicionadas."
      }
    ]
  },
  "process": {
    "eyebrow": "Flujo de trabajo de HVAC",
    "title": "Diagnóstico y reparación del clima",
    "intro": "Servicio conforme a las normas de la EPA con detección de fugas, sin atajos de ventilación a la atmósfera.",
    "bgImageAlt": "Flujo de trabajo de reparación de calefacción y aire acondicionado en RKC Automotive Englewood CO",
    "steps": [
      {
        "title": "Línea base de rendimiento",
        "body": "Se registraron la temperatura del ventilador, las velocidades del ventilador y el comportamiento de las zonas duales. Se anotaron la temperatura ambiente y la humedad: las especificaciones de presión dependen de la temperatura a la altitud de Denver."
      },
      {
        "title": "Recuperación de refrigerante y prueba de fugas",
        "body": "Recuperar la carga existente en equipos certificados por la EPA, hacer vacío hasta 500 micrones y mantener el vacío. Tinte UV y detector electrónico para rastrear fugas en el condensador y en las conexiones."
      },
      {
        "title": "Aislamiento de componentes",
        "body": "Se probaron de forma independiente el compresor, el ventilador del condensador, el dispositivo de expansión y las puertas de mezcla. Se verificó el flujo del núcleo del calefactor cuando la queja es de calor."
      },
      {
        "title": "Reparación y evacuación",
        "body": "Juntas tóricas, condensadores, compresores y actuadores instalados según especificaciones. El sistema fue evacuado y cargado por peso, no con latas de relleno improvisadas."
      },
      {
        "title": "Verificar temperaturas",
        "body": "Se verificó la temperatura en la salida central del aire con el motor en ralentí y a 1,500 RPM. Se confirmó la salida de calor en la prueba matutina con frío, cuando las condiciones lo requieren."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Cobertura del sistema",
    "title": "Servicios de calefacción y aire acondicionado",
    "intro": "El aire acondicionado de verano y el calor de invierno comparten tuberías: atendemos ambos lados del tablero en nuestro taller de Englewood.",
    "groups": [
      {
        "category": "Aire acondicionado",
        "items": [
          "Reparación de fugas y recarga de R134a y R1234yf",
          "Reemplazo del compresor, condensador y evaporador",
          "Servicio de la válvula de expansión y tubo de orificio",
          "Conversión de R-12 a R134a en vehículos clásicos"
        ]
      },
      {
        "category": "Calefacción",
        "items": [
          "Problemas de calor relacionados con el termostato y la bomba de agua",
          "Lavado o reemplazo del núcleo del calefactor",
          "Calibración de la puerta de mezcla y el actuador",
          "Reemplazo del resistor y módulo del ventilador"
        ]
      },
      {
        "category": "Confort de la cabina",
        "items": [
          "Reemplazo del ventilador y del resistor",
          "Instalación del filtro de cabina",
          "Tratamiento de olores del evaporador cuando se forma moho en el núcleo"
        ]
      },
      {
        "category": "Clima de Denver",
        "items": [
          "Ajuste de rendimiento del aire acondicionado en altas temperaturas",
          "Verificaciones de descongelación invernal y flujo del núcleo del calentador",
          "Sistema HVAC para flotas de furgonetas en rutas comerciales por la I-25"
        ]
      }
    ]
  },
  "labor": {
    "title": "Transparencia en la mano de obra de HVAC",
    "description": "El diagnóstico y la reparación de HVAC se facturan a nuestra tarifa publicada de $120/hr, con el tipo de refrigerante, los hallazgos de fugas y las piezas detalladas antes de que se realice cualquier cargo o trabajo en el compresor."
  },
  "faq": {
    "title": "preguntas sobre calefacción y aire acondicionado",
    "intro": "Respuestas sobre R134a vs R1234yf, aire acondicionado débil a gran altitud, núcleos de calefacción y por qué el reabastecimiento no es una reparación."
  },
  "areaLabel": "reparación de calefacción y aire acondicionado",
  "finalCta": {
    "title": "¿El aire acondicionado sale caliente?",
    "description": "Agenda el servicio de climatización en RKC en la Av. Evans. Se encontró una fuga, se reparó, se cargó según especificaciones — estimación escrita de $120/hr de mano de obra antes del cambio del compresor.",
    "secondaryCta": "Reservar servicio"
  },
  "relatedSlug": "heating-ac-englewood-co",
  "faqs": [
    {
      "question": "¿Por qué el aire acondicionado de mi carro sale aire caliente durante el calor del verano en Denver?",
      "answer": "Las causas comunes incluyen refrigerante bajo por fugas, compresor débil, puertas de mezcla atascadas o falla del ventilador del condensador, especialmente notable cuando las temperaturas superan los 95°F en el tráfico de ida y vuelta por la I-25. Medimos la temperatura de la salida central y las presiones de los lados de alta y baja presión contra las tablas de temperatura ambiente, no solo agregamos refrigerante. Una recarga sin reparar la fuga fallará de nuevo en semanas durante el calor del verano en Colorado."
    },
    {
      "question": "¿Con qué frecuencia se debe recargar el aire acondicionado del carro?",
      "answer": "Nunca, si el sistema está sellado. La pérdida de refrigerante siempre indica una fuga: juntas tóricas en el compresor, daño en la piedra del condensador en C-470, o corrosión en el evaporador. Realizamos pruebas de vacío y trazado con tinte para localizar fugas, reparamos la fuente y luego cargamos por peso según las especificaciones del fabricante. Los rellenos anuales con latas de bricolaje enmascaran los problemas hasta que el compresor se daña por líquido refrigerante."
    },
    {
      "question": "¿Cuál es la diferencia entre R134a y R1234yf?",
      "answer": "El R134a (HFC-134a) fue el estándar de la industria desde aproximadamente 1994 hasta mediados de la década de 2010, con un potencial de calentamiento global (GWP) de 1,430. El R1234yf (HFO-1234yf) tiene un GWP cercano a 4 y se volvió obligatorio para los vehículos ligeros nuevos en EE. UU. El R1234yf utiliza diferentes acoplamientos de puerto de servicio, requiere equipos de recuperación certificados por la EPA bajo la Sección 609, clasificados para refrigerantes A2L, y nunca debe mezclarse con R134a. Usar el refrigerante incorrecto daña los compresores, anula las garantías y viola la ley federal."
    },
    {
      "question": "¿Cuánto más cuesta el R1234yf en comparación con el R134a?",
      "answer": "El refrigerante R1234yf suele costar entre tres y cinco veces más por libra que el R134a debido a las licencias de patente, el manejo especializado y el menor volumen de producción. Una carga completa en un SUV más nuevo puede costar entre $150 y $300 solo en refrigerante antes de la mano de obra, por lo que la reparación de fugas es importante. Cotizamos el refrigerante por peso según la etiqueta bajo el capó para que conozcas el costo antes de abrir el sistema."
    },
    {
      "question": "¿Puedo usar un bote de recarga de AutoZone o O'Reilly?",
      "answer": "No recomendamos los botes de recarga para bricolaje por varias razones. Rara vez reparan la fuga subyacente, es común que la sobrecarga sature el compresor con refrigerante líquido, los aditivos selladores obstruyan las máquinas de recuperación del taller y el uso de R134a en un sistema R1234yf cause daños graves. Las regulaciones de la EPA exigen que el refrigerante recuperado sea manipulado por técnicos certificados bajo la Sección 609; liberarlo a la atmósfera es ilegal independientemente del tamaño del bote."
    },
    {
      "question": "¿Por qué mi aire acondicionado del coche huele a moho o a calcetines sucios?",
      "answer": "El olor a humedad generalmente indica la presencia de moho y bacterias creciendo en el núcleo del evaporador, que es el intercambiador de calor frío y húmedo ubicado detrás del tablero. Los conductores de Colorado que usan el aire acondicionado todo el verano y luego cambian al calefactor sin secar el evaporador suelen notar esto cada otoño. El reemplazo del filtro de cabina ayuda al flujo de aire, pero puede ser necesario un tratamiento del evaporador o la extracción del núcleo cuando ya se ha establecido el biofilm. Un olor dulce es diferente: eso indica una fuga de anticongelante en el núcleo del calefactor, no moho."
    },
    {
      "question": "¿Cuáles son los síntomas de una fuga en el núcleo del calefactor?",
      "answer": "Las fugas del núcleo del calefactor se manifiestan como una niebla de olor dulce en el parabrisas, una película pegajosa en el vidrio interior, alfombras húmedas en el espacio para los pies del pasajero, pérdida lenta de anticongelante sin charcos externos o residuos grasosos en las rejillas del descongelador. El anticongelante en la alfombra puede dañar los módulos de los airbags y la electrónica de control de carrocería bajo la consola central. Si huele etilenglicol dentro de la cabina, programe una cita de servicio de inmediato y evite el uso prolongado del sistema de calefacción."
    },
    {
      "question": "¿Cuánto cuesta el reemplazo del compresor del aire acondicionado en RKC?",
      "answer": "Los trabajos de compresor son intensivos en mano de obra: generalmente de 3 a 5 horas a $120/hora, más el compresor remanufacturado o nuevo, el secador-receptor o acumulador, las juntas tóricas (o-rings) y el refrigerante por peso. Los sistemas R1234yf añaden el costo del refrigerante. Confirmamos la falla del compresor mediante pruebas de holgura de la embrague, ruido de los rodamientos y diferencia de presión antes de ordenar las piezas. La reparación de fugas, la evacuación a 500 micrones y la carga por peso están incluidas en las cotizaciones de alcance."
    },
    {
      "question": "¿Pueden arreglar el calor que solo funciona cuando se conduce?",
      "answer": "El calentamiento a velocidad de autopista pero el enfriamiento en ralentí en el tráfico de Englewood suele indicar nivel bajo de anticongelante, aire en el sistema de refrigeración, núcleo del calefactor obstruido por falta de mantenimiento con Dex-Cool, o un termostato pegado en posición abierta. Una bomba de agua debilitada también reduce la circulación a bajas revoluciones. Realizamos una prueba de presión del sistema de refrigeración, medimos la diferencia de temperatura entre la entrada y la salida del núcleo del calefactor, y verificamos el flujo de la bomba de agua antes de recomendar la sustitución del núcleo, lo cual en muchos vehículos requiere la extracción del tablero."
    },
    {
      "question": "¿Realizan servicio en sistemas R12 (Freón) para autos clásicos?",
      "answer": "Los vehículos anteriores a 1994 cargados originalmente con R-12 (CFC-12) no pueden recibir legalmente R-12 nuevo; la producción terminó en 1995 y la liberación de cualquier refrigerante viola la Ley de Aire Limpio. Recuperamos la carga restante, inspeccionamos en busca de fugas y realizamos la conversión a R134a con aceite POE o mineral compatible, adaptadores de puerto de servicio nuevos y, a menudo, un compresor y sellos de repuesto. El rendimiento de la conversión varía según la antigüedad del vehículo; documentamos las temperaturas de ventilación esperadas para que los propietarios de autos clásicos sepan qué esperar en el calor de Denver."
    }
  ]
},
} as const;

export function heatingAcBodyCopy(lang: Lang) {
  return HEATING_AC_BODY[lang] ?? HEATING_AC_BODY.en;
}
