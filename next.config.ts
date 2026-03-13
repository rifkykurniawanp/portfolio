import type { NextConfig } from "next";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 768, 1024, 1280],
    imageSizes: [32, 64, 96, 128, 256],
    qualities: [75],
  },
};

export default withBundleAnalyzer(nextConfig);