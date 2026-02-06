import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="custom-container d-flex justify-center py-3">
        <nav className='d-flex gap-3'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/view-book'>View Book</NavLink>
          <NavLink to='/add-book'>Add Book</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar