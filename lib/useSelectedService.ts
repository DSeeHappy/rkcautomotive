'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import {
  normalizeServiceDurationKey,
  persistSelectedService,
  readPersistedSelectedService,
  serviceKeyFromPathname,
} from '@/lib/serviceDurations';

const SELECTED_SERVICE_CHANGE = 'rkc-selected-service-change';

function subscribeSelectedService(onStoreChange: () => void) {
  window.addEventListener(SELECTED_SERVICE_CHANGE, onStoreChange);
  window.addEventListener('storage', onStoreChange);
  return () => {
    window.removeEventListener(SELECTED_SERVICE_CHANGE, onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function readClientSelectedService(): string | null {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = normalizeServiceDurationKey(params.get('service'));
  if (fromQuery) return fromQuery;
  return readPersistedSelectedService();
}

/**
 * Resolve the customer's selected service from:
 * 1. Explicit override (prop)
 * 2. `?service=` query param
 * 3. Current route (/services/... or /vehicles/.../...)
 * 4. sessionStorage (set when browsing a service or picking one in the contact form)
 */
export function useSelectedService(override?: string | null): string | null {
  const pathname = usePathname();

  const fromOverride = normalizeServiceDurationKey(override);
  const fromPath = serviceKeyFromPathname(pathname);
  const fromClient = useSyncExternalStore(
    subscribeSelectedService,
    readClientSelectedService,
    () => null,
  );

  const resolved = fromOverride ?? fromPath ?? fromClient;

  useEffect(() => {
    if (resolved) persistSelectedService(resolved);
  }, [resolved]);

  return resolved;
}
