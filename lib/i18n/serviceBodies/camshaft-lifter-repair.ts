import type { Lang } from '@/lib/language';

/** Service page body copy — ES via Bifrost Spark vllm/smart (smart-spark). */
export const CAMSHAFT_LIFTER_REPAIR_BODY = {
  en: {
  "breadcrumb": "Camshaft & Lifters",
  "hero": {
    "imageAlt": "Valvetrain and camshaft repair at RKC Automotive in Englewood, CO",
    "eyebrow": "Valvetrain · Englewood, CO",
    "title": "Camshaft Replacement & Hydraulic Lifter Repair in Englewood, CO",
    "description": "Eliminate engine ticking, localized misfires, and valvetrain metal wear before it destroys your block. Expert diagnostics and full cam-and-lifter restoration for HEMI, GM AFM/DFM, and high-mileage overhead-valve engines — with approval before we order parts.",
    "primaryCta": "Book Valvetrain Service",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "That tick isn't going away on its own",
    "body": "A rhythmic tick from the valve cover is one of the most searched engine noises in Colorado — and the most commonly misdiagnosed. Additives, thicker oil, and “just turn up the radio” do not restore cam lobe lift or replace collapsed lifters. Every mile with a persistent tick sends metal through oil galleries and into main bearings you cannot see without teardown. If the tick stays at operating temperature, accompanies a misfire, or worsens under load — schedule engine diagnostics in Englewood, engine rebuild ."
  },
  "symptoms": {
    "eyebrow": "Valve train",
    "title": "The infamous engine tick explained",
    "intro": "Hydraulic lifters rely on oil pressure to maintain zero lash. When they bleed down, seize, or collapse permanently, the cam lobe takes the punishment — and the failure mode depends on your engine family. We diagnose before quoting; these are the patterns we see daily in the Denver metro.",
    "cards": [
      {
        "title": "HEMI lifter tick",
        "body": "Chrysler 5.7/6.4 HEMI engines are infamous for MDS lifter collapse that hammers cam lobes. A cold-start tick that stays after warm-up is often valvetrain — not exhaust. We confirm with oil-pressure data, borescope, and filter media inspection before quoting a cam-and-lifter kit."
      },
      {
        "title": "GM AFM / DFM collapse",
        "body": "GM Active Fuel Management and Dynamic Fuel Management lifters stick or collapse, causing misfires and cam lobe damage on trucks and SUVs common in Colorado. Deletion kits are an option we discuss honestly after diagnosis — not before we know the failure mode.",
        "warning": "Driving on a collapsed AFM lifter can destroy the cam quickly."
      },
      {
        "title": "General hydraulic lifter bleed-down",
        "body": "Any OHV engine can tick from bled-down lifters after oil changes with the wrong viscosity, sludge, or long idle intervals. We separate sticky VVT solenoids and injector tick from true valvetrain wear before you approve teardown."
      }
    ]
  },
  "process": {
    "eyebrow": "Diagnostics first",
    "title": "The diagnostic strategy",
    "intro": "We do not swap a cam because the internet said so. Physical measurement, borescope inspection, and filter debris analysis build the evidence chain before you approve valvetrain work — saving Englewood and Denver metro drivers from paying for a top-end job when the real issue is a sticking VVT solenoid, collapsed AFM tower, or a single bad injector masquerading as valvetrain noise.",
    "bgImageAlt": "Technicians diagnosing valvetrain issues at RKC Automotive Englewood CO",
    "steps": [
      {
        "title": "Valvetrain clearance measurement",
        "body": "Where the engine design allows, we measure intake and exhaust side clearance against factory spec. Out-of-spec readings on one cylinder point to collapsed lifters or worn lobes before we pull the intake or valve covers for visual confirmation. Clearance data also rules out misdiagnosed exhaust leaks and injector tick that sound similar from the driver seat."
      },
      {
        "title": "Borescope lobe inspection",
        "body": "A borescope through the spark-plug hole — or oil-cap opening on overhead-cam layouts — lets us inspect lobe shape and follower wear without committing to full teardown first. Flat spots, blue discoloration from hammering, and chipped lobes show up on camera before you approve cam replacement. We save images when findings support the repair recommendation."
      },
      {
        "title": "Oil filter debris analysis",
        "body": "Metallic glitter or bronze-colored material in the filter media means the valvetrain is already shedding material downstream. We correlate filter findings with compression tests, leak-down results, and scan-tool misfire counts. That combination tells us whether top-end work is sufficient or if wear has migrated to bearings that require short-block inspection."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Full restoration",
    "title": "Complete valvetrain component restoration",
    "intro": "When the cam is worn, partial repair is false economy. We replace the full cam assembly with a quality unit matched to your VIN, install a matched lifter set, inspect every supporting component, and flush oil galleries before buttoning up — so the tick does not come back in six months with metal in the filter.",
    "groups": [
      {
        "category": "Cam & lifters",
        "items": [
          "Complete cam assembly matched to VIN and engine family",
          "Full lifter set — never reuse collapsed units",
          "Lifter bores cleaned and inspected for scoring"
        ]
      },
      {
        "category": "Supporting hardware",
        "items": [
          "Pushrods inspected for straightness and end-cup wear",
          "Valve springs checked for tension, height, and coil bind",
          "Rocker arms and trunnion bearings where applicable"
        ]
      },
      {
        "category": "Sealing & cleanup",
        "items": [
          "Valve stem seals replaced while heads are accessible",
          "Timing cover and front crank seal as needed",
          "Oil gallery flush to remove debris from the failure"
        ]
      },
      {
        "category": "Verification",
        "items": [
          "Compression and leak-down after assembly",
          "Oil pressure check at hot idle before return",
          "Road test and misfire count verification on scan tool"
        ]
      }
    ]
  },
  "labor": {
    "title": "Written approval before cam & lifter work",
    "description": "Valvetrain repair labor is billed at our posted $120/hr using published book times for cam-in-block and overhead-cam layouts. You receive a written estimate with parts and labor separated — and we do not order cam kits or open the engine until you approve scope. Whether you drive a ticking 5.7 HEMI or a Silverado with AFM misfires, diagnosis and repair happen under one roof on Evans Ave."
  },
  "faq": {
    "title": "camshaft-lifter-repair questions",
    "intro": "Answers on HEMI tick, AFM lifter failure, cam replacement scope, and when a noise means stop driving."
  },
  "areaLabel": "camshaft and lifter repair",
  "finalCta": {
    "title": "Schedule valvetrain diagnostics today",
    "description": "Schedule camshaft and lifter diagnosis at 2120 W Evans Ave. We confirm the tick, scope the valvetrain, and quote a written repair plan at $120/hr before teardown.",
    "secondaryCta": "Book service"
  },
  "relatedSlug": "camshaft-lifter-repair-englewood-co",
  "faqs": [
    {
      "question": "Is the HEMI lifter tick always a cam and lifter problem?",
      "answer": "Not always — exhaust manifold leaks, VVT actuator rattle, and fuel injector tick can sound similar. That is why we measure valvetrain clearance where possible, borescope cam lobes, and correlate misfire data before quoting cam replacement. When roller lifters have collapsed and lobes show flat spots, partial repair is false economy: the tick returns and metal circulates through the oil galleries. Confirmed lobe damage means full cam assembly and matched lifter set."
    },
    {
      "question": "What is AFM/DFM and why does it cause lifter failures on GM trucks?",
      "answer": "Active Fuel Management (AFM) and Dynamic Fuel Management (DFM) disable cylinders under light load by collapsing lifters via oil-pressure solenoids. Over time, stuck solenoids, deferred oil changes, and low-tension valve springs accelerate lifter collapse and cam lobe wear on cylinders 1, 4, 6, or 7 depending on engine family. Silverado, Sierra, Tahoe, and Yukon owners across the Denver metro often see misfire codes before the tick becomes constant. We diagnose AFM-related failures before recommending repair scope."
    },
    {
      "question": "Should I delete AFM when replacing the cam and lifters?",
      "answer": "AFM delete kits disable the cylinder-deactivation hardware and use non-AFM lifters and a non-AFM cam profile. Some owners choose delete after repeated AFM failures; others prefer a stock replacement cam and lifters to maintain factory fuel-economy behavior. We explain both paths — parts cost, labor difference, and emissions implications — without pushing either option. The right choice depends on how you use the truck and whether you want to eliminate the failure mode entirely."
    },
    {
      "question": "Can I drive with an engine tick until my appointment?",
      "answer": "A faint cold-start tick that fades as oil pressure builds may be tolerable for a short window if you have an appointment scheduled. A tick that persists at operating temperature, accompanies a misfire, or worsens under load means the valvetrain is actively damaging itself — continued driving sends metal through bearings you cannot inspect without teardown. If oil pressure drops or the engine runs rough, stop driving and arrange a tow. We would rather diagnose a still-salvageable top end than quote a full short-block because metal migrated downstream."
    },
    {
      "question": "Do you replace pushrods, springs, and stem seals during cam work?",
      "answer": "When the heads are accessible, we inspect pushrods for straightness and end-cup wear, check valve spring height and tension, and replace stem seals while the valvetrain is apart. Reusing collapsed lifters or fatigued springs guarantees comebacks. Our valvetrain restoration checklist covers cam assembly, full lifter set, pushrods, springs, seals, and an oil gallery flush to remove debris from the failure — all scoped in a written estimate at $120/hr labor before parts are ordered."
    },
    {
      "question": "How much does cam and lifter replacement cost compared to a full rebuild?",
      "answer": "Cam-in-block overhead-valve jobs and overhead-cam layouts differ widely in labor hours and parts cost. A confirmed valvetrain repair on a pushrod V8 is typically a fraction of a full short-block rebuild — but only when the block, crank, and bearings are still healthy. Oil filter debris analysis and compression testing tell us whether top-end work is sufficient or if wear has already reached the bottom end. We never recommend a rebuild when a cam job solves the problem, and we never patch one lifter when the cam is scored."
    }
  ],
  "symptomsHead": {
    "eyebrow": "Valvetrain noise",
    "title": "When a tick means camshaft or lifter damage",
    "intro": "Not every engine noise is a lifter. These patterns point to valvetrain wear that needs diagnosis before a full engine rebuild."
  },
  "symptomsCards": []
},
  es: {
  "breadcrumb": "Árbol de levas y taqués",
  "hero": {
    "imageAlt": "Reparación del tren de válvulas y árbol de levas en RKC Automotive en Englewood, CO",
    "eyebrow": "Tren de válvulas · Englewood, CO",
    "title": "Reemplazo de árbol de levas y reparación de taqués hidráulicos en Englewood, CO",
    "description": "Elimina el tic-tac del motor, las fallas localizadas y el desgaste metálico del tren de válvulas antes de que dañen el bloque. Diagnóstico experto y restauración completa del árbol de levas y taqués para motores HEMI, GM AFM/DFM y de válvulas en cabeza con alto kilometraje — con tu aprobación antes de ordenar las piezas.",
    "primaryCta": "Reservar servicio de tren de válvulas",
    "callPrefix": "Llamar"
  },
  "reality": {
    "quote": "Esa falla no se va a resolver por sí sola",
    "body": "Un tic rítmico proveniente de la tapa de válvulas es uno de los ruidos de motor más buscados en Colorado, y también el más comúnmente mal diagnosticado. Los aditivos, el aceite más viscoso y el consejo de 'simplemente sube el volumen de la radio' no restauran el levantamiento del árbol de levas ni reemplazan los taqués colapsados. Cada kilómetro con un tic persistente envía partículas metálicas a través de los conductos de aceite y hacia los cojinetes principales, que no puedes inspeccionar sin desmontar el motor. Si el tic persiste a temperatura de operación, acompaña un fallo de encendido o empeora bajo carga, agenda diagnóstico de motor en Englewood, reconstrucción de motor ."
  },
  "symptoms": {
    "eyebrow": "Tren de válvulas",
    "title": "La infame tic del motor explicada",
    "intro": "Los taqués hidráulicos dependen de la presión del aceite para mantener un juego cero. Cuando se despresurizan, se atascan o colapsan permanentemente, el lóbulo del árbol de levas absorbe el impacto, y el modo de falla depende de la familia de tu motor. Diagnosticamos antes de cotizar; estos son los patrones que vemos a diario en el área metropolitana de Denver.",
    "cards": [
      {
        "title": "Zumbido del taquillón HEMI",
        "body": "Los motores Chrysler 5.7/6.4 HEMI son notorios por el colapso de los taqués del MDS, lo que daña los levas de la leva. Un tic en frío que persiste después del calentamiento suele ser del tren de válvulas, no del escape. Confirmamos con datos de presión de aceite, endoscopio e inspección del medio del filtro antes de cotizar un kit de leva y taqués."
      },
      {
        "title": "Colapso del sistema AFM/DFM de GM",
        "body": "Los lifters del sistema GM Active Fuel Management y Dynamic Fuel Management se atascan o colapsan, lo que provoca fallas de encendido y daños en los levas de las válvulas en camiones y SUVs comunes en Colorado. Los kits de eliminación son una opción que discutimos de manera honesta después del diagnóstico, no antes de conocer el modo de falla.",
        "warning": "Conducir con un balancín AFM colapsado puede dañar rápidamente el árbol de levas."
      },
      {
        "title": "Purga general de los elevadores hidráulicos",
        "body": "Cualquier motor OHV puede hacer ruido de taqués después de los cambios de aceite con la viscosidad incorrecta, lodo o intervalos de inactividad prolongados. Separamos los solenoides VVT pegajosos y el ruido de los inyectores del desgaste real del tren de válvulas antes de que apruebe el desmontaje."
      }
    ]
  },
  "process": {
    "eyebrow": "Diagnósticos primero",
    "title": "La estrategia de diagnóstico",
    "intro": "No cambiamos un árbol de levas solo porque lo dijo internet. La medición física, la inspección con borescope y el análisis de residuos del filtro construyen la cadena de evidencia antes de que apruebes el trabajo en el tren de válvulas, ahorrando a los conductores de Englewood y el área metropolitana de Denver pagar por un trabajo en la parte superior cuando el problema real es un solenoide VVT atascado, una torre AFM colapsada o un inyector defectuoso que se disfraza de ruido del tren de válvulas.",
    "bgImageAlt": "Técnicos diagnosticando problemas en el tren de válvulas en RKC Automotive Englewood CO",
    "steps": [
      {
        "title": "Medición de holgura del tren de válvulas",
        "body": "Cuando el diseño del motor lo permite, medimos la holgura en los lados de admisión y escape en comparación con las especificaciones de fábrica. Las lecturas fuera de especificación en un cilindro apuntan a taqués colapsados o levas desgastadas antes de desmontar las tapas de admisión o de válvulas para confirmación visual. Los datos de holgura también descartan diagnósticos erróneos de fugas de escape y el tic de los inyectores, que suenan similar desde el asiento del conductor."
      },
      {
        "title": "Inspección de lóbulos con boroscopio",
        "body": "Un boroscopio a través del orificio de la bujía o la abertura de la tapa de aceite en diseños de árbol de levas a la cabeza nos permite inspeccionar la forma del lóbulo y el desgaste del seguidor sin comprometerse a un desmontaje completo de antemano. Los puntos planos, la decoloración azulada por martillazos y los lóbulos astillados aparecen en la cámara antes de que usted apruebe el reemplazo del árbol de levas. Guardamos imágenes cuando los hallazgos respaldan la recomendación de reparación."
      },
      {
        "title": "Análisis de residuos del filtro de aceite",
        "body": "La presencia de brillo metálico o material de color bronce en el medio filtrante indica que el tren de válvulas ya está desprendiendo material hacia el sistema de escape. Correlacionamos los hallazgos del filtro con las pruebas de compresión, los resultados de las pruebas de pérdida de estanqueidad y los conteos de fallos de encendido registrados por la herramienta de diagnóstico. Esta combinación nos indica si el trabajo en la parte superior del motor es suficiente o si el desgaste se ha extendido a los cojinetes, lo que requiere una inspección del bloque motor."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Restauración completa",
    "title": "Restauración completa de componentes del tren de válvulas",
    "intro": "Cuando el árbol de levas está desgastado, una reparación parcial es una falsa economía. Reemplazamos el conjunto completo del árbol de levas con una unidad de calidad, ajustada a tu número de VIN, instalamos un juego de taqués coincidentes, inspeccionamos cada componente de soporte y lavamos los conductos de aceite antes de cerrar el conjunto, para que el tic-tac no regrese en seis meses con partículas metálicas en el filtro.",
    "groups": [
      {
        "category": "Árbol de levas y taquillas",
        "items": [
          "Montaje completo del árbol de levas, ajustado al VIN y familia de motor",
          "Juego completo de taquillas — nunca reutilice unidades colapsadas",
          "Agujeros de taquillas limpios e inspeccionados por rayas"
        ]
      },
      {
        "category": "Hardware de soporte",
        "items": [
          "Varillas de empuje inspeccionadas por rectitud y desgaste de la copa extrema",
          "Resortes de válvula verificados por tensión, altura y atasco de bobina",
          "Brazos oscilantes y cojinetes de trunnion donde sea aplicable"
        ]
      },
      {
        "category": "Sellado y limpieza",
        "items": [
          "Juntas de vástago de válvula reemplazadas mientras las culatas están accesibles",
          "Cubierta de distribución y sello delantero del cigüeñal según sea necesario",
          "Lavado de los conductos de aceite para eliminar escombros de la falla"
        ]
      },
      {
        "category": "Verificación",
        "items": [
          "Compresión y prueba de fugas después del ensamblaje",
          "Verificación de presión de aceite en ralentí en caliente antes del retorno",
          "Prueba en carretera y verificación de cuenta de fallos de encendido en la herramienta de diagnóstico"
        ]
      }
    ]
  },
  "labor": {
    "title": "Aprobación por escrito antes del trabajo de leva y taqués",
    "description": "La mano de obra para la reparación del tren de válvulas se factura a nuestra tarifa publicada de $120/hr, utilizando los tiempos estándar de la industria para configuraciones de árbol de levas en bloque y árbol de levas en la culata. Recibirá una estimación por escrito con las piezas y la mano de obra separadas, y no pedimos kits de árbol de levas ni abrimos el motor hasta que usted apruebe el alcance del trabajo. Ya sea que conduzca un HEMI 5.7 con golpeteo o un Silverado con fallos por desactivación de cilindros (AFM), el diagnóstico y la reparación se realizan bajo un mismo techo en Evans Ave."
  },
  "faq": {
    "title": "preguntas sobre reparación de taqués de árbol de levas",
    "intro": "Respuestas sobre el taquete de HEMI, falla del taquete AFM, alcance de la reparación del árbol de levas y cuándo detener la conducción por ruido."
  },
  "areaLabel": "reparación de árbol de levas y taqués",
  "finalCta": {
    "title": "Programa el diagnóstico del tren de válvulas hoy",
    "description": "Agenda el diagnóstico de árbol de levas y taqués en 2120 W Evans Ave. Confirmamos el tic, escaneamos el tren de válvulas y cotizamos un plan de reparación por escrito a $120/hr antes del desmontaje.",
    "secondaryCta": "Reservar servicio"
  },
  "relatedSlug": "camshaft-lifter-repair-englewood-co",
  "faqs": [
    {
      "question": "¿El tic del taqué HEMI siempre es un problema del árbol de levas y los taqués?",
      "answer": "No siempre: las fugas en el múltiple de escape, el chirrido del actuador VVT y el tic de los inyectores de combustible pueden sonar similares. Por eso medimos la holgura del tren de válvulas cuando es posible, inspeccionamos los levas con un endoscopio y correlacionamos los datos de fallo de encendido antes de cotizar el reemplazo del árbol de levas. Cuando los taqués rodantes se colapsan y las levas muestran zonas planas, la reparación parcial es una falsa economía: el tic regresa y el metal circula por los conductos de aceite. El daño confirmado en las levas implica el reemplazo completo del conjunto del árbol de levas y el juego de taqués correspondiente."
    },
    {
      "question": "¿Qué son AFM/DFM y por qué causan fallos en los balancines de los camiones GM?",
      "answer": "El Sistema de Gestión Activa de Combustible (AFM) y la Gestión Dinámica de Combustible (DFM) desactivan cilindros bajo carga ligera colapsando los taqués mediante solenoides de presión de aceite. Con el tiempo, los solenoides atascados, los cambios de aceite pospuestos y los resortes de válvulas de baja tensión aceleran el colapso de los taqués y el desgaste de los levas de los cilindros 1, 4, 6 u 7, dependiendo de la familia del motor. Los propietarios de Silverado, Sierra, Tahoe y Yukon en el área metropolitana de Denver a menudo presentan códigos de fallo de encendido antes de que el golpeteo se vuelva constante. Diagnosticamos las fallas relacionadas con AFM antes de recomendar el alcance de la reparación."
    },
    {
      "question": "¿Debo desactivar el AFM al reemplazar el árbol de levas y los taqués?",
      "answer": "Los kits de eliminación de AFM desactivan el hardware de desactivación de cilindros y utilizan taquillas y un perfil de árbol de levas sin AFM. Algunos propietarios optan por la eliminación tras fallos repetidos de AFM; otros prefieren un árbol de levas y taquillas de reposición para mantener el comportamiento de ahorro de combustible de fábrica. Explicamos ambas opciones: costo de las piezas, diferencia en la mano de obra e implicaciones en emisiones, sin favorecer ninguna. La elección correcta depende del uso que le des a la camioneta y si deseas eliminar el modo de fallo por completo."
    },
    {
      "question": "¿Puedo conducir con un tic del motor hasta mi cita?",
      "answer": "Un leve tic al arrancar en frío que se desvanece a medida que la presión del aceite aumenta puede ser tolerable por un breve periodo si tienes una cita programada. Un tic que persiste a temperatura de funcionamiento, acompaña un fallo de encendido o empeora bajo carga indica que el tren de válvulas se está dañando activamente; continuar conduciendo envía fragmentos de metal a través de cojinetes que no puedes inspeccionar sin desmontar el motor. Si la presión del aceite cae o el motor funciona de manera irregular, deja de conducir y solicita un remolque. Preferimos diagnosticar una culata aún recuperable a cotizar un bloque motor completo, ya que el metal se ha desplazado hacia abajo."
    },
    {
      "question": "¿Reemplazan las varillas de empuje, los resortes y las sellos de vástago durante el trabajo del árbol de levas?",
      "answer": "Cuando los cabezales son accesibles, inspeccionamos las varillas de empuje para verificar su alineación y el desgaste de las copas extremas, revisamos la altura y la tensión de los muelles de válvula, y reemplazamos los sellos de vástago mientras el tren de válvulas está desmontado. Reutilizar taquillas colapsadas o muelles fatigados garantiza devoluciones. Nuestra lista de verificación de restauración del tren de válvulas cubre el conjunto del árbol de levas, juego completo de taquillas, varillas de empuje, muelles, sellos y un enjuague de los conductos de aceite para eliminar residuos de la falla, todo incluido en una estimación por escrito a $120/hr de mano de obra antes de ordenar las piezas."
    },
    {
      "question": "¿Cuánto cuesta el reemplazo de levas y taqués en comparación con una reconstrucción completa?",
      "answer": "Los trabajos de válvulas en cabeza con árbol de levas en bloque y las configuraciones de árbol de levas en cabeza difieren ampliamente en horas de mano de obra y costo de repuestos. Una reparación confirmada del tren de válvulas en un V8 con varillas de empuje suele ser una fracción del costo de una reconstrucción completa del bloque corto, pero solo cuando el bloque, el cigüeñal y los cojinetes aún están en buen estado. El análisis de residuos del filtro de aceite y las pruebas de compresión nos indican si el trabajo en la parte superior es suficiente o si el desgaste ya ha llegado a la parte inferior. Nunca recomendamos una reconstrucción cuando una reparación del árbol de levas resuelve el problema, y nunca reparamos solo una biela cuando el árbol de levas está rayado."
    }
  ],
  "symptomsHead": {
    "eyebrow": "Ruido Valvetrain",
    "title": "Cuando un tic significa daño en el camshaft o en el lifter",
    "intro": "No todo ruido de motor es un levantador. Estos patrones indican desgaste del valvetrain que necesita diagnóstico antes de una reconstrucción completa del motor."
  },
  "symptomsCards": []
},
} as const;

export function camshaftLifterRepairBodyCopy(lang: Lang) {
  return CAMSHAFT_LIFTER_REPAIR_BODY[lang] ?? CAMSHAFT_LIFTER_REPAIR_BODY.en;
}
