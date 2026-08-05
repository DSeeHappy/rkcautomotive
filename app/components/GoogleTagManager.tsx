import Script from 'next/script';

const RKC_GTM_ID = 'GTM-K5993G47';

/**
 * Google Tag Manager — official head script + body noscript.
 *
 * GA4 (G-RKV1HQ9L0E) fires via the GTM Google Tag, not a direct gtag snippet.
 * Override with NEXT_PUBLIC_GTM_ID (e.g. GTM-XXXXXXX) for preview/migration.
 */
export default function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim() || RKC_GTM_ID;
  if (!gtmId || !/^GTM-[A-Z0-9]+$/i.test(gtmId)) return null;

  return (
    <>
      <Script id="gtm" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
