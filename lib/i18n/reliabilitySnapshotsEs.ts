import type { Lang } from '@/lib/language';
import type { ModelReliabilitySnapshot } from '@/lib/modelReliabilityNotes';

/** Reliability hub snapshots — ES via Bifrost ds. */
export const RELIABILITY_SNAPSHOTS_ES: Record<string, Omit<ModelReliabilitySnapshot, 'id'>> = {
  "toyota-rav4": {
    "intro": "El Toyota RAV4 es el crossover predeterminado de Colorado: las versiones con tracción AWD, híbridas y de gasolina llegan a RKC con diferentes calendarios de fallas. Separamos las preocupaciones de la época de la correa de distribución del motor 2AZ-FE de las plataformas con cadena de 2013 en adelante y del refrigerante del inversor híbrido antes de cotizar el servicio.",
    "bullets": [
      {
        "label": "Problemas comunes",
        "text": "Diferencial trasero y árbol de transmisión: gemido en giros cerrados, vacilación al arranque en frío del motor D-4S, consumo de aceite del motor 2AZ-FE en modelos 2006–2012, y vibración de la transmisión sellada WS después de remolcar por montañas."
      },
      {
        "label": "Ángulo Colorado",
        "text": "Las bajadas por la I-70 esmaltan los embragues del convertidor de par cuando el fluido WS nunca se cambia. Los RAV4 híbridos necesitan pruebas de carga del refrigerante del inversor y de la batería de 12V antes de la primera mañana bajo cero en la Federal Blvd."
      },
      {
        "label": "Notas de servicio",
        "text": "RKC documenta la plataforma de correa vs. cadena por VIN, realiza pruebas de carga a las baterías según su CCA nominal y da servicio al fluido del diferencial trasero antes de la temporada de esquí, no solo cambios de aceite."
      }
    ],
    "faqs": [
      {
        "question": "¿Mi RAV4 necesita servicio de correa o cadena de distribución?",
        "answer": "Los RAV4 de gasolina de 2006 a 2012 con motor 2AZ-FE utilizan una correa de distribución y bomba de agua; las correas vencidas en este motor de interferencia pueden causar daños a las válvulas. Los RAV4 de gasolina e híbridos de 2013 en adelante utilizan cadenas de distribución que se inspeccionan para detectar elongación a altos kilómetros. Traiga su VIN a RKC y confirmaremos la plataforma antes de cotizar."
      },
      {
        "question": "¿Por qué mi RAV4 hace un sonido de gemido en los estacionamientos?",
        "answer": "La degradación del acoplamiento AWD y del fluido del diferencial trasero provoca un gemido en las curvas cerradas, algo común después de un invierno con fluido descuidado. El cambio de aceite de engranajes de especificación Toyota y la inspección del acoplamiento en nuestro taller de Englewood cuestan mucho menos que la reparación por bloqueo tras la desconexión del árbol de transmisión."
      }
    ]
  },
  "toyota-4runner": {
    "intro": "Los 4Runners están diseñados para los senderos de Colorado y el uso diario en la interestatal 25, pero el mismo eje trasero sólido y la transmisión automática sellada que resisten en Moab también ocultan fluido del caso de transferencia diferido y filtraciones en la tapa del árbol de levas en camiones con motor V6 de 4.0L. En RKC tratamos cada 4Runner como una plataforma para remolque y senderos, no como un sedán con mayor altura de rodadura.",
    "bullets": [
      {
        "label": "Problemas comunes",
        "text": "Filtración de aceite en la tapa de distribución del motor 4.0L 1GR-FE, pérdida de presión hidráulica en el sistema KDSS en versiones TRD Off-Road, ruido de molienda en el actuador del cubo delantero al activar la tracción 4WD, y arrastre del freno de estacionamiento de tambor a disco en los camiones de quinta generación más antiguos."
      },
      {
        "label": "Ángulo Colorado",
        "text": "El desgaste de la suspensión en caminos de tierra acelera el desgaste de las rótulas y las barras de dirección; el fluido de la caja de transferencia se endurece tras múltiples viajes por el Paso Loveland. Los acumuladores del KDSS fallan más rápido cuando las camionetas se quedan con la parte delantera elevada en entradas empinadas."
      },
      {
        "label": "Notas de servicio",
        "text": "Las inspecciones previas al viaje cubren el cableado del enganche, el fluido del diferencial trasero y la función del actuador de tracción en las cuatro ruedas. RKC alinea los 4Runners elevados según las especificaciones de altura de rodadura modificadas, no los valores predeterminados para sedanes."
      }
    ],
    "faqs": [
      {
        "question": "¿Con qué frecuencia se debe cambiar el fluido de la caja de transferencia del 4Runner?",
        "answer": "Toyota etiqueta muchos casos de transferencia del 4Runner como \"sellados\", pero el uso en Colorado para remolcar y la tracción 4WD se consideran condiciones de servicio severo. RKC recomienda una inspección cada 30,000 millas y un cambio de fluido cuando el color huela a quemado o aparezca un retraso en el cambio — especialmente antes de arrastrar campers por la I-70."
      },
      {
        "question": "¿Qué es KDSS y cuándo falla?",
        "answer": "El Sistema de Suspensión Dinámica Cinética (KDSS) utiliza acumuladores hidráulicos para reducir el balanceo del vehículo fuera de carretera. Los acumuladores con fugas provocan una inclinación persistente, golpes al pasar por baches y un desgaste irregular de los neumáticos. RKC diagnostica el KDSS mediante mediciones de la altura de conducción antes de recomendar el servicio de los acumuladores o de la barra estabilizadora."
      }
    ]
  },
  "toyota-highlander": {
    "intro": "Los Highlander transportan a las familias de Denver y su equipaje de tercera fila; las plataformas de motor V6 3.5L 2GR-FE, híbridas y las más antiguas de cuatro cilindros 2.4L requieren diferentes tipos de visitas al taller. RKC se especializa en problemas de filtración en la tapa del distribuidor, acumulación de carbono en el sistema D-4S y quejas sobre el sistema HVAC de la tercera fila, que los concesionarios suelen etiquetar erróneamente como “desgaste normal”. ",
    "bullets": [
      {
        "label": "Problemas comunes",
        "text": "Fuga de aceite de la tapa de la cadena de distribución del lado del pasajero en el motor 2GR-FE, desequilibrio en los inyectores de puerto D-4S que causa tirones en frío, actuadores de la puerta de mezcla del HVAC trasero haciendo clic, y gemido del sistema de tracción integral AWD con vectorización dinámica de torque en modelos 2014 y posteriores."
      },
      {
        "label": "Ángulo Colorado",
        "text": "A 5,280 pies de altitud, la calefacción de la tercera fila exige más esfuerzo; las puertas de mezcla débiles dejan fríos a los pasajeros traseros en los trayectos por la carretera C-470. Los Toyota Highlander híbridos requieren que el refrigerante del inversor sea independiente del refrigerante del motor antes del invierno."
      },
      {
        "label": "Notas de servicio",
        "text": "RKC inspecciona el carbono D-4S cuando aparece la vacilación al arranque en frío, realiza pruebas de presión en los sistemas de refrigeración durante trabajos de la tapa de distribución 2GR-FE y da servicio al fluido del diferencial trasero en las versiones AWD antes de la temporada de remolque en montaña."
      }
    ],
    "faqs": [
      {
        "question": "¿Vale la pena reparar la filtración de la tapa de distribución del Highlander?",
        "answer": "Un goteo lento en la tapa de distribución del motor 2GR-FE puede contaminar las correas, oler a quemado en los semáforos y gotear sobre los protectores del escape. En RKC medimos la tasa de goteo y el consumo de aceite; las fugas activas en vehículos de uso diario valen la pena repararlas antes de que afecten el alternador y el arnés de encendido ubicados debajo de la tapa."
      },
      {
        "question": "¿Por qué el calor de la tercera fila es débil en invierno?",
        "answer": "Los actuadores de la puerta de mezcla trasera y las líneas auxiliares del sistema HVAC fallan de forma independiente del calor frontal. RKC prueba el comando del actuador con datos de escáner y verifica el flujo de refrigerante hacia el núcleo del calefactor trasero, no solo el reemplazo del termostato en el motor."
      }
    ]
  },
  "toyota-camry": {
    "intro": "Los sedanes Camry dominan las vías de tránsito de Englewood: los motores 2.5L Dynamic Force, los 2.4L 2AZ-FE más antiguos y las versiones híbridas de Camry requieren cálculos de mantenimiento distintos. En RKC seguimos el consumo de aceite según la época del motor, los intervalos de fluido para transmisiones CVT y automáticas, y el refrigerante del inversor híbrido, separado del servicio del motor.",
    "bullets": [
      {
        "label": "Problemas comunes",
        "text": "Consumo de aceite y acumulación de carbono en los anillos del pistón del motor 2AZ-FE, cambios bruscos de 2ª a 3ª marcha en la transmisión automática de 8 velocidades UA80E cuando el fluido se degrada, negligencia en el refrigerante del inversor híbrido y zumbido de los cojinetes de las ruedas traseras confundido con ruido de neumáticos en vehículos de 2012 a 2017."
      },
      {
        "label": "Ángulo Colorado",
        "text": "Los desplazamientos cortos por la Federal Blvd nunca calientan los motores 2AZ-FE, lo que acelera el consumo de aceite. Las transmisiones de 8 velocidades de 2018 en adelante buscan cambios de marcha en las fusiones cuesta arriba de la I-25 cuando el fluido WS está vencido."
      },
      {
        "label": "Notas de servicio",
        "text": "RKC utiliza pruebas de consumo de aceite en plataformas 2AZ-FE, analiza la acumulación de carbono por inyección directa cuando aparece el tambaleo en frío y documenta el color del líquido refrigerante del inversor híbrido antes de cotizar el trabajo de enfriamiento exclusivo del motor."
      }
    ],
    "faqs": [
      {
        "question": "¿Qué motores del Camry tienen problemas de consumo de aceite?",
        "answer": "Los Camry 2007–2011 con motor 2.4L 2AZ-FE son notorios por la acumulación de carbono en los surcos de los anillos y por consumir un cuarto de litro cada 1,000 millas. En RKC medimos el consumo de aceite en un recorrido de 1,000 millas y evaluamos la eficiencia del catalizador antes de recomendar el servicio de anillos o la sustitución del motor."
      },
      {
        "question": "¿Mi Camry 2018+ necesita servicio de fluido de transmisión?",
        "answer": "Sí: el fluido Toyota WS en la transmisión automática de 8 velocidades se degrada en las condiciones de tráfico intermitente y las pendientes montañosas de Colorado, incluso cuando se etiqueta como \"de por vida\". RKC recomienda inspeccionar el fluido cerca de los 60,000 millas y realizar el cambio cuando el color sea oscuro o las 2-3 primeras cambios de marcha se sientan bruscos."
      }
    ]
  },
  "toyota-corolla": {
    "intro": "Los Corolla que se usan para ir al trabajo acumulan kilómetros en los motores Dynamic Force de 1.8L y 2.0L; son confiables hasta que la dilución del aceite por viajes cortos, el temblor de la CVT o el fluido de frenos descuidado convierten un servicio de $200 en una reparación de $2,000. En RKC tratamos a los Corolla como vehículos de uso diario con muchos kilómetros, no como devoluciones de leasing desechables.",
    "bullets": [
      {
        "label": "Problemas comunes",
        "text": "Temblor y retraso en el lanzamiento del CVT K313 cuando el fluido se sobrecalienta, consumo de aceite del motor 2ZR-FE en vehículos de 2009 a 2013 con alto kilometraje, corrosión en los frenos de tambor traseros en las versiones base y fallos en los sensores TPMS después de los cambios de llantas."
      },
      {
        "label": "Ángulo Colorado",
        "text": "El fluido de la CVT se calienta más en las pendientes sostenidas de la interestatal 25; el temblor a 35 mph a menudo se debe al fluido Toyota CVT-FE degradado, no a una «sensación normal de la CVT». La sal de las carreteras en invierno acelera el agarrotamiento de los mecanismos de los tampones traseros en los sedanes más antiguos."
      },
      {
        "label": "Notas de servicio",
        "text": "RKC cambia el fluido de la transmisión CVT con CVT-FE especificado por Toyota, realiza pruebas de carga a las baterías antes del invierno e inspecciona los frenos traseros en busca de rebabas por óxido, un problema común en vehículos que solo circulan por estacionamientos de centros comerciales."
      }
    ],
    "faqs": [
      {
        "question": "¿Debo cambiar el fluido de la transmisión CVT del Corolla?",
        "answer": "Toyota denomina al fluido CVT como \"de por vida\", pero el calor de Colorado y las pendientes montañosas degradan el fluido CVT-FE. RKC recomienda una inspección cerca de las 60,000 millas y un cambio cuando aparezcan vibraciones al arrancar, silbidos o un acoplamiento retrasado, especialmente en los Corolla CVT de 2014 en adelante."
      },
      {
        "question": "¿Por qué mi Corolla consume aceite entre cambios?",
        "answer": "Los motores 2ZR-FE con alto kilometraje pueden desarrollar depósitos de carbono en los anillos, similar a los motores más grandes 2AZ-FE. RKC mide la tasa de consumo y verifica el funcionamiento del sistema PCV antes de recomendar el servicio de los anillos de pistón. Los desplazamientos cortos en Englewood empeoran el consumo cuando el motor rara vez alcanza su temperatura de operación completa."
      }
    ]
  }
};

export function localizeReliabilitySnapshot(
  snap: ModelReliabilitySnapshot,
  lang: Lang,
): ModelReliabilitySnapshot {
  if (lang !== 'es') return snap;
  const es = RELIABILITY_SNAPSHOTS_ES[snap.id];
  if (!es) return snap;
  return { id: snap.id, ...es };
}
