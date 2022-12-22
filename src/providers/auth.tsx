import React, { ReactNode, useContext, useState } from 'react'
import { AuthContext } from '.'
import { Period } from '../types'

interface IProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: IProps) => {
  const [period, setPeriod] = useState<Period>('bi')

  return (
    <AuthContext.Provider value={{ period: period, setPeriod: setPeriod }}>
      {children}
    </AuthContext.Provider>
  )
}
