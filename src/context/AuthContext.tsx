import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'

import {
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from './firebase'
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
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
