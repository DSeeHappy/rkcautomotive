import type { Metadata } from 'next';
import {
  Car,
  Disc,
  Droplets,
  Cog,
  BatteryCharging,
  Snowflake,
  Gauge,
  Wind,
  ClipboardCheck,
  ShieldCheck,
  AlertTriangle
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
    },
    {
      title: 'Battery & Electrical',
      label: 'Winter Critical',
      description: 'Cold weather is hard on batteries. We test battery health, check charging systems, and ensure your vehicle starts reliably all winter long.',
      icon: BatteryCharging,
      span: 'lg:col-span-2',
    },
    {
      title: 'Brake Service & Repair',
      label: 'Safety First',
      description: 'Complete brake system inspection, pad replacement, rotor resurfacing, and brake fluid service. Critical for safe winter driving.',
      icon: Disc,
      span: 'lg:col-span-2',
    },
    {
      title: 'Engine Diagnostics & Repair',
      label: 'Expert Service',
      description: 'Advanced diagnostic equipment to identify and repair engine issues quickly and accurately. Keep your engine running strong.',
      icon: Car,
      span: 'lg:col-span-4',
    },
    {
      title: 'Oil Changes & Fluid Service',
      label: 'Regular Service',
      description: 'Regular oil changes and complete fluid maintenance to keep your vehicle running smoothly through all seasons.',
      icon: Droplets,
      span: 'lg:col-span-2',
    },
    {
      title: 'Air Conditioning & Heating',
      label: 'Comfort',
      description: 'A/C recharge, heating system repair, and climate control diagnostics. Stay warm this winter.',
      icon: Snowflake,
      span: 'lg:col-span-2',
    },
    {
      title: 'Transmission Service',
      label: 'Drivetrain',
      description: 'Transmission diagnostics, repairs, and fluid changes for automatic and manual transmissions.',
      icon: Cog,
      span: 'lg:col-span-2',
    },
    {
      title: 'Suspension & Steering',
      label: 'Handling',
      description: 'Suspension inspection, shock and strut replacement, and steering system repair for safe handling.',
      icon: Gauge,
      span: 'lg:col-span-2',
    },
    {
      title: 'Exhaust System Service',
      label: 'Emissions',
      description: 'Muffler replacement, catalytic converter service, and exhaust leak repair.',
      icon: Wind,
      span: 'lg:col-span-2',
    },
    {
      title: 'Pre-Purchase Inspections',
      label: 'Smart Buying',
      description: 'Comprehensive vehicle inspection before you buy to identify potential issues and avoid costly surprises.',
      icon: ClipboardCheck,
      span: 'lg:col-span-3',
    },
    {
      title: 'Check Engine Light Diagnostics',
      label: 'Diagnostics',
      description: 'Advanced scan tools to diagnose check engine lights and emission problems quickly.',
      icon: AlertTriangle,
      span: 'lg:col-span-3',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue via-primary-blue-dark to-primary-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive automotive repair and maintenance services to keep your vehicle running at its best
          </p>
        </div>
      </section>

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
                  <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5">
                    <div className="p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className="w-8 h-8 text-primary-green flex-shrink-0" strokeWidth={1.5} />
                        <h3 className="text-sm/4 font-semibold text-gray-500">{service.label}</h3>
                      </div>
                      <p className={`${isFirst ? 'text-2xl' : 'text-lg'} font-medium tracking-tight text-gray-900`}>
                        {service.title}
                      </p>
                      <p className={`mt-2 ${isFirst ? 'max-w-2xl' : 'max-w-lg'} text-sm/6 text-gray-600`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Service? We're Here to Help
          </h2>
          <p className="text-xl text-white mb-8">
            Don't see the service you need listed? Give us a call - we handle a wide range of automotive repairs!
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
