import React from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  title: string
}
const ButtonTag = ({title}: Props) => {
  return (
    <Button style={{
      background: 'transparent',
      padding: '30px 20px',
      color: '#fff',
      position: 'relative',
      zIndex: 1,
      fontSize: '18px',
      fontWeight: 600
    }}
    _before={{
      content: '""',
      top: 0,
      left: 0,
      width: '35%',
      height: '100%',
      backgroundColor: 'blue',
      position: 'absolute',
      zIndex: -1,
      transition: 'all .3s ease'
    }}
    _hover={{
      _before: {
        width: '100%'
      }
    }} width={'fit-content'} mt={5}>{title}</Button>
  )
}

export default ButtonTag