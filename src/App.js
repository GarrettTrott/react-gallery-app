import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

// Component imports
import apiKey from './config.js'
import Nav from './components/Nav'
import SearchForm from './components/SearchForm'
import Gallery from './components/Gallery'
import NotFound from './components/NotFound'

function App() {
  // Application State
  const [searchData, setSearchData] = useState([])
  const [query, setQuery] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [navData, setNavData] = useState({
    skydiving: [],
    drums: [],
    blacklabs: [],
  })

  const searchPictures = (search) => {
    setQuery(search)
  }

  const getFlickerData = async (topic) => {
    setIsLoading(true)
    try {
      const result = await axios(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`
      )
      return result
    } catch (err) {
      console.log(new Error(err))
    }
  }

  // Get API data for navigation links
  useEffect(() => {
    const getNavData = async () => {
      for (const topic in navData) {
        let result = await getFlickerData(topic)
        setNavData((prevState) => ({
          ...prevState,
          [topic]: result.data.photos.photo,
        }))
      }
      setIsLoading(false)
    }
    getNavData()
    // eslint-disable-next-line
  }, [])

  // Get photo search query
  useEffect(() => {
    const searchPhotos = async (topic) => {
      let result = await getFlickerData(topic)
      setSearchData(result.data.photos.photo)
      setIsLoading(false)
    }
    searchPhotos(query)
  }, [query])

  return (
    <Router>
      <div className="container">
        <SearchForm searchPictures={searchPictures} />
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Gallery data={searchData} isLoading={isLoading} />}
          />
          <Route
            path="/skydiving"
            render={() => (
              <Gallery data={navData.skydiving} isLoading={isLoading} />
            )}
          />
          <Route
            path="/drums"
            render={() => (
              <Gallery data={navData.drums} isLoading={isLoading} />
            )}
          />
          <Route
            path="/blacklabs"
            render={() => (
              <Gallery data={navData.blacklabs} isLoading={isLoading} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
