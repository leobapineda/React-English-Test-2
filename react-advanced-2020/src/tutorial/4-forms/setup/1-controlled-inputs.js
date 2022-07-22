import React, { useState } from "react";

// form with two inputs, when enter, render a component

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const trimName = name.trim();
    const trimAge = age.trim();
    if (!trimName || !trimAge) {
      setError((prevError) => !prevError);
      setTimeout(() => {
        setError((prevError) => !prevError);
      }, 1000);
      return;
    }

    setUsers((prevUsers) => {
      return [...prevUsers, { name, age, id: new Date().getTime().toString() }];
    });
    setName("");
    setAge("");
    return;
  }

  function removeUser(id) {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name: </label>
          <input
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age....: </label>
          <input
            onChange={(e) => setAge(e.target.value)}
            required
            value={age}
            type="text"
            name="age"
            id="age"
          />
        </div>
        <br />
        <button>add person</button>
      </form>
      {error && <div>must provide name and age</div>}
      <div>
        <div>
          {users.map((user) => {
            const { name, age, id } = user;
            return (
              <div className="item" key={id}>
                <span>{`${name} ------ `}</span>
                <span>{`${age}   `}</span>
                <button onClick={() => removeUser(id)}>Remove</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ControlledInputs;
