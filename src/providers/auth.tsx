import React, { ReactNode, useContext, useState } from 'react'
import { AuthContext } from '.'
import { IsEditor, Pages, Period } from '../types'

interface IProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: IProps) => {
  const [period, setPeriod] = useState<Period>('bi')
  const [inEditor, setInEditor] = useState<IsEditor>('Editor')

  return (
    <AuthContext.Provider value={{ inEditor, setInEditor, period, setPeriod }}>
      {children}
    </AuthContext.Provider>
  )
}
