
import React, {useState, useEffect} from 'react';

export const Interval = () => {
    const [count, setCount] = useState (0)


    useEffect(() =>{
      
  
    },[])

  return (
    <div>
        <h1>Count: {count}</h1>
        <button className='toto ' onClick={() => setCount(count + 1 ) }> 
          Go Up
        </button>
    </div>
  )
}
