import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import ModalDateTimePicker from './ModalDateTimePicker';
import Component from './Component';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Component />
  );
};

export default App;