import React from 'react';
import Calender from './Calender';
import Checkbox from './Checkbox';

const Progress = ({entries}) => (

    <div>
      {console.log(entries)}
      <Calender entries={entries}/>
      <Checkbox/>
    </div>
);

export default Progress;

