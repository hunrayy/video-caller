import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RoomPage from './components/RoomPage'
function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:roomId' element={<RoomPage />} />
    </Routes>
      
    </>
  )
}

export default App
