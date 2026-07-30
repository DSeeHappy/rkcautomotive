'use client';

import { useEffect } from 'react';
import { trackAnalyticsEvent } from '@/lib/analytics';

function linkEvent(href: string) {
  if (href.startsWith('tel:')) return { name: 'click_to_call', method: 'phone' };
  if (href.startsWith('sms:')) return { name: 'click_to_text', method: 'sms' };
  if (href.startsWith('mailto:')) return { name: 'click_to_email', method: 'email' };

  try {
    const url = new URL(href, window.location.href);
    if (url.origin === window.location.origin && url.pathname === '/contact') {
      return { name: 'contact_intent', method: 'contact_page' };
    }

    if (url.origin === window.location.origin && url.pathname.startsWith('/services/')) {
      return { name: 'service_interest', method: 'service_page' };
    }

    const isDirections =
      url.hostname === 'share.google' ||
      (url.hostname.includes('google.com') &&
        (url.pathname.includes('/maps') || url.searchParams.has('destination')));

    if (isDirections) return { name: 'get_directions', method: 'google_maps' };
  } catch {
    return null;
  }

  return null;
}

/** Measures high-intent actions across all current and future site links. */
export default function GoogleAnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;

      const tracked = linkEvent(anchor.getAttribute('href') ?? '');
      if (!tracked) return;

      trackAnalyticsEvent(tracked.name, {
        method: tracked.method,
        link_url: anchor.href,
        link_text: anchor.textContent?.trim().replace(/\s+/g, ' ').slice(0, 100),
        page_path: window.location.pathname,
      });
    }

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  return null;
}
