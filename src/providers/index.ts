import React from 'react'
import { CreateModelsProps } from '../services/model'
import { Period, IsEditor } from '../types'

type UserCOntextType = {
  period: Period
  setPeriod: (value: Period) => void
  inEditor: IsEditor
  setInEditor: (value: IsEditor) => void
  inPersonalModel: boolean
  setInPersonalModel: (value: boolean) => void
  personalModelForInfo: CreateModelsProps
  setPersonalModelForInfo: ({}: CreateModelsProps) => void
  showLoginInToAccess: boolean
  setShowLoginInToAccess: (value: boolean) => void
}
const period: Period = 'bi'
const inEditor: IsEditor = 'Editor'

const initialValue = {
  period: period,
  setPeriod: () => {},
  inEditor: inEditor,
  setInEditor: () => {},
  inPersonalModel: false,
  setInPersonalModel: () => {},
  personalModelForInfo: {} as CreateModelsProps,
  setPersonalModelForInfo: () => {},
  showLoginInToAccess: false,
  setShowLoginInToAccess: () => {}
}
export const TabsContext = React.createContext<UserCOntextType>(initialValue)
