import React, { useState } from 'react'
import { GradeBox } from '../GradeBox/GradeBox'
import { AverageResponseBox } from '../AverageResponseBox/AverageResponseBox'
import * as S from './style'

export interface gradeProps {
  grade: number
}

export function GradeInputs() {
  const [value1, SetValue1] = useState()
  const [value2, SetValue2] = useState()
  const [value3, SetValue3] = useState()
  const [value4, SetValue4] = useState()

  function GetValue1(value) {
    SetValue1(value)
  }
  function GetValue2(value) {
    SetValue2(value)
  }
  function GetValue3(value) {
    SetValue3(value)
  }
  function GetValue4(value) {
    SetValue4(value)
  }

  return (
    <S.GradeInputBox>
      {' '}
      <S.InputsDiv>
        <h2>Nota Final </h2>

        <GradeBox devolveValor={GetValue1} numberGrade="1" />
        <GradeBox devolveValor={GetValue2} numberGrade="2" />
        <GradeBox devolveValor={GetValue3} numberGrade="3" />
        <GradeBox devolveValor={GetValue4} numberGrade="4" />
      </S.InputsDiv>
      <S.ResultDiv>
        <S.respH3>Resultado:</S.respH3>

        <AverageResponseBox
          v1={Number(value1)}
          v2={Number(value2)}
          v3={Number(value3)}
          v4={Number(value4)}
        />
      </S.ResultDiv>
    </S.GradeInputBox>
  )
}
