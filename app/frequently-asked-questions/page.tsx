import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Auto Repair FAQs | RKC Automotive Englewood CO',
  description: 'Get answers to common auto repair questions. Learn about services, pricing, maintenance, and more from RKC Automotive in Englewood, CO.',
  keywords: 'auto repair FAQ, car maintenance questions, automotive service questions, Englewood auto repair',
  openGraph: {
    title: 'Frequently Asked Questions | RKC Automotive',
    description: 'Common questions about auto repair and maintenance answered by the experts at RKC Automotive.',
    url: 'https://rkcautomotive.com/frequently-asked-questions',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <div>
      {/* FAQPage Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you offer same-day service in Englewood?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer same-day service for many repairs and maintenance. Call us at (720) 749-3965 before 2 PM and We&#39;ll do our best to get you in the same day. Some complex repairs may require overnight service depending on parts availability and diagnostic time."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide written estimates before starting work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We always provide detailed written estimates before beginning any repair work. You'll know exactly what needs to be done and how much it will cost before we start. No surprise charges - ever."
                }
              },
              {
                "@type": "Question",
                "name": "What forms of payment do you accept?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We accept cash, all major credit cards (Visa, Mastercard, Discover, American Express), and debit cards. We want to make paying for auto repairs as convenient as possible."
                }
              },
              {
                "@type": "Question",
                "name": "How long will my repair take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Repair time varies depending on the service. Oil changes typically take 30-45 minutes. Brake jobs take 1-3 hours. More complex repairs may take a full day or require overnight service. We&#39;ll provide an accurate time estimate when you bring your vehicle in."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work on all makes and models?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Our ASE-certified technicians service all makes and models, both domestic and foreign. From Ford and Chevy to Toyota, Honda, BMW, and Mercedes - we have the expertise and equipment to work on your vehicle."
                }
              },
              {
                "@type": "Question",
                "name": "Will service at an independent shop void my warranty?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Federal law (Magnuson-Moss Warranty Act) protects your right to have your vehicle serviced at independent shops without voiding your warranty. We follow manufacturer specifications and use quality parts, so your warranty remains valid."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer any warranties on your work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All our repairs come with a warranty. Warranty terms vary by service and parts used - We&#39;ll explain the specific warranty coverage when we provide your estimate. We stand behind our work with confidence."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need an appointment or can I walk in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both! Walk-ins are welcome, but appointments get priority and faster service. Call (720) 749-3965 to schedule an appointment for your convenience."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Get answers to common questions about auto repair and service at RKC Automotive
          </p>
        </div>
      </section>

      {/* General Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">General Service Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer same-day service in Englewood?
              </h3>
              <p className="text-gray-700">
                Yes! We offer same-day service for many repairs and maintenance. Call us at (720) 749-3965 before 2 PM
                and We&#39;ll do our best to get you in the same day. Some complex repairs may require overnight service
                depending on parts availability and diagnostic time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you provide written estimates before starting work?
              </h3>
              <p className="text-gray-700">
                Absolutely. We always provide detailed written estimates before beginning any repair work. You&#39;ll know
                exactly what needs to be done and how much it will cost before we start. No surprise charges - ever.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What forms of payment do you accept?
              </h3>
              <p className="text-gray-700">
                We accept cash, all major credit cards (Visa, Mastercard, Discover, American Express), and debit cards.
                We want to make paying for auto repairs as convenient as possible.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long will my repair take?
              </h3>
              <p className="text-gray-700">
                Repair time varies depending on the service. Oil changes typically take 30-45 minutes. Brake jobs take
                1-3 hours. More complex repairs may take a full day or require overnight service. We&#39;ll provide an
                accurate time estimate when you bring your vehicle in.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you work on all makes and models?
              </h3>
              <p className="text-gray-700">
                Yes! Our ASE-certified technicians service all makes and models, both domestic and foreign. From Ford
                and Chevy to Toyota, Honda, BMW, and Mercedes - we have the expertise and equipment to work on your vehicle.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need an appointment or can I walk in?
              </h3>
              <p className="text-gray-700">
                Both! Walk-ins are welcome, but appointments get priority and faster service. Call (720) 749-3965 to
                schedule an appointment for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Pricing & Warranty Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Are your prices competitive with dealerships?
              </h3>
              <p className="text-gray-700">
                Our prices are typically 20-40% less than dealerships for the same quality service. We use quality OEM
                and aftermarket parts, employ ASE-certified technicians, and provide the same (often better) service at
                a fraction of dealer prices.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer any warranties on your work?
              </h3>
              <p className="text-gray-700">
                Yes! All our repairs come with a warranty. Warranty terms vary by service and parts used - We&#39;ll explain
                the specific warranty coverage when we provide your estimate. We stand behind our work with confidence.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Why do repair costs vary so much between shops?
              </h3>
              <p className="text-gray-700">
                Prices vary based on parts quality (OEM vs. aftermarket), labor rates, shop overhead, and technician
                expertise. The cheapest option isn&#39;t always the best value. We balance quality parts, expert service,
                and fair pricing for the best overall value.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I supply my own parts for you to install?
              </h3>
              <p className="text-gray-700">
                We prefer to supply parts ourselves to ensure quality and provide warranty coverage. Customer-supplied
                parts often lack warranty protection, and we can&#39;t guarantee their quality. If a customer-supplied part
                fails, we&#39;re unable to warranty the labor. For your protection, we recommend our parts sourcing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Maintenance Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How often should I change my oil in Colorado?
              </h3>
              <p className="text-gray-700">
                It depends on your vehicle and oil type. Conventional oil needs changing every 3,000-5,000 miles. Synthetic
                oil lasts 7,500-10,000 miles. Colorado&#39;s extreme temperatures and altitude can stress engines, so we
                recommend following the lower end of manufacturer recommendations. Check your owner&#39;s manual.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will service at an independent shop void my warranty?
              </h3>
              <p className="text-gray-700">
                No. Federal law (Magnuson-Moss Warranty Act) protects your right to have your vehicle serviced at
                independent shops without voiding your warranty. We follow manufacturer specifications and use quality
                parts, so your warranty remains valid. Keep your service records.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What maintenance does my car need for Colorado winters?
              </h3>
              <p className="text-gray-700">
                Winter preparation is critical in Colorado. Essential services include battery testing (cold reduces
                capacity 30-50%), coolant/antifreeze check, tire inspection for tread depth, wiper blade replacement,
                and heating system check. Schedule a winter prep appointment before the cold hits.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I know if I really need the service you recommend?
              </h3>
              <p className="text-gray-700">
                We follow manufacturer maintenance schedules and only recommend services your vehicle actually needs.
                We&#39;ll explain why a service is needed, show you the issue when possible, and provide written recommendations.
                you&#39;re always free to get a second opinion - we want you to feel confident in our recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Repair Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                My check engine light is on. Can I still drive my car?
              </h3>
              <p className="text-gray-700">
                A steady check engine light usually means you can drive, but schedule service soon. A flashing check
                engine light indicates a serious problem (usually misfire) - stop driving immediately and call for service.
                Continuing to drive with a flashing light can cause expensive catalytic converter damage.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I know if I need brake repair?
              </h3>
              <p className="text-gray-700">
                Common signs include squealing/grinding noises, soft or spongy brake pedal, vehicle pulling to one side
                when braking, vibration in the pedal or steering wheel, and dashboard brake warning light. If you notice
                any of these signs, have your brakes inspected immediately for safety.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you provide diagnostic services?
              </h3>
              <p className="text-gray-700">
                Yes! We provide comprehensive diagnostic services using professional-grade diagnostic equipment. Diagnostic
                fees typically range from $100-$150 and are often applied toward repairs if you choose to have the work
                done at RKC Automotive. Proper diagnosis is essential to fixing problems right the first time.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-primary-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can you help me pass emissions testing?
              </h3>
              <p className="text-gray-700">
                Absolutely. We diagnose and repair emissions-related problems including check engine lights, failed
                catalytic converters, O2 sensor issues, and exhaust leaks. Once repairs are complete, your vehicle should
                pass Colorado emissions testing. We&#39;ll verify repairs with our diagnostic equipment before you retest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About RKC Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">About RKC Automotive</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Are your technicians certified?
              </h3>
              <p className="text-gray-700">
                Yes! Our technicians are ASE-certified with years of experience working on all makes and models. ASE
                (Automotive Service Excellence) certification is the industry standard for automotive technician
                competence. We invest in ongoing training to stay current with the latest vehicle technology.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What areas do you serve?
              </h3>
              <p className="text-gray-700">
                we&#39;re located in Englewood at 2120 W Evans Ave and serve Englewood, Denver, Littleton, Sheridan, Greenwood
                Village, Cherry Hills Village, and surrounding areas. we&#39;re conveniently located near I-25 and US-285.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What are your hours of operation?
              </h3>
              <p className="text-gray-700">
                we&#39;re open Monday through Friday from 8:00 AM to 5:00 PM and Saturday from 8:00 AM to 12:00 PM. we&#39;re
                closed on Sundays. Call (720) 749-3965 to schedule an appointment during business hours.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you have a waiting area?
              </h3>
              <p className="text-gray-700">
                Yes, we have a comfortable waiting area if you prefer to wait for your vehicle. For longer repairs, many
                customers prefer to drop off their vehicle and We&#39;ll call when it&#39;s ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-white">
            we&#39;re here to help! Call us or stop by our shop in Englewood.
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
          <p className="mt-8 text-white">
            Or browse our <Link href="/services" className="underline hover:text-primary-green">services page</Link> to
            learn more about what we offer.
          </p>
        </div>
      </section>
    </div>
  );
}
