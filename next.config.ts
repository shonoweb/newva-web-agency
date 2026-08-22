import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16はデフォルトでquality=75のみ許可するため、
    // Hero画像等でquality={95}を使うにはここへ明示的に追加する必要がある。
    qualities: [75, 95],
  },
};

export default nextConfig;
