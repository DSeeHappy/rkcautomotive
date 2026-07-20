'use client';

import { useLanguage } from '@/lib/language';
import { geoCiteCopy } from '@/lib/geoCiteCopy';

/**
 * Answer-first, verifiable shop facts for Bing GEO / AI citations.
 * data-snippet marks text Bing may cite; visible to users (no cloaking).
 */
export default function GeoCiteFacts({ className = '' }: { className?: string }) {
  const { lang } = useLanguage();
  const c = geoCiteCopy(lang);

  return (
    <section
      className={`border-y border-black/5 bg-[#f4f7f5] py-10 sm:py-12 ${className}`}
      aria-label={lang === 'es' ? 'Datos del taller' : 'Shop facts'}
    >
      <div className="wrap">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
          {lang === 'es' ? 'Hechos verificables' : 'Verifiable facts'}
        </p>
        <p data-snippet className="mt-3 max-w-3xl text-lg font-medium text-[#0c1222] sm:text-xl">
          {c.shopOneLiner}
        </p>
        <ul className="mt-6 grid gap-3 text-sm text-[#0c1222]/80 sm:grid-cols-2 sm:text-base">
          <li data-snippet>{c.napFact}</li>
          <li data-snippet>{c.hoursFact}</li>
          <li data-snippet>{c.laborRateFact}</li>
          <li data-snippet>{c.languagesFact}</li>
          <li data-snippet>{c.sameDayFact}</li>
          <li data-snippet>{c.estimateFact}</li>
        </ul>
        <p data-snippet className="mt-6 max-w-3xl text-sm text-[#0c1222]/70">
          {c.citationBlurb}
        </p>
      </div>
    </section>
  );
}
