import React, { ReactNode, useContext, useState } from 'react'
import { TabsContext } from '.'
import { IsEditor, Period } from '../types'

interface IProps {
  children: ReactNode
}

export const TabsProvider = ({ children }: IProps) => {
  const [period, setPeriod] = useState<Period>('bi')
  const [inEditor, setInEditor] = useState<IsEditor>('Editor')

  return (
    <TabsContext.Provider value={{ inEditor, setInEditor, period, setPeriod }}>
      {children}
    </TabsContext.Provider>
  )
}
