import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const joinRgb = rgb.join(", ");
  const hexColor = rgbToHex(...rgb);

  function copyText() {
    setAlert(true);
    navigator.clipboard.writeText(hexColor);
  }

  useEffect(() => {
    console.log("useEffect");
    const timer = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <article
      onClick={() => copyText()}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${joinRgb})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
      {alert && <p>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
