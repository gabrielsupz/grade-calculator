import React from 'react'
import * as S from './style'

interface ButtonProps {
  title: string
  onClick?: () => void
  id: string
  className?: string
}

export function Button({ title, onClick, id, className }: ButtonProps) {
  return (
    <S.stylizedButton className={className} id={id} onClick={onClick}>
      {title}
    </S.stylizedButton>
  )
}
