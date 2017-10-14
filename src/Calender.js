import React from 'react';
import 'react-dates/initialize';
import {DayPickerSingleDateController} from 'react-dates';
import * as moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import './Calender.css';

const Calender = ({entries}) => {

  const highlightFunc = (day1) => {
    const entry = entries[day1.format("YYYY-MM-DD")];
     if (entry) {
       return entry.completed;
     }
  };

  return (
      <div>
        <DayPickerSingleDateController isDayHighlighted={highlightFunc} hideKeyboardShortcutsPanel={true} />
      </div>
  )
};

export default Calender;
