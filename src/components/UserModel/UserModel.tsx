import React, { useState } from 'react'
import { pessoalModelContents } from '../EditorInputs/EditorInputs'
import * as S from './style'

export function UserModel(name: string) {
  return <S.ModelBox>{name}</S.ModelBox>
}
