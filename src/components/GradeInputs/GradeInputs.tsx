import React, { useState } from 'react'
import { NoteBox } from '../NoteBox/NoteBox'
import * as S from './style'

export interface gradeProps {
  grade: number
}

export function GradeInputs() {
  return (
    <S.GradeInputBox>
      {' '}
      <>
        <h2>Nota Final </h2>

        <NoteBox numberNote="1" />
        <NoteBox numberNote="2" />
        <NoteBox numberNote="3" />
        <NoteBox numberNote="4" />
      </>
      <S.ResultDiv>
        <S.respH3>Resultado:</S.respH3>

        <S.ResponseBox>10</S.ResponseBox>
      </S.ResultDiv>
    </S.GradeInputBox>
  )
}
