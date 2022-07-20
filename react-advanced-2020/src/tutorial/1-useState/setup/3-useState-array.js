import React, { useState } from "react";
import UserData from "../../../data";

const UseStateArray = () => {
  const [Users, setUsers] = useState(UserData);

  function removeUserFunc(id) {
    const FilterMap = Users.filter((user) => {
      return user.id !== id;
    });
    setUsers(FilterMap);
  }

  const UserMap = Users.map((user) => {
    return <User removeUser={removeUserFunc} {...user} key={user.id} />;
  });

  return (
    <div className="container">
      <div className="container">{UserMap}</div>
      <button onClick={() => setUsers([])}>Remove All</button>
      <button onClick={() => setUsers(UserData)}>Add All</button>
    </div>
  );
};

function User({ name, removeUser, id }) {
  return (
    <div>
      <span>{`${name} ----------------------- `}</span>
      <button onClick={() => removeUser(id)}>remove</button>
    </div>
  );
}

export default UseStateArray;
