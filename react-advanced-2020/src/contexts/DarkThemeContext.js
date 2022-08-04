import React, { useState, useContext, createContext } from "react";

export const ThemeContext = createContext();

export const useThemeHook = () => {
  return useContext(ThemeContext);
};


export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  function ThemeToogle() {
    setTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ theme, ThemeToogle }}>
        {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
