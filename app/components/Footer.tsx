'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Phone } from 'lucide-react';
import { BUSINESS, FOOTER_LINKS, PHOTOS, SERVICES } from '@/lib/constants';
import PhoneLink from '@/app/components/ui/PhoneLink';
import SocialLinks from '@/app/components/ui/SocialLinks';
import { AnimatedLogoStatic } from '@/app/components/ui/AnimatedLogo';
import { useLanguage } from '@/lib/language';
import { localizedServiceName, siteCopy } from '@/lib/siteCopy';

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const copy = siteCopy(lang).footer;

  return (
    <footer lang={lang} className="relative z-0 overflow-hidden bg-[#0c1222] text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <Image src={PHOTOS.interior} alt="" fill className="object-cover" sizes="100vw" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/90 to-[#0c1222]/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg space-y-4">
            <AnimatedLogoStatic variant="footer" onDarkBackground className="rounded-xl shadow-[0_8px_24px_-10px_rgba(0,0,0,0.45)]" />
            <p className="text-base leading-relaxed text-white/60 sm:text-lg">{copy.blurb}</p>
          </div>
          <PhoneLink className="btn-green w-fit shrink-0">
            <Phone className="size-5" aria-hidden />
            {BUSINESS.phone}
          </PhoneLink>
        </div>

        {/* Visit + Explore */}
        <div className="mt-12 grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-green-light">{copy.visit}</p>
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
                  <p>{copy.hours.weekdays}</p>
                  <p>{copy.hours.saturday}</p>
                  <p>{copy.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-green-light">{copy.explore}</p>
            <ul className="grid grid-cols-2 content-start gap-x-6 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href} className="min-w-0">
                  <Link href={link.href} className="text-sm leading-snug text-white/65 transition-colors hover:text-white">
                    {copy.links[link.href] ?? link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="mt-12 border-b border-white/10 pb-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-green-light">{copy.services}</p>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-primary-green/50 hover:bg-primary-green/20 hover:text-white"
              >
                {localizedServiceName(service.slug, lang, service.name)}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="mt-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary-green-light">
            {copy.connect}
          </p>
          <SocialLinks variant="light" />
        </div>

        {/* Credits */}
        <div className="mt-14 border-t border-white/10 pt-10 text-center">
          <p className="text-sm text-white/40">{copy.rights(year, BUSINESS.name)}</p>
        </div>
      </div>
    </footer>
  );
}
