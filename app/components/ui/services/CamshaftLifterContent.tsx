'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileText,
  Filter,
  Phone,
  Ruler,
  ShieldCheck,
  Volume2,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  BUSINESS,
  CAMSHAFT_LIFTER_PAGE_FAQ,
  LABOR_RATE,
  PHOTOS,
} from '@/lib/constants';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { useGsapParallax } from '@/lib/useGsapParallax';
import { useGsapReveal } from '@/lib/useGsapReveal';
import { SECTION_PAD, SECTION_HEADER, SECTION_HEADER_CENTER, getServiceBreadcrumbs } from './servicesShared';
import RelatedServices from '@/app/components/ui/RelatedServices';
import { HeroTrustPills, ServiceAreaServed, ServiceFinalCTA, TRUST_PILLS } from './ServiceSharedSections';
import Breadcrumbs from '@/app/components/ui/Breadcrumbs';

const TICK_CARDS: {
  icon: LucideIcon;
  title: string;
  vehicles: string;
  body: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  featured?: boolean;
}[] = [
  {
    icon: Volume2,
    title: 'HEMI lifter tick',
    vehicles: '5.7L / 6.4L Mopar — Ram, Charger, Challenger, Grand Cherokee',
    body:
      'The HEMI lifter tick is practically a meme in Mopar circles for a reason. Roller lifters collapse or seize, the follower hammers a flat spot into the cam lobe, and you lose lift on that cylinder. The tick may fade briefly at cold start then return at operating temperature — or stay constant once lobe damage is severe. Scan data shows misfire counts climbing on the affected cylinder. Partial lifter replacement without cam inspection is how shops create repeat customers. When lobes are scored, the cam assembly and full lifter set go in together — every time.',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10',
    accentBorder: 'border-red-500/25',
    featured: true,
  },
  {
    icon: Filter,
    title: 'GM AFM / DFM collapse',
    vehicles: '5.3L, 6.2L V8 — Silverado, Sierra, Tahoe, Yukon, Escalade',
    body:
      'Active Fuel Management and Dynamic Fuel Management disable cylinders under light load by collapsing lifters via oil-pressure solenoids. Stuck solenoids, deferred oil changes, and low-tension valve springs accelerate lifter collapse and cam wear — often on cylinders 1, 4, 6, or 7 depending on engine family. Denver metro truck owners frequently arrive with P0300 random misfire codes and a tick that started as occasional cold-start noise. AFM hardware turns a fuel-economy feature into a valvetrain failure mode when maintenance slips or solenoids stick open.',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
  },
  {
    icon: Wrench,
    title: 'General hydraulic lifter bleed-down',
    vehicles: 'Pushrod V6/V8, high-mileage imports — any OHV with hydraulic lash adjusters',
    body:
      'Hydraulic lifters maintain zero lash by trapping oil under a plunger. Overnight bleed-down produces a cold-start tick that fades as oil pressure builds — normal on some engines for seconds, abnormal when it persists or returns at hot idle. When bleed-down becomes permanent collapse, the tick stays and the cam lobe takes repeated impact loading. High-mileage commuters from Englewood to downtown Denver often ignore the tick until a misfire code appears. By then, filter debris analysis may already show metallic material heading toward main bearings.',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
  },
];

const DIAGNOSTIC_STEPS = [
  {
    icon: Ruler,
    step: '01',
    title: 'Valvetrain clearance measurement',
    body:
      'Where the engine design allows, we measure intake and exhaust side clearance against factory spec. Out-of-spec readings on one cylinder point to collapsed lifters or worn lobes before we pull the intake or valve covers for visual confirmation. Clearance data also rules out misdiagnosed exhaust leaks and injector tick that sound similar from the driver seat.',
  },
  {
    icon: Eye,
    step: '02',
    title: 'Borescope lobe inspection',
    body:
      'A borescope through the spark-plug hole — or oil-cap opening on overhead-cam layouts — lets us inspect lobe shape and follower wear without committing to full teardown first. Flat spots, blue discoloration from hammering, and chipped lobes show up on camera before you approve cam replacement. We save images when findings support the repair recommendation.',
  },
  {
    icon: Filter,
    step: '03',
    title: 'Oil filter debris analysis',
    body:
      'Metallic glitter or bronze-colored material in the filter media means the valvetrain is already shedding material downstream. We correlate filter findings with compression tests, leak-down results, and scan-tool misfire counts. That combination tells us whether top-end work is sufficient or if wear has migrated to bearings that require short-block inspection.',
  },
];

const VALVETRAIN_CHECKLIST = [
  {
    category: 'Cam & lifters',
    items: [
      'Complete cam assembly matched to VIN and engine family',
      'Full lifter set — never reuse collapsed units',
      'Lifter bores cleaned and inspected for scoring',
    ],
  },
  {
    category: 'Supporting hardware',
    items: [
      'Pushrods inspected for straightness and end-cup wear',
      'Valve springs checked for tension, height, and coil bind',
      'Rocker arms and trunnion bearings where applicable',
    ],
  },
  {
    category: 'Sealing & cleanup',
    items: [
      'Valve stem seals replaced while heads are accessible',
      'Timing cover and front crank seal as needed',
      'Oil gallery flush to remove debris from the failure',
    ],
  },
  {
    category: 'Verification',
    items: [
      'Compression and leak-down after assembly',
      'Oil pressure check at hot idle before return',
      'Road test and misfire count verification on scan tool',
    ],
  },
];

export default function CamshaftLifterContent() {
  const reduce = usePrefersReducedMotion();
  const { sectionRef, bgRef, contentRef } = useGsapParallax<HTMLElement>(reduce, {
    yPercent: 16,
    fadeTo: 0.4,
  });
  const eyebrow = useGsapReveal<HTMLParagraphElement>({ y: 16, duration: 0.6 });
  const title = useGsapReveal<HTMLHeadingElement>({ delay: 0.06, y: 28, duration: 0.75 });
  const description = useGsapReveal<HTMLParagraphElement>({ delay: 0.14, y: 16, duration: 0.6 });
  const ctas = useGsapReveal<HTMLDivElement>({ delay: 0.22, y: 12, duration: 0.5 });

  const [featuredTick, ...otherTicks] = TICK_CARDS;

  return (
    <div>
      {/* 1 — Cinematic hero */}
      <section ref={sectionRef} className="relative isolate min-h-[70svh] overflow-hidden bg-[#0c1222] sm:min-h-[78svh]">
        <div ref={bgRef} className="absolute inset-0">
          <Image
            src={PHOTOS.classicEngine}
            alt="Valvetrain and camshaft repair at RKC Automotive in Englewood, CO"
            fill
            priority
            className={`object-cover object-center ${reduce ? '' : 'ken-burns'}`}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(12, 18, 34, 0.5) 0%, rgba(12, 18, 34, 0.25) 40%, rgba(12, 18, 34, 0.88) 100%), linear-gradient(90deg, rgba(14, 133, 54, 0.22) 0%, transparent 50%, rgba(28, 61, 145, 0.15) 100%)',
            }}
          />
          <div className="photo-veil absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c1222]/80 via-[#0c1222]/20 to-transparent"
          />
        </div>

        <div
          ref={contentRef}
          className="relative z-10 flex min-h-[70svh] flex-col px-4 pt-20 sm:min-h-[78svh] sm:px-6 sm:pt-22 lg:px-8 lg:pt-24"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end pb-20 sm:pb-24">
            <div className="max-w-4xl">
              <Breadcrumbs items={getServiceBreadcrumbs('Camshaft & Lifters')} className="mb-6" variant="light" />
              <p
                ref={eyebrow.ref}
                className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-green-light"
              >
                Valvetrain · Englewood, CO
              </p>

              <h1
                ref={title.ref}
                className="mt-4 font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.98] tracking-wide text-white"
              >
                Camshaft Replacement &amp; Hydraulic Lifter Repair in Englewood, CO
              </h1>

              <p ref={description.ref} className="mt-5 max-w-2xl text-lg font-medium text-white/85 sm:text-xl">
                Eliminate engine ticking, localized misfires, and valvetrain metal wear before it destroys your block.
                Expert diagnostics and full cam-and-lifter restoration for HEMI, GM AFM/DFM, and high-mileage
                overhead-valve engines — with approval before we order parts.
              </p>

              <div ref={ctas.ref} className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-green">
                  <CalendarCheck className="size-5" />
                  Book Valvetrain Service
                </Link>
                <MotionAnchor href={BUSINESS.phoneHref} className="btn-ghost-light">
                  <Phone className="size-5" />
                  Call {BUSINESS.phone}
                </MotionAnchor>
              </div>
            </div>

            <div className="relative z-20 mt-10 lg:mt-12">
              <HeroTrustPills pills={TRUST_PILLS} />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* 2 — Engine tick alert */}
      <section className="relative overflow-hidden py-0">
        <div className="relative border-y-2 border-amber-500/50 bg-gradient-to-br from-[#1a1208] via-[#0c1222] to-[#0c1222]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.14),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.1),transparent_50%)]"
          />

          <div className="wrap relative py-16 sm:py-20">
            <FadeIn>
              <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 px-6 py-5 backdrop-blur-sm sm:px-8">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/25 ring-2 ring-amber-400/40">
                  <AlertTriangle className="size-8 text-amber-300" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                    Valvetrain warning — do not ignore
                  </p>
                  <p className="mt-1 font-display text-2xl tracking-wide text-white sm:text-3xl">
                    That tick isn&apos;t going away on its own
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="mt-10 max-w-4xl">
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                A rhythmic tick from the valve cover is one of the most searched engine noises in Colorado — and the
                most commonly misdiagnosed. Additives, thicker oil, and &ldquo;just turn up the radio&rdquo; do not restore
                cam lobe lift or replace collapsed lifters. Every mile with a persistent tick sends metal through oil
                galleries and into main bearings you cannot see without teardown. If the tick stays at operating
                temperature, accompanies a misfire, or worsens under load — schedule{' '}
                <Link href="/services/engine-diagnostics-englewood-co" className="font-semibold text-primary-green-light hover:text-white">
                  engine diagnostics in Englewood
                </Link>{' '}
                before the repair scope jumps from cam-and-lifter to a full{' '}
                <Link href="/services/engine-rebuilds-englewood-co" className="font-semibold text-primary-green-light hover:text-white">
                  engine rebuild
                </Link>
                .
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3 — The infamous engine tick */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Valve train</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              The infamous engine tick explained
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Hydraulic lifters rely on oil pressure to maintain zero lash. When they bleed down, seize, or collapse
              permanently, the cam lobe takes the punishment — and the failure mode depends on your engine family. We
              diagnose before quoting; these are the patterns we see daily in the Denver metro.
            </p>
          </FadeIn>

          <Stagger className="grid gap-6 lg:grid-cols-2 lg:grid-rows-2" stagger={0.08}>
            <StaggerItem className="lg:row-span-2">
              <TickCard item={featuredTick} index={0} />
            </StaggerItem>
            {otherTicks.map((item, i) => (
              <StaggerItem key={item.title}>
                <TickCard item={item} index={i + 1} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4 — Diagnostic strategy */}
      <section className="relative overflow-hidden bg-[#0c1222] py-24 text-white sm:py-28">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={PHOTOS.teamInspect}
            alt="Technicians diagnosing valvetrain issues at RKC Automotive Englewood CO"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative wrap">
          <FadeIn className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
              Diagnostics first
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">The diagnostic strategy</h2>
            <p className="mt-4 text-lg text-white/70">
              We do not swap a cam because the internet said so. Physical measurement, borescope inspection, and filter
              debris analysis build the evidence chain before you approve valvetrain work — saving Englewood and Denver
              metro drivers from paying for a top-end job when the real issue is a sticking VVT solenoid, collapsed AFM
              tower, or a single bad injector masquerading as valvetrain noise.
            </p>
          </FadeIn>

          <Stagger className="grid gap-8 lg:grid-cols-3" stagger={0.12}>
            {DIAGNOSTIC_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.step}>
                  <div className="group relative border-t border-white/20 pt-6 transition duration-300 hover:border-primary-green/50">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                      <Icon className="size-5 text-primary-green-light" aria-hidden />
                    </span>
                    <p className="mt-4 font-display text-5xl text-primary-green-light">{step.step}</p>
                    <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{step.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* 5 — Complete valvetrain restoration */}
      <section className={`${SECTION_PAD} bg-[var(--background)]`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Full restoration</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Complete valvetrain component restoration
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              When the cam is worn, partial repair is false economy. We replace the full cam assembly with a quality unit
              matched to your VIN, install a matched lifter set, inspect every supporting component, and flush oil
              galleries before buttoning up — so the tick does not come back in six months with metal in the filter.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Overhead-valve and cam-in-block layouts differ in labor hours, but the principle is identical: contaminated
              oil galleries, worn followers, and fatigued springs all have to be addressed in the same service window.
              Reusing one good-looking lifter from a set that already collapsed guarantees uneven lash and a comeback
              visit. RKC quotes the complete valvetrain scope up front at our Evans Ave shop so Englewood, Denver, and
              south-metro drivers know exactly what goes back in the engine before we order parts.
            </p>
          </FadeIn>

          <Stagger className="grid gap-6 sm:grid-cols-2" stagger={0.08}>
            {VALVETRAIN_CHECKLIST.map((group) => (
              <StaggerItem key={group.category}>
                <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white p-8 shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)]">
                  <h3 className="font-display text-2xl tracking-wide text-primary-blue">{group.category}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary-green" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 6 — AFM/DFM delete context */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">GM trucks</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              AFM / DFM delete — context, not pressure
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              After repeated AFM-related lifter failures, some Silverado and Sierra owners ask about disabling cylinder
              deactivation entirely. We explain both paths honestly — stock replacement vs. AFM delete — so you decide
              based on how you use the truck, not a sales pitch.
            </p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="grid overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] lg:grid-cols-2">
              <div className="border-b border-[color:var(--line)] bg-gradient-to-br from-primary-blue/[0.04] to-white p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <h3 className="font-display text-2xl tracking-wide text-primary-blue">Stock AFM replacement</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                  Non-delete cam and lifter kit restores factory fuel-economy behavior and emissions calibration. Best
                  when you want OEM driveability, plan to keep factory tuning, and the failure is a first occurrence
                  with otherwise clean oil history. Labor follows published book time for cam-in-block replacement at our
                  posted {LABOR_RATE} rate.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-ink-muted">
                  <li className="flex gap-2">
                    <span className="text-primary-green">✓</span> Maintains factory AFM operation
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-green">✓</span> No tune or emissions recalibration required
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-green">✓</span> Lower parts cost than full delete kit
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-500/[0.06] to-white p-8 sm:p-10">
                <h3 className="font-display text-2xl tracking-wide text-primary-blue">AFM delete kit</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                  Delete kits use non-AFM lifters, a non-AFM cam profile, and hardware that disables cylinder
                  deactivation solenoids. All cylinders fire all the time — eliminating the AFM failure mode but
                  changing fuel economy and requiring appropriate engine calibration. We discuss emissions implications
                  and your use case (daily commuter vs. tow rig) before quoting delete work.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-ink-muted">
                  <li className="flex gap-2">
                    <span className="text-primary-green">✓</span> Removes AFM/DFM hardware failure mode
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-green">✓</span> Popular on high-mileage tow trucks
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">!</span> Requires tune/calibration consideration
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7 — Labor transparency */}
      <section className="relative overflow-hidden bg-[#0c1222] py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,133,54,0.12),transparent_60%)]"
        />
        <div className="wrap relative">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <p className="font-display text-[clamp(4rem,14vw,8rem)] leading-[0.85] tracking-wide text-primary-green-light">
              {LABOR_RATE}
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
              Written approval before cam &amp; lifter work
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
              Valvetrain repair labor is billed at our posted {LABOR_RATE} using published book times for cam-in-block
              and overhead-cam layouts. You receive a written estimate with parts and labor separated — and we do not
              order cam kits or open the engine until you approve scope. Whether you drive a ticking 5.7 HEMI or a
              Silverado with AFM misfires, diagnosis and repair happen under one roof on Evans Ave.
            </p>
          </FadeIn>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-3" stagger={0.08}>
            {[
              {
                icon: FileText,
                title: 'Written estimates',
                detail: 'Cam, lifters, and supporting parts quoted before ordering.',
              },
              {
                icon: ClipboardCheck,
                title: 'Evidence-based scope',
                detail: 'Borescope and filter findings documented in the estimate.',
              },
              {
                icon: ShieldCheck,
                title: 'No surprise teardown',
                detail: 'Approval required before valve covers come off for repair.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-center backdrop-blur-sm">
                    <Icon className="mx-auto size-8 text-primary-green-light" aria-hidden />
                    <h3 className="mt-4 font-display text-xl tracking-wide text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{item.detail}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* 8 — FAQ */}
      <section className={`${SECTION_PAD} bg-[var(--background)]`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER_CENTER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">FAQ</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Cam &amp; lifter questions
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              HEMI tick vs. AFM misfire, delete kits, driving with a tick, and when top-end work beats a full rebuild.
            </p>
          </FadeIn>
          <FadeIn delay={0.06} className="mx-auto max-w-3xl">
            <FAQAccordion items={CAMSHAFT_LIFTER_PAGE_FAQ} />
          </FadeIn>
        </div>
      </section>

      <RelatedServices slug="camshaft-lifter-repair-englewood-co" />
      <ServiceAreaServed serviceLabel="camshaft and lifter repair" relatedServiceSlug="camshaft-lifter-repair-englewood-co" />

      <ServiceFinalCTA
        eyebrow="Stop the tick"
        title="Schedule valvetrain diagnostics today"
        description={`Bring your vehicle to ${BUSINESS.address.full}. We diagnose before recommending cam replacement — and we will not start work until you approve a written estimate at ${LABOR_RATE} labor plus parts.`}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: 'Book service' }}
        imageAlt="RKC Automotive shop exterior in Englewood Colorado — camshaft and lifter repair"
      />
    </div>
  );
}

function TickCard({
  item,
  index,
}: {
  item: (typeof TICK_CARDS)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border ${item.accentBorder} bg-[var(--background)] shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(28,61,145,0.28)]`}
    >
      <div className={`border-b ${item.accentBorder} ${item.accentBg} px-8 py-7`}>
        <div className="flex items-center gap-4">
          <span
            className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${item.accentBg} ring-1 ${item.accentBorder}`}
          >
            <Icon className={`size-6 ${item.accent}`} aria-hidden />
          </span>
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${item.accent}`}>Pattern {index + 1}</p>
            <h3 className="font-display text-2xl tracking-wide text-primary-blue sm:text-[1.65rem]">{item.title}</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-8 py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-green">{item.vehicles}</p>
        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{item.body}</p>
      </div>
    </article>
  );
}
