import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Remove turbo.root as it's causing access denied error
  }
};

export default nextConfig;
