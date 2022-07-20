import React, { useState } from "react";

const UseStateObject = () => {
  const personObj = {
    name: "Leo",
    age: 24,
    message: "Can",
  };

  const [person, setPerson] = useState(personObj);
  console.log(person);
  function changeMessage() {
    setPerson((prevPerson) => {
      if (prevPerson.name === "Leo") {
        return {
          ...prevPerson,
          name: "Pineda",
        };
      }
      // else {
      return {
        ...prevPerson,
        name: "Leo",
      };
      // }
    });
  }
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
