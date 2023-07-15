import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { SecCategory } from '../../data/data'
import TextCard from '../cards/TextCard'

const SectionSeven = () => {
  return (
    <Box maxW={1170} padding={'80px 0'} margin={'auto'}>
      <Box width={['full', '80%', '60%' ]}>
        <Stack textAlign={'left'}>
          <Heading color={'black'} fontSize={[28, 38, 48]}>Development Process We Follow</Heading>
          <Text fontSize={[14, 16, 18]}>Working with different customer-friendly engagement models followed by a customized development process supported with agile and scrum methodologies.</Text>
        </Stack>
      </Box>

        <Flex paddingTop={210} justifyContent={'space-between'} width={'100%'} position={'relative'}>
          <Box position={'absolute'} left={0} top={-100}>
            <Image width={'100%'} src='http://jts.colladome.in/assets/images/blue-line.svg'/>
          </Box>
          {
            SecCategory?.map((item, index) => (
              <TextCard key={index * 216} index={index} title={item.title} content={item.content} top = {item.top} icon={item.icon}/>
            ))
          }
        </Flex>
    </Box>
  )
}

export default SectionSeven