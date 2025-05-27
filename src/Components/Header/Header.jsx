import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='container d-flex justify-content-between align-items-center w-100'>
        <img src={Logo} alt="Logo" className='logo' />
        <div className="menu-container">
          <NavLink to='/' className='txt-white txt-medium'>Home</NavLink>
          <NavLink to='/products' className='txt-white txt-medium'>Products</NavLink>
          <NavLink to='/about' className='txt-white txt-medium'>About</NavLink>
          <NavLink to='/contact' className='txt-white txt-medium'>Contact</NavLink>
          <button className='login-btn'>Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header