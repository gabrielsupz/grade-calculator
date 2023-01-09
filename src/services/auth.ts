import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, provider } from '.'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export function createUser() {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)

        const user = result.user

        resolve(user)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message

        const email = error.customData.email

        const credential = GoogleAuthProvider.credentialFromError(error)

        reject(errorMessage)
      })
  })
}
