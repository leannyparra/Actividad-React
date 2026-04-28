//import React from 'react'
import "./Navbar.css";

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="app">SportWear</h2>
      <ul>
        <li className='nav-links'>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export default Navbar

