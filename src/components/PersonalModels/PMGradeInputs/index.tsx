import React, { useState } from 'react'

import * as S from './style'

import { GradeBox } from '../../GradeBox/GradeBox'
import { AverageResponseBox } from '../../AverageResponseBox/AverageResponseBox'
import { CreateModelsProps } from '../../../services/model'
import { PMAverageResponseBox } from '../PMAvarageResponseBox/PMAverageResponseBox'

export function PMGradeInputs(model: CreateModelsProps) {
  const [value1, SetValue1] = useState<number>()
  const [value2, SetValue2] = useState<number>()
  const [value3, SetValue3] = useState<number>()
  const [value4, SetValue4] = useState<number>()

  function GetValue1(value: number) {
    SetValue1(value)
  }
  function GetValue2(value: number) {
    SetValue2(value)
  }
  function GetValue3(value: number) {
    SetValue3(value)
  }
  function GetValue4(value: number) {
    SetValue4(value)
  }

  if (model.modelType === 'bimestre') {
    return (
      <S.GradeInputBox>
        {' '}
        <S.InputsDiv>
          <h3>Nota Final </h3>

          <GradeBox returnValue={GetValue1} numberGrade="1" />
          <GradeBox returnValue={GetValue2} numberGrade="2" />
          <GradeBox returnValue={GetValue3} numberGrade="3" />
          <GradeBox returnValue={GetValue4} numberGrade="4" />
        </S.InputsDiv>
        <S.ResultDiv>
          <S.respH3>Resultado:</S.respH3>

          <PMAverageResponseBox
            v1={Number(value1)}
            v2={Number(value2)}
            v3={Number(value3)}
            v4={Number(value4)}
            weight1={Number(model.weight1)}
            weight2={Number(model.weight2)}
            weight3={Number(model.weight3)}
            weight4={Number(model.weight4)}
          />
        </S.ResultDiv>
      </S.GradeInputBox>
    )
  }

  if (model.modelType === 'trimestre') {
    return (
      <S.GradeInputBox>
        {' '}
        <S.InputsDiv>
          <h3>Nota Final </h3>

          <GradeBox returnValue={GetValue1} numberGrade="1" />
          <GradeBox returnValue={GetValue2} numberGrade="2" />
          <GradeBox returnValue={GetValue3} numberGrade="3" />
        </S.InputsDiv>
        <S.ResultDiv>
          <S.respH3>Resultado:</S.respH3>

          <PMAverageResponseBox
            v1={Number(value1)}
            v2={Number(value2)}
            v3={Number(value3)}
            weight1={Number(model.weight1)}
            weight2={Number(model.weight2)}
            weight3={Number(model.weight3)}
          />
        </S.ResultDiv>
      </S.GradeInputBox>
    )
  }

  return <></>
}
