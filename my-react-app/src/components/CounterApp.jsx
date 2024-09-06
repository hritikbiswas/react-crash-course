import React, { useState } from 'react'

function CounterApp() {
    const [count,setCount]=useState(0);
  return (
    <div>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
    </div>
  )
}

export default CounterApp