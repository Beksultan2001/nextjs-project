/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true
    },
    images: {
        domains: ['i.postimg.cc'],
      }
}

module.exports = nextConfig
