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

    const host = url.hostname.replace(/^www\./, '');
    if (
      host === 'facebook.com' ||
      host.endsWith('.facebook.com') ||
      host === 'instagram.com' ||
      host.endsWith('.instagram.com')
    ) {
      return { name: 'social_click', method: host.includes('instagram') ? 'instagram' : 'facebook' };
    }
  } catch {
    return null;
  }

  return null;
}

const SCROLL_DEPTH_MARKS = [50, 75, 90] as const;

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

    const fired = new Set<number>();
    function handleScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.round((window.scrollY / scrollable) * 100);
      for (const mark of SCROLL_DEPTH_MARKS) {
        if (pct >= mark && !fired.has(mark)) {
          fired.add(mark);
          trackAnalyticsEvent('scroll_depth', {
            percent: mark,
            page_path: window.location.pathname,
          });
        }
      }
    }

    document.addEventListener('click', handleClick, { capture: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
