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
    <S.EditorStyled>
      <S.leftMessages>
        <InfoMessage text="A menssagem de informação será gerada automaticamente" />

        <AlertMessage inEditor={true} />
      </S.leftMessages>

      <Section inWorkshop={true} />

      <Aside inEditor />
    </S.EditorStyled>
  )
}
