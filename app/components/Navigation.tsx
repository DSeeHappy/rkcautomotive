'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDown, Menu, Phone, Shield, Sparkles, X } from 'lucide-react';
import { BUSINESS, NAV_LINKS, SERVICE_NAV_GROUPS, SERVICES } from '@/lib/constants';
import AnimatedLogo from '@/app/components/ui/AnimatedLogo';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import PhoneLink from '@/app/components/ui/PhoneLink';
import { useGsapReveal } from '@/lib/useGsapReveal';

const serviceBySlug = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

/** Site chrome above page stacking contexts (GSAP transforms / isolate / cards). */
const NAV_Z = 'z-[100]';
const POPOVER_Z = 'z-[110]';
const MOBILE_MENU_Z = 'z-[120]';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Opacity-only reveal — transform on fixed nav creates a stacking context that traps the dropdown under page layers in Chrome
  const navRef = useGsapReveal<HTMLElement>({ y: 0, duration: 0.55 });
  const links = NAV_LINKS.filter((l) => l.name !== 'Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = (close: () => void) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      close();
      closeTimerRef.current = null;
    }, 160);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 ${NAV_Z} overflow-visible ${
        scrolled
          ? 'glass-nav shadow-[0_8px_40px_-20px_rgba(12,18,34,0.35)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 overflow-visible px-4 sm:h-[4.5rem] sm:px-6 lg:h-20 lg:px-8">
        <AnimatedLogo
          variant="nav"
          href="/"
          scrolled={scrolled}
          className="relative z-10 min-h-0 max-h-full shrink-0"
        />

        <div className="hidden items-center gap-1 lg:flex">
          <Popover className="relative">
            {({ open: servicesOpen, close: closeServices }) => (
              <div
                className="relative"
                onMouseEnter={() => {
                  clearCloseTimer();
                  if (!servicesOpen) servicesButtonRef.current?.click();
                }}
                onMouseLeave={() => {
                  if (servicesOpen) scheduleClose(closeServices);
                }}
              >
                <PopoverButton
                  ref={servicesButtonRef}
                  aria-label="Services menu"
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold outline-none transition-colors ${
                    scrolled
                      ? 'text-foreground hover:bg-black/5 hover:text-primary-green'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  Services
                  <ChevronDown className="size-4 opacity-70" aria-hidden />
                </PopoverButton>
                <PopoverPanel
                  portal
                  anchor="bottom"
                  transition
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={() => scheduleClose(closeServices)}
                  className={`${POPOVER_Z} w-[min(44rem,calc(100vw-2rem))] pt-3 transition data-closed:translate-y-2 data-closed:opacity-0`}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
                    <div className="border-b border-[color:var(--line)] bg-gradient-to-r from-primary-green/8 to-primary-blue/8 p-4">
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href="/services"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-green to-primary-blue px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                        >
                          View all services →
                        </Link>
                        <Link
                          href="/warranty"
                          className="inline-flex items-center gap-2 rounded-xl border border-primary-green/25 bg-white px-4 py-3 text-sm font-semibold text-primary-green transition-colors hover:bg-primary-green/8"
                        >
                          <Shield className="size-4" aria-hidden />
                          Extended warranty
                        </Link>
                      </div>
                    </div>

                    <div className="grid gap-0 p-4 sm:grid-cols-2">
                      {SERVICE_NAV_GROUPS.map((group) => (
                        <div key={group.label} className="p-2">
                          <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ink-muted">
                            {group.label}
                          </p>
                          <ul className="space-y-0.5">
                            {group.slugs.map((slug) => {
                              const service = serviceBySlug[slug];
                              if (!service) return null;
                              const Icon = service.icon;
                              const isFeatured = group.featured?.includes(slug);
                              return (
                                <li key={slug}>
                                  <Link
                                    href={service.href}
                                    className={`group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-primary-green/8 ${
                                      isFeatured ? 'bg-primary-green/5 ring-1 ring-primary-green/15' : ''
                                    }`}
                                  >
                                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-green/10 ring-1 ring-primary-green/20 transition group-hover:bg-primary-green/15">
                                      <Icon className="size-4 text-primary-green" aria-hidden />
                                    </span>
                                    <span className="min-w-0">
                                      <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary-green">
                                        {service.name}
                                        {isFeatured && (
                                          <Sparkles className="size-3 text-primary-green" aria-label="Featured service" />
                                        )}
                                      </span>
                                      <span className="mt-0.5 block text-xs leading-snug text-ink-muted">
                                        {service.description}
                                      </span>
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverPanel>
              </div>
            )}
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

          <MotionAnchor
            href={BUSINESS.phoneHref}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary-green px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_-10px_rgba(14,133,54,0.7)]"
          >
            <Phone className="size-4" aria-hidden />
            {BUSINESS.phone}
          </MotionAnchor>
        </div>

        <button
          type="button"
          className={`shrink-0 rounded-full p-2.5 lg:hidden ${scrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <div className={`fixed inset-0 ${MOBILE_MENU_Z} bg-black/50`} />
        <DialogPanel
          className={`fixed inset-y-0 right-0 ${MOBILE_MENU_Z} flex w-full max-w-sm flex-col overflow-y-auto bg-[#0c1222] text-white`}
        >
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
            <Link href="/warranty" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-lg font-semibold text-primary-green-light hover:bg-white/5">
              Extended Warranty
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
            {SERVICE_NAV_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="mt-6 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{group.label}</p>
                {group.slugs.map((slug) => {
                  const service = serviceBySlug[slug];
                  if (!service) return null;
                  return (
                    <Link
                      key={slug}
                      href={service.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                    >
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 p-4">
            <PhoneLink className="btn-green w-full justify-center">
              <Phone className="size-5" aria-hidden />
              Call {BUSINESS.phone}
            </PhoneLink>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
}
