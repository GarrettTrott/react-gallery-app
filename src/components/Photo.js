import React from 'react'
import PropTypes from 'prop-types'

function Photo(props) {
  return (
    <li>
      <img src={props.url} alt={props.title} />
    </li>
  )
}

Photo.propTypes = {
  url: PropTypes.string,
}

export default Photo
