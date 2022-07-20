import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [pals, setPals] = useState(data);

  const birthdayPals = pals.map((pal) => {
    return <List removePal={removePalFunc} key={pal.id} {...pal} />;
  });

  function removePalFunc(id) {
    console.log(id);
    const newPals = pals.filter((pal) => pal.id !== id);
    setPals(newPals);
  }

  function removePals() {
    setPals([]);
  }

  function addPals() {
    setPals(data);
  }

  return (
    <>
      <div>{birthdayPals.length} birthdays today</div>
      {birthdayPals}
      <button onClick={removePals}>Remove all items</button>
      <button onClick={addPals}>Add all items</button>
    </>
  );
}

export default App;
