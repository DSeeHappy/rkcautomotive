import type { Lang } from '@/lib/language';
import type { FAQItem } from '@/lib/constants';
import { BUSINESS, LABOR_RATE, WARRANTY_CLAIM_PROCESS, WARRANTY_PAGE_FAQ } from '@/lib/constants';

/** Warranty page body — ES via Bifrost ds Nemotron (vllm/research / vllm/smart). SEO meta stays English. */
export const WARRANTY_COPY = {
  en: {
  "hero": {
    "titleBefore": "We Accept",
    "titleHighlight": "All Major",
    "titleAfter": "Extended Warranties",
    "description": "Don't battle claims adjusters alone. RKC manages diagnostics, teardown authorizations, denial appeals, and parts quality — from drop-off through approved repair.",
    "scheduleCta": "Schedule Warranty Diagnostic"
  },
  "realityCheck": {
    "eyebrow": "Warranty advocacy",
    "quote": "We fight the claim so you don't fight the adjuster.",
    "body": "Extended warranty companies profit when claims stall or get denied. RKC documents every failure, negotiates teardown authorizations, and escalates when adjusters play games.",
    "stats": [
      {
        "value": "1–7 days",
        "label": "Typical approval window",
        "detail": "Component claims in 1–3 days · powertrain 3–7+"
      },
      {
        "value": "500+",
        "label": "Claims handled",
        "detail": "Extended warranty diagnostics & submissions"
      },
      {
        "value": "30+ yrs",
        "label": "Shop experience",
        "detail": "ASE-certified Englewood bay since day one"
      }
    ]
  },
  "approvalTimes": {
    "eyebrow": "The harsh reality",
    "title": "How Long Does Approval Actually Take?",
    "intro": "Warranty companies advertise fast claims. The reality at independent shops is measured in business days — and major powertrain failures can take a week or more.",
    "timeline": [
      {
        "step": "01",
        "title": "Standard Component Claims",
        "timeframe": "1–3 business days",
        "paragraphs": [
          "Alternators, starters, brake master cylinders, and similar single-component failures follow a predictable approval path once we submit structured evidence packages with photos, scan data, and AllData labor times.",
          "Adjusters see hundreds of claims daily — vague descriptions get pushed to the back of the queue. RKC formats documentation exactly how claims departments expect."
        ]
      },
      {
        "step": "02",
        "title": "Major Powertrain Claims",
        "timeframe": "3–7+ business days",
        "paragraphs": [
          "Engine, transmission, and differential failures trigger field inspectors, teardown authorizations, and maintenance-history scrutiny. These claims routinely stretch a full week or longer.",
          "RKC plans for this timeline upfront so you are not left without a vehicle wondering what happened to your claim."
        ]
      },
      {
        "step": "03",
        "title": "How RKC Accelerates Approval",
        "timeframe": "Direct adjuster access",
        "paragraphs": [
          "We maintain direct lines to claims departments at Endurance, CarShield, Royal Administration, and other major administrators — not the general customer service number.",
          "Every submission includes digital evidence: timestamped photos, OBD-II freeze-frame data, fluid analysis, and labor at our transparent $120/hr rate."
        ]
      }
    ]
  },
  "teardown": {
    "alertEyebrow": "Critical warning — read before authorizing teardown",
    "alertTitle": "The Teardown Authorization Trap",
    "title": "Your Engine Won't Run — But the Warranty Won't Pay to Find Out Why",
    "body": "When your engine or transmission fails catastrophically, the warranty company will not authorize internal inspection until you sign a teardown authorization — committing you to pay for disassembly labor if the adjuster denies the claim.",
    "infoTitle": "What you need to know",
    "infoBody": "If the internal failure is covered, the warranty reimburses teardown labor along with the repair. If the adjuster finds sludge, a pre-existing crack, or an excluded component — you absorb the cost, often $800 to $2,500 before a single covered part is replaced.",
    "photoCaption": "Document every fastener before you sign anything",
    "youPayTitle": "You pay",
    "youPayItems": [
      "Excluded failures or neglect",
      "Pre-existing conditions",
      "Teardown labor + parts already ordered"
    ],
    "warrantyPaysTitle": "Warranty pays",
    "warrantyPaysItems": [
      "Covered internal failure confirmed",
      "Teardown labor reimbursed",
      "Repair + approved parts covered"
    ],
    "footer": "Never authorize a teardown at a shop that cannot show you documented failure evidence first. RKC runs preliminary diagnostics — compression tests, oil analysis, borescope inspection — to build the strongest possible case before you assume financial risk."
  },
  "denialTactics": {
    "eyebrow": "Fighting back",
    "title": "Denial Tactics & RKC Counter-Measures",
    "intro": "Extended warranty companies deny roughly 30–40% of initial claims. The denials follow predictable patterns — and each one has a technical counter when your shop documents evidence properly.",
    "tacticLabel": "Tactic",
    "adjusterClaimLabel": "What adjusters claim",
    "ourFightLabel": "Our fight",
    "tactics": [
      {
        "tactic": "Pre-Existing Condition",
        "adjusterClaim": "Adjusters argue the failed component showed wear before your policy took effect — especially on high-mileage vehicles. They cite inspection photos, prior repair orders, or vague language in your contract about \"gradual deterioration.\"",
        "rkcResponse": "RKC pulls OBD-II freeze-frame data captured at the moment of failure. Freeze frames timestamp exactly when a sensor reading went out of range — proving the component operated within spec until a sudden, catastrophic event. Combined with prior scan history when available, this evidence directly contradicts gradual-wear denial arguments."
      },
      {
        "tactic": "Lack of Maintenance",
        "adjusterClaim": "Sludge in the valve cover, dark oil on the dipstick, or missing dealer stamps become grounds for total claim denial. Powertrain administrators use maintenance exclusions more aggressively than any other contract clause.",
        "rkcResponse": "We distinguish cosmetic sludge from mechanical neglect. Oil analysis, bearing inspection photos, and metallurgical evidence of sudden failure prove catastrophic failure rather than incremental neglect."
      },
      {
        "tactic": "Consequential Damage Loophole",
        "adjusterClaim": "Your covered water pump failed and destroyed the timing belt and cylinder head — but the adjuster approves only the water pump. They classify everything else as \"consequential damage\" from an excluded wear item.",
        "rkcResponse": "RKC documents the complete sequence of failure before disassembly. When a covered component failure directly causes downstream damage, we cite contract language requiring administrators to cover consequential repairs."
      }
    ]
  },
  "partsBattle": {
    "eyebrow": "Parts quality",
    "title": "LKQ Salvage vs. Quality Remanufactured",
    "intro": "Warranty administrators mandate the cheapest parts available. RKC inspects, rejects, and documents every component before it goes on your vehicle.",
    "tableCaption": "Comparison of warranty-mandated parts vs RKC Automotive quality standards",
    "yourShop": "Your shop",
    "tiers": [
      {
        "label": "Warranty mandate",
        "value": "LKQ / salvage",
        "summary": "Administrators mandate salvage or the cheapest reman on their vendor list — minimal oversight before install."
      },
      {
        "label": "Typical chain",
        "value": "Lowest reman",
        "summary": "National chains source from the same low-cost reman vendors — whatever lot arrives gets installed, no rejection process."
      },
      {
        "label": "RKC standard",
        "value": "Tier-one reman",
        "summary": "We specify tier-one remanufacturers with ISO-certified processes and reject substandard lots before they touch your vehicle."
      }
    ],
    "rows": [
      {
        "label": "Part source",
        "warranty": "LKQ salvage / cheapest reman",
        "chain": "Vendor-list reman only — lowest approved option",
        "rkc": "Tier-one reman or OEM when allowed"
      },
      {
        "label": "Quality control",
        "warranty": "Minimal — lowest bidder wins",
        "chain": "Install whatever arrives — no on-delivery inspection",
        "rkc": "On-delivery inspection & rejection"
      },
      {
        "label": "Documentation",
        "warranty": "Authorization number only",
        "chain": "Basic invoice — no lot photos or rejection records",
        "rkc": "Timestamped photos + written rejections"
      },
      {
        "label": "Your outcome",
        "warranty": "May fail again in 12 months",
        "chain": "Variable — depends on part lot and vendor batch",
        "rkc": "Repair built to last your coverage term"
      }
    ],
    "warrantyPushTitle": "What warranty companies push",
    "warrantyPushBody": "LKQ parts sourced from salvage yards cost the warranty company a fraction of a remanufactured unit. When LKQ inventory is unavailable, administrators authorize the cheapest reman from their vendor list — minimal quality control, short warranties.",
    "rkcFightTitle": "How RKC fights for better parts",
    "rkcFightBody": "Every provider-supplied part is inspected on delivery. Parts that fail inspection are photographed, rejected in writing, and returned — adjusters cannot override without escalating to a supervisor.",
    "rkcFightCallout": "When your contract allows remanufactured components, we specify tier-one remanufacturers with ISO-certified processes."
  },
  "process": {
    "eyebrow": "How we handle your claim",
    "title": "Four steps. Zero phone-tree misery.",
    "intro": "Drop off at our Englewood shop — we take it from diagnosis through approved repair, fighting denials and documenting every interaction with your warranty administrator.",
    "steps": [
      {
        "step": "01",
        "title": "Drop-Off & Document",
        "description": "Bring your vehicle and service contract to 2120 W Evans Ave. We verify policy details and note your deductible before any work begins."
      },
      {
        "step": "02",
        "title": "Digital Diagnostics",
        "description": "Complete scan and inspection — we capture failure codes, photos, and technical findings formatted for warranty company review."
      },
      {
        "step": "03",
        "title": "Direct Negotiation",
        "description": "We call the claims administrator — Endurance, CarShield, Royal, and others — submit estimates and photos, and push for maximum approved coverage."
      },
      {
        "step": "04",
        "title": "Certified Repair",
        "description": "ASE-certified repairs with quality components. You pay only your plan deductible and any non-covered wear items we disclosed upfront."
      }
    ]
  },
  "providerIndex": {
    "eyebrow": "Warranty administrators",
    "title": "Extended Warranty Administrators We Work With",
    "introBefore": "administrators across direct, broker, and institutional programs — including",
    "introAfter": "verified active partners with direct claims portals. RKC submits diagnostics, negotiates approvals, and tracks your claim through completion.",
    "providersLabel": "providers",
    "categories": {
      "Direct Administrators": "Direct Administrators",
      "Brokers & Providers": "Brokers & Providers",
      "Institutional & Specialized": "Institutional & Specialized"
    },
    "disclaimer": "Verified partners (with logos) link to their claims portals. This index covers direct administrators, marketing brokers, and institutional warranty programs. RKC Automotive is an independent repair facility — we are not affiliated with, endorsed by, or acting as an agent for any company listed above. Coverage acceptance depends on your specific contract terms and administrator policies.",
    "openClaimsPortal": "open claims portal"
  },
  "powertrain": {
    "eyebrow": "Powertrain warranty work",
    "title": "Heavy warranty repairs we handle daily",
    "intro": "Extended warranty administrators approve teardown, powertrain, and drivability claims when documentation is complete. RKC specializes in the high-dollar jobs adjusters scrutinize most:",
    "links": [
      {
        "href": "/services/engine-rebuilds-englewood-co",
        "title": "Engine rebuilds in Englewood",
        "detail": "Short-block and long-block teardown with magnaflux, machine-shop coordination, and adjuster-ready documentation."
      },
      {
        "href": "/services/engine-diagnostics-englewood-co",
        "title": "Engine diagnostics in Englewood",
        "detail": "Failure codes, live data, compression tests, and photos formatted for warranty review before teardown authorization."
      },
      {
        "href": "/services/transmission-services-englewood-co",
        "title": "Transmission service in Englewood",
        "detail": "Fluid analysis, pan inspection, valve-body repair, and overhaul quotes with Mitchell/AllData labor support."
      }
    ]
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "Extended warranty questions",
    "intro": "Straight answers on teardown authorizations, denial appeals, parts quality, approval timelines, and what to expect at our Englewood shop.",
    "items": [
      {
        "question": "Do I have to go to the dealership for my extended warranty?",
        "answer": "No. Any licensed, ASE-certified repair facility can handle service contracts when your plan allows independent shops. RKC Automotive meets the compliance standards extended warranty companies require — proper diagnostics, documentation, and authorized parts."
      },
      {
        "question": "What do I have to pay out of pocket?",
        "answer": "Typically only your plan deductible — often $50, $100, or $200 per visit — plus non-covered fluids, filters, or wear items your contract excludes. We break down covered vs. non-covered costs in writing before starting work."
      },
      {
        "question": "What should I bring when I drop off my vehicle?",
        "answer": "Bring your extended warranty contract or policy number, a photo ID, and your vehicle keys. If you have prior denial letters or claim numbers from the warranty company, bring those too — they help us pick up where a previous shop left off."
      },
      {
        "question": "How long does warranty claim approval actually take?",
        "answer": "Standard component claims — alternators, starters, brake master cylinders — typically take 1–3 business days once we submit AllData or Mitchell labor guides and failure codes. Major powertrain claims involving engines or transmissions often take 3–7+ business days because adjusters require field inspectors, teardown authorizations, and maintenance history verification. We accelerate approvals with direct adjuster lines, digital evidence packages, and transparent $120/hr labor documentation."
      },
      {
        "question": "What is a teardown authorization and why does the warranty company require it?",
        "answer": "When your engine or transmission will not run, the warranty company will not pay to find out why until you authorize a partial teardown. If the failure is covered, the warranty reimburses teardown labor. If the adjuster finds neglect, pre-existing damage, or an excluded failure, you pay for the teardown. RKC documents every step with full-bay photography so there are no surprises."
      },
      {
        "question": "What if my warranty claim was denied for lack of maintenance?",
        "answer": "This is one of the most common denial tactics. Adjusters look for sludge, overdue oil changes, or missing service records. RKC counters with oil analysis when appropriate, freeze-frame data showing the failure sequence, and evidence that catastrophic component failure — not neglect — caused the breakdown. We have successfully overturned maintenance-related denials when the technical evidence supports coverage."
      },
      {
        "question": "Will the warranty company make me use cheap used parts (LKQ)?",
        "answer": "Many administrators push LKQ (Like Kind and Quality) salvage-yard parts or the cheapest remanufactured units available. RKC inspects every provider-supplied part on delivery. We reject components with visible damage, incorrect specifications, or substandard reman quality — and we document our rejection with photos so the adjuster must authorize remanufactured or OEM-grade replacements."
      },
      {
        "question": "Can RKC work with any extended warranty company?",
        "answer": "We work with all major third-party administrators including Endurance, CarShield, CARCHEX, Royal Administration Services, autopom!, Olive, Omega Auto Care, Zurich, and dozens more. If your provider is not listed, call us — we likely still accept it."
      },
      {
        "question": "What happens if my claim is denied after repairs begin?",
        "answer": "We never start covered repairs without written authorization or a clear verbal approval logged with a claim number. If a supplemental request is denied mid-repair, we stop work immediately, document the adjuster decision, and present your options — appeal with additional evidence, pay out of pocket for the uncovered portion, or pursue the warranty company dispute process. You are never surprised by a bill you did not authorize."
      },
      {
        "question": "Does RKC charge more for warranty work than regular repairs?",
        "answer": "No. Our posted labor rate is $120/hr whether you pay cash or your warranty company pays. Warranty administrators cap labor at guidebook rates — we document hours accurately using AllData and Mitchell so adjusters cannot arbitrarily reduce approved time."
      }
    ]
  },
  "cta": {
    "title": "Ready to file your warranty claim?",
    "bodyBefore": "Bring your vehicle and contract to",
    "bodyAfter": "We look up coverage, fight denials, and handle the entire claims process at",
    "scheduleDiagnostic": "Schedule diagnostic",
    "contact": "Contact",
    "getDirections": "Get directions"
  },
  "processSectionAlt": "RKC Automotive shop bay in Englewood, Colorado",
  "ctaSectionAlt": "RKC Automotive shop exterior in Englewood, Colorado"
},
  es: {
  "hero": {
    "titleBefore": "Aceptamos",
    "titleHighlight": "Todos los Principales",
    "titleAfter": "Garantías Extendidas",
    "description": "No enfrentes solo a los ajustadores de reclamaciones. RKC gestiona diagnósticos, autorizaciones de desmontaje, apelaciones de denegaciones y calidad de piezas — desde la entrega hasta la reparación aprobada.",
    "scheduleCta": "Programar diagnóstico de garantía"
  },
  "realityCheck": {
    "eyebrow": "Defensa de garantía",
    "quote": "Luchamos el reclamo para que usted no tenga que luchar con el ajustador.",
    "body": "Las empresas de garantía extendida obtienen beneficios cuando los reclamos se estancan o son denegados. RKC documenta cada falla, negocia autorizaciones de desmontaje y escala cuando los ajustadores juegan.",
    "stats": [
      {
        "value": "1–7 días",
        "label": "Ventana típica de aprobación",
        "detail": "Reclamos de componentes en 1–3 días · powertrain 3–7+"
      },
      {
        "value": "500+",
        "label": "Reclamaciones gestionadas",
        "detail": "Diagnósticos y envíos de garantía extendida"
      },
      {
        "value": "30+ años",
        "label": "Experiencia del taller",
        "detail": "Bahía ASE-certificada de Englewood desde el primer día"
      }
    ]
  },
  "approvalTimes": {
    "eyebrow": "La dura realidad",
    "title": "¿Cuánto tiempo realmente tarda la aprobación?",
    "intro": "Las empresas de garantía anuncian reclamaciones rápidas. La realidad en los talleres independientes se mide en días hábiles — y las fallas importantes del powertrain pueden tardar una semana o más.",
    "timeline": [
      {
        "title": "Reclamaciones de componentes estándar",
        "timeframe": "1–3 días hábiles",
        "paragraphs": [
          "Los alternadores, los arrancadores, los cilindros maestros de freno y otras fallas de un solo componente siguen un camino de aprobación predecible una vez que enviamos paquetes de evidencia estructurados con fotos, datos de escaneo y los tiempos de mano de obra de AllData.",
          "Los ajustadores ven cientos de reclamaciones diarias — las descripciones vagas se envían al final de la cola. RKC formatea la documentación exactamente como esperan los departamentos de reclamaciones."
        ],
        "step": "01"
      },
      {
        "title": "Reclamaciones importantes del tren de potencia",
        "timeframe": "3–7+ días hábiles",
        "paragraphs": [
          "Las fallas del motor, transmisión y diferencial activan a los inspectores de campo, las autorizaciones de desmontaje y el escrutinio del historial de mantenimiento. Estas reclamaciones suelen extenderse una semana completa o más.",
          "RKC planifica este cronograma con antelación para que no te quedes sin vehículo preguntándote qué pasó con tu reclamación."
        ],
        "step": "02"
      },
      {
        "title": "Cómo RKC Acelera la Aprobación",
        "timeframe": "Acceso directo al ajustador",
        "paragraphs": [
          "Mantenemos líneas directas con los departamentos de reclamaciones de Endurance, CarShield, Royal Administration y otros administradores principales — no el número general de servicio al cliente.",
          "Cada envío incluye evidencia digital: fotos con marca de tiempo, datos de cuadro congelado OBD-II, análisis de fluidos y mano de obra a nuestra tarifa transparente de $120/hr."
        ],
        "step": "03"
      }
    ]
  },
  "teardown": {
    "alertEyebrow": "Advertencia crítica — lea antes de autorizar el desmontaje",
    "alertTitle": "La Trampa de la Autorización de Desmontaje",
    "title": "Tu motor no arrancará — pero la garantía no pagará para descubrir por qué",
    "body": "Cuando tu motor o transmisión falla catastróficamente, la compañía de garantía no autorizará una inspección interna hasta que firmes una autorización de desmontaje — comprometiéndote a pagar la mano de obra de desmontaje si el perito niega la reclamación.",
    "infoTitle": "Lo que necesitas saber",
    "infoBody": "Si la falla interna está cubierta, la garantía reembolsa la mano de obra de desmontaje junto con la reparación. Si el ajustador encuentra lodo, una grieta preexistente o un componente excluido — usted asume el costo, a menudo entre $800 y $2,500 antes de que se reemplace una sola pieza cubierta.",
    "photoCaption": "Documente cada sujetador antes de firmar cualquier cosa",
    "youPayTitle": "Usted paga",
    "youPayItems": [
      "Fallos excluidos o negligencia",
      "Condiciones preexistentes",
      "Mano de obra de desmontaje + piezas ya ordenadas"
    ],
    "warrantyPaysTitle": "La garantía paga",
    "warrantyPaysItems": [
      "Falla interna cubierta confirmada",
      "Mano de obra de desmontaje reembolsada",
      "Reparación + piezas aprobadas cubiertas"
    ],
    "footer": "Nunca autorice un desmontaje en un taller que no pueda mostrarle primero evidencia documentada de la falla. RKC realiza diagnósticos preliminares — compression tests, oil analysis, borescope inspection — para construir el caso más sólido posible antes de que asuma el riesgo financiero."
  },
  "denialTactics": {
    "eyebrow": "Luchando de vuelta",
    "title": "Tácticas de Negación y Contramedidas RKC",
    "intro": "Las empresas de garantía extendida niegan aproximadamente el 30–40% de las reclamaciones iniciales. Las negaciones siguen patrones predecibles — y cada una tiene un contraataque técnico cuando su taller documenta adecuadamente la evidencia.",
    "tacticLabel": "Táctica",
    "adjusterClaimLabel": "Lo que afirman los ajustadores",
    "ourFightLabel": "Nuestra lucha",
    "tactics": [
      {
        "tactic": "Condición preexistente",
        "adjusterClaim": "Los ajustadores argumentan que el componente fallado mostraba desgaste antes de que su póliza entrara en vigor, especialmente en vehículos con alto kilometraje. Citan fotos de inspección, órdenes de reparación previas o lenguaje vago en su contrato sobre \"deterioro gradual\".",
        "rkcResponse": "RKC extrae los datos de freeze-frame OBD-II capturados en el momento de la falla. Los freeze-frame marcan exactamente cuándo una lectura de sensor salió del rango — demostrando que el componente operó dentro de las especificaciones hasta un evento repentino y catastrófico. Combinado con el historial de escaneos previo cuando está disponible, esta evidencia contradice directamente los argumentos de negación por desgaste gradual."
      },
      {
        "tactic": "Falta de mantenimiento",
        "adjusterClaim": "La presencia de lodo en la tapa de la culata, aceite oscuro en la varilla medidora o sellos de concesionario faltantes constituyen motivos para la denegación total de la reclamación. Los administradores del tren motriz aplican las exclusiones por mantenimiento de manera más agresiva que cualquier otra cláusula del contrato.",
        "rkcResponse": "Distinguimos entre lodo cosmético y negligencia mecánica. El análisis de aceite, las fotos de inspección de los cojinetes y la evidencia metalúrgica de una falla súbita demuestran una falla catastrófica en lugar de una negligencia incremental."
      },
      {
        "tactic": "Vacío legal por daños consecuentes",
        "adjusterClaim": "Su covered water pump falló y destruyó el timing belt y el cylinder head — pero el adjuster solo aprueba el water pump. Ellos clasifican todo lo demás como \"consequential damage\" de un excluded wear item.",
        "rkcResponse": "RKC documenta la secuencia completa de falla antes del desmontaje. Cuando la falla de un componente cubierto causa directamente daños posteriores, citamos el lenguaje del contrato que requiere que los administradores cubran las reparaciones consecuenciales."
      }
    ]
  },
  "partsBattle": {
    "eyebrow": "Calidad de piezas",
    "title": "LKQ Desguace vs. Remanufacturado de Calidad",
    "intro": "Los administradores de garantía exigen las piezas más baratas disponibles. RKC inspecciona, rechaza y documenta cada componente antes de que se instale en su vehículo.",
    "tableCaption": "Comparación de piezas requeridas por garantía vs estándares de calidad de RKC Automotive",
    "yourShop": "Su taller",
    "tiers": [
      {
        "label": "Mandato de garantía",
        "value": "LKQ / desguace",
        "summary": "Los administradores exigen el desguace o el remanufacturado más barato en su lista de proveedores — supervisión mínima antes de la instalación."
      },
      {
        "label": "Cadena típica",
        "value": "Reman más bajo",
        "summary": "Las cadenas nacionales se abastecen de los mismos proveedores de reman de bajo costo — cualquier lote que llega se instala, sin proceso de rechazo."
      },
      {
        "label": "Estándar RKC",
        "value": "Tier-one remanufacturado",
        "summary": "Especificamos remanufacturadores de nivel uno con procesos certificados ISO y rechazamos lotes subestándar antes de que entren en contacto con su vehículo."
      }
    ],
    "rows": [
      {
        "label": "Fuente de la pieza",
        "warranty": "LKQ desguace / reman más barato",
        "chain": "Lista de proveedores reman solo — opción aprobada más baja",
        "rkc": "Tier-one reman o OEM cuando se permite"
      },
      {
        "label": "Control de calidad",
        "warranty": "Mínimo — gana el postor más bajo",
        "chain": "Instale lo que llegue — sin inspección al momento de la entrega",
        "rkc": "Inspección y rechazo al momento de la entrega"
      },
      {
        "label": "Documentación",
        "warranty": "Número de autorización solo",
        "chain": "Factura básica — sin fotos de lote ni registros de rechazo",
        "rkc": "Fotos con marca de tiempo + rechazos escritos"
      },
      {
        "label": "Tu resultado",
        "warranty": "Puede fallar nuevamente en 12 meses",
        "chain": "Variable — depende del lote de la pieza y del lote del proveedor",
        "rkc": "Reparación diseñada para durar todo el término de su cobertura"
      }
    ],
    "warrantyPushTitle": "Lo que las compañías de garantía promueven",
    "warrantyPushBody": "Las piezas LKQ obtenidas de desguaces cuestan a la compañía de garantía una fracción de una unidad remanufacturada. Cuando el inventario de LKQ no está disponible, los administradores autorizan el reman más barato de su lista de proveedores — control de calidad mínimo, garantías cortas.",
    "rkcFightTitle": "Cómo RKC lucha por mejores piezas",
    "rkcFightBody": "Cada pieza suministrada por el proveedor se inspecciona al momento de la entrega. Las piezas que no pasan la inspección se fotografían, se rechazan por escrito y se devuelven — los ajustadores no pueden anular sin escalar a un supervisor.",
    "rkcFightCallout": "Cuando su contrato permite componentes remanufacturados, especificamos remanufacturadores de nivel uno con procesos certificados ISO."
  },
  "process": {
    "eyebrow": "Cómo manejamos su reclamo",
    "title": "Cuatro pasos. Cero problemas con el árbol telefónico.",
    "intro": "Déjelo en nuestro taller de Englewood — nos encargamos desde el diagnóstico hasta la reparación aprobada, luchando contra las denegaciones y documentando cada interacción con su administrador de garantía.",
    "steps": [
      {
        "title": "Entrega y Documentación",
        "description": "Traiga su vehículo y contrato de servicio a 2120 W Evans Ave. Verificamos los detalles de la póliza y anotamos su deducible antes de que comience cualquier trabajo.",
        "step": "01"
      },
      {
        "title": "Digital Diagnostics",
        "description": "Escaneo e inspección completos — capturamos códigos de falla, fotos y hallazgos técnicos formateados para la revisión de la compañía de garantía.",
        "step": "02"
      },
      {
        "title": "Negociación Directa",
        "description": "Llamamos al administrador de reclamaciones — Endurance, CarShield, Royal y otros — enviamos estimaciones y fotos, y presionamos para obtener la máxima cobertura aprobada.",
        "step": "03"
      },
      {
        "title": "Reparación Certificada",
        "description": "Reparaciones certificadas ASE con componentes de calidad. Solo paga tu deducible del plan y cualquier artículo de desgaste no cubierto que hayamos divulgado previamente.",
        "step": "04"
      }
    ]
  },
  "providerIndex": {
    "eyebrow": "Administradores de garantía",
    "title": "Administradores de garantía extendida con los que trabajamos",
    "introBefore": "administradores en programas directos, de correduría e institucionales — incluyendo",
    "introAfter": "socios activos verificados con portales de reclamaciones directos. RKC envía diagnósticos, negocia aprobaciones y rastrea su reclamación hasta su finalización.",
    "providersLabel": "proveedores",
    "categories": {
      "Direct Administrators": "Administradores Directos",
      "Brokers & Providers": "Corredores y Proveedores",
      "Institutional & Specialized": "Institucional y Especializado"
    },
    "disclaimer": "Los socios verificados (con logotipos) enlazan a sus portales de reclamaciones. Este índice cubre administradores directos, corredores de marketing y programas de garantía institucionales. RKC Automotive es una instalación de reparación independiente — no estamos afiliados, respaldados ni actuando como agentes de ninguna empresa mencionada anteriormente. La aceptación de la cobertura depende de los términos específicos de su contrato y de las políticas del administrador.",
    "openClaimsPortal": "Abrir portal de reclamaciones"
  },
  "powertrain": {
    "eyebrow": "Trabajo de garantía del tren de potencia",
    "title": "Reparaciones de garantía pesadas que manejamos diariamente",
    "intro": "Los administradores de garantía extendida aprueban los reclamos de desmontaje, powertrain, y drivability cuando la documentación está completa. RKC se especializa en los trabajos de alto costo que los ajustadores examinan con mayor escrutinio:",
    "links": [
      {
        "title": "Reconstrucción de motores en Englewood",
        "detail": "Desmontaje de bloque corto y bloque largo con magnaflux, coordinación del taller de máquinas y documentación lista para ajustador.",
        "href": "/services/engine-rebuilds-englewood-co"
      },
      {
        "title": "Diagnóstico de motor en Englewood",
        "detail": "Códigos de falla, datos en vivo, pruebas de compresión y fotos formateadas para revisión de garantía antes de la autorización de desmontaje.",
        "href": "/services/engine-diagnostics-englewood-co"
      },
      {
        "title": "Servicio de transmisión en Englewood",
        "detail": "Análisis de fluidos, inspección de la bandeja, reparación del cuerpo de válvulas y presupuestos de revisión con soporte de mano de obra Mitchell/AllData.",
        "href": "/services/transmission-services-englewood-co"
      }
    ]
  },
  "faq": {
    "eyebrow": "Preguntas frecuentes",
    "title": "Preguntas sobre garantía extendida",
    "intro": "Respuestas directas sobre autorizaciones de desmontaje, apelaciones de denegación, calidad de piezas, plazos de aprobación y qué esperar en nuestro taller de Englewood.",
    "items": [
      {
        "question": "¿Tengo que ir al concesionario para mi garantía extendida?",
        "answer": "No. Cualquier taller de reparación con licencia y certificación ASE puede manejar los contratos de servicio cuando su plan permite talleres independientes. RKC Automotive cumple con los estándares de cumplimiento que requieren las empresas de garantía extendida — diagnóstico adecuado, documentación y piezas autorizadas."
      },
      {
        "question": "¿Qué tengo que pagar de mi bolsillo?",
        "answer": "Por lo general, solo su deducible del plan — a menudo $50, $100 o $200 por visita — más los fluidos, filtros o artículos de desgaste no cubiertos que su contrato excluye. Desglosamos por escrito los costos cubiertos vs. no cubiertos antes de comenzar el trabajo."
      },
      {
        "question": "¿Qué debo llevar cuando dejo mi vehículo?",
        "answer": "Traiga su contrato de garantía extendida o número de póliza, una identificación con foto y las llaves de su vehículo. Si tiene cartas de denegación previas o números de reclamación de la compañía de garantía, tráigalos también — nos ayudan a continuar donde la tienda anterior lo dejó."
      },
      {
        "question": "¿Cuánto tiempo tarda realmente la aprobación de una reclamación de garantía?",
        "answer": "Las reclamaciones de componentes estándar — alternadores, arrancadores, cilindros maestros de freno — suelen tardar de 1 a 3 días hábiles una vez que enviamos las guías de mano de obra de AllData o Mitchell y los códigos de falla. Las reclamaciones importantes del tren de potencia que involucran motores o transmisiones suelen tardar de 3 a 7+ días hábiles porque los ajustadores requieren inspectores de campo, autorizaciones de desmontaje y verificación del historial de mantenimiento. Aceleramos las aprobaciones con líneas directas de ajustadores, paquetes de evidencia digital y documentación transparente de mano de obra a $120/hr."
      },
      {
        "question": "¿Qué es una autorización de desmontaje y por qué la compañía de seguros la requiere?",
        "answer": "Cuando su motor o transmisión no funcionan, la compañía de garantía no pagará para averiguar por qué hasta que usted autorice un desmontaje parcial. Si la falla está cubierta, la garantía reembolsa el costo de mano de obra del desmontaje. Si el perito encuentra negligencia, daño preexistente o una falla excluida, usted paga el desmontaje. RKC documenta cada paso con fotografía de bahía completa para que no haya sorpresas."
      },
      {
        "question": "¿Qué pasa si mi reclamo de garantía fue denegado por falta de mantenimiento?",
        "answer": "Esta es una de las tácticas de denegación más comunes. Los ajustadores buscan lodo, cambios de aceite vencidos o registros de servicio faltantes. RKC responde con análisis de aceite cuando corresponde, datos de freeze-frame que muestran la secuencia de falla y evidencia de que una falla catastrófica del componente — y no el descuido — causó la avería. Hemos logrado revertir denegaciones relacionadas con el mantenimiento cuando la evidencia técnica respalda la cobertura."
      },
      {
        "question": "¿La empresa de garantía me obligará a usar piezas usadas baratas (LKQ)?",
        "answer": "Muchos administradores promueven piezas LKQ (Like Kind and Quality) de desguace o las unidades remanufacturadas más económicas disponibles. RKC inspecciona cada pieza suministrada por el proveedor al momento de la entrega. Rechazamos componentes con daño visible, especificaciones incorrectas o calidad de remanufactura subestándar — y documentamos nuestro rechazo con fotos para que el perito debe autorizar reemplazos remanufacturados o de grado OEM."
      },
      {
        "question": "¿Puede RKC trabajar con cualquier empresa de garantía extendida?",
        "answer": "Trabajamos con todos los principales administradores de terceros, incluyendo Endurance, CarShield, CARCHEX, Royal Administration Services, autopom!, Olive, Omega Auto Care, Zurich y docenas más. Si su proveedor no está listado, llámenos — probablemente aún lo aceptemos."
      },
      {
        "question": "¿Qué pasa si mi reclamo es denegado después de que empiezan las reparaciones?",
        "answer": "Nunca iniciamos reparaciones cubiertas sin autorización escrita o una aprobación verbal clara registrada con un número de reclamo. Si una solicitud suplementaria es denegada a mitad de la reparación, detenemos el trabajo inmediatamente, documentamos la decisión del ajustador y le presentamos sus opciones: apelar con evidencia adicional, pagar de su bolsillo la parte no cubierta o iniciar el proceso de disputa de la compañía de garantía. Nunca se sorprenderá con una factura que no haya autorizado."
      },
      {
        "question": "¿RKC cobra más por el trabajo de garantía que por las reparaciones regulares?",
        "answer": "No. Nuestra tarifa de mano de obra publicada es de $120/hora, ya sea que pagues en efectivo o que lo pague tu compañía de garantía. Los administradores de garantía limitan la mano de obra a las tarifas del manual — documentamos las horas con precisión utilizando AllData y Mitchell, de modo que los ajustadores no puedan reducir arbitrariamente el tiempo aprobado."
      }
    ]
  },
  "cta": {
    "title": "¿Listo para presentar tu reclamo de garantía?",
    "bodyBefore": "Trae tu vehículo y contrato a",
    "bodyAfter": "Buscamos la cobertura, luchamos contra las denegaciones y manejamos todo el proceso de reclamaciones en",
    "scheduleDiagnostic": "Programar diagnóstico",
    "contact": "Contacto",
    "getDirections": "Obtener indicaciones"
  },
  "processSectionAlt": "RKC Automotive bahía del taller en Englewood, Colorado",
  "ctaSectionAlt": "RKC Automotive exterior del taller en Englewood, Colorado"
},
} as const;

export function warrantyCopy(lang: Lang) {
  if (lang === 'en') {
    return {
      ...WARRANTY_COPY.en,
      process: {
        ...WARRANTY_COPY.en.process,
        steps: WARRANTY_CLAIM_PROCESS.map((s) => ({
          step: s.step,
          title: s.title,
          description: s.description,
        })),
      },
      faq: {
        ...WARRANTY_COPY.en.faq,
        items: WARRANTY_PAGE_FAQ as FAQItem[],
      },
    };
  }
  return {
    ...WARRANTY_COPY.es,
    process: {
      ...WARRANTY_COPY.es.process,
      steps: WARRANTY_COPY.es.process.steps,
    },
    faq: {
      ...WARRANTY_COPY.es.faq,
      items: [...WARRANTY_COPY.es.faq.items] as FAQItem[],
    },
  };
}

export function warrantyProviderIntro(lang: Lang, totalProviders: number, verifiedCount: number) {
  const c = warrantyCopy(lang).providerIndex;
  if (lang === 'en') {
    return `${totalProviders} ${c.introBefore} ${verifiedCount} ${c.introAfter}`;
  }
  return `${totalProviders} ${c.introBefore} ${verifiedCount} ${c.introAfter}`;
}

export function warrantyCtaBody(lang: Lang) {
  const c = warrantyCopy(lang).cta;
  return `${c.bodyBefore} ${BUSINESS.address.full}. ${c.bodyAfter} ${LABOR_RATE}.`;
}
