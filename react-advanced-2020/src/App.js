// import React from "react";
// // import Setup from "./tutorial/9-custom-hooks/final/1-fetch-example";
// import Setup from "./tutorial/11-react-router/setup";

// function App() {
//   return (
//       <Setup />
//   );
// }
// export default App;
import React, { useState, useCallback } from "react";
import List from "./List";

function App() {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const styleTheme = {
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setIsDark((prev) => !prev)}>toggle theme</button>
      <div style={styleTheme}>
        <List getItems={getItems} />
      </div>
    </>
  );
}

export default App;
