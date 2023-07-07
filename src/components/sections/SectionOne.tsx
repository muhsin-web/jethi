import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import './secStyle.css'
import finger from '../../assets/images/finger.svg'
const SectionOne = () => {
  return (
    <Box bg={'#161616'} color={'#fff'}  padding={'60px 0 120px'}>
        <Flex margin={'auto'} maxWidth={1130} gap={20} align={'center'}>
          <Box flex={1}>
            <Image src={finger}/>
          </Box>
          <Stack flex={2} textAlign={'left'}>
            <Heading lineHeight={1.2} fontWeight={800} fontSize={[25, 35, 48]}>We are Driving Digital Disruption Accelerating Growth</Heading>
            <Text lineHeight={1.6} color={'#969696'} fontSize={[14, 16, 18]}>Our designers and developers create new possibilities and opportunities for businesses in every industry and vertical.</Text>
            <button className='qtbt' style={{ margin: '0 20px', padding: '3px 20px', display: 'flex', gap: 10}}>Contact Us</button>
          </Stack>
        </Flex>
    </Box>
    
  )
}

export default SectionOne