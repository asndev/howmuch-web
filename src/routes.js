import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Index from 'components/Index';
import ActivityListContainer from 'containers/ActivityListContainer';
import CreateList from 'containers/CreateList';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index} />
    <Route path='/activitylist/:listid' component={ActivityListContainer} />
    <Route path='/createlist' component={CreateList} />
  </Route>
);
