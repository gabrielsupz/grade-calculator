import React, { useState } from 'react'
import * as S from './style'

import { MdArticle } from 'react-icons/md'
import { useTabs } from '../../../providers/hook'

export function PMInfoMessage() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  const { personalModelForInfo } = useTabs()

  if (personalModelForInfo.modelType === 'bimestre') {
    return (
      <S.Info>
        {' '}
        <S.InfoRetract>
          <S.InfoShow isVisible={menuIsVisible}>
            <p>
              São contadas as notas dos 4 bimestres sendo a média
              <strong> {personalModelForInfo.average}</strong>, a primeira nota
              tem seu valor multiplicado por
              <strong> {personalModelForInfo.weight1}</strong> , a segunda por
              <strong> {personalModelForInfo.weight2}</strong> , a terceira por
              <strong> {personalModelForInfo.weight3}</strong> e a quarta por
              <strong> {personalModelForInfo.weight4}</strong>.
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
          <p>
            São contadas as notas dos 4 bimestres sendo a média
            <strong> {personalModelForInfo.average}</strong>, a primeira nota
            tem seu valor multiplicado por
            <strong> {personalModelForInfo.weight1}</strong> , a segunda por
            <strong> {personalModelForInfo.weight2}</strong> , a terceira por
            <strong> {personalModelForInfo.weight3}</strong> e a quarta por
            <strong> {personalModelForInfo.weight4}</strong>.
          </p>
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
              São contadas as notas dos 3 trimestres com a média
              <strong> {personalModelForInfo.average}</strong> , sendo que a
              primeira nota tem seu valor multiplicado por{' '}
              <strong> {personalModelForInfo.weight1}</strong>, a segunda por{' '}
              <strong> {personalModelForInfo.weight2}</strong> e a terceira por
              <strong> {personalModelForInfo.weight2}</strong>.
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
          <p>
            São contadas as notas dos 3 trimestres com a média
            <strong> {personalModelForInfo.average}</strong> , sendo que a
            primeira nota tem seu valor multiplicado por{' '}
            <strong> {personalModelForInfo.weight1}</strong>, a segunda por{' '}
            <strong> {personalModelForInfo.weight2}</strong> e a terceira por
            <strong> {personalModelForInfo.weight2}</strong>.
          </p>
          <img src="src\assets\Info.svg" alt="ícone de informação" />
        </S.InfoBox>
      </S.Info>
    )
  } else {
    return (
      <>
        <p>Ou</p>
      </>
    )
  }
}
