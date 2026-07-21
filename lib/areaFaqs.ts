/**
 * City-page FAQs assembled strictly from existing verified data:
 * - directions: lib/i18n/areaBodies.ts (existing published copy, EN/ES)
 * - distance/address: lib/serviceAreas.ts distanceFromShop + BUSINESS.address
 * - hours + Spanish-service answers: lib/geoCiteCopy.ts (existing verified facts)
 * Question chrome + distance templates generated via Bifrost Spark vllm/smart
 * (labels "faq-en-..." and "faq-es-..." in scripts/.spark-logs/TELEMETRY_LEDGER.jsonl,
 * script scripts/spark-area-faq-chrome.mjs) and human-reviewed. No invented facts.
 */
import { BUSINESS, type FAQItem } from '@/lib/constants';
import { geoCiteCopy } from '@/lib/geoCiteCopy';
import { areaBodyCopy } from '@/lib/i18n/areaBodies';
import type { Lang } from '@/lib/language';
import type { ServiceArea } from '@/lib/serviceAreas';

const FAQ_CHROME = {
  en: {
    qDirections: (city: string) => `How do I get to RKC Automotive in Englewood from ${city}?`,
    qDistance: (city: string) => `How far is RKC Automotive from ${city}?`,
    aDistance: (city: string, distance: string) =>
      `RKC Automotive is located at ${BUSINESS.address.full} and is ${distance} from ${city}.`,
    qHours: "What are RKC Automotive's business hours?",
    qSpanish: 'Does RKC Automotive have Spanish-speaking staff?',
  },
  es: {
    qDirections: (city: string) => `¿Cómo puedo llegar a RKC Automotive en Englewood desde ${city}?`,
    qDistance: (city: string) => `¿A qué distancia está RKC Automotive de ${city}?`,
    aDistance: (city: string, distance: string) =>
      `El taller RKC Automotive está a ${distance} de ${city}, en ${BUSINESS.address.full}.`,
    qHours: '¿Cuál es el horario de atención de RKC Automotive?',
    qSpanish: '¿Tiene personal que habla español en RKC Automotive?',
  },
} as const;

export function getAreaFaqs(slug: string, area: ServiceArea, lang: Lang): FAQItem[] {
  const chrome = FAQ_CHROME[lang];
  const geo = geoCiteCopy(lang);
  const directions = areaBodyCopy(slug, lang)?.directions ?? area.directions;

  const faqs: FAQItem[] = [
    { question: chrome.qDirections(area.name), answer: directions },
  ];

  // Englewood is the shop's own city ('0 miles — shop location') — a distance
  // Q&A would read awkwardly and adds nothing, so it is omitted there.
  if (slug !== 'englewood-co') {
    faqs.push({
      question: chrome.qDistance(area.name),
      answer: chrome.aDistance(area.name, area.distanceFromShop),
    });
  }

  faqs.push(
    { question: chrome.qHours, answer: geo.hoursFact },
    { question: chrome.qSpanish, answer: geo.languagesFact },
  );

  return faqs;
}
