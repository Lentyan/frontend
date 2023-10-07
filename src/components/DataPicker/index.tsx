'use client';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';

import React, { useState } from 'react';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';

import './DataPicker.scss';


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DataPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  registerLocale('ru', ru);
  return (
    <DatePicker selected={startDate} locale="ru" onChange={(date: any) => setStartDate(date)} />
  );
};

export default DataPicker;