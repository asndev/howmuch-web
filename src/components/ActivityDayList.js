import React from 'react';
import ActivitiesList from 'components/ActivitiesList.js';

const ActivityDayList = (props) => {
  const { days } = props;
  return (<div>
    {
      Object.keys(days).map(dayKey => {
      let day = days[dayKey];
      return (
        <div key={dayKey}>
          <h4 style={{ paddingLeft: 30 }}>{dayKey}
            <span className="mui--pull-right">{day.count}</span>
          </h4>
          <ActivitiesList activities={day.data} />
        </div>
      );
    })
  }
  </div>)
};

export default ActivityDayList;
