import { Tabs, Tab, TabList, TabPanel, TabPanels, Box, Heading, Text, Stack, transition } from "@chakra-ui/react"
import TechIcons from "../TechIcons"

  const SecTabs = () => {
    return (
      <Tabs flexDirection={['column', 'column', 'row']} width={'full'} display='flex' variant="unstyled">
      <TabList overflow={'scroll'} gap={5} fontSize={''} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'} display="flex" flexDirection={['row', 'row', 'column']} placeItems={'center'}>
        <Tab _before={{
              content: '""',
              width: 20,
              opacity: 0,
              height: 1,
              bg: 'black',
              marginRight: 5,
              transition: 'all .5s ease-in-out'
            }}
            _after={{
              content: '""',
              width: 20,
              opacity: 0,
              height: 1,
              bg: 'black',
              marginLeft: 5,
              transition: 'all .3s ease'
            }}

            _focus={{
              _before: {
                width: 35,
                opacity: 1,
              },
              _after: {
                width: 35,
                opacity: 1
              }
            }} fontSize={20}> Web Development</Tab>

        <Tab _before={{
              content: '""',
              width: '50%',
              opacity: 0,
              height: 1,
              bg: '#161616',
              marginRight: 5,
              transition: 'all .5s ease-in-out'
            }}
            _after={{
              content: '""',
              width: '50%',
              opacity: 0,
              height: 1,
              bg: '#161616',
              marginLeft: 5,
              transition: 'all .3s ease'
            }}

            _focus={{
              _before: {
                width: '100%',
                opacity: 1,
              },
              _after: {
                width: '100%',
                opacity: 1
              }
            }}
            width={'fit-content'}
          fontSize={20}>Software Engineering</Tab>
        <Tab fontSize={20}>Three</Tab>
        <Tab fontSize={20}>Three</Tab>

      </TabList>
  
      <TabPanels bg={'black'} borderTopLeftRadius={15} borderBottomLeftRadius={15}>
        <TabPanel>
            <Box p={45}>
                    <Stack textAlign={'left'}>
                      <Heading color={'#fff'} fontSize={[28, 38, 48]}>Frontend Technologies</Heading>
                      <Text color={'#969696'} fontSize={[16, 18, 20]}>Frontend is the window from where customers and clients will view your business and decide whether to associate further.
                          <br />
                          <br />
                        We have in-house frontend experts using the best practices and technologies to build responsive and impressive interfaces.</Text>
                    </Stack>

                  <TechIcons />
            </Box>
        </TabPanel>
        <TabPanel>
          <Box p={45}>
                      <Stack textAlign={'left'}>
                        <Heading color={'#fff'} fontSize={[28, 38, 48]}>Data Analytics</Heading>
                        <Text color={'#969696'} fontSize={[16, 18, 20]}>
                          Backend is the server-side of the application, which may not be visible but plays a pivotal role in storing and organizing data.
                              <br />
                              <br />
                          At Jethi Tech Solutions, we build performant and robust backend solutions irrespective of their scale and complexity.</Text>
                      </Stack>

                    <TechIcons />
              </Box>
        </TabPanel>
        <TabPanel>
          <Box p={45}>
                      <Stack textAlign={'left'}>
                        <Heading fontSize={[28, 38, 48]}>Software Engineerings</Heading>
                        <Text color={'#969696'} fontSize={[16, 18, 20]}>Frontend is the window from where customers and clients will view your business and decide whether to associate further.
                            <br />
                            <br />
                          We have in-house frontend experts using the best practices and technologies to build responsive and impressive interfaces.</Text>
                      </Stack>

                    <TechIcons />
              </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
    )
  }

  export default SecTabs