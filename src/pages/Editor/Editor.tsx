import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AlertMessage } from '../../components/AlertMessage/AlertMessage'
import { Aside } from '../../components/Aside/Aside'
import { Button } from '../../components/Button/Button'
import { InfoMessage } from '../../components/InfoMessage/InfoMessage'
import { Section } from '../../components/Section/Section'
import { UserAuth } from '../../context/AuthContext'
import { useTabs } from '../../providers/hook'
import * as S from './style'
export function Editor() {
  const { period } = useTabs()
  const { user } = UserAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (user === null) {
      navigate('/')
    }
  }, [user])
  return (
    <S.HomeStyled>
      <S.leftMessages>
        <InfoMessage text="A menssagem de informação será gerada automaticamente" />

        <AlertMessage text="Crie seu modelo de notas, coloque o peso ( vezes que será multiplicado) e se será bimestral ou trimestral" />
      </S.leftMessages>

      <Section inWorkshop={true} />

      <Aside logged={true} />
    </S.HomeStyled>
  )
}
