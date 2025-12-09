// ==========================
// Phần 1 — CONFIG FILES
// ==========================

// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/images/:path*",
        destination: "https://unsplash.com/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
