import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Odd10 from './pages/Odd09'
import Odd14 from './pages/Odd14'
import Odd16 from './pages/Odd16'
import Even14 from './pages/Even14'
import Even16 from './pages/Even16'
import Odd09 from './pages/Odd09'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/even14' element={<Even14 />} />
        <Route path='/even16' element={<Even16 />} />
        <Route path='/odd9' element={<Odd09 />} />
        <Route path='/odd14' element={<Odd14 />} />
        <Route path='/odd16' element={<Odd16 />} />
      </Routes>
    </div>
  )
}

export default App