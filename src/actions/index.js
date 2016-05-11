import fetch from 'isomorphic-fetch'

export const DO_LOGIN = 'DO_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

// TODO use apisauce
const apiUrl = 'http://howmuch-api.herokuapp.com/v1'

function receiveLogin (payload) {
  return {
    type: RECEIVE_LOGIN,
    payload
  }
}

export function doLogin (email, password) {
  return dispatch => {
    return fetch('http://howmuch-api.herokuapp.com/signin', {
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
