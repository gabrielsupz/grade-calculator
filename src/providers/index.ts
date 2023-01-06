import React from 'react'
import { Period, IsEditor } from '../types'

type UserCOntextType = {
  period: Period
  setPeriod: (value: Period) => void
  inEditor: IsEditor
  setInEditor: (value: IsEditor) => void
}
const period: Period = 'bi'
const inEditor: IsEditor = 'Editor'

const initialValue = {
  period: period,
  setPeriod: () => {},
  inEditor: inEditor,
  setInEditor: () => {}
}
export const AuthContext = React.createContext<UserCOntextType>(initialValue)
