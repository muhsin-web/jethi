import React from 'react'
import { Box, Image, Heading, Text, Stack } from '@chakra-ui/react'
import { CustomText } from '../styledcomponents/tabs.style'
import { styled } from 'styled-components'

type item = {
  title: string,
  content: string,
  top: number,
  icon: string,
  index: number
}
const TextCard = ({title, content, top, icon, index}: item) => {
  return (
    <Box display={'grid'} placeItems={'center'} width={'20%'} position={'relative'} top={-top}>
      <Stack>
        <Box margin={'auto'} width={'fit-content'} padding={8} display={'grid'} placeItems={'center'} bg={'#fff'} shadow={'2xl'} rounded={15}>
          <Image src={icon}/>
        </Box>
          <CustomText>{index + 1}</CustomText>
          <Box mt={'-65px'} textAlign={'left'}>
            <Heading pb={1}>{title}</Heading>
            <Text lineHeight={1.6} padding={'0 20px 0 0'}>
              {content}
            </Text>
          </Box>
      </Stack>
    </Box>
  )
}

export default TextCard

// const style = styled