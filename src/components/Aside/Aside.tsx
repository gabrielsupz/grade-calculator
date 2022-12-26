import React from 'react'
import { Button } from '../Button/Button'
import * as S from './style'
export function Aside() {
  return (
    <S.AsideFlex>
      <div>
        <Button title="Entre" />
        <Button title="Registre-se" />
      </div>

      <div>
        {' '}
        <S.NoticeDiv>Logue para mais funcionalidades.</S.NoticeDiv>
        <Button title="Veja seus modelos" /> <Button title="Crie seu modelo" />
      </div>
    </S.AsideFlex>
  )
}
