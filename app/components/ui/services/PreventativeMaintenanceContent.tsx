'use client';

import {
  ShieldCheck, CalendarCheck, Gauge,
} from 'lucide-react';
import { BUSINESS, PREVENTATIVE_MAINTENANCE_PAGE_FAQ, PHOTOS } from '@/lib/constants';
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

const icons = [ShieldCheck, CalendarCheck, Gauge];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "30k / 60k / 90k milestones",
    body: "Honda 60k includes trans fluid and spark plugs; Toyota has coolant first-drain intervals; German cars need brake-fluid time changes regardless of mileage. We build milestone packages from your VIN spec — not a one-size coupon sheet. Each item is tied to a failure mode: belt service prevents valve crash, fluid service prevents CVT slip.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  },
  {
    icon: icons[1],
    title: "Colorado severe-duty factors",
    body: "Short trips, idling in winter, towing through the foothills, and salted roads push you into severe tables — shorter oil, brake fluid, and trans intervals. Altitude and heat stress cooling systems. We label your service file severe or normal based on how you actually drive, not how the dash average looks.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  },
  {
    icon: icons[2],
    title: "Inspection before upsell",
    body: "Multi-point inspection finds cracked serpentine belts, seeping water pumps, and torn CV boots before they strand you. We photograph wear when it matters, recommend fixes with priority levels — safety first, convenience second, cosmetic never pressured. No 27-point printout designed to sell cabin filters you changed last month.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "History & mileage review", body: "Prior service records, current mileage, and driving pattern — commute, tow, or mixed — set the interval table." },
  { step: "02", title: "Due-now vs due-soon", body: "Items past interval flagged safety-critical first. Due-soon items quoted for planning — no batch scare packaging." },
  { step: "03", title: "Fluid & filter service", body: "Oil, coolant, brake, trans, and differential per spec. Filters matched to engine and cabin air quality needs." },
  { step: "04", title: "Belt, brake & suspension check", body: "Belt deflection and crack scan, brake thickness, ball-joint play — caught at maintenance before they become repairs." },
  { step: "05", title: "Log & remind", body: "Sticker and digital notes for next due mileage/date. Fleet accounts get consolidated invoicing." }
];

const CHECKLIST_GROUPS = [
  { category: "Fluids", items: ["Engine oil and filter per spec", "Coolant exchange with OEM chemistry", "Brake, power-steering, and washer fluid checks"] },
  { category: "Filters & belts", items: ["Engine, cabin, and fuel filters", "Serpentine and timing belt inspection", "Timing belt/water-pump packages on interference engines"] },
  { category: "Drivetrain", items: ["Transmission fluid service — drain/fill or exchange per manual", "Differential and transfer-case fluids on AWD/4WD", "Spark plugs and coil inspection at mileage"] },
  { category: "Fleet & family", items: ["Multi-vehicle maintenance scheduling", "Priority booking for commercial accounts", "Pre-trip inspection before mountain travel season"] }
];

export default function PreventativeMaintenanceContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs('Preventative Maintenance')}
        image={PHOTOS.brandedBay}
        imageAlt="Preventative Maintenance at RKC Automotive Englewood CO"
        eyebrow={"Scheduled care · Englewood, CO"}
        title={"Preventative Maintenance in Englewood, CO"}
        description={"Factory-interval service done honestly — oil, fluids, filters, belts, and milestone inspections at 30k/60k/90k — with a written plan that fixes what is due, not everything on a generic menu."}
        primaryCta={{ href: '/contact', label: "Plan My Service" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"Deferred maintenance is a payment plan — with interest."}
        body={"Skipping a $150 coolant flush does not save money when a $1,800 head gasket follows. Englewood commuters stacking miles on I-25 and mountain weekends qualify for severe schedules on most owner manuals — yet dash reminders stretch intervals for marketing. We read your manual, log your mileage, and quote only the services that protect the engine, trans, and brakes you rely on daily."}
      />

      <ServiceSymptomGrid
        eyebrow={"Milestone science"}
        title={"What preventative maintenance actually prevents"}
        intro={"Maintenance is not generic — timing belts, CVT fluid, and spark intervals are engine-specific failure prevention."}
        cards={SYMPTOMS}
      />

      <ServiceTechnicalSection
        eyebrow="Maintenance schedules"
        title="30/60/90k milestones & fluid exchange intervals"
        intro="Factory maintenance is VIN-specific — not a generic coupon. We build milestone packages from your owner manual tables with due-now vs due-soon priority so you spend on prevention, not emergency tow bills."
        cards={[
          {
            title: '30k / 60k / 90k milestone content',
            body: 'Honda 60k includes trans fluid and spark plugs; Toyota specifies coolant first-drain intervals; German cars need brake-fluid time changes regardless of mileage. Timing-belt service on interference engines prevents valve crash worth thousands. We quote each line at $120/hr — you approve the bundle before work starts.',
            accent: 'text-sky-400',
            accentBg: 'bg-sky-500/10',
            accentBorder: 'border-sky-500/25',
          },
          {
            title: 'Fluid exchange intervals',
            body: 'Engine coolant at 60k–100k, brake fluid every 2–3 years, transmission fluid at 30k–60k on severe schedules, differential and transfer-case on AWD at 30k–60k. Fluids break down by time and heat — not mileage alone. Denver heat and salt qualify as severe for most commuters.',
            accent: 'text-amber-400',
            accentBg: 'bg-amber-500/10',
            accentBorder: 'border-amber-500/25',
          },
          {
            title: 'Belt, brake & suspension at service visits',
            body: 'Serpentine belt crack scan, brake pad thickness, ball-joint play — caught at maintenance before they become repairs. We photograph wear when it matters and prioritize safety-first items. No 27-point printout designed to sell cabin filters you changed last month.',
            accent: 'text-emerald-400',
            accentBg: 'bg-emerald-500/10',
            accentBorder: 'border-emerald-500/25',
          },
          {
            title: 'Fleet & multi-vehicle logging',
            body: 'Commercial accounts receive scheduled logging, consolidated invoicing, and priority booking when available. Each vehicle gets due-now vs due-soon lists — oil, brakes, inspections — so fleet managers are not guessing which unit needs service this week.',
            accent: 'text-red-400',
            accentBg: 'bg-red-500/10',
            accentBorder: 'border-red-500/25',
          },
        ]}
        tableTitle="Typical fluid exchange intervals (severe schedule)"
        tableIntro="Always verify against your owner manual — this illustrates why deferred fluid service leads to expensive failures."
        table={{
          caption: 'Preventative maintenance fluid exchange intervals',
          columns: ['Fluid', 'Typical severe interval', 'Failure if deferred'],
          rows: [
            { label: 'Engine oil', values: ['5,000 mi / 6 mo', 'Turbo bearing coke, sludge'], highlight: 2 },
            { label: 'Coolant', values: ['60k–100k / 5 yr', 'Head gasket, heater core clog'] },
            { label: 'Brake fluid', values: ['2–3 years', 'Moisture, ABS corrosion'] },
            { label: 'Transmission', values: ['30k–60k severe', 'Slip, overheat, rebuild'] },
            { label: 'Diff / transfer case', values: ['30k–60k AWD', 'Gear wear, chatter'] },
          ],
        }}
      />

      <ServiceProcessTimeline
        eyebrow={"Maintenance plan"}
        title={"How we build your service schedule"}
        intro={"VIN-specific intervals, honest inspection, and logged history — so the next visit picks up where we left off."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.brandedBay}
        bgImageAlt="Preventative Maintenance at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"Service menu"}
        title={"Preventative services we schedule"}
        intro={"Everything your owner manual expects — performed at RKC with $120/hr labor transparency."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"Maintenance labor transparency"}
        description={"Scheduled maintenance labor at $120/hr with parts listed line-by-line. Milestone packages quoted as a whole — you approve the bundle before we start."}
      />

      <ServiceFAQSection
        title={"Preventative maintenance questions"}
        intro={"Severe vs normal schedules, 30k/60k content, fleet plans, and why dealer menus oversell."}
        items={PREVENTATIVE_MAINTENANCE_PAGE_FAQ}
      />
      <RelatedServices slug="preventative-maintenance-englewood-co" />
      <ServiceAreaServed serviceLabel="preventative maintenance" relatedServiceSlug="preventative-maintenance-englewood-co" />
      <ServiceFinalCTA
        title={"Build your maintenance plan"}
        description={"Visit RKC on Evans Ave with your mileage and manual. We quote what is due — not everything on a poster — at $120/hr labor plus parts."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Schedule service" }}
      />
    </div>
  );
}
