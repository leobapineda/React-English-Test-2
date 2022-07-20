import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  function addCount() {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  }

  function subCount() {
    setCount((prevCount) => prevCount - 1);
  }

  const newCount = count;

  return (
    <>
      <h2>useState counter example</h2>;<h1>{count}</h1>
      <button onClick={subCount} className="btn">
        sub
      </button>
      <button onClick={addCount} className="btn">
        add
      </button>
    </>
  );
};

export default UseStateCounter;

// button

// screen
