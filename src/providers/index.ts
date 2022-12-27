import React, { SetStateAction, useState } from 'react'
import { Period, IsEditor, Pages } from '../types'

type UserCOntextType = {
  period: Period
  setPeriod: (value: Period) => void
  inEditor: IsEditor
  setInEditor: (value: IsEditor) => void
  inPage: Pages
  setInPage: (value: Pages) => void
}
const period: Period = 'bi'
const inEditor: IsEditor = 'Editor'
const inPage: Pages = 'workshop'
const initialValue = {
  period,
  setPeriod: () => {},
  inEditor,
  setInEditor: () => {},
  inPage,
  setInPage: () => {}
}
export const AuthContext = React.createContext<UserCOntextType>(initialValue)
