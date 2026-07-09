'use client';

import {
  Battery, Zap, Thermometer,
} from 'lucide-react';
import { BUSINESS, BATTERY_TESTING_PAGE_FAQ, PHOTOS } from '@/lib/constants';
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

const icons = [Battery, Zap, Thermometer];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "Slow crank & dim headlights",
    body: "Voltage below 12.4V resting or crank sag under 9.6V means insufficient capacity or high internal resistance. Dim lights during crank while RPM rises confirms the alternator is trying — but the battery cannot deliver cold-cranking amps. Our conductance tester prints state-of-health percentage; we share the readout before recommending replacement.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  },
  {
    icon: icons[1],
    title: "Corrosion & cable resistance",
    body: "White-green bloom on terminals adds resistance that mimics a dead battery. Side-post GM cables fail inside the lead terminal where you cannot see it. We clean, torque, and voltage-drop test cables — a $0 fix that prevents a $180 battery on the wrong diagnosis.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  },
  {
    icon: icons[2],
    title: "Age & Colorado climate",
    body: "Most flooded batteries last 3–5 years in Denver metro heat cycles. Start-stop AGM applications on newer imports demand correct group and capacity — wrong amp-hour rating triggers premature failure and idle-stop faults. We match CCA and reserve capacity to your VIN and install date-stamped stock.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Visual & terminal service", body: "Case bulge, leak, and terminal corrosion documented. Terminals cleaned for accurate readings." },
  { step: "02", title: "Conductance test", body: "Printed state-of-health and CCA available vs rated. Results explained — not just pass/fail." },
  { step: "03", title: "Charging system check", body: "Alternator voltage and ripple under load. Belt and ground strap inspected." },
  { step: "04", title: "Starter draw sample", body: "High draw with good battery points to starter motor — we flag before you replace the wrong part." },
  { step: "05", title: "Install & register", body: "New batteries torque-to-spec, BMS registered on vehicles that require scan-tool reset — so idle-stop works day one." }
];

const CHECKLIST_GROUPS = [
  { category: "Testing", items: ["Free battery conductance test", "Charging-system voltage and ripple check", "Starter amperage sample on request"] },
  { category: "Replacement", items: ["Flooded and AGM batteries matched to VIN", "Terminal hardware and cable end repair", "Battery management system reset when required"] },
  { category: "Related repairs", items: ["Alternator and starter replacement if test flags failure", "Parasitic draw test for overnight dead batteries", "Ground strap and engine-to-chassis cable service"] },
  { category: "Winter prep", items: ["Pre-winter battery health checks for Englewood fleets", "Truck dual-battery and diesel high-CCA options", "Same-day install when inventory allows"] }
];

export default function BatteryTestingContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs('Battery Testing')}
        image={PHOTOS.teamCuevas}
        imageAlt="Battery Testing at RKC Automotive Englewood CO"
        eyebrow={"Starting power · Englewood, CO"}
        title={"Car Battery Testing & Replacement in Englewood, CO"}
        description={"Free battery health testing with charging-system verification — because a new battery on a weak alternator fails twice. Same-day replacement when stock allows at our Evans Ave shop."}
        primaryCta={{ href: '/contact', label: "Free Battery Test" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"Colorado cold starts punish marginal batteries."}
        body={"A battery that tests \"borderline\" at 70°F fails at 10°F on a January morning in Englewood — when you need it most. High under-hood temps in summer traffic cook plates and evaporate electrolyte on non-AGM designs. We test conductance, check alternator output, and inspect cables before selling you a group size — so winter no-starts and summer heat failures drop off your calendar."}
      />

      <ServiceSymptomGrid
        eyebrow={"Battery health"}
        title={"When to test or replace your battery"}
        intro={"Batteries fail on a curve — slow crank today, no-start tomorrow. These signs mean test now, not after a jump."}
        cards={SYMPTOMS}
      />

      <ServiceTechnicalSection
        eyebrow="Battery science"
        title="CCA testing, sulfation & Colorado cold-start demands"
        intro="A battery that tests borderline at 70°F fails at 10°F on a January morning in Englewood. We conductance-test CCA, inspect for sulfation, and verify alternator output before selling you a group size."
        cards={[
          {
            title: 'CCA conductance testing',
            body: 'Cold Cranking Amps measure starting power at 0°F — critical for Colorado winters. Resting voltage above 12.4V does not mean the battery delivers rated CCA. Our conductance tester prints state-of-health percentage — we share the readout before recommending replacement. A 70% health battery may start today and fail tomorrow at dawn.',
            accent: 'text-amber-400',
            accentBg: 'bg-amber-500/10',
            accentBorder: 'border-amber-500/25',
          },
          {
            title: 'Sulfation from short trips',
            body: 'Lead sulfate crystals form when a battery sits partially discharged — short-trip Englewood commuting without full recharge accelerates sulfation. Advanced sulfation is not reversible — replacement is the fix. Regular driving or a maintainer on stored vehicles prevents capacity loss that voltage checks miss.',
            accent: 'text-sky-400',
            accentBg: 'bg-sky-500/10',
            accentBorder: 'border-sky-500/25',
          },
          {
            title: 'AGM vs flooded in start-stop vehicles',
            body: 'Start-stop and idle-stop systems demand AGM batteries with correct amp-hour and CCA ratings. Wrong group size triggers premature failure and idle-stop faults. We match battery type to VIN and register BMS on European and Asian platforms that require scan-tool reset after install.',
            accent: 'text-emerald-400',
            accentBg: 'bg-emerald-500/10',
            accentBorder: 'border-emerald-500/25',
          },
          {
            title: 'Colorado heat + cold cycle stress',
            body: 'Summer under-hood temps above 140°F evaporate electrolyte on flooded designs. Winter cold increases internal resistance. Temperature swings from I-25 traffic to sub-zero mornings are harder on batteries than steady coastal climates — pre-winter testing catches borderline units before no-start season.',
            accent: 'text-red-400',
            accentBg: 'bg-red-500/10',
            accentBorder: 'border-red-500/25',
          },
        ]}
        tableTitle="Battery type comparison"
        table={{
          caption: 'Flooded vs AGM battery comparison',
          columns: ['Type', 'Best for', 'Colorado note'],
          rows: [
            { label: 'Flooded (FLA)', values: ['Older vehicles, standard cranking', '3–5 yr typical life in metro heat'], highlight: 2 },
            { label: 'AGM', values: ['Start-stop, luxury, deep cycling', 'Required for many 2015+ platforms'] },
            { label: 'EFB (enhanced flooded)', values: ['Entry start-stop', 'Mid-tier stop-start applications'] },
          ],
        }}
      />

      <ServiceProcessTimeline
        eyebrow={"Test procedure"}
        title={"Free battery test — what it includes"}
        intro={"Testing takes ten minutes and includes the charging system — not just a voltmeter across the posts."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.teamCuevas}
        bgImageAlt="Battery Testing at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"Services"}
        title={"Battery and charging services"}
        intro={"Keep starting reliable through Colorado seasons with tested components — not hope."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"Battery service pricing"}
        description={"Testing is free. Replacement from $149 plus battery cost — labor at $120/hr when cables, alternators, or starters are part of the fix."}
      />

      <ServiceFAQSection
        title={"Battery questions"}
        intro={"Battery life in Colorado, AGM vs flooded, alternator testing, and BMS reset on newer cars."}
        items={BATTERY_TESTING_PAGE_FAQ}
      />
      <RelatedServices slug="battery-testing-englewood-co" />
      <ServiceAreaServed serviceLabel="battery testing" relatedServiceSlug="battery-testing-englewood-co" />
      <ServiceFinalCTA
        title={"Battery worried you?"}
        description={"Stop by RKC on Evans Ave for a free test with charging-system check. Replace only when data says so — same-day install available."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Get directions" }}
      />
    </div>
  );
}
