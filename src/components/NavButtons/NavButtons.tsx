import React from 'react'
import { useAuth } from '../../providers/hook'

import { Button } from '../Button/Button'
import * as S from './style'

interface NavProps {
  inWorkshop?: true
}

export function NavButtons({ inWorkshop }: NavProps) {
  const { period, setPeriod, inEditor, setInEditor } = useAuth()

  if (inWorkshop) {
    if (inEditor === 'Editor') {
      document.getElementById('button1')?.classList.add('active')
      document.getElementById('button2')?.classList.remove('active')
    }
    if (inEditor === 'Modelos') {
      document.getElementById('button2')?.classList.add('active')
      document.getElementById('button1')?.classList.remove('active')
    }
    return (
      <S.NavButtons>
        <Button
          className="active"
          id="button1"
          onClick={() => setInEditor('Editor')}
          title="Editor"
        />
        <Button
          id="button2"
          onClick={() => setInEditor('Modelos')}
          title="Meus Modelos"
        />
      </S.NavButtons>
    )
  }

  if (period === 'bi') {
    document.getElementById('button1')?.classList.add('active')
    document.getElementById('button2')?.classList.remove('active')
  }
  if (period === 'tri') {
    document.getElementById('button2')?.classList.add('active')
    document.getElementById('button1')?.classList.remove('active')
  }
  return (
    <S.NavButtons>
      <Button
        className="active"
        id="button1"
        onClick={() => setPeriod('bi')}
        title="Calc. Bimestre"
      />
      <Button
        id="button2"
        onClick={() => setPeriod('tri')}
        title="Calc. Trimestre"
      />
    </S.NavButtons>
  )
}
