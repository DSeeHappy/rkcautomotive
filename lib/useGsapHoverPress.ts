'use client';

import { useRef, type RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

type HoverPressOptions = {
  hoverY?: number;
  hoverScale?: number;
  tapScale?: number;
};

export function useGsapHoverPress<T extends HTMLElement>(
  options: HoverPressOptions = {},
): { ref: RefObject<T | null>; reduce: boolean } {
  const ref = useRef<T>(null);
  const reduce = usePrefersReducedMotion();
  const { hoverY = -2, hoverScale = 1, tapScale = 0.98 } = options;

  useGSAP(
    () => {
      const el = ref.current;
      if (reduce || !el) return;

      gsap.set(el, { willChange: 'transform' });

      const onEnter = () => {
        gsap.to(el, { y: hoverY, scale: hoverScale, duration: 0.25, ease: 'power2.out' });
      };
      const onLeave = () => {
        gsap.to(el, { y: 0, scale: 1, duration: 0.25, ease: 'power2.out' });
      };
      const onDown = () => {
        gsap.to(el, { scale: tapScale, duration: 0.15, ease: 'power2.out' });
      };
      const onUp = () => {
        gsap.to(el, { scale: hoverScale, duration: 0.15, ease: 'power2.out' });
      };

      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      el.addEventListener('mousedown', onDown);
      el.addEventListener('mouseup', onUp);

      return () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.removeEventListener('mousedown', onDown);
        el.removeEventListener('mouseup', onUp);
        gsap.set(el, { clearProps: 'transform,willChange' });
      };
    },
    { scope: ref, dependencies: [reduce, hoverY, hoverScale, tapScale] },
  );

  return { ref, reduce };
}
