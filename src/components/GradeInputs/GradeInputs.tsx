import React from 'react'
import * as S from './style'

export function GradeInputs() {
  return (
    <S.GradeInputBox>
      {' '}
      <>
        <h2>Nota Final</h2>

        <S.NoteBox>
          {' '}
          <label htmlFor="nota1">Nota 1: </label>
          <input id="nota1" type="number" />
        </S.NoteBox>
        <S.NoteBox>
          {' '}
          <label htmlFor="nota1">Nota 2: </label>
          <input id="nota3" type="number" />
        </S.NoteBox>
        <S.NoteBox>
          {' '}
          <label htmlFor="nota1">Nota 3: </label>
          <input id="nota3" type="number" />
        </S.NoteBox>
        <S.NoteBox>
          {' '}
          <label htmlFor="nota1">Nota 4: </label>
          <input id="nota4" type="number" />
        </S.NoteBox>
      </>
      <S.ResultDiv>
        <S.respH3>Resultado:</S.respH3>

        <S.ResponseBox>10</S.ResponseBox>
      </S.ResultDiv>
    </S.GradeInputBox>
  )
}
