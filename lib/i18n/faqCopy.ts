import type { Lang } from '@/lib/language';
import type { FAQItem } from '@/lib/constants';

export const FAQ_COPY = {
  en: {
    cta: {
      title: 'Still have questions?',
      body: 'Call our Englewood shop — we are happy to walk you through pricing, timing, and what to expect.',
    },
  },
  es: {
    cta: {
      title: '¿Todavía tiene preguntas?',
      body: 'Llame a nuestro taller en Englewood — con gusto le explicamos precios, tiempos y qué esperar.',
    },
  },
} as const;

/** Spanish FAQ categories — mirrors FAQ_CATEGORIES in constants.ts */
export const FAQ_CATEGORIES_ES: { title: string; items: FAQItem[] }[] = [
  {
    title: 'General',
    items: [
      {
        question: '¿Ofrecen servicio el mismo día en Englewood?',
        answer:
          '¡Sí! Ofrecemos servicio el mismo día para muchas reparaciones y mantenimientos. Llámenos al (720) 749-3965 antes de las 2 PM e haremos lo posible por atenderlo el mismo día. Algunas reparaciones complejas pueden requerir servicio de un día para otro según disponibilidad de piezas y tiempo de diagnóstico.',
      },
      {
        question: '¿Dan presupuestos por escrito antes de empezar el trabajo?',
        answer:
          'Por supuesto. Siempre damos presupuestos detallados por escrito antes de comenzar cualquier reparación. Sabrá exactamente qué hay que hacer y cuánto costará antes de empezar. Sin cargos sorpresa — nunca.',
      },
      {
        question: '¿Qué formas de pago aceptan?',
        answer:
          'Aceptamos efectivo, todas las tarjetas de crédito principales (Visa, Mastercard, Discover, American Express) y tarjetas de débito.',
      },
      {
        question: '¿Cuánto tardará mi reparación?',
        answer:
          'El tiempo depende del servicio que necesite y de lo que encontremos en la inspección. Elija un servicio en nuestro sitio o cuéntenos qué necesita al llamar — le daremos una ventana realista para su vehículo. Muchas visitas de mantenimiento terminan el mismo día; diagnósticos complejos o trabajos con pedido de piezas pueden tomar más. Llame al (720) 749-3965 para una estimación según su marca y modelo.',
      },
      {
        question: '¿Trabajan con todas las marcas y modelos?',
        answer:
          '¡Sí! Nuestros técnicos certificados ASE dan servicio a todas las marcas y modelos, nacionales y extranjeras. Desde Ford y Chevy hasta Toyota, Honda, BMW y Mercedes.',
      },
      {
        question: '¿Necesito cita o puedo llegar sin avisar?',
        answer:
          '¡Ambas! Se aceptan visitas sin cita, pero las citas tienen prioridad y un servicio más rápido. Llame al (720) 749-3965 para agendar.',
      },
    ],
  },
  {
    title: 'Precios y garantías',
    items: [
      {
        question: '¿Sus precios son competitivos frente a los concesionarios?',
        answer:
          'Nuestros precios suelen ser 20–40% menores que los de los concesionarios por el mismo nivel de servicio. Usamos piezas OEM y de posventa de calidad y empleamos técnicos certificados ASE.',
      },
      {
        question: '¿Ofrecen garantía en su trabajo?',
        answer:
          '¡Sí! Todas nuestras reparaciones incluyen garantía. Los términos varían según el servicio y las piezas — le explicamos la cobertura específica al darle el presupuesto.',
      },
      {
        question: '¿Por qué varían tanto los costos de reparación entre talleres?',
        answer:
          'Los precios varían según la calidad de las piezas, las tarifas de mano de obra, los costos fijos del taller y la experiencia del técnico. Equilibramos piezas de calidad, servicio experto y precios justos para el mejor valor general.',
      },
      {
        question: '¿Puedo traer mis propias piezas para que las instalen?',
        answer:
          'Preferimos suministrar las piezas nosotros para asegurar la calidad y ofrecer cobertura de garantía. Las piezas suministradas por el cliente a menudo carecen de protección de garantía.',
      },
    ],
  },
  {
    title: 'Mantenimiento',
    items: [
      {
        question: '¿Con qué frecuencia debo cambiar el aceite en Colorado?',
        answer:
          'El aceite convencional se cambia cada 3,000–5,000 millas. El sintético dura 7,500–10,000 millas. Las temperaturas extremas y la altitud de Colorado pueden estresar los motores, por eso recomendamos seguir el extremo inferior de las recomendaciones del fabricante.',
      },
      {
        question: '¿El servicio en un taller independiente anula mi garantía?',
        answer:
          'No. La ley federal (Magnuson-Moss Warranty Act) protege su derecho a dar servicio a su vehículo en talleres independientes sin anular la garantía.',
      },
      {
        question: '¿Qué mantenimiento necesita mi auto para los inviernos de Colorado?',
        answer:
          'Los servicios esenciales incluyen prueba de batería, revisión de refrigerante/anticongelante, inspección de llantas, cambio de limpiaparabrisas y revisión del sistema de calefacción.',
      },
      {
        question: '¿Cómo sé si realmente necesito el servicio que recomiendan?',
        answer:
          'Seguimos los calendarios de mantenimiento del fabricante y solo recomendamos lo que su vehículo realmente necesita. Le explicamos por qué y, cuando es posible, le mostramos el problema.',
      },
    ],
  },
  {
    title: 'Reparaciones',
    items: [
      {
        question: 'Se encendió la luz de check engine. ¿Puedo seguir manejando?',
        answer:
          'Una luz de check engine fija suele permitir manejar, pero programe el servicio pronto. Una luz intermitente indica un problema grave — deje de manejar de inmediato y llame para servicio.',
      },
      {
        question: '¿Cómo sé si necesito reparación de frenos?',
        answer:
          'Señales comunes: chirridos/ruidos de roce, pedal suave, el vehículo tira al frenar, vibración en el pedal y luz de freno en el tablero.',
      },
      {
        question: '¿Ofrecen servicios de diagnóstico?',
        answer:
          '¡Sí! Las tarifas de diagnóstico suelen ser de $100–$150 y a menudo se aplican a las reparaciones si elige hacer el trabajo en RKC Automotive.',
      },
      {
        question: '¿Pueden ayudarme a pasar la prueba de emisiones?',
        answer:
          'Por supuesto. Diagnosticamos y reparamos problemas relacionados con emisiones, incluidas luces de check engine, convertidores catalíticos, sensores de O2 y fugas de escape.',
      },
    ],
  },
  {
    title: 'Sobre nosotros',
    items: [
      {
        question: '¿Sus técnicos están certificados?',
        answer:
          '¡Sí! Nuestros técnicos están certificados ASE con años de experiencia en todas las marcas y modelos.',
      },
      {
        question: '¿Qué áreas atienden?',
        answer:
          'Estamos en Englewood en 2120 W Evans Ave y atendemos Englewood, Denver, Littleton, Sheridan, Greenwood Village y alrededores.',
      },
      {
        question: '¿Cuál es su horario?',
        answer:
          'Lunes a viernes de 8:00 AM a 6:00 PM y sábado de 8:00 AM a 12:00 PM. Cerrado los domingos.',
      },
      {
        question: '¿Tienen área de espera?',
        answer:
          'Sí, tenemos un área de espera cómoda. Para reparaciones más largas, muchos clientes prefieren dejar el vehículo y los llamamos cuando esté listo.',
      },
    ],
  },
];

export function faqCopy(lang: Lang) {
  return FAQ_COPY[lang];
}
