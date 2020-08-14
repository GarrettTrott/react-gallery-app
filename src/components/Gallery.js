import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function Gallery({ data }) {
  let pics = data.map((pic) => (
    <Photo
      key={pic.id}
      url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
    />
  ))
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{pics}</ul>
    </div>
  )
}

Gallery.propTypes = {
  data: PropTypes.array,
}
export default Gallery
