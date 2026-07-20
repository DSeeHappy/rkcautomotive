export type VehicleBrand = {
  name: string;
  slug: string;
  logoPath: string;
  color: string;
  /** Optional override for panel gradient base; defaults to `color` darkened with RKC navy */
  backgroundColor?: string;
  category: 'domestic' | 'import';
  commonModels: string[];
  services: string[];
  coloradoNotes: string;
  paragraphs: string[];
};

const PANEL_NAVY = '#0a0f1a';
const PANEL_NAVY_DEEP = '#060a12';

/** Dark brand-tinted gradient for premium tab panels (MyMolecule-style). */
export function getBrandPanelBackground(brand: Pick<VehicleBrand, 'color' | 'backgroundColor'>): string {
  const accent = brand.backgroundColor ?? brand.color;
  return [
    `linear-gradient(145deg,`,
    `color-mix(in srgb, ${accent} 52%, ${PANEL_NAVY}) 0%,`,
    `#0c1222 44%,`,
    `color-mix(in srgb, ${accent} 18%, ${PANEL_NAVY_DEEP}) 100%)`,
  ].join(' ');
}

/** Radial glow behind the watermark logo on the right edge. */
export function getBrandAccentGlow(brand: Pick<VehicleBrand, 'color' | 'backgroundColor'>): string {
  const accent = brand.backgroundColor ?? brand.color;
  return `radial-gradient(ellipse 72% 85% at 90% 48%, color-mix(in srgb, ${accent} 28%, transparent) 0%, transparent 68%)`;
}

export const VEHICLE_BRANDS: VehicleBrand[] = [
  {
    name: 'Toyota',
    slug: 'toyota',
    logoPath: '/images/brands/toyota.svg',
    color: '#EB0A1E',
    category: 'import',
    commonModels: ['Camry', 'RAV4', 'Tacoma', '4Runner', 'Highlander', 'Corolla', 'Prius'],
    services: ['Oil changes & factory maintenance', 'Brake repair & pad replacement', 'Check engine light diagnostics', 'Timing belt & water pump service', 'Hybrid battery system checks'],
    coloradoNotes:
      'Toyota trucks and SUVs are built for Colorado trails and winter driving. RKC handles Tacoma and 4Runner suspension wear, AWD system checks, and cold-start battery testing common after high-altitude winters in Englewood and the south Denver metro.',
    paragraphs: [
      'Toyota remains one of the most popular brands on Colorado roads — and RKC Automotive in Englewood services Camry sedans, RAV4 crossovers, Tacoma pickups, and 4Runner SUVs every week. Our technicians follow Toyota factory maintenance schedules, use quality parts, and explain every repair before work begins so you stay in control of your vehicle\'s care.',
      'Whether you need a routine oil change, brake pad replacement, or a check engine light diagnosed on your Highlander or Prius, RKC delivers dealer-level expertise without dealer-level pricing. We work on both gas and hybrid Toyota models, including battery cooling system checks and regenerative brake inspections that keep hybrid systems performing in Colorado\'s temperature swings.',
      'South Denver drivers trust RKC because we know Toyota\'s reputation for longevity — and we help you protect it. From Corolla daily drivers to Tacoma work trucks serving Littleton job sites, our Englewood shop keeps your Toyota reliable through mountain passes, winter commutes, and everything in between.',
    ],
  },
  {
    name: 'Honda',
    slug: 'honda',
    logoPath: '/images/brands/honda.svg',
    color: '#E40521',
    category: 'import',
    commonModels: ['Accord', 'Civic', 'CR-V', 'Pilot', 'Odyssey', 'HR-V', 'Ridgeline'],
    services: ['CVT transmission service', 'Brake & rotor replacement', 'A/C recharge & repair', 'Engine diagnostics', 'Suspension & steering repair'],
    coloradoNotes:
      'Honda CR-V and Pilot AWD systems see heavy use on I-25 and mountain corridor trips. RKC inspects differential fluids, tire wear patterns, and cooling systems that work harder at Denver\'s elevation.',
    paragraphs: [
      'Honda owners across Englewood, Littleton, and Aurora choose RKC Automotive for dependable service on Accord, Civic, CR-V, and Pilot models. Honda\'s reputation for reliability doesn\'t mean maintenance-free — and our team keeps your Honda running like new with honest recommendations and transparent pricing.',
      'From CVT fluid changes on a Civic to brake jobs on a family Odyssey minivan, RKC handles the full range of Honda repairs. Our diagnostic equipment reads Honda-specific fault codes, so check engine lights, transmission concerns, and A/C issues get resolved quickly — not guessed at.',
      'Colorado driving puts extra demand on Honda cooling systems, brakes, and AWD components. RKC\'s Englewood location makes it easy to drop off your HR-V or Ridgeline for seasonal maintenance before winter hits, keeping your Honda ready for daily commutes and weekend trips into the foothills.',
    ],
  },
  {
    name: 'Ford',
    slug: 'ford',
    logoPath: '/images/brands/ford.svg',
    color: '#002D72',
    category: 'domestic',
    commonModels: ['F-150', 'Explorer', 'Escape', 'Mustang', 'Bronco', 'Edge', 'Ranger'],
    services: ['Truck & SUV maintenance', 'EcoBoost engine diagnostics', '4WD & transfer case service', 'Brake & suspension repair', 'Fleet vehicle service'],
    coloradoNotes:
      'F-150 and Bronco owners across the Front Range depend on 4WD systems for snow and trail use. RKC services transfer cases, front hub assemblies, and turbocharged EcoBoost engines common in Colorado\'s altitude and temperature extremes.',
    paragraphs: [
      'Ford is the backbone of Colorado\'s truck culture, and RKC Automotive services F-150s, Rangers, Explorers, and Broncos from our Englewood shop daily. Whether you use your Ford for work around south Denver or weekend adventures, our technicians understand Ford\'s EcoBoost engines, 4WD systems, and heavy-duty brake requirements.',
      'RKC provides complete Ford maintenance — oil changes, transmission service, brake repairs, and advanced diagnostics for check engine lights and drivability issues. We service Mustang performance cars and Escape crossovers with the same attention to detail, using quality parts that meet or exceed OEM standards.',
      'Ford owners in Englewood, Highlands Ranch, and Aurora appreciate RKC\'s straightforward approach: clear estimates, no unnecessary upsells, and repairs done right the first time. From a Ranger\'s first oil change to an F-150\'s 100,000-mile service, we keep your Ford ready for Colorado roads.',
    ],
  },
  {
    name: 'Chevrolet',
    slug: 'chevrolet',
    logoPath: '/images/brands/chevrolet.svg',
    color: '#CD9834',
    category: 'domestic',
    commonModels: ['Silverado', 'Equinox', 'Traverse', 'Colorado', 'Malibu', 'Tahoe', 'Suburban'],
    services: ['Truck maintenance & repair', 'AFM/DFM engine diagnostics', 'Brake system overhaul', 'Electrical system repair', 'Cooling system service'],
    coloradoNotes:
      'Silverado and Colorado trucks towing boats and campers to mountain lakes need strong brakes and cooling. RKC performs brake flushes, transmission cooler inspections, and AFM lifter diagnostics common on GM V8 engines at altitude.',
    paragraphs: [
      'Chevrolet Silverados, Colorados, Equinox crossovers, and Tahoe SUVs roll through RKC Automotive\'s Englewood bays every day. Our team services the full Chevy lineup with expertise in GM\'s V8 engines, AFM cylinder deactivation systems, and the heavy-duty components that Colorado truck owners depend on.',
      'From routine maintenance on a Malibu sedan to complex diagnostics on a Traverse with a check engine light, RKC delivers honest, skilled Chevrolet service. We handle brake jobs, suspension repairs, A/C service, and electrical troubleshooting — keeping your Chevy dependable without dealership wait times or markups.',
      'Chevy drivers across south Denver trust RKC for transparent pricing and quality workmanship. Whether your Colorado pickup needs a transmission service before towing season or your Equinox needs winter-ready brakes, our Englewood shop has you covered.',
    ],
  },
  {
    name: 'BMW',
    slug: 'bmw',
    logoPath: '/images/brands/bmw.svg',
    color: '#0066B1',
    category: 'import',
    commonModels: ['3 Series', '5 Series', 'X3', 'X5', 'X1', 'M3', 'i4'],
    services: ['European import diagnostics', 'Oil service & inspections', 'Brake & rotor service', 'Cooling system repair', 'Suspension & steering work'],
    coloradoNotes:
      'BMW cooling systems and oil leaks are more common in Colorado\'s dry climate and temperature swings. RKC inspects water pumps, expansion tanks, and valve cover gaskets on X3 and 3 Series models before small issues become major repairs.',
    paragraphs: [
      'BMW owners in the Englewood and south Denver area choose RKC Automotive for European import service that respects both your vehicle and your budget. We service 3 Series sedans, X3 and X5 SAVs, and performance M models with the specialized knowledge these precision machines require.',
      'RKC handles BMW oil services, brake repairs, cooling system work, and advanced diagnostics using professional-grade equipment. Check engine lights, rough idle, and suspension wear are diagnosed accurately — not replaced blindly — so you know exactly what your BMW needs and why.',
      'Colorado\'s elevation and temperature extremes test BMW cooling and electrical systems harder than milder climates. RKC\'s technicians understand these patterns and perform preventive maintenance that keeps your BMW performing on I-25 commutes and canyon road drives alike.',
    ],
  },
  {
    name: 'Mercedes-Benz',
    slug: 'mercedes',
    logoPath: '/images/brands/mercedes.svg',
    color: '#242424',
    category: 'import',
    commonModels: ['C-Class', 'E-Class', 'GLC', 'GLE', 'GLA', 'S-Class', 'Sprinter'],
    services: ['Mercedes-Benz diagnostics', 'A-Service & B-Service maintenance', 'Brake & rotor replacement', 'Air suspension repair', 'Electrical & module programming'],
    coloradoNotes:
      'Mercedes Airmatic suspension and 4MATIC AWD systems need seasonal attention in Colorado. RKC services air struts, transfer case fluids, and battery management systems that work harder in cold Englewood winters.',
    paragraphs: [
      'Mercedes-Benz vehicles demand specialized care, and RKC Automotive provides expert service for C-Class, E-Class, GLC, GLE, and Sprinter vans from our Englewood location. Our technicians understand Mercedes-Benz maintenance schedules, complex electrical systems, and the engineering that makes these vehicles exceptional.',
      'From A-Service and B-Service maintenance to brake repairs and air suspension diagnostics, RKC treats every Mercedes with precision. We use quality parts and professional diagnostic tools to resolve check engine lights, rough shifting, and warning messages — with clear communication at every step.',
      'Mercedes owners across Aurora, Littleton, and Denver\'s south metro choose RKC because we combine European import expertise with the honest, local service you expect from a neighborhood shop. Keep your Mercedes performing at its best through Colorado seasons without the dealership experience.',
    ],
  },
  {
    name: 'Audi',
    slug: 'audi',
    logoPath: '/images/brands/audi.svg',
    color: '#BB0A30',
    category: 'import',
    commonModels: ['A4', 'A6', 'Q5', 'Q7', 'Q3', 'e-tron', 'S4'],
    services: ['Audi quattro AWD service', 'Timing chain inspection', 'Brake & rotor service', 'Oil change & inspections', 'Electrical diagnostics'],
    coloradoNotes:
      'Audi quattro systems and turbocharged engines are ideal for Colorado winters but require proper fluid maintenance. RKC services Haldex coupling fluid, PCV systems, and carbon buildup prevention on TFSI engines common in stop-and-go I-25 traffic.',
    paragraphs: [
      'Audi\'s quattro all-wheel drive and turbocharged performance make these vehicles a natural fit for Colorado — and RKC Automotive in Englewood is equipped to service them properly. We work on A4 and A6 sedans, Q5 and Q7 SUVs, and e-tron electric models with the specialized tools and knowledge Audi requires.',
      'RKC provides complete Audi maintenance and repair: oil services, brake jobs, timing chain inspections, and advanced diagnostics for check engine lights and drivability concerns. Our technicians understand Audi\'s TFSI engines, DSG transmissions, and complex electrical modules.',
      'South Denver Audi owners trust RKC for European import service that\'s thorough, honest, and fairly priced. Whether your Q5 needs winter-ready brakes or your A4 has a warning light you can\'t ignore, our Englewood shop delivers dealer-quality results with a personal touch.',
    ],
  },
  {
    name: 'Nissan',
    slug: 'nissan',
    logoPath: '/images/brands/nissan.svg',
    color: '#C3002F',
    category: 'import',
    commonModels: ['Altima', 'Rogue', 'Sentra', 'Pathfinder', 'Frontier', 'Murano', 'Kicks'],
    services: ['CVT transmission service', 'Brake repair & replacement', 'Engine diagnostics', 'Suspension work', 'A/C system repair'],
    coloradoNotes:
      'Nissan CVT transmissions in Rogue and Altima models benefit from fluid changes before Colorado summer heat. RKC monitors CVT health, inspects CVT coolers, and addresses common sensor issues that trigger check engine lights at altitude.',
    paragraphs: [
      'Nissan Altima, Rogue, Sentra, and Frontier owners throughout Englewood and the south Denver metro rely on RKC Automotive for dependable service. We understand Nissan\'s CVT transmissions, VQ engines, and the maintenance schedules that keep these vehicles running strong for years.',
      'RKC handles everything from routine oil changes to CVT fluid services, brake repairs, and check engine light diagnostics on Nissan vehicles. Our team identifies issues early — worn suspension components, cooling system leaks, and sensor failures — before they turn into costly breakdowns.',
      'Colorado driving conditions test every vehicle, and Nissan\'s popular crossovers and trucks are no exception. RKC\'s Englewood shop provides the preventive care and honest repairs that keep your Pathfinder, Murano, or Frontier ready for daily commutes and mountain getaways.',
    ],
  },
  {
    name: 'Subaru',
    slug: 'subaru',
    logoPath: '/images/brands/subaru.svg',
    color: '#013C74',
    category: 'import',
    commonModels: ['Outback', 'Forester', 'Crosstrek', 'Impreza', 'Ascent', 'WRX', 'Legacy'],
    services: ['Subaru boxer engine service', 'Head gasket inspection', 'AWD system maintenance', 'Brake & suspension repair', 'Timing belt replacement'],
    coloradoNotes:
      'Subaru is practically the official car of Colorado — and RKC knows these AWD vehicles inside out. We inspect head gaskets on EJ and FB engines, service differentials before ski season, and check CVT fluids on Forester and Outback models driven daily in Englewood.',
    paragraphs: [
      'Subaru and Colorado go together — Outbacks, Foresters, and Crosstreks are everywhere in Englewood, Littleton, and the foothills communities RKC serves. Our technicians specialize in Subaru\'s boxer engines, symmetrical AWD systems, and the maintenance these adventure-ready vehicles need.',
      'RKC provides complete Subaru service: oil changes, timing belt replacements, head gasket inspections, brake jobs, and CVT fluid changes. We diagnose check engine lights and common Subaru issues with accuracy, so you get the repair you need — not a parts cannon approach.',
      'Whether your WRX needs performance-minded maintenance or your family Ascent needs winter-ready brakes and tires checked, RKC Automotive keeps your Subaru dependable for Colorado\'s roads, weather, and elevation. Local owners choose us for Subaru expertise they can trust.',
    ],
  },
  {
    name: 'Jeep',
    slug: 'jeep',
    logoPath: '/images/brands/jeep.svg',
    color: '#1B3B34',
    category: 'domestic',
    commonModels: ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Compass', 'Gladiator', 'Renegade', 'Wagoneer'],
    services: ['4WD & drivetrain service', 'Lift kit & suspension inspection', 'Brake & steering repair', 'Engine diagnostics', 'Off-road wear assessment'],
    coloradoNotes:
      'Jeep Wrangler and Gladiator owners use Colorado trails hard. RKC inspects Dana axles, U-joints, skid plates, and 4WD linkage wear after off-road seasons, plus heater core issues common in cold Englewood winters.',
    paragraphs: [
      'Jeep built its reputation on capability — and Colorado Jeep owners push that capability every weekend. RKC Automotive in Englewood services Wranglers, Grand Cherokees, Cherokees, and Gladiators with deep knowledge of 4WD systems, solid axles, and the wear patterns that come with trail use and daily driving.',
      'From routine maintenance on a Compass to drivetrain diagnostics on a Grand Cherokee with a check engine light, RKC handles Jeep repairs with honesty and skill. We inspect suspension components, brake systems, and 4WD transfer cases so your Jeep is ready for Red Rocks commutes and mountain trail runs alike.',
      'Jeep owners across south Denver choose RKC because we understand what these vehicles are built for — and what they need to stay reliable. Whether it\'s a Renegade city cruiser or a lifted Wrangler, our Englewood shop keeps your Jeep trail-ready and daily-drive dependable.',
    ],
  },
  {
    name: 'Ram',
    slug: 'ram',
    logoPath: '/images/brands/ram.svg',
    color: '#880033',
    category: 'domestic',
    commonModels: ['1500', '2500', '3500', 'ProMaster', 'ProMaster City', 'TRX', 'Rebel'],
    services: ['Diesel & gas truck service', 'Hemi engine diagnostics', 'Brake & suspension repair', 'Transmission service', 'Fleet & work truck maintenance'],
    coloradoNotes:
      'Ram 2500 and 3500 Cummins diesel trucks towing in the Rockies need strong cooling and brake systems. RKC services DEF systems, turbochargers, and rear differential fluids for heavy-duty Rams used on Colorado job sites and ranches.',
    paragraphs: [
      'Ram trucks are workhorses on Colorado job sites and highways, and RKC Automotive services Ram 1500, 2500, and 3500 pickups from our Englewood shop. Our technicians understand Hemi gas engines, Cummins diesel powertrains, and the heavy-duty brake and suspension systems these trucks require.',
      'RKC provides complete Ram maintenance and repair — oil changes, transmission service, brake overhauls, and advanced diagnostics for check engine lights and drivability issues. We also service ProMaster vans for local businesses that depend on their fleet running without downtime.',
      'Ram owners in Englewood, Aurora, and across south Denver trust RKC for truck service that\'s tough, honest, and fairly priced. From a 1500 daily driver to a 3500 dually hauling equipment through the mountains, we keep your Ram performing when it matters most.',
    ],
  },
  {
    name: 'Hyundai',
    slug: 'hyundai',
    logoPath: '/images/brands/hyundai.svg',
    color: '#002C5F',
    category: 'import',
    commonModels: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Palisade', 'Kona', 'Ioniq 5'],
    services: ['Factory scheduled maintenance', 'GDI engine carbon cleaning', 'Brake & rotor service', 'Hybrid & EV system checks', 'Engine diagnostics'],
    coloradoNotes:
      'Hyundai Tucson and Santa Fe AWD models are popular in the south Denver metro. RKC addresses GDI engine carbon buildup from short trips, inspects dual-clutch transmissions on performance models, and services Ioniq 5 battery cooling before summer heat.',
    paragraphs: [
      'Hyundai has earned a loyal following in Colorado with reliable, well-equipped vehicles — and RKC Automotive services Elantra, Sonata, Tucson, Santa Fe, and Palisade models every week from our Englewood location. Our team follows Hyundai maintenance schedules and uses quality parts for every repair.',
      'RKC handles routine oil changes, brake jobs, GDI engine maintenance, and check engine light diagnostics on all Hyundai models, including hybrid and electric Ioniq vehicles. We diagnose issues accurately and explain your options clearly, so you never feel pressured into unnecessary work.',
      'Hyundai owners across Littleton, Highlands Ranch, and Englewood choose RKC for dependable service at fair prices. Whether your Kona needs its first major service or your Santa Fe has a warning light on the dash, our shop delivers the care your Hyundai deserves.',
    ],
  },
  {
    name: 'Kia',
    slug: 'kia',
    logoPath: '/images/brands/kia.svg',
    color: '#BB162C',
    category: 'import',
    commonModels: ['Forte', 'K5', 'Sportage', 'Sorento', 'Telluride', 'Soul', 'EV6'],
    services: ['Scheduled maintenance', 'Brake & suspension repair', 'Engine & transmission diagnostics', 'Hybrid & EV service', 'A/C & heating repair'],
    coloradoNotes:
      'Kia Telluride and Sportage AWD crossovers handle Colorado winters well with proper maintenance. RKC services transfer case fluids, inspects Theta II engine components, and performs EV6 battery health checks for south Denver drivers.',
    paragraphs: [
      'Kia\'s growing lineup — from Forte and K5 sedans to Telluride and Sorento SUVs — is well represented in the Englewood area, and RKC Automotive is equipped to service them all. Our technicians understand Kia\'s engines, transmissions, and the factory maintenance that protects your warranty and your investment.',
      'RKC provides complete Kia service: oil changes, brake repairs, engine diagnostics, and hybrid/EV system checks on models like the EV6 and Niro. Check engine lights, rough shifting, and A/C issues are diagnosed with professional equipment and resolved with quality parts.',
      'Kia owners throughout south Denver appreciate RKC\'s straightforward approach to auto care. Whether you drive a Soul around town or a Telluride on family ski trips, our Englewood shop keeps your Kia reliable through every Colorado season.',
    ],
  },
  {
    name: 'Volkswagen',
    slug: 'volkswagen',
    logoPath: '/images/brands/volkswagen.svg',
    color: '#001E50',
    category: 'import',
    commonModels: ['Jetta', 'Passat', 'Tiguan', 'Atlas', 'Golf', 'ID.4', 'Taos'],
    services: ['European import diagnostics', 'TSI & TDI engine service', 'DSG transmission service', 'Brake & rotor replacement', 'Electrical system repair'],
    coloradoNotes:
      'Volkswagen TSI engines and DSG transmissions need specific service intervals in Colorado\'s climate. RKC performs carbon cleaning, water pump inspections, and 4MOTION AWD fluid changes on Tiguan and Atlas models before harsh winter conditions in Englewood.',
    paragraphs: [
      'Volkswagen combines German engineering with everyday practicality — and RKC Automotive in Englewood provides the specialized service VW owners need. We work on Jetta and Passat sedans, Tiguan and Atlas SUVs, and ID.4 electric models with the tools and knowledge these European vehicles require.',
      'RKC handles VW maintenance and repair including TSI engine service, DSG transmission fluid changes, brake jobs, and advanced diagnostics. Check engine lights, rough idle, and electrical issues are traced to their root cause — not masked with temporary fixes.',
      'Volkswagen drivers across the south Denver metro choose RKC for European import expertise without the dealership markup. From a Golf daily commuter to an Atlas hauling the family to the mountains, our Englewood shop keeps your VW performing at its best in Colorado conditions.',
    ],
  },

  {
    name: 'GMC',
    slug: 'gmc',
    logoPath: '/images/brands/gmc.svg',
    color: '#C41230',
    category: 'domestic',
    commonModels: [
      'Sierra 1500',
      'Yukon',
      'Terrain',
      'Acadia',
      'Canyon',
      'Sierra HD',
      'Yukon XL',
    ],
    services: [
      'Engine diagnostics & tune‑up',
      'Brake service & rotor resurfacing',
      'Transmission fluid exchange',
      'Suspension & steering inspection',
      'Oil change & filter replacement',
    ],
    coloradoNotes:
      'At our Englewood shop we understand Colorado’s high‑altitude driving and seasonal weather, so we tailor GMC maintenance to keep your truck or SUV performing reliably from mountain passes to city streets.',
    paragraphs: [
      'At RKC Englewood, our ASE‑certified technicians specialize in GMC vehicles, from the rugged Sierra 1500 and Canyon to the family‑friendly Yukon, Terrain, Acadia, and Sierra HD. We understand the unique demands of Colorado driving and keep your GMC performing at its best.',
      'Located on West Evans Avenue in Englewood, we’re proud to serve the local community with honest, transparent service that Colorado drivers trust. Whether you need routine maintenance or a complex repair, our shop is equipped to handle every GMC model with precision.',
      'Schedule your appointment today and experience the RKC Englewood difference — expert care, genuine parts, and a commitment to keeping your GMC ready for the road ahead.',
    ],
  },

  {
    name: 'Lexus',
    slug: 'lexus',
    logoPath: '/images/brands/lexus.svg',
    color: '#1A1A1A',
    category: 'import',
    commonModels: [
      'RX',
      'ES',
      'NX',
      'GX',
      'IS',
      'UX',
      'TX',
    ],
    services: [
      'Oil change & filter replacement',
      'Brake pad inspection & service',
      'Tire rotation & wheel alignment',
      'Battery health check & replacement',
      'Comprehensive multi-point inspection',
    ],
    coloradoNotes:
      'Lexus vehicles in Colorado benefit from regular coolant checks due to altitude‑related temperature swings and winter road salt. Keeping tires properly inflated and using winter‑grade oil helps maintain performance on mountain roads.',
    paragraphs: [
      'At RKC Automotive in Englewood, CO, our certified technicians specialize in Lexus service, from routine maintenance to complex repairs on models like the RX, ES, and NX. We use factory‑approved parts and diagnostic tools to keep your luxury vehicle performing at its best. Trust our Englewood shop for reliable, Lexus‑focused care.',
      'Drivers of the Lexus GX, IS, UX, and TX know they can count on RKC Automotive’s Englewood location for expert attention to every detail. Our team stays current with Lexus technical bulletins and offers services ranging from oil changes to transmission work. Experience the peace of mind that comes with a shop that understands your Lexus.',
      'Located conveniently in Englewood, CO, RKC Automotive provides comprehensive Lexus care tailored to models such as the RX, ES, NX, GX, IS, UX, and TX. We prioritize transparent communication, competitive pricing, and timely service to keep you on the road with confidence. Choose our Englewood shop for Lexus expertise you can rely on.',
    ],
  },

  {
    name: 'Acura',
    slug: 'acura',
    logoPath: '/images/brands/acura.svg',
    color: '#000000',
    category: 'import',
    commonModels: [
      'MDX',
      'TLX',
      'RDX',
      'Integra',
      'TLX Type S',
      'MDX Type S',
      'ZDX',
    ],
    services: [
      'Oil and filter change with synthetic blend',
      'Brake inspection and pad replacement',
      'Tire rotation and wheel alignment',
      'Transmission fluid flush and filter change',
      'Multi-point vehicle inspection',
    ],
    coloradoNotes:
      'At Colorado\'s high altitude, Acura engines may run leaner; regular tuning and using the correct octane fuel helps maintain performance. Winter road salt and freeze‑thaw cycles increase corrosion risk, so undercarriage washing and rust protection are recommended.',
    paragraphs: [
      'At RKC Automotive in Englewood, CO, we specialize in Acura service and repair, covering models from the MDX to the TLX Type S. Our certified technicians use factory‑grade tools to keep your Acura running smoothly.',
      'Whether you drive an RDX, Integra, or the high‑performance ZDX, our Englewood shop offers comprehensive diagnostics, maintenance, and performance upgrades tailored to each Acura model. Trust us to preserve the luxury and reliability you expect.',
      'From routine oil changes to complex engine work on the MDX Type S and TLX Type S, RKC Automotive’s Englewood location delivers prompt, transparent service with a focus on customer satisfaction. Experience Acura care that keeps you ahead on Colorado roads.',
    ],
  },

  {
    name: 'Tesla',
    slug: 'tesla',
    logoPath: '/images/brands/tesla.svg',
    color: '#CC0000',
    category: 'domestic',
    commonModels: [
      'Model 3',
      'Model Y',
      'Model S',
      'Model X',
      'Cybertruck',
    ],
    services: [
      'Battery health diagnostics',
      'Over‑the‑air software update',
      'Brake pad and rotor inspection',
      'Tire rotation and alignment',
      'Charging system and connector check',
    ],
    coloradoNotes:
      'Tesla batteries can experience reduced range in Colorado’s high altitude and cold winters; regular thermal management checks help maintain performance. Also, road salt and gravel can accelerate wear on brakes and undercarriage components, so frequent inspections are recommended.',
    paragraphs: [
      'RKC Automotive in Englewood, CO provides expert Tesla service for all current models, including the Model 3, Model Y, Model S, Model X, and the innovative Cybertruck. Our ASE‑certified technicians use factory‑approved tools and genuine Tesla parts to ensure every repair meets the highest standards.',
      'Located conveniently in Englewood, our shop offers fast diagnostics, software updates, and routine maintenance tailored to each Tesla vehicle’s unique electric drivetrain. We understand the importance of keeping your Tesla running efficiently and safely on Colorado roads.',
      'At RKC Automotive Englewood, customer satisfaction drives everything we do—from transparent pricing to flexible appointment scheduling. Trust our experienced team to keep your Tesla performing at peak condition, whether you drive a Model 3 or the futuristic Cybertruck.',
    ],
  },

  {
    name: 'Alfa Romeo',
    slug: 'alfa-romeo',
    logoPath: '/images/brands/alfa-romeo.svg',
    color: '#981E32',
    category: 'import',
    commonModels: [
      'Giulia',
      'Stelvio',
      'Tonale',
    ],
    services: [
      'Oil change with synthetic blend',
      'Brake pad replacement and rotor inspection',
      'Wheel alignment and suspension check',
      'Engine diagnostic scan and ECU update',
      'Tire rotation, balancing, and pressure adjustment',
    ],
    coloradoNotes:
      'At Colorado\'s higher altitude, Alfa Romeo engines may run leaner; we adjust fuel mixtures during service. Winter driving demands proper tire tread and coolant protection, which we verify for Giulia, Stelvio, and Tonale models.',
    paragraphs: [
      'At RKC Automotive in Englewood, CO, we specialize in Alfa Romeo service, offering expert care for the Giulia, Stelvio, and Tonale. Our ASE‑certified technicians use factory‑grade tools to keep your Italian performance sedan or SUV running at peak efficiency. Trust us to deliver the precision and passion your Alfa deserves.',
      'Englewood drivers choose RKC Automotive for Alfa Romeo maintenance because we combine local convenience with world‑class expertise. From routine oil changes on the Giulia to advanced diagnostics on the Stelvio and Tonale, we tailor every service to your vehicle’s specific needs. Experience transparent pricing and a commitment to keeping your Alfa on the road longer.',
      'When your Alfa Romeo needs repair or performance tuning in Englewood, CO, RKC Automotive is the go‑to shop for genuine parts and skilled craftsmanship. We understand the unique engineering of the Giulia, Stelvio, and Tonale, ensuring each repair restores the thrill of driving. Schedule your appointment today and feel the difference of expert Alfa Romeo care.',
    ],
  },
];

export function getBrandBySlug(slug: string): VehicleBrand | undefined {
  return VEHICLE_BRANDS.find((brand) => brand.slug === slug);
}

export function getBrandByName(name: string): VehicleBrand | undefined {
  return VEHICLE_BRANDS.find((brand) => brand.name === name);
}

/** Logo meta for category pills (includes makes outside the featured VEHICLE_BRANDS set). */
export type CategoryBrandLogo = {
  name: string;
  slug: string;
  color: string;
  /** True when the make has a BrandTabs / featured panel on this page */
  featured: boolean;
  /** Override mask asset path (defaults to `/images/brands/{slug}.svg`) */
  logoPath?: string;
};

const CATEGORY_BRAND_LOGOS: CategoryBrandLogo[] = [
  // Domestic
  { name: 'Ford', slug: 'ford', color: '#002D72', featured: true },
  { name: 'Chevrolet', slug: 'chevrolet', color: '#CD9834', featured: true },
  { name: 'GMC', slug: 'gmc', color: '#C41230', featured: true },
  { name: 'Ram', slug: 'ram', color: '#880033', featured: true },
  { name: 'Jeep', slug: 'jeep', color: '#1B3B34', featured: true },
  { name: 'Chrysler', slug: 'chrysler', color: '#1A1A1A', featured: false },
  { name: 'Dodge', slug: 'dodge', color: '#BA0C2F', featured: false, logoPath: '/images/brands/dodge.svg' },
  { name: 'Lincoln', slug: 'lincoln', color: '#1C1C1C', featured: false, logoPath: '/images/brands/lincoln.svg' },
  { name: 'Cadillac', slug: 'cadillac', color: '#A39161', featured: false },
  { name: 'Buick', slug: 'buick', color: '#C8102E', featured: false, logoPath: '/images/brands/buick.svg' },
  { name: 'Tesla', slug: 'tesla', color: '#CC0000', featured: true },
  // Import / Asian
  { name: 'Toyota', slug: 'toyota', color: '#EB0A1E', featured: true },
  { name: 'Honda', slug: 'honda', color: '#E40521', featured: true },
  { name: 'Nissan', slug: 'nissan', color: '#C3002F', featured: true },
  { name: 'Subaru', slug: 'subaru', color: '#013C74', featured: true },
  { name: 'Mazda', slug: 'mazda', color: '#101010', featured: false },
  { name: 'Hyundai', slug: 'hyundai', color: '#002C5F', featured: true },
  { name: 'Kia', slug: 'kia', color: '#BB162C', featured: true },
  { name: 'Mitsubishi', slug: 'mitsubishi', color: '#E60012', featured: false },
  { name: 'Acura', slug: 'acura', color: '#000000', featured: true },
  { name: 'Lexus', slug: 'lexus', color: '#1A1A1A', featured: true, logoPath: '/images/brands/lexus.svg' },
  // European
  { name: 'BMW', slug: 'bmw', color: '#0066B1', featured: true },
  { name: 'Mercedes-Benz', slug: 'mercedes', color: '#242424', featured: true },
  { name: 'Audi', slug: 'audi', color: '#BB0A30', featured: true },
  { name: 'Volkswagen', slug: 'volkswagen', color: '#001E50', featured: true },
  { name: 'Alfa Romeo', slug: 'alfa-romeo', color: '#981E32', featured: true },
  { name: 'Volvo', slug: 'volvo', color: '#003057', featured: false },
  { name: 'Land Rover', slug: 'land-rover', color: '#005A2B', featured: false },
  { name: 'Porsche', slug: 'porsche', color: '#1A1A1A', featured: false },
  { name: 'Mini', slug: 'mini', color: '#000000', featured: false },
];

export function getCategoryBrandLogo(name: string): CategoryBrandLogo | undefined {
  return CATEGORY_BRAND_LOGOS.find((brand) => brand.name === name);
}
