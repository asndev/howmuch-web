import { combineReducers } from 'redux';
import {
  SOME_ACTION,
  OPEN_NAVIGATION,
  RECEIVE_LOGIN,
  RECEIVE_ATIVITY_LISTS,
  RECEIVE_ACTIVITIES
} from '../actions';

function entities(state = {}, action) {
  switch (action.type) {
    case SOME_ACTION:
      return Object.assign({}, state, {
          receivedAt: action.receivedAt
      });
    default:
      return state;
  }
}

const settingsInitialState = {
  user: null
};
const testState = {
  user: {
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NzA2YmU0YWVkZTg1OTViMDAyYmEzMWMiLCJpYXQiOjE0NjAyMDkxOTk5MzEsImV4cCI6MTQ2MDI5NTU5OTkzMX0.TErHn4vkIsdm2Xo3G9GaqY23jeWP6wJZgumks2bKm30"
  }
};
function settings(state = testState, action) {
  switch (action.type) {
    case RECEIVE_LOGIN:
      if (action.payload.success) {
        return {
          ...state,
          user: {
            token: action.payload.token
          }
        };
      }
      return state;
    default:
      return state;
  }
}


function activitylists(state ={ data: [], activities: {}}, action) {
  let newActivities = {
    ...state.activities
  };
  switch (action.type) {
    case RECEIVE_ATIVITY_LISTS:
      return {
        ...state,
        data: action.payload.data
      };
    case RECEIVE_ACTIVITIES:
      newActivities[action.payload._id] = action.payload.data;
      return {
        ...state,
        activities: Object.assign({}, state.activities, newActivities)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  entities,
  settings,
  activitylists
});

export default rootReducer;