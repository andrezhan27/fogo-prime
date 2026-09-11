import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@andrezhan27/intelis-restaurant-ui'],
  turbopack: {
    root: process.cwd(),
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
