import React from 'react'
import * as S from './style'

interface ButtonProps {
  title: string
  onClick?: () => void
  id?: string
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

export function Button({ type, title, onClick, id, className }: ButtonProps) {
  return (
    <S.stylizedButton
      type={type}
      className={className}
      id={id}
      onClick={onClick}
    >
      {title}
    </S.stylizedButton>
  )
}
