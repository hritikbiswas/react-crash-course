import React, { useEffect, useState } from 'react';

function CleanUpFunc() {
  const [show, setShow] = useState(false);

  
  function IncrementingCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => setCount((prev) => prev + 1), 2000);
      return ()=>{
        clearInterval(intervalId)
      }
      
    }, []);

    return <div>Count: {count}</div>;
  }

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Counter
      </button>
      {show && <IncrementingCount />}
    </div>
  );
}

export default CleanUpFunc;
