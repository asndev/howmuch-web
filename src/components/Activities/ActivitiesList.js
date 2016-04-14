import React from 'react';

const ActivitiesList = (props) => {
  const { activities } = props;
  return (<div>
    {
      activities.map(activity => {
      return (
        <div style={{ padding: 16, paddingLeft: 60 }} key={activity._id}>
          {new Date(activity.timestamp).toUTCString()}
        </div>
      );
    })
  }
  </div>);
};

ActivitiesList.propTypes = {
  activities: React.PropTypes.array.isRequired
};

export default ActivitiesList;
