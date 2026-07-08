'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function FloatingCallButton() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={BUSINESS.phoneHref}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary-green px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_48px_-8px_rgba(14,133,54,0.65)] lg:bottom-8 lg:right-8"
      aria-label={`Call ${BUSINESS.phone}`}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -4, scale: 1.04 }}
      whileTap={reduce ? undefined : { scale: 0.96 }}
    >
      <Phone className="size-5" />
      <span className="hidden sm:inline">Call Now</span>
    </motion.a>
  );
}
