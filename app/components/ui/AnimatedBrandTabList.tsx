'use client';

import { TabList } from '@headlessui/react';
import { useRef, type ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import { ensureScrollTrigger, gsap } from '@/lib/gsap';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

type AnimatedBrandTabListProps = {
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};

export default function AnimatedBrandTabList({
  children,
  className,
  'aria-label': ariaLabel,
}: AnimatedBrandTabListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduce || !ref.current) return;

      let cancelled = false;
      const ctx = gsap.context(() => {});

      void ensureScrollTrigger().then(() => {
        if (cancelled || !ref.current) return;

        const tabs = ref.current.querySelectorAll<HTMLElement>('[data-brand-tab]');
        if (!tabs.length) return;

        ctx.add(() => {
          gsap.fromTo(
            tabs,
            { opacity: 0, y: 22, scale: 0.88, willChange: 'transform, opacity' },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.55,
              stagger: 0.045,
              ease: 'back.out(1.4)',
              immediateRender: false,
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 88%',
                once: true,
              },
              onComplete: () => {
                gsap.set(tabs, { clearProps: 'willChange,opacity,transform' });
              },
            },
          );
        });
      });

      return () => {
        cancelled = true;
        ctx.revert();
      };
    },
    { scope: ref, dependencies: [reduce] },
  );

  return (
    <TabList ref={ref} className={className} aria-label={ariaLabel}>
      {children}
    </TabList>
  );
}
