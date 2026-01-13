import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.yellowkite.cloud",
        pathname: "/public/inspiratto/**",
      },
    ],
  },
};

export default nextConfig;
