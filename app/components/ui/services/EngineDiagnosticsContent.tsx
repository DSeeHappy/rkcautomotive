'use client';

import {
  Gauge, Zap, Activity,
} from 'lucide-react';
import Link from 'next/link';
import { BUSINESS, ENGINE_DIAGNOSTICS_PAGE_FAQ, PHOTOS } from '@/lib/constants';
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

const icons = [Gauge, Zap, Activity];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "Random misfire & fuel trim drift",
    body: "P0300-series codes with positive long-term fuel trim on multiple banks often mean unmetered air — cracked PCV hoses, intake gasket leaks, or torn MAF boots. Negative trim on one bank can trace to leaking injectors or low compression. We graph fuel trims at idle, 2,500 RPM, and light load on a road test loop near Evans Ave to see which cells are out of spec before recommending coils or plugs.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  },
  {
    icon: icons[1],
    title: "Rough idle & smoke signals",
    body: "Blue smoke at startup points to valve-guide seal or turbo seal wear; white smoke that smells sweet suggests coolant in the combustion chamber; black smoke under load is rich fuel or restricted airflow. A smoke-machine test through the intake isolates vacuum leaks in minutes. Compression and leak-down tests separate ring wear from head-gasket failure — critical before you approve a $2,000 head job on a high-mileage SUV.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  },
  {
    icon: icons[2],
    title: "Power loss at altitude",
    body: "Colorado's thin air stresses turbochargers, VVT solenoids, and fuel delivery. A vehicle that feels fine at sea level may show boost leaks, clogged intercoolers, or MAF scaling errors above 5,000 feet. We compare requested vs. actual boost, knock retard, and catalyst efficiency on live data — especially on EcoBoost, TDI, and direct-injection platforms common in Englewood commutes.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "OBD-II scan & freeze frame", body: "We pull stored, pending, and permanent codes with freeze-frame RPM, load, and fuel status. Pending codes on cold mornings often differ from stored codes after a full warm-up cycle." },
  { step: "02", title: "Live data & bidirectional tests", body: "Fuel trims, O2 sensor switching, MAP/MAF correlation, and VVT commanded vs. actual angles. Actuator tests command EGR, EVAP purge, and cooling fans to confirm PCM control." },
  { step: "03", title: "Scope & waveform analysis", body: "Ignition patterns, injector pintle time, and crank/cam correlation on a digital scope catch intermittent faults scan tools miss — especially coil-on-plug breakdown under load." },
  { step: "04", title: "Mechanical verification", body: "Compression, leak-down, cooling-system pressure test, and smoke test when codes or smoke color suggest internal wear or vacuum leaks." },
  { step: "05", title: "Written repair plan", body: "You receive a prioritized fix list with parts and labor at $120/hr. Diagnostic fee applies toward approved repairs — you are not paying twice to learn what failed." }
];

const CHECKLIST_GROUPS = [
  { category: "Electronic diagnostics", items: ["Factory-level scan tools for domestic, Asian, and European platforms", "Live data graphing and freeze-frame analysis", "Oscilloscope for ignition and sensor waveforms"] },
  { category: "Mechanical testing", items: ["Compression and cylinder leak-down testing", "Cooling-system pressure and combustion-gas detection", "Smoke-machine vacuum leak isolation"] },
  { category: "Drivability verification", items: ["Controlled road test on local Englewood routes", "Fuel trim capture at altitude and under load", "Post-repair monitor readiness and code clearing"] },
  { category: "What you receive", items: ["Plain-language explanation of findings", "Written estimate before repair authorization", "Diagnostic fee credited toward approved work"] }
];

export default function EngineDiagnosticsContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs('Engine Diagnostics')}
        image={PHOTOS.engineBay}
        imageAlt="Engine Diagnostics at RKC Automotive Englewood CO"
        eyebrow={"Diagnostics · Englewood, CO"}
        title={"Advanced Engine Diagnostics in Englewood, CO"}
        description={"Rough idle, power loss, or mystery misfires? We scan OBD-II, analyze live data, run compression and smoke tests, and isolate fuel-trim faults — with a written repair plan before parts get thrown at codes."}
        primaryCta={{ href: '/contact', label: "Book Diagnostics" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"A stored code is a clue — not a diagnosis."}
        body={
          <>
            Parts stores read P0xxx codes for free, but codes only report which sensor or circuit tripped — not whether
            the sensor failed, a wire rubbed through, or the root cause is mechanical. Denver metro drivers often replace
            three oxygen sensors before finding a vacuum leak or burnt exhaust valve. At RKC we verify every code with
            live data, scope traces, and mechanical tests so you pay for the fix, not the guess. When a{' '}
            <Link href="/services/check-engine-light-englewood-co" className="font-semibold text-primary-green-light hover:text-white">
              check engine light in Englewood
            </Link>{' '}
            points to misfire or fuel-trim faults, we isolate the root cause before recommending parts.
          </>
        }
      />

      <ServiceSymptomGrid
        eyebrow={"Drivability signs"}
        title={"Symptoms that need real diagnostics"}
        intro={"Modern powertrains mask problems until load, altitude, or cold-start conditions expose them. These patterns need scan tools and test equipment — not a generic tune-up quote."}
        cards={SYMPTOMS}
      />

      <ServiceTechnicalSection
        eyebrow="Diagnostic depth"
        title="OBD-II PIDs, freeze frame, smoke test & relative compression"
        intro="Professional engine diagnostics goes beyond reading codes. We capture the conditions when the fault set, graph live data under load, smoke-test vacuum leaks, and compare cylinder cranking speed — so repairs target root cause, not the cheapest guess."
        cards={[
          {
            title: 'Live OBD-II PIDs we graph',
            body: 'Short-term and long-term fuel trims (STFT/LTFT), MAF grams-per-second vs. calculated load, O2 sensor switching voltage, misfire counters per cylinder, MAP/MAF correlation, and VVT commanded vs. actual cam angles. Denver altitude exposes marginal sensors that pass at sea level — we test on Englewood routes, not just in the bay.',
            accent: 'text-sky-400',
            accentBg: 'bg-sky-500/10',
            accentBorder: 'border-sky-500/25',
          },
          {
            title: 'Freeze-frame capture',
            body: 'When a code sets, the PCM records RPM, coolant temp, fuel status, and load at that moment. A P0171 lean code at cold idle differs from one at 70 mph uphill on C-470. Freeze-frame tells us which operating cell failed — critical for intermittent faults that disappear when you arrive at the shop.',
            accent: 'text-amber-400',
            accentBg: 'bg-amber-500/10',
            accentBorder: 'border-amber-500/25',
          },
          {
            title: 'Smoke-machine vacuum & EVAP test',
            body: 'Visible vapor injected into the intake finds cracked PCV hoses, intake gasket leaks, and torn MAF boots that set lean codes. EVAP smoke locates gas-cap, purge-valve, and vent-hose leaks causing P044x codes. Leaks too small to hear are found in minutes — common on high-mileage rubber in Colorado heat.',
            accent: 'text-emerald-400',
            accentBg: 'bg-emerald-500/10',
            accentBorder: 'border-emerald-500/25',
          },
          {
            title: 'Relative compression testing',
            body: 'Uses crankshaft position sensor to compare cranking acceleration between cylinders — no spark plugs removed. A weak cylinder shows slower compression stroke speed. We follow with traditional compression or leak-down on flagged cylinders before recommending top-end or bottom-end repair — saving hours on multi-cylinder misfire diagnosis.',
            accent: 'text-red-400',
            accentBg: 'bg-red-500/10',
            accentBorder: 'border-red-500/25',
          },
        ]}
        tableTitle="Key OBD-II PIDs for drivability diagnosis"
        tableIntro="These parameters tell us whether the fault is fuel, air, ignition, or mechanical — before parts get ordered."
        table={{
          caption: 'Common OBD-II PIDs used during engine diagnostics',
          columns: ['PID', 'What it tells us', 'Red flag'],
          rows: [
            { label: 'STFT / LTFT', values: ['Fuel trim correction', '±10% sustained = lean/rich fault'], highlight: 1 },
            { label: 'MAF g/s', values: ['Airflow at RPM/load', 'Low vs. calculated load = restriction or bad MAF'] },
            { label: 'O2 B1S1', values: ['Upstream O2 switching', 'Lazy or stuck = fuel or cat issue'] },
            { label: 'Misfire counts', values: ['Per-cylinder misfires', 'Climbing count = coil, injector, or mechanical'] },
            { label: 'VVT actual vs. cmd', values: ['Cam timing correlation', 'Deviation = solenoid, oil, or chain'] },
          ],
        }}
      />

      <ServiceProcessTimeline
        eyebrow={"Diagnostic workflow"}
        title={"How we isolate engine faults"}
        intro={"Our ASE-certified techs follow a verify-first workflow — scan, test, confirm — so the repair matches the failure mode."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.engineBay}
        bgImageAlt="Engine Diagnostics at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"Equipment & tests"}
        title={"Diagnostic tools we use daily"}
        intro={"Professional diagnostics require more than a code reader. Our Englewood bay is equipped for mechanical and electrical root-cause work."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"Labor transparency on diagnostics"}
        description={"Engine diagnostics start from $99 and credit toward approved repairs. Labor bills at our posted $120/hr rate with documented test results — not open-ended hourly guessing."}
      />

      <ServiceFAQSection
        title={"Engine diagnostics questions"}
        intro={"Answers on diagnostic fees, live data, compression tests, and why we do not just clear codes."}
        items={ENGINE_DIAGNOSTICS_PAGE_FAQ}
      />
      <RelatedServices slug="engine-diagnostics-englewood-co" />
      <ServiceAreaServed serviceLabel="engine diagnostics" relatedServiceSlug="engine-diagnostics-englewood-co" />
      <ServiceFinalCTA
        title={"Need engine diagnostics today?"}
        description={"Schedule at 2120 W Evans Ave. We find the root cause — misfire, vacuum leak, sensor fault, or mechanical wear — with tests you can understand before you approve the fix."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Request appointment" }}
      />
    </div>
  );
}
