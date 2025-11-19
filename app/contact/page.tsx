import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | RKC Automotive',
  description: 'Contact RKC Automotive in Englewood, CO. Call (720) 749-3965 or visit us at 2120 W Evans Ave. Open Monday-Saturday.',
};

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Get in touch with us for all your automotive service needs
          </p>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Get In Touch</h2>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-blue rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <a href="tel:+17207493965" className="text-primary-green hover:text-primary-green-dark text-xl font-semibold">
                      (720) 749-3965
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 ml-16">
                  Give us a call to schedule an appointment or ask about our services
                </p>
              </div>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-green rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-gray-700 text-lg">
                      2120 W Evans Ave<br />
                      Englewood, CO 80110
                    </p>
                  </div>
                </div>
                <a
                  href="https://share.google/hRQ6WsLJdoo0DwUlu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-16 inline-block bg-primary-blue hover:bg-primary-blue-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Get Directions
                </a>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-blue-dark rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">Hours of Operation</h3>
                </div>
                <div className="ml-16 space-y-2 text-gray-700">
                  <div className="flex justify-between max-w-sm">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-sm">
                    <span className="font-semibold">Saturday:</span>
                    <span>8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-sm">
                    <span className="font-semibold">Sunday:</span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Find Us</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.8426159289956!2d-105.00168!3d39.67936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f0e7e7e7e7f%3A0x7e7e7e7e7e7e7e7e!2s2120%20W%20Evans%20Ave%2C%20Englewood%2C%20CO%2080110!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RKC Automotive Location"
                ></iframe>
              </div>
              <p className="mt-4 text-gray-600 text-center">
                Conveniently located in Englewood, serving the greater Denver area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="bg-accent-gray-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Our friendly team is ready to assist you with scheduling, estimates, or any questions
              about our automotive services.
            </p>
            <div className="flex justify-center">
              <a
                href="tel:+17207493965"
                className="bg-primary-green hover:bg-primary-green-dark text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors inline-flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (720) 749-3965
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Proudly Serving</h3>
          <p className="text-lg text-gray-600">
            Englewood, Littleton, Denver, Sheridan, Greenwood Village, and surrounding areas
          </p>
        </div>
      </section>
    </div>
  );
}
