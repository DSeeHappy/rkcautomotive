'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  normalizeServiceDurationKey,
  persistSelectedService,
  readPersistedSelectedService,
  serviceKeyFromPathname,
} from '@/lib/serviceDurations';

/**
 * Resolve the customer's selected service from:
 * 1. Explicit override (prop)
 * 2. `?service=` query param
 * 3. Current route (/services/... or /vehicles/.../...)
 * 4. sessionStorage (set when browsing a service or picking one in the contact form)
 */
export function useSelectedService(override?: string | null): string | null {
  const pathname = usePathname();
  const [resolved, setResolved] = useState<string | null>(() =>
    normalizeServiceDurationKey(override) ?? serviceKeyFromPathname(pathname),
  );

  useEffect(() => {
    const fromOverride = normalizeServiceDurationKey(override);
    if (fromOverride) {
      persistSelectedService(fromOverride);
      setResolved(fromOverride);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const fromQuery = normalizeServiceDurationKey(params.get('service'));
    if (fromQuery) {
      persistSelectedService(fromQuery);
      setResolved(fromQuery);
      return;
    }

    const fromPath = serviceKeyFromPathname(pathname);
    if (fromPath) {
      persistSelectedService(fromPath);
      setResolved(fromPath);
      return;
    }

    setResolved(readPersistedSelectedService());
  }, [override, pathname]);

  return resolved;
}
