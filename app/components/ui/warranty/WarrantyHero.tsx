'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Award, CalendarCheck, Phone, ShieldCheck, Wrench } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS, LABOR_RATE, PHOTOS } from '@/lib/constants';
import FadeIn from '@/app/components/ui/FadeIn';
import { MotionAnchor } from '@/app/components/ui/MotionLink';

const TRUST_ITEMS = [
  { icon: Award, label: 'Certification', value: 'ASE Certified' },
  { icon: Wrench, label: 'Labor rate', value: LABOR_RATE },
  { icon: ShieldCheck, label: 'Experience', value: '30+ years' },
  { icon: Phone, label: 'Language', value: 'Hablamos Español' },
] as const;

export default function WarrantyHero() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative isolate min-h-[78svh] overflow-hidden bg-[#0c1222] pt-24 sm:min-h-[82svh]">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.engineBay}
            alt="ASE-certified technician performing diagnostics at RKC Automotive in Englewood, CO"
            fill
            priority
            className={`object-cover ${reduce ? '' : 'ken-burns'}`}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(12, 18, 34, 0.55) 0%, rgba(12, 18, 34, 0.28) 42%, rgba(12, 18, 34, 0.82) 100%), linear-gradient(90deg, rgba(14, 133, 54, 0.2) 0%, transparent 52%, rgba(28, 61, 145, 0.12) 100%)',
            }}
          />
          <div className="photo-veil absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c1222]/75 via-[#0c1222]/15 to-transparent"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-green-light"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Extended warranty claims · Englewood, CO
          </motion.p>
          <motion.h1
            className="mt-4 max-w-4xl font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.98] tracking-wide text-white"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            We Accept All Major Extended Warranties in Englewood, CO
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-lg font-medium text-white/85 sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            Don&apos;t battle claims adjusters alone. RKC manages diagnostics, teardown authorizations,
            denial appeals, and parts quality — from drop-off through approved repair.
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
            <MotionAnchor href={BUSINESS.phoneHref} className="btn-ghost-light">
              <Phone className="size-5" />
              Call {BUSINESS.phone}
            </MotionAnchor>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative z-10 -mt-6 border-y border-[color:var(--line)] bg-white/95 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--line)] lg:grid-cols-4">
          {TRUST_ITEMS.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.06} className="flex items-center gap-4 px-6 py-8 sm:px-8">
              <item.icon className="size-8 shrink-0 text-primary-green" aria-hidden />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">{item.label}</p>
                <p className="mt-1 font-display text-xl tracking-wide text-primary-blue sm:text-2xl">{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
