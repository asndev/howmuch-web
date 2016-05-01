import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

import { createActivityList } from '../actions';

class CreateList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listname: ''
    };
  }

  handleListChange(e) {
    this.setState({listname: e.target.value});
  }

  createList() {
    this.props.dispatch(createActivityList(this.state.listname));
    this.navigateBack();
  }

  navigateBack() {
    this.context.router.goBack();
  }

  render() {
    return (
      <div>
        <div style={{ margin: 'auto', width: '80%', paddingBottom: 25 }}>
          <h2>Create a new list</h2>
          <Input
            value={this.state.listname}
            onChange={this.handleListChange.bind(this)}
            label='' required={true} type='text' hint="list name" />
          <Button
            onClick={this.createList.bind(this)}
            variant="raised"
            color="danger">
            Create List
          </Button>
          <Button
            onClick={() => { this.navigateBack(); }}
            variant="raised"
            color="dark">
            Back
          </Button>
        </div>
      </div>
    );
  }
}

CreateList.contextTypes = {
  router: React.PropTypes.object.isRequired
};

CreateList.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

export default connect()(CreateList);
