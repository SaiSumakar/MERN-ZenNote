import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NoteDetail from './pages/NoteDetail'
import CreatePage from './pages/CreatePage'

function App() {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetail />} />
      </Routes>
    </div>
  )
}

export default App
