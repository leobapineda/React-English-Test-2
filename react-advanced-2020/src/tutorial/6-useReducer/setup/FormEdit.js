import React from "react";
import { useState } from "react";

function FormEdit({ id, listTodos, setEditTodo }) {
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [newName, setNewName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTodos = listTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          name: newName,
        };
      }
      return todo;
    });
    setEditTodo(newTodos);
    setIsEditTodo((prev) => !prev);

  }

  function editTodo() {
    setIsEditTodo((prev) => !prev);
  }
  return (
    <>
      <button onClick={editTodo}>edit</button>
      {isEditTodo && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input onChange={(e) => setNewName(e.target.value)} type="text" />
        </form>
      )}
    </>
  );
}

export default FormEdit;
