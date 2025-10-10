/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['devnagri.com'], // Add any external image domains if needed
  },
  experimental: {
    esmExternals: false,
  },
  async redirects() {
    return [
      {
        source: '/machine-translation-api',
        destination: '/translation-api',
        permanent: true,
      },
      {
        source: '/multilingual-conversational-ai-bot',
        destination: '/voice-bot',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: 'https://devnagri.com/pricing', // Assuming live pricing page URL
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
