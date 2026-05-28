import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgSite = repository.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repository && !isUserOrOrgSite
    ? `/${repository}`
    : undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
