import React, { PropTypes } from 'react';

import { doLogin } from '../actions';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  doLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      this.props.dispatch(doLogin(email, password));
    }
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Form>
          <Input
            value={this.state.email}
            onChange={this.handleEmailChange.bind(this)}
            label='' required={true} type='email' hint="username" />
          <Input
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
            label='' required={true} type='password' hint="password" />
          <Button variant="raised" onClick={this.doLogin.bind(this)}>Login</Button>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default LoginForm;
