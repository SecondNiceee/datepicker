import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';



function Datepicker() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} />
      привет, как дела
    </div>
  );
}
export default Datepicker