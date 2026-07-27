import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/budly/terms-of-use",
        destination: "https://budlyapp.app/en/terms-of-use",
        permanent: true,
      },
      {
        source: "/budly/privacy-policy",
        destination: "https://budlyapp.app/en/privacy-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
