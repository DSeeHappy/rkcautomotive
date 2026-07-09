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
  Wrench,
  CircleDot,
  type LucideIcon,
} from 'lucide-react';
import { PHOTOS, SERVICE_PHOTOS } from './photos';

export { PHOTOS, SERVICE_PHOTOS };

export const GOOGLE_REVIEWS_URL = 'https://share.google/i1wZ38efUAtcyUqnp';
export const FACEBOOK_URL = 'https://www.facebook.com/RKCAutomotive/';
export const INSTAGRAM_URL = 'https://www.instagram.com/rkcautomotive/';
export const YAHOO_LOCAL_URL = 'https://local.yahoo.com/info-235125355-rkc-automotive-englewood/';
export const ASE_URL = 'https://www.ase.com/';
export const ASE_ARIA_LABEL =
  'ASE — National Institute for Automotive Service Excellence (opens in new tab)';

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
    claimsUrl: 'https://www.carchex.com/',
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
    claimsUrl: 'https://www.royaladmin.com/contact',
  },
  {
    name: 'autopom!',
    slug: 'autopom',
    logo: '/warranty-logos/autopom.png',
    claimsUrl: 'https://www.autopom.com/',
  },
  {
    name: 'Olive',
    slug: 'olive',
    logo: '/warranty-logos/olive.png',
    claimsUrl: 'https://olive.com/',
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
    claimsUrl: 'https://www.agws.com/company/contact-us',
  },
  {
    name: 'Aegis Accountability',
    slug: 'aegis',
    logo: '/warranty-logos/aegis.png',
    claimsUrl: 'https://aegisadmin.com/contacts/',
  },
  {
    name: 'Select Auto Protect',
    slug: 'select-auto-protect',
    logo: '/warranty-logos/select-auto-protect.png',
    claimsUrl: 'https://selectautoprotect.com/',
  },
  {
    name: 'Smart Auto Care',
    slug: 'smart-auto-care',
    logo: '/warranty-logos/smart-auto-care.png',
    claimsUrl: 'https://www.smartautocare.com/',
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

/** Comprehensive text-only provider index for semantic SEO — no outbound links */
export const WARRANTY_PROVIDER_INDEX = [
  {
    category: 'Direct Administrators',
    providers: [
      'Endurance',
      'American Auto Shield',
      'GWC Warranty',
      'EasyCare',
      'Royal Administration Services',
      'CarGuard Administration',
      'Smart Auto Care',
      'Alpha Warranty Services',
      'Penn Warranty',
      'Preferred Warranties (PWI)',
      'Assurant Solutions',
      'Fidelity Warranty Services',
      'Aegis Accountability',
      'Matrix Warranty Solutions',
    ],
  },
  {
    category: 'Brokers & Providers',
    providers: [
      'CARCHEX',
      'CarShield',
      'autopom!',
      'Olive',
      'Omega Auto Care',
      'Concord Auto Protect',
      'Toco Warranty',
      'Continental Warranty',
      'United Auto Defense',
      'National Vehicle Protection',
      'Protect My Car',
      'Liberty Bell Auto Protect',
      'Select Auto Protect',
      'AA Auto Protection',
    ],
  },
  {
    category: 'Institutional & Specialized',
    providers: [
      'Allstate Car Care',
      'Zurich North America',
      'American Guardian (AGWS)',
      'Premier Auto Protect',
      'Federal Warranty',
      'National Auto Care',
      'Total Warranty Services',
    ],
  },
] as const;

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
    name: 'Engine Rebuilds',
    href: '/services/engine-rebuilds-englewood-co',
    slug: 'engine-rebuilds-englewood-co',
    icon: Wrench,
    description: 'Long-block and short-block rebuilding, machining, and blueprinting.',
    image: SERVICE_PHOTOS['engine-rebuilds-englewood-co'],
  },
  {
    name: 'Camshaft & Lifters',
    href: '/services/camshaft-lifter-repair-englewood-co',
    slug: 'camshaft-lifter-repair-englewood-co',
    icon: CircleDot,
    description: 'Camshaft, hydraulic lifter, and valvetrain repair for ticks and misfires.',
    image: SERVICE_PHOTOS['camshaft-lifter-repair-englewood-co'],
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

export type ServiceNavGroup = {
  label: string;
  slugs: string[];
  featured?: string[];
};

/** Grouped services for premium navigation dropdown */
export const SERVICE_NAV_GROUPS: ServiceNavGroup[] = [
  {
    label: 'Engine & Diagnostics',
    slugs: [
      'engine-rebuilds-englewood-co',
      'camshaft-lifter-repair-englewood-co',
      'engine-diagnostics-englewood-co',
      'check-engine-light-englewood-co',
    ],
    featured: ['engine-rebuilds-englewood-co', 'camshaft-lifter-repair-englewood-co'],
  },
  {
    label: 'Drivetrain & Brakes',
    slugs: [
      'transmission-services-englewood-co',
      'brake-repair-englewood-co',
      'suspension-steering-englewood-co',
      'exhaust-system-englewood-co',
    ],
  },
  {
    label: 'Maintenance',
    slugs: [
      'preventative-maintenance-englewood-co',
      'oil-changes-englewood-co',
      'battery-testing-englewood-co',
    ],
  },
  {
    label: 'Climate & Electrical',
    slugs: [
      'heating-ac-englewood-co',
      'electrical-system-englewood-co',
    ],
  },
];

export type ServiceCategory = {
  label: string;
  description: string;
  slugs: string[];
  accent: string;
};

/** Category cards for /services hub landing */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    label: 'Engine & Diagnostics',
    description: 'Rebuilds, camshaft repair, OBD-II diagnostics, and check-engine triage.',
    slugs: [
      'engine-rebuilds-englewood-co',
      'camshaft-lifter-repair-englewood-co',
      'engine-diagnostics-englewood-co',
      'check-engine-light-englewood-co',
    ],
    accent: 'from-primary-green/20 to-primary-blue/10',
  },
  {
    label: 'Drivetrain & Brakes',
    description: 'Transmission, brakes, suspension, and emissions-compliant exhaust.',
    slugs: [
      'transmission-services-englewood-co',
      'brake-repair-englewood-co',
      'suspension-steering-englewood-co',
      'exhaust-system-englewood-co',
    ],
    accent: 'from-primary-blue/20 to-primary-green/10',
  },
  {
    label: 'Maintenance',
    description: 'Oil changes, 30/60/90k milestones, and battery health testing.',
    slugs: [
      'preventative-maintenance-englewood-co',
      'oil-changes-englewood-co',
      'battery-testing-englewood-co',
    ],
    accent: 'from-primary-green/15 to-emerald-500/10',
  },
  {
    label: 'Climate & Electrical',
    description: 'R134a/R1234yf HVAC, heater cores, and starting/charging systems.',
    slugs: [
      'heating-ac-englewood-co',
      'electrical-system-englewood-co',
    ],
    accent: 'from-sky-500/15 to-primary-blue/10',
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

/** Strategic cross-links between service pages — 2–3 related slugs per service */
export const RELATED_SERVICES: Record<string, string[]> = {
  'engine-diagnostics-englewood-co': [
    'check-engine-light-englewood-co',
    'engine-rebuilds-englewood-co',
    'camshaft-lifter-repair-englewood-co',
  ],
  'check-engine-light-englewood-co': [
    'engine-diagnostics-englewood-co',
    'exhaust-system-englewood-co',
    'engine-rebuilds-englewood-co',
  ],
  'engine-rebuilds-englewood-co': [
    'camshaft-lifter-repair-englewood-co',
    'engine-diagnostics-englewood-co',
    'transmission-services-englewood-co',
  ],
  'camshaft-lifter-repair-englewood-co': [
    'engine-rebuilds-englewood-co',
    'engine-diagnostics-englewood-co',
    'oil-changes-englewood-co',
  ],
  'brake-repair-englewood-co': [
    'suspension-steering-englewood-co',
    'preventative-maintenance-englewood-co',
    'oil-changes-englewood-co',
  ],
  'suspension-steering-englewood-co': [
    'brake-repair-englewood-co',
    'preventative-maintenance-englewood-co',
    'oil-changes-englewood-co',
  ],
  'transmission-services-englewood-co': [
    'engine-diagnostics-englewood-co',
    'engine-rebuilds-englewood-co',
    'preventative-maintenance-englewood-co',
  ],
  'oil-changes-englewood-co': [
    'preventative-maintenance-englewood-co',
    'engine-diagnostics-englewood-co',
    'check-engine-light-englewood-co',
  ],
  'preventative-maintenance-englewood-co': [
    'oil-changes-englewood-co',
    'brake-repair-englewood-co',
    'battery-testing-englewood-co',
  ],
  'heating-ac-englewood-co': [
    'electrical-system-englewood-co',
    'engine-diagnostics-englewood-co',
    'preventative-maintenance-englewood-co',
  ],
  'electrical-system-englewood-co': [
    'battery-testing-englewood-co',
    'engine-diagnostics-englewood-co',
    'check-engine-light-englewood-co',
  ],
  'battery-testing-englewood-co': [
    'electrical-system-englewood-co',
    'engine-diagnostics-englewood-co',
    'preventative-maintenance-englewood-co',
  ],
  'exhaust-system-englewood-co': [
    'check-engine-light-englewood-co',
    'engine-diagnostics-englewood-co',
    'preventative-maintenance-englewood-co',
  ],
};

const SERVICE_BY_SLUG = new Map(SERVICES.map((service) => [service.slug, service]));

export function getRelatedServices(slug: string): ServiceItem[] {
  const relatedSlugs = RELATED_SERVICES[slug];
  if (!relatedSlugs) {
    return SERVICES.filter((service) => service.slug !== slug).slice(0, 3);
  }

  return relatedSlugs.flatMap((relatedSlug) => {
    const service = SERVICE_BY_SLUG.get(relatedSlug);
    return service ? [service] : [];
  });
}

/** Top services linked from city / area landing pages */
export const TOP_AREA_SERVICES = SERVICES.filter((service) =>
  [
    'Engine Diagnostics',
    'Brake Repair',
    'Oil Changes',
    'Transmission Services',
    'Preventative Maintenance',
    'Check Engine Light',
  ].includes(service.name),
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
    question: 'How long does warranty claim approval actually take?',
    answer:
      'Standard component claims — alternators, starters, brake master cylinders — typically take 1–3 business days once we submit AllData or Mitchell labor guides and failure codes. Major powertrain claims involving engines or transmissions often take 3–7+ business days because adjusters require field inspectors, teardown authorizations, and maintenance history verification. We accelerate approvals with direct adjuster lines, digital evidence packages, and transparent $120/hr labor documentation.',
  },
  {
    question: 'What is a teardown authorization and why does the warranty company require it?',
    answer:
      'When your engine or transmission will not run, the warranty company will not pay to find out why until you authorize a partial teardown. If the failure is covered, the warranty reimburses teardown labor. If the adjuster finds neglect, pre-existing damage, or an excluded failure, you pay for the teardown. RKC documents every step with full-bay photography so there are no surprises.',
  },
  {
    question: 'What if my warranty claim was denied for lack of maintenance?',
    answer:
      'This is one of the most common denial tactics. Adjusters look for sludge, overdue oil changes, or missing service records. RKC counters with oil analysis when appropriate, freeze-frame data showing the failure sequence, and evidence that catastrophic component failure — not neglect — caused the breakdown. We have successfully overturned maintenance-related denials when the technical evidence supports coverage.',
  },
  {
    question: 'Will the warranty company make me use cheap used parts (LKQ)?',
    answer:
      'Many administrators push LKQ (Like Kind and Quality) salvage-yard parts or the cheapest remanufactured units available. RKC inspects every provider-supplied part on delivery. We reject components with visible damage, incorrect specifications, or substandard reman quality — and we document our rejection with photos so the adjuster must authorize remanufactured or OEM-grade replacements.',
  },
  {
    question: 'Can RKC work with any extended warranty company?',
    answer:
      'We work with all major third-party administrators including Endurance, CarShield, CARCHEX, Royal Administration Services, autopom!, Olive, Omega Auto Care, Zurich, and dozens more. If your provider is not listed, call us — we likely still accept it.',
  },
  {
    question: 'What happens if my claim is denied after repairs begin?',
    answer:
      'We never start covered repairs without written authorization or a clear verbal approval logged with a claim number. If a supplemental request is denied mid-repair, we stop work immediately, document the adjuster decision, and present your options — appeal with additional evidence, pay out of pocket for the uncovered portion, or pursue the warranty company dispute process. You are never surprised by a bill you did not authorize.',
  },
  {
    question: 'Does RKC charge more for warranty work than regular repairs?',
    answer:
      'No. Our posted labor rate is $120/hr whether you pay cash or your warranty company pays. Warranty administrators cap labor at guidebook rates — we document hours accurately using AllData and Mitchell so adjusters cannot arbitrarily reduce approved time.',
  },
];

export const ENGINE_REBUILDS_PAGE_FAQ: FAQItem[] = [
  {
    question: 'How do I know if I need a full engine rebuild vs. a top-end repair?',
    answer:
      'Bottom-end symptoms — rod knock, low oil pressure at hot idle, metallic debris in the oil filter, or blow-by pressurizing the crankcase — point to bearing and ring wear that requires pulling the short block. Top-end-only issues like a single-cylinder misfire or valvetrain tick may need cam and head work without a full rebuild. We run compression, leak-down, and oil-pressure tests before recommending teardown scope so you are not paying for a long-block when a short-block or valvetrain job solves the problem.',
  },
  {
    question: 'What is the difference between a short-block and a long-block rebuild?',
    answer:
      'A short-block includes the block, crankshaft, connecting rods, pistons, rings, bearings, oil pump, and timing components — everything below the cylinder heads. A long-block adds fully reconditioned cylinder heads, valvetrain hardware, and often the intake manifold. Short-blocks make sense when heads are reusable; long-blocks are the turnkey choice when heads are cracked, warped, or have valve-seat damage. We quote both options when applicable so you can choose based on inspection findings and budget.',
  },
  {
    question: 'How long does an engine rebuild take at RKC Automotive?',
    answer:
      'Timeline depends on machine-shop queue, parts availability, and whether we find hidden damage after teardown. A straightforward domestic V8 short-block rebuild typically runs several weeks from approval to installation — machine work, parts ordering, and assembly each take real time. We provide a realistic window at estimate time and call with photos if magnaflux, bore measurements, or crank journal condition changes the schedule.',
  },
  {
    question: 'Can you rebuild turbocharged or high-performance engines?',
    answer:
      'Yes. Turbo and forced-induction engines demand tighter clearances, forged or hypereutectic piston selection matched to boost levels, and careful deck and head-surface preparation. We blueprint rotating assemblies for balance and document every machine-shop measurement. Whether you daily-drive a EcoBoost F-150 or tow with a Cummins, the same written-estimate and approval-before-teardown process applies at our posted $120/hr labor rate.',
  },
  {
    question: 'Do you offer a warranty on rebuilt engines?',
    answer:
      'We stand behind our machine work and assembly with a written warranty on labor and installed parts — terms depend on scope and components used. Rebuilt engines also benefit from proper break-in procedures: specific oil change intervals, avoiding sustained high load for the first miles, and verifying oil pressure before you leave the lot. We walk you through break-in requirements at pickup so the investment lasts.',
  },
  {
    question: 'Why rebuild instead of installing a crate engine or used junkyard motor?',
    answer:
      'Crate engines are convenient but expensive and may not match your VIN-specific accessories, sensors, or emissions hardware. Junkyard swaps are a gamble — unknown maintenance history, hidden overheating damage, and no machine-shop verification. A rebuild uses your block when it passes magnaflux and bore inspection, restores known clearances, and lets you upgrade pistons, rings, and bearings to address the failure mode that caused the original problem. For many Englewood and Denver metro drivers, that is the best balance of cost and long-term reliability.',
  },
];

export const CAMSHAFT_LIFTER_PAGE_FAQ: FAQItem[] = [
  {
    question: 'Is the HEMI lifter tick always a cam and lifter problem?',
    answer:
      'Not always — exhaust manifold leaks, VVT actuator rattle, and fuel injector tick can sound similar. That is why we measure valvetrain clearance where possible, borescope cam lobes, and correlate misfire data before quoting cam replacement. When roller lifters have collapsed and lobes show flat spots, partial repair is false economy: the tick returns and metal circulates through the oil galleries. Confirmed lobe damage means full cam assembly and matched lifter set.',
  },
  {
    question: 'What is AFM/DFM and why does it cause lifter failures on GM trucks?',
    answer:
      'Active Fuel Management (AFM) and Dynamic Fuel Management (DFM) disable cylinders under light load by collapsing lifters via oil-pressure solenoids. Over time, stuck solenoids, deferred oil changes, and low-tension valve springs accelerate lifter collapse and cam lobe wear on cylinders 1, 4, 6, or 7 depending on engine family. Silverado, Sierra, Tahoe, and Yukon owners across the Denver metro often see misfire codes before the tick becomes constant. We diagnose AFM-related failures before recommending repair scope.',
  },
  {
    question: 'Should I delete AFM when replacing the cam and lifters?',
    answer:
      'AFM delete kits disable the cylinder-deactivation hardware and use non-AFM lifters and a non-AFM cam profile. Some owners choose delete after repeated AFM failures; others prefer a stock replacement cam and lifters to maintain factory fuel-economy behavior. We explain both paths — parts cost, labor difference, and emissions implications — without pushing either option. The right choice depends on how you use the truck and whether you want to eliminate the failure mode entirely.',
  },
  {
    question: 'Can I drive with an engine tick until my appointment?',
    answer:
      'A faint cold-start tick that fades as oil pressure builds may be tolerable for a short window if you have an appointment scheduled. A tick that persists at operating temperature, accompanies a misfire, or worsens under load means the valvetrain is actively damaging itself — continued driving sends metal through bearings you cannot inspect without teardown. If oil pressure drops or the engine runs rough, stop driving and arrange a tow. We would rather diagnose a still-salvageable top end than quote a full short-block because metal migrated downstream.',
  },
  {
    question: 'Do you replace pushrods, springs, and stem seals during cam work?',
    answer:
      'When the heads are accessible, we inspect pushrods for straightness and end-cup wear, check valve spring height and tension, and replace stem seals while the valvetrain is apart. Reusing collapsed lifters or fatigued springs guarantees comebacks. Our valvetrain restoration checklist covers cam assembly, full lifter set, pushrods, springs, seals, and an oil gallery flush to remove debris from the failure — all scoped in a written estimate at $120/hr labor before parts are ordered.',
  },
  {
    question: 'How much does cam and lifter replacement cost compared to a full rebuild?',
    answer:
      'Cam-in-block overhead-valve jobs and overhead-cam layouts differ widely in labor hours and parts cost. A confirmed valvetrain repair on a pushrod V8 is typically a fraction of a full short-block rebuild — but only when the block, crank, and bearings are still healthy. Oil filter debris analysis and compression testing tell us whether top-end work is sufficient or if wear has already reached the bottom end. We never recommend a rebuild when a cam job solves the problem, and we never patch one lifter when the cam is scored.',
  },
];

export const BRAKE_REPAIR_PAGE_FAQ: FAQItem[] = [
  {
    question: 'How do I know if I need new brake pads or rotors?',
    answer:
      'Pads need replacement when lining thickness drops near 3mm or wear sensors contact the rotor. Rotors need service when thickness is below minimum spec, surfaces are scored from metal-on-metal contact, or pedal pulsation indicates runout. We measure both with a micrometer and dial indicator — not guess from mileage. Many Englewood pad jobs include rotors because Colorado heat cycling warps friction surfaces before pads reach end of life.',
  },
  {
    question: 'Why does my brake pedal pulse when I slow down?',
    answer:
      'Pedal pulsation under light braking is classic warped rotor runout — often from overheating on long downhill grades or uneven lug-nut torque. Resurfacing works only when rotor thickness remains above the stamped minimum. Many modern rotors are too thin to machine and require replacement. We measure runout and thickness before quoting resurfacing vs. new rotors.',
  },
  {
    question: 'How often should brake fluid be flushed in Colorado?',
    answer:
      'Most manufacturers recommend brake fluid exchange every 2–3 years because DOT fluid absorbs moisture, lowering boiling point and promoting internal corrosion. Colorado temperature swings accelerate moisture ingress. We test copper content and fluid condition — if it passes, we do not push a flush. If it fails, we quote a flush with the correct DOT spec for your vehicle.',
  },
  {
    question: 'Can I drive with a grinding brake noise?',
    answer:
      'Grinding means pad backing plate is contacting the rotor — generating heat that can glaze pads, damage caliper pistons, and score rotors beyond salvage. Schedule service immediately. Metal-on-metal braking also increases stopping distance, which is dangerous in Denver metro traffic. We inspect for caliper damage when grinding has continued more than a few days.',
  },
  {
    question: 'Do you service ABS and electronic brake systems?',
    answer:
      'Yes. We diagnose ABS wheel-speed sensors, tone-ring debris, and hydraulic issues that trigger ABS lights or false activation at low speed. After pad or rotor service, we road-test ABS function and verify pedal feel. Electronic parking brakes on newer vehicles require scan-tool calibration after rear pad service — we include that in the scope when applicable.',
  },
  {
    question: 'How much does brake repair cost at RKC Automotive?',
    answer:
      'Brake pad replacement per axle starts around $189 plus parts; pad and rotor service from about $349 per axle — labor at our posted $120/hr rate. Caliper rebuilds, fluid flushes, and ABS-related repairs are quoted separately after inspection. You receive a written estimate before parts are ordered, with no shop-supply fees hidden in the total.',
  },
  {
    question: 'What is the minimum rotor thickness and why does it matter?',
    answer:
      'Every rotor has a minimum thickness stamped on the hat or edge — often 22–25mm on front vented rotors. Below minimum, the rotor cannot dissipate heat safely and may crack under mountain braking on I-70. We micrometer every rotor before recommending resurface vs. replace. Many modern thin rotors are single-use — machined once in life, if at all.',
  },
  {
    question: 'Ceramic vs semi-metallic brake pads — which should I choose?',
    answer:
      'Ceramic pads run quieter with less dust — ideal for daily commuters and luxury vehicles. Semi-metallic pads handle heat better for towing, mountain grades, and work trucks. Low-metallic organic pads are OEM on many imports. We match compound to your driving — not upsell the most expensive pad. Wrong compound causes squeal, fade, or premature rotor wear.',
  },
  {
    question: 'What does an ABS module or wheel-speed sensor repair involve?',
    answer:
      'ABS wheel-speed sensors read tone rings on each hub. Metal debris from grinding brakes, damaged tone rings, or corroded sensor tips trigger ABS lights and false activation at low speed. We inspect sensors after pad work, clean tone rings, and scope wheel-speed signals on a road test. Module replacement is rare — most ABS faults trace to sensors, wiring, or hydraulic valves.',
  },
];

export const ENGINE_DIAGNOSTICS_PAGE_FAQ: FAQItem[] = [
  {
    question: 'What is included in an engine diagnostic at RKC?',
    answer:
      'We scan OBD-II for stored, pending, and permanent codes; review freeze-frame data; analyze live fuel trims, sensor response, and misfire counters; and perform targeted tests — smoke test for vacuum leaks, compression or leak-down for mechanical faults, scope traces for ignition patterns. You receive a written repair plan with prioritized fixes at $120/hr labor. The diagnostic fee credits toward approved repairs.',
  },
  {
    question: 'Why should I pay for diagnostics when parts stores scan for free?',
    answer:
      'Free scans read codes — they do not verify root cause. A P0171 lean code can be a vacuum leak, weak fuel pump, dirty MAF, or exhaust leak pulling false air. Throwing parts at codes wastes money. Our paid diagnostic applies professional test equipment and technician time to confirm what failed before you buy parts. The fee is credited toward repair when you approve the work.',
  },
  {
    question: 'When do you recommend a compression or leak-down test?',
    answer:
      'When misfires follow a mechanical pattern — equal on cold start, oil consumption, or coolant loss — or when fuel and ignition tests check out but power remains low. Compression identifies ring or valve sealing issues; leak-down pinpoints which valve or ring land leaks. These tests prevent approving expensive coil or injector jobs on an engine with internal wear.',
  },
  {
    question: 'Can you diagnose rough idle and stalling problems?',
    answer:
      'Yes. Rough idle traces to vacuum leaks, carbon on direct-injection valves, idle-air control faults, or misfires. We graph fuel trims at idle and off-idle, smoke-test intake plumbing, and scope ignition on cylinders that show elevated misfire counts. Denver altitude can expose marginal sensors that pass at sea level — we test under your actual driving conditions.',
  },
  {
    question: 'Do you diagnose diesel engine problems?',
    answer:
      'We handle common diesel drivability — boost leaks, DEF/SCR faults, fuel-filter restrictions, and sensor-related power loss on HD pickups and passenger diesels where equipment allows. Complex emissions-aftertreatment repairs are scoped honestly with parts availability and timeline before authorization.',
  },
  {
    question: 'How long does engine diagnostics take?',
    answer:
      'Straightforward single-code faults may resolve in an hour. Intermittent drivability, multiple codes, or mechanical follow-up tests can take longer. We communicate findings as we go and never expand scope without your approval. Same-day diagnosis is common when you call before early afternoon.',
  },
  {
    question: 'What OBD-II live data PIDs do you monitor during diagnostics?',
    answer:
      'We graph short-term and long-term fuel trims (STFT/LTFT), MAF grams-per-second vs. calculated load, O2 sensor switching voltage, misfire counters per cylinder, MAP/MAF correlation, and VVT commanded vs. actual cam angles. Freeze-frame captures RPM, coolant temp, and fuel status at the moment the fault set — critical for intermittent lean codes on cold mornings in Englewood.',
  },
  {
    question: 'What is a smoke test and when do you use it?',
    answer:
      'A smoke machine injects visible vapor into the intake or EVAP system to find vacuum leaks, cracked PCV hoses, and intake gasket failures that set lean codes. EVAP smoke tests locate gas-cap, purge-valve, and vent-hose leaks causing P044x codes. Smoke finds leaks too small to hear — common on high-mileage Denver vehicles with hardened rubber boots.',
  },
  {
    question: 'What is relative compression testing?',
    answer:
      'Relative compression uses the crankshaft position sensor to compare cranking speed between cylinders — no spark plugs removed. A weak cylinder shows slower acceleration during compression stroke. We follow with traditional compression or leak-down on flagged cylinders before recommending top-end or bottom-end repair. It saves hours on multi-cylinder misfire diagnosis.',
  },
];

export const CHECK_ENGINE_LIGHT_PAGE_FAQ: FAQItem[] = [
  {
    question: 'Can I drive with the check engine light on?',
    answer:
      'A steady check engine light usually means you can drive short distances and schedule service soon — but fuel economy, emissions readiness, and catalyst health may be affected. A flashing check engine light indicates catalyst-damaging misfire; stop driving except to reach a safe location and arrange tow if needed. We triage flashing codes as priority appointments.',
  },
  {
    question: 'What does a P0420 catalytic converter code mean?',
    answer:
      'P0420 means the downstream oxygen sensor sees reduced catalyst efficiency. The converter may be worn, but exhaust leaks, upstream misfires, or lazy O2 sensors can set the same code. We compare upstream and downstream O2 activity and inspect for leaks before quoting converter replacement — a four-figure part that should not be guessed.',
  },
  {
    question: 'Will you clear my check engine light without fixing the problem?',
    answer:
      'We clear codes only after verifying the fault is repaired and monitors are ready where emissions apply. Clearing without repair fails Colorado emissions inspections and returns the light when the fault reoccurs — often within one drive cycle. Our goal is a light that stays off because the system is healthy.',
  },
  {
    question: 'How much does check engine light diagnosis cost?',
    answer:
      'Diagnosis starts from $99 and credits toward approved repairs at our posted $120/hr labor rate. Complex multi-code or intermittent faults may require additional test time — we call before exceeding the initial scope. You receive code definitions, test results, and a written repair estimate before authorization.',
  },
  {
    question: 'What is the difference between pending and stored codes?',
    answer:
      'Pending codes mean the PCM detected a fault once but has not confirmed it on a second drive cycle — early warning for developing problems. Stored codes confirmed the fault and illuminated the MIL. Permanent codes on some vehicles cannot clear until the underlying issue is repaired and monitors complete. We explain which type you have and what it implies for emissions testing.',
  },
  {
    question: 'Can a loose gas cap cause a check engine light?',
    answer:
      'Yes — EVAP small-leak codes like P0442 often trace to loose, missing, or cracked gas caps and vent hoses. We smoke-test the EVAP system to confirm cap vs. hose vs. purge-valve faults. It is a inexpensive fix when the cap seals poorly, but we verify rather than assume so you are not back in a week with the same code.',
  },
  {
    question: 'What is the difference between a flashing and steady check engine light?',
    answer:
      'A steady MIL means a confirmed fault that should be diagnosed soon — emissions, sensor, or efficiency codes are common. A flashing MIL under load indicates catalyst-damaging misfire; continued driving can overheat and destroy the catalytic converter. Flashing codes get priority scheduling at RKC — we triage before parts-store code clears.',
  },
  {
    question: 'What are OBD-II readiness monitors and why do they matter in Colorado?',
    answer:
      'Readiness monitors prove the PCM has tested emissions systems since the last code clear — catalyst, O2 sensors, EVAP, EGR, and others. Clearing codes without repair resets monitors to "not ready" and fails Colorado emissions even if the MIL is off. We explain which monitors are incomplete, run drive cycles after repair, and coach your commute pattern so monitors set before your inspection appointment.',
  },
  {
    question: 'How do misfire codes differ from emissions efficiency codes?',
    answer:
      'P030x misfire codes affect drivability, fuel economy, and catalyst health — often coils, injectors, or mechanical compression loss. P0420/P0430 efficiency codes mean downstream O2 activity is low — worn catalyst, exhaust leak, or upstream misfire. EVAP P044x codes are leak detection, not misfire. Each family has a distinct test path — we classify codes before recommending parts.',
  },
];

export const TRANSMISSION_SERVICES_PAGE_FAQ: FAQItem[] = [
  {
    question: 'How do I know if my transmission is slipping?',
    answer:
      'Slip feels like engine RPM rising without matching road speed — especially during the 2-3 shift or under load climbing I-70. Delayed engagement from Park to Drive, harsh shifts, and burnt-fluid smell are related warnings. We inspect fluid color, magnet debris, and scan TCM adaptive data before recommending fluid service vs. internal repair.',
  },
  {
    question: 'Is a transmission fluid flush always the right fix?',
    answer:
      'No. A flush on a slipping unit with dark fluid and metal debris can worsen failure by disturbing clutch material without fixing worn packs. Pan-drop inspection with debris analysis tells us whether fluid service, valve-body repair, or overhaul is appropriate. We never recommend flush-only service when data shows internal wear.',
  },
  {
    question: 'What is the difference between CVT and traditional automatic service?',
    answer:
      'CVTs use steel belts or chains on variable pulleys with specific fluid friction modifiers — wrong fluid causes slip and overheating. Traditional planetary autos have defined gear shifts and often serviceable filters. CVT whine with metal in the pan often requires replacement rather than service. We identify your unit type and follow manufacturer fluid and repair procedures.',
  },
  {
    question: 'Should I rebuild my transmission or install a remanufactured unit?',
    answer:
      'Rebuild-in-house suits repairable valve-body or single-component failures when the case and hard parts are sound. High-mileage units with heavy pan debris often favor remanufactured replacements with warranty. We quote both paths when viable so you choose based on cost, downtime, and warranty coverage — always with written approval before teardown.',
  },
  {
    question: 'How much does transmission repair cost in Englewood?',
    answer:
      'Fluid service starts around $179 plus fluid; minor external repairs and seal jobs vary by labor hours at $120/hr. Major overhaul or replacement is quoted after diagnosis — often thousands depending on unit type and parts. We document fluid condition and scan data so you understand why the scope is priced as it is.',
  },
  {
    question: 'Can towing or mountain driving damage my transmission?',
    answer:
      'Heat is the primary killer. Towing on grades without proper cooling, repeated hard shifts in traffic, and deferred fluid changes break down friction modifiers and overheat clutch packs. We ask about towing history during diagnosis and inspect cooler lines and fluid condition — preventive fluid service at manufacturer intervals extends life on Colorado commuters.',
  },
  {
    question: 'What does transmission fluid color tell you?',
    answer:
      'Bright red or pink fluid with no burnt smell is healthy. Brown fluid shows age and additive depletion. Dark brown or black with burnt odor means heat damage — internal clutch wear is likely. Metal glitter on the pan magnet confirms friction material loss. We document color, smell, and debris before recommending fluid service vs. teardown.',
  },
  {
    question: 'What is a TCM relearn and when is it required?',
    answer:
      'The transmission control module adapts shift pressure and timing to wear. After valve-body service, fluid exchange, or battery disconnect, shift quality may feel harsh until adaptive data relearns. Some platforms require scan-tool relearn procedures — Ford, GM, and Nissan CVTs especially. We reset adaptive tables and road-test hot and cold before return.',
  },
  {
    question: 'How do CVT and traditional automatic failures differ?',
    answer:
      'Traditional planetary autos fail clutch packs, bands, and torque-converter clutches — often recoverable with rebuild if caught early. CVT belt/pulley damage from wrong fluid or overheating usually means replacement, not flush. CVT whine with metal in fluid is a red flag. We identify unit type from VIN and pan inspection before quoting service scope.',
  },
];

export const OIL_CHANGES_PAGE_FAQ: FAQItem[] = [
  {
    question: 'How often should I change my oil in Colorado?',
    answer:
      'Follow your owner manual with severe-duty adjustment for short trips, towing, and extreme temperatures — common in Denver metro. Many modern turbo engines specify 5,000–7,500 mile synthetic intervals despite longer dash reminders. Conventional oil in older low-stress engines may use 3,000–5,000 miles. We stamp the windshield and reset monitors based on your actual driving — not a generic 3,000-mile scare tactic.',
  },
  {
    question: 'Is synthetic oil worth the extra cost?',
    answer:
      'Turbocharged, direct-injection, and high-performance engines require synthetic viscosity and additive packages — conventional oil can coke on hot turbo bearings. Naturally aspirated older engines may use conventional or synthetic blend per manual. We match API/ILSAC spec and viscosity to your VIN rather than upsell synthetic where conventional is specified.',
  },
  {
    question: 'What is included in an RKC oil change?',
    answer:
      'Correct-spec oil and filter, drain-plug gasket, torque-to-spec plug and filter install, oil-level verification, oil-life monitor reset, and multi-point inspection of fluids, belts, hoses, tires, and visible leaks. Undercarriage shields are removed when needed so we actually see the drain point — not a blind quick-lube reach.',
  },
  {
    question: 'Can a cheap oil filter damage my engine?',
    answer:
      'Yes. Filters with weak media or poor bypass valves allow unfiltered oil or collapsed elements to starve bearings. We use quality filter brands with documented burst strength. The few dollars saved on a no-name filter are not worth the risk on a turbo DI engine.',
  },
  {
    question: 'Do you reset the oil life monitor on my dashboard?',
    answer:
      'Yes — for vehicles with oil-life monitoring systems we reset after service so reminders align with the interval we recommend. Some European platforms require scan-tool reset; we handle that in-house when needed.',
  },
  {
    question: 'What other services should I pair with an oil change?',
    answer:
      'Cabin and engine air filters, tire rotation, and fluid level checks are common companions. Milestone items — transmission fluid, coolant exchange, spark plugs — are due by mileage and time, not every oil change. We flag due-soon items on your invoice without pressure to bundle unnecessary services.',
  },
  {
    question: 'What is the difference between 0W-20 and 5W-30 oil?',
    answer:
      'The first number (0W, 5W) is cold-start viscosity — lower numbers flow faster in Colorado winter. The second number (20, 30) is hot operating viscosity. Many turbo DI engines specify 0W-20 for fuel economy and turbo bearing protection. Using 5W-30 where 0W-20 is required can trigger warranty issues and cold-start wear. We match viscosity to your under-hood label and API spec.',
  },
  {
    question: 'When should I follow severe vs normal oil change intervals?',
    answer:
      'Severe schedules apply to short trips under 5 miles, frequent idling, towing, dusty conditions, and extreme temperatures — typical Denver metro commuting qualifies for many vehicles. Severe intervals are often 5,000 miles vs. 7,500–10,000 normal. Dash oil-life monitors may stretch reminders; we reset based on your actual driving pattern, not marketing defaults.',
  },
  {
    question: 'Does altitude affect oil change intervals in Colorado?',
    answer:
      'Altitude itself does not shorten oil life dramatically, but cold starts at 5,280 feet stress oil until operating temperature — especially on short Englewood commutes. Turbocharged engines run hotter and dilute oil with fuel during cold enrichment. Combined with severe-duty driving, we often recommend shorter intervals than the dash displays for turbo DI platforms.',
  },
];

export const SUSPENSION_STEERING_PAGE_FAQ: FAQItem[] = [
  {
    question: 'How do I know if I need new struts or shocks?',
    answer:
      'Cupped tire wear, excessive bounce after bumps, nose dive under braking, and fluid leakage on struts indicate worn dampers. We perform bounce and visual tests plus inspect mounts and boots. Struts are often replaced as assemblies on MacPherson designs because the spring and mount are integral to safe disassembly.',
  },
  {
    question: 'Why does my car pull to one side after hitting a pothole?',
    answer:
      'Impact can bend control arms, shift subframe alignment, or damage tire sidewalls. We inspect for bent components before aligning — alignment alone cannot fix structural bend. Colorado spring potholes on Englewood arterials are a common cause of sudden pull and uneven tire wear.',
  },
  {
    question: 'Do I need an alignment after replacing suspension parts?',
    answer:
      'Yes — any front-end or rear adjustable component replacement changes geometry. We provide before-and-after alignment printouts. Replacing struts, control arms, tie rods, or steering racks without alignment leads to tire wear and wandering within weeks.',
  },
  {
    question: 'What is a ball joint and why is it dangerous when worn?',
    answer:
      'Ball joints connect control arms to steering knuckles and allow suspension travel. Excessive play lets the wheel camber change under load — causing clunks, wandering, and in extreme cases separation. We load-test joints with pry bars and dial indicators; worn joints are a safety repair, not a convenience item.',
  },
  {
    question: 'Can bad suspension cause vibration when braking?',
    answer:
      'Warped rotors cause brake pulsation, but worn control-arm bushings and loose tie rods also transmit vibration through the steering wheel. We separate brake vs. suspension causes during road test so you do not replace rotors when bushings are the real issue.',
  },
  {
    question: 'How much does suspension repair cost at RKC?',
    answer:
      'Strut replacement, ball joints, and alignments are quoted per axle and component at $120/hr labor plus parts. We itemize each line on the written estimate — no bundled mystery front-end packages. Alignment is typically added after any geometry-affecting repair.',
  },
  {
    question: 'What alignment specs matter after suspension repair?',
    answer:
      'Camber, caster, and toe are set to manufacturer spec — typically camber near 0° with slight negative for handling, toe adjusted for tire wear. Thrust angle must be corrected so rear axle aim does not force front toe compensation. We provide before-and-after alignment printouts. Englewood potholes can shift subframe geometry — we inspect for bent components before aligning.',
  },
  {
    question: 'How much ball joint play is too much?',
    answer:
      'Load-bearing lower ball joints with visible vertical play under pry-bar test are a safety failure — not a wait-and-see item. Upper joints and tie-rod ends have tighter tolerances. We measure with dial indicators where spec exists. A clunk over bumps with play at the joint means replace before separation — especially on trucks and SUVs on Colorado roads.',
  },
  {
    question: 'What causes strut mount clunk on cold mornings?',
    answer:
      'Strut mount bearings allow the strut to rotate with steering. Worn rubber isolators and dry bearings clunk on first bumps of the day, then quiet as grease warms. Worn mounts also cause steering bind and uneven tire wear. We inspect mount play during strut replacement — mounts should be replaced with struts on MacPherson designs, not reused.',
  },
];

export const HEATING_AC_PAGE_FAQ: FAQItem[] = [
  {
    question: 'Why is my car AC blowing warm air in Denver summer heat?',
    answer:
      'Common causes include low refrigerant from leaks, weak compressor, stuck blend doors, or condenser fan failure — especially noticeable above 95°F on I-25 stop-and-go traffic. We measure center-vent temperature and high/low-side pressures against ambient temperature charts, not just add refrigerant. Recharge without leak repair fails again within weeks in Colorado summer heat.',
  },
  {
    question: 'How often does car AC need to be recharged?',
    answer:
      'Never, if the system is sealed. Refrigerant loss always means a leak — o-rings at the compressor, condenser stone damage on C-470, or evaporator corrosion. We vacuum-test and dye-trace leaks, repair the source, then charge by weight to manufacturer spec. Annual top-offs from DIY cans mask problems until the compressor slugs with liquid refrigerant.',
  },
  {
    question: 'What is the difference between R134a and R1234yf?',
    answer:
      'R134a (HFC-134a) was the industry standard from roughly 1994 through the mid-2010s with a global-warming potential (GWP) of 1,430. R1234yf (HFO-1234yf) has a GWP near 4 and became mandatory on new U.S. light vehicles. R1234yf uses different service port fittings, requires EPA Section 609–certified recovery equipment rated for A2L refrigerants, and must never be mixed with R134a. Using the wrong refrigerant damages compressors, voids warranties, and violates federal law.',
  },
  {
    question: 'How much more does R1234yf cost than R134a?',
    answer:
      'R1234yf refrigerant typically costs three to five times more per pound than R134a because of patent licensing, specialized handling, and lower production volume. A full charge on a newer SUV can run $150–$300 in refrigerant alone before labor — which is why leak repair matters. We quote refrigerant by weight from your under-hood label so you know the cost before we open the system.',
  },
  {
    question: 'Can I use a recharge can from AutoZone or O\'Reilly?',
    answer:
      'We do not recommend DIY recharge cans for several reasons. They rarely fix the underlying leak, overcharging slugging the compressor with liquid refrigerant is common, sealant additives gum up shop recovery machines, and using R134a on an R1234yf system causes serious damage. EPA regulations require recovered refrigerant to be handled by Section 609–certified technicians — venting to atmosphere is illegal regardless of can size.',
  },
  {
    question: 'Why does my car AC smell musty or like dirty socks?',
    answer:
      'Musty odor usually means mold and bacteria growing on the evaporator core — the cold, damp heat exchanger behind your dash. Colorado drivers who run AC all summer then switch to heat without drying the evaporator see this every fall. Cabin air filter replacement helps airflow, but evaporator treatment or core removal may be needed when biofilm is established. A sweet smell is different — that points to heater-core coolant leak, not mold.',
  },
  {
    question: 'What are heater core leak symptoms?',
    answer:
      'Heater core leaks show as sweet-smelling fog on the windshield, sticky film on interior glass, damp carpet on the passenger footwell, slow coolant loss with no external puddle, or greasy residue on the defroster vents. Coolant on the carpet can damage airbag modules and body control electronics under the center stack. If you smell ethylene glycol inside the cabin, schedule service promptly and avoid prolonged heat use.',
  },
  {
    question: 'How much does AC compressor replacement cost at RKC?',
    answer:
      'Compressor jobs are labor-intensive — often 3–5 hours at $120/hr plus reman or new compressor, receiver-drier or accumulator, o-rings, and refrigerant by weight. R1234yf systems add refrigerant cost. We confirm compressor failure with clutch air gap, bearing noise, and pressure differential tests before ordering parts. Leak repair, evacuation to 500 microns, and charge-by-weight are included in scope quotes.',
  },
  {
    question: 'Can you fix heat that only works when driving?',
    answer:
      'Heat at highway speed but cold at idle in Englewood traffic often points to low coolant, air in the cooling system, clogged heater core from neglected Dex-Cool service, or a thermostat stuck open. A weak water pump also reduces circulation at low RPM. We pressure-test the cooling system, measure heater-core inlet/outlet temperature delta, and verify water-pump flow before recommending core replacement — which is a dash-out job on many vehicles.',
  },
  {
    question: 'Do you service R12 (Freon) systems on classic cars?',
    answer:
      'Pre-1994 vehicles originally charged with R-12 (CFC-12) cannot legally receive new R-12 — production ended in 1995 and venting any refrigerant violates the Clean Air Act. We recover remaining charge, inspect for leaks, and retrofit to R134a with compatible POE or mineral oil, new service port adapters, and often a replacement compressor and seals. Retrofit performance varies by vehicle age; we document expected vent temps so classic car owners know what to expect in Denver heat.',
  },
];

export const ELECTRICAL_SYSTEM_PAGE_FAQ: FAQItem[] = [
  {
    question: 'How do I know if my alternator or battery is bad?',
    answer:
      'Batteries fail crank tests and show high internal resistance; alternators fail to hold 13.5–14.5V under load or produce AC ripple indicating diode damage. We test both before recommending parts. Replacing only the battery on a weak alternator repeats the no-start in days.',
  },
  {
    question: 'What causes a parasitic battery drain?',
    answer:
      'Modules that fail to sleep, aftermarket accessories wired to constant power, stuck relays, and interior lights left on circuits draw milliamps overnight until the battery flatlines. We measure draw after shutdown timers expire and isolate circuits by fuse pull — documenting the offending branch before repair.',
  },
  {
    question: 'Do you repair wiring harnesses and shorts?',
    answer:
      'Yes — we repair chafed harnesses with solder, heat-shrink, and loom rather than tape wraps. Rub-through on body pinch welds and rodent damage are common on high-mileage Denver vehicles. We trace shorts with schematic-based testing instead of replacing entire harnesses when a section repair is sound.',
  },
  {
    question: 'Can a bad starter drain my battery?',
    answer:
      'A starter with shorted windings or a stuck solenoid can draw excessive current and heat — sometimes failing intermittently on hot restart. We measure starter amperage and voltage drop on cables. A good battery with slow crank may be cables or starter, not capacity.',
  },
  {
    question: 'How much does electrical diagnosis cost?',
    answer:
      'Electrical diagnostics start from $129 with labor at $120/hr for repairs. Complex CAN-bus or multi-circuit faults may require additional time — we communicate before expanding scope. Test results stay on your invoice.',
  },
  {
    question: 'Do you install aftermarket electrical accessories?',
    answer:
      'We integrate lights, radios, and fleet equipment with proper fusing and wire gauge — avoiding tap-into circuits that wake modules or void warranties. Poor accessory installs are a leading cause of parasitic drain complaints we diagnose weekly.',
  },
  {
    question: 'What is a parasitic draw test and what is normal?',
    answer:
      'After modules enter sleep mode — typically 20–45 minutes post-shutdown — total draw should be under 50 milliamps on most vehicles. Draw above 100–150 mA flattens a battery in days. We measure amp draw at the battery, then pull fuses to isolate the circuit. Aftermarket dashcams, amps, and stuck relays are common culprits on Denver commuters.',
  },
  {
    question: 'What is alternator ripple and why does it matter?',
    answer:
      'Healthy alternators produce smooth DC under 500 mV AC ripple at the battery. High ripple means failing diode trio or rectifier plates — the battery receives pulsed voltage that cannot fully charge. We scope charging output under load with headlights and blower on before recommending alternator replacement over a $40 ground strap fix.',
  },
  {
    question: 'What is CAN bus and how does it relate to electrical faults?',
    answer:
      'Controller Area Network connects modules — PCM, BCM, ABS, HVAC, steering — on two-wire high-speed data lines. Communication faults set U-codes and cause symptoms from no-start to random warning lights. We verify termination resistance, check power and ground at modules, and use scan tools to see which module stopped responding — not replace parts blindly.',
  },
];

export const BATTERY_TESTING_PAGE_FAQ: FAQItem[] = [
  {
    question: 'Is battery testing really free at RKC?',
    answer:
      'Yes — conductance testing with printed results and a charging-system voltage check is free. We explain state-of-health percentage and recommend replacement only when data supports it. There is no pressure to buy a battery you do not need.',
  },
  {
    question: 'How long do car batteries last in Colorado?',
    answer:
      'Most flooded batteries last 3–5 years in Denver metro due to heat cycles and cold-crank demand in winter. AGM batteries in start-stop vehicles may differ. Date codes on the case help — we advise replacement when conductance drops below reliable cold-crank threshold before you are stranded.',
  },
  {
    question: 'Should I replace my battery before winter?',
    answer:
      'Marginal batteries that pass summer tests often fail first sub-zero morning. Pre-winter testing is smart for commuters and fleet vehicles. We match cold-cranking amps and group size to your VIN and verify alternator output at the same visit.',
  },
  {
    question: 'Do new cars need a battery management system reset?',
    answer:
      'Many European and some Asian vehicles require scan-tool BMS reset after battery replacement so idle-stop and charging strategy calibrate correctly. We register the new battery when required — skipping reset causes premature failure messages and stop-start faults.',
  },
  {
    question: 'Can corrosion on terminals cause a no-start?',
    answer:
      'Absolutely — high resistance at terminals mimics a dead battery. We clean, torque, and sometimes replace cable ends before selling a battery. Voltage-drop testing confirms when cables, not the pack, are the problem.',
  },
  {
    question: 'How much does battery replacement cost?',
    answer:
      'Replacement starts around $149 plus battery cost — labor at $120/hr when cables or registration procedures add time. Premium AGM batteries for start-stop applications cost more but are required for correct operation. We quote group size and CCA before install.',
  },
  {
    question: 'What is CCA testing and how is it different from voltage?',
    answer:
      'Cold Cranking Amps measure available starting power at 0°F — critical for Colorado winters. Resting voltage above 12.4V does not mean the battery can deliver rated CCA. Conductance testers estimate internal resistance and state-of-health percentage. A battery at 70% health may start today and fail at 10°F tomorrow — we share printed results.',
  },
  {
    question: 'What is battery sulfation and can it be reversed?',
    answer:
      'Sulfation forms when a battery sits discharged — lead sulfate crystals harden on plates and reduce capacity. Short-trip Englewood commuting without full recharge accelerates sulfation. Once advanced, sulfation is not reversible — replacement is the fix. Maintaining charge with regular driving or a maintainer on stored vehicles prevents it.',
  },
  {
    question: 'Why do batteries fail faster in Colorado climate?',
    answer:
      'Summer under-hood heat above 140°F evaporates electrolyte and accelerates plate corrosion. Winter cold increases internal resistance — marginal batteries fail on first sub-zero morning. Temperature swings from I-25 traffic to January cold starts are harder on batteries than steady coastal climates. Pre-winter testing catches borderline units before no-start season.',
  },
];

export const EXHAUST_SYSTEM_PAGE_FAQ: FAQItem[] = [
  {
    question: 'Why did I get a P0420 code — do I need a new catalytic converter?',
    answer:
      'P0420 indicates catalyst efficiency below threshold — but upstream leaks, misfires, and lazy O2 sensors can set the same code on a healthy converter. We graph O2 sensor behavior and inspect for exhaust leaks before quoting converter replacement. Fixing root cause first saves money when the cat is not actually worn.',
  },
  {
    question: 'Is it legal to remove a catalytic converter in Colorado?',
    answer:
      'Federal and Colorado emissions rules require functioning catalysts on applicable vehicles. Removal fails emissions inspection and can result in fines. We install EPA/CARB-compliant replacement converters and complete repairs that allow monitors to set before your test.',
  },
  {
    question: 'What causes exhaust rattling at idle?',
    answer:
      'Broken heat shields, failed hanger isolators, and loose flex-pipe bellows rattle independently of muffler internals. We inspect under lift before quoting mufflers — sometimes a shield tack-weld or hanger fixes the noise for minimal cost.',
  },
  {
    question: 'Can an exhaust leak cause a check engine light?',
    answer:
      'Leaks upstream of O2 sensors let oxygen into the exhaust stream, biasing fuel trim and setting lean or efficiency codes. Manifold cracks are common on certain V8 and inline engines — tick when cold that fades as metal expands. We smoke-test and pressure-check critical joints.',
  },
  {
    question: 'How much does catalytic converter replacement cost?',
    answer:
      'Converters are among the most expensive exhaust components — often $800–$2,500+ parts plus labor at $120/hr depending on vehicle and CARB compliance requirements. We confirm failure with data, fix contributing misfires or leaks first, and quote compliant parts before cutting pipe.',
  },
  {
    question: 'Do you weld exhaust or use clamp-on parts?',
    answer:
      'We use direct-fit sections, quality clamps, and welding where appropriate for durability. Flanges and flex sections are aligned to prevent stress cracks. All work is scoped on a written estimate before torches or cutters touch the system.',
  },
  {
    question: 'How do you test catalytic converter efficiency?',
    answer:
      'We compare upstream and downstream O2 sensor switching — a healthy catalyst shows reduced downstream activity. We also verify fuel trims are not running rich, check for exhaust leaks upstream of sensors, and confirm no misfires are poisoning the cat. Converter replacement is quoted only when data confirms efficiency loss, not on P0420 alone.',
  },
  {
    question: 'What does O2 sensor switching tell you about exhaust health?',
    answer:
      'Upstream O2 should switch rich/lean roughly once per second at idle — the PCM uses this to adjust fuel. Downstream O2 on a healthy cat stays relatively steady. Rapid downstream switching mirrors upstream — efficiency code territory. Lazy upstream sensors cause rich/lean faults that mimic cat failure. We graph both sensors before quoting converters.',
  },
  {
    question: 'What are Colorado emissions requirements for exhaust repairs?',
    answer:
      'Gasoline vehicles in the Denver metro require passing OBD-II readiness and tailpipe standards where applicable. Tampered or missing catalysts fail inspection. We install EPA/CARB-compliant converters, complete repairs that allow monitors to set, and coach drive cycles before your emissions appointment — so you pass once, not twice.',
  },
];

export const PREVENTATIVE_MAINTENANCE_PAGE_FAQ: FAQItem[] = [
  {
    question: 'What is the difference between normal and severe maintenance schedules?',
    answer:
      'Severe schedules shorten oil, fluid, and inspection intervals for short trips, towing, dusty conditions, and extreme temperatures — all common in Colorado. Owner manuals default to normal in marketing copy, but Denver commuting often qualifies as severe. We classify your driving honestly and quote intervals that match reality.',
  },
  {
    question: 'What is included in a 30k / 60k / 90k service?',
    answer:
      'Milestones are VIN-specific — not generic. A 60k Honda may need trans fluid and spark plugs; a Toyota may need coolant exchange; German cars need brake-fluid time changes. We build packages from your manual tables: fluids, filters, belts, plugs, and inspections due at that mileage. You approve the bundle before work starts.',
  },
  {
    question: 'Will maintenance at RKC void my factory warranty?',
    answer:
      'No. Federal Magnuson-Moss law protects your right to service at independent shops when proper procedures and parts are used. We document maintenance with invoices and fluid specs your warranty claims may request.',
  },
  {
    question: 'How do I know which maintenance my car actually needs?',
    answer:
      'We read the owner manual interval tables, check your mileage and prior service history, and inspect wear items. Due-now vs. due-soon items are separated — we do not sell a 90k package at 45k miles unless items are legitimately early due to age or condition.',
  },
  {
    question: 'Do you offer fleet preventative maintenance plans?',
    answer:
      'Yes — commercial accounts receive scheduled logging, consolidated invoicing, and priority booking when available. We track oil, brake, and inspection intervals per vehicle so fleet managers are not guessing which unit is due.',
  },
  {
    question: 'Why is preventative maintenance cheaper than waiting for breakdowns?',
    answer:
      'Coolant exchanges cost far less than head gaskets from overheating. Timing-belt service prevents valve interference damage worth thousands. Trans fluid service extends life vs. slip and overhaul. Maintenance spends small dollars on schedule instead of large dollars on emergency tow and collateral damage.',
  },
  {
    question: 'What fluids should be exchanged at 30k, 60k, and 90k?',
    answer:
      'Intervals are VIN-specific — not universal. Common milestones: engine coolant at 60k–100k, brake fluid every 2–3 years, transmission fluid at 30k–60k on severe schedules, differential and transfer-case on AWD at 30k–60k. We build your list from the owner manual table, not a generic shop poster.',
  },
  {
    question: 'What is included in a typical 60k service package?',
    answer:
      'A Honda 60k may include trans fluid, spark plugs, and valve adjustment inspection. Toyota often specifies coolant first drain. German vehicles need brake-fluid time changes regardless of mileage. We quote each line item with labor at $120/hr — you approve the bundle before work starts, not a mystery "60k special."',
  },
  {
    question: 'How do I track maintenance for multiple vehicles or a fleet?',
    answer:
      'We log mileage, services performed, and next-due items on each invoice. Fleet accounts receive consolidated billing and priority booking when available. Each vehicle gets a due-now vs. due-soon list — oil, brakes, inspections — so managers are not guessing which unit needs service this week.',
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

export const RAV4_TIMING_BELT_PAGE_FAQ: FAQItem[] = [
  {
    question: 'Which Toyota RAV4 years need a timing belt instead of a chain?',
    answer:
      '2001–2005 RAV4 models with 1AZ-FE 2.0L and 2004–2012 models with 2AZ-FE 2.4L use timing belts. 2013 and newer RAV4 gas models with 2AR-FE or A25A-FKS engines use timing chains. Hybrid RAV4s from 2016 also use chains. RKC verifies your VIN and engine code before quoting belt labor — installing a belt kit on a chain-driven RAV4 is wasted money.',
  },
  {
    question: 'Is the 2AZ-FE RAV4 engine interference or non-interference?',
    answer:
      'The 2.4L 2AZ-FE and 2.0L 1AZ-FE are interference engines. If the timing belt strips teeth or the tensioner fails, pistons contact open valves — typically bending multiple valves per cylinder. Repair requires cylinder head removal and machine work, often $3,500–$6,000+ versus scheduled belt service around $900–$1,400 at RKC.',
  },
  {
    question: 'Should I replace the water pump when I replace the timing belt?',
    answer:
      'Yes on belt-driven 2AZ-FE and 1AZ-FE RAV4s. The water pump sits behind the same timing cover and is driven by the timing belt. Pump bearing wear opens the weep hole and contaminates the belt with coolant. Replacing belt without pump when seepage is present guarantees a repeat teardown within months.',
  },
  {
    question: 'What is the Toyota timing belt interval for RAV4 in Colorado?',
    answer:
      'Toyota specifies 90,000 miles or 72 months for 1AZ-FE and 2AZ-FE timing belts. Denver metro severe service — mountain towing, short trips, extreme temperature swings — supports the 72-month ceiling even when mileage is lower. RKC documents service date and mileage so you know when the next interval is due.',
  },
  {
    question: 'What are signs my RAV4 timing belt is failing?',
    answer:
      'Ticking at hot idle from a dry tensioner, coolant seepage at the water pump weep hole, oil migration from cam seals onto the belt, and chirping from a seized idler pulley are common warnings. Many failures give no warning at all — which is why Toyota publishes a mileage interval rather than wait-for-symptoms replacement.',
  },
  {
    question: 'Do you replace tensioner and idler pulleys with the belt?',
    answer:
      'Always. Tensioner hydraulic dampers and idler bearings share the same service life as the belt. Replacing belt alone while leaving a worn tensioner is the most common cause of premature second failure. RKC includes tensioner, idler, cam seals, crank seal, and coolant in the standard belt quote.',
  },
  {
    question: 'How much does RAV4 timing belt service cost at RKC?',
    answer:
      'Complete belt, water pump, tensioner, idler, seals, and coolant service on 2AZ-FE RAV4 typically runs $900–$1,400 plus parts at our posted $120/hr labor rate. You receive a written estimate before we remove the timing cover. Head rebuild after belt failure starts around $3,500 — preventive service is dramatically cheaper.',
  },
  {
    question: 'Can I drive my RAV4 if the timing belt is overdue?',
    answer:
      'Every mile on an overdue interference-engine belt is gambling. RKC recommends scheduling belt service immediately when mileage exceeds 90,000 or age exceeds 72 months. If you hear new ticking, see coolant at the pump weep hole, or experience belt squeal, stop driving and arrange tow service — partial belt failure can jump timing without warning.',
  },
  {
    question: 'Does my 2018 or newer RAV4 need timing belt service?',
    answer:
      'No. 2013+ RAV4 gas models use timing chains inspected at high mileage for stretch and tensioner wear — a different service scope. Hybrid RAV4s also use chains with separate inverter coolant maintenance. Bring your VIN to RKC and we will confirm which platform you have before quoting.',
  },
];

export const RAV4_PRE_WINTER_PAGE_FAQ: FAQItem[] = [
  {
    question: 'When should I schedule RAV4 pre-winter service in Colorado?',
    answer:
      'Book in September or October before the first sustained freeze — Englewood and Denver metro typically see hard cold by late October. Batteries fail on the first 10°F morning, not during a mild September afternoon. Early scheduling avoids the November rush when every shop is booked with no-start tow-ins.',
  },
  {
    question: 'What battery CCA rating does my RAV4 need for Colorado winter?',
    answer:
      'Follow the CCA rating on your factory battery label — most RAV4s require 550–700 CCA depending on engine and trim. RKC load-tests at rated CCA, not just open-circuit voltage. A battery at 12.4V resting can still fail under starter load at 0°F. Replace when conductance falls below 70% of rated CCA.',
  },
  {
    question: 'Does RAV4 AWD need fluid service before ski season?',
    answer:
      'Yes on a schedule. Rear differential and transfer coupling fluid degrades from heat and moisture intrusion. Shudder on tight turns, groaning from the rear in parking lots, and delayed AWD engagement signal degraded fluid — not immediate clutch failure. Fresh Toyota-spec gear oil before I-70 season costs far less than coupling repair after a winter of neglect.',
  },
  {
    question: 'What coolant freeze point is safe for Englewood altitude?',
    answer:
      'We target −34°F protection minimum at 5,280 feet using refractometer testing — not color guessing. Weak coolant risks ice expansion in block passages and heater core blockage on sub-zero Federal Blvd mornings. RKC pressure-tests the cap and inspects hoses for swelling while sampling freeze point.',
  },
  {
    question: 'What oil viscosity should my RAV4 use in winter?',
    answer:
      '2013+ gas and hybrid RAV4s specify 0W-20 synthetic — the 0W prefix protects cold starts below 10°F. Older 2AZ-FE models may specify 5W-30 per the under-hood label. Using heavier oil than specified hurts cold-flow protection. Short Englewood commutes qualify as severe service regardless of viscosity.',
  },
  {
    question: 'What extra checks does a RAV4 Hybrid need before winter?',
    answer:
      'Hybrid RAV4s add inverter coolant level and pump operation, hybrid battery cooling intake inspection, and 12V auxiliary battery load test — the HV system depends on strong 12V for contactor closure on cold mornings. Inverter coolant is separate from engine coolant and easy to overlook until power limiting warnings appear.',
  },
  {
    question: 'How deep should tire tread be for I-70 winter driving?',
    answer:
      'RKC recommends minimum 5/32-inch tread on all four corners for snow and slush on I-70 and Loveland Pass approaches. All-season tires below that threshold hydroplane on Eisenhower Tunnel slush. We measure tread depth, check TPMS sensor function, and verify spare pressure as part of pre-winter inspection.',
  },
  {
    question: 'Do I need a block heater for my RAV4 in Denver?',
    answer:
      'Most Colorado RAV4 owners do fine without block heaters using 0W-20 oil and a healthy battery. If you park outdoors below 0°F regularly or have an older 2AZ-FE with 5W-30, an engine block heater reduces cold-start wear. RKC inspects block heater cord and element condition if your vehicle is equipped.',
  },
  {
    question: 'How much does RAV4 pre-winter inspection cost?',
    answer:
      'Multi-point pre-winter inspection at RKC typically runs $89–$129 depending on hybrid and AWD depth. Repairs are quoted separately at $120/hr posted labor — you approve each item before work begins. The written report prioritizes critical fixes before I-70 season versus monitor-through-spring items.',
  },
];

export const RAV4_CHECK_ENGINE_PAGE_FAQ: FAQItem[] = [
  {
    question: 'Why does my RAV4 keep setting P0420 catalytic converter codes?',
    answer:
      'P0420 means downstream O2 sensor activity suggests reduced catalyst efficiency. On high-mileage 2AZ-FE RAV4s, oil consumption fouls plugs, causes misfire, and degrades the catalyst — replacing the converter without addressing oil use returns the code. RKC graphs upstream versus downstream O2 waveforms and measures oil consumption before quoting catalyst replacement.',
  },
  {
    question: 'Is 2AZ-FE oil consumption related to my check engine light?',
    answer:
      'Often yes. Third-generation RAV4 2AZ-FE engines commonly consume oil past 120,000 miles from ring land wear. Oil-fouled plugs and coils misfire under load, dumping unburned fuel into the exhaust and setting P0420 or P030x codes. Oil consumption is a mechanical root cause — not fixed by sensors or converters alone.',
  },
  {
    question: 'Can I drive my RAV4 with a steady check engine light?',
    answer:
      'Usually yes for steady MIL without misfire — schedule diagnosis within days. Steady P0420 without active misfire counters is not emergency but should not run months. Steady P0171 lean with rough idle needs prompt attention. Any flashing MIL means stop driving except to safety — catalyst damage is active.',
  },
  {
    question: 'What does a flashing check engine light mean on a RAV4?',
    answer:
      'Flashing MIL under throttle means catalyst-damaging misfire. Unburned fuel is entering the exhaust and overheating the catalytic converter. Stop driving, reduce load, and tow if flashing continues. Common RAV4 causes include failed coil-on-plug, oil-fouled plugs on 2AZ-FE, and injector faults. RKC triages flashing codes as priority appointments.',
  },
  {
    question: 'Can a parts store scan diagnose my RAV4 hybrid check engine light?',
    answer:
      'Generic OBD readers often miss hybrid P0Axx, P0Cxx, and transaxle codes stored in modules beyond basic powertrain. RAV4 Hybrid faults for inverter temperature, battery block performance, and clutch control require Toyota-capable scan tools. RKC reads hybrid and AWD modules with bidirectional test capability.',
  },
  {
    question: 'What causes P0171 lean codes on Toyota RAV4?',
    answer:
      'P0171/P0174 lean codes on RAV4 commonly trace to vacuum leaks at the PCV hose, intake manifold gasket, cracked air intake boot, or weak MAF readings — worsened by Denver altitude where fuel trim already runs leaner. RKC smoke-tests the intake and verifies live fuel trim before recommending mass airflow or O2 sensor replacement.',
  },
  {
    question: 'How does RKC diagnose RAV4 check engine lights?',
    answer:
      'We classify codes by family and severity, capture freeze-frame data, analyze live fuel trim and O2 activity, smoke-test for lean faults, compression-test when misfire follows mechanical pattern, and read hybrid/AWD modules where applicable. Diagnostic fee starts at $99 and credits toward approved repair at $120/hr posted labor.',
  },
  {
    question: 'Will clearing my check engine light pass Colorado emissions?',
    answer:
      'No if monitors reset to not-ready. Colorado emissions requires readiness monitors complete since the last code clear — catalyst, O2, EVAP, and others. A parts-store erase with MIL off still fails inspection. RKC repairs the fault, then coaches your drive cycle so monitors set on your Englewood commute before your test appointment.',
  },
  {
    question: 'What AWD-related codes appear on RAV4 check engine lights?',
    answer:
      'AWD RAV4s can set coupling overheat, driveshaft disconnect actuator, and wheel-speed correlation codes — often after tight parking-lot turns or degraded transfer fluid. Codes may appear in chassis or driveline modules, not just powertrain. RKC tests coupling engagement, inspects fluid condition, and verifies actuator response before recommending module replacement.',
  },
];
