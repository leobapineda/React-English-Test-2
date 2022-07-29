import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#ff00ff").all(10));

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors)
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  return (
    <>
      <section className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="color">Enter a color</label>
          <input
            className={error ? "error" : null}
            id="color"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#00ff00"
          />
          <button className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} hex={color.hex} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
