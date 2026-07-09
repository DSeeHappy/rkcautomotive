'use client';

import { useRef, type RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

type ParallaxOptions = {
  yPercent?: number;
  fadeTo?: number;
};

export function useGsapParallax<T extends HTMLElement>(
  reduce: boolean,
  { yPercent = 18, fadeTo = 0.35 }: ParallaxOptions = {},
): {
  sectionRef: RefObject<T | null>;
  bgRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
} {
  const sectionRef = useRef<T>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reduce || !sectionRef.current || !bgRef.current) return;

      gsap.to(bgRef.current, {
        yPercent,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 1 },
          {
            opacity: fadeTo,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      }
    },
    { scope: sectionRef, dependencies: [reduce, yPercent, fadeTo] },
  );

  return { sectionRef, bgRef, contentRef };
}
