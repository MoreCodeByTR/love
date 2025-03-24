/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/love',
  assetPrefix: '/love/',
  distDir: 'docs', 
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
