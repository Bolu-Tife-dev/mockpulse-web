import type { NextConfig } from "next";

/**
 * Zero-config setup for Vercel — `vercel` with no flags will deploy this
 * project as-is. See README.md for customization notes.
 */
const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
