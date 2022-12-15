import * as S from './style'
import React, { useState } from 'react'

export interface valuesProps {
  v1: number
  v2: number
  v3: number
  v4: number
}

export function ResponseBox({ v1, v2, v3, v4 }: valuesProps) {
  const total = v1 + v2 + v3 + 2 * v4
  var avarage = total / 5
  var response = avarage > 0 ? avarage : 0

  var responseCorrect = Number.isInteger(response)
    ? response
    : response.toFixed(1)

  return <S.ResponseBox>{responseCorrect}</S.ResponseBox>
}
