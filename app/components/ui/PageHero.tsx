'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS, PHOTOS } from '@/lib/constants';

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHero({
  title,
  description,
  breadcrumbs,
  eyebrow,
  imageSrc = PHOTOS.interior,
  imageAlt,
}: PageHeroProps) {
  const reduce = useReducedMotion();
  const heroAlt = imageAlt ?? `${title} — RKC Automotive in Englewood, CO`;

  return (
    <section className="relative isolate min-h-[58svh] overflow-hidden bg-[#0c1222] pt-24 sm:min-h-[64svh] xl:pt-28">
      <Image src={imageSrc} alt={heroAlt} fill priority className="object-cover" sizes="100vw" />
      <div className="photo-veil absolute inset-0" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-4 pb-16 pt-20 sm:px-6 sm:pb-20 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              {breadcrumbs.map((crumb, i) => (
                <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/30">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">{eyebrow}</p>
        )}
        <motion.h1
          className="mt-3 max-w-4xl font-display text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href={BUSINESS.phoneHref}
            className="btn-green"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            <Phone className="size-5" />
            {BUSINESS.phone}
          </motion.a>
          <Link href="/contact" className="btn-ghost-light">
            Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
