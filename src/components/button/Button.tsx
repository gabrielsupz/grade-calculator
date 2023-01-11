import React, { Children } from 'react'
import { TbBrandGoogle } from 'react-icons/tb'
import * as S from './style'

interface ButtonProps {
  title: string
  onClick?: () => void
  id?: string
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  icon?: boolean
}

export function Button({
  type,
  title,
  onClick,
  id,
  className,
  icon
}: ButtonProps) {
  return (
    <S.stylizedButton
      type={type}
      className={className}
      id={id}
      onClick={onClick}
    >
      {title}
      {icon === true ? <TbBrandGoogle size={25} /> : ''}
    </S.stylizedButton>
  )
}
