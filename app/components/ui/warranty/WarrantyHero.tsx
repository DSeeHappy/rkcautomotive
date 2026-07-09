'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CalendarCheck, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS, PHOTOS } from '@/lib/constants';

export default function WarrantyHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden bg-[#0c1222] pt-24 sm:min-h-[78svh]">
      <Image
        src={PHOTOS.engineBay}
        alt="ASE-certified technician performing diagnostics at RKC Automotive in Englewood, CO"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="photo-veil absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
          The reality check
        </p>
        <motion.h1
          className="mt-4 max-w-4xl font-display text-4xl tracking-wide text-white sm:text-5xl lg:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          We Accept All Major Extended Warranties in Englewood, CO
        </motion.h1>
        <motion.p
          className="mt-5 max-w-3xl text-lg text-white/85 sm:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Don&apos;t battle claims adjusters alone. From diagnostics and teardown authorizations to
          fighting contract exclusions, RKC Automotive manages your entire third-party warranty claim
          from start to finish.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/contact" className="btn-green">
            <CalendarCheck className="size-5" />
            Schedule Warranty Diagnostic
          </Link>
          <a href={BUSINESS.phoneHref} className="btn-ghost-light">
            <Phone className="size-5" />
            Call {BUSINESS.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
