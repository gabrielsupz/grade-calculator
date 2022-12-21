import React from 'react'
import * as S from './style'

interface ButtonProps {
  title: string
  onClick?: () => void
}

export function Button({ title, onClick }: ButtonProps) {
  return <S.stylizedButton onClick={onClick}>{title}</S.stylizedButton>
}
