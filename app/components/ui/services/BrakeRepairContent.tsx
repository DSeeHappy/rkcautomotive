'use client';

import {
  Disc, Gauge, AlertTriangle,
} from 'lucide-react';
import { BUSINESS, BRAKE_REPAIR_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import {
  ServiceCinematicHero,
  ServiceRealityBand,
  ServiceSymptomGrid,
  ServiceProcessTimeline,
  ServiceChecklistGrid,
  ServiceLaborBand,
  ServiceFAQSection,
  ServiceFinalCTA,
} from './ServiceSharedSections';

const icons = [Disc, Gauge, AlertTriangle];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "Pedal pulsation & warped rotors",
    body: "Pulsation through the steering wheel or brake pedal under light braking means the rotor friction surface has high spots — often from overheating on long downhill grades toward Idaho Springs or from uneven lug-nut torque after a tire rotation. Resurfacing only works when thickness remains above minimum spec; many modern rotors are too thin to machine and require replacement. We measure runout and thickness with a dial indicator, not eyeball judgment.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  },
  {
    icon: icons[1],
    title: "Grinding & metal-on-metal wear",
    body: "Squeal tabs are designed to warn before steel contacts steel. Once you hear grinding, the pad backing plate is machining the rotor and generating heat that glazes pad compound and overheats caliper pistons. Continued driving scores rotors beyond salvage and can seize a caliper — turning a pad job into pads, rotors, hardware, and a caliper rebuild. If you hear grinding, schedule service this week, not next month.",
    warning: "Metal-on-metal grinding destroys rotors and calipers fast.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  },
  {
    icon: icons[2],
    title: "Soft pedal & fluid contamination",
    body: "A pedal that sinks toward the floor — especially after sitting overnight — traces to fluid moisture absorption, internal seal bypass in the master cylinder, or air in the hydraulic circuit after a caliper service. Brake fluid is hygroscopic; Colorado humidity and heat cycles push DOT 3/4 fluid past its useful life. We test copper content and boiling point, then flush or repair the component that failed — not just top off the reservoir and send you home.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Road test & pedal feel", body: "We reproduce pulsation, pull, and noise under controlled braking when safe. Pedal travel and ABS activation at parking-lot speeds tell us whether the issue is hydraulic, mechanical, or sensor-related before the wheels come off." },
  { step: "02", title: "Measure rotors & pads", body: "Micrometer readings on rotor thickness and runout, plus pad lining depth at inner and outer edges. Uneven wear flags stuck caliper slides, collapsed hoses, or ABS modulator issues — not just \"time for pads.\"" },
  { step: "03", title: "Caliper & hardware check", body: "Slide pins, abutment clips, and bracket ears get cleaned and lubricated with high-temp brake grease. Seized pins cause outer-pad-only wear and overheating. We quote hardware kits when clips are corroded — cheap insurance against comeback noise." },
  { step: "04", title: "Fluid & ABS scan", body: "Moisture-contaminated fluid gets flushed when test strips or copper ppm readings demand it. ABS wheel-speed sensors and tone rings are inspected for metal debris after pad work — a common post-grinding oversight that triggers false ABS activation." },
  { step: "05", title: "Bed-in & final verification", body: "New pads and rotors need a controlled bedding procedure — moderate stops from 40 mph without coming to a complete halt until the transfer layer forms. We road-test pedal firmness and ABS function before you leave our Englewood lot." }
];

const CHECKLIST_GROUPS = [
  { category: "Friction components", items: ["Ceramic and semi-metallic pad sets matched to your driving style", "Rotor replacement or on-car machining when thickness allows", "Caliper rebuild, slide service, and parking brake shoe adjustment"] },
  { category: "Hydraulics & ABS", items: ["Brake fluid flush with DOT-spec fluid and moisture testing", "Master cylinder, brake line, and flexible hose inspection", "ABS wheel-speed sensor and tone-ring cleaning after debris events"] },
  { category: "Inspection & safety", items: ["Free visual brake inspection with any service visit", "Written estimate before parts are ordered", "Post-repair road test and bedding guidance for new friction material"] },
  { category: "Englewood & metro drivers", items: ["Mountain-grade brake evaluation for I-70 commuters", "Fleet and work-truck heavy-load brake packages", "Same-day service when parts are in stock — call before 2 PM"] }
];

export default function BrakeRepairContent() {
  return (
    <div>
      <ServiceCinematicHero
        image={PHOTOS.undercarriage}
        imageAlt="Brake Repair Service at RKC Automotive Englewood CO"
        eyebrow={"Brake systems · Englewood, CO"}
        title={"Expert Brake Repair & Service in Englewood, CO"}
        description={"Grinding, vibration, or a soft pedal? We inspect pads, rotors, calipers, and ABS hardware with a written estimate before any wrench turns — same-day openings when parts are on hand at our Evans Ave shop."}
        primaryCta={{ href: '/contact', label: "Schedule Brake Service" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"Warped rotors do not fix themselves with a parts-store pad swap."}
        body={"Colorado mountain descents on I-70 and stop-and-go on Santa Fe Drive heat rotors past their temper. Pads alone cannot cure pedal pulsation or ABS activation at low speed — the friction surface needs measurement, not guesswork. Englewood drivers who wait on metal-on-metal grinding pay for calipers and hubs too. We measure rotor thickness, check pad wear sensors, and test fluid moisture before quoting what your brakes actually need."}
      />

      <ServiceSymptomGrid
        eyebrow={"Warning signs"}
        title={"When your brakes are telling you something"}
        intro={"Brake problems rarely announce themselves with a dashboard light first. Pedal feel, noise, and steering pull change gradually — until an emergency stop on Broadway exposes how much stopping power you have lost."}
        cards={SYMPTOMS}
      />

      <ServiceProcessTimeline
        eyebrow={"Our process"}
        title={"From inspection to verified stop"}
        intro={"Every brake job at RKC starts with measurement, not assumptions. We document pad thickness, rotor condition, caliper slide function, and fluid health before you approve parts."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.undercarriage}
        bgImageAlt="Brake Repair Service at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"What we service"}
        title={"Complete brake system coverage"}
        intro={"Pads and rotors are only part of the system. We service the hydraulic and electronic layers that actually translate pedal force into stopping power."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"Labor transparency on every brake job"}
        description={"Brake work should never be a mystery invoice. We bill at our posted $120/hr rate with AllData labor times as a baseline. Pad-and-rotor per axle, caliper rebuild, and fluid flush scopes are documented on your written estimate before we order parts."}
      />

      <ServiceFAQSection
        title={"Brake repair questions"}
        intro={"Straight answers on pad life, rotor resurfacing, ABS lights, and what Colorado driving does to your stopping system."}
        items={BRAKE_REPAIR_PAGE_FAQ}
      />

      <ServiceFinalCTA
        title={"Ready for a brake inspection?"}
        description={"Free visual inspection at 2120 W Evans Ave. We measure, explain, and quote — pads, rotors, fluid, or calipers — at $120/hr labor plus parts before any work begins."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Schedule online" }}
      />
    </div>
  );
}
