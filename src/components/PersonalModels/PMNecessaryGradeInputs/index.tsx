import React, { useState } from 'react'
import { CreateModelsProps } from '../../../services/model.js'
import { Period } from '../../../types/index.js'
import { GradeBox } from '../../GradeBox/GradeBox'
import { NecessaryGradeBox } from '../../NecessaryGradeBox/NecessaryGradeBox.js'
import { PMNecessaryGradeBox } from '../PMNecessaryGradeBox/PMNecessaryGradeBox.js'

import * as S from './style.js'

//Inputs calculando a nota necessária para passar

export function PMNecessaryGradeInputs(model: CreateModelsProps) {
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

  if (model.modelType === 'bimestre') {
    return (
      <S.GradeInputBox>
        {' '}
        <S.InputsDiv>
          <h3 className="h2">Nota necessária </h3>

          <GradeBox returnValue={GetValue1} numberGrade="1" />
          <GradeBox returnValue={GetValue2} numberGrade="2" />
          <GradeBox returnValue={GetValue3} numberGrade="3" />
        </S.InputsDiv>
        <S.ResultDiv>
          <S.respH3>Precisa de:</S.respH3>

          <PMNecessaryGradeBox
            v1={Number(value1)}
            v2={Number(value2)}
            v3={Number(value3)}
            weight1={Number(model.weight1)}
            weight2={Number(model.weight2)}
            weight3={Number(model.weight3)}
            weight4={Number(model.weight4)}
            average={Number(model.average)}
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
          <h3 className="h2">Nota necessária </h3>

          <GradeBox returnValue={GetValue1} numberGrade="1" />
          <GradeBox returnValue={GetValue2} numberGrade="2" />
        </S.InputsDiv>
        <S.ResultDiv>
          <S.respH3>Precisa de:</S.respH3>

          <PMNecessaryGradeBox
            v1={Number(value1)}
            v2={Number(value2)}
            weight1={Number(model.weight1)}
            weight2={Number(model.weight2)}
            weight3={Number(model.weight3)}
            average={Number(model.average)}
          />
        </S.ResultDiv>
      </S.GradeInputBox>
    )
  }

  return <></>
}
