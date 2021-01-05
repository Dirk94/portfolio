import React from 'react'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import HomePage from './home/HomePage'
import PortfolioPage from './portfolio/PortfolioPage'

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/portfolio'}>
            <PortfolioPage />
          </Route>
          <Route path={'/'}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
