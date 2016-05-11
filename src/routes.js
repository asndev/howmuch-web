import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/app'
import Root from './root'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Root} />
  </Route>
)
