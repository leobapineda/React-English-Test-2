import { getByDisplayValue } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useReducer } from "react";
import { useState } from "react";
import FormEdit from "./FormEdit";
// ---------->>>
// import Modal from './Modal';
// import { data } from '../../../data';
// reducer function
// ---------->>>
const Index = () => {
  const ACTION = { 
    ADD: "add",
    REMOVE: "remove",
    COMPLETE: "complete",
    EDIT: "edit",
  };
  function reducer(todos, action) {
      switch (action.type) {
        case ACTION.ADD:
          return [
            ...todos,
            { name: action.payload.name, id: Date.now(), completed: false },
          ];
        case ACTION.REMOVE:
          return action.payload;
        case ACTION.COMPLETE:
          return action.payload;
        case ACTION.EDIT:
          return action.payload;
        default:
          throw new Error();
      }
  }

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo();
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  
  function addTodo() {
    dispatch({ type: ACTION.ADD, payload: { name: name } });
  }

  function removeTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id)
    dispatch({ type: ACTION.REMOVE, payload: newTodos });
  }

  function completeTodo(id) {
    console.log(id);
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        console.log("igual");
        return {
          ...todo,
          completed : !todo.completed
        };
      }
      return todo;
    })
    dispatch({ type: ACTION.COMPLETE, payload: newTodos });
  }

  function editTodo(newTodos) {
    dispatch({ type: ACTION.EDIT, payload: newTodos });
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={name} onChange={(e) => handleChange(e)} type="text" />
        <button>submit</button>
      </form>
      <div>{`No de todos: ${todos.length}`}</div>
      <div>
        {todos.map((todo) => {
          const { name, id, completed } = todo;
          return (
            <div key={id}>
              <input
                defaultChecked={completed}
                onChange={() => completeTodo(id)}
                type="checkbox"
                name="name"
                id=""
              />
              <span
                style={{ margin: "1rem", color: completed ? "red" : "black" }}
              >
                {name}
              </span>
              <button onClick={() => removeTodo(id)}>remove</button>
              <FormEdit
                setEditTodo={editTodo}
                id={id}
                listTodos={todos}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
