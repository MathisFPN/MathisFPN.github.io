import withMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withMdx = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // xdm / remark / rehype plugins can be added here if needed
  }
})

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

export default withMdx(nextConfig)
