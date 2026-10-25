import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@moonframe/ui'],
  turbopack: {
    root: path.resolve(import.meta.dirname, '../..'),
  },
};

export default nextConfig;
