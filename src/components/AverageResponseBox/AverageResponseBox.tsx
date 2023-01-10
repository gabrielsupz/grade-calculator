import * as S from './style'
import React from 'react'

export interface valuesProps {
  v1: number
  v2: number
  v3: number
  v4?: number | undefined
}

export function AverageResponseBox({ v1, v2, v3, v4 }: valuesProps) {
  if (v4 != undefined) {
    const total = v1 + v2 + v3 + 2 * v4
    var avarage = total / 5
    var response = avarage > 0 ? avarage : 0

    var responseCorrect = Number.isInteger(response)
      ? response
      : response.toFixed(1)

    if (responseCorrect > 59) {
      document.getElementById('response')?.classList.remove('red')
      document.getElementById('response')?.classList.add('blue')
    } else {
      document.getElementById('response')?.classList.remove('blue')
      document.getElementById('response')?.classList.add('red')
    }
  } else {
    const total = v1 + v2 * 2 + v3 * 3
    var avarage = total / 6
    var response = avarage > 0 ? avarage : 0

    var responseCorrect = Number.isInteger(response)
      ? response
      : response.toFixed(1)
  }

  return <S.ResponseBox id="response">{responseCorrect}</S.ResponseBox>
}
