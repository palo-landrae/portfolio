import { createContext, useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

export function ThemeWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        theme: darkMode,
        setTheme: setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
