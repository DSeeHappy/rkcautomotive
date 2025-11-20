import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Car,
  Disc,
  Droplets,
  Cog,
  BatteryCharging,
  Snowflake,
  Gauge,
  Wind,
  ShieldCheck,
  AlertTriangle,
  MapPin,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | RKC Automotive',
  description: 'Comprehensive automotive repair and maintenance services including diagnostics, brake repair, oil changes, engine repair, and more in Englewood, CO.',
};

export default function Services() {
  const services = [
    {
      title: 'Preventative Maintenance',
      label: 'Most Important',
      description: 'Winter is here - is your vehicle ready? Regular maintenance is crucial for Colorado winters. We check your battery health, fluid levels, belts, hoses, and overall vehicle condition to prevent breakdowns when you need your car most. Don\'t wait for warning lights - stay ahead of problems.',
      icon: ShieldCheck,
      span: 'lg:col-span-4',
      featured: true,
      href: '/services/preventative-maintenance-englewood-co',
    },
    {
      title: 'Battery & Electrical',
      label: 'Winter Critical',
      description: 'Cold weather is hard on batteries. We test battery health, check charging systems, and ensure your vehicle starts reliably all winter long.',
      icon: BatteryCharging,
      span: 'lg:col-span-2',
      href: '/services/battery-testing-englewood-co',
    },
    {
      title: 'Brake Service & Repair',
      label: 'Safety First',
      description: 'Complete brake system inspection, pad replacement, rotor resurfacing, and brake fluid service. Critical for safe winter driving.',
      icon: Disc,
      span: 'lg:col-span-2',
      href: '/services/brake-repair-englewood-co',
    },
    {
      title: 'Engine Diagnostics & Repair',
      label: 'Expert Service',
      description: 'Advanced diagnostic equipment to identify and repair engine issues quickly and accurately. Keep your engine running strong.',
      icon: Car,
      span: 'lg:col-span-4',
      href: '/services/engine-diagnostics-englewood-co',
    },
    {
      title: 'Oil Changes & Fluid Service',
      label: 'Regular Service',
      description: 'Regular oil changes and complete fluid maintenance to keep your vehicle running smoothly through all seasons.',
      icon: Droplets,
      span: 'lg:col-span-2',
      href: '/services/oil-changes-englewood-co',
    },
    {
      title: 'Air Conditioning & Heating',
      label: 'Comfort',
      description: 'A/C recharge, heating system repair, and climate control diagnostics. Stay warm this winter.',
      icon: Snowflake,
      span: 'lg:col-span-2',
      href: '/services/heating-ac-englewood-co',
    },
    {
      title: 'Transmission Service',
      label: 'Drivetrain',
      description: 'Transmission diagnostics, repairs, and fluid changes for automatic and manual transmissions.',
      icon: Cog,
      span: 'lg:col-span-2',
      href: '/services/transmission-services-englewood-co',
    },
    {
      title: 'Suspension & Steering',
      label: 'Handling',
      description: 'Suspension inspection, shock and strut replacement, and steering system repair for safe handling.',
      icon: Gauge,
      span: 'lg:col-span-2',
      href: '/services/suspension-steering-englewood-co',
    },
    {
      title: 'Exhaust System Service',
      label: 'Emissions',
      description: 'Muffler replacement, catalytic converter service, and exhaust leak repair.',
      icon: Wind,
      span: 'lg:col-span-2',
      href: '/services/exhaust-system-englewood-co',
    },
    {
      title: 'Electrical System',
      label: 'Electronics',
      description: 'Electrical diagnostics, wiring repair, alternator and starter service. Modern vehicles demand expert electrical service.',
      icon: BatteryCharging,
      span: 'lg:col-span-3',
      href: '/services/electrical-system-englewood-co',
    },
    {
      title: 'Check Engine Light Diagnostics',
      label: 'Diagnostics',
      description: 'Advanced scan tools to diagnose check engine lights and emission problems quickly.',
      icon: AlertTriangle,
      span: 'lg:col-span-3',
      href: '/services/check-engine-light-englewood-co',
    },
  ];

  return (
    <div>
      {/* Hero Header */}
      <div>
        <div className="h-32 w-full bg-primary-blue lg:h-48" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <div className="size-24 rounded-full ring-4 ring-white sm:size-32 bg-white flex items-center justify-center">
                <span className="text-4xl sm:text-5xl font-bold text-primary-green">RKC</span>
              </div>
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                <h1 className="text-2xl font-bold text-gray-900">RKC Automotive</h1>
                <p className="text-gray-600">Your Trusted Auto Repair in Englewood</p>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+17207493965"
                  className="inline-flex justify-center items-center rounded-md bg-primary-green hover:bg-primary-green-dark px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors"
                >
                  <svg className="w-5 h-5 mr-1.5 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </a>
                <a
                  href="https://share.google/hRQ6WsLJdoo0DwUlu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center rounded-md bg-white hover:bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-colors"
                >
                  <MapPin className="w-5 h-5 mr-1.5 -ml-0.5 text-gray-400" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
            <h1 className="text-2xl font-bold text-gray-900">RKC Automotive</h1>
            <p className="text-gray-600">Your Trusted Auto Repair in Englewood</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base/7 font-semibold text-primary-green">Professional Auto Care</h2>
          <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Complete automotive services for Colorado drivers
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isFirst = index === 0;
              return (
                <div key={index} className={`flex p-px ${service.span || 'lg:col-span-2'}`}>
                  <Link href={service.href} className="w-full group">
                    <div className="w-full h-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 group-hover:shadow-md group-hover:outline-primary-green/20 transition-all">
                      <div className="p-10">
                        <div className="flex items-center gap-3 mb-4">
                          <IconComponent className="w-8 h-8 text-primary-green flex-shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                          <h3 className="text-sm/4 font-semibold text-gray-500">{service.label}</h3>
                        </div>
                        <p className={`${isFirst ? 'text-2xl' : 'text-lg'} font-medium tracking-tight text-gray-900 group-hover:text-primary-green transition-colors`}>
                          {service.title}
                        </p>
                        <p className={`mt-2 ${isFirst ? 'max-w-2xl' : 'max-w-lg'} text-sm/6 text-gray-600`}>
                          {service.description}
                        </p>
                        <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-green group-hover:underline">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose RKC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RKC Automotive?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your local Englewood auto shop with the expertise and service of the big chains
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Technicians</h3>
              <p className="text-gray-600">
                Certified mechanics with years of experience servicing all makes and models. We stay up-to-date with the latest automotive technology.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue rounded-full mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Honest & Fair</h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden fees. We provide detailed estimates before any work begins and never recommend unnecessary services.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Local & Trusted</h3>
              <p className="text-gray-600">
                Family-owned and operated in Englewood. we&#39;re your neighbors, and we care about keeping your family safe on Colorado roads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Service? we&#39;re Here to Help
          </h2>
          <p className="text-xl text-white mb-8">
            don&#39;t see the service you need listed? Give us a call - we handle a wide range of automotive repairs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17207493965"
              className="bg-white hover:bg-gray-100 text-primary-green font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (720) 749-3965
            </a>
            <a
              href="https://share.google/hRQ6WsLJdoo0DwUlu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-blue hover:bg-primary-blue-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
