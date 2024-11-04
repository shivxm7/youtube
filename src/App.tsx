import React from 'react'
import Home from './pages/Home'
import Search from './pages/Search'
import Watch from './pages/Watch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/search' element={<Search />}/>
      <Route path='/watch/:id' element={<Watch />}/>
    </Routes>
    </BrowserRouter>
  )
}
