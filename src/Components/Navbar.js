import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
            <li className='list'><Link className='link' to='/'>Home</Link></li>
            <li className='list'><Link className='link' to='/blog'>Blog</Link></li>
            <li className='list'><Link className='link' to='/contact'>Contact Us</Link></li>
            <li className='list'><Link className='link' to='/about'>About Us</Link></li>
    </div>
  )
}

export default Navbar