import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Phone } from 'lucide-react';
import { BUSINESS, FOOTER_LINKS, PHOTOS, SERVICES } from '@/lib/constants';
import PhoneLink from '@/app/components/ui/PhoneLink';
import SocialLinks from '@/app/components/ui/SocialLinks';
import { AnimatedLogoStatic } from '@/app/components/ui/AnimatedLogo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0c1222] text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <Image src={PHOTOS.interior} alt="" fill className="object-cover" sizes="100vw" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/90 to-[#0c1222]/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-4">
            <AnimatedLogoStatic variant="footer" onDarkBackground className="rounded-xl shadow-[0_8px_24px_-10px_rgba(0,0,0,0.45)]" />
            <p className="max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
              ASE-certified auto repair on W Evans Ave — honest diagnostics, quality parts, 30+ years serving Englewood &amp; Denver metro.
            </p>
          </div>
          <PhoneLink className="btn-green shrink-0 self-start lg:self-end">
            <Phone className="size-5" />
            {BUSINESS.phone}
          </PhoneLink>
        </div>

        {/* Visit + Explore */}
        <div className="mt-12 grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-green-light">Visit</p>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary-blue-light" />
                <a href={BUSINESS.directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {BUSINESS.address.full}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary-blue-light" />
                <div className="space-y-0.5">
                  <p>{BUSINESS.hours.weekdays}</p>
                  <p>{BUSINESS.hours.saturday}</p>
                  <p>{BUSINESS.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-green-light">Explore</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="mt-12 border-b border-white/10 pb-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-green-light">Services</p>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-primary-green/50 hover:bg-primary-green/20 hover:text-white"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="mt-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary-green-light">
            Connect &amp; reviews
          </p>
          <SocialLinks variant="light" />
        </div>

        {/* Credits */}
        <div className="mt-14 border-t border-white/10 pt-10 text-center">
          <a
            href="https://molecule.work"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="molecule.work — Premium web design for Colorado businesses"
            className="group mx-auto inline-flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-colors hover:border-primary-green/40 hover:bg-primary-green/10"
          >
            <Image
              src="/molecule-logo.png"
              alt="Molecule Work"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg opacity-90 ring-1 ring-white/15 transition group-hover:opacity-100 group-hover:ring-primary-green/40"
            />
            <span className="text-sm font-semibold text-white/75 transition-colors group-hover:text-white sm:text-base">
              Website built by <span className="text-primary-green-light">molecule.work</span>
            </span>
            <span className="text-xs text-white/50 transition-colors group-hover:text-white/65 sm:text-sm">
              Premium web design for Colorado businesses
            </span>
          </a>
          <p className="mt-6 text-sm text-white/40">
            © {year} {BUSINESS.name}. All rights reserved. · ASE Certified · Englewood, Colorado
          </p>
        </div>
      </div>
    </footer>
  );
}
