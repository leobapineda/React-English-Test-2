import React, { useReducer, useState } from "react";
// ---------->>>
import Modal from './Modal';
import data  from '../../../data';


const Index = () => {

  const ACTIONS = {
    ADD: "add",
    REMOVE: "remove",
    EMPTY: "empty",
  };

  function reducer(users, action) {
    switch (action.type) {
      case ACTIONS.ADD:
        console.log("add");
        return { data: [...users.data, action.payload], empty: false };
      case ACTIONS.REMOVE:
        console.log("remove");
        return { data: action.payload, empty: false };
      case ACTIONS.EMPTY:
        console.log("default");
        return { data: users.data, empty: action.payload };
    }
  }

  const [users, dispatch] = useReducer(reducer, {data, empty:false});
  const [person, setPerson] = useState("")
  // me esta metiendo a mi data un array con los otros tres elementos
function handleSubmit(e) {
  e.preventDefault()
  addUser();
setPerson("")
}

function addUser() {
  if(person) {
    dispatch({ type: ACTIONS.ADD, payload: {name:person, id: Date.now()} });
  } else {
    dispatch({ type: ACTIONS.EMPTY, payload: true });
  }
}

function removeUser(id){
  const newUsers = users.data.filter((user) => user.id !== id)
  console.log(newUsers);
      dispatch({ type: ACTIONS.REMOVE, payload: newUsers });
}
console.log("user");
console.log(users);
console.log("user data");
console.log(users.data);
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          type="text"
          name=""
          id=""
        />
        <button>submit</button>
      </form>
      <div>
        {users.empty && <Modal />}
        {users.data.map((person) => {
          const { id, name } = person;
          return (
            <div style={{ margin: "1rem" }} key={id}>
              <span key={id}>{name}</span>
              <button
                onClick={() => {
                  removeUser(id);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
