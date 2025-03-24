/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs', 
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
