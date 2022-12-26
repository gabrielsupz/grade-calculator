import React from 'react'
import { AlertMessage } from '../../components/AlertMessage/AlertMessage'
import { Aside } from '../../components/Aside/Aside'
import { Button } from '../../components/Button/Button'
import { InfoMessage } from '../../components/InfoMessage/InfoMessage'
import { Section } from '../../components/Section/Section'
import { useAuth } from '../../providers/hook'
import * as S from './style'
export function Editor() {
  const { period } = useAuth()

  return (
    <S.HomeStyled>
      <S.leftMessages>
        <InfoMessage period={period} />

        <AlertMessage text="Crie seu modelo de notas, coloque o peso ( vezes que será multiplicado) e se será bimestral ou trimestral" />
      </S.leftMessages>

      <Section />

      <Aside />
    </S.HomeStyled>
  )
}
