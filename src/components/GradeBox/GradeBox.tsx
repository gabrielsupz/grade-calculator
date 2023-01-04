import React, { useState } from 'react'
import * as S from './style'

export interface GradeBoxProps {
  numberGrade: string
  returnValue: (value: number) => void
}
export function GradeBox({ returnValue, numberGrade }: GradeBoxProps) {
  const min = 0
  const max = 100
  const [value, setValue] = useState(0)

  const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)))
    setValue(value)

    returnValue(value)
  }

  return (
    <S.GradeBox>
      {' '}
      <label htmlFor={'number' + numberGrade}>Nota {numberGrade}: </label>
      <input
        onChange={handleChange}
        value={value}
        id={'number' + numberGrade}
        type="number"
      />
    </S.GradeBox>
  )
}
