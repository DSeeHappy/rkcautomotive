'use client';

import {
  Droplet, Gauge, Thermometer,
} from 'lucide-react';
import { BUSINESS, OIL_CHANGES_PAGE_FAQ, PHOTOS } from '@/lib/constants';
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

const icons = [Droplet, Gauge, Thermometer];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "Synthetic vs conventional intervals",
    body: "Modern turbocharged engines — EcoBoost, Honda 1.5T, BMW B48 — specify synthetic 0W-20 or 5W-30 with 5,000–7,500 mile intervals despite dash reminders stretching farther. Conventional oil in a turbo application cokes on hot bearing surfaces. We match viscosity and API/ILSAC spec to your owner manual and driving pattern — short trips on Federal Blvd count as severe service.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  },
  {
    icon: icons[1],
    title: "Filter bypass & drain plug integrity",
    body: "Cheap filters collapse under bypass valve pressure and send unfiltered oil to bearings. Over-torqued aluminum drain pans strip threads — a $400 pan replacement from a $29 change. We torque drain plugs to spec, lubricate gaskets, and use filter brands with documented burst strength. Undercarriage shields come off so we actually see the plug and filter, not just reach blindly.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  },
  {
    icon: icons[2],
    title: "30/60/90k companion services",
    body: "Oil changes are the touchpoint for coolant strength, brake fluid age, cabin filter debris, and timing-belt mileage on interference engines. A 60k service on a Honda includes more than oil — trans fluid, spark plugs, and valve adjustment windows matter. We align maintenance with factory severe schedules because Denver heat and winter salt qualify as severe for most commuters.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Spec verification", body: "VIN and sticker lookup confirm viscosity, capacity, and filter part number — turbo DI engines get specific synthetic approvals." },
  { step: "02", title: "Drain & inspect", body: "Plug gasket replaced, threads inspected, and drain stream checked for metal glitter that would flag bearing wear." },
  { step: "03", title: "Filter & fill", body: "Filter pre-filled when orientation allows, torque-to-spec install, and fill to level with dipstick verification — not just pump auto-stop." },
  { step: "04", title: "Multi-point inspection", body: "Fluids, belts, hoses, tire wear, and visible leaks documented on your invoice — no pressure to fix what is healthy." },
  { step: "05", title: "Monitor reset & sticker", body: "Oil-life monitor reset, service reminder sticker, and recommended return mileage based on your actual driving — not a generic 3,000-mile scare." }
];

const CHECKLIST_GROUPS = [
  { category: "Oil options", items: ["Conventional for older low-stress engines per manual", "Full synthetic and synthetic-blend per OEM spec", "High-mileage formulations with seal conditioners when appropriate"] },
  { category: "Filters", items: ["OEM and premium aftermarket oil filters", "Engine air and cabin filter replacement on request", "Fuel filter on diesel and high-mileage applications"] },
  { category: "Fluid top-offs", items: ["Coolant, brake, power-steering, and washer fluid level check", "Transmission and differential level inspection where dipstick exists", "DEF top-off on diesel when low"] },
  { category: "Scheduled packages", items: ["30k/60k/90k milestone service bundles quoted upfront", "Timing-belt interval reminders on interference engines", "Fleet maintenance logging for commercial accounts"] }
];

export default function OilChangesContent() {
  return (
    <div>
      <ServiceCinematicHero
        image={PHOTOS.teamCollab}
        imageAlt="Oil Changes at RKC Automotive Englewood CO"
        eyebrow={"Maintenance · Englewood, CO"}
        title={"Professional Oil Change Service in Englewood, CO"}
        description={"Conventional, full synthetic, and high-mileage oil changes with OEM-spec filters, torque-to-spec drain plugs, and a multi-point inspection — not a fifteen-minute pit-lane rush job on Evans Ave."}
        primaryCta={{ href: '/contact', label: "Schedule Oil Change" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"The cheapest oil change is the one that does not bypass your filter."}
        body={"Quick-lube lanes optimize volume — cross-threaded drain plugs, wrong-viscosity bulk oil, and crushed filter gaskets show up in our bay weekly from Englewood drivers who saved ten dollars. Colorado cold starts at 5,280 feet demand correct viscosity and a filter that actually traps soot from direct-injection engines. We use the right spec, reset your oil-life monitor, and inspect leaks under the shield you never look at."}
      />

      <ServiceSymptomGrid
        eyebrow={"Oil science"}
        title={"Why interval and spec matter in Colorado"}
        intro={"Oil is not just mileage math — turbochargers, GDI soot, and altitude change how fast additive packages deplete."}
        cards={SYMPTOMS}
      />

      <ServiceProcessTimeline
        eyebrow={"Every visit"}
        title={"What our oil service includes"}
        intro={"An RKC oil change is a documented maintenance event — not a conveyor belt."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.teamCollab}
        bgImageAlt="Oil Changes at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"Fluids & filters"}
        title={"Maintenance beyond the oil change"}
        intro={"Pair your oil service with the filters and fluids that protect the rest of the powertrain."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"Oil change pricing transparency"}
        description={"Oil changes from $49 conventional and $79 synthetic plus parts — labor at $120/hr when additional services are approved. No hidden shop-supply fees on the menu price."}
      />

      <ServiceFAQSection
        title={"Oil change questions"}
        intro={"Synthetic intervals, filter quality, and what Colorado severe service means for your engine."}
        items={OIL_CHANGES_PAGE_FAQ}
      />

      <ServiceFinalCTA
        title={"Due for an oil change?"}
        description={"Walk in or schedule at RKC Automotive on Evans Ave. Correct spec, honest inspection, and $120/hr labor on anything beyond the basic service."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Book online" }}
      />
    </div>
  );
}
