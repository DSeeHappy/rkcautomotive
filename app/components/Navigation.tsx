'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS, NAV_LINKS, SERVICES } from '@/lib/constants';
import AnimatedLogo from '@/app/components/ui/AnimatedLogo';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const links = NAV_LINKS.filter((l) => l.name !== 'Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav shadow-[0_8px_40px_-20px_rgba(12,18,34,0.35)]' : 'bg-transparent'
      }`}
      initial={reduce ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-[5.25rem] lg:h-24 xl:h-28 sm:px-6 lg:px-8">
        <AnimatedLogo variant="nav" href="/" onDarkBackground={!scrolled} />

        <div className="hidden items-center gap-1 lg:flex">
          <Popover className="relative">
            <PopoverButton
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold outline-none transition-colors ${
                scrolled
                  ? 'text-foreground hover:bg-black/5 hover:text-primary-green'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              Services
              <ChevronDown className="size-4 opacity-70" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute left-1/2 z-50 mt-3 w-[28rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/20 bg-white/95 shadow-2xl backdrop-blur-xl transition data-closed:translate-y-2 data-closed:opacity-0"
            >
              <div className="grid grid-cols-2 gap-1 p-3">
                <Link
                  href="/services"
                  className="col-span-2 mb-1 rounded-xl bg-gradient-to-r from-primary-green to-primary-blue px-4 py-3 text-sm font-semibold text-white"
                >
                  View all services →
                </Link>
                {SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary-green/8 hover:text-primary-green"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                scrolled
                  ? 'text-foreground hover:bg-black/5 hover:text-primary-green'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <motion.a
            href={BUSINESS.phoneHref}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary-green px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_-10px_rgba(14,133,54,0.7)]"
            whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            <Phone className="size-4" />
            {BUSINESS.phone}
          </motion.a>
        </div>

        <button
          type="button"
          className={`rounded-full p-2.5 lg:hidden ${scrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-[#0c1222] text-white">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5">
            <AnimatedLogo variant="nav" href="/" onDarkBackground />
            <button type="button" onClick={() => setOpen(false)} className="p-2" aria-label="Close menu">
              <X className="size-6" />
            </button>
          </div>
          <div className="flex-1 space-y-1 px-3 py-6">
            <Link href="/" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-lg font-semibold hover:bg-white/5">
              Home
            </Link>
            <Link href="/services" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-lg font-semibold hover:bg-white/5">
              All Services
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-lg font-semibold hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
            <p className="mt-6 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Services</p>
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                {service.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-white/10 p-4">
            <a href={BUSINESS.phoneHref} className="btn-green w-full justify-center">
              <Phone className="size-5" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </motion.nav>
  );
}
