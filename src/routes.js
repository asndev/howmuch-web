import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/app'
import Dashboard from './containers/dashboard'
import ActivityList from './containers/activitylist'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard} />
    <Route path='/activitylist/:listid' component={ActivityList} />
  </Route>
)
