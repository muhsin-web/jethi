import { Box, Heading, Image, Link } from '@chakra-ui/react'
import React from 'react'
// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs
// const breakpoints = {
//   sm: '560px',
//   md: '768px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// }

// // 3. Extend the theme
// const theme = extendTheme({ breakpoints })

const Logo = () => {
  return (
    <Link href='/'>
      <Image width={[150, 250, 380]} height={66} src='http://jts.colladome.in/_next/static/media/logo.214490de.svg?imwidth=828'/>
    </Link>
  )
}

export default Logo