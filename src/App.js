
import { useState } from 'react';
import './App.css';
import Datepicker from './Datepicker';
import CreateWork from './CreateWork/CreateWork';

function App() {
  const [date , setDate] = useState(new Date() )
  console.log(date)
  return (
    <div className="App">
         <Datepicker /> 
    </div>
  );
}

export default App;
