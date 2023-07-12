import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import './secStyle.css'
import finger from '../../assets/images/finger.svg'
import { motion } from 'framer-motion'
import ButtonTag from '../tags/Button'
const SectionOne = () => {
  return (
    <Box bg={'#161616'} color={'#fff'}  padding={'60px 0 120px'}>
        <Flex flexWrap={'wrap'} margin={'auto'} maxWidth={1130} gap={20} align={'center'}>
          <Box as={motion.div}
          opacity={0} 
          transition={'linear .5s finite'}
          whileInView={{
            opacity: 1,
          }} flex={1}>
            <Box bg={'#1a1a1a'} padding={16} rounded={'full'}>
              <Image src={finger}/>
            </Box>
          </Box>
          <Stack flex={[1,2]} textAlign={'left'}>
            <Heading
            as={motion.div}
            transform={'translateX(-70px)'}
             opacity={1}
             animate={{
              animationDelay: '3s'
              // transition: 'all 3s ease finite'
             }}
             whileInView={{transform: 'translate(0)', opacity: 1}}
             lineHeight={1.2} fontWeight={800} fontSize={[25, 35, 48]}>We are Driving Digital Disruption Accelerating Growth</Heading>
            <Text 
              as={motion.div}
              transform={'translateX(-50px)'}
               opacity={1}
               animate={{
                animationDelay: '3s'
                // transition: 'all 3s ease finite'
               }}
               whileInView={{transform: 'translate(0)', opacity: 1}}
                lineHeight={1.6} color={'#969696'} fontSize={[14, 16, 18]}>Our designers and developers create new possibilities and opportunities for businesses in every industry and vertical.</Text>

              <ButtonTag title='Contact Us'/>
          </Stack>
        </Flex>
    </Box>
    
  )
}

export default SectionOne