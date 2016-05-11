import { combineReducers } from 'redux'
import settings from './settings'
import activitylists from './activitylists'

const rootReducer = combineReducers({
  settings,
  activitylists
})

export default rootReducer
