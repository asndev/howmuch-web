import React from 'react';
import ActivityDayList from 'components/Activities/ActivityDayList';

import Panel from 'muicss/lib/react/panel';
import Divider from 'muicss/lib/react/divider';

const ActivityList = (props) => {
  const { activities } = props;
  if (!activities) {
    return <h4>Loading...</h4>;
  }
  return (<div>
    {
      Object.keys(activities).map(monthKey => {
        let month = activities[monthKey];
        return (<div key={monthKey}>
          <h3>{monthKey}
            <span className="mui--pull-right">{month.count}</span>
          </h3>
          <Divider/>
          <ActivityDayList days={month.data} />
        </div>);
      })
    }
  </div>);
};

ActivityList.propTypes = {
  activities: React.PropTypes.object.isRequired
};

export default ActivityList;
