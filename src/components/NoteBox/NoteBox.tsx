import React, { useState } from 'react'
import * as S from './style'

export interface NoteBoxProps {
  numberNote: string
}
export function NoteBox({ numberNote }: NoteBoxProps) {
  const min = 0
  const max = 100
  const [value, setValue] = useState(0)

  const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)))
    setValue(value)
  }

  return (
    <S.NoteBox>
      {' '}
      <label htmlFor={'number' + numberNote}>Nota {numberNote}: </label>
      <input
        onChange={handleChange}
        value={value}
        id={'number' + numberNote}
        type="number"
      />
    </S.NoteBox>
  )
}
