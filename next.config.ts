import type { NextConfig } from "next";

const CONTENT_SECURITY_POLICY =
  "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://images.unsplash.com https://upload.wikimedia.org https://www.google-analytics.com https://www.googletagmanager.com; font-src 'self' data:; connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com; frame-src 'self' https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self'";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  // Preferred domain is apex (https://rkcautomotive.com). www currently returns
  // Cloudflare 525 — once www SSL works, add a permanent www → apex redirect here
  // (or in vercel.json). Do not flip BUSINESS.website / SITE_URL to www.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            // Prevents Cloudflare Email Obfuscation from corrupting tel: hrefs (about:invalid#zCSafez)
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate, no-transform',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: CONTENT_SECURITY_POLICY,
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: CONTENT_SECURITY_POLICY,
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/site.webmanifest',
        destination: '/manifest.webmanifest',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/frequently-asked-questions',
        permanent: true,
      },
      // Audit URL aliases → canonical service/area routes
      {
        source: '/areas-served',
        destination: '/areas-we-serve',
        permanent: true,
      },
      {
        source: '/areas-served/:slug',
        destination: '/areas-we-serve/:slug',
        permanent: true,
      },
      {
        source: '/engine-repair-englewood-co',
        destination: '/services/engine-diagnostics-englewood-co',
        permanent: true,
      },
      {
        source: '/engine-replacement-englewood-co',
        destination: '/services/engine-rebuilds-englewood-co',
        permanent: true,
      },
      {
        source: '/engine-rebuild-englewood-co',
        destination: '/services/engine-rebuilds-englewood-co',
        permanent: true,
      },
      {
        source: '/engine-rebuilds-englewood-co',
        destination: '/services/engine-rebuilds-englewood-co',
        permanent: true,
      },
      {
        source: '/camshaft-lifter-repair-englewood-co',
        destination: '/services/camshaft-lifter-repair-englewood-co',
        permanent: true,
      },
      {
        source: '/camshaft-repair-englewood-co',
        destination: '/services/camshaft-lifter-repair-englewood-co',
        permanent: true,
      },
      {
        source: '/transmission-repair-englewood-co',
        destination: '/services/transmission-services-englewood-co',
        permanent: true,
      },
      {
        source: '/diagnostics-englewood-co',
        destination: '/services/engine-diagnostics-englewood-co',
        permanent: true,
      },
      {
        source: '/brake-repair-englewood-co',
        destination: '/services/brake-repair-englewood-co',
        permanent: true,
      },
      {
        source: '/oil-change-maintenance-englewood-co',
        destination: '/services/oil-changes-englewood-co',
        permanent: true,
      },
      {
        source: '/check-engine-light-englewood-co',
        destination: '/services/check-engine-light-englewood-co',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap-index',
      },
      {
        source: '/.well-known/llms.txt',
        destination: '/llms.txt',
      },
    ];
  },
  images: {
    // Cap generated srcset widths — default deviceSizes includes 3840 which overserves heroes.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
