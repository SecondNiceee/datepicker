import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import './App.css';

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="datetime-picker">
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select Date & Time"
        calendarClassName="dark-calendar"
        className="dark-datepicker"
        wrapperClassName="dark-datepicker-wrapper"
      />
    </div>
  );
};

export default Datepicker;
