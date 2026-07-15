import Script from 'next/script';

/**
 * Optional GA4 — set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXX) in Vercel env.
 * Site analytics already ship via @vercel/analytics in root layout.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
  if (!gaId || !/^G-[A-Z0-9]+$/i.test(gaId)) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
      </Script>
    </>
  );
}
