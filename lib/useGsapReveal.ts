'use client';

import { useRef, type RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

type RevealOptions = {
  delay?: number;
  y?: number;
  duration?: number;
  scale?: number;
  dependencies?: unknown[];
};

export function useGsapReveal<T extends HTMLElement>(
  options: RevealOptions = {},
): { ref: RefObject<T | null>; reduce: boolean } {
  const ref = useRef<T>(null);
  const reduce = usePrefersReducedMotion();
  const { delay = 0, y = 24, duration = 0.7, scale, dependencies = [] } = options;

  useGSAP(
    () => {
      if (reduce || !ref.current) return;

      gsap.set(ref.current, { willChange: 'transform, opacity' });
      gsap.from(ref.current, {
        opacity: 0,
        y,
        ...(scale !== undefined ? { scale } : {}),
        duration,
        delay,
        ease: 'power2.out',
        onComplete: () => {
          if (ref.current) gsap.set(ref.current, { clearProps: 'willChange' });
        },
      });
    },
    { scope: ref, dependencies: [reduce, delay, y, duration, scale, ...dependencies] },
  );

  return { ref, reduce };
}
