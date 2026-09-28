import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/saas",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/internships",
        destination: "/careers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
