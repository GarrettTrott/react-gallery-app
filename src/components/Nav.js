import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Nav(props) {
  return (
    <div>
      <nav class="main-nav">
        <ul>
          <li>
            <a href="#">Cats</a>
          </li>
          <li>
            <a href="#">Dogs</a>
          </li>
          <li>
            <a href="#">Computers</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

Nav.propTypes = {}

export default Nav
