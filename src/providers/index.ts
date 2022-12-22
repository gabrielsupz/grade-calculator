import React, { SetStateAction, useState } from 'react'
import { Period } from '../types'

type UserCOntextType = {
  period: Period
  setPeriod: (value: Period) => void
}
const period: Period = 'bi'

const initialValue = {
  period,
  setPeriod: () => {}
}
export const AuthContext = React.createContext<UserCOntextType>(initialValue)
