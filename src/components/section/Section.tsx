import React from 'react'
import * as S from './styled'
export function Section() {
  return (
    <S.SectionStyled>
      <header>
        <h1>Calculadora de Notas</h1>
      </header>

      <div>
        <button>Calc. Bimestre</button>
        <button>Calc. Trimestre</button>
      </div>

      <div></div>
    </S.SectionStyled>
  )
}
