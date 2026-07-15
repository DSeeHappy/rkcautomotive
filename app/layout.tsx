import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MobileStickyBar from './components/ui/MobileStickyBar';
import FloatingCallButton from './components/ui/FloatingCallButton';
import GsapProvider from './components/ui/GsapProvider';
import SplashScreen from './components/ui/SplashScreen';
import GoogleAnalytics from './components/GoogleAnalytics';
import JsonLd from './components/JsonLd';
import { rootOpenGraphDefaults, rootTwitterDefaults, SITE_URL } from '@/lib/og';
import { createOrganizationSchema, createWebSiteSchema } from '@/lib/seo';

const bebas = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'RKC Automotive — Engine & Auto Repair Experts in Englewood, CO',
    template: '%s | RKC Automotive',
  },
  description:
    'ASE-certified engine and auto repair in Englewood, CO. Diagnostics, transmission, brakes & maintenance at $120/hr. Call (720) 749-3965. Hablamos Español.',
  applicationName: 'RKC Automotive',
  category: 'automotive',
  creator: 'RKC Automotive',
  publisher: 'RKC Automotive',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/icon.png',
  },
  openGraph: rootOpenGraphDefaults,
  twitter: rootTwitterDefaults,
};

const BING_SITE_VERIFICATION = 'F95A402B999BC67315CA610B07111B57';

export const viewport: Viewport = {
  themeColor: '#0e8536',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content={BING_SITE_VERIFICATION} />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
      </head>
      <body className={`${bebas.variable} ${manrope.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only"
        >
          Skip to main content
        </a>
        {/* Single sitewide AutoRepair/LocalBusiness NAP — pages must not emit a second org with a different telephone/image. */}
        <JsonLd data={[createOrganizationSchema(), createWebSiteSchema()]} />
        <GsapProvider>
          <SplashScreen>
            <Navigation />
            <main
              id="main-content"
              className="relative z-0 min-h-screen pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0"
            >
              {children}
            </main>
            <Footer />
            <MobileStickyBar />
            <FloatingCallButton />
          </SplashScreen>
        </GsapProvider>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
