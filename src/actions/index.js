import fetch from 'isomorphic-fetch'

export const DO_LOGIN = 'DO_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const RECEIVE_SIGNOUT = 'RECEIVE_SIGNOUT'

export const CREATE_ACTIVITYLIST = 'CREATE_ACTIVITYLIST'
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY'
export const RECEIVE_ATIVITY_LISTS = 'RECEIVE_ATIVITY_LISTS'
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES'

// TODO use apisauce
// const apiUrl = 'https://howmuch-api.herokuapp.com/v1'
const apiUrl = 'http://localhost:3030/v1'

function receiveLogin (payload) {
  return {
    type: RECEIVE_LOGIN,
    payload
  }
}

export function signOut () {
  return { type: RECEIVE_SIGNOUT }
}

export function doLogin (email, password) {
  return dispatch => {
    return fetch('http://localhost:3030/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(response => response.json())
    .then(json => dispatch(receiveLogin(json)))
  }
}

function receiveActivities (payload) {
  return {
    type: RECEIVE_ACTIVITIES,
    payload
  }
}

export function fetchActivityList (id) {
  return (dispatch, getState) => {
    const user = getState().settings.user
    if (!user) {
      console.warn('No User')
      dispatch(signOut())
      return
    }
    return fetch(`${apiUrl}/activitylist/${id}/activity`, {
      headers: {
        'authorization': user.token
      }
    })
    .then(response => response.json())
    .then(json => {
      if (json.success) {
        dispatch(receiveActivities({ _id: id, ...json }))
      } else {
        dispatch(signOut())
      }
    })
  }
}

export function createActivity (id) {
  return (dispatch, getState) => {
    const user = getState().settings.user
    if (!user) {
      console.warn('No User')
      dispatch(signOut())
      return
    }

    return fetch(`${apiUrl}/activitylist/${id}/activity`, {
      headers: {
        'authorization': user.token
      },
      method: 'POST'
    })
    .then(() => { dispatch(fetchActivityList(id)) })
  }
}

export function createActivityList (name) {
  return (dispatch, getState) => {
    const user = getState().settings.user
    if (!user) {
      console.warn('No User')
      dispatch(signOut())
      return
    }

    return fetch(`${apiUrl}/activitylist`, {
      headers: {
        'authorization': user.token
      },
      method: 'POST',
      body: JSON.stringify({
        name
      })
    })
    .then(() => dispatch(fetchActivityLists()))
  }
}

function receiveActivityLists (payload) {
  return {
    type: RECEIVE_ATIVITY_LISTS,
    payload
  }
}

export function fetchActivityLists () {
  return (dispatch, getState) => {
    const user = getState().settings.user
    if (!user) {
      console.warn('No User')
      dispatch(signOut())
      return
    }
    return fetch(`${apiUrl}/activitylist`, {
      headers: {
        'authorization': user.token
      }
    })
    .then(response => response.json())
    .then(json => {
      if (json.success) {
        dispatch(receiveActivityLists(json))
      } else {
        dispatch(signOut())
      }
    })
  }
}
