'use client';

import Image from 'next/image';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS, GOOGLE_REVIEWS_URL, PHOTOS } from '@/lib/constants';
import ContactForm from '@/app/components/ui/ContactForm';
import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
import SocialLinks from '@/app/components/ui/SocialLinks';
import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';

export default function ContactPageChrome() {
  const { lang } = useLanguage();
  const copy = siteCopy(lang);
  const shell = copy.shells.contact;
  const hours = copy.footer.hours;

  const details = [
    {
      icon: Phone,
      label: shell.details.phone.label,
      value: BUSINESS.phone,
      href: BUSINESS.phoneHref,
      note: shell.details.phone.note,
    },
    {
      icon: MapPin,
      label: shell.details.address.label,
      value: BUSINESS.address.full,
      href: BUSINESS.directionsUrl,
      note: shell.details.address.note,
      external: true,
    },
    {
      icon: Clock,
      label: shell.details.hours.label,
      value: `${hours.weekdays} · ${hours.saturday}`,
      note: hours.sunday,
    },
    {
      icon: Mail,
      label: shell.details.email.label,
      value: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
      note: shell.details.email.note,
    },
  ];

  return (
    <section lang={lang} className="relative min-h-[100svh] lg:grid lg:grid-cols-2">
      <div className="relative flex min-h-[52svh] flex-col justify-end lg:min-h-full">
        <Image
          src={PHOTOS.exterior}
          alt="RKC Automotive shop exterior on W Evans Ave"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="photo-veil absolute inset-0" />
        <div className="relative z-10 flex flex-col p-8 pt-24 sm:p-12 sm:pt-28 lg:p-16 lg:pt-32">
          <Breadcrumbs
            items={[
              { label: shell.home, href: '/' },
              { label: shell.crumb },
            ]}
            className="mb-6"
            variant="light"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">{shell.eyebrow}</p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl">
            {shell.title}
          </h1>
          <p className="mt-4 max-w-md text-lg text-white/80">{shell.description}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-primary-green-light">
                  <d.icon className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">{d.label}</span>
                </div>
                {d.href ? (
                  <a
                    href={d.href}
                    target={d.external ? '_blank' : undefined}
                    rel={d.external ? 'noopener noreferrer' : undefined}
                    className="mt-2 block text-sm font-semibold text-white hover:text-primary-green-light"
                  >
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-semibold text-white">{d.value}</p>
                )}
                <p className="mt-1 text-xs text-white/55">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center bg-[var(--background)] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto w-full max-w-lg">
          <ContactForm />
          <div className="mt-10 border-t border-[color:var(--line)] pt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
              {shell.connect}
            </p>
            <SocialLinks />
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green mt-6 w-full justify-center"
            >
              {lang === 'es' ? 'Dejar reseña en Google' : 'Leave a Google review'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
