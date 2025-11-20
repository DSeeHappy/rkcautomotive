import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, AlertTriangle, Wind } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Auto AC Repair & Heating Service in Englewood, CO | RKC Automotive',
  description: 'Expert auto AC repair and heating service in Englewood, CO. AC recharge, compressor replacement, heater repair. Stay comfortable year-round. Call (720) 749-3965.',
  keywords: 'auto AC repair Englewood CO, car air conditioning Denver, AC recharge, heater repair, HVAC service',
  openGraph: {
    title: 'Auto AC Repair & Heating Service in Englewood, CO | RKC Automotive',
    description: 'Professional automotive AC and heating repair. AC recharge, compressor service, and heater repair for all makes and models.',
    url: 'https://rkcautomotive.com/services/heating-ac-englewood-co',
    type: 'website',
  },
};

export default function HeatingACPage() {
  return (
    <div>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Auto AC and Heating Repair",
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
            "description": "Professional automotive air conditioning and heating repair including AC recharge, compressor replacement, heater core service, and HVAC diagnostics in Englewood, CO."
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
            <li className="text-gray-900 font-medium">Heating & Air Conditioning</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Wind className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Auto AC Repair & Heating Service in Englewood, CO
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Stay comfortable year-round with expert AC and heating repair.
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
              RKC Automotive provides complete auto AC and heating repair in Englewood, CO. Services include AC recharge,
              compressor replacement, heater core repair, and HVAC diagnostics for all makes and models. Beat Colorado's
              summer heat and winter cold. Located at 2120 W Evans Ave. Call (720) 749-3965.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Expert AC & Heating Service Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Colorado's climate demands a reliable heating and air conditioning system. From scorching summer days to
              freezing winter mornings, your vehicle's HVAC system keeps you comfortable year-round. At RKC Automotive
              in Englewood, we diagnose and repair all AC and heating problems to restore comfort to your drive.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our AC & Heating Services:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">AC Recharge & Refrigerant Service</h4>
                    <p className="text-gray-600 text-sm">Restore cold air with proper refrigerant levels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">AC Compressor Replacement</h4>
                    <p className="text-gray-600 text-sm">Replace failed AC compressors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Heater Core Repair</h4>
                    <p className="text-gray-600 text-sm">Fix weak heat or coolant leaks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Blower Motor Service</h4>
                    <p className="text-gray-600 text-sm">Restore airflow to cabin</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">HVAC Diagnostics</h4>
                    <p className="text-gray-600 text-sm">Identify AC and heating problems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Leak Detection & Repair</h4>
                    <p className="text-gray-600 text-sm">Find and fix refrigerant leaks</p>
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
              Signs Your AC or Heating Needs Service
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Weak or No Cold Air</h3>
                    <p className="text-gray-600">
                      AC blows warm air or airflow is weak - indicates low refrigerant, compressor failure, or blower issues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">No Heat in Winter</h3>
                    <p className="text-gray-600">
                      Heater blows cold air - could be thermostat, heater core, or coolant level issues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Strange Odors</h3>
                    <p className="text-gray-600">
                      Musty or sweet smell from vents indicates mold in AC system or coolant leak in heater core.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Unusual Noises</h3>
                    <p className="text-gray-600">
                      Squealing, grinding, or rattling from AC compressor or blower motor requires diagnosis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Water Leaking Inside</h3>
                    <p className="text-gray-600">
                      Puddles under passenger floor indicate clogged AC drain or leaking heater core.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Foggy Windows</h3>
                    <p className="text-gray-600">
                      Windows constantly fog up - may indicate heater core leak or AC system not dehumidifying properly.
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
            AC & Heating FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does AC recharge cost in Englewood?
              </h3>
              <p className="text-gray-700">
                AC recharge typically costs $150-$300 depending on your vehicle and refrigerant type. However, if there's
                a leak, simply recharging won't fix the problem long-term. We'll inspect for leaks and provide honest
                recommendations. Call (720) 749-3965 for a quote.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Why is my car AC blowing warm air?
              </h3>
              <p className="text-gray-700">
                Common causes include low refrigerant (leak), failed AC compressor, broken condenser fan, clogged expansion
                valve, or electrical issues. Our technicians will diagnose the exact cause and provide repair options to
                get your AC blowing cold again.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I recharge my own car AC?
              </h3>
              <p className="text-gray-700">
                While DIY AC recharge kits exist, we don't recommend them. Improper refrigerant levels can damage your AC
                system. Professional service ensures proper refrigerant amount, leak detection, and system inspection.
                Plus, we recycle old refrigerant properly per EPA regulations.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does AC repair take?
              </h3>
              <p className="text-gray-700">
                Simple AC recharge takes about 1 hour. Compressor replacement or heater core work can take 3-6 hours
                depending on your vehicle. We'll provide an accurate time estimate when we diagnose your specific issue.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                When should I service my car's AC system?
              </h3>
              <p className="text-gray-700">
                Get your AC system inspected before summer each year. If you notice weak cooling, strange odors, or unusual
                noises, bring it in immediately. Preventative AC service can catch small problems before they become
                expensive repairs.
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
              href="/services/engine-diagnostics-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Engine Diagnostics</h3>
            </Link>
            <Link
              href="/services/electrical-system-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Electrical System</h3>
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
            Stay Comfortable Year-Round
          </h2>
          <p className="text-xl mb-8 text-white">
            Get your AC or heating system fixed by the experts at RKC Automotive.
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
