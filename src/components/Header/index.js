import React from 'react'
import Link from 'next/link'
import { Button } from '../index.js'

const style = {
  width: '100%',
  display: 'flex',
  gap: '2vw',
  justifyContent: 'space-between',
}

const Header = () => {
  return (
    <div style={style}>
      <Button background={'#ADFF00'} link={'/'}>
        INFO
      </Button>
      <Button background={'#A49CFF'} link={'/blog'}>
        BLOG
      </Button>
    </div>
  )
}

export default Header
