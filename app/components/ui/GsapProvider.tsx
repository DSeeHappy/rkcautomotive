'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ensureScrollTrigger } from '@/lib/gsap';

type GsapProviderProps = {
  children: React.ReactNode;
};

export default function GsapProvider({ children }: GsapProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    let active = true;
    const id = requestAnimationFrame(() => {
      void ensureScrollTrigger().then((ScrollTrigger) => {
        if (!active) return;
        ScrollTrigger.refresh(true);
      });
    });
    return () => {
      active = false;
      cancelAnimationFrame(id);
    };
  }, [pathname]);

  return <>{children}</>;
}
