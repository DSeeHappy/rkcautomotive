'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ScrollTrigger } from '@/lib/gsap';

type GsapProviderProps = {
  children: React.ReactNode;
};

export default function GsapProvider({ children }: GsapProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
