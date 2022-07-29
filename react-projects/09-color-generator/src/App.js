// import SingleColor from "./SingleColor";
// import Values from "values.js";
// import userEvent from "@testing-library/user-event";
import React, { useState, useEffect, useRef } from "react";
import { hexToRgb, rgbToHsl } from "./utils";
import Values from "values.js";

function App() {
  const colorInput = useRef("");
  const [searchColor, setSearchColor] = useState("#f00");
  const [colourPalette, setColourPalette] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    console.log(searchColor);
    if (searchColor !== "#" && searchColor.length > 3) {
      console.log("searchColor !== #");
      const rgb = hexToRgb(searchColor);
      if (isNaN(rgb[0])) {
        console.log("isNan");
        return;
      }
      console.log(rgb);
      const hsl = rgbToHsl(rgb);
      console.log(hsl);
      const color = new Values(`hsl(${correctSyntax(hsl)} / 1)`);
      const realPalete = color.all(20);
      setColourPalette(realPalete);
      console.log(realPalete);
      console.log("set new realPalete");
    }
    return
  }, [searchColor]);

// el elemento no regresa NaN, entonces sigue avanzando

  useEffect(() => {
    colorInput.current.focus();
  }, [])

  function correctSyntax(array) {
    const h = `${array[0]}deg`;
    const s = `${array[1]}%`;
    const l = `${array[2]}%`;
    return `${h} ${s} ${l}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchColor(`#${colorInput.current.value}`);
  }

  console.log("render");
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Enter Color
          <input ref={colorInput} type="text" name="" id="" />
        </label>
        <button>Search</button>
      </form>
      <section className="color-container">
        {searchColor !== "" &&
          colourPalette.map((color, index) => {
            const { rgb } = color;
            return (
              <div
                style={{ backgroundColor: `rgb(${rgb})` }}
                className="color"
                key={index}
              >{`${rgb[0]} ${rgb[1]}, ${rgb[2]}`}</div>
            );
          })}
      </section>
    </>
  );
}

export default App;
