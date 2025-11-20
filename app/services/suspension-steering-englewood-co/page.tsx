import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, AlertTriangle, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Suspension & Steering Repair in Englewood, CO | RKC Automotive',
  description: 'Professional suspension and steering repair in Englewood, CO. Shocks, struts, ball joints, alignment, and steering system service. Call (720) 749-3965.',
  keywords: 'suspension repair Englewood CO, steering repair Denver, shocks struts, wheel alignment, ball joints replacement',
  openGraph: {
    title: 'Suspension & Steering Repair in Englewood, CO | RKC Automotive',
    description: 'Expert suspension and steering repair including shocks, struts, alignment, and complete steering system service.',
    url: 'https://rkcautomotive.com/services/suspension-steering-englewood-co',
    type: 'website',
  },
};

export default function SuspensionSteeringPage() {
  return (
    <div>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Suspension and Steering Repair",
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
            "description": "Professional suspension and steering repair including shocks, struts, ball joints, tie rods, control arms, and wheel alignment in Englewood, CO."
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
            <li className="text-gray-900 font-medium">Suspension & Steering</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Settings className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Suspension & Steering Repair in Englewood, CO
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Expert suspension and steering service for a smooth, safe ride.
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
              RKC Automotive provides complete suspension and steering repair in Englewood, CO, including shocks, struts,
              ball joints, tie rods, control arms, sway bars, and wheel alignment. Serving all makes and models at 2120 W Evans Ave.
              Call (720) 749-3965 for suspension service.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Professional Suspension & Steering Service Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Your vehicle&#39;s suspension and steering systems work together to provide a smooth, controlled ride and precise
              handling. When these systems wear out, you&#39;ll experience poor ride quality, uneven tire wear, and potentially
              dangerous handling issues. At RKC Automotive in Englewood, we diagnose and repair all suspension and steering
              problems to restore your vehicle&#39;s ride and safety.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Suspension & Steering Services:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Shocks & Struts Replacement</h4>
                    <p className="text-gray-600 text-sm">Restore smooth ride quality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ball Joints & Tie Rods</h4>
                    <p className="text-gray-600 text-sm">Critical steering components</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Control Arms & Bushings</h4>
                    <p className="text-gray-600 text-sm">Maintain proper wheel alignment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sway Bar Links</h4>
                    <p className="text-gray-600 text-sm">Reduce body roll in corners</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Steering System Repair</h4>
                    <p className="text-gray-600 text-sm">Power steering and rack repair</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Suspension Inspection</h4>
                    <p className="text-gray-600 text-sm">Thorough assessment of all components</p>
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
              Signs You Need Suspension or Steering Repair
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Rough or Bouncy Ride</h3>
                    <p className="text-gray-600">
                      Vehicle bounces excessively over bumps or feels unstable - indicates worn shocks or struts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Vehicle Pulls to One Side</h3>
                    <p className="text-gray-600">
                      Car drifts left or right while driving straight - alignment issue or steering component failure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Uneven Tire Wear</h3>
                    <p className="text-gray-600">
                      Tires wear unevenly or on inside/outside edges - sign of alignment or suspension problems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Clunking or Rattling Noises</h3>
                    <p className="text-gray-600">
                      Strange noises over bumps indicate worn suspension components like ball joints or sway bar links.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Steering Wheel Vibration</h3>
                    <p className="text-gray-600">
                      Vibration in the steering wheel suggests worn steering components or wheel balance issues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Difficulty Steering</h3>
                    <p className="text-gray-600">
                      Hard to turn or loose steering indicates power steering or steering linkage problems.
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
            Suspension & Steering FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                When should I replace my shocks and struts?
              </h3>
              <p className="text-gray-700">
                Most shocks and struts should be replaced around 50,000-100,000 miles. However, harsh road conditions,
                potholes, and Colorado&#39;s variable terrain can accelerate wear. If you notice bouncing, poor handling,
                or nose-diving during braking, have your suspension inspected at RKC Automotive.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does suspension repair cost in Englewood?
              </h3>
              <p className="text-gray-700">
                Costs vary by component. Shock/strut replacement typically runs $400-$800 per pair. Ball joints cost
                $200-$400 each, tie rods $150-$300, and control arms $300-$600. We provide detailed estimates before any
                work begins. Call (720) 749-3965 for a quote.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I drive with bad suspension components?
              </h3>
              <p className="text-gray-700">
                Some worn suspension parts are drivable short-term, but safety is compromised. Severely worn ball joints
                or tie rods can separate, causing loss of control. If you hear clunking, experience poor handling, or
                notice uneven tire wear, schedule service immediately to prevent dangerous failures.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                what&#39;s the difference between shocks and struts?
              </h3>
              <p className="text-gray-700">
                Both dampen suspension movement, but struts are structural components that support vehicle weight and
                affect alignment. Not all vehicles have both - some have four struts, others have struts in front and
                shocks in rear, or shocks all around. We&#39;ll inspect your specific vehicle&#39;s suspension configuration.
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
              href="/services/brake-repair-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Brake Repair</h3>
            </Link>
            <Link
              href="/services/oil-changes-englewood-co"
              className="bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Oil Changes</h3>
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
            Suspension or Steering Issues? We Can Help
          </h2>
          <p className="text-xl mb-8 text-white">
            Contact RKC Automotive for expert suspension and steering repair in Englewood.
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
