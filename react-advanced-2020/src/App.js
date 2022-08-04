// import React from "react";
// import Setup from "./tutorial/8-useContext/setup/1-context-api";
// // import Setup from "./tutorial/8-useContext/final/1-context-api";

// function App() {
//   return (
//     <>
//       <Setup />
//     </>
//   );
// }
// export default App;

import React, { useEffect, useState } from "react";

const itemApi = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve([
        { gruopId: 1, nombre: "Mario" },
        { gruopId: 2, nombre: "Lucia" },
        { gruopId: 1, nombre: "Luis" },
        { gruopId: 1, nombre: "Carmen" },
        { gruopId: 3, nombre: "Boris" },
        { gruopId: 2, nombre: "Oscar" },
      ]);
    }, 500);
  });

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiData = await itemApi();

      const newApiData = [[], [], []];
      apiData.map((user) => {
        if (user.gruopId === 1) {
          newApiData[0].push(user);
        } else if (user.gruopId === 2) {
          newApiData[1].push(user);
        } else {
          newApiData[2].push(user);
        }
      });
      setUsers(newApiData);
    }
    fetchData();
  }, []);
  console.log("render");
  return (
    <div>
      {users.map((userArray, index) => {
        return (
          <div key={index}>
            <h4 style={{ margin: "0", marginTop: "1rem" }}>
              Group {index + 1}:
            </h4>
            <ul>
              {userArray.map((user) => {
                return <li key={user.nombre}>{user.nombre}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
