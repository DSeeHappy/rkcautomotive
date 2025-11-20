import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Preventative Maintenance in Englewood, CO | Keep Your Car Running | RKC Automotive',
  description: 'Comprehensive preventative maintenance in Englewood, CO. Regular service keeps your vehicle reliable and prevents expensive repairs. Call (720) 749-3965 today.',
  keywords: 'preventative maintenance Englewood CO, car maintenance Denver, scheduled maintenance, vehicle service, tune up',
  openGraph: {
    title: 'Preventative Maintenance in Englewood, CO | RKC Automotive',
    description: 'Stay ahead of problems with preventative maintenance. Regular service for reliability and longevity.',
    url: 'https://rkcautomotive.com/services/preventative-maintenance-englewood-co',
    type: 'website',
  },
};

export default function PreventativeMaintenancePage() {
  return (
    <div>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Preventative Maintenance",
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
            "description": "Comprehensive preventative maintenance services including oil changes, fluid services, inspections, and scheduled maintenance to keep your vehicle running reliably in Englewood, CO."
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
            <li className="text-gray-900 font-medium">Preventative Maintenance</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <ShieldCheck className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Preventative Maintenance in Englewood, CO
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Stay ahead of problems and keep your vehicle running reliably with regular maintenance.
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
              RKC Automotive provides comprehensive preventative maintenance in Englewood, CO, including oil changes,
              fluid services, filter replacements, inspections, and manufacturer-recommended scheduled maintenance. Regular
              preventative care prevents expensive repairs and keeps your vehicle reliable. Winter is here - is your vehicle
              ready? Located at 2120 W Evans Ave. Call (720) 749-3965.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Professional Preventative Maintenance Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              An ounce of prevention is worth a pound of cure - especially with vehicles. Regular preventative maintenance
              is the single best way to avoid expensive breakdowns, extend your vehicle's life, and maintain reliability.
              At RKC Automotive in Englewood, we provide comprehensive maintenance services following manufacturer
              recommendations and Colorado's unique driving conditions.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Winter in Colorado is particularly demanding on vehicles. Cold starts, icy roads, and temperature fluctuations
              stress every system in your car. Our preventative maintenance ensures your vehicle is ready for whatever
              Colorado throws at it.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Preventative Maintenance Services:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Oil & Filter Changes</h4>
                    <p className="text-gray-600 text-sm">Essential engine protection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fluid Services</h4>
                    <p className="text-gray-600 text-sm">Coolant, transmission, brake, power steering</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Filter Replacements</h4>
                    <p className="text-gray-600 text-sm">Air, cabin, fuel filters</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tire Rotation & Inspection</h4>
                    <p className="text-gray-600 text-sm">Even wear and proper inflation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Battery Testing</h4>
                    <p className="text-gray-600 text-sm">Prevent no-start conditions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Brake Inspection</h4>
                    <p className="text-gray-600 text-sm">Safety-critical system check</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Belts & Hoses Inspection</h4>
                    <p className="text-gray-600 text-sm">Catch wear before failure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Point Inspection</h4>
                    <p className="text-gray-600 text-sm">Comprehensive vehicle check</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-blue text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Winter Readiness - Is Your Vehicle Prepared?</h3>
              <p className="mb-4">
                Colorado winters are brutal on vehicles. Before the coldest weather arrives, ensure your vehicle is ready:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Battery Health:</strong> Cold weather reduces battery capacity by 30-50%. Get tested now.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Antifreeze/Coolant:</strong> Proper mixture prevents freezing and engine damage.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Tire Condition:</strong> Good tread depth is essential for snow and ice traction.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Wiper Blades & Washer Fluid:</strong> Visibility is critical in winter conditions.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Heating System:</strong> Ensure your heater and defroster work properly.
                  </div>
                </li>
              </ul>
              <div className="mt-6 bg-white/10 rounded-lg p-4">
                <p className="font-bold text-lg">Schedule your winter maintenance check today!</p>
                <p className="mt-2">Don't wait until you're stranded in a snowstorm. Call (720) 749-3965.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
              Benefits of Regular Preventative Maintenance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <div className="bg-primary-green rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Prevent Expensive Repairs</h3>
                <p className="text-gray-600">
                  Regular maintenance catches small problems before they become major, expensive failures. A $50 oil change
                  prevents a $4,000 engine replacement.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="bg-primary-blue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Improve Reliability</h3>
                <p className="text-gray-600">
                  Well-maintained vehicles are far less likely to leave you stranded. Regular service means fewer breakdowns
                  and emergency tows.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="bg-primary-green rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Extend Vehicle Life</h3>
                <p className="text-gray-600">
                  Properly maintained vehicles last significantly longer. Regular oil changes, fluid services, and
                  inspections can add years to your vehicle's life.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="bg-primary-blue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Better Fuel Economy</h3>
                <p className="text-gray-600">
                  Clean filters, fresh fluids, and proper tire pressure improve fuel efficiency, saving you money at the pump.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="bg-primary-green rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Maintain Warranty</h3>
                <p className="text-gray-600">
                  Many vehicle warranties require documented maintenance. Keep records of all service to protect your warranty.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="bg-primary-blue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Higher Resale Value</h3>
                <p className="text-gray-600">
                  Documented maintenance history significantly increases resale value. Buyers pay more for well-maintained
                  vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
            Preventative Maintenance FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How often should I service my vehicle in Englewood?
              </h3>
              <p className="text-gray-700">
                Follow your manufacturer's recommended maintenance schedule, typically found in your owner's manual. Most
                vehicles need oil changes every 3,000-7,500 miles and major service every 30,000-60,000 miles. Colorado's
                climate and driving conditions may require more frequent service. We'll help you create a maintenance
                schedule based on your specific vehicle and driving habits.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What's included in a typical maintenance service?
              </h3>
              <p className="text-gray-700">
                Basic maintenance includes oil and filter change, fluid level checks and top-offs, tire rotation, tire
                pressure check, battery test, and multi-point inspection. Major services at 30K/60K/90K miles include
                additional items like air filter, cabin filter, spark plugs, transmission fluid, coolant flush, and more
                depending on mileage and manufacturer recommendations.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is preventative maintenance really necessary?
              </h3>
              <p className="text-gray-700">
                Absolutely! Modern vehicles are complex machines that require regular maintenance to run properly.
                Neglecting maintenance leads to expensive repairs, poor fuel economy, and unreliable transportation.
                The cost of regular maintenance is far less than major repairs from neglect. Think of it as insurance
                against expensive breakdowns.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does preventative maintenance cost?
              </h3>
              <p className="text-gray-700">
                Basic oil changes run $40-$120 depending on oil type. Minor services (15K-30K) cost $150-$300. Major
                services (60K-90K) range from $400-$800+ depending on what's included. While maintenance has a cost,
                it's far cheaper than the $2,000-$5,000+ repairs that result from neglect. Call (720) 749-3965 for
                specific pricing for your vehicle.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I perform maintenance myself?
              </h3>
              <p className="text-gray-700">
                Some basic tasks like checking fluids and tire pressure can be done at home. However, modern vehicles
                require specialized tools, equipment, and knowledge for proper service. Professional maintenance ensures
                work is done correctly, provides thorough inspections, and creates documentation for warranty and resale
                purposes. Plus, we dispose of old fluids properly.
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
              href="/services/oil-changes-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Oil Changes</h3>
            </Link>
            <Link
              href="/services/brake-repair-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Brake Repair</h3>
            </Link>
            <Link
              href="/services/battery-testing-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Battery Testing</h3>
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
            Keep Your Vehicle Running Strong
          </h2>
          <p className="text-xl mb-8 text-white">
            Schedule preventative maintenance at RKC Automotive and avoid expensive breakdowns.
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
