import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [click, setClick] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    console.log("use effect");
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return () => {
    window.removeEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }
  }, [])

  return (
    <>
      <button
        onClick={() => setClick((prevClick) => !prevClick)}
        className="btn"
      >
        show / hide
      </button>
      {click && (
        <div>
          <h2>window</h2>
          <h3>size is: {windowWidth}</h3>
        </div>
      )}
    </>
  );
};

export default ShowHide;
