/**
 * City-page FAQ chrome (EN questions + ES questions/answer templates) for the
 * SEO-audit city FAQ item. Answers reuse existing verified copy (areaBodies
 * directions, BUSINESS hours/address, geoCiteCopy languagesFact); only the
 * question phrasing and two answer templates are generated here.
 * Fail-closed Bifrost Spark (vllm/smart), tiny calls (network resets big ones).
 * Output reviewed before hard-coding into lib/i18n/areaCopy.ts.
 */
import { sparkCall } from './lib/sparkClient.mjs';

function ask(label, system, user) {
  for (let attempt = 1; attempt <= 5; attempt++) {
    const r = sparkCall({
      model: 'vllm/smart',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      max_tokens: 80,
      temperature: 0.2,
      timeoutSec: 45,
      label,
    });
    if (r.ok && r.content.trim()) {
      console.error(`[${label}] ok routing=${r.telemetry.routingKey} attempt=${attempt}`);
      return r.content.trim().replace(/^["'`]+|["'`]+$/g, '');
    }
    console.error(`[${label}] attempt ${attempt} failed: ${r.error}`);
  }
  console.error(`FATAL: ${label}`);
  process.exit(1);
}

const EN_SYS =
  'Write one short natural US-English FAQ question for an auto repair shop city page. Use the literal placeholder {city} where the city name goes. Return only the question.';
const ES_SYS =
  'Escribe una pregunta corta y natural de FAQ en español (usted) para la página de una ciudad de un taller mecánico. Usa el marcador literal {city} donde va el nombre de la ciudad. Devuelve solo la pregunta.';

const out = {
  en: {
    qDirections: ask('faq-en-q-directions', EN_SYS, 'Topic: how to get to RKC Automotive (in Englewood) from {city}.'),
    qDistance: ask('faq-en-q-distance', EN_SYS, 'Topic: how far RKC Automotive is from {city}.'),
    qHours: ask('faq-en-q-hours', EN_SYS, "Topic: RKC Automotive's business hours. No {city} placeholder needed."),
    qSpanish: ask('faq-en-q-spanish', EN_SYS, 'Topic: whether RKC Automotive has Spanish-speaking staff. No {city} placeholder needed.'),
    aDistance: ask(
      'faq-en-a-distance',
      'Write one short factual sentence answering how far the shop is. Use literal placeholders {address}, {distance}, {city}. Facts: the shop is RKC Automotive at {address}; it is {distance} from {city}. No other claims. Return only the sentence.',
      'Write the answer template.',
    ),
  },
  es: {
    qDirections: ask('faq-es-q-directions', ES_SYS, 'Tema: cómo llegar a RKC Automotive (en Englewood) desde {city}.'),
    qDistance: ask('faq-es-q-distance', ES_SYS, 'Tema: a qué distancia está RKC Automotive de {city}.'),
    qHours: ask('faq-es-q-hours', ES_SYS, 'Tema: el horario de RKC Automotive. No se necesita {city}.'),
    qSpanish: ask('faq-es-q-spanish', ES_SYS, 'Tema: si RKC Automotive tiene personal que habla español. No se necesita {city}.'),
    aDistance: ask(
      'faq-es-a-distance',
      'Escribe una oración corta y factual (usted) que responda a qué distancia está el taller. Usa marcadores literales {address}, {distance}, {city}. Hechos: el taller es RKC Automotive en {address}; está a {distance} de {city}. Sin otras afirmaciones. Devuelve solo la oración.',
      'Escribe la plantilla de respuesta.',
    ),
    aHours: ask(
      'faq-es-a-hours',
      'Traduce al español (usted) esta respuesta de horario, manteniendo días y horas exactos: "We are open Monday through Friday 8:00 AM to 6:00 PM and Saturday 8:00 AM to 12:00 PM; we are closed Sunday." Devuelve solo la oración.',
      'Traduce.',
    ),
  },
};

console.log(JSON.stringify(out, null, 2));
