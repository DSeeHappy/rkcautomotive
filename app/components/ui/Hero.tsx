'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, Phone } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BUSINESS, PHOTOS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden bg-[#0c1222]">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
        <div className="absolute inset-0 origin-[78%_56%] scale-[0.94] sm:origin-[74%_53%] sm:scale-[0.97] lg:origin-[70%_50%] lg:scale-[1.05]">
          <Image
            src={PHOTOS.heroMain}
            alt="RKC Automotive green shop bay entrance in Englewood"
            fill
            priority
            className={`object-cover object-[78%_56%] sm:object-[74%_53%] lg:object-[70%_50%] ${reduce ? '' : 'ken-burns'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1920px"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(12, 18, 34, 0.45) 0%, rgba(12, 18, 34, 0.22) 38%, rgba(12, 18, 34, 0.68) 100%), linear-gradient(90deg, rgba(14, 133, 54, 0.18) 0%, transparent 55%, rgba(28, 61, 145, 0.1) 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1222]/88 via-[#0c1222]/18 to-[#0c1222]/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c1222]/72 via-[#0c1222]/12 to-transparent lg:from-[#0c1222]/60 lg:via-[#0c1222]/5 lg:to-transparent"
          aria-hidden
        />
      </motion.div>

      <motion.div
        className="relative z-10 flex min-h-[100svh] flex-col px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36"
        style={reduce ? undefined : { opacity }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end">
          <div className="pb-24 sm:pb-28 lg:pb-32">
            <div className="max-w-3xl text-left xl:max-w-4xl">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                  Englewood, CO · Hablamos Español
                </p>
                <h1 className="mt-4 font-display text-[clamp(2rem,5.5vw,4.25rem)] leading-[0.98] tracking-wide text-white">
                  Auto Repair &amp; Diagnostics in Englewood, CO You Can Trust
                </h1>
                <p className="mt-5 max-w-xl text-lg font-medium text-white/85 sm:text-xl">
                  Diagnostics • Engine Repair • Transmission • Brakes • Maintenance
                </p>
                <p className="mt-3 text-base text-white/75 sm:text-lg">
                  Service area: Englewood, Denver, Littleton, Aurora &amp; surrounding
                </p>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap items-center gap-4"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
                  <Phone className="size-5" />
                  Call Now — {BUSINESS.phone}
                </MotionAnchor>
                <Link href="/contact" className="btn-ghost-light">
                  Book Service
                </Link>
              </motion.div>

              <motion.div
                className="mt-8 max-w-xl rounded-2xl border border-amber-400/30 bg-amber-500/10 p-5 backdrop-blur-sm"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-300" aria-hidden />
                  <div>
                    <p className="font-bold text-white">Check engine light or no-start?</p>
                    <p className="mt-1 text-sm text-white/75">
                      Call now for same-day diagnostics when bays are open — we find the real problem, not just the
                      code.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <MotionAnchor href={BUSINESS.phoneHref} className="text-sm font-bold text-primary-green-light underline-offset-4 hover:underline">
                        Emergency: {BUSINESS.phone}
                      </MotionAnchor>
                      <Link
                        href="/services/check-engine-light-englewood-co"
                        className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
                      >
                        Check engine help →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
