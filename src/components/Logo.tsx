import { Box, Heading, Image, Link } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <Image width={378} height={65} src='http://jts.colladome.in/_next/static/media/logo.214490de.svg?imwidth=828'/>
    </Link>
  )
}

export default Logo