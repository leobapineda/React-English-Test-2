import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { toBeRequired } from "@testing-library/jest-dom";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState();
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: "", type: "" });

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (!name && isEditing) {
      // deal with edit
    } else {
      const newItem = { id: Date.now(), title: name };
      setList([...list, newItem]);
      showAlert(true, "success", "item added to list" );
      setName("")
    }
  }

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg});
  }

  function clearList() {
      setList([]);
      showAlert(true, "danger", "Empty List");
  }

  return (
    <section className="section-center">
      <form onSubmit={(e) => handleSubmit(e)} className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery dub</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn">
            {isEditing ? "edit item" : "add item"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button onClick={clearList} className="clear-btn">Clear List</button>
        </div>
      )}
    </section>
  );
}

export default App;
