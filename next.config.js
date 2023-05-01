/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: "/portfolio-jm",
  assetPrefix: `/portfolio-jm/`,
  output: "export",
};

module.exports = nextConfig;
