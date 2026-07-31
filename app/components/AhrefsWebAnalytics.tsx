import Script from 'next/script';

const RKC_AHREFS_ANALYTICS_KEY = 's/R6840LdZTWtq9ViqrCYg';

/** Privacy-friendly, cookie-free traffic measurement for the Ahrefs project. */
export default function AhrefsWebAnalytics() {
  const dataKey =
    process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_KEY?.trim() ||
    RKC_AHREFS_ANALYTICS_KEY;
  if (!dataKey || !/^s\/[A-Za-z0-9_-]+$/.test(dataKey)) return null;

  return (
    <Script
      id="ahrefs-web-analytics"
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={dataKey}
      strategy="afterInteractive"
    />
  );
}
