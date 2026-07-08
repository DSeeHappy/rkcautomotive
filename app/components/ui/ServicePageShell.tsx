'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone } from 'lucide-react';
import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS, PHOTOS, SERVICES, type ServiceItem } from '@/lib/constants';
import PageHero from './PageHero';
import FadeIn from './FadeIn';

export type ServicePageShellProps = {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  breadcrumbLabel?: string;
  quickAnswer?: string;
  schemaJson?: object;
  relatedServices?: ServiceItem[] | { name: string; href: string }[];
  children: ReactNode;
  phoneCta?: string;
  imageSrc?: string;
  highlights?: string[];
};

export default function ServicePageShell({
  title,
  description,
  breadcrumbs: breadcrumbsProp,
  breadcrumbLabel,
  quickAnswer,
  schemaJson,
  relatedServices,
  children,
  phoneCta,
  imageSrc = PHOTOS.undercarriage,
  highlights = [
    'ASE-certified technicians',
    'Written estimates before work',
    'Quality parts & workmanship',
  ],
}: ServicePageShellProps) {
  const reduce = useReducedMotion();

  const breadcrumbs =
    breadcrumbsProp ??
    (breadcrumbLabel
      ? [
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: breadcrumbLabel },
        ]
      : undefined);

  const related =
    relatedServices ??
    SERVICES.filter((s) => s.name !== breadcrumbLabel && !title.startsWith(s.name)).slice(0, 4);

  return (
    <div>
      {schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      )}

      <PageHero title={title} description={description} breadcrumbs={breadcrumbs} imageSrc={imageSrc} />

      <section className="border-b border-[color:var(--line)] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[color:var(--line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-3 px-6 py-5">
              <CheckCircle className="size-5 shrink-0 text-primary-green" />
              <p className="text-sm font-semibold text-foreground">{h}</p>
            </div>
          ))}
        </div>
      </section>

      {quickAnswer && (
        <section className="border-b border-[color:var(--line)] bg-primary-blue/[0.04] py-12">
          <FadeIn className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-green">Quick answer</p>
            <p className="mt-4 text-xl leading-relaxed text-foreground sm:text-2xl">{quickAnswer}</p>
          </FadeIn>
        </section>
      )}

      <section className="bg-[var(--background)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <FadeIn className="space-y-10 lg:col-span-8">{children}</FadeIn>
            <aside className="lg:col-span-4">
              <FadeIn delay={0.1} className="sticky top-28 space-y-5">
                <div className="overflow-hidden rounded-3xl bg-[#0c1222] shadow-2xl">
                  <div className="relative aspect-[4/3]">
                    <Image src={imageSrc} alt="" fill className="object-cover opacity-90" sizes="400px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] to-transparent" />
                  </div>
                  <div className="p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green-light">
                      Schedule service
                    </p>
                    <p className="mt-2 font-display text-4xl tracking-wide">{BUSINESS.phone}</p>
                    <motion.a
                      href={BUSINESS.phoneHref}
                      className="btn-green mt-5 w-full"
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                    >
                      <Phone className="size-4" />
                      {phoneCta || 'Call now'}
                    </motion.a>
                    <p className="mt-4 text-xs text-white/50">
                      {BUSINESS.hours.weekdays}
                      <br />
                      {BUSINESS.hours.saturday}
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image src={PHOTOS.exterior} alt="RKC Automotive shop" fill className="object-cover" sizes="400px" />
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">Related services</h2>
          </FadeIn>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {related.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center justify-between rounded-2xl border border-[color:var(--line)] bg-[var(--background)] px-5 py-4 transition hover:border-primary-green/40 hover:bg-primary-green/5"
              >
                <span className="font-semibold text-foreground group-hover:text-primary-green">{service.name}</span>
                <span className="text-primary-green opacity-0 transition group-hover:opacity-100">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.brandedBay} alt="" fill className="object-cover" sizes="100vw" />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">Need this service today?</h2>
            <p className="mt-3 max-w-lg text-white/75">
              Call RKC Automotive in Englewood for a clear estimate and expert repair.
            </p>
          </div>
          <motion.a
            href={BUSINESS.phoneHref}
            className="btn-green"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            <Phone className="size-5" />
            {BUSINESS.phone}
          </motion.a>
        </div>
      </section>
    </div>
  );
}
