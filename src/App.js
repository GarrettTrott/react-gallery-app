import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import axios from 'axios'
import apiKey from './config.js'

// Component imports
import Nav from './components/Nav'
import SearchForm from './components/SearchForm'
import Gallery from './components/Gallery'
import NotFound from './components/NotFound'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState()

  const searchPictures = (search) => {
    setQuery(search)
  }

  useEffect(() => {
    setIsLoading(true)
    const fetchPhotos = async () => {
      try {
        const result = await axios(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        )
        setData(result.data.photos.photo)
        setIsLoading(false)
      } catch (err) {
        console.log(new Error(err))
        setIsLoading(false)
      }
    }
    fetchPhotos()
  }, [query])

  return (
    <Router>
      <div className="container">
        <SearchForm searchPictures={searchPictures} />
        <Nav searchPictures={searchPictures} />
        {isLoading ? <h2>Loading...</h2> : null}
        <Switch>
          <Route exact path="/" render={() => <Gallery data={data} />} />
          <Route path="/skydiving" render={() => <Gallery data={data} />} />
          <Route path="/drums" render={() => <Gallery data={data} />} />
          <Route path="/blacklabs" render={() => <Gallery data={data} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
