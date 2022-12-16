import React, { useState } from 'react'
import { GradeBox } from '../GradeBox/GradeBox'

import * as S from './style.js'
import { NecessaryGradeBox } from '../NecessaryGradeBox/NecessaryGradeBox'

export interface gradeProps {
  grade: number
}

export function NecessaryGradeInputs() {
  const [value1, SetValue1] = useState()
  const [value2, SetValue2] = useState()
  const [value3, SetValue3] = useState()

  function GetValue1(value) {
    SetValue1(value)
  }
  function GetValue2(value) {
    SetValue2(value)
  }
  function GetValue3(value) {
    SetValue3(value)
  }

  return (
    <S.GradeInputBox>
      {' '}
      <>
        <h2>Nota necessária </h2>

        <GradeBox devolveValor={GetValue1} numberGrade="1" />
        <GradeBox devolveValor={GetValue2} numberGrade="2" />
        <GradeBox devolveValor={GetValue3} numberGrade="3" />
      </>
      <S.ResultDiv>
        <S.respH3>Presisa de:</S.respH3>

        <NecessaryGradeBox
          v1={Number(value1)}
          v2={Number(value2)}
          v3={Number(value3)}
        />
      </S.ResultDiv>
    </S.GradeInputBox>
  )
}
