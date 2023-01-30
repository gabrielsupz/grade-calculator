import React, { useState } from 'react'
import { IoInformationCircle } from 'react-icons/io5'
import { useTabs } from '../../providers/hook'
import * as S from './style'

interface AlertMessageProps {
  text?: string
  inEditor?: boolean
}

export function AlertMessage({ text, inEditor }: AlertMessageProps) {
  const { inPersonalModel } = useTabs()
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>()

  if (inEditor) {
    if (inPersonalModel) {
      return (
        <S.Alert>
          <S.AlertRetract>
            <S.AlertShowMobile isVisible={menuIsVisible}>
              <p>
                Calcule a nota necessária para atingir a média ou calcule sua
                nota final com base no modelo escolhido.
              </p>
              <img
                src="src\assets\Alert.svg"
                alt="Ícone da mensagem de explicação"
              />
            </S.AlertShowMobile>
            <IoInformationCircle
              onClick={
                menuIsVisible
                  ? () => setMenuIsVisible(false)
                  : () => setMenuIsVisible(true)
              }
              size={55}
            />
          </S.AlertRetract>

          <S.AlertShowDeskTop>
            <p>
              Calcule a nota necessária para atingir a média ou calcule sua nota
              final com base no modelo escolhido.
            </p>
            <img
              src="src\assets\Alert.svg"
              alt="Ícone da mensagem de explicação"
            />
          </S.AlertShowDeskTop>
        </S.Alert>
      )
    } else {
      return (
        <S.Alert>
          <S.AlertRetract>
            <S.AlertShowMobile isVisible={menuIsVisible}>
              <p>
                Crie seu próprio modelo de cálculo, sendo bimestral ou
                trimestral!
              </p>
              <img
                src="src\assets\Alert.svg"
                alt="Ícone da mensagem de explicação"
              />
            </S.AlertShowMobile>
            <IoInformationCircle
              onClick={
                menuIsVisible
                  ? () => setMenuIsVisible(false)
                  : () => setMenuIsVisible(true)
              }
              size={55}
            />
          </S.AlertRetract>

          <S.AlertShowDeskTop>
            <p>
              {' '}
              Crie seu próprio modelo de cálculo, sendo bimestral ou trimestral!
            </p>
            <img
              src="src\assets\Alert.svg"
              alt="Ícone da mensagem de explicação"
            />
          </S.AlertShowDeskTop>
        </S.Alert>
      )
    }
  } else {
    return (
      <S.Alert>
        <S.AlertRetract>
          <S.AlertShowMobile isVisible={menuIsVisible}>
            <p>{text}</p>
            <img
              src="src\assets\Alert.svg"
              alt="Ícone da mensagem de explicação"
            />
          </S.AlertShowMobile>
          <IoInformationCircle
            onClick={
              menuIsVisible
                ? () => setMenuIsVisible(false)
                : () => setMenuIsVisible(true)
            }
            size={55}
          />
        </S.AlertRetract>

        <S.AlertShowDeskTop>
          <p>{text}</p>
          <img
            src="src\assets\Alert.svg"
            alt="Ícone da mensagem de explicação"
          />
        </S.AlertShowDeskTop>
      </S.Alert>
    )
  }
}
