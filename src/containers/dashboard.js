import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
  render () {
    return (
      <h2>Logged in</h2>
    )
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Dashboard)
