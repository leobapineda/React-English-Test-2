import React from "react";

const Categories = ({ text, filterRecipes }) => {
  return <button onClick={() => filterRecipes(text)}>{text}</button>;
};

export default Categories;
