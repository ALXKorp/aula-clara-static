import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => ({
  output: "export",
  basePath: "/aula-clara-static",
  assetPrefix: "/aula-clara-static/",
  trailingSlash: true,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next"
});

export default nextConfig;
