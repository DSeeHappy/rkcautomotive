'use client';

import { AlertCircle, Flame, Gauge, Zap } from 'lucide-react';
import { BUSINESS, RAV4_CHECK_ENGINE_PAGE_FAQ } from '@/lib/constants';
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
} from '@/app/components/ui/services/ServiceSharedSections';
import RelatedServices from '@/app/components/ui/RelatedServices';
import { getRav4Breadcrumbs, RAV4_IMAGE, RAV4_IMAGE_ALT } from './rav4Shared';

const icons = [AlertCircle, Flame, Gauge, Zap];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: 'Flashing CEL on uphill I-70 merge',
    body:
      'A flashing check engine light on a RAV4 under load means catalyst-damaging misfire — unburned fuel is entering the exhaust and overheating the brick. On 2AZ-FE engines, oil consumption through worn piston rings fouls plugs and coils until misfire appears only above 3,500 RPM climbing toward Georgetown. Stop driving except to reach safety; tow if the flash continues under light throttle. Every mile with a flashing MIL risks a $1,200+ catalytic converter replacement that emissions law in Colorado will eventually require.',
    warning: 'Flashing CEL = stop driving. Misfire destroys your catalytic converter.',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10',
    accentBorder: 'border-red-500/25',
  },
  {
    icon: icons[1],
    title: 'P0420 cat efficiency after oil consumption',
    body:
      'Steady check engine light with P0420 on a high-mileage 2AZ-FE RAV4 is often the end of a chain: ring wear increases oil consumption, oil-fouled plugs misfire intermittently, and unburned fuel degrades catalyst oxygen storage capacity. The downstream O2 sensor sees reduced switching activity and sets efficiency codes. Replacing the converter without addressing oil consumption and misfire history returns the code within months. RKC compares upstream and downstream O2 waveforms, checks fuel trim, and measures oil usage over 1,000 miles before quoting catalyst work.',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
  },
  {
    icon: icons[2],
    title: 'P0171 lean codes at altitude',
    body:
      'Long-term fuel trim above +15% with P0171/P0174 on a RAV4 often traces to vacuum leaks at the PCV hose, intake manifold gasket, or cracked air intake boot — aggravated by Denver altitude where the PCM already runs leaner calibration. Lean conditions cause surge at idle in Englewood traffic and soft power on mountain grades. We smoke-test the intake, verify MAF grams-per-second at idle, and command fuel trims back to neutral before recommending mass airflow sensors or O2 sensors the code description suggests but data does not support.',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
  },
  {
    icon: icons[3],
    title: 'Hybrid system & AWD actuator codes',
    body:
      'RAV4 Hybrid sets codes in the P0Axx, P0Cxx, and P312x families for inverter temperature, hybrid battery block performance, and transaxle clutch control — invisible to generic OBD scanners that only read powertrain P0xxx. AWD models add coupling overheat and driveshaft disconnect codes that appear after tight parking-lot turns or low-traction events. RKC uses Toyota Techstream-level data to read hybrid and AWD modules, inspect inverter coolant, and test coupling engagement — not a parts-store code clear that leaves hybrid limp mode active.',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/25',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Severity triage — flash vs steady',
    body:
      'Flashing MIL gets immediate bay priority and tow recommendation. Steady MIL is classified by code family: misfire P030x, fuel trim P017x, catalyst P042x, EVAP P044x, hybrid P0Axx. Freeze-frame capture documents RPM, load, and coolant temp when the fault set — critical for intermittent 2AZ-FE misfires that only appear cold.',
  },
  {
    step: '02',
    title: 'Live data & bidirectional tests',
    body:
      'OBD-II live stream for fuel trims, O2 sensor switching, misfire counters, and hybrid inverter temperature. Bidirectional activation of purge valves, cooling fans, and AWD coupling where supported. We log a baseline before touching parts.',
  },
  {
    step: '03',
    title: 'Mechanical verification',
    body:
      'Compression test when misfire follows mechanical pattern on 2AZ-FE. Smoke test for lean codes. Visual inspection for oil fouling on plugs and exhaust leaks that mimic catalyst failure. Oil consumption measurement if P0420 follows high-mileage service history.',
  },
  {
    step: '04',
    title: 'Root-cause repair quote',
    body:
      'Written estimate at $120/hr labor with diagnostic fee credited toward approved repair. No converter quotes without O2 waveform proof and misfire history cleared. Hybrid repairs include safety protocol for high-voltage systems.',
  },
  {
    step: '05',
    title: 'Monitor readiness for Colorado emissions',
    body:
      'After repair, we explain which readiness monitors are incomplete and coach your Englewood commute drive cycle so catalyst and EVAP monitors set before your emissions appointment. Clearing codes without repair fails inspection even when the MIL is off.',
  },
];

const CHECKLIST_GROUPS = [
  {
    category: '2AZ-FE gas RAV4 codes',
    items: [
      'P0420/P0430 — O2 waveform comparison before converter quote',
      'P0171/P0174 — smoke test, PCV, intake boot, gasket leaks',
      'P030x misfire — coil swap, plug condition, compression if oil-fouled',
      'Oil consumption correlation — 1qt/1,000 mi accelerates cat failure',
      'VVT-i oil control valve screens on sludged 2AZ engines',
    ],
  },
  {
    category: 'Hybrid RAV4 systems',
    items: [
      'P0A80 hybrid battery block performance — cell balance data',
      'P0C73 inverter over-temperature — coolant level and pump command',
      'P3123 transaxle clutch stuck — fluid and solenoid verification',
      'Ready-state hybrid mode entry and engine-off EV operation test',
      '12V auxiliary battery — weak 12V causes hybrid warning cascades',
    ],
  },
  {
    category: 'AWD & chassis codes',
    items: [
      'Coupling overheat codes after tight turns — fluid service history',
      'Driveshaft disconnect actuator — engagement delay in snow mode',
      'Wheel-speed sensor correlation for ABS/VSC false triggers',
      'Transfer case fluid condition on electro-magnetic AWD trims',
      'CV boot tears sending debris into speed sensor tone rings',
    ],
  },
  {
    category: 'Colorado emissions & driveability',
    items: [
      'Readiness monitor status before emissions test',
      'Flashing vs steady MIL drive-or-tow guidance documented',
      'Freeze-frame altitude and load data for intermittent faults',
      'Permanent code status on drive-cycle-resistant faults',
      'Diagnostic fee credit policy toward approved RKC repair',
    ],
  },
];

export default function Rav4CheckEngineContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getRav4Breadcrumbs('Check Engine Light')}
        image={RAV4_IMAGE}
        imageAlt={RAV4_IMAGE_ALT}
        eyebrow="Toyota RAV4 · Englewood, CO"
        title="RAV4 Check Engine Light Diagnostics in Englewood, CO"
        description="P0420 catalyst codes, 2AZ-FE oil consumption misfires, P0171 lean faults, hybrid P0Axx systems, and AWD actuator codes — diagnosed with live data and Toyota-level scan tools, not parts-store code clears."
        primaryCta={{ href: '/contact', label: 'Diagnose My RAV4 CEL' }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote="A cleared code is not a fixed RAV4 — it is a reset emissions clock."
        body={
          <>
            <p className="mb-4">
              The check engine light on a Toyota RAV4 spans decades of engine strategy — 2AZ-FE oil consumption that kills catalysts, 2AR-FE direct injection with carbon-related misfires, hybrid transaxle codes invisible to basic scanners, and AWD coupling faults that only set after a snowy Englewood parking-lot U-turn. Parts stores will read P0420 and sell you a converter. They will not graph upstream versus downstream O2 activity, measure oil use over 1,000 miles, or read hybrid inverter temperature logs.
            </p>
            <p>
              RKC diagnoses RAV4 check engine lights with live data, smoke testing, compression when misfire patterns demand it, and Toyota-capable module access. Diagnostic fee starts at $99 and credits toward approved repair at $120/hr posted labor. We tell you when it is safe to drive to our Evans Ave shop versus when a flashing MIL means tow — because Colorado emissions and catalyst pricing make guessing expensive.
            </p>
          </>
        }
      />

      <ServiceSymptomGrid
        eyebrow="RAV4 CEL patterns"
        title="What RAV4 check engine lights mean in practice"
        intro="Code definitions are generic — RAV4 platform history tells you which tests actually matter before ordering parts."
        cards={SYMPTOMS}
      />

      <ServiceTechnicalSection
        eyebrow="Platform diagnostics"
        title="2AZ oil consumption chain, hybrid codes, emissions & drive-or-tow"
        intro="Each RAV4 generation sets different codes for different failure chains. We classify by engine family and code family before recommending converters, coils, or hybrid components."
        cards={[
          {
            title: '2AZ-FE oil consumption → misfire → P0420 chain',
            body:
              'Third-generation RAV4 2.4L 2AZ-FE engines are known for piston ring land wear that increases oil consumption past 120,000 miles — often a quart per 1,000 miles before the owner notices smoke. Oil-fouled spark plugs and coil boots cause intermittent misfire under load. Misfire dumps unburned fuel into the catalyst, degrading oxygen storage and setting P0420. Fixing the converter without addressing oil consumption is temporary. RKC measures consumption, inspects plug color, tests compression, and graphs O2 sensors before quoting catalyst replacement.',
            accent: 'text-amber-400',
            accentBg: 'bg-amber-500/10',
            accentBorder: 'border-amber-500/25',
          },
          {
            title: 'Flashing vs solid — when to drive vs tow',
            body:
              'Flashing MIL under any throttle means stop — catalyst damage is active. Steady MIL with P030x still needs prompt service but short Englewood commutes are usually safe at low RPM. Steady P0420 without misfire counters is schedule-this-week, not emergency. Steady P0171 lean with rough idle can worsen under mountain load — drive gently or tow if surge is severe. Hybrid P0Axx limp-mode codes may allow EV-only creep — we advise per code severity after scan.',
            accent: 'text-red-400',
            accentBg: 'bg-red-500/10',
            accentBorder: 'border-red-500/25',
          },
          {
            title: 'OBD-II live data, smoke test & compression',
            body:
              'Live fuel trim, misfire cylinder count, O2 sensor cross-counts, and hybrid inverter temp tell more than code numbers. Smoke test isolates P0171 vacuum leaks in five minutes. Compression and leak-down differentiate mechanical misfire from coil failure on oil-fouled 2AZ plugs. Scope analysis on coil primary patterns confirms failing COP before swap-guessing. We document all test results on your invoice — not just the code that triggered the appointment.',
            accent: 'text-sky-400',
            accentBg: 'bg-sky-500/10',
            accentBorder: 'border-sky-500/25',
          },
          {
            title: 'Colorado emissions testing requirements',
            body:
              'Englewood and Denver metro emissions stations read readiness monitors — catalyst, O2, EVAP, and others must be complete since the last code clear. A parts-store erase resets monitors to not-ready and fails inspection even with the MIL off. After RKC repair, we coach a drive cycle that sets monitors on your actual commute pattern: cold start, steady cruise on C-470, and idle time that satisfies EVAP purge tests. Permanent codes on some faults cannot clear until the repair is verified across multiple drive cycles.',
            accent: 'text-emerald-400',
            accentBg: 'bg-emerald-500/10',
            accentBorder: 'border-emerald-500/25',
          },
        ]}
        tableTitle="RAV4 CEL severity guide"
        table={{
          caption: 'RAV4 check engine light severity by code family',
          columns: ['Code / behavior', 'Typical RAV4 cause', 'Drive or tow?'],
          rows: [
            { label: 'Flashing MIL + P030x', values: ['Coil, plug, 2AZ oil fouling', 'Tow if flash persists'], highlight: 2 },
            { label: 'Steady P0420 (2AZ-FE)', values: ['Cat worn — often after oil use', 'Drive gently — schedule soon'] },
            { label: 'Steady P0171', values: ['Vacuum leak, PCV, intake boot', 'Drive carefully — fix within week'] },
            { label: 'P0Axx hybrid', values: ['Battery block, inverter temp', 'Scan first — limp mode varies'], highlight: 2 },
            { label: 'AWD coupling codes', values: ['Fluid, actuator, overheat', 'Usually drive to shop'] },
            { label: 'MIL off, monitors N/R', values: ['Recent code clear', 'Emissions fail — drive cycle'], highlight: 2 },
          ],
        }}
      />

      <ServiceProcessTimeline
        eyebrow="CEL workflow"
        title="From RAV4 code scan to confirmed repair"
        intro="We treat the MIL as a starting point — Toyota platform knowledge determines which tests run next."
        steps={PROCESS_STEPS}
        bgImage={RAV4_IMAGE}
        bgImageAlt="Toyota RAV4 check engine light diagnosis at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow="Code families"
        title="RAV4 fault categories we diagnose every week"
        intro="Englewood RAV4s span belt-driven 2AZ, chain-driven 2AR/A25A, and hybrid transaxle platforms — each with distinct code patterns."
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title="RAV4 CEL diagnostic pricing"
        description="Check engine diagnostics from $99 — credited toward approved repairs at $120/hr posted labor. Catalyst, hybrid HV, and AWD actuator faults may require extended test time; we call before exceeding initial scope."
      />

      <ServiceFAQSection
        title="RAV4 check engine light questions"
        intro="Oil consumption, catalyst codes, hybrid systems, and Colorado emissions readiness."
        items={RAV4_CHECK_ENGINE_PAGE_FAQ}
      />
      <RelatedServices slug="check-engine-light-englewood-co" title="Related RAV4 services" />
      <ServiceAreaServed serviceLabel="RAV4 check engine light diagnosis" />
      <ServiceFinalCTA
        title="RAV4 check engine light on?"
        description="Call or schedule at RKC Automotive on Evans Ave. We decode the code, test the system, and quote the real fix before clearing your MIL."
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: 'Book RAV4 diagnosis' }}
        image={RAV4_IMAGE}
        imageAlt={RAV4_IMAGE_ALT}
      />
    </div>
  );
}
