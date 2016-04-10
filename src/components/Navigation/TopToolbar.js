import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Appbar from 'muicss/lib/react/appbar';

const TopToolbar = (props) => (
  <Appbar>
    <table width="100%">
      <tbody>
       <tr style={{verticalAlign: 'middle'}}>
         <td className="mui--appbar-height">HOWMUCH</td>
       </tr>
      </tbody>
    </table>
  </Appbar>
);

TopToolbar.propTypes = {
};

export default TopToolbar;
