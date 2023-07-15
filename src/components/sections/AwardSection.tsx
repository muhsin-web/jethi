import { Box, Flex, Heading, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'

const AwardSection = () => {
  return (
    <Box padding={'100px 0'}>
      <Box maxW={1170} margin={'auto'}>
        <Stack width={'70%'} textAlign={'left'}>
          <Heading fontSize={[28, 38, 48]}>Our customers love what we do</Heading>
          <Text fontSize={[14, 16, 20]}>We have received prestigious awards and accolades in the development industry because of our pioneering approaches and practices. After working with us, businesses have observed remarkable growth in their business performance, which motivates us to build better solutions in the future..</Text>
        </Stack>

        <Flex mt={50} justifyContent={'space-between'}>
          <Box rounded={15} p={'30px 15px'} _hover={{
            shadow: 'xl'
          }}>
            <Image src={'http://jts.colladome.in/_next/static/media/am-badge-img1.9953902d.png?imwidth=640'}/>
          </Box>

          <Box rounded={15} p={'30px 15px'} _hover={{
            shadow: 'xl'
          }}>
            <Image src={'http://jts.colladome.in/_next/static/media/am-badge-img1.9953902d.png?imwidth=640'}/>
          </Box>

          <Box rounded={15} p={'30px 15px'} _hover={{
            shadow: 'xl'
          }}>
            <Image src={'http://jts.colladome.in/_next/static/media/am-badge-img3.2498d7e2.png?imwidth=640'}/>
          </Box>

          <Box rounded={15} p={'30px 15px'} _hover={{
            shadow: 'xl'
          }}>
            <Image src={'http://jts.colladome.in/_next/static/media/am-badge-img4.f82a0bda.png?imwidth=640'}/>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default AwardSection