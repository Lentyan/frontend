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
    <DatePicker
      // dateFormat="Pp"
      selected={startDate}
      locale="ru"
      onChange={(date: any) => setStartDate(date)} />
  );
};

export default DataPicker;


// Календарь от дизайнеров

// import { Component } from 'react';
// import { DateUtils } from '@skyscanner/backpack-web/bpk-component-calendar';
// import BpkScrollableCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-scrollable-calendar';
// import format from 'date-fns/format';

// const formatDateFull = (date: number | Date) => format(date, 'EEEE, do MMMM yyyy');
// const formatMonth = (date: number | Date) => format(date, 'MMMM yyyy');
// const daysOfWeek = [
//   {
//     name: 'Sunday',
//     nameAbbr: 'Sun',
//     index: 0,
//     isWeekend: true,
//   },
//   // ...
// ];

// export default class App extends Component {
//   constructor() {
//     super();
//     console.log(CALENDAR_SELECTION_TYPE);
//     this.state = {
//       selectionConfiguration: {
//         type: CALENDAR_SELECTION_TYPE.range,
//         date: null,
//       },
//     };
//   }

//   handleDateSelect = (date: any) => {
//     this.setState({
//       selectionConfiguration: {
//         type: this.props.selectionConfiguration.type,
//         date: date,
//       },
//     });
//   };

//   render() {
//     return (
//       <BpkScrollableCalendar
//         id="calendar"
//         onDateSelect={this.handleDateSelect}
//         formatMonth={formatMonth}
//         formatDateFull={formatDateFull}
//         daysOfWeek={daysOfWeek}
//         weekStartsOn={1}
//         selectionConfiguration={this.state.selectionConfiguration}
//         // Subtract one day from today's date to make today selectable by default
//         minDate={DateUtils.addDays(new Date(), -1)}
//         maxDate={DateUtils.addMonths(new Date(), 12)}
//       />
//     );
//   }
// }