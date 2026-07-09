'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  AlertTriangle,
  Award,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  FileText,
  Gauge,
  MapPin,
  Phone,
  ShieldCheck,
  Volume2,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  ASE_ARIA_LABEL,
  ASE_URL,
  BUSINESS,
  ENGINE_REBUILDS_PAGE_FAQ,
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
import { ServiceAreaServed, ServiceFinalCTA } from './ServiceSharedSections';
import Breadcrumbs from '@/app/components/ui/Breadcrumbs';

const TRUST_PILLS = [
  { icon: Wrench, label: LABOR_RATE, sub: 'posted labor rate' },
  { icon: Award, label: 'ASE', sub: 'certified techs', href: ASE_URL },
  { icon: ClipboardCheck, label: 'Written', sub: 'estimates first' },
  { icon: MapPin, label: 'Evans Ave', sub: 'Englewood shop' },
] as const;

const SYMPTOMS: {
  icon: LucideIcon;
  title: string;
  body: string;
  warning?: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
}[] = [
  {
    icon: Gauge,
    title: 'Blow-by past the rings',
    body:
      'Compression gases slip past worn piston rings and pressurize the crankcase. You notice oil weeping from seals, a oily residue around the PCV breather, and blue-gray smoke under load — especially climbing I-70 toward the Eisenhower Tunnel with a loaded trailer. Blow-by is not a seal problem; it is ring-to-wall clearance that has opened beyond spec. Additives cannot restore the bore finish or ring tension your block needs.',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
  },
  {
    icon: Cog,
    title: 'Low oil pressure at hot idle',
    body:
      'A healthy engine holds oil pressure once warm — typically 20 psi or more at hot idle depending on the spec sheet. When main and rod bearing clearances wear past tolerance, oil escapes faster than the pump can maintain volume. The gauge drops when you stop at a light in Englewood summer traffic, then recovers slightly off idle. That pattern traces to bearing wear inside the block, not a faulty sender. Thicker oil masks the symptom briefly; it does not fix the clearance.',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
  },
  {
    icon: Volume2,
    title: 'Rod knock — spun bearings',
    body:
      'Rod knock is the unmistakable hammering from the oil pan — a rhythmic metallic beat that rises with RPM. It means a rod bearing has spun, wiped, or begun transferring material to the crank journal. This is not a lifter tick and not a exhaust leak. Every mile driven after rod knock starts risks trashing the crank, block bore, and rod itself. Tow the vehicle. Do not limp home hoping the noise fades.',
    warning: 'Stop driving immediately — rod knock destroys cranks fast.',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10',
    accentBorder: 'border-red-500/25',
  },
];

const MACHINE_STEPS = [
  {
    step: '01',
    title: 'Strip to bare casting',
    body:
      'The engine comes off the vehicle and onto a stand. Every fastener, plug, and accessory is cataloged. We separate the short block from heads, oil pan, and front cover so each component can be measured independently. Colorado winters and deferred coolant service often leave scale in water jackets — stripping clean is the only way to inspect what the block actually looks like inside.',
  },
  {
    step: '02',
    title: 'Hot tank & degrease',
    body:
      'Castings go through hot tank cleaning to remove sludge, carbon, and rust scale from oil galleries and coolant passages. Sludge alone does not cause failure, but it hides cracks and prevents accurate magnaflux results. Clean metal reveals the casting\'s true condition before we commit to bore and hone work — and before you approve machine-shop charges on a block that might not be salvageable.',
  },
  {
    step: '03',
    title: 'Magnaflux crack inspection',
    body:
      'Magnaflux applies magnetic particle inspection to ferrous castings, revealing hairline cracks around cylinder bores, main webbing, and bellhousing bolt bosses. A crack that looks like a stain on a dirty block becomes obvious under UV light after magnaflux. Finding a crack here saves you from assembling a fresh rotating kit into a block that will fail again — we document findings with photos before scope changes.',
  },
  {
    step: '04',
    title: 'Bore & hone with torque plates',
    body:
      'Cylinders are bored to oversize only when wear or scoring demands it, then honed to the final finish with torque plates installed. Torque plates simulate head-bolt clamping load so the bore roundness you measure on the hone matches what the engine sees at running temperature. Skipping torque plates is how shops end up with oval bores and broken ring seal after a few thousand miles.',
  },
  {
    step: '05',
    title: 'Deck surface resurfacing',
    body:
      'The block deck and cylinder head mating surfaces are measured for flatness and resurfaced when out of spec. MLS head gaskets — common on modern domestic and import engines — tolerate almost zero imperfection. A warped deck from overheating or head-bolt stretch causes combustion seal failure and coolant intrusion. We surface to the minimum spec, not the maximum cut, to preserve compression height.',
  },
  {
    step: '06',
    title: 'Dynamic balance assembly',
    body:
      'Crankshafts are mic\'d, polished, or ground to undersize as needed. Rod and piston assemblies are weighed and matched; the rotating assembly is dynamically balanced so vibration does not hammer bearings at highway speed. Balance work is what separates a rebuilt engine that feels new from one that buzzes through the steering wheel on C-470. Every measurement goes on the build sheet you receive at pickup.',
  },
];

const COMPONENT_CHECKLIST = [
  {
    category: 'Pistons & rings',
    items: [
      'Hypereutectic or forged pistons sized to final bore measurement',
      'File-fit moly or ductile iron rings per bore with end gap checked',
      'Pin bore and ring land inspection before assembly',
    ],
  },
  {
    category: 'Bearings & rotating assembly',
    items: [
      'Clevite or King rod and main bearings sized to measured clearances',
      'Crank journal polish or grind to next undersize when scored',
      'Rod reconditioning or replacement when big-end ovality is out of spec',
    ],
  },
  {
    category: 'Lubrication & timing',
    items: [
      'High-volume or OEM-spec oil pump matched to engine family',
      'Timing chain or belt kit with guides and tensioners',
      'Cam bearings, freeze plugs, and galley plug replacement',
    ],
  },
  {
    category: 'Sealing & hardware',
    items: [
      'Full gasket set — MLS head gaskets when spec requires',
      'Rear main seal, front cover seal, and valve cover gaskets',
      'ARP or OEM-critical fasteners torqued to sequence spec',
    ],
  },
];

const SHORT_BLOCK_ITEMS = [
  'Bare block — bored, honed, deck surfaced, magnaflux passed',
  'Crankshaft — inspected, polished or ground, dynamically balanced',
  'Connecting rods — reconditioned or new matched set',
  'Pistons & file-fit rings — sized to measured bore',
  'Rod & main bearings — clearance matched to journal size',
  'Oil pump, timing set, cam bearings (if applicable)',
  'Rear main seal, freeze plugs, core plugs',
];

const LONG_BLOCK_ITEMS = [
  'Everything in a short-block rebuild',
  'Cylinder heads — resurfaced, valve job or seat work as needed',
  'Valves, springs, retainers, and stem seals',
  'Rocker arms, pushrods, or OHC cam hardware (engine dependent)',
  'Intake manifold gaskets and critical vacuum sealing surfaces',
  'Multi-point assembly inspection before installation',
  'Break-in oil and initial start with oil pressure verification',
];

export default function EngineRebuildsContent() {
  const reduce = usePrefersReducedMotion();
  const { sectionRef, bgRef, contentRef } = useGsapParallax<HTMLElement>(reduce, {
    yPercent: 16,
    fadeTo: 0.4,
  });
  const eyebrow = useGsapReveal<HTMLParagraphElement>({ y: 16, duration: 0.6 });
  const title = useGsapReveal<HTMLHeadingElement>({ delay: 0.06, y: 28, duration: 0.75 });
  const description = useGsapReveal<HTMLParagraphElement>({ delay: 0.14, y: 16, duration: 0.6 });
  const ctas = useGsapReveal<HTMLDivElement>({ delay: 0.22, y: 12, duration: 0.5 });
  const pills = useGsapReveal<HTMLDivElement>({ delay: 0.32, y: 20, duration: 0.6 });

  return (
    <div>
      {/* 1 — Cinematic hero */}
      <section ref={sectionRef} className="relative isolate min-h-[70svh] overflow-hidden bg-[#0c1222] sm:min-h-[78svh]">
        <div ref={bgRef} className="absolute inset-0">
          <Image
            src={PHOTOS.engineRebuild}
            alt="ASE-certified technicians rebuilding an engine at RKC Automotive in Englewood, CO"
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
              <Breadcrumbs items={getServiceBreadcrumbs('Engine Rebuilds')} className="mb-6" variant="light" />
              <p
                ref={eyebrow.ref}
                className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-green-light"
              >
                Machine shop · Englewood, CO
              </p>

              <h1
                ref={title.ref}
                className="mt-4 font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.98] tracking-wide text-white"
              >
                Precision Engine Rebuilding &amp; Remanufacturing in Englewood, CO
              </h1>

              <p ref={description.ref} className="mt-5 max-w-2xl text-lg font-medium text-white/85 sm:text-xl">
                Rod knock, low oil pressure, or blow-by past the rings? We pull, strip, machine, blueprint, and rebuild
                domestic and import engines down to the bare block — with a written estimate and your approval before the
                first bolt comes off our Evans Ave bay.
              </p>

              <div ref={ctas.ref} className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-green">
                  <CalendarCheck className="size-5" />
                  Request Rebuild Estimate
                </Link>
                <MotionAnchor href={BUSINESS.phoneHref} className="btn-ghost-light">
                  <Phone className="size-5" />
                  Call {BUSINESS.phone}
                </MotionAnchor>
              </div>
            </div>

            <div ref={pills.ref} className="mt-10 flex flex-wrap gap-3 lg:mt-12">
              {TRUST_PILLS.map((pill) => {
                const Icon = pill.icon;
                const pillClassName =
                  'flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 backdrop-blur-md transition-colors';
                const content = (
                  <>
                    <span className="flex size-9 items-center justify-center rounded-xl bg-primary-green/20 ring-1 ring-primary-green/30">
                      <Icon className="size-4 text-primary-green-light" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-xl tracking-wide text-white">{pill.label}</p>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">{pill.sub}</p>
                    </div>
                  </>
                );

                if ('href' in pill && pill.href) {
                  return (
                    <MotionAnchor
                      key={pill.sub}
                      href={pill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ASE_ARIA_LABEL}
                      className={`${pillClassName} hover:border-primary-green/40`}
                    >
                      {content}
                    </MotionAnchor>
                  );
                }

                return (
                  <div key={pill.sub} className={pillClassName}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* 2 — Reality check band */}
      <section className="relative overflow-hidden bg-[#0c1222] py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-green/40 to-transparent"
        />
        <div className="wrap relative">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-green-light">
              Reality check
            </p>
            <blockquote className="mt-6 font-display text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.05] tracking-wide text-white">
              &ldquo;A tired block doesn&apos;t get better with another bottle of additive.&rdquo;
            </blockquote>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/65 sm:text-lg">
              High-mileage commuters, skipped oil changes, and overheating events open bearing clearances and destroy ring
              seal. Colorado towing on I-25 and mountain grades accelerates wear on domestic V8s and turbo imports alike.
              When compression is uneven and oil consumption climbs, the block needs to come apart — measured, machined,
              and rebuilt to spec. Not every tick or misfire needs a full rebuild — start with{' '}
              <Link href="/services/engine-diagnostics-englewood-co" className="font-semibold text-primary-green-light hover:text-white">
                engine diagnostics in Englewood
              </Link>{' '}
              or{' '}
              <Link href="/services/camshaft-lifter-repair-englewood-co" className="font-semibold text-primary-green-light hover:text-white">
                camshaft and lifter repair
              </Link>{' '}
              when valvetrain wear is the root cause. Third-party{' '}
              <Link href="/warranty" className="font-semibold text-primary-green-light hover:text-white">
                extended warranty claims
              </Link>{' '}
              for powertrain work are handled in-house at our posted {LABOR_RATE} rate. RKC has rebuilt engines for
              Englewood, Denver, Littleton, and south-metro drivers who needed the job done once, not twice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3 — Symptoms of a tired block */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Warning signs</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Symptoms of a tired block
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              An engine past its useful life rarely fails all at once. Warning signs accumulate quietly — until a drive
              home from the mountains turns into an expensive tow. These three failure modes mean internal wear, not a
              quick external fix.
            </p>
          </FadeIn>

          <Stagger className="grid gap-6 lg:grid-cols-3" stagger={0.08}>
            {SYMPTOMS.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border ${item.accentBorder} bg-[var(--background)] shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)] transition duration-300 hover:-translate-y-1`}
                  >
                    <div className={`border-b ${item.accentBorder} ${item.accentBg} px-8 py-7`}>
                      <div className="flex items-center gap-4">
                        <span
                          className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${item.accentBg} ring-1 ${item.accentBorder}`}
                        >
                          <Icon className={`size-6 ${item.accent}`} aria-hidden />
                        </span>
                        <h3 className="font-display text-2xl tracking-wide text-primary-blue">{item.title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 px-8 py-7">
                      <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{item.body}</p>
                      {item.warning && (
                        <div className="mt-auto flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-red-400" aria-hidden />
                          <p className="text-sm font-semibold text-red-700">{item.warning}</p>
                        </div>
                      )}
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* 4 — Machine shop process */}
      <section className="relative overflow-hidden bg-[#0c1222] py-24 text-white sm:py-28">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={PHOTOS.engineBay}
            alt="Engine bay service and machine shop work at RKC Automotive Englewood CO"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative wrap">
          <FadeIn className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">Machine shop</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">
              Blueprinting from bare casting to balanced assembly
            </h2>
            <p className="mt-4 text-lg text-white/70">
              A proper rebuild is not bolt-on parts — it is a documented machine-shop workflow. Every step below gets
              measured, photographed when findings change scope, and signed off before reassembly begins.
            </p>
          </FadeIn>

          <div className="relative mb-2 hidden lg:block">
            <div
              aria-hidden
              className="absolute left-[8%] right-[8%] top-6 h-px bg-gradient-to-r from-primary-green/20 via-primary-green/50 to-primary-green/20"
            />
          </div>

          <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {MACHINE_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="group relative border-t border-white/20 pt-6 transition duration-300 hover:border-primary-green/50">
                  <p className="font-display text-5xl text-primary-green-light">{step.step}</p>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 5 — Component checklist */}
      <section className={`${SECTION_PAD} bg-[var(--background)]`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Parts &amp; assembly</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              The component checklist
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Reassembly is only as good as the parts going in. We match pistons to bore size, file-fit rings to each
              cylinder, and size bearings to measured clearances — not shelf guesses. Trusted names like Clevite and King
              beat generic kits when your engine has already proven it can destroy inferior components.
            </p>
          </FadeIn>

          <Stagger className="grid gap-6 sm:grid-cols-2" stagger={0.08}>
            {COMPONENT_CHECKLIST.map((group) => (
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

      {/* 6 — Short-block vs long-block */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className="wrap">
          <FadeIn className={`mx-auto ${SECTION_HEADER_CENTER}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Scope options</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Short-block vs. long-block
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Not every failure requires the same depth of work. We quote both paths when inspection supports it — so
              you choose based on head condition, budget, and how long you plan to keep the vehicle.
            </p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="grid overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] lg:grid-cols-2">
              <div className="border-b border-[color:var(--line)] bg-gradient-to-br from-primary-blue/[0.04] to-white p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-blue/10 ring-1 ring-primary-blue/20">
                    <Cog className="size-6 text-primary-blue" aria-hidden />
                  </span>
                  <h3 className="font-display text-3xl tracking-wide text-primary-blue">Short-block</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                  Everything below the cylinder heads — ideal when heads pass leak-down and surface flatness checks but
                  the bottom end is worn. You reuse or separately rebuild heads while the block, crank, and rotating
                  assembly are restored to spec.
                </p>
                <ul className="mt-6 space-y-3">
                  {SHORT_BLOCK_ITEMS.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink-muted sm:text-base">
                      <span className="text-primary-green">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-green/[0.06] to-white p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-green/15 ring-1 ring-primary-green/30">
                    <ShieldCheck className="size-6 text-primary-green" aria-hidden />
                  </span>
                  <h3 className="font-display text-3xl tracking-wide text-primary-blue">Long-block</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                  Turnkey rotating assembly plus reconditioned heads and valvetrain — the right call when heads are
                  warped, cracked, or have valve-seat damage from overheating. One assembly, one warranty scope, less
                  coordination for you.
                </p>
                <ul className="mt-6 space-y-3">
                  {LONG_BLOCK_ITEMS.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink-muted sm:text-base">
                      <span className="text-primary-green">✓</span> {item}
                    </li>
                  ))}
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
              Labor transparency on every rebuild
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
              Major engine work is a significant investment. We bill at our posted {LABOR_RATE} rate using AllData and
              Mitchell book times as a baseline — but every rebuild starts with a written estimate before teardown. If
              magnaflux reveals a crack, journals are scored beyond grind limits, or head damage changes scope, we call
              with photos. Nothing moves forward without your approval.
            </p>
          </FadeIn>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-3" stagger={0.08}>
            {[
              {
                icon: FileText,
                title: 'Written estimates',
                detail: 'Scope, labor hours, and parts allowance documented before the first bolt turns.',
              },
              {
                icon: ClipboardCheck,
                title: 'Book-time baseline',
                detail: 'AllData and Mitchell guides — not inflated hours padded into the quote.',
              },
              {
                icon: ShieldCheck,
                title: 'Approval before teardown',
                detail: 'Photos and phone call if inspection findings change the rebuild plan.',
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
              Engine rebuild questions
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Straight answers on short-block vs. long-block scope, timelines, turbo rebuilds, and why machine-shop
              blueprinting beats a junkyard swap.
            </p>
          </FadeIn>
          <FadeIn delay={0.06} className="mx-auto max-w-3xl">
            <FAQAccordion items={ENGINE_REBUILDS_PAGE_FAQ} />
          </FadeIn>
        </div>
      </section>

      <RelatedServices slug="engine-rebuilds-englewood-co" />
      <ServiceAreaServed serviceLabel="engine rebuilds" relatedServiceSlug="engine-rebuilds-englewood-co" />

      <ServiceFinalCTA
        title="Ready for a rebuild estimate?"
        description={`Book a consultation at ${BUSINESS.address.full}. We review symptoms, discuss short-block vs. long-block options, and provide a written estimate at ${LABOR_RATE} labor plus parts — before teardown begins.`}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: 'Request estimate' }}
        imageAlt="RKC Automotive shop bay in Englewood Colorado — engine rebuild service"
      />
    </div>
  );
}
