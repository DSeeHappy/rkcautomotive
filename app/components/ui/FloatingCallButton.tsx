'use client';

import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import { useGsapReveal } from '@/lib/useGsapReveal';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

export default function FloatingCallButton() {
  const reduce = usePrefersReducedMotion();
  const ref = useGsapReveal<HTMLDivElement>({
    delay: 1.2,
    y: 24,
    scale: 0.9,
    duration: 0.55,
  });

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
    <div ref={ref} className="fixed bottom-5 right-5 z-40 hidden lg:bottom-8 lg:right-8 lg:block">
      <MotionAnchor
        href={BUSINESS.phoneHref}
        aria-label={`Call ${BUSINESS.phone}`}
        className="flex items-center gap-2 rounded-full bg-primary-green px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_48px_-8px_rgba(14,133,54,0.65)]"
      >
        <Phone className="size-5" />
        <span className="hidden sm:inline">Call Now</span>
      </MotionAnchor>
    </div>
  );
}
