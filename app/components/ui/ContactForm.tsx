'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { CheckCircle, Send } from 'lucide-react';
import { ensureScrollTrigger, gsap } from '@/lib/gsap';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import PhoneLink from '@/app/components/ui/PhoneLink';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { useGsapHoverPress } from '@/lib/useGsapHoverPress';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduce = usePrefersReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const { ref: submitRef } = useGsapHoverPress<HTMLButtonElement>();

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
    const message = String(data.get('message') || '');

    const subject = encodeURIComponent(`Service Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nVehicle: ${vehicle}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        ref={successRef}
        className="rounded-3xl border border-[color:var(--line)] bg-white p-10 text-center shadow-xl"
      >
        <CheckCircle className="mx-auto size-12 text-primary-green" />
        <h3 className="mt-4 font-display text-4xl tracking-wide text-foreground">Thank you</h3>
        <p className="mt-3 text-ink-muted">
          Your email client should open shortly. Prefer to talk? Call{' '}
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
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-white/40 bg-white/95 p-7 shadow-2xl backdrop-blur-md sm:p-9"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-green">Message the bay</p>
        <h2 className="mt-2 font-display text-4xl tracking-wide text-foreground">Tell us what&apos;s going on</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
            Full name *
          </label>
          <input id="name" name="name" required className="field" placeholder="Jordan Smith" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">
            Phone *
          </label>
          <input id="phone" name="phone" type="tel" required className="field" placeholder="(720) 555-0123" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" className="field" placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="vehicle" className="mb-2 block text-sm font-semibold text-foreground">
            Vehicle
          </label>
          <input id="vehicle" name="vehicle" className="field" placeholder="2018 Toyota Camry" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="field resize-none"
          placeholder="Describe the issue, warning lights, or service you need…"
        />
      </div>

      <button ref={submitRef} type="submit" className="btn-green w-full sm:w-auto">
        <Send className="size-4" />
        Send message
      </button>

      <p className="text-xs leading-relaxed text-ink-muted">
        By sending this message, you agree that RKC Automotive may use your contact details to
        respond to your request. See our{' '}
        <Link href="/privacy" className="font-semibold text-primary-green underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <p className="text-sm text-ink-muted">
        Or call{' '}
        <PhoneLink className="font-semibold text-primary-green hover:underline">
          {BUSINESS.phone}
        </PhoneLink>{' '}
        for same-day scheduling.
      </p>
    </form>
  );
}
