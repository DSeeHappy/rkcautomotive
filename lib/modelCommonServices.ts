import type { Powertrain, VehicleType } from '@/lib/vehicleModels';

export type ModelCommonService = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type ModelServiceContext = {
  brandSlug: string;
  brandName: string;
  model: string;
  vehicleType: VehicleType;
  powertrain: Powertrain;
};

type ServiceDef = {
  id: string;
  name: string;
  href: string;
  describe: (ctx: ModelServiceContext) => string;
};

const LOCAL =
  'RKC Automotive in Englewood serves south Denver, Littleton, Aurora, and Highlands Ranch drivers.';

/**
 * Truthful rephrasings of LOCAL — same verified fact (shop in Englewood; serves
 * south Denver, Littleton, Aurora, Highlands Ranch), varied wording so the exact
 * sentence isn't stamped verbatim on every service card across ~1000 pages
 * (SEO audit: cross-page boilerplate). Generated via Bifrost Spark vllm/smart
 * (labels local-line-v1..v6, routing smart-spark verified in TELEMETRY_LEDGER)
 * and human-reviewed. Do not add cities or claims not in the original.
 */
const LOCAL_VARIANTS = [
  LOCAL,
  'Drivers from south Denver, Littleton, Aurora, and Highlands Ranch come to RKC Automotive in Englewood.',
  'RKC Automotive in Englewood, Colorado, serves drivers from the south Denver metro, Littleton, Aurora, and Highlands Ranch.',
  'RKC Automotive in Englewood, Colorado welcomes drivers from south Denver, Littleton, Aurora, and Highlands Ranch.',
  'South Denver, Littleton, Aurora, and Highlands Ranch drivers are served by RKC Automotive in Englewood.',
] as const;

/** Small deterministic hash so the same page always renders the same wording. */
function seedIndex(seed: string, modulo: number): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % modulo;
}

/** Replace a trailing LOCAL sentence with a seeded truthful variant. */
export function withLocalityVariant(text: string, seed: string): string {
  if (!text.endsWith(LOCAL)) return text;
  return text.slice(0, text.length - LOCAL.length) + LOCAL_VARIANTS[seedIndex(seed, LOCAL_VARIANTS.length)];
}

function truckName(ctx: ModelServiceContext): string {
  if (ctx.vehicleType === 'truck' || ctx.model === 'Ridgeline' || ctx.model === 'Gladiator') {
    return 'truck';
  }
  if (ctx.vehicleType === 'suv') return 'SUV';
  if (ctx.vehicleType === 'van') return 'van';
  return 'vehicle';
}

const SERVICE_CATALOG: Record<string, ServiceDef> = {
  'four-wheel-drive': {
    id: 'four-wheel-drive',
    name: '4WD & Transfer Case Service',
    href: '/services/transmission-services-englewood-co',
    describe: (ctx) => {
      const platform =
        ctx.brandSlug === 'ford'
          ? `Ford ${ctx.model} 4WD systems use electronic shift-on-the-fly transfer cases and front hub locks that work harder at Denver elevation.`
          : ctx.brandSlug === 'jeep'
            ? `Jeep ${ctx.model} 4WD hardware — transfer case, front axle disconnect, and Dana differentials — takes trail and winter abuse across the Front Range.`
            : ctx.brandSlug === 'ram'
              ? `Ram ${ctx.model} 4WD and BorgWarner transfer cases see heavy towing loads on I-70 and mountain passes.`
              : `${ctx.brandName} ${ctx.model} 4WD and transfer case components need scheduled fluid service before Colorado winter.`;
      return `${platform} RKC drains and refills transfer case fluid, inspects front axle actuators and U-joints, and tests shift modes for grinding or delayed engagement. ${LOCAL}`;
    },
  },
  'ecoboost-diagnostics': {
    id: 'ecoboost-diagnostics',
    name: 'Turbo & EcoBoost Engine Diagnostics',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) => {
      const engine =
        ctx.brandSlug === 'ford'
          ? 'EcoBoost turbocharged V6 and V8 engines'
          : ctx.brandSlug === 'chevrolet'
            ? 'GM turbo and V8 engines with AFM/DFM'
            : ctx.brandSlug === 'ram'
              ? 'Hemi and Cummins turbo diesel powertrains'
              : 'turbocharged and direct-injection engines';
      return `The ${ctx.brandName} ${ctx.model} relies on ${engine} that run leaner and hotter at altitude. RKC diagnoses boost leaks, wastegate faults, misfires, and fuel trim issues with factory-level scan data — not guesswork. We inspect intercoolers, charge pipes, and turbo oil supply before small leaks become catastrophic failures on Englewood commutes and mountain towing runs. ${LOCAL}`;
    },
  },
  'heavy-brake': {
    id: 'heavy-brake',
    name: 'Heavy-Duty Brake Service',
    href: '/services/brake-repair-englewood-co',
    describe: (ctx) =>
      `${ctx.model} ${truckName(ctx)}s hauling campers, boats, and job-site loads through the Rockies need more than standard pad swaps. RKC measures rotor thickness and runout, inspects caliper slides, and flushes brake fluid contaminated by Colorado heat cycles. We recommend pad compounds suited to your ${ctx.brandName} ${ctx.model}'s weight class so you get confident stops on I-25 descents and loaded trailering. ${LOCAL}`,
  },
  'towing-prep': {
    id: 'towing-prep',
    name: 'Towing & Hauling Prep Inspection',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) => {
      if (ctx.powertrain === 'ev') {
        return `RKC helps ${ctx.brandName} ${ctx.model} owners prepare for towing by ensuring the hitch and wiring are secure, the rear suspension can handle the weight without sagging, and the tires meet the necessary load ratings. We also check your brakes so they are ready for the extra stress of hauling. Keep in mind that towing significantly increases the thermal load on your battery, which will reduce your driving range — plan charging stops accordingly on I-70 grades. ${LOCAL}`;
      }
      return `Before towing season, RKC inspects your ${ctx.brandName} ${ctx.model} hitch, wiring, transmission cooler lines, and rear suspension for sag and bushing wear. We verify brake bias, check differential fluid condition, and scan for powertrain codes that show up only under load — common when south Denver owners head to Summit County. A pre-trip inspection at our Englewood shop prevents breakdowns at elevation. ${LOCAL}`;
    },
  },
  'suspension-lift': {
    id: 'suspension-lift',
    name: 'Suspension, Lift & Alignment',
    href: '/services/suspension-steering-englewood-co',
    describe: (ctx) => {
      const note =
        ctx.brandSlug === 'jeep'
          ? 'lift kits, control arm geometry, and track bar angles'
          : 'ball joints, tie rods, and alignment specs';
      return `Colorado potholes, fire roads, and lifted setups accelerate wear on ${ctx.brandName} ${ctx.model} ${note}. RKC inspects shocks, bushings, and steering linkage, then performs alignment with factory or modified ride-height targets. Proper alignment saves tires and keeps your ${ctx.model} tracking straight on winter rutted roads around Englewood and the foothills. ${LOCAL}`;
    },
  },
  'fleet-maintenance': {
    id: 'fleet-maintenance',
    name: 'Fleet Maintenance Programs',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) =>
      `Contractors and fleet managers running ${ctx.brandName} ${ctx.model} vehicles across the Denver metro rely on predictable downtime. RKC builds interval-based maintenance plans — oil service, brake inspections, fluid exchanges, and multi-point checks — with written estimates at $120/hr labor. Keep work trucks, delivery vans, and municipal ${ctx.model}s on the road without dealership scheduling delays from our Englewood location. ${LOCAL}`,
  },
  'awd-service': {
    id: 'awd-service',
    name: 'AWD & Drivetrain Service',
    href: '/services/transmission-services-englewood-co',
    describe: (ctx) => {
      const system =
        ctx.brandSlug === 'audi'
          ? 'quattro Haldex coupling and rear differential'
          : ctx.brandSlug === 'subaru'
            ? 'Symmetrical AWD center differential and viscous coupling'
            : ctx.brandSlug === 'bmw' || ctx.brandSlug === 'mercedes'
              ? 'xDrive or 4MATIC transfer components'
              : 'AWD clutch packs, differentials, and transfer fluids';
      return `${ctx.brandName} ${ctx.model} ${system} needs fluid exchanges before ski season and after summer towing. RKC services rear differentials, inspects CV boots, and tests torque transfer under load. Neglected AWD fluid causes shudder, binding, and premature coupling wear — especially on stop-and-go I-25 commutes from Englewood. ${LOCAL}`;
    },
  },
  'brake-service': {
    id: 'brake-service',
    name: 'Brake Repair & Pad Replacement',
    href: '/services/brake-repair-englewood-co',
    describe: (ctx) =>
      `RKC services ${ctx.brandName} ${ctx.model} brakes with rotor measurement, pad compound matched to vehicle weight, and DOT-spec fluid flushes. Colorado's elevation changes and temperature swings accelerate brake fade and moisture contamination. Whether your ${ctx.model} is a daily Englewood commuter or a family ski-trip hauler, we restore quiet, confident stopping with quality parts and transparent pricing. ${LOCAL}`,
  },
  'suspension-steering': {
    id: 'suspension-steering',
    name: 'Suspension & Steering Repair',
    href: '/services/suspension-steering-englewood-co',
    describe: (ctx) =>
      `Worn struts, control arm bushings, and tie rods show up as wandering steering and uneven tire wear on ${ctx.brandName} ${ctx.model} models driven on rough Front Range roads. RKC diagnoses suspension clunks, replaces worn components, and aligns to factory spec. Proper steering geometry protects tires and keeps your ${ctx.model} stable through winter ruts and canyon corners. ${LOCAL}`,
  },
  'check-engine': {
    id: 'check-engine',
    name: 'Check Engine Light Diagnostics',
    href: '/services/check-engine-light-englewood-co',
    describe: (ctx) =>
      `A check engine light on your ${ctx.brandName} ${ctx.model} can mean anything from a loose gas cap to a failing catalytic converter. RKC reads manufacturer-specific codes, performs bidirectional tests, and traces wiring — we do not just clear codes. Altitude and cold starts trigger sensor faults that are common on Denver metro ${ctx.model}s; we find root cause before recommending parts. ${LOCAL}`,
  },
  'pre-winter': {
    id: 'pre-winter',
    name: 'Pre-Winter Colorado Inspection',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) =>
      `Before the first freeze, RKC inspects your ${ctx.brandName} ${ctx.model} battery, coolant strength, wiper blades, AWD function, and tire condition. Colorado winters punish weak batteries and neglected fluids — especially on vehicles parked outdoors in Englewood and Littleton. Our pre-winter inspection catches issues that strand drivers on I-25 and mountain corridors. ${LOCAL}`,
  },
  'oil-maintenance': {
    id: 'oil-maintenance',
    name: 'Oil Changes & Factory Maintenance',
    href: '/services/oil-changes-englewood-co',
    describe: (ctx) =>
      `RKC follows ${ctx.brandName} factory intervals for ${ctx.model} oil and filter service, using synthetic blends suited to turbo, GDI, and hybrid engines. We reset maintenance reminders, inspect undercarriage shields, and torque drain plugs to spec — avoiding stripped pans and collapsed filters. Consistent oil service protects your ${ctx.model} warranty and longevity on Colorado's hot summers and cold mornings. ${LOCAL}`,
  },
  'cvt-service': {
    id: 'cvt-service',
    name: 'CVT Transmission Fluid Service',
    href: '/services/transmission-services-englewood-co',
    describe: (ctx) => {
      const brand =
        ctx.brandSlug === 'nissan'
          ? 'Nissan Xtronic CVT'
          : ctx.brandSlug === 'subaru'
            ? 'Subaru Lineartronic CVT'
            : ctx.brandSlug === 'honda'
              ? 'Honda CVT'
              : 'CVT transmission';
      return `${ctx.brandName} ${ctx.model} ${brand} units are sensitive to fluid degradation and overheating on I-25 traffic. RKC performs manufacturer-spec fluid exchanges, inspects coolers, and scans for ratio-control codes before shudder becomes failure. Proactive CVT service on Englewood-area ${ctx.model}s avoids the cost of valve body and chain replacement. ${LOCAL}`;
    },
  },
  'transmission-service': {
    id: 'transmission-service',
    name: 'Transmission Service & Diagnostics',
    href: '/services/transmission-services-englewood-co',
    describe: (ctx) =>
      `Rough shifts, delayed engagement, and towing strain test ${ctx.brandName} ${ctx.model} transmissions harder at altitude. RKC inspects fluid condition, scans TCM codes, and services coolers and lines before summer hauling season. From 8-speed automatics to dual-clutch units, we diagnose with data — not parts cannon — at our Englewood shop. ${LOCAL}`,
  },
  'ac-heating': {
    id: 'ac-heating',
    name: 'A/C Recharge & Climate Repair',
    href: '/services/heating-ac-englewood-co',
    describe: (ctx) =>
      `Weak A/C and slow cabin heat are common ${ctx.brandName} ${ctx.model} complaints after Colorado summers and sub-zero Englewood mornings. RKC tests refrigerant charge, inspects compressors and blend doors, and verifies heater core flow. We restore comfortable cabin temps for daily commutes and mountain trips without dealership markups. ${LOCAL}`,
  },
  'engine-diagnostics': {
    id: 'engine-diagnostics',
    name: 'Engine Diagnostics & Drivability',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) =>
      `Rough idle, hesitation, and fuel trim faults on the ${ctx.brandName} ${ctx.model} need systematic diagnosis — not random part swaps. RKC uses live data, smoke testing, and scope analysis to isolate intake leaks, sensor drift, and injector issues aggravated by Denver elevation. We explain findings in plain language before any repair on your ${ctx.model}. ${LOCAL}`,
  },
  'pre-purchase': {
    id: 'pre-purchase',
    name: 'Pre-Purchase Inspection',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) =>
      `Buying a used ${ctx.brandName} ${ctx.model} in the Denver metro? RKC performs compression checks, fluid analysis, scan-tool health reports, and undercarriage inspection before you commit. We flag accident damage, deferred maintenance, and common ${ctx.model} platform issues so Englewood buyers negotiate with facts, not hope. ${LOCAL}`,
  },
  'hybrid-system': {
    id: 'hybrid-system',
    name: 'Hybrid Battery & System Checks',
    href: '/services/electrical-system-englewood-co',
    describe: (ctx) =>
      `${ctx.brandName} ${ctx.model} hybrid systems depend on battery cooling, inverter health, and regenerative brake integration. RKC scans high-voltage data (with proper safety protocols), inspects cabin and battery fans, and tests 12V auxiliary support. Colorado temperature swings stress hybrid batteries — proactive checks at our Englewood shop protect range and reliability. ${LOCAL}`,
  },
  'regenerative-brake': {
    id: 'regenerative-brake',
    name: 'Regenerative Brake Service',
    href: '/services/brake-repair-englewood-co',
    describe: (ctx) =>
      `Hybrid and EV ${ctx.model} braking blends friction pads with regenerative capture. RKC inspects pad wear, caliper slide function, and brake fluid moisture — regen systems still need friction brakes for hard stops. Proper service keeps your ${ctx.brandName} ${ctx.model} stopping safely on I-25 and mountain grades. ${LOCAL}`,
  },
  'inverter-coolant': {
    id: 'inverter-coolant',
    name: 'Inverter & Hybrid Coolant Service',
    href: '/services/heating-ac-englewood-co',
    describe: (ctx) =>
      `${ctx.brandName} ${ctx.model} inverter and power electronics cooling loops are separate from engine coolant and easy to overlook. RKC verifies coolant level, pump operation, and hose condition before summer heat and winter cold stress hybrid components. Neglected inverter coolant causes power limiting and warning lights on Denver metro commutes. ${LOCAL}`,
  },
  'ev-battery': {
    id: 'ev-battery',
    name: 'EV Battery Health & Range Diagnostics',
    href: '/services/battery-testing-englewood-co',
    describe: (ctx) =>
      `RKC scans ${ctx.brandName} ${ctx.model} battery state-of-health, cell balance, and thermal management logs to benchmark range against factory targets. Cold Englewood winters and fast-charging habits affect EV batteries differently than mild climates. We inspect charging ports, HV cables, and 12V support systems so your ${ctx.model} stays road-ready. ${LOCAL}`,
  },
  'ev-charging': {
    id: 'ev-charging',
    name: 'EV Charging System Inspection',
    href: '/services/electrical-system-englewood-co',
    describe: (ctx) =>
      `Intermittent AC charging, DC fast-charge faults, and onboard charger errors frustrate ${ctx.brandName} ${ctx.model} owners. RKC tests charge ports, ground circuits, and module communication before recommending expensive HV component replacement. Reliable charging matters for daily Englewood commutes and weekend mountain trips. ${LOCAL}`,
  },
  'thermal-management': {
    id: 'thermal-management',
    name: 'Battery Thermal Management Service',
    href: '/services/heating-ac-englewood-co',
    describe: (ctx) =>
      `${ctx.brandName} ${ctx.model} battery packs rely on active cooling and glycol loops that degrade over time. RKC inspects pumps, valves, and coolant chemistry — especially before Colorado summer heat. Thermal faults trigger range loss and charge-speed limits long before a dash warning appears. ${LOCAL}`,
  },
  'performance-brake': {
    id: 'performance-brake',
    name: 'Performance Brake Service',
    href: '/services/brake-repair-englewood-co',
    describe: (ctx) =>
      `${ctx.brandName} ${ctx.model} performance brakes fade faster with repeated canyon runs and track days. RKC measures pad transfer, inspects drilled rotor cracking, and flushes high-temp brake fluid. We match pad compounds to your driving — daily Englewood commute or weekend Motorsports Park sessions — without unnecessary upsells. ${LOCAL}`,
  },
  'turbo-intake': {
    id: 'turbo-intake',
    name: 'Turbo, Intake & Boost System Service',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) =>
      `Boost leaks, carboned intake valves, and heat-soaked intercoolers rob power from ${ctx.brandName} ${ctx.model} turbo engines at altitude. RKC pressure-tests charge pipes, inspects wastegates and diverter valves, and recommends carbon cleaning when direct injection causes rough idle. Keep your ${ctx.model} pulling strong on I-70 climbs. ${LOCAL}`,
  },
  'sport-alignment': {
    id: 'sport-alignment',
    name: 'Sport Suspension Alignment',
    href: '/services/suspension-steering-englewood-co',
    describe: (ctx) =>
      `Lowered, stiffer, and AWD performance setups on the ${ctx.brandName} ${ctx.model} need alignment beyond generic specs. RKC sets camber, toe, and thrust angle for even tire wear and predictable turn-in on Colorado canyon roads. We document before/after measurements for track prep and daily driving alike. ${LOCAL}`,
  },
  'european-diagnostics': {
    id: 'european-diagnostics',
    name: 'European Import Diagnostics',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) => {
      if (ctx.powertrain === 'ev') {
        return `RKC uses factory-level scan tools to diagnose the ${ctx.brandName} ${ctx.model} drive unit, charging system, and comfort and body modules — not generic OBD readers. This approach ensures accurate troubleshooting for European electric vehicles without guesswork. European complexity meets honest Englewood pricing: we explain what your ${ctx.model} needs and why. ${LOCAL}`;
      }
      return `${ctx.brandName} ${ctx.model} modules, sensors, and service resets require factory-level scan tools — not generic OBD readers. RKC diagnoses check engine, drivetrain, and comfort-system faults with bidirectional tests and wiring diagrams. European complexity meets honest Englewood pricing: we explain what your ${ctx.model} needs and why. ${LOCAL}`;
    },
  },
  'cooling-system': {
    id: 'cooling-system',
    name: 'Cooling System & Water Pump Service',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) =>
      `Plastic expansion tanks, electric water pumps, and thermostat housings fail faster in Colorado's dry heat and freeze cycles. RKC pressure-tests ${ctx.brandName} ${ctx.model} cooling systems, inspects hoses and pumps, and replaces coolant to spec. Overheating on I-70 grades starts with small leaks — we catch them early in Englewood. ${LOCAL}`,
  },
  'timing-chain': {
    id: 'timing-chain',
    name: 'Timing Chain Inspection',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) =>
      `Rattle on cold start and correlation codes often mean ${ctx.brandName} ${ctx.model} timing chain stretch or tensioner wear. RKC uses scope and scan data to assess chain health before valve timing drifts into misfire territory. Early diagnosis on TFSI, N55, and similar platforms saves Englewood owners from catastrophic engine damage. ${LOCAL}`,
  },
  'gdi-carbon': {
    id: 'gdi-carbon',
    name: 'Direct Injection Carbon Cleaning',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) =>
      `Gasoline direct injection on the ${ctx.brandName} ${ctx.model} builds intake valve carbon from short Englewood trips and idling in I-25 traffic. RKC performs walnut blasting or chemical decarbonization to restore idle quality and throttle response. Preventive cleaning extends turbo life and avoids misfire codes common on GDI and TFSI engines. ${LOCAL}`,
  },
  'air-suspension': {
    id: 'air-suspension',
    name: 'Air Suspension & Airmatic Repair',
    href: '/services/suspension-steering-englewood-co',
    describe: (ctx) =>
      `Sagging corners, compressor run-on, and ride-height faults plague ${ctx.brandName} ${ctx.model} air suspension in cold weather. RKC diagnoses struts, compressors, and valve blocks with factory-level tools. Proper Airmatic repair restores level ride height for daily Englewood driving and loaded highway travel. ${LOCAL}`,
  },
  'ab-service': {
    id: 'ab-service',
    name: 'A-Service & B-Service Maintenance',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) =>
      `Mercedes ${ctx.model} A-Service and B-Service intervals bundle oil, filters, inspections, and fluid checks into predictable visits. RKC follows factory menus with quality fluids and parts — without dealership lounge wait times. Keep your ${ctx.model} service history clean for warranty and resale across the Denver metro. ${LOCAL}`,
  },
  'electrical-system': {
    id: 'electrical-system',
    name: 'Electrical & Module Diagnostics',
    href: '/services/electrical-system-englewood-co',
    describe: (ctx) => {
      if (ctx.powertrain === 'ev') {
        return `RKC diagnoses complex electrical issues in your ${ctx.brandName} ${ctx.model}, including 12V auxiliary battery failures, DC-DC converter faults, and parasitic draw problems. We also resolve module communication errors so your vehicle's systems interact correctly. Modern ${ctx.model} electrical systems need patience and data — not fuse swapping. ${LOCAL}`;
      }
      return `Parasitic draws, alternator ripple, and module communication faults frustrate ${ctx.brandName} ${ctx.model} owners with intermittent warnings. RKC traces wiring, tests charging systems, and programs modules when replacements are required. Modern ${ctx.model} electrical systems need patience and data — not fuse swapping. ${LOCAL}`;
    },
  },
  'quattro-awd': {
    id: 'quattro-awd',
    name: 'quattro AWD Service',
    href: '/services/transmission-services-englewood-co',
    describe: (ctx) =>
      `Audi ${ctx.model} quattro systems use Torsen or Haldex couplings that need fluid service on schedule — especially before Colorado winters. RKC exchanges Haldex fluid, inspects rear differentials, and tests torque bias under load. Neglected quattro service causes shudder and binding on tight Englewood parking-lot turns. ${LOCAL}`,
  },
  'boxer-engine': {
    id: 'boxer-engine',
    name: 'Subaru Boxer Engine Service',
    href: '/services/oil-changes-englewood-co',
    describe: (ctx) =>
      `Horizontally opposed Subaru ${ctx.model} engines need precise oil control and leak monitoring — especially around valve covers and cam carriers. RKC uses the correct viscosity for FB and FA platforms and inspects for seepage that leads to misfire and catalytic damage. Boxer expertise matters for Colorado Subaru owners who expect 200K+ miles. ${LOCAL}`,
  },
  'head-gasket': {
    id: 'head-gasket',
    name: 'Head Gasket & Cooling Inspection',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) =>
      `Subaru ${ctx.model} EJ and FB engines can develop external head gasket seepage and coolant consumption that shows up as overheating on mountain grades. RKC performs combustion leak tests, inspects spark plug color, and monitors coolant loss trends. Catching gasket issues early saves Englewood Outback and Forester owners from engine teardown. ${LOCAL}`,
  },
  'timing-belt': {
    id: 'timing-belt',
    name: 'Timing Belt & Water Pump Service',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) =>
      `Interference engines in the ${ctx.brandName} ${ctx.model} need timing belt and water pump replacement on schedule — skipping intervals risks valve damage. RKC replaces tensioners, seals, and coolant together so your ${ctx.model} stays reliable through Colorado temperature swings. Book belt service before 100K mountain road trips. ${LOCAL}`,
  },
  'off-road-inspection': {
    id: 'off-road-inspection',
    name: 'Off-Road Wear Assessment',
    href: '/services/suspension-steering-englewood-co',
    describe: (ctx) =>
      `Trail seasons punish ${ctx.brandName} ${ctx.model} skid plates, control arms, and steering stabilizers. RKC inspects Dana axle tubes, U-joints, and 4WD linkage after off-road use around Red Rocks and the high country. Post-trail assessment from Englewood catches damage before daily highway vibration becomes expensive steering repair. ${LOCAL}`,
  },
  'diesel-gas-truck': {
    id: 'diesel-gas-truck',
    name: 'Diesel & Gas Truck Service',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) => {
      if (ctx.brandSlug === 'mercedes' && ctx.model === 'Sprinter') {
        return `Mercedes Sprinter diesel and gas variants power delivery fleets and camper builds across the Denver metro. RKC services DEF systems, fuel filters, glow plugs, and turbochargers with commercial-diesel diagnostics. ProMaster and Sprinter owners in Englewood get transparent estimates and $120/hr posted labor — without dealership downtime. ${LOCAL}`;
      }
      const power =
        ctx.model === '2500' || ctx.model === '3500'
          ? 'Cummins diesel and high-output gas V8'
          : 'Hemi and EcoDiesel powertrains';
      return `Ram ${ctx.model} ${power} engines work harder towing through the Rockies. RKC services DEF systems, fuel filters, turbochargers, and EGR components with diesel-specific diagnostics. Gas and diesel Rams from Englewood job sites get the same transparent estimates and $120/hr posted labor. ${LOCAL}`;
    },
  },
  'hemi-diagnostics': {
    id: 'hemi-diagnostics',
    name: 'Hemi & Heavy-Duty Engine Diagnostics',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) =>
      `Ram ${ctx.model} Hemi misfires, lifter tick, and cam wear show up under load and cold start across the Denver metro. RKC correlates cylinder deactivation faults, oil pressure, and valvetrain noise before recommending repair scope. We understand AFM/MDS patterns common on Rams used for towing and fleet work out of Englewood. ${LOCAL}`,
  },
  'factory-maintenance': {
    id: 'factory-maintenance',
    name: 'Factory Scheduled Maintenance',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) =>
      `RKC follows ${ctx.brandName} factory menus for ${ctx.model} — oil, filters, fluids, and multi-point inspections — using fluids that meet warranty requirements. We reset service indicators and document visits for lease and resale. Consistent maintenance at our Englewood shop protects Hyundai/Kia reliability through Colorado seasons. ${LOCAL}`,
  },
  'hybrid-ev-service': {
    id: 'hybrid-ev-service',
    name: 'Hybrid & EV System Service',
    href: '/services/electrical-system-englewood-co',
    describe: (ctx) =>
      `${ctx.brandName} ${ctx.model} high-voltage systems need specialized safety procedures and scan tools. RKC inspects battery cooling, charging behavior, and 12V support without cutting corners on HV protocol. Ioniq, EV6, and hybrid variants across south Denver get dealer-capable care with neighborhood shop communication. ${LOCAL}`,
  },
  'tsi-tdi-service': {
    id: 'tsi-tdi-service',
    name: 'TSI & TDI Engine Service',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) =>
      `Volkswagen ${ctx.model} TSI turbo engines need carbon management, timing chain monitoring, and PCV system attention in Colorado's climate. RKC services TDI fuel systems where equipped and inspects water pumps and thermostats prone to seepage. German engineering lasts when Englewood owners stay ahead of known TSI/TDI maintenance patterns. ${LOCAL}`,
  },
  'dsg-transmission': {
    id: 'dsg-transmission',
    name: 'DSG Transmission Service',
    href: '/services/transmission-services-englewood-co',
    describe: (ctx) =>
      `VW ${ctx.model} DSG dual-clutch transmissions require fluid and filter service on interval — deferred service causes shudder and mechatronic faults. RKC uses VW-spec fluid and adapts service to driving style and I-25 stop-and-go wear. Proactive DSG care keeps your ${ctx.model} shifting crisply through Denver metro traffic. ${LOCAL}`,
  },
  'awd-4motion': {
    id: 'awd-4motion',
    name: '4MOTION AWD Service',
    href: '/services/transmission-services-englewood-co',
    describe: (ctx) =>
      `VW ${ctx.model} 4MOTION Haldex coupling and rear differential fluids break down with heat and mileage. RKC exchanges fluids, inspects couplings, and tests traction before winter. Proper 4MOTION service prevents binding and shudder on cold Englewood mornings. ${LOCAL}`,
  },
  'afm-diagnostics': {
    id: 'afm-diagnostics',
    name: 'AFM/DFM Engine Diagnostics',
    href: '/services/camshaft-lifter-repair-englewood-co',
    describe: (ctx) =>
      `${ctx.brandName} ${ctx.model} Active Fuel Management and Dynamic Fuel Management disable cylinders under light load — stuck solenoids and collapsed lifters trigger misfires and cam wear. RKC diagnoses AFM-related tick and misfire before recommending lifter or cam repair. Common on GM V8 trucks and SUVs serving Englewood and mountain towing routes. ${LOCAL}`,
  },
  'truck-maintenance': {
    id: 'truck-maintenance',
    name: 'Truck Maintenance & Repair',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) =>
      `${ctx.brandName} ${ctx.model} trucks need interval fluid service, driveline inspection, and brake system attention beyond sedan schedules. RKC handles GM truck maintenance with GM-spec fluids and honest recommendations. Keep your ${ctx.model} ready for job sites, ranch work, and I-70 towing from our Englewood bays. ${LOCAL}`,
  },
  'mercedes-diagnostics': {
    id: 'mercedes-diagnostics',
    name: 'Mercedes-Benz Diagnostics',
    href: '/services/engine-diagnostics-englewood-co',
    describe: (ctx) =>
      `Mercedes ${ctx.model} STAR-level faults span powertrain, chassis, and body modules — generic scanners miss most codes. RKC reads manufacturer data, performs guided tests, and clears adaptations only when appropriate. European complexity with south Denver transparency: you approve every ${ctx.model} repair before we order parts. ${LOCAL}`,
  },
  'scheduled-maintenance': {
    id: 'scheduled-maintenance',
    name: 'Scheduled Maintenance',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) => {
      if (ctx.powertrain === 'ev') {
        return `RKC handles the essential scheduled maintenance for your ${ctx.brandName} ${ctx.model} — tire rotation, brake fluid moisture testing, cabin filter replacement, and checks on your 12V battery and battery coolant level. Your ${ctx.model} skips oil changes, but these routine inspections are vital to keep an electric vehicle running safely and efficiently through Colorado seasons. ${LOCAL}`;
      }
      return `RKC keeps ${ctx.brandName} ${ctx.model} on factory service intervals — oil, filters, fluids, and inspections — with documented visits for warranty compliance. We catch worn brakes, leaking gaskets, and aging batteries during routine Englewood appointments before they strand you on a mountain run. ${LOCAL}`;
    },
  },
  'cargo-hvac': {
    id: 'cargo-hvac',
    name: 'Cargo & Rear HVAC Service',
    href: '/services/heating-ac-englewood-co',
    describe: (ctx) =>
      `${ctx.brandName} ${ctx.model} rear climate zones and cargo-area HVAC work harder with passengers and equipment loads. RKC diagnoses blower motors, rear evaporators, and duct blockages. Fleet and family vans across Englewood stay comfortable year-round with proper rear HVAC service. ${LOCAL}`,
  },
  'commercial-inspection': {
    id: 'commercial-inspection',
    name: 'Commercial Vehicle Inspection',
    href: '/services/preventative-maintenance-englewood-co',
    describe: (ctx) =>
      `ProMaster and commercial ${ctx.model} vans need brake, tire, lighting, and steering inspections for DOT readiness and fleet insurance. RKC documents findings with photos and measurements. South Denver businesses reduce downtime with proactive commercial inspections at our Englewood location. ${LOCAL}`,
  },
  'sliding-door': {
    id: 'sliding-door',
    name: 'Sliding Door & Liftgate Repair',
    href: '/services/electrical-system-englewood-co',
    describe: (ctx) =>
      `Worn rollers, misaligned tracks, and failed power latches frustrate ${ctx.brandName} ${ctx.model} van owners. RKC adjusts cables, replaces rollers, and diagnoses module faults so sliding doors seal against Colorado wind and cold. Reliable access matters for family haulers and delivery fleets alike. ${LOCAL}`,
  },
};

const TYPE_SERVICE_IDS: Record<VehicleType, string[]> = {
  truck: [
    'four-wheel-drive',
    'ecoboost-diagnostics',
    'heavy-brake',
    'towing-prep',
    'suspension-lift',
    'fleet-maintenance',
  ],
  suv: [
    'awd-service',
    'brake-service',
    'suspension-steering',
    'check-engine',
    'pre-winter',
    'oil-maintenance',
    'transmission-service',
  ],
  sedan: [
    'oil-maintenance',
    'cvt-service',
    'brake-service',
    'ac-heating',
    'check-engine',
    'engine-diagnostics',
    'pre-purchase',
  ],
  hybrid: [
    'hybrid-system',
    'regenerative-brake',
    'inverter-coolant',
    'oil-maintenance',
    'check-engine',
    'pre-winter',
    'engine-diagnostics',
  ],
  ev: [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'electrical-system',
    'scheduled-maintenance',
    'brake-service',
    'suspension-steering',
    'ac-heating',
  ],
  performance: [
    'performance-brake',
    'turbo-intake',
    'sport-alignment',
    'engine-diagnostics',
    'oil-maintenance',
    'check-engine',
  ],
  van: [
    'fleet-maintenance',
    'sliding-door',
    'heavy-brake',
    'transmission-service',
    'commercial-inspection',
    'cargo-hvac',
  ],
  luxury: [
    'european-diagnostics',
    'air-suspension',
    'ab-service',
    'brake-service',
    'electrical-system',
    'cooling-system',
    'oil-maintenance',
  ],
};

const BRAND_SERVICE_IDS: Record<string, string[]> = {
  toyota: [
    'oil-maintenance',
    'brake-service',
    'check-engine',
    'timing-belt',
    'hybrid-system',
    'awd-service',
    'suspension-steering',
  ],
  honda: [
    'cvt-service',
    'brake-service',
    'ac-heating',
    'engine-diagnostics',
    'suspension-steering',
    'awd-service',
    'check-engine',
  ],
  ford: [
    'four-wheel-drive',
    'ecoboost-diagnostics',
    'heavy-brake',
    'towing-prep',
    'suspension-lift',
    'fleet-maintenance',
    'oil-maintenance',
  ],
  chevrolet: [
    'truck-maintenance',
    'afm-diagnostics',
    'brake-service',
    'electrical-system',
    'cooling-system',
    'towing-prep',
    'transmission-service',
  ],
  bmw: [
    'european-diagnostics',
    'oil-maintenance',
    'brake-service',
    'cooling-system',
    'suspension-steering',
    'electrical-system',
    'timing-chain',
  ],
  mercedes: [
    'mercedes-diagnostics',
    'ab-service',
    'brake-service',
    'air-suspension',
    'electrical-system',
    'awd-service',
    'cooling-system',
  ],
  audi: [
    'quattro-awd',
    'timing-chain',
    'brake-service',
    'oil-maintenance',
    'electrical-system',
    'gdi-carbon',
    'cooling-system',
  ],
  nissan: [
    'cvt-service',
    'brake-service',
    'engine-diagnostics',
    'suspension-steering',
    'ac-heating',
    'awd-service',
    'check-engine',
  ],
  subaru: [
    'boxer-engine',
    'head-gasket',
    'awd-service',
    'brake-service',
    'timing-belt',
    'cvt-service',
    'suspension-steering',
  ],
  jeep: [
    'four-wheel-drive',
    'suspension-lift',
    'brake-service',
    'engine-diagnostics',
    'off-road-inspection',
    'cooling-system',
    'electrical-system',
  ],
  ram: [
    'diesel-gas-truck',
    'hemi-diagnostics',
    'brake-service',
    'transmission-service',
    'fleet-maintenance',
    'four-wheel-drive',
    'towing-prep',
  ],
  hyundai: [
    'factory-maintenance',
    'gdi-carbon',
    'brake-service',
    'hybrid-ev-service',
    'engine-diagnostics',
    'awd-service',
    'transmission-service',
  ],
  kia: [
    'scheduled-maintenance',
    'brake-service',
    'engine-diagnostics',
    'hybrid-ev-service',
    'ac-heating',
    'awd-service',
    'suspension-steering',
  ],
  volkswagen: [
    'european-diagnostics',
    'tsi-tdi-service',
    'dsg-transmission',
    'brake-service',
    'electrical-system',
    'awd-4motion',
    'cooling-system',
  ],
};

const BRAND_TYPE_SERVICE_IDS: Record<string, Partial<Record<VehicleType, string[]>>> = {
  ford: {
    truck: [
      'four-wheel-drive',
      'ecoboost-diagnostics',
      'heavy-brake',
      'towing-prep',
      'suspension-lift',
      'fleet-maintenance',
      'oil-maintenance',
    ],
    suv: [
      'awd-service',
      'ecoboost-diagnostics',
      'brake-service',
      'suspension-steering',
      'check-engine',
      'pre-winter',
      'oil-maintenance',
    ],
  },
  gmc: {
    // GMC trucks run GM V8/AFM powertrains — never Ford EcoBoost templates.
    truck: [
      'truck-maintenance',
      'afm-diagnostics',
      'heavy-brake',
      'towing-prep',
      'four-wheel-drive',
      'transmission-service',
      'fleet-maintenance',
    ],
  },
  chevrolet: {
    truck: [
      'truck-maintenance',
      'afm-diagnostics',
      'heavy-brake',
      'towing-prep',
      'four-wheel-drive',
      'transmission-service',
      'cooling-system',
    ],
    suv: [
      'awd-service',
      'afm-diagnostics',
      'brake-service',
      'cooling-system',
      'transmission-service',
      'check-engine',
      'pre-winter',
    ],
    sedan: [
      'oil-maintenance',
      'afm-diagnostics',
      'brake-service',
      'engine-diagnostics',
      'ac-heating',
      'check-engine',
      'pre-purchase',
    ],
  },
  toyota: {
    truck: [
      'four-wheel-drive',
      'heavy-brake',
      'towing-prep',
      'suspension-lift',
      'oil-maintenance',
      'brake-service',
      'fleet-maintenance',
    ],
    suv: [
      'awd-service',
      'brake-service',
      'suspension-steering',
      'oil-maintenance',
      'check-engine',
      'pre-winter',
      'timing-belt',
    ],
    sedan: [
      'oil-maintenance',
      'brake-service',
      'check-engine',
      'timing-belt',
      'cvt-service',
      'ac-heating',
      'pre-purchase',
    ],
    hybrid: [
      'hybrid-system',
      'regenerative-brake',
      'inverter-coolant',
      'oil-maintenance',
      'check-engine',
      'pre-winter',
      'brake-service',
    ],
  },
  honda: {
    truck: [
      'four-wheel-drive',
      'cvt-service',
      'heavy-brake',
      'towing-prep',
      'suspension-steering',
      'engine-diagnostics',
      'oil-maintenance',
    ],
    suv: [
      'awd-service',
      'cvt-service',
      'brake-service',
      'suspension-steering',
      'ac-heating',
      'check-engine',
      'engine-diagnostics',
    ],
    sedan: [
      'cvt-service',
      'brake-service',
      'ac-heating',
      'engine-diagnostics',
      'oil-maintenance',
      'check-engine',
      'pre-purchase',
    ],
    van: [
      'cvt-service',
      'sliding-door',
      'brake-service',
      'ac-heating',
      'cargo-hvac',
      'engine-diagnostics',
      'scheduled-maintenance',
    ],
  },
  ram: {
    truck: [
      'diesel-gas-truck',
      'hemi-diagnostics',
      'heavy-brake',
      'towing-prep',
      'four-wheel-drive',
      'transmission-service',
      'fleet-maintenance',
    ],
  },
  jeep: {
    truck: [
      'four-wheel-drive',
      'suspension-lift',
      'heavy-brake',
      'off-road-inspection',
      'engine-diagnostics',
      'cooling-system',
      'towing-prep',
    ],
    suv: [
      'four-wheel-drive',
      'suspension-lift',
      'brake-service',
      'engine-diagnostics',
      'off-road-inspection',
      'cooling-system',
      'electrical-system',
    ],
  },
  nissan: {
    truck: [
      'four-wheel-drive',
      'cvt-service',
      'heavy-brake',
      'towing-prep',
      'engine-diagnostics',
      'suspension-steering',
      'oil-maintenance',
    ],
  },
  hyundai: {
    suv: [
      'awd-service',
      'factory-maintenance',
      'gdi-carbon',
      'brake-service',
      'engine-diagnostics',
      'ac-heating',
      'transmission-service',
    ],
    sedan: [
      'factory-maintenance',
      'gdi-carbon',
      'brake-service',
      'engine-diagnostics',
      'cvt-service',
      'ac-heating',
      'check-engine',
    ],
  },
  kia: {
    suv: [
      'awd-service',
      'scheduled-maintenance',
      'brake-service',
      'engine-diagnostics',
      'ac-heating',
      'suspension-steering',
      'check-engine',
    ],
    sedan: [
      'scheduled-maintenance',
      'brake-service',
      'engine-diagnostics',
      'cvt-service',
      'ac-heating',
      'check-engine',
      'pre-purchase',
    ],
  },
  bmw: {
    suv: [
      'awd-service',
      'european-diagnostics',
      'oil-maintenance',
      'brake-service',
      'cooling-system',
      'suspension-steering',
      'electrical-system',
    ],
    sedan: [
      'european-diagnostics',
      'oil-maintenance',
      'brake-service',
      'cooling-system',
      'suspension-steering',
      'timing-chain',
      'gdi-carbon',
    ],
    luxury: [
      'european-diagnostics',
      'oil-maintenance',
      'brake-service',
      'cooling-system',
      'air-suspension',
      'electrical-system',
      'timing-chain',
    ],
  },
  mercedes: {
    suv: [
      'awd-service',
      'mercedes-diagnostics',
      'ab-service',
      'brake-service',
      'air-suspension',
      'cooling-system',
      'electrical-system',
    ],
    luxury: [
      'mercedes-diagnostics',
      'ab-service',
      'brake-service',
      'air-suspension',
      'electrical-system',
      'cooling-system',
      'oil-maintenance',
    ],
    van: [
      'fleet-maintenance',
      'diesel-gas-truck',
      'commercial-inspection',
      'brake-service',
      'electrical-system',
      'cooling-system',
      'cargo-hvac',
    ],
  },
  audi: {
    suv: [
      'quattro-awd',
      'brake-service',
      'oil-maintenance',
      'gdi-carbon',
      'cooling-system',
      'electrical-system',
      'pre-winter',
    ],
    sedan: [
      'quattro-awd',
      'timing-chain',
      'brake-service',
      'oil-maintenance',
      'gdi-carbon',
      'electrical-system',
      'engine-diagnostics',
    ],
  },
  volkswagen: {
    suv: [
      'awd-4motion',
      'tsi-tdi-service',
      'dsg-transmission',
      'brake-service',
      'european-diagnostics',
      'cooling-system',
      'pre-winter',
    ],
    sedan: [
      'tsi-tdi-service',
      'dsg-transmission',
      'brake-service',
      'european-diagnostics',
      'gdi-carbon',
      'electrical-system',
      'oil-maintenance',
    ],
  },
  subaru: {
    sedan: [
      'boxer-engine',
      'cvt-service',
      'brake-service',
      'awd-service',
      'head-gasket',
      'suspension-steering',
      'oil-maintenance',
    ],
  },
};

/** Model-specific service list overrides (sparse — most models use brand + type). */
const MODEL_SERVICE_IDS: Record<string, string[]> = {
  'toyota-prius': [
    'hybrid-system',
    'regenerative-brake',
    'inverter-coolant',
    'oil-maintenance',
    'check-engine',
    'pre-winter',
    'brake-service',
  ],
  'bmw-m3': [
    'performance-brake',
    'turbo-intake',
    'sport-alignment',
    'european-diagnostics',
    'oil-maintenance',
    'cooling-system',
    'check-engine',
  ],
  'bmw-i4': [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'european-diagnostics',
    'brake-service',
    'suspension-steering',
    'ac-heating',
    'electrical-system',
    'scheduled-maintenance',
  ],
  'ford-mustang': [
    'performance-brake',
    'turbo-intake',
    'sport-alignment',
    'engine-diagnostics',
    'oil-maintenance',
    'check-engine',
  ],
  'audi-s4': [
    'performance-brake',
    'turbo-intake',
    'quattro-awd',
    'sport-alignment',
    'gdi-carbon',
    'oil-maintenance',
  ],
  'audi-e-tron': [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'brake-service',
    'european-diagnostics',
    'suspension-steering',
    'ac-heating',
    'electrical-system',
    'scheduled-maintenance',
  ],
  'subaru-wrx': [
    'performance-brake',
    'turbo-intake',
    'sport-alignment',
    'boxer-engine',
    'awd-service',
    'head-gasket',
  ],
  'ram-trx': [
    'performance-brake',
    'hemi-diagnostics',
    'four-wheel-drive',
    'suspension-lift',
    'heavy-brake',
    'towing-prep',
  ],
  'ram-2500': [
    'diesel-gas-truck',
    'heavy-brake',
    'towing-prep',
    'four-wheel-drive',
    'transmission-service',
    'fleet-maintenance',
    'cooling-system',
  ],
  'ram-3500': [
    'diesel-gas-truck',
    'heavy-brake',
    'towing-prep',
    'four-wheel-drive',
    'transmission-service',
    'fleet-maintenance',
    'cooling-system',
  ],
  'hyundai-ioniq-5': [
    'ev-battery',
    'ev-charging',
    'hybrid-ev-service',
    'thermal-management',
    'brake-service',
    'suspension-steering',
    'ac-heating',
    'electrical-system',
    'scheduled-maintenance',
  ],
  'kia-ev6': [
    'ev-battery',
    'ev-charging',
    'hybrid-ev-service',
    'thermal-management',
    'brake-service',
    'suspension-steering',
    'ac-heating',
    'electrical-system',
    'scheduled-maintenance',
  ],
  'volkswagen-id-4': [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'european-diagnostics',
    'brake-service',
    'suspension-steering',
    'ac-heating',
    'electrical-system',
    'scheduled-maintenance',
  ],
  'mercedes-sprinter': [
    'fleet-maintenance',
    'diesel-gas-truck',
    'commercial-inspection',
    'brake-service',
    'electrical-system',
    'cooling-system',
  ],
  'ram-promaster': [
    'fleet-maintenance',
    'commercial-inspection',
    'sliding-door',
    'heavy-brake',
    'transmission-service',
    'cargo-hvac',
  ],
  'ram-promaster-city': [
    'fleet-maintenance',
    'commercial-inspection',
    'sliding-door',
    'brake-service',
    'engine-diagnostics',
    'scheduled-maintenance',
  ],
  'acura-zdx': [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'brake-service',
    'suspension-steering',
    'ac-heating',
    'electrical-system',
    'scheduled-maintenance',
  ],
  'tesla-model-3': [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'brake-service',
    'suspension-steering',
    'ac-heating',
    'electrical-system',
    'scheduled-maintenance',
  ],
  'tesla-model-y': [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'brake-service',
    'suspension-steering',
    'ac-heating',
    'electrical-system',
    'scheduled-maintenance',
  ],
  'tesla-model-s': [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'brake-service',
    'suspension-steering',
    'ac-heating',
    'electrical-system',
    'scheduled-maintenance',
  ],
  'tesla-model-x': [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'brake-service',
    'suspension-steering',
    'ac-heating',
    'electrical-system',
    'scheduled-maintenance',
  ],
  'tesla-cybertruck': [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'brake-service',
    'suspension-steering',
    'electrical-system',
    'towing-prep',
    'scheduled-maintenance',
  ],
  'honda-odyssey': [
    'cvt-service',
    'sliding-door',
    'brake-service',
    'ac-heating',
    'cargo-hvac',
    'engine-diagnostics',
    'scheduled-maintenance',
  ],
};

/** URL slug suffix per service id — `{make}/{model}/{slug}` under /vehicles/ */
export const SERVICE_URL_SLUGS: Record<string, string> = {
  'four-wheel-drive': 'four-wheel-drive-service-englewood-co',
  'ecoboost-diagnostics': 'ecoboost-diagnostics-englewood-co',
  'heavy-brake': 'heavy-duty-brake-service-englewood-co',
  'towing-prep': 'towing-prep-inspection-englewood-co',
  'suspension-lift': 'suspension-lift-alignment-englewood-co',
  'fleet-maintenance': 'fleet-maintenance-englewood-co',
  'awd-service': 'awd-drivetrain-service-englewood-co',
  'brake-service': 'brake-repair-service-englewood-co',
  'suspension-steering': 'suspension-steering-repair-englewood-co',
  'check-engine': 'check-engine-light-englewood-co',
  'pre-winter': 'pre-winter-service-englewood-co',
  'oil-maintenance': 'oil-changes-maintenance-englewood-co',
  'cvt-service': 'cvt-transmission-service-englewood-co',
  'transmission-service': 'transmission-service-englewood-co',
  'ac-heating': 'ac-heating-repair-englewood-co',
  'engine-diagnostics': 'engine-diagnostics-englewood-co',
  'pre-purchase': 'pre-purchase-inspection-englewood-co',
  'hybrid-system': 'hybrid-battery-service-englewood-co',
  'regenerative-brake': 'regenerative-brake-service-englewood-co',
  'inverter-coolant': 'inverter-coolant-service-englewood-co',
  'ev-battery': 'ev-battery-diagnostics-englewood-co',
  'ev-charging': 'ev-charging-inspection-englewood-co',
  'thermal-management': 'battery-thermal-management-englewood-co',
  'performance-brake': 'performance-brake-service-englewood-co',
  'turbo-intake': 'turbo-intake-service-englewood-co',
  'sport-alignment': 'sport-suspension-alignment-englewood-co',
  'european-diagnostics': 'european-diagnostics-englewood-co',
  'cooling-system': 'cooling-system-service-englewood-co',
  'timing-chain': 'timing-chain-inspection-englewood-co',
  'gdi-carbon': 'direct-injection-carbon-cleaning-englewood-co',
  'air-suspension': 'air-suspension-repair-englewood-co',
  'ab-service': 'ab-service-maintenance-englewood-co',
  'electrical-system': 'electrical-diagnostics-englewood-co',
  'quattro-awd': 'quattro-awd-service-englewood-co',
  'boxer-engine': 'boxer-engine-service-englewood-co',
  'head-gasket': 'head-gasket-inspection-englewood-co',
  'timing-belt': 'timing-belt-water-pump-englewood-co',
  'off-road-inspection': 'off-road-wear-assessment-englewood-co',
  'diesel-gas-truck': 'diesel-gas-truck-service-englewood-co',
  'hemi-diagnostics': 'hemi-engine-diagnostics-englewood-co',
  'factory-maintenance': 'factory-maintenance-englewood-co',
  'hybrid-ev-service': 'hybrid-ev-service-englewood-co',
  'tsi-tdi-service': 'tsi-tdi-engine-service-englewood-co',
  'dsg-transmission': 'dsg-transmission-service-englewood-co',
  'awd-4motion': '4motion-awd-service-englewood-co',
  'afm-diagnostics': 'afm-dfm-diagnostics-englewood-co',
  'truck-maintenance': 'truck-maintenance-englewood-co',
  'mercedes-diagnostics': 'mercedes-diagnostics-englewood-co',
  'scheduled-maintenance': 'scheduled-maintenance-englewood-co',
  'cargo-hvac': 'cargo-hvac-service-englewood-co',
  'commercial-inspection': 'commercial-vehicle-inspection-englewood-co',
  'sliding-door': 'sliding-door-repair-englewood-co',
};

const SERVICE_SLUG_TO_ID = Object.fromEntries(
  Object.entries(SERVICE_URL_SLUGS).map(([id, slug]) => [slug, id]),
) as Record<string, string>;

export function slugifyModel(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getServiceUrlSlug(serviceId: string): string {
  return SERVICE_URL_SLUGS[serviceId] ?? `${serviceId}-service-englewood-co`;
}

export function parseServiceIdFromSlug(serviceSlug: string): string | undefined {
  return SERVICE_SLUG_TO_ID[serviceSlug];
}

export function buildModelServicePath(
  brandSlug: string,
  model: string,
  serviceId: string,
): string {
  return `/vehicles/${brandSlug}/${slugifyModel(model)}/${getServiceUrlSlug(serviceId)}`;
}

export function getServiceCatalogEntry(serviceId: string): ServiceDef | undefined {
  return SERVICE_CATALOG[serviceId];
}

export type ModelDeepDiveParam = {
  make: string;
  model: string;
  serviceSlug: string;
};

/**
 * Services that can legitimately be offered on a pure battery-electric vehicle.
 * Everything else (engine, oil, exhaust, transmission, turbo, fuel) is combustion-only
 * and must never generate a page for an EV.
 */
const EV_ALLOWED_SERVICE_IDS = new Set<string>([
  'ev-battery',
  'ev-charging',
  'regenerative-brake',
  'thermal-management',
  'electrical-system',
  'scheduled-maintenance',
  'brake-service',
  'suspension-steering',
  'ac-heating',
  'towing-prep',
  'hybrid-ev-service',
  'european-diagnostics',
]);

/** Default page set for a pure EV that has no model-specific list (e.g. an EV typed as truck). */
const EV_DEFAULT_SERVICE_IDS: Record<string, string[]> = {
  truck: [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'electrical-system',
    'towing-prep',
    'scheduled-maintenance',
    'brake-service',
    'suspension-steering',
  ],
  default: [
    'ev-battery',
    'ev-charging',
    'regenerative-brake',
    'thermal-management',
    'electrical-system',
    'scheduled-maintenance',
    'brake-service',
    'suspension-steering',
    'ac-heating',
  ],
};

export function isServiceValidForPowertrain(serviceId: string, powertrain: Powertrain): boolean {
  if (powertrain !== 'ev') return true;
  return EV_ALLOWED_SERVICE_IDS.has(serviceId);
}

function resolveServiceIds(ctx: ModelServiceContext): string[] {
  const modelKey = `${ctx.brandSlug}-${slugifyModel(ctx.model)}`;

  if (ctx.powertrain === 'ev') {
    // Model-specific EV lists win; otherwise fall back to the EV defaults.
    // Always filter through the EV allow-list — never emit combustion pages for an EV.
    const ids =
      MODEL_SERVICE_IDS[modelKey] ??
      EV_DEFAULT_SERVICE_IDS[ctx.vehicleType] ??
      EV_DEFAULT_SERVICE_IDS.default;
    return ids.filter((id) => EV_ALLOWED_SERVICE_IDS.has(id));
  }

  if (MODEL_SERVICE_IDS[modelKey]) return MODEL_SERVICE_IDS[modelKey];

  const brandTypeIds = BRAND_TYPE_SERVICE_IDS[ctx.brandSlug]?.[ctx.vehicleType];
  if (brandTypeIds) return brandTypeIds;

  if (BRAND_SERVICE_IDS[ctx.brandSlug]) return BRAND_SERVICE_IDS[ctx.brandSlug];
  return TYPE_SERVICE_IDS[ctx.vehicleType];
}

function buildTitle(model: string, serviceName: string): string {
  return `${model} ${serviceName} in Englewood, CO`;
}

export function getModelCommonServices(
  brandSlug: string,
  brandName: string,
  model: string,
  vehicleType: VehicleType,
  powertrain: Powertrain,
): ModelCommonService[] {
  const ctx: ModelServiceContext = { brandSlug, brandName, model, vehicleType, powertrain };
  const ids = resolveServiceIds(ctx);
  return ids
    .map((id) => {
      const def = SERVICE_CATALOG[id];
      if (!def) return null;
      return {
        id: def.id,
        title: buildTitle(model, def.name),
        description: withLocalityVariant(def.describe(ctx), `${brandSlug}/${model}/${id}`),
        href: buildModelServicePath(brandSlug, model, id),
      };
    })
    .filter((s): s is ModelCommonService => s !== null);
}
