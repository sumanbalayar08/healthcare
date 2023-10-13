import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './Screens/About'
import Contact from './Screens/Contact'
import Home from './Screens/Home'
import Footer from './Components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
  <Home/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App