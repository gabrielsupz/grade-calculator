import React, { useState } from 'react'
import { AverageResponseBox } from '../AverageResponseBox/AverageResponseBox'
import { GradeBox } from '../GradeBox/GradeBox'

import * as S from './style'

export interface gradeProps {
  grade: number
}

export function GradeNecessary() {
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
        <h2>Nota Final </h2>

        <GradeBox devolveValor={GetValue1} numberGrade="1" />
        <GradeBox devolveValor={GetValue2} numberGrade="2" />
        <GradeBox devolveValor={GetValue3} numberGrade="3" />
      </>
      <S.ResultDiv>
        <S.respH3>Resultado:</S.respH3>

        <AverageResponseBox
          v1={Number(value1)}
          v2={Number(value2)}
          v3={Number(value3)}
        />
      </S.ResultDiv>
    </S.GradeInputBox>
  )
}
