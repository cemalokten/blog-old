import React from 'react'
import Link from 'next/link'
import * as S from '../Styles'

const Button = ({ children, background, link }) => {
  return (
    <Link href={link} passHref>
      <S.Span background={background}>{children}</S.Span>
    </Link>
  )
}

export default Button
