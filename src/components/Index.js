import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';

import { fetchActivityLists } from '../actions';


class Index extends React.Component {

    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.props.dispatch(fetchActivityLists());
    }

    render() {
      return (<div>
        <Panel>
          <h1>hello</h1>
        </Panel>
        <ul className='mui-list--unstyled'>
        {
          this.props.activitylists.data.map(e => {
            return (<li key={e._id}>
              <Button
                onClick={() => {browserHistory.push('/activitylist/' + e._id );}}
                size='large' variant='raised' style={{ width: '100%' }}>
                {e.name}
              </Button>
            </li>);
          })
        }
        </ul>
      </div>);
    }
}

Index.propTypes = {
  activitylists: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { activitylists } = state;

  return {
    activitylists
  };
}

export default connect(mapStateToProps)(Index);
