import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const tech = [
  {
    name: 'react',
    icon: 'http://jts.colladome.in/assets/images/React_js_logo.svg?imwidth=256'
  },
  {
    name: 'typescript',
    icon: 'http://jts.colladome.in/assets/images/Typescript_logo.svg?imwidth=256'
  },
  {
    name: 'angular',
    icon: 'http://jts.colladome.in/assets/images/Angular_logo.svg?imwidth=256'
  },
  {
    name: 'angular',
    icon: 'http://jts.colladome.in/assets/images/Angular_logo.svg?imwidth=256'
  },
  {
    name: 'angular',
    icon: 'http://jts.colladome.in/assets/images/Angular_logo.svg?imwidth=256'
  },
  {
    name: 'angular',
    icon: 'http://jts.colladome.in/assets/images/Angular_logo.svg?imwidth=256'
  },
]
const TechIcons = () => {
  return (
    <Box mt={20} display={'flex'} gap='60px' maxW={500} flexWrap={'wrap'}>
      {
        tech.map((tech) => (
            <Box>
              <Image boxSize={70} filter={'brightness(1) invert(1)'} src={tech.icon}/>
              <Text textTransform={'capitalize'} mt={10} color={'white'}>{tech.name}</Text>
            </Box>
        ))
      }
    </Box>
  )
}

export default TechIcons