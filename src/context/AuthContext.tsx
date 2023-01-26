import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'

import {
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../services/firebase'
import {
  createModels,
  CreateModelsProps,
  deleteModel,
  getModels
} from '../services/model'
const AuthContext = createContext(undefined as any)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState<any | null>(null)

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
  }

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('User:', currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  useEffect(() => {
    // ----PEGANDO MODELOS (BEM EXPLICATIVO KKK)
    getModels()

    // ----Criando Modelos
    // createModels(model)
  }, [])
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
