import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/skydiving">Skydiving</NavLink>
          </li>
          <li>
            <NavLink to="/drums">Drums</NavLink>
          </li>
          <li>
            <NavLink to="/blacklabs">Blacklabs</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
