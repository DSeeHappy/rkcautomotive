'use client';

import { Battery, CloudSnow, Gauge, Snowflake } from 'lucide-react';
import { BUSINESS, RAV4_PRE_WINTER_PAGE_FAQ } from '@/lib/constants';
import {
  ServiceCinematicHero,
  ServiceRealityBand,
  ServiceSymptomGrid,
  ServiceProcessTimeline,
  ServiceChecklistGrid,
  ServiceLaborBand,
  ServiceFAQSection,
  ServiceFinalCTA,
  ServiceAreaServed,
  ServiceTechnicalSection,
} from '@/app/components/ui/services/ServiceSharedSections';
import RelatedServices from '@/app/components/ui/RelatedServices';
import { getRav4Breadcrumbs, RAV4_IMAGE, RAV4_IMAGE_ALT } from './rav4Shared';

const icons = [Battery, Snowflake, Gauge, CloudSnow];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: 'Slow crank on sub-zero Englewood mornings',
    body:
      'A RAV4 that cranks sluggishly below 10°F on a Littleton street or unheated Englewood driveway is telling you the battery failed the CCA reserve test — even if it started fine in September. Colorado cold reduces lead-acid output by roughly 35% at 0°F while the starter demands more torque to turn 0W-20 that has thickened overnight. RKC load-tests batteries at rated cold cranking amps, checks alternator output above 13.5V at 2,000 RPM, and inspects terminal corrosion from road salt. A marginal battery strands drivers at the I-70 on-ramp when the first arctic front hits — not during the inspection you skipped in October.',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
  },
  {
    icon: icons[1],
    title: 'AWD shudder & transfer-case neglect',
    body:
      'Fifth-generation RAV4 Dynamic Torque Vectoring AWD and earlier electro-magnetic coupling systems depend on clean gear oil in the rear differential and transfer components. Fluid breaks down from heat cycles on summer I-25 commutes and water intrusion from snow-packed wheel wells. Shudder on tight parking-lot turns in January, groaning from the rear on slow U-turns, and delayed AWD engagement leaving a snowy Englewood curb all point to degraded fluid — not a failing clutch pack yet. We drain and refill with Toyota-spec gear oil and scan for coupling temperature codes before ski season.',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
  },
  {
    icon: icons[2],
    title: 'Brake fade & rusty slide pins before ice season',
    body:
      'Colorado salt and November moisture seize caliper slide pins on RAV4s that never see a brake inspection between summer and first snow. You feel it as a mild pull under light braking or a grinding whisper after a cold soak — long before metal-on-metal. Frozen slides prevent even pad contact, which means longer stopping distances on icy Federal Blvd approaches. RKC measures rotor thickness, inspects pad compound for winter suitability, flushes brake fluid above 3% moisture content, and lubricates slides with high-temp silicone — the difference between controlled stops and ABS panic on black ice.',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10',
    accentBorder: 'border-red-500/25',
  },
  {
    icon: icons[3],
    title: 'Worn tires, dead wipers & frozen washer jets',
    body:
      'All-season tires below 5/32-inch tread hydroplane on slush and lose edge bite on packed Eisenhower Tunnel approaches. TPMS lights from seasonal pressure drops are normal — ignoring them hides a nail leaking slowly since September. Streaking wipers and summer-rated washer fluid that gels at 15°F create zero visibility in the first mountain snow squall. Pre-winter service at RKC includes tread depth on all four corners, TPMS relearn when tires rotate, beam-blade installation, and -20°F rated washer fluid — because Denver metro mountain passes do not offer pull-offs when visibility goes to zero.',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/25',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Battery & charging system load test',
    body:
      'Digital conductance test at rated CCA, alternator ripple check, starter draw measurement, and cable drop test from battery to starter. Hybrid RAV4s also get 12V auxiliary health verification — the high-voltage pack depends on a strong auxiliary battery for contactor closure on cold mornings.',
  },
  {
    step: '02',
    title: 'Coolant freeze-point & hose inspection',
    body:
      'Refractometer sample confirms protection to at least -34°F for Englewood altitude. We pressure-test the radiator cap rating, inspect upper/lower hoses for swelling, and check the overflow tank for oil sheen that would flag head-gasket seepage before a freeze-thaw cycle cracks a weak joint.',
  },
  {
    step: '03',
    title: 'AWD & driveline fluid check',
    body:
      'Rear differential and transfer-case fluid level and color on AWD trims. Hybrid models add inverter coolant level, pump operation scan, and cabin intake filter inspection for hybrid battery cooling fan obstruction from autumn leaves.',
  },
  {
    step: '04',
    title: 'Brake, tire & visibility safety items',
    body:
      'Rotor/pad measurement, fluid moisture test, tread depth and wear pattern, TPMS sensor battery age where accessible, wiper blade rubber durometer, headlamp aim check, and exterior lamp function including brake and CHMSL bulbs required for mountain visibility.',
  },
  {
    step: '05',
    title: 'Written report & mountain-pass readiness',
    body:
      'You receive a prioritized list — critical before I-70, recommended before January, monitor through spring. We note oil viscosity on your sticker (0W-20 for most modern RAV4s), block heater cord condition if equipped, and engine block heater timer advice for unheated parking.',
  },
];

const CHECKLIST_GROUPS = [
  {
    category: 'Battery & electrical',
    items: [
      'CCA load test vs factory rating — replace below 70% conductance',
      'Alternator output 13.5–14.8V at cruise RPM',
      'Starter draw and cable voltage drop',
      '12V auxiliary on Hybrid — HV contactor depends on it',
      'Terminal clean, torque, and dielectric grease',
    ],
  },
  {
    category: 'Fluids & freeze protection',
    items: [
      'Coolant freeze point −34°F minimum at 5,280 ft',
      'Washer fluid rated to −20°F or lower',
      'Engine oil viscosity per spec — 0W-20 for 2AR/A25A/Hybrid',
      'Inverter coolant level on Hybrid RAV4',
      'Brake fluid moisture below 3% where testable',
    ],
  },
  {
    category: 'AWD & traction',
    items: [
      'Rear differential fluid color and level',
      'Transfer coupling / driveshaft U-joint inspection',
      'Tire tread 5/32-inch minimum for snow readiness',
      'TPMS relearn after rotation or seasonal pressure set',
      'Spare tire pressure and jack hardware present',
    ],
  },
  {
    category: 'Brakes & visibility',
    items: [
      'Pad thickness and rotor scoring inspection',
      'Caliper slide pin lubrication and boot integrity',
      'Beam wiper blades — replace every 12 months in CO',
      'Headlamp and fog lamp function',
      'Defroster outlet temperature at idle after 5 minutes',
    ],
  },
];

export default function Rav4PreWinterContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getRav4Breadcrumbs('Pre-Winter Service')}
        image={RAV4_IMAGE}
        imageAlt={RAV4_IMAGE_ALT}
        eyebrow="Toyota RAV4 · Englewood, CO"
        title="RAV4 Pre-Winter Colorado Inspection in Englewood, CO"
        description="Sub-zero battery testing, AWD fluid service, brake inspection, tire tread, hybrid cooling checks, and mountain-pass readiness for Denver metro RAV4 owners before I-70 ski traffic and the first arctic front."
        primaryCta={{ href: '/contact', label: 'Schedule Pre-Winter Inspection' }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote="The first 10°F morning does not forgive the battery you meant to replace in September."
        body={
          <>
            <p className="mb-4">
              Colorado winter is not a season — it is a stress test. Englewood commuters climb from 5,280 feet to 11,000 on I-70 with loaded RAV4s, electro-magnetic AWD working overtime on packed snow, and cabin heat pulling alternator output while the defroster fights a frozen windshield. A marginal battery, 4/32-inch tires, and two-year-old brake fluid are fine on a 55°F October afternoon. They are tow-truck material on a −5°F January merge at the Eisenhower Tunnel.
            </p>
            <p>
              RKC&apos;s RAV4 pre-winter inspection is a multi-point readiness audit — not a quick oil-change upsell. We load-test batteries at rated CCA, refractometer-test coolant, service AWD fluids, measure brakes and tires, verify hybrid inverter cooling on RAV4 Hybrid trims, and hand you a written priority list before Loveland Pass closes for the season. Posted $120/hr labor on anything we repair; inspection findings you approve before work begins.
            </p>
          </>
        }
      />

      <ServiceSymptomGrid
        eyebrow="Winter failure modes"
        title="What strands RAV4 drivers when Colorado turns cold"
        intro="These symptoms show up every October through December in our Englewood bays — fix them before the mountain forecast, not after the no-start on Federal Blvd."
        cards={SYMPTOMS}
      />

      <ServiceTechnicalSection
        eyebrow="Colorado prep"
        title="Hybrid cooling, oil viscosity, block heaters & I-70 readiness"
        intro="Pre-winter service on a RAV4 is platform-specific. Gas, hybrid, and AWD trims share some checks — inverter coolant and 0W-20 viscosity matter only on certain models."
        cards={[
          {
            title: 'RAV4 Hybrid — inverter coolant & battery cooling',
            body:
              '2016+ RAV4 Hybrid carries a separate inverter cooling loop distinct from engine coolant. Low inverter coolant triggers power limiting and warning lamps long before engine temperature rises. The hybrid battery pack depends on cabin and intake airflow through a dedicated cooling duct — clogged cabin filters and blocked intake grilles reduce fan efficiency in summer and winter. RKC scans hybrid system data, verifies inverter pump operation, and inspects battery cooling paths alongside standard engine freeze protection.',
            accent: 'text-emerald-400',
            accentBg: 'bg-emerald-500/10',
            accentBorder: 'border-emerald-500/25',
          },
          {
            title: '0W-20 vs 5W-30 for Colorado winter',
            body:
              '2013+ RAV4 gas and hybrid engines specify 0W-20 synthetic for cold-flow and fuel-economy compliance. The 0W prefix matters at −10°F in Aurora driveways — oil must reach the turbo-bearing and valvetrain galleries before dry-start wear accumulates. Older 2AZ-FE RAV4s may specify 5W-30; using heavier oil without cause hurts cold-start protection. We match viscosity to your under-hood label and driving pattern — short Englewood trips qualify as severe service regardless of viscosity.',
            accent: 'text-sky-400',
            accentBg: 'bg-sky-500/10',
            accentBorder: 'border-sky-500/25',
          },
          {
            title: 'AWD transfer-case & rear diff for snow',
            body:
              'Toyota RAV4 AWD systems vary by generation — electro-magnetic coupling on newer models, center differential fluid on older trims. Neglected fluid causes shudder, binding on tight turns, and overheated coupling clutches that set drivetrain codes. Before ski season, we verify fluid condition, inspect CV boots torn by summer gravel, and test AWD engagement on a low-traction surface. Fresh gear oil costs less than a coupling replacement after a season of Loveland Pass abuse.',
            accent: 'text-amber-400',
            accentBg: 'bg-amber-500/10',
            accentBorder: 'border-amber-500/25',
          },
          {
            title: 'Denver metro mountain pass context',
            body:
              'I-70 from C-470 to the Eisenhower Tunnel climbs 4,000+ feet in under sixty miles — thin air, steep grades, and variable traction. Loveland Pass on US-6 exposes RAV4s to wind chill and ice when I-70 closes. Pre-winter readiness means brakes that stop straight, tires with snow-edge tread, wipers that clear at highway speed, washer fluid that sprays at 10°F, and a battery that cranks after hours in a Georgetown parking lot. RKC documents each item so you know whether your RAV4 is pass-ready or needs work first.',
            accent: 'text-red-400',
            accentBg: 'bg-red-500/10',
            accentBorder: 'border-red-500/25',
          },
        ]}
        tableTitle="RAV4 pre-winter multi-point checklist"
        tableIntro="Every line item is inspected and marked pass, monitor, or repair needed on your written report."
        table={{
          caption: 'Toyota RAV4 pre-winter inspection checklist',
          columns: ['System', 'What we check', 'Fail criteria'],
          rows: [
            { label: 'Battery', values: ['CCA load test, terminals', 'Below 70% rated CCA'], highlight: 2 },
            { label: 'Coolant', values: ['Freeze point refractometer', 'Weaker than −34°F'], highlight: 2 },
            { label: 'AWD / rear diff', values: ['Fluid color, coupling test', 'Dark metal glitter, shudder'], highlight: 2 },
            { label: 'Brakes', values: ['Pads, rotors, fluid moisture', 'Below 3/32 pad, fluid >3% H2O'], highlight: 2 },
            { label: 'Tires / TPMS', values: ['Tread depth, pressure, sensors', 'Below 5/32 tread'], highlight: 2 },
            { label: 'Hybrid only', values: ['Inverter coolant, fan duct', 'Low coolant, blocked intake'], highlight: 2 },
            { label: 'Visibility', values: ['Wipers, washer, lamps', 'Streaking, summer fluid'], highlight: 2 },
            { label: 'Oil viscosity', values: ['Label match, interval', 'Wrong weight or overdue'], highlight: 2 },
          ],
        }}
      />

      <ServiceProcessTimeline
        eyebrow="Inspection workflow"
        title="How RKC prepares your RAV4 for Colorado winter"
        intro="Structured multi-point inspection with written priorities — critical before I-70, recommended before January."
        steps={PROCESS_STEPS}
        bgImage={RAV4_IMAGE}
        bgImageAlt="Toyota RAV4 pre-winter inspection at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow="Full audit"
        title="Pre-winter systems we inspect on every RAV4"
        intro="Gas, hybrid, and AWD trims share the core list — hybrid and AWD items add platform-specific checks."
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title="Pre-winter inspection pricing"
        description="RAV4 pre-winter multi-point inspection typically runs $89–$129 depending on hybrid and AWD depth. Repairs quoted separately at $120/hr posted labor — you approve each item before we turn a wrench."
      />

      <ServiceFAQSection
        title="RAV4 pre-winter questions"
        intro="Battery testing, mountain passes, hybrid cooling, and when to book before the first freeze."
        items={RAV4_PRE_WINTER_PAGE_FAQ}
      />
      <RelatedServices slug="preventative-maintenance-englewood-co" title="Related RAV4 services" />
      <ServiceAreaServed serviceLabel="RAV4 pre-winter Colorado inspection" />
      <ServiceFinalCTA
        title="Get your RAV4 winter-ready"
        description="Schedule before the first arctic front hits Englewood. RKC tests, documents, and quotes — so your RAV4 is I-70 ready when the snow forecast finally goes real."
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: 'Book pre-winter inspection' }}
        image={RAV4_IMAGE}
        imageAlt={RAV4_IMAGE_ALT}
      />
    </div>
  );
}
