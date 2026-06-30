import type { NextConfig } from "next";

// For GitHub Pages we build a fully static export under a repo sub-path
// (e.g. /called-web-1). NEXT_PUBLIC_BASE_PATH is set by the Pages workflow;
// when it's empty (Vercel / local dev) the site serves from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
