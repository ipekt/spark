import React from 'react';
import Calender from './Calender';
import Checkbox from './Checkbox';

class Progress extends React.Component {
  render () {
    return (
      <div>
        <Calender/>
        <Checkbox/>
      </div>
    )
  }
}

export default Progress;
