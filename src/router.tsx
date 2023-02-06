import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { Home } from './pages/Home/Home'
import { Editor } from './pages/Editor/Editor'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/grade-calculator/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  )
}
