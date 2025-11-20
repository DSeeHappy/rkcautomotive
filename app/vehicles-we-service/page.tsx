import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vehicles We Service | All Makes & Models | Domestic & Foreign | RKC Automotive Englewood CO',
  description: 'Expert service for all makes and models - domestic and foreign. Toyota, Honda, Ford, Chevy, BMW, Mercedes, and more. ASE-certified technicians. Call (720) 749-3965.',
  keywords: 'foreign car repair Englewood, domestic auto service, Toyota mechanic, Honda repair, BMW service, Mercedes repair, Ford mechanic',
  openGraph: {
    title: 'Vehicles We Service | All Makes & Models | RKC Automotive',
    description: 'Professional auto repair for all makes and models, both domestic and foreign vehicles.',
    url: 'https://rkcautomotive.com/vehicles-we-service',
    type: 'website',
  },
};

export default function VehiclesWeServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicles We Service</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Expert service for all makes and models - domestic and foreign
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              All Makes, All Models, One Trusted Shop
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At RKC Automotive in Englewood, our ASE-certified technicians have the training, experience, and diagnostic
              equipment to service every vehicle that comes through our doors. From popular domestic brands to European
              luxury vehicles and Japanese imports, we do it all.
            </p>
            <p className="text-lg text-gray-700">
              Whether you drive a Ford F-150, Honda Civic, BMW 3-Series, or anything in between, we have the expertise
              to keep your vehicle running reliably.
            </p>
          </div>

          {/* Foreign Vehicles */}
          <div className="mb-16">
            <div className="bg-primary-blue text-white rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Foreign & Import Vehicles</h2>
              <p className="text-lg text-white">
                We specialize in foreign and import vehicles. Our technicians are trained in the latest diagnostic and
                repair procedures for Asian and European manufacturers. You don&#39;t need to go to the dealer for expert
                service on your import vehicle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Japanese Makes */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-primary-green pb-2">Japanese Makes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Toyota</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Honda</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Nissan</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Mazda</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Subaru</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Lexus</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Acura</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Infiniti</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Mitsubishi</li>
                </ul>
              </div>

              {/* European Makes */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-primary-green pb-2">European Makes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> BMW</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Mercedes-Benz</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Audi</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Volkswagen</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Volvo</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Porsche</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Mini Cooper</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Land Rover</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Jaguar</li>
                </ul>
              </div>

              {/* Korean Makes */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-primary-green pb-2">Korean Makes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Hyundai</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Kia</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-green mr-2" /> Genesis</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-sm text-gray-600 italic">
                    And more! If you don&#39;t see your vehicle manufacturer listed, give us a call. We service virtually
                    all makes and models.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Domestic Vehicles */}
          <div className="mb-16">
            <div className="bg-primary-green text-white rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Domestic Vehicles</h2>
              <p className="text-lg text-white">
                American-made vehicles are in our DNA. From classic American muscle to modern trucks and SUVs, we have
                deep experience with domestic manufacturers. We know these vehicles inside and out.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-primary-blue pb-2">Ford</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> F-Series Trucks</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Mustang</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Explorer</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Escape</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Edge</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Bronco</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Ranger</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-primary-blue pb-2">Chevrolet</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Silverado</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Colorado</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Tahoe</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Suburban</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Equinox</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Traverse</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Malibu</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-primary-blue pb-2">RAM & Dodge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> RAM 1500-3500</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Durango</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Charger</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Challenger</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Journey</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-primary-blue pb-2">GMC & Others</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> GMC Sierra</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> GMC Yukon</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Jeep (all models)</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Chrysler</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Buick</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Cadillac</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary-blue mr-2" /> Lincoln</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vehicle Types */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">All Vehicle Types</h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              No matter what type of vehicle you drive, we have the expertise and equipment to service it properly.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Sedans</h3>
                <p className="text-sm text-gray-600">Compact to full-size</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">SUVs</h3>
                <p className="text-sm text-gray-600">All sizes</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Trucks</h3>
                <p className="text-sm text-gray-600">Light to heavy-duty</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Vans</h3>
                <p className="text-sm text-gray-600">Passenger & cargo</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Crossovers</h3>
                <p className="text-sm text-gray-600">All makes</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg border-2 border-primary-green p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              Why Choose RKC for Your Vehicle?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">ASE-Certified Technicians</h3>
                  <p className="text-gray-700">
                    Our mechanics are professionally trained and certified to work on all makes and models. We stay current
                    with the latest vehicle technology through ongoing education.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Advanced Diagnostic Equipment</h3>
                  <p className="text-gray-700">
                    We invest in professional-grade diagnostic scanners and tools for all vehicle manufacturers. Our
                    equipment reads manufacturer-specific codes that generic scanners miss.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Quality OEM & Aftermarket Parts</h3>
                  <p className="text-gray-700">
                    We use OEM (Original Equipment Manufacturer) parts when needed and quality aftermarket parts where
                    appropriate, giving you options for your budget.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-green mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Dealership Alternative</h3>
                  <p className="text-gray-700">
                    Get dealership-quality service at independent shop prices. We follow manufacturer specifications and
                    won&#39;t void your warranty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Vehicle in Expert Hands
          </h2>
          <p className="text-xl mb-8 text-white">
            No matter what you drive, RKC Automotive has the expertise to keep it running reliably.
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
            Serving all makes and models at 2120 W Evans Ave, Englewood, CO 80110
          </p>
        </div>
      </section>
    </div>
  );
}
