import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryParts = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const owner = repositoryParts.length === 2 ? repositoryParts[0] : "";
const repository = repositoryParts.length === 2 ? repositoryParts[1] : "";
const isUserSite = !!owner && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const basePath = isGithubActions && !isUserSite && repository ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
