import React, { useState } from 'react'
import * as S from './style'

import { MdArticle } from 'react-icons/md'
import { useTabs } from '../../../providers/hook'
interface InfoMessafeProps {
  text?: string | undefined
  inEditor?: boolean
}

export function PMInfoMessage({ text }: InfoMessafeProps) {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  const { personalModelForInfo } = useTabs()

  if (personalModelForInfo.modelType === 'bimestre') {
    return (
      <S.Info>
        {' '}
        <S.InfoRetract>
          <S.InfoShow isVisible={menuIsVisible}>
            <p>
              São contadas as notas dos 3 trimestres, sendo que a segunda nota
              tem seu valor dobrado e a terceira tem seu valor triplicado
            </p>
            <img src="src\assets\Info.svg" alt="ícone de informação" />
          </S.InfoShow>
          <MdArticle
            size={55}
            onClick={
              menuIsVisible
                ? () => setMenuIsVisible(false)
                : () => setMenuIsVisible(true)
            }
          />
        </S.InfoRetract>
        <S.InfoBox>
          <p>{text}</p>
          <img src="src\assets\Info.svg" alt="ícone de informação" />
        </S.InfoBox>
      </S.Info>
    )
  }
  if (personalModelForInfo.modelType === 'trimestre') {
    return (
      <S.Info>
        {' '}
        <S.InfoRetract>
          <S.InfoShow isVisible={menuIsVisible}>
            <p>
              São contadas as notas dos 3 trimestres, sendo que a segunda nota
              tem seu valor dobrado e a terceira tem seu valor triplicado
            </p>
            <img src="src\assets\Info.svg" alt="ícone de informação" />
          </S.InfoShow>
          <MdArticle
            size={55}
            onClick={
              menuIsVisible
                ? () => setMenuIsVisible(false)
                : () => setMenuIsVisible(true)
            }
          />
        </S.InfoRetract>
        <S.InfoBox>
          <p>{text}</p>
          <img src="src\assets\Info.svg" alt="ícone de informação" />
        </S.InfoBox>
      </S.Info>
    )
  }
}
