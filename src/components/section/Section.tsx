import React, { useState } from 'react'
import { Period } from '../../types'
import { Button } from '../Button/Button'
import { GradeInputs } from '../GradeInputs/GradeInputs'
import { NecessaryGradeInputs } from '../NecessaryGradeInputs/NecessaryGradeInputs'
import * as S from './style'

export function Section() {
  const [period, setPeriod] = useState<Period>('bi')

  if (period === 'bi') {
    document.getElementById('buttonBi')?.classList.add('active')
    document.getElementById('buttonTri')?.classList.remove('active')
  }
  if (period === 'tri') {
    document.getElementById('buttonTri')?.classList.add('active')
    document.getElementById('buttonBi')?.classList.remove('active')
  }

  return (
    <S.SectionStyled>
      <header>
        <h1>Calculadora de Notas</h1>
        <img src="src\assets\MathOperations.svg" alt="Ícone de operações" />
      </header>

      <div id="buttonSpace">
        <Button
          className="active"
          id="buttonBi"
          onClick={() => setPeriod('bi')}
          title="Calc. Bimestre"
        />
        <Button
          id="buttonTri"
          onClick={() => setPeriod('tri')}
          title="Calc. Trimestre"
        />
      </div>

      <div className="divWithBackground">
        <GradeInputs PeriodOfTime={period} />
        <NecessaryGradeInputs PeriodOfTime={period} />
      </div>
    </S.SectionStyled>
  )
}
