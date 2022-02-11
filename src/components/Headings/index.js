import React from 'react'
import * as S from '../Styles'

const H1 = ({ children }) => {
  return <S.H1>{children.toUpperCase()}</S.H1>
}

const H2 = ({ children }) => {
  return <S.H2>{children.toUpperCase()}</S.H2>
}

export { H1, H2 }
