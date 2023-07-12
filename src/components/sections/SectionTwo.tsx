import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { Mobile, Web, Webs, Dev, Product, Data } from '../../assets/images';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';
import { cardData } from '../../data/data';
import SecTwoCards from '../cards/SecTwoCards';


export default function SectionTwo() {
  console.log(cardData)
  return (
    <Box bg={'gray.50'}>
        <Box p={'70px 0'} maxW={1170} as={Container}>
          <Stack spacing={4} as={Container} maxW={600} marginLeft={0} textAlign={'left'}>
            <Heading fontSize={{ base: '2xl', md: '48px' }} fontWeight={'bold'}>
              Our Expertise
            </Heading>
            <Text color={'#969696'} fontSize={{ base: 'sm', md: '18px' }}>
            Jethi Tech Solutions is an agile and proactive development services provider creating new digital experiences for your end users with intelligent solutions. We use intelligent practices, advanced technologies, and adaptive systems for your development solutions.
            </Text>
          </Stack>

          <Container maxW={1350} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
            {
              cardData.map((data) => (
                <SecTwoCards image={<Image src={data.image}/>} heading={data.heading} description={data.desscription} icon={<Icon />} href='icons' key={data.heading.length} />
              ))
              }
            </Flex>
          </Container>
        </Box>
    </Box>
  );
}
