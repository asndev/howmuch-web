import React from 'react';

const ActivitiesList = (props) => {
  const { activities } = props;
  return (<div>
    {
      Object.keys(activities).map(activityKey => {
      let activity = activities[activityKey];
      return (
        <h5 style={{ paddingLeft: 60 }} key={activityKey}>
          {new Date(activity.timestamp).toUTCString()}
        </h5>
      );
    })
  }
  </div>);
};

export default ActivitiesList;
