/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image configuration
  images: {
    domains: ['localhost', 'avatars.githubusercontent.com', 'coreflow360.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // TypeScript and ESLint configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Minimal experimental features
  experimental: {
    optimizeCss: true,
  },
  
  // Basic headers for API routes
  headers: async () => {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;