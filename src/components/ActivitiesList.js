import React from 'react';

const ActivitiesList = (props) => {
  const { activities } = props;
  return (<div>
    {
      Object.keys(activities).map(activityKey => {
      let activity = activities[activityKey];
      return (
        <div style={{ padding: 16, paddingLeft: 60 }} key={activityKey}>
          {new Date(activity.timestamp).toUTCString()}
        </div>
      );
    })
  }
  </div>);
};

export default ActivitiesList;
