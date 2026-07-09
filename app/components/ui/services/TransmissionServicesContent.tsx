'use client';

import {
  Cog, Gauge, AlertTriangle,
} from 'lucide-react';
import { BUSINESS, TRANSMISSION_SERVICES_PAGE_FAQ, PHOTOS } from '@/lib/constants';
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
} from './ServiceSharedSections';
import RelatedServices from '@/app/components/ui/RelatedServices';
import { getServiceBreadcrumbs } from './servicesShared';

const icons = [Cog, Gauge, AlertTriangle];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "Slip & flare between gears",
    body: "RPM flare during a 2-3 shift means clutch pack capacity is gone or line pressure is low from a worn pump or leaking solenoid circuit. CVTs show the same as engine speed drifting while road speed stalls. We read TCM adaptive shift data, main-line pressure where accessible, and fluid condition before quoting internal repair vs. converter replacement.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  },
  {
    icon: icons[1],
    title: "Delayed engagement & cold-stall",
    body: "Two to three seconds from Park to Drive on a cold morning often traces to worn pump bore, stuck pressure-regulator valve, or degraded fluid viscosity. Torque-converter clutch shudder feels like driving over rumble strips at 45 mph — usually TCC apply strategy or converter clutch lining. We differentiate hydraulic delay from electronic TCC control with pressure and scan data.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  },
  {
    icon: icons[2],
    title: "CVT vs traditional automatic",
    body: "Nissan/Jatco CVTs, Honda i-MMD, and Toyota e-CVT strategies differ radically from 6-10 speed planetary units. CVT whine with metal in fluid often means belt/pulley damage — flush-only service is off the table. Traditional autos may live with a quality fluid exchange if pan debris is minimal. We identify unit type, read manufacturer TSBs, and scope fluid before recommending rebuild, replace, or service.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Fluid & pan inspection", body: "Color, smell, level, and magnet debris tell us how much friction material has circulated. Burnt varnish means heat damage — we document before any drain." },
  { step: "02", title: "Scan & adaptive data", body: "Gear-slip counts, solenoid command vs. pressure, and stored TCM codes. Ford shift solenoid patterns differ from GM 6L80 strategies — platform knowledge matters." },
  { step: "03", title: "Road test & stall check", body: "Shift quality hot and cold, TCC apply shudder, and manual-line pressure tests when fittings exist. Towing history on I-70 grades is noted — heat kills tow transmissions." },
  { step: "04", title: "Rebuild vs replace scope", body: "High-mileage units with metal in pan may favor reman with warranty. Repair-in-car suits valve-body or external leaks. We quote both paths when viable." },
  { step: "05", title: "Written estimate & timeline", body: "Labor at $120/hr plus parts — overhaul scope, fluid service only, or axle-seal repair — approved before the case comes apart." }
];

const CHECKLIST_GROUPS = [
  { category: "Fluid & maintenance", items: ["Manufacturer-spec fluid exchange with new filter when serviceable", "Pan-drop inspection with debris documentation", "Cooler-line and external leak repair"] },
  { category: "Diagnostics & repair", items: ["Valve-body and solenoid testing", "Torque-converter shudder and bearing noise isolation", "Manual clutch, slave cylinder, and shifter cable service"] },
  { category: "Rebuild coordination", items: ["In-house teardown assessment and parts sourcing", "Remanufactured unit comparison quotes when appropriate", "Post-install adaptive reset and road-test verification"] },
  { category: "Local context", items: ["Towing and mountain-grade heat stress evaluation", "Fleet truck transmission service intervals", "CVT-specific failure-pattern experience"] }
];

export default function TransmissionServicesContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs('Transmission Services')}
        image={PHOTOS.classicLift}
        imageAlt="Transmission Services at RKC Automotive Englewood CO"
        eyebrow={"Transmissions · Englewood, CO"}
        title={"Transmission Repair & Service in Englewood, CO"}
        description={"Slipping, delayed engagement, or burnt-fluid smell? We diagnose automatic, manual, and CVT units — fluid analysis, pressure tests, and scoped teardown recommendations — with written estimates before major work."}
        primaryCta={{ href: '/contact', label: "Transmission Help" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"Burnt fluid is a symptom — not a service."}
        body={"A dark-fluid flush on a slipping transmission often accelerates failure by dislodging clutch material without fixing the worn band or torque-converter clutch. Denver stop-and-go on I-25 heats fluid past 200°F on summer afternoons. We inspect color, smell, and debris on the pan magnet before recommending fluid service, valve-body work, or rebuild — because the right fix depends on what the friction material is doing inside the case."}
      />

      <ServiceSymptomGrid
        eyebrow={"Shift problems"}
        title={"Transmission failure modes we diagnose"}
        intro={"Transmissions fail gradually — harsh shifts today become slip tomorrow. These symptoms need professional diagnosis, not another quart from the parts store."}
        cards={SYMPTOMS}
      />

      <ServiceTechnicalSection
        eyebrow="Transmission science"
        title="Fluid color chart, CVT vs planetary, TCM relearn"
        intro="Transmission failures are expensive — our technical evaluation starts with fluid condition, unit identification, and adaptive data before recommending flush, repair, or rebuild."
        cards={[
          {
            title: 'Automatic transmission fluid color',
            body: 'Bright red or pink with no burnt smell is healthy. Brown shows age and additive depletion. Dark brown or black with burnt odor means heat damage — internal clutch wear is likely. Metal glitter on the pan magnet confirms friction material loss. We document color, smell, and debris before recommending service scope.',
            accent: 'text-red-400',
            accentBg: 'bg-red-500/10',
            accentBorder: 'border-red-500/25',
          },
          {
            title: 'CVT vs traditional planetary automatic',
            body: 'Nissan/Jatco CVTs use steel belts on variable pulleys with specific friction-modified fluid — wrong fluid causes slip and overheating. Traditional 6–10 speed units use clutch packs and defined gear shifts. CVT whine with metal in fluid often means replacement, not flush. We identify unit type from VIN and pan before quoting.',
            accent: 'text-sky-400',
            accentBg: 'bg-sky-500/10',
            accentBorder: 'border-sky-500/25',
          },
          {
            title: 'TCM adaptive relearn procedures',
            body: 'The transmission control module adapts shift pressure and timing to wear. After valve-body service, fluid exchange, or battery disconnect, shifts may feel harsh until relearn completes. Ford, GM, and Nissan CVTs often require scan-tool relearn — we reset adaptive tables and road-test hot and cold before return.',
            accent: 'text-amber-400',
            accentBg: 'bg-amber-500/10',
            accentBorder: 'border-amber-500/25',
          },
          {
            title: 'Torque converter clutch shudder',
            body: 'TCC shudder feels like rumble strips at 45 mph — usually converter clutch apply strategy, degraded fluid, or worn converter lining. We differentiate hydraulic delay from electronic TCC control with pressure and scan data. Misdiagnosed shudder leads to unnecessary rebuilds when fluid and TCC strategy are the real fix.',
            accent: 'text-emerald-400',
            accentBg: 'bg-emerald-500/10',
            accentBorder: 'border-emerald-500/25',
          },
        ]}
        tableTitle="Transmission fluid color & condition chart"
        table={{
          caption: 'Automatic transmission fluid condition guide',
          columns: ['Appearance', 'Smell', 'Typical action'],
          rows: [
            { label: 'Bright red / pink', values: ['Normal', 'Serviceable — pan inspect if due'], highlight: 2 },
            { label: 'Light brown', values: ['Slight aged', 'Fluid exchange if interval due'] },
            { label: 'Dark brown', values: ['Burnt hint', 'Inspect pan debris — may need repair'] },
            { label: 'Black + burnt', values: ['Burnt', 'Teardown assessment — flush alone risky'], highlight: 2 },
            { label: 'Metal on magnet', values: ['N/A', 'Internal wear — rebuild/replace path'], highlight: 2 },
          ],
        }}
      />

      <ServiceProcessTimeline
        eyebrow={"Diagnostic path"}
        title={"Transmission evaluation steps"}
        intro={"Major transmission work is expensive — our process is built to prove what failed before you approve teardown."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.classicLift}
        bgImageAlt="Transmission Services at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"Services offered"}
        title={"Transmission work we perform"}
        intro={"From fluid maintenance to full rebuild coordination, RKC handles the diagnostics and mechanical work Englewood drivers need."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"Transmission labor transparency"}
        description={"Transmission diagnostics and repair bill at $120/hr with written scope before teardown. Fluid service, seal repair, and overhaul each get separate approval — no surprise case splits."}
      />

      <ServiceFAQSection
        title={"Transmission questions"}
        intro={"Fluid flush vs pan drop, CVT life, rebuild timelines, and when to stop driving a slipping unit."}
        items={TRANSMISSION_SERVICES_PAGE_FAQ}
      />
      <RelatedServices slug="transmission-services-englewood-co" />
      <ServiceAreaServed serviceLabel="transmission service" />
      <ServiceFinalCTA
        title={"Transmission acting up?"}
        description={"Schedule diagnosis at RKC on Evans Ave. We read fluid, scan TCM data, and quote the right fix — service, repair, or rebuild — before major money moves."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Schedule service" }}
      />
    </div>
  );
}
