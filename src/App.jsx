import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(() => count + 1);
  };
  // const decrease =() => {
  //   setCount(() => count - 1)
  // }

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

export default App;
