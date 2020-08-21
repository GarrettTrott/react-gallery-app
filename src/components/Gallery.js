import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function Gallery({ data, isLoading }) {
  let pics = data.map((pic) => (
    <Photo
      key={pic.id}
      url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
    />
  ))
  if (data.length === 0 && isLoading === false) {
    return (
      <div className="not-found">
        <h2>No Results Found</h2>
        <h3>You search did not return any results. Please try again.</h3>
      </div>
    )
  } else {
    return (
      <div className="photo-container">
        {isLoading ? <h2>Loading...</h2> : <h2>Results</h2>}
        <ul>{pics}</ul>
      </div>
    )
  }
}

Gallery.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
}
export default Gallery
