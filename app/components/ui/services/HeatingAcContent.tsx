'use client';

import {
  Wind, Thermometer, Snowflake,
} from 'lucide-react';
import { BUSINESS, HEATING_AC_PAGE_FAQ, PHOTOS } from '@/lib/constants';
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

const icons = [Wind, Thermometer, Snowflake];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "Weak AC & warm vents",
    body: "Vent temp above 50°F at idle with the fan on high often means low refrigerant charge, weak compressor, or a stuck expansion valve. Dual-zone systems add blend-door actuators that default to heat on one side. We measure high- and low-side pressures against ambient, check condenser fan operation, and command actuators on scan tools before recommending compressor replacement.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  },
  {
    icon: icons[1],
    title: "No heat & foggy windshield",
    body: "Coolant full but lukewarm heat at idle points to a clogged heater core or stuck thermostat — common when deferred coolant service lets scale build. Sweet fog on the windshield means heater-core seep — stop driving and schedule service before coolant contaminates the carpet and electronics under the center stack.",
    warning: "Sweet fog inside = possible heater core leak. Schedule service promptly.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  },
  {
    icon: icons[2],
    title: "Compressor noise & clutch",
    body: "Clicking every few seconds is normal clutch cycling; grinding on engagement means bearing failure. Overcharged systems from DIY cans slug the compressor with liquid refrigerant. We verify charge weight by scale, inspect clutch air gap, and listen for bearing roughness — compressor swaps are labor-heavy at $120/hr, so we prove failure before ordering reman units.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Performance baseline", body: "Vent temp, fan speeds, and dual-zone behavior recorded. Ambient and humidity noted — pressure specs are temperature-dependent." },
  { step: "02", title: "Refrigerant recovery & leak test", body: "Recover existing charge, vacuum to 500 microns, and hold vacuum. Dye and electronic sniffer trace condenser and fitting leaks." },
  { step: "03", title: "Component isolation", body: "Compressor, condenser fan, expansion device, and blend doors tested independently. Heater-core flow checked when heat is the complaint." },
  { step: "04", title: "Repair & evacuate", body: "O-rings, condensers, compressors, and actuators installed to spec. System evacuated and charged by weight — not guesswork cans." },
  { step: "05", title: "Verify temps", body: "Center vent temp verified at idle and 1,500 RPM. Heat output confirmed on cold morning test when season demands." }
];

const CHECKLIST_GROUPS = [
  { category: "Air conditioning", items: ["R134a and R1234yf leak repair and recharge", "Compressor, condenser, and evaporator replacement", "Expansion valve and orifice-tube service"] },
  { category: "Heating", items: ["Thermostat and water-pump-related heat issues", "Heater-core flush or replacement", "Blend-door and actuator calibration"] },
  { category: "Cabin comfort", items: ["Blower-motor and resistor replacement", "Cabin air filter install", "Refrigerant odor treatment when mold forms on evaporator"] },
  { category: "Denver climate", items: ["High-ambient AC performance tuning", "Winter defrost and heater-core flow checks", "Fleet van HVAC for commercial routes"] }
];

export default function HeatingAcContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs('Heating & AC')}
        image={PHOTOS.interior}
        imageAlt="Heating & AC at RKC Automotive Englewood CO"
        eyebrow={"Climate control · Englewood, CO"}
        title={"Auto AC & Heating Repair in Englewood, CO"}
        description={"Blowing warm in July or cold in January? We diagnose refrigerant leaks, compressor clutch failure, blend doors, and heater-core restrictions — with EPA-compliant recovery and written estimates before major HVAC work."}
        primaryCta={{ href: '/contact', label: "AC & Heating Service" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"A recharge without a leak search is a summer rental — not a repair."}
        body={"R134a and R1234yf systems lose refrigerant only through leaks — o-rings at the compressor, porous condensers from road debris, or corroded evaporator cores. Englewood summer heat above 95°F exposes weak compressors that cooled adequately in spring. We vacuum-test, dye-trace, and repair the leak before charging to spec — so your vent temp stays in the 40s°F through Denver heat waves."}
      />

      <ServiceSymptomGrid
        eyebrow={"HVAC faults"}
        title={"Climate control symptoms we fix"}
        intro={"AC and heat complaints share blend doors, blower motors, and control modules — but each symptom has a distinct test path."}
        cards={SYMPTOMS}
      />

      <ServiceProcessTimeline
        eyebrow={"HVAC workflow"}
        title={"Climate diagnosis and repair"}
        intro={"EPA-compliant service with leak detection — not vent-to-atmosphere shortcuts."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.interior}
        bgImageAlt="Heating & AC at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"System coverage"}
        title={"Heating and AC services"}
        intro={"Summer AC and winter heat share plumbing — we service both sides of the firewall."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"HVAC labor transparency"}
        description={"AC and heating repair at $120/hr with refrigerant and parts itemized. Recharge-with-leak-repair quotes include recovery, vacuum, dye, and charge weight — no hidden environmental fees."}
      />

      <ServiceFAQSection
        title={"AC & heating questions"}
        intro={"Recharge cost, compressor life, heater-core leaks, and R1234yf vs R134a systems."}
        items={HEATING_AC_PAGE_FAQ}
      />
      <RelatedServices slug="heating-ac-englewood-co" />
      <ServiceAreaServed serviceLabel="heating and AC repair" />
      <ServiceFinalCTA
        title={"AC blowing warm?"}
        description={"Schedule HVAC service at RKC on Evans Ave. Leak found, leak fixed, charged to spec — written estimate at $120/hr labor before compressor swaps."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Book service" }}
      />
    </div>
  );
}
