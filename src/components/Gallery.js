import React, { Component } from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

export class Gallery extends Component {
  static propTypes = {}

  render() {
    return (
      <div class="photo-container">
        <h2>Results</h2>
        <ul></ul>
      </div>
    )
  }
}

export default Gallery
