import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(url);
      console.log(response);
      const users = await response.json();
      console.log(users);
      setUsers(users);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {users.map((user) => {
        const { login, id, avatar_url } = user;
        return (
          <div key={id}>
            <span>{`${id} `}</span>
            <span>{login}</span>
            <div>
              <img
                style={{ width: "150px", height: "150px" }}
                src={avatar_url}
                alt={login}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UseEffectFetchData;

// .then((response) => response.json())
// .then((data) => {
//   setUsers(data);
//   console.log(data);
// })
// .catch((err) => console.log(err));
