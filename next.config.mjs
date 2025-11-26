/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  serverExternalPackages: ["firebase", "sweetalert2"],
};

export default nextConfig;
