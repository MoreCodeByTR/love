/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/love',
  distDir: 'docs', 
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
