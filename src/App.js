
import { useState } from 'react';
import './App.css';
import Datepicker from './Datepicker';
import CreateWork from './CreateWork/CreateWork';
import Swiper from './Swiper';
import {FreeMode } from 'swiper/modules'

function App() {
  const [date , setDate] = useState(new Date() )
  console.log(FreeMode)
  return (
    <div className="App">
        <Swiper
        modules = {[FreeMode]}
        freemode = {{enabled : true }}
        direction = {'vertical'}
         />
    </div>
  );
}

export default App;
