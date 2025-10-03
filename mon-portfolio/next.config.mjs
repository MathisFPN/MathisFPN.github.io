import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    // Use simple, serializable plugin identifiers where possible to avoid
    // loader serialization errors with Turbopack.
    remarkPlugins: [require.resolve('remark-gfm')],
    rehypePlugins: [require.resolve('rehype-slug')],
  },
})

export default withMDX(nextConfig)