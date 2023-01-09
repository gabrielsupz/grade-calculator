import React, { useState } from 'react'
import { GradeBox } from '../GradeBox/GradeBox'

import * as S from './style.js'
import { NecessaryGradeBox } from '../NecessaryGradeBox/NecessaryGradeBox'
import { Period } from '../../types'
interface NecessaryGradeInputsProps {
  PeriodOfTime: Period
}

//Inputs calculando a nota necessária para passar

export function NecessaryGradeInputs({
  PeriodOfTime
}: NecessaryGradeInputsProps) {
  const [value1, setValue1] = useState<number>()
  const [value2, setValue2] = useState<number>()
  const [value3, setValue3] = useState<number>()

  function GetValue1(value: number) {
    setValue1(value)
  }
  function GetValue2(value: number) {
    setValue2(value)
  }
  function GetValue3(value: number) {
    setValue3(value)
  }

  if (PeriodOfTime === 'bi') {
    return (
      <S.GradeInputBox>
        {' '}
        <S.InputsDiv>
          <h2>Nota necessária </h2>

          <GradeBox returnValue={GetValue1} numberGrade="1" />
          <GradeBox returnValue={GetValue2} numberGrade="2" />
          <GradeBox returnValue={GetValue3} numberGrade="3" />
        </S.InputsDiv>
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
  if (PeriodOfTime === 'tri') {
    return (
      <S.GradeInputBox>
        {' '}
        <S.InputsDiv>
          <h2>Nota necessária </h2>

          <GradeBox returnValue={GetValue1} numberGrade="1" />
          <GradeBox returnValue={GetValue2} numberGrade="2" />
        </S.InputsDiv>
        <S.ResultDiv>
          <S.respH3>Presisa de:</S.respH3>

          <NecessaryGradeBox v1={Number(value1)} v2={Number(value2)} />
        </S.ResultDiv>
      </S.GradeInputBox>
    )
  }

  return <></>
}
