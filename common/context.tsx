import { createContext } from "react";

export const theme = "light";

export default createContext({
  theme,
  toggleTheme: () => {
    // Implemented in Layout component
  }
});
