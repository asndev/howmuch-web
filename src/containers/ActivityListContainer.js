import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';

import { fetchActivityList, createActivity } from '../actions';
import Button from 'muicss/lib/react/button';
import ActivityList from 'components/Activities/ActivityList';

class ActivityListContainer extends React.Component {

    componentWillMount() {
      this.props.dispatch(fetchActivityList(this.props.params.listid));
    }

    createActivity() {
      this.props.dispatch(createActivity(this.props.params.listid));
    }

    render() {
      const activities =
        this.props.activitylists.activities[this.props.params.listid] || {};
      if (!activities || !activities.details) {
          return <h3>Loading ...</h3>;
      }
      return (
        <div>
          <div style={{ margin: 'auto', width: '60%', paddingBottom: 25 }}>
            <Button
              onClick={this.createActivity.bind(this)}
              variant="raised"
              color="danger">
              Create Activity
            </Button>
          </div>
          <div>Activities<br/>
            <strong>{activities.details.activityCount}</strong>
          </div>
          <div>Average<br/>
            <strong>{activities.details.averagePerDay}</strong>
          </div>
          <ActivityList activities={activities.data} />
        </div>
      );
    }
}

ActivityListContainer.propTypes = {
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

export default connect(mapStateToProps)(ActivityListContainer);
