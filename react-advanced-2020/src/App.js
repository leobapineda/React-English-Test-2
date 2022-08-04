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

import React from "react";
import Theme from "./Theme";
import ThemeProvider from "./contexts/DarkThemeContext";
function App() {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  );
}

export default App;
