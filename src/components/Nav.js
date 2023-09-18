import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav id="navbar">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/kanban"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Kanban
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Contact
      </NavLink>
    </nav>
  )
}

export default Nav