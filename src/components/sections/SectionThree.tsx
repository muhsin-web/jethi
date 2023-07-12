import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Image
} from '@chakra-ui/react';
import TechIcons from '../TechIcons';
import SecTabs from '../tab/Tabs';
import { Computer } from '../../assets/images';

export default function SectionThree() {
  return (
    <Box mt={100}>
      <Box as={Container} maxW={1170}>
        <Stack as={Container} maxW={['full', '75%', '50%']} marginLeft={0} textAlign={'left'} mb={12}>
          <Heading fontSize={[28, 38, 48]}>Technologies We Work With</Heading>
          <Text color={'#969696'} fontSize={[14, 16, 18]}>Jethi Tech Solutions mobile app development company leverages the most effective technologies to create bespoke solutions powered by strong coding standards.</Text>
        </Stack>
      </Box>

      <Box>
        <Flex
          flex={1}
          zIndex={0}
          backgroundImage="url('/templates/stats-grid-with-image.png')"
          backgroundSize={'cover'}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          width={'100%'}
          insetY={0}
          alignItems={'stretch'}
          right={0}>
            <Box display={['none', 'none', 'flex']} alignItems={'flex-end'} width={'10%'} borderTopRightRadius={20} borderBottomRightRadius={20} bg={'#0010f1'}>
                <Image src={Computer} />
            </Box>

            <Box>
              <SecTabs />
            </Box>
            {/* <Box width={'30%'}>

            </Box>

            <Box width={'60%'} borderTopLeftRadius={20} borderBottomLeftRadius={20} bg={'#161616'}>
                <Box p={45}>
                    <Stack textAlign={'left'}>
                      <Heading fontSize={[28, 38, 48]}>Frontend Technologies</Heading>
                      <Text color={'#969696'} fontSize={[16, 18, 20]}>Frontend is the window from where customers and clients will view your business and decide whether to associate further.
                          <br />
                          <br />
                        We have in-house frontend experts using the best practices and technologies to build responsive and impressive interfaces.</Text>
                    </Stack>

                  <TechIcons />
                </Box>
            </Box> */}
        </Flex>
      </Box>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '10+',
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: '13%',
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
        their management solution
      </>
    ),
  },
  {
    title: '250M+',
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the
        NewLife™ software
      </>
    ),
  },
];
