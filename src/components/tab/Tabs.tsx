import { Tabs, Tab, TabList, TabPanel, TabPanels, Box, Heading, Text, Stack, transition } from "@chakra-ui/react"
import TechIcons from "../TechIcons"
import { tabCategory } from "../../data/data"

  const SecTabs = () => {
    return (
      <Tabs flexDirection={['column', 'column', 'row']} width={'full'} display='flex' variant="unstyled">
      <TabList width={['full', '60%']} overflow={'scroll'} gap={5} fontSize={''} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'} display="flex" flexDirection={['row', 'row', 'column']} placeItems={'center'}>

        {
          tabCategory.tablisting.map((tab) => (
            <Tab key={tab.length}  _before={{
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
            }} fontSize={20}>{tab}</Tab>
          ))
        }
      </TabList>
  
      <TabPanels bg={'black'} borderTopLeftRadius={15} borderBottomLeftRadius={15}>

        {
          tabCategory?.tabpanels.map((item) => (
            <TabPanel>
              <Box p={45}>
                      <Stack textAlign={'left'}>
                        <Heading color={'#fff'} fontSize={[28, 38, 48]}>{item.heading}</Heading>
                        <Text color={'#969696'} fontSize={[16, 18, 20]}>{item.content}
                            <br />
                            <br />
                          {item.content_}</Text>
                      </Stack>
                      <Box mt={20} display={'flex'} gap='60px' maxW={500} flexWrap={'wrap'}>
                        {
                          item.iconslist?.map((icons) => (
                            <TechIcons icons={icons}/>
                          ))
                        }
                      </Box>
              </Box>
            </TabPanel>
          ))
        }
      </TabPanels>
    </Tabs>
    )
  }

  export default SecTabs