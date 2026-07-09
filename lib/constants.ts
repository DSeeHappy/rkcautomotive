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
  website: 'https://rkcautomotive.com',
  hours: {
    weekdays: 'Mon–Fri: 8:00 AM – 6:00 PM',
    saturday: 'Sat: 8:00 AM – 12:00 PM',
    sunday: 'Sun: Closed',
  },
  yearsExperience: 30,
  vehiclesServiced: '5,000+',
  serviceCategories: 11,
  tagline: 'ASE Certified · Englewood, CO · Hablo Español',
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
] as const;

export const FOOTER_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Areas We Serve', href: '/areas-we-serve' },
  { name: 'Vehicles We Service', href: '/vehicles-we-service' },
  { name: 'Location', href: '/englewood-co-auto-repair' },
  { name: 'FAQ', href: '/frequently-asked-questions' },
  { name: 'All Services', href: '/services' },
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
    description: 'Advanced diagnostics to find problems fast.',
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
  '30+ Years Experience',
  'Written Estimates',
  'Same-Day Service',
  'All Makes & Models',
  'Hablo Español',
  'Locally Owned',
] as const;

export { VEHICLE_BRANDS as BRAND_MARQUEE } from '@/lib/vehicleBrands';

export const LABOR_RATE = '$120/hr' as const;

export const PRICING_COMPARISON = [
  {
    name: 'Dealership',
    laborRate: '$150–200+/hr',
    diagnosticFee: '$150–250',
    upselling: 'Common — extra services pushed',
    turnaround: '2–5 business days',
    estimate: 'Often vague until bill arrives',
    highlight: false,
  },
  {
    name: 'Chain Shop',
    laborRate: '$130–160/hr',
    diagnosticFee: '$89–150',
    upselling: 'Frequent — package add-ons',
    turnaround: '1–3 business days',
    estimate: 'Menu pricing, limited detail',
    highlight: false,
  },
  {
    name: 'RKC Automotive',
    laborRate: LABOR_RATE,
    diagnosticFee: 'From $99 — applied to repair',
    upselling: 'None — only what you need',
    turnaround: 'Same-day when possible',
    estimate: 'Written before any work',
    highlight: true,
  },
] as const;

export const PRICING_COMPARISON_ROWS = [
  { label: 'Labor rate', key: 'laborRate' as const },
  { label: 'Diagnostic fee', key: 'diagnosticFee' as const },
  { label: 'Upselling', key: 'upselling' as const },
  { label: 'Turnaround', key: 'turnaround' as const },
  { label: 'Estimate', key: 'estimate' as const },
] as const;

export const PRICING_PHILOSOPHY = [
  {
    title: 'One rate. No games.',
    description:
      'Our labor rate is $120/hr — posted, explained, and applied consistently. No surprise shop fees or padded line items.',
  },
  {
    title: 'Written before we wrench.',
    description:
      'Every repair gets a written estimate you approve first. If the job changes, we call you before spending another dollar.',
  },
  {
    title: 'Fix it. Get you driving.',
    description:
      'We diagnose the actual problem — not every sensor on the diagram. Same-day service when parts are on hand and the bay is open.',
  },
] as const;

export const PRICING_PACKAGES = [
  {
    name: 'Essential Care',
    price: 'From $79',
    description: 'Routine maintenance — no bundled extras you did not ask for.',
    featured: false,
    features: [
      'Synthetic oil change',
      'Tire rotation',
      'Multi-point inspection',
      'Fluid top-offs',
      'Cabin air filter check',
    ],
    cta: 'Call to schedule',
  },
  {
    name: 'Safety Package',
    price: 'From $349',
    description: 'Brakes and battery work priced at $120/hr labor — straight numbers.',
    featured: true,
    features: [
      'Brake pad + rotor (per axle starts)',
      'Free brake inspection',
      'Battery test & load check',
      'Written estimate before work',
      'Priority same-day slots when available',
    ],
    cta: 'Call to schedule',
  },
  {
    name: 'Diagnostic Pro',
    price: 'From $99',
    description: 'Find the real problem. Fee credited toward approved repair.',
    featured: false,
    features: [
      'Check-engine diagnostic',
      'Code scan & verification',
      'Road-test evaluation',
      'Fee applied toward approved repair',
      'Clear next-step plan',
    ],
    cta: 'Call to schedule',
  },
] as const;

export const PRICING_TIERS = [
  {
    category: 'Maintenance',
    items: [
      { service: 'Oil Change (Conventional)', price: 'From $49', note: 'Includes filter & multi-point inspection' },
      { service: 'Oil Change (Synthetic)', price: 'From $79', note: 'Premium synthetic oil' },
      { service: 'Tire Rotation', price: 'From $29', note: 'Extend tire life' },
      { service: 'Multi-Point Inspection', price: 'Free', note: 'With any service' },
    ],
  },
  {
    category: 'Brakes & Safety',
    items: [
      { service: 'Brake Inspection', price: 'Free', note: 'Visual inspection' },
      { service: 'Brake Pad Replacement (per axle)', price: 'From $189', note: 'Pads & labor' },
      { service: 'Brake Pad + Rotor (per axle)', price: 'From $349', note: 'Pads, rotors & labor' },
      { service: 'Brake Fluid Flush', price: 'From $99', note: 'Fresh fluid for responsive braking' },
    ],
  },
  {
    category: 'Diagnostics & Electrical',
    items: [
      { service: 'Check Engine Light Diagnostic', price: 'From $99', note: 'Applied toward repair if approved' },
      { service: 'Battery Test', price: 'Free', note: 'Quick health check' },
      { service: 'Battery Replacement', price: 'From $149', note: 'Plus battery cost' },
      { service: 'Electrical Diagnostic', price: 'From $129', note: 'Wiring & component testing' },
    ],
  },
  {
    category: 'Fluids & Filters',
    items: [
      { service: 'Coolant Flush', price: 'From $129', note: 'Protect your engine' },
      { service: 'Transmission Fluid Service', price: 'From $179', note: 'Extend transmission life' },
      { service: 'Cabin Air Filter', price: 'From $39', note: 'Cleaner air inside' },
      { service: 'Engine Air Filter', price: 'From $29', note: 'Better fuel economy' },
    ],
  },
] as const;

export type FAQItem = { question: string; answer: string };

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
