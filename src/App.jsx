
import './App.css';
import React, {useState, useEffect} from 'react';
import { Callback } from './Components/Callback';
//mport { Interval } from './Components/Interval';
//import { Counter } from './Components/Counter';

function App() {
  const [UIcolor, setUIcolor] = useState(null);

  const getColor = (color) => {
    setUIcolor(color);
  }
  
  return (
    <div className="App">
      <div className='container' style={{background: `${UIcolor}`}}></div>
      {/* <Callback getColor={getColor}/> */}
    </div>
  );
}

export default App;
