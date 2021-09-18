import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './_app'
import Home from './index'
import Login from './Login'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/some/where" component={Login} />
  </Route>
)
