import type { NextConfig } from "next";

// BUILD_EXPORT=1 gera um build estático (out/) para GitHub Pages,
// com basePath do repositório. O build normal (sandbox/Vercel) fica na raiz.
const isExport = process.env.BUILD_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isExport
    ? { output: "export" as const, basePath: "/gessonardo" }
    : {}),
  images: { unoptimized: true },
};

export default nextConfig;
