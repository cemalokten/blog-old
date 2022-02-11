import React from 'react'
import * as S from '../Styles'
import { v4 as uuidv4 } from 'uuid'

const Tag = ({ tags }) => {
  return tags.map((obj) => {
    return (
      <S.Tag key={uuidv4()} background={obj.background}>
        {obj.tag}
      </S.Tag>
    )
  })
}

export default Tag
