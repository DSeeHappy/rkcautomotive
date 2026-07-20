import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost Nemotron (vllm/smart/smart-spark). */
export const CHECK_ENGINE_LIGHT_BODY = {
  en: {
  "breadcrumb": "Check Engine Light",
  "hero": {
    "imageAlt": "Check Engine Light at RKC Automotive Englewood CO",
    "eyebrow": "CEL diagnosis · Englewood, CO",
    "title": "Check Engine Light Diagnosis in Englewood, CO",
    "description": "Steady or flashing MIL? We decode P0xxx powertrain and emissions codes, separate critical faults from monitor-not-ready, and verify the root cause before recommending repairs — diagnostic fee applied toward approved work.",
    "primaryCta": "Diagnose My CEL",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "Clearing the light is not fixing the problem.",
    "body": "A erased code without repair means monitors reset and your next emissions test may fail — or the flashing light returns under load with catalyst-damaging misfires. Englewood drivers sometimes drive for weeks with a steady CEL until fuel economy tanks or Colorado emissions flags the vehicle. We diagnose first, explain severity, and only clear codes after the fault is verified repaired."
  },
  "symptoms": {
    "eyebrow": "CEL behavior",
    "title": "What your check engine light is telling you",
    "intro": "Not every illuminated MIL is equal. How it behaves — steady, flashing, or intermittent — changes how urgently you need service.",
    "cards": [
      {
        "title": "Flashing check engine light",
        "body": "A flashing MIL under load means catalyst-damaging misfire — unburned fuel is entering the exhaust and overheating the catalytic converter. Do not drive except to a safe stop and tow if necessary. Common causes include failed coil-on-plug, collapsed lifter, or injector short. We prioritize these appointments because every mile can add hundreds in catalyst replacement cost.",
        "warning": "Flashing CEL = stop driving. Misfire can destroy your catalytic converter."
      },
      {
        "title": "Steady light & emissions codes",
        "body": "P0420/P0430 catalyst efficiency codes, EVAP small-leak P0442, and O2 heater circuit faults often present as a steady light with no drivability complaint. Colorado emissions testing reads readiness monitors — a quick clear without repair fails inspection two weeks later. We test catalyst upstream/downstream switching, smoke-test EVAP hoses, and verify heater current before quoting converters or gas caps."
      },
      {
        "title": "Intermittent & pending codes",
        "body": "Pending codes set before the MIL illuminates — valuable early warnings on cold-start misfires or marginal sensor performance. Intermittent faults need freeze-frame capture and road-test replication. A P0171 lean code that only appears on uphill merges toward the foothills is different from one at idle. We log data during test drives on local routes, not just in the bay."
      }
    ]
  },
  "technical": {
    "eyebrow": "CEL decoded",
    "title": "Flashing vs solid, emissions vs misfire, readiness monitors",
    "intro": "Not every check engine light means the same urgency. How it behaves — steady, flashing, or intermittent — and which code family triggered determines whether you can commute tomorrow or need a tow today.",
    "cards": [
      {
        "title": "Flashing MIL = catalyst-damaging misfire",
        "body": "A flashing check engine light under load means unburned fuel is entering the exhaust and overheating the catalytic converter. Stop driving except to reach safety. Steady MIL with P030x codes still needs prompt service — but flashing is emergency priority at RKC because every mile adds catalyst cost."
      },
      {
        "title": "Emissions vs misfire code families",
        "body": "P0420/P0430 efficiency codes, EVAP P044x leaks, and O2 heater circuits often present as steady MIL with no drivability complaint. P030x misfires affect power and catalyst health. Each family has a distinct test path — we classify codes before recommending converters, coils, or gas caps."
      },
      {
        "title": "Pending vs stored vs permanent codes",
        "body": "Pending codes mean the PCM saw one failure cycle — early warning. Stored codes confirmed the fault and lit the MIL. Permanent codes on some platforms cannot clear until repaired and monitors complete. Clearing without repair fails Colorado emissions when monitors reset to not-ready."
      },
      {
        "title": "Readiness monitors for Colorado emissions",
        "body": "Monitors prove the PCM tested catalyst, O2, EVAP, EGR, and other systems since the last code clear. A quick erase at the parts store resets monitors — your Englewood emissions test fails even if the light is off. We run drive cycles after repair and coach your commute pattern so monitors set before inspection."
      }
    ],
    "tableTitle": "CEL severity & code family guide",
    "table": {
      "caption": "Check engine light severity by code type",
      "columns": [
        "Behavior / code",
        "Severity",
        "Action"
      ],
      "rows": [
        {
          "label": "Flashing MIL + P030x",
          "values": [
            "Critical",
            "Stop driving — tow if needed"
          ],
          "highlight": 1
        },
        {
          "label": "Steady MIL + P0420/P0430",
          "values": [
            "Moderate",
            "Schedule diagnosis — cat at risk if misfire present"
          ]
        },
        {
          "label": "Steady MIL + P044x EVAP",
          "values": [
            "Low–moderate",
            "Smoke test — often cap or hose"
          ]
        },
        {
          "label": "Pending only (no MIL)",
          "values": [
            "Monitor",
            "Early warning — diagnose before MIL sets"
          ]
        },
        {
          "label": "MIL off, monitors N/R",
          "values": [
            "Emissions fail",
            "Drive cycle or complete repair first"
          ],
          "highlight": 1
        }
      ]
    }
  },
  "process": {
    "eyebrow": "CEL workflow",
    "title": "From code scan to confirmed repair",
    "intro": "We treat the check engine light as a starting point — not the diagnosis itself.",
    "bgImageAlt": "Check Engine Light at RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Code classification",
        "body": "Powertrain P0xxx, chassis C-codes, and body B-codes are separated. We note pending vs. stored and whether monitors are incomplete from a recent battery disconnect."
      },
      {
        "step": "02",
        "title": "Severity assessment",
        "body": "Flashing misfire, fuel trim limits, and over-temp flags get immediate triage. Steady emissions codes are scheduled with test-plan priority based on your inspection deadline."
      },
      {
        "step": "03",
        "title": "Component verification",
        "body": "Sensor voltage, switch response, and wiring continuity confirm failed parts. We do not replace an O2 sensor because the code says O2 — we verify slow response or heater draw first."
      },
      {
        "step": "04",
        "title": "Monitor drive cycle",
        "body": "After repair, we run drive cycles or advise your commute pattern so monitors set before emissions or before you assume the fix failed."
      },
      {
        "step": "05",
        "title": "Documented close-out",
        "body": "You receive code history, test results, and invoice credit for diagnostic time when you approve the repair — transparent paperwork for warranty or emissions retest."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Code families",
    "title": "Common CEL categories we diagnose",
    "intro": "Englewood vehicles span decades of OBD-II strategy. These are the fault families we see most — each with distinct test paths.",
    "groups": [
      {
        "category": "Emissions & EVAP",
        "items": [
          "Catalyst efficiency P0420/P0430 with live O2 comparison",
          "EVAP leak detection — smoke test and purge valve command",
          "Secondary air and EGR function on applicable platforms"
        ]
      },
      {
        "category": "Fuel & air metering",
        "items": [
          "Lean/rich codes P0171/P0174 with smoke and fuel trim analysis",
          "MAF/MAP correlation and vacuum-leak isolation",
          "Injector balance and fuel pressure specification checks"
        ]
      },
      {
        "category": "Ignition & misfire",
        "items": [
          "Coil-on-plug scope patterns and swap verification",
          "Compression test when misfire follows mechanical pattern",
          "AFM/DFM and valvetrain-related misfire isolation"
        ]
      },
      {
        "category": "Colorado specifics",
        "items": [
          "Emissions-test readiness monitor guidance",
          "Altitude-related boost and fuel trim evaluation",
          "Diesel DEF/SCR and particulate-filter codes on HD pickups"
        ]
      }
    ]
  },
  "labor": {
    "title": "CEL diagnostic pricing",
    "description": "Check-engine diagnostics from $99 — credited toward approved repairs at our posted $120/hr labor rate. You pay for verification, not a parts cannon."
  },
  "faq": {
    "title": "Check engine light questions",
    "intro": "When you can drive, when you cannot, and what Colorado emissions needs after the light comes on."
  },
  "areaLabel": "check engine light diagnosis",
  "finalCta": {
    "title": "Check engine light on?",
    "description": "Call or schedule at RKC Automotive on Evans Ave. We decode the code, test the system, and quote the real fix before clearing your MIL.",
    "secondaryCta": "Book diagnosis"
  },
  "relatedSlug": "check-engine-light-englewood-co",
  "faqs": [
    {
      "question": "Can I drive with the check engine light on?",
      "answer": "A steady check engine light usually means you can drive short distances and schedule service soon — but fuel economy, emissions readiness, and catalyst health may be affected. A flashing check engine light indicates catalyst-damaging misfire; stop driving except to reach a safe location and arrange tow if needed. We triage flashing codes as priority appointments."
    },
    {
      "question": "What does a P0420 catalytic converter code mean?",
      "answer": "P0420 means the downstream oxygen sensor sees reduced catalyst efficiency. The converter may be worn, but exhaust leaks, upstream misfires, or lazy O2 sensors can set the same code. We compare upstream and downstream O2 activity and inspect for leaks before quoting converter replacement — a four-figure part that should not be guessed."
    },
    {
      "question": "Will you clear my check engine light without fixing the problem?",
      "answer": "We clear codes only after verifying the fault is repaired and monitors are ready where emissions apply. Clearing without repair fails Colorado emissions inspections and returns the light when the fault reoccurs — often within one drive cycle. Our goal is a light that stays off because the system is healthy."
    },
    {
      "question": "How much does check engine light diagnosis cost?",
      "answer": "Diagnosis starts from $99 and credits toward approved repairs at our posted $120/hr labor rate. Complex multi-code or intermittent faults may require additional test time — we call before exceeding the initial scope. You receive code definitions, test results, and a written repair estimate before authorization."
    },
    {
      "question": "What is the difference between pending and stored codes?",
      "answer": "Pending codes mean the PCM detected a fault once but has not confirmed it on a second drive cycle — early warning for developing problems. Stored codes confirmed the fault and illuminated the MIL. Permanent codes on some vehicles cannot clear until the underlying issue is repaired and monitors complete. We explain which type you have and what it implies for emissions testing."
    },
    {
      "question": "Can a loose gas cap cause a check engine light?",
      "answer": "Yes — EVAP small-leak codes like P0442 often trace to loose, missing, or cracked gas caps and vent hoses. We smoke-test the EVAP system to confirm cap vs. hose vs. purge-valve faults. It is a inexpensive fix when the cap seals poorly, but we verify rather than assume so you are not back in a week with the same code."
    },
    {
      "question": "What is the difference between a flashing and steady check engine light?",
      "answer": "A steady MIL means a confirmed fault that should be diagnosed soon — emissions, sensor, or efficiency codes are common. A flashing MIL under load indicates catalyst-damaging misfire; continued driving can overheat and destroy the catalytic converter. Flashing codes get priority scheduling at RKC — we triage before parts-store code clears."
    },
    {
      "question": "What are OBD-II readiness monitors and why do they matter in Colorado?",
      "answer": "Readiness monitors prove the PCM has tested emissions systems since the last code clear — catalyst, O2 sensors, EVAP, EGR, and others. Clearing codes without repair resets monitors to \"not ready\" and fails Colorado emissions even if the MIL is off. We explain which monitors are incomplete, run drive cycles after repair, and coach your commute pattern so monitors set before your inspection appointment."
    },
    {
      "question": "How do misfire codes differ from emissions efficiency codes?",
      "answer": "P030x misfire codes affect drivability, fuel economy, and catalyst health — often coils, injectors, or mechanical compression loss. P0420/P0430 efficiency codes mean downstream O2 activity is low — worn catalyst, exhaust leak, or upstream misfire. EVAP P044x codes are leak detection, not misfire. Each family has a distinct test path — we classify codes before recommending parts."
    }
  ]
},
  es: {
  "breadcrumb": "Luz de advertencia del motor",
  "hero": {
    "imageAlt": "Luz de advertencia del motor en RKC Automotive Englewood CO",
    "eyebrow": "Diagnóstico de CEL · Englewood, CO",
    "title": "Diagnóstico de luz de advertencia del motor en Englewood, CO",
    "description": "¿El MIL está fijo o parpadeando? Decodificamos códigos de tren motriz y emisiones P0xxx, separamos fallas críticas de las que indican que el monitor no está listo, y verificamos la causa raíz antes de recomendar reparaciones: la tarifa de diagnóstico se aplica al trabajo aprobado.",
    "primaryCta": "Diagnosticar mi luz de falla",
    "callPrefix": "Llamar"
  },
  "reality": {
    "quote": "Borrar la luz no soluciona el problema.",
    "body": "Borrar un código sin realizar la reparación significa que los monitores se reinician y tu próxima prueba de emisiones podría fallar, o la luz intermitente podría regresar bajo carga con fallas de encendido que dañan el catalizador. Algunos conductores de Englewood conducen durante semanas con la luz de verificación del motor encendida hasta que el consumo de combustible se deteriora o las autoridades de Colorado señalan el vehículo. Nosotros diagnosticamos primero, explicamos la gravedad y solo borramos los códigos después de verificar que la falla ha sido reparada."
  },
  "symptoms": {
    "eyebrow": "Comportamiento del CEL",
    "title": "Lo que te está diciendo la luz de check engine",
    "intro": "No todas las luces MIL encendidas son iguales. La forma en que se comporta — constante, intermitente o parpadeante — determina la urgencia con la que necesitas servicio.",
    "cards": [
      {
        "title": "Luz de check engine parpadeante",
        "body": "Una luz MIL intermitente bajo carga indica un fallo de encendido que daña el catalizador: el combustible no quemado está entrando en el escape y sobrecalentando el convertidor catalítico. No conduzca excepto para detenerse de forma segura y remolque el vehículo si es necesario. Las causas comunes incluyen una bobina de encendido fallida, un taquillo colapsado o un cortocircuito en el inyector. Priorizamos estas citas porque cada kilómetro puede añadir cientos de dólares al costo de reemplazo del catalizador.",
        "warning": "La luz del CEL parpadea: detén la conducción. Un fallo de encendido puede destruir tu convertidor catalítico."
      },
      {
        "title": "Luz fija y códigos de emisiones",
        "body": "Los códigos de eficiencia del catalizador P0420/P0430, la fuga pequeña del sistema EVAP P0442 y las fallas en el circuito del calentador de O2 suelen presentarse como una luz fija sin quejas de manejabilidad. Las pruebas de emisiones en Colorado leen los monitores de preparación; una limpieza rápida sin reparación falla la inspección dos semanas después. Realizamos pruebas de conmutación del catalizador (entrada/salida), realizamos pruebas de humo en las mangueras del EVAP y verificamos la corriente del calentador antes de cotizar convertidores o tapas de combustible."
      },
      {
        "title": "Códigos intermitentes y pendientes",
        "body": "Códigos pendientes establecidos antes de que se encienda la luz MIL: advertencias tempranas valiosas sobre fallos de encendido en frío o rendimiento marginal de los sensores. Las fallas intermitentes requieren captura de datos de congelación y replicación en pruebas de carretera. Un código de mezcla pobre P0171 que solo aparece al subir pendientes hacia las estribaciones es diferente al que aparece en ralentí. Registramos datos durante las pruebas de conducción en rutas locales, no solo en el taller."
      }
    ]
  },
  "technical": {
    "eyebrow": "CEL descodificado",
    "title": "Parpadeo vs. luz fija, emisiones vs. fallo de encendido, monitores de preparación",
    "intro": "No todas las luces del motor encendidas implican la misma urgencia. El comportamiento de la luz — fija, parpadeante o intermitente — y la familia de códigos que se activaron determinan si puedes ir al trabajo mañana o necesitas un remolque hoy.",
    "cards": [
      {
        "title": "MIL parpadeante = fallo de encendido que daña el catalizador",
        "body": "Una luz de check engine intermitente bajo carga significa que combustible sin quemar está entrando al escape y sobrecalentando el convertidor catalítico. Detenga la conducción excepto para llegar a un lugar seguro. La MIL fija con códigos P030x aún requiere servicio urgente, pero la intermitencia es prioridad de emergencia en RKC porque cada milla aumenta el costo del catalizador."
      },
      {
        "title": "Emisiones vs familias de códigos de fallo por fallo de encendido",
        "body": "Los códigos de eficiencia P0420/P0430, las fugas EVAP P044x y los circuitos de calentador de O2 suelen presentarse como una MIL constante sin quejas de conducibilidad. Las fallas de encendido P030x afectan la potencia y la salud del catalizador. Cada familia tiene una ruta de prueba distinta; clasificamos los códigos antes de recomendar convertidores, bobinas o tapas de combustible."
      },
      {
        "title": "Códigos pendientes vs almacenados vs permanentes",
        "body": "Los códigos pendientes indican que la PCM detectó un ciclo de falla: es una advertencia temprana. Los códigos almacenados confirman la falla y encienden la luz de control de averías (MIL). En algunas plataformas, los códigos permanentes no se borran hasta que se repare la falla y los monitores completen su ciclo. Borrarlos sin realizar la reparación provoca que el vehículo no apruebe la prueba de emisiones en Colorado, ya que los monitores se reinician en estado \"no listo\"."
      },
      {
        "title": "Monitores de preparación para las emisiones del Colorado",
        "body": "Los monitores confirman que la PCM probó el catalizador, los sensores O2, el sistema EVAP, el EGR y otros sistemas desde la última vez que se borró el código. Una limpieza rápida en la tienda de repuestos restablece los monitores, lo que hace que falle su prueba de emisiones en Englewood incluso si la luz está apagada. Realizamos ciclos de conducción después de la reparación y le asesoramos sobre su patrón de desplazamiento para que los monitores se activen antes de la inspección."
      }
    ],
    "tableTitle": "Guía de gravedad y familia de códigos de la luz de falla del motor",
    "table": {
      "caption": "Gravedad de la luz de falla del motor según el tipo de código",
      "columns": [
        "Comportamiento / código",
        "Gravedad",
        "Acción"
      ],
      "rows": [
        {
          "label": "MIL intermitente + P030x",
          "values": [
            "Crítico",
            "Deje de conducir — remolque si es necesario"
          ]
        },
        {
          "label": "MIL constante + P0420/P0430",
          "values": [
            "Moderado",
            "Agendar diagnóstico — el catalizador está en riesgo si hay falla de encendido"
          ]
        },
        {
          "label": "MIL constante + P044x EVAP",
          "values": [
            "Bajo-moderado",
            "Prueba de humo — a menudo tapa o manguera"
          ]
        },
        {
          "label": "Pendiente únicamente (sin MIL)",
          "values": [
            "Monitor",
            "Advertencia temprana: diagnostica antes de que se encienda la luz MIL"
          ]
        },
        {
          "label": "MIL apagada, monitores N/R",
          "values": [
            "Fallo en emisiones",
            "Primero realiza el ciclo de conducción o completa la reparación"
          ]
        }
      ]
    }
  },
  "process": {
    "eyebrow": "Flujo de trabajo CEL",
    "title": "Desde la lectura del código hasta la reparación confirmada",
    "intro": "Tratamos la luz de advertencia del motor como un punto de partida, no como el diagnóstico en sí.",
    "bgImageAlt": "Luz de advertencia del motor en RKC Automotive Englewood CO",
    "steps": [
      {
        "step": "01",
        "title": "Clasificación de códigos",
        "body": "Los códigos de tren motriz P0xxx, los códigos de chasis C-codes y los códigos de carrocería B-codes están separados. Se indica si están pendientes o almacenados, y si los monitores están incompletos debido a una desconexión reciente de la batería."
      },
      {
        "step": "02",
        "title": "Evaluación de gravedad",
        "body": "Los fallos de encendido intermitentes, los límites de ajuste de combustible y las señales de sobrecalentamiento reciben triaje inmediato. Los códigos de emisiones constantes se programan con prioridad según el plan de pruebas, en función de su fecha límite de inspección."
      },
      {
        "step": "03",
        "title": "Verificación del componente",
        "body": "El voltaje del sensor, la respuesta del interruptor y la continuidad del cableado confirman piezas defectuosas. No reemplazamos un sensor O2 solo porque el código indique O2; verificamos primero una respuesta lenta o el consumo del calentador."
      },
      {
        "step": "04",
        "title": "Ciclo de conducción de monitoreo",
        "body": "Después de la reparación, realizamos ciclos de conducción o asesoramos sobre tu patrón de desplazamiento para que los monitores se establezcan antes de las emisiones o antes de que asumas que la reparación falló."
      },
      {
        "step": "05",
        "title": "Cierre documentado",
        "body": "Recibe el historial de códigos, los resultados de las pruebas y un crédito en la factura por el tiempo de diagnóstico cuando apruebas la reparación: documentación transparente para la garantía o la prueba de emisiones."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Familias de códigos",
    "title": "Categorías comunes de CEL que diagnosticamos",
    "intro": "Los vehículos de Englewood abarcan décadas de estrategia OBD-II. Estas son las familias de fallas que vemos con más frecuencia, cada una con rutas de prueba distintas.",
    "groups": [
      {
        "category": "Emisiones y EVAP",
        "items": [
          "Eficiencia del catalizador P0420/P0430 con comparación en vivo de O2",
          "Detección de fugas en el sistema EVAP: prueba de humo y comando de la válvula de purga",
          "Función de aire secundario y recirculación de gases de escape (EGR) en plataformas aplicables"
        ]
      },
      {
        "category": "Medición de combustible y aire",
        "items": [
          "Códigos P0171/P0174 de mezcla pobre/rica con análisis de humo y ajuste de trims de combustible",
          "Correlación MAF/MAP y aislamiento de fugas de vacío",
          "Verificación de balance de inyectores y especificaciones de presión de combustible"
        ]
      },
      {
        "category": "Encendido y fallos de encendido",
        "items": [
          "Patrones de osciloscopio de bobina sobre bujía y verificación por intercambio",
          "Prueba de compresión cuando el fallo de encendido sigue un patrón mecánico",
          "Aislamiento de fallos de encendido relacionados con AFM/DFM y el tren de válvulas"
        ]
      },
      {
        "category": "Especificidades del Colorado",
        "items": [
          "Guía para el monitor de preparación de pruebas de emisiones",
          "Evaluación de boost y ajuste de combustible relacionado con la altitud",
          "Códigos de DEF/SCR y filtro de partículas en pickups pesados"
        ]
      }
    ]
  },
  "labor": {
    "title": "Precio de diagnóstico de luz de motor (CEL)",
    "description": "Diagnóstico de luz de motor desde $99 — se acredita hacia reparaciones aprobadas a nuestra tarifa de mano de obra publicada de $120/hr. Usted paga por la verificación, no por una lluvia de piezas."
  },
  "faq": {
    "title": "Preguntas sobre la luz de advertencia del motor",
    "intro": "Cuándo puedes conducir, cuándo no, y qué requisitos de emisiones de Colorado se aplican después de que se encienda la luz."
  },
  "areaLabel": "diagnóstico de la luz de verificación del motor",
  "finalCta": {
    "title": "¿Luz de advertencia del motor encendida?",
    "description": "Llama o agenda una cita en RKC Automotive en Evans Ave. Descodificamos el código, probamos el sistema y cotizamos la reparación real antes de borrar tu luz MIL.",
    "secondaryCta": "Reservar diagnóstico"
  },
  "relatedSlug": "check-engine-light-englewood-co",
  "faqs": [
    {
      "question": "¿Puedo conducir con la luz del motor encendida?",
      "answer": "Una luz de motor encendida de forma constante generalmente indica que puedes conducir distancias cortas y programar un servicio pronto, pero el rendimiento de combustible, la preparación de emisiones y la salud del catalizador pueden verse afectados. Una luz de motor intermitente indica un fallo de encendido que daña el catalizador; deja de conducir excepto para llegar a un lugar seguro y organiza un remolque si es necesario. Priorizamos las citas para códigos de luz intermitente."
    },
    {
      "question": "¿Qué significa el código P0420 del convertidor catalítico?",
      "answer": "P0420 indica que el sensor de oxígeno posterior detecta una eficiencia reducida del catalizador. El convertidor puede estar desgastado, pero fugas en el sistema de escape, fallos de encendido anteriores o sensores O2 lentos pueden generar el mismo código. Comparamos la actividad de los sensores O2 anteriores y posteriores, e inspeccionamos en busca de fugas antes de cotizar la sustitución del convertidor, una pieza de cuatro cifras que no debe estimarse."
    },
    {
      "question": "¿Podrán apagar la luz de la luz de motor sin arreglar el problema?",
      "answer": "Solo borramos los códigos después de verificar que la falla está reparada y que los monitores están listos, cuando aplica para emisiones. Borrar sin reparar hace que no apruebes la inspección de emisiones de Colorado y la luz de falla regresa cuando la falla se repite, a menudo dentro de un ciclo de conducción. Nuestro objetivo es que la luz de falla se mantenga apagada porque el sistema está saludable."
    },
    {
      "question": "¿Cuánto cuesta el diagnóstico de la luz de advertencia del motor?",
      "answer": "El diagnóstico comienza desde $99 y se aplica como crédito hacia reparaciones aprobadas a nuestra tarifa de mano de obra publicada de $120/hr. Las fallas complejas con múltiples códigos o intermitentes pueden requerir tiempo adicional de prueba; nos comunicamos antes de exceder el alcance inicial. Recibirás las definiciones de códigos, los resultados de las pruebas y una estimación escrita de la reparación antes de la autorización."
    },
    {
      "question": "¿Cuál es la diferencia entre los códigos pendientes y los códigos almacenados?",
      "answer": "Los códigos pendientes indican que la PCM detectó una falla una vez, pero no la ha confirmado en un segundo ciclo de conducción, lo que sirve como una advertencia temprana de problemas en desarrollo. Los códigos almacenados confirman la falla e iluminan la MIL. En algunos vehículos, los códigos permanentes no se pueden borrar hasta que se repare el problema subyacente y los monitores se completen. Explicamos qué tipo de código tiene y qué implica para las pruebas de emisiones."
    },
    {
      "question": "¿Una tapa de combustible floja puede encender la luz del motor?",
      "answer": "Sí — Los códigos de pequeña fuga del sistema EVAP, como P0442, suelen deberse a tapas de combustible flojas, faltantes o agrietadas, así como a mangueras de ventilación dañadas. Realizamos una prueba de humo en el sistema EVAP para confirmar si la falla está en la tapa, la manguera o la válvula de purga. Es una reparación económica cuando la tapa sella mal, pero verificamos en lugar de asumir, para que no vuelvas en una semana con el mismo código."
    },
    {
      "question": "¿Cuál es la diferencia entre una luz de check engine intermitente y una constante?",
      "answer": "Un MIL constante indica un fallo confirmado que debe diagnosticarse pronto: los códigos de emisiones, sensores o eficiencia son comunes. Un MIL parpadeante bajo carga indica un fallo de encendido que daña el catalizador; continuar conduciendo puede sobrecalentar y destruir el convertidor catalítico. Los códigos parpadeantes tienen prioridad de programación en RKC: hacemos triaje antes de que se borre el código en la tienda de autopartes."
    },
    {
      "question": "¿Qué son los monitores de preparación OBD-II y por qué son importantes en Colorado?",
      "answer": "Los monitores de preparación demuestran que la PCM ha probado los sistemas de emisiones desde la última eliminación de códigos — catalizador, sensores de O2, EVAP, EGR y otros. Borrar códigos sin reparación restablece los monitores a \"no listos\" y hace fallar la inspección de emisiones en Colorado incluso si la luz MIL está apagada. Explicamos qué monitores están incompletos, ejecutamos ciclos de conducción después de la reparación y orientamos tu patrón de desplazamiento para que los monitores se establezcan antes de tu cita de inspección."
    },
    {
      "question": "¿En qué se diferencian los códigos de fallo de encendido de los códigos de eficiencia de emisiones?",
      "answer": "Los códigos de fallo de encendido P030x afectan la conducibilidad, la economía de combustible y la salud del catalizador: a menudo se deben a bobinas, inyectores o pérdida de compresión mecánica. Los códigos de eficiencia P0420/P0430 indican que la actividad del sensor de oxígeno aguas abajo es baja: catalizador desgastado, fuga en el escape o fallo de encendido aguas arriba. Los códigos EVAP P044x corresponden a detección de fugas, no a fallos de encendido. Cada familia tiene una ruta de prueba distinta: clasificamos los códigos antes de recomendar piezas."
    }
  ]
},
} as const;

export function checkEngineLightBodyCopy(lang: Lang) {
  return CHECK_ENGINE_LIGHT_BODY[lang] ?? CHECK_ENGINE_LIGHT_BODY.en;
}
