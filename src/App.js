import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

import './App.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/search'>
            <SearchPage />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
