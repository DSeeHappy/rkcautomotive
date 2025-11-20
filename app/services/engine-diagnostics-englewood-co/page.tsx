import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, AlertTriangle, Car } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engine Diagnostics & Repair in Englewood, CO | RKC Automotive',
  description: 'Expert engine diagnostics and repair in Englewood, CO. Advanced diagnostic equipment for all makes and models. Call (720) 749-3965 for engine service.',
  keywords: 'engine diagnostics Englewood CO, engine repair Denver, check engine light, engine performance, auto diagnostics',
  openGraph: {
    title: 'Engine Diagnostics & Repair in Englewood, CO | RKC Automotive',
    description: 'Professional engine diagnostics and repair using advanced diagnostic equipment. Serving Englewood and Denver.',
    url: 'https://rkcautomotive.com/services/engine-diagnostics-englewood-co',
    type: 'website',
  },
};

export default function EngineDiagnosticsPage() {
  return (
    <div>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Engine Diagnostics and Repair",
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
            "description": "Professional engine diagnostics and repair services including check engine light diagnosis, engine performance tuning, and complete engine repair for all makes and models in Englewood, CO."
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
            <li className="text-gray-900 font-medium">Engine Diagnostics & Repair</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Car className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Engine Diagnostics & Repair in Englewood, CO
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Advanced diagnostics and expert engine repair for all makes and models.
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
              RKC Automotive provides comprehensive engine diagnostics and repair in Englewood, CO, using state-of-the-art
              diagnostic equipment. We diagnose check engine lights, engine misfires, performance issues, and complete engine
              repairs for all makes and models. Located at 2120 W Evans Ave. Call (720) 749-3965.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Expert Engine Diagnostics Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Modern vehicles are complex machines with sophisticated computer systems. When something goes wrong with your
              engine, accurate diagnostics are essential to identifying and fixing the problem efficiently. At RKC Automotive
              in Englewood, we use advanced diagnostic equipment and decades of experience to quickly pinpoint engine issues.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              From mysterious check engine lights to rough idling, poor performance, or strange noises, our ASE-certified
              technicians have the expertise to diagnose and repair all engine problems on domestic and foreign vehicles.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Engine Services Include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Computer Diagnostics</h4>
                    <p className="text-gray-600 text-sm">Advanced scanning and code reading</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Check Engine Light Diagnosis</h4>
                    <p className="text-gray-600 text-sm">Identify the root cause, not just the symptom</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Engine Performance Tuning</h4>
                    <p className="text-gray-600 text-sm">Optimize power and fuel efficiency</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sensor Replacement</h4>
                    <p className="text-gray-600 text-sm">O2 sensors, MAF sensors, and more</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Engine Misfire Diagnosis</h4>
                    <p className="text-gray-600 text-sm">Find and fix misfires quickly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Timing Belt/Chain Service</h4>
                    <p className="text-gray-600 text-sm">Prevent catastrophic engine failure</p>
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
              Signs Your Engine Needs Diagnostics
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Bring your vehicle to RKC Automotive in Englewood if you notice any of these symptoms:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Check Engine Light On</h3>
                    <p className="text-gray-600">
                      The check engine light indicates your vehicle&#39;s computer has detected a problem. don&#39;t ignore it -
                      get it diagnosed promptly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Rough Idling or Stalling</h3>
                    <p className="text-gray-600">
                      Engine runs rough at idle, shakes excessively, or stalls frequently - indicates potential fuel,
                      ignition, or sensor issues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Poor Fuel Economy</h3>
                    <p className="text-gray-600">
                      Sudden drop in gas mileage suggests engine inefficiency from sensor problems, fuel system issues,
                      or ignition troubles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Loss of Power</h3>
                    <p className="text-gray-600">
                      Engine lacks power during acceleration or struggles to maintain highway speeds - could be fuel
                      delivery, ignition, or sensor problems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Strange Noises</h3>
                    <p className="text-gray-600">
                      Knocking, pinging, or unusual sounds from the engine bay require immediate professional diagnosis
                      to prevent serious damage.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Excessive Smoke</h3>
                    <p className="text-gray-600">
                      Blue, white, or black smoke from the exhaust indicates engine problems requiring immediate attention
                      from our technicians.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RKC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
            Why Choose RKC for Engine Diagnostics?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Advanced Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art diagnostic scanners and equipment to accurately identify engine issues on all vehicles.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Technicians</h3>
              <p className="text-gray-600">
                ASE-certified mechanics with years of experience diagnosing and repairing engines on all makes and models.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Honest Diagnosis</h3>
              <p className="text-gray-600">
                We provide clear explanations and honest recommendations. No unnecessary repairs, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
            Engine Diagnostics FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What does an engine diagnostic test include?
              </h3>
              <p className="text-gray-700">
                An engine diagnostic test uses a computerized scanner to read trouble codes from your vehicle&#39;s onboard
                computer (ECU). We then interpret these codes, perform visual inspections, and conduct additional tests
                to identify the root cause of the problem. This includes checking sensors, fuel system, ignition system,
                and emissions components.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does engine diagnostics cost in Englewood?
              </h3>
              <p className="text-gray-700">
                Engine diagnostic services typically range from $100-$150 depending on the complexity of the issue. This
                fee is often applied toward repairs if you choose to have the work done at RKC Automotive. Call us at
                (720) 749-3965 for current pricing.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I drive with the check engine light on?
              </h3>
              <p className="text-gray-700">
                It depends on the severity of the issue. A steady check engine light usually indicates a non-emergency
                problem, but you should get it diagnosed soon. A flashing check engine light indicates a serious problem
                (like engine misfire) that requires immediate attention. Continuing to drive could cause expensive engine
                damage.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does engine diagnostics take?
              </h3>
              <p className="text-gray-700">
                Basic diagnostic scans take 30 minutes to 1 hour. More complex diagnosis requiring additional testing may
                take 1-2 hours. We&#39;ll provide an accurate time estimate based on your vehicle&#39;s symptoms and what we find
                during the initial scan.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will diagnostics tell me exactly what&#39;s wrong?
              </h3>
              <p className="text-gray-700">
                Diagnostic codes point us in the right direction, but they don&#39;t always tell the complete story. For example,
                a code for an oxygen sensor could mean the sensor is bad, or it could indicate another problem affecting
                the sensor&#39;s reading. Our experienced technicians use the codes as a starting point, then perform thorough
                testing to identify the actual cause.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link
              href="/services/check-engine-light-englewood-co"
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Check Engine Light</h3>
            </Link>
            <Link
              href="/services/transmission-services-englewood-co"
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Transmission Services</h3>
            </Link>
            <Link
              href="/services/preventative-maintenance-englewood-co"
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
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
            Engine Problems? We Can Help
          </h2>
          <p className="text-xl mb-8 text-white">
            Get accurate diagnostics and expert repairs from RKC Automotive in Englewood.
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
