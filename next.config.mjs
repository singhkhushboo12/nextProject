/** @type {import('next').NextConfig} */
const basePath = '/my-next-app';
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
   env: {
    NEXT_PUBLIC_BASE_PATH: basePath, 
  },
  // output: 'export',
  basePath: basePath, // must start with slash
  trailingSlash: true,
};

export default nextConfig;
