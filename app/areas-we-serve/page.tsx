import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Areas We Serve | Auto Repair in Englewood, Denver, Littleton CO | RKC Automotive',
  description: 'RKC Automotive serves Englewood, Denver, Littleton, Sheridan, Greenwood Village, and surrounding areas. Conveniently located near I-25 and US-285. Call (720) 749-3965.',
  keywords: 'auto repair Englewood CO, car service Denver, mechanic Littleton, Sheridan auto repair, Greenwood Village mechanic',
  openGraph: {
    title: 'Areas We Serve | RKC Automotive',
    description: 'Serving Englewood, Denver, Littleton, and surrounding communities with quality auto repair.',
    url: 'https://rkcautomotive.com/areas-we-serve',
    type: 'website',
  },
};

export default function AreasWeServePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Areas We Serve</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Proudly serving Englewood, Denver, and surrounding communities with quality auto repair
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Your Local Auto Repair Shop Serving the Greater Denver Area
            </h2>
            <p className="text-lg text-gray-700">
              Located at 2120 W Evans Ave in Englewood, RKC Automotive is conveniently positioned to serve drivers
              throughout the greater Denver metropolitan area. we&#39;re easily accessible from I-25 and US-285, making it
              simple to stop by for all your automotive service needs.
            </p>
          </div>

          {/* Communities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Englewood */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Englewood, CO</h3>
              <p className="text-gray-700 mb-4">
                Our home base! we&#39;re located right in the heart of Englewood, serving local residents and businesses with
                honest, reliable auto repair. From routine oil changes to complex engine diagnostics, we&#39;re your neighborhood
                automotive experts.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-2">Popular Englewood Areas:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Downtown Englewood</li>
                  <li>Englewood City Center</li>
                  <li>Swedish Medical Center area</li>
                  <li>Federal Boulevard corridor</li>
                </ul>
              </div>
            </div>

            {/* Denver */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Denver, CO</h3>
              <p className="text-gray-700 mb-4">
                Just minutes from south Denver, we serve Denver residents who want dealership-quality service at independent
                shop prices. Easy access from I-25 makes us a convenient choice for Denver drivers.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-2">Denver Areas We Serve:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>South Denver</li>
                  <li>University Hills</li>
                  <li>Washington Park area</li>
                  <li>Bear Valley</li>
                </ul>
              </div>
            </div>

            {/* Littleton */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Littleton, CO</h3>
              <p className="text-gray-700 mb-4">
                Serving Littleton residents with the same honesty and expertise we&#39;re known for in Englewood. Conveniently
                located for a quick stop on your way through town.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-2">Littleton Communities:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Downtown Littleton</li>
                  <li>Columbine</li>
                  <li>Ken Caryl</li>
                  <li>Highlands Ranch (nearby)</li>
                </ul>
              </div>
            </div>

            {/* Sheridan */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sheridan, CO</h3>
              <p className="text-gray-700 mb-4">
                Our neighbors in Sheridan trust us for all their automotive needs. we&#39;re just a short drive away and offer
                the personalized service you won&#39;t find at chain shops.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-2">Why Sheridan Chooses Us:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Close proximity</li>
                  <li>Family-owned and operated</li>
                  <li>Honest pricing</li>
                  <li>ASE-certified technicians</li>
                </ul>
              </div>
            </div>

            {/* Greenwood Village */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Greenwood Village, CO</h3>
              <p className="text-gray-700 mb-4">
                Providing Greenwood Village residents with quality automotive service for all makes and models. We understand
                the importance of keeping your vehicle running reliably.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-2">Serving These Areas:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Greenwood Village proper</li>
                  <li>Fiddler&#39;s Green area</li>
                  <li>DTC (Denver Tech Center)</li>
                  <li>Adjacent neighborhoods</li>
                </ul>
              </div>
            </div>

            {/* Cherry Hills Village */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cherry Hills Village, CO</h3>
              <p className="text-gray-700 mb-4">
                Cherry Hills Village drivers appreciate our attention to detail and quality workmanship. We service luxury
                and high-end vehicles with the same care as everyday commuters.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-2">Expert Service For:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Luxury vehicles</li>
                  <li>European imports</li>
                  <li>Domestic vehicles</li>
                  <li>All makes and models</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-primary-blue text-white rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Drivers Throughout the Area Choose RKC Automotive</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Convenient Location</h3>
                  <p className="text-white">
                    Easy access from I-25 and US-285. Central location serves multiple communities efficiently.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">ASE-Certified Technicians</h3>
                  <p className="text-white">
                    Our mechanics have the expertise to service all makes and models correctly the first time.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Honest Pricing</h3>
                  <p className="text-white">
                    No surprise charges. Detailed written estimates before any work begins. Fair prices you can trust.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Quality Service</h3>
                  <p className="text-white">
                    Dealership-quality service at independent shop prices. All work backed by our warranty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Directions Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Easy to Find From Anywhere</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">From I-25 (North or South)</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Take the Hampden Avenue exit (Exit 200)</li>
                  <li>Head west on E Hampden Ave</li>
                  <li>Turn right (north) on S Santa Fe Dr</li>
                  <li>Turn left (west) on W Evans Ave</li>
                  <li>RKC Automotive is on your right at 2120 W Evans Ave</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">From US-285 (Southwest)</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Take US-285 northeast toward Denver</li>
                  <li>Exit onto S Santa Fe Dr heading north</li>
                  <li>Turn left (west) on W Evans Ave</li>
                  <li>RKC Automotive is on your right at 2120 W Evans Ave</li>
                </ol>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg border-2 border-primary-green">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">RKC Automotive</h4>
                  <p className="text-gray-700">2120 W Evans Ave, Englewood, CO 80110</p>
                  <p className="text-gray-700">Phone: (720) 749-3965</p>
                </div>
                <a
                  href="https://share.google/hRQ6WsLJdoo0DwUlu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-blue hover:bg-primary-blue-dark text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving Your Community Since Day One
          </h2>
          <p className="text-xl mb-8 text-white">
            No matter where you&#39;re coming from, RKC Automotive is here to serve you with honest, quality auto repair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17207493965"
              className="bg-white hover:bg-gray-100 text-primary-green font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call (720) 749-3965
            </a>
            <Link
              href="/services"
              className="bg-primary-blue hover:bg-primary-blue-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
          <p className="mt-6 text-white text-sm">
            Monday-Friday: 8 AM - 5 PM | Saturday: 8 AM - 12 PM | Sunday: Closed
          </p>
        </div>
      </section>
    </div>
  );
}
