import { useState } from 'react';
import {
  Stack,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  Image,
  Button,
  Box
} from '@chakra-ui/react';
import ButtonTag from '../tags/Button';

export default function SectionFour() {
  const [error, setError] = useState(false);

  return (
    <Flex
      bgColor={'red'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      m={'6rem 0'}>
      <Container
        maxW={'1170px'}
        boxShadow={'xl'}
        rounded={'15px'}
        bg={'black'}
        p={'40px 50px'}
        as={'div'}
        display={'flex'}
        alignItems={'stretch'}
        >
          <Stack color={'#fff'} width={'67%'} textAlign={'left'}>
              <Heading
                as={'h1'}
                fontSize={{ base: 'xl', sm: '48px' }}
                mb={5} fontWeight={800}>
                Hire Dedicated  <Text as={'span'} bg={'blue'} padding={'8px 15px'}>Developers</Text>
              </Heading>
              <Text
              paddingRight={45}
                mt={2}
                color={'#9a9a9a'} 
                fontSize={[14, 16, 18]} lineHeight={1.6}>
                We will bring the expertise and specialization your business needs to build and perform with ease in a competitive environment. From using the best Blockchain, Frontend, Backend, Web, Mobility, Data Analytics, UI/UX technologies, and practices, we make your solutions click and engagement worthy.
              </Text>
              <ButtonTag title='Hire Developers' />
          </Stack>

          <Flex width={'30%'} position={'relative'}>
            <Box height={'368px'} width={'100%'} position={'absolute'} bottom={-14} margin={'auto'} left={0} zIndex={221}>
                <Image top={0} roundedTopRight={15} roundedTopLeft={15} left={0} height={'100%'} width={'100%'} zIndex={200} src='http://jts.colladome.in/_next/static/media/hire-dedicated-developers.cc81ad2e.jpg?imwidth=750'/>
              </Box>
          </Flex>
      </Container>
    </Flex>
  );
}
