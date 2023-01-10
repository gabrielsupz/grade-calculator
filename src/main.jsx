import React from 'react'
import ReactDOM from 'react-dom/client'
import { TabsProvider } from './providers/tabs'

import './styles/global.css'
import { Router } from './router'
import { AuthContextProvider } from './context/AuthContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TabsProvider>
        <Router />
      </TabsProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
