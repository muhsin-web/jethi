import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
  icons: {
    name: string,
    icon: string
  }}
const TechIcons = ({icons}:Props) => {
  return (
      <Box>
            <Image boxSize={70} filter={'brightness(1) invert(1)'} src={icons.icon}/>
            <Text textTransform={'capitalize'} mt={10} color={'white'}>{icons.name}</Text>
      </Box>
  )
}

export default TechIcons