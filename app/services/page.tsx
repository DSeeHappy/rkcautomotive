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
      title: 'Engine Diagnostics & Repair',
      description: 'Advanced diagnostic equipment to identify and repair engine issues quickly and accurately.',
      icon: Car,
    },
    {
      title: 'Brake Service & Repair',
      description: 'Complete brake system inspection, pad replacement, rotor resurfacing, and brake fluid service.',
      icon: Disc,
    },
    {
      title: 'Oil Changes & Fluid Service',
      description: 'Regular oil changes and complete fluid maintenance to keep your vehicle running smoothly.',
      icon: Droplets,
    },
    {
      title: 'Transmission Service',
      description: 'Transmission diagnostics, repairs, and fluid changes for automatic and manual transmissions.',
      icon: Cog,
    },
    {
      title: 'Battery & Electrical',
      description: 'Battery testing, replacement, and electrical system diagnostics and repair.',
      icon: BatteryCharging,
    },
    {
      title: 'Air Conditioning & Heating',
      description: 'A/C recharge, heating system repair, and climate control diagnostics.',
      icon: Snowflake,
    },
    {
      title: 'Suspension & Steering',
      description: 'Suspension inspection, shock and strut replacement, and steering system repair.',
      icon: Gauge,
    },
    {
      title: 'Exhaust System Service',
      description: 'Muffler replacement, catalytic converter service, and exhaust leak repair.',
      icon: Wind,
    },
    {
      title: 'Pre-Purchase Inspections',
      description: 'Comprehensive vehicle inspection before you buy to identify potential issues.',
      icon: ClipboardCheck,
    },
    {
      title: 'Preventative Maintenance',
      description: 'Regular maintenance schedules to prevent costly repairs and extend vehicle life.',
      icon: ShieldCheck,
    },
    {
      title: 'Check Engine Light Diagnostics',
      description: 'Advanced scan tools to diagnose check engine lights and emission problems.',
      icon: AlertTriangle,
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <IconComponent className="w-12 h-12 text-primary-green mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
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
