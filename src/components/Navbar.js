import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="main-nav-link">
          <h1 className="header-primary">MoCooking</h1>
        </Link>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link to="/create" className="main-nav-link">
                Create Recipe
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
