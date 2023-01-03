import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Home'
import { AuthProvider } from './providers/auth'
import { Editor } from './pages/Editor/Editor'
import './styles/global.css'
import { Router } from './router'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
)
