import React, { ReactElement } from 'react'
import { Box, Text, Stack, Image, Flex,Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type Props = {
  description: string,
  heading: string,
  href: string
  icon: ReactElement,
  image: ReactElement
}
const SecTwoCards = ({image, description, heading, icon, href}: Props) => {
  return (
    <Box
    _hover={
      {
        transform: 'translateY(-10px)',
        transition: 'all .4s ease-in-out',
        boxShadow: '0 7px 20px 0 rgba(0,0,0,0.08)'
    }}
      maxW={{ base: 'full', md: '32%' }}
      w={'full'}
      borderRadius="20px"
      overflow="hidden"
      bg={'#fff'}
      p={10}>
      <Stack spacing={2}>
        <Flex
          w={20}
          h={20}
          align={'center'}
          justify={'center'}
          >
          {image}
        </Flex>
        <Box mt={2}>
          <Heading textAlign={'left'} m={'20px 0'} fontSize={[20, 28, 38]}>{heading}</Heading>
          <Text color={'#969696'} textAlign={'left'} mt={1} fontSize={16}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default SecTwoCards