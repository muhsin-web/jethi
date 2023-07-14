import { Box, Text, Heading, Stack, Flex } from '@chakra-ui/react'
import React from 'react'
import { TextTab } from '../styledcomponents/tabs.style'

const SectionSix = () => {
  const val = 453
  return (
    <Box padding={'120px 0 120px'} bg={'#161616'}>
      <Box maxW={1170} margin={'auto'}>
        <Stack color={'#fff'}>
          <Heading fontSize={[28, 38, 48]}>The Stats We Love to Brag About</Heading>

          <Heading position={'relative'} zIndex={5} as={'h1'} _before={{
            content: `"+453"`,
            top: '10px',
            left: '50%',
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: '#ff8307',
            position: 'absolute',
            transform: 'translateX(-49%)',
            zIndex: -1,
            fontSize: 'calc(68px + 4.75295vw)',
            color: '#161616'
            // fontsize: calc(68px + 4.75295vw)
          }} fontWeight={900}  fontSize={[38, 48, 'calc(68px + 4.75295vw)']} margin={'40px 0'}>+{val}</Heading>
        </Stack>

        <Flex mt={'235px'} fontSize={[14, 16, 18]} justifyContent={'center'} gap={20} alignItems={'center'}>
          <TextTab>
            <Heading>045</Heading>
            <Text>Projects Delivered</Text>
          </TextTab>

          <TextTab>
            <Heading>045</Heading>
            <Text>Satisfied clients</Text>
          </TextTab>

          <TextTab>
            <Heading>045</Heading>
            <Text>Developers and Experts</Text>
          </TextTab>

          <TextTab>
            <Heading>045</Heading>
            <Text>Offices</Text>
          </TextTab>
        </Flex>
      </Box>
    </Box>
  )
}

export default SectionSix