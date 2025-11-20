import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, AlertTriangle, Battery } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Battery Testing & Replacement in Englewood, CO | RKC Automotive',
  description: 'Free battery testing and professional battery replacement in Englewood, CO. Don\'t get stranded. Call (720) 749-3965 for battery service today.',
  keywords: 'battery testing Englewood CO, car battery replacement Denver, battery service, dead battery, jump start',
  openGraph: {
    title: 'Car Battery Testing & Replacement in Englewood, CO | RKC Automotive',
    description: 'Professional battery testing and replacement. Stay reliable with quality batteries and expert installation.',
    url: 'https://rkcautomotive.com/services/battery-testing-englewood-co',
    type: 'website',
  },
};

export default function BatteryTestingPage() {
  return (
    <div>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Car Battery Testing and Replacement",
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
            "description": "Professional car battery testing and replacement service including battery health diagnostics and quality battery installation in Englewood, CO."
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
            <li className="text-gray-900 font-medium">Battery Testing & Replacement</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Battery className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Car Battery Testing & Replacement in Englewood, CO
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Free battery testing and professional battery replacement to keep you on the road.
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
              RKC Automotive provides free battery testing and professional battery replacement in Englewood, CO. We test
              battery health, charging system, and recommend replacement when needed. Quality batteries with warranty
              included. Don't get stranded - get your battery tested. Located at 2120 W Evans Ave. Call (720) 749-3965.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Professional Battery Service Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Your car battery is essential for starting your engine and powering electrical systems. Colorado's extreme
              temperatures - from scorching summer heat to sub-zero winters - are especially hard on batteries, often
              shortening their lifespan to 2-4 years. At RKC Automotive in Englewood, we provide comprehensive battery
              testing and quality battery replacement to keep you reliably on the road.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Battery Services:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Free Battery Testing</h4>
                    <p className="text-gray-600 text-sm">Comprehensive battery health check</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Charging System Test</h4>
                    <p className="text-gray-600 text-sm">Verify alternator is charging properly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Battery Replacement</h4>
                    <p className="text-gray-600 text-sm">Premium batteries with warranty</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Installation</h4>
                    <p className="text-gray-600 text-sm">Proper installation and testing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Terminal Cleaning</h4>
                    <p className="text-gray-600 text-sm">Clean corrosion for better connection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Old Battery Recycling</h4>
                    <p className="text-gray-600 text-sm">Environmentally responsible disposal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-blue text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Why Colorado Is Hard on Batteries</h3>
              <p className="mb-4">
                Colorado's climate extremes significantly shorten battery life compared to moderate climates:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Summer Heat:</strong> High temperatures accelerate battery fluid evaporation and internal degradation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Winter Cold:</strong> Freezing temperatures reduce battery capacity and make starting harder</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Altitude Effects:</strong> Lower oxygen levels can stress charging systems</span>
                </li>
              </ul>
              <p className="mt-4">
                We recommend battery testing before winter arrives to avoid being stranded in the cold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
              Signs Your Battery Needs Replacement
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Slow Engine Crank</h3>
                    <p className="text-gray-600">
                      Engine cranks slowly when starting, especially in cold weather - classic sign of weak battery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Battery Age 3+ Years</h3>
                    <p className="text-gray-600">
                      In Colorado's climate, batteries typically last 3-5 years. Have it tested if it's over 3 years old.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Dimming Lights</h3>
                    <p className="text-gray-600">
                      Headlights or interior lights dim when idling or using accessories - battery losing capacity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Frequent Jump Starts</h3>
                    <p className="text-gray-600">
                      Need jump starts regularly - battery can't hold a charge. Could also be alternator issue.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Swollen Battery Case</h3>
                    <p className="text-gray-600">
                      Battery case appears swollen or bloated - internal damage from extreme heat. Replace immediately.
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
                      Dashboard battery light on indicates charging system problem - could be battery or alternator.
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
            Battery Service FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long do car batteries last in Englewood, CO?
              </h3>
              <p className="text-gray-700">
                Car batteries typically last 3-5 years nationally, but Colorado's temperature extremes often shorten this
                to 2-4 years. Hot summers accelerate battery degradation, while cold winters reduce capacity. We recommend
                annual battery testing after year 2, and proactive replacement after 3-4 years to avoid being stranded.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does battery replacement cost in Englewood?
              </h3>
              <p className="text-gray-700">
                Battery replacement typically costs $150-$300 depending on your vehicle's battery type and size. This
                includes the battery, professional installation, terminal cleaning, and old battery recycling. Premium
                batteries with longer warranties cost more but provide better reliability. Call (720) 749-3965 for a quote.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can you test my battery for free?
              </h3>
              <p className="text-gray-700">
                Yes! We provide free battery testing at RKC Automotive. Our computerized battery tester checks battery
                health, cranking amps, and charging system performance. Testing takes just a few minutes and we'll provide
                honest recommendations. No pressure to buy - we want you informed about your battery's condition.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Should I replace my battery before winter?
              </h3>
              <p className="text-gray-700">
                Absolutely! Cold weather is the hardest test for your battery. If your battery is over 3 years old or
                showing signs of weakness, replace it before winter arrives. It's much cheaper than an emergency tow on
                a freezing morning. We recommend fall battery testing for all Colorado drivers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What's the difference between battery types?
              </h3>
              <p className="text-gray-700">
                Standard flooded batteries are most common and affordable. AGM (Absorbent Glass Mat) batteries are
                premium options that last longer, perform better in extreme temperatures, and are required for some vehicles
                with start-stop technology. We'll recommend the correct battery type for your vehicle and driving needs.
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
              href="/services/electrical-system-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Electrical System</h3>
            </Link>
            <Link
              href="/services/check-engine-light-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Check Engine Light</h3>
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
            Don't Get Stranded - Test Your Battery Today
          </h2>
          <p className="text-xl mb-8 text-white">
            Free battery testing at RKC Automotive. Get peace of mind before you're stuck.
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
