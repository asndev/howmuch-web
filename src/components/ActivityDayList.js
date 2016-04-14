import React from 'react';
import Section from 'components/Section/Section';

import ActivitiesList from 'components/ActivitiesList.js';

const ActivityDayList = (props) => {
  const { days } = props;
  return (<div>
    {
      Object.keys(days).map(dayKey => {
        const day = days[dayKey];
        return (<div key={dayKey}>
          <Section title={'(' + day.count + ') ' + dayKey}>
            <ActivitiesList activities={day.data} />
          </Section>
        </div>);
      })
  }
  </div>);
};

ActivityDayList.propTypes = {
  days: React.PropTypes.object.isRequired
};

export default ActivityDayList;
