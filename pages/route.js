import React from 'react'
import {Route, IndexRoute} from 'react-router'

import MyApp from './_app'
import Home from './index'
import Login from './login'
import Onboarding from './onboarding'

export default (
  <Route path="/" component={MyApp}>
    <IndexRoute component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/onboarding" component={Onboarding} />
  </Route>
)
