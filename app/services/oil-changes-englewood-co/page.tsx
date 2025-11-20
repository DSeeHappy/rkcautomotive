import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, AlertTriangle, Droplet } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oil Change Service in Englewood, CO | Quick & Affordable | RKC Automotive',
  description: 'Fast, affordable oil change service in Englewood, CO. Synthetic, conventional, and high-mileage oil. Fluid top-off included. Call (720) 749-3965 today.',
  keywords: 'oil change Englewood CO, oil change Denver, synthetic oil change, conventional oil, quick oil change',
  openGraph: {
    title: 'Oil Change Service in Englewood, CO | RKC Automotive',
    description: 'Professional oil change service with synthetic, conventional, and high-mileage options. Fast service in Englewood.',
    url: 'https://rkcautomotive.com/services/oil-changes-englewood-co',
    type: 'website',
  },
};

export default function OilChangesPage() {
  return (
    <div>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Oil Change Service",
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
            "description": "Professional oil change service including synthetic, conventional, and high-mileage oil options with filter replacement and fluid check in Englewood, CO."
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
            <li className="text-gray-900 font-medium">Oil Changes & Fluid Services</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Droplet className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Oil Change Service in Englewood, CO
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Fast, professional oil changes to keep your engine running smoothly.
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
              RKC Automotive provides professional oil change service in Englewood, CO, with conventional, synthetic, and
              high-mileage oil options. We include oil filter replacement, fluid level checks, and basic inspection with
              every oil change. Located at 2120 W Evans Ave. Call (720) 749-3965 to schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Professional Oil Change Service Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Regular oil changes are the single most important maintenance service for your vehicle&#39;s engine. Fresh oil
              lubricates engine components, reduces friction, removes contaminants, and helps your engine run efficiently.
              At RKC Automotive in Englewood, we provide fast, professional oil change service using quality oil and filters.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Every Oil Change Includes:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Oil & Filter</h4>
                    <p className="text-gray-600 text-sm">Your choice of conventional, synthetic, or high-mileage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fluid Level Check</h4>
                    <p className="text-gray-600 text-sm">Top off essential fluids</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tire Pressure Check</h4>
                    <p className="text-gray-600 text-sm">Ensure proper inflation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Point Inspection</h4>
                    <p className="text-gray-600 text-sm">Basic safety and maintenance check</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Battery Test</h4>
                    <p className="text-gray-600 text-sm">Check battery health</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Reminder Sticker</h4>
                    <p className="text-gray-600 text-sm">Know when your next service is due</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-blue text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Oil Type Options</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Conventional Oil</h4>
                  <p className="text-white">Best for older vehicles and normal driving conditions. Most affordable option.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Synthetic Blend</h4>
                  <p className="text-white">Mix of conventional and synthetic for better protection than conventional at a lower price than full synthetic.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Full Synthetic Oil</h4>
                  <p className="text-white">Best protection for modern engines, extreme temperatures, and towing. Longer intervals between changes.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">High-Mileage Oil</h4>
                  <p className="text-white">Specially formulated for vehicles over 75,000 miles. Helps reduce oil consumption and leaks.</p>
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
              Signs You Need an Oil Change
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Oil Change Light On</h3>
                    <p className="text-gray-600">
                      Dashboard oil change reminder or maintenance light indicates it&#39;s time for service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Dark, Dirty Oil</h3>
                    <p className="text-gray-600">
                      Clean oil is amber-colored. Dark, dirty oil means it&#39;s time for a change.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Engine Noise</h3>
                    <p className="text-gray-600">
                      Knocking or ticking noises can indicate insufficient lubrication from old oil.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Exceeded Mileage Interval</h3>
                    <p className="text-gray-600">
                      Most vehicles need oil changes every 3,000-7,500 miles depending on oil type and driving conditions.
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
            Oil Change FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How often should I change my oil in Englewood, CO?
              </h3>
              <p className="text-gray-700">
                It depends on your vehicle and oil type. Conventional oil typically needs changing every 3,000-5,000 miles.
                Synthetic oil can last 7,500-10,000 miles. Check your owner&#39;s manual for manufacturer recommendations.
                Severe driving conditions (short trips, extreme temperatures, towing) may require more frequent changes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Should I use synthetic or conventional oil?
              </h3>
              <p className="text-gray-700">
                Synthetic oil provides better protection, especially for modern engines, extreme temperatures, and towing.
                It lasts longer between changes and helps engines run cleaner. Conventional oil is fine for older vehicles
                with normal use. We&#39;ll recommend the best option for your specific vehicle and driving habits.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does an oil change cost in Englewood?
              </h3>
              <p className="text-gray-700">
                Conventional oil changes typically cost $40-$70. Synthetic oil changes run $70-$120 depending on your
                vehicle&#39;s oil capacity. High-mileage and synthetic blend options fall in between. Call (720) 749-3965
                for pricing on your specific vehicle.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I switch from conventional to synthetic oil?
              </h3>
              <p className="text-gray-700">
                Yes! You can switch between oil types at any time. In fact, upgrading to synthetic oil provides better
                engine protection and can extend the life of your engine. We can help you choose the right oil for your
                vehicle.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does an oil change take?
              </h3>
              <p className="text-gray-700">
                Most oil changes take 30-45 minutes including the multi-point inspection. We strive to provide quick
                service without sacrificing quality. Call ahead to schedule an appointment for faster service.
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
              href="/services/preventative-maintenance-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Preventative Maintenance</h3>
            </Link>
            <Link
              href="/services/engine-diagnostics-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Engine Diagnostics</h3>
            </Link>
            <Link
              href="/services/brake-repair-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Brake Repair</h3>
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
            Due for an Oil Change?
          </h2>
          <p className="text-xl mb-8 text-white">
            Schedule your oil change service at RKC Automotive in Englewood today.
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
