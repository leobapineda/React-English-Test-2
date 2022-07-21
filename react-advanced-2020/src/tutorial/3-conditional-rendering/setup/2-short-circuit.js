import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <button onClick={() => setClick((prevState) => !prevState)}>
        click me
      </button>
      <h1>{click ? "click is true" : "click is false"}</h1>
      {click && <h1>button is clicked</h1>}
    </>
  );
};

export default ShortCircuit;
