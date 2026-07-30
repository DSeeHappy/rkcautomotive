export type AnalyticsEventParameters = Record<
  string,
  string | number | boolean | undefined
>;

type Gtag = (
  command: 'event',
  eventName: string,
  parameters?: AnalyticsEventParameters,
) => void;

type Clarity = (command: 'event', eventName: string) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    clarity?: Clarity;
  }
}

/** Send a conversion event to Clarity and GA4 without blocking the user's action. */
export function trackAnalyticsEvent(
  eventName: string,
  parameters: AnalyticsEventParameters = {},
) {
  if (typeof window === 'undefined') return;

  window.clarity?.('event', eventName);
  window.gtag?.('event', eventName, parameters);
}
