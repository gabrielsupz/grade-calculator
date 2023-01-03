import React from 'react'

import { useAuth } from '../../providers/hook'

import { EditorInputs } from '../EditorInputs/EditorInputs'

import { GradeInputs } from '../GradeInputs/GradeInputs'
import { Header } from '../Header/Header'
import { NavButtons } from '../NavButtons/NavButtons'

import { NecessaryGradeInputs } from '../NecessaryGradeInputs/NecessaryGradeInputs'
import * as S from './style'

interface SectionProps {
  inWorkshop?: boolean
}

export function Section({ inWorkshop }: SectionProps) {
  const { period } = useAuth()

  if (inWorkshop === true) {
    return (
      <S.SectionStyled>
        <Header />

        <NavButtons inWorkshop={true} />

        <div className="divWithBackground">
          <EditorInputs />
        </div>
      </S.SectionStyled>
    )
  }

  return (
    <S.SectionStyled>
      <Header />

      <NavButtons />

      <div className="divWithBackground">
        <GradeInputs PeriodOfTime={period} />
        <NecessaryGradeInputs PeriodOfTime={period} />
      </div>
    </S.SectionStyled>
  )
}
