import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { GradeInputs, PeriodProps } from '../GradeInputs/GradeInputs'
import { NecessaryGradeInputs } from '../NecessaryGradeInputs/NecessaryGradeInputs'
import * as S from './style'

export function Section() {
  const [period, setPeriod] = useState('')

  function handlePeriod({ PeriodOfTime }: PeriodProps) {
    setPeriod(PeriodOfTime)
  }
  return (
    <S.SectionStyled>
      <header>
        <h1>Calculadora de Notas</h1>
        <img src="src\assets\MathOperations.svg" alt="Ícone de operações" />
      </header>

      <div className="buttonSpace">
        <Button title="Calc. Bimestre" />
        <Button title="Calc. Trimestre" />
      </div>

      <div className="divWithBackground">
        <GradeInputs PeriodOfTime={'bi'} />
        <NecessaryGradeInputs PeriodOfTime={'bi'} />
      </div>
    </S.SectionStyled>
  )
}
