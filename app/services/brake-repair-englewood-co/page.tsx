import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, AlertTriangle, Disc } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brake Repair in Englewood, CO | Expert Brake Service | RKC Automotive',
  description: 'Professional brake repair and service in Englewood, CO. Brake pads, rotors, calipers, and complete brake system service. Call (720) 749-3965 for same-day service.',
  keywords: 'brake repair Englewood CO, brake service Denver, brake pads replacement, rotor resurfacing, brake inspection',
  openGraph: {
    title: 'Brake Repair in Englewood, CO | RKC Automotive',
    description: 'Expert brake repair and service in Englewood. Brake pads, rotors, calipers, and complete brake system service.',
    url: 'https://rkcautomotive.com/services/brake-repair-englewood-co',
    type: 'website',
    images: [{
      url: '/images/brake-repair-englewood.jpg',
      width: 1200,
      height: 630,
      alt: 'Brake Repair Service at RKC Automotive Englewood CO'
    }],
  },
};

export default function BrakeRepairPage() {
  return (
    <div>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Brake Repair and Service",
            "provider": {
              "@type": "AutomotiveBusiness",
              "name": "RKC Automotive",
              "image": "https://rkcautomotive.com/images/rkc-logo.jpg",
              "telephone": "+1-720-749-3965",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2120 W Evans Ave",
                "addressLocality": "Englewood",
                "addressRegion": "CO",
                "postalCode": "80110",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.6711",
                "longitude": "-105.0239"
              },
              "url": "https://rkcautomotive.com",
              "priceRange": "$$",
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
              ]
            },
            "areaServed": {
              "@type": "City",
              "name": "Englewood",
              "@id": "https://en.wikipedia.org/wiki/Englewood,_Colorado"
            },
            "description": "Professional brake repair and service including brake pad replacement, rotor resurfacing, caliper repair, and complete brake system diagnostics in Englewood, CO.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
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
            <li className="text-gray-900 font-medium">Brake Repair</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Disc className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Brake Repair in Englewood, CO
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Expert brake service and repair for all makes and models. Your safety is our priority.
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

      {/* Quick Answer Box for AI */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-primary-green">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Quick Answer</h2>
            <p className="text-gray-700">
              RKC Automotive provides complete brake repair services in Englewood, CO, including brake pad replacement,
              rotor resurfacing and replacement, caliper service, brake fluid flush, and brake system diagnostics.
              Located at 2120 W Evans Ave, we serve Englewood, Denver, and surrounding areas. Call (720) 749-3965 for
              same-day brake service.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Professional Brake Service Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Your vehicle's braking system is the most critical safety feature. At RKC Automotive in Englewood,
              our ASE-certified technicians provide comprehensive brake repair and maintenance services to keep you
              and your family safe on the road.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We service all makes and models, from domestic vehicles to foreign imports. Whether you need a simple
              brake pad replacement or a complete brake system overhaul, we have the expertise and equipment to get
              the job done right.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Brake Services Include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Brake Pad Replacement</h4>
                    <p className="text-gray-600 text-sm">High-quality brake pads for optimal stopping power</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rotor Resurfacing & Replacement</h4>
                    <p className="text-gray-600 text-sm">Smooth rotors for even braking performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Brake Caliper Service</h4>
                    <p className="text-gray-600 text-sm">Repair or replace faulty calipers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Brake Fluid Flush</h4>
                    <p className="text-gray-600 text-sm">Fresh fluid for responsive braking</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Brake Line Inspection & Repair</h4>
                    <p className="text-gray-600 text-sm">Check for leaks and damage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Brake Inspection</h4>
                    <p className="text-gray-600 text-sm">Thorough assessment of entire brake system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Brake Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
              Signs You Need Brake Repair
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Don't ignore these warning signs. Contact RKC Automotive in Englewood immediately if you notice:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Squealing or Grinding Noises</h3>
                    <p className="text-gray-600">
                      High-pitched squealing or metal-on-metal grinding when braking indicates worn brake pads
                      that need immediate replacement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Soft or Spongy Brake Pedal</h3>
                    <p className="text-gray-600">
                      If your brake pedal feels soft or sinks to the floor, you may have a brake fluid leak or
                      air in the brake lines.
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
                      If your vehicle pulls left or right when braking, you may have uneven brake pad wear or
                      a stuck caliper.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Vibration When Braking</h3>
                    <p className="text-gray-600">
                      Pulsating or vibration in the brake pedal or steering wheel usually means warped rotors
                      that need resurfacing or replacement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Brake Warning Light</h3>
                    <p className="text-gray-600">
                      Dashboard brake warning light indicates low brake fluid, worn pads, or a brake system
                      malfunction requiring immediate attention.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Longer Stopping Distances</h3>
                    <p className="text-gray-600">
                      If it takes longer to stop than usual, your brake pads may be worn or you could have a
                      brake fluid issue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RKC for Brakes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
            Why Choose RKC Automotive for Brake Repair in Englewood?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">ASE-Certified Technicians</h3>
              <p className="text-gray-600">
                Our brake specialists are certified and experienced in all brake system repairs for all makes and models.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quality Parts</h3>
              <p className="text-gray-600">
                We use OEM and premium aftermarket brake components for reliable, long-lasting performance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Warranty Backed</h3>
              <p className="text-gray-600">
                All brake repairs come with our warranty. We stand behind our work with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
            Brake Repair FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How often should I replace my brake pads?
              </h3>
              <p className="text-gray-700">
                Brake pads typically last 30,000-70,000 miles depending on driving habits and conditions. In Englewood's
                stop-and-go traffic and hilly terrain, we recommend inspecting your brakes every 12,000 miles or annually.
                Aggressive driving, frequent city driving, and mountain driving can wear pads faster.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does brake repair cost in Englewood, CO?
              </h3>
              <p className="text-gray-700">
                Brake repair costs vary based on your vehicle and the extent of service needed. A standard brake pad
                replacement typically ranges from $150-$300 per axle, while rotor replacement adds $200-$400. We provide
                detailed written estimates before any work begins, so you know exactly what to expect.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I drive with squeaking brakes?
              </h3>
              <p className="text-gray-700">
                While you can technically drive with squeaking brakes, we don't recommend it. Squealing usually indicates
                worn brake pads. If ignored, the metal backing plate can damage your rotors, turning an affordable pad
                replacement into a more expensive repair. Schedule service as soon as you hear unusual brake noises.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer same-day brake repair service?
              </h3>
              <p className="text-gray-700">
                Yes! RKC Automotive offers same-day brake service for most brake repairs in Englewood. Call us at
                (720) 749-3965 before 2 PM and we'll do our best to get you in the same day. Your safety is our priority.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What's the difference between brake pads and brake rotors?
              </h3>
              <p className="text-gray-700">
                Brake pads are the friction material that presses against the brake rotor (disc) to slow your vehicle.
                Rotors are the metal discs attached to your wheels. When you press the brake pedal, calipers squeeze the
                pads against the spinning rotors to create friction and stop the vehicle. Both components wear over time
                and need periodic replacement.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does a brake job take?
              </h3>
              <p className="text-gray-700">
                A standard brake pad replacement typically takes 1-2 hours. If rotors need to be replaced or resurfaced,
                allow 2-3 hours. More complex repairs involving calipers or brake lines may take longer. We'll provide an
                accurate time estimate when you bring your vehicle in.
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
              href="/services/suspension-steering-englewood-co"
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Suspension & Steering</h3>
            </Link>
            <Link
              href="/services/oil-changes-englewood-co"
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <h3 className="font-semibold text-gray-900">Oil Changes</h3>
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
            Need Brake Repair in Englewood, CO?
          </h2>
          <p className="text-xl mb-8 text-white">
            Don't wait until it's too late. Contact RKC Automotive today for expert brake service.
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
