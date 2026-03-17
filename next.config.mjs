/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
  },
  images: {
    // Image optimization is enabled for Vercel performance
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
      },
    ],
  },
}

export default nextConfig
