import React, { useState, useContext } from "react";
import { createContext } from "react";
import data from "../../../data";

const context = createContext();
const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <h3>prop drilling</h3>
      <context.Provider value={{ removePerson, people }}>
        <List />
      </context.Provider>
    </>
  );
};

const List = () => {
  const { people } = useContext(context);

  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson} = useContext(context);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
