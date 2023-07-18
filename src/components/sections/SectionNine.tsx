import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'

const SectionNine = () => {
  const height = 100
  const height_ = 70
  const width = 200
  return (
    <>
       <Box maxW={1170} margin={'auto'}>
          <Box width={['50%']} textAlign={'left'}>
            <Heading fontSize={[28, 38, 44]}>Merging Tech-Savvy Facility and Innovative Minds Under One Roof</Heading>

            <Text fontSize={[14, 16, 18]}>The right environment reinforced with top-class infrastructure, ergonomic seating, and a security provisioning allows our innovators to perform and provide results</Text>
          </Box>
      </Box>

      <Box bg={'rgba(0,0,0,0.03)'}>
        <Flex maxW={1170} margin={'auto'}>
          <Box color={'#fff'} flex={1} textAlign={'left'} padding={'60px 0'}>
            <Heading padding={'10px'} bg={'black'} mb={5} width={'fit-content'} fontSize={[18, 28, 35]}>Advanced firewall protection</Heading>
            <Heading padding={'10px'} bg={'blue'} mb={5} width={'fit-content'} fontSize={[18, 28, 35]}>Disaster recovery systems</Heading>
            <Heading padding={'10px'} bg={'black'} mb={5} width={'fit-content'} fontSize={[18, 28, 35]}>Scalable network architecture</Heading>
            <Heading padding={'10px'} bg={'blue'} mb={5} width={'fit-content'} fontSize={[18, 28, 35]}>Power backup systems</Heading>
            <Heading padding={'10px'} mb={5} bg={'black'} width={'fit-content'} fontSize={[18, 28, 35]}>Health & wellbeing facilities</Heading>

            <Heading padding={'10px'} bg={'blue'} width={'fit-content'} fontSize={[18, 28, 35]}>High-speed Wifi</Heading>
          </Box>

          <Box m={'60px 0'} position={'relative'} flex={1}>
              <Box rounded={15} width={'90%'}  position={'absolute'} right={0}  bottom={10} height={'150%'} bg={'green.300'}>
                  <Image src={'http://jts.colladome.in/_next/static/media/wc_infra.7608fe81.png?imwidth=1920'} width={'100%'} height={'100%'}/>
              </Box>

              <Box rounded={15} width={'90%'}  position={'absolute'} right={0}  bottom={10} height={'150%'} bg={'transparent'}>
                <Box rounded={15} position={'absolute'} top={`calc(-${height}px * 0.5)`} left={0} margin={'0 auto'} right={0} width={200} bg={'white'} height={`${height}px`} textAlign={'center'}>
                    <Heading>20,000</Heading>
                    <Text>Sq.Ft</Text>
                    <Text>Workspace</Text>
                </Box>

                <Box p={'15px 0'} rounded={15} position={'absolute'} top={0} bottom={0} left={`calc(-${width}px * 0.5)`} margin={'auto 0'} width={`${width}px`} bg={'white'} height={`${height}px`} textAlign={'center'}>
                    <Heading fontSize={[28, 38, 45]}>24/7</Heading>
                    <Text>Sq.Ft</Text>
                    <Text>Workspace</Text>
                </Box>

                <Box padding={'15px 10px'} rounded={15} position={'absolute'} bottom={`calc(-${height_}px * 0.5)`} left={0} margin={'0 auto'} right={0} width={400} bg={'white'} height={`${height_}px`} textAlign={'center'}>
                  <Heading>Serving with the best facilities</Heading>
                </Box>
              </Box>

              {/* <Box position={'absolute'} opacity={0.6} bottom={10} right={0} width={'90%'} height={'200%'} bg={'red.200'}>
                    <Box rounded={15} position={'absolute'} top={`calc(-${height}px * 0.5)`} left={0} margin={'0 auto'} right={0} width={200} bg={'white'} height={`${height}px`} textAlign={'center'}>
                      <Heading>20,000</Heading>
                      <Text>Sq.Ft</Text>
                      <Text>Workspace</Text>
                    </Box>
                    
                    <Box rounded={15} position={'absolute'} bottom={0} left={0} margin={'0 auto'} right={0} width={200} bg={'white'} height={`${height}px`} textAlign={'center'}>
                      <Heading>20,000</Heading>
                      <Text>Sq.Ft</Text>
                      <Text>Workspace</Text>
                    </Box>
                  </Box> */}
          </Box>
        </Flex>
      </Box>
    </>
   
  )
}

export default SectionNine