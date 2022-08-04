import React from "react";
import { useThemeHook } from "./contexts/DarkThemeContext";

function Theme() {
  const { theme, ThemeToogle } = useThemeHook();
  console.log(useThemeHook());
  const inlineStyle = {
    width: "200px",
    height: "200px",
    border: "1px solid red",
    backgroundColor: theme ? "#000" : "#eee",
  };
  return (
    <>
      <button onClick={ThemeToogle}>change</button>
      <div style={inlineStyle}></div>
    </>
  );
}

export default Theme;
