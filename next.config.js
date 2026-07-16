// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  transpilePackages: [
    'antd',
    '@ant-design/icons',
    '@ant-design/icons-svg',
    'rc-pagination',
    'rc-picker',
    'rc-util',
  ],
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
  turbopack: {},
  experimental: {
    optimizePackageImports: ['antd', '@mui/material', 'react-icons', '@ant-design/icons'],
  },
};

module.exports = nextConfig;
