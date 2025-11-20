import type { Metadata } from 'next';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Auto Repair Englewood CO | RKC Automotive | 2120 W Evans Ave',
  description: 'Visit RKC Automotive at 2120 W Evans Ave, Englewood, CO 80110. Professional auto repair and maintenance. Call (720) 749-3965 for service.',
};

export default function Location() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <img
          alt="RKC Automotive Shop"
          src=""
          className="absolute inset-0 -z-10 size-full object-cover opacity-10"
        />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Visit RKC Automotive in Englewood, Colorado
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional auto repair and maintenance services you can trust. Stop by our shop or give us a call today.
          </p>
        </div>
      </div>

      {/* Contact Information Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-green mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              <a href="tel:+17207493965" className="mt-2 text-lg text-primary-green hover:text-primary-green-dark font-semibold">
                (720) 749-3965
              </a>
              <p className="mt-1 text-sm text-gray-500">Call us today</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-blue mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Address</h3>
              <address className="mt-2 text-base text-gray-600 not-italic">
                2120 W Evans Ave<br />
                Englewood, CO 80110
              </address>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-green mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
              <div className="mt-2 text-sm text-gray-600">
                <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                <p>Sat: 8:00 AM - 12:00 PM</p>
                <p className="font-semibold text-red-600">Sun: Closed</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-blue mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Get Directions</h3>
              <a
                href="https://share.google/hRQ6WsLJdoo0DwUlu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-primary-blue hover:text-primary-blue-dark font-semibold"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Easy to Find, Easy to Reach
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Located on W Evans Ave in Englewood, just minutes from downtown Denver
            </p>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.158!2d-105.0239!3d39.6711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f1c1c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2s2120%20W%20Evans%20Ave%2C%20Englewood%2C%20CO%2080110!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RKC Automotive - 2120 W Evans Ave, Englewood, CO 80110"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Near Major Highways</h3>
              <p className="mt-1 text-sm text-gray-600">Close to I-25 and US-285</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Ample Parking</h3>
              <p className="mt-1 text-sm text-gray-600">Free parking available</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Convenient Location</h3>
              <p className="mt-1 text-sm text-gray-600">Serving Englewood and Denver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section with Stats */}
      <section className="bg-gray-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your Trusted Local Auto Shop
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Family-owned and operated, serving the Englewood community with quality automotive service
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <dt className="text-sm font-medium text-gray-400">Years in Business</dt>
                <dd className="mt-2 text-5xl font-bold text-white">10+</dd>
              </div>
              <div className="flex flex-col items-center">
                <dt className="text-sm font-medium text-gray-400">Vehicles Serviced</dt>
                <dd className="mt-2 text-5xl font-bold text-white">5,000+</dd>
              </div>
              <div className="flex flex-col items-center">
                <dt className="text-sm font-medium text-gray-400">Customer Rating</dt>
                <dd className="mt-2 text-5xl font-bold text-white">4.9★</dd>
              </div>
              <div className="flex flex-col items-center">
                <dt className="text-sm font-medium text-gray-400">ASE Certified</dt>
                <dd className="mt-2 text-5xl font-bold text-white">✓</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What to Expect at RKC Automotive
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Diagnostics</h3>
              <p className="text-gray-600">
                Advanced diagnostic equipment and experienced technicians to accurately identify issues and recommend solutions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Parts</h3>
              <p className="text-gray-600">
                We use OEM and high-quality aftermarket parts to ensure your vehicle runs at its best.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Warranty Backed</h3>
              <p className="text-gray-600">
                All repairs come with our warranty. We stand behind our work and your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-green text-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-xl mb-8">
            Visit us today or give us a call to schedule your appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17207493965"
              className="bg-white hover:bg-gray-100 text-primary-green font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call (720) 749-3965
            </a>
            <a
              href="https://share.google/hRQ6WsLJdoo0DwUlu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-blue hover:bg-primary-blue-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              <MapPin className="w-6 h-6 mr-2" />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
