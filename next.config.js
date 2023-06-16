/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache.js');
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  // here goes your Next.js configuration
  reactStrictMode: false,
  images: {
    domains: ["lottiefiles.com", "cdn.pixabay.com", "media.tenor.com", "assets4.lottiefiles.com"]
  }
};

const nextConfig = withPWA({
  dest: 'public',
  disable: !isProduction,
  runtimeCaching
})(
  config
);

module.exports = nextConfig
