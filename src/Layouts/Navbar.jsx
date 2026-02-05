import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/view-book'>View Book</NavLink>
          <NavLink to='/add-book'>Add Book</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar