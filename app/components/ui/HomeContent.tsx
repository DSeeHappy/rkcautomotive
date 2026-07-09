'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BUSINESS,
  FEATURED_SERVICES,
  PHOTOS,
  PROCESS_STEPS,
  SERVICES,
  STATS,
  VERIFIED_REVIEWS_4_PLUS,
  TRUST_BADGES,
} from '@/lib/constants';
import { SERVICE_AREAS_DATA } from '@/lib/serviceAreas';
import BrandSection from './BrandSection';
import Hero from './Hero';
import FadeIn, { Stagger, StaggerItem } from './FadeIn';
import ReviewCards from './ReviewCards';
import ServiceAreaGrid from './ServiceAreaGrid';

export default function HomeContent() {
  const reduce = useReducedMotion();

  return (
    <div>
      <Hero />

      {/* Animated stats — horizontal cinematic strip, not gray cards */}
      <section className="relative z-10 -mt-10 border-y border-[color:var(--line)] bg-white/90 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--line)] lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.06} className="px-6 py-10 sm:px-8">
              <motion.p
                className="font-display text-5xl tracking-wide text-primary-blue sm:text-6xl"
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                {stat.value}
              </motion.p>
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
              Shop work that shows
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Full-bay photography of the jobs Englewood drivers actually need — not clip-art icons in green squares.
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
          <Image src={PHOTOS.engineBay} alt="" fill className="object-cover" sizes="100vw" />
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
                Mile-high standards. Neighbor-shop honesty.
              </h2>
              <p className="mt-5 text-lg text-ink-muted">
                We&apos;re the Englewood shop that answers the phone, explains the repair, and puts it in writing before
                a wrench turns.
              </p>
              <ul className="mt-10 space-y-4">
                {TRUST_BADGES.map((badge) => (
                  <li key={badge} className="flex items-center gap-3 border-b border-[color:var(--line)] pb-4 text-sm font-semibold">
                    <span className="size-2 rounded-full bg-primary-green" />
                    {badge}
                  </li>
                ))}
              </ul>
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
          <Image src={PHOTOS.classicLift} alt="" fill className="object-cover opacity-20" sizes="100vw" />
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
              <motion.a
                href={BUSINESS.phoneHref}
                className="btn-green"
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                <Phone className="size-5" />
                {BUSINESS.phone}
              </motion.a>
              <Link href="/pricing" className="btn-ghost-light">
                See pricing
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
