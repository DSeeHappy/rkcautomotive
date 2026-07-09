#!/usr/bin/env node
/**
 * Generates lib/modelDeepDiveContent.ts — premium deep-dive templates for all model services.
 * Run: node scripts/generate-model-deep-dive-content.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outPath = path.join(root, 'lib', 'modelDeepDiveContent.ts');

const ACCENTS = [
  { accent: 'text-amber-400', accentBg: 'bg-amber-500/10', accentBorder: 'border-amber-500/25' },
  { accent: 'text-red-400', accentBg: 'bg-red-500/10', accentBorder: 'border-red-500/25' },
  { accent: 'text-sky-400', accentBg: 'bg-sky-500/10', accentBorder: 'border-sky-500/25' },
  { accent: 'text-emerald-400', accentBg: 'bg-emerald-500/10', accentBorder: 'border-emerald-500/25' },
];

const SERVICES = [
  {
    id: 'four-wheel-drive',
    name: '4WD & Transfer Case Service',
    quote: '4WD that grinds into gear was fine last ski season — until the transfer case fluid turned to sludge.',
    related: 'transmission-services-englewood-co',
    focus: 'transfer case fluid, front axle actuators, and shift-on-the-fly engagement',
    warning: 'Delayed 4WD engagement on I-70 often means contaminated transfer case fluid — not a bad switch.',
    typeNote: {
      truck: 'Truck 4WD systems see heavier loads towing campers and job-site trailers through the Rockies.',
      suv: 'SUV 4WD hardware works harder on tight parking-lot turns and snow-packed Englewood streets.',
    },
  },
  {
    id: 'ecoboost-diagnostics',
    name: 'Turbo & EcoBoost Engine Diagnostics',
    quote: 'Boost leaks do not throw a check engine light until the turbo is already starving for oil.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'boost pressure, wastegate function, intercooler leaks, and direct-injection fuel trim',
    warning: 'Metallic cold-start rattle on EcoBoost engines can mean cam phaser failure — not just thin oil.',
    typeNote: {
      truck: 'F-150 EcoBoost towing at altitude runs leaner air-fuel ratios that expose boost and charge-air leaks faster.',
      suv: 'Crossover EcoBoost engines heat-soak in summer traffic on Santa Fe Drive, triggering overboost codes.',
    },
  },
  {
    id: 'heavy-brake',
    name: 'Heavy-Duty Brake Service',
    quote: 'Loaded truck brakes do not forgive glazed rotors on a Georgetown Hill descent.',
    related: 'brake-repair-englewood-co',
    focus: 'rotor thickness, caliper slide function, brake fluid moisture, and pad compounds for vehicle weight',
    warning: 'Metal-on-metal grinding on a loaded truck destroys rotors and calipers in a single mountain run.',
    typeNote: {
      truck: 'Truck brake jobs must account for trailer weight, tongue load, and rear brake bias under hauling.',
      van: 'Commercial vans need rear brake attention — empty weight still stresses rear drums and parking brakes.',
    },
  },
  {
    id: 'towing-prep',
    name: 'Towing & Hauling Prep Inspection',
    quote: 'The transmission does not complain until you are halfway up Loveland Pass with a camper on the hitch.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'hitch wiring, transmission cooler lines, rear suspension sag, and differential fluid condition',
    warning: 'Powertrain codes that appear only under load are common before towing season — scan before you hitch up.',
    typeNote: {
      truck: 'Truck towing prep includes frame hitch inspection, brake controller calibration, and trans temp strategy.',
      suv: 'SUV towing prep verifies factory tow ratings, trailer sway control, and rear differential fluid.',
    },
  },
  {
    id: 'suspension-lift',
    name: 'Suspension, Lift & Alignment',
    quote: 'A lift kit without alignment eats tires faster than Colorado potholes.',
    related: 'suspension-steering-englewood-co',
    focus: 'ball joints, control arm bushings, track bar geometry, and ride-height-specific alignment',
    warning: 'Death wobble on lifted trucks traces to loose track bars and worn steering dampers — not just tires.',
    typeNote: {
      truck: 'Lifted trucks need caster and pinion angle checks after any suspension modification.',
      suv: 'SUV lift kits change scrub radius — we align to modified specs, not factory sedan targets.',
    },
  },
  {
    id: 'fleet-maintenance',
    name: 'Fleet Maintenance Programs',
    quote: 'Fleet downtime costs more than a scheduled fluid exchange ever will.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'interval-based oil service, brake inspections, multi-point checks, and documented service history',
    warning: 'Deferred fleet maintenance shows up as roadside breakdowns — not dashboard warnings.',
    typeNote: {
      truck: 'Work trucks need aggressive brake and driveline intervals when job-site loads are daily.',
      van: 'Delivery vans need sliding door, HVAC, and brake inspections on compressed fleet schedules.',
    },
  },
  {
    id: 'awd-service',
    name: 'AWD & Drivetrain Service',
    quote: 'AWD shudder on cold mornings is the coupling telling you the fluid is past its life.',
    related: 'transmission-services-englewood-co',
    focus: 'rear differential fluid, Haldex or viscous coupling service, CV boot inspection, and torque transfer testing',
    warning: 'Binding AWD on tight turns often means degraded coupling fluid — service before ski season.',
    typeNote: {
      suv: 'Crossover AWD systems work constantly on wet Englewood streets — fluid breaks down faster than 2WD.',
      sedan: 'AWD sedans still need rear differential service even when the front wheels do most of the work.',
    },
  },
  {
    id: 'brake-service',
    name: 'Brake Repair & Pad Replacement',
    quote: 'Pedal pulsation is not normal Colorado driving — it is a rotor measuring problem.',
    related: 'brake-repair-englewood-co',
    focus: 'pad thickness, rotor runout, caliper slides, and DOT-spec fluid flushes',
    warning: 'A soft brake pedal after pad replacement means air in the lines or contaminated fluid — not bed-in.',
    typeNote: {
      suv: 'SUV brake service accounts for extra weight on I-25 descents and loaded family hauling.',
      sedan: 'Sedan brake jobs still need fluid moisture testing — Colorado humidity ages DOT fluid quickly.',
    },
  },
  {
    id: 'suspension-steering',
    name: 'Suspension & Steering Repair',
    quote: 'Wandering steering on Federal Blvd is worn tie rods — not wind.',
    related: 'suspension-steering-englewood-co',
    focus: 'struts, control arm bushings, tie rods, sway bar links, and factory alignment specs',
    warning: 'Uneven tire wear on the inside edge often means toe drift from worn bushings — align after repair.',
    typeNote: {
      suv: 'SUV suspension takes curb hits and pothole damage harder due to taller sidewalls and weight.',
      truck: 'Truck steering linkage wears faster with oversized tires and lifted ride heights.',
    },
  },
  {
    id: 'check-engine',
    name: 'Check Engine Light Diagnostics',
    quote: 'Clearing a code without fixing the root cause is renting peace of mind by the mile.',
    related: 'check-engine-light-englewood-co',
    focus: 'manufacturer-specific codes, bidirectional tests, wiring traces, and emissions readiness',
    warning: 'Intermittent check engine lights at altitude often trace to lean fuel trim — not bad gas.',
    typeNote: {
      hybrid: 'Hybrid check engine lights can mean emissions faults or high-voltage system derates — scan both domains.',
      truck: 'Truck check engine lights under load often reveal EGR, DEF, or boost issues invisible at idle.',
    },
  },
  {
    id: 'pre-winter',
    name: 'Pre-Winter Colorado Inspection',
    quote: 'Colorado winter does not wait for your battery to finish dying.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'battery CCA testing, coolant freeze protection, wiper blades, AWD function, and tire condition',
    warning: 'Weak batteries fail on the first sub-zero morning — test before October freezes in Englewood.',
    typeNote: {
      hybrid: 'Hybrid pre-winter checks include 12V auxiliary battery health — HV pack depends on it.',
      truck: 'Truck pre-winter prep includes block heater cords, DEF level, and 4WD actuator function.',
    },
  },
  {
    id: 'oil-maintenance',
    name: 'Oil Changes & Factory Maintenance',
    quote: 'Skipped oil changes do not show up until the turbo seizes or the cam wipes.',
    related: 'oil-changes-englewood-co',
    focus: 'factory oil viscosity, filter quality, drain plug torque, and maintenance reminder resets',
    warning: 'Overdue oil on turbo and GDI engines causes carbon, bearing wear, and warranty disputes.',
    typeNote: {
      hybrid: 'Hybrid oil service uses specific viscosity for Atkinson-cycle engines that run cooler but longer.',
      performance: 'Performance oil changes may need shorter intervals after track days or canyon runs.',
    },
  },
  {
    id: 'cvt-service',
    name: 'CVT Transmission Fluid Service',
    quote: 'CVT shudder is the steel belt telling you the fluid is cooked.',
    related: 'transmission-services-englewood-co',
    focus: 'manufacturer-spec CVT fluid exchange, cooler inspection, and ratio-control code scans',
    warning: 'Deferred CVT fluid service leads to valve body and chain replacement — not just a flush.',
    typeNote: {
      sedan: 'Sedan CVTs in stop-and-go I-25 traffic overheat fluid faster than highway commuters realize.',
      suv: 'SUV CVTs towing light loads still need cooler and fluid attention before mountain trips.',
    },
  },
  {
    id: 'transmission-service',
    name: 'Transmission Service & Diagnostics',
    quote: 'Rough shifts are the TCM asking for fluid — or telling you a clutch pack is done.',
    related: 'transmission-services-englewood-co',
    focus: 'fluid condition, TCM codes, cooler lines, and adaptive shift learning verification',
    warning: 'Delayed engagement when cold often means degraded fluid — not a failing transmission yet.',
    typeNote: {
      truck: 'Truck transmissions work harder towing — fluid temp and cooler capacity matter on I-70.',
      suv: 'SUV 8-speed and 9-speed units need adaptive reset after major service — we verify shift quality.',
    },
  },
  {
    id: 'ac-heating',
    name: 'A/C Recharge & Climate Repair',
    quote: 'Weak A/C in July and no heat in January share the same neglected refrigerant and coolant loops.',
    related: 'heating-ac-englewood-co',
    focus: 'refrigerant charge, compressor clutch, blend doors, heater core flow, and cabin filter condition',
    warning: 'A/C that blows warm at idle but cold on the highway often means condenser fan or charge issue.',
    typeNote: {
      van: 'Van rear HVAC zones need separate blower and duct diagnosis — front recharge alone will not fix it.',
      suv: 'SUV tri-zone climate systems have multiple actuators that fail silently in Colorado dry air.',
    },
  },
  {
    id: 'engine-diagnostics',
    name: 'Engine Diagnostics & Drivability',
    quote: 'Rough idle is a data problem — not a parts cannon problem.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'live fuel trim, smoke testing, scope analysis, and systematic wiring verification',
    warning: 'Hesitation at altitude often traces to vacuum leaks or MAF contamination — scan before replacing coils.',
    typeNote: {
      sedan: 'Sedan drivability faults on short Englewood commutes often involve carbon and PCV issues.',
      truck: 'Truck drivability under load needs dyno-style load simulation — codes appear only when towing.',
    },
  },
  {
    id: 'pre-purchase',
    name: 'Pre-Purchase Inspection',
    quote: 'A clean Carfax does not measure compression or smell coolant in the oil.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'compression checks, fluid analysis, scan-tool health reports, and undercarriage inspection',
    warning: 'Used vehicle inspections catch deferred maintenance that sellers hide with code clears.',
    typeNote: {
      sedan: 'Sedan PPI includes timing chain listen tests on European and GDI platforms.',
      truck: 'Truck PPI verifies frame rust, differential whine, and tow history through fluid color.',
    },
  },
  {
    id: 'hybrid-system',
    name: 'Hybrid Battery & System Checks',
    quote: 'Hybrid range loss starts with a weak 12V battery — not the high-voltage pack.',
    related: 'electrical-system-englewood-co',
    focus: 'HV battery cooling, inverter health, regenerative integration, and 12V auxiliary support',
    warning: 'Hybrid warning lights after cold nights often trace to auxiliary battery failure first.',
    typeNote: {
      hybrid: 'Hybrid system checks require proper HV safety protocol — not generic OBD scanners.',
      suv: 'Hybrid SUV battery cooling fans clog with road debris — inspect before summer heat.',
    },
  },
  {
    id: 'regenerative-brake',
    name: 'Regenerative Brake Service',
    quote: 'Regen saves pads — but friction brakes still stop you on a wet I-25 panic stop.',
    related: 'brake-repair-englewood-co',
    focus: 'friction pad wear, caliper slide function, brake fluid moisture, and regen calibration',
    warning: 'Hybrid brake pedal feel changes when friction pads glaze — regen cannot compensate.',
    typeNote: {
      hybrid: 'Hybrid regenerative braking blends with friction — both systems need inspection.',
      ev: 'EV one-pedal driving still relies on rear friction brakes for hard stops and hold mode.',
    },
  },
  {
    id: 'inverter-coolant',
    name: 'Inverter & Hybrid Coolant Service',
    quote: 'Inverter coolant is not engine coolant — mixing them destroys the power electronics loop.',
    related: 'heating-ac-englewood-co',
    focus: 'inverter coolant level, pump operation, hose condition, and separate-loop chemistry',
    warning: 'Power limiting on hybrid acceleration often means inverter cooling fault — check the loop first.',
    typeNote: {
      hybrid: 'Hybrid inverter loops use distinct coolant chemistry — never top off from the radiator cap.',
    },
  },
  {
    id: 'ev-battery',
    name: 'EV Battery Health & Range Diagnostics',
    quote: 'Range anxiety is often a state-of-health number — not a failing motor.',
    related: 'battery-testing-englewood-co',
    focus: 'battery SOH scans, cell balance, thermal management logs, and charging port inspection',
    warning: 'Cold-weather range drops are normal — permanent loss shows in SOH and DC fast-charge speed.',
    typeNote: {
      ev: 'EV battery health benchmarks against factory SOH targets — we document before warranty disputes.',
    },
  },
  {
    id: 'ev-charging',
    name: 'EV Charging System Inspection',
    quote: 'Intermittent charging is almost always ground, port, or onboard charger — not the battery.',
    related: 'electrical-system-englewood-co',
    focus: 'charge port pins, ground circuits, onboard charger communication, and HV cable integrity',
    warning: 'DC fast-charge faults after mountain trips can trace to thermal throttling — scan logs first.',
    typeNote: {
      ev: 'EV charging inspection covers AC Level 2 and DC port wear from daily Englewood commuting.',
    },
  },
  {
    id: 'thermal-management',
    name: 'Battery Thermal Management Service',
    quote: 'Summer range loss on I-70 starts with a degraded battery cooling loop — not bad driving.',
    related: 'heating-ac-englewood-co',
    focus: 'coolant pumps, valves, glycol chemistry, and radiator/chiller integration',
    warning: 'Reduced DC fast-charge speed is an early thermal fault — before the dash warns you.',
    typeNote: {
      ev: 'EV thermal management keeps cells in band during Colorado summer heat and winter pre-conditioning.',
    },
  },
  {
    id: 'performance-brake',
    name: 'Performance Brake Service',
    quote: 'Track pads on street rotors crack — match compound to how you actually drive.',
    related: 'brake-repair-englewood-co',
    focus: 'pad transfer layers, drilled rotor cracks, high-temp fluid, and bias adjustment',
    warning: 'Brake fade on canyon runs means fluid boiling or pad outgassing — not weak calipers alone.',
    typeNote: {
      performance: 'Performance brake service matches pad compound to street commute vs track day usage.',
    },
  },
  {
    id: 'turbo-intake',
    name: 'Turbo, Intake & Boost System Service',
    quote: 'Three PSI of boost leak costs more power than any chip tune ever added.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'charge pipe pressure test, wastegate and diverter valve function, intercooler efficiency',
    warning: 'Carboned intake valves on GDI turbo engines cause misfire long before the turbo fails.',
    typeNote: {
      performance: 'Performance turbo service includes boost leak smoke test and intercooler heat-soak checks.',
    },
  },
  {
    id: 'sport-alignment',
    name: 'Sport Suspension Alignment',
    quote: 'Factory alignment specs waste tires on a lowered AWD chassis.',
    related: 'suspension-steering-englewood-co',
    focus: 'camber, toe, thrust angle, and ride-height-adjusted targets for even tire wear',
    warning: 'Inside shoulder wear on performance tires means camber/toe mismatch — not cheap rubber.',
    typeNote: {
      performance: 'Sport alignment documents before/after specs for track prep and canyon driving.',
    },
  },
  {
    id: 'european-diagnostics',
    name: 'European Import Diagnostics',
    quote: 'Generic OBD readers see five percent of what a BMW module is actually reporting.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'factory scan tools, bidirectional tests, wiring diagrams, and module coding',
    warning: 'European comfort-system faults can derate powertrain — read all domains, not just engine codes.',
    typeNote: {
      luxury: 'European diagnostics require manufacturer-level access — RKC reads full module trees.',
    },
  },
  {
    id: 'cooling-system',
    name: 'Cooling System & Water Pump Service',
    quote: 'Overheating on Vail Pass starts with a $40 hose — not a new engine.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'pressure test, hose and clamp inspection, water pump bearing, thermostat function',
    warning: 'Pink crust under the pump weep hole means replace pump now — not on the next oil change.',
    typeNote: {
      luxury: 'European cooling systems use plastic tanks and electric pumps that fail in Colorado heat cycles.',
      truck: 'Truck cooling systems work harder towing grades — we inspect fan clutch and radiator fins.',
    },
  },
  {
    id: 'timing-chain',
    name: 'Timing Chain Inspection',
    quote: 'Cold-start rattle for three seconds is the chain asking for attention — not morning personality.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'scope analysis, correlation codes, tensioner function, and guide wear assessment',
    warning: 'Timing correlation codes mean valve timing is drifting — diagnose before misfire destroys cats.',
    typeNote: {
      luxury: 'European timing chains stretch from oil change neglect — listen on cold start every morning.',
    },
  },
  {
    id: 'gdi-carbon',
    name: 'Direct Injection Carbon Cleaning',
    quote: 'GDI rough idle is carbon on the valves — not bad gas from the last fill-up.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'walnut blasting, chemical decarbonization, intake tract inspection, and PCV function',
    warning: 'Short Englewood trips build intake valve carbon faster than highway miles ever will.',
    typeNote: {
      sedan: 'GDI sedans on stop-and-go I-25 commutes need carbon service before 80K miles.',
    },
  },
  {
    id: 'air-suspension',
    name: 'Air Suspension & Airmatic Repair',
    quote: 'Sagging corners overnight mean a bladder leak — not tired springs.',
    related: 'suspension-steering-englewood-co',
    focus: 'strut bladder inspection, compressor duty cycle, valve block testing, and ride height calibration',
    warning: 'Compressor running every key cycle burns the pump motor — fix the leak, not just the fuse.',
    typeNote: {
      luxury: 'Air suspension rubber bladders crack faster in Colorado freeze-thaw cycles.',
    },
  },
  {
    id: 'ab-service',
    name: 'A-Service & B-Service Maintenance',
    quote: 'Mercedes service menus exist because skipping B-Service costs three A-Services later.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'factory A/B menus, fluid specs, filter intervals, and inspection checklists',
    warning: 'Dealer-only service history hurts resale — documented independent service counts.',
    typeNote: {
      luxury: 'Mercedes A-Service and B-Service bundles oil, filters, and inspections to factory intervals.',
    },
  },
  {
    id: 'electrical-system',
    name: 'Electrical & Module Diagnostics',
    quote: 'Parasitic draw kills batteries silently — the module stays awake after you lock the doors.',
    related: 'electrical-system-englewood-co',
    focus: 'parasitic draw testing, alternator ripple, charging system load test, and module programming',
    warning: 'Random warning lights after rain often trace to connector corrosion — not failed modules.',
    typeNote: {
      ev: 'EV electrical diagnosis spans 12V, HV, and communication buses — systematic isolation required.',
    },
  },
  {
    id: 'quattro-awd',
    name: 'quattro AWD Service',
    quote: 'quattro shudder on tight turns is Haldex fluid — not a failing differential.',
    related: 'transmission-services-englewood-co',
    focus: 'Haldex fluid exchange, rear differential service, coupling test, and CV boot inspection',
    warning: 'Neglected Haldex service causes binding that feels like a bad transmission — fluid first.',
    typeNote: {
      luxury: 'Audi quattro Torsen and Haldex systems need different fluid schedules — we match your generation.',
    },
  },
  {
    id: 'boxer-engine',
    name: 'Subaru Boxer Engine Service',
    quote: 'Boxer oil consumption starts as a seep — ends as a misfire and dead catalytic converter.',
    related: 'oil-changes-englewood-co',
    focus: 'correct FB/FA viscosity, valve cover leak monitoring, cam carrier inspection, and spark plug condition',
    warning: 'Oil on boxer spark plugs means seepage becoming misfire — address before cat damage.',
    typeNote: {
      suv: 'Subaru boxer engines in SUVs need level ground for accurate dipstick readings.',
    },
  },
  {
    id: 'head-gasket',
    name: 'Head Gasket & Cooling Inspection',
    quote: 'External seepage on a Subaru does not fix itself — it becomes consumption and overheating.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'combustion leak test, coolant loss trends, spark plug color, and exhaust gas analysis',
    warning: 'Sweet exhaust smell on cold start means coolant in the combustion chamber — test immediately.',
    typeNote: {
      suv: 'Subaru head gasket seepage shows up on mountain grades before the dash warns.',
    },
  },
  {
    id: 'timing-belt',
    name: 'Timing Belt & Water Pump Service',
    quote: 'A timing belt does not warn you politely — it breaks on the merge lane.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'belt, tensioner, idler, water pump, cam seals, and coolant replacement in one visit',
    warning: 'Interference engines destroy valves when belts fail — scheduled service beats catastrophic repair.',
    typeNote: {
      suv: 'SUV timing belt service includes pump and seal replacement while the cover is off.',
      sedan: 'Sedan interference engines need belt service on mileage and age — Colorado age matters.',
    },
  },
  {
    id: 'off-road-inspection',
    name: 'Off-Road Wear Assessment',
    quote: 'Trail damage shows up as highway vibration three weeks later.',
    related: 'suspension-steering-englewood-co',
    focus: 'skid plates, control arms, U-joints, steering stabilizers, and 4WD linkage inspection',
    warning: 'Bent axle tubes do not always show at a glance — measure after hard trail weekends.',
    typeNote: {
      truck: 'Off-road trucks need U-joint and ball joint inspection after Red Rocks and high-country trails.',
      suv: 'SUV trail use accelerates wear on bushings and stabilizer links — inspect before daily commuting.',
    },
  },
  {
    id: 'diesel-gas-truck',
    name: 'Diesel & Gas Truck Service',
    quote: 'DEF quality matters as much as diesel fuel on a Cummins at 10,000 feet.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'DEF system, fuel filters, glow plugs, turbochargers, and EGR components',
    warning: 'Diesel hard-start in Englewood winters often means glow plug or fuel filter — not bad fuel alone.',
    typeNote: {
      truck: 'Diesel truck service includes fuel water separator and turbo oil supply inspection.',
      van: 'Sprinter diesel service covers DEF, DPF, and high-mileage turbocharger health.',
    },
  },
  {
    id: 'hemi-diagnostics',
    name: 'Hemi & Heavy-Duty Engine Diagnostics',
    quote: 'Hemi tick at idle is not personality — it is valvetrain wear asking for scope time.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'cylinder deactivation faults, oil pressure, valvetrain noise, and cam wear correlation',
    warning: 'MDS/AFM misfires under light load precede lifter collapse — diagnose early on Rams.',
    typeNote: {
      truck: 'Ram Hemi diagnostics correlate lifter tick with cylinder deactivation patterns under load.',
    },
  },
  {
    id: 'factory-maintenance',
    name: 'Factory Scheduled Maintenance',
    quote: 'Factory maintenance menus protect warranty and resale — skipped visits cost both.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'oil, filters, fluids, multi-point inspections, and service indicator resets',
    warning: 'Lease returns need documented maintenance — we stamp intervals to factory spec.',
    typeNote: {
      sedan: 'Factory maintenance on Korean imports includes GDI carbon awareness at higher mileage.',
    },
  },
  {
    id: 'hybrid-ev-service',
    name: 'Hybrid & EV System Service',
    quote: 'High-voltage service is not a general repair bay task — protocol and tooling matter.',
    related: 'electrical-system-englewood-co',
    focus: 'battery cooling, charging behavior, 12V support, and HV safety procedures',
    warning: 'Hybrid fault lights after fast charging often trace to thermal limits — scan before parts.',
    typeNote: {
      hybrid: 'Korean hybrid and EV platforms need manufacturer scan access for battery and inverter data.',
    },
  },
  {
    id: 'tsi-tdi-service',
    name: 'TSI & TDI Engine Service',
    quote: 'TSI carbon and timing chain wear are maintenance items — not surprise failures.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'carbon management, timing chain monitoring, PCV system, water pump seepage',
    warning: 'VW TSI water pump seepage behind the cover contaminates timing components — catch early.',
    typeNote: {
      sedan: 'VW TSI sedans need carbon cleaning and chain listen tests on cold Englewood mornings.',
    },
  },
  {
    id: 'dsg-transmission',
    name: 'DSG Transmission Service',
    quote: 'DSG shudder from a stop is mechatronic starvation — fluid interval, not clutch failure yet.',
    related: 'transmission-services-englewood-co',
    focus: 'VW-spec fluid, filter service, mechatronic adaptation, and clutch wear assessment',
    warning: 'Deferred DSG service turns shudder into mechatronic replacement — flush on schedule.',
    typeNote: {
      sedan: 'DSG dual-clutch units in stop-and-go I-25 traffic need fluid sooner than highway miles suggest.',
    },
  },
  {
    id: 'awd-4motion',
    name: '4MOTION AWD Service',
    quote: '4MOTION binding in parking lots is fluid degradation — not a broken differential.',
    related: 'transmission-services-englewood-co',
    focus: 'Haldex coupling fluid, rear differential exchange, traction test, and coupling inspection',
    warning: 'Cold-morning 4MOTION shudder clears after fluid exchange — diagnose before replacing coupling.',
    typeNote: {
      suv: 'VW SUV 4MOTION systems need Haldex service before Colorado winter tight-turn binding.',
    },
  },
  {
    id: 'afm-diagnostics',
    name: 'AFM/DFM Engine Diagnostics',
    quote: 'AFM lifter tick is the cam asking for help before steel shards circulate.',
    related: 'camshaft-lifter-repair-englewood-co',
    focus: 'cylinder deactivation solenoids, lifter function, cam lobe inspection, and oil pressure',
    warning: 'Chevy AFM misfires on cylinders 1, 4, 6, and 7 are classic lifter collapse precursors.',
    typeNote: {
      truck: 'GM truck AFM/DFM diagnostics under towing load reveal faults invisible at idle.',
    },
  },
  {
    id: 'truck-maintenance',
    name: 'Truck Maintenance & Repair',
    quote: 'Truck maintenance is not sedan maintenance with bigger oil filters.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'interval fluids, driveline inspection, brake system, and load-specific recommendations',
    warning: 'Deferred truck differential fluid destroys ring and pinion on first heavy tow.',
    typeNote: {
      truck: 'Chevy truck maintenance uses GM-spec fluids and heavier inspection on U-joints and hubs.',
    },
  },
  {
    id: 'mercedes-diagnostics',
    name: 'Mercedes-Benz Diagnostics',
    quote: 'STAR diagnostics see faults generic scanners never know existed.',
    related: 'engine-diagnostics-englewood-co',
    focus: 'manufacturer data, guided tests, adaptation resets, and multi-domain fault trees',
    warning: 'Mercedes limp mode from conductor plate faults mimics engine problems — read transmission domain.',
    typeNote: {
      luxury: 'Mercedes diagnostics span powertrain, chassis, and body — RKC reads the full vehicle network.',
    },
  },
  {
    id: 'scheduled-maintenance',
    name: 'Scheduled Maintenance',
    quote: 'Consistent maintenance is cheaper than one emergency tow from Monument Hill.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'factory intervals, fluid exchanges, brake inspections, and battery testing',
    warning: 'Skipped maintenance shows up as stranded vehicles — not always warning lights first.',
    typeNote: {
      sedan: 'Scheduled maintenance catches worn brakes and aging batteries during routine Englewood visits.',
    },
  },
  {
    id: 'cargo-hvac',
    name: 'Cargo & Rear HVAC Service',
    quote: 'Rear passengers freezing while the front is comfortable means a rear zone fault — not bad weather.',
    related: 'heating-ac-englewood-co',
    focus: 'rear blower motors, rear evaporators, duct blockages, and zone actuator function',
    warning: 'Weak rear A/C in vans often means clogged rear evaporator — not low refrigerant alone.',
    typeNote: {
      van: 'Van cargo HVAC works harder with passenger and equipment loads — inspect both zones.',
    },
  },
  {
    id: 'commercial-inspection',
    name: 'Commercial Vehicle Inspection',
    quote: 'DOT readiness is documentation and measurements — not a verbal all-clear.',
    related: 'preventative-maintenance-englewood-co',
    focus: 'brake, tire, lighting, steering inspections with photo documentation',
    warning: 'Fleet insurance audits need written inspection records — we document every measurement.',
    typeNote: {
      van: 'Commercial van inspections cover brake bias, tire age, and lighting for DOT and fleet compliance.',
    },
  },
  {
    id: 'sliding-door',
    name: 'Sliding Door & Liftgate Repair',
    quote: 'A sliding door that binds in Colorado cold is worn rollers — not frozen metal.',
    related: 'electrical-system-englewood-co',
    focus: 'rollers, cables, track alignment, power latch modules, and weather seal function',
    warning: 'Power sliding door faults after rain often trace to latch module corrosion — not motor failure.',
    typeNote: {
      van: 'Van sliding doors need roller and track service before winter binding strands passengers.',
    },
  },
];

function esc(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function buildServiceBlock(svc) {
  const typeNoteEntries = Object.entries(svc.typeNote ?? {})
    .map(([k, v]) => `      ${k}: '${esc(v)}',`)
    .join('\n');

  return `  '${svc.id}': {
    serviceName: '${esc(svc.name)}',
    realityQuote: '${esc(svc.quote)}',
    relatedServiceSlug: '${svc.related}',
    focus: '${esc(svc.focus)}',
    warning: '${esc(svc.warning)}',
    typeNotes: {
${typeNoteEntries || "      sedan: 'Sedan service accounts for daily Englewood commuting and mountain weekend trips.',"}
    },
  },`;
}

const serviceBlocks = SERVICES.map(buildServiceBlock).join('\n');

const output = `/**
 * Model-specific premium deep-dive content templates.
 * Generated by scripts/generate-model-deep-dive-content.mjs — re-run to regenerate base templates.
 */
import type { LucideIcon } from 'lucide-react';
import { AlertTriangle, Clock, Droplets, Gauge } from 'lucide-react';
import type { FAQItem } from '@/lib/constants';
import { BUSINESS, LABOR_RATE } from '@/lib/constants';
import { getBrandFailureProfile } from '@/lib/brandFailureProfiles';
import {
  buildModelServicePath,
  getServiceCatalogEntry,
  parseServiceIdFromSlug,
  type ModelServiceContext,
} from '@/lib/modelCommonServices';
import { getModel, type VehicleType } from '@/lib/vehicleModels';

const SYMPTOM_ICONS: LucideIcon[] = [AlertTriangle, Clock, Droplets, Gauge];

const LOCAL =
  'RKC Automotive on Evans Ave in Englewood serves south Denver, Littleton, Aurora, and Highlands Ranch.';

type ServiceTemplate = {
  serviceName: string;
  realityQuote: string;
  relatedServiceSlug: string;
  focus: string;
  warning: string;
  typeNotes: Partial<Record<VehicleType, string>>;
};

const SERVICE_TEMPLATES: Record<string, ServiceTemplate> = {
${serviceBlocks}
};

export type DeepDiveSymptomCard = {
  icon: LucideIcon;
  title: string;
  body: string;
  warning?: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
};

export type DeepDiveProcessStep = {
  step: string;
  title: string;
  body: string;
};

export type DeepDiveChecklistGroup = {
  category: string;
  items: string[];
};

export type DeepDiveTechnicalCard = {
  title: string;
  body: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
};

export type ModelDeepDiveContent = {
  serviceId: string;
  serviceName: string;
  path: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  primaryCtaLabel: string;
  realityQuote: string;
  realityParagraphs: string[];
  symptomsEyebrow: string;
  symptomsTitle: string;
  symptomsIntro: string;
  symptoms: DeepDiveSymptomCard[];
  technicalEyebrow: string;
  technicalTitle: string;
  technicalIntro: string;
  technicalCards: DeepDiveTechnicalCard[];
  tableTitle: string;
  tableIntro: string;
  tableCaption: string;
  tableColumns: string[];
  tableRows: { label: string; values: string[]; highlight?: number }[];
  processEyebrow: string;
  processTitle: string;
  processIntro: string;
  processSteps: DeepDiveProcessStep[];
  checklistEyebrow: string;
  checklistTitle: string;
  checklistIntro: string;
  checklistGroups: DeepDiveChecklistGroup[];
  laborTitle: string;
  laborDescription: string;
  faqTitle: string;
  faqIntro: string;
  faqItems: FAQItem[];
  relatedServiceSlug: string;
  relatedTitle: string;
  serviceAreaLabel: string;
  finalCtaTitle: string;
  finalCtaDescription: string;
  metaDescription: string;
  metaKeywords: string;
};

function vehicleLabel(type: VehicleType): string {
  const labels: Record<VehicleType, string> = {
    truck: 'truck',
    suv: 'SUV',
    sedan: 'sedan',
    hybrid: 'hybrid',
    ev: 'electric vehicle',
    performance: 'performance vehicle',
    van: 'van',
    luxury: 'luxury vehicle',
  };
  return labels[type];
}

function accentAt(index: number) {
  const palette = [
    { accent: 'text-amber-400', accentBg: 'bg-amber-500/10', accentBorder: 'border-amber-500/25' },
    { accent: 'text-red-400', accentBg: 'bg-red-500/10', accentBorder: 'border-red-500/25' },
    { accent: 'text-sky-400', accentBg: 'bg-sky-500/10', accentBorder: 'border-sky-500/25' },
    { accent: 'text-emerald-400', accentBg: 'bg-emerald-500/10', accentBorder: 'border-emerald-500/25' },
  ];
  return palette[index % palette.length];
}

function getBrandFailureSnippet(brandSlug: string, model: string): string | undefined {
  const profile = getBrandFailureProfile(brandSlug);
  if (!profile) return undefined;
  const match = profile.failureProfiles.find((f) =>
    profile.commonModels.some(
      (m) => m.toLowerCase() === model.toLowerCase() || model.toLowerCase().includes(m.toLowerCase()),
    ),
  );
  if (match) return \`\${match.title}: \${match.description}\`;
  return profile.failureProfiles[0]
    ? \`\${profile.failureProfiles[0].title}: \${profile.failureProfiles[0].description}\`
    : undefined;
}

function buildContext(make: string, modelSlug: string, serviceId: string): ModelServiceContext & {
  modelSlug: string;
  yearRange: string;
  serviceId: string;
  path: string;
} | null {
  const vehicle = getModel(make, modelSlug);
  if (!vehicle) {
    const bySlug = getModel(make, modelSlug.replace(/-/g, ' '));
    if (!bySlug) return null;
    return {
      brandSlug: bySlug.brand,
      brandName: bySlug.brandName,
      model: bySlug.model,
      vehicleType: bySlug.vehicleType,
      modelSlug,
      yearRange: bySlug.yearRange,
      serviceId,
      path: buildModelServicePath(bySlug.brand, bySlug.model, serviceId),
    };
  }
  return {
    brandSlug: vehicle.brand,
    brandName: vehicle.brandName,
    model: vehicle.model,
    vehicleType: vehicle.vehicleType,
    modelSlug,
    yearRange: vehicle.yearRange,
    serviceId,
    path: buildModelServicePath(vehicle.brand, vehicle.model, serviceId),
  };
}

function resolveVehicle(make: string, modelSlug: string) {
  const models = require('@/lib/vehicleModels') as typeof import('@/lib/vehicleModels');
  const direct = models.getModelsByBrand(make).find(
    (m) => m.model.toLowerCase().replace(/[^a-z0-9]+/g, '-') === modelSlug,
  );
  return direct ?? models.getModel(make, modelSlug);
}

function buildDeepDive(ctx: ModelServiceContext & { yearRange: string; serviceId: string; path: string }): ModelDeepDiveContent | null {
  const template = SERVICE_TEMPLATES[ctx.serviceId];
  const catalog = getServiceCatalogEntry(ctx.serviceId);
  if (!template || !catalog) return null;

  const vLabel = vehicleLabel(ctx.vehicleType);
  const typeNote = template.typeNotes[ctx.vehicleType] ?? template.typeNotes.sedan ?? \`\${ctx.brandName} \${ctx.model} \${vLabel} service tailored to Colorado driving.\`;
  const failureSnippet = getBrandFailureSnippet(ctx.brandSlug, ctx.model);
  const catalogDesc = catalog.describe(ctx);

  const heroTitle = \`\${ctx.model} \${template.serviceName} in Englewood, CO\`;
  const heroDescription = \`\${ctx.brandName} \${ctx.model} (\${ctx.yearRange}) \${template.focus} — expert service at RKC Automotive with written estimates at \${LABOR_RATE} labor before any work begins. \${typeNote}\`;

  const realityParagraphs = [
    \`\${ctx.brandName} \${ctx.model} owners across Englewood, Littleton, and the south Denver metro depend on \${template.focus} to stay reliable through Colorado elevation changes, freeze-thaw cycles, and I-25 commuting. \${catalogDesc}\`,
    failureSnippet
      ? \`Platform note for \${ctx.brandName} drivers: \${failureSnippet} RKC inspects for these patterns during every \${ctx.model} \${template.serviceName.toLowerCase()} visit — not just the immediate symptom you came in for.\`
      : \`RKC posts \${LABOR_RATE} labor, delivers written estimates before teardown, and documents findings so \${ctx.model} owners know exactly what Colorado driving has worn — not what a salesperson guessed. \${LOCAL}\`,
    \`\${typeNote} Whether your \${ctx.model} is a daily Evans Ave commuter or a weekend I-70 hauler, we match parts and fluids to \${ctx.brandName} specifications and explain what failed, why it failed, and what prevents repeat repairs.\`,
  ];

  const symptoms: DeepDiveSymptomCard[] = [
    {
      icon: SYMPTOM_ICONS[0],
      title: \`Warning signs specific to \${ctx.model} \${template.serviceName.toLowerCase()}\`,
      body: \`Drivers bring \${ctx.brandName} \${ctx.model} vehicles to RKC when \${template.focus} symptoms appear under Colorado load — cold mornings on Federal Blvd, mountain grades on C-470, or stop-and-go heat on Santa Fe Drive. Early warning saves money: small leaks, faint noises, and dashboard hints become expensive failures when ignored through another ski season. We correlate your complaint with live data and physical inspection — not a generic code clear.\`,
      ...accentAt(0),
    },
    {
      icon: SYMPTOM_ICONS[1],
      title: 'Mileage, age, and severe-service intervals',
      body: \`\${ctx.model} (\${ctx.yearRange}) service intervals tighten when towing, idling in traffic, or parking outdoors in Englewood winters. Factory schedules assume mild climates — Colorado is severe service for cooling, brakes, batteries, and fluids. If your \${ctx.model} is past 60,000 miles without \${template.serviceName.toLowerCase()}, assume inspection is overdue until we verify records. RKC documents mileage at service for resale and warranty defense.\`,
      warning: template.warning,
      ...accentAt(1),
    },
    {
      icon: SYMPTOM_ICONS[2],
      title: 'Fluid condition, leaks, and heat cycling',
      body: \`Colorado temperature swings age fluids and seals faster than flatland driving. On the \${ctx.brandName} \${ctx.model}, degraded fluid shows up as shudder, delay, smell, or color change long before a dash warning. RKC inspects fluid level, color, and smell; pressure-tests cooling and hydraulic circuits where applicable; and recommends exchange or repair based on measurement — not mileage alone.\`,
      ...accentAt(2),
    },
    {
      icon: SYMPTOM_ICONS[3],
      title: 'Noise, vibration, and performance change',
      body: \`New vibration at highway speed, clicking on tight turns, or performance loss climbing Lookout Mountain often traces to \${template.focus} wear. \${ctx.brandName} \${ctx.model} \${vLabel}s mask problems until load increases — exactly when you need confidence on I-70. We road-test when safe, reproduce the symptom, and isolate the component before quoting parts.\`,
      ...accentAt(3),
    },
  ];

  const technicalCards: DeepDiveTechnicalCard[] = [
    {
      title: \`\${ctx.brandName} \${ctx.model} platform context (\${ctx.yearRange})\`,
      body: \`Every \${ctx.model} generation has known weak points in \${template.focus}. RKC matches service scope to your VIN era — not a one-size generic job. \${typeNote} We verify build date, equipment, and drivetrain before recommending parts.\`,
      ...accentAt(0),
    },
    {
      title: 'Colorado severe-service factors',
      body: \`Altitude reduces air density; cooling and combustion systems work harder. Freeze-thaw cycles crack plastics and stiffen rubber. Road salt accelerates undercarriage corrosion on \${ctx.model} brake and suspension hardware. RKC adjusts inspection depth and fluid choices for Front Range reality — not generic shop defaults.\`,
      ...accentAt(1),
    },
    {
      title: 'What deferred service costs',
      body: \`Skipping \${template.serviceName.toLowerCase()} on a \${ctx.brandName} \${ctx.model} turns maintainable wear into cascade failures: contaminated fluid destroys bearings, small leaks overheat engines, and minor codes become catalyst and module replacements. Preventive service at our Englewood shop costs a fraction of tow-plus-repair after a highway failure.\`,
      ...accentAt(2),
    },
    {
      title: 'How RKC diagnoses before quoting',
      body: \`We read manufacturer-specific data, measure wear items, and photograph findings. You approve a written estimate at \${LABOR_RATE} posted labor before major disassembly. No surprise line items when a stuck fastener adds time — we call first. \${LOCAL}\`,
      ...accentAt(3),
    },
  ];

  const processSteps: DeepDiveProcessStep[] = [
    {
      step: '01',
      title: 'Check-in & symptom documentation',
      body: \`We capture your \${ctx.model} complaint, mileage, and recent service history. For \${template.serviceName.toLowerCase()}, we note when symptoms appear — cold start, highway, towing, or idle — because \${ctx.brandName} faults are often load and temperature specific.\`,
    },
    {
      step: '02',
      title: 'Inspection & data scan',
      body: \`Technicians inspect \${template.focus} components and scan control modules for pending codes. Live data, pressure tests, and physical measurements come before parts recommendations.\`,
    },
    {
      step: '03',
      title: 'Written estimate & approval',
      body: \`You receive a line-item estimate with parts and \${LABOR_RATE} labor. We explain what is urgent versus monitor-only so \${ctx.model} owners control budget without gambling on highway reliability.\`,
    },
    {
      step: '04',
      title: 'Repair or service execution',
      body: \`RKC uses \${ctx.brandName}-spec fluids and quality parts. Service procedures follow factory torque and bleed specifications — critical for \${template.serviceName.toLowerCase()} on modern \${vLabel}s.\`,
    },
    {
      step: '05',
      title: 'Verification & road test',
      body: \`We verify proper operation, clear adaptations only when appropriate, and road-test your \${ctx.model} under real conditions. Documentation goes on your invoice for warranty and resale.\`,
    },
  ];

  const checklistGroups: DeepDiveChecklistGroup[] = [
    {
      category: \`\${template.serviceName} scope\`,
      items: [
        \`Inspect and service \${template.focus}\`,
        \`Document \${ctx.brandName} \${ctx.model} mileage and VIN era\`,
        \`Scan modules for pending and permanent codes\`,
        \`Road test when safe to verify symptom resolution\`,
        \`Reset maintenance indicators when applicable\`,
      ],
    },
    {
      category: 'Fluids & filters',
      items: [
        'Verify fluid type matches manufacturer specification',
        'Inspect for contamination, smell, and level',
        'Replace filters when service interval requires',
        'Bleed air from hydraulic circuits after service',
        'Dispose of waste fluids per Colorado regulations',
      ],
    },
    {
      category: 'Hardware & wear items',
      items: [
        'Measure wear components before recommending replacement',
        'Inspect seals, boots, and bushings while components are accessible',
        'Torque fasteners to factory specification',
        'Check related brackets and shields for corrosion',
        'Photograph findings for customer records',
      ],
    },
    {
      category: 'Colorado notes',
      items: [
        'Severe-service interval recommendation when towing or mountain driving',
        'Battery and charging system check when electrical load is high',
        'Tire and alignment quick check when suspension work is performed',
        'Pre-winter follow-up reminder when service is fall-season',
        'Written estimate retained for warranty and third-party records',
      ],
    },
  ];

  const faqItems: FAQItem[] = [
    {
      question: \`How much does \${ctx.model} \${template.serviceName.toLowerCase()} cost in Englewood?\`,
      answer: \`Cost depends on \${ctx.model} year, drivetrain, and what we find during inspection of \${template.focus}. RKC provides a written estimate at our posted \${LABOR_RATE} labor rate before major work. Typical \${ctx.brandName} \${ctx.model} \${template.serviceName.toLowerCase()} ranges vary with parts availability and severity — we quote your specific VIN, not a national average.\`,
    },
    {
      question: \`How often should I schedule \${template.serviceName.toLowerCase()} on a \${ctx.brandName} \${ctx.model}?\`,
      answer: \`Follow \${ctx.brandName} factory intervals for \${ctx.yearRange} \${ctx.model} models, then shorten them for Colorado severe service — towing, mountain grades, outdoor parking, and stop-and-go I-25 commuting. RKC prints the next recommended visit on your invoice.\`,
    },
    {
      question: \`What are common \${ctx.model} symptoms for \${template.serviceName.toLowerCase()}?\`,
      answer: \`Common signs include changes in noise, vibration, pedal feel, temperature, or dashboard warnings related to \${template.focus}. \${template.warning} Schedule diagnosis at our Englewood shop before the symptom strands you on a mountain corridor.\`,
    },
    {
      question: \`Do you use OEM or aftermarket parts on \${ctx.brandName} \${ctx.model}?\`,
      answer: \`RKC uses OEM or quality equivalent parts that meet \${ctx.brandName} specifications for \${template.serviceName.toLowerCase()}. We discuss options on your estimate so you can balance budget and longevity — especially for \${vLabel}s that tow or commute daily across the Denver metro.\`,
    },
    {
      question: \`Can I drive my \${ctx.model} before completing this service?\`,
      answer: \`It depends on severity. Some issues allow careful local driving; others — overheating, brake fade, flashing warnings — mean stop driving and call RKC. We triage your \${ctx.model} at check-in and tell you honestly whether it is safe for I-25 or should ride a flatbed.\`,
    },
    {
      question: \`Why choose RKC for \${ctx.model} service near Denver?\`,
      answer: \`\${LOCAL} We post \${LABOR_RATE} labor, provide written estimates, and explain \${ctx.brandName}-specific findings in plain language. Same-day openings are often available when parts are in stock.\`,
    },
    {
      question: \`Does Colorado weather affect \${ctx.model} \${template.serviceName.toLowerCase()}?\`,
      answer: \`Yes. Freeze-thaw cycles, altitude, and road salt accelerate wear on \${template.focus}. \${typeNote} Pre-winter and post-summer inspections catch fluid and seal issues that mild climates hide.\`,
    },
    {
      question: \`Do you provide a warranty on \${ctx.model} repairs?\`,
      answer: \`RKC stands behind qualified \${template.serviceName.toLowerCase()} with warranty terms discussed at estimate approval. We document parts and labor so you have recourse if a related issue appears — call \${BUSINESS.phone} with any follow-up concern.\`,
    },
  ];

  return {
    serviceId: ctx.serviceId,
    serviceName: template.serviceName,
    path: ctx.path,
    heroEyebrow: \`\${ctx.brandName} \${ctx.model} · Englewood, CO\`,
    heroTitle,
    heroDescription,
    primaryCtaLabel: \`Schedule \${ctx.model} Service\`,
    realityQuote: template.realityQuote,
    realityParagraphs,
    symptomsEyebrow: \`\${ctx.model} warning signs\`,
    symptomsTitle: \`Symptoms that mean your \${ctx.model} needs \${template.serviceName.toLowerCase()}\`,
    symptomsIntro: \`\${ctx.brandName} \${ctx.model} drivers across Englewood and the south Denver metro notice these patterns when \${template.focus} is overdue or failing — correlate them early, not after a tow.\`,
    symptoms,
    technicalEyebrow: 'Technical depth',
    technicalTitle: \`\${ctx.brandName} \${ctx.model} \${template.serviceName.toLowerCase()} — what matters in Colorado\`,
    technicalIntro: \`Model-specific context, severe-service wear, and what RKC measures before recommending parts on your \${ctx.yearRange} \${ctx.model}.\`,
    technicalCards,
    tableTitle: \`\${ctx.model} service quick reference\`,
    tableIntro: \`Use this table when scheduling \${template.serviceName.toLowerCase()} for your \${ctx.brandName} \${ctx.model} at RKC Automotive.\`,
    tableCaption: \`\${ctx.brandName} \${ctx.model} \${template.serviceName} reference\`,
    tableColumns: ['Area', 'What we inspect', 'Colorado note'],
    tableRows: [
      { label: 'Primary system', values: [template.focus.split(',')[0] ?? template.focus, 'Measure wear & fluid condition', 'Severe service shortens intervals'], highlight: 1 },
      { label: 'Related hardware', values: ['Seals, mounts, shields', 'Inspect while accessible', 'Salt and grit accelerate wear'] },
      { label: 'Diagnostics', values: ['Manufacturer scan data', 'Pending codes & live data', 'Altitude affects fuel trim'] },
      { label: 'Documentation', values: ['Written estimate', 'Photos when findings are visual', 'Invoice for warranty/resale'] },
      { label: 'Follow-up', values: ['Next interval printed', 'Monitor items noted', 'Pre-winter re-check offered'] },
    ],
    processEyebrow: 'RKC workflow',
    processTitle: \`How we perform \${ctx.model} \${template.serviceName.toLowerCase()}\`,
    processIntro: \`Structured diagnosis, approval, and verification for \${ctx.brandName} \${ctx.model} — no parts cannon, no surprise labor.\`,
    processSteps,
    checklistEyebrow: 'Complete scope',
    checklistTitle: \`What we cover on \${ctx.model} \${template.serviceName.toLowerCase()}\`,
    checklistIntro: \`Inspection depth matches \${ctx.brandName} specifications and Colorado driving realities — not a express-lane fluid top-off.\`,
    checklistGroups,
    laborTitle: \`\${ctx.model} \${template.serviceName} pricing transparency\`,
    laborDescription: \`\${ctx.brandName} \${ctx.model} \${template.serviceName.toLowerCase()} is quoted at our posted \${LABOR_RATE} labor rate plus parts. Written estimate before major disassembly — always. Call \${BUSINESS.phone} or schedule online.\`,
    faqTitle: \`\${ctx.model} \${template.serviceName} questions\`,
    faqIntro: \`Common questions from \${ctx.brandName} \${ctx.model} owners in Englewood, Littleton, and the Denver metro.\`,
    faqItems,
    relatedServiceSlug: template.relatedServiceSlug,
    relatedTitle: \`Related \${ctx.model} services\`,
    serviceAreaLabel: \`\${ctx.model} \${template.serviceName.toLowerCase()}\`,
    finalCtaTitle: \`\${ctx.model} \${template.serviceName.toLowerCase()} in Englewood\`,
    finalCtaDescription: \`Call or schedule at RKC Automotive on Evans Ave. We service \${ctx.brandName} \${ctx.model} vehicles with honest estimates and \${ctx.brandName}-level expertise — without dealership wait times.\`,
    metaDescription: \`\${ctx.brandName} \${ctx.model} \${template.serviceName.toLowerCase()} in Englewood, CO. \${template.focus}. Written estimates, \${LABOR_RATE} labor. Call \${BUSINESS.phone}.\`,
    metaKeywords: \`\${ctx.model} \${template.serviceName} Englewood CO, \${ctx.brandName} \${ctx.model} repair Denver, \${ctx.model} mechanic Colorado\`,
  };
}

export function getModelDeepDiveContent(
  make: string,
  modelSlug: string,
  serviceSlug: string,
): ModelDeepDiveContent | null {
  const serviceId = parseServiceIdFromSlug(serviceSlug);
  if (!serviceId) return null;

  const vehicle = resolveVehicle(make, modelSlug);
  if (!vehicle) return null;

  const ctx = {
    brandSlug: vehicle.brand,
    brandName: vehicle.brandName,
    model: vehicle.model,
    vehicleType: vehicle.vehicleType,
    yearRange: vehicle.yearRange,
    serviceId,
    path: buildModelServicePath(vehicle.brand, vehicle.model, serviceId),
  };

  return buildDeepDive(ctx);
}
`;

fs.writeFileSync(outPath, output);
console.log(`Wrote ${outPath} (${SERVICES.length} service templates)`);
