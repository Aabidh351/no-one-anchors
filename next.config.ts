import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow external images to be optimized safely
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
},
}

export default nextConfig;
