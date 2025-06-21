import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://s1.ticketm.net/**")],
  },
};

export default nextConfig;
