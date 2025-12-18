import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/api/data': ['./prisma/dev.db'],
  }
};

export default nextConfig;
