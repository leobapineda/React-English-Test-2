import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [cate, setCate] = useState(items);

  let a = [];

  items.forEach((item) => {
    if (!a.includes(item.category)) {
      a.push(item.category);
    }
  });

  function filterRecipes(text) {
    if (text) {
      const newRecipes = items.filter((item) => item.category === text);
      setCate(newRecipes);
      return
    }
    return setCate(items)
  }
  return (
    <>
      <div>
        <button onClick={() => filterRecipes()}>allllllllllllll</button>
        {a.map((item) => {
          return (
            <Categories filterRecipes={filterRecipes} key={item} text={item} />
          );
        })}
      </div>
      {cate.map((item) => {
        return <Menu key={item.id} {...item} />;
      })}
    </>
  );
}

export default App;
