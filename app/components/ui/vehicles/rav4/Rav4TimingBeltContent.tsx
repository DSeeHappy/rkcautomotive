'use client';

import { AlertTriangle, Clock, Droplets, Gauge } from 'lucide-react';
import { BUSINESS, RAV4_TIMING_BELT_PAGE_FAQ } from '@/lib/constants';
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

const icons = [AlertTriangle, Clock, Droplets, Gauge];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: 'Ticking at idle from tensioner wear',
    body:
      'A rhythmic tick at hot idle on a 2AZ-FE RAV4 often traces to a dry or failing timing belt tensioner bearing — not always a lifter. The tensioner maintains belt load as the hydraulic damper ages; when it sticks, belt harmonics transfer into the cam drive and you hear a metallic tick that disappears above 1,500 RPM. Colorado cold starts accelerate tensioner seal hardening. If the tick is new and your RAV4 is past 80,000 miles on the original belt, treat it as an overdue-interval warning — not something to mask with thicker oil.',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
  },
  {
    icon: icons[1],
    title: 'Overdue mileage — interference engine risk',
    body:
      'Toyota lists 90,000 miles or 72 months for 2.0L 1AZ-FE and 2.4L 2AZ-FE timing belt replacement on third-generation RAV4s. That interval is not conservative — belt teeth shear when the rubber compound hardens from Englewood heat cycles and mountain-load RPM swings on I-70. Both 1AZ and 2AZ are interference engines: if the belt jumps time or breaks at highway speed, pistons contact open valves. Bent valves mean cylinder head removal, machine work, and a repair bill that dwarfs scheduled belt service. We verify production date and engine code before quoting because 2013+ RAV4s moved to timing chains.',
    warning: '2AZ-FE and 1AZ-FE are interference engines — a snapped belt destroys valves.',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10',
    accentBorder: 'border-red-500/25',
  },
  {
    icon: icons[2],
    title: 'Coolant loss & water pump weep hole seepage',
    body:
      'The 2AZ-FE water pump rides behind the timing belt cover on belt-driven RAV4s. Bearing wear opens the weep hole — a deliberate drain path so coolant does not enter the timing case and contaminate the belt. Pink crust below the pump housing or unexplained coolant top-offs between Englewood oil changes point to pump seal failure. Coolant on a timing belt accelerates tooth delamination; replacing belt without pump when seepage is present guarantees a repeat job within months. We pressure-test the cooling system and inspect belt teeth through the cover window when access allows.',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
  },
  {
    icon: icons[3],
    title: 'Idler pulley chirp & cam seal oil migration',
    body:
      'Accessory idler pulleys and the timing belt idler share the same service life as the belt — a seized idler bearing throws belt tracking off and can strip teeth in hours. Cam and crank front seals weep oil onto the belt surface, turning a dry cog belt into a lubricated one that walks on the pulleys. RKC replaces tensioner, idler, and both cam seals during belt service because the labor to reach them is identical whether you open the cover today or in eighteen months. Skipping seals to save parts cost is how Englewood owners end up with oil-soaked belts and premature tensioner failure.',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/25',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'VIN & engine-code verification',
    body:
      'We confirm whether your RAV4 uses a timing belt (2001–2012 1AZ/2AZ) or timing chain (2013+ 2AR/A25A). VIN decode, under-hood emission labels, and visual cover inspection prevent quoting belt labor on a chain-driven vehicle. Hybrid RAV4s from 2016 use Atkinson-cycle 2.5L engines with chains — different service scope entirely.',
  },
  {
    step: '02',
    title: 'Written estimate before teardown',
    body:
      'Belt service is predictable labor on 2AZ-FE RAV4s, but we still document tensioner, idler, water pump, seal, and coolant condition before disassembly. You receive a line-item estimate at our posted $120/hr labor rate plus Toyota-spec parts. No surprise charges when a stuck crank bolt or corroded fastener adds time — we call first.',
  },
  {
    step: '03',
    title: 'Cooling system prep & belt cover removal',
    body:
      'Coolant is drained to the block level, accessory drive and engine mount support are positioned for crankshaft pulley access, and the upper timing cover comes off. We set crank and cam timing marks to TDC on cylinder one before belt removal — documenting alignment with photos so reassembly is verifiable.',
  },
  {
    step: '04',
    title: 'Belt, tensioner, pump & seal replacement',
    body:
      'Old belt teeth are inspected for cracking and delamination — findings go on your invoice. New OEM or Aisin-equivalent belt, hydraulic tensioner, idler pulley, water pump, and cam/crank seals install together. Coolant is refilled with Toyota Super Long Life or equivalent and burped to eliminate air pockets that cause post-service overheating on Federal Blvd stop-and-go.',
  },
  {
    step: '05',
    title: 'Rotation verification & test drive',
    body:
      'We rotate the crank by hand through two full revolutions to confirm no valve interference, start and monitor coolant temperature, and road-test for tick, leak, or belt flutter. Service records note the next interval — 90,000 miles or 72 months for severe Colorado use, whichever comes first.',
  },
];

const CHECKLIST_GROUPS = [
  {
    category: 'Timing drive components',
    items: [
      'Timing belt — Toyota/Aisin OEM or equivalent rated for interference application',
      'Hydraulic tensioner assembly with fresh damper',
      'Timing idler pulley and tensioner pulley',
      'Crankshaft seal — replaced while damper is off',
      'Intake and exhaust camshaft seals on 2AZ-FE',
    ],
  },
  {
    category: 'Cooling system (same visit)',
    items: [
      'Water pump with new gasket — mandatory when pump is belt-driven',
      'Thermostat inspection — replace if stuck or seeping',
      'Upper/lower radiator hose condition check',
      'Coolant flush with Toyota Super Long Life spec',
      'Pressure test to 15 PSI after refill and burp procedure',
    ],
  },
  {
    category: 'Accessory drive & hardware',
    items: [
      'Serpentine belt if cracked or glazed from pump removal',
      'Crank pulley bolt torqued to Toyota spec with thread locker',
      'Engine mount torque after support removal',
      'Timing cover gasket and cam position sensor O-ring',
      'Accessory idler pulleys inspected under separate belt',
    ],
  },
  {
    category: 'Colorado severe-service notes',
    items: [
      'Interval shortened to 72 months when mountain towing is regular',
      'Cold-start idle tick evaluation before dismissing as lifter noise',
      'Document mileage at service for resale and emissions history',
      'Hybrid and 2013+ chain vehicles referred to chain-inspection scope',
      'Written estimate retained for warranty and third-party records',
    ],
  },
];

export default function Rav4TimingBeltContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getRav4Breadcrumbs('Timing Belt & Water Pump')}
        image={RAV4_IMAGE}
        imageAlt={RAV4_IMAGE_ALT}
        eyebrow="Toyota RAV4 · Englewood, CO"
        title="RAV4 Timing Belt & Water Pump Service in Englewood, CO"
        description="Interference-engine 2AZ-FE and 1AZ-FE RAV4s need timing belt, tensioner, idler, water pump, and seal replacement on schedule — before a snapped belt turns a maintenance visit into a cylinder head rebuild on your I-70 commute."
        primaryCta={{ href: '/contact', label: 'Schedule Belt Service' }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote="A timing belt does not warn you politely — it breaks on the merge lane."
        body={
          <>
            <p className="mb-4">
              Third-generation Toyota RAV4s with 2.4L 2AZ-FE and 2.0L 1AZ-FE engines use rubber timing belts driving double-overhead cam heads. Both platforms are interference designs: valve-to-piston contact is guaranteed if timing jumps. Englewood owners sometimes defer belt service because the engine runs fine — until a stripped tooth at 70 mph on C-470 sends coolant through the exhaust and the tow bill exceeds what preventive service would have cost.
            </p>
            <p>
              RKC replaces belt, hydraulic tensioner, idler pulleys, water pump, cam seals, and coolant in one visit because the labor overlap is nearly total. We post $120/hr labor, deliver a written estimate before cover removal, and document which generation your VIN belongs to — 2013 and newer RAV4s use timing chains and need a different inspection scope, not a belt kit you do not need.
            </p>
          </>
        }
      />

      <ServiceSymptomGrid
        eyebrow="RAV4 belt warnings"
        title="Symptoms that mean belt service is overdue or urgent"
        intro="Ticking, coolant loss, and high mileage on belt-driven RAV4s are not unrelated annoyances — they are the same maintenance story told at different volumes."
        cards={SYMPTOMS}
      />

      <ServiceTechnicalSection
        eyebrow="Engine families"
        title="2AZ-FE, 1AZ-FE, and which RAV4 years actually use a belt"
        intro="Not every RAV4 on Colorado roads needs a timing belt. Generation and engine code determine whether you are scheduling belt service or chain inspection — and mixing them up wastes money or risks valves."
        cards={[
          {
            title: 'Second & third gen — belt-driven interference engines',
            body:
              '2001–2005 RAV4 models with 1AZ-FE (2.0L) and 2004–2012 models with 2AZ-FE (2.4L) use timing belts behind the front cover. Toyota specifies replacement at 90,000 miles or 72 months. Both engines are interference: exhaust and intake valves occupy the same vertical space as pistons at TDC when cams are out of time. A belt failure at any RPM above idle typically bends multiple valves per cylinder.',
            accent: 'text-red-400',
            accentBg: 'bg-red-500/10',
            accentBorder: 'border-red-500/25',
          },
          {
            title: 'Fourth gen & newer — timing chain platforms',
            body:
              '2013–2018 RAV4 with 2.5L 2AR-FE and 2019+ with 2.5L A25A-FKS Dynamic Force engines use maintenance-free timing chains. Water pumps may be electric or driven by the serpentine belt — not behind a timing cover. If your VIN decodes to 2013 or later, you need chain stretch and tensioner inspection at high mileage, not a 2AZ belt kit. We verify before quoting.',
            accent: 'text-sky-400',
            accentBg: 'bg-sky-500/10',
            accentBorder: 'border-sky-500/25',
          },
          {
            title: 'What happens when the belt breaks',
            body:
              'When belt teeth strip or the tensioner collapses, cam timing drifts while the crank keeps turning. Open valves meet rising pistons — usually on multiple cylinders. Repair scope includes head removal, valve replacement, seat work, new head gasket, machine shop time, and often catalyst protection from metal debris. Total cost commonly runs $3,500–$6,000+ versus $900–$1,400 for scheduled belt, pump, and seal service on a 2AZ-FE RAV4 in the Denver metro.',
            accent: 'text-amber-400',
            accentBg: 'bg-amber-500/10',
            accentBorder: 'border-amber-500/25',
          },
          {
            title: 'Water pump, weep hole & coolant contamination',
            body:
              'The 2AZ-FE water pump impeller shaft rides on a sealed bearing with a weep hole at the housing base. Bearing wear opens the seal — coolant drips out deliberately instead of entering the timing case. Ignored seepage wicks onto the belt, softening rubber and accelerating tooth failure. Coolant contaminated with oil from a failing pump seal also risks overheating on Loveland Pass grades. Replacing pump and belt together is engineering sense, not upsell.',
            accent: 'text-emerald-400',
            accentBg: 'bg-emerald-500/10',
            accentBorder: 'border-emerald-500/25',
          },
        ]}
        tableTitle="RAV4 timing drive by generation"
        tableIntro="Use your door-jamb production date and under-hood engine label — not model year alone — when scheduling service at RKC."
        table={{
          caption: 'Toyota RAV4 timing belt vs chain by generation',
          columns: ['Generation / years', 'Engine', 'Drive type', 'Service interval'],
          rows: [
            { label: '2001–2005', values: ['1AZ-FE 2.0L', 'Timing belt', '90k mi / 72 mo'], highlight: 2 },
            { label: '2004–2012', values: ['2AZ-FE 2.4L', 'Timing belt', '90k mi / 72 mo'], highlight: 2 },
            { label: '2013–2018', values: ['2AR-FE 2.5L', 'Timing chain', 'Inspect at high mi'] },
            { label: '2019–present', values: ['A25A-FKS 2.5L', 'Timing chain', 'Inspect at high mi'] },
            { label: '2016+ Hybrid', values: ['2.5L Atkinson', 'Timing chain', 'Inverter coolant separate'] },
          ],
        }}
      />

      <ServiceProcessTimeline
        eyebrow="RKC belt workflow"
        title="How we perform RAV4 timing belt & water pump service"
        intro="Predictable scope on 2AZ-FE — documented timing marks, no reassembly until you approve the estimate."
        steps={PROCESS_STEPS}
        bgImage={RAV4_IMAGE}
        bgImageAlt="Toyota RAV4 timing belt service at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow="Complete kit"
        title="What we replace together on belt-driven RAV4s"
        intro="Skipping tensioner, idler, pump, or seals during belt service is how deferred maintenance becomes a second teardown six months later."
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title="RAV4 timing belt pricing transparency"
        description="Timing belt, water pump, tensioner, idler, seals, and coolant on 2AZ-FE RAV4 typically run $900–$1,400 plus parts at our posted $120/hr labor rate. Head rebuild after belt failure starts around $3,500. Written estimate before cover removal — always."
      />

      <ServiceFAQSection
        title="RAV4 timing belt questions"
        intro="Interference engines, Colorado intervals, and what to replace while the front cover is off."
        items={RAV4_TIMING_BELT_PAGE_FAQ}
      />
      <RelatedServices slug="preventative-maintenance-englewood-co" title="Related RAV4 services" />
      <ServiceAreaServed serviceLabel="RAV4 timing belt and water pump service" />
      <ServiceFinalCTA
        title="RAV4 due for timing belt service?"
        description="Call or schedule at RKC Automotive on Evans Ave. We verify your engine code, quote belt and pump together, and keep your interference-engine RAV4 off the tow truck."
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: 'Book belt service' }}
        image={RAV4_IMAGE}
        imageAlt={RAV4_IMAGE_ALT}
      />
    </div>
  );
}
