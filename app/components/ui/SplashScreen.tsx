'use client';

import { useEffect } from 'react';

export const SPLASH_READY_EVENT = 'rkc-splash-ready';

type SplashScreenProps = {
  children: React.ReactNode;
};

/**
 * Splash intro disabled — SSR/client hydration mismatch (commit 4352003) crashed
 * mobile Chrome on first visit. Re-enable after client-only mount pattern is in place.
 */
export default function SplashScreen({ children }: SplashScreenProps) {
  useEffect(() => {
    try {
      sessionStorage.setItem('rkc-splash-seen', '1');
    } catch {
      /* private browsing / storage blocked */
    }
    window.dispatchEvent(new Event(SPLASH_READY_EVENT));
  }, []);

  return <>{children}</>;
}
