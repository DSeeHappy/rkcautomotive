'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Award, Phone } from 'lucide-react';
import {
  ASE_ARIA_LABEL,
  ASE_URL,
  BUSINESS,
  FEATURED_SERVICES,
  PHOTOS,
  PROCESS_STEPS,
  SERVICES,
  STATS,
  VERIFIED_REVIEWS_4_PLUS,
  TRUST_BADGES,
  LABOR_RATE,
} from '@/lib/constants';
import { SERVICE_AREAS_DATA } from '@/lib/serviceAreas';
import BrandSection from './BrandSection';
import FAQAccordion from './FAQAccordion';
import Hero from './Hero';
import FadeIn, { Stagger, StaggerItem } from './FadeIn';
import ReviewCards from './ReviewCards';
import ServiceAreaGrid from './ServiceAreaGrid';
import { MotionAnchor } from './MotionLink';
import { useLanguage } from '@/lib/language';
import { homeCopy } from '@/lib/homeCopy';

export default function HomeContent() {
  const { lang } = useLanguage();
  const copy = homeCopy(lang);

  return (
    <div lang={lang}>
      <Hero />

      {/* Trust strip — local SEO signals */}
      <section className="relative z-0 -mt-10 border-y border-[color:var(--line)] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[color:var(--line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {copy.trustStrip.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05} className="px-6 py-8 sm:px-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary-green">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Animated stats — horizontal cinematic strip, not gray cards */}
      <section className="relative z-0 border-b border-[color:var(--line)] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--line)] lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.06} className="px-6 py-10 sm:px-8">
              <p className="font-display text-5xl tracking-wide text-primary-blue sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-foreground">
                {copy.stats[i].label}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{copy.stats[i].sublabel}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services as immersive photo panels */}
      <section className="py-24 sm:py-28">
        <div className="wrap">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {copy.services.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl lg:text-7xl">
              {copy.services.title}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{copy.services.intro}</p>
          </FadeIn>

          <div className="space-y-5">
            {FEATURED_SERVICES.map((service, i) => {
              const reverse = i % 2 === 1;
              const card =
                copy.services.cards[service.slug as keyof typeof copy.services.cards] ?? service;
              return (
                <FadeIn key={service.href} delay={i * 0.04}>
                  <Link
                    href={service.href}
                    className={`group relative grid min-h-[280px] overflow-hidden rounded-3xl bg-[#0c1222] lg:min-h-[340px] lg:grid-cols-2 ${
                      reverse ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <div className="relative min-h-[220px] lg:min-h-full">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1222]/20 to-transparent lg:hidden" />
                    </div>
                    <div className="relative flex flex-col justify-center p-8 sm:p-12">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-green-light">
                        0{i + 1} · {copy.services.serviceLabel}
                      </p>
                      <h3 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
                        {card.name}
                      </h3>
                      <p className="mt-4 max-w-md text-base text-white/70">{card.description}</p>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary-green-light transition group-hover:gap-3">
                        {copy.services.openService} <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-blue">
              {copy.services.allServices(SERVICES.length)}
            </Link>
          </div>
        </div>
      </section>

      {/* Process with motion */}
      <section className="relative overflow-hidden bg-[#0c1222] py-24 text-white sm:py-28">
        <div className="absolute inset-0 opacity-25">
          <Image src={PHOTOS.engineBay} alt="Engine bay service at RKC Automotive in Englewood, CO" fill className="object-cover" sizes="100vw" />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative wrap">
          <FadeIn className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
              {copy.process.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">{copy.process.title}</h2>
          </FadeIn>
          <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {PROCESS_STEPS.map((step, i) => (
              <StaggerItem key={step.step}>
                <div className="border-t border-white/20 pt-6">
                  <p className="font-display text-5xl text-primary-green-light">{step.step}</p>
                  <h3 className="mt-4 text-xl font-bold">{copy.process.steps[i].title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {copy.process.steps[i].description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why us — editorial with photo */}
      <section className="py-24 sm:py-28">
        <div className="wrap">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
                {copy.why.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
                {copy.why.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">{copy.why.body(LABOR_RATE)}</p>
            </FadeIn>
            <FadeIn delay={0.1} className="relative lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src={PHOTOS.teamInspect}
                  alt="RKC technicians inspecting undercarriage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden max-w-xs rounded-2xl bg-primary-blue p-6 text-white shadow-2xl sm:block lg:-left-10">
                <p className="font-display text-4xl text-primary-green-light">{STATS[3].value}</p>
                <p className="mt-1 text-sm text-white/80">
                  {copy.stats[3].label} {copy.why.reviewsOn}
                </p>
              </div>
            </FadeIn>
          </div>

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4" stagger={0.08}>
            {copy.competitive.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-[color:var(--line)] bg-white p-6 sm:p-8">
                  <h3 className="text-lg font-bold leading-snug text-primary-blue sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn className="mt-16 border-t border-[color:var(--line)] pt-12">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {copy.trustBadges.map((badge, i) => (
                <li key={TRUST_BADGES[i]} className="flex items-center gap-3 text-sm font-semibold">
                  <span className="size-2 shrink-0 rounded-full bg-primary-green" />
                  {TRUST_BADGES[i] === 'ASE Certified' ? (
                    <a
                      href={ASE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ASE_ARIA_LABEL}
                      className="transition-colors hover:text-primary-green"
                    >
                      {badge}
                    </a>
                  ) : (
                    badge
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Trust proof — team, shop, credentials */}
      <section className="border-y border-[color:var(--line)] bg-white py-24 sm:py-28">
        <div className="wrap">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {copy.shop.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {copy.shop.title}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{copy.shop.intro}</p>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            <FadeIn delay={0.05}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={PHOTOS.exterior}
                  alt="RKC Automotive shop exterior at 2120 W Evans Ave, Englewood, CO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-primary-green">
                {copy.shop.location}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{BUSINESS.address.full}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={PHOTOS.teamCollab}
                  alt="RKC Automotive ASE-certified technicians working together in Englewood"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-primary-green">
                {copy.shop.team}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{copy.shop.teamDetail}</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <MotionAnchor
                href={ASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ASE_ARIA_LABEL}
                className="flex h-full min-h-[220px] flex-col justify-center rounded-3xl border border-[color:var(--line)] bg-[var(--background)] p-8 transition-colors hover:border-primary-green/40"
              >
                <div className="flex items-center gap-3">
                  <Award className="size-10 text-primary-green" aria-hidden />
                  <p className="font-display text-6xl tracking-wide text-primary-blue">ASE</p>
                </div>
                <p className="mt-2 text-lg font-bold text-foreground">{copy.shop.certified}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy.shop.certifiedDetail}</p>
                <ul className="mt-6 space-y-2 text-sm font-semibold text-foreground">
                  <li>• {copy.shop.ratePosted(LABOR_RATE)}</li>
                  <li>• {copy.shop.writtenEstimates}</li>
                  <li>• {copy.shop.hablamos}</li>
                </ul>
              </MotionAnchor>
            </FadeIn>
          </div>
        </div>
      </section>

      <BrandSection homepage />

      {/* Service areas grid */}
      <section className="border-y border-[color:var(--line)] bg-white py-24 sm:py-28">
        <div className="wrap">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {copy.areas.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {copy.areas.title(SERVICE_AREAS_DATA.length)}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{copy.areas.intro}</p>
          </FadeIn>
          <ServiceAreaGrid columns={3} />
          <div className="mt-12 text-center">
            <Link href="/areas-we-serve" className="btn-blue">
              {copy.areas.allAreas}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials with photo backdrop */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0">
          <Image src={PHOTOS.classicLift} alt="Classic car on lift at RKC Automotive in Englewood, Colorado" fill className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/92 to-[var(--background)]" />
        </div>
        <div className="relative wrap">
          <FadeIn className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {copy.reviews.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {copy.reviews.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">{copy.reviews.intro}</p>
          </FadeIn>
          <ReviewCards reviews={VERIFIED_REVIEWS_4_PLUS} />
        </div>
      </section>

      {/* Compact FAQ — AI answer readiness + common scheduling questions */}
      <section className="border-t border-[color:var(--line)] bg-white py-24 sm:py-28" aria-labelledby="home-faq-heading">
        <div className="wrap">
          <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {copy.faq.eyebrow}
            </p>
            <h2 id="home-faq-heading" className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {copy.faq.title}
            </h2>
            <p className="mt-4 text-ink-muted">{copy.faq.intro}</p>
          </FadeIn>
          <FadeIn delay={0.06} className="mx-auto max-w-3xl">
            <FAQAccordion
              items={[...copy.faq.items]}
              defaultOpenFirst
              adaptRepairTimeFaq={lang === 'en'}
            />
            <div className="mt-8 text-center">
              <Link href="/frequently-asked-questions" className="btn-blue">
                {copy.faq.allFaqs}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA band with photo */}
      <section className="relative isolate overflow-hidden" aria-labelledby="home-cta-heading">
        <div className="absolute inset-0">
          <Image src={PHOTOS.exterior} alt="" fill className="object-cover" sizes="100vw" aria-hidden />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative wrap py-28 text-center sm:py-36">
          <FadeIn>
            <h2
              id="home-cta-heading"
              className="font-display text-6xl tracking-wide text-white sm:text-7xl lg:text-8xl"
            >
              {copy.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">{copy.cta.body}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
                <Phone className="size-5" aria-hidden />
                {BUSINESS.phone}
              </MotionAnchor>
              <Link href="/pricing" className="btn-ghost-light">
                {copy.cta.seePricing}
              </Link>
              <Link href="/warranty" className="btn-ghost-light">
                {copy.cta.warranty}
              </Link>
              <Link href="/contact" className="btn-ghost-light">
                {copy.cta.contact}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
