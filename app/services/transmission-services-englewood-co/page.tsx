import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle, AlertTriangle, Cog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transmission Service & Repair in Englewood, CO | RKC Automotive',
  description: 'Expert transmission service and repair in Englewood, CO. Automatic and manual transmission repair, fluid service, and diagnostics. Call (720) 749-3965.',
  keywords: 'transmission repair Englewood CO, transmission service Denver, transmission flush, automatic transmission, manual transmission',
  openGraph: {
    title: 'Transmission Service & Repair in Englewood, CO | RKC Automotive',
    description: 'Professional transmission service and repair for automatic and manual transmissions. Serving Englewood and Denver.',
    url: 'https://rkcautomotive.com/services/transmission-services-englewood-co',
    type: 'website',
  },
};

export default function TransmissionServicesPage() {
  return (
    <div>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Transmission Service and Repair",
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
            "description": "Professional transmission service and repair including transmission fluid service, diagnostics, and complete transmission repair for automatic and manual transmissions in Englewood, CO."
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
            <li className="text-gray-900 font-medium">Transmission Services</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Cog className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Transmission Service & Repair in Englewood, CO
          </h1>
          <p className="text-xl text-center text-white max-w-3xl mx-auto">
            Expert transmission diagnostics, repair, and maintenance for automatic and manual transmissions.
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
              RKC Automotive provides complete transmission services in Englewood, CO, including transmission fluid service,
              diagnostics, repair, and rebuild for both automatic and manual transmissions. We service all makes and models.
              Located at 2120 W Evans Ave. Call (720) 749-3965 for transmission service.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Professional Transmission Service Near You
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Your transmission is one of the most complex and expensive components in your vehicle. Proper maintenance
              and timely repairs are essential to avoiding costly transmission replacement. At RKC Automotive in Englewood,
              our experienced technicians provide comprehensive transmission services for all makes and models.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              From routine transmission fluid services to complex transmission repairs, we have the expertise and equipment
              to keep your transmission running smoothly. We service both automatic and manual transmissions, foreign and domestic.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Transmission Services Include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transmission Fluid Service</h4>
                    <p className="text-gray-600 text-sm">Fluid exchange and filter replacement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transmission Diagnostics</h4>
                    <p className="text-gray-600 text-sm">Computer diagnostics and road testing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transmission Repair</h4>
                    <p className="text-gray-600 text-sm">Fix slipping, shifting, and performance issues</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Clutch Replacement</h4>
                    <p className="text-gray-600 text-sm">Manual transmission clutch service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transmission Rebuild</h4>
                    <p className="text-gray-600 text-sm">Complete rebuild when necessary</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transfer Case Service</h4>
                    <p className="text-gray-600 text-sm">4WD/AWD system maintenance</p>
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
              Signs You Need Transmission Service
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Don't ignore these transmission warning signs. Contact RKC Automotive immediately if you experience:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Slipping Gears</h3>
                    <p className="text-gray-600">
                      Transmission slips out of gear or doesn't engage properly - a serious issue requiring immediate attention.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Delayed Engagement</h3>
                    <p className="text-gray-600">
                      Hesitation or delay when shifting from Park to Drive or Reverse indicates low fluid or internal problems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Rough Shifting</h3>
                    <p className="text-gray-600">
                      Hard shifts, jerking, or clunking when changing gears suggests transmission wear or fluid issues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Fluid Leaks</h3>
                    <p className="text-gray-600">
                      Red or brown fluid under your vehicle indicates a transmission leak requiring prompt repair.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Burning Smell</h3>
                    <p className="text-gray-600">
                      Burning odor while driving suggests overheating transmission fluid - stop driving immediately.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Check Engine or Transmission Light</h3>
                    <p className="text-gray-600">
                      Dashboard warning lights for transmission require immediate professional diagnosis.
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
            Why Choose RKC for Transmission Service?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transmission Specialists</h3>
              <p className="text-gray-600">
                Our technicians have extensive experience with automatic and manual transmissions on all makes and models.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Honest Diagnosis</h3>
              <p className="text-gray-600">
                We'll tell you if your transmission needs service, repair, or if it can wait. No unnecessary work.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Warranty Protection</h3>
              <p className="text-gray-600">
                All transmission work is backed by our warranty for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
            Transmission Service FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How often should I service my transmission?
              </h3>
              <p className="text-gray-700">
                Most manufacturers recommend transmission fluid service every 30,000-60,000 miles for automatic transmissions.
                Manual transmissions typically need service every 60,000-100,000 miles. However, severe driving conditions
                (towing, mountains, city driving) may require more frequent service. Check your owner's manual for specific
                recommendations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does transmission repair cost in Englewood?
              </h3>
              <p className="text-gray-700">
                Transmission service costs vary widely based on the issue. A transmission fluid service runs $150-$250,
                while minor repairs range from $300-$1,500. Major repairs or rebuilds can cost $2,000-$4,000+. We provide
                detailed estimates before any work begins. Call (720) 749-3965 for a quote.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is a transmission flush or fluid exchange better?
              </h3>
              <p className="text-gray-700">
                We recommend fluid exchange over traditional flushes for most vehicles. Fluid exchange removes old fluid
                and replaces it with new fluid without using harsh chemicals or high pressure that could damage seals.
                We'll recommend the best service for your specific vehicle.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I drive with transmission problems?
              </h3>
              <p className="text-gray-700">
                It depends on the severity. Minor issues like slight delays might allow you to drive to our shop carefully.
                However, slipping gears, no engagement, or burning smells require immediate attention - continuing to drive
                can cause catastrophic transmission failure. Call us at (720) 749-3965 for advice on your specific situation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What causes transmission failure?
              </h3>
              <p className="text-gray-700">
                Common causes include: neglected fluid maintenance, overheating (from towing or severe use), low fluid from
                leaks, manufacturing defects, and normal wear over time. Regular transmission service is the best way to
                prevent premature failure and extend transmission life.
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
            Transmission Problems? Get Expert Help
          </h2>
          <p className="text-xl mb-8 text-white">
            Contact RKC Automotive in Englewood for professional transmission service and repair.
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
