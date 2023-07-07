import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Mobile, Web, Webs, Dev, Product, Data } from '../../assets/images';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
  image: ReactElement
}

const Card = ({ heading, description, icon, image, href }: CardProps) => {
  return (
    <Box
    _hover={
      {
        transform: 'translateY(-10px)',
        transition: 'all .4s ease-in-out',
        boxShadow: '0 7px 20px 0 rgba(0,0,0,0.08)'
    }}
      maxW={{ base: 'full', md: '32%' }}
      w={'full'}
      borderRadius="20px"
      overflow="hidden"
      bg={'#fff'}
      p={10}>
      <Stack spacing={2}>
        <Flex
          w={20}
          h={20}
          align={'center'}
          justify={'center'}
          >
          {image}
        </Flex>
        <Box mt={2}>
          <Heading textAlign={'left'} m={'20px 0'} fontSize={[20, 28, 38]}>{heading}</Heading>
          <Text color={'#969696'} textAlign={'left'} mt={1} fontSize={16}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function SectionTwo() {
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
              <Card
                heading={'Blockchain Development'}
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                image={<Image src={Dev}/>}
                description={
                  'Building blockchain-enabled solutions from scratch with precision planning and strategies to help your business leverage advanced functioning.'
                }
                href={'#'}
              />
              <Card
                heading={'Team Extension'}
                icon={<Icon as={FcCollaboration} w={10} h={10} />}
                image={<Image src={Web}/>}
                description={
                  'Outsource software development services with our team extension development model to create bespoke solutions and software.'
                }
                href={'#'}
              />
              <Card
                heading={'Product Engineering'}
                icon={<Icon as={FcCollaboration} w={10} h={10} />}
                image={<Image src={Product}/>}
                description={
                  'We will build your roadmap to excellence and sustainability with the combination of hardware, embedded, and software solutions.'
                }
                href={'#'}
              />
              
              <Card
                heading={'Web Development'}
                icon={<Icon as={FcDonate} w={10} h={10} />}
                image={<Image src={Webs}/>}
                description={
                  'We ideate, create, manage, and scale web solutions for your business with the best technologies.'
                }
                href={'#'}
              />
              <Card
                heading={'Mobility'}
                icon={<Icon as={FcManager} w={10} h={10} />}
                image={<Image src={Mobile}/>}
                description={
                  'Our developers create real-time customer experiences backed with data for precision mobility in mobile and web apps.'
                }
                href={'#'}
              />
              <Card
                heading={'Data Analytics'}
                icon={<Icon as={FcAbout} w={10} h={10} />}
                image={<Image src={Data}/>}
                description={
                  'Unlock new insights and possibilities specific to your business and create bespoke user experiences with accurate data.'
                }
                href={'#'}
              />
            </Flex>
          </Container>
        </Box>
    </Box>
  );
}
