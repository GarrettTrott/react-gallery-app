import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav({ searchPictures }) {
  const selectPictures = (topic) => {
    searchPictures(topic)
  }

  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/skydiving" isActive={selectPictures('Skydiving')}>
              Skydiving
            </NavLink>
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
