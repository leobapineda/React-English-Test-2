import React, { useState, useRef } from "react";
import data from "./data";
function App() {
  const [lorem, setLorem] = useState([]);
  const length = useRef(0);

  function handleSubmit(e) {
    e.preventDefault();
    const paragrapgNumber = Number(length.current.value);
    if (paragrapgNumber <= 0) {
      setLorem(data.slice(0, 1));
      return;
    } else if (paragrapgNumber > data.length) {
      setLorem(data.slice(0, data.length));
      return;
    }
    setLorem(data.slice(0, paragrapgNumber));
  }

  console.log("render");
  return (
    <section className="section-center">
      <form className="lorem-form" onSubmit={(e) => handleSubmit(e)}>
        <label > Paragraphs
          <input defaultValue={0} ref={length} type="number" />
        </label>
        <button className="btn">Generate</button>
      </form>
      <article className="lorem'text" >
        {lorem.map((item, index) => {
          return (
            <div key={index}>
              <h5>{index + 1}</h5>
              <p>{item}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}
export default App;
