// contexts/Theme.jsx

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

const useTheme = function useTheme() {
  return useContext(ThemeContext);
};

export default useTheme;
