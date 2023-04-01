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
      {
        protocol: "https",
        hostname: "www.fzmovies.net",
        port: "",
        pathname: "/imdb_images/**",
      },
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
