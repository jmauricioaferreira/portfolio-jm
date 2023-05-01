/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-jm" : "",
};

module.exports = nextConfig;
