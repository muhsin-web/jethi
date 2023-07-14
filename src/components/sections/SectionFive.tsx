import { Box, Flex, Image, Heading, Stack, Text, Icon } from '@chakra-ui/react' 
import React, { useState } from 'react'
import {WiDirectionUpRight} from 'react-icons/wi'

const SectionFive = () => {
  const [opacity, setOpacity] = useState(0)
  const [opacity1, setOpacity1] = useState(0)
  const [opacity2, setOpacity2] = useState(0)

  return (
    <Box>
      <Box maxW={'1170px'} m={'auto'}>
        <Stack>
          <Heading fontSize={[28, 38, 48]}>Our Works</Heading>
          <Text fontSize={[14, 16, 18]}>We are fueled with a passion for innovating and creating every solution with a development-oriented mindset to help our clients perform exceptionally well in the market. Here are some examples of our work.</Text>
        </Stack>

        <Box>
          <Box padding={'50px 0'} display={'grid'} gap={5} gridTemplateColumns={'repeat(2, 1fr)'}  gridTemplateRows={'repeat(14, 100px)'}>
              <Box onMouseEnter={() => setOpacity(1)} onMouseLeave={() => setOpacity(0)} gridRow={'1/7'} position={'relative'}>
                <Flex transition={'opacity .3s ease'} opacity={opacity} position={'absolute'} top={0} left={0} rounded={15} width={'100%'} height={'100%'} bgGradient='linear(to-b, rgba(0,0,0,0.3), rgba(0,0,0,0.99))' padding={10} direction={'column'} color={'#fff'} justifyContent={'center'}>
                    <Image objectFit={'contain'} src='http://jts.colladome.in/assets/images/portfolio/Dimendscaasi-Chicago.png?imwidth=1920'/>

                    <Box padding={'0 20px'}>
                      <Heading color={'#ccc'} margin={'20px 0'} fontSize={[12, 14, 16]}>Dimendscaasi Chicago</Heading>
                      <Heading fontSize={[12, 20, 30]}>Discover the Ultimate Ring Shopping Experience with Dimend SCAASI</Heading>
                    </Box>
                </Flex>
                <Image rounded={15} width={'100%'} height={'100%'} src='http://jts.colladome.in/assets/images/portfolio/dimendscaasi-bg.png?imwidth=3840'/>
              </Box>

              <Box position={'relative'} onMouseEnter={(e) => setOpacity1(1)} onMouseLeave={() => setOpacity1(0)} gridRow={'2/8'}>
              <Flex transition={'opacity .3s ease'} opacity={opacity1} position={'absolute'} top={0} left={0} rounded={15} width={'100%'} height={'100%'} bgGradient='linear(to-b, rgba(0,0,0,0.3), rgba(0,0,0,0.99))' padding={10} direction={'column'} color={'#fff'} justifyContent={'center'}>
                    <Image objectFit={'contain'} src='http://jts.colladome.in/assets/images/portfolio/honeywell-small.png'/>

                    <Box padding={'0 20px'}>
                      <Heading color={'#ccc'} margin={'20px 0'} fontSize={[12, 14, 16]}>Honeywell Connect Mobile</Heading>
                      <Heading fontSize={[12, 20, 30]}>Unlock the Power of Automation with Honeywell: Control Your Home and Business with an IoT Solution</Heading>
                    </Box>
                </Flex>
                <Image rounded={15} width={'100%'} height={'100%'} src='http://jts.colladome.in/_next/static/media/Honeywells.b24f4544.png?imwidth=3840'/>
              </Box>

              <Box position={'relative'} gridRow={'7/14'} onMouseEnter={(e) => setOpacity2(1)} onMouseLeave={() => setOpacity2(0)}>
              <Flex transition={'opacity .3s ease'} opacity={opacity2} position={'absolute'} top={0} left={0} rounded={15} width={'100%'} height={'100%'} bgGradient='linear(to-b, rgba(0,0,0,0.3), rgba(0,0,0,0.99))' padding={10} direction={'column'} color={'#fff'} justifyContent={'center'}>
                    <Image objectFit={'contain'} src='http://jts.colladome.in/_next/static/media/deo.dc639eeb.png?imwidth=1920'/>

                    <Box padding={'0 20px'}>
                      <Heading color={'#ccc'} margin={'20px 0'} fontSize={[12, 14, 16]}>Dimendscaasi Chicago</Heading>
                      <Heading fontSize={[12, 20, 30]}>Discover the Ultimate Ring Shopping Experience with Dimend SCAASI</Heading>
                    </Box>
                </Flex>
                <Image rounded={15} width={'100%'} height={'100%'} src='http://jts.colladome.in/_next/static/media/HeroDeodorant.4d7d631d.png?imwidth=3840'/>
              </Box>

              <Box display={'grid'} placeItems={'center'} rounded={'full'} gridRow={'8/13'} gridColumn={'2/3'}>
                  <Flex justifyContent={'center'} alignItems={'center'} width={400} color={'#fff'} height={400} bg={'blue'} rounded={'full'}>
                    <WiDirectionUpRight style={{width: '100%', height: '100%', transform: 'scale(1.5)'}}/>
                  </Flex>
                  <Heading color={'blue'} fontSize={[28, 38, 48]}>View All</Heading>
              </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionFive