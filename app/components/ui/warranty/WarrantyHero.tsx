'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Award, CalendarCheck, Phone, ShieldCheck, Users, Wrench } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BUSINESS, LABOR_RATE, OTHER_WARRANTY_PROVIDERS, PHOTOS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';

const STAT_PILLS = [
  { icon: Wrench, label: LABOR_RATE, sub: 'posted labor rate' },
  { icon: Users, label: '13+', sub: 'warranty partners' },
  { icon: Award, label: 'ASE', sub: 'certified techs' },
  { icon: ShieldCheck, label: '30+ yrs', sub: 'Englewood shop' },
] as const;

export default function WarrantyHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.4]);

  const partnerCount = 13 + OTHER_WARRANTY_PROVIDERS.length;

  return (
    <section ref={ref} className="relative isolate min-h-[70svh] overflow-hidden bg-[#0c1222] sm:min-h-[78svh]">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
        <Image
          src={PHOTOS.engineRebuild}
          alt="ASE-certified technicians rebuilding an engine at RKC Automotive in Englewood, CO"
          fill
          priority
          className={`object-cover object-center ${reduce ? '' : 'ken-burns'}`}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(12, 18, 34, 0.5) 0%, rgba(12, 18, 34, 0.25) 40%, rgba(12, 18, 34, 0.88) 100%), linear-gradient(90deg, rgba(14, 133, 54, 0.22) 0%, transparent 50%, rgba(28, 61, 145, 0.15) 100%)',
          }}
        />
        <div className="photo-veil absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c1222]/80 via-[#0c1222]/20 to-transparent"
        />
      </motion.div>

      <motion.div
        className="relative z-10 flex min-h-[70svh] flex-col px-4 pt-28 sm:min-h-[78svh] sm:px-6 sm:pt-32 lg:px-8 lg:pt-36"
        style={reduce ? undefined : { opacity }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end pb-20 sm:pb-24">
          <div className="max-w-4xl">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-green-light"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Warranty advocacy · Englewood, CO
            </motion.p>

            <motion.h1
              className="mt-4 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95] tracking-wide text-white"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              We Accept{' '}
              <span className="bg-gradient-to-r from-primary-green-light via-emerald-300 to-primary-green-light bg-clip-text text-transparent">
                All Major
              </span>{' '}
              Extended Warranties
            </motion.h1>

            <motion.p
              className="mt-5 max-w-2xl text-lg font-medium text-white/85 sm:text-xl"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              Don&apos;t battle claims adjusters alone. RKC manages diagnostics, teardown
              authorizations, denial appeals, and parts quality — from drop-off through approved
              repair.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
                <Phone className="size-5" />
                Call {BUSINESS.phone}
              </MotionAnchor>
              <Link href="/contact" className="btn-ghost-light">
                <CalendarCheck className="size-5" />
                Schedule Warranty Diagnostic
              </Link>
            </motion.div>
          </div>

          {/* Floating stat pills */}
          <motion.div
            className="mt-10 flex flex-wrap gap-3 lg:mt-12"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {STAT_PILLS.map((pill) => {
              const Icon = pill.icon;
              const label = pill.label === '13+' ? `${partnerCount}+` : pill.label;
              return (
                <div
                  key={pill.sub}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 backdrop-blur-md"
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary-green/20 ring-1 ring-primary-green/30">
                    <Icon className="size-4 text-primary-green-light" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-xl tracking-wide text-white">{label}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
                      {pill.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
