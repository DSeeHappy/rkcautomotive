import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Auto Electrical System Repair in Englewood, CO | RKC Automotive',
  description: 'Expert auto electrical repair in Englewood, CO. Battery, alternator, starter, wiring, and electrical diagnostics. Call (720) 749-3965 for reliable electrical service.',
  keywords: 'auto electrical repair Englewood CO, car electrical Denver, alternator replacement, starter repair, wiring problems',
  openGraph: {
    title: 'Auto Electrical System Repair in Englewood, CO | RKC Automotive',
    description: 'Professional automotive electrical diagnostics and repair. Battery, alternator, starter, and electrical system service.',
    url: 'https://rkcautomotive.com/services/electrical-system-englewood-co',
    type: 'website',
  },
};

export default function ElectricalSystemPage() {
  return (
    <div>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Auto Electrical System Repair",
            "provider": {
              "@type": "AutomotiveBusiness",
              "name": "RKC Automotive",
              "telephone": "+1-720-749-3965",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2120 W Evans Ave",
                "addressLocality": "Englewood",
                "addressRegion": "CO",
                "postalCode": "80110",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Englewood"
            },
            "description": "Professional automotive electrical system repair including battery service, alternator replacement, starter repair, and electrical diagnostics in Englewood, CO."
          })
        }}
      />

      {/* Breadcrumbs */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-primary-green">Home</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><Link href="/services" className="hover:text-primary-green">Services</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li className="text-gray-900 font-medium">Electrical System Repair</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Auto Electrical System Repair in Englewood, CO
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Expert electrical diagnostics and repair for all makes and models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="tel:+17207493965"
              className="bg-primary-green hover:bg-primary-green-dark text-white font-bold py-3 px-8 rounded-lg inline-flex items-center justify-center transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (720) 749-3965
            </a>
            <Link
              href="/englewood-co-auto-repair"
              className="bg-white hover:bg-gray-100 text-primary-blue font-bold py-3 px-8 rounded-lg inline-flex items-center justify-center transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-primary-green">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Quick Answer</h2>
            <p className="text-gray-700">
              RKC Automotive provides complete auto electrical system repair in Englewood, CO, including battery service,
              alternator replacement, starter repair, wiring diagnostics, and electrical component repair. Modern vehicles
              rely on complex electrical systems - trust our experts. Located at 2120 W Evans Ave. Call (720) 749-3965.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Professional Electrical Repair Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Modern vehicles have complex electrical systems controlling everything from engine management to safety
              features. When electrical problems occur, they can be frustrating and difficult to diagnose. At RKC Automotive
              in Englewood, our technicians have the expertise and diagnostic equipment to troubleshoot and repair all
              electrical issues.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Electrical Services:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Battery Testing & Replacement</h4>
                    <p className="text-gray-600 text-sm">Ensure reliable starts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alternator Repair & Replacement</h4>
                    <p className="text-gray-600 text-sm">Keep your battery charged</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Starter Motor Service</h4>
                    <p className="text-gray-600 text-sm">Fix no-start conditions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Wiring Diagnostics & Repair</h4>
                    <p className="text-gray-600 text-sm">Trace and fix wiring issues</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fuse & Relay Replacement</h4>
                    <p className="text-gray-600 text-sm">Restore electrical circuits</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Electrical Diagnostics</h4>
                    <p className="text-gray-600 text-sm">Computer and system testing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
              Signs of Electrical Problems
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Car won&#39;t Start</h3>
                    <p className="text-gray-600">
                      Engine cranks slowly or not at all - could be dead battery, bad alternator, or faulty starter.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Dimming or Flickering Lights</h3>
                    <p className="text-gray-600">
                      Headlights or dashboard lights dim or flicker - indicates charging system problems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Battery Warning Light</h3>
                    <p className="text-gray-600">
                      Battery or charging system warning light on dashboard requires immediate attention.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Accessories Not Working</h3>
                    <p className="text-gray-600">
                      Power windows, locks, or radio malfunction - electrical component or wiring issue.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Burning Smell or Smoke</h3>
                    <p className="text-gray-600">
                      Burning electrical smell or smoke - stop driving immediately and call for service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Frequent Jump Starts Needed</h3>
                    <p className="text-gray-600">
                      Battery dies repeatedly - alternator not charging or parasitic drain draining battery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
            Electrical System FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I know if my alternator or battery is bad?
              </h3>
              <p className="text-gray-700">
                If your car won&#39;t start after a jump, it&#39;s likely the alternator (not charging). If it starts but dies
                again later, it could be the battery. We test both components to determine which needs replacement. Battery
                warning lights, dimming lights while driving, or electrical accessories acting strangely suggest alternator
                problems.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does alternator replacement cost in Englewood?
              </h3>
              <p className="text-gray-700">
                Alternator replacement typically costs $400-$800 including parts and labor, depending on your vehicle.
                Some vehicles require more labor due to difficult access. We provide detailed estimates before starting
                work. Call (720) 749-3965 for a quote for your specific vehicle.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can you fix electrical shorts and wiring problems?
              </h3>
              <p className="text-gray-700">
                Yes! Electrical diagnostics is one of our specialties. We use professional diagnostic equipment to trace
                wiring issues, shorts, and parasitic drains. Whether it&#39;s a simple blown fuse or a complex wiring problem,
                our technicians can diagnose and repair it.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long do car batteries last in Colorado?
              </h3>
              <p className="text-gray-700">
                Car batteries typically last 3-5 years, but Colorado&#39;s temperature extremes (hot summers, cold winters)
                can shorten battery life to 2-4 years. We recommend battery testing annually, especially before winter.
                Preventative battery replacement is cheaper than emergency towing and a new battery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link
              href="/services/battery-testing-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Battery Testing</h3>
            </Link>
            <Link
              href="/services/engine-diagnostics-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Engine Diagnostics</h3>
            </Link>
            <Link
              href="/services/preventative-maintenance-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Preventative Maintenance</h3>
            </Link>
            <Link
              href="/services"
              className="bg-primary-green text-white rounded-lg p-6 hover:bg-primary-green-dark transition-colors text-center font-semibold"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Electrical Problems? We&#39;ll Find and Fix Them
          </h2>
          <p className="text-xl mb-8 text-white">
            Contact RKC Automotive for expert electrical diagnostics and repair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17207493965"
              className="bg-primary-green hover:bg-primary-green-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call (720) 749-3965
            </a>
            <Link
              href="/englewood-co-auto-repair"
              className="bg-white hover:bg-gray-100 text-primary-blue font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              <MapPin className="w-6 h-6 mr-2" />
              Visit Our Shop
            </Link>
          </div>
          <p className="mt-6 text-white text-sm">
            Serving Englewood, Denver, Littleton, Sheridan, and surrounding areas
          </p>
        </div>
      </section>
    </div>
  );
}
