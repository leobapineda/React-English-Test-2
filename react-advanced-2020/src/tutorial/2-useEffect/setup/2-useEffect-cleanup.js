import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    console.log("lol");
    window.addEventListener("resize", add);
    return () => {
      window.removeEventListener("resize", add);
    };
  }, []);

  function add() {
    setW(window.innerWidth);
  }
  return <h2>{w}</h2>;
};

export default UseEffectCleanup;
