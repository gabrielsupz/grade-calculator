import * as S from './style'
import React, { useEffect, useState } from 'react'

export interface valuesProps {
  v1: number
  v2: number
  v3?: number | undefined
  weight1: number
  weight2: number
  weight3: number
  weight4?: number

  average: number
}

export function PMNecessaryGradeBox({
  v1,
  v2,
  v3,
  weight1,
  weight2,
  weight3,
  weight4,
  average
}: valuesProps) {
  if (v3 != undefined && weight4 != undefined) {
    const total = v1 * weight1 + v2 * weight2 + v3 * weight3
    const averageWithWeight =
      average * weight1 +
      average * weight2 +
      average * weight3 +
      average * weight4
    var response = averageWithWeight - total

    var resposeAverage = response / weight4
    var NotNaN = resposeAverage > 0 ? resposeAverage : 0

    var responseCorrect = Number.isInteger(NotNaN) ? NotNaN : NotNaN.toFixed(1)
  } else {
    const total = v1 * weight1 + v2 * weight2
    const averageWithWeight =
      average * weight1 + average * weight2 + average * weight3
    var response = averageWithWeight - total

    var resposeAverage = response / weight3
    var NotNaN = resposeAverage > 0 ? resposeAverage : 0

    var responseCorrect = Number.isInteger(NotNaN) ? NotNaN : NotNaN.toFixed(1)
  }

  return (
    <S.ResponseBox>
      {responseCorrect > 100 ? 'Impossível' : responseCorrect}
    </S.ResponseBox>
  )
}
