/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mielekitchen.vercel.app",
      },
      {
        protocol: "https",
        hostname: "pv-designer-studio.vercel.app",
      },
    ],
  },
};

export default nextConfig;
