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
  const [data, setData] = useState([]);
  // obtener al renderizar
  // una vez obtenida modificar

  useEffect(() => {
    const apiRes = itemApi()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
    console.log(data);
    // const newArray = data.map((user) => {
    //   let group1 = [];
    //   let group2 = [];
    //   let group3 = [];
    //   if (user.gruopId === 1) {
    //     group1.push(user);
    //   } else if (user.gruopId === 2) {
    //     group2.push(user);
    //   } else if (user.gruopId === 3) {
    //     group3.push(user);
    //   }
    //   return [1, 2, 3];
    // });
    // console.log(newArray);

    // no me regresa un array, porque
  }, []);

      let group1 = [];
      let group2 = [];
      let group3 = [];

  data.map((user) => {
    if (user.gruopId === 1) {
      group1.push(user);
    } else if (user.gruopId === 2) {
      group2.push(user);
    } else if (user.gruopId === 3) {
      group3.push(user);
    }
    return 
  });

  let newArray = [group1, group2, group3];
  console.log(newArray);
  // ya tengo el array
    // por cada array me tiene que dar un nuevo nuevo h1
  
  console.log(data);

  return <div>{newArray.map((arrayUsers, index) => {
    return (
      <div key={index}>
        <h4>group {index + 1}</h4>
        <ul>
          {arrayUsers.map((user) => {
            const { gruopId, nombre } = user;
            return <li key={nombre}>{nombre}</li>;
          })}
        </ul>
      </div>
    );
    // por cada array regresar un 
    // h1
    // ul


  })}</div>;
}

// group 1:
// ul
// li name
// li name


export default App;
