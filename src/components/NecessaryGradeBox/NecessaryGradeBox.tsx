import * as S from './style'
import React, { useEffect, useState } from 'react'

export interface valuesProps {
  v1: number
  v2: number
  v3?: number | undefined
}

export function NecessaryGradeBox({ v1, v2, v3 }: valuesProps) {
  if (v3 != undefined) {
    const total = v1 + v2 + v3
    var response = 300 - total
    var avarage = response / 2
    var NotNaN = avarage > 0 ? avarage : 0

    var responseCorrect = Number.isInteger(NotNaN) ? NotNaN : NotNaN.toFixed(1)
  } else {
    const total = v1 + v2 * 2
    var response = 360 - total
    var avarage = response / 3
    var NotNaN = avarage > 0 ? avarage : 0

    var responseCorrect = Number.isInteger(NotNaN) ? NotNaN : NotNaN.toFixed(1)
  }

  return (
    <S.ResponseBox>
      {responseCorrect > 100 ? 'Impossível' : responseCorrect}
    </S.ResponseBox>
  )
}
