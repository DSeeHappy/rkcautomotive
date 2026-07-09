'use client';

import {
  Zap, Battery, AlertTriangle,
} from 'lucide-react';
import { BUSINESS, ELECTRICAL_SYSTEM_PAGE_FAQ, PHOTOS } from '@/lib/constants';
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

const icons = [Zap, Battery, AlertTriangle];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "Slow crank & no-start",
    body: "Cranking below 9.6 volts at the starter often means weak battery or high-resistance cables — not always a bad starter. Heat-soaked starters on V8 trucks fail intermittently after the third stop of the day. We voltage-drop test positive and ground circuits under load before quoting a $400 starter on a $40 cable.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  },
  {
    icon: icons[1],
    title: "Alternator & warning lights",
    body: "Battery light on at idle that goes out at 2,000 RPM can be a slipping serpentine belt or failing diode trio. Ripple above 500 mV AC at the battery means toasted rectifier plates. We scope charging voltage across RPM range and load — headlights and blower on — before swapping alternators.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  },
  {
    icon: icons[2],
    title: "Parasitic drain & module wake",
    body: "Dead battery after 48 hours parked means a module not sleeping — aftermarket amps, dashcams hardwired wrong, or a stuck GEM on Ford trucks. We measure amp draw after door-trigger shutdown timers expire, then pull fuses to isolate the circuit. Wiring harness rub-through on unibody pinch welds is common on high-mileage Denver commuters.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Battery health test", body: "Conductance or load test with printed results. Terminals cleaned and torque-checked before any charging-system diagnosis." },
  { step: "02", title: "Charging system analysis", body: "Alternator output, ripple, and belt tension verified under electrical load. PCM charging setpoints compared on vehicles with smart charge." },
  { step: "03", title: "Starter circuit drop test", body: "Voltage drop on positive cable, ground strap, and starter trigger wire isolates high resistance vs. mechanical starter failure." },
  { step: "04", title: "Parasitic & wiring", body: "Milliamp draw test and fuse isolation for overnight drains. Wiring repaired with heat-shrink, solder, and loom — not twist-and-tape." },
  { step: "05", title: "Repair verification", body: "Re-test after part install. No-start tickets get a cold-start crank log before you pick up from our Englewood lot." }
];

const CHECKLIST_GROUPS = [
  { category: "Starting & charging", items: ["Battery test, install, and terminal service", "Alternator and starter replacement", "Voltage-drop testing on main cables"] },
  { category: "Lighting & accessories", items: ["Headlight, taillight, and trailer wiring repair", "Power-window and lock motor diagnosis", "Aftermarket accessory integration done safely"] },
  { category: "Diagnostics", items: ["Parasitic draw isolation", "CAN-bus communication fault tracing", "Module power and ground integrity checks"] },
  { category: "Fleet & commercial", items: ["Work-truck dual-battery systems", "Liftgate and upfitter electrical loads", "Priority no-start service when available"] }
];

export default function ElectricalSystemContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs('Electrical System')}
        image={PHOTOS.teamInspect}
        imageAlt="Electrical System at RKC Automotive Englewood CO"
        eyebrow={"Electrical · Englewood, CO"}
        title={"Auto Electrical System Repair in Englewood, CO"}
        description={"No-start, dim lights, or parasitic drain killing your battery overnight? We test starting and charging circuits, trace wiring faults, and repair alternators and starters — with documented voltage readings on every estimate."}
        primaryCta={{ href: '/contact', label: "Electrical Diagnosis" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"Replacing the battery without testing the alternator is guesswork."}
        body={"A new battery on a weak alternator dies in three days — and you blame the parts store. Modern Englewood vehicles run 30+ modules that draw milliamp parasitic current; a stuck relay or aftermarket accessory can flatten a group 24 overnight. We measure resting draw, alternator ripple, and starter amperage before recommending parts — so the fix matches the circuit that failed."}
      />

      <ServiceSymptomGrid
        eyebrow={"Electrical faults"}
        title={"Common electrical failure patterns"}
        intro={"Electrical problems look like engine problems until you read voltage — we start with the battery and work upstream."}
        cards={SYMPTOMS}
      />

      <ServiceProcessTimeline
        eyebrow={"Test sequence"}
        title={"Electrical diagnostic workflow"}
        intro={"Voltage, resistance, and current — measured, not assumed."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.teamInspect}
        bgImageAlt="Electrical System at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"Repairs"}
        title={"Electrical services we provide"}
        intro={"From battery replacement to harness repair — one shop for starting, charging, and lighting faults."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"Electrical labor transparency"}
        description={"Electrical diagnostics from $129 with repair labor at $120/hr. Test results stay on your invoice — resistance readings, draw measurements, and parts spec."}
      />

      <ServiceFAQSection
        title={"Electrical system questions"}
        intro={"Battery vs alternator, parasitic drain causes, and when a no-start is a starter."}
        items={ELECTRICAL_SYSTEM_PAGE_FAQ}
      />
      <RelatedServices slug="electrical-system-englewood-co" />
      <ServiceAreaServed serviceLabel="electrical system repair" />
      <ServiceFinalCTA
        title={"Electrical problem leaving you stranded?"}
        description={"Diagnose starting and charging at RKC on Evans Ave. Tested circuits, quoted repairs, $120/hr labor — before you buy parts that do not fix the fault."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Schedule diagnosis" }}
      />
    </div>
  );
}
