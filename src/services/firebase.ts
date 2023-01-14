import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0NN4MzL1cbcSl1eccQKx3HVg4Xyk-EGk',
  authDomain: 'grade-calculator-24ed6.firebaseapp.com',
  projectId: 'grade-calculator-24ed6',
  storageBucket: 'grade-calculator-24ed6.appspot.com',
  messagingSenderId: '29173795505',
  appId: '1:29173795505:web:1033bf56cb09eed41a3090'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const provider = new GoogleAuthProvider()

export const auth = getAuth(app)

// Acesso ao banco de dados do app

export const firestore = getFirestore(app)
