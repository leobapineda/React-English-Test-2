import React, { useState } from "react";
const ErrorExample = () => {
  const steps = [
    "1 Welcome",
    "2 Let's begin",
    "3 First please sing up",
    "4",
    "5",
  ];
  const [index, setIndex] = useState(0);

  function nextStep() {
    setIndex((prevIndex) => prevIndex + 1);
    if (index === 4) {
      setIndex(0);
    }
  }

  return (
    <>
      <h2>{steps[index]}</h2>
      <button className="btn" onClick={nextStep}>
        Next step
      </button>
    </>
  );
};

export default ErrorExample;
