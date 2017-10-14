import React from 'react';
import 'react-dates/initialize';
import {DayPickerSingleDateController} from 'react-dates';
import * as moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';

const Calender = ({entries}) => {
  const dates = {};
  entries.forEach(e => dates[moment(e.date).format("YYYY-MM-DD")] = e.completed);

  const highlightFunc = (day1) => {
    return  dates[day1.format("YYYY-MM-DD")];
  };

  return (
      <div>
        <DayPickerSingleDateController isDayHighlighted={highlightFunc} />
      </div>
  )
};

export default Calender;


