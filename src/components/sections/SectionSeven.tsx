import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Balance, Flight, Rarings, SearchIcon, Code } from '../../assets/images'
import { CustomText } from '../styledcomponents/tabs.style'
import { SecCategory } from '../../data/data'

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
              <Box display={'grid'} placeItems={'center'} width={'20%'} position={'relative'} top={-50}>
              <Stack>
                <Box margin={'auto'} width={'fit-content'} padding={10} display={'grid'} placeItems={'center'} bg={'#fff'} shadow={'2xl'} rounded={15}>
                  <Image src={SearchIcon}/>
                </Box>
                  <CustomText>1</CustomText>
                  <Box mt={'-55px'} textAlign={'left'}>
                    <Heading>Discovery</Heading>
                    <Text>
                      Our experts understand and build on your idea and work on your vision. We create a proof of concept and conduct feasibility studies to explore your idea’s potential.
                    </Text>
                  </Box>
              </Stack>
            </Box>
            ))
          }

          <Box display={'grid'} placeItems={'center'} width={'20%'} position={'relative'} top={-50}>
            <Stack>
              <Box margin={'auto'} width={'fit-content'} padding={10} display={'grid'} placeItems={'center'} bg={'#fff'} shadow={'2xl'} rounded={15}>
                <Image src={SearchIcon}/>
              </Box>
                <CustomText>1</CustomText>
                <Box mt={'-55px'} textAlign={'left'}>
                  <Heading>Discovery</Heading>
                  <Text>
                    Our experts understand and build on your idea and work on your vision. We create a proof of concept and conduct feasibility studies to explore your idea’s potential.
                  </Text>
                </Box>
            </Stack>
          </Box>

          <Box position={'relative'} top={-74}>
            <Stack fontSize={'calc(40px + 4.75295vw)'}>
              <Box padding={10} display={'grid'} placeItems={'center'} bg={'#fff'} shadow={'2xl'} rounded={15}>
                <Image src={Balance}/>
              </Box>
                <CustomText>2</CustomText>
                <Box mt={'-55px'}>
                  <Heading>Discovery</Heading>
                  <Text></Text>
                </Box>
            </Stack>
          </Box>

          <Box position={'relative'} top={-140}>
            <Stack fontSize={'calc(40px + 4.75295vw)'}>
              <Box padding={10} display={'grid'} placeItems={'center'} bg={'#fff'} shadow={'2xl'} rounded={15}>
                <Image src={Rarings}/>
              </Box>
                <CustomText>3</CustomText>
                <Box mt={'-55px'}>
                  <Heading>Discovery</Heading>
                  <Text></Text>
                </Box>
            </Stack>
          </Box>

          <Box position={'relative'} top={-165}>
            <Stack fontSize={'calc(40px + 4.75295vw)'}>
              <Box padding={10} display={'grid'} placeItems={'center'} bg={'#fff'} shadow={'2xl'} rounded={15}>
                <Image src={Code}/>
              </Box>
                <CustomText>4</CustomText>
                <Box mt={'-55px'}>
                  <Heading>Discovery</Heading>
                  <Text></Text>
                </Box>
            </Stack>
          </Box>

          <Box position={'relative'} top={-345}>
            <Stack fontSize={'calc(40px + 4.75295vw)'}>
              <Box padding={10} display={'grid'} placeItems={'center'} bg={'#fff'} shadow={'2xl'} rounded={15}>
                <Image src={Flight}/>
              </Box>
                <CustomText>5</CustomText>
                <Box mt={'-55px'}>
                  <Heading>Discovery</Heading>
                  <Text></Text>
                </Box>
            </Stack>
          </Box>
        </Flex>
    </Box>
  )
}

export default SectionSeven