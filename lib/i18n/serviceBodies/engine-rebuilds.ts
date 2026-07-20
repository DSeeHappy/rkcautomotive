import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost ds (vllm/smart / vllm/research). Normalized to SharedServiceBody. */
export const ENGINE_REBUILDS_BODY = {
  en: {
  "breadcrumb": "Engine Rebuilds",
  "hero": {
    "imageAlt": "ASE-certified technicians rebuilding an engine at RKC Automotive in Englewood, CO",
    "eyebrow": "Machine shop · Englewood, CO",
    "title": "Precision Engine Rebuilding & Remanufacturing in Englewood, CO",
    "description": "Rod knock, low oil pressure, or blow-by past the rings? We pull, strip, machine, blueprint, and rebuild domestic and import engines down to the bare block — with a written estimate and your approval before the first bolt comes off our Evans Ave bay.",
    "primaryCta": "Request Rebuild Estimate",
    "callPrefix": "Call"
  },
  "reality": {
    "quote": "A tired block doesn't get better with another bottle of additive.",
    "body": "High-mileage commuters, skipped oil changes, and overheating events open bearing clearances and destroy ring seal. Colorado towing on I-25 and mountain grades accelerates wear on domestic V8s and turbo imports alike. When compression is uneven and oil consumption climbs, the block needs to come apart — measured, machined, and rebuilt to spec. Not every tick or misfire needs a full rebuild — start with engine diagnostics in Englewood, camshaft and lifter repair, extended warranty claims for powertrain work are handled in-house at our posted $120/hr rate. RKC has rebuilt engines for Englewood, Denver, Littleton, and south-metro drivers who needed the job done once, not twice."
  },
  "symptoms": {
    "eyebrow": "Warning signs",
    "title": "Symptoms of a tired block",
    "intro": "An engine past its useful life rarely fails all at once. Warning signs accumulate quietly — until a drive home from the mountains turns into an expensive tow. These three failure modes mean internal wear, not a quick external fix.",
    "cards": [
      {
        "title": "Blow-by past the rings",
        "body": "Compression gases slip past worn piston rings and pressurize the crankcase. You notice oil weeping from seals, a oily residue around the PCV breather, and blue-gray smoke under load — especially climbing I-70 toward the Eisenhower Tunnel with a loaded trailer. Blow-by is not a seal problem; it is ring-to-wall clearance that has opened beyond spec. Additives cannot restore the bore finish or ring tension your block needs."
      },
      {
        "title": "Low oil pressure at hot idle",
        "body": "A healthy engine holds oil pressure once warm — typically 20 psi or more at hot idle depending on the spec sheet. When main and rod bearing clearances wear past tolerance, oil escapes faster than the pump can maintain volume. The gauge drops when you stop at a light in Englewood summer traffic, then recovers slightly off idle. That pattern traces to bearing wear inside the block, not a faulty sender. Thicker oil masks the symptom briefly; it does not fix the clearance."
      },
      {
        "title": "Rod knock — spun bearings",
        "body": "Rod knock is the unmistakable hammering from the oil pan — a rhythmic metallic beat that rises with RPM. It means a rod bearing has spun, wiped, or begun transferring material to the crank journal. This is not a lifter tick and not a exhaust leak. Every mile driven after rod knock starts risks trashing the crank, block bore, and rod itself. Tow the vehicle. Do not limp home hoping the noise fades.",
        "warning": "Stop driving immediately — rod knock destroys cranks fast."
      }
    ]
  },
  "process": {
    "eyebrow": "Machine shop",
    "title": "Blueprinting from bare casting to balanced assembly",
    "intro": "A proper rebuild is not bolt-on parts — it is a documented machine-shop workflow. Every step below gets measured, photographed when findings change scope, and signed off before reassembly begins.",
    "bgImageAlt": "Engine bay service and machine shop work at RKC Automotive Englewood CO",
    "steps": [
      {
        "title": "Strip to bare casting",
        "body": "The engine comes off the vehicle and onto a stand. Every fastener, plug, and accessory is cataloged. We separate the short block from heads, oil pan, and front cover so each component can be measured independently. Colorado winters and deferred coolant service often leave scale in water jackets — stripping clean is the only way to inspect what the block actually looks like inside."
      },
      {
        "title": "Hot tank & degrease",
        "body": "Castings go through hot tank cleaning to remove sludge, carbon, and rust scale from oil galleries and coolant passages. Sludge alone does not cause failure, but it hides cracks and prevents accurate magnaflux results. Clean metal reveals the casting's true condition before we commit to bore and hone work — and before you approve machine-shop charges on a block that might not be salvageable."
      },
      {
        "title": "Magnaflux crack inspection",
        "body": "Magnaflux applies magnetic particle inspection to ferrous castings, revealing hairline cracks around cylinder bores, main webbing, and bellhousing bolt bosses. A crack that looks like a stain on a dirty block becomes obvious under UV light after magnaflux. Finding a crack here saves you from assembling a fresh rotating kit into a block that will fail again — we document findings with photos before scope changes."
      },
      {
        "title": "Bore & hone with torque plates",
        "body": "Cylinders are bored to oversize only when wear or scoring demands it, then honed to the final finish with torque plates installed. Torque plates simulate head-bolt clamping load so the bore roundness you measure on the hone matches what the engine sees at running temperature. Skipping torque plates is how shops end up with oval bores and broken ring seal after a few thousand miles."
      },
      {
        "title": "Deck surface resurfacing",
        "body": "The block deck and cylinder head mating surfaces are measured for flatness and resurfaced when out of spec. MLS head gaskets — common on modern domestic and import engines — tolerate almost zero imperfection. A warped deck from overheating or head-bolt stretch causes combustion seal failure and coolant intrusion. We surface to the minimum spec, not the maximum cut, to preserve compression height."
      },
      {
        "title": "Dynamic balance assembly",
        "body": "Crankshafts are mic'd, polished, or ground to undersize as needed. Rod and piston assemblies are weighed and matched; the rotating assembly is dynamically balanced so vibration does not hammer bearings at highway speed. Balance work is what separates a rebuilt engine that feels new from one that buzzes through the steering wheel on C-470. Every measurement goes on the build sheet you receive at pickup."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Parts & assembly",
    "title": "The component checklist",
    "intro": "Not every failure requires the same depth of work. We quote both paths when inspection supports it — so\r\n              you choose based on head condition, budget, and how long you plan to keep the vehicle.",
    "groups": [
      {
        "category": "Pistons & rings",
        "items": [
          "Hypereutectic or forged pistons sized to final bore measurement",
          "File-fit moly or ductile iron rings per bore with end gap checked",
          "Pin bore and ring land inspection before assembly"
        ]
      },
      {
        "category": "Bearings & rotating assembly",
        "items": [
          "Clevite or King rod and main bearings sized to measured clearances",
          "Crank journal polish or grind to next undersize when scored",
          "Rod reconditioning or replacement when big-end ovality is out of spec"
        ]
      },
      {
        "category": "Lubrication & timing",
        "items": [
          "High-volume or OEM-spec oil pump matched to engine family",
          "Timing chain or belt kit with guides and tensioners",
          "Cam bearings, freeze plugs, and galley plug replacement"
        ]
      },
      {
        "category": "Sealing & hardware",
        "items": [
          "Full gasket set — MLS head gaskets when spec requires",
          "Rear main seal, front cover seal, and valve cover gaskets",
          "ARP or OEM-critical fasteners torqued to sequence spec"
        ]
      }
    ]
  },
  "labor": {
    "title": "Labor transparency on every rebuild",
    "description": "Major engine work is a significant investment. We bill at our posted $120/hr rate using AllData and Mitchell book times as a baseline — but every rebuild starts with a written estimate before teardown. If magnaflux reveals a crack, journals are scored beyond grind limits, or head damage changes scope, we call with photos. Nothing moves forward without your approval."
  },
  "faq": {
    "title": "engine-rebuilds questions",
    "intro": "Straight answers on short-block vs. long-block scope, timelines, turbo rebuilds, and why machine-shop blueprinting beats a junkyard swap."
  },
  "areaLabel": "engine rebuilds",
  "finalCta": {
    "title": "Ready for a rebuild estimate?",
    "description": "Book a consultation at 2120 W Evans Ave. We review symptoms, discuss short-block vs. long-block options, and provide a written estimate at $120/hr labor plus parts — before teardown begins.",
    "secondaryCta": "Request estimate"
  },
  "relatedSlug": "engine-rebuilds-englewood-co",
  "faqs": [
    {
      "question": "How do I know if I need a full engine rebuild vs. a top-end repair?",
      "answer": "Bottom-end symptoms — rod knock, low oil pressure at hot idle, metallic debris in the oil filter, or blow-by pressurizing the crankcase — point to bearing and ring wear that requires pulling the short block. Top-end-only issues like a single-cylinder misfire or valvetrain tick may need cam and head work without a full rebuild. We run compression, leak-down, and oil-pressure tests before recommending teardown scope so you are not paying for a long-block when a short-block or valvetrain job solves the problem."
    },
    {
      "question": "What is the difference between a short-block and a long-block rebuild?",
      "answer": "A short-block includes the block, crankshaft, connecting rods, pistons, rings, bearings, oil pump, and timing components — everything below the cylinder heads. A long-block adds fully reconditioned cylinder heads, valvetrain hardware, and often the intake manifold. Short-blocks make sense when heads are reusable; long-blocks are the turnkey choice when heads are cracked, warped, or have valve-seat damage. We quote both options when applicable so you can choose based on inspection findings and budget."
    },
    {
      "question": "How long does an engine rebuild take at RKC Automotive?",
      "answer": "Timeline depends on machine-shop queue, parts availability, and whether we find hidden damage after teardown. A straightforward domestic V8 short-block rebuild typically runs several weeks from approval to installation — machine work, parts ordering, and assembly each take real time. We provide a realistic window at estimate time and call with photos if magnaflux, bore measurements, or crank journal condition changes the schedule."
    },
    {
      "question": "Can you rebuild turbocharged or high-performance engines?",
      "answer": "Yes. Turbo and forced-induction engines demand tighter clearances, forged or hypereutectic piston selection matched to boost levels, and careful deck and head-surface preparation. We blueprint rotating assemblies for balance and document every machine-shop measurement. Whether you daily-drive a EcoBoost F-150 or tow with a Cummins, the same written-estimate and approval-before-teardown process applies at our posted $120/hr labor rate."
    },
    {
      "question": "Do you offer a warranty on rebuilt engines?",
      "answer": "We stand behind our machine work and assembly with a written warranty on labor and installed parts — terms depend on scope and components used. Rebuilt engines also benefit from proper break-in procedures: specific oil change intervals, avoiding sustained high load for the first miles, and verifying oil pressure before you leave the lot. We walk you through break-in requirements at pickup so the investment lasts."
    },
    {
      "question": "Why rebuild instead of installing a crate engine or used junkyard motor?",
      "answer": "Crate engines are convenient but expensive and may not match your VIN-specific accessories, sensors, or emissions hardware. Junkyard swaps are a gamble — unknown maintenance history, hidden overheating damage, and no machine-shop verification. A rebuild uses your block when it passes magnaflux and bore inspection, restores known clearances, and lets you upgrade pistons, rings, and bearings to address the failure mode that caused the original problem. For many Englewood and Denver metro drivers, that is the best balance of cost and long-term reliability."
    }
  ]
},
  es: {
  "breadcrumb": "Reconstrucción de Motores",
  "hero": {
    "imageAlt": "Técnicos certificados por ASE reconstruyendo un motor en RKC Automotive en Englewood, CO",
    "eyebrow": "Taller de mecanizado · Englewood, CO",
    "title": "Reconstrucción y remanufactura de motores de precisión en Englewood, CO",
    "description": "¿Golpes de biela, baja presión de aceite o gases que se filtran por los anillos? Desarmamos, desmontamos, mecanizamos, verificamos y reconstruimos motores nacionales y de importación hasta el bloque desnudo, con una estimación por escrito y tu aprobación antes de que se retire el primer tornillo de nuestro taller en la calle Evans Ave.",
    "primaryCta": "Solicitar estimación de reconstrucción",
    "callPrefix": "Llamar"
  },
  "reality": {
    "quote": "Un bloque cansado no mejora con otra botella de aditivo.",
    "body": "Los conductores de alto kilometraje, los cambios de aceite omitidos y los eventos de sobrecalentamiento abren las holguras de los cojinetes y destruyen el sellado de los anillos. El arrastre de carga en la carretera interestatal 25 y las pendientes montañosas en Colorado acelera el desgaste tanto en los motores V8 nacionales como en los importados con turbo. Cuando la compresión es desigual y el consumo de aceite aumenta, el bloque debe desmontarse, medirse, mecanizarse y reconstruirse según las especificaciones. No todas las vibraciones o fallas de encendido requieren una reconstrucción completa; comience con diagnóstico de motor en Englewood, reparación de levas y táctiles, reclamos de garantía extendida para trabajos de transmisión se manejan internamente a nuestra tarifa publicada de $120/hr. RKC ha reconstruido motores para conductores de Englewood, Denver, Littleton y sur-metro que necesitaban que el trabajo se hiciera una vez, no dos."
  },
  "symptoms": {
    "eyebrow": "Señales de advertencia",
    "title": "Síntomas de un bloque desgastado",
    "intro": "Un motor que ha superado su vida útil rara vez falla de golpe. Las señales de advertencia se acumulan en silencio hasta que un viaje de regreso desde las montañas se convierte en un remolque costoso. Estos tres modos de falla indican desgaste interno, no una solución rápida externa.",
    "cards": [
      {
        "title": "Paso de gases por encima de los anillos",
        "body": "Los gases de compresión se filtran por los anillos del pistón desgastados y presurizan el cárter. Observas que el aceite se filtra por los sellos, hay una película aceitosa alrededor del respiradero del PCV y humo azul-grisáceo bajo carga, especialmente al subir la interestatal 70 hacia el túnel Eisenhower con un remolque cargado. El paso de gases no es un problema de sellado; es la holgura entre el anillo y la pared del cilindro que se ha abierto más allá de las especificaciones. Los aditivos no pueden restaurar el acabado del cilindro ni la tensión de los anillos que necesita tu bloque."
      },
      {
        "title": "Presión baja de aceite en ralentí en caliente",
        "body": "Un motor sano mantiene la presión de aceite una vez que está caliente, generalmente 20 psi o más en ralentí en caliente, dependiendo de la hoja de especificaciones. Cuando los holguras de los cojinetes principales y de biela se desgastan más allá de la tolerancia, el aceite se escapa más rápido de lo que la bomba puede mantener el volumen. El indicador baja cuando te detienes en un semáforo en el tráfico de verano en Englewood, luego se recupera ligeramente al salir del ralentí. Ese patrón se debe al desgaste de los cojinetes dentro del bloque, no a un sensor defectuoso. El aceite más grueso enmascara el síntoma brevemente; no soluciona la holgura."
      },
      {
        "title": "Golpe de biela — cojinetes fundidos",
        "body": "El golpe de biela es el golpe inconfundible que proviene del cárter de aceite: un ritmo metálico rítmico que aumenta con las RPM. Significa que un cojinete de biela se ha fundido, desgastado o ha comenzado a transferir material al muñón del cigüeñal. Esto no es un tic de taqués ni una fuga de escape. Cada kilómetro conducido después de que comienza el golpe de biela arriesca destruir el cigüeñal, el cilindro del bloque y la propia biela. Remolque el vehículo. No intente llegar a casa arrastrándose esperando que el ruido desaparezca.",
        "warning": "Deje de conducir inmediatamente: el golpe de biela destruye los cigüeñales rápidamente."
      }
    ]
  },
  "process": {
    "eyebrow": "Taller de mecanizado",
    "title": "Preparación desde la fundición en bruto hasta el ensamblaje equilibrado",
    "intro": "Una reconstrucción adecuada no consiste en piezas de montaje rápido, sino en un flujo de trabajo documentado del taller de mecanizado. Cada paso a continuación se mide, se documenta con fotografías cuando los hallazgos modifican el alcance y se aprueba antes de comenzar el reensamblaje.",
    "bgImageAlt": "Servicio de vano del motor y trabajos de taller de mecanizado en RKC Automotive Englewood CO",
    "steps": [
      {
        "title": "Desbastar hasta la fundición desnuda",
        "body": "El motor se retira del vehículo y se coloca en un soporte. Cada perno, tapón y accesorio se cataloga. Separamos el bloque corto de las culatas, el cárter de aceite y la tapa frontal para que cada componente pueda medirse de forma independiente. Los inviernos en Colorado y el mantenimiento diferido del refrigerante suelen dejar incrustaciones en las camisas de agua; la única forma de inspecionar el estado real del interior del bloque es limpiándolo por completo."
      },
      {
        "title": "Tanque caliente y desengrasado",
        "body": "Las fundiciones pasan por limpieza en tanque caliente para eliminar lodo, carbono y escamas de óxido de los conductos de aceite y los pasajes del refrigerante. El lodo por sí solo no causa fallas, pero oculta grietas e impide resultados precisos de magnafusión. El metal limpio revela el estado real de la fundición antes de proceder con el trabajo de reborado y afilado, y antes de que usted apruebe los cargos del taller de mecanizado para un bloque que podría no ser recuperable."
      },
      {
        "title": "Inspección de grietas Magnaflux",
        "body": "Magnaflux aplica la inspección de partículas magnéticas a las fundiciones ferrosas, revelando microfisuras alrededor de los cilindros, la estructura principal y los salientes de los pernos del acoplamiento. Una grieta que parece una mancha en un bloque sucio se vuelve evidente bajo luz UV después del proceso de magnaflux. Encontrar una grieta aquí te ahorra armar un kit giratorio nuevo en un bloque que volvería a fallar; documentamos los hallazgos con fotos antes de cambiar el alcance."
      },
      {
        "title": "Calibrar y rectificar con placas de torque",
        "body": "Los cilindros se rectifican a medida sobredimensionada únicamente cuando el desgaste o el rayado lo exigen, y luego se pulen hasta el acabado final con placas de torque instaladas. Las placas de torque simulan la carga de sujeción de los pernos de la culata, de modo que la redondez del cilindro que se mide con la piedra de pulir coincide con lo que experimenta el motor a temperatura de funcionamiento. Saltarse el uso de placas de torque es la razón por la que los talleres terminan con cilindros ovalados y pérdida de sellado de los anillos después de solo unos pocos miles de kilómetros."
      },
      {
        "title": "Resuperficie de la superficie del deck",
        "body": "Las superficies de contacto del bloque y la culata se miden para verificar su planitud y se rectifican cuando están fuera de especificación. Las juntas de culata MLS, comunes en motores modernos nacionales y de importación, toleran casi cero imperfecciones. Una culata alabeada por sobrecalentamiento o por el estiramiento de los pernos de la culata provoca la falla del sello de combustión y la intrusión de refrigerante. Rectificamos hasta la especificación mínima, no el corte máximo, para preservar la altura de compresión."
      },
      {
        "title": "Ensamblaje de balance dinámico",
        "body": "Los cigüeñales se micromedian, pulen o rectifican a medida subestándar según sea necesario. Los conjuntos de biela y pistón se pesan y emparejan; el conjunto rotativo se equilibra dinámicamente para que la vibración no golpee los cojinetes a velocidad de carretera. El trabajo de balanceo es lo que separa un motor reconstruido que se siente nuevo de uno que vibra a través del volante en la C-470. Cada medición se registra en la hoja de construcción que recibe al retirar el vehículo."
      }
    ]
  },
  "checklist": {
    "eyebrow": "Repuestos y ensamblaje",
    "title": "La lista de verificación de componentes",
    "intro": "No todo fallo requiere el mismo nivel de trabajo. Cotizamos ambas opciones cuando la inspección lo permite, para que usted elija según el estado del cabezal, su presupuesto y cuánto tiempo planea conservar el vehículo.",
    "groups": [
      {
        "category": "Pistones y anillos",
        "items": [
          "Pistones hipereutécticos o forjados dimensionados según la medida final del cilindro",
          "Anillos de molibdeno o hierro dúctil ajustados al cilindro con verificación de la holgura en las uniones",
          "Inspección del alojamiento del pasador y de las ranuras para anillos antes del ensamblaje"
        ]
      },
      {
        "category": "Rodamientos y conjunto giratorio",
        "items": [
          "Cojinetes de biela y cigüeñal Clevite o King, dimensionados según las holguras medidas",
          "Pulir o rectificar los journals del cigüeñal al siguiente tamaño subestándar cuando estén rayados",
          "Lubricación y sincronización"
        ]
      },
      {
        "category": "Reacondicionamiento o reemplazo de la biela cuando la ovalidad del extremo grande está fuera de especificación",
        "items": [
          "Bomba de aceite de alto volumen o especificaciones OEM, compatible con la familia del motor",
          "Kit de cadena o correa de distribución con guías y tensor",
          "Reemplazo de cojinetes de levas, tapones de congelación y tapones de galería"
        ]
      },
      {
        "category": "Sellado y accesorios",
        "items": [
          "Juego completo de juntas — juntas de culata MLS cuando lo exija la especificación",
          "Juntas de retención trasera, junta de la tapa delantera y juntas de la tapa de válvulas",
          "Tornillos ARP o de calidad crítica OEM ajustados al par según la secuencia especificada"
        ]
      }
    ]
  },
  "labor": {
    "title": "Transparencia en la mano de obra en cada reconstrucción",
    "description": "Una reparación mayor del motor es una inversión significativa. Facturamos a nuestra tarifa publicada de $120/hora, utilizando los tiempos de libro de AllData y Mitchell como referencia, pero cada reconstrucción comienza con un presupuesto por escrito antes del desmontaje. Si el examen magnético revela una grieta, los muñones están rayados más allá de los límites de rectificado, o el daño en la culata cambia el alcance del trabajo, nos comunicamos con usted con fotos. Nada avanza sin su aprobación."
  },
  "faq": {
    "title": "preguntas sobre reconstrucción de motores",
    "intro": "Respuestas directas sobre el alcance, los plazos y las reconstrucciones de turbo entre un bloque corto y uno largo, y por qué la preparación de precisión en taller de mecanizado supera a un cambio con piezas de chatarra."
  },
  "areaLabel": "reconstrucciones de motor",
  "finalCta": {
    "title": "¿Listo para una estimación de reconstrucción?",
    "description": "Agenda una consulta en 2120 W Evans Ave. Revisamos los síntomas, discutimos las opciones de bloque corto vs. bloque largo, y proporcionamos un presupuesto por escrito de $120/hr de mano de obra más repuestos — antes de que comience el desmontaje.",
    "secondaryCta": "Solicitar presupuesto"
  },
  "relatedSlug": "engine-rebuilds-englewood-co",
  "faqs": [
    {
      "question": "¿Cómo sé si necesito una reconstrucción completa del motor o una reparación de la parte superior?",
      "answer": "Los síntomas de la parte inferior del motor — golpeteo de biela, baja presión de aceite en ralentí en caliente, residuos metálicos en el filtro de aceite o presurización del cárter por gases de escape — indican desgaste de cojinetes y anillos que requiere desmontar el bloque corto. Los problemas exclusivos de la parte superior, como un fallo de encendido en un solo cilindro o un tic en el tren de válvulas, pueden requerir trabajo en el árbol de levas y la culata sin necesidad de una reconstrucción completa. Realizamos pruebas de compresión, de pérdida y de presión de aceite antes de recomendar el alcance del desmontaje, para que no pague por un bloque largo cuando un bloque corto o una reparación del tren de válvulas resuelve el problema."
    },
    {
      "question": "¿Cuál es la diferencia entre una reconstrucción de bloque corto y de bloque largo?",
      "answer": "Un short-block incluye el bloque, cigüeñal, bielas, pistones, anillos, cojinetes, bomba de aceite y componentes de distribución; todo lo que está por debajo de las culatas. Un long-block añade culatas completamente reacondicionadas, hardware del tren de válvulas y, a menudo, el múltiple de admisión. Los short-blocks tienen sentido cuando las culatas son reutilizables; los long-blocks son la opción llave en mano cuando las culatas están agrietadas, alabeadas o presentan daño en los asientos de las válvulas. Cotizamos ambas opciones cuando corresponde para que usted pueda elegir según los hallazgos de la inspección y su presupuesto."
    },
    {
      "question": "¿Cuánto tiempo tarda un reconstrucción de motor en RKC Automotive?",
      "answer": "El cronograma depende de la cola del taller de mecanizado, la disponibilidad de piezas y si encontramos daños ocultos después del desmontaje. Una reconstrucción de bloque corto V8 doméstica directa generalmente toma varias semanas desde la aprobación hasta la instalación: el trabajo de mecanizado, el pedido de piezas y el ensamblaje toman tiempo real. Proporcionamos un plazo realista en el momento de la estimación y llamamos con fotos si la magnaflexión, las mediciones del cilindro o el estado del cigüeñal cambian el cronograma."
    },
    {
      "question": "¿Pueden reconstruir motores turboalimentados o de alto rendimiento?",
      "answer": "Sí. Los motores turbo y de inducción forzada requieren holguras más ajustadas, selección de pistones forjados o hipereutécticos según los niveles de sobrealimentación, y una preparación cuidadosa del bloque y la superficie de la culata. Realizamos el perfilado de los conjuntos giratorios para equilibrarlos y documentamos cada medición realizada en la máquina-herramienta. Ya sea que conduzcas diariamente un EcoBoost F-150 o remolques con un Cummins, se aplica el mismo proceso de estimación por escrito y aprobación antes del desmontaje a nuestra tarifa laboral publicada de $120/hora."
    },
    {
      "question": "¿Ofrecen garantía en los motores reconstruidos?",
      "answer": "Respaldamos nuestro trabajo de mecanizado y ensamblaje con una garantía por escrito sobre la mano de obra y las piezas instaladas; los términos dependen del alcance y los componentes utilizados. Los motores reconstruidos también se benefician de procedimientos adecuados de rodaje: intervalos específicos de cambio de aceite, evitar cargas sostenidas altas durante los primeros kilómetros y verificar la presión del aceite antes de salir del taller. Le explicamos los requisitos del rodaje al momento de la entrega para que su inversión dure."
    },
    {
      "question": "¿Por qué reconstruir en lugar de instalar un motor de caja o un motor de chatarra usado?",
      "answer": "Los motores en caja son convenientes pero costosos y pueden no coincidir con los accesorios, sensores o componentes de emisiones específicos de tu VIN. Los intercambios con desguaces son una apuesta: historial de mantenimiento desconocido, daños ocultos por sobrecalentamiento y sin verificación en taller de mecanizado. Una reconstrucción utiliza tu bloque cuando pasa la inspección magnética y de cilindros, restaura las holguras conocidas y te permite actualizar pistones, anillos y cojinetes para abordar el modo de falla que causó el problema original. Para muchos conductores de Englewood y el área metropolitana de Denver, esa es la mejor relación entre costo y confiabilidad a largo plazo."
    }
  ]
},
} as const;

export function engineRebuildsBodyCopy(lang: Lang) {
  return ENGINE_REBUILDS_BODY[lang] ?? ENGINE_REBUILDS_BODY.en;
}
