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
  const [searchData, setSearchData] = useState([])
  const [navData, setNavData] = useState({
    skydiving: [],
    drums: [],
    blacklabs: [],
  })
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState()

  const searchPictures = (search) => {
    setQuery(search)
  }

  const searchPhotos = async (topic) => {
    setIsLoading(true)
    try {
      const result = await axios(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`
      )
      await setSearchData(result.data.photos.photo)
      setIsLoading(false)
    } catch (err) {
      console.log(new Error(err))
      setIsLoading(false)
    }
  }

  const getNavData = async () => {
    setIsLoading(true)
    for (let topic in navData) {
      try {
        const result = await axios(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`
        )
        setNavData({ ...navData, [topic]: result.data.photos.photo })
      } catch (err) {
        console.log(new Error(err))
      }
    }
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    searchPhotos(query)
  }, [query])

  useEffect(() => {
    getNavData()
  }, [])

  return (
    <Router>
      <div className="container">
        <SearchForm searchPictures={searchPictures} />
        <Nav />
        {isLoading ? <h2>Loading...</h2> : null}
        <Switch>
          <Route exact path="/" render={() => <Gallery data={searchData} />} />
          <Route
            path="/skydiving"
            render={() => <Gallery data={navData.skydiving} />}
          />
          <Route
            path="/drums"
            render={() => <Gallery data={navData.drums} />}
          />
          <Route
            path="/blacklabs"
            render={() => <Gallery data={navData.blacklabs} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
