import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <h3><Link className='home' to="/">Home</Link></h3>
      <nav className='menuItems'>
        <ul className='navList'>
          <Link className='navList-item' to="/project">Project</Link>
          <Link className='navList-item' to="/skills">Skills</Link>
        </ul>
      </nav>
    </header>
  )
}
