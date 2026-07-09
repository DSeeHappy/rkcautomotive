'use client';

import { useRef, type ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function FadeIn({ children, className, delay = 0, y = 36 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduce || !ref.current) return;

      gsap.fromTo(
        ref.current,
        { opacity: 0, y, willChange: 'transform, opacity' },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
            once: true,
          },
          onComplete: () => {
            if (ref.current) gsap.set(ref.current, { clearProps: 'willChange,opacity,transform' });
          },
        },
      );
    },
    { scope: ref, dependencies: [reduce, delay, y] },
  );

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function Stagger({ children, className, delay = 0, stagger = 0.1 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduce || !ref.current) return;

      const items = ref.current.children;
      if (!items.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 28, willChange: 'transform, opacity' },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 92%',
            once: true,
          },
          onComplete: () => {
            gsap.set(items, { clearProps: 'willChange,opacity,transform' });
          },
        },
      );
    },
    { scope: ref, dependencies: [reduce, delay, stagger] },
  );

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
