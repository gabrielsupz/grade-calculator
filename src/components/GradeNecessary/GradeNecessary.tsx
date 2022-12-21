import React, { useState } from 'react'
import { AverageResponseBox } from '../AverageResponseBox/AverageResponseBox'
import { GradeBox } from '../GradeBox/GradeBox'

import * as S from './style'

export function GradeNecessary() {
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
