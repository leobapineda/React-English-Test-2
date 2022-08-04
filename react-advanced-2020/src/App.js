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

import React, { useContext } from "react";
import MoreInfo from "./components/MoreInfo";
// custom hook
import userContext from "./context/UserContext";

function App() {
  const userDate = {
    name: "leo",
    age: 24,
  };

  console.log(userContext);
  return (
    <userContext.Provider value={userDate}>
      <h1>useContext</h1>
      <MoreInfo />
    </userContext.Provider>
  );
}
export default App;
