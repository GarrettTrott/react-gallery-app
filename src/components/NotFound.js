import React from 'react'
import PropTypes from 'prop-types'

function NotFound(props) {
  return (
    <div>
      <li class="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    </div>
  )
}

NotFound.propTypes = {}

export default NotFound
