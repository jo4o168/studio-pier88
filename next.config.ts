import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Protótipo: as fotos vêm do site atual. Trocar pelos originais em /public quando chegarem.
    remotePatterns: [{ protocol: "https", hostname: "studiopier88.com" }],
  },
};

export default nextConfig;
