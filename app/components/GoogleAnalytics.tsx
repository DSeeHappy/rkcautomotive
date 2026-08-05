/**
 * Direct gtag GA4 was removed to avoid double-counting.
 * Measurement ID G-RKV1HQ9L0E now fires via Google Tag Manager
 * (Google Tag → Initialization - All Pages). See GoogleTagManager.tsx.
 *
 * Custom events still use window.gtag via lib/analytics.ts — GTM's Google Tag
 * installs gtag/dataLayer on the page.
 */
export default function GoogleAnalytics() {
  return null;
}
