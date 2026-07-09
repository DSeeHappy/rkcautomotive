import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingCallButton from './components/ui/FloatingCallButton';
import SplashScreen from './components/ui/SplashScreen';
import { rootOpenGraphDefaults, rootTwitterDefaults, SITE_URL } from '@/lib/og';

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
    default: 'RKC Automotive | Auto Repair in Englewood, CO',
    template: '%s | RKC Automotive',
  },
  description:
    'ASE-certified auto repair in Englewood, CO. Brakes, diagnostics, oil changes, and more. Call (720) 749-3965. Mon–Fri 8–6, Sat 8–12.',
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
        <SplashScreen>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingCallButton />
        </SplashScreen>
        <Analytics />
      </body>
    </html>
  );
}
