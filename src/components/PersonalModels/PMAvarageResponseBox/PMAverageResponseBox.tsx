import * as S from './style'
import React from 'react'

export interface valuesProps {
  v1: number
  v2: number
  v3: number
  v4?: number | undefined
  weight1: number
  weight2: number
  weight3: number
  weight4?: number | undefined
}

export function PMAverageResponseBox({
  v1,
  v2,
  v3,
  v4,
  weight1,
  weight2,
  weight3,
  weight4
}: valuesProps) {
  if (weight4 != undefined && v4 != undefined) {
    const total = v1 * weight1 + v2 * weight2 + v3 * weight3 + v4 * weight4
    var avarage = total / (weight1 + weight2 + weight3 + weight4)
    var response = avarage > 0 ? avarage : 0

    var responseCorrect = Number.isInteger(response)
      ? response
      : response.toFixed(1)
    if (responseCorrect > 59.9) {
      document.getElementById('response')?.classList.remove('red')
      document.getElementById('response')?.classList.add('blue')
    } else {
      document.getElementById('response')?.classList.remove('blue')
      document.getElementById('response')?.classList.add('red')
    }
  } else {
    if (weight3 != undefined) {
      const valor1 = v1 * weight1
      const valor2 = v2 * weight2
      const valor3 = v3 * weight3

      const total = valor1 + valor2 + valor3

      var avarage = total / (weight1 + weight2 + weight3)
      var response = avarage > 0 ? avarage : 0

      var responseCorrect = Number.isInteger(response)
        ? response
        : response.toFixed(2)
      if (responseCorrect > 59.9) {
        document.getElementById('response')?.classList.remove('red')
        document.getElementById('response')?.classList.add('blue')
      } else {
        document.getElementById('response')?.classList.remove('blue')
        document.getElementById('response')?.classList.add('red')
      }
    } else {
      responseCorrect = 0
    }
  }

  return <S.ResponseBox id="response">{responseCorrect}</S.ResponseBox>
}
