import { createContext } from "react";

import { THEMES } from "./constants";

export const theme = THEMES.LIGHT;

export default createContext({
  theme,
  toggleTheme: () => {
    // Implemented in Layout component
  }
});
