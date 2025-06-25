import React from 'react'
import Home from './Components/pages/Home'
import Product from './Components/pages/Product'
import Contact from './Components/pages/Contact'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App