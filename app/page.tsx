import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue via-primary-blue-dark to-primary-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Auto Repair Shop in Englewood
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Professional automotive service and repair you can count on
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17207493965"
                className="bg-primary-green hover:bg-primary-green-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (720) 749-3965
              </a>
              <Link
                href="/services"
                className="bg-white hover:bg-gray-100 text-primary-blue font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-16 bg-accent-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hours of Operation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-primary-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl font-bold text-foreground">Hours of Operation</h2>
              </div>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Monday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Tuesday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Wednesday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Thursday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Saturday</span>
                  <span>8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-red-600 font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Location & Contact */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-primary-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 className="text-3xl font-bold text-foreground">Visit Us</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary-blue">Address</h3>
                  <p className="text-lg text-gray-700">
                    2120 W Evans Ave<br />
                    Englewood, CO 80110
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary-blue">Phone</h3>
                  <a href="tel:+17207493965" className="text-lg text-primary-green hover:text-primary-green-dark font-semibold">
                    (720) 749-3965
                  </a>
                </div>
                <a
                  href="https://share.google/hRQ6WsLJdoo0DwUlu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-blue hover:bg-primary-blue-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose RKC Automotive?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Our certified mechanics have years of experience servicing all makes and models.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary-green rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fair Pricing</h3>
              <p className="text-gray-600">
                Quality service at honest prices. We provide detailed estimates before any work begins.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary-blue-dark rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Service</h3>
              <p className="text-gray-600">
                We respect your time and work efficiently to get you back on the road quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Service Your Vehicle?</h2>
          <p className="text-xl mb-8">
            Contact us today to schedule an appointment or get a quote
          </p>
          <a
            href="tel:+17207493965"
            className="bg-white hover:bg-gray-100 text-primary-green font-bold py-4 px-10 rounded-lg text-lg transition-colors inline-flex items-center"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now: (720) 749-3965
          </a>
        </div>
      </section>
    </div>
  );
}
