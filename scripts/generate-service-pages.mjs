/**
 * Generates premium service pages (full rewrites).
 * Run: node scripts/generate-service-pages.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const og = {
  engineBay: '/images/engine-bay-teamwork.webp',
  classicLift: '/images/classic-car-lift.webp',
  techCloseup: '/images/shop-detail-01.webp',
  interior: '/images/shop-interior-bay.webp',
  teamInspect: '/images/shop-detail-03.webp',
  teamCollab: '/images/team-lift-collaboration.webp',
  engineRebuild: '/images/engine-rebuild-team.webp',
  teamCuevas: '/images/shop-detail-02.webp',
  brandedBay: '/images/shop-detail-06.webp',
  undercarriage: '/images/mechanic-undercarriage.webp',
};

const provider = `  provider: {
    '@type': 'AutomotiveBusiness',
    name: 'RKC Automotive',
    image: 'https://rkcautomotive.com/images/shop-exterior.webp',
    telephone: '+1-720-749-3965',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2120 W Evans Ave',
      addressLocality: 'Englewood',
      addressRegion: 'CO',
      postalCode: '80110',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '39.6711', longitude: '-105.0239' },
    url: 'https://rkcautomotive.com',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
  },`;

const pages = [
  {
    slug: 'engine-diagnostics-englewood-co',
    icon: 'Car',
    photo: 'engineBay',
    label: 'Engine Diagnostics',
    metaTitle: 'Engine Diagnostics & Repair in Englewood, CO | RKC Automotive',
    metaDesc: 'Expert engine diagnostics and repair in Englewood, CO. Advanced diagnostic equipment for all makes and models. Call (720) 749-3965 for engine service.',
    keywords: 'engine diagnostics Englewood CO, engine repair Denver, car diagnostics, check engine diagnosis',
    ogTitle: 'Engine Diagnostics in Englewood, CO | RKC Automotive',
    ogDesc: 'Advanced engine diagnostics and repair for all makes and models in Englewood.',
    serviceType: 'Engine Diagnostics and Repair',
    schemaDesc: 'Professional engine diagnostics and repair using advanced equipment for all makes and models in Englewood, CO.',
    title: 'Engine Diagnostics in Englewood, CO',
    description: 'Advanced diagnostics that find the real problem fast — then clear written estimates before repairs begin.',
    quickAnswer: 'Rough idle, power loss, or odd noises? We scan, test, and verify so you are not guessing — fee often applied toward approved repairs.',
    highlights: ['Advanced scan tools', 'Road-test verification', 'Honest repair plans'],
    h2: 'Find the problem. Fix it once.',
    p1: 'Modern engines are complex. At RKC Automotive in Englewood, our ASE-certified technicians use professional diagnostic equipment to identify issues accurately — from misfires and sensor faults to timing and fuel-delivery problems.',
    p2: 'We do not throw parts at codes. We verify the root cause, explain it in plain language, and provide a written estimate before any repair work starts. Serving Englewood, Denver, Littleton, and the nearby metro.',
    symptomsTitle: 'When to schedule engine diagnostics',
    symptoms: ['Loss of power or poor acceleration', 'Rough idle, stalling, or hard starts', 'Unusual noises from the engine bay', 'Poor fuel economy that appears suddenly', 'Check engine light or related warnings'],
    includesTitle: 'What diagnostics include',
    includes: ['Computer code scan and live data', 'Component and sensor testing', 'Visual inspection under the hood', 'Road test when appropriate', 'Clear next-step repair plan'],
    close: 'Whether you drive a daily commuter or a specialty vehicle, accurate diagnostics save time and money. Call (720) 749-3965 to schedule engine service at our W Evans Ave shop.',
  },
  {
    slug: 'transmission-services-englewood-co',
    icon: 'Cog',
    photo: 'classicLift',
    label: 'Transmission Services',
    metaTitle: 'Transmission Service & Repair in Englewood, CO | RKC Automotive',
    metaDesc: 'Expert transmission service and repair in Englewood, CO. Automatic and manual transmission repair, fluid service, and diagnostics. Call (720) 749-3965.',
    keywords: 'transmission repair Englewood CO, transmission fluid service Denver, automatic transmission',
    ogTitle: 'Transmission Service in Englewood, CO | RKC Automotive',
    ogDesc: 'Transmission diagnostics, fluid service, and repairs in Englewood.',
    serviceType: 'Transmission Service and Repair',
    schemaDesc: 'Transmission diagnostics, fluid service, and repair for automatic and manual transmissions in Englewood, CO.',
    title: 'Transmission Services in Englewood, CO',
    description: 'Fluid services, diagnostics, and repairs that protect one of the most expensive systems in your vehicle.',
    quickAnswer: 'Slipping, harsh shifts, or delayed engagement? Get a transmission inspection and estimate before a small issue becomes a rebuild.',
    highlights: ['Fluid & filter service', 'Shift quality diagnostics', 'Written estimates first'],
    h2: 'Smooth shifts start with honest service',
    p1: 'Transmission problems rarely fix themselves. RKC Automotive in Englewood provides transmission fluid service, diagnostics, and repair recommendations based on what your vehicle actually needs — not a one-size-fits-all upsell.',
    p2: 'Colorado stop-and-go traffic and mountain driving stress transmissions. Early fluid maintenance and accurate diagnosis can extend the life of the unit and prevent roadside failures.',
    symptomsTitle: 'Transmission warning signs',
    symptoms: ['Slipping between gears or delayed engagement', 'Harsh, jerky, or unpredictable shifts', 'Burning smell or dark transmission fluid', 'Whining, clunking, or buzzing noises', 'Transmission warning light or limp mode'],
    includesTitle: 'Transmission care we provide',
    includes: ['Fluid condition and level inspection', 'Transmission fluid service options', 'Diagnostic evaluation of shift quality', 'External leak inspection', 'Honest repair-vs-service guidance'],
    close: 'Call (720) 749-3965 for transmission service in Englewood. We explain findings clearly and never start work without your approval.',
  },
  {
    slug: 'suspension-steering-englewood-co',
    icon: 'Settings',
    photo: 'techCloseup',
    label: 'Suspension & Steering',
    metaTitle: 'Suspension & Steering Repair in Englewood, CO | RKC Automotive',
    metaDesc: 'Professional suspension and steering repair in Englewood, CO. Shocks, struts, ball joints, alignment, and steering system service. Call (720) 749-3965.',
    keywords: 'suspension repair Englewood CO, steering repair Denver, shocks struts ball joints',
    ogTitle: 'Suspension & Steering in Englewood, CO | RKC Automotive',
    ogDesc: 'Shocks, struts, ball joints, and steering repairs in Englewood.',
    serviceType: 'Suspension and Steering Repair',
    schemaDesc: 'Suspension and steering repair including shocks, struts, ball joints, and steering components in Englewood, CO.',
    title: 'Suspension & Steering in Englewood, CO',
    description: 'Restore ride quality and confident handling — shocks, struts, ball joints, and steering components done right.',
    quickAnswer: 'Clunks over bumps, wandering steering, or uneven tire wear usually point to worn suspension or steering parts — we inspect and quote before replacing.',
    highlights: ['Ride & handling focus', 'Safety-critical parts', 'Colorado-road ready'],
    h2: 'Handle Colorado roads with confidence',
    p1: 'Potholes, freeze-thaw cycles, and uneven pavement wear out shocks, struts, bushings, and ball joints. RKC Automotive diagnoses noise, wander, and tire wear issues with careful undercarriage inspection.',
    p2: 'We prioritize safety-critical components and explain what is worn versus what can wait — so you invest where it matters for ride quality and tire life.',
    symptomsTitle: 'Symptoms of worn suspension or steering',
    symptoms: ['Clunking or rattling over bumps', 'Nose dive or excessive bouncing', 'Steering wander or play in the wheel', 'Uneven or rapid tire wear', 'Vehicle leans or feels unstable in turns'],
    includesTitle: 'Suspension & steering services',
    includes: ['Shock and strut evaluation', 'Ball joint and control arm inspection', 'Tie rod and steering component checks', 'Bushing and mount assessment', 'Recommendations for alignment needs'],
    close: 'Schedule suspension or steering service at (720) 749-3965. Same-day openings are often available for common repairs.',
  },
  {
    slug: 'heating-ac-englewood-co',
    icon: 'Wind',
    photo: 'interior',
    label: 'Heating & AC',
    metaTitle: 'Auto AC Repair & Heating Service in Englewood, CO | RKC Automotive',
    metaDesc: 'Expert auto AC repair and heating service in Englewood, CO. AC recharge, compressor replacement, heater repair. Stay comfortable year-round. Call (720) 749-3965.',
    keywords: 'auto AC repair Englewood CO, car heater repair Denver, AC recharge',
    ogTitle: 'Heating & AC Service in Englewood, CO | RKC Automotive',
    ogDesc: 'Auto AC and heating diagnostics and repair in Englewood.',
    serviceType: 'Automotive Heating and Air Conditioning Service',
    schemaDesc: 'Auto AC repair, recharge, compressor service, and heating system repair in Englewood, CO.',
    title: 'Heating & AC in Englewood, CO',
    description: 'Stay comfortable through Colorado summers and winters with climate-control diagnostics and repair.',
    quickAnswer: 'Warm AC vents or weak cabin heat? We diagnose refrigerant, compressor, blend doors, and heater issues before recommending repairs.',
    highlights: ['AC performance testing', 'Heater system checks', 'Year-round comfort'],
    h2: 'Climate control that works when you need it',
    p1: 'Englewood summers demand strong air conditioning; winters demand reliable heat and defrost. RKC Automotive diagnoses AC and heating problems with proper testing — not just a quick recharge that masks a leak.',
    p2: 'From compressors and condensers to heater cores and blower motors, we identify the fault, quote clearly, and restore cabin comfort for daily drivers across the Denver metro.',
    symptomsTitle: 'Common heating & AC symptoms',
    symptoms: ['AC blows warm or loses cold air', 'Weak airflow from vents', 'Unusual smells when climate is on', 'Little or no cabin heat in winter', 'Foggy windows that will not clear'],
    includesTitle: 'Climate services we offer',
    includes: ['AC system performance testing', 'Refrigerant leak evaluation', 'Compressor and condenser service', 'Heater and coolant flow checks', 'Blower motor and cabin filter review'],
    close: 'Call (720) 749-3965 to schedule auto AC or heater service before extreme temperatures hit.',
  },
  {
    slug: 'electrical-system-englewood-co',
    icon: 'Zap',
    photo: 'teamInspect',
    label: 'Electrical System',
    metaTitle: 'Auto Electrical System Repair in Englewood, CO | RKC Automotive',
    metaDesc: 'Expert auto electrical repair in Englewood, CO. Battery, alternator, starter, wiring, and electrical diagnostics. Call (720) 749-3965 for reliable electrical service.',
    keywords: 'auto electrical repair Englewood CO, alternator starter Denver, car wiring',
    ogTitle: 'Electrical System Repair in Englewood, CO | RKC Automotive',
    ogDesc: 'Battery, alternator, starter, and electrical diagnostics in Englewood.',
    serviceType: 'Automotive Electrical System Repair',
    schemaDesc: 'Automotive electrical diagnostics and repair including alternator, starter, wiring, and charging systems in Englewood, CO.',
    title: 'Electrical System Repair in Englewood, CO',
    description: 'Charging issues, starters, wiring faults, and electrical quirks diagnosed with methodical testing.',
    quickAnswer: 'Dim lights, no-crank starts, or random warning lights often start in the charging or starter circuit — we test before replacing parts.',
    highlights: ['Charging system tests', 'Starter diagnostics', 'No parts-guessing'],
    h2: 'Electrical problems need proof, not guesswork',
    p1: 'Modern vehicles rely on dozens of sensors, modules, and power circuits. RKC Automotive traces electrical faults carefully — verifying batteries, alternators, starters, grounds, and wiring before recommending replacement.',
    p2: 'Intermittent issues are the hardest. We take the time to reproduce symptoms when possible and give you a written plan so you are not stuck swapping expensive parts hope-to-hope.',
    symptomsTitle: 'Electrical warning signs',
    symptoms: ['Slow crank or no-start conditions', 'Dim headlights or flickering interior lights', 'Battery or charging warning lights', 'Accessories cutting out unexpectedly', 'Burning smell or visible wire damage'],
    includesTitle: 'Electrical services',
    includes: ['Battery and charging system tests', 'Starter draw and engagement checks', 'Alternator output verification', 'Ground and connection inspection', 'Module and circuit diagnostics as needed'],
    close: 'Need electrical diagnostics in Englewood? Call (720) 749-3965 — we will get to the root cause.',
  },
  {
    slug: 'oil-changes-englewood-co',
    icon: 'Droplet',
    photo: 'teamCollab',
    label: 'Oil Changes',
    metaTitle: 'Oil Change Service in Englewood, CO | Quick & Affordable | RKC Automotive',
    metaDesc: 'Fast, affordable oil change service in Englewood, CO. Synthetic, conventional, and high-mileage oil. Fluid top-off included. Call (720) 749-3965 today.',
    keywords: 'oil change Englewood CO, synthetic oil change Denver, quick oil change',
    ogTitle: 'Oil Change Service in Englewood, CO | RKC Automotive',
    ogDesc: 'Conventional and synthetic oil changes with multi-point inspection.',
    serviceType: 'Oil Change Service',
    schemaDesc: 'Conventional, synthetic, and high-mileage oil change service with filter replacement in Englewood, CO.',
    title: 'Oil Changes in Englewood, CO',
    description: 'Conventional and synthetic oil service with filter replacement and a multi-point inspection.',
    quickAnswer: 'Regular oil changes are the cheapest way to protect your engine in Colorado heat, cold, and altitude — conventional from $49, synthetic from $79.',
    highlights: ['Filter included', 'Multi-point lookover', 'Fast, careful service'],
    h2: 'Simple maintenance that protects big repairs',
    p1: 'Fresh oil and a quality filter keep engines lubricated under Colorado temperature swings. At RKC Automotive we install the correct viscosity for your vehicle, replace the filter, and check other fluids while your car is in the bay.',
    p2: 'We are not a five-minute lube with endless upsells. You get makers-aware recommendations, a free multi-point inspection with service, and clear notes if something else needs attention.',
    symptomsTitle: 'It is time for an oil change when',
    symptoms: ['You are due by miles or months on the sticker', 'Oil looks dark or gritty on the dipstick', 'Oil life monitor indicates service needed', 'Engine is louder than usual at startup', 'You are prepping for a long trip or mountain drive'],
    includesTitle: 'What is included',
    includes: ['Drain and refill with correct oil type', 'New oil filter installation', 'Fluid and filter top-off checks', 'Tire pressure visual review', 'Multi-point inspection notes'],
    close: 'Walk in or call (720) 749-3965 for a fast oil change in Englewood — Mon–Fri 8–5, Sat 8–12.',
  },
  {
    slug: 'check-engine-light-englewood-co',
    icon: 'AlertCircle',
    photo: 'engineRebuild',
    label: 'Check Engine Light',
    metaTitle: 'Check Engine Light Diagnosis in Englewood, CO | RKC Automotive',
    metaDesc: 'Check engine light on? Expert diagnosis and repair in Englewood, CO. We find the real problem, not just the code. Call (720) 749-3965 today.',
    keywords: 'check engine light Englewood CO, CEL diagnosis Denver, OBD diagnostic',
    ogTitle: 'Check Engine Light Diagnosis in Englewood, CO',
    ogDesc: 'Real diagnosis beyond the code — Englewood check engine light experts.',
    serviceType: 'Check Engine Light Diagnosis',
    schemaDesc: 'Check engine light diagnosis and repair including code verification and root-cause testing in Englewood, CO.',
    title: 'Check Engine Light Diagnosis in Englewood, CO',
    description: 'We go beyond the code — verify the fault, explain the fix, and apply diagnostic fees toward approved repairs.',
    quickAnswer: 'Steady light? You can usually drive carefully to the shop. Flashing light? Reduce load and call us — a misfire can damage the catalytic converter quickly.',
    highlights: ['Code + verification', 'Emissions help', 'Fee credit toward repair'],
    h2: 'A light that deserves a real answer',
    p1: 'A check engine light can mean a loose gas cap — or a failing catalytic converter. RKC Automotive in Englewood retrieves codes, then performs follow-up testing so you are not paying for parts that will not clear the light.',
    p2: 'We help drivers pass emissions concerns, unravel intermittent faults, and prioritize safety when a flashing light signals an active misfire.',
    symptomsTitle: 'What the light may be telling you',
    symptoms: ['Steady check engine or service engine soon light', 'Flashing check engine light during driving', 'Failed or incomplete Colorado emissions readiness', 'Reduced power or limp-mode driving', 'Fuel smell, rough running, or poor MPG with the light on'],
    includesTitle: 'Our diagnostic approach',
    includes: ['OBD-II code retrieval and freeze-frame review', 'Live data and targeted component tests', 'Smoke or leak checks when relevant', 'Road test replication of the fault', 'Prioritized repair estimate'],
    close: 'Check engine light on in Englewood? Call (720) 749-3965 — diagnostics typically from $99 and often applied to the repair.',
  },
  {
    slug: 'battery-testing-englewood-co',
    icon: 'Battery',
    photo: 'teamCuevas',
    label: 'Battery Testing',
    metaTitle: 'Car Battery Testing & Replacement in Englewood, CO | RKC Automotive',
    metaDesc: "Free battery testing and professional battery replacement in Englewood, CO. Don't get stranded. Call (720) 749-3965 for battery service today.",
    keywords: 'battery testing Englewood CO, car battery replacement Denver, free battery test',
    ogTitle: 'Battery Testing & Replacement in Englewood, CO',
    ogDesc: 'Free battery testing and professional replacement at RKC Automotive.',
    serviceType: 'Battery Testing and Replacement',
    schemaDesc: 'Free battery testing and professional battery replacement service in Englewood, CO.',
    title: 'Battery Testing & Replacement in Englewood, CO',
    description: 'Free testing, charging-system checks, and quality replacements before a dead battery strands you.',
    quickAnswer: 'Slow starts in cold weather? Get a free battery test — we also check the alternator so you do not replace a battery that is being killed by a charging fault.',
    highlights: ['Free battery test', 'Charging system check', 'Quality replacements'],
    h2: 'Colorado cold is hard on batteries',
    p1: 'Altitude, cold mornings, and short trips shorten battery life. RKC Automotive offers free battery testing so you know where you stand before you are stuck in a parking lot.',
    p2: 'If replacement is needed, we install the correct group size and verify the charging system. No guesswork, no ignored alternator problems that would ruin a new battery.',
    symptomsTitle: 'Battery red flags',
    symptoms: ['Slow engine crank, especially when cold', 'Clicking sounds when starting', 'Electrical accessories acting weak', 'Battery older than 3–5 years', 'Corrosion on terminals or a swollen case'],
    includesTitle: 'Battery services',
    includes: ['Free load / health testing', 'Terminal and cable inspection', 'Alternator output verification', 'Correct-fit battery replacement', 'Post-install start and charge confirmation'],
    close: 'Stop by or call (720) 749-3965 for free battery testing at 2120 W Evans Ave in Englewood.',
  },
  {
    slug: 'exhaust-system-englewood-co',
    icon: 'Wind',
    iconAs: 'Exhaust',
    photo: 'undercarriage',
    label: 'Exhaust System',
    metaTitle: 'Exhaust System Repair in Englewood, CO | Muffler & Catalytic Converter | RKC Automotive',
    metaDesc: 'Expert exhaust system repair in Englewood, CO. Muffler, catalytic converter, pipes, and emissions repair. Call (720) 749-3965 for exhaust service.',
    keywords: 'exhaust repair Englewood CO, muffler replacement Denver, catalytic converter',
    ogTitle: 'Exhaust System Repair in Englewood, CO | RKC Automotive',
    ogDesc: 'Mufflers, pipes, catalytic converters, and emissions-related exhaust repair.',
    serviceType: 'Exhaust System Repair',
    schemaDesc: 'Exhaust system repair including mufflers, pipes, catalytic converters, and emissions-related repairs in Englewood, CO.',
    title: 'Exhaust System Repair in Englewood, CO',
    description: 'Quieter, safer, emissions-ready exhaust repairs — mufflers, pipes, and catalytic converters.',
    quickAnswer: 'Loud roar, rattles under the car, or sulfur smells? Exhaust leaks and failing mufflers or converters need inspection soon for safety and emissions.',
    highlights: ['Leak & hangar inspection', 'Muffler & pipe repair', 'Emissions support'],
    h2: 'Quiet, sealed, and roadworthy',
    p1: 'Exhaust systems rust, crack, and loosen — especially with Colorado roads and weather. RKC Automotive inspects hangers, flanges, mufflers, resonators, and catalytic converters, then quotes only what is needed.',
    p2: 'We help with noise complaints, underbody rattles, and emissions-related exhaust faults that keep check-engine lights or readiness monitors from cooperating.',
    symptomsTitle: 'Exhaust issues to watch for',
    symptoms: ['Louder than normal exhaust note', 'Rattling from under the vehicle', 'Visible rust holes or dangling parts', 'Exhaust smell in the cabin', 'Failed emissions related to exhaust components'],
    includesTitle: 'Exhaust services',
    includes: ['Full undercarriage exhaust inspection', 'Muffler and pipe repair or replacement', 'Catalytic converter diagnosis', 'Hanger and gasket service', 'Leak sealing and verification'],
    close: 'Schedule exhaust repair in Englewood at (720) 749-3965 — safe lifts, honest estimates, quality parts.',
  },
  {
    slug: 'preventative-maintenance-englewood-co',
    icon: 'ShieldCheck',
    photo: 'brandedBay',
    label: 'Preventative Maintenance',
    metaTitle: 'Preventative Maintenance in Englewood, CO | Keep Your Car Running | RKC Automotive',
    metaDesc: 'Comprehensive preventative maintenance in Englewood, CO. Regular service keeps your vehicle reliable and prevents expensive repairs. Call (720) 749-3965 today.',
    keywords: 'preventative maintenance Englewood CO, scheduled car maintenance Denver, vehicle service',
    ogTitle: 'Preventative Maintenance in Englewood, CO | RKC Automotive',
    ogDesc: 'Scheduled maintenance that prevents expensive surprises.',
    serviceType: 'Preventative Maintenance',
    schemaDesc: 'Comprehensive preventative maintenance and scheduled service for all makes and models in Englewood, CO.',
    title: 'Preventative Maintenance in Englewood, CO',
    description: 'Stay ahead of expensive repairs with scheduled service tailored to your vehicle and Colorado driving.',
    quickAnswer: 'Manufacturer intervals plus Colorado realities (heat, cold, altitude) — we follow recommend schedules and only flag what your car actually needs.',
    highlights: ['Factory-aware schedules', 'Multi-point inspections', 'Fewer surprises'],
    h2: 'Maintenance that protects your wallet',
    p1: 'Preventative maintenance is how 5,000+ vehicles stay reliable under RKC care. Oil, filters, fluids, belts, brakes, and batteries — we organize service around your mileage, age, and driving conditions.',
    p2: 'You leave with a clear report of what was done and what is coming due. No scare tactics. Just ASE-certified technicians keeping Englewood drivers road-ready.',
    symptomsTitle: 'Good times to book maintenance',
    symptoms: ['Approaching a mileage service interval', 'Changing seasons (summer heat / winter cold)', 'Before a long road trip', 'After buying a used vehicle', 'When multiple dashboard reminders appear'],
    includesTitle: 'Maintenance we commonly perform',
    includes: ['Oil and filter service', 'Cabin and engine air filters', 'Fluid flushes when due', 'Brake and battery inspections', 'Seasonal Colorado readiness checks'],
    close: 'Build a maintenance plan that fits your vehicle — call (720) 749-3965 or visit 2120 W Evans Ave.',
  },
];

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function gen(p) {
  const iconName = p.iconAs || p.icon;
  const iconImport = p.iconAs ? `${p.icon} as ${p.iconAs}` : p.icon;
  const highlights = p.highlights.map((h) => `'${esc(h)}'`).join(', ');
  const symptoms = p.symptoms.map((s) => `  '${esc(s)}',`).join('\n');
  const includes = p.includes.map((s) => `  '${esc(s)}',`).join('\n');

  return `import type { Metadata } from 'next';
import { CheckCircle, ${iconImport} } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';

export const metadata: Metadata = {
  title: '${esc(p.metaTitle)}',
  description: '${esc(p.metaDesc)}',
  keywords: '${esc(p.keywords)}',
  openGraph: {
    title: '${esc(p.ogTitle)}',
    description: '${esc(p.ogDesc)}',
    url: 'https://rkcautomotive.com/services/${p.slug}',
    type: 'website',
    images: [{
      url: '${og[p.photo]}',
      width: 1200,
      height: 630,
      alt: '${esc(p.label)} at RKC Automotive Englewood CO',
    }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: '${esc(p.serviceType)}',
${provider}
  areaServed: {
    '@type': 'City',
    name: 'Englewood',
    '@id': 'https://en.wikipedia.org/wiki/Englewood,_Colorado',
  },
  description: '${esc(p.schemaDesc)}',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
${symptoms}
];

const includes = [
${includes}
];

export default function Page() {
  return (
    <ServicePageShell
      title="${esc(p.title)}"
      description="${esc(p.description)}"
      icon={${iconName}}
      breadcrumbLabel="${esc(p.label)}"
      imageSrc={PHOTOS.${p.photo}}
      quickAnswer="${esc(p.quickAnswer)}"
      schemaJson={schema}
      highlights={[${highlights}]}
    >
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">${esc(p.h2)}</h2>
        <p className="text-lg leading-relaxed text-accent-gray">
          ${esc(p.p1)}
        </p>
        <p className="leading-relaxed text-accent-gray">
          ${esc(p.p2)}
        </p>
      </section>

      <section className="rounded-3xl bg-surface p-7 ring-1 ring-slate-200/70 sm:p-8">
        <h3 className="text-xl font-bold text-foreground">${esc(p.symptomsTitle)}</h3>
        <ul className="mt-5 space-y-3">
          {symptoms.map((s) => (
            <li key={s} className="flex items-start gap-3 text-accent-gray">
              <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary-green" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-foreground">${esc(p.includesTitle)}</h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200/80">
              <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary-green" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-accent-gray">
          ${esc(p.close)}
        </p>
      </section>
    </ServicePageShell>
  );
}
`;
}

for (const p of pages) {
  const out = path.join(root, 'app', 'services', p.slug, 'page.tsx');
  fs.writeFileSync(out, gen(p), 'utf8');
  console.log('Wrote', p.slug);
}
console.log('Done.');
