import React, { useState } from 'react'
import * as S from './style'

export interface GradeWeightBoxProps {
  numberGrade: string
}
export function GradeWeightBox({ numberGrade }: GradeWeightBoxProps) {
  const min = 1
  const max = 9
  const [value, setValue] = useState(1)

  const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)))
    setValue(value)
  }

  return (
    <S.GradeWeightBox>
      {' '}
      <label htmlFor={'weight' + numberGrade}>Nota {numberGrade}: </label>
      <input
        onChange={handleChange}
        value={value}
        id={'weight' + numberGrade}
        type="number"
      />
    </S.GradeWeightBox>
  )
}
