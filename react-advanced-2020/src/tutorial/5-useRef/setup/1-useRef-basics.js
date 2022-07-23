import React, { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {

  const refContainer = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(refContainer.current.value);
  }

  useEffect(() => {
    refContainer.current.focus()
  })

  console.log("render componenet");

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input ref={refContainer} name="age" type="text" />
          <button>submit </button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
