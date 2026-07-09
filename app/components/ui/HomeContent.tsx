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
  COMPETITIVE_POSITIONING,
  LABOR_RATE,
} from '@/lib/constants';
import { SERVICE_AREAS_DATA } from '@/lib/serviceAreas';
import BrandSection from './BrandSection';
import Hero from './Hero';
import FadeIn, { Stagger, StaggerItem } from './FadeIn';
import ReviewCards from './ReviewCards';
import ServiceAreaGrid from './ServiceAreaGrid';
import { MotionAnchor } from './MotionLink';

export default function HomeContent() {

  return (
    <div>
      <Hero />

      {/* Trust strip — local SEO signals */}
      <section className="relative z-10 -mt-10 border-y border-[color:var(--line)] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[color:var(--line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            {
              title: 'Serving Englewood & Denver Metro',
              detail: '2120 W Evans Ave — your neighborhood full-service bay',
            },
            {
              title: 'Hablamos Español',
              detail: 'Bilingual team — call, text, or visit in English or Spanish',
            },
            {
              title: '$120/hr Posted Online',
              detail: 'Mon–Fri 8 AM–6 PM · Written estimates before any work',
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05} className="px-6 py-8 sm:px-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary-green">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Animated stats — horizontal cinematic strip, not gray cards */}
      <section className="relative z-10 border-b border-[color:var(--line)] bg-white/90 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--line)] lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.06} className="px-6 py-10 sm:px-8">
              <p className="font-display text-5xl tracking-wide text-primary-blue sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-ink-muted">{stat.sublabel}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services as immersive photo panels */}
      <section className="py-24 sm:py-28">
        <div className="wrap">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">What we fix</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl lg:text-7xl">
              Full-service auto repair
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Brakes, diagnostics, oil changes, transmission work, and more — real shop photos from our Englewood bay.
            </p>
          </FadeIn>

          <div className="space-y-5">
            {FEATURED_SERVICES.map((service, i) => {
              const reverse = i % 2 === 1;
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
                        0{i + 1} · Service
                      </p>
                      <h3 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
                        {service.name}
                      </h3>
                      <p className="mt-4 max-w-md text-base text-white/70">{service.description}</p>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary-green-light transition group-hover:gap-3">
                        Open service <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-blue">
              All {SERVICES.length} services
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">How it works</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">Four moves. Zero mystery.</h2>
          </FadeIn>
          <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="border-t border-white/20 pt-6">
                  <p className="font-display text-5xl text-primary-green-light">{step.step}</p>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{step.description}</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Why RKC</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
                Honest work from a shop you can reach
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                We&apos;re the Englewood shop that answers the phone, posts {LABOR_RATE} on the pricing page, and puts
                every repair in writing before a wrench turns.
              </p>
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
                <p className="mt-1 text-sm text-white/80">{STATS[3].label} on Google &amp; Facebook</p>
              </div>
            </FadeIn>
          </div>

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4" stagger={0.08}>
            {COMPETITIVE_POSITIONING.map((item) => (
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
              {TRUST_BADGES.map((badge) => (
                <li key={badge} className="flex items-center gap-3 text-sm font-semibold">
                  <span className="size-2 shrink-0 rounded-full bg-primary-green" />
                  {badge}
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">The shop</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Real people. Real bay. Real reviews.
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Visit us at 2120 W Evans Ave — ASE-certified technicians, a locally owned Englewood shop, and verified
              Google &amp; Facebook reviews from customers in the metro.
            </p>
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
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-primary-green">Our location</p>
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
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-primary-green">Our team</p>
              <p className="mt-2 text-sm text-ink-muted">
                Same crew visit after visit — Ray, Oscar, and technicians with 30+ years in this bay.
              </p>
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
                <p className="mt-2 text-lg font-bold text-foreground">Certified technicians</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Dealer-level diagnostics and repair without the dealer markup — credentials you can ask about when
                  you visit.
                </p>
                <ul className="mt-6 space-y-2 text-sm font-semibold text-foreground">
                  <li>• {LABOR_RATE} posted online</li>
                  <li>• Written estimates before work</li>
                  <li>• Hablamos Español</li>
                </ul>
              </MotionAnchor>
            </FadeIn>
          </div>
        </div>
      </section>

      <BrandSection />

      {/* Service areas grid */}
      <section className="border-y border-[color:var(--line)] bg-white py-24 sm:py-28">
        <div className="wrap">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Service area</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {SERVICE_AREAS_DATA.length} cities. Your neighborhood.
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              From our Englewood shop on W Evans Ave, we serve south Denver, Littleton, Highlands Ranch, Aurora, and
              neighborhoods in between — click your city for local details.
            </p>
          </FadeIn>
          <ServiceAreaGrid columns={3} />
          <div className="mt-12 text-center">
            <Link href="/areas-we-serve" className="btn-blue">
              All service areas
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Verified reviews</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Straight feedback from the lot
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Real quotes from Google and Facebook — no placeholders, no invented names.
            </p>
          </FadeIn>
          <ReviewCards reviews={VERIFIED_REVIEWS_4_PLUS} />
        </div>
      </section>

      {/* CTA band with photo */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.exterior} alt="RKC Automotive shop exterior" fill className="object-cover" sizes="100vw" />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative wrap py-28 text-center sm:py-36">
          <FadeIn>
            <p className="font-display text-6xl tracking-wide text-white sm:text-7xl lg:text-8xl">
              Ready when you are
            </p>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
              Same-day openings when available. Call the bay or send a message — we&apos;ll get you a clear next step.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
                <Phone className="size-5" />
                {BUSINESS.phone}
              </MotionAnchor>
              <Link href="/pricing" className="btn-ghost-light">
                See pricing
              </Link>
              <Link href="/warranty" className="btn-ghost-light">
                Extended warranty
              </Link>
              <Link href="/contact" className="btn-ghost-light">
                Contact
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
