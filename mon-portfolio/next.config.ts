import withMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withMdx = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // xdm / remark / rehype plugins can be added here if needed
  }
})

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  turbopack: {
    // Force Turbopack to use the app directory instead of the parent monorepo root
    root: __dirname,
  },
  images: {
    unoptimized : true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
}

export default withMdx(nextConfig)
