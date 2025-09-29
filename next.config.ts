import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://skins.nationsglory.fr/**')],
    },
};

export default nextConfig;
