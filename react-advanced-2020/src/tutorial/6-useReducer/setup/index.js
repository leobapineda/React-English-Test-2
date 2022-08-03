import React, { useReducer, useRef } from "react";
import { useEffect } from "react";
import Modal from "./Modal";
import reducer from "./reducer";
const Index = () => {
  let localTodos = JSON.parse(localStorage.getItem("todos"));

  let initialState = {
    todos: localTodos || [],
    modal: { showModal: false, modalMessage: "", modalColor: "" },
  };

  const ACTIONS = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    EMPTY: "EMPTY",
    HIDE: "HIDE",
  };

  const inputValueRef = useRef("");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // const local = ;
    console.log();
  }, []);

  useEffect(() => {
    console.log("localStorage");
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state]);

  // cada vez que hay un cambio en mi state

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValueRef.current.value) {
      addTodo();
    } else {
      dispatch({
        type: ACTIONS.EMPTY,
        payload: {
          modal: showModal(true, "must add todo text", "red"),
        },
      });
    }
    inputValueRef.current.value = "";
  }

  function addTodo() {
    let todoText = inputValueRef.current.value;
    const newTodo = { text: todoText, id: Date.now() };
    dispatch({
      type: ACTIONS.ADD,
      payload: {
        newTodo,
        modal: showModal(true, "todo added", "green"),
      },
    });
  }

  function removeTodo(id) {
    // map en todo mi array
    const newTodos = state.todos.filter((todo) => todo.id !== id);
    dispatch({
      type: ACTIONS.REMOVE,
      payload: {
        todos: newTodos,
        modal: showModal(true, "todo removed", "red"),
      },
    });
    // filtrar
    // volver a poner mis todos
  }

  function showModal(show, message, color) {
    return { showModal: show, modalMessage: message, modalColor: color };
  }

  function hideModal() {
    // console.log("hideModal");
    dispatch({
      type: ACTIONS.HIDE,
      payload: {
        modal: showModal(false, "", ""),
      },
    });
  }

  // console.log("render ");
  return (
    <>
      <h1>todo list</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input ref={inputValueRef} type="text" />
        <button>add item</button>
      </form>
      <section>
        <Modal {...state.modal} hideModal={hideModal} />
      </section>
      <section>
        {state.todos.map((todo) => {
          const { id, text } = todo;
          return (
            <article key={id}>
              <span>{text}</span>
              <button onClick={() => removeTodo(id)}>remove</button>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Index;
