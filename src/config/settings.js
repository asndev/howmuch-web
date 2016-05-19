const SETTINGS = {
  development: {
    apiUrl: 'http://localhost:3030'
  },
  production: {
    apiUrl: 'https://howmuch-api.herokuapp.com'
  },
  testing: {
    apiUrl: 'https://howmuch-api.herokuapp.com'
  }
}

const env = process.env.NODE_ENV || 'development'

export default SETTINGS[env]
