/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/rapid-delivery',
        destination: '/services/road-freight',
        permanent: true,
      },
      {
        source: '/customs-clearance',
        destination: '/services/customs-clearance',
        permanent: true,
      },
      {
        source: '/customs-clearance-agents',
        destination: '/ports-we-serve',
        permanent: true,
      },
      {
        source: '/bonded-warehousing',
        destination: '/services/bonded-warehousing',
        permanent: true,
      },
      {
        source: '/cold-storage',
        destination: '/services/cold-storage',
        permanent: true,
      },
      {
        source: '/cargo-handling',
        destination: '/services/cargo-handling',
        permanent: true,
      },
      {
        source: '/shipping-and-delivery',
        destination: '/services/road-freight',
        permanent: true,
      },
      {
        source: '/perishable-supply-chain',
        destination: '/services/specialist-cargo',
        permanent: true,
      },
      {
        source: '/specialist-customs-clearance',
        destination: '/services/customs-clearance',
        permanent: true,
      },
      {
        source: '/repatriation-services-uk',
        destination: '/services/repatriation',
        permanent: true,
      },
      {
        source: '/request-a-quote',
        destination: '/quote',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blank',
        destination: '/privacy',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
