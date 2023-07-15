import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
  icon: string,
  title: string
}
const IndustrialCards = ({title, icon}: Props) => {
  return (
    <Box rounded={15} transition={'all .3s ease'} _hover={{shadow: '2xl'}} width={'19%'} aspectRatio={1/1}  display={'grid'} placeItems={'center'}>
      <Box>
        <Image src={icon}/>
        <Text pt={2}>{title}</Text>
      </Box>
    </Box>
  )
}

export default IndustrialCards