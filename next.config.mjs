/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'usofsgfijlqahwpkmqsi.supabase.co',
      },
    ],
  },
};

export default nextConfig;
