import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { useRef } from "react";

function App() {
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setItemId] = useState("");
  const inputRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!isEdit) {
      const newItem = { item: inputRef.current.value, id: Date.now() };
      setList((prev) => {
        return [...prev, newItem];
      });
      inputRef.current.value = "";
    } else if (isEdit) {
      const newItemValue = inputRef.current.value;
      const newItems = list.map((stuff) => {
        if (stuff.id === itemId) {
          return { ...stuff, item: newItemValue };
        }
        return stuff;
      });
      setList(newItems);
      setIsEdit(false);
      inputRef.current.value = "";
    }
  }

  function handleRemove(id) {
    const newItems = list.filter((item) => item.id !== id);
    setList(newItems);
  }

  function handleEdit(id, item) {
    inputRef.current.value = item;
    setIsEdit(true);
    setItemId(id);
  }

  return (
    <>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input ref={inputRef} type="text" />
          <button>{isEdit ? "EDIT" : "ADD"}</button>
        </form>
      </section>
      <section>
        <List
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          items={list}
        />
      </section>
      {list.length > 0 && (
        <button onClick={() => setList([])}>REMOVE ALL </button>
      )}
    </>
  );
}

export default App;
