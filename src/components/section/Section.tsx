import React, { useState } from 'react'
import { Period } from '../../types'
import { Button } from '../Button/Button'
import { GradeInputs } from '../GradeInputs/GradeInputs'
import { NecessaryGradeInputs } from '../NecessaryGradeInputs/NecessaryGradeInputs'
import * as S from './style'

export function Section() {
  const [period, setPeriod] = useState<Period>('bi')

  return (
    <S.SectionStyled>
      <header>
        <h1>Calculadora de Notas</h1>
        <img src="src\assets\MathOperations.svg" alt="Ícone de operações" />
      </header>

      <div className="buttonSpace">
        <Button onClick={() => setPeriod('bi')} title="Calc. Bimestre" />
        <Button onClick={() => setPeriod('tri')} title="Calc. Trimestre" />
      </div>

      <div className="divWithBackground">
        <GradeInputs PeriodOfTime={period} />
        <NecessaryGradeInputs PeriodOfTime={period} />
      </div>
    </S.SectionStyled>
  )
}
