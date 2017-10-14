import React from 'react';
import styles from './App.scss';
import Calender from './Calender';
import Checkbox from './Checkbox';

const Progress = ({entries, onChange, isChecked}) => (

    <div className={ styles.sparkApp__progress }>
      <Calender entries={entries}/>
      <Checkbox onChange={onChange} isChecked={isChecked}/>
    </div>
);

export default Progress;
