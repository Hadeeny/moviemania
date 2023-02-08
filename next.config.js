/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  image: {
    domains: ["image.tmbd.org"],
  },
};

module.exports = nextConfig;
