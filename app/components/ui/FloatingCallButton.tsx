'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';

export default function FloatingCallButton() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <MotionAnchor
        href={BUSINESS.phoneHref}
        aria-label={`Call ${BUSINESS.phone}`}
        className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full bg-primary-green px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_48px_-8px_rgba(14,133,54,0.65)] lg:bottom-8 lg:right-8 lg:flex"
      >
        <Phone className="size-5" />
        <span className="hidden sm:inline">Call Now</span>
      </MotionAnchor>
    );
  }

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40 hidden lg:bottom-8 lg:right-8 lg:block"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <MotionAnchor
        href={BUSINESS.phoneHref}
        aria-label={`Call ${BUSINESS.phone}`}
        className="flex items-center gap-2 rounded-full bg-primary-green px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_48px_-8px_rgba(14,133,54,0.65)]"
      >
        <Phone className="size-5" />
        <span className="hidden sm:inline">Call Now</span>
      </MotionAnchor>
    </motion.div>
  );
}
