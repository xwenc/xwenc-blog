/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",
      "localhost",
      "127.0.0.1",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
