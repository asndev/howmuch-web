import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';

import { fetchActivityList } from '../actions';
import Button from 'muicss/lib/react/button';

class ActivityList extends React.Component {

    componentWillMount() {
      this.props.dispatch(fetchActivityList(this.props.params.listid));
    }

    render() {
      const activity =
        this.props.activitylists.activities[this.props.params.listid] || {};
      return (
        <div>
          {/*<h2>{activity.name}</h2>
          <h3>{this.props.params.listid}</h3>
          {
            activity.data && activity.data.map(e => {
              return <div key={e._id}>{e.timestamp}</div>;
            })
          }*/}
        </div>
      );
    }
}

ActivityList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activitylists: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { activitylists } = state;

  return {
    activitylists
  };
}

export default connect(mapStateToProps)(ActivityList);
