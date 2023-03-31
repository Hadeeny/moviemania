/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nkiri.com",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
