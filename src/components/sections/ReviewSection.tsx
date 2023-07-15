import { Box, Heading, Text, Flex, Image, Icon } from '@chakra-ui/react'
import React from 'react'
import { Qoute } from '../../assets/images'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'

const ReviewSection = () => {
  return (
    <Box bg={'black'} position={'relative'} 
    _before={{
      content: '""',
      position: 'absolute',
      zIndex: 1,
      left: 0,
      right: 0,
      width: '65%',
      height: '100%',
      background: '#161616',
    }}>
      <Flex align={'center'} padding={'90px 0'} width={'100%'} position={'relative'} zIndex={10} maxW={1170} margin={'auto'} color={'#fff'}>
        <Box flex={1} textAlign={'left'} paddingRight={100}>
          <Image src={Qoute} mb={50}/>
          <Heading fontSize={[28, 38, 48]}>Our customers love what we do</Heading>
          <Text fontSize={[14, 16, 18]} color={'whiteAlpha.700'}>Our success is directly proportional to our client's  satisfaction. With an overall experience of more than a decade in this domain, we have built a strong trust and global client base by providing quality services.
          Our clients trust us as the top-notch Web and Mobile App Development Company. Hear it straight from our clients.</Text>
        </Box>
        
        <Flex direction={'column'} flex={1} bg={'transparent'} gap={10} border={'10px solid black'} rounded={15} height={'25vw'}>
          <Box width={'100%'} height={'100%'}>
            <Image src='http://jts.colladome.in/_next/static/media/client1.51a3d13d.jpg' width={'100%'} height={'100%'} rounded={5}/>
          </Box>

          <Flex margin={'auto'} gap={5}>
            <Box width={'fit-content'} rounded={'full'} padding={2} bg={'#161616'} display={'grid'} placeItems={'[center'}>
              <Icon boxSize={12} as={ChevronLeftIcon}/>
            </Box>

            <Box width={'fit-content'} rounded={'full'} padding={2} bg={'#161616'} display={'grid'} placeItems={'[center'}>
              <Icon boxSize={12} as={ChevronRightIcon}/>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ReviewSection