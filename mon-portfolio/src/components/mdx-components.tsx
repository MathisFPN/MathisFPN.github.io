import Link from 'next/link'
import React from 'react'

const A = (props: any) => {
  const { href } = props
  if (href && href.startsWith('/')) {
    return <Link {...props} />
  }
  return <a {...props} />
}

const components = {
  a: A,
}

export default components
