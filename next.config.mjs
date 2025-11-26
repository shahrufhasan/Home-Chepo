/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["firebase", "sweetalert2"], // if needed
  },
  // DO NOT include: output: "export"
};

export default nextConfig;
