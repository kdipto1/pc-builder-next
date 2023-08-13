/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },

      {
        hostname: "i.ibb.co",
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
