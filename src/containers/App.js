import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Container from 'muicss/lib/react/container';
import TopToolbar from 'components/Navigation/TopToolbar';
import LoginForm from 'components/LoginForm';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props.settings;
    let content;
    if (user) {
      content = this.props.children;
    } else {
      content = <LoginForm dispatch={this.props.dispatch} />;
    }
    return (
      <div>
          <TopToolbar />
          <Container fluid={true}>
            {content}
         </Container>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { settings } = state;

  return {
    settings
  };
}

export default connect(mapStateToProps)(App);
