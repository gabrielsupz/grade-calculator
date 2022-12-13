import React, { useState } from 'react'
import * as S from './style'

interface ButtonProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return <S.stylizedButton>{title}</S.stylizedButton>
}
