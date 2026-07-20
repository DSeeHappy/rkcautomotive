'use client';

import { useRef, useState, useSyncExternalStore } from 'react';
import { useGSAP } from '@gsap/react';
import { CheckCircle, Send } from 'lucide-react';
import { ensureScrollTrigger, gsap } from '@/lib/gsap';
import Link from 'next/link';
import { BUSINESS, SERVICES } from '@/lib/constants';
import PhoneLink from '@/app/components/ui/PhoneLink';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { useGsapHoverPress } from '@/lib/useGsapHoverPress';
import { useLanguage } from '@/lib/language';
import { localizedServiceName, siteCopy } from '@/lib/siteCopy';
import {
  persistSelectedService,
  readPersistedSelectedService,
  servicePageSlugFromKey,
} from '@/lib/serviceDurations';

const CONTACT_SERVICE_CHANGE = 'rkc-contact-service-change';

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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const serviceSlug = useSyncExternalStore(
    subscribeContactService,
    resolveContactServiceSlug,
    () => '',
  );
  const reduce = usePrefersReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const { ref: submitRef } = useGsapHoverPress<HTMLButtonElement>();
  const { lang } = useLanguage();
  const copy = siteCopy(lang).contactForm;

  function updateServiceSlug(value: string) {
    persistSelectedService(value || null);
    window.dispatchEvent(new Event(CONTACT_SERVICE_CHANGE));
  }

  useGSAP(
    () => {
      if (reduce || !formRef.current) return;

      let cancelled = false;
      const ctx = gsap.context(() => {});

      void ensureScrollTrigger().then(() => {
        if (cancelled || !formRef.current) return;

        ctx.add(() => {
          gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 20, willChange: 'transform, opacity' },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              immediateRender: false,
              scrollTrigger: {
                trigger: formRef.current,
                start: 'top 90%',
                once: true,
              },
              onComplete: () => {
                if (formRef.current) gsap.set(formRef.current, { clearProps: 'willChange,opacity,transform' });
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
    { scope: formRef, dependencies: [reduce] },
  );

  useGSAP(
    () => {
      if (reduce || !submitted || !successRef.current) return;
      gsap.from(successRef.current, { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' });
    },
    { scope: successRef, dependencies: [reduce, submitted] },
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const phone = String(data.get('phone') || '');
    const email = String(data.get('email') || '');
    const vehicle = String(data.get('vehicle') || '');
    const service = String(data.get('service') || '');
    const message = String(data.get('message') || '');
    const serviceLabel =
      SERVICES.find((s) => s.slug === service)?.name || service || 'Not specified';

    if (service) persistSelectedService(service);

    const subject = encodeURIComponent(`Service Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nVehicle: ${vehicle}\nService: ${serviceLabel}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
    <form
      ref={formRef}
      lang={lang}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-white/40 bg-white/95 p-7 shadow-2xl backdrop-blur-md sm:p-9"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-green">{copy.eyebrow}</p>
        <h2 className="mt-2 font-display text-4xl tracking-wide text-foreground">{copy.title}</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
            {copy.name}
          </label>
          <input id="name" name="name" required className="field" placeholder="Jordan Smith" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">
            {copy.phone}
          </label>
          <input id="phone" name="phone" type="tel" required className="field" placeholder="(720) 555-0123" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
            {copy.email}
          </label>
          <input id="email" name="email" type="email" className="field" placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="vehicle" className="mb-2 block text-sm font-semibold text-foreground">
            {copy.vehicle}
          </label>
          <input id="vehicle" name="vehicle" className="field" placeholder="2018 Toyota Camry" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-semibold text-foreground">
          {copy.service}
        </label>
        <select
          id="service"
          name="service"
          className="field"
          value={serviceSlug}
          onChange={(e) => updateServiceSlug(e.target.value)}
        >
          <option value="">{copy.notSure}</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.slug}>
              {localizedServiceName(service.slug, lang, service.name)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
          {copy.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="field resize-none"
          placeholder={copy.messagePlaceholder}
        />
      </div>

      <button ref={submitRef} type="submit" className="btn-green w-full sm:w-auto">
        <Send className="size-4" />
        {copy.send}
      </button>

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
    </form>
  );
}
