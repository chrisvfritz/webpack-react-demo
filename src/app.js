import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import createHistory from 'history/lib/createBrowserHistory'
import styles from './app.styl'

import Home from './pages/home'
import About from './pages/about'
import Team from './pages/team'

React.render((
  <Router history={createHistory()}>
    <Route path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/team' component={Team}/>
  </Router>
), document.body)
