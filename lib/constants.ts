import {
  Disc,
  Car,
  Cog,
  Settings,
  Wind,
  Zap,
  Droplet,
  AlertCircle,
  Battery,
  Wind as Exhaust,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { PHOTOS, SERVICE_PHOTOS } from './photos';

export { PHOTOS, SERVICE_PHOTOS };

export const GOOGLE_REVIEWS_URL = 'https://share.google/i1wZ38efUAtcyUqnp';
export const FACEBOOK_URL = 'https://www.facebook.com/RKCAutomotive/';
export const INSTAGRAM_URL = 'https://www.instagram.com/rkcautomotive/';
export const YAHOO_LOCAL_URL = 'https://local.yahoo.com/info-235125355-rkc-automotive-englewood/';

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: FACEBOOK_URL, label: 'Facebook' },
  { name: 'Instagram', href: INSTAGRAM_URL, label: 'Instagram' },
] as const;

export const DIRECTORY_LINKS = [
  { name: 'Google Reviews', href: GOOGLE_REVIEWS_URL, label: 'Google reviews' },
  { name: 'Yahoo Local', href: YAHOO_LOCAL_URL, label: 'Yahoo Local' },
] as const;

export const BUSINESS = {
  name: 'RKC Automotive',
  phone: '(720) 749-3965',
  phoneHref: 'tel:+17207493965',
  email: 'info@rkcautomotive.com',
  address: {
    street: '2120 W Evans Ave',
    city: 'Englewood',
    state: 'CO',
    zip: '80110',
    full: '2120 W Evans Ave, Englewood, CO 80110',
  },
  directionsUrl: 'https://share.google/hRQ6WsLJdoo0DwUlu',
  textHref: 'sms:+17207493965',
  website: 'https://www.rkcautomotive.com',
  hours: {
    weekdays: 'Mon–Fri: 8:00 AM – 6:00 PM',
    saturday: 'Sat: 8:00 AM – 12:00 PM',
    sunday: 'Sun: Closed',
  },
  yearsExperience: 30,
  vehiclesServiced: '5,000+',
  serviceCategories: 11,
  tagline: 'ASE Certified · Englewood, CO · Hablamos Español',
  shortDescription:
    'Trusted automotive services — engine and auto repair for every make, model, and year. Serving Englewood and the Denver metro.',
  facebookReviewCount: 3,
} as const;

export const OPENING_HOURS_SCHEMA = [
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
] as const;

export type VerifiedReview = {
  quote: string;
  author: string;
  rating?: number;
  source: 'Google Review' | 'Facebook' | 'Yahoo';
  sourceUrl: string;
};

/** Real customer reviews verified from public listings (Google via localitybiz mirror, Facebook). */
export const VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    quote:
      'RKC Automotive saved me thousands! Another shop told me I need a new engine for about 11,000, but RKC found the real issue and fixed it for only 3,200. My GMC Yukon runs great now. Honest, Skilled, and trustworthy-Highly recommend!',
    author: 'T.s Robert',
    rating: 5,
    source: 'Google Review',
    sourceUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      "Ray is an Honest, trustworthy person who knows his cars. Very pleasant and polite person. And he will work with low income families. Doesn't overcharge!",
    author: 'Christine Rivero',
    rating: 5,
    source: 'Google Review',
    sourceUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      "I finally feel like I have a reliable mechanic that doesn't cut corners and is transparent with costs. Oscar has helped me with a couple of company vehicles and personal vehicles. Shout out to the RKC team for taking care of us. I highly recommend them for any repair needs.",
    author: 'Anthony Guerra',
    rating: 5,
    source: 'Google Review',
    sourceUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      'Truly a GREAT shop. The owner, mechanics, employees were busy, but treated my walk-in as a regular customer. I brought my car into the shop on a Friday afternoon. Ray and his mechanics had my car fixed within a couple of hours, even as busy as they were. Great prices and great work done. Everyone was very kind, professional, friendly, and helpful. Highly recommend!',
    author: 'Cassie Holderman',
    rating: 5,
    source: 'Google Review',
    sourceUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      "I've been coming to RKC Automotive in Englewood for a while now, and I can't say enough good things about them. They are such good people with genuinely good hearts. Every time I've had car trouble, they've helped me out—always honest, kind, and super understanding, especially knowing I'm a student on a budget. They always offer affordable prices and never try to upsell me on things I don't need. It's rare to find a shop you can truly trust, and I feel so grateful to have found them. Highly recommend to anyone looking for reliable and caring mechanics!",
    author: 'Ly Trần',
    rating: 5,
    source: 'Google Review',
    sourceUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      "Ray is the man! He has help me numerous times and we couldn't more happier with the service and prices.",
    author: 'Jay Fher',
    rating: 5,
    source: 'Google Review',
    sourceUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      "Ray and his entire crew are the absolute best! I wouldn't take my car anywhere else. Amazing customer service and they have the best dogs ever! Don't forget to say hi to Indy and Diesel!",
    author: 'Tyler Stitt',
    rating: 5,
    source: 'Google Review',
    sourceUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote: 'Fantastic, super friendly and they fixed my car quickly!',
    author: 'Heather Fritts',
    rating: 5,
    source: 'Google Review',
    sourceUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      'Quality and integrity, I highly recommend! Stand behind their work and have fair prices.',
    author: 'Ann Symalla',
    rating: 5,
    source: 'Google Review',
    sourceUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      'Ray quality of work is not only amazing but his integrity backs up anything he does. If you need work done I highly recommend RKC',
    author: 'Kalena Rodriguez',
    rating: 5,
    source: 'Google Review',
    sourceUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      'WOW!!! BEST PLACE TO GO FOR ANY & ALL OF YOUR MECHANIC NEEDS, PERIOD!!! UNICO LUGAR DONDE IRE, EN COLORADO! Y PUNTO. LOS RECOMENDO AL 💯',
    author: 'Violet Zavala',
    rating: 5,
    source: 'Facebook',
    sourceUrl: FACEBOOK_URL,
  },
];

/** Verified reviews rated 4–5 stars only — used for homepage rotation and public display. */
export const VERIFIED_REVIEWS_4_PLUS = VERIFIED_REVIEWS.filter(
  (review): review is VerifiedReview & { rating: number } =>
    review.rating !== undefined && review.rating >= 4,
);

export { SERVICE_AREAS, SERVICE_AREAS_DATA } from './serviceAreas';
export type { ServiceArea } from './serviceAreas';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Areas', href: '/areas-we-serve' },
  { name: 'Vehicles', href: '/vehicles-we-service' },
  { name: 'Extended Warranty', href: '/warranty' },
] as const;

export const FOOTER_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Extended Warranty', href: '/warranty' },
  { name: 'Areas We Serve', href: '/areas-we-serve' },
  { name: 'Vehicles We Service', href: '/vehicles-we-service' },
  { name: 'Location', href: '/englewood-co-auto-repair' },
  { name: 'FAQ', href: '/frequently-asked-questions' },
  { name: 'All Services', href: '/services' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
] as const;

export const WARRANTY_PEACE_OF_MIND = [
  {
    title: 'Quality parts',
    description: 'We source reliable parts for every repair and explain what goes on your vehicle before we order.',
  },
  {
    title: 'Written estimates',
    description: 'Every job starts with a clear written estimate — no surprise charges after work begins.',
  },
  {
    title: 'Your approval first',
    description: 'We diagnose, explain what is urgent vs. what can wait, and only proceed after you approve the scope.',
  },
  {
    title: 'Repair warranty options',
    description:
      'Repairs include warranty coverage on parts and labor — terms vary by service and we explain specifics on your estimate.',
  },
] as const;

export type WarrantyProvider = {
  name: string;
  slug: string;
  logo: string | null;
  claimsUrl: string;
};

export const WARRANTY_PROVIDERS: WarrantyProvider[] = [
  {
    name: 'Endurance',
    slug: 'endurance',
    logo: '/warranty-logos/endurance.png',
    claimsUrl: 'https://www.endurancewarranty.com/customer-portal/',
  },
  {
    name: 'CARCHEX',
    slug: 'carchex',
    logo: '/warranty-logos/carchex.png',
    claimsUrl: 'https://www.carchex.com/warranty-claims/',
  },
  {
    name: 'CarShield',
    slug: 'carshield',
    logo: '/warranty-logos/carshield.png',
    claimsUrl: 'https://www.carshield.com/file-a-claim/',
  },
  {
    name: 'American Auto Shield',
    slug: 'american-auto-shield',
    logo: '/warranty-logos/american-auto-shield.png',
    claimsUrl: 'https://www.americanautoshield.com/claims/',
  },
  {
    name: 'Royal Administration Services',
    slug: 'royal-administration',
    logo: '/warranty-logos/royal-administration.png',
    claimsUrl: 'https://www.royaladmin.com/repair-facilities/',
  },
  {
    name: 'autopom!',
    slug: 'autopom',
    logo: '/warranty-logos/autopom.png',
    claimsUrl: 'https://www.extended-vehicle-warranty.com/claims/',
  },
  {
    name: 'Olive',
    slug: 'olive',
    logo: '/warranty-logos/olive.png',
    claimsUrl: 'https://www.witholive.com/claims',
  },
  {
    name: 'Omega Auto Care',
    slug: 'omega-auto-care',
    logo: '/warranty-logos/omega-auto-care.png',
    claimsUrl: 'https://www.omegaautocare.com/claims/',
  },
  {
    name: 'Zurich North America',
    slug: 'zurich',
    logo: '/warranty-logos/zurich.png',
    claimsUrl: 'https://www.zurichna.com/en/industry-solutions/financial-services/vehicle-service-contracts',
  },
  {
    name: 'American Guardian',
    slug: 'american-guardian',
    logo: '/warranty-logos/american-guardian.png',
    claimsUrl: 'https://www.agws.com/claims/',
  },
  {
    name: 'Concord Auto Protect',
    slug: 'concord-auto-protect',
    logo: '/warranty-logos/concord-auto-protect.png',
    claimsUrl: 'https://www.concordautoprotect.com/claims/',
  },
  {
    name: 'CarGuard Administration',
    slug: 'carguard',
    logo: '/warranty-logos/carguard.png',
    claimsUrl: 'https://www.carguardadmin.com/repair-facilities/',
  },
  {
    name: 'Toco Warranty',
    slug: 'toco',
    logo: '/warranty-logos/toco.png',
    claimsUrl: 'https://www.tocowarranty.com/claims/',
  },
  {
    name: 'Continental Warranty',
    slug: 'continental',
    logo: '/warranty-logos/continental.png',
    claimsUrl: 'https://www.continentalwarranty.org/claims/',
  },
  {
    name: 'Allstate Car Care',
    slug: 'allstate-car-care',
    logo: '/warranty-logos/allstate-car-care.png',
    claimsUrl: 'https://www.allstatecarcare.com/claims/',
  },
  {
    name: 'Aegis Accountability',
    slug: 'aegis',
    logo: '/warranty-logos/aegis.png',
    claimsUrl: 'https://aegisadmin.com/repair-facility/',
  },
  {
    name: 'GWC Warranty',
    slug: 'gwc',
    logo: '/warranty-logos/gwc.png',
    claimsUrl: 'https://www.gwcwarranty.com/repair-facility/',
  },
  {
    name: 'EasyCare',
    slug: 'easycare',
    logo: '/warranty-logos/easycare.png',
    claimsUrl: 'https://easycare.com/repair-facilities/',
  },
  {
    name: 'Matrix Warranty Solutions',
    slug: 'matrix',
    logo: '/warranty-logos/matrix.png',
    claimsUrl: 'https://matrixwarranty.com/repair-facilities/',
  },
  {
    name: 'United Auto Defense',
    slug: 'united-auto-defense',
    logo: '/warranty-logos/united-auto-defense.png',
    claimsUrl: 'https://unitedautodefense.com/claims/',
  },
  {
    name: 'National Vehicle Protection',
    slug: 'nvp',
    logo: '/warranty-logos/nvp.png',
    claimsUrl: 'https://www.nvpcservices.com/repair-facilities/',
  },
  {
    name: 'Protect My Car',
    slug: 'protect-my-car',
    logo: '/warranty-logos/protect-my-car.png',
    claimsUrl: 'https://protectmycar.com/file-a-claim/',
  },
  {
    name: 'Liberty Bell Auto Protect',
    slug: 'liberty-bell',
    logo: '/warranty-logos/liberty-bell.png',
    claimsUrl: 'https://www.libertybellautoprotect.com/claims/',
  },
  {
    name: 'Select Auto Protect',
    slug: 'select-auto-protect',
    logo: '/warranty-logos/select-auto-protect.png',
    claimsUrl: 'https://selectautoprotect.com/claims/',
  },
  {
    name: 'AA Auto Protection',
    slug: 'aa-auto-protection',
    logo: '/warranty-logos/aa-auto-protection.png',
    claimsUrl: 'https://aaautoprotection.com/claims/',
  },
  {
    name: 'Smart Auto Care',
    slug: 'smart-auto-care',
    logo: '/warranty-logos/smart-auto-care.png',
    claimsUrl: 'https://smartautocare.com/repair-facilities/',
  },
  {
    name: 'Alpha Warranty Services',
    slug: 'alpha',
    logo: '/warranty-logos/alpha.png',
    claimsUrl: 'https://www.alphawarranty.com/repair-facilities/',
  },
  {
    name: 'Penn Warranty',
    slug: 'penn',
    logo: '/warranty-logos/penn.png',
    claimsUrl: 'https://pennwarranty.com/repair-facilities/',
  },
  {
    name: 'Preferred Warranties',
    slug: 'preferred',
    logo: '/warranty-logos/preferred.png',
    claimsUrl: 'https://www.pwoi.com/repair-facilities/',
  },
  {
    name: 'Assurant Solutions',
    slug: 'assurant',
    logo: '/warranty-logos/assurant.png',
    claimsUrl: 'https://www.assurant.com/partners/vehicle-service-contracts',
  },
  {
    name: 'Fidelity Warranty Services',
    slug: 'fidelity',
    logo: '/warranty-logos/fidelity.png',
    claimsUrl: 'https://www.fidelitywarrantyservices.com/repair-facilities/',
  },
];

export const EXTENDED_WARRANTY_PROVIDERS = WARRANTY_PROVIDERS.map((provider) => provider.name);

const WARRANTY_PROVIDER_BY_NAME = new Map(WARRANTY_PROVIDERS.map((provider) => [provider.name, provider]));

export function getWarrantyProvider(name: string): WarrantyProvider | undefined {
  return WARRANTY_PROVIDER_BY_NAME.get(name);
}

export function getWarrantyProviders(names: readonly string[]): WarrantyProvider[] {
  return names.flatMap((name) => {
    const provider = getWarrantyProvider(name);
    return provider ? [provider] : [];
  });
}

/** Featured extended warranty administrators — shown with blurbs on /warranty */
export const FEATURED_WARRANTY_PROVIDERS = [
  {
    title: 'Endurance',
    names: ['Endurance'] as const,
    blurb:
      'One of the largest vehicle service contract administrators. We submit digital diagnostics and repair estimates directly to Endurance claims for faster approvals.',
  },
  {
    title: 'CARCHEX',
    names: ['CARCHEX'] as const,
    blurb:
      'CARCHEX-backed contracts often require documented failure codes and photos. We run full scans and package the technical evidence claims adjusters expect.',
  },
  {
    title: 'CarShield / American Auto Shield',
    names: ['CarShield', 'American Auto Shield'] as const,
    blurb:
      'CarShield and American Auto Shield policies share the same claims workflow. We handle authorization calls, supplemental requests, and parts approvals in-house.',
  },
  {
    title: 'Royal Administration Services',
    names: ['Royal Administration Services'] as const,
    blurb:
      'Royal administers contracts sold through many brokers and dealers. Bring your policy ID — we verify coverage and coordinate inspection requirements before repairs begin.',
  },
  {
    title: 'autopom!',
    names: ['autopom!'] as const,
    blurb:
      'autopom! plans vary by tier and mileage. We review your contract exclusions up front so you know what is covered before we order parts.',
  },
  {
    title: 'Olive',
    names: ['Olive'] as const,
    blurb:
      'Olive subscription-style coverage still requires a licensed shop and proper diagnostics. We document component failure and labor hours for Olive claims review.',
  },
  {
    title: 'Omega Auto Care',
    names: ['Omega Auto Care'] as const,
    blurb:
      'Omega contracts often cover powertrain and electrical components. Our ASE-certified techs provide the detailed failure analysis Omega adjusters need to approve repairs.',
  },
  {
    title: 'Zurich',
    names: ['Zurich North America'] as const,
    blurb:
      'Zurich-backed service contracts are common on newer vehicles. We follow Zurich shop guidelines, submit photos and estimates, and track authorization through completion.',
  },
  {
    title: 'American Guardian',
    names: ['American Guardian'] as const,
    blurb:
      'American Guardian administers plans sold nationwide. We work directly with their claims team so you are not stuck on hold explaining a check-engine light.',
  },
] as const;

const FEATURED_WARRANTY_PROVIDER_NAMES = new Set<string>(
  FEATURED_WARRANTY_PROVIDERS.flatMap((provider) => [...provider.names]),
);

/** Remaining providers shown as logo grid on the warranty page */
export const OTHER_WARRANTY_PROVIDERS = getWarrantyProviders(
  EXTENDED_WARRANTY_PROVIDERS.filter((name) => !FEATURED_WARRANTY_PROVIDER_NAMES.has(name)),
);

export const WARRANTY_CLAIM_PROCESS = [
  {
    step: '01',
    title: 'Drop-Off & Document',
    description: `Bring your vehicle and service contract to ${BUSINESS.address.street}. We verify policy details and note your deductible before any work begins.`,
  },
  {
    step: '02',
    title: 'Digital Diagnostics',
    description:
      'Complete scan and inspection — we capture failure codes, photos, and technical findings formatted for warranty company review.',
  },
  {
    step: '03',
    title: 'Direct Negotiation',
    description:
      'We call the claims administrator — Endurance, CarShield, Royal, and others — submit estimates and photos, and push for maximum approved coverage.',
  },
  {
    step: '04',
    title: 'Certified Repair',
    description:
      'ASE-certified repairs with quality components. You pay only your plan deductible and any non-covered wear items we disclosed upfront.',
  },
] as const;

export type ServiceItem = {
  name: string;
  href: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  highlight?: boolean;
  image: string;
};

export const SERVICES: ServiceItem[] = [
  {
    name: 'Brake Repair',
    href: '/services/brake-repair-englewood-co',
    slug: 'brake-repair-englewood-co',
    icon: Disc,
    description: 'Pads, rotors, and complete brake system service.',
    image: SERVICE_PHOTOS['brake-repair-englewood-co'],
  },
  {
    name: 'Engine Diagnostics',
    href: '/services/engine-diagnostics-englewood-co',
    slug: 'engine-diagnostics-englewood-co',
    icon: Car,
    description: 'Advanced diagnostics for check-engine lights, drivability, diesel, and electrical issues.',
    image: SERVICE_PHOTOS['engine-diagnostics-englewood-co'],
  },
  {
    name: 'Transmission Services',
    href: '/services/transmission-services-englewood-co',
    slug: 'transmission-services-englewood-co',
    icon: Cog,
    description: 'Diagnostics, repairs, and fluid services.',
    image: SERVICE_PHOTOS['transmission-services-englewood-co'],
  },
  {
    name: 'Suspension & Steering',
    href: '/services/suspension-steering-englewood-co',
    slug: 'suspension-steering-englewood-co',
    icon: Settings,
    description: 'Smooth handling and confident ride quality.',
    image: SERVICE_PHOTOS['suspension-steering-englewood-co'],
  },
  {
    name: 'Heating & AC',
    href: '/services/heating-ac-englewood-co',
    slug: 'heating-ac-englewood-co',
    icon: Wind,
    description: 'Climate control diagnostics and repair.',
    image: SERVICE_PHOTOS['heating-ac-englewood-co'],
  },
  {
    name: 'Electrical System',
    href: '/services/electrical-system-englewood-co',
    slug: 'electrical-system-englewood-co',
    icon: Zap,
    description: 'Wiring, starters, alternators, and more.',
    image: SERVICE_PHOTOS['electrical-system-englewood-co'],
  },
  {
    name: 'Oil Changes',
    href: '/services/oil-changes-englewood-co',
    slug: 'oil-changes-englewood-co',
    icon: Droplet,
    description: 'Conventional and synthetic oil service.',
    image: SERVICE_PHOTOS['oil-changes-englewood-co'],
  },
  {
    name: 'Check Engine Light',
    href: '/services/check-engine-light-englewood-co',
    slug: 'check-engine-light-englewood-co',
    icon: AlertCircle,
    description: 'Diagnose and clear check-engine warnings.',
    image: SERVICE_PHOTOS['check-engine-light-englewood-co'],
  },
  {
    name: 'Battery Testing',
    href: '/services/battery-testing-englewood-co',
    slug: 'battery-testing-englewood-co',
    icon: Battery,
    description: 'Free testing and reliable replacements.',
    image: SERVICE_PHOTOS['battery-testing-englewood-co'],
  },
  {
    name: 'Exhaust System',
    href: '/services/exhaust-system-englewood-co',
    slug: 'exhaust-system-englewood-co',
    icon: Exhaust,
    description: 'Mufflers, exhaust repair, and emissions.',
    image: SERVICE_PHOTOS['exhaust-system-englewood-co'],
  },
  {
    name: 'Preventative Maintenance',
    href: '/services/preventative-maintenance-englewood-co',
    slug: 'preventative-maintenance-englewood-co',
    icon: ShieldCheck,
    description: 'Stay ahead of problems with scheduled care.',
    highlight: true,
    image: SERVICE_PHOTOS['preventative-maintenance-englewood-co'],
  },
];

export const FEATURED_SERVICES = SERVICES.filter((s) =>
  [
    'Preventative Maintenance',
    'Battery Testing',
    'Brake Repair',
    'Engine Diagnostics',
    'Oil Changes',
    'Heating & AC',
  ].includes(s.name)
);

export const STATS = [
  { value: '30+', label: 'Years Serving', sublabel: 'Englewood & Denver Metro' },
  { value: '5,000+', label: 'Vehicles Serviced', sublabel: 'And counting every week' },
  { value: '11', label: 'Service Categories', sublabel: 'Complete auto care' },
  { value: '5★', label: 'Verified Reviews', sublabel: 'Google & Facebook' },
] as const;

/** Homepage featured reviews — 4–5 star verified quotes only, never placeholders. */
export const TESTIMONIALS = VERIFIED_REVIEWS_4_PLUS.filter((review) =>
  ['Christine Rivero', 'Anthony Guerra', 'Violet Zavala'].includes(review.author),
);

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Schedule',
    description: 'Call or visit us. We offer same-day service for many repairs.',
  },
  {
    step: '02',
    title: 'Diagnose',
    description: 'Thorough inspection with clear, written estimates before any work.',
  },
  {
    step: '03',
    title: 'Repair',
    description: 'Expert service using quality parts and ASE-certified technicians.',
  },
  {
    step: '04',
    title: 'Drive Confident',
    description: 'Quality-checked work backed by our commitment to your satisfaction.',
  },
] as const;

export const TRUST_BADGES = [
  'ASE Certified',
  '$120/hr Posted Online',
  '30+ Years Experience',
  'Written Estimates',
  'Same-Day Service',
  'All Makes & Models',
  'Hablamos Español',
  'Locally Owned',
] as const;

/** Typical Denver metro independent shop labor range when a rate is disclosed — many shops quote only. */
export const LOCAL_SHOP_RATE_RANGE = '$130–175/hr' as const;

export { VEHICLE_BRANDS as BRAND_MARQUEE } from '@/lib/vehicleBrands';

export const LABOR_RATE = '$120/hr' as const;

export type FAQItem = { question: string; answer: string };

export const PRICING_COMPARISON_DISCLAIMER =
  'Typical labor rates and fees reported by Englewood and Denver metro drivers. Many local shops do not publish hourly rates online — actual charges vary by vehicle, brand, and shop.' as const;

export const PRICING_TIERS_DISCLAIMER =
  'Starting prices assume typical conditions. Parts vary by vehicle, and we may find additional issues during inspection. If anything changes, you get a written change order before we proceed — no surprise charges.' as const;

export const PRICING_COMPARISON = [
  {
    name: 'Dealership',
    laborRate: '$180–220/hr',
    ratePosted: 'Sometimes — often buried in fine print',
    diagnosticFee: '$150–250 (often non-refundable)',
    upselling: 'High — recommended services lists, fluid flushes, cabin filters',
    turnaround: '2–5 business days',
    estimate: 'Often itemized only after work starts',
    shopFees: 'Facilities & environmental fees common',
    technicianContinuity: 'Varies — advisor turnover, rotating techs',
    weekdayHours: 'Mon–Fri until 5–6 PM',
    highlight: false,
  },
  {
    name: 'Chain Shop',
    laborRate: '$140–160/hr',
    ratePosted: 'Menu & package pricing — ZIP code required, no flat hourly rate',
    diagnosticFee: 'Often "free" inspections — recommended add-ons follow',
    upselling: 'Heavy — coupons, bundles, fluid flushes, store credit offers',
    turnaround: 'Appointment queue — 1–3 days; walk-in waits common',
    estimate: 'Package pricing + 8–10% shop supply fee on labor',
    shopFees: '8–10% supply fee on labor (typical at national chains)',
    technicianContinuity: 'Rotating staff — high-volume, 1,000+ locations',
    weekdayHours: 'Mon–Sat until 6–7 PM; many open Sundays',
    highlight: false,
  },
  {
    name: 'Typical Local Shop',
    laborRate: `${LOCAL_SHOP_RATE_RANGE} — quote only`,
    ratePosted: 'Rarely — call or online form for pricing',
    diagnosticFee: 'Varies — quoted at intake',
    upselling: 'Varies — warranty and fleet upsells common',
    turnaround: 'Often 24–48 hrs to confirm appointment',
    estimate: 'Provided after callback or first visit',
    shopFees: 'Varies — some add supply or disposal fees',
    technicianContinuity: 'Often same owner-operator bay',
    weekdayHours: 'Mon–Fri until 5 PM typical',
    highlight: false,
  },
  {
    name: 'RKC Automotive',
    laborRate: LABOR_RATE,
    ratePosted: 'Yes — posted on this page and every estimate',
    diagnosticFee: 'From $99 — credited toward approved repair',
    upselling: 'None — fix what is broken, skip what is not',
    turnaround: 'Same-day when parts are available',
    estimate: 'Written estimate before any wrench turns',
    shopFees: 'None — posted rate is the rate',
    technicianContinuity: 'Same ASE-certified crew every visit',
    weekdayHours: 'Mon–Fri until 6 PM · Sat 8–12',
    highlight: true,
  },
] as const;

export const PRICING_COMPARISON_ROWS = [
  { label: 'Labor rate', key: 'laborRate' as const },
  { label: 'Rate posted online', key: 'ratePosted' as const },
  { label: 'Diagnostic fee', key: 'diagnosticFee' as const },
  { label: 'Upselling', key: 'upselling' as const },
  { label: 'Turnaround', key: 'turnaround' as const },
  { label: 'Estimate', key: 'estimate' as const },
  { label: 'Shop fees', key: 'shopFees' as const },
  { label: 'Who works on your car', key: 'technicianContinuity' as const },
  { label: 'Weekday hours', key: 'weekdayHours' as const },
] as const;

export const PRICING_SAVINGS_SCENARIOS = [
  {
    title: 'Brake pads & rotors (per axle)',
    hours: 2,
    icon: 'brakes' as const,
    note: 'Labor only — parts quoted separately at every shop. Same OEM-quality work, lower hourly rate.',
  },
  {
    title: 'Timing belt & water pump',
    hours: 4.5,
    icon: 'timing' as const,
    note: 'Major service where dealer labor markup hurts most. RKC saves $270–$450 on labor alone.',
  },
  {
    title: 'A/C compressor replacement',
    hours: 3,
    icon: 'ac' as const,
    note: 'Summer breakdowns do not need a $600+ labor bill. We charge for the hours the job actually takes.',
  },
  {
    title: 'Check-engine diagnostic',
    hours: 1,
    icon: 'diagnostic' as const,
    note: 'Our $99 diagnostic is applied to your repair. Dealers often charge $150–250 and keep it.',
  },
] as const;

export const PRICING_PHILOSOPHY = [
  {
    title: 'One rate. Posted publicly.',
    icon: 'rate' as const,
    description:
      '$120/hr — on this page, on the phone, and on every invoice. Plenty of Englewood shops promise transparent pricing but make you call or submit a form before you know the hourly rate. We publish ours.',
  },
  {
    title: 'No overselling. No scare tactics.',
    icon: 'shield' as const,
    description:
      'We will not stack coupons, push a courtesy-check printout of "recommended" services, or tell you your car is unsafe to drive unless it actually is. If it can wait, we say so.',
  },
  {
    title: 'Fix what is broken. Skip what is not.',
    icon: 'wrench' as const,
    description:
      'Your estimate lists only the work you need. We diagnose the real problem — not every sensor on the wiring diagram — and get you back on the road.',
  },
  {
    title: 'Diagnostic fee applied to repair.',
    icon: 'diagnostic' as const,
    description:
      'Pay from $99 for a real diagnostic. Approve the repair and that fee comes off the total. You are not paying twice to find out what is wrong.',
  },
  {
    title: 'Written before we wrench.',
    icon: 'estimate' as const,
    description:
      'Every repair gets a written estimate you approve first. If the scope changes mid-job, we call you before spending another dollar.',
  },
  {
    title: 'ASE certified. 30+ years. Englewood.',
    icon: 'certified' as const,
    description:
      'Dealership-level diagnostics and repair — the same ASE-certified skill other Front Range shops advertise — without the $180–220/hr dealer markup or the quote-only runaround.',
  },
] as const;

export const COMPETITIVE_POSITIONING = [
  {
    title: 'Rate you can see before you call',
    description:
      'National chains quote menu packages by ZIP code — labor rates and shop supply fees vary by location and rarely appear as a flat hourly rate online. RKC posts $120/hr so you can compare hours × rate + parts before you drive over.',
  },
  {
    title: 'Same crew, not a rotating line',
    description:
      'High-volume chain stores run appointment queues with different technicians each visit. At RKC you talk to the same ASE-certified crew — Ray, Oscar, and the team who have been turning wrenches in this Englewood bay for 30+ years.',
  },
  {
    title: 'Open until 6 PM weekdays',
    description:
      'Typical Englewood shops close at 5 PM on weekdays. We stay open until 6 PM Monday through Friday and take walk-ins when the bay has room — no online appointment form required.',
  },
  {
    title: 'No oversell. Real diagnostics.',
    description:
      'Chain shops often bundle "free" inspections with coupon-driven add-ons — fluid flushes, filter packages, store credit offers. We diagnose the actual problem, explain what is urgent vs. what can wait, and fix only what you approve.',
  },
] as const;

export const PRICING_PAGE_FAQ: FAQItem[] = [
  {
    question: 'Why not just go to the cheapest shop?',
    answer:
      'The cheapest shop often cuts corners on parts, skips real diagnostics, or pads the bill elsewhere. At $120/hr, RKC sits below dealers and most chains while still using quality parts and ASE-certified technicians. You pay less per hour for the same caliber of work — not a stripped-down job.',
  },
  {
    question: 'Do you match dealer or chain coupons?',
    answer:
      'Dealer and national-chain coupons usually hide a higher labor rate, require bundled services, or add shop supply fees on top. Our $120/hr is the rate — every day, every job, no coupon math. Compare the full estimate: labor hours × rate + parts. You will often beat the "special" without the fine print.',
  },
  {
    question: 'How is RKC different from a national chain shop?',
    answer:
      'National chains advertise package pricing and stackable coupons, but labor rates vary by ZIP code and often include an 8–10% shop supply fee. You may wait in an appointment queue and see a different technician each visit. RKC is one Englewood bay with the same crew, $120/hr posted online, written change orders if scope changes, and no pressure to approve fluid flushes or add-ons you do not need.',
  },
  {
    question: 'Is $120/hr really everything?',
    answer:
      'Yes — $120/hr covers our technician labor. Parts are quoted separately at cost-plus, same as any shop. No hidden shop fees, no mandatory "service packages," no diagnostic double-dip when you approve the repair. What we quote is what you pay.',
  },
  {
    question: 'How do I know I am not being upsold?',
    answer:
      'We show you what we found, explain what is urgent vs. what can wait, and let you decide. Your written estimate is the scope — nothing gets added without your OK. That is the whole point of posting our rate publicly.',
  },
  {
    question: 'Why do other Englewood shops not show their labor rate?',
    answer:
      `Most independent shops in the Denver metro charge ${LOCAL_SHOP_RATE_RANGE} when they disclose a rate at all — but many only quote after a phone call or online form. Posting $120/hr lets you do the math yourself: labor hours × rate + parts. No callback required to compare apples to apples.`,
  },
  {
    question: 'Do you work with extended warranties or fleet accounts?',
    answer:
      'Yes — we service personal vehicles, fleet trucks, and diesel work daily, and we can help with third-party extended warranty claims when coverage applies. You still get our posted $120/hr labor rate and a written estimate before any work begins.',
  },
];

export const WARRANTY_PAGE_FAQ: FAQItem[] = [
  {
    question: 'Do I have to go to the dealership for my extended warranty?',
    answer:
      'No. Any licensed, ASE-certified repair facility can handle service contracts when your plan allows independent shops. RKC Automotive meets the compliance standards extended warranty companies require — proper diagnostics, documentation, and authorized parts.',
  },
  {
    question: 'What do I have to pay out of pocket?',
    answer:
      'Typically only your plan deductible — often $50, $100, or $200 per visit — plus non-covered fluids, filters, or wear items your contract excludes. We break down covered vs. non-covered costs in writing before starting work.',
  },
  {
    question: 'What should I bring when I drop off my vehicle?',
    answer:
      'Bring your extended warranty contract or policy number, a photo ID, and your vehicle keys. If you have prior denial letters or claim numbers from the warranty company, bring those too — they help us pick up where a previous shop left off.',
  },
  {
    question: 'How long does warranty claim approval take?',
    answer:
      'Simple claims with clear failure codes are often approved same day or within 24 hours. Complex repairs — transmission, engine, or electrical — may require inspector photos or supplemental estimates and can take 1–3 business days. We keep you updated at every step.',
  },
  {
    question: 'Can RKC work with any extended warranty company?',
    answer:
      'We work with all major third-party administrators including Endurance, CarShield, CARCHEX, Royal Administration Services, autopom!, Olive, Omega Auto Care, Zurich, and dozens more. If your provider is not listed, call us — we likely still accept it.',
  },
];

export const PRICING_TIERS = [
  {
    category: 'Maintenance',
    items: [
      {
        service: 'Oil Change (Conventional)',
        price: 'From $49',
        note: 'Includes filter & multi-point inspection',
        laborEstimate: '~0.3 hrs labor',
      },
      {
        service: 'Oil Change (Synthetic)',
        price: 'From $79',
        note: 'Premium synthetic oil',
        laborEstimate: '~0.5 hrs labor',
      },
      {
        service: 'Tire Rotation',
        price: 'From $29',
        note: 'Extend tire life',
        laborEstimate: '~0.25 hrs labor',
      },
      { service: 'Multi-Point Inspection', price: 'Free', note: 'With any service — no upsell pressure' },
    ],
  },
  {
    category: 'Brakes & Safety',
    items: [
      { service: 'Brake Inspection', price: 'Free', note: 'Visual inspection — replace only if you approve' },
      {
        service: 'Brake Pad Replacement (per axle)',
        price: 'From $189',
        note: 'Pads + labor at $120/hr',
        laborEstimate: '~1.5 hrs = ~$180 labor + parts',
      },
      {
        service: 'Brake Pad + Rotor (per axle)',
        price: 'From $349',
        note: 'Pads, rotors + labor at $120/hr',
        laborEstimate: '~2 hrs = ~$240 labor + parts',
      },
      {
        service: 'Brake Fluid Flush',
        price: 'From $99',
        note: 'Fresh fluid for responsive braking',
        laborEstimate: '~0.75 hrs labor',
      },
    ],
  },
  {
    category: 'Diagnostics & Electrical',
    items: [
      {
        service: 'Check Engine Light Diagnostic',
        price: 'From $99',
        note: 'Applied toward repair if approved',
        laborEstimate: '~1 hr at $120/hr',
      },
      { service: 'Battery Test', price: 'Free', note: 'Quick health check' },
      {
        service: 'Battery Replacement',
        price: 'From $149',
        note: 'Labor at $120/hr + battery cost',
        laborEstimate: '~0.5 hrs labor + battery',
      },
      {
        service: 'Electrical Diagnostic',
        price: 'From $129',
        note: 'Wiring & component testing',
        laborEstimate: '~1–1.5 hrs at $120/hr',
      },
    ],
  },
  {
    category: 'Fluids & Filters',
    items: [
      {
        service: 'Coolant Flush',
        price: 'From $129',
        note: 'Protect your engine',
        laborEstimate: '~1 hr labor + fluid',
      },
      {
        service: 'Transmission Fluid Service',
        price: 'From $179',
        note: 'Extend transmission life',
        laborEstimate: '~1.5 hrs labor + fluid',
      },
      {
        service: 'Cabin Air Filter',
        price: 'From $39',
        note: 'Cleaner air inside',
        laborEstimate: '~0.2 hrs labor',
      },
      {
        service: 'Engine Air Filter',
        price: 'From $29',
        note: 'Better fuel economy',
        laborEstimate: '~0.2 hrs labor',
      },
    ],
  },
] as const;

export const FAQ_CATEGORIES: { title: string; items: FAQItem[] }[] = [
  {
    title: 'General',
    items: [
      {
        question: 'Do you offer same-day service in Englewood?',
        answer:
          "Yes! We offer same-day service for many repairs and maintenance. Call us at (720) 749-3965 before 2 PM and we'll do our best to get you in the same day. Some complex repairs may require overnight service depending on parts availability and diagnostic time.",
      },
      {
        question: 'Do you provide written estimates before starting work?',
        answer:
          "Absolutely. We always provide detailed written estimates before beginning any repair work. You'll know exactly what needs to be done and how much it will cost before we start. No surprise charges — ever.",
      },
      {
        question: 'What forms of payment do you accept?',
        answer:
          'We accept cash, all major credit cards (Visa, Mastercard, Discover, American Express), and debit cards.',
      },
      {
        question: 'How long will my repair take?',
        answer:
          'Repair time varies depending on the service. Oil changes typically take 30-45 minutes. Brake jobs take 1-3 hours. More complex repairs may take a full day or require overnight service.',
      },
      {
        question: 'Do you work on all makes and models?',
        answer:
          'Yes! Our ASE-certified technicians service all makes and models, both domestic and foreign. From Ford and Chevy to Toyota, Honda, BMW, and Mercedes.',
      },
      {
        question: 'Do I need an appointment or can I walk in?',
        answer:
          'Both! Walk-ins are welcome, but appointments get priority and faster service. Call (720) 749-3965 to schedule.',
      },
    ],
  },
  {
    title: 'Pricing & Warranties',
    items: [
      {
        question: 'Are your prices competitive with dealerships?',
        answer:
          'Our prices are typically 20-40% less than dealerships for the same quality service. We use quality OEM and aftermarket parts and employ ASE-certified technicians.',
      },
      {
        question: 'Do you offer any warranties on your work?',
        answer:
          "Yes! All our repairs come with a warranty. Warranty terms vary by service and parts used — we'll explain the specific coverage when we provide your estimate.",
      },
      {
        question: 'Why do repair costs vary so much between shops?',
        answer:
          'Prices vary based on parts quality, labor rates, shop overhead, and technician expertise. We balance quality parts, expert service, and fair pricing for the best overall value.',
      },
      {
        question: 'Can I supply my own parts for you to install?',
        answer:
          'We prefer to supply parts ourselves to ensure quality and provide warranty coverage. Customer-supplied parts often lack warranty protection.',
      },
    ],
  },
  {
    title: 'Maintenance',
    items: [
      {
        question: 'How often should I change my oil in Colorado?',
        answer:
          "Conventional oil needs changing every 3,000-5,000 miles. Synthetic oil lasts 7,500-10,000 miles. Colorado's extreme temperatures and altitude can stress engines, so we recommend following the lower end of manufacturer recommendations.",
      },
      {
        question: 'Will service at an independent shop void my warranty?',
        answer:
          'No. Federal law (Magnuson-Moss Warranty Act) protects your right to have your vehicle serviced at independent shops without voiding your warranty.',
      },
      {
        question: 'What maintenance does my car need for Colorado winters?',
        answer:
          'Essential services include battery testing, coolant/antifreeze check, tire inspection, wiper blade replacement, and heating system check.',
      },
      {
        question: 'How do I know if I really need the service you recommend?',
        answer:
          "We follow manufacturer maintenance schedules and only recommend services your vehicle actually needs. We'll explain why and show you the issue when possible.",
      },
    ],
  },
  {
    title: 'Repairs',
    items: [
      {
        question: 'My check engine light is on. Can I still drive my car?',
        answer:
          'A steady check engine light usually means you can drive, but schedule service soon. A flashing check engine light indicates a serious problem — stop driving immediately and call for service.',
      },
      {
        question: 'How do I know if I need brake repair?',
        answer:
          'Common signs include squealing/grinding noises, soft brake pedal, vehicle pulling when braking, vibration in the pedal, and dashboard brake warning light.',
      },
      {
        question: 'Do you provide diagnostic services?',
        answer:
          'Yes! Diagnostic fees typically range from $100-$150 and are often applied toward repairs if you choose to have the work done at RKC Automotive.',
      },
      {
        question: 'Can you help me pass emissions testing?',
        answer:
          'Absolutely. We diagnose and repair emissions-related problems including check engine lights, catalytic converters, O2 sensors, and exhaust leaks.',
      },
    ],
  },
  {
    title: 'About Us',
    items: [
      {
        question: 'Are your technicians certified?',
        answer:
          'Yes! Our technicians are ASE-certified with years of experience working on all makes and models.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          "We're located in Englewood at 2120 W Evans Ave and serve Englewood, Denver, Littleton, Sheridan, Greenwood Village, and surrounding areas.",
      },
      {
        question: 'What are your hours of operation?',
        answer:
          'Monday through Friday from 8:00 AM to 6:00 PM and Saturday from 8:00 AM to 12:00 PM. Closed Sundays.',
      },
      {
        question: 'Do you have a waiting area?',
        answer:
          "Yes, we have a comfortable waiting area. For longer repairs, many customers prefer to drop off their vehicle and we'll call when it's ready.",
      },
    ],
  },
];

/** All FAQ items flattened for FAQPage JSON-LD */
export const ALL_FAQS = FAQ_CATEGORIES.flatMap((c) => c.items);

export const VEHICLE_CATEGORIES = [
  {
    title: 'Domestic',
    brands: ['Ford', 'Chevrolet', 'GMC', 'Ram', 'Jeep', 'Chrysler', 'Dodge', 'Lincoln', 'Cadillac', 'Buick'],
  },
  {
    title: 'Import / Asian',
    brands: ['Toyota', 'Honda', 'Nissan', 'Subaru', 'Mazda', 'Hyundai', 'Kia', 'Mitsubishi', 'Acura', 'Lexus'],
  },
  {
    title: 'European',
    brands: ['BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Volvo', 'Land Rover', 'Porsche', 'Mini'],
  },
] as const;

export const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.8!2d-105.0125!3d39.6785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e5c5c5c5c5c%3A0x0!2s2120%20W%20Evans%20Ave%2C%20Englewood%2C%20CO%2080110!5e0!3m2!1sen!2sus!4v1700000000000';
