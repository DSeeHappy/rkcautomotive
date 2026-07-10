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
import JsonLd from './components/JsonLd';
import { rootOpenGraphDefaults, rootTwitterDefaults, SITE_URL } from '@/lib/og';
import { createOrganizationSchema, createWebSiteSchema } from '@/lib/seo';
import {
  RKC_LOGO_CARD_WEBP,
  RKC_LOGO_VIDEO_MP4,
  RKC_LOGO_VIDEO_WEBM,
} from '@/lib/logo';

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
  manifest: '/site.webmanifest',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
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

/** Inline boot: skip repeat visits, preload splash assets before React hydrates. */
const SPLASH_BOOT_SCRIPT = `(function(){try{var k='rkc-splash-seen';if(sessionStorage.getItem(k)){document.documentElement.dataset.splash='skip';return;}if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){sessionStorage.setItem(k,'1');document.documentElement.dataset.splash='skip';return;}var c=navigator.connection;if(c&&(c.saveData||c.effectiveType==='slow-2g'||c.effectiveType==='2g')){sessionStorage.setItem(k,'1');document.documentElement.dataset.splash='skip';return;}document.documentElement.dataset.splash='play';var m=window.matchMedia('(max-width: 639px)').matches;var head=document.head;function preload(as,href){var l=document.createElement('link');l.rel='preload';l.as=as;l.href=href;l.setAttribute('fetchpriority','high');head.appendChild(l);}preload('image','${RKC_LOGO_CARD_WEBP}');preload('video',m?'${RKC_LOGO_VIDEO_MP4}':'${RKC_LOGO_VIDEO_WEBM}');}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content={BING_SITE_VERIFICATION} />
        <script dangerouslySetInnerHTML={{ __html: SPLASH_BOOT_SCRIPT }} />
      </head>
      <body className={`${bebas.variable} ${manrope.variable} font-sans antialiased`}>
        <JsonLd data={[createOrganizationSchema(), createWebSiteSchema()]} />
        <GsapProvider>
          <SplashScreen>
            <Navigation />
            <main className="min-h-screen pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
              {children}
            </main>
            <Footer />
            <MobileStickyBar />
            <FloatingCallButton />
          </SplashScreen>
        </GsapProvider>
        <Analytics />
      </body>
    </html>
  );
}
