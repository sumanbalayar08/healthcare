import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './Screens/About'
import Contact from './Screens/Contact'
import Home from './Screens/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App