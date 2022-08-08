import React, { useState } from "react";
import { useEffect } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Updating Items");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}

export default List;
