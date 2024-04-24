import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ModalDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default ModalDateTimePicker;