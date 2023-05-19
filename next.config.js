/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-jm" : "",
};

module.exports = nextConfig;
