import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { doLogin } from '../actions'

class LoginForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      email: 'a@a.de',
      password: 'foo'
    }
  }

  handleEmailChange (e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange (e) {
    this.setState({password: e.target.value})
  }

  doLogin (e) {
    e.preventDefault()
    const { email, password } = this.state
    if (email && password) {
      this.props.dispatch(doLogin(email, password))
    }
  }

  validate () {
    const email = this.state.email.length
    const pw = this.state.password.length
    return email > 1 && pw > 1 ? 'success' : 'error'
  }

  render () {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <FormGroup
            controlId='loginform'
            validationState={this.validate()}
          >
            <FormControl
              type='text'
              value={this.state.email}
              placeholder='email'
              onChange={this.handleEmailChange.bind(this)}
            />
            <FormControl
              type='password'
              value={this.state.password}
              placeholder='password'
              onChange={this.handlePasswordChange.bind(this)}
            />
          </FormGroup>

          <Button type='submit' onClick={this.doLogin.bind(this)}>
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(LoginForm)
