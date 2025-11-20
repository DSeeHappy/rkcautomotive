import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Check Engine Light Diagnosis in Englewood, CO | RKC Automotive',
  description: 'Check engine light on? Expert diagnosis and repair in Englewood, CO. We find the real problem, not just the code. Call (720) 749-3965 today.',
  keywords: 'check engine light Englewood CO, engine light diagnosis Denver, OBD scanner, diagnostic trouble codes',
  openGraph: {
    title: 'Check Engine Light Diagnosis in Englewood, CO | RKC Automotive',
    description: 'Professional check engine light diagnosis and repair. Get to the root cause with our expert technicians.',
    url: 'https://rkcautomotive.com/services/check-engine-light-englewood-co',
    type: 'website',
  },
};

export default function CheckEngineLightPage() {
  return (
    <div>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Check Engine Light Diagnosis",
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
            "description": "Professional check engine light diagnosis and repair using advanced diagnostic equipment to identify and fix the root cause in Englewood, CO."
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
            <li className="text-gray-900 font-medium">Check Engine Light Diagnostics</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <AlertCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Check Engine Light Diagnosis in Englewood, CO
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            don&#39;t ignore that warning light. Get expert diagnosis and repair today.
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
              RKC Automotive provides expert check engine light diagnosis in Englewood, CO. We use advanced diagnostic
              scanners to read trouble codes, then perform thorough testing to identify the actual problem - not just clear
              the code. Common causes include O2 sensors, catalytic converters, and emissions system issues. Located at
              2120 W Evans Ave. Call (720) 749-3965.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Expert Check Engine Light Diagnosis Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The check engine light is your vehicle&#39;s way of telling you something is wrong. It could be as simple as
              a loose gas cap or as serious as catalytic converter failure. At RKC Automotive in Englewood, we don&#39;t just
              read the code and clear the light - we diagnose the underlying problem and fix it right.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Many auto parts stores offer free code reading, but a code is just a starting point. Our ASE-certified
              technicians use professional diagnostic equipment and decades of experience to find the real cause and
              provide lasting repairs.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Diagnostic Process:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">1. Code Scanning</h4>
                    <p className="text-gray-600 text-sm">Read diagnostic trouble codes from your vehicle&#39;s computer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">2. Visual Inspection</h4>
                    <p className="text-gray-600 text-sm">Check for obvious issues like loose connections or damaged components</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">3. Component Testing</h4>
                    <p className="text-gray-600 text-sm">Test sensors, circuits, and components related to the trouble code</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">4. Root Cause Identification</h4>
                    <p className="text-gray-600 text-sm">Determine the actual problem causing the code</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">5. Repair & Verification</h4>
                    <p className="text-gray-600 text-sm">Fix the issue and verify the repair with road testing and re-scanning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
              Common Check Engine Light Causes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Oxygen (O2) Sensor Failure</h3>
                <p className="text-gray-600">
                  Most common cause. O2 sensors monitor exhaust gases and wear out over time. Symptoms include poor fuel
                  economy and rough running.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Loose or Faulty Gas Cap</h3>
                <p className="text-gray-600">
                  Simple fix! A loose, damaged, or missing gas cap triggers the check engine light due to fuel system
                  pressure loss.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Catalytic Converter Issues</h3>
                <p className="text-gray-600">
                  Can be expensive if ignored. Reduces emissions and improves fuel economy. Often caused by neglected
                  maintenance.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Mass Airflow (MAF) Sensor</h3>
                <p className="text-gray-600">
                  Measures air entering the engine. Dirty or failed MAF sensors cause poor performance, stalling, and
                  reduced fuel economy.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Spark Plugs or Ignition Coils</h3>
                <p className="text-gray-600">
                  Worn spark plugs or failed coils cause misfires. You&#39;ll feel rough running, loss of power, and see
                  the check engine light.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">EVAP System Leak</h3>
                <p className="text-gray-600">
                  Evaporative emissions system leaks are common. Could be a purge valve, vent valve, or hose causing
                  the issue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">IMPORTANT: Flashing Check Engine Light</h3>
                <p className="text-gray-700 mb-2">
                  A <strong>flashing check engine light</strong> indicates a serious problem, usually an engine misfire
                  that can damage your catalytic converter.
                </p>
                <p className="text-gray-700">
                  <strong>Stop driving immediately</strong> and have your vehicle towed to RKC Automotive. Continuing
                  to drive with a flashing check engine light can cause expensive catalytic converter damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
            Check Engine Light FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I drive with the check engine light on?
              </h3>
              <p className="text-gray-700">
                A steady (not flashing) check engine light usually means you can drive, but schedule service soon. The
                problem could worsen or cause damage if ignored. A flashing check engine light requires immediate attention
                - stop driving and call for service at (720) 749-3965.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does check engine light diagnosis cost?
              </h3>
              <p className="text-gray-700">
                Diagnostic service typically costs $100-$150. This fee is often applied toward repairs if you choose to
                have the work done at RKC Automotive. Proper diagnosis saves money by ensuring we fix the actual problem,
                not just clear the code.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Why did my check engine light come back on after being cleared?
              </h3>
              <p className="text-gray-700">
                Simply clearing codes without fixing the underlying problem means the light will return. The vehicle&#39;s
                computer continuously monitors systems - when it detects the same issue again, the light comes back on.
                Proper diagnosis and repair are necessary for a permanent fix.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will my check engine light turn off by itself?
              </h3>
              <p className="text-gray-700">
                Sometimes, if the problem was temporary (like a loose gas cap). After the issue is resolved, the light
                may turn off after several drive cycles. However, don&#39;t assume the problem fixed itself - have it diagnosed
                to ensure there&#39;s no underlying issue.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I pass emissions testing with the check engine light on?
              </h3>
              <p className="text-gray-700">
                No. In Colorado, you cannot pass emissions testing with the check engine light on. The light indicates
                an emissions-related problem that must be repaired before your vehicle will pass inspection. We can
                diagnose and repair the issue so you can pass emissions.
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
              href="/services/engine-diagnostics-englewood-co"
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Engine Diagnostics</h3>
            </Link>
            <Link
              href="/services/exhaust-system-englewood-co"
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Exhaust System</h3>
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
            Check Engine Light On? Get Answers Today
          </h2>
          <p className="text-xl mb-8 text-white">
            don&#39;t ignore that warning light. Let RKC Automotive diagnose and fix the problem.
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
