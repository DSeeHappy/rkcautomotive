#!/usr/bin/env node
/**
 * Generates premium service Content components and page.tsx files.
 * Run once: node scripts/generate-premium-services.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const contentDir = path.join(root, 'app/components/ui/services');

const SERVICES = [
  {
    slug: 'brake-repair-englewood-co',
    component: 'BrakeRepair',
    faqConst: 'BRAKE_REPAIR_PAGE_FAQ',
    breadcrumb: 'Brake Repair',
    serviceType: 'Brake Repair and Service',
    photoKey: 'undercarriage',
    metadata: {
      title: 'Brake Repair in Englewood, CO | Expert Brake Service | RKC Automotive',
      description:
        'Professional brake repair and service in Englewood, CO. Brake pads, rotors, calipers, and complete brake system service. Call (720) 749-3965 for same-day service.',
      ogAlt: 'Brake Repair Service at RKC Automotive Englewood CO',
      keywords:
        'brake repair Englewood CO, brake service Denver, brake pads replacement, rotor resurfacing, brake inspection',
    },
    hero: {
      eyebrow: 'Brake systems · Englewood, CO',
      title: 'Expert Brake Repair &amp; Service in Englewood, CO',
      description:
        'Grinding, vibration, or a soft pedal? We inspect pads, rotors, calipers, and ABS hardware with a written estimate before any wrench turns — same-day openings when parts are on hand at our Evans Ave shop.',
      primaryCta: 'Schedule Brake Service',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'Warped rotors do not fix themselves with a parts-store pad swap.',
      body:
        'Colorado mountain descents on I-70 and stop-and-go on Santa Fe Drive heat rotors past their temper. Pads alone cannot cure pedal pulsation or ABS activation at low speed — the friction surface needs measurement, not guesswork. Englewood drivers who wait on metal-on-metal grinding pay for calipers and hubs too. We measure rotor thickness, check pad wear sensors, and test fluid moisture before quoting what your brakes actually need.',
    },
    symptomsEyebrow: 'Warning signs',
    symptomsTitle: 'When your brakes are telling you something',
    symptomsIntro:
      'Brake problems rarely announce themselves with a dashboard light first. Pedal feel, noise, and steering pull change gradually — until an emergency stop on Broadway exposes how much stopping power you have lost.',
    symptomIcons: ['Disc', 'Gauge', 'AlertTriangle'],
    symptoms: [
      {
        title: 'Pedal pulsation & warped rotors',
        body:
          'Pulsation through the steering wheel or brake pedal under light braking means the rotor friction surface has high spots — often from overheating on long downhill grades toward Idaho Springs or from uneven lug-nut torque after a tire rotation. Resurfacing only works when thickness remains above minimum spec; many modern rotors are too thin to machine and require replacement. We measure runout and thickness with a dial indicator, not eyeball judgment.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
      {
        title: 'Grinding & metal-on-metal wear',
        body:
          'Squeal tabs are designed to warn before steel contacts steel. Once you hear grinding, the pad backing plate is machining the rotor and generating heat that glazes pad compound and overheats caliper pistons. Continued driving scores rotors beyond salvage and can seize a caliper — turning a pad job into pads, rotors, hardware, and a caliper rebuild. If you hear grinding, schedule service this week, not next month.',
        warning: 'Metal-on-metal grinding destroys rotors and calipers fast.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
      {
        title: 'Soft pedal & fluid contamination',
        body:
          'A pedal that sinks toward the floor — especially after sitting overnight — traces to fluid moisture absorption, internal seal bypass in the master cylinder, or air in the hydraulic circuit after a caliper service. Brake fluid is hygroscopic; Colorado humidity and heat cycles push DOT 3/4 fluid past its useful life. We test copper content and boiling point, then flush or repair the component that failed — not just top off the reservoir and send you home.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
    ],
    processEyebrow: 'Our process',
    processTitle: 'From inspection to verified stop',
    processIntro:
      'Every brake job at RKC starts with measurement, not assumptions. We document pad thickness, rotor condition, caliper slide function, and fluid health before you approve parts.',
    processSteps: [
      {
        step: '01',
        title: 'Road test & pedal feel',
        body:
          'We reproduce pulsation, pull, and noise under controlled braking when safe. Pedal travel and ABS activation at parking-lot speeds tell us whether the issue is hydraulic, mechanical, or sensor-related before the wheels come off.',
      },
      {
        step: '02',
        title: 'Measure rotors & pads',
        body:
          'Micrometer readings on rotor thickness and runout, plus pad lining depth at inner and outer edges. Uneven wear flags stuck caliper slides, collapsed hoses, or ABS modulator issues — not just "time for pads."',
      },
      {
        step: '03',
        title: 'Caliper & hardware check',
        body:
          'Slide pins, abutment clips, and bracket ears get cleaned and lubricated with high-temp brake grease. Seized pins cause outer-pad-only wear and overheating. We quote hardware kits when clips are corroded — cheap insurance against comeback noise.',
      },
      {
        step: '04',
        title: 'Fluid & ABS scan',
        body:
          'Moisture-contaminated fluid gets flushed when test strips or copper ppm readings demand it. ABS wheel-speed sensors and tone rings are inspected for metal debris after pad work — a common post-grinding oversight that triggers false ABS activation.',
      },
      {
        step: '05',
        title: 'Bed-in & final verification',
        body:
          'New pads and rotors need a controlled bedding procedure — moderate stops from 40 mph without coming to a complete halt until the transfer layer forms. We road-test pedal firmness and ABS function before you leave our Englewood lot.',
      },
    ],
    checklistEyebrow: 'What we service',
    checklistTitle: 'Complete brake system coverage',
    checklistIntro:
      'Pads and rotors are only part of the system. We service the hydraulic and electronic layers that actually translate pedal force into stopping power.',
    checklistGroups: [
      {
        category: 'Friction components',
        items: [
          'Ceramic and semi-metallic pad sets matched to your driving style',
          'Rotor replacement or on-car machining when thickness allows',
          'Caliper rebuild, slide service, and parking brake shoe adjustment',
        ],
      },
      {
        category: 'Hydraulics & ABS',
        items: [
          'Brake fluid flush with DOT-spec fluid and moisture testing',
          'Master cylinder, brake line, and flexible hose inspection',
          'ABS wheel-speed sensor and tone-ring cleaning after debris events',
        ],
      },
      {
        category: 'Inspection & safety',
        items: [
          'Free visual brake inspection with any service visit',
          'Written estimate before parts are ordered',
          'Post-repair road test and bedding guidance for new friction material',
        ],
      },
      {
        category: 'Englewood & metro drivers',
        items: [
          'Mountain-grade brake evaluation for I-70 commuters',
          'Fleet and work-truck heavy-load brake packages',
          'Same-day service when parts are in stock — call before 2 PM',
        ],
      },
    ],
    laborTitle: 'Labor transparency on every brake job',
    laborDescription:
      'Brake work should never be a mystery invoice. We bill at our posted $120/hr rate with AllData labor times as a baseline. Pad-and-rotor per axle, caliper rebuild, and fluid flush scopes are documented on your written estimate before we order parts.',
    faqTitle: 'Brake repair questions',
    faqIntro:
      'Straight answers on pad life, rotor resurfacing, ABS lights, and what Colorado driving does to your stopping system.',
    finalTitle: 'Ready for a brake inspection?',
    finalDescription:
      'Free visual inspection at 2120 W Evans Ave. We measure, explain, and quote — pads, rotors, fluid, or calipers — at $120/hr labor plus parts before any work begins.',
    finalPrimary: 'Call',
    finalSecondary: 'Schedule online',
    bgImage: 'undercarriage',
  },
  // Additional services will be appended by the script runner reading external data...
];

// For brevity in maintenance, load full service definitions from embedded map below
const ALL_SERVICES = getAllServiceDefinitions();

function getAllServiceDefinitions() {
  return [
    SERVICES[0],
    ...requireServiceData(),
  ];
}

function requireServiceData() {
  // Inline remaining 10 services
  return [
    engineDiagnostics(),
    checkEngineLight(),
    transmissionServices(),
    oilChanges(),
    suspensionSteering(),
    heatingAc(),
    electricalSystem(),
    batteryTesting(),
    exhaustSystem(),
    preventativeMaintenance(),
  ];
}

function engineDiagnostics() {
  return {
    slug: 'engine-diagnostics-englewood-co',
    component: 'EngineDiagnostics',
    faqConst: 'ENGINE_DIAGNOSTICS_PAGE_FAQ',
    breadcrumb: 'Engine Diagnostics',
    serviceType: 'Engine Diagnostics and Repair',
    photoKey: 'engineBay',
    metadata: {
      title: 'Engine Diagnostics in Englewood, CO | RKC Automotive',
      description:
        'Expert engine diagnostics and repair in Englewood, CO. Advanced equipment for all makes and models in the Denver south metro. Call (720) 749-3965 for service.',
      ogAlt: 'Engine Diagnostics at RKC Automotive Englewood CO',
      keywords:
        'engine diagnostics Englewood CO, engine repair Denver, car diagnostics, check engine diagnosis',
    },
    hero: {
      eyebrow: 'Diagnostics · Englewood, CO',
      title: 'Advanced Engine Diagnostics in Englewood, CO',
      description:
        'Rough idle, power loss, or mystery misfires? We scan OBD-II, analyze live data, run compression and smoke tests, and isolate fuel-trim faults — with a written repair plan before parts get thrown at codes.',
      primaryCta: 'Book Diagnostics',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'A stored code is a clue — not a diagnosis.',
      body:
        'Parts stores read P0xxx codes for free, but codes only report which sensor or circuit tripped — not whether the sensor failed, a wire rubbed through, or the root cause is mechanical. Denver metro drivers often replace three oxygen sensors before finding a vacuum leak or burnt exhaust valve. At RKC we verify every code with live data, scope traces, and mechanical tests so you pay for the fix, not the guess.',
    },
    symptomsEyebrow: 'Drivability signs',
    symptomsTitle: 'Symptoms that need real diagnostics',
    symptomsIntro:
      'Modern powertrains mask problems until load, altitude, or cold-start conditions expose them. These patterns need scan tools and test equipment — not a generic tune-up quote.',
    symptomIcons: ['Gauge', 'Zap', 'Activity'],
    symptoms: [
      {
        title: 'Random misfire & fuel trim drift',
        body:
          'P0300-series codes with positive long-term fuel trim on multiple banks often mean unmetered air — cracked PCV hoses, intake gasket leaks, or torn MAF boots. Negative trim on one bank can trace to leaking injectors or low compression. We graph fuel trims at idle, 2,500 RPM, and light load on a road test loop near Evans Ave to see which cells are out of spec before recommending coils or plugs.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
      {
        title: 'Rough idle & smoke signals',
        body:
          'Blue smoke at startup points to valve-guide seal or turbo seal wear; white smoke that smells sweet suggests coolant in the combustion chamber; black smoke under load is rich fuel or restricted airflow. A smoke-machine test through the intake isolates vacuum leaks in minutes. Compression and leak-down tests separate ring wear from head-gasket failure — critical before you approve a $2,000 head job on a high-mileage SUV.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
      {
        title: 'Power loss at altitude',
        body:
          'Colorado\'s thin air stresses turbochargers, VVT solenoids, and fuel delivery. A vehicle that feels fine at sea level may show boost leaks, clogged intercoolers, or MAF scaling errors above 5,000 feet. We compare requested vs. actual boost, knock retard, and catalyst efficiency on live data — especially on EcoBoost, TDI, and direct-injection platforms common in Englewood commutes.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
    ],
    processEyebrow: 'Diagnostic workflow',
    processTitle: 'How we isolate engine faults',
    processIntro:
      'Our ASE-certified techs follow a verify-first workflow — scan, test, confirm — so the repair matches the failure mode.',
    processSteps: [
      { step: '01', title: 'OBD-II scan & freeze frame', body: 'We pull stored, pending, and permanent codes with freeze-frame RPM, load, and fuel status. Pending codes on cold mornings often differ from stored codes after a full warm-up cycle.' },
      { step: '02', title: 'Live data & bidirectional tests', body: 'Fuel trims, O2 sensor switching, MAP/MAF correlation, and VVT commanded vs. actual angles. Actuator tests command EGR, EVAP purge, and cooling fans to confirm PCM control.' },
      { step: '03', title: 'Scope & waveform analysis', body: 'Ignition patterns, injector pintle time, and crank/cam correlation on a digital scope catch intermittent faults scan tools miss — especially coil-on-plug breakdown under load.' },
      { step: '04', title: 'Mechanical verification', body: 'Compression, leak-down, cooling-system pressure test, and smoke test when codes or smoke color suggest internal wear or vacuum leaks.' },
      { step: '05', title: 'Written repair plan', body: 'You receive a prioritized fix list with parts and labor at $120/hr. Diagnostic fee applies toward approved repairs — you are not paying twice to learn what failed.' },
    ],
    checklistEyebrow: 'Equipment & tests',
    checklistTitle: 'Diagnostic tools we use daily',
    checklistIntro: 'Professional diagnostics require more than a code reader. Our Englewood bay is equipped for mechanical and electrical root-cause work.',
    checklistGroups: [
      { category: 'Electronic diagnostics', items: ['Factory-level scan tools for domestic, Asian, and European platforms', 'Live data graphing and freeze-frame analysis', 'Oscilloscope for ignition and sensor waveforms'] },
      { category: 'Mechanical testing', items: ['Compression and cylinder leak-down testing', 'Cooling-system pressure and combustion-gas detection', 'Smoke-machine vacuum leak isolation'] },
      { category: 'Drivability verification', items: ['Controlled road test on local Englewood routes', 'Fuel trim capture at altitude and under load', 'Post-repair monitor readiness and code clearing'] },
      { category: 'What you receive', items: ['Plain-language explanation of findings', 'Written estimate before repair authorization', 'Diagnostic fee credited toward approved work'] },
    ],
    laborTitle: 'Labor transparency on diagnostics',
    laborDescription: 'Engine diagnostics start from $99 and credit toward approved repairs. Labor bills at our posted $120/hr rate with documented test results — not open-ended hourly guessing.',
    faqTitle: 'Engine diagnostics questions',
    faqIntro: 'Answers on diagnostic fees, live data, compression tests, and why we do not just clear codes.',
    finalTitle: 'Need engine diagnostics today?',
    finalDescription: 'Schedule at 2120 W Evans Ave. We find the root cause — misfire, vacuum leak, sensor fault, or mechanical wear — with tests you can understand before you approve the fix.',
    finalPrimary: 'Call',
    finalSecondary: 'Request appointment',
    bgImage: 'engineBay',
  };
}

function checkEngineLight() {
  return {
    slug: 'check-engine-light-englewood-co',
    component: 'CheckEngineLight',
    faqConst: 'CHECK_ENGINE_LIGHT_PAGE_FAQ',
    breadcrumb: 'Check Engine Light',
    serviceType: 'Check Engine Light Diagnosis',
    photoKey: 'engineRebuild',
    metadata: {
      title: 'Check Engine Light Diagnosis | Englewood, CO',
      description:
        'Check engine light diagnosis in Englewood, CO. Find the real problem — not every sensor on the diagram — with ASE-certified diagnostics. Call (720) 749-3965.',
      ogAlt: 'Check Engine Light at RKC Automotive Englewood CO',
      keywords: 'check engine light Englewood CO, CEL diagnosis Denver, OBD-II scan, emissions repair Colorado',
    },
    hero: {
      eyebrow: 'CEL diagnosis · Englewood, CO',
      title: 'Check Engine Light Diagnosis in Englewood, CO',
      description:
        'Steady or flashing MIL? We decode P0xxx powertrain and emissions codes, separate critical faults from monitor-not-ready, and verify the root cause before recommending repairs — diagnostic fee applied toward approved work.',
      primaryCta: 'Diagnose My CEL',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'Clearing the light is not fixing the problem.',
      body:
        'A erased code without repair means monitors reset and your next emissions test may fail — or the flashing light returns under load with catalyst-damaging misfires. Englewood drivers sometimes drive for weeks with a steady CEL until fuel economy tanks or Colorado emissions flags the vehicle. We diagnose first, explain severity, and only clear codes after the fault is verified repaired.',
    },
    symptomsEyebrow: 'CEL behavior',
    symptomsTitle: 'What your check engine light is telling you',
    symptomsIntro: 'Not every illuminated MIL is equal. How it behaves — steady, flashing, or intermittent — changes how urgently you need service.',
    symptomIcons: ['AlertCircle', 'Zap', 'Gauge'],
    symptoms: [
      {
        title: 'Flashing check engine light',
        body:
          'A flashing MIL under load means catalyst-damaging misfire — unburned fuel is entering the exhaust and overheating the catalytic converter. Do not drive except to a safe stop and tow if necessary. Common causes include failed coil-on-plug, collapsed lifter, or injector short. We prioritize these appointments because every mile can add hundreds in catalyst replacement cost.',
        warning: 'Flashing CEL = stop driving. Misfire can destroy your catalytic converter.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
      {
        title: 'Steady light & emissions codes',
        body:
          'P0420/P0430 catalyst efficiency codes, EVAP small-leak P0442, and O2 heater circuit faults often present as a steady light with no drivability complaint. Colorado emissions testing reads readiness monitors — a quick clear without repair fails inspection two weeks later. We test catalyst upstream/downstream switching, smoke-test EVAP hoses, and verify heater current before quoting converters or gas caps.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
      {
        title: 'Intermittent & pending codes',
        body:
          'Pending codes set before the MIL illuminates — valuable early warnings on cold-start misfires or marginal sensor performance. Intermittent faults need freeze-frame capture and road-test replication. A P0171 lean code that only appears on uphill merges toward the foothills is different from one at idle. We log data during test drives on local routes, not just in the bay.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
    ],
    processEyebrow: 'CEL workflow',
    processTitle: 'From code scan to confirmed repair',
    processIntro: 'We treat the check engine light as a starting point — not the diagnosis itself.',
    processSteps: [
      { step: '01', title: 'Code classification', body: 'Powertrain P0xxx, chassis C-codes, and body B-codes are separated. We note pending vs. stored and whether monitors are incomplete from a recent battery disconnect.' },
      { step: '02', title: 'Severity assessment', body: 'Flashing misfire, fuel trim limits, and over-temp flags get immediate triage. Steady emissions codes are scheduled with test-plan priority based on your inspection deadline.' },
      { step: '03', title: 'Component verification', body: 'Sensor voltage, switch response, and wiring continuity confirm failed parts. We do not replace an O2 sensor because the code says O2 — we verify slow response or heater draw first.' },
      { step: '04', title: 'Monitor drive cycle', body: 'After repair, we run drive cycles or advise your commute pattern so monitors set before emissions or before you assume the fix failed.' },
      { step: '05', title: 'Documented close-out', body: 'You receive code history, test results, and invoice credit for diagnostic time when you approve the repair — transparent paperwork for warranty or emissions retest.' },
    ],
    checklistEyebrow: 'Code families',
    checklistTitle: 'Common CEL categories we diagnose',
    checklistIntro: 'Englewood vehicles span decades of OBD-II strategy. These are the fault families we see most — each with distinct test paths.',
    checklistGroups: [
      { category: 'Emissions & EVAP', items: ['Catalyst efficiency P0420/P0430 with live O2 comparison', 'EVAP leak detection — smoke test and purge valve command', 'Secondary air and EGR function on applicable platforms'] },
      { category: 'Fuel & air metering', items: ['Lean/rich codes P0171/P0174 with smoke and fuel trim analysis', 'MAF/MAP correlation and vacuum-leak isolation', 'Injector balance and fuel pressure specification checks'] },
      { category: 'Ignition & misfire', items: ['Coil-on-plug scope patterns and swap verification', 'Compression test when misfire follows mechanical pattern', 'AFM/DFM and valvetrain-related misfire isolation'] },
      { category: 'Colorado specifics', items: ['Emissions-test readiness monitor guidance', 'Altitude-related boost and fuel trim evaluation', 'Diesel DEF/SCR and particulate-filter codes on HD pickups'] },
    ],
    laborTitle: 'CEL diagnostic pricing',
    laborDescription: 'Check-engine diagnostics from $99 — credited toward approved repairs at our posted $120/hr labor rate. You pay for verification, not a parts cannon.',
    faqTitle: 'Check engine light questions',
    faqIntro: 'When you can drive, when you cannot, and what Colorado emissions needs after the light comes on.',
    finalTitle: 'Check engine light on?',
    finalDescription: 'Call or schedule at RKC Automotive on Evans Ave. We decode the code, test the system, and quote the real fix before clearing your MIL.',
    finalPrimary: 'Call',
    finalSecondary: 'Book diagnosis',
    bgImage: 'engineRebuild',
  };
}

function transmissionServices() {
  return {
    slug: 'transmission-services-englewood-co',
    component: 'TransmissionServices',
    faqConst: 'TRANSMISSION_SERVICES_PAGE_FAQ',
    breadcrumb: 'Transmission Services',
    serviceType: 'Transmission Repair and Service',
    photoKey: 'classicLift',
    metadata: {
      title: 'Transmission Repair in Englewood, CO | RKC Automotive',
      description:
        'Transmission service and repair in Englewood, CO — automatic, manual, fluid service, and diagnostics for Denver south metro drivers. Call (720) 749-3965.',
      ogAlt: 'Transmission Services at RKC Automotive Englewood CO',
      keywords: 'transmission repair Englewood CO, transmission service Denver, CVT repair, automatic transmission fluid',
    },
    hero: {
      eyebrow: 'Transmissions · Englewood, CO',
      title: 'Transmission Repair &amp; Service in Englewood, CO',
      description:
        'Slipping, delayed engagement, or burnt-fluid smell? We diagnose automatic, manual, and CVT units — fluid analysis, pressure tests, and scoped teardown recommendations — with written estimates before major work.',
      primaryCta: 'Transmission Help',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'Burnt fluid is a symptom — not a service.',
      body:
        'A dark-fluid flush on a slipping transmission often accelerates failure by dislodging clutch material without fixing the worn band or torque-converter clutch. Denver stop-and-go on I-25 heats fluid past 200°F on summer afternoons. We inspect color, smell, and debris on the pan magnet before recommending fluid service, valve-body work, or rebuild — because the right fix depends on what the friction material is doing inside the case.',
    },
    symptomsEyebrow: 'Shift problems',
    symptomsTitle: 'Transmission failure modes we diagnose',
    symptomsIntro: 'Transmissions fail gradually — harsh shifts today become slip tomorrow. These symptoms need professional diagnosis, not another quart from the parts store.',
    symptomIcons: ['Cog', 'Gauge', 'AlertTriangle'],
    symptoms: [
      {
        title: 'Slip & flare between gears',
        body:
          'RPM flare during a 2-3 shift means clutch pack capacity is gone or line pressure is low from a worn pump or leaking solenoid circuit. CVTs show the same as engine speed drifting while road speed stalls. We read TCM adaptive shift data, main-line pressure where accessible, and fluid condition before quoting internal repair vs. converter replacement.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
      {
        title: 'Delayed engagement & cold-stall',
        body:
          'Two to three seconds from Park to Drive on a cold morning often traces to worn pump bore, stuck pressure-regulator valve, or degraded fluid viscosity. Torque-converter clutch shudder feels like driving over rumble strips at 45 mph — usually TCC apply strategy or converter clutch lining. We differentiate hydraulic delay from electronic TCC control with pressure and scan data.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
      {
        title: 'CVT vs traditional automatic',
        body:
          'Nissan/Jatco CVTs, Honda i-MMD, and Toyota e-CVT strategies differ radically from 6-10 speed planetary units. CVT whine with metal in fluid often means belt/pulley damage — flush-only service is off the table. Traditional autos may live with a quality fluid exchange if pan debris is minimal. We identify unit type, read manufacturer TSBs, and scope fluid before recommending rebuild, replace, or service.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
    ],
    processEyebrow: 'Diagnostic path',
    processTitle: 'Transmission evaluation steps',
    processIntro: 'Major transmission work is expensive — our process is built to prove what failed before you approve teardown.',
    processSteps: [
      { step: '01', title: 'Fluid & pan inspection', body: 'Color, smell, level, and magnet debris tell us how much friction material has circulated. Burnt varnish means heat damage — we document before any drain.' },
      { step: '02', title: 'Scan & adaptive data', body: 'Gear-slip counts, solenoid command vs. pressure, and stored TCM codes. Ford shift solenoid patterns differ from GM 6L80 strategies — platform knowledge matters.' },
      { step: '03', title: 'Road test & stall check', body: 'Shift quality hot and cold, TCC apply shudder, and manual-line pressure tests when fittings exist. Towing history on I-70 grades is noted — heat kills tow transmissions.' },
      { step: '04', title: 'Rebuild vs replace scope', body: 'High-mileage units with metal in pan may favor reman with warranty. Repair-in-car suits valve-body or external leaks. We quote both paths when viable.' },
      { step: '05', title: 'Written estimate & timeline', body: 'Labor at $120/hr plus parts — overhaul scope, fluid service only, or axle-seal repair — approved before the case comes apart.' },
    ],
    checklistEyebrow: 'Services offered',
    checklistTitle: 'Transmission work we perform',
    checklistIntro: 'From fluid maintenance to full rebuild coordination, RKC handles the diagnostics and mechanical work Englewood drivers need.',
    checklistGroups: [
      { category: 'Fluid & maintenance', items: ['Manufacturer-spec fluid exchange with new filter when serviceable', 'Pan-drop inspection with debris documentation', 'Cooler-line and external leak repair'] },
      { category: 'Diagnostics & repair', items: ['Valve-body and solenoid testing', 'Torque-converter shudder and bearing noise isolation', 'Manual clutch, slave cylinder, and shifter cable service'] },
      { category: 'Rebuild coordination', items: ['In-house teardown assessment and parts sourcing', 'Remanufactured unit comparison quotes when appropriate', 'Post-install adaptive reset and road-test verification'] },
      { category: 'Local context', items: ['Towing and mountain-grade heat stress evaluation', 'Fleet truck transmission service intervals', 'CVT-specific failure-pattern experience'] },
    ],
    laborTitle: 'Transmission labor transparency',
    laborDescription: 'Transmission diagnostics and repair bill at $120/hr with written scope before teardown. Fluid service, seal repair, and overhaul each get separate approval — no surprise case splits.',
    faqTitle: 'Transmission questions',
    faqIntro: 'Fluid flush vs pan drop, CVT life, rebuild timelines, and when to stop driving a slipping unit.',
    finalTitle: 'Transmission acting up?',
    finalDescription: 'Schedule diagnosis at RKC on Evans Ave. We read fluid, scan TCM data, and quote the right fix — service, repair, or rebuild — before major money moves.',
    finalPrimary: 'Call',
    finalSecondary: 'Schedule service',
    bgImage: 'classicLift',
  };
}

function oilChanges() {
  return {
    slug: 'oil-changes-englewood-co',
    component: 'OilChanges',
    faqConst: 'OIL_CHANGES_PAGE_FAQ',
    breadcrumb: 'Oil Changes',
    serviceType: 'Oil Change and Lubrication Service',
    photoKey: 'teamCollab',
    metadata: {
      title: 'Oil Change Service in Englewood, CO | RKC Automotive',
      description:
        'Fast, affordable oil changes in Englewood, CO — conventional, synthetic, and high-mileage oil with fluid top-off. Serving Denver south metro. Call (720) 749-3965.',
      ogAlt: 'Oil Changes at RKC Automotive Englewood CO',
      keywords: 'oil change Englewood CO, synthetic oil Denver, high mileage oil service, fluid top off',
    },
    hero: {
      eyebrow: 'Maintenance · Englewood, CO',
      title: 'Professional Oil Change Service in Englewood, CO',
      description:
        'Conventional, full synthetic, and high-mileage oil changes with OEM-spec filters, torque-to-spec drain plugs, and a multi-point inspection — not a fifteen-minute pit-lane rush job on Evans Ave.',
      primaryCta: 'Schedule Oil Change',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'The cheapest oil change is the one that does not bypass your filter.',
      body:
        'Quick-lube lanes optimize volume — cross-threaded drain plugs, wrong-viscosity bulk oil, and crushed filter gaskets show up in our bay weekly from Englewood drivers who saved ten dollars. Colorado cold starts at 5,280 feet demand correct viscosity and a filter that actually traps soot from direct-injection engines. We use the right spec, reset your oil-life monitor, and inspect leaks under the shield you never look at.',
    },
    symptomsEyebrow: 'Oil science',
    symptomsTitle: 'Why interval and spec matter in Colorado',
    symptomsIntro: 'Oil is not just mileage math — turbochargers, GDI soot, and altitude change how fast additive packages deplete.',
    symptomIcons: ['Droplet', 'Gauge', 'Thermometer'],
    symptoms: [
      {
        title: 'Synthetic vs conventional intervals',
        body:
          'Modern turbocharged engines — EcoBoost, Honda 1.5T, BMW B48 — specify synthetic 0W-20 or 5W-30 with 5,000–7,500 mile intervals despite dash reminders stretching farther. Conventional oil in a turbo application cokes on hot bearing surfaces. We match viscosity and API/ILSAC spec to your owner manual and driving pattern — short trips on Federal Blvd count as severe service.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
      {
        title: 'Filter bypass & drain plug integrity',
        body:
          'Cheap filters collapse under bypass valve pressure and send unfiltered oil to bearings. Over-torqued aluminum drain pans strip threads — a $400 pan replacement from a $29 change. We torque drain plugs to spec, lubricate gaskets, and use filter brands with documented burst strength. Undercarriage shields come off so we actually see the plug and filter, not just reach blindly.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
      {
        title: '30/60/90k companion services',
        body:
          'Oil changes are the touchpoint for coolant strength, brake fluid age, cabin filter debris, and timing-belt mileage on interference engines. A 60k service on a Honda includes more than oil — trans fluid, spark plugs, and valve adjustment windows matter. We align maintenance with factory severe schedules because Denver heat and winter salt qualify as severe for most commuters.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
    ],
    processEyebrow: 'Every visit',
    processTitle: 'What our oil service includes',
    processIntro: 'An RKC oil change is a documented maintenance event — not a conveyor belt.',
    processSteps: [
      { step: '01', title: 'Spec verification', body: 'VIN and sticker lookup confirm viscosity, capacity, and filter part number — turbo DI engines get specific synthetic approvals.' },
      { step: '02', title: 'Drain & inspect', body: 'Plug gasket replaced, threads inspected, and drain stream checked for metal glitter that would flag bearing wear.' },
      { step: '03', title: 'Filter & fill', body: 'Filter pre-filled when orientation allows, torque-to-spec install, and fill to level with dipstick verification — not just pump auto-stop.' },
      { step: '04', title: 'Multi-point inspection', body: 'Fluids, belts, hoses, tire wear, and visible leaks documented on your invoice — no pressure to fix what is healthy.' },
      { step: '05', title: 'Monitor reset & sticker', body: 'Oil-life monitor reset, service reminder sticker, and recommended return mileage based on your actual driving — not a generic 3,000-mile scare.' },
    ],
    checklistEyebrow: 'Fluids & filters',
    checklistTitle: 'Maintenance beyond the oil change',
    checklistIntro: 'Pair your oil service with the filters and fluids that protect the rest of the powertrain.',
    checklistGroups: [
      { category: 'Oil options', items: ['Conventional for older low-stress engines per manual', 'Full synthetic and synthetic-blend per OEM spec', 'High-mileage formulations with seal conditioners when appropriate'] },
      { category: 'Filters', items: ['OEM and premium aftermarket oil filters', 'Engine air and cabin filter replacement on request', 'Fuel filter on diesel and high-mileage applications'] },
      { category: 'Fluid top-offs', items: ['Coolant, brake, power-steering, and washer fluid level check', 'Transmission and differential level inspection where dipstick exists', 'DEF top-off on diesel when low'] },
      { category: 'Scheduled packages', items: ['30k/60k/90k milestone service bundles quoted upfront', 'Timing-belt interval reminders on interference engines', 'Fleet maintenance logging for commercial accounts'] },
    ],
    laborTitle: 'Oil change pricing transparency',
    laborDescription: 'Oil changes from $49 conventional and $79 synthetic plus parts — labor at $120/hr when additional services are approved. No hidden shop-supply fees on the menu price.',
    faqTitle: 'Oil change questions',
    faqIntro: 'Synthetic intervals, filter quality, and what Colorado severe service means for your engine.',
    finalTitle: 'Due for an oil change?',
    finalDescription: 'Walk in or schedule at RKC Automotive on Evans Ave. Correct spec, honest inspection, and $120/hr labor on anything beyond the basic service.',
    finalPrimary: 'Call',
    finalSecondary: 'Book online',
    bgImage: 'teamCollab',
  };
}

function suspensionSteering() {
  return {
    slug: 'suspension-steering-englewood-co',
    component: 'SuspensionSteering',
    faqConst: 'SUSPENSION_STEERING_PAGE_FAQ',
    breadcrumb: 'Suspension & Steering',
    serviceType: 'Suspension and Steering Repair',
    photoKey: 'techCloseup',
    metadata: {
      title: 'Suspension & Steering Repair | Englewood, CO',
      description:
        'Suspension and steering repair in Englewood, CO — shocks, struts, ball joints, and alignment from ASE-certified techs. Serving Denver south metro. Call (720) 749-3965.',
      ogAlt: 'Suspension & Steering at RKC Automotive Englewood CO',
      keywords: 'suspension repair Englewood CO, steering repair Denver, strut replacement, ball joint service',
    },
    hero: {
      eyebrow: 'Ride & handling · Englewood, CO',
      title: 'Suspension &amp; Steering Repair in Englewood, CO',
      description:
        'Clunks over bumps, wandering on I-25, or uneven tire wear? We inspect shocks, struts, ball joints, tie rods, and steering racks — then align and road-test with a written estimate first.',
      primaryCta: 'Suspension Inspection',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'Alignment cannot fix a worn ball joint.',
      body:
        'Shops that align first on a clunking front end are masking loose joints that will separate — Colorado potholes after winter freeze-thaw accelerate wear on Englewood streets. We load-test ball joints and tie rods, measure strut damping, and replace worn components before alignment pins are touched. You get stable handling and tires that last, not a straight steering wheel on failing hardware.',
    },
    symptomsEyebrow: 'Handling signs',
    symptomsTitle: 'Suspension and steering warning signs',
    symptomsIntro: 'Ride quality degrades slowly until a pothole on Broadway exposes how much control you have lost.',
    symptomIcons: ['Settings', 'Gauge', 'AlertTriangle'],
    symptoms: [
      {
        title: 'Clunk & wander over bumps',
        body:
          'A sharp clunk on uneven railroad crossings near Evans Ave often means lower ball joint or stabilizer-link slop. Highway wander with new tires points to tie-rod inner wear or a tired steering rack. We use pry-bar and dial-indicator tests with wheels loaded — not just shake the tire with the vehicle in the air where joints can hide play.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
      {
        title: 'Uneven tire wear patterns',
        body:
          'Feathering on one edge is toe; cupping is shock failure; center wear is over-inflation. But worn struts let the tire bounce instead of maintaining contact — looks like alignment fault, fixes with dampers. We read wear patterns before recommending a four-wheel align, saving you $120 on adjustments that cannot fix mechanical slop.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
      {
        title: 'Power steering & EPS faults',
        body:
          'Groaning pumps mean low fluid or aeration from a leaking rack seal. Electric power steering modules throw codes on GM and Ford platforms when torque sensors drift — feels like binding mid-corner. We differentiate hydraulic leaks from electronic calibration and quote rack, pump, or sensor repair based on pressure tests and scan data.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
    ],
    processEyebrow: 'Inspection flow',
    processTitle: 'Suspension diagnosis to alignment',
    processIntro: 'Mechanical integrity first, geometry second — that order keeps alignments lasting.',
    processSteps: [
      { step: '01', title: 'Road test & noise map', body: 'Reproduce clunks, drift, and brake-pedal vibration under braking — separates warped rotors from control-arm bushings.' },
      { step: '02', title: 'Lift inspection', body: 'Ball joints, tie rods, strut mounts, and sway-bar links tested under load. Boot tears on racks and CV joints noted before grease empties.' },
      { step: '03', title: 'Component replacement', body: 'Torque-to-spec fasteners, aligned strut towers, and new hardware kits where supplied. We do not reuse stretched eccentric bolts.' },
      { step: '04', title: 'Alignment & thrust angle', body: 'Four-wheel align on computerized rack with before/after printout. Thrust angle corrected so rear track guides front toe.' },
      { step: '05', title: 'Verification drive', body: 'Return drive on local streets confirms straight wheel, quiet bumps, and no ABS false-trigger from damaged tone rings during hub work.' },
    ],
    checklistEyebrow: 'Components',
    checklistTitle: 'Steering and suspension services',
    checklistIntro: 'From daily-driver struts to work-truck leaf hardware, we service the systems that keep you pointed straight.',
    checklistGroups: [
      { category: 'Wear items', items: ['Struts, shocks, and coil springs', 'Ball joints, tie rods, and sway-bar links', 'Control-arm bushings and wheel bearings'] },
      { category: 'Steering systems', items: ['Power-steering pump, rack, and hose replacement', 'Electric power steering sensor calibration', 'Steering column U-joint and intermediate shaft'] },
      { category: 'Alignment', items: ['Four-wheel alignment with printout', 'Camber bolt and eccentric shim correction', 'Post-lift alignment after any front-end part swap'] },
      { category: 'Colorado driving', items: ['Pothole-damage inspections after winter', 'Truck and SUV load-leveling shock options', 'Lifted-vehicle alignment considerations discussed honestly'] },
    ],
    laborTitle: 'Suspension labor at posted rate',
    laborDescription: 'Shocks, joints, and alignment labor bills at $120/hr with parts quoted separately. We list each component on the estimate — no bundled mystery front-end rebuilds.',
    faqTitle: 'Suspension & steering questions',
    faqIntro: 'Strut life, alignment frequency, ball joint safety, and when tire wear is a suspension problem.',
    finalTitle: 'Handling feel off?',
    finalDescription: 'Inspect suspension and steering at RKC on Evans Ave. We find the clunk, fix the joint, align the geometry — at transparent $120/hr labor.',
    finalPrimary: 'Call',
    finalSecondary: 'Book inspection',
    bgImage: 'techCloseup',
  };
}

function heatingAc() {
  return {
    slug: 'heating-ac-englewood-co',
    component: 'HeatingAc',
    faqConst: 'HEATING_AC_PAGE_FAQ',
    breadcrumb: 'Heating & AC',
    serviceType: 'Heating and Air Conditioning Repair',
    photoKey: 'interior',
    metadata: {
      title: 'Auto AC & Heating Repair | Englewood, CO',
      description:
        'Auto AC repair and heating service in Englewood, CO. AC recharge, compressor replacement, and climate diagnostics for Denver south metro. Call (720) 749-3965.',
      ogAlt: 'Heating & AC at RKC Automotive Englewood CO',
      keywords: 'AC repair Englewood CO, auto heating Denver, AC recharge Colorado, compressor replacement',
    },
    hero: {
      eyebrow: 'Climate control · Englewood, CO',
      title: 'Auto AC &amp; Heating Repair in Englewood, CO',
      description:
        'Blowing warm in July or cold in January? We diagnose refrigerant leaks, compressor clutch failure, blend doors, and heater-core restrictions — with EPA-compliant recovery and written estimates before major HVAC work.',
      primaryCta: 'AC & Heating Service',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'A recharge without a leak search is a summer rental — not a repair.',
      body:
        'R134a and R1234yf systems lose refrigerant only through leaks — o-rings at the compressor, porous condensers from road debris, or corroded evaporator cores. Englewood summer heat above 95°F exposes weak compressors that cooled adequately in spring. We vacuum-test, dye-trace, and repair the leak before charging to spec — so your vent temp stays in the 40s°F through Denver heat waves.',
    },
    symptomsEyebrow: 'HVAC faults',
    symptomsTitle: 'Climate control symptoms we fix',
    symptomsIntro: 'AC and heat complaints share blend doors, blower motors, and control modules — but each symptom has a distinct test path.',
    symptomIcons: ['Wind', 'Thermometer', 'Snowflake'],
    symptoms: [
      {
        title: 'Weak AC & warm vents',
        body:
          'Vent temp above 50°F at idle with the fan on high often means low refrigerant charge, weak compressor, or a stuck expansion valve. Dual-zone systems add blend-door actuators that default to heat on one side. We measure high- and low-side pressures against ambient, check condenser fan operation, and command actuators on scan tools before recommending compressor replacement.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
      {
        title: 'No heat & foggy windshield',
        body:
          'Coolant full but lukewarm heat at idle points to a clogged heater core or stuck thermostat — common when deferred coolant service lets scale build. Sweet fog on the windshield means heater-core seep — stop driving and schedule service before coolant contaminates the carpet and electronics under the center stack.',
        warning: 'Sweet fog inside = possible heater core leak. Schedule service promptly.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
      {
        title: 'Compressor noise & clutch',
        body:
          'Clicking every few seconds is normal clutch cycling; grinding on engagement means bearing failure. Overcharged systems from DIY cans slug the compressor with liquid refrigerant. We verify charge weight by scale, inspect clutch air gap, and listen for bearing roughness — compressor swaps are labor-heavy at $120/hr, so we prove failure before ordering reman units.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
    ],
    processEyebrow: 'HVAC workflow',
    processTitle: 'Climate diagnosis and repair',
    processIntro: 'EPA-compliant service with leak detection — not vent-to-atmosphere shortcuts.',
    processSteps: [
      { step: '01', title: 'Performance baseline', body: 'Vent temp, fan speeds, and dual-zone behavior recorded. Ambient and humidity noted — pressure specs are temperature-dependent.' },
      { step: '02', title: 'Refrigerant recovery & leak test', body: 'Recover existing charge, vacuum to 500 microns, and hold vacuum. Dye and electronic sniffer trace condenser and fitting leaks.' },
      { step: '03', title: 'Component isolation', body: 'Compressor, condenser fan, expansion device, and blend doors tested independently. Heater-core flow checked when heat is the complaint.' },
      { step: '04', title: 'Repair & evacuate', body: 'O-rings, condensers, compressors, and actuators installed to spec. System evacuated and charged by weight — not guesswork cans.' },
      { step: '05', title: 'Verify temps', body: 'Center vent temp verified at idle and 1,500 RPM. Heat output confirmed on cold morning test when season demands.' },
    ],
    checklistEyebrow: 'System coverage',
    checklistTitle: 'Heating and AC services',
    checklistIntro: 'Summer AC and winter heat share plumbing — we service both sides of the firewall.',
    checklistGroups: [
      { category: 'Air conditioning', items: ['R134a and R1234yf leak repair and recharge', 'Compressor, condenser, and evaporator replacement', 'Expansion valve and orifice-tube service'] },
      { category: 'Heating', items: ['Thermostat and water-pump-related heat issues', 'Heater-core flush or replacement', 'Blend-door and actuator calibration'] },
      { category: 'Cabin comfort', items: ['Blower-motor and resistor replacement', 'Cabin air filter install', 'Refrigerant odor treatment when mold forms on evaporator'] },
      { category: 'Denver climate', items: ['High-ambient AC performance tuning', 'Winter defrost and heater-core flow checks', 'Fleet van HVAC for commercial routes'] },
    ],
    laborTitle: 'HVAC labor transparency',
    laborDescription: 'AC and heating repair at $120/hr with refrigerant and parts itemized. Recharge-with-leak-repair quotes include recovery, vacuum, dye, and charge weight — no hidden environmental fees.',
    faqTitle: 'AC & heating questions',
    faqIntro: 'Recharge cost, compressor life, heater-core leaks, and R1234yf vs R134a systems.',
    finalTitle: 'AC blowing warm?',
    finalDescription: 'Schedule HVAC service at RKC on Evans Ave. Leak found, leak fixed, charged to spec — written estimate at $120/hr labor before compressor swaps.',
    finalPrimary: 'Call',
    finalSecondary: 'Book service',
    bgImage: 'interior',
  };
}

function electricalSystem() {
  return {
    slug: 'electrical-system-englewood-co',
    component: 'ElectricalSystem',
    faqConst: 'ELECTRICAL_SYSTEM_PAGE_FAQ',
    breadcrumb: 'Electrical System',
    serviceType: 'Automotive Electrical System Repair',
    photoKey: 'teamInspect',
    metadata: {
      title: 'Auto Electrical System Repair in Englewood, CO | RKC Automotive',
      description:
        'Expert auto electrical repair in Englewood, CO. Battery, alternator, starter, wiring, and electrical diagnostics. Call (720) 749-3965 for reliable electrical service.',
      ogAlt: 'Electrical System at RKC Automotive Englewood CO',
      keywords: 'auto electrical repair Englewood CO, alternator replacement Denver, starter repair, wiring diagnostics',
    },
    hero: {
      eyebrow: 'Electrical · Englewood, CO',
      title: 'Auto Electrical System Repair in Englewood, CO',
      description:
        'No-start, dim lights, or parasitic drain killing your battery overnight? We test starting and charging circuits, trace wiring faults, and repair alternators and starters — with documented voltage readings on every estimate.',
      primaryCta: 'Electrical Diagnosis',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'Replacing the battery without testing the alternator is guesswork.',
      body:
        'A new battery on a weak alternator dies in three days — and you blame the parts store. Modern Englewood vehicles run 30+ modules that draw milliamp parasitic current; a stuck relay or aftermarket accessory can flatten a group 24 overnight. We measure resting draw, alternator ripple, and starter amperage before recommending parts — so the fix matches the circuit that failed.',
    },
    symptomsEyebrow: 'Electrical faults',
    symptomsTitle: 'Common electrical failure patterns',
    symptomsIntro: 'Electrical problems look like engine problems until you read voltage — we start with the battery and work upstream.',
    symptomIcons: ['Zap', 'Battery', 'AlertTriangle'],
    symptoms: [
      {
        title: 'Slow crank & no-start',
        body:
          'Cranking below 9.6 volts at the starter often means weak battery or high-resistance cables — not always a bad starter. Heat-soaked starters on V8 trucks fail intermittently after the third stop of the day. We voltage-drop test positive and ground circuits under load before quoting a $400 starter on a $40 cable.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
      {
        title: 'Alternator & warning lights',
        body:
          'Battery light on at idle that goes out at 2,000 RPM can be a slipping serpentine belt or failing diode trio. Ripple above 500 mV AC at the battery means toasted rectifier plates. We scope charging voltage across RPM range and load — headlights and blower on — before swapping alternators.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
      {
        title: 'Parasitic drain & module wake',
        body:
          'Dead battery after 48 hours parked means a module not sleeping — aftermarket amps, dashcams hardwired wrong, or a stuck GEM on Ford trucks. We measure amp draw after door-trigger shutdown timers expire, then pull fuses to isolate the circuit. Wiring harness rub-through on unibody pinch welds is common on high-mileage Denver commuters.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
    ],
    processEyebrow: 'Test sequence',
    processTitle: 'Electrical diagnostic workflow',
    processIntro: 'Voltage, resistance, and current — measured, not assumed.',
    processSteps: [
      { step: '01', title: 'Battery health test', body: 'Conductance or load test with printed results. Terminals cleaned and torque-checked before any charging-system diagnosis.' },
      { step: '02', title: 'Charging system analysis', body: 'Alternator output, ripple, and belt tension verified under electrical load. PCM charging setpoints compared on vehicles with smart charge.' },
      { step: '03', title: 'Starter circuit drop test', body: 'Voltage drop on positive cable, ground strap, and starter trigger wire isolates high resistance vs. mechanical starter failure.' },
      { step: '04', title: 'Parasitic & wiring', body: 'Milliamp draw test and fuse isolation for overnight drains. Wiring repaired with heat-shrink, solder, and loom — not twist-and-tape.' },
      { step: '05', title: 'Repair verification', body: 'Re-test after part install. No-start tickets get a cold-start crank log before you pick up from our Englewood lot.' },
    ],
    checklistEyebrow: 'Repairs',
    checklistTitle: 'Electrical services we provide',
    checklistIntro: 'From battery replacement to harness repair — one shop for starting, charging, and lighting faults.',
    checklistGroups: [
      { category: 'Starting & charging', items: ['Battery test, install, and terminal service', 'Alternator and starter replacement', 'Voltage-drop testing on main cables'] },
      { category: 'Lighting & accessories', items: ['Headlight, taillight, and trailer wiring repair', 'Power-window and lock motor diagnosis', 'Aftermarket accessory integration done safely'] },
      { category: 'Diagnostics', items: ['Parasitic draw isolation', 'CAN-bus communication fault tracing', 'Module power and ground integrity checks'] },
      { category: 'Fleet & commercial', items: ['Work-truck dual-battery systems', 'Liftgate and upfitter electrical loads', 'Priority no-start service when available'] },
    ],
    laborTitle: 'Electrical labor transparency',
    laborDescription: 'Electrical diagnostics from $129 with repair labor at $120/hr. Test results stay on your invoice — resistance readings, draw measurements, and parts spec.',
    faqTitle: 'Electrical system questions',
    faqIntro: 'Battery vs alternator, parasitic drain causes, and when a no-start is a starter.',
    finalTitle: 'Electrical problem leaving you stranded?',
    finalDescription: 'Diagnose starting and charging at RKC on Evans Ave. Tested circuits, quoted repairs, $120/hr labor — before you buy parts that do not fix the fault.',
    finalPrimary: 'Call',
    finalSecondary: 'Schedule diagnosis',
    bgImage: 'teamInspect',
  };
}

function batteryTesting() {
  return {
    slug: 'battery-testing-englewood-co',
    component: 'BatteryTesting',
    faqConst: 'BATTERY_TESTING_PAGE_FAQ',
    breadcrumb: 'Battery Testing',
    serviceType: 'Battery Testing and Replacement',
    photoKey: 'teamCuevas',
    metadata: {
      title: 'Car Battery Testing & Replacement in Englewood, CO | RKC Automotive',
      description:
        'Free battery testing and professional battery replacement in Englewood, CO. Charging-system checks included — do not get stranded. Call (720) 749-3965 today.',
      ogAlt: 'Battery Testing at RKC Automotive Englewood CO',
      keywords: 'battery testing Englewood CO, car battery replacement Denver, free battery test, charging system check',
    },
    hero: {
      eyebrow: 'Starting power · Englewood, CO',
      title: 'Car Battery Testing &amp; Replacement in Englewood, CO',
      description:
        'Free battery health testing with charging-system verification — because a new battery on a weak alternator fails twice. Same-day replacement when stock allows at our Evans Ave shop.',
      primaryCta: 'Free Battery Test',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'Colorado cold starts punish marginal batteries.',
      body:
        'A battery that tests "borderline" at 70°F fails at 10°F on a January morning in Englewood — when you need it most. High under-hood temps in summer traffic cook plates and evaporate electrolyte on non-AGM designs. We test conductance, check alternator output, and inspect cables before selling you a group size — so winter no-starts and summer heat failures drop off your calendar.',
    },
    symptomsEyebrow: 'Battery health',
    symptomsTitle: 'When to test or replace your battery',
    symptomsIntro: 'Batteries fail on a curve — slow crank today, no-start tomorrow. These signs mean test now, not after a jump.',
    symptomIcons: ['Battery', 'Zap', 'Thermometer'],
    symptoms: [
      {
        title: 'Slow crank & dim headlights',
        body:
          'Voltage below 12.4V resting or crank sag under 9.6V means insufficient capacity or high internal resistance. Dim lights during crank while RPM rises confirms the alternator is trying — but the battery cannot deliver cold-cranking amps. Our conductance tester prints state-of-health percentage; we share the readout before recommending replacement.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
      {
        title: 'Corrosion & cable resistance',
        body:
          'White-green bloom on terminals adds resistance that mimics a dead battery. Side-post GM cables fail inside the lead terminal where you cannot see it. We clean, torque, and voltage-drop test cables — a $0 fix that prevents a $180 battery on the wrong diagnosis.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
      {
        title: 'Age & Colorado climate',
        body:
          'Most flooded batteries last 3–5 years in Denver metro heat cycles. Start-stop AGM applications on newer imports demand correct group and capacity — wrong amp-hour rating triggers premature failure and idle-stop faults. We match CCA and reserve capacity to your VIN and install date-stamped stock.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
    ],
    processEyebrow: 'Test procedure',
    processTitle: 'Free battery test — what it includes',
    processIntro: 'Testing takes ten minutes and includes the charging system — not just a voltmeter across the posts.',
    processSteps: [
      { step: '01', title: 'Visual & terminal service', body: 'Case bulge, leak, and terminal corrosion documented. Terminals cleaned for accurate readings.' },
      { step: '02', title: 'Conductance test', body: 'Printed state-of-health and CCA available vs rated. Results explained — not just pass/fail.' },
      { step: '03', title: 'Charging system check', body: 'Alternator voltage and ripple under load. Belt and ground strap inspected.' },
      { step: '04', title: 'Starter draw sample', body: 'High draw with good battery points to starter motor — we flag before you replace the wrong part.' },
      { step: '05', title: 'Install & register', body: 'New batteries torque-to-spec, BMS registered on vehicles that require scan-tool reset — so idle-stop works day one.' },
    ],
    checklistEyebrow: 'Services',
    checklistTitle: 'Battery and charging services',
    checklistIntro: 'Keep starting reliable through Colorado seasons with tested components — not hope.',
    checklistGroups: [
      { category: 'Testing', items: ['Free battery conductance test', 'Charging-system voltage and ripple check', 'Starter amperage sample on request'] },
      { category: 'Replacement', items: ['Flooded and AGM batteries matched to VIN', 'Terminal hardware and cable end repair', 'Battery management system reset when required'] },
      { category: 'Related repairs', items: ['Alternator and starter replacement if test flags failure', 'Parasitic draw test for overnight dead batteries', 'Ground strap and engine-to-chassis cable service'] },
      { category: 'Winter prep', items: ['Pre-winter battery health checks for Englewood fleets', 'Truck dual-battery and diesel high-CCA options', 'Same-day install when inventory allows'] },
    ],
    laborTitle: 'Battery service pricing',
    laborDescription: 'Testing is free. Replacement from $149 plus battery cost — labor at $120/hr when cables, alternators, or starters are part of the fix.',
    faqTitle: 'Battery questions',
    faqIntro: 'Battery life in Colorado, AGM vs flooded, alternator testing, and BMS reset on newer cars.',
    finalTitle: 'Battery worried you?',
    finalDescription: 'Stop by RKC on Evans Ave for a free test with charging-system check. Replace only when data says so — same-day install available.',
    finalPrimary: 'Call',
    finalSecondary: 'Get directions',
    bgImage: 'teamCuevas',
  };
}

function exhaustSystem() {
  return {
    slug: 'exhaust-system-englewood-co',
    component: 'ExhaustSystem',
    faqConst: 'EXHAUST_SYSTEM_PAGE_FAQ',
    breadcrumb: 'Exhaust System',
    serviceType: 'Exhaust System Repair',
    photoKey: 'undercarriage',
    metadata: {
      title: 'Exhaust System Repair in Englewood, CO | RKC',
      description:
        'Exhaust system repair in Englewood, CO — mufflers, catalytic converters, pipes, and emissions service for Denver south metro drivers. Call (720) 749-3965.',
      ogAlt: 'Exhaust System at RKC Automotive Englewood CO',
      keywords: 'exhaust repair Englewood CO, muffler replacement Denver, catalytic converter Colorado, emissions repair',
    },
    hero: {
      eyebrow: 'Exhaust & emissions · Englewood, CO',
      title: 'Exhaust System Repair in Englewood, CO',
      description:
        'Rattles, rotten-egg smell, or P0420 catalyst codes? We inspect manifolds, flex pipes, converters, and mufflers — weld, clamp, or replace with emissions-compliant parts and written estimates first.',
      primaryCta: 'Exhaust Inspection',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'A check-engine P0420 is not always a bad catalytic converter.',
      body:
        'Upstream misfires, leaking exhaust manifolds, and lazy O2 sensors set efficiency codes on converters that still flow fine. Colorado emissions stations do not care about the nuance — they read monitors and tailpipe numbers. We compare upstream/downstream O2 waveforms, inspect for leaks that pull false air, and fix root causes before quoting CARB-compliant converters that cost four figures.',
    },
    symptomsEyebrow: 'Exhaust faults',
    symptomsTitle: 'Exhaust and emissions symptoms',
    symptomsIntro: 'Exhaust problems range from annoying rattles to failed emissions tests — each needs inspection under the vehicle, not a catalog muffler quote.',
    symptomIcons: ['Volume2', 'Wind', 'AlertTriangle'],
    symptoms: [
      {
        title: 'Catalytic efficiency codes',
        body:
          'P0420/P0430 mean the downstream O2 sensor sees too little activity — worn catalyst, or a sensor/reporting issue. Exhaust leaks upstream of the converter let oxygen in and mimic failure. We graph O2 switching, check for manifold cracks, and verify fuel trim is not running rich before recommending converter replacement.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
      {
        title: 'Leaks, rattle & fumes',
        body:
          'Ticking on cold start that fades may be an exhaust manifold crack — common on cast-iron manifolds and certain V8s. Flex-pipe bellows tear on lowered vehicles and trucks with broken motor mounts. Carbon monoxide does not smell; rotten egg is catalyst sulfate — different dangers. We lift every vehicle, smoke-test critical joints, and weld or replace sections to seal fumes out of the cabin.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
      {
        title: 'Colorado emissions compliance',
        body:
          'Englewood and Denver metro emissions require ready monitors and passing tailpipe standards on applicable vehicles. Converter deletes fail inspection and risk fines. We install EPA/CARB-compliant components, complete drive cycles after repair, and document readiness so you are not back in line twice.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
    ],
    processEyebrow: 'Repair path',
    processTitle: 'Exhaust diagnosis to compliant repair',
    processIntro: 'Emissions-aware repair — fix the cause, seal the path, verify the monitors.',
    processSteps: [
      { step: '01', title: 'Lift & visual map', body: 'Manifold, flex, hangers, and converter shells inspected for rust, crush, and tamper evidence.' },
      { step: '02', title: 'Leak & O2 data', body: 'Smoke or pressure test on manifolds. Scan tool O2 comparison at steady cruise and idle.' },
      { step: '03', title: 'Root-cause first', body: 'Misfire, fuel trim, and exhaust leak repairs before converter quote when data supports it.' },
      { step: '04', title: 'Section repair or replace', body: 'Quality mufflers, direct-fit pipes, and compliant converters. Welds ground smooth, hangers isolated from vibration.' },
      { step: '05', title: 'Emissions verification', body: 'Monitor readiness guidance and road test for noise. Re-scan confirms code resolution when converter was the fault.' },
    ],
    checklistEyebrow: 'Components',
    checklistTitle: 'Exhaust services we perform',
    checklistIntro: 'From manifold gaskets to full cat-back, we keep your exhaust quiet, sealed, and emissions-legal.',
    checklistGroups: [
      { category: 'Repair', items: ['Manifold gasket and stud extraction', 'Flex-pipe and intermediate pipe replacement', 'Muffler and resonator delete-and-replace (compliant)'] },
      { category: 'Emissions', items: ['Catalytic converter replacement — CARB/EPA compliant', 'O2 sensor diagnosis and replacement', 'Post-repair monitor drive-cycle coaching'] },
      { category: 'Custom & HD', items: ['Truck exhaust hanger and stack support', 'Rust-belt section replacement with quality steel', 'Welding and fabrication for odd sections'] },
      { category: 'Inspection', items: ['Pre-purchase exhaust and emissions assessment', 'Colorado emissions-failure triage', 'Written estimate before cutting pipe'] },
    ],
    laborTitle: 'Exhaust repair labor',
    laborDescription: 'Exhaust labor at $120/hr with compliant parts itemized. Converter jobs include O2 verification and readiness coaching — not just bolt-on and clear codes.',
    faqTitle: 'Exhaust system questions',
    faqIntro: 'Catalytic converter cost, emissions tests, manifold cracks, and aftermarket exhaust legality in Colorado.',
    finalTitle: 'Exhaust noise or emissions code?',
    finalDescription: 'Inspect exhaust at RKC on Evans Ave. Leak sealed, catalyst verified, monitors ready — $120/hr labor on every repair.',
    finalPrimary: 'Call',
    finalSecondary: 'Schedule inspection',
    bgImage: 'undercarriage',
  };
}

function preventativeMaintenance() {
  return {
    slug: 'preventative-maintenance-englewood-co',
    component: 'PreventativeMaintenance',
    faqConst: 'PREVENTATIVE_MAINTENANCE_PAGE_FAQ',
    breadcrumb: 'Preventative Maintenance',
    serviceType: 'Preventative Maintenance',
    photoKey: 'brandedBay',
    metadata: {
      title: 'Preventative Maintenance | Englewood, CO',
      description:
        'Preventative maintenance in Englewood, CO. Scheduled service keeps your vehicle reliable and prevents costly repairs across the Denver south metro. Call (720) 749-3965.',
      ogAlt: 'Preventative Maintenance at RKC Automotive Englewood CO',
      keywords: 'preventative maintenance Englewood CO, scheduled auto service Denver, 30k 60k 90k service, fleet maintenance',
    },
    hero: {
      eyebrow: 'Scheduled care · Englewood, CO',
      title: 'Preventative Maintenance in Englewood, CO',
      description:
        'Factory-interval service done honestly — oil, fluids, filters, belts, and milestone inspections at 30k/60k/90k — with a written plan that fixes what is due, not everything on a generic menu.',
      primaryCta: 'Plan My Service',
      secondaryCtaLabel: 'Call',
    },
    reality: {
      quote: 'Deferred maintenance is a payment plan — with interest.',
      body:
        'Skipping a $150 coolant flush does not save money when a $1,800 head gasket follows. Englewood commuters stacking miles on I-25 and mountain weekends qualify for severe schedules on most owner manuals — yet dash reminders stretch intervals for marketing. We read your manual, log your mileage, and quote only the services that protect the engine, trans, and brakes you rely on daily.',
    },
    symptomsEyebrow: 'Milestone science',
    symptomsTitle: 'What preventative maintenance actually prevents',
    symptomsIntro: 'Maintenance is not generic — timing belts, CVT fluid, and spark intervals are engine-specific failure prevention.',
    symptomIcons: ['ShieldCheck', 'CalendarCheck', 'Gauge'],
    symptoms: [
      {
        title: '30k / 60k / 90k milestones',
        body:
          'Honda 60k includes trans fluid and spark plugs; Toyota has coolant first-drain intervals; German cars need brake-fluid time changes regardless of mileage. We build milestone packages from your VIN spec — not a one-size coupon sheet. Each item is tied to a failure mode: belt service prevents valve crash, fluid service prevents CVT slip.',
        accent: 'text-sky-400',
        accentBg: 'bg-sky-500/10',
        accentBorder: 'border-sky-500/25',
      },
      {
        title: 'Colorado severe-duty factors',
        body:
          'Short trips, idling in winter, towing through the foothills, and salted roads push you into severe tables — shorter oil, brake fluid, and trans intervals. Altitude and heat stress cooling systems. We label your service file severe or normal based on how you actually drive, not how the dash average looks.',
        accent: 'text-amber-400',
        accentBg: 'bg-amber-500/10',
        accentBorder: 'border-amber-500/25',
      },
      {
        title: 'Inspection before upsell',
        body:
          'Multi-point inspection finds cracked serpentine belts, seeping water pumps, and torn CV boots before they strand you. We photograph wear when it matters, recommend fixes with priority levels — safety first, convenience second, cosmetic never pressured. No 27-point printout designed to sell cabin filters you changed last month.',
        accent: 'text-red-400',
        accentBg: 'bg-red-500/10',
        accentBorder: 'border-red-500/25',
      },
    ],
    processEyebrow: 'Maintenance plan',
    processTitle: 'How we build your service schedule',
    processIntro: 'VIN-specific intervals, honest inspection, and logged history — so the next visit picks up where we left off.',
    processSteps: [
      { step: '01', title: 'History & mileage review', body: 'Prior service records, current mileage, and driving pattern — commute, tow, or mixed — set the interval table.' },
      { step: '02', title: 'Due-now vs due-soon', body: 'Items past interval flagged safety-critical first. Due-soon items quoted for planning — no batch scare packaging.' },
      { step: '03', title: 'Fluid & filter service', body: 'Oil, coolant, brake, trans, and differential per spec. Filters matched to engine and cabin air quality needs.' },
      { step: '04', title: 'Belt, brake & suspension check', body: 'Belt deflection and crack scan, brake thickness, ball-joint play — caught at maintenance before they become repairs.' },
      { step: '05', title: 'Log & remind', body: 'Sticker and digital notes for next due mileage/date. Fleet accounts get consolidated invoicing.' },
    ],
    checklistEyebrow: 'Service menu',
    checklistTitle: 'Preventative services we schedule',
    checklistIntro: 'Everything your owner manual expects — performed at RKC with $120/hr labor transparency.',
    checklistGroups: [
      { category: 'Fluids', items: ['Engine oil and filter per spec', 'Coolant exchange with OEM chemistry', 'Brake, power-steering, and washer fluid checks'] },
      { category: 'Filters & belts', items: ['Engine, cabin, and fuel filters', 'Serpentine and timing belt inspection', 'Timing belt/water-pump packages on interference engines'] },
      { category: 'Drivetrain', items: ['Transmission fluid service — drain/fill or exchange per manual', 'Differential and transfer-case fluids on AWD/4WD', 'Spark plugs and coil inspection at mileage'] },
      { category: 'Fleet & family', items: ['Multi-vehicle maintenance scheduling', 'Priority booking for commercial accounts', 'Pre-trip inspection before mountain travel season'] },
    ],
    laborTitle: 'Maintenance labor transparency',
    laborDescription: 'Scheduled maintenance labor at $120/hr with parts listed line-by-line. Milestone packages quoted as a whole — you approve the bundle before we start.',
    faqTitle: 'Preventative maintenance questions',
    faqIntro: 'Severe vs normal schedules, 30k/60k content, fleet plans, and why dealer menus oversell.',
    finalTitle: 'Build your maintenance plan',
    finalDescription: 'Visit RKC on Evans Ave with your mileage and manual. We quote what is due — not everything on a poster — at $120/hr labor plus parts.',
    finalPrimary: 'Call',
    finalSecondary: 'Schedule service',
    bgImage: 'brandedBay',
  };
}

const ICON_IMPORTS = {
  Disc: 'Disc',
  Gauge: 'Gauge',
  AlertTriangle: 'AlertTriangle',
  Zap: 'Zap',
  Activity: 'Activity',
  AlertCircle: 'AlertCircle',
  Cog: 'Cog',
  Droplet: 'Droplet',
  Thermometer: 'Thermometer',
  Settings: 'Settings',
  Wind: 'Wind',
  Snowflake: 'Snowflake',
  Battery: 'Battery',
  Volume2: 'Volume2',
  ShieldCheck: 'ShieldCheck',
  CalendarCheck: 'CalendarCheck',
};

function generateContent(svc) {
  const icons = svc.symptomIcons.map((name) => ICON_IMPORTS[name] || 'Gauge');
  const iconImportList = [...new Set([...icons, 'BUSINESS'])];
  const lucideImports = [...new Set(svc.symptomIcons.map((n) => ICON_IMPORTS[n] || 'Gauge'))].join(', ');

  const symptomsWithIcons = svc.symptoms.map((sym, i) => ({
    ...sym,
    icon: `icons[${i}]`,
  }));

  return `'use client';

import {
  ${lucideImports},
} from 'lucide-react';
import { BUSINESS, ${svc.faqConst}, PHOTOS } from '@/lib/constants';
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

const icons = [${icons.map((i) => i).join(', ')}];

const SYMPTOMS = [
${svc.symptoms
  .map(
    (sym, i) => `  {
    icon: icons[${i}],
    title: ${JSON.stringify(sym.title)},
    body: ${JSON.stringify(sym.body)},
${sym.warning ? `    warning: ${JSON.stringify(sym.warning)},\n` : ''}    accent: ${JSON.stringify(sym.accent)},
    accentBg: ${JSON.stringify(sym.accentBg)},
    accentBorder: ${JSON.stringify(sym.accentBorder)},
  }`,
  )
  .join(',\n')}
];

const PROCESS_STEPS = [
${svc.processSteps
  .map(
    (s) => `  { step: ${JSON.stringify(s.step)}, title: ${JSON.stringify(s.title)}, body: ${JSON.stringify(s.body)} }`,
  )
  .join(',\n')}
];

const CHECKLIST_GROUPS = [
${svc.checklistGroups
  .map(
    (g) => `  { category: ${JSON.stringify(g.category)}, items: [${g.items.map((it) => JSON.stringify(it)).join(', ')}] }`,
  )
  .join(',\n')}
];

export default function ${svc.component}Content() {
  return (
    <div>
      <ServiceCinematicHero
        image={PHOTOS.${svc.photoKey}}
        imageAlt=${JSON.stringify(svc.metadata.ogAlt)}
        eyebrow={${JSON.stringify(svc.hero.eyebrow)}}
        title={${JSON.stringify(svc.hero.title)}}
        description={${JSON.stringify(svc.hero.description)}}
        primaryCta={{ href: '/contact', label: ${JSON.stringify(svc.hero.primaryCta)} }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: \`Call \${BUSINESS.phone}\` }}
      />

      <ServiceRealityBand
        quote={${JSON.stringify(svc.reality.quote)}}
        body={${JSON.stringify(svc.reality.body)}}
      />

      <ServiceSymptomGrid
        eyebrow={${JSON.stringify(svc.symptomsEyebrow)}}
        title={${JSON.stringify(svc.symptomsTitle)}}
        intro={${JSON.stringify(svc.symptomsIntro)}}
        cards={SYMPTOMS}
      />

      <ServiceProcessTimeline
        eyebrow={${JSON.stringify(svc.processEyebrow)}}
        title={${JSON.stringify(svc.processTitle)}}
        intro={${JSON.stringify(svc.processIntro)}}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.${svc.bgImage}}
        bgImageAlt=${JSON.stringify(svc.metadata.ogAlt)}
      />

      <ServiceChecklistGrid
        eyebrow={${JSON.stringify(svc.checklistEyebrow)}}
        title={${JSON.stringify(svc.checklistTitle)}}
        intro={${JSON.stringify(svc.checklistIntro)}}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={${JSON.stringify(svc.laborTitle)}}
        description={${JSON.stringify(svc.laborDescription)}}
      />

      <ServiceFAQSection
        title={${JSON.stringify(svc.faqTitle)}}
        intro={${JSON.stringify(svc.faqIntro)}}
        items={${svc.faqConst}}
      />

      <ServiceFinalCTA
        title={${JSON.stringify(svc.finalTitle)}}
        description={${JSON.stringify(svc.finalDescription)}}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: ${JSON.stringify(svc.finalSecondary)} }}
      />
    </div>
  );
}
`;
}

function generatePage(svc) {
  const path = `/services/${svc.slug}`;
  return `import JsonLd from '@/app/components/JsonLd';
import ${svc.component}Content from '@/app/components/ui/services/${svc.component}Content';
import { ${svc.faqConst}, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  ${JSON.stringify(svc.metadata.title)},
  ${JSON.stringify(svc.metadata.description)},
  ${JSON.stringify(svc.slug)},
  PHOTOS.${svc.photoKey},
  ${JSON.stringify(svc.metadata.ogAlt)},
  ${JSON.stringify(svc.metadata.keywords)},
);

const SERVICE_PATH = ${JSON.stringify(path)};

export default function ${svc.component}Page() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            ${JSON.stringify(svc.serviceType)},
            ${JSON.stringify(svc.metadata.description)},
            SERVICE_PATH,
          ),
          createFAQPageSchema(${svc.faqConst}),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: ${JSON.stringify(svc.breadcrumb)}, path: SERVICE_PATH },
          ]),
        ]}
      />
      <${svc.component}Content />
    </>
  );
}
`;
}

// Generate files
for (const svc of ALL_SERVICES) {
  const contentPath = path.join(contentDir, `${svc.component}Content.tsx`);
  const pagePath = path.join(root, 'app/services', svc.slug, 'page.tsx');
  fs.writeFileSync(contentPath, generateContent(svc));
  fs.writeFileSync(pagePath, generatePage(svc));
  console.log(`Generated ${svc.component}`);
}

console.log(`Done — ${ALL_SERVICES.length} premium service pages.`);
