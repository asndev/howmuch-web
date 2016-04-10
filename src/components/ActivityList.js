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
        console.log(activity);
      return (
        <div>
          {
            Object.keys(activity).map(key => {
              let m = activity[key];
              return (
                <div>
                  <h3>{key} ({m.count})</h3>
                  <div>
                    {
                      Object.keys(activity[key].data).map(k => {
                        let d = activity[key].data[k];
                        return (
                          <div>
                            <h4>{k} ({d.count})</h4>
                              {
                                Object.keys(d.data).map(a => {
                                  return (
                                    <h5>
                                      {new Date(d.data[a].timestamp).toUTCString()}
                                    </h5>
                                  );
                                })
                              }
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }
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
