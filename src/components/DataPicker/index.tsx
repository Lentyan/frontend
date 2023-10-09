'use client';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';

import React, { useState } from 'react';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';

import './DataPicker.scss';


const DataPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 13);
    return date;
  });
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 13);

  registerLocale('ru', ru);
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      monthsShown={2}
      locale="ru"
      selectsRange
      minDate={minDate}
      maxDate={maxDate}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default DataPicker;
