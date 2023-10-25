
import './App.css';
import React, {useState, useEffect} from 'react';
//mport { Interval } from './Components/Interval';
//import { Counter } from './Components/Counter';

function App() {
  const [UIcolor, setUIcolor] = useState(null);
  
  return (
    <div className="App">
      <div className='container' style={{background: `${UIcolor}`}}>

      </div>

    </div>
  );
}

export default App;
