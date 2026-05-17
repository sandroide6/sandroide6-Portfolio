import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/sandroide6-Portfolio' : '',
  assetPrefix: isProd ? '/sandroide6-Portfolio/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    'lenis',
  ],
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
