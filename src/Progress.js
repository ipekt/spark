import React from 'react';
import styles from './App.scss';
import Calender from './Calender';
import Checkbox from './Checkbox';

const Progress = ({entries, onChange, isChecked}) => (

    <div className={ styles.sparkApp__progress }>
      <Checkbox onChange={onChange} isChecked={isChecked}/>
      <Calender entries={entries}/>
    </div>
);

export default Progress;
