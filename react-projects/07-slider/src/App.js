import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

// al darle de nuevo click se almacena, pero que, que se almacena

function App() {
  const [position, setPosition] = useState(0);
  const [startMoving, setStartMoving] = useState(true);
  const { id, image, name, title, quote } = data[position];

  function checkPosition(index) {
    if (index > data.length - 1) {
      return 0;
    }
    if (index < 0) {
      return data.length - 1;
    }
    return index;
  }

  const startTime = () => {
    setTimeout(() => {
      setPosition((prev) => checkPosition(prev + 1));
      setStartMoving((prev) => !prev);
    }, 2000);
  };

  useEffect(() => {
    console.log("useEffect");
    clearTimeout(startTime);
    // startTime();
  }, [startMoving]);

  console.log("render");

  // en lugar de que siga corriendo, quiero hacer que se muevan a la derecha o izquierda.
  // tengo que poner todos en un solo contenedor, limitar el contenedor a una medida y poner el elemento que se muetsra que cubra el 100% de esa medida.
  // al darle click debo activar alguna forma de transicion

  return (
    <>
      <button
        style={{ width: "100px", margin:"1rem" }}
        onClick={() => setPosition(checkPosition(position - 1))}
      >
        <FiChevronLeft />
      </button>
      <button
        style={{ width: "100px" }}
        onClick={() => setPosition(checkPosition(position + 1))}
      >
        <FiChevronRight />
      </button>
      <h3>{name}</h3>
      <img style={{ width: "200px", height: "200px" }} src={image} alt="" />
      <h4>{title}</h4>
      <p>{quote}</p>
    </>
  );
}

export default App;
