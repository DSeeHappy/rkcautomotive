'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import {
  Disc,
  Car,
  Cog,
  Settings,
  Wind,
  Zap,
  Droplet,
  AlertCircle,
  Battery,
  Wind as Exhaust,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Brake Repair', href: '/services/brake-repair-englewood-co', icon: Disc },
    { name: 'Engine Diagnostics', href: '/services/engine-diagnostics-englewood-co', icon: Car },
    { name: 'Transmission Services', href: '/services/transmission-services-englewood-co', icon: Cog },
    { name: 'Suspension & Steering', href: '/services/suspension-steering-englewood-co', icon: Settings },
    { name: 'Heating & AC', href: '/services/heating-ac-englewood-co', icon: Wind },
    { name: 'Electrical System', href: '/services/electrical-system-englewood-co', icon: Zap },
    { name: 'Oil Changes', href: '/services/oil-changes-englewood-co', icon: Droplet },
    { name: 'Check Engine Light', href: '/services/check-engine-light-englewood-co', icon: AlertCircle },
    { name: 'Battery Testing', href: '/services/battery-testing-englewood-co', icon: Battery },
    { name: 'Exhaust System', href: '/services/exhaust-system-englewood-co', icon: Exhaust },
    { name: 'Preventative Maintenance', href: '/services/preventative-maintenance-englewood-co', icon: ShieldCheck },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-primary-green">RKC</span>{' '}
              <span className="text-primary-blue">Automotive</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary-green transition-colors font-medium"
            >
              Home
            </Link>

            {/* Services Dropdown with Headless UI */}
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-foreground hover:text-primary-green transition-colors font-medium outline-none">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-4">
                  <Link
                    href="/services"
                    className="group -mx-3 flex items-center gap-x-4 rounded-lg p-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 border-b border-gray-100 mb-2"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-primary-green group-hover:bg-primary-green-dark transition-colors">
                      <ShieldCheck className="size-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-semibold">All Services</div>
                      <div className="text-xs text-gray-500">View complete service list</div>
                    </div>
                  </Link>

                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="group flex items-center gap-x-3 rounded-lg p-3 text-sm hover:bg-gray-50"
                      >
                        <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white transition-colors">
                          <service.icon className="size-5 text-primary-green group-hover:text-primary-green-dark transition-colors" strokeWidth={2} />
                        </div>
                        <div className="flex-auto">
                          <span className="block font-medium text-gray-900 group-hover:text-primary-green transition-colors">
                            {service.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </PopoverPanel>
            </Popover>

            <Link
              href="/about"
              className="text-foreground hover:text-primary-green transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="/englewood-co-auto-repair"
              className="text-foreground hover:text-primary-green transition-colors font-medium"
            >
              Location
            </Link>
            <Link
              href="/frequently-asked-questions"
              className="text-foreground hover:text-primary-green transition-colors font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* Phone Number - Desktop */}
          <a
            href="tel:+17207493965"
            className="hidden md:flex items-center bg-primary-blue hover:bg-primary-blue-dark text-white px-4 py-2 rounded-lg transition-colors font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (720) 749-3965
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Headless UI Dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold">
                  <span className="text-primary-green">RKC</span>{' '}
                  <span className="text-primary-blue">Automotive</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                {/* Services in Mobile */}
                <div className="space-y-2 py-6">
                  <div className="text-sm font-semibold text-gray-500 mb-3">SERVICES</div>
                  <Link
                    href="/services"
                    className="-mx-3 flex items-center gap-x-4 rounded-lg p-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-primary-green">
                      <ShieldCheck className="size-6 text-white" strokeWidth={2} />
                    </div>
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="group -mx-3 flex items-center gap-x-4 rounded-lg p-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <service.icon className="size-6 text-primary-green" strokeWidth={2} />
                      </div>
                      {service.name}
                    </Link>
                  ))}
                </div>

                {/* Other Links */}
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/englewood-co-auto-repair"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Location
                  </Link>
                  <Link
                    href="/frequently-asked-questions"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>

                {/* Call Button at Bottom */}
                <div className="py-6">
                  <a
                    href="tel:+17207493965"
                    className="-mx-3 flex items-center justify-center gap-x-2 rounded-lg bg-primary-blue px-3 py-2.5 text-base font-semibold text-white hover:bg-primary-blue-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (720) 749-3965
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
}
