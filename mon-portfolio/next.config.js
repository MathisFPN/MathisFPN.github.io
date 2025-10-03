const withMDX = require('@next/mdx')({ extension: /\.(md|mdx)$/ })

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // turbopack.root could be set here if necessary
}

module.exports = withMDX(nextConfig)
