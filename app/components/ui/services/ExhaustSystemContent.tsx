'use client';

import {
  Volume2, Wind, AlertTriangle,
} from 'lucide-react';
import { BUSINESS, EXHAUST_SYSTEM_PAGE_FAQ, PHOTOS } from '@/lib/constants';
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
} from './ServiceSharedSections';
import RelatedServices from '@/app/components/ui/RelatedServices';
import { getServiceBreadcrumbs } from './servicesShared';

const icons = [Volume2, Wind, AlertTriangle];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "Catalytic efficiency codes",
    body: "P0420/P0430 mean the downstream O2 sensor sees too little activity — worn catalyst, or a sensor/reporting issue. Exhaust leaks upstream of the converter let oxygen in and mimic failure. We graph O2 switching, check for manifold cracks, and verify fuel trim is not running rich before recommending converter replacement.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  },
  {
    icon: icons[1],
    title: "Leaks, rattle & fumes",
    body: "Ticking on cold start that fades may be an exhaust manifold crack — common on cast-iron manifolds and certain V8s. Flex-pipe bellows tear on lowered vehicles and trucks with broken motor mounts. Carbon monoxide does not smell; rotten egg is catalyst sulfate — different dangers. We lift every vehicle, smoke-test critical joints, and weld or replace sections to seal fumes out of the cabin.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  },
  {
    icon: icons[2],
    title: "Colorado emissions compliance",
    body: "Englewood and Denver metro emissions require ready monitors and passing tailpipe standards on applicable vehicles. Converter deletes fail inspection and risk fines. We install EPA/CARB-compliant components, complete drive cycles after repair, and document readiness so you are not back in line twice.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Lift & visual map", body: "Manifold, flex, hangers, and converter shells inspected for rust, crush, and tamper evidence." },
  { step: "02", title: "Leak & O2 data", body: "Smoke or pressure test on manifolds. Scan tool O2 comparison at steady cruise and idle." },
  { step: "03", title: "Root-cause first", body: "Misfire, fuel trim, and exhaust leak repairs before converter quote when data supports it." },
  { step: "04", title: "Section repair or replace", body: "Quality mufflers, direct-fit pipes, and compliant converters. Welds ground smooth, hangers isolated from vibration." },
  { step: "05", title: "Emissions verification", body: "Monitor readiness guidance and road test for noise. Re-scan confirms code resolution when converter was the fault." }
];

const CHECKLIST_GROUPS = [
  { category: "Repair", items: ["Manifold gasket and stud extraction", "Flex-pipe and intermediate pipe replacement", "Muffler and resonator delete-and-replace (compliant)"] },
  { category: "Emissions", items: ["Catalytic converter replacement — CARB/EPA compliant", "O2 sensor diagnosis and replacement", "Post-repair monitor drive-cycle coaching"] },
  { category: "Custom & HD", items: ["Truck exhaust hanger and stack support", "Rust-belt section replacement with quality steel", "Welding and fabrication for odd sections"] },
  { category: "Inspection", items: ["Pre-purchase exhaust and emissions assessment", "Colorado emissions-failure triage", "Written estimate before cutting pipe"] }
];

export default function ExhaustSystemContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs('Exhaust System')}
        image={PHOTOS.undercarriage}
        imageAlt="Exhaust System at RKC Automotive Englewood CO"
        eyebrow={"Exhaust & emissions · Englewood, CO"}
        title={"Exhaust System Repair in Englewood, CO"}
        description={"Rattles, rotten-egg smell, or P0420 catalyst codes? We inspect manifolds, flex pipes, converters, and mufflers — weld, clamp, or replace with emissions-compliant parts and written estimates first."}
        primaryCta={{ href: '/contact', label: "Exhaust Inspection" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"A check-engine P0420 is not always a bad catalytic converter."}
        body={"Upstream misfires, leaking exhaust manifolds, and lazy O2 sensors set efficiency codes on converters that still flow fine. Colorado emissions stations do not care about the nuance — they read monitors and tailpipe numbers. We compare upstream/downstream O2 waveforms, inspect for leaks that pull false air, and fix root causes before quoting CARB-compliant converters that cost four figures."}
      />

      <ServiceSymptomGrid
        eyebrow={"Exhaust faults"}
        title={"Exhaust and emissions symptoms"}
        intro={"Exhaust problems range from annoying rattles to failed emissions tests — each needs inspection under the vehicle, not a catalog muffler quote."}
        cards={SYMPTOMS}
      />

      <ServiceProcessTimeline
        eyebrow={"Repair path"}
        title={"Exhaust diagnosis to compliant repair"}
        intro={"Emissions-aware repair — fix the cause, seal the path, verify the monitors."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.undercarriage}
        bgImageAlt="Exhaust System at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"Components"}
        title={"Exhaust services we perform"}
        intro={"From manifold gaskets to full cat-back, we keep your exhaust quiet, sealed, and emissions-legal."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"Exhaust repair labor"}
        description={"Exhaust labor at $120/hr with compliant parts itemized. Converter jobs include O2 verification and readiness coaching — not just bolt-on and clear codes."}
      />

      <ServiceFAQSection
        title={"Exhaust system questions"}
        intro={"Catalytic converter cost, emissions tests, manifold cracks, and aftermarket exhaust legality in Colorado."}
        items={EXHAUST_SYSTEM_PAGE_FAQ}
      />
      <RelatedServices slug="exhaust-system-englewood-co" />
      <ServiceAreaServed serviceLabel="exhaust system repair" />
      <ServiceFinalCTA
        title={"Exhaust noise or emissions code?"}
        description={"Inspect exhaust at RKC on Evans Ave. Leak sealed, catalyst verified, monitors ready — $120/hr labor on every repair."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Schedule inspection" }}
      />
    </div>
  );
}
