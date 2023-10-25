
import './App.css';
import React, {useState, useEffect} from 'react';
import { Callback } from './Components/Callback';
//mport { Interval } from './Components/Interval';
//import { Counter } from './Components/Counter';

function App() {
  const [borderColor, setBorderColor] = useState('');
  const [fillColor, setFillColor] = useState('');

  const handleColorChange = (color) => {
    setFillColor(color);
  };

  return (
    <div className="App">
      <div className='container' style={{background: `${borderColor}`, backgroundColor: fillColor,}}></div>
      <Callback onColorChange={handleColorChange} /> 
    </div>
  );
}

export default App;
