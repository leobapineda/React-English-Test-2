import React, { useReducer, useState, useRef } from "react";
// ---------->>>
import Modal from "./Modal";
import data from "../../../data";
import reducer from "./reducer";
const Index = () => {
  const ACTIONS = {
    ADD: "add user",
    REMOVE: "remove user",
    ERROR: "error",
    HIDE_MESSAGE: "hide",
    REMOVE: "remove",
  };

  const usersInitValue = {
    users: data,
    isModal: false,
    modalMessage: "",
  };

  const [usersState, dispatch] = useReducer(reducer, usersInitValue);
  const inputEl = useRef(null);

 

  function handleSubmit(e) {
    e.preventDefault();
    const userName = inputEl.current.value;
    if (userName) {
      dispatch({
        type: ACTIONS.ADD,
        payload: {
          name: userName,
          id: Date.now(),
        },
      });
    } else {
      dispatch({ type: ACTIONS.ERROR, payload: "MUST PROVIDE USERNAME" });
    }
    setTimeout(() => {
      dispatch({ type: ACTIONS.HIDE_MESSAGE });
    }, 1000);
  }

  function removeUser(id) {
    const newUsers = usersState.users.filter((user) => user.id !== id);
    dispatch({ type: ACTIONS.REMOVE, payload: newUsers });
  }

  console.log("render");
  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input ref={inputEl} type="text" />
      </form>
      <Modal show={usersState.isModal} message={usersState.modalMessage} />
      <div className="item">{usersState.users.length}</div>
      <div>
        {usersState.users.map((user) => {
          const { id, name } = user;
          return (
            <div className="item" style={{ margin: "1rem" }} key={id}>
              <span style={{ marginRight: "1rem" }}>{name}</span>
              <button onClick={() => removeUser(id)}>remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;

// move the reduce logic to another componenet