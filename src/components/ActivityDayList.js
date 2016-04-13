import React from 'react';
import Section from 'components/Section/Section';

import ActivitiesList from 'components/ActivitiesList.js';

const ActivityDayList = (props) => {
  const { days } = props;
  return (<div>
    {
      Object.keys(days).map(dayKey => {
        const day = days[dayKey];
        const count = <span className="mui--pull-right">{day.count}</span>;
        return (<div key={dayKey}>
          <Section title={dayKey}>
            <ActivitiesList activities={day.data} />
          </Section>
        </div>);
      })
  }
  </div>)
};

export default ActivityDayList;
