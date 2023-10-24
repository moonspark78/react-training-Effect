import React, {useState, useEffect} from 'react';
import "../App.css"

export const Counter = () => {
    const [count, setCount] = useState (0)


    useEffect(() =>{
      console.log("The count is: ", count);
  
    },[count])

  return (
    <div>
        <h1>Count: {count}</h1>
        <button className='toto ' onClick={() => setCount(count - 1 ) }> 
          Décrémente
        </button>
        <button className='toto' onClick={() => setCount(count + 1 )}>
          Imcrémente
        </button>
    </div>
  )
}
