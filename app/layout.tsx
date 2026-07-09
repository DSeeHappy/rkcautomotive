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

export const viewport: Viewport = {
  themeColor: '#0e8536',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${manrope.variable} font-sans antialiased`}>
        <JsonLd data={[createOrganizationSchema(), createWebSiteSchema()]} />
        <GsapProvider>
          <SplashScreen>
            <Navigation />
            <main className="min-h-screen pb-16 lg:pb-0">{children}</main>
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
