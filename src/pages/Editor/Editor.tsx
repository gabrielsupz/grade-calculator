import React from 'react'
import { AlertMessage } from '../../components/AlertMessage/AlertMessage'
import { Button } from '../../components/Button/Button'
import { InfoMessage } from '../../components/InfoMessage/InfoMessage'
import { Section } from '../../components/Section/Section'
import { useAuth } from '../../providers/hook'
import * as S from './style'
export function Home() {
  const { period } = useAuth()

  return (
    <S.HomeStyled>
      <S.leftMessages>
        <InfoMessage period={period} />

        <AlertMessage text="s" />
      </S.leftMessages>

      <Section />

      <S.asideFlex>
        <div>
          <Button title="Editor" />
          <Button title="Meus Modelos" />
        </div>

        <div>
          {' '}
          <S.NoticeDiv>Logue para mais funcionalidades.</S.NoticeDiv>
          <Button title="Veja seus modelos" />{' '}
          <Button title="Crie seu modelo" />
        </div>
      </S.asideFlex>
    </S.HomeStyled>
  )
}
