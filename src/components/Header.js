import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <NavLink to='/' className="logo">FakeShop</NavLink>
      <nav>
        <NavLink to='/' className="navLink">Home</NavLink>
        <NavLink to='/Contact' className="navLink">Contact us</NavLink>
        <NavLink to='/About' className="navLink">About us</NavLink>
        <NavLink to='/Carrito' className="navLink">Carrito: 6</NavLink>
      </nav>
    </header>
  )
}

export default Header