import Link from 'next/link'
import React from 'react'

type AnchorProps = React.ComponentPropsWithoutRef<'a'>

const A = (props: AnchorProps) => {
  const href = props.href ?? ''
  if (href.startsWith('/')) {
    return <Link href={href} {...props} />
  }
  return <a {...props} />
}

const components = {
  a: A,
}

export default components
