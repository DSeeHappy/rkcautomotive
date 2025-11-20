import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Wrench,
  Shield,
  Battery,
  Disc,
  Car,
  Droplet,
  Wind,
  AlertTriangle,
  ShieldCheck,
  Award,
  Users,
  Calendar
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'RKC Automotive | Trusted Auto Repair in Englewood, CO',
  description: 'Professional auto repair and maintenance in Englewood, CO. Expert service for brakes, engines, batteries, and more. Call (720) 749-3965 for service today.',
  keywords: 'auto repair Englewood CO, car repair Denver, mechanic Englewood, brake repair, oil change, battery replacement',
  openGraph: {
    title: 'RKC Automotive | Trusted Auto Repair in Englewood, CO',
    description: 'Professional auto repair and maintenance serving Englewood and Denver metro area.',
    url: 'https://rkcautomotive.com',
    type: 'website',
  },
};

export default function Home() {
  const featuredServices = [
    {
      name: 'Preventative Maintenance',
      description: 'Stay ahead of problems with regular maintenance. Essential for Colorado winters.',
      icon: ShieldCheck,
      href: '/services/preventative-maintenance-englewood-co',
      highlight: true,
    },
    {
      name: 'Battery Testing & Replacement',
      description: 'Free battery testing. Don\'t get stranded in the cold.',
      icon: Battery,
      href: '/services/battery-testing-englewood-co',
    },
    {
      name: 'Brake Repair',
      description: 'Complete brake service for safe winter driving.',
      icon: Disc,
      href: '/services/brake-repair-englewood-co',
    },
    {
      name: 'Engine Diagnostics',
      description: 'Advanced diagnostics to identify problems quickly.',
      icon: Car,
      href: '/services/engine-diagnostics-englewood-co',
    },
    {
      name: 'Oil Changes',
      description: 'Regular oil changes keep your engine running smoothly.',
      icon: Droplet,
      href: '/services/oil-changes-englewood-co',
    },
    {
      name: 'Heating & AC',
      description: 'Stay warm this winter with reliable heating.',
      icon: Wind,
      href: '/services/heating-ac-englewood-co',
    },
  ];

  const allServices = [
    { name: 'Brake Repair', href: '/services/brake-repair-englewood-co' },
    { name: 'Engine Diagnostics', href: '/services/engine-diagnostics-englewood-co' },
    { name: 'Transmission Services', href: '/services/transmission-services-englewood-co' },
    { name: 'Suspension & Steering', href: '/services/suspension-steering-englewood-co' },
    { name: 'Heating & AC', href: '/services/heating-ac-englewood-co' },
    { name: 'Electrical System', href: '/services/electrical-system-englewood-co' },
    { name: 'Oil Changes', href: '/services/oil-changes-englewood-co' },
    { name: 'Check Engine Light', href: '/services/check-engine-light-englewood-co' },
    { name: 'Battery Testing', href: '/services/battery-testing-englewood-co' },
    { name: 'Exhaust System', href: '/services/exhaust-system-englewood-co' },
    { name: 'Preventative Maintenance', href: '/services/preventative-maintenance-englewood-co' },
  ];

  return (
    <div>
      {/* Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            "name": "RKC Automotive",
            "image": "https://rkcautomotive.com/og-image.jpg",
            "telephone": "+1-720-749-3965",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2120 W Evans Ave",
              "addressLocality": "Englewood",
              "addressRegion": "CO",
              "postalCode": "80110",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "12:00"
              }
            ],
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": "Englewood"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-32 lg:pb-40 xl:col-span-6">
            <div className="mx-auto max-w-lg lg:mx-0">
              <div className="flex items-center gap-x-3 mb-8">
                <span className="text-4xl font-bold text-primary-green">RKC</span>
                <span className="text-4xl font-bold text-primary-blue">Automotive</span>
              </div>
              <h1 className="mt-10 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Englewood&#39;s Trusted Auto Repair Shop
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-600 sm:text-xl">
                Professional automotive service and repair you can count on. Over 30 years serving Englewood and Denver metro with expert technicians, honest pricing, and quality workmanship.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="tel:+17207493965"
                  className="rounded-md bg-primary-green px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-green-dark transition-colors"
                >
                  <div className="flex items-center gap-x-2">
                    <Phone className="w-5 h-5" />
                    Call (720) 749-3965
                  </div>
                </a>
                <Link
                  href="/services"
                  className="text-base font-semibold text-gray-900 hover:text-primary-green transition-colors"
                >
                  View Services <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-x-6 text-sm">
                <div className="flex items-center gap-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-primary-green" />
                  <span>ASE Certified</span>
                </div>
                <div className="flex items-center gap-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-primary-green" />
                  <span>30+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              alt="Auto repair shop"
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
              className="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </section>

      {/* Quick Info Bar - Hours, Location, Phone */}
      <section className="bg-white border-y-2 border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Hours */}
            <div className="flex items-start gap-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-blue rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                <p className="text-sm text-gray-700">Mon-Fri: 8:00 AM - 5:00 PM</p>
                <p className="text-sm text-gray-700">Sat: 8:00 AM - 12:00 PM</p>
                <p className="text-sm text-red-600 font-semibold">Sun: Closed</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-green rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-sm text-gray-700">2120 W Evans Ave</p>
                <p className="text-sm text-gray-700 mb-2">Englewood, CO 80110</p>
                <a
                  href="https://share.google/hRQ6WsLJdoo0DwUlu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary-green hover:text-primary-green-dark inline-flex items-center"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-green rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Call Us Today</h3>
                <a
                  href="tel:+17207493965"
                  className="text-2xl font-bold text-primary-green hover:text-primary-green-dark block mb-2"
                >
                  (720) 749-3965
                </a>
                <p className="text-sm text-gray-600">Expert auto repair service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Readiness Alert */}
      <section className="bg-primary-blue text-white py-4 border-b-4 border-primary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
              <div>
                <p className="font-bold text-lg">Is Your Car Winter Ready?</p>
                <p className="text-sm text-blue-100">Free battery testing • Fluid checks • Winter maintenance</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <a
                href="tel:+17207493965"
                className="bg-primary-green hover:bg-primary-green-dark text-white font-semibold px-6 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Call Now
              </a>
              <Link
                href="/services/preventative-maintenance-englewood-co"
                className="bg-white hover:bg-gray-100 text-primary-blue font-semibold px-6 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-primary-green">Professional Auto Care</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Services You Can Trust
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to major repairs, we handle it all with expertise and care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200 hover:border-primary-green"
                >
                  <div className="flex items-start gap-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-green group-hover:bg-primary-green-dark transition-colors">
                        <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-green transition-colors">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {service.description}
                      </p>
                      <span className="mt-3 inline-flex items-center text-sm font-semibold text-primary-green group-hover:underline">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-primary-blue px-6 py-3 text-base font-semibold text-white hover:bg-primary-blue-dark transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators / Stats */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary-green uppercase tracking-wide">
              Proven Track Record
            </h2>
            <p className="mt-2 text-4xl font-bold text-white sm:text-5xl">
              Three Decades of Trusted Service in Colorado
            </p>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Local shop, world-class service — we outperform the big chains with personal care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-green transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-green rounded-lg mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">30+</div>
              <div className="text-lg text-gray-300">Years Serving</div>
              <div className="text-sm text-gray-500 mt-1">Englewood & Denver Metro</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-green transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-green rounded-lg mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">5,000+</div>
              <div className="text-lg text-gray-300">Cars Serviced</div>
              <div className="text-sm text-gray-500 mt-1">And counting every week</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-green transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-green rounded-lg mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">11</div>
              <div className="text-lg text-gray-300">Service Categories</div>
              <div className="text-sm text-gray-500 mt-1">Complete auto care</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-green transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-green rounded-lg mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-lg text-gray-300">Customer Focused</div>
              <div className="text-sm text-gray-500 mt-1">Your satisfaction guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RKC - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RKC Automotive?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another auto shop. We're your neighbors committed to keeping you safe on Colorado roads.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green rounded-full mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Technicians</h3>
              <p className="text-gray-600 leading-relaxed">
                Our ASE-certified mechanics have years of experience servicing all makes and models. We stay current with the latest automotive technology and diagnostic equipment.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue rounded-full mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Honest & Fair</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing with no hidden fees. We provide detailed estimates before any work begins and never recommend unnecessary services. Your trust is our reputation.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green rounded-full mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Local & Trusted</h3>
              <p className="text-gray-600 leading-relaxed">
                Family-owned and operated right here in Englewood. We're your neighbors, and we care about keeping your family safe on Colorado's challenging roads and weather.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Quick List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Automotive Services</h2>
            <p className="text-lg text-gray-600">
              From oil changes to major repairs, we handle it all
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {allServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="flex items-center gap-x-3 bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors border border-gray-200 group"
              >
                <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0" />
                <span className="font-medium text-gray-900 group-hover:text-primary-green transition-colors">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-primary-green hover:text-primary-green-dark font-semibold text-lg"
            >
              See detailed service descriptions →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary-green text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Wait for a Breakdown
          </h2>
          <p className="text-xl mb-10 text-green-50">
            Regular maintenance prevents costly repairs. Schedule your service today and keep your vehicle running reliably through Colorado's toughest conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17207493965"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary-green font-bold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call (720) 749-3965
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-primary-blue hover:bg-primary-blue-dark text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              View All Services
            </Link>
            <a
              href="https://share.google/hRQ6WsLJdoo0DwUlu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-green-dark hover:bg-primary-green text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors border-2 border-white"
            >
              <MapPin className="w-6 h-6 mr-2" />
              Get Directions
            </a>
          </div>
          <p className="mt-8 text-green-100 text-sm">
            Proudly serving Englewood, Denver, Littleton, Sheridan, and surrounding areas
          </p>
        </div>
      </section>
    </div>
  );
}
