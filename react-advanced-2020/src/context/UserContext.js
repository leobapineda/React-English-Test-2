import { createContext } from "react";

// crear context
const userContext = createContext({
  name: null,
  age: null,
});

// export contect
export default userContext;