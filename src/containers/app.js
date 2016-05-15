import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import NavigationBar from '../components/NavigationBar'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends React.Component {
  render () {
    const { user } = this.props.settings
    const content = user ? this.props.children : <LoginForm />
    const title = user ? `Hello ${user.email}` : 'please log in'

    return (
      <div>
        <NavigationBar />
        <Grid>
          <Row>
            <Col xs={12}>
              <h2>{title}</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              {content}
            </Col>
          </Row>
        </Grid>
      </div>)
  }
}

App.propTypes = {
  children: PropTypes.object,
  settings: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const select = (store) => {
  const { settings } = store
  return { settings }
}

export default connect(select)(App)
