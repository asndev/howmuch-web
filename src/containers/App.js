import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Container from 'muicss/lib/react/container';
import TopToolbar from 'components/Navigation/TopToolbar';
import LoginForm from 'components/LoginForm';
import Panel from 'muicss/lib/react/panel';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props.settings;
    const content = user ? this.props.children : <LoginForm dispatch={this.props.dispatch} />;

    return (
      <div>
        <TopToolbar />
        <Container fluid={true}>
          <Panel style={{
              margin: 'auto',
              marginTop: 20,
              minHeight: '85vh',
              maxWidth: 500 }}>
            {content}
          </Panel>
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
