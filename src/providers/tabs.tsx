import React, { ReactNode, useContext, useState } from 'react'
import { TabsContext } from '.'
import { CreateModelsProps } from '../services/model'
import { IsEditor, Period } from '../types'

interface IProps {
  children: ReactNode
}

export const TabsProvider = ({ children }: IProps) => {
  const [period, setPeriod] = useState<Period>('bi')
  const [inEditor, setInEditor] = useState<IsEditor>('Editor')

  const [inPersonalModel, setInPersonalModel] = useState<boolean>(false)
  const [personalModelForInfo, setPersonalModelForInfo] =
    useState<CreateModelsProps>({} as CreateModelsProps)

  const [showLoginInToAccess, setShowLoginInToAccess] = useState<boolean>(false)

  return (
    <TabsContext.Provider
      value={{
        showLoginInToAccess,
        setShowLoginInToAccess,
        personalModelForInfo,
        setPersonalModelForInfo,
        inPersonalModel,
        setInPersonalModel,
        inEditor,
        setInEditor,
        period,
        setPeriod
      }}
    >
      {children}
    </TabsContext.Provider>
  )
}
