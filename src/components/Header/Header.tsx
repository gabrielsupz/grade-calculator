import React from 'react'
import * as S from './style'
import { CiCalculator2 } from 'react-icons/ci'
export function Header() {
  return (
    <S.StyleHeader>
      <h1 id="top">Calculadora de Notas</h1>
      <CiCalculator2 size={90} color="var(--text-color)" />
    </S.StyleHeader>
  )
}
