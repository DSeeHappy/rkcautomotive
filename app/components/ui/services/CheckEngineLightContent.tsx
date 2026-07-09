'use client';

import {
  AlertCircle, Zap, Gauge,
} from 'lucide-react';
import { BUSINESS, CHECK_ENGINE_LIGHT_PAGE_FAQ, PHOTOS } from '@/lib/constants';
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

const icons = [AlertCircle, Zap, Gauge];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "Flashing check engine light",
    body: "A flashing MIL under load means catalyst-damaging misfire — unburned fuel is entering the exhaust and overheating the catalytic converter. Do not drive except to a safe stop and tow if necessary. Common causes include failed coil-on-plug, collapsed lifter, or injector short. We prioritize these appointments because every mile can add hundreds in catalyst replacement cost.",
    warning: "Flashing CEL = stop driving. Misfire can destroy your catalytic converter.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  },
  {
    icon: icons[1],
    title: "Steady light & emissions codes",
    body: "P0420/P0430 catalyst efficiency codes, EVAP small-leak P0442, and O2 heater circuit faults often present as a steady light with no drivability complaint. Colorado emissions testing reads readiness monitors — a quick clear without repair fails inspection two weeks later. We test catalyst upstream/downstream switching, smoke-test EVAP hoses, and verify heater current before quoting converters or gas caps.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  },
  {
    icon: icons[2],
    title: "Intermittent & pending codes",
    body: "Pending codes set before the MIL illuminates — valuable early warnings on cold-start misfires or marginal sensor performance. Intermittent faults need freeze-frame capture and road-test replication. A P0171 lean code that only appears on uphill merges toward the foothills is different from one at idle. We log data during test drives on local routes, not just in the bay.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Code classification", body: "Powertrain P0xxx, chassis C-codes, and body B-codes are separated. We note pending vs. stored and whether monitors are incomplete from a recent battery disconnect." },
  { step: "02", title: "Severity assessment", body: "Flashing misfire, fuel trim limits, and over-temp flags get immediate triage. Steady emissions codes are scheduled with test-plan priority based on your inspection deadline." },
  { step: "03", title: "Component verification", body: "Sensor voltage, switch response, and wiring continuity confirm failed parts. We do not replace an O2 sensor because the code says O2 — we verify slow response or heater draw first." },
  { step: "04", title: "Monitor drive cycle", body: "After repair, we run drive cycles or advise your commute pattern so monitors set before emissions or before you assume the fix failed." },
  { step: "05", title: "Documented close-out", body: "You receive code history, test results, and invoice credit for diagnostic time when you approve the repair — transparent paperwork for warranty or emissions retest." }
];

const CHECKLIST_GROUPS = [
  { category: "Emissions & EVAP", items: ["Catalyst efficiency P0420/P0430 with live O2 comparison", "EVAP leak detection — smoke test and purge valve command", "Secondary air and EGR function on applicable platforms"] },
  { category: "Fuel & air metering", items: ["Lean/rich codes P0171/P0174 with smoke and fuel trim analysis", "MAF/MAP correlation and vacuum-leak isolation", "Injector balance and fuel pressure specification checks"] },
  { category: "Ignition & misfire", items: ["Coil-on-plug scope patterns and swap verification", "Compression test when misfire follows mechanical pattern", "AFM/DFM and valvetrain-related misfire isolation"] },
  { category: "Colorado specifics", items: ["Emissions-test readiness monitor guidance", "Altitude-related boost and fuel trim evaluation", "Diesel DEF/SCR and particulate-filter codes on HD pickups"] }
];

export default function CheckEngineLightContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs('Check Engine Light')}
        image={PHOTOS.engineRebuild}
        imageAlt="Check Engine Light at RKC Automotive Englewood CO"
        eyebrow={"CEL diagnosis · Englewood, CO"}
        title={"Check Engine Light Diagnosis in Englewood, CO"}
        description={"Steady or flashing MIL? We decode P0xxx powertrain and emissions codes, separate critical faults from monitor-not-ready, and verify the root cause before recommending repairs — diagnostic fee applied toward approved work."}
        primaryCta={{ href: '/contact', label: "Diagnose My CEL" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"Clearing the light is not fixing the problem."}
        body={"A erased code without repair means monitors reset and your next emissions test may fail — or the flashing light returns under load with catalyst-damaging misfires. Englewood drivers sometimes drive for weeks with a steady CEL until fuel economy tanks or Colorado emissions flags the vehicle. We diagnose first, explain severity, and only clear codes after the fault is verified repaired."}
      />

      <ServiceSymptomGrid
        eyebrow={"CEL behavior"}
        title={"What your check engine light is telling you"}
        intro={"Not every illuminated MIL is equal. How it behaves — steady, flashing, or intermittent — changes how urgently you need service."}
        cards={SYMPTOMS}
      />

      <ServiceTechnicalSection
        eyebrow="CEL decoded"
        title="Flashing vs solid, emissions vs misfire, readiness monitors"
        intro="Not every check engine light means the same urgency. How it behaves — steady, flashing, or intermittent — and which code family triggered determines whether you can commute tomorrow or need a tow today."
        cards={[
          {
            title: 'Flashing MIL = catalyst-damaging misfire',
            body: 'A flashing check engine light under load means unburned fuel is entering the exhaust and overheating the catalytic converter. Stop driving except to reach safety. Steady MIL with P030x codes still needs prompt service — but flashing is emergency priority at RKC because every mile adds catalyst cost.',
            accent: 'text-red-400',
            accentBg: 'bg-red-500/10',
            accentBorder: 'border-red-500/25',
          },
          {
            title: 'Emissions vs misfire code families',
            body: 'P0420/P0430 efficiency codes, EVAP P044x leaks, and O2 heater circuits often present as steady MIL with no drivability complaint. P030x misfires affect power and catalyst health. Each family has a distinct test path — we classify codes before recommending converters, coils, or gas caps.',
            accent: 'text-amber-400',
            accentBg: 'bg-amber-500/10',
            accentBorder: 'border-amber-500/25',
          },
          {
            title: 'Pending vs stored vs permanent codes',
            body: 'Pending codes mean the PCM saw one failure cycle — early warning. Stored codes confirmed the fault and lit the MIL. Permanent codes on some platforms cannot clear until repaired and monitors complete. Clearing without repair fails Colorado emissions when monitors reset to not-ready.',
            accent: 'text-sky-400',
            accentBg: 'bg-sky-500/10',
            accentBorder: 'border-sky-500/25',
          },
          {
            title: 'Readiness monitors for Colorado emissions',
            body: 'Monitors prove the PCM tested catalyst, O2, EVAP, EGR, and other systems since the last code clear. A quick erase at the parts store resets monitors — your Englewood emissions test fails even if the light is off. We run drive cycles after repair and coach your commute pattern so monitors set before inspection.',
            accent: 'text-emerald-400',
            accentBg: 'bg-emerald-500/10',
            accentBorder: 'border-emerald-500/25',
          },
        ]}
        tableTitle="CEL severity & code family guide"
        table={{
          caption: 'Check engine light severity by code type',
          columns: ['Behavior / code', 'Severity', 'Action'],
          rows: [
            { label: 'Flashing MIL + P030x', values: ['Critical', 'Stop driving — tow if needed'], highlight: 1 },
            { label: 'Steady MIL + P0420/P0430', values: ['Moderate', 'Schedule diagnosis — cat at risk if misfire present'] },
            { label: 'Steady MIL + P044x EVAP', values: ['Low–moderate', 'Smoke test — often cap or hose'] },
            { label: 'Pending only (no MIL)', values: ['Monitor', 'Early warning — diagnose before MIL sets'] },
            { label: 'MIL off, monitors N/R', values: ['Emissions fail', 'Drive cycle or complete repair first'], highlight: 1 },
          ],
        }}
      />

      <ServiceProcessTimeline
        eyebrow={"CEL workflow"}
        title={"From code scan to confirmed repair"}
        intro={"We treat the check engine light as a starting point — not the diagnosis itself."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.engineRebuild}
        bgImageAlt="Check Engine Light at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"Code families"}
        title={"Common CEL categories we diagnose"}
        intro={"Englewood vehicles span decades of OBD-II strategy. These are the fault families we see most — each with distinct test paths."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"CEL diagnostic pricing"}
        description={"Check-engine diagnostics from $99 — credited toward approved repairs at our posted $120/hr labor rate. You pay for verification, not a parts cannon."}
      />

      <ServiceFAQSection
        title={"Check engine light questions"}
        intro={"When you can drive, when you cannot, and what Colorado emissions needs after the light comes on."}
        items={CHECK_ENGINE_LIGHT_PAGE_FAQ}
      />
      <RelatedServices slug="check-engine-light-englewood-co" />
      <ServiceAreaServed serviceLabel="check engine light diagnosis" />
      <ServiceFinalCTA
        title={"Check engine light on?"}
        description={"Call or schedule at RKC Automotive on Evans Ave. We decode the code, test the system, and quote the real fix before clearing your MIL."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Book diagnosis" }}
      />
    </div>
  );
}
