// import React from "react";
// import Setup from "./tutorial/9-custom-hooks/final/1-fetch-example";
// // import Setup from "./tutorial/9-custom-hooks/setup/1-fetch-example";

// function App() {
//   return (
//     <>
//       <Setup />
//     </>
//   );
// }
// export default App;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
function App() {
  const [local, setLocal] = useLocalStorage("valor", "")

  return (
    <>
      <input
        onChange={(e) => setLocal(e.target.value)}
        type="text"
        name=""
        id=""
        value={local}
      />
    </>
  );
}
export default App;


