import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/app'
import Dashboard from './containers/dashboard'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard} />
  </Route>
)
