import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Axios from 'axios'

// Component imports
import Nav from './components/Nav'
import SearchForm from './components/SearchForm'
import Gallery from './components/Gallery'
import NotFound from './components/NotFound'

// import config for Api Key
import apiKey from './config.js'

function App() {
  
  const [photos, setPhotos] = useState({}) 
  const [isLoading, setIsLoading] = useState(true)

  const fetchPhotos = async (query) => {}

  useEffect = (() => {

  }

  return (
    <Router>
      <SearchForm />
      <Nav />
      <Switch>
        <Route to="/skydiving" />
        <NavLink to="/drumsets" />
        <NavLink to="/blacklabs" />
      </Switch>
    </Router>
  )
}

export default App
