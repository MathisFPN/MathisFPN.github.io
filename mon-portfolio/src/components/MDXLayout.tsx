import React from 'react'

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none mx-auto px-4 py-12">
      {children}
    </article>
  )
}
