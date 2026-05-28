import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgSite = repository.endsWith(".github.io");
const basePath =
  process.env.NODE_ENV === "production" && repository && !isUserOrOrgSite
    ? `/${repository}`
    : undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath ?? "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
