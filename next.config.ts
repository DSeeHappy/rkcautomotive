import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
        destination: '/services/engine-diagnostics-englewood-co',
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
  images: {
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
