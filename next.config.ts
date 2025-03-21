import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.pexels.com"
      },
      {
        protocol: 'https',
        hostname: "source.unsplash.com"
      },
      {
        protocol: 'https',
        hostname: "rvzsgbayoubbkjzhxzeh.supabase.co"
      },
      {
        protocol: 'https',
        hostname: "ibb.co"
      },
    ]
  },
  env: {
    PORT: process.env.PORT || "3001",
  },
};

export default nextConfig;
