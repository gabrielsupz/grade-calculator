import React from 'react'
import { Button } from '../Button/Button'
import { GradeInputs } from '../GradeInputs/GradeInputs'
import * as S from './style'
export function Section() {
  return (
    <S.SectionStyled>
      <header>
        <h1>Calculadora de Notas</h1>
      </header>

      <div>
        <Button title="Calc. Bimestre" />
        <Button title="Calc. Trimestre" />
      </div>

      <div className="divWithBackground">
        <GradeInputs />
        <GradeInputs />
      </div>
    </S.SectionStyled>
  )
}
