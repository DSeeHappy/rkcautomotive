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
  ServiceAreaServed,
  ServiceTechnicalSection,
} from './ServiceSharedSections';
import RelatedServices from '@/app/components/ui/RelatedServices';
import { getServiceBreadcrumbs } from './servicesShared';

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
        breadcrumbs={getServiceBreadcrumbs('Oil Changes')}
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

      <ServiceTechnicalSection
        eyebrow="Oil specification"
        title="0W-20 vs 5W-30, OEM intervals & Colorado severe service"
        intro="Oil is not one-size-fits-all — turbocharged direct-injection engines, altitude, and short-trip commuting change which viscosity and interval actually protect your engine in Englewood."
        cards={[
          {
            title: '0W-20 vs 5W-30 viscosity',
            body: 'The first number is cold-start flow — 0W flows faster in Colorado winter. The second is hot operating viscosity. Many turbo DI engines specify 0W-20 for fuel economy and turbo bearing protection. Using 5W-30 where 0W-20 is required can void warranty coverage and increase cold-start wear on EcoBoost, Honda 1.5T, and Toyota 2.5L platforms.',
            accent: 'text-sky-400',
            accentBg: 'bg-sky-500/10',
            accentBorder: 'border-sky-500/25',
          },
          {
            title: 'OEM interval vs dash reminder',
            body: 'Owner manuals list normal and severe schedules — severe is often 5,000 miles vs. 7,500–10,000 normal. Oil-life monitors optimize for marketing as much as protection. Short trips on Federal Blvd, idling in winter, and towing qualify as severe for most Denver commuters — we reset monitors based on your actual pattern.',
            accent: 'text-amber-400',
            accentBg: 'bg-amber-500/10',
            accentBorder: 'border-amber-500/25',
          },
          {
            title: 'API / ILSAC / OEM approvals',
            body: 'Dexos, LL-01, 502.00, and other OEM specs require specific additive packages — bulk oil from quick-lube lanes may not meet them. Turbo DI engines coke on hot bearings with wrong spec. We match API/ILSAC and manufacturer approval to your under-hood label and VIN.',
            accent: 'text-emerald-400',
            accentBg: 'bg-emerald-500/10',
            accentBorder: 'border-emerald-500/25',
          },
          {
            title: 'High-mileage & diesel considerations',
            body: 'High-mileage formulas with seal conditioners help aging gaskets on 150k+ engines when appropriate. Diesel pickups need CJ-4/CK-4 and correct viscosity for CP4 pump protection. DEF and fuel filter intervals are separate from oil — we flag diesel-specific items on the same visit.',
            accent: 'text-red-400',
            accentBg: 'bg-red-500/10',
            accentBorder: 'border-red-500/25',
          },
        ]}
        tableTitle="Normal vs severe service intervals (typical)"
        tableIntro="Your owner manual is authoritative — this table shows why Denver commuting often qualifies as severe."
        table={{
          caption: 'Normal vs severe oil change interval comparison',
          columns: ['Condition', 'Normal schedule', 'Severe schedule'],
          rows: [
            { label: 'Turbo DI gasoline', values: ['7,500–10,000 mi', '5,000 mi'], highlight: 1 },
            { label: 'Short trips (<5 mi)', values: ['Often normal on paper', 'Severe — moisture in oil'], highlight: 1 },
            { label: 'Towing / mountains', values: ['Extended if lucky', 'Severe — heat & load'], highlight: 1 },
            { label: 'Older conventional', values: ['3,000–5,000 mi', '3,000 mi typical'] },
          ],
        }}
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
      <RelatedServices slug="oil-changes-englewood-co" />
      <ServiceAreaServed serviceLabel="oil changes" />
      <ServiceFinalCTA
        title={"Due for an oil change?"}
        description={"Walk in or schedule at RKC Automotive on Evans Ave. Correct spec, honest inspection, and $120/hr labor on anything beyond the basic service."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Book online" }}
      />
    </div>
  );
}
