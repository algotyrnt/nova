import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      '@mui/material',
      '@mui/icons-material',
      'framer-motion',
    ],
  },
}

export default nextConfig
