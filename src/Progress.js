import React from 'react';
import Calender from './Calender';
import Checkbox from './Checkbox';

const Progress = ({entries, onChange, isChecked}) => (

    <div>
      <Calender entries={entries}/>
      <Checkbox onChange={onChange} isChecked={isChecked}/>
    </div>
);

export default Progress;

