/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'img.youtube.com',  // ← add this
      },
    ],
  },
};

export default nextConfig;