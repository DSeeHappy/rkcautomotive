'use client';

import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';
import { useGsapReveal } from '@/lib/useGsapReveal';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

export default function FloatingCallButton() {
  const reduce = usePrefersReducedMotion();
  const { lang } = useLanguage();
  const copy = siteCopy(lang).floating;
  const ref = useGsapReveal<HTMLDivElement>({
    delay: 1.2,
    y: 24,
    scale: 0.9,
    duration: 0.55,
  });

  const button = (
    <MotionAnchor
      href={BUSINESS.phoneHref}
      aria-label={copy.aria(BUSINESS.phone)}
      className={
        reduce
          ? 'fixed bottom-5 right-5 z-[80] hidden items-center gap-2 rounded-full bg-primary-green px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_48px_-8px_rgba(14,133,54,0.65)] lg:bottom-8 lg:right-8 lg:flex'
          : 'flex items-center gap-2 rounded-full bg-primary-green px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_48px_-8px_rgba(14,133,54,0.65)]'
      }
    >
      <Phone className="size-5" aria-hidden />
      <span className="hidden sm:inline">{copy.callNow}</span>
    </MotionAnchor>
  );

  if (reduce) return button;

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-[80] hidden lg:bottom-8 lg:right-8 lg:block" lang={lang}>
      {button}
    </div>
  );
}
