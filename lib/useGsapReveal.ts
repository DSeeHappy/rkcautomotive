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
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const reduce = usePrefersReducedMotion();
  const { delay = 0, y = 24, duration = 0.7, scale, dependencies = [] } = options;

  useGSAP(
    () => {
      if (reduce || !ref.current) return;

      gsap.set(ref.current, { willChange: 'transform, opacity' });
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y,
          ...(scale !== undefined ? { scale } : {}),
        },
        {
          opacity: 1,
          y: 0,
          ...(scale !== undefined ? { scale: 1 } : {}),
          duration,
          delay,
          ease: 'power2.out',
          onComplete: () => {
            if (ref.current) {
              gsap.set(ref.current, { clearProps: 'willChange,opacity,transform' });
            }
          },
        },
      );
    },
    { scope: ref, dependencies: [reduce, delay, y, duration, scale, ...dependencies] },
  );

  return ref;
}
