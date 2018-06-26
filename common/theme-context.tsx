import { createContext } from "react";

export const theme = "light";

export const ThemeContext = createContext({
  theme,
  toggleTheme: () => {
    // Implemented in Layout component
  }
});
