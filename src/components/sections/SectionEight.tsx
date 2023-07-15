import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Industries } from '../../data/data'
import IndustrialCards from '../cards/IndustrialCards'

const SectionEight = () => {
  return (
    <Box bg={'rgba(0,0,0,0.03)'}>
    <Box maxW={1170} margin={'auto'} padding={'60px 0'}>
      <Stack width={'50%'} textAlign={'left'}>
        <Heading fontSize={[28, 38, 48]}>Industries We Serve</Heading>
        <Text fontSize={[14, 16, 18]}>Every industry has a unique customer base and users. As the leading mobile app development company, we provide bespoke solutions for every industry while catering to its specific needs in terms of technologies, design, and scalability.</Text>
      </Stack>

      <Flex mt={70} flexWrap={'wrap'} gap={2} width={'100%'} justify={'space-between'}>
        {
          Industries.map((item) => (
            <IndustrialCards title={item.title} icon={item.icon} />
          ))
        }
      </Flex>
    </Box>
    </Box>
  )
}

export default SectionEight