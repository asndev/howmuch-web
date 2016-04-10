import React from 'react';
import ActivityDayList from 'components/ActivityDayList';

import Panel from 'muicss/lib/react/panel';

const ActivityList = (props) => {
  const { activities } = props;
  if (!activities) {
    console.log('No Activities', props);
    return <h4>Loading...</h4>;
  }
  return <div>
    {
      Object.keys(activities).map(monthKey => {
        let month = activities[monthKey];
        return (
          <div key={monthKey}>
            <h3>{monthKey}
              <span className="mui--pull-right">{month.count}</span>
            </h3>
          <ActivityDayList days={month.data} />
          </div>
        )
      })
    }
  </div>;
};

export default ActivityList;
