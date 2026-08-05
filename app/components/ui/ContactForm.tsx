'use client';

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import Script from 'next/script';
import { useGSAP } from '@gsap/react';
import { CheckCircle } from 'lucide-react';
import { ensureScrollTrigger, gsap } from '@/lib/gsap';
import Link from 'next/link';
import {
  BUSINESS,
  SERVICES,
  TALLY_CONTACT_FORM_ID,
  TALLY_CONTACT_FORM_ID_ES,
  TALLY_CONTACT_FORM_URL,
} from '@/lib/constants';
import PhoneLink from '@/app/components/ui/PhoneLink';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';
import { trackAnalyticsEvent } from '@/lib/analytics';
import {
  persistSelectedService,
  readPersistedSelectedService,
  servicePageSlugFromKey,
} from '@/lib/serviceDurations';

const CONTACT_SERVICE_CHANGE = 'rkc-contact-service-change';
const TALLY_FORM_ID_RE = /^[a-zA-Z0-9]{4,32}$/;

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

function subscribeContactService(onStoreChange: () => void) {
  window.addEventListener(CONTACT_SERVICE_CHANGE, onStoreChange);
  window.addEventListener('storage', onStoreChange);
  return () => {
    window.removeEventListener(CONTACT_SERVICE_CHANGE, onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function resolveContactServiceSlug(): string {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get('service');
  if (fromQuery) {
    const slug =
      SERVICES.find((s) => s.slug === fromQuery)?.slug ??
      servicePageSlugFromKey(fromQuery) ??
      SERVICES.find((s) => s.name.toLowerCase() === fromQuery.toLowerCase())?.slug;
    if (slug) {
      persistSelectedService(slug);
      return slug;
    }
    persistSelectedService(fromQuery);
  }

  return servicePageSlugFromKey(readPersistedSelectedService()) ?? '';
}

function resolveContactVehicle(): string {
  return new URLSearchParams(window.location.search).get('vehicle')?.trim() || '';
}

function isTallyFormSubmittedMessage(data: unknown): boolean {
  if (typeof data === 'string') return data.includes('Tally.FormSubmitted');
  if (data && typeof data === 'object' && 'event' in data) {
    return (data as { event?: unknown }).event === 'Tally.FormSubmitted';
  }
  return false;
}

function buildTallyEmbedSrc(formId: string, prefill: Record<string, string>) {
  const url = new URL(`https://tally.so/embed/${formId}`);
  url.searchParams.set('alignLeft', '1');
  url.searchParams.set('hideTitle', '1');
  url.searchParams.set('transparentBackground', '1');
  url.searchParams.set('dynamicHeight', '1');
  for (const [key, value] of Object.entries(prefill)) {
    if (value) url.searchParams.set(key, value);
  }
  return url.toString();
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const serviceSlug = useSyncExternalStore(
    subscribeContactService,
    resolveContactServiceSlug,
    () => '',
  );
  const vehicle = useSyncExternalStore(
    subscribeContactService,
    resolveContactVehicle,
    () => '',
  );
  const reduce = usePrefersReducedMotion();
  const shellRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const copy = siteCopy(lang).contactForm;

  const formId = lang === 'es' ? TALLY_CONTACT_FORM_ID_ES : TALLY_CONTACT_FORM_ID;
  const formConfigured = TALLY_FORM_ID_RE.test(formId);

  const serviceLabel =
    SERVICES.find((s) => s.slug === serviceSlug)?.name || serviceSlug || '';

  const embedSrc = useMemo(() => {
    if (!formConfigured) return '';
    return buildTallyEmbedSrc(formId, {
      vehicle,
      // Prefill works when the Tally field key matches; label matches the published dropdown.
      service: serviceLabel,
      'Service needed': serviceLabel,
    });
  }, [formConfigured, formId, vehicle, serviceLabel]);

  useGSAP(
    () => {
      if (reduce || !shellRef.current) return;

      let cancelled = false;
      const ctx = gsap.context(() => {});

      void ensureScrollTrigger().then(() => {
        if (cancelled || !shellRef.current) return;

        ctx.add(() => {
          gsap.fromTo(
            shellRef.current,
            { opacity: 0, y: 20, willChange: 'transform, opacity' },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              immediateRender: false,
              scrollTrigger: {
                trigger: shellRef.current,
                start: 'top 90%',
                once: true,
              },
              onComplete: () => {
                if (shellRef.current) {
                  gsap.set(shellRef.current, { clearProps: 'willChange,opacity,transform' });
                }
              },
            },
          );
        });
      });

      return () => {
        cancelled = true;
        ctx.revert();
      };
    },
    { scope: shellRef, dependencies: [reduce] },
  );

  useGSAP(
    () => {
      if (reduce || !submitted || !successRef.current) return;
      gsap.from(successRef.current, { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' });
    },
    { scope: successRef, dependencies: [reduce, submitted] },
  );

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== 'https://tally.so') return;
      if (!isTallyFormSubmittedMessage(event.data)) return;

      if (serviceSlug) persistSelectedService(serviceSlug);

      trackAnalyticsEvent('generate_lead', {
        method: 'tally_form',
        service: serviceLabel || 'Not specified',
        page_path: window.location.pathname,
        value: 1,
        currency: 'USD',
      });
      trackAnalyticsEvent('contact_intent', {
        method: 'tally_form',
        page_path: window.location.pathname,
      });

      setSubmitted(true);
    }

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [serviceSlug, serviceLabel]);

  useEffect(() => {
    if (!embedSrc) return;
    window.Tally?.loadEmbeds();
  }, [embedSrc]);

  function loadTallyEmbeds() {
    window.Tally?.loadEmbeds();
  }

  if (submitted) {
    return (
      <div
        ref={successRef}
        lang={lang}
        className="rounded-3xl border border-[color:var(--line)] bg-white p-10 text-center shadow-xl"
      >
        <CheckCircle className="mx-auto size-12 text-primary-green" />
        <h3 className="mt-4 font-display text-4xl tracking-wide text-foreground">{copy.thankYou}</h3>
        <p className="mt-3 text-ink-muted">
          {copy.thankYouBody}{' '}
          <PhoneLink className="font-semibold text-primary-green hover:underline">
            {BUSINESS.phone}
          </PhoneLink>
          .
        </p>
      </div>
    );
  }

  return (
    <div
      ref={shellRef}
      lang={lang}
      className="space-y-5 rounded-3xl border border-white/40 bg-white/95 p-7 shadow-2xl backdrop-blur-md sm:p-9"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-green">{copy.eyebrow}</p>
        <h2 className="mt-2 font-display text-4xl tracking-wide text-foreground">{copy.title}</h2>
      </div>

      {formConfigured ? (
        <>
          <iframe
            key={embedSrc}
            data-tally-src={embedSrc}
            loading="lazy"
            width="100%"
            height={520}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title={copy.embedTitle}
            className="w-full border-0 bg-transparent"
          />
          <Script
            src="https://tally.so/widgets/embed.js"
            strategy="afterInteractive"
            onLoad={loadTallyEmbeds}
          />
        </>
      ) : (
        <div className="space-y-4 rounded-2xl border border-[color:var(--line)] bg-[var(--background)] p-5">
          <p className="text-sm text-ink-muted">{copy.missingForm}</p>
          <a
            href={TALLY_CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green inline-flex"
          >
            {copy.openForm}
          </a>
        </div>
      )}

      <p className="text-xs leading-relaxed text-ink-muted">
        {copy.privacy}{' '}
        <Link href="/privacy" className="font-semibold text-primary-green underline-offset-2 hover:underline">
          {copy.privacyLink}
        </Link>
        .
      </p>

      <p className="text-sm text-ink-muted">
        {copy.orCall}{' '}
        <PhoneLink className="font-semibold text-primary-green hover:underline">
          {BUSINESS.phone}
        </PhoneLink>{' '}
        {copy.forScheduling}
      </p>
    </div>
  );
}
