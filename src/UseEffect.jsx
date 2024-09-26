import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    
  const increase = () => {
    setCount(() => count + 1);
  };

    return (
        <>
          <div style={{ textAlign: "center" }}>
            <h1>useState hook</h1>
            <button onClick={increase}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount((count) => count - 1)}>-</button>
          </div>
        </>
      );
}

export default UseEffect