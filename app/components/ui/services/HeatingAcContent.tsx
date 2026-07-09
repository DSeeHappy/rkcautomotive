'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  AlertTriangle,
  CheckCircle2,
  Droplets,
  Fan,
  Gauge,
  MapPin,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Wind,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { BUSINESS, HEATING_AC_PAGE_FAQ, LABOR_RATE, PHOTOS } from '@/lib/constants';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
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
import { SECTION_PAD, SECTION_HEADER, SECTION_HEADER_CENTER, getServiceBreadcrumbs } from './servicesShared';

const icons = [Wind, Thermometer, Snowflake];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: 'Weak AC & warm vents',
    body: 'Center-vent temperature above 50°F at idle with the fan on high often means low refrigerant charge, weak compressor, or a stuck expansion valve. Dual-zone systems add blend-door actuators that default to heat on one side when a motor fails. We measure high- and low-side pressures against ambient temperature charts, check condenser fan operation at idle on a hot Englewood afternoon, and command actuators on scan tools before recommending compressor replacement.',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
  },
  {
    icon: icons[1],
    title: 'No heat & foggy windshield',
    body: 'Coolant full but lukewarm heat at idle points to a clogged heater core or stuck thermostat — common when deferred coolant service lets Dex-Cool gel form inside the core tubes. Sweet fog on the windshield means heater-core seep — stop driving and schedule service before coolant contaminates the carpet and electronics under the center stack.',
    warning: 'Sweet fog inside = possible heater core leak. Schedule service promptly.',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10',
    accentBorder: 'border-red-500/25',
  },
  {
    icon: icons[2],
    title: 'Compressor noise & clutch',
    body: 'Clicking every few seconds is normal clutch cycling on a properly charged system; grinding on engagement means bearing failure. Overcharged systems from DIY cans slug the compressor with liquid refrigerant and destroy it within days. We verify charge weight by scale, inspect clutch air gap, and listen for bearing roughness — compressor swaps are labor-heavy at $120/hr, so we prove failure before ordering reman units.',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
  },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Performance baseline', body: 'Vent temp, fan speeds, and dual-zone behavior recorded. Ambient and humidity noted — pressure specs are temperature-dependent at Denver altitude.' },
  { step: '02', title: 'Refrigerant recovery & leak test', body: 'Recover existing charge into EPA-certified equipment, vacuum to 500 microns, and hold vacuum. UV dye and electronic sniffer trace condenser and fitting leaks.' },
  { step: '03', title: 'Component isolation', body: 'Compressor, condenser fan, expansion device, and blend doors tested independently. Heater-core flow checked when heat is the complaint.' },
  { step: '04', title: 'Repair & evacuate', body: 'O-rings, condensers, compressors, and actuators installed to spec. System evacuated and charged by weight — not guesswork cans.' },
  { step: '05', title: 'Verify temps', body: 'Center vent temp verified at idle and 1,500 RPM. Heat output confirmed on cold morning test when season demands.' },
];

const CHECKLIST_GROUPS = [
  { category: 'Air conditioning', items: ['R134a and R1234yf leak repair and recharge', 'Compressor, condenser, and evaporator replacement', 'Expansion valve and orifice-tube service', 'R-12 retrofit to R134a on classic vehicles'] },
  { category: 'Heating', items: ['Thermostat and water-pump-related heat issues', 'Heater-core flush or replacement', 'Blend-door and actuator calibration', 'Blower-motor resistor and module replacement'] },
  { category: 'Cabin comfort', items: ['Blower-motor and resistor replacement', 'Cabin air filter install', 'Evaporator odor treatment when mold forms on core'] },
  { category: 'Denver climate', items: ['High-ambient AC performance tuning', 'Winter defrost and heater-core flow checks', 'Fleet van HVAC for commercial routes on I-25'] },
];

const REFRIGERANTS: {
  name: string;
  era: string;
  gwp: string;
  status: string;
  body: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
}[] = [
  {
    name: 'R-12 (CFC-12 / Freon)',
    era: 'Pre-1994 vehicles',
    gwp: 'GWP 10,900',
    status: 'Banned — retrofit required',
    body: 'R-12 was the original automotive refrigerant from the 1930s through 1993 model year. Production ended in 1995 under the Montreal Protocol because chlorofluorocarbons destroy stratospheric ozone. It is illegal to vent R-12 or any refrigerant to atmosphere under the Clean Air Act — penalties reach $44,539 per day per violation. Pre-1994 vehicles still on Denver roads require recovery of remaining charge, leak repair, and retrofit to R134a with compatible oil, new service port adapters (often 134a high-side, R-12 low-side initially), and frequently a replacement compressor and hoses because mineral oil and POE oil do not mix cleanly. RKC performs R-12 recovery and R134a retrofits with documented performance expectations for classic and collector vehicles.',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10',
    accentBorder: 'border-red-500/25',
  },
  {
    name: 'R-134a (HFC-134a)',
    era: '1994 – ~2016 model years',
    gwp: 'GWP 1,430',
    status: 'Still widely serviced',
    body: 'R134a became the U.S. standard starting with 1994 model-year vehicles after the R-12 phaseout. It uses POE or PAG compressor oil and standard 14 mm high-side / 13 mm low-side service ports (quick-connect on many imports). R134a remains legal to manufacture and service, and the majority of vehicles on Englewood roads still run it. Environmental pressure from high global-warming potential drove the transition to R1234yf, but R134a systems will be serviced for decades. RKC maintains dedicated R134a recovery and recharge equipment, charges by weight from your under-hood label, and never tops off without leak testing first.',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
  },
  {
    name: 'R-1234yf (HFO-1234yf)',
    era: '2013+ new models; mandatory ~2021',
    gwp: 'GWP ~4',
    status: 'Current OEM standard',
    body: 'R1234yf is a hydrofluoroolefin with roughly 99.7% lower GWP than R134a. General Motors began phasing it in on 2013 models; Ford, Stellantis, and most import brands followed. EPA SNAP rules effectively require R1234yf on new light-duty vehicles. It is classified A2L — mildly flammable — requiring specialized recovery machines, leak detectors rated for HFO refrigerants, and extra ventilation precautions in the shop. Service ports use a different diameter and are often keyed to prevent cross-contamination with R134a fittings. Never mix R1234yf with R134a: the blend raises head pressure, damages compressor seals, and contaminates shop recovery equipment. RKC services R1234yf with HFO-rated equipment and Section 609–certified technicians.',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
  },
  {
    name: 'R-1234ze & R-744 (CO₂)',
    era: 'Emerging / niche',
    gwp: 'GWP < 1',
    status: 'Future alternatives',
    body: 'R1234ze is a non-flammable HFO variant used primarily in commercial and industrial applications — not yet common in U.S. passenger cars. R-744 (carbon dioxide) operates at dramatically higher pressures — 1,500+ psi — and appears on some European-market vehicles and concept fleets. Heat pump systems on electric vehicles sometimes use R1234yf or proprietary blends. If you drive a newer EV or PHEV in the Denver metro, your AC service may involve high-voltage compressor isolation in addition to refrigerant type identification. RKC identifies refrigerant type from the under-hood label before any hose connects.',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/25',
  },
];

const REFRIGERANT_ERA_ROWS = [
  { years: 'Before 1994', refrigerant: 'R-12 (CFC-12)', notes: 'Illegal to vent. Recovery + R134a retrofit with new oil and ports.' },
  { years: '1994 – 2012', refrigerant: 'R-134a', notes: 'Dominant standard. POE/PAG oil. Quick-connect ports on most vehicles.' },
  { years: '2013 – 2020', refrigerant: 'Mixed transition', notes: 'GM/Ford/Stellantis begin R1234yf on select models; many still R134a.' },
  { years: '2021 – present', refrigerant: 'R-1234yf', notes: 'EPA SNAP effectively mandates on new LDV. Unique ports and HFO equipment.' },
  { years: 'EV / PHEV', refrigerant: 'R1234yf + heat pump', notes: 'High-voltage compressor. Orange cable safety protocols required.' },
];

const AC_COMPONENTS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Fan,
    title: 'Compressor',
    body: 'The compressor is the system pump — fixed-displacement units run at constant stroke while variable-displacement compressors (common on German and Japanese imports) modulate swash plate angle to match load without cycling the clutch. Clutch-type compressors engage with an electromagnetic clutch; clutchless (electric scroll) compressors run whenever the PCM commands, common on hybrid and stop-start vehicles. Bearing noise, clutch air gap out of spec, or internal valve failure all present as warm vents before total seizure. We listen, measure amperage on clutchless units, and compare high/low pressures before quoting a $800+ compressor job.',
  },
  {
    icon: Wind,
    title: 'Condenser',
    body: 'The condenser rejects heat from high-pressure refrigerant gas in front of the radiator. Road debris on I-25, C-470, and Santa Fe Drive punctures micro-channel tubes — the leak is invisible until the charge drops weeks later. Bent fins restrict airflow enough to raise head pressure and trip high-pressure cutout switches on 95°F Englewood afternoons. We inspect for stone damage, fin comb straightening where possible, and pressure-test before condemning a condenser that looks fine externally.',
  },
  {
    icon: Droplets,
    title: 'Evaporator core',
    body: 'Inside the dash, the evaporator absorbs cabin heat as liquid refrigerant boils to gas. Musty odor means mold and bacteria on the wet core surface — common when drivers switch from AC to heat without running the blower on fresh air to dry the box. Heater core leaks can contaminate the same HVAC case, producing sweet coolant smell instead of mildew. Evaporator replacement requires dash removal on many trucks and SUVs — a multi-hour job we scope only after confirming the core itself is the leak source, not an external o-ring at the expansion device.',
  },
  {
    icon: Gauge,
    title: 'Expansion valve vs. orifice tube',
    body: 'Expansion valves (TXV) meter refrigerant flow based on evaporator outlet temperature — precision systems on most imports and newer domestics. Orifice tube systems (GM, Ford, Chrysler through the 2000s) use a fixed restriction tube and an accumulator instead of a receiver-drier. Stuck TXV needles cause frost on one side and warm vents on the other; clogged orifice tubes starve the evaporator. We identify system type before interpreting gauge readings — the diagnostic path differs.',
  },
  {
    icon: ShieldCheck,
    title: 'Receiver-drier vs. accumulator',
    body: 'Receiver-driers on TXV systems store liquid refrigerant and contain desiccant to absorb moisture — replace after any system opening or compressor failure to prevent acid formation. Accumulators on orifice-tube systems sit on the low side and trap liquid slug before it reaches the compressor. Both filter debris; both must be replaced when a compressor sends metal through the lines. Skipping the drier/accumulator after compressor work is how comebacks happen within 6,000 miles.',
  },
  {
    icon: Zap,
    title: 'Service ports & Schrader valves',
    body: 'High-side (red, smaller on R134a) and low-side (blue, larger) service ports connect manifold gauges. Schrader valve cores leak when the rubber seal hardens — a $2 part that mimics a major leak. R1234yf vehicles use SAE J639 fittings with reverse-thread and keyed ports to prevent cross-service. We replace leaking cores, torque cap seals, and verify port integrity before charging. Never open the high-side port on a running system.',
  },
];

const DIAGNOSTIC_METHODS = [
  {
    step: '01',
    title: 'Manifold gauge interpretation',
    body: 'Static pressure with the engine off should equal ambient temperature on a pressure/temperature chart — roughly 30–35 psi at 70°F for R134a. Running pressures at 1,500 RPM with blower on max tell the story: low low-side and low high-side means low charge; normal low-side with high high-side means condenser fan or restriction; high low-side with low high-side points to weak compressor. Denver altitude slightly lowers ambient boiling point but manufacturer charts account for elevation when we reference AllData specs.',
  },
  {
    step: '02',
    title: 'UV dye leak detection',
    body: 'UV dye injected with refrigerant or pre-installed by the factory fluoresces under black light at leak points — o-rings, hose crimps, condenser tubes, and evaporator drain area. Dye is not a substitute for electronic sniffing on micro-leaks, but it shows the exact exit point once charge is sufficient. We use dye compatible with both PAG oil systems and HFO refrigerants per manufacturer guidance.',
  },
  {
    step: '03',
    title: 'Electronic leak sniffers',
    body: 'Heated-diode and infrared sniffers detect refrigerant concentration at fittings and along condenser rows. R1234yf requires HFO-calibrated detectors — R134a sniffers miss HFO leaks or cross-react. Sniffers find leaks too small to drop pressure overnight but large enough to fail over a Colorado summer. Combined with nitrogen pressure testing on empty systems, we locate leaks before evacuating and charging.',
  },
  {
    step: '04',
    title: 'Vacuum decay & micron gauge',
    body: 'After repair, the system is evacuated to 500 microns or lower and held — decay indicates a remaining leak or moisture. Moisture in the system forms acid with PAG oil and destroys compressor windings. A proper evacuation takes 30–45 minutes, not the five-minute pull DIY kits perform. We use digital micron gauges, not vacuum gauge analog readings, to confirm dehydration before charge.',
  },
  {
    step: '05',
    title: 'Vent temperature testing',
    body: 'Center duct temperature at idle with recirc off is the customer-facing metric. Target is typically 35–45°F below ambient on a healthy R134a system — so 45–55°F vent temp on a 95°F Englewood day. R1234yf systems may run slightly warmer by design. We record vent temp, ambient, humidity, and engine RPM on the invoice so you have a baseline if performance changes next season.',
  },
];

const HEATING_TOPICS: { title: string; body: string }[] = [
  {
    title: 'Heater core clogging & Dex-Cool gel',
    body: 'The heater core is a small radiator inside the dash. When coolant service is deferred — especially on GM vehicles with Dex-Cool — gel and scale restrict flow through the core tubes. You get heat at highway speed when the water pump forces volume through partial blockage, but lukewarm air at idle in Englewood traffic. Flushing from both directions sometimes restores flow; other times the core must come out. We measure inlet and outlet hose temperature with an infrared thermometer — less than 20°F delta across the core confirms restriction before quoting dash removal.',
  },
  {
    title: 'Blend door actuators',
    body: 'Blend doors mix hot coolant air with cold AC air to hit your set temperature. Plastic gears inside door actuators strip after years of cycling — you hear clicking behind the dash and get heat on one side, cold on the other in dual-zone systems. Recalibration via scan tool sometimes fixes it; stripped gears require actuator or dash access. We command actuators through the HVAC module before assuming the heater core failed.',
  },
  {
    title: 'Blower motor resistor vs. module',
    body: 'If high speed works but lower speeds do not, the blower resistor (older vehicles) or blower control module (newer PWM units) has failed — not the motor itself. Resistors burn when the motor draws high amperage from a failing bearing. We test motor amp draw before replacing only the resistor and finding the same failure in two weeks.',
  },
  {
    title: 'Thermostat stuck open vs. closed',
    body: 'A thermostat stuck open never lets the engine reach full operating temperature — heat is perpetually lukewarm and fuel economy suffers. Stuck closed causes overheating and can blow head gaskets, not just HVAC complaints. We verify coolant temp with scan data and touch-test upper/lower hoses. Thermostat replacement is inexpensive compared to misdiagnosing a heater core.',
  },
  {
    title: 'Water pump & idle heat',
    body: 'Heat that returns at 2,000 RPM but disappears at idle often traces to low coolant level, air pockets after a recent repair, or a weak water pump impeller that cannot circulate at low speed. We bleed air from fill points on elevated ramps, pressure-test to 15 psi, and inspect pump weep hole seep before recommending core replacement.',
  },
];

const DENVER_PATTERNS: {
  icon: LucideIcon;
  title: string;
  body: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
}[] = [
  {
    icon: Thermometer,
    title: 'Hot idle in I-25 traffic',
    body: 'AC that cools at 65 mph but blows warm at a red light on I-25 through Englewood and Denver points to condenser fan failure, partial condenser blockage, or a weak compressor that cannot maintain head pressure at idle. Electric fans should kick on by 220 psi head pressure; clutch fans should lock when hot. We test fan command with the engine at operating temp in the bay, not just read codes.',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10',
    accentBorder: 'border-red-500/25',
  },
  {
    icon: Snowflake,
    title: 'Winter no-heat after summer AC neglect',
    body: 'Drivers who ignore a slow AC leak all summer often discover no heat in November when the first cold snap hits. Low refrigerant does not affect heat directly, but deferred HVAC service means nobody checked coolant level, thermostat, or heater core flow either. Seasonal transitions are when latent heater core clogs and blend door failures surface. A fall HVAC inspection catches both sides before you need defrost for the drive over Monument Hill.',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
  },
  {
    icon: AlertTriangle,
    title: 'Front-end collision condenser damage',
    body: 'Even a parking-lot tap that bends the condenser bracket can crack micro-channel tubes. Insurance adjusters often miss HVAC damage focused on bumper cover cosmetics. If AC worked before a minor front-end hit on Santa Fe or Broadway and blows warm two weeks later, condenser replacement plus receiver-drier and full evacuation is the fix — not another recharge can.',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
  },
  {
    icon: MapPin,
    title: 'High-altitude efficiency notes',
    body: 'At 5,280 feet in Denver and similar elevation in Englewood, air is thinner — condenser heat rejection is slightly less efficient than at sea level, and vacuum evacuation boils moisture at lower absolute pressure (a benefit for dehydration). You may see vent temps 3–5°F warmer than coastal benchmarks on the same ambient day. That is normal physics, not necessarily a failing compressor — but it also means marginal systems fail here first. We set expectations using altitude-adjusted spec sheets, not generic online charts.',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/25',
  },
];

export default function HeatingAcContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs('Heating & AC')}
        image={PHOTOS.interior}
        imageAlt="Auto AC and heating repair at RKC Automotive Englewood CO"
        eyebrow="Climate control · Englewood, CO"
        title="Auto AC & Heating Repair in Englewood, CO"
        description="R134a and R1234yf AC repair, EPA Section 609–compliant refrigerant service, heater core and compressor diagnostics — for Denver south metro drivers who need cold vents in July and heat that works in January."
        primaryCta={{ href: '/contact', label: 'AC & Heating Service' }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote="A recharge without a leak search is a summer rental — not a repair."
        body={
          <>
            R134a and R1234yf systems lose refrigerant only through leaks — o-rings at the compressor, porous condensers from road debris on C-470, or corroded evaporator cores. Englewood summer heat above 95°F exposes weak compressors that cooled adequately in spring. We vacuum-test, dye-trace, and repair the leak before charging to spec — so your vent temp stays in the 40s°F through Denver heat waves. Heat complaints share the same HVAC case: blend doors, blower motors, and clogged heater cores fail on the same vehicles we see for{' '}
            <Link href="/services/preventative-maintenance-englewood-co" className="font-semibold text-primary-green-light hover:text-white">
              deferred coolant service
            </Link>
            . Electrical faults — stuck relays, blown fuses, module communication — overlap with{' '}
            <Link href="/services/electrical-system-englewood-co" className="font-semibold text-primary-green-light hover:text-white">
              electrical system repair
            </Link>
            ; we read live data on the CAN bus before replacing a $600 compressor that was never getting a clutch signal.
          </>
        }
      />

      <ServiceSymptomGrid
        eyebrow="HVAC faults"
        title="Climate control symptoms we fix"
        intro="AC and heat complaints share blend doors, blower motors, and control modules — but each symptom has a distinct test path we document on your invoice."
        cards={SYMPTOMS}
      />

      {/* Refrigerant Reference Guide */}
      <section className={`${SECTION_PAD} bg-[#0c1222] text-white`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">Refrigerant guide</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">
              R-12, R134a, R1234yf &amp; what your vehicle needs
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Using the wrong refrigerant destroys compressors, contaminates shop recovery equipment, and violates federal law.
              RKC identifies refrigerant type from your under-hood label and services each with dedicated EPA Section 609–certified
              equipment — before any hose connects in our Evans Ave bay.
            </p>
          </FadeIn>

          <Stagger className="grid gap-6 lg:grid-cols-2" stagger={0.08}>
            {REFRIGERANTS.map((ref) => (
              <StaggerItem key={ref.name}>
                <article className={`flex h-full flex-col overflow-hidden rounded-[1.75rem] border ${ref.accentBorder} bg-white/[0.04]`}>
                  <div className={`border-b ${ref.accentBorder} ${ref.accentBg} px-8 py-6`}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-display text-2xl tracking-wide text-white">{ref.name}</h3>
                      <span className={`rounded-full border ${ref.accentBorder} ${ref.accentBg} px-3 py-1 text-xs font-semibold uppercase tracking-wider ${ref.accent}`}>
                        {ref.status}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/60">
                      <span>{ref.era}</span>
                      <span aria-hidden>·</span>
                      <span>{ref.gwp}</span>
                    </div>
                  </div>
                  <p className="flex-1 px-8 py-6 text-sm leading-relaxed text-white/65 sm:text-base">{ref.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.1} className="mt-14">
            <h3 className="font-display text-3xl tracking-wide text-white">Which refrigerant by vehicle era</h3>
            <p className="mt-3 max-w-3xl text-base text-white/65">
              Check the under-hood label on the radiator support or hood underside — it lists refrigerant type and charge weight in grams or ounces.
              When the label is missing, we identify fittings, compressor type, and model year before service.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.06]">
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider text-primary-green-light">Model years</th>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider text-primary-green-light">Refrigerant</th>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider text-primary-green-light">Service notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REFRIGERANT_ERA_ROWS.map((row, i) => (
                      <tr key={row.years} className={i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'}>
                        <td className="px-6 py-4 font-medium text-white">{row.years}</td>
                        <td className="px-6 py-4 text-white/80">{row.refrigerant}</td>
                        <td className="px-6 py-4 text-white/60">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.14} className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <h3 className="font-display text-xl tracking-wide text-white">EPA Section 609 certification</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Federal law requires technicians who handle refrigerant during maintenance, service, or repair to hold EPA Section 609 certification.
                RKC techs recover — never vent — refrigerant into approved equipment. Venting any refrigerant, including R134a and R1234yf, violates the Clean Air Act.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <h3 className="font-display text-xl tracking-wide text-white">Why you cannot mix refrigerants</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Mixed refrigerants create unpredictable head pressure, damage compressor seals designed for specific oil types, and contaminate recovery machines — costing shops thousands to purge.
                A system found with mixed refrigerant requires full recovery, flush, drier replacement, and charge with the correct pure refrigerant only.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <h3 className="font-display text-xl tracking-wide text-white">Colorado recovery requirements</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Colorado follows federal Clean Air Act rules — no additional state refrigerant tax, but the same recovery, recycle, and recharge requirements apply in Englewood and across the Denver metro.
                DIY venting on residential or automotive systems is illegal. RKC documents recovery weight on every invoice for your records.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AC System Anatomy */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">System anatomy</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              How your car AC system works
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Refrigerant circulates in a closed loop — compressed, condensed, expanded, and evaporated — while blower motors move cabin air across the evaporator and heater core.
              Knowing which component failed saves you from paying for parts that do not fix the symptom.
            </p>
          </FadeIn>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {AC_COMPONENTS.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[var(--background)] p-8 shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)]">
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-blue/10 ring-1 ring-primary-blue/20">
                        <Icon className="size-6 text-primary-blue" aria-hidden />
                      </span>
                      <h3 className="font-display text-xl tracking-wide text-primary-blue">{item.title}</h3>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">{item.body}</p>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Diagnostic Methods */}
      <section className="relative overflow-hidden bg-[#0c1222] py-24 text-white sm:py-28">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={PHOTOS.interior}
            alt="AC diagnostic service at RKC Automotive Englewood Colorado"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative wrap">
          <FadeIn className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">Diagnostics</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">
              How we diagnose AC &amp; heating faults
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Gauge readings without context mislead — ambient temperature, humidity, and refrigerant type all shift expected pressures.
              We follow a documented sequence aligned with{' '}
              <Link href="/services/engine-diagnostics-englewood-co" className="font-semibold text-primary-green-light hover:text-white">
                engine and HVAC module diagnostics
              </Link>{' '}
              so electrical and mechanical causes are separated before parts are ordered.
            </p>
          </FadeIn>

          <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {DIAGNOSTIC_METHODS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="group relative border-t border-white/20 pt-6 transition duration-300 hover:border-primary-green/50">
                  <p className="font-display text-5xl text-primary-green-light">{step.step}</p>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ServiceProcessTimeline
        eyebrow="HVAC workflow"
        title="Climate diagnosis and repair"
        intro="EPA-compliant service with leak detection — not vent-to-atmosphere shortcuts."
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.interior}
        bgImageAlt="Heating & AC repair workflow at RKC Automotive Englewood CO"
      />

      {/* Heating System */}
      <section className={`${SECTION_PAD} bg-[var(--background)]`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Heating system</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Heater repair — not just summer AC
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Heat uses engine coolant routed through the heater core, mixed by blend doors, and blown by the same blower that runs your AC.
              A vehicle with perfect AC can still leave you freezing in January if the cooling system or HVAC controls are neglected.
            </p>
          </FadeIn>

          <Stagger className="grid gap-6 lg:grid-cols-2" stagger={0.08}>
            {HEATING_TOPICS.map((topic) => (
              <StaggerItem key={topic.title}>
                <article className="flex h-full flex-col rounded-[1.75rem] border border-[color:var(--line)] bg-white p-8 shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)]">
                  <h3 className="font-display text-2xl tracking-wide text-primary-blue">{topic.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{topic.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Denver / Englewood patterns */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Local patterns</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Common HVAC failures in Denver &amp; Englewood
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Climate, altitude, and driving conditions on I-25, C-470, and Santa Fe Drive create failure patterns we see weekly at our south-metro shop.
            </p>
          </FadeIn>

          <Stagger className="grid gap-6 lg:grid-cols-2" stagger={0.08}>
            {DENVER_PATTERNS.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <article className={`flex h-full flex-col overflow-hidden rounded-[1.75rem] border ${item.accentBorder} bg-[var(--background)] shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)]`}>
                    <div className={`flex items-center gap-4 border-b ${item.accentBorder} ${item.accentBg} px-8 py-6`}>
                      <span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${item.accentBg} ring-1 ${item.accentBorder}`}>
                        <Icon className={`size-6 ${item.accent}`} aria-hidden />
                      </span>
                      <h3 className="font-display text-2xl tracking-wide text-primary-blue">{item.title}</h3>
                    </div>
                    <p className="px-8 py-6 text-sm leading-relaxed text-ink-muted sm:text-base">{item.body}</p>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Hybrid / EV AC */}
      <section className={`${SECTION_PAD} bg-[#0c1222] text-white`}>
        <div className="wrap">
          <FadeIn className={`mx-auto ${SECTION_HEADER_CENTER}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">Hybrid &amp; EV</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">
              High-voltage AC on hybrids &amp; electric vehicles
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Hybrid, plug-in, and battery-electric vehicles use electric compressors powered by high-voltage circuits — not belt-driven clutches.
              Service requires orange-cable safety protocols, HV disable procedures, and often scan-tool activation to run the compressor during diagnosis.
            </p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="grid overflow-hidden rounded-[1.75rem] border border-white/10 lg:grid-cols-2">
              <div className="border-b border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-500/30">
                    <Zap className="size-6 text-amber-400" aria-hidden />
                  </span>
                  <h3 className="font-display text-3xl tracking-wide text-white">High-voltage compressor safety</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                  Orange high-voltage cables connect the battery pack to the electric AC compressor on most hybrids and EVs.
                  RKC techs follow manufacturer HV disable steps — service plug removal, waiting periods, and insulated tool use — before opening refrigerant circuits or touching compressor terminals.
                  Never attempt HV compressor diagnosis without proper training; capacitors hold lethal charge even with the vehicle off.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'HV system disable per OEM service procedure',
                    'Insulated tools and PPE for orange cable areas',
                    'Scan-tool compressor activation for pressure testing',
                    'R1234yf recovery with HFO-rated equipment',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-white/65 sm:text-base">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary-green-light" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/[0.02] p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-green/15 ring-1 ring-primary-green/30">
                    <Thermometer className="size-6 text-primary-green-light" aria-hidden />
                  </span>
                  <h3 className="font-display text-3xl tracking-wide text-white">Heat pump systems</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                  Many modern EVs and PHEVs use heat pumps that reverse the refrigerant cycle to heat the cabin without relying solely on resistive heaters — improving winter range on the drive from Englewood to Breckenridge.
                  Heat pump faults trigger HVAC codes readable through module diagnostics, not just gauge sets.
                  Refrigerant type is almost always R1234yf with a separate chiller plate or battery-cooling circuit on some platforms.
                  We identify your vehicle&apos;s architecture before quoting service — Tesla, Rivian, Chevy Bolt, and Toyota Prius systems differ substantially.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <ServiceChecklistGrid
        eyebrow="System coverage"
        title="Heating and AC services"
        intro="Summer AC and winter heat share plumbing — we service both sides of the firewall at our Englewood shop."
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title="HVAC labor transparency"
        description={`AC and heating repair at ${LABOR_RATE} with refrigerant and parts itemized. R1234yf refrigerant quoted by weight from your label. Recharge-with-leak-repair quotes include recovery, vacuum, dye, and charge — no hidden environmental fees.`}
      />

      <ServiceFAQSection
        title="AC & heating questions"
        intro="R134a vs R1234yf cost, DIY recharge cans, musty AC smell, heater core leaks, and R-12 retrofits — straight answers for Denver metro drivers."
        items={HEATING_AC_PAGE_FAQ}
      />

      <RelatedServices slug="heating-ac-englewood-co" />

      <ServiceAreaServed serviceLabel="heating and AC repair" relatedServiceSlug="heating-ac-englewood-co" />

      <ServiceFinalCTA
        title="AC blowing warm?"
        description="Schedule HVAC service at RKC on Evans Ave. Leak found, leak fixed, charged to spec — written estimate at $120/hr labor before compressor swaps."
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: 'Book service' }}
      />
    </div>
  );
}
