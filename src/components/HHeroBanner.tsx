import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  Box,
} from '@chakra-ui/react';
import BannerImg from '../assets/images/banner.png'

export default function HeroBanner() {
  return (
    <Flex
     className='bg'
      w={'full'}
      h={'100vh'}
      backgroundImage={
        `url(${BannerImg})`
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        paddingTop={150}
        justify={'flex-start'}
        textAlign='center'
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(180deg,#161616 0,#161616 42%,hsla(0,0%,9%,0)'}>
        <Stack align={'center'} spacing={6}>
          <Box>
            <Heading color='#fff' fontSize={48}>Empowering Businesses Globally With</Heading>
            <Heading color='#fff' fontSize={48}>Technologgy Consulting</Heading>
          </Box>
          <Text
          maxWidth={700}
            color={'hsla(0,0%,100%,.6)'}
            fontWeight={700}
            lineHeight={1.6}
            fontSize={useBreakpointValue({ base: '18px', md: '18px' })}>
           Jethi Tech Solutions creates inspirational designs and robust solutions for web and mobile apps. We combine our expertise in tech & design to craft innovative digital solutions that lead the way in your industry.
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
