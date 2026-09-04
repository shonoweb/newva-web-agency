import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16はデフォルトでquality=75のみ許可するため、
    // Hero画像でquality={80}を使うにはここへ明示的に追加する必要がある。
    qualities: [75, 80],
  },
};

export default nextConfig;
