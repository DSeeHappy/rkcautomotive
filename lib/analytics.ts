export type AnalyticsEventParameters = Record<
  string,
  string | number | boolean | undefined
>;

type Gtag = (
  command: 'event',
  eventName: string,
  parameters?: AnalyticsEventParameters,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/** Send a GA4 event when Analytics is available without blocking the user's action. */
export function trackAnalyticsEvent(
  eventName: string,
  parameters: AnalyticsEventParameters = {},
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, parameters);
}
