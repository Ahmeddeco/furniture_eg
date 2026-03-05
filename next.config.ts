import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "fznw11j0f4.ufs.sh",
      },
    ]
  },
  devIndicators: false
}

export default nextConfig
