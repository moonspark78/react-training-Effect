
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState (0)


  useEffect(() =>{
    console.log("The count is: ", count);

  },[count])

  return (
    <div className="App">
      <h1>Count: {count}</h1>
        <button style={{width: "100px"}, {height: "40px"}} onClick={() => setCount(count - 1 ) }> 
          Décrémente
        </button>
        <button style={{width: "100px"}, {height: "40px"}} onClick={() => setCount(count + 1 )}>
          Imcrémente
        </button>

        <hr></hr>
    </div>
  );
}

export default App;
